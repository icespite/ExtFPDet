(function (g) {
  var window = this;
  'use strict';
  var Hob = function (a) {
      var b = new g.mH("und", new g.sJ("Default", "und", !0));
      b.captionTracks = a.captionTracks;
      return b;
    },
    Iob = function (a) {
      return new g.Lf(function (b, c) {
        var d = a.length,
          e = [];
        if (d) for (var f = function (n, p) {
            d--;
            e[n] = p;
            0 == d && b(e);
          }, h = function (n) {
            c(n);
          }, l = 0, m; l < a.length; l++) m = a[l], g.qca(m, g.bb(f, l), h);else b(e);
      });
    },
    T6 = function (a) {
      this.j = a;
    },
    U6 = function () {
      T6.apply(this, arguments);
    },
    Job = function () {
      U6.apply(this, arguments);
    },
    Kob = function () {
      U6.apply(this, arguments);
    },
    Lob = function () {
      U6.apply(this, arguments);
    },
    Mob = function () {
      T6.apply(this, arguments);
    },
    Nob = function () {
      U6.apply(this, arguments);
    },
    Oob = function () {
      U6.apply(this, arguments);
    },
    Pob = function () {
      U6.apply(this, arguments);
    },
    Qob = function () {
      U6.apply(this, arguments);
    },
    Rob = function () {
      U6.apply(this, arguments);
    },
    Sob = function () {
      U6.apply(this, arguments);
    },
    Tob = function () {
      U6.apply(this, arguments);
    },
    Uob = function () {
      U6.apply(this, arguments);
    },
    Vob = function () {
      U6.apply(this, arguments);
    },
    Wob = function () {
      U6.apply(this, arguments);
    },
    Xob = function () {
      T6.apply(this, arguments);
    },
    Yob = function () {
      U6.apply(this, arguments);
    },
    Zob = function () {
      U6.apply(this, arguments);
    },
    $ob = function () {
      U6.apply(this, arguments);
    },
    apb = function () {
      U6.apply(this, arguments);
    },
    bpb = function () {
      U6.apply(this, arguments);
    },
    cpb = function () {
      U6.apply(this, arguments);
    },
    dpb = function () {
      U6.apply(this, arguments);
    },
    epb = function () {
      U6.apply(this, arguments);
    },
    fpb = function () {
      U6.apply(this, arguments);
    },
    gpb = function () {
      T6.apply(this, arguments);
    },
    hpb = function () {
      T6.apply(this, arguments);
    },
    ipb = function () {
      T6.apply(this, arguments);
    },
    jpb = function () {
      U6.apply(this, arguments);
    },
    kpb = function () {
      U6.apply(this, arguments);
    },
    lpb = function () {
      U6.apply(this, arguments);
    },
    mpb = function () {
      U6.apply(this, arguments);
    },
    npb = function () {
      U6.apply(this, arguments);
    },
    opb = function () {
      U6.apply(this, arguments);
    },
    ppb = function () {
      U6.apply(this, arguments);
    },
    qpb = function () {
      U6.apply(this, arguments);
    },
    rpb = function () {
      U6.apply(this, arguments);
    },
    spb = function () {
      U6.apply(this, arguments);
    },
    tpb = function () {
      U6.apply(this, arguments);
    },
    upb = function () {
      U6.apply(this, arguments);
    },
    vpb = function () {
      U6.apply(this, arguments);
    },
    wpb = function () {
      U6.apply(this, arguments);
    },
    xpb = function () {
      U6.apply(this, arguments);
    },
    ypb = function () {
      U6.apply(this, arguments);
    },
    zpb = function () {
      U6.apply(this, arguments);
    },
    Apb = function () {
      U6.apply(this, arguments);
    },
    Bpb = function () {
      U6.apply(this, arguments);
    },
    Cpb = function () {
      U6.apply(this, arguments);
    },
    Dpb = function () {
      U6.apply(this, arguments);
    },
    Epb = function () {
      U6.apply(this, arguments);
    },
    Fpb = function () {
      T6.apply(this, arguments);
    },
    Gpb = function () {
      U6.apply(this, arguments);
    },
    Hpb = function () {
      U6.apply(this, arguments);
    },
    Ipb = function () {
      U6.apply(this, arguments);
    },
    Jpb = function () {
      U6.apply(this, arguments);
    },
    Kpb = function () {
      U6.apply(this, arguments);
    },
    Lpb = function () {
      U6.apply(this, arguments);
    },
    Mpb = function () {
      U6.apply(this, arguments);
    },
    Npb = function () {
      U6.apply(this, arguments);
    },
    Opb = function () {
      U6.apply(this, arguments);
    },
    Ppb = function () {
      U6.apply(this, arguments);
    },
    Qpb = function () {
      U6.apply(this, arguments);
    },
    Rpb = function () {
      U6.apply(this, arguments);
    },
    Spb = function () {
      U6.apply(this, arguments);
    },
    Tpb = function () {
      U6.apply(this, arguments);
    },
    Upb = function () {
      U6.apply(this, arguments);
    },
    Vpb = function () {
      U6.apply(this, arguments);
    },
    Wpb = function () {
      U6.apply(this, arguments);
    },
    Xpb = function () {
      U6.apply(this, arguments);
    },
    Ypb = function () {
      U6.apply(this, arguments);
    },
    Zpb = function () {
      U6.apply(this, arguments);
    },
    $pb = function () {
      U6.apply(this, arguments);
    },
    aqb = function (a) {
      return g.lD((0, g.Wgb)(), a);
    },
    V6 = function (a) {
      this.token = a;
    },
    bqb = function (a) {
      a = a.key || a.id;
      if (!a) throw Error("Entity key is missing");
      return a;
    },
    cqb = function () {
      if (W6) return W6();
      var a = {};
      W6 = g.vD("PersistentEntityStoreDb", {
        zr: (a.EntityStore = {
          Um: 1
        }, a.EntityAssociationStore = {
          Um: 2
        }, a),
        shared: !1,
        upgrade: function (b, c) {
          c(1) && g.fD(g.$C(b, "EntityStore", {
            keyPath: "key"
          }), "entityType", "entityType");
          c(2) && (b = g.$C(b, "EntityAssociationStore", {
            keyPath: ["parentEntityKey", "childEntityKey"]
          }), g.fD(b, "byParentEntityKey", "parentEntityKey"), g.fD(b, "byChildEntityKey", "childEntityKey"));
        },
        version: 3
      });
      return W6();
    },
    dqb = function (a) {
      return g.lD(cqb(), a);
    },
    X6 = function (a, b) {
      b = void 0 === b ? {} : b;
      g.dC.call(this, g.fhb[a], Object.assign({}, {
        name: "PESEncoderError",
        type: a
      }, b));
      this.type = a;
      this.level = "WARNING";
      Object.setPrototypeOf(this, X6.prototype);
    },
    eqb = function (a) {
      return new X6("WRONG_DATA_TYPE", {
        p5: a
      });
    },
    fqb = function (a) {
      return a instanceof Error ? new X6("UNKNOWN_ENCODE_ERROR", {
        WP: a.message
      }) : new X6("UNKNOWN_ENCODE_ERROR");
    },
    gqb = function (a) {
      return a instanceof Error ? new X6("UNKNOWN_DECODE_ERROR", {
        WP: a.message
      }) : new X6("UNKNOWN_DECODE_ERROR");
    },
    hqb = function (a, b) {
      a = a instanceof X6 ? a : b(a);
      g.UF(a);
      throw a;
    },
    iqb = function () {},
    jqb = function (a, b, c) {
      try {
        return a.C(b, c);
      } catch (d) {
        hqb(d, fqb);
      }
    },
    kqb = function (a) {
      a = new TextEncoder().encode(a).subarray(0, 16);
      var b = new Uint8Array(16);
      b.set(a);
      return b;
    },
    Y6 = function (a) {
      this.j = a;
    },
    mqb = function (a) {
      var b = lqb[a];
      if (b) return b;
      g.VF(new g.dC("Entity model not found.", {
        entityType: a
      }));
    },
    nqb = function (a, b) {
      this.j = a;
      this.B = b;
      this.C = {};
    },
    pqb = function (a, b) {
      a: {
        a = oqb(a.B, b.version);
        try {
          var c = a.B(b.data, b.key);
          break a;
        } catch (d) {
          hqb(d, gqb);
        }
        c = void 0;
      }
      return c;
    },
    Z6 = function (a, b, c) {
      return a.j.objectStore("EntityStore").get(b).then(function (d) {
        if (d) {
          if (c && d.entityType !== c) throw Error("Incorrect entity type");
          return pqb(a, d);
        }
      });
    },
    $6 = function (a, b, c) {
      return c ? (c = c.map(function (d) {
        return Z6(a, d, b);
      }), g.HC.all(c)) : a.j.objectStore("EntityStore").index("entityType").getAll(IDBKeyRange.only(b)).then(function (d) {
        return d.map(function (e) {
          return pqb(a, e);
        });
      });
    },
    b7 = function (a, b, c) {
      var d = bqb(b),
        e = oqb(a.B, 1),
        f = Object.assign({}, b);
      return a.j.objectStore("EntityStore").get(d).then(function (h) {
        if (h) {
          if (h.entityType !== c) throw Error("Incorrect entity type");
          f.entityMetadata || (h = pqb(a, h), f.entityMetadata = h.entityMetadata);
        }
      }).then(function () {
        var h = {
          key: d,
          entityType: c,
          data: jqb(e, f, d),
          version: 1
        };
        return g.HC.all([g.cD(a.j.objectStore("EntityStore"), h), qqb(a, f, c)]);
      }).then(function () {
        a7(a, d, c);
        return d;
      });
    },
    rqb = function (a, b, c) {
      b = b.map(function (d) {
        return b7(a, d, c);
      });
      return g.HC.all(b);
    },
    c7 = function (a, b, c) {
      if (null == c ? 0 : c.zv) {
        var d = new Set();
        return sqb(a, b, d).then(function () {
          for (var f = [], h = g.v(d), l = h.next(); !l.done; l = h.next()) f.push(c7(a, l.value));
          return g.HC.all(f).then(function () {});
        });
      }
      var e = g.JM(b).entityType;
      return g.HC.all([a.j.objectStore("EntityStore").delete(b), tqb(a, b)]).then(function () {
        a7(a, b, e);
      });
    },
    uqb = function (a, b) {
      return g.iD(a.j.objectStore("EntityStore").index("entityType"), {
        query: IDBKeyRange.only(b)
      }, function (c) {
        return g.HC.all([c.delete(), tqb(a, c.DH())]).then(function () {
          a7(a, c.DH(), b);
          return c.continue();
        });
      });
    },
    vqb = function (a, b, c, d) {
      var e = oqb(a.B, 1);
      return Z6(a, b, d).then(function (f) {
        if (f) {
          f = g.Dza(f, c);
          var h = {
            key: b,
            entityType: d,
            data: jqb(e, f, b),
            version: 1
          };
          return g.HC.all([g.cD(a.j.objectStore("EntityStore"), h), qqb(a, f, d)]);
        }
      }).then(function () {
        a7(a, b, d);
        return b;
      });
    },
    a7 = function (a, b, c) {
      var d = a.C[c];
      d || (d = new Set(), a.C[c] = d);
      d.add(b);
    },
    wqb = function (a, b, c) {
      var d = bqb(b);
      c = mqb(c);
      if (!c) return g.HC.resolve([]);
      c = new c(b);
      a = a.j.objectStore("EntityAssociationStore");
      b = [];
      c = g.v(c.B());
      for (var e = c.next(); !e.done; e = c.next()) b.push(g.cD(a, {
        parentEntityKey: d,
        childEntityKey: e.value
      }));
      return g.HC.all(b).then(function (f) {
        return f.map(function (h) {
          return h[1];
        });
      });
    },
    tqb = function (a, b) {
      return a.j.objectStore("EntityAssociationStore").index("byParentEntityKey").delete(IDBKeyRange.only(b));
    },
    qqb = function (a, b, c) {
      var d = bqb(b);
      return tqb(a, d).then(function () {
        return wqb(a, b, c);
      });
    },
    sqb = function (a, b, c) {
      if (c.has(b)) return g.HC.resolve(void 0);
      c.add(b);
      return xqb(a, b).then(function (d) {
        return a.j.objectStore("EntityAssociationStore").index("byParentEntityKey").delete(IDBKeyRange.only(b)).then(function () {
          return d;
        });
      }).then(function (d) {
        var e = g.HC.resolve(void 0);
        d = g.v(d);
        for (var f = d.next(), h = {}; !f.done; h = {
          ZP: h.ZP
        }, f = d.next()) h.ZP = f.value, e = e.then(function (l) {
          return function () {
            return sqb(a, l.ZP, c);
          };
        }(h));
        return e;
      }).then(function () {});
    },
    xqb = function (a, b) {
      var c = a.j.objectStore("EntityAssociationStore");
      return c.index("byParentEntityKey").getAll(IDBKeyRange.only(b)).then(function (d) {
        var e = [];
        d = g.v(d);
        for (var f = d.next(); !f.done; f = d.next()) f = f.value, e.push(c.index("byChildEntityKey").getAll(f.childEntityKey));
        return g.HC.all(e);
      }).then(function (d) {
        var e = [];
        d = g.v(d);
        for (var f = d.next(); !f.done; f = d.next()) f = f.value, 1 === f.length && e.push(f[0].childEntityKey);
        return e;
      });
    },
    d7 = function () {},
    yqb = function () {
      this.j = {};
      this.j[0] = new d7();
      if (!g.fA("aes_pes_encoder_killswitch")) {
        var a = this.j;
        try {
          var b = g.eC();
          var c = kqb(b);
          var d = new Y6(new g.cL(c), new g.bL(c));
        } catch (e) {
          throw a = e instanceof Error ? new X6("KEY_CREATION_FAILED", {
            WP: e.message
          }) : new X6("KEY_CREATION_FAILED"), g.UF(a), a;
        }
        a[1] = d;
      }
    },
    oqb = function (a, b) {
      b = void 0 === b ? 0 : b;
      a = a.j[b];
      if (!a) throw b = new X6("INVALID_ENCODER_VERSION", {
        p5: b
      }), g.UF(b), b;
      return a;
    },
    e7 = function (a, b) {
      g.G.call(this);
      this.token = a;
      this.j = b;
      this.observers = [];
      a = new g.Pa.BroadcastChannel("PERSISTENT_ENTITY_STORE_SYNC:" + g.eC());
      a.onmessage = this.B.bind(this);
      this.channel = a;
    },
    f7 = function (a, b, c) {
      var d, e, f, h;
      return g.Ga(function (l) {
        if (1 == l.j) return g.z(l, dqb(a.token), 2);
        if (3 != l.j) return d = l.B, g.z(l, g.bD(d, ["EntityStore", "EntityAssociationStore"], b, function (m) {
          e = new nqb(m, a.j);
          return c(e);
        }), 3);
        f = l.B;
        e && (h = e.C, 0 < Object.keys(h).length && (a.channel.postMessage(h), zqb(a, h)));
        return l.return(f);
      });
    },
    Aqb = function (a, b) {
      a.observers.push(b);
      return function () {
        var c = a.observers.indexOf(b);
        0 <= c && a.observers.splice(c, 1);
      };
    },
    g7 = function (a, b, c) {
      return f7(a, {
        mode: "readwrite",
        kc: !0
      }, function (d) {
        return b7(d, b, c);
      });
    },
    Bqb = function (a, b) {
      return f7(a, {
        mode: "readwrite",
        kc: !0
      }, function (c) {
        return rqb(c, b, "offlineOrchestrationActionWrapperEntity");
      });
    },
    Cqb = function (a, b) {
      return f7(a, {
        mode: "readwrite",
        kc: !0
      }, function (c) {
        return c7(c, b);
      });
    },
    h7 = function (a, b, c) {
      return f7(a, {
        mode: "readonly",
        kc: !0
      }, function (d) {
        return Z6(d, b, c);
      });
    },
    i7 = function (a, b, c) {
      return f7(a, {
        mode: "readonly",
        kc: !0
      }, function (d) {
        return $6(d, b, c);
      });
    },
    zqb = function (a, b) {
      a = g.v(a.observers);
      for (var c = a.next(); !c.done; c = a.next()) c = c.value, c(b);
    },
    Dqb = function () {
      var a, b, c;
      return g.Ga(function (d) {
        if (1 == d.j) return g.ya(d, 2), g.z(d, g.tD(), 4);
        if (2 != d.j) {
          a = d.B;
          if (!a || !g.fC() || "undefined" === typeof g.Pa.BroadcastChannel) return d.return();
          b = new yqb();
          return d.return(new e7(a, b));
        }
        c = g.Aa(d);
        c instanceof Error && g.UF(c);
        return d.return();
      });
    },
    j7 = function () {
      Eqb || (Eqb = Dqb());
      return Eqb;
    },
    Fqb = function (a) {
      var b;
      a = null == (b = a.options) ? void 0 : b.persistenceOption;
      return "ENTITY_PERSISTENCE_OPTION_PERSIST" === a || "ENTITY_PERSISTENCE_OPTION_INMEMORY_AND_PERSIST" === a;
    },
    Gqb = function (a) {
      var b;
      return g.Ga(function (c) {
        return 1 == c.j ? g.z(c, j7(), 2) : (b = c.B) ? g.z(c, f7(b, "readwrite", function (d) {
          for (var e = {}, f = g.v(a), h = f.next(), l = {}; !h.done; l = {
            Aj: l.Aj,
            mA: l.mA
          }, h = f.next()) l.Aj = h.value, l.Aj.entityKey && Fqb(l.Aj) && (l.mA = g.Yc(l.Aj.payload), h = void 0, "ENTITY_MUTATION_TYPE_REPLACE" === l.Aj.type && (h = function (m) {
            return function () {
              return b7(d, m.Aj.payload[m.mA], m.mA);
            };
          }(l)), "ENTITY_MUTATION_TYPE_DELETE" === l.Aj.type && (h = function (m) {
            return function () {
              return c7(d, m.Aj.entityKey);
            };
          }(l)), "ENTITY_MUTATION_TYPE_UPDATE" === l.Aj.type && (h = function (m) {
            return function () {
              return vqb(d, m.Aj.entityKey, m.Aj.payload[m.mA], m.mA);
            };
          }(l)), h && (e[l.Aj.entityKey] = e[l.Aj.entityKey] ? e[l.Aj.entityKey].then(h) : h()));
          return g.HC.all(Object.values(e));
        }), 0) : c.return();
      });
    },
    Hqb = function (a) {
      var b;
      return g.Ga(function (c) {
        if (1 == c.j) {
          b = a.mutations;
          if (!b || 0 >= b.length) return c.return();
          if (g.vN) {
            var d = {
              type: "ENTITY_LOADED"
            };
            void 0 !== b && (d.payload = b);
            g.vN.dispatch(d);
          }
          return g.z(c, Gqb(b), 2);
        }
        b.length = 0;
        g.xa(c);
      });
    },
    Iqb = function (a) {
      return void 0 !== a;
    },
    Jqb = function (a) {
      var b = g.TM();
      b = Object.assign({}, b);
      a = Object.assign({}, a);
      for (var c in b) a[c] ? (4 !== b[c] && (b[c] = a[c]), delete a[c]) : 2 !== b[c] && (b[c] = 4);
      Object.assign(b, a);
      g.Vza(b);
      JSON.stringify(b);
      return b;
    },
    Kqb = function (a) {
      var b, c;
      return g.Ga(function (d) {
        if (1 == d.j) return g.z(d, g.tD(), 2);
        if (3 != d.j) return (b = d.B) ? g.z(d, g.WM(b), 3) : d.return();
        c = d.B;
        return d.return(g.bD(c, ["index", "media", "captions"], {
          mode: "readwrite",
          kc: !0
        }, function (e) {
          var f = IDBKeyRange.bound(a + "|", a + "~");
          e = [e.objectStore("index").delete(f), e.objectStore("media").delete(f), e.objectStore("captions").delete(f)];
          return g.HC.all(e).then(function () {});
        }));
      });
    },
    Lqb = function () {
      var a, b;
      return g.Ga(function (c) {
        if (1 == c.j) return g.z(c, g.tD(), 2);
        if (3 != c.j) {
          a = c.B;
          if (!a) throw g.FC("rvdfd");
          return g.z(c, g.WM(a), 3);
        }
        b = c.B;
        return c.return(g.bD(b, ["index", "media"], {
          mode: "readwrite",
          kc: !0
        }, function (d) {
          var e = {};
          return g.gD(d.objectStore("index"), {}, function (f) {
            var h = f.getKey().match(/^([\w\-_]+)\|(a|v)$/),
              l = g.HC.resolve(void 0);
            if (h) {
              var m = h[1];
              h = h[2];
              e[m] = e[m] || {};
              var n;
              e[m][h] = g.$za(null == (n = f.getValue()) ? void 0 : n.fmts);
            } else l = f.delete().then(function () {});
            return g.HC.all([f.continue(), l]).then(function (p) {
              return g.v(p).next().value;
            });
          }).then(function () {
            for (var f = {}, h = g.v(Object.keys(e)), l = h.next(); !l.done; l = h.next()) {
              l = l.value;
              var m = e[l].v;
              f[l] = e[l].a && m ? 1 : 2;
            }
            var n = Jqb(f);
            return g.Nna(d.objectStore("media"), {}, function (p) {
              var q = p.getKey().match(g.fAa);
              q && f[q[1]] || d.objectStore("media").delete(p.getKey());
              return p.continue();
            }).then(function () {
              return n;
            });
          });
        }));
      });
    },
    Mqb = function (a, b) {
      var c, d;
      return g.Ga(function (e) {
        if (1 == e.j) return g.z(e, g.tD(), 2);
        if (3 != e.j) {
          c = e.B;
          if (!c) throw g.FC("wct");
          return g.z(e, g.WM(c), 3);
        }
        d = e.B;
        return g.z(e, g.bD(d, ["captions"], {
          mode: "readwrite",
          kc: !0
        }, function (f) {
          var h = [];
          f = f.objectStore("captions");
          for (var l = 0; l < b.length; l++) {
            var m = g.cD(f, b[l], a + "|" + b[l].metadata.vss_id);
            h.push(m);
          }
          return g.HC.all(h);
        }), 0);
      });
    },
    Nqb = function (a) {
      var b, c, d;
      return g.Ga(function (e) {
        if (1 == e.j) return b = IDBKeyRange.bound(a + "|", a + "~"), g.z(e, g.tD(), 2);
        if (3 != e.j) {
          c = e.B;
          if (!c) throw g.FC("gactfv");
          return g.z(e, g.WM(c), 3);
        }
        d = e.B;
        return e.return(d.getAll("captions", b));
      });
    },
    Oqb = function (a) {
      return g.Ga(function (b) {
        g.VM(a, 0);
        return b.return(Kqb(a));
      });
    },
    Pqb = function (a) {
      return {
        context: g.EP(),
        videoIds: a
      };
    },
    Qqb = function (a) {
      return {
        context: g.EP(),
        playlistIds: a
      };
    },
    Rqb = function (a) {
      return {
        context: g.EP(),
        offlinePlaylistSyncChecks: a
      };
    },
    Sqb = function (a, b, c, d, e, f) {
      a = {
        entityKey: a
      };
      c && (a.refreshData = c);
      d && (a.isExpiredStreamUrlRefetch = d);
      e && (a.downloadParameters = e);
      f && (a.offlineSourceData = f);
      return {
        context: g.qMa(b),
        signatureTimestamp: 19585,
        videos: [a]
      };
    },
    k7 = function (a, b, c) {
      g.VF(new g.dC("Woffle: " + a, c ? {
        cotn: c
      } : ""));
      b instanceof Error && g.VF(b);
    },
    Tqb = function (a) {
      var b, c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta;
      return g.Ga(function (na) {
        if (1 == na.j) return g.z(na, f7(a, {
          mode: "readonly",
          kc: !0
        }, function (fa) {
          return $6(fa, "playbackData").then(function (ia) {
            var Da = ia.map(function (T) {
                return T.transfer;
              }).filter(function (T) {
                return !!T;
              }),
              ha = ia.map(function (T) {
                return T.offlineVideoPolicy;
              }).filter(function (T) {
                return !!T;
              });
            Da = $6(fa, "transfer", Da);
            ha = $6(fa, "offlineVideoPolicy", ha);
            return g.HC.all([Da, ha]).then(function (T) {
              var Wa = g.v(T);
              T = Wa.next().value;
              Wa = Wa.next().value;
              return [ia, T, Wa];
            });
          });
        }), 2);
        if (3 != na.j) return b = na.B, g.z(na, f7(a, {
          mode: "readonly",
          kc: !0
        }, function (fa) {
          return $6(fa, "mainDownloadsListEntity").then(function (ia) {
            var Da, ha;
            return null != (ha = null == (Da = ia[0]) ? void 0 : Da.downloads) ? ha : [];
          });
        }), 3);
        c = na.B;
        d = g.v(b);
        e = d.next().value;
        f = d.next().value;
        h = d.next().value;
        l = e;
        m = f;
        n = h;
        p = {};
        q = {};
        t = {};
        u = g.v(m);
        for (y = u.next(); !y.done; y = u.next()) (A = y.value) && (p[A.key] = A);
        E = g.v(n);
        for (L = E.next(); !L.done; L = E.next()) (I = L.value) && (q[I.key] = I);
        F = g.v(c);
        for (S = F.next(); !S.done; S = F.next()) Y = S.value, ea = void 0, t[null != (ea = Y.videoItem) ? ea : ""] = !0;
        ta = l.map(function (fa) {
          var ia = p[fa.transfer],
            Da = q[fa.offlineVideoPolicy],
            ha = g.JM(Da.key).entityId;
          fa = g.KM(ha, "mainVideoEntity");
          if ("OFFLINE_VIDEO_POLICY_ACTION_DISABLE" === Da.action) {
            var T = "OFFLINE_VIDEO_STATE_DISABLED";
            Da.expirationTimestamp && Number(Da.expirationTimestamp) < Date.now() / 1E3 && (T = "OFFLINE_VIDEO_STATE_EXPIRED");
            Da = T;
          } else if ("OFFLINE_VIDEO_POLICY_ACTION_DOWNLOAD_FAILED" === Da.action) Da = "OFFLINE_VIDEO_STATE_OFFLINE_FAILED";else {
            switch (null == ia ? void 0 : ia.transferState) {
              case "TRANSFER_STATE_TRANSFER_IN_QUEUE":
                T = "OFFLINE_VIDEO_STATE_PENDING";
                break;
              case "TRANSFER_STATE_TRANSFERRING":
                T = "OFFLINE_VIDEO_STATE_TRANSFERRING";
                break;
              case "TRANSFER_STATE_PAUSED_BY_USER":
                T = "OFFLINE_VIDEO_STATE_PAUSED_TRANSFER";
                break;
              case "TRANSFER_STATE_FAILED":
                T = "OFFLINE_VIDEO_STATE_OFFLINE_FAILED";
                break;
              case "TRANSFER_STATE_COMPLETE":
                T = "OFFLINE_VIDEO_STATE_PLAYABLE";
                break;
              case "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH":
                T = "OFFLINE_VIDEO_STATE_STREAMS_OUT_OF_DATE";
                break;
              default:
                T = "OFFLINE_VIDEO_STATE_UNKNOWN";
            }
            if ("OFFLINE_VIDEO_STATE_OFFLINE_FAILED" === T) switch (null == ia ? void 0 : ia.failureReason) {
              case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE":
              case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE":
                T = "OFFLINE_VIDEO_STATE_OUT_OF_STORAGE_ERROR";
                break;
              case "TRANSFER_FAILURE_REASON_STREAM_MISSING":
                T = "OFFLINE_VIDEO_STATE_STREAMS_MISSING";
                break;
              case "TRANSFER_FAILURE_REASON_NETWORK":
              case "TRANSFER_FAILURE_REASON_NETWORK_LOST":
                T = "OFFLINE_VIDEO_STATE_NETWORK_ERROR";
            }
            Da = T;
          }
          ha = {
            id: ha,
            videoState: Da
          };
          if (null == ia ? 0 : ia.cotn) ha.cotn = ia.cotn;
          if (null == ia ? 0 : ia.maximumDownloadQuality) ha.selectedVideoQuality = null == ia ? void 0 : ia.maximumDownloadQuality;
          ha.selectedOfflineMode = t[fa] ? "OFFLINE_MODE_TYPE_AUTO_OFFLINE" : "OFFLINE_NOW";
          return ha;
        });
        return na.return({
          offlineVideos: ta
        });
      });
    },
    Uqb = function (a) {
      var b;
      return g.Ga(function (c) {
        if (1 == c.j) return g.z(c, Tqb(a), 2);
        b = c.B;
        g.tC("offlineStateSnapshot", b);
        g.xa(c);
      });
    },
    l7 = function (a) {
      g.G.call(this);
      var b = this;
      this.api = a;
      this.Ud = {
        yeb: function () {
          return b.j;
        },
        Reb: function () {
          return b.B;
        }
      };
      "undefined" !== typeof g.Pa.BroadcastChannel && (this.j = new g.Pa.BroadcastChannel("PLAYER_OFFLINE_ERROR_SYNC:" + g.eC()), this.j.onmessage = this.C.bind(this), this.B = new g.Pa.BroadcastChannel("PLAYER_OFFLINE_PAUSE_SYNC:" + g.eC()), this.B.onmessage = this.D.bind(this));
    },
    m7 = function (a, b) {
      a.api.Ra("onOfflineOperationFailure", b);
      var c;
      null == (c = a.j) || c.postMessage(b);
    },
    Vqb = function () {
      this.locks = navigator.locks;
    },
    Wqb = function () {
      try {
        var a = g.Ra("ytglobal.locks_");
        if (a) return a;
        var b;
        if (b = navigator) {
          var c = navigator;
          b = "locks" in c && !!c.locks;
        }
        if (b) return g.Pa.localStorage && g.Pa.localStorage.getItem("noop"), a = new Vqb(), g.Qa("ytglobal.locks_", a), a;
      } catch (d) {}
    },
    Xqb = function (a, b, c, d) {
      var e = this;
      this.ma = a;
      this.ea = b;
      this.visibility = c;
      this.N = d;
      this.G = this.S = this.K = this.C = this.j = !1;
      this.D = new g.fr(function () {
        e.zJ();
      });
      this.Ud = {
        ZV: function () {
          return e.B;
        },
        zJ: function () {
          e.zJ();
        },
        Xeb: function () {
          return e.D;
        }
      };
      this.visibility.subscribe("visibilitystatechange", function () {
        e.Bg();
      });
    },
    Yqb = function (a) {
      if (!a.C && !a.j) {
        var b = Wqb();
        if (b) {
          a.C = !0;
          var c = g.eC("OfflineLockManager");
          b.request("woffle_orchestration_leader:" + c, {}, function () {
            var d, e, f, h;
            return g.Ga(function (l) {
              switch (l.j) {
                case 1:
                  return g.ya(l, 2), a.B = new g.hl(), a.j = !0, a.C = !1, g.z(l, a.ma(), 4);
                case 4:
                  return g.z(l, a.B.promise, 5);
                case 5:
                  g.za(l, 0);
                  break;
                case 2:
                  d = g.Aa(l), (null == (f = (e = a).N) ? 0 : f.call(e, "wo_relinquish_leadership_on_lock_request_error")) || a.zJ(), d instanceof Error && (h = d, h.args = [{
                    name: "WoLockManagerError",
                    cJ: d.name
                  }], g.UF(h)), g.xa(l);
              }
            });
          });
        }
      }
    },
    Zqb = function (a) {
      a.j && (a.G = !0, n7(a));
    },
    $qb = function (a, b) {
      a.j && (a.K = b, n7(a));
    },
    arb = function (a, b) {
      a.j && (a.S = b, n7(a));
    },
    n7 = function (a) {
      a.S && a.K && a.G && a.visibility.isBackground() ? g.gr(a.D, 6E4) : a.D.stop();
    },
    o7 = function (a, b) {
      var c = b.El,
        d = b.offlineModeType;
      a.encryptedVideoId = b.videoId;
      a.cotn = null == c ? void 0 : c.cotn;
      a.offlineabilityFormatType = null == c ? void 0 : c.maximumDownloadQuality;
      var e;
      a.isRefresh = null != (e = null == c ? void 0 : c.isRefresh) ? e : !1;
      var f;
      a.softErrorCount = null != (f = null == c ? void 0 : c.transferRetryCount) ? f : 0;
      a.offlineModeType = null != d ? d : "OFFLINE_NOW";
      g.tC("offlineTransferStatusChanged", a);
    },
    brb = function (a, b, c, d) {
      d = {
        transferStatusType: "TRANSFER_STATUS_TYPE_PROCESSING",
        statusType: "OFFLINING_STARTED",
        transferFirstStarted: !!d
      };
      b && c && (b = Math.floor(b / 1024).toFixed(), c = Math.floor(c / 1024).toFixed(), d.alreadyDownloadedKbytes = b, d.totalFetchedKbytes = b, d.totalContentKbytes = c);
      o7(d, a);
    },
    crb = function (a) {
      o7({
        transferStatusType: "TRANSFER_STATUS_TYPE_DEQUEUED_BY_USER_PAUSE",
        statusType: "SUSPENDED"
      }, a);
    },
    drb = function (a) {
      switch (a) {
        case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE":
        case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE":
          return "OFFLINE_DATABASE_ERROR";
        case "TRANSFER_FAILURE_REASON_PLAYABILITY":
          return "NOT_PLAYABLE";
        case "TRANSFER_FAILURE_REASON_TOO_MANY_RETRIES":
          return "TOO_MANY_RETRIES";
        case "TRANSFER_FAILURE_REASON_INTERNAL":
          return "OFFLINE_DOWNLOAD_CONTROLLER_ERROR";
        case "TRANSFER_FAILURE_REASON_STREAM_MISSING":
          return "STREAM_VERIFICATION_FAILED";
        case "TRANSFER_FAILURE_REASON_SERVER":
        case "TRANSFER_FAILURE_REASON_SERVER_PROPERTY_MISSING":
          return "OFFLINE_REQUEST_FAILURE";
        case "TRANSFER_FAILURE_REASON_NETWORK":
          return "OFFLINE_NETWORK_ERROR";
        default:
          return "UNKNOWN_FAILURE_REASON";
      }
    },
    p7 = function (a) {
      var b, c, d;
      return 0 < (null != (d = null == (b = a.actionMetadata) ? void 0 : null == (c = b.retryScheduleIntervalsInSeconds) ? void 0 : c.length) ? d : 0);
    },
    q7 = function (a) {
      return "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === a.actionType && !!a.entityKey;
    },
    r7 = function (a) {
      return "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" === a.actionType && !!a.entityKey;
    },
    s7 = function (a) {
      return "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === a.actionType && !!a.entityKey;
    },
    t7 = function (a, b, c, d, e) {
      e = void 0 === e ? !1 : e;
      var f, h, l, m, n, p;
      return g.Ga(function (q) {
        if (1 == q.j) return f = g.KM(a, b), h = g.KM(a, "downloadStatusEntity"), g.z(q, f7(c, {
          mode: "readonly",
          kc: !0
        }, function (t) {
          return g.HC.all([Z6(t, f, b), Z6(t, h, "downloadStatusEntity")]);
        }), 2);
        l = q.B;
        m = l.length ? l[0] : void 0;
        if (!m) return q.Ma(0);
        n = erb;
        if (p = 1 < l.length ? l[1] : void 0) {
          if ("DOWNLOAD_STATE_USER_DELETED" === p.downloadState && !e) return q.return();
          p.downloadState = d;
        } else p = {
          key: h,
          downloadState: d
        };
        g.OO(m, n, p);
        return g.z(q, f7(c, {
          mode: "readwrite",
          kc: !0
        }, function (t) {
          return g.HC.all([b7(t, m, b), b7(t, p, "downloadStatusEntity")]);
        }), 0);
      });
    },
    u7 = function (a, b) {
      return a.actionType === b.actionType && a.entityKey === b.entityKey;
    },
    v7 = function (a, b) {
      if (a && "TRANSFER_STATE_COMPLETE" !== a.transferState && "TRANSFER_STATE_FAILED" !== a.transferState) {
        var c = g.JM(a.key).entityId;
        o7({
          transferStatusType: "TRANSFER_STATUS_TYPE_TERMINATED_BY_USER",
          statusType: "CANCELLED"
        }, {
          videoId: c,
          El: a,
          offlineModeType: b
        });
      }
    },
    w7 = function (a) {
      if (!a || !a.thumbnails) return [];
      var b = [];
      a = g.v(a.thumbnails);
      for (var c = a.next(); !c.done; c = a.next()) c = c.value, c.url && b.push(c.url);
      return b;
    },
    frb = function (a, b, c) {
      return new g.fN(a, {
        cotn: b,
        raw_player_response: c,
        download_media: !0,
        start: Infinity,
        disable_watch_next: !0
      });
    },
    grb = function () {
      return {
        priority: 1,
        retryScheduleIntervalsInSeconds: [1, 2, 4]
      };
    },
    x7 = function (a, b, c, d, e, f, h, l, m, n, p) {
      this.entityType = a;
      this.actionId = b;
      this.action = c;
      this.parentActionId = d;
      this.rootActionId = void 0 === e ? b : e;
      this.childActionIds = f;
      this.prereqActionId = h;
      this.postreqActionIds = l;
      this.hasChildActionFailed = n;
      this.retryScheduleIndex = 0;
      this.j = p || Date.now();
      this.retryScheduleIndex = m || 0;
    },
    y7 = function (a) {
      if (!a.key) throw Error("Entity key is required.");
      if (!a.actionProto) throw Error("OfflineOrchestrationAction is required.");
      var b = g.JM(a.key),
        c = g.JM(a.actionProto.entityKey);
      return new x7(c.entityType, b.entityId, a.actionProto, a.parentActionId, a.rootActionId, a.childActionIds, a.prereqActionId, a.postreqActionIds, a.retryScheduleIndex, a.hasChildActionFailed, 1E3 * Number(a.enqueueTimeSec));
    },
    z7 = function (a) {
      return {
        key: g.KM(a.actionId, "offlineOrchestrationActionWrapperEntity"),
        actionProto: a.action,
        parentActionId: a.parentActionId,
        rootActionId: a.rootActionId,
        childActionIds: a.childActionIds,
        prereqActionId: a.prereqActionId,
        postreqActionIds: a.postreqActionIds,
        retryScheduleIndex: a.retryScheduleIndex,
        hasChildActionFailed: a.hasChildActionFailed,
        enqueueTimeSec: (a.j / 1E3).toFixed()
      };
    },
    A7 = function () {},
    hrb = function () {},
    irb = function (a) {
      if (a.includes(":")) throw Error("Invalid user cache name: " + a);
      return a + ":" + g.eC("CacheStorage get");
    },
    jrb = function () {
      return g.Ga(function (a) {
        if (void 0 !== B7) return a.return(B7);
        B7 = new Promise(function (b) {
          var c;
          return g.Ga(function (d) {
            switch (d.j) {
              case 1:
                return g.ya(d, 2), g.z(d, C7.open("test-only"), 4);
              case 4:
                return g.z(d, C7.delete("test-only"), 5);
              case 5:
                g.za(d, 3);
                break;
              case 2:
                if (c = g.Aa(d), c instanceof Error && "SecurityError" === c.name) return b(!1), d.return();
              case 3:
                b("caches" in window), g.xa(d);
            }
          });
        });
        return a.return(B7);
      });
    },
    lrb = function () {
      return g.Ga(function (a) {
        if (1 == a.j) return g.z(a, jrb(), 2);
        if (!a.B) return a.return(void 0);
        krb || (krb = new hrb());
        return a.return(krb);
      });
    },
    mrb = function () {
      var a;
      return g.Ga(function (b) {
        return 1 == b.j ? g.z(b, lrb(), 2) : (a = b.B) ? b.return(a.delete("yt-player-local-img")) : b.return(!0);
      });
    },
    D7 = function (a) {
      var b, c;
      return g.Ga(function (d) {
        if (1 == d.j) return g.z(d, lrb(), 2);
        if (3 != d.j) {
          b = d.B;
          if (!b) throw Error("Cache API not supported");
          return a.length ? g.z(d, b.open("yt-player-local-img"), 3) : d.return();
        }
        c = d.B;
        return g.z(d, Promise.all(a.map(function (e) {
          return c.delete(e);
        })), 0);
      });
    },
    E7 = function (a) {
      var b, c;
      return g.Ga(function (d) {
        if (1 == d.j) return g.z(d, lrb(), 2);
        if (3 != d.j) {
          b = d.B;
          if (!b) throw Error("Cache API not supported");
          return a.length ? g.z(d, b.open("yt-player-local-img"), 3) : d.return();
        }
        c = d.B;
        return g.z(d, c.addAll(a), 0);
      });
    },
    F7 = function (a, b, c, d, e) {
      var f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa, ia, Da, ha, T, Wa, r, U, lb, gb, Eb;
      return g.Ga(function (vb) {
        switch (vb.j) {
          case 1:
            return f = g.KM(a, "mainVideoEntity"), h = g.KM(a, "ytMainChannelEntity"), l = g.KM(a, "transfer"), m = g.KM(a, "videoDownloadContextEntity"), g.z(vb, f7(b, {
              mode: "readonly",
              kc: !0
            }, function (sb) {
              return g.HC.all([Z6(sb, f, "mainVideoEntity"), Z6(sb, h, "ytMainChannelEntity"), Z6(sb, l, "transfer"), e ? Z6(sb, m, "videoDownloadContextEntity") : void 0, $6(sb, "ytMainChannelEntity"), $6(sb, "offlineOrchestrationActionWrapperEntity")]);
            }), 2);
          case 2:
            n = vb.B;
            p = g.v(n);
            q = p.next().value;
            t = p.next().value;
            u = p.next().value;
            y = p.next().value;
            A = p.next().value;
            E = p.next().value;
            L = q;
            I = t;
            F = u;
            S = y;
            Y = A;
            ea = E;
            if (!L && !I) {
              vb.Ma(3);
              break;
            }
            ta = L ? w7(L.thumbnail) : [];
            if (!I) {
              na = [];
              vb.Ma(4);
              break;
            }
            return g.z(vb, nrb(I, Y), 5);
          case 5:
            na = vb.B;
          case 4:
            return fa = na, g.z(vb, D7(ta.concat(fa)), 3);
          case 3:
            ia = [];
            Da = g.KM(a, "mainVideoEntity");
            ha = g.KM(a, "downloadStatusEntity");
            T = g.v(ea);
            for (Wa = T.next(); !Wa.done; Wa = T.next()) r = Wa.value, U = g.JM(r.key).entityId, lb = y7(r), gb = g.JM(lb.action.entityKey).entityId, U !== a && gb !== a || u7(c, r.actionProto) || ia.push(r.key);
            return g.z(vb, f7(b, {
              mode: "readwrite",
              kc: !0
            }, function (sb) {
              var Rb = ia.map(function (Sa) {
                return c7(sb, Sa);
              });
              Rb.push(c7(sb, Da, {
                zv: !0
              }));
              Rb.push(c7(sb, ha, {
                zv: !0
              }));
              return g.HC.all(Rb);
            }), 7);
          case 7:
            v7(F, null == (Eb = S) ? void 0 : Eb.offlineModeType), m7(d, {
              entityKey: Da,
              failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED"
            }), g.xa(vb);
        }
      });
    },
    qrb = function (a, b, c, d, e) {
      var f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa, ia, Da, ha, T, Wa, r, U, lb, gb;
      return g.Ga(function (Eb) {
        switch (Eb.j) {
          case 1:
            return f = g.KM(a, "mainPlaylistEntity"), h = g.KM(a, "ytMainChannelEntity"), g.z(Eb, f7(b, {
              mode: "readonly",
              kc: !0
            }, function (vb) {
              return g.HC.all([Z6(vb, f, "mainPlaylistEntity"), Z6(vb, h, "ytMainChannelEntity"), $6(vb, "mainPlaylistEntity"), $6(vb, "mainDownloadsListEntity"), $6(vb, "ytMainChannelEntity"), $6(vb, "offlineOrchestrationActionWrapperEntity")]);
            }), 2);
          case 2:
            l = Eb.B;
            m = g.v(l);
            n = m.next().value;
            p = m.next().value;
            q = m.next().value;
            t = m.next().value;
            u = m.next().value;
            y = m.next().value;
            A = n;
            E = p;
            L = q;
            I = t;
            F = u;
            S = y;
            if (!A && !E) {
              Eb.Ma(3);
              break;
            }
            Y = A ? orb(A) : [];
            if (!E) {
              ea = [];
              Eb.Ma(4);
              break;
            }
            return g.z(Eb, nrb(E, F), 5);
          case 5:
            ea = Eb.B;
          case 4:
            return ta = ea, g.z(Eb, D7(Y.concat(ta)), 3);
          case 3:
            na = [];
            fa = g.v(S);
            for (ia = fa.next(); !ia.done; ia = fa.next()) Da = ia.value, ha = g.JM(Da.key).entityId, T = y7(Da), ha !== a && T.rootActionId !== a || u7(c, Da.actionProto) || na.push(Da.key);
            Wa = g.KM(a, "mainPlaylistEntity");
            return g.z(Eb, f7(b, {
              mode: "readwrite",
              kc: !0
            }, function (vb) {
              var sb = na.map(function (Rb) {
                return c7(vb, Rb);
              });
              sb.push(c7(vb, Wa, {
                zv: !0
              }));
              return g.HC.all(sb);
            }), 7);
          case 7:
            if (!A) {
              Eb.Ma(0);
              break;
            }
            return g.z(Eb, prb(A, L, I), 9);
          case 9:
            r = Eb.B;
            r.reverse();
            if (!r) {
              Eb.Ma(0);
              break;
            }
            U = g.v(r);
            lb = U.next();
          case 11:
            if (lb.done) {
              Eb.Ma(0);
              break;
            }
            gb = lb.value;
            return g.z(Eb, F7(gb, b, c, d, e), 12);
          case 12:
            lb = U.next(), Eb.Ma(11);
        }
      });
    },
    srb = function (a, b, c, d) {
      var e, f, h, l, m, n, p, q;
      return g.Ga(function (t) {
        if (1 == t.j) return e = g.KM("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), f = new Map(), g.z(t, f7(a, {
          mode: "readwrite",
          kc: !0
        }, function (u) {
          var y = $6(u, "transfer"),
            A = $6(u, "offlineOrchestrationActionWrapperEntity"),
            E = void 0;
          d && (E = $6(u, "videoDownloadContextEntity"));
          var L = Z6(u, e, "mainDownloadsListEntity");
          return g.HC.all([y, A, E, L]).then(function (I) {
            I = g.v(I);
            var F = I.next().value,
              S = I.next().value,
              Y = I.next().value,
              ea = I.next().value;
            I = rrb.map(function (ia) {
              return uqb(u, ia);
            });
            S = g.v(S);
            for (var ta = S.next(); !ta.done; ta = S.next()) {
              ta = ta.value;
              var na = "mainVideoEntity" === g.JM(ta.actionProto.entityKey).entityType,
                fa = "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === ta.actionProto.actionType;
              u7(b, ta.actionProto) || na && (!na || fa) || I.push(c7(u, ta.key, {
                zv: !0
              }));
            }
            ea && (ea.downloads = [], I.push(b7(u, ea, "mainDownloadsListEntity")));
            if (Y) for (Y = g.v(Y), ea = Y.next(); !ea.done; ea = Y.next()) ea = ea.value, S = g.JM(ea.key).entityId, S = g.KM(S, "transfer"), f.set(S, ea.offlineModeType);
            return g.HC.all(I).then(function () {
              return F;
            });
          });
        }), 2);
        h = t.B;
        l = g.v(h);
        for (m = l.next(); !m.done; m = l.next()) n = m.value, v7(n, f.get(n.key)), p = g.JM(n.key).entityId, q = g.KM(p, "mainVideoEntity"), m7(c, {
          entityKey: q,
          failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED"
        });
        return g.z(t, mrb(), 0);
      });
    },
    orb = function (a, b) {
      var c = [];
      if (a.thumbnailStyleData) {
        a = g.v(a.thumbnailStyleData);
        for (var d = a.next(); !d.done; d = a.next()) {
          var e = void 0,
            f = void 0,
            h = void 0;
          c = c.concat(w7(null == (e = d.value) ? void 0 : null == (f = e.value) ? void 0 : null == (h = f.collageThumbnail) ? void 0 : h.coverThumbnail));
        }
      }
      b = w7(b);
      return c.concat(b);
    },
    prb = function (a, b, c) {
      var d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa;
      return g.Ga(function (ia) {
        d = [];
        e = new Set();
        if (c.length) for (f = g.v(c), h = f.next(); !h.done; h = f.next()) if (l = h.value, m = void 0, null == (m = l.downloads) ? 0 : m.length) for (n = g.v(l.downloads), p = n.next(); !p.done; p = n.next()) q = p.value, q.videoItem && (t = g.JM(q.videoItem).entityId, e.add(t));
        if (a.videos) {
          u = g.v(a.videos);
          for (y = u.next(); !y.done; y = u.next()) A = y.value, E = JSON.parse(g.JM(A).entityId), E.videoId && !e.has(E.videoId) && d.push(E.videoId);
          L = g.v(b);
          for (I = L.next(); !I.done; I = L.next()) if (F = I.value, F.key !== a.key && (S = F.videos)) for (Y = g.v(S), ea = Y.next(); !ea.done; ea = Y.next()) ta = ea.value, na = JSON.parse(g.JM(ta).entityId), na.videoId && (fa = d.indexOf(na.videoId), -1 !== fa && d.splice(fa, 1));
        }
        return ia.return(d);
      });
    },
    nrb = function (a, b) {
      var c, d, e, f, h, l, m, n;
      return g.Ga(function (p) {
        c = w7(a.avatar);
        d = g.v(b);
        for (e = d.next(); !e.done; e = d.next()) if (f = e.value, f.id !== a.id) for (h = g.v(w7(f.avatar)), l = h.next(); !l.done; l = h.next()) m = l.value, n = c.indexOf(m), -1 !== n && c.splice(n, 1);
        return p.return(c);
      });
    },
    trb = function (a) {
      var b;
      return g.Ga(function (c) {
        b = g.Q(a.frameworkUpdates, G7);
        return a.frameworkUpdates && b ? g.z(c, Hqb(b), 0) : c.return();
      });
    },
    wrb = function (a) {
      var b;
      if (null != (b = a.onResponseReceivedActions) && b.length) {
        var c;
        a = null == (c = g.Q(g.Q(a.onResponseReceivedActions[0], urb), vrb)) ? void 0 : c.actions;
        if (null != a && a.length) return a;
      }
    },
    xrb = function (a) {
      var b, c, d;
      return g.Ga(function (e) {
        if (1 == e.j) return a ? g.z(e, h7(a, H7, "mainDownloadsListEntity"), 2) : e.return([]);
        b = e.B;
        return (null == (c = b) ? 0 : null == (d = c.downloads) ? 0 : d.length) ? e.return(b.downloads.map(function (f) {
          var h;
          return null != (h = f.videoItem) ? h : "";
        })) : e.return([]);
      });
    },
    zrb = function (a, b) {
      var c;
      return g.Ga(function (d) {
        return 1 == d.j ? g.z(d, yrb(a, b), 2) : (c = d.B) ? g.z(d, f7(a, {
          mode: "readwrite",
          kc: !0
        }, function (e) {
          var f = [b7(e, c.mainDownloadsLibraryEntity, "mainDownloadsLibraryEntity")];
          c.mainDownloadsListEntity && f.push(b7(e, c.mainDownloadsListEntity, "mainDownloadsListEntity"));
          return g.HC.all(f);
        }), 0) : d.Ma(0);
      });
    },
    yrb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F;
      return g.Ga(function (S) {
        if (1 == S.j) return c = g.KM("main_downloads_library_id", "mainDownloadsLibraryEntity"), d = g.KM("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), g.z(S, f7(a, {
          mode: "readonly",
          kc: !0
        }, function (Y) {
          return g.HC.all([Z6(Y, c, "mainDownloadsLibraryEntity"), Z6(Y, d, "mainDownloadsListEntity")]);
        }), 2);
        e = S.B;
        f = g.v(e);
        h = f.next().value;
        l = f.next().value;
        m = h;
        n = l;
        m || (m = {
          id: c
        });
        p = g.v(b);
        for (q = p.next(); !q.done; q = p.next()) if (t = q.value, t === H7) {
          if (m.smartDownloadsList) return S.return();
          m.smartDownloadsList = t;
        } else if (u = g.JM(t).entityType, y = {}, "mainPlaylistEntity" === u ? y.playlistItem = t : "mainVideoEntity" === u && (y.videoItem = t), !g.dd(y)) {
          A = void 0;
          if (null == (A = n) ? 0 : A.downloads) {
            E = !1;
            L = g.v(n.downloads);
            for (I = L.next(); !I.done; I = L.next()) if (F = I.value, F.playlistItem === t || F.videoItem === t) {
              E = !0;
              break;
            }
            E || n.downloads.push(y);
          } else n = {
            id: d,
            downloads: [y]
          };
          m.downloadsList = d;
        }
        return S.return({
          mainDownloadsLibraryEntity: m,
          mainDownloadsListEntity: n
        });
      });
    },
    Arb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E;
      return g.Ga(function (L) {
        if (1 == L.j) return c = g.KM("main_downloads_library_id", "mainDownloadsLibraryEntity"), d = g.KM("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), g.z(L, f7(a, {
          mode: "readonly",
          kc: !0
        }, function (I) {
          return g.HC.all([Z6(I, c, "mainDownloadsLibraryEntity"), Z6(I, d, "mainDownloadsListEntity"), Z6(I, H7, "mainDownloadsListEntity")]);
        }), 2);
        e = L.B;
        f = g.v(e);
        h = f.next().value;
        l = f.next().value;
        m = f.next().value;
        n = h;
        p = l;
        q = m;
        if (!n) return L.Ma(0);
        if (b === H7 && (null == (t = q) ? 0 : t.downloads)) q.downloads = [];else if (null == (u = p) ? 0 : u.downloads) for (y = g.JM(b).entityType, A = 0; A < p.downloads.length; A++) if (E = p.downloads[A], "mainVideoEntity" === y && E.videoItem === b) {
          p.downloads.splice(A, 1);
          break;
        } else if ("mainPlaylistEntity" === y && E.playlistItem === b) {
          p.downloads.splice(A, 1);
          break;
        }
        return g.z(L, f7(a, {
          mode: "readwrite",
          kc: !0
        }, function (I) {
          var F = [b7(I, n, "mainDownloadsLibraryEntity")];
          p && F.push(b7(I, p, "mainDownloadsListEntity"));
          q && F.push(b7(I, q, "mainDownloadsListEntity"));
          return g.HC.all(F);
        }), 0);
      });
    },
    I7 = function (a) {
      this.j = a;
    },
    Brb = function (a, b) {
      var c, d, e, f, h, l;
      return g.Ga(function (m) {
        switch (m.j) {
          case 1:
            c = new Map(), d = g.v(b), e = d.next();
          case 2:
            if (e.done) {
              m.Ma(4);
              break;
            }
            f = e.value;
            h = c;
            l = h.set;
            return g.z(m, a.B(f), 5);
          case 5:
            l.call(h, f, m.B);
            e = d.next();
            m.Ma(2);
            break;
          case 4:
            return m.return(c);
        }
      });
    },
    J7 = function (a, b, c, d, e, f) {
      b = g.KM(b, c);
      d = Object.assign({}, f, {
        priority: d,
        retryScheduleIntervalsInSeconds: e
      });
      return {
        actionType: a,
        entityKey: b,
        actionMetadata: d
      };
    },
    K7 = function (a, b, c, d, e) {
      this.status = a;
      this.j = b;
      this.D = c;
      this.B = d;
      this.C = e;
    },
    Crb = function (a, b, c) {
      this.j = a;
      this.Z = b;
      this.D = c;
      this.C = this.Z.N("html5_oduc_transfer_logging");
    },
    Hrb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y;
      return g.Ga(function (A) {
        switch (A.j) {
          case 1:
            c = b.entityKey;
            e = null == (d = g.Q(b.actionMetadata, Drb)) ? void 0 : d.isEnqueuedForExpiredStreamUrlRefetch;
            g.ya(A, 2);
            f = void 0;
            if (!a.Z.N("html5_enable_oduc")) {
              A.Ma(4);
              break;
            }
            return g.z(A, Erb(a, b), 5);
          case 5:
            f = A.B;
          case 4:
            var E = (E = g.Q(b.actionMetadata, Drb)) ? {
              maximumDownloadQuality: E.maximumDownloadQuality
            } : void 0;
            return g.z(A, Frb(a, c, {
              isEnqueuedForExpiredStreamUrlRefetch: e,
              f0: E,
              offlineSourceData: f
            }), 6);
          case 6:
            return h = A.B, h ? g.z(A, Grb(a, h, b), 7) : (l = p7(b) ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR", A.return(L7(b, !1, void 0, "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED", l)));
          case 7:
            return A.return(L7(b, !0, h.orchestrationActions));
          case 2:
            return m = g.Aa(A), n = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", p = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", m instanceof g.AC && "QUOTA_EXCEEDED" === m.type && (n = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", p = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), k7("PDE handleAdd error"), q = g.JM(b.entityKey), t = q.entityId, y = (u = p7(b)) ? "DOWNLOAD_STATE_RETRYABLE_FAILURE" : "DOWNLOAD_STATE_FAILED", g.z(A, t7(t, "mainVideoDownloadStateEntity", a.j, y), 8);
          case 8:
            return A.return(L7(b, !1, void 0, n, p));
        }
      });
    },
    Irb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F;
      return g.Ga(function (S) {
        switch (S.j) {
          case 1:
            return c = b.entityKey, g.z(S, f7(a.j, {
              mode: "readonly",
              kc: !0
            }, function (Y) {
              var ea = Z6(Y, c, "playbackData"),
                ta = Z6(Y, g.KM(g.JM(b.entityKey).entityId, "offlineVideoPolicy"), "offlineVideoPolicy");
              Y = Z6(Y, g.KM(g.JM(b.entityKey).entityId, "transfer"), "transfer");
              return g.HC.all([ea, ta, Y]);
            }), 2);
          case 2:
            d = S.B;
            e = g.v(d);
            f = e.next().value;
            h = e.next().value;
            l = e.next().value;
            m = f;
            n = h;
            p = l;
            if (!m || !n) return S.return(L7(b, !0));
            q = {
              lastPlayerResponseTimestampSeconds: m.playerResponseTimestamp,
              offlineToken: n.offlineToken
            };
            t = {};
            if (null == (u = p) ? 0 : u.maximumDownloadQuality) t.maximumDownloadQuality = p.maximumDownloadQuality;
            g.ya(S, 3);
            y = void 0;
            if (!a.Z.N("html5_enable_oduc")) {
              S.Ma(5);
              break;
            }
            return g.z(S, Erb(a, b), 6);
          case 6:
            y = S.B;
          case 5:
            return g.z(S, Frb(a, c, {
              refreshData: q,
              f0: t,
              offlineSourceData: y
            }), 7);
          case 7:
            return A = S.B, A ? g.z(S, Grb(a, A, b), 8) : (E = p7(b) ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR", S.return(L7(b, !1, void 0, "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED", E)));
          case 8:
            return S.return(L7(b, !0, A.orchestrationActions));
          case 3:
            return L = g.Aa(S), I = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", F = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", L instanceof g.AC && "QUOTA_EXCEEDED" === L.type && (I = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", F = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), S.return(L7(b, !1, void 0, I, F));
        }
      });
    },
    Erb = function (a, b) {
      var c, d, e, f;
      return g.Ga(function (h) {
        if (1 == h.j) return c = g.JM(b.entityKey).entityId, d = g.KM(c, "videoDownloadContextEntity"), g.z(h, h7(a.j, d, "videoDownloadContextEntity"), 2);
        e = h.B;
        return null != (f = e) && f.offlineModeType ? h.return({
          offlineModeType: e.offlineModeType
        }) : h.return(void 0);
      });
    },
    Frb = function (a, b, c) {
      var d, e, f;
      return g.Ga(function (h) {
        d = g.gR();
        e = Sqb(b, a.Z, c.refreshData, c.isEnqueuedForExpiredStreamUrlRefetch, c.f0, c.offlineSourceData);
        f = g.VQ(Jrb);
        return h.return(g.HP(d, e, f).then(function (l) {
          return l;
        }));
      });
    },
    Grb = function (a, b, c) {
      var d;
      return g.Ga(function (e) {
        if (1 == e.j) {
          if (!b.frameworkUpdates || !g.Q(b.frameworkUpdates, G7)) return e.return();
          if (!(g.Q(b.frameworkUpdates, G7).mutations && 0 < g.Q(b.frameworkUpdates, G7).mutations.length && "ENTITY_MUTATION_TYPE_DELETE" === g.Q(b.frameworkUpdates, G7).mutations[0].type)) return e.Ma(2);
          d = g.JM(g.Q(b.frameworkUpdates, G7).mutations[0].entityKey).entityId;
          return g.z(e, F7(d, a.j, c, a.D, a.C), 2);
        }
        return g.z(e, Hqb(g.Q(b.frameworkUpdates, G7)), 0);
      });
    },
    L7 = function (a, b, c, d, e) {
      for (var f = p7(a), h = g.v(c || []), l = h.next(); !l.done; l = h.next()) if (l = l.value, l.actionMetadata) {
        var m = void 0;
        l.actionMetadata.priority = (null == (m = a.actionMetadata) ? void 0 : m.priority) || 1;
      }
      return new K7(b ? "OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS" : "OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", f, c, d, e);
    },
    Krb = function (a, b) {
      this.j = a;
      this.Z = b;
    },
    Mrb = function (a, b) {
      var c, d;
      return g.Ga(function (e) {
        switch (e.j) {
          case 1:
            return c = p7(b), g.z(e, h7(a.j, b.entityKey, "transfer"), 2);
          case 2:
            if (d = e.B) return e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            g.ya(e, 3);
            return g.z(e, Lrb(a, b), 5);
          case 5:
            g.za(e, 4);
            break;
          case 3:
            return g.Aa(e), e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
          case 4:
            return e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
        }
      });
    },
    Nrb = function (a, b) {
      var c, d;
      return g.Ga(function (e) {
        switch (e.j) {
          case 1:
            return c = p7(b), g.z(e, h7(a.j, b.entityKey, "transfer"), 2);
          case 2:
            d = e.B;
            if (!d || "TRANSFER_STATE_COMPLETE" !== d.transferState) return e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            g.ya(e, 3);
            return g.z(e, Lrb(a, b, !0), 5);
          case 5:
            g.za(e, 4);
            break;
          case 3:
            return g.Aa(e), e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
          case 4:
            return e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
        }
      });
    },
    Orb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q;
      return g.Ga(function (t) {
        switch (t.j) {
          case 1:
            return c = p7(b), d = g.JM(b.entityKey).entityId, g.z(t, f7(a.j, {
              mode: "readonly",
              kc: !0
            }, function (u) {
              var y = Z6(u, b.entityKey, "transfer"),
                A = void 0;
              a.Z.N("html5_oduc_transfer_logging") && (A = Z6(u, g.KM(d, "videoDownloadContextEntity"), "videoDownloadContextEntity"));
              return g.HC.all([y, A]);
            }), 2);
          case 2:
            e = t.B;
            f = g.v(e);
            h = f.next().value;
            l = f.next().value;
            m = h;
            n = l;
            if (!m || "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH" !== m.transferState) return t.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            g.ya(t, 3);
            m.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE";
            return g.z(t, g7(a.j, m, "transfer"), 5);
          case 5:
            p = g.JM(m.key).entityId;
            o7({
              transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_PLAYER_RESPONSE_REFRESH"
            }, {
              videoId: p,
              El: m,
              offlineModeType: null == (q = n) ? void 0 : q.offlineModeType
            });
            g.za(t, 4);
            break;
          case 3:
            return g.Aa(t), t.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
          case 4:
            return t.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
        }
      });
    },
    Lrb = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      var d, e, f, h, l, m, n, p, q, t, u, y, A, E, L;
      return g.Ga(function (I) {
        if (1 == I.j) return d = g.Q(b.actionMetadata, Prb), e = g.JM(b.entityKey).entityId, f = g.KM(e, "downloadStatusEntity"), g.z(I, f7(a.j, {
          mode: "readonly",
          kc: !0
        }, function (F) {
          var S = Z6(F, f, "downloadStatusEntity"),
            Y = void 0;
          a.Z.N("html5_oduc_transfer_logging") && (Y = Z6(F, g.KM(e, "videoDownloadContextEntity"), "videoDownloadContextEntity"));
          return g.HC.all([S, Y]);
        }), 2);
        if (3 != I.j) return h = I.B, l = g.v(h), m = l.next().value, n = l.next().value, p = m, q = n, t = "TRANSFER_STATE_TRANSFER_IN_QUEUE", "DOWNLOAD_STATE_USER_DELETED" === (null == (u = p) ? void 0 : u.downloadState) && (t = "TRANSFER_STATE_PAUSED_BY_USER"), E = {
          key: b.entityKey,
          transferState: t,
          cotn: g.bG(16),
          enqueuedTimestampMs: Date.now().toString(),
          maximumDownloadQuality: null == (y = d) ? void 0 : y.maximumDownloadQuality,
          preferredAudioTrack: null == (A = d) ? void 0 : A.preferredAudioTrack,
          transferRetryCount: 0,
          isRefresh: c,
          hasLoggedFirstStarted: !1
        }, g.z(I, f7(a.j, {
          mode: "readwrite",
          kc: !0
        }, function (F) {
          var S = [];
          c && S.push(c7(F, g.KM(e, "offlineVideoStreams")));
          S.push(b7(F, E, "transfer"));
          return g.HC.all(S);
        }), 3);
        o7({
          transferStatusType: "TRANSFER_STATUS_TYPE_ENQUEUED",
          statusType: "ADDED_TO_QUEUE"
        }, {
          videoId: e,
          El: E,
          offlineModeType: null == (L = q) ? void 0 : L.offlineModeType
        });
        g.xa(I);
      });
    },
    Qrb = function () {
      this.j = new Map();
    },
    Srb = function () {
      Rrb || (Rrb = new Qrb());
      return Rrb;
    },
    Trb = function (a, b) {
      return {
        eventType: {
          flowEventNamespace: "FLOW_EVENT_NAMESPACE_OFFLINE_ORCHESTRATION",
          flowEventType: a
        },
        metadata: b,
        statusCode: void 0,
        csn: void 0,
        can: void 0
      };
    },
    Urb = function (a, b, c) {
      if (!c) {
        var d = void 0 === d ? !1 : d;
        c = a.j.get("FLOW_TYPE_OFFLINE_ORCHESTRATION");
        if (!c || d) c = g.bG(16), a.j.set("FLOW_TYPE_OFFLINE_ORCHESTRATION", c);
      }
      a = {
        flowNonce: c,
        flowType: "FLOW_TYPE_OFFLINE_ORCHESTRATION",
        flowEventType: b.eventType
      };
      b.metadata && (a.flowMetadata = b.metadata);
      void 0 !== b.statusCode && (a.flowEventStatus = b.statusCode);
      b.csn && (a.csn = b.csn);
      b.can && (a.can = b.can);
      g.tC("flowEvent", a, void 0);
    },
    Wrb = function (a, b, c, d) {
      if (!a.action.entityKey) throw Error("entityKey is missing.");
      var e = g.JM(a.action.entityKey);
      a = {
        entityType: e.s5,
        entityId: e.entityId,
        offlineOrchestrationActionType: a.action.actionType,
        orchestrationAction: {
          orchestrationActionId: a.actionId
        }
      };
      b && (a.offlineOrchestrationActionResult = b.status, a.isRetryable = c ? !1 : b.j, b.C && (a.offlineOrchestrationFailureReason = Vrb(b.C, a.isRetryable)));
      d && (a.additionalOrchestrationActions = d.map(function (f) {
        return {
          orchestrationActionId: f.actionId
        };
      }));
      return a;
    },
    Vrb = function (a, b) {
      return "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" !== a || b ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR" === a && b ? "OFFLINE_ORCHESTRATION_FAILURE_REASON_RECOVERABLE_NETWORK_ERROR" : a : "OFFLINE_ORCHESTRATION_FAILURE_REASON_UNRECOVERABLE_NETWORK_ERROR";
    },
    Xrb = function (a, b) {
      var c = {
        offlineOrchestrationContext: Wrb(a)
      };
      b = Trb(b, c);
      Urb(Srb(), b, a.rootActionId);
    },
    Yrb = function (a, b, c, d) {
      d = void 0 === d ? [] : d;
      b = {
        offlineOrchestrationContext: Wrb(a, b, c, d)
      };
      b = Trb(3, b);
      Urb(Srb(), b, a.rootActionId);
    },
    Zrb = function () {
      this.actions = [];
    },
    $rb = function (a, b) {
      b = g.v(b);
      for (var c = b.next(); !c.done; c = b.next()) c = c.value, Xrb(c, 1), a.actions.push(c);
      a.actions.sort(a.j);
    },
    asb = function (a, b) {
      if (b) for (var c = 0; c < a.actions.length; c++) a.actions[c].rootActionId === b && a.actions[c].actionId !== b && (a.actions.splice(c, 1), c--);
    },
    bsb = function (a, b) {
      a = g.v(a.actions);
      for (var c = a.next(); !c.done; c = a.next()) if (c.value.actionId === b) return !0;
      return !1;
    },
    M7 = function (a, b, c, d) {
      g.G.call(this);
      var e = this;
      this.B = a;
      this.Ca = b;
      this.va = c;
      this.S = d;
      this.j = new Zrb();
      this.K = new g.aE();
      this.C = new g.fr(function () {
        e.retry();
      });
      this.ma = NaN;
      this.G = !1;
      this.Ud = {
        Veb: function () {
          return e.j;
        },
        dW: function () {
          return e.K;
        },
        bfb: function () {
          return e.C;
        },
        retry: function () {
          return e.retry();
        }
      };
      g.H(this, this.C);
      this.ea = Aqb(this.B, this.ra.bind(this));
    },
    esb = function (a, b, c, d) {
      var e;
      return g.Ga(function (f) {
        if (1 == f.j) return e = new M7(a, b, c, d), g.z(f, csb(e), 2);
        dsb(e);
        return f.return(e);
      });
    },
    dsb = function (a) {
      var b = a.j.actions[0];
      return a.D ? ("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === (null == b ? void 0 : b.action.actionType) && "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" !== a.D[0].action.actionType && (a.G = !0), Promise.resolve()) : fsb(a);
    },
    fsb = function (a) {
      var b, c, d, e, f, h, l, m, n, p, q, t, u, y, A;
      return g.Ga(function (E) {
        switch (E.j) {
          case 1:
            if (a.D) throw Error("Already processing an action");
            if (a.isDisposed()) return E.return();
            b = a.j.actions.shift();
            $qb(a.va, !b);
            if (void 0 === b) return E.return();
            "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" === b.action.actionType && "DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS" === b.actionId && asb(a.j, b.actionId);
            c = "";
            "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE" === b.action.actionType && b.rootActionId === b.actionId && (c = b.actionId);
            d = [b];
            a.D = d;
            if (e = a.Ca[b.entityType]) {
              E.Ma(2);
              break;
            }
            a.D = void 0;
            return g.z(E, fsb(a), 3);
          case 3:
            return E.return();
          case 2:
            f = g.v(d);
            for (h = f.next(); !h.done; h = f.next()) l = h.value, Xrb(l, 2);
            g.ya(E, 4, 5);
            return g.z(E, Brb(e, d.map(function (L) {
              return L.action;
            })), 7);
          case 7:
            m = E.B, n = g.v(d), h = n.next();
          case 8:
            if (h.done) {
              E.Ma(10);
              break;
            }
            p = h.value;
            q = m.get(p.action);
            return g.z(E, gsb(a, p, q), 9);
          case 9:
            h = n.next();
            E.Ma(8);
            break;
          case 10:
            asb(a.j, c);
          case 5:
            g.Ba(E);
            a.D = void 0;
            g.Ca(E, 6);
            break;
          case 4:
            return t = g.Aa(E), k7("Orchestration error", t), g.ya(E, 12), g.z(E, hsb(a, d), 14);
          case 14:
            g.za(E, 5);
            break;
          case 12:
            u = g.Aa(E);
            k7("Orchestration retry error", u);
            y = g.v(d);
            for (h = y.next(); !h.done; h = y.next()) A = h.value, 3 > A.retryScheduleIndex && $rb(a.j, [A]);
            E.Ma(5);
            break;
          case 6:
            return g.z(E, fsb(a), 0);
        }
      });
    },
    gsb = function (a, b, c) {
      var d, e, f, h, l, m, n, p, q, t;
      return g.Ga(function (u) {
        switch (u.j) {
          case 1:
            d = 3 === b.retryScheduleIndex + 2;
            if ("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS" === c.status) {
              u.Ma(2);
              break;
            }
            if ("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE" !== c.status) {
              u.Ma(0);
              break;
            }
            Yrb(b, c, d);
            if (c.j && 3 > b.retryScheduleIndex + 1) return g.z(u, hsb(a, [b]), 0);
            f = (null == (e = c) ? 0 : e.B) ? c.B : "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN";
            h = {
              entityKey: b.action.entityKey,
              failureReason: f
            };
            m7(a.S, h);
            k7("Orchestration result is not retryable, deleting action");
            return g.z(u, Cqb(a.B, z7(b).key), 0);
          case 2:
            l = void 0;
            try {
              l = null == (m = c.D) ? void 0 : m.map(function (y) {
                return a.createAction(y, b);
              });
            } catch (y) {
              return Yrb(b, c, d), n = {
                entityKey: b.action.entityKey,
                failureReason: "OFFLINE_OPERATION_FAILURE_REASON_UNSUPPORTED_ENTITY_FAILED"
              }, m7(a.S, n), k7("Orchestration subactions creation error", y), u.return();
            }
            Yrb(b, c, d, l);
            if (!l) {
              u.Ma(9);
              break;
            }
            p = l.map(function (y) {
              return z7(y);
            });
            q = 0;
          case 10:
            if (!(q < l.length) || a.G) {
              u.Ma(12);
              break;
            }
            return g.z(u, f7(a.B, {
              mode: "readwrite",
              kc: !0
            }, function (y) {
              var A = [];
              A.push(rqb(y, p.slice(q, q + 10), "offlineOrchestrationActionWrapperEntity"));
              return g.HC.all(A);
            }), 13);
          case 13:
            q += 10;
            u.Ma(10);
            break;
          case 12:
            if (a.G) return a.G = !1, u.return();
          case 9:
            return t = z7(b), g.z(u, Cqb(a.B, t.key), 14);
          case 14:
            Xrb(b, 4), g.xa(u);
        }
      });
    },
    lsb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u;
      return g.Ga(function (y) {
        c = [];
        d = Infinity;
        e = 4E3;
        f = g.v(b);
        for (h = f.next(); !h.done; h = f.next()) l = h.value, m = Number(l.enqueueTimeSec), n = isb(m), p = l.retryScheduleIndex, q = null != p && 0 < p, 0 < n && q ? (d = Math.min(d, m), e = Math.min(n, e)) : c.push(l);
        isFinite(d) && (!a.C.isActive() || d < a.ma) && (a.ma = d, a.C.start(e));
        a.K.zi() || (t = c.length, c = c.filter(function (A) {
          var E;
          A = (null == (E = A.actionProto) ? void 0 : E.actionType) || "OFFLINE_ORCHESTRATION_ACTION_TYPE_UNKNOWN";
          return !jsb.includes(A);
        }), u = c.length < t, !a.C.isActive() && u && a.C.start(1));
        0 < c.length && ksb(a, c);
        return g.z(y, dsb(a), 0);
      });
    },
    nsb = function (a) {
      var b, c, d, e, f, h, l;
      return g.Ga(function (m) {
        if (1 == m.j) return g.z(m, msb(a), 2);
        b = m.B;
        c = [];
        d = g.v(b);
        for (e = d.next(); !e.done; e = d.next()) f = e.value, h = g.JM(f.key), l = h.entityId, bsb(a.j, l) || c.push(f);
        return g.z(m, lsb(a, c), 0);
      });
    },
    isb = function (a) {
      a = 1E3 * a - Date.now();
      return 4E3 < a ? 4E3 : a;
    },
    hsb = function (a, b) {
      var c, d, e;
      return g.Ga(function (f) {
        c = g.v(b);
        for (d = c.next(); !d.done; d = c.next()) {
          e = d.value;
          var h = void 0,
            l = void 0,
            m = (null == (l = e.action) ? void 0 : null == (h = l.actionMetadata) ? void 0 : h.retryScheduleIntervalsInSeconds) || [1, 2, 4];
          h = 1;
          e.retryScheduleIndex < m.length && (h = m[e.retryScheduleIndex]);
          e.j = 1E3 * h + Date.now();
          e.retryScheduleIndex++;
        }
        return g.z(f, osb(a, b), 0);
      });
    },
    csb = function (a) {
      var b;
      return g.Ga(function (c) {
        if (1 == c.j) return g.z(c, i7(a.B, "offlineOrchestrationActionWrapperEntity"), 2);
        b = c.B;
        return g.z(c, lsb(a, b), 0);
      });
    },
    ksb = function (a, b) {
      0 !== b.length && b.forEach(function (c) {
        c = y7(c);
        3 > c.retryScheduleIndex && $rb(a.j, [c]);
      });
    },
    msb = function (a, b) {
      var c;
      return g.Ga(function (d) {
        if (1 == d.j) return g.z(d, i7(a.B, "offlineOrchestrationActionWrapperEntity", b), 2);
        c = d.B;
        return d.return(c.filter(Iqb));
      });
    },
    osb = function (a, b) {
      if (0 === b.length) return Promise.resolve([]);
      b = b.map(function (c) {
        return z7(c);
      });
      return Bqb(a.B, b);
    },
    psb = function () {
      this.j = void 0;
    },
    rsb = function (a, b) {
      var c, d, e, f, h;
      return g.Ga(function (l) {
        c = b.videoId;
        d = b.W();
        e = !0;
        if (b.captionTracks.length) f = Hob(b), a.j = new g.hT(d, b, f);else if (b.Kd) h = g.IBa(b), a.j = new g.mT(d, b.Kd, c, h, b.Lm, b.eventId), e = b.Lm;else return l.return();
        return l.return(new Promise(function (m) {
          var n;
          null == (n = a.j) || n.Zz(function () {
            return g.Ga(function (p) {
              if (1 == p.j) return g.z(p, qsb(a, c, e), 2);
              m();
              g.xa(p);
            });
          });
        }));
      });
    },
    qsb = function (a, b, c) {
      c = void 0 === c ? !0 : c;
      var d, e, f, h, l, m, n, p;
      return g.Ga(function (q) {
        switch (q.j) {
          case 1:
            if (!a.j) return q.return();
            d = [];
            e = g.eT(a.j.j, c);
            f = [];
            for (h = {
              Kz: 0
            }; h.Kz < e.length; h = {
              Kz: h.Kz
            }, h.Kz++) l = e[h.Kz], m = a.j.Vv(l, "json3"), n = g.KA(m, {
              withCredentials: !0,
              format: "RAW"
            }, 3, 500).then(function (t) {
              return function (u) {
                u = {
                  metadata: g.kM(e[t.Kz]),
                  trackData: u.xhr.responseText
                };
                f.push(u);
              };
            }(h)).Bk(function (t) {
              k7("Caption fetch error", t);
            }), d.push(n);
            return g.z(q, Iob(d), 2);
          case 2:
            return g.ya(q, 3), g.z(q, Mqb(b, f), 5);
          case 5:
            g.za(q, 0);
            break;
          case 3:
            p = g.Aa(q), k7("Caption DB transaction error", p), g.xa(q);
        }
      });
    },
    ssb = function (a) {
      var b;
      return g.Ga(function (c) {
        if (1 == c.j) return g.z(c, Nqb(a), 2);
        b = c.B;
        return c.return(!!b && 0 < b.length);
      });
    },
    tsb = function (a, b) {
      this.api = a;
      this.j = b;
      this.logger = new g.RV("woffle");
      this.B = !1;
      this.Ud = {
        rN: this.rN
      };
    },
    usb = function (a) {
      return g.Ga(function (b) {
        return b.return(Oqb(a));
      });
    },
    vsb = function (a) {
      var b;
      return g.Ga(function (c) {
        if (1 == c.j) return g.z(c, g.bAa(a), 2);
        b = c.B;
        return c.return(b.filter(function (d) {
          return !!d.url;
        }).map(function (d) {
          return d.url;
        }));
      });
    },
    N7 = function (a, b) {
      var c = g.UM(b);
      if (1 === c || 0 === c) return Promise.resolve();
      (c = wsb(a, b)) && c.stopVideo();
      a.C = 0;
      return usb(b);
    },
    O7 = function (a, b, c, d) {
      c = void 0 === c ? !1 : c;
      d = void 0 === d ? !0 : d;
      var e = "string" === typeof b ? b : b.videoDetails.videoId;
      2 === g.UM(e) && ((b = wsb(a, e)) ? b.stopVideo() : a.logger.info(function () {
        return "Corresponding player for " + e + " not found. Pausing anyway";
      }), g.VM(e, 2), a.C = 2, c ? xsb(a.j) : d && ysb(a.j));
    },
    wsb = function (a, b) {
      var c;
      return (null == (c = a.player) ? void 0 : c.getVideoData().videoId) === b ? a.player : null;
    },
    P7 = function (a) {
      g.G.call(this);
      this.j = a;
      this.B = Aqb(this.j, this.C.bind(this));
    },
    zsb = function (a, b) {
      var c, d, e, f, h, l, m;
      return g.Ga(function (n) {
        switch (n.j) {
          case 1:
            if (0 === b.length) return n.return([]);
            c = b.map(function (p) {
              return g.KM(p, "transfer");
            });
            return g.z(n, i7(a.j, "transfer", c), 2);
          case 2:
            d = n.B;
            e = d.filter(Iqb).map(function (p) {
              return g.JM(p.key).entityId;
            });
            f = b.filter(function (p) {
              return -1 === e.indexOf(p);
            });
            if (0 === f.length) return n.return([]);
            h = g.v(f);
            l = h.next();
          case 3:
            if (l.done) {
              n.Ma(5);
              break;
            }
            m = l.value;
            return g.z(n, usb(m), 4);
          case 4:
            l = h.next();
            n.Ma(3);
            break;
          case 5:
            return n.return(f);
        }
      });
    },
    Bsb = function (a, b, c, d, e, f) {
      var h, l, m;
      return g.Ga(function (n) {
        h = "STREAM_TYPE_UNKNOWN";
        c.video && c.audio ? (h = "STREAM_TYPE_AUDIO_AND_VIDEO", k7("unexpected stream type")) : c.video && !c.audio ? h = "STREAM_TYPE_VIDEO" : !c.video && c.audio && (h = "STREAM_TYPE_AUDIO");
        l = g.KM(b, "offlineVideoStreams");
        m = {
          numBytesDownloaded: e.toFixed(),
          numTotalBytes: f.toFixed(),
          streamType: h,
          streamState: "DOWNLOAD_STREAM_STATE_IN_PROGRESS",
          formatStreamBytes: JSON.stringify(d),
          itag: "STREAM_TYPE_AUDIO_AND_VIDEO" === h ? Number(c.itag) : void 0
        };
        return g.z(n, f7(a, {
          mode: "readwrite",
          kc: !0
        }, function (p) {
          var q = Z6(p, l, "offlineVideoStreams"),
            t = Z6(p, g.KM(b, "transfer"), "transfer");
          return g.HC.all([q, t]).then(function (u) {
            var y = g.v(u);
            u = y.next().value;
            y = y.next().value;
            if (!y) return c7(p, l).then(function () {});
            u = [b7(p, Asb(u, d, m, l), "offlineVideoStreams")];
            y.offlineVideoStreams || (y.offlineVideoStreams = []);
            -1 === y.offlineVideoStreams.indexOf(l) && (y.offlineVideoStreams.push(l), u.push(b7(p, y, "transfer")));
            return g.HC.all(u);
          });
        }), 0);
      });
    },
    Csb = function (a, b) {
      var c, d, e, f, h;
      return g.Ga(function (l) {
        if (1 == l.j) return c = g.KM(b, "offlineVideoStreams"), g.z(l, h7(a, c, "offlineVideoStreams"), 2);
        d = l.B;
        if (!d || !d.streamsProgress) return l.return();
        e = g.v(d.streamsProgress);
        for (f = e.next(); !f.done; f = e.next()) h = f.value, h.streamState = "DOWNLOAD_STREAM_STATE_COMPLETE", h.numTotalBytes !== h.numBytesDownloaded && (h.numBytesDownloaded = h.numTotalBytes);
        return g.z(l, g7(a, d, "offlineVideoStreams"), 0);
      });
    },
    Asb = function (a, b, c, d) {
      if (a && a.streamsProgress) {
        d = a;
        a: {
          b = b.itag + ";" + b.xtags;
          for (var e = a.streamsProgress, f = 0; f < e.length; f++) {
            var h = JSON.parse(e[f].formatStreamBytes);
            if (h.itag + ";" + h.xtags === b) {
              e[f] = c;
              c = e;
              break a;
            }
          }
          e.push(c);
          c = e;
        }
        d.streamsProgress = c;
      } else a = {
        key: d,
        streamsProgress: [c]
      };
      return a;
    },
    Dsb = function (a, b, c, d) {
      g.G.call(this);
      var e = this;
      this.B = a;
      this.api = b;
      this.Pa = c;
      this.ea = d;
      this.K = new g.aE();
      this.D = new g.fr(function () {
        e.j && "TRANSFER_STATE_TRANSFERRING" === e.j.transferState && e.K.zi() && (3 > (e.j.transferRetryCount || 0) ? O7(e.S, e.G, !1, !1) : N7(e.S, e.G.videoDetails.videoId), e.Nw("TRANSFER_FAILURE_REASON_TIMEOUT_NO_PROGRESS"));
      });
      this.Ca = 0;
      this.ma = !1;
      this.Oa = new g.tJ(this);
      this.Ud = {
        dfb: function () {
          return e.D;
        },
        Oeb: function () {
          return e.ea;
        },
        dW: function () {
          return e.K;
        }
      };
      this.va = Aqb(this.B, this.G1.bind(this));
      this.S = new tsb(b, this);
      this.Va = new psb();
      this.ra = new P7(this.B);
      this.Ga = this.K.Ua("publicytnetworkstatus-online", this.fF.bind(this));
      this.Ja = this.K.Ua("publicytnetworkstatus-offline", this.y$.bind(this));
      g.H(this, this.Oa);
      this.Oa.V(b, "offlinetransferpause", this.z$);
      g.QL(this.api.W()) ? this.C = "mainVideoDownloadStateEntity" : g.DL(this.api.W()) && (this.C = "musicTrackDownloadMetadataEntity");
    },
    Esb = function (a) {
      return g.Ga(function (b) {
        if (1 == b.j) b = g.z(b, Lqb(), 2);else {
          var c = a.ra;
          var d = g.TM();
          d = Object.keys(d);
          c = zsb(c, d);
          b = g.z(b, c, 0);
        }
        return b;
      });
    },
    R7 = function (a, b) {
      b = void 0 === b ? !1 : b;
      var c;
      return g.Ga(function (d) {
        if (1 == d.j) {
          if (a.j) throw Error("Already downloading a video");
          a.ma = !1;
          return g.z(d, Fsb(a), 2);
        }
        return 4 != d.j ? (c = d.B, arb(a.Pa, !c), c && a.K.zi() ? b ? g.z(d, new Promise(function (e) {
          g.AA(e, 1E3);
        }), 4) : d.Ma(4) : (!c && a.j && Q7(a), d.Ma(0))) : g.z(d, Gsb(a, c), 0);
      });
    },
    Hsb = function (a) {
      return g.Ga(function (b) {
        if (1 == b.j) return a.G ? g.z(b, N7(a.S, a.G.videoDetails.videoId), 3) : b.Ma(0);
        Q7(a);
        g.xa(b);
      });
    },
    Isb = function (a, b) {
      var c, d, e;
      return g.Ga(function (f) {
        switch (f.j) {
          case 1:
            return g.ya(f, 2), (c = !!b.captionTracks.length || !!b.Kd) ? g.z(f, ssb(b.videoId), 4) : f.return();
          case 4:
            return (d = f.B) ? f.return() : g.z(f, rsb(a.Va, b), 5);
          case 5:
            g.za(f, 0);
            break;
          case 2:
            e = g.Aa(f), k7("Caption downloading error", e, b.cotn), g.xa(f);
        }
      });
    },
    Gsb = function (a, b) {
      var c, d, e, f, h, l;
      return g.Ga(function (m) {
        switch (m.j) {
          case 1:
            if (a.ma) return m.return();
            a.ma = !0;
            a.j = b;
            c = g.JM(a.j.key);
            d = c.entityId;
            e = void 0;
            if ("TRANSFER_STATE_TRANSFERRING" === a.j.transferState) return g.z(m, S7(a, d), 7);
            if ("TRANSFER_STATE_TRANSFER_IN_QUEUE" !== a.j.transferState || a.j.transferRetryCount || a.j.hasLoggedFirstStarted) {
              m.Ma(3);
              break;
            }
            return g.z(m, S7(a, d), 5);
          case 5:
            return e = m.B, a.j.hasLoggedFirstStarted = !0, g.z(m, Jsb(a), 6);
          case 6:
            brb({
              videoId: d,
              El: a.j,
              offlineModeType: e
            }, void 0, void 0, !0);
            m.Ma(3);
            break;
          case 7:
            e = m.B, o7({
              transferStatusType: "TRANSFER_STATUS_TYPE_RESUME_PROCESSING",
              statusType: "OFFLINING_RETRIED"
            }, {
              videoId: d,
              El: a.j,
              offlineModeType: e
            });
          case 3:
            return g.z(m, Ksb(a), 8);
          case 8:
            return f = null, g.ya(m, 9), g.z(m, Lsb(a, b), 11);
          case 11:
            f = m.B;
            a.G = f;
            g.za(m, 10);
            break;
          case 9:
            return h = g.Aa(m), k7("error getting player response", h, b.cotn), g.z(m, a.Nw("TRANSFER_FAILURE_REASON_INTERNAL"), 12);
          case 12:
            return m.return();
          case 10:
            return l = frb(a.api.W(), b.cotn, f), g.z(m, Isb(a, l), 13);
          case 13:
            return g.z(m, vsb(l.videoId), 14);
          case 14:
            l.Jr = m.B;
            var n = a.S,
              p = b.maximumDownloadQuality;
            l.getPlayerResponse();
            g.VM(l.videoId, 2);
            n.C = 2;
            n.B = !1;
            var q;
            null == (q = n.player) || q.dispose();
            n.player = n.api.bz(9, l);
            q = {};
            g.rG(n.player, (q.localmediachange = n.QI, q.signatureexpired = n.AP, q.statechange = n.x8, q), n);
            p = n.rN(p);
            g.U3a(n.player, g.pH(p, p, !0, "m"), !1);
            g.fW(n.player, !1);
            a.D.start(108E5);
            g.xa(m);
        }
      });
    },
    Fsb = function (a) {
      var b, c;
      return g.Ga(function (d) {
        if (1 == d.j) return g.z(d, i7(a.B, "transfer"), 2);
        b = d.B;
        c = b.filter(Msb).sort(Nsb);
        return 0 === c.length ? d.return() : d.return(c[0]);
      });
    },
    Ksb = function (a) {
      var b, c, d;
      return g.Ga(function (e) {
        if (1 == e.j) {
          if (!a.j) return T7(a, "onTransferStart"), e.return();
          a.D.start(108E5);
          return g.z(e, U7(a, "TRANSFER_STATE_TRANSFERRING"), 2);
        }
        b = a.j;
        return (d = (null == (c = b) ? 0 : c.key) ? g.JM(b.key).entityId : "") && a.C ? g.z(e, t7(d, a.C, a.B, "DOWNLOAD_STATE_DOWNLOAD_IN_PROGRESS"), 0) : e.Ma(0);
      });
    },
    xsb = function (a) {
      var b, c, d, e;
      g.Ga(function (f) {
        switch (f.j) {
          case 1:
            if (!a.j) {
              T7(a, "onTransferPausedByUser");
              f.Ma(2);
              break;
            }
            b = a.j;
            a.D.stop();
            return g.z(f, U7(a, "TRANSFER_STATE_PAUSED_BY_USER"), 3);
          case 3:
            d = (null == (c = b) ? 0 : c.key) ? g.JM(b.key).entityId : "";
            if (!d || !a.C) {
              f.Ma(4);
              break;
            }
            return g.z(f, t7(d, a.C, a.B, "DOWNLOAD_STATE_PAUSED"), 4);
          case 4:
            return g.z(f, S7(a, d), 6);
          case 6:
            e = f.B, crb({
              videoId: d,
              El: b,
              offlineModeType: e
            });
          case 2:
            Q7(a), R7(a), g.xa(f);
        }
      });
    },
    ysb = function (a) {
      var b, c, d;
      g.Ga(function (e) {
        if (1 == e.j) {
          if (!a.j) return T7(a, "onTransferPausedByNetwork"), e.return();
          a.D.stop();
          return g.z(e, U7(a, "TRANSFER_STATE_TRANSFER_IN_QUEUE"), 2);
        }
        if (3 != e.j) return b = a.j, (d = (null == (c = b) ? 0 : c.key) ? g.JM(b.key).entityId : "") && a.C ? g.z(e, t7(d, a.C, a.B, "DOWNLOAD_STATE_PAUSED"), 3) : e.Ma(3);
        Q7(a);
        g.xa(e);
      });
    },
    Osb = function (a) {
      var b, c, d, e, f;
      g.Ga(function (h) {
        switch (h.j) {
          case 1:
            if (!a.j) return T7(a, "onTransferComplete"), h.return();
            b = a.j;
            a.D.stop();
            if (!b || !a.G) {
              h.Ma(2);
              break;
            }
            c = frb(a.api.W(), b.cotn, a.G);
            return g.z(h, Isb(a, c), 2);
          case 2:
            return g.z(h, U7(a, "TRANSFER_STATE_COMPLETE", "DOWNLOAD_STREAM_STATE_COMPLETE"), 4);
          case 4:
            e = (null == (d = b) ? 0 : d.key) ? g.JM(b.key).entityId : "";
            if (!e || !a.C) {
              h.Ma(5);
              break;
            }
            return g.z(h, t7(e, a.C, a.B, "DOWNLOAD_STATE_COMPLETE"), 5);
          case 5:
            return g.z(h, Csb(a.B, e), 7);
          case 7:
            return g.z(h, S7(a, e), 8);
          case 8:
            f = h.B, o7({
              transferStatusType: "TRANSFER_STATUS_TYPE_COMPLETED",
              statusType: "SUCCESS"
            }, {
              videoId: e,
              El: b,
              offlineModeType: f
            }), Q7(a), R7(a), g.xa(h);
        }
      });
    },
    Psb = function (a, b, c) {
      var d, e;
      g.Ga(function (f) {
        switch (f.j) {
          case 1:
            if (!a.j) return T7(a, "onTransferProgress: " + b), f.return();
            if ("TRANSFER_STATE_TRANSFERRING" === a.j.transferState) {
              f.Ma(2);
              break;
            }
            return g.z(f, Ksb(a), 2);
          case 2:
            d = Date.now();
            if (!(1E3 < d - a.Ca)) {
              f.Ma(4);
              break;
            }
            a.Ca = d;
            return g.z(f, Bsb(a.B, c.videoId, c.B, c.cN, c.bytesDownloaded, c.j), 5);
          case 5:
            return g.z(f, S7(a, b), 6);
          case 6:
            e = f.B, brb({
              videoId: b,
              El: a.j,
              offlineModeType: e
            }, c.bytesDownloaded, c.j);
          case 4:
            a.D.start(108E5), g.xa(f);
        }
      });
    },
    Qsb = function (a) {
      var b = 3 > (a.j.transferRetryCount || 0);
      b && (a = a.j, a.transferRetryCount = (a.transferRetryCount || 0) + 1);
      return b;
    },
    Rsb = function (a, b) {
      b = void 0 === b ? "TRANSFER_FAILURE_REASON_UNKNOWN" : b;
      var c, d, e, f;
      return g.Ga(function (h) {
        if (1 == h.j) return a.j || T7(a, "setTransferToFailed: " + b), c = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", "TRANSFER_FAILURE_REASON_NETWORK" === b ? c = "OFFLINE_OPERATION_FAILURE_REASON_NETWORK_REQUEST_FAILED" : "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE" === b && (c = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED"), g.z(h, U7(a, "TRANSFER_STATE_FAILED", "DOWNLOAD_STREAM_STATE_ERROR_STREAMS_MISSING", b), 2);
        if (3 != h.j) return m7(a.ea, {
          entityKey: null == (d = a.j) ? void 0 : d.key,
          failureReason: c
        }), e = a.j ? g.JM(a.j.key).entityId : "", g.z(h, S7(a, e), 3);
        f = h.B;
        var l = {
            videoId: e,
            El: a.j,
            offlineModeType: f
          },
          m = b,
          n = {
            transferStatusType: "TRANSFER_STATUS_TYPE_TERMINATED_WITH_FAILURE",
            statusType: "FAILED"
          };
        m && (n.transferFailureReason = m, n.failureReason = drb(m));
        o7(n, l);
        g.xa(h);
      });
    },
    U7 = function (a, b, c, d) {
      var e;
      return g.Ga(function (f) {
        if (1 == f.j) {
          if (!a.j) return T7(a, "saveTransferState: " + b), f.return();
          a.j.transferState = b;
          a.j.failureReason = d;
          g.ya(f, 2);
          return g.z(f, Jsb(a, function (h) {
            return c ? $6(h, "offlineVideoStreams", a.j.offlineVideoStreams).then(function (l) {
              for (var m = g.v(l), n = m.next(); !n.done; n = m.next()) if ((n = n.value) && n.streamsProgress) {
                n = g.v(n.streamsProgress);
                for (var p = n.next(); !p.done; p = n.next()) p.value.streamState = c;
              }
              return rqb(h, l.filter(function (q) {
                return !!q;
              }), "offlineVideoStreams");
            }) : g.HC.resolve(void 0);
          }), 4);
        }
        if (2 != f.j) return g.za(f, 0);
        e = g.Aa(f);
        return e instanceof g.AC && "QUOTA_EXCEEDED" === e.type ? g.z(f, a.Nw("TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE"), 0) : f.Ma(0);
      });
    },
    Jsb = function (a, b) {
      var c;
      return g.Ga(function (d) {
        if (!a.j) return d.return();
        c = a.j;
        return g.z(d, f7(a.B, {
          mode: "readwrite",
          kc: !0
        }, function (e) {
          var f = [b7(e, c, "transfer")];
          b && f.push(b(e));
          return g.HC.all(f);
        }), 0);
      });
    },
    Q7 = function (a) {
      a.j = void 0;
      a.G = void 0;
      a.D.stop();
    },
    Lsb = function (a, b) {
      var c, d, e, f, h;
      return g.Ga(function (l) {
        if (1 == l.j) return c = g.JM(b.key), d = c.entityId, e = g.KM(d, "playbackData"), g.z(l, h7(a.B, e, "playbackData"), 2);
        f = l.B;
        if (null == (h = f) ? 0 : h.playerResponseJson) return l.return(JSON.parse(f.playerResponseJson));
        throw Error("No PlayerResponse found");
      });
    },
    T7 = function (a, b) {
      a.api.Ba("woffle", {
        mcte: b
      });
      k7("missing current transfer entity.");
    },
    S7 = function (a, b) {
      var c, d, e;
      return g.Ga(function (f) {
        if (1 == f.j) return c = void 0, a.api.W().N("html5_oduc_transfer_logging") ? g.z(f, h7(a.B, g.KM(b, "videoDownloadContextEntity"), "videoDownloadContextEntity"), 3) : f.Ma(2);
        2 != f.j && (c = f.B);
        return f.return(null != (e = null == (d = c) ? void 0 : d.offlineModeType) ? e : void 0);
      });
    },
    Msb = function (a) {
      return void 0 !== Ssb[a.transferState];
    },
    Nsb = function (a, b) {
      var c = Ssb[a.transferState],
        d = Ssb[b.transferState];
      return c !== d ? c - d : Number(a.enqueuedTimestampMs) - Number(b.enqueuedTimestampMs);
    },
    V7 = function (a, b) {
      var c = this;
      this.Z = a;
      this.api = b;
      this.K = new g.aE();
      this.C = new Xqb(function () {
        return Tsb(c);
      }, function () {
        c.tR();
      }, this.api.yp(), this.api.N.bind(this.api));
      this.j = new l7(this.api);
      this.D = new g.hl();
      this.Ud = {
        ZV: function () {
          return c.C.Ud.ZV();
        },
        dW: function () {
          return c.K;
        },
        Peb: function () {
          return c.C;
        },
        rO: function () {
          return c.rO();
        },
        pR: function () {
          return c.pR();
        },
        tR: function () {
          return c.tR();
        },
        iF: function () {
          return c.iF();
        }
      };
      Yqb(this.C);
    },
    Tsb = function (a) {
      return g.Ga(function (b) {
        a.api.Ra("onOrchestrationBecameLeader");
        return g.z(b, a.pR(), 0);
      });
    },
    Vsb = function (a) {
      var b, c;
      return g.Ga(function (d) {
        if (1 == d.j) return g.z(d, j7(), 2);
        if (3 != d.j) {
          b = d.B;
          if (!b) return k7("PES is undefined"), d.return();
          a.B = new Dsb(b, a.api, a.C, a.j);
          c = a.ZC(b);
          return g.z(d, esb(b, c, a.C, a.j), 3);
        }
        a.G = d.B;
        return g.z(d, Usb(a), 0);
      });
    },
    Usb = function (a) {
      var b;
      return g.Ga(function (c) {
        switch (c.j) {
          case 1:
            if (!a.B) return k7("transferManager is undefined"), c.return();
            if (a.B.j) {
              c.Ma(2);
              break;
            }
            return g.z(c, R7(a.B), 2);
          case 2:
            return g.z(c, a.refreshAllStaleEntities(43200, !0), 4);
          case 4:
            return g.z(c, a.qM(), 5);
          case 5:
            return a.S = g.BA(function () {
              a.refreshAllStaleEntities(43200, !0);
              a.qM();
            }, 9E5), g.iC(g.kC(), function () {
              return a.iF();
            }), g.z(c, j7(), 6);
          case 6:
            return b = c.B, g.z(c, Uqb(b), 7);
          case 7:
            Zqb(a.C), g.xa(c);
        }
      });
    },
    Wsb = function () {
      var a, b, c, d, e, f;
      return g.Ga(function (h) {
        switch (h.j) {
          case 1:
            return g.z(h, j7(), 2);
          case 2:
            a = h.B;
            if (!a) return h.return([]);
            b = Date.now() / 1E3;
            return g.z(h, i7(a, "offlineVideoPolicy"), 3);
          case 3:
            c = h.B, d = g.v(c), e = d.next();
          case 4:
            if (e.done) {
              h.Ma(6);
              break;
            }
            f = e.value;
            if (!(f.expirationTimestamp && Number(f.expirationTimestamp) < b)) {
              h.Ma(5);
              break;
            }
            f.action = "OFFLINE_VIDEO_POLICY_ACTION_DISABLE";
            return g.z(h, g7(a, f, "offlineVideoPolicy"), 5);
          case 5:
            e = d.next();
            h.Ma(4);
            break;
          case 6:
            return h.return(c.map(function (l) {
              return l.key;
            }));
        }
      });
    },
    W7 = function (a, b, c, d, e) {
      var f, h, l;
      return g.Ga(function (m) {
        if (1 == m.j) return g.z(m, j7(), 2);
        f = m.B;
        if (!f) return m.return([]);
        h = b.map(function (n) {
          var p = g.KM(n, c);
          p = {
            actionType: d,
            entityKey: p,
            actionMetadata: Object.assign({}, grb(), e)
          };
          "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH" !== d && (p.actionMetadata.priority = 0);
          n = new x7(c, n, p);
          return z7(n);
        });
        l = Bqb(f, h);
        Yqb(a.C);
        return m.return(l);
      });
    },
    Xsb = function (a, b, c) {
      var d, e, f, h, l, m, n;
      return g.Ga(function (p) {
        switch (p.j) {
          case 1:
            d = [], e = g.v(b), f = e.next();
          case 2:
            if (f.done) {
              p.Ma(4);
              break;
            }
            h = f.value;
            if (h.upToDate || c && !h.shouldAutoSyncMetadata || !h.playlistId) {
              p.Ma(3);
              break;
            }
            l = {};
            m = {
              nextAutoRefreshIntervalSeconds: h.checkInSeconds,
              autoSync: c
            };
            l = {
              mainPlaylistEntityActionMetadata: m
            };
            return g.z(p, W7(a, [h.playlistId], "mainPlaylistEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", l), 6);
          case 6:
            (n = p.B) && d.push.apply(d, g.pa(n));
          case 3:
            f = e.next();
            p.Ma(2);
            break;
          case 4:
            return p.return(d);
        }
      });
    },
    Zsb = function (a) {
      var b, c, d, e, f, h;
      return g.Ga(function (l) {
        switch (l.j) {
          case 1:
            return b = g.gR(), c = Pqb(a), d = g.VQ(Ysb), g.ya(l, 2), g.z(l, g.HP(b, c, d), 4);
          case 4:
            e = l.B;
            g.za(l, 3);
            break;
          case 2:
            throw f = g.Aa(l), k7("GetOffline fetch request error", f), Error("GetOffline fetch request error");
          case 3:
            if (e) {
              if (0 === (null == (h = e.errorMetadata) ? void 0 : h.status)) throw Error("Empty response body");
              if (!e.videos || !e.videos.length) throw Error("No data");
            } else throw Error("Network request failed");
            return l.return(e.videos.map(function (m) {
              return m.offlineVideoData;
            }));
        }
      });
    },
    $sb = function (a) {
      var b, c, d, e, f, h;
      return g.Ga(function (l) {
        switch (l.j) {
          case 1:
            return b = g.gR(), c = Qqb(a), d = g.VQ(Ysb), g.ya(l, 2), g.z(l, g.HP(b, c, d), 4);
          case 4:
            e = l.B;
            g.za(l, 3);
            break;
          case 2:
            throw f = g.Aa(l), k7("GetOffline fetch request error for playlist", f), Error("GetOffline fetch request error for playlist");
          case 3:
            if (e) {
              if (0 === (null == (h = e.errorMetadata) ? void 0 : h.status)) throw Error("Empty response body");
              if (!e.playlists || !e.playlists.length) throw Error("No data");
            } else throw Error("Network request failed");
            return l.return(e.playlists.map(function (m) {
              return m.offlinePlaylistData;
            }));
        }
      });
    },
    btb = function (a, b, c, d) {
      var e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa, ia, Da, ha, T, Wa, r, U, lb;
      return g.Ga(function (gb) {
        switch (gb.j) {
          case 1:
            return g.z(gb, j7(), 2);
          case 2:
            e = gb.B;
            if (!e) return gb.return([]);
            f = [];
            if (null == (h = d) ? 0 : h.length) {
              f = d;
              gb.Ma(3);
              break;
            }
            return g.z(gb, i7(e, "mainPlaylistEntity"), 4);
          case 4:
            f = gb.B;
          case 3:
            if (!f.length) return gb.return([]);
            l = [];
            m = Date.now() / 1E3;
            n = g.v(f);
            p = n.next();
          case 5:
            if (p.done) return l.length ? g.z(gb, atb(l), 10) : gb.return([]);
            q = p.value;
            if (!q.downloadState) {
              t = void 0;
              gb.Ma(8);
              break;
            }
            return g.z(gb, h7(e, q.downloadState, "mainPlaylistDownloadStateEntity"), 9);
          case 9:
            t = gb.B;
          case 8:
            u = t;
            y = void 0;
            E = (A = null == (y = q) ? void 0 : y.entityMetadata) && A.nextAutoRefreshIntervalSeconds ? Number(A.nextAutoRefreshIntervalSeconds) : NaN;
            L = Number.isNaN(E) ? a : E;
            F = I = void 0;
            S = (null == (I = u) ? 0 : I.lastSyncedTimestampMillis) ? Number(null == (F = u) ? void 0 : F.lastSyncedTimestampMillis) / 1E3 : 0;
            ea = Y = void 0;
            ta = (null == (Y = u) ? 0 : Y.addedTimestampMillis) ? Number(null == (ea = u) ? void 0 : ea.addedTimestampMillis) / 1E3 : 0;
            if (c || !A || S + L <= m) {
              na = [];
              fa = void 0;
              if (null == (fa = q.videos) ? 0 : fa.length) for (ia = g.v(q.videos), Da = ia.next(); !Da.done; Da = ia.next()) ha = Da.value, T = JSON.parse(g.JM(ha).entityId), T.videoId && na.push(T.videoId);
              Wa = "0";
              A && (r = void 0, Wa = String(Number(null != (r = A.offlineLastModifiedTimestampSeconds) ? r : 0).toFixed()));
              U = {
                playlistId: q.playlistId,
                videoIds: na,
                offlineLastModifiedTimestamp: Wa,
                autoSync: b,
                offlineDateAddedTimestamp: String(ta)
              };
              l.push(U);
            }
            p = n.next();
            gb.Ma(5);
            break;
          case 10:
            return lb = gb.B, gb.return(lb);
        }
      });
    },
    ctb = function () {
      var a, b, c, d, e;
      return g.Ga(function (f) {
        if (1 == f.j) return g.z(f, j7(), 2);
        if (3 != f.j) return (a = f.B) ? g.z(f, i7(a, "refresh"), 3) : f.return(!1);
        b = f.B;
        if (null == (c = b[0]) || !c.refreshTime) return f.return(!1);
        d = Number(b[0].refreshTime);
        e = Date.now() / 1E3;
        return f.return(isFinite(d) && e >= d);
      });
    },
    etb = function (a) {
      var b, c, d;
      return g.Ga(function (e) {
        switch (e.j) {
          case 1:
            return g.ya(e, 2), g.z(e, dtb(a), 4);
          case 4:
            return c = e.B, g.z(e, trb(c), 5);
          case 5:
            b = wrb(c);
            g.za(e, 3);
            break;
          case 2:
            d = g.Aa(e), k7("getAndProcessSmartDownloadsResponse request or processing error", d);
          case 3:
            return e.return(b);
        }
      });
    },
    ftb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa;
      return g.Ga(function (ia) {
        switch (ia.j) {
          case 1:
            return g.z(ia, j7(), 2);
          case 2:
            c = ia.B;
            if (!c) return ia.return([]);
            d = [];
            if (null == (e = b) ? 0 : e.length) {
              d = b;
              ia.Ma(3);
              break;
            }
            return g.z(ia, i7(c, "musicPlaylist"), 4);
          case 4:
            d = ia.B;
          case 3:
            if (!d.length) return ia.return([]);
            f = [];
            Date.now();
            h = g.v(d);
            l = h.next();
          case 5:
            if (l.done) return f.length ? g.z(ia, atb(f), 10) : ia.return([]);
            m = l.value;
            n = void 0;
            q = (p = null == (n = m) ? void 0 : n.entityMetadata) && p.nextAutoRefreshIntervalSeconds ? Number(p.nextAutoRefreshIntervalSeconds) : NaN;
            Number.isNaN(q);
            u = t = 0;
            if (!m.downloadMetadata) {
              ia.Ma(8);
              break;
            }
            return g.z(ia, h7(c, m.downloadMetadata, "musicPlaylistDownloadMetadataEntity"), 9);
          case 9:
            y = ia.B, E = A = void 0, t = Number(null != (E = null == (A = y) ? void 0 : A.addedTimestampMillis) ? E : "0") / 1E3, I = L = void 0, u = Number(null != (I = null == (L = y) ? void 0 : L.lastModifiedTimestampMillis) ? I : "0") / 1E3;
          case 8:
            F = [];
            S = void 0;
            if (null == (S = m.tracks) ? 0 : S.length) for (Y = g.v(m.tracks), ea = Y.next(); !ea.done; ea = Y.next()) ta = ea.value, F.push(g.JM(ta).entityId);
            na = {
              playlistId: m.playlistId,
              videoIds: F,
              offlineLastModifiedTimestamp: String(u.toFixed()),
              autoSync: a,
              offlineDateAddedTimestamp: String(t.toFixed())
            };
            f.push(na);
            l = h.next();
            ia.Ma(5);
            break;
          case 10:
            return fa = ia.B, ia.return(fa);
        }
      });
    },
    dtb = function (a) {
      var b, c, d, e, f, h, l;
      return g.Ga(function (m) {
        switch (m.j) {
          case 1:
            return b = g.gR(), g.z(m, j7(), 2);
          case 2:
            c = m.B;
            if (!c) {
              m.Ma(3);
              break;
            }
            return g.z(m, Tqb(c), 4);
          case 4:
            d = m.B;
          case 3:
            var n = d;
            e = {
              context: g.EP(),
              browseId: "FEdownloads",
              browseRequestSupportedMetadata: {
                downloadsBrowseParams: {
                  offlineFeatureSettingState: {
                    isSdEnabled: a
                  },
                  offlineClientState: n
                }
              }
            };
            f = g.VQ(gtb);
            g.ya(m, 5);
            return g.z(m, g.HP(b, e, f), 7);
          case 7:
            h = m.B;
            g.za(m, 6);
            break;
          case 5:
            throw l = g.Aa(m), k7("DPS fetch request error for smart downloads", l), Error("DPS fetch request error for smart downloads");
          case 6:
            if (!h) throw Error("Network request failed");
            return m.return(h);
        }
      });
    },
    atb = function (a) {
      var b, c, d, e, f, h;
      return g.Ga(function (l) {
        switch (l.j) {
          case 1:
            return b = g.gR(), c = Rqb(a), d = g.VQ(htb), g.ya(l, 2), g.z(l, g.HP(b, c, d), 4);
          case 4:
            e = l.B;
            g.za(l, 3);
            break;
          case 2:
            throw f = g.Aa(l), k7("offlinePlaylistSyncCheck fetch request error", f), Error("offlinePlaylistSyncCheck fetch request error");
          case 3:
            if (e) {
              if (0 === (null == (h = e.errorMetadata) ? void 0 : h.status)) throw Error("Empty response body");
              if (!e.offlinePlaylistSyncCheckDatas || !e.offlinePlaylistSyncCheckDatas.length) throw Error("No data");
            } else throw Error("Network request failed");
            return l.return(e.offlinePlaylistSyncCheckDatas.map(function (m) {
              return m.offlinePlaylistSyncCheckData;
            }));
        }
      });
    },
    itb = function (a, b, c) {
      this.j = a;
      this.Z = b;
      this.D = c;
      this.C = this.Z.N("html5_oduc_transfer_logging");
    },
    ltb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I;
      return g.Ga(function (F) {
        switch (F.j) {
          case 1:
            return c = p7(b), d = g.JM(b.entityKey), e = d.entityId, f = [], g.ya(F, 2), g.z(F, jtb(a, e), 4);
          case 4:
            f = F.B;
            if (!(a.Z.N("woffle_enable_main_downloads_library") && (null == (h = f) ? 0 : h.length))) {
              F.Ma(5);
              break;
            }
            return g.z(F, zrb(a.j, [b.entityKey]), 5);
          case 5:
            g.za(F, 3);
            break;
          case 2:
            return l = g.Aa(F), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.AC && "QUOTA_EXCEEDED" === l.type && (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), F.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n));
          case 3:
            p = [];
            if (null == (q = f) ? 0 : q.length) for (t = g.v(f), u = t.next(); !u.done; u = t.next()) if (y = u.value, A = y.offlineVideoData, E = void 0, null == (E = A) ? 0 : E.videoId) L = void 0, I = Number((null == (L = b.actionMetadata) ? void 0 : L.priority) || 0) + 1, p.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", A.videoId, "mainVideoEntity", I, X7, ktb(b, A, e)));
            return F.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, p));
        }
      });
    },
    ntb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa, ia, Da, ha, T, Wa, r, U, lb, gb, Eb, vb, sb, Rb, Sa, ib, w, B, D, C, J, K, R, V, oa, da, la, ua, Ha, Tb, uc, Mb, Ab, ab, jc, kc, Zb, hd, Ac, Wc, yd, Fc, qd, Hd, Cc, fe, Id, Xe, ub;
      return g.Ga(function (Pb) {
        switch (Pb.j) {
          case 1:
            return c = p7(b), d = b.entityKey, e = g.JM(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.z(Pb, i7(a.j, "mainPlaylistEntity"), 5)) : g.z(Pb, h7(a.j, d, "mainPlaylistEntity"), 4);
          case 4:
            (l = Pb.B) && f.push(l);
            Pb.Ma(3);
            break;
          case 5:
            f = Pb.B;
          case 3:
            if (null == (m = f) || !m.length) return Pb.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            n = g.Q(b.actionMetadata, mtb);
            q = null == (p = n) ? void 0 : p.nextAutoRefreshIntervalSeconds;
            u = null == (t = n) ? void 0 : t.autoSync;
            y = [];
            E = A = !0;
            L = !1;
            if (!h && !1 === u) {
              Pb.Ma(6);
              break;
            }
            g.ya(Pb, 7);
            return g.z(Pb, btb(0, !!u, !0, f), 9);
          case 9:
            y = Pb.B;
            g.za(Pb, 8);
            break;
          case 7:
            I = g.Aa(Pb);
            if (!(I instanceof Error && "No data" === I.message)) {
              I instanceof Error && "Empty response body" === I.message && k7(I.message);
              Pb.Ma(8);
              break;
            }
            return "!*$_ALL_ENTITIES_!*$" === e ? g.z(Pb, srb(a.j, b, a.D, a.C), 8) : g.z(Pb, qrb(e, a.j, b, a.D, a.C), 8);
          case 8:
            if (!y.length || !h && y[0].playlistId !== e) return Pb.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
          case 6:
            if (h) {
              F = [];
              S = g.v(y);
              for (Y = S.next(); !Y.done; Y = S.next()) ea = Y.value, ea.upToDate || u && !ea.shouldAutoSyncMetadata || !ea.playlistId || (ta = {
                nextAutoRefreshIntervalSeconds: ea.checkInSeconds,
                autoSync: u
              }, F.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", ea.playlistId, "mainPlaylistEntity", 0, X7, {
                mainPlaylistEntityActionMetadata: ta
              })));
              return Pb.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, F));
            }
            y.length && (na = y[0], L = !!na.upToDate, u && (A = null != (fa = na.shouldAutoSyncMetadata) ? fa : !0, E = null != (ia = na.shouldAutoSyncVideos) ? ia : !0, na.checkInSeconds && (q = na.checkInSeconds)));
            if (L || !A) return Pb.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            Da = [];
            ha = f[0];
            if (!ha.downloadState) {
              T = void 0;
              Pb.Ma(15);
              break;
            }
            return g.z(Pb, h7(a.j, ha.downloadState, "mainPlaylistDownloadStateEntity"), 16);
          case 16:
            T = Pb.B;
          case 15:
            return Wa = T, U = (null == (r = Wa) ? 0 : r.addedTimestampMillis) ? String(Wa.addedTimestampMillis) : void 0, g.ya(Pb, 17), g.z(Pb, jtb(a, e, U, q), 19);
          case 19:
            Da = Pb.B;
            g.za(Pb, 18);
            break;
          case 17:
            lb = g.Aa(Pb);
            if (!(lb instanceof Error && "No data" === lb.message)) {
              if (lb instanceof Error && "Empty response body" === lb.message) k7(lb.message);else return gb = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", Eb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", lb instanceof g.AC && "QUOTA_EXCEEDED" === lb.type && (gb = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", Eb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), Pb.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, gb, Eb));
              Pb.Ma(18);
              break;
            }
            return g.z(Pb, qrb(e, a.j, b, a.D, a.C), 18);
          case 18:
            if (!E) return Pb.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            vb = [];
            sb = new Map();
            if (null == (Rb = Da) ? 0 : Rb.length) for (Sa = g.v(Da), ib = Sa.next(); !ib.done; ib = Sa.next()) w = ib.value, B = w.offlineVideoData, D = void 0, (null == (D = B) ? 0 : D.videoId) && sb.set(B.videoId, B);
            C = new Map();
            J = [];
            if (null == (K = ha) ? 0 : null == (R = K.videos) ? 0 : R.length) for (V = g.v(ha.videos), oa = V.next(); !oa.done; oa = V.next()) if (da = oa.value, la = JSON.parse(g.JM(da).entityId), ua = la.videoId) sb.has(ua) ? (C.set(ua, sb.get(ua)), sb.delete(ua)) : J.push(ua);
            Tb = Number((null == (Ha = b.actionMetadata) ? void 0 : Ha.priority) || 0) + 1;
            uc = g.v(sb.entries());
            for (Mb = uc.next(); !Mb.done; Mb = uc.next()) Ab = Mb.value, ab = g.v(Ab), jc = ab.next().value, kc = ab.next().value, Zb = jc, hd = kc, vb.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", Zb, "mainVideoEntity", Tb, X7, ktb(b, hd, e)));
            Ac = g.v(C.entries());
            for (Wc = Ac.next(); !Wc.done; Wc = Ac.next()) yd = Wc.value, Fc = g.v(yd), qd = Fc.next().value, Hd = Fc.next().value, Cc = qd, fe = Hd, vb.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", Cc, "mainVideoEntity", Tb, X7, ktb(b, fe, e)));
            Id = g.v(J);
            for (Xe = Id.next(); !Xe.done; Xe = Id.next()) ub = Xe.value, vb.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE", ub, "mainVideoEntity", 0, X7));
            return Pb.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, vb));
        }
      });
    },
    otb = function (a, b) {
      var c, d;
      return g.Ga(function (e) {
        switch (e.j) {
          case 1:
            return c = p7(b), g.ya(e, 2), d = g.JM(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, srb(a.j, b, a.D, a.C), 5) : g.z(e, qrb(d, a.j, b, a.D, a.C), 6);
          case 6:
            if (!a.Z.N("woffle_enable_main_downloads_library")) {
              e.Ma(5);
              break;
            }
            return g.z(e, Arb(a.j, b.entityKey), 5);
          case 5:
            g.za(e, 3);
            break;
          case 2:
            return g.Aa(e), e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
          case 3:
            return e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
        }
      });
    },
    jtb = function (a, b, c, d) {
      var e, f, h, l, m, n;
      return g.Ga(function (p) {
        switch (p.j) {
          case 1:
            return g.z(p, $sb([b]), 2);
          case 2:
            return e = p.B, g.z(p, ptb(a, e[0], c, d), 3);
          case 3:
            return f = p.B, h = f.mainPlaylistEntity, l = f.J$, m = orb(h, l.avatar), g.ya(p, 4), g.z(p, E7(m), 6);
          case 6:
            g.za(p, 5);
            break;
          case 4:
            n = g.Aa(p), n instanceof Error && "Failed to fetch" === n.message && k7(n.message);
          case 5:
            return p.return(e[0].videos);
        }
      });
    },
    ptb = function (a, b, c, d) {
      var e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S;
      return g.Ga(function (Y) {
        if (1 == Y.j) {
          e = Date.now().toString();
          c || (c = e);
          f = b.videos;
          h = b.playlistId;
          l = [];
          m = [];
          if (f) for (n = g.v(f), p = n.next(); !p.done; p = n.next()) {
            q = p.value;
            t = q.offlineVideoData;
            if (!t || !t.videoId) throw Error("Invalid offlineVideoData");
            u = t.videoId;
            y = {
              videoId: u,
              playlistId: h
            };
            A = {
              id: g.KM(JSON.stringify(y), "mainPlaylistVideoEntity"),
              video: g.KM(u, "mainVideoEntity")
            };
            l.push(A);
            m.push(A.id);
          }
          E = b.channel.offlineChannelData;
          L = qtb(g.KM(h, "ytMainChannelEntity"), E);
          I = {
            key: g.KM(h, "mainPlaylistDownloadStateEntity"),
            addedTimestampMillis: c,
            lastSyncedTimestampMillis: e
          };
          F = {
            key: g.KM(h, "mainPlaylistEntity"),
            playlistId: h,
            channelOwner: L.id,
            videos: m,
            title: b.title,
            thumbnailStyleData: rtb(b),
            visibility: stb(b),
            downloadState: I.key
          };
          (null == (S = F) ? 0 : S.entityMetadata) ? (F.entityMetadata.offlineLastModifiedTimestampSeconds = b.lastModifiedTimestamp, d && (F.entityMetadata.nextAutoRefreshIntervalSeconds = String(d))) : F && (F.entityMetadata = {
            nextAutoRefreshIntervalSeconds: d ? String(d) : void 0,
            offlineLastModifiedTimestampSeconds: b.lastModifiedTimestamp
          });
          return g.z(Y, f7(a.j, {
            mode: "readwrite",
            kc: !0
          }, function (ea) {
            for (var ta = b7(ea, F, "mainPlaylistEntity"), na = b7(ea, L, "ytMainChannelEntity"), fa = b7(ea, I, "mainPlaylistDownloadStateEntity"), ia = [], Da = g.v(l), ha = Da.next(); !ha.done; ha = Da.next()) ia.push(b7(ea, ha.value, "mainPlaylistVideoEntity"));
            return g.HC.all([ta, na, fa].concat(g.pa(ia)));
          }), 2);
        }
        return Y.return({
          mainPlaylistEntity: F,
          J$: L,
          Jfb: l
        });
      });
    },
    qtb = function (a, b) {
      return {
        id: a,
        channelId: b.channelId,
        title: b.title,
        avatar: b.thumbnail
      };
    },
    rtb = function (a) {
      var b = [],
        c = a.videos;
      c && 0 < c.length && b.push({
        key: Number("PLAYLIST_THUMBNAIL_STYLE_FIRST_VIDEO"),
        value: {
          collageThumbnail: {
            coverThumbnail: c[0].offlineVideoData.thumbnail
          }
        }
      });
      if ((a = a.additionalMetadadatas) && 0 < a.length) for (a = g.v(a), c = a.next(); !c.done; c = a.next()) {
        var d = c.value.offlineBundleItemPlaylistData,
          e = void 0;
        c = null == (e = d) ? void 0 : e.style;
        e = void 0;
        d = {
          collageThumbnail: {
            coverThumbnail: null == (e = d) ? void 0 : e.coverThumbnail
          }
        };
        switch (c) {
          case "BUNDLE_ITEM_STYLE_UNSPECIFIED":
            b.push({
              key: Number("PLAYLIST_THUMBNAIL_STYLE_UNKNOWN"),
              value: d
            });
            break;
          case "BUNDLE_ITEM_STYLE_TWO_BY_TWO":
            b.push({
              key: Number("PLAYLIST_THUMBNAIL_STYLE_TWO_BY_TWO"),
              value: d
            });
            break;
          case "BUNDLE_ITEM_STYLE_ONE_AND_TWO_AVATAR":
            b.push({
              key: Number("PLAYLIST_THUMBNAIL_STYLE_ONE_AND_TWO_AVATAR"),
              value: d
            });
            break;
          case "BUNDLE_ITEM_STYLE_ONE_AND_TWO":
            b.push({
              key: Number("PLAYLIST_THUMBNAIL_STYLE_ONE_AND_TWO"),
              value: d
            });
        }
      }
      return b;
    },
    stb = function (a) {
      switch (a.privacy) {
        case "PRIVATE":
          return "PLAYLIST_VISIBILITY_PRIVATE";
        case "PUBLIC":
          return "PLAYLIST_VISIBILITY_PUBLIC";
        case "UNLISTED":
          return "PLAYLIST_VISIBILITY_UNLISTED";
        default:
          return "PLAYLIST_VISIBILITY_UNKNOWN";
      }
    },
    ktb = function (a, b, c) {
      b = {
        offlineVideoData: b,
        playlistId: c
      };
      if (a = g.Q(a.actionMetadata, mtb)) b.maximumDownloadQuality = a.maximumDownloadQuality;
      return {
        mainVideoEntityActionMetadata: b
      };
    },
    ttb = function (a, b, c) {
      this.j = a;
      this.Z = b;
      this.D = c;
      this.C = this.Z.N("html5_oduc_transfer_logging");
    },
    wtb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y;
      return g.Ga(function (A) {
        switch (A.j) {
          case 1:
            return c = p7(b), d = g.JM(b.entityKey), e = d.entityId, f = g.Q(b.actionMetadata, Y7), l = !(null == (h = f) ? 0 : h.playlistId), g.ya(A, 2), g.z(A, utb(a, e, void 0, null == (m = f) ? void 0 : m.offlineVideoData, l), 4);
          case 4:
            g.za(A, 3);
            break;
          case 2:
            return n = g.Aa(A), p = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", n instanceof g.AC && "QUOTA_EXCEEDED" === n.type && (p = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", q = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), A.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, p, q));
          case 3:
            t = 1;
            t = Number((null == (u = b.actionMetadata) ? void 0 : u.priority) || 0) + 1;
            var E = (E = g.Q(b.actionMetadata, Y7)) ? {
              playbackDataActionMetadata: {
                maximumDownloadQuality: E.maximumDownloadQuality
              }
            } : void 0;
            y = J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, "playbackData", t, vtb, E);
            return A.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, [y]));
        }
      });
    },
    xtb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y;
      return g.Ga(function (A) {
        switch (A.j) {
          case 1:
            return c = p7(b), d = g.JM(b.entityKey), e = d.entityId, g.z(A, h7(a.j, b.entityKey, "mainVideoEntity"), 2);
          case 2:
            f = A.B;
            if (!f) {
              h = void 0;
              A.Ma(3);
              break;
            }
            return g.z(A, h7(a.j, f.downloadState, "mainVideoDownloadStateEntity"), 4);
          case 4:
            h = A.B;
          case 3:
            l = h;
            if (!f || !l) return A.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            g.ya(A, 5);
            return g.z(A, utb(a, e, l.addedTimestampMillis, null == (n = g.Q(b.actionMetadata, Y7)) ? void 0 : n.offlineVideoData), 7);
          case 7:
            p = 1;
            p = Number((null == (q = b.actionMetadata) ? void 0 : q.priority) || 0) + 1;
            m = J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", e, "playbackData", p, vtb);
            g.za(A, 6);
            break;
          case 5:
            t = g.Aa(A);
            if (!(t instanceof Error && "No data" === t.message)) {
              if (t instanceof Error && "Empty response body" === t.message) k7(t.message);else return u = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", y = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", t instanceof g.AC && "QUOTA_EXCEEDED" === t.type && (u = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", y = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), A.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, u, y));
              A.Ma(6);
              break;
            }
            return g.z(A, F7(e, a.j, b, a.D, a.C), 6);
          case 6:
            return A.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, m ? [m] : void 0));
        }
      });
    },
    ytb = function (a, b) {
      var c, d;
      return g.Ga(function (e) {
        switch (e.j) {
          case 1:
            return c = p7(b), g.ya(e, 2), d = g.JM(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, srb(a.j, b, a.D, a.C), 5) : g.z(e, F7(d, a.j, b, a.D, a.C), 6);
          case 6:
            if (!a.Z.N("woffle_enable_main_downloads_library")) {
              e.Ma(5);
              break;
            }
            return g.z(e, Arb(a.j, b.entityKey), 5);
          case 5:
            g.za(e, 3);
            break;
          case 2:
            return g.Aa(e), e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
          case 3:
            return e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
        }
      });
    },
    utb = function (a, b, c, d, e) {
      var f, h, l, m, n, p;
      return g.Ga(function (q) {
        switch (q.j) {
          case 1:
            if (f = d) {
              q.Ma(2);
              break;
            }
            return g.z(q, Zsb([b]), 3);
          case 3:
            h = q.B, f = h[0];
          case 2:
            return g.z(q, ztb(a, f, c, e), 4);
          case 4:
            l = q.B;
            m = l.mainVideoEntity;
            n = l.channelEntity;
            g.ya(q, 5);
            var t = w7(m.thumbnail);
            var u = w7(n.avatar);
            t = t.concat(u);
            return g.z(q, E7(t), 7);
          case 7:
            g.za(q, 0);
            break;
          case 5:
            p = g.Aa(q), p instanceof Error && "Failed to fetch" === p.message && k7(p.message), g.xa(q);
        }
      });
    },
    ztb = function (a, b, c, d) {
      var e, f, h, l, m, n, p, q, t, u, y;
      return g.Ga(function (A) {
        switch (A.j) {
          case 1:
            c || (c = Date.now().toString());
            f = null == (e = b.channel) ? void 0 : e.offlineChannelData;
            h = {
              id: g.KM(b.videoId, "ytMainChannelEntity"),
              channelId: f.channelId,
              title: f.title,
              avatar: f.thumbnail
            };
            l = {
              key: g.KM(b.videoId, "mainVideoDownloadStateEntity"),
              playbackData: g.KM(b.videoId, "playbackData"),
              addedTimestampMillis: c,
              videoDownloadContextEntity: g.KM(b.videoId, "videoDownloadContextEntity")
            };
            m = g.KM(b.videoId, "mainVideoEntity");
            n = {
              key: m,
              videoId: b.videoId,
              title: b.title,
              thumbnail: b.thumbnail,
              localizedStrings: {
                viewCount: b.shortViewCountText
              },
              lengthSeconds: b.lengthSeconds ? Number(b.lengthSeconds) : void 0,
              publishedTimestampMillis: b.publishedTimestamp ? (1E3 * Number(b.publishedTimestamp)).toString() : void 0,
              formattedDescription: b.description,
              owner: h.id,
              downloadState: l.key
            };
            if (!a.Z.N("woffle_enable_main_downloads_library") || !d) {
              A.Ma(2);
              break;
            }
            return g.z(A, yrb(a.j, [m]), 3);
          case 3:
            if (t = A.B) p = t.mainDownloadsLibraryEntity, q = t.mainDownloadsListEntity;
          case 2:
            return y = erb, u = {
              key: g.KM(b.videoId, "downloadStatusEntity"),
              downloadState: "DOWNLOAD_STATE_PENDING_DOWNLOAD"
            }, g.OO(l, y, u), g.z(A, f7(a.j, {
              mode: "readwrite",
              kc: !0
            }, function (E) {
              var L = b7(E, h, "ytMainChannelEntity"),
                I = b7(E, l, "mainVideoDownloadStateEntity"),
                F = b7(E, n, "mainVideoEntity");
              L = [L, I, F];
              p && (I = b7(E, p, "mainDownloadsLibraryEntity"), L.push(I));
              q && (I = b7(E, q, "mainDownloadsListEntity"), L.push(I));
              u && (E = b7(E, u, "downloadStatusEntity"), L.push(E));
              return g.HC.all(L);
            }), 4);
          case 4:
            return A.return({
              mainVideoEntity: n,
              channelEntity: h
            });
        }
      });
    },
    Atb = function (a, b, c) {
      this.j = a;
      this.Z = b;
      this.D = c;
      this.C = this.Z.N("html5_oduc_transfer_logging");
    },
    Ctb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na;
      return g.Ga(function (fa) {
        switch (fa.j) {
          case 1:
            return c = p7(b), d = [], g.z(fa, V6.getInstance(), 2);
          case 2:
            e = fa.B;
            if (!e) {
              fa.Ma(3);
              break;
            }
            return g.z(fa, e.get("sdois"), 4);
          case 4:
            f = fa.B;
          case 3:
            g.ya(fa, 5);
            if (void 0 === f) throw Error("prefStorage or opt-in state is undefined");
            return g.z(fa, xrb(a.j), 7);
          case 7:
            h = fa.B;
            h.reverse();
            if (!h.length) {
              fa.Ma(8);
              break;
            }
            l = g.v(h);
            m = l.next();
          case 9:
            if (m.done) {
              fa.Ma(8);
              break;
            }
            n = m.value;
            if (!n) {
              fa.Ma(10);
              break;
            }
            p = g.JM(n).entityId;
            return g.z(fa, F7(p, a.j, {
              entityKey: n,
              actionType: b.actionType
            }, a.D, a.C), 10);
          case 10:
            m = l.next();
            fa.Ma(9);
            break;
          case 8:
            return g.z(fa, dtb(f), 13);
          case 13:
            return q = fa.B, g.z(fa, trb(q), 14);
          case 14:
            t = wrb(q);
            if (!a.Z.N("woffle_enable_main_downloads_library")) {
              fa.Ma(15);
              break;
            }
            if (f) {
              fa.Ma(16);
              break;
            }
            return g.z(fa, Arb(a.j, H7), 16);
          case 16:
            return g.z(fa, zrb(a.j, [H7]), 15);
          case 15:
            if (null == (u = t) ? 0 : u.length) for (y = g.v(t), A = y.next(); !A.done; A = y.next()) if (L = E = A.value, I = L.actionType, F = L.entityKey, S = L.actionMetadata, I && F && S && !g.Q(S, Btb)) {
              if (Y = g.Q(E.actionMetadata, Y7)) Y.playlistId = "DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", E.actionMetadata = {
                mainVideoEntityActionMetadata: Y
              };
              d.push(E);
            }
            g.za(fa, 6);
            break;
          case 5:
            return ea = g.Aa(fa), ta = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", na = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", ea instanceof g.AC && "QUOTA_EXCEEDED" === ea.type && (ta = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", na = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), fa.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, ta, na));
          case 6:
            return fa.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, d));
        }
      });
    },
    Dtb = function () {
      V7.apply(this, arguments);
      this.ma = "mainVideoEntity";
    },
    Etb = function (a, b, c) {
      b = void 0 === b ? 43200 : b;
      c = void 0 === c ? !0 : c;
      var d = void 0 === d ? !1 : d;
      var e, f, h;
      return g.Ga(function (l) {
        switch (l.j) {
          case 1:
            if (!a.K.zi()) return l.return([]);
            e = [];
            g.ya(l, 2);
            return g.z(l, btb(b, c, d), 4);
          case 4:
            e = l.B;
            g.za(l, 3);
            break;
          case 2:
            f = g.Aa(l), f instanceof Error && "No data" === f.message || f instanceof Error && "Empty response body" === f.message && k7(f.message);
          case 3:
            return h = Xsb(a, e, c), l.return(h);
        }
      });
    },
    Ftb = function (a, b, c) {
      c = void 0 === c ? !1 : c;
      var d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta;
      return g.Ga(function (na) {
        switch (na.j) {
          case 1:
            return d = [], g.z(na, ctb(), 2);
          case 2:
            return (e = na.B) || c ? g.z(na, j7(), 3) : na.return([]);
          case 3:
            return f = na.B, g.z(na, xrb(f), 4);
          case 4:
            h = na.B;
            h.reverse();
            l = [];
            m = g.v(h);
            for (n = m.next(); !n.done; n = m.next()) (p = n.value) && l.push(g.JM(p).entityId);
            return g.z(na, etb(b), 5);
          case 5:
            q = na.B;
            if (null == (t = q) || !t.length) return na.return([]);
            if (!l.length) {
              na.Ma(6);
              break;
            }
            return g.z(na, W7(a, l, "mainVideoEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE"), 7);
          case 7:
            u = na.B, d = d.concat(u);
          case 6:
            y = g.v(q), A = y.next();
          case 8:
            if (A.done) {
              na.Ma(10);
              break;
            }
            L = E = A.value;
            I = L.actionType;
            F = L.entityKey;
            S = L.actionMetadata;
            if (!(I && F && S) || g.Q(S, Btb)) {
              na.Ma(9);
              break;
            }
            Y = g.JM(F);
            ea = Y.entityId;
            return g.z(na, W7(a, [ea], "mainVideoEntity", I, S), 12);
          case 12:
            ta = na.B, d = d.concat(ta);
          case 9:
            A = y.next();
            na.Ma(8);
            break;
          case 10:
            return na.return(d);
        }
      });
    },
    Gtb = function () {
      var a, b, c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa;
      return g.Ga(function (ia) {
        switch (ia.j) {
          case 1:
            return g.z(ia, j7(), 2);
          case 2:
            return (a = ia.B) ? g.z(ia, i7(a, "mainVideoEntity"), 3) : ia.return();
          case 3:
            return b = ia.B, g.z(ia, i7(a, "mainPlaylistEntity"), 4);
          case 4:
            return c = ia.B, d = g.KM("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity"), g.z(ia, h7(a, d, "mainDownloadsListEntity"), 5);
          case 5:
            e = ia.B;
            f = new Set();
            if (null == (h = e) ? 0 : null == (l = h.downloads) ? 0 : l.length) for (m = g.v(e.downloads), n = m.next(); !n.done; n = m.next()) p = n.value, q = void 0, (t = null != (q = p.videoItem) ? q : p.playlistItem) && f.add(t);
            u = new Set();
            y = [];
            A = g.v(c);
            for (E = A.next(); !E.done; E = A.next()) {
              L = E.value;
              if (L.videos) for (I = g.v(L.videos), F = I.next(); !F.done; F = I.next()) S = F.value, (Y = JSON.parse(g.JM(S).entityId).videoId) && u.add(Y);
              L.key && !f.has(L.key) && y.push(L.key);
            }
            ea = g.v(b);
            for (ta = ea.next(); !ta.done; ta = ea.next()) na = ta.value, na.key && !f.has(na.key) && (fa = g.JM(na.key).entityId, u.has(fa) || y.push(na.key));
            if (y.length) return g.z(ia, zrb(a, y), 0);
            ia.Ma(0);
        }
      });
    },
    Itb = function (a, b, c, d) {
      var e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na;
      return g.Ga(function (fa) {
        switch (fa.j) {
          case 1:
            return e = g.KM(a, "musicTrack"), f = g.KM(a, "transfer"), g.z(fa, f7(b, {
              mode: "readonly",
              kc: !0
            }, function (ia) {
              return g.HC.all([Z6(ia, e, "musicTrack"), Z6(ia, f, "transfer"), $6(ia, "musicTrack"), $6(ia, "offlineOrchestrationActionWrapperEntity")]);
            }), 2);
          case 2:
            h = fa.B;
            l = g.v(h);
            m = l.next().value;
            n = l.next().value;
            p = l.next().value;
            q = l.next().value;
            t = m;
            u = n;
            y = p;
            A = q;
            if (!t) {
              fa.Ma(3);
              break;
            }
            return g.z(fa, Htb(t, y), 4);
          case 4:
            return E = fa.B, g.z(fa, D7(E), 3);
          case 3:
            L = [];
            I = g.KM(a, "musicTrack");
            F = g.v(A);
            for (S = F.next(); !S.done; S = F.next()) Y = S.value, ea = g.JM(Y.key).entityId, ta = y7(Y), na = g.JM(ta.action.entityKey).entityId, ea !== a && na !== a || u7(c, Y.actionProto) || L.push(Y.key);
            return g.z(fa, f7(b, {
              mode: "readwrite",
              kc: !0
            }, function (ia) {
              var Da = L.map(function (ha) {
                return c7(ia, ha);
              });
              Da.push(c7(ia, I, {
                zv: !0
              }));
              return g.HC.all(Da);
            }), 6);
          case 6:
            v7(u), m7(d, {
              entityKey: I,
              failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED"
            }), g.xa(fa);
        }
      });
    },
    Ktb = function (a, b, c, d) {
      var e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa, ia, Da, ha;
      return g.Ga(function (T) {
        switch (T.j) {
          case 1:
            return e = g.KM(a, "musicPlaylist"), f = g.KM("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(T, f7(b, {
              mode: "readonly",
              kc: !0
            }, function (Wa) {
              return g.HC.all([Z6(Wa, e, "musicPlaylist"), Z6(Wa, f, "musicDownloadsLibraryEntity"), $6(Wa, "musicPlaylist"), $6(Wa, "offlineOrchestrationActionWrapperEntity")]);
            }), 2);
          case 2:
            h = T.B;
            l = g.v(h);
            m = l.next().value;
            n = l.next().value;
            p = l.next().value;
            q = l.next().value;
            t = m;
            u = n;
            y = p;
            A = q;
            if (!t) {
              T.Ma(3);
              break;
            }
            return g.z(T, Htb(t, y), 4);
          case 4:
            return E = T.B, g.z(T, D7(E), 3);
          case 3:
            L = [];
            I = g.v(A);
            for (F = I.next(); !F.done; F = I.next()) S = F.value, Y = g.JM(S.key).entityId, ea = y7(S), Y !== a && ea.rootActionId !== a || u7(c, S.actionProto) || L.push(S.key);
            ta = g.KM(a, "musicPlaylist");
            return g.z(T, f7(b, {
              mode: "readwrite",
              kc: !0
            }, function (Wa) {
              var r = L.map(function (U) {
                return c7(Wa, U);
              });
              r.push(c7(Wa, ta, {
                zv: !0
              }));
              return g.HC.all(r);
            }), 6);
          case 6:
            if (!t) {
              T.Ma(0);
              break;
            }
            return g.z(T, Jtb(t, y, u), 8);
          case 8:
            na = T.B;
            na.reverse();
            if (!na.length) {
              T.Ma(0);
              break;
            }
            fa = g.v(na);
            ia = fa.next();
          case 10:
            if (ia.done) {
              T.Ma(0);
              break;
            }
            Da = ia.value;
            ha = g.JM(Da).entityId;
            if (!ha) {
              T.Ma(11);
              break;
            }
            return g.z(T, Itb(ha, b, c, d), 11);
          case 11:
            ia = fa.next(), T.Ma(10);
        }
      });
    },
    Mtb = function (a, b, c) {
      var d, e, f, h, l, m;
      return g.Ga(function (n) {
        if (1 == n.j) return g.z(n, f7(a, {
          mode: "readwrite",
          kc: !0
        }, function (p) {
          var q = $6(p, "transfer"),
            t = $6(p, "offlineOrchestrationActionWrapperEntity");
          return g.HC.all([q, t]).then(function (u) {
            u = g.v(u);
            var y = u.next().value,
              A = u.next().value;
            u = Ltb.map(function (F) {
              return uqb(p, F);
            });
            A = g.v(A);
            for (var E = A.next(); !E.done; E = A.next()) {
              E = E.value;
              var L = "musicTrack" === g.JM(E.actionProto.entityKey).entityType,
                I = "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD" === E.actionProto.actionType;
              u7(b, E.actionProto) || L && (!L || I) || u.push(c7(p, E.key, {
                zv: !0
              }));
            }
            return g.HC.all(u).then(function () {
              return y;
            });
          });
        }), 2);
        d = n.B;
        e = g.v(d);
        for (f = e.next(); !f.done; f = e.next()) h = f.value, v7(h), l = g.JM(h.key).entityId, m = g.KM(l, "musicTrack"), m7(c, {
          entityKey: m,
          failureReason: "OFFLINE_OPERATION_FAILURE_REASON_VIDEO_DELETED"
        });
        return g.z(n, mrb(), 0);
      });
    },
    Ntb = function (a) {
      for (var b, c = g.v(a.additionalMetadatas), d = c.next(); !d.done; d = c.next()) d = d.value, d.offlineMusicVideoData && (b = d.offlineMusicVideoData);
      var e, f, h, l, m;
      return {
        id: g.KM(a.videoId, "musicTrack"),
        videoId: a.videoId,
        title: a.title,
        thumbnailDetails: a.thumbnail,
        lengthMs: String(1E3 * Number(a.lengthSeconds)),
        albumTitle: null == (e = b) ? void 0 : e.releaseTitle,
        musicVideoType: null == (f = b) ? void 0 : f.musicVideoType,
        contentRating: {
          explicitType: null == (h = b) ? void 0 : h.explicitType
        },
        artistNames: (null == (l = b) ? void 0 : l.byline) || (null == (m = b) ? void 0 : m.channelName),
        downloadMetadata: g.KM(a.videoId, "musicTrackDownloadMetadataEntity")
      };
    },
    Jtb = function (a, b, c) {
      var d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S;
      return g.Ga(function (Y) {
        d = [];
        e = new Set();
        if (null == (f = c) ? 0 : null == (h = f.downloadedTracks) ? 0 : h.length) for (l = g.v(c.downloadedTracks), m = l.next(); !m.done; m = l.next()) n = m.value, e.add(n);
        if (a.tracks) {
          p = g.v(a.tracks);
          for (q = p.next(); !q.done; q = p.next()) t = q.value, e.has(t) || d.push(t);
          u = g.v(b);
          for (y = u.next(); !y.done; y = u.next()) if (A = y.value, A.id !== a.id && (E = A.tracks)) for (L = g.v(E), I = L.next(); !I.done; I = L.next()) F = I.value, S = d.indexOf(F), -1 !== S && d.splice(S, 1);
        }
        return Y.return(d);
      });
    },
    Htb = function (a, b) {
      var c, d, e, f, h, l, m, n;
      return g.Ga(function (p) {
        c = w7(a.thumbnailDetails);
        d = g.v(b);
        for (e = d.next(); !e.done; e = d.next()) if (f = e.value, f.id !== a.id) for (h = g.v(w7(f.thumbnailDetails)), l = h.next(); !l.done; l = h.next()) m = l.value, n = c.indexOf(m), -1 !== n && c.splice(n, 1);
        return p.return(c);
      });
    },
    Otb = function (a, b) {
      var c, d, e, f, h, l, m;
      return g.Ga(function (n) {
        if (1 == n.j) return c = g.KM("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(n, h7(a, c, "musicDownloadsLibraryEntity"), 2);
        (d = n.B) || (d = {
          id: c
        });
        e = g.JM(b).entityType;
        "musicTrack" === e ? null != (f = d.downloadedTracks) && f.includes(b) || (d.downloadedTracks = (null != (h = d.downloadedTracks) ? h : []).concat(b)) : "musicPlaylist" !== e || null != (l = d.downloadedPlaylists) && l.includes(b) || (d.downloadedPlaylists = (null != (m = d.downloadedPlaylists) ? m : []).concat(b));
        return g.z(n, g7(a, d, "musicDownloadsLibraryEntity"), 0);
      });
    },
    Ptb = function (a, b) {
      var c, d, e, f, h, l, m;
      return g.Ga(function (n) {
        if (1 == n.j) return c = g.KM("music_downloads_library_id", "musicDownloadsLibraryEntity"), g.z(n, h7(a, c, "musicDownloadsLibraryEntity"), 2);
        d = n.B;
        if (!d) return n.Ma(0);
        e = g.JM(b).entityType;
        "musicTrack" === e ? f = d.downloadedTracks : "musicPlaylist" === e && (f = d.downloadedPlaylists);
        if (null == (h = f) ? 0 : h.length) for (l = 0; l < f.length; l++) if (m = f[l], m === b) {
          f.splice(l, 1);
          break;
        }
        return g.z(n, g7(a, d, "musicDownloadsLibraryEntity"), 0);
      });
    },
    Qtb = function (a, b) {
      this.j = a;
      this.C = b;
    },
    Ttb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I;
      return g.Ga(function (F) {
        switch (F.j) {
          case 1:
            return c = p7(b), d = g.JM(b.entityKey), e = d.entityId, f = [], g.ya(F, 2), g.z(F, Rtb(a, e), 4);
          case 4:
            f = F.B;
            if (null == (h = f) || !h.length) {
              F.Ma(5);
              break;
            }
            return g.z(F, Otb(a.j, b.entityKey), 5);
          case 5:
            g.za(F, 3);
            break;
          case 2:
            return l = g.Aa(F), m = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", l instanceof g.AC && "QUOTA_EXCEEDED" === l.type && (m = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", n = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), F.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, m, n));
          case 3:
            p = [];
            if (null == (q = f) ? 0 : q.length) for (t = g.v(f), u = t.next(); !u.done; u = t.next()) if (y = u.value, A = y.offlineVideoData, E = void 0, null == (E = A) ? 0 : E.videoId) L = void 0, I = Number((null == (L = b.actionMetadata) ? void 0 : L.priority) || 0) + 1, p.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", A.videoId, "musicTrack", I, Z7, Stb(b, A)));
            return F.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, p));
        }
      });
    },
    Vtb = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S, Y, ea, ta, na, fa, ia, Da, ha, T, Wa, r, U, lb, gb, Eb, vb, sb, Rb, Sa, ib, w, B, D, C, J, K, R, V, oa, da, la, ua, Ha, Tb, uc, Mb, Ab, ab, jc, kc, Zb, hd, Ac, Wc, yd, Fc, qd, Hd, Cc, fe, Id, Xe;
      return g.Ga(function (ub) {
        switch (ub.j) {
          case 1:
            return c = p7(b), d = b.entityKey, e = g.JM(d).entityId, f = [], h = !1, "!*$_ALL_ENTITIES_!*$" === e ? (h = !0, g.z(ub, i7(a.j, "musicPlaylist"), 5)) : g.z(ub, h7(a.j, d, "musicPlaylist"), 4);
          case 4:
            (l = ub.B) && f.push(l);
            ub.Ma(3);
            break;
          case 5:
            f = ub.B;
          case 3:
            if (null == (m = f) || !m.length) return ub.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            n = g.Q(b.actionMetadata, Utb);
            q = null == (p = n) ? void 0 : p.autoSync;
            t = [];
            y = u = !0;
            A = !1;
            E = void 0;
            if (!h && !1 === q) {
              ub.Ma(6);
              break;
            }
            g.ya(ub, 7);
            return g.z(ub, ftb(!!q, f), 9);
          case 9:
            t = ub.B;
            g.za(ub, 8);
            break;
          case 7:
            L = g.Aa(ub);
            if (!(L instanceof Error && "No data" === L.message)) {
              L instanceof Error && "Empty response body" === L.message && k7(L.message);
              ub.Ma(8);
              break;
            }
            return "!*$_ALL_ENTITIES_!*$" === e ? g.z(ub, Mtb(a.j, b, a.C), 8) : g.z(ub, Ktb(e, a.j, b, a.C), 8);
          case 8:
            if (!t.length || !h && t[0].playlistId !== e) return ub.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
          case 6:
            if (h) {
              I = [];
              F = g.v(t);
              for (S = F.next(); !S.done; S = F.next()) Y = S.value, Y.upToDate || q && !Y.shouldAutoSyncMetadata || !Y.playlistId || (ea = {
                autoSync: q
              }, I.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", Y.playlistId, "musicPlaylist", 0, Z7, {
                musicPlaylistEntityActionMetadata: ea
              })));
              return ub.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, I));
            }
            t.length && (ta = t[0], A = !!ta.upToDate, q && (u = null != (na = ta.shouldAutoSyncMetadata) ? na : !0, y = null != (fa = ta.shouldAutoSyncVideos) ? fa : !0, ta.checkInSeconds && (E = ta.checkInSeconds)));
            if (A || !u) return ub.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            ia = [];
            Da = f[0];
            ha = void 0;
            if (!Da.downloadMetadata) {
              ub.Ma(15);
              break;
            }
            return g.z(ub, h7(a.j, Da.downloadMetadata, "musicPlaylistDownloadMetadataEntity"), 16);
          case 16:
            T = ub.B, ha = Number(null != (r = null == (Wa = T) ? void 0 : Wa.addedTimestampMillis) ? r : "0") / 1E3;
          case 15:
            return g.ya(ub, 17), g.z(ub, Rtb(a, e, null == (U = ha) ? void 0 : U.toString(), E), 19);
          case 19:
            ia = ub.B;
            g.za(ub, 18);
            break;
          case 17:
            lb = g.Aa(ub);
            if (!(lb instanceof Error && "No data" === lb.message)) {
              if (lb instanceof Error && "Empty response body" === lb.message) k7(lb.message);else return gb = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", Eb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", lb instanceof g.AC && "QUOTA_EXCEEDED" === lb.type && (gb = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", Eb = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), ub.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, gb, Eb));
              ub.Ma(18);
              break;
            }
            return g.z(ub, Ktb(e, a.j, b, a.C), 18);
          case 18:
            if (!y) return ub.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            vb = [];
            sb = new Map();
            if (null == (Rb = ia) ? 0 : Rb.length) for (Sa = g.v(ia), ib = Sa.next(); !ib.done; ib = Sa.next()) w = ib.value, B = w.offlineVideoData, D = void 0, (null == (D = B) ? 0 : D.videoId) && sb.set(B.videoId, B);
            C = new Map();
            J = [];
            if (null == (K = Da) ? 0 : null == (R = K.tracks) ? 0 : R.length) for (V = g.v(Da.tracks), oa = V.next(); !oa.done; oa = V.next()) if (da = oa.value, la = g.JM(da).entityId) sb.has(la) ? (C.set(la, sb.get(la)), sb.delete(la)) : J.push(la);
            Ha = Number((null == (ua = b.actionMetadata) ? void 0 : ua.priority) || 0) + 1;
            Tb = g.v(sb.entries());
            for (uc = Tb.next(); !uc.done; uc = Tb.next()) Mb = uc.value, Ab = g.v(Mb), ab = Ab.next().value, jc = Ab.next().value, kc = ab, Zb = jc, vb.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", kc, "musicTrack", Ha, Z7, Stb(b, Zb)));
            hd = g.v(C.entries());
            for (Ac = hd.next(); !Ac.done; Ac = hd.next()) Wc = Ac.value, yd = g.v(Wc), Fc = yd.next().value, qd = yd.next().value, Hd = Fc, Cc = qd, vb.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", Hd, "musicTrack", Ha, Z7, Stb(b, Cc)));
            fe = g.v(J);
            for (Id = fe.next(); !Id.done; Id = fe.next()) Xe = Id.value, vb.push(J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE", Xe, "musicTrack", 0, Z7));
            return ub.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, vb));
        }
      });
    },
    Wtb = function (a, b) {
      var c, d;
      return g.Ga(function (e) {
        switch (e.j) {
          case 1:
            return c = p7(b), g.ya(e, 2), d = g.JM(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, Mtb(a.j, b, a.C), 5) : g.z(e, Ktb(d, a.j, b, a.C), 6);
          case 6:
            return g.z(e, Ptb(a.j, b.entityKey), 5);
          case 5:
            g.za(e, 3);
            break;
          case 2:
            return g.Aa(e), e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
          case 3:
            return e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
        }
      });
    },
    Rtb = function (a, b, c, d) {
      var e, f, h, l;
      return g.Ga(function (m) {
        switch (m.j) {
          case 1:
            return g.z(m, $sb([b]), 2);
          case 2:
            return e = m.B, g.z(m, Xtb(a, e[0], c, d), 3);
          case 3:
            return f = m.B, h = f.musicPlaylistEntity, l = w7(h.thumbnailDetails), g.z(m, E7(l), 4);
          case 4:
            return m.return(e[0].videos);
        }
      });
    },
    Xtb = function (a, b, c, d) {
      var e, f, h, l, m, n, p, q, t, u, y, A, E, L, I, F, S;
      return g.Ga(function (Y) {
        if (1 == Y.j) {
          e = b.videos;
          f = b.playlistId;
          h = [];
          l = [];
          m = [];
          n = c ? (1E3 * Number(c)).toString() : Date.now().toString();
          if (e) for (p = g.v(e), q = p.next(); !q.done; q = p.next()) t = q.value, u = t.offlineVideoData, y = u.videoId, A = {
            id: g.KM(y, "musicTrack")
          }, E = g.KM(y, "musicTrackDownloadMetadataEntity"), h.push(A), l.push(A.id), m.push(E);
          L = b.lastModifiedTimestamp ? (1E3 * Number(b.lastModifiedTimestamp)).toString() : "0";
          I = {
            id: g.KM(f, "musicPlaylistDownloadMetadataEntity"),
            trackDownloadMetadatas: m,
            lastModifiedTimestampMillis: L,
            addedTimestampMillis: n,
            syncState: "DOWNLOAD_SYNC_STATE_UP_TO_DATE"
          };
          F = {
            id: g.KM(f, "musicPlaylist"),
            title: b.title,
            playlistId: f,
            thumbnailDetails: b.thumbnail,
            visibility: Ytb(b),
            trackCount: b.totalVideoCount,
            tracks: l,
            downloadMetadata: I.id
          };
          d && ((null == (S = F) ? 0 : S.entityMetadata) ? F.entityMetadata.nextAutoRefreshIntervalSeconds = String(d) : F && (F.entityMetadata = {
            nextAutoRefreshIntervalSeconds: String(d)
          }));
          return g.z(Y, f7(a.j, {
            mode: "readwrite",
            kc: !0
          }, function (ea) {
            for (var ta = b7(ea, F, "musicPlaylist"), na = [], fa = g.v(h), ia = fa.next(); !ia.done; ia = fa.next()) na.push(b7(ea, ia.value, "musicTrack"));
            ea = b7(ea, I, "musicPlaylistDownloadMetadataEntity");
            return g.HC.all([ta].concat(g.pa(na), [ea]));
          }), 2);
        }
        return Y.return({
          musicPlaylistEntity: F,
          sgb: h
        });
      });
    },
    Ytb = function (a) {
      switch (a.privacy) {
        case "PRIVATE":
          return "PLAYLIST_ENTITY_VISIBILITY_PRIVATE";
        case "PUBLIC":
          return "PLAYLIST_ENTITY_VISIBILITY_PUBLIC";
        case "UNLISTED":
          return "PLAYLIST_ENTITY_VISIBILITY_UNLISTED";
        default:
          return "PLAYLIST_ENTITY_VISIBILITY_UNKNOWN";
      }
    },
    Stb = function (a, b) {
      b = {
        track: Ntb(b)
      };
      if (a = g.Q(a.actionMetadata, Utb)) b.maximumDownloadQuality = a.maximumDownloadQuality;
      return {
        musicTrackEntityActionMetadata: b
      };
    },
    Ztb = function (a, b) {
      this.j = a;
      this.C = b;
    },
    cub = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u;
      return g.Ga(function (y) {
        switch (y.j) {
          case 1:
            return c = p7(b), d = g.JM(b.entityKey), e = d.entityId, f = g.Q(b.actionMetadata, $tb), g.ya(y, 2), g.z(y, aub(a, e, void 0, null == (h = f) ? void 0 : h.track), 4);
          case 4:
            if (null == (l = f) ? 0 : l.playlistId) {
              y.Ma(5);
              break;
            }
            return g.z(y, Otb(a.j, b.entityKey), 5);
          case 5:
            g.za(y, 3);
            break;
          case 2:
            return m = g.Aa(y), n = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", p = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", m instanceof g.AC && "QUOTA_EXCEEDED" === m.type && (n = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", p = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), y.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, n, p));
          case 3:
            t = Number((null == (q = b.actionMetadata) ? void 0 : q.priority) || 0) + 1;
            var A = (A = g.Q(b.actionMetadata, $tb)) ? {
              playbackDataActionMetadata: {
                maximumDownloadQuality: A.maximumDownloadQuality
              }
            } : void 0;
            u = J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", e, "playbackData", t, bub, A);
            return y.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, [u]));
        }
      });
    },
    dub = function (a, b) {
      var c, d, e, f, h, l, m, n, p, q, t, u;
      return g.Ga(function (y) {
        switch (y.j) {
          case 1:
            return c = p7(b), d = g.JM(b.entityKey), e = d.entityId, g.z(y, h7(a.j, b.entityKey, "musicTrack"), 2);
          case 2:
            f = y.B;
            if (!f) {
              h = void 0;
              y.Ma(3);
              break;
            }
            return g.z(y, h7(a.j, f.downloadMetadata, "musicTrackDownloadMetadataEntity"), 4);
          case 4:
            h = y.B;
          case 3:
            l = h;
            if (!f || !l) return y.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
            g.ya(y, 5);
            return g.z(y, aub(a, e, l.addedTimestampMillis), 7);
          case 7:
            p = Number((null == (n = b.actionMetadata) ? void 0 : n.priority) || 0) + 1;
            m = J7("OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH", e, "playbackData", p, bub);
            g.za(y, 6);
            break;
          case 5:
            q = g.Aa(y);
            if (!(q instanceof Error && "No data" === q.message)) {
              if (q instanceof Error && "Empty response body" === q.message) k7(q.message);else return t = "OFFLINE_OPERATION_FAILURE_REASON_UNKNOWN", u = "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED", q instanceof g.AC && "QUOTA_EXCEEDED" === q.type && (t = "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", u = "OFFLINE_ORCHESTRATION_FAILURE_REASON_NO_STORAGE"), y.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, t, u));
              y.Ma(6);
              break;
            }
            return g.z(y, Itb(e, a.j, b, a.C), 6);
          case 6:
            return y.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c, m ? [m] : void 0));
        }
      });
    },
    eub = function (a, b) {
      var c, d;
      return g.Ga(function (e) {
        switch (e.j) {
          case 1:
            return c = p7(b), g.ya(e, 2), d = g.JM(b.entityKey).entityId, "!*$_ALL_ENTITIES_!*$" === d ? g.z(e, Mtb(a.j, b, a.C), 5) : g.z(e, Itb(d, a.j, b, a.C), 6);
          case 6:
            return g.z(e, Ptb(a.j, b.entityKey), 5);
          case 5:
            g.za(e, 3);
            break;
          case 2:
            return g.Aa(e), e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_FAILURE", c, void 0, "OFFLINE_OPERATION_FAILURE_REASON_DATABASE_REQUEST_FAILED", "OFFLINE_ORCHESTRATION_FAILURE_REASON_DATABASE_OPERATION_FAILED"));
          case 3:
            return e.return(new K7("OFFLINE_ORCHESTRATION_ACTION_RESULT_SUCCESS", c));
        }
      });
    },
    aub = function (a, b, c, d) {
      var e, f, h, l;
      return g.Ga(function (m) {
        switch (m.j) {
          case 1:
            if (e = d) {
              m.Ma(2);
              break;
            }
            return g.z(m, Zsb([b]), 3);
          case 3:
            f = m.B, h = f[0], e = Ntb(h);
          case 2:
            return g.z(m, fub(a, e, b, c), 4);
          case 4:
            return l = m.B, g.z(m, E7(w7(l.thumbnailDetails)), 0);
        }
      });
    },
    fub = function (a, b, c, d) {
      var e;
      return g.Ga(function (f) {
        return 1 == f.j ? (d || (d = Date.now().toString()), e = {
          id: g.KM(c, "musicTrackDownloadMetadataEntity"),
          playbackData: g.KM(c, "playbackData"),
          addedTimestampMillis: d,
          videoDownloadContextEntity: g.KM(c, "videoDownloadContextEntity")
        }, g.z(f, f7(a.j, {
          mode: "readwrite",
          kc: !0
        }, function (h) {
          var l = b7(h, e, "musicTrackDownloadMetadataEntity");
          h = b7(h, b, "musicTrack");
          return g.HC.all([l, h]);
        }), 2)) : 3 != f.j ? g.z(f, t7(c, "musicTrackDownloadMetadataEntity", a.j, "DOWNLOAD_STATE_PENDING_DOWNLOAD"), 3) : f.return(b);
      });
    },
    $7 = function () {
      V7.apply(this, arguments);
      this.ma = "musicTrack";
    },
    gub = function () {
      g.dT.apply(this, arguments);
      var a = this;
      this.events = new g.tJ(this);
      this.Z = this.player.W();
      this.Ud = {
        Qeb: function () {
          return a.j;
        },
        MH: function () {
          return a.MH();
        }
      };
    },
    hub = function (a) {
      if (a.N("embeds_web_enable_video_data_refactoring_offline_and_progress_bar")) {
        var b;
        a = g.Q(null == (b = a.Ad) ? void 0 : b.currentVideoEndpoint, g.rN);
        if (null == a ? 0 : a.playlistId) var c = a.playlistId;
        return c;
      }
      return a.T5;
    },
    iub = function (a, b) {
      var c, d, e, f;
      return g.Ga(function (h) {
        if (1 == h.j) {
          c = b.clientPlaybackNonce;
          d = {
            cpn: c,
            offlineSourceVisualElement: g.LG(b.Ca || "").getAsJson(),
            selectedOfflineMode: "OFFLINE_NOW",
            isPartialPlayback: !1
          };
          b.B && (d.videoFmt = Number(b.B.itag));
          b.D && (d.audioFmt = Number(b.D.itag));
          if ((e = hub(b)) && b.videoId) {
            var l = b.videoId;
            l = "PPSV" !== e ? Promise.resolve(!1) : a.j.zS(l);
            h = g.z(h, l, 3);
          } else h = h.Ma(2);
          return h;
        }
        2 != h.j && (f = h.B) && (d.selectedOfflineMode = "OFFLINE_MODE_TYPE_AUTO_OFFLINE");
        a.B = c;
        g.tC("offlinePlaybackStarted", d);
        g.xa(h);
      });
    };
  g.x(U6, T6);
  const originalSetTimeout = window.setTimeout;
  g.ca.Object.defineProperties(U6.prototype, {
    entityMetadata: {
      configurable: !0,
      enumerable: !0,
      get: function () {
        return this.j.entityMetadata;
      },
      set: function (a) {
        this.j.entityMetadata = a;
      }
    }
  });
  g.x(Job, U6);
  Job.prototype.B = function () {
    return [];
  };
  g.x(Kob, U6);
  Kob.prototype.B = function () {
    var a = [];
    this.j.alternateChannel && a.push(this.j.alternateChannel);
    this.j.alternateChannelList && a.push.apply(a, g.pa(this.j.alternateChannelList));
    this.j.oneofChannelEntity && a.push(this.j.oneofChannelEntity);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Lob, U6);
  Lob.prototype.B = function () {
    var a = [];
    this.j.entryCollection && a.push(this.j.entryCollection);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Mob, T6);
  Mob.prototype.B = function () {
    var a = [];
    this.j.video && a.push(this.j.video);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Nob, U6);
  Nob.prototype.B = function () {
    var a = [];
    this.j.parentPlaylist && a.push(this.j.parentPlaylist);
    if (this.j.entries) for (var b = g.v(this.j.entries), c = b.next(); !c.done; c = b.next()) a.push.apply(a, g.pa(new Mob(c.value).B()));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Oob, U6);
  Oob.prototype.B = function () {
    var a = [];
    this.j.descriptionEntity && a.push(this.j.descriptionEntity);
    this.j.creators && a.push.apply(a, g.pa(this.j.creators));
    this.j.theBiggestFan && a.push(this.j.theBiggestFan);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Pob, U6);
  Pob.prototype.B = function () {
    return [];
  };
  g.x(Qob, U6);
  Qob.prototype.B = function () {
    return [];
  };
  g.x(Rob, U6);
  Rob.prototype.B = function () {
    return [];
  };
  g.x(Sob, U6);
  Sob.prototype.B = function () {
    return [];
  };
  g.x(Tob, U6);
  Tob.prototype.B = function () {
    return [];
  };
  g.x(Uob, U6);
  Uob.prototype.B = function () {
    return [];
  };
  g.x(Vob, U6);
  Vob.prototype.B = function () {
    return [];
  };
  g.x(Wob, U6);
  Wob.prototype.B = function () {
    var a = [];
    this.j.downloadsList && a.push(this.j.downloadsList);
    this.j.smartDownloadsList && a.push(this.j.smartDownloadsList);
    this.j.recommendedDownloadsList && a.push(this.j.recommendedDownloadsList);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Xob, T6);
  Xob.prototype.B = function () {
    var a = [];
    this.j.video && a.push(this.j.video);
    this.j.playlist && a.push(this.j.playlist);
    this.j.videoItem && a.push(this.j.videoItem);
    this.j.playlistItem && a.push(this.j.playlistItem);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Yob, U6);
  const originalClearTimeout = window.clearTimeout;
  Yob.prototype.B = function () {
    var a = [];
    this.j.refresh && a.push(this.j.refresh);
    if (this.j.downloads) for (var b = g.v(this.j.downloads), c = b.next(); !c.done; c = b.next()) a.push.apply(a, g.pa(new Xob(c.value).B()));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Zob, U6);
  Zob.prototype.B = function () {
    var a = [];
    this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
    return [].concat(g.pa(new Set(a)));
  };
  g.x($ob, U6);
  $ob.prototype.B = function () {
    var a = [];
    this.j.playbackData && a.push(this.j.playbackData);
    this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
    this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(apb, U6);
  apb.prototype.B = function () {
    return [];
  };
  g.x(bpb, U6);
  bpb.prototype.B = function () {
    var a = [];
    this.j.fakeChildren && a.push.apply(a, g.pa(this.j.fakeChildren));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(cpb, U6);
  cpb.prototype.B = function () {
    var a = [];
    this.j.video && a.push(this.j.video);
    this.j.playbackData && a.push(this.j.playbackData);
    this.j.offlineVideoPolicy && a.push(this.j.offlineVideoPolicy);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(dpb, U6);
  dpb.prototype.B = function () {
    return [];
  };
  g.x(epb, U6);
  epb.prototype.B = function () {
    var a = [];
    this.j.channelOwner && a.push(this.j.channelOwner);
    this.j.videos && a.push.apply(a, g.pa(this.j.videos));
    this.j.collaboratorChannels && a.push.apply(a, g.pa(this.j.collaboratorChannels));
    this.j.downloadState && a.push(this.j.downloadState);
    this.j.refresh && a.push(this.j.refresh);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(fpb, U6);
  fpb.prototype.B = function () {
    var a = [];
    this.j.video && a.push(this.j.video);
    this.j.channelContributor && a.push(this.j.channelContributor);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(gpb, T6);
  gpb.prototype.B = function () {
    var a = [];
    this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
    this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(hpb, T6);
  hpb.prototype.B = function () {
    var a = [];
    this.j.recommendedVideoMetadata && a.push.apply(a, g.pa(new gpb(this.j.recommendedVideoMetadata).B()));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(ipb, T6);
  ipb.prototype.B = function () {
    var a = [];
    this.j.playbackPosition && a.push(this.j.playbackPosition);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(jpb, U6);
  jpb.prototype.B = function () {
    var a = [];
    this.j.owner && a.push(this.j.owner);
    this.j.downloadState && a.push(this.j.downloadState);
    this.j.userState && a.push.apply(a, g.pa(new ipb(this.j.userState).B()));
    this.j.additionalMetadata && a.push.apply(a, g.pa(new hpb(this.j.additionalMetadata).B()));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(kpb, U6);
  kpb.prototype.B = function () {
    var a = [];
    this.j.userChannelDetails && a.push(this.j.userChannelDetails);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(lpb, U6);
  lpb.prototype.B = function () {
    var a = [];
    this.j.channelOwner && a.push(this.j.channelOwner);
    this.j.playbackPosition && a.push(this.j.playbackPosition);
    this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
    this.j.downloadStatus && a.push(this.j.downloadStatus);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(mpb, U6);
  mpb.prototype.B = function () {
    return [];
  };
  g.x(npb, U6);
  npb.prototype.B = function () {
    return [];
  };
  g.x(opb, U6);
  const originalFetch = window.fetch;
  opb.prototype.B = function () {
    return [];
  };
  const originalLocalStorageSetItem = Storage.prototype.setItem;
  g.x(ppb, U6);
  ppb.prototype.B = function () {
    return [];
  };
  g.x(qpb, U6);
  qpb.prototype.B = function () {
    return [];
  };
  g.x(rpb, U6);
  rpb.prototype.B = function () {
    return [];
  };
  g.x(spb, U6);
  spb.prototype.B = function () {
    return [];
  };
  g.x(tpb, U6);
  tpb.prototype.B = function () {
    var a = [];
    this.j.trackDownloadMetadatas && a.push.apply(a, g.pa(this.j.trackDownloadMetadatas));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(upb, U6);
  upb.prototype.B = function () {
    var a = [];
    this.j.downloadedTracks && a.push.apply(a, g.pa(this.j.downloadedTracks));
    this.j.smartDownloadedTracks && a.push.apply(a, g.pa(this.j.smartDownloadedTracks));
    this.j.downloadedEpisodes && a.push.apply(a, g.pa(this.j.downloadedEpisodes));
    this.j.downloadedAlbumReleases && a.push.apply(a, g.pa(this.j.downloadedAlbumReleases));
    this.j.smartDownloadedAlbumReleases && a.push.apply(a, g.pa(this.j.smartDownloadedAlbumReleases));
    this.j.downloadedPlaylists && a.push.apply(a, g.pa(this.j.downloadedPlaylists));
    this.j.smartDownloadedPlaylists && a.push.apply(a, g.pa(this.j.smartDownloadedPlaylists));
    this.j.metadataOnlyTracks && a.push.apply(a, g.pa(this.j.metadataOnlyTracks));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(vpb, U6);
  vpb.prototype.B = function () {
    var a = [];
    this.j.trackDownloadMetadatas && a.push.apply(a, g.pa(this.j.trackDownloadMetadatas));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(wpb, U6);
  wpb.prototype.B = function () {
    var a = [];
    this.j.playbackData && a.push(this.j.playbackData);
    this.j.localImageEntities && a.push.apply(a, g.pa(this.j.localImageEntities));
    this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(xpb, U6);
  xpb.prototype.B = function () {
    var a = [];
    this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity);
    this.j.primaryArtists && a.push.apply(a, g.pa(this.j.primaryArtists));
    this.j.details && a.push(this.j.details);
    this.j.userDetails && a.push(this.j.userDetails);
    this.j.tracks && a.push.apply(a, g.pa(this.j.tracks));
    this.j.share && a.push(this.j.share);
    this.j.downloadMetadata && a.push(this.j.downloadMetadata);
    this.j.refresh && a.push(this.j.refresh);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(ypb, U6);
  ypb.prototype.B = function () {
    var a = [];
    this.j.albumRelease && a.push(this.j.albumRelease);
    this.j.tracks && a.push.apply(a, g.pa(this.j.tracks));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(zpb, U6);
  zpb.prototype.B = function () {
    var a = [];
    this.j.albumRelease && a.push(this.j.albumRelease);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Apb, U6);
  const originalLocalStorageGetItem = Storage.prototype.getItem;
  Apb.prototype.B = function () {
    var a = [];
    this.j.details && a.push(this.j.details);
    this.j.userDetails && a.push(this.j.userDetails);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Bpb, U6);
  Bpb.prototype.B = function () {
    var a = [];
    this.j.parentArtist && a.push(this.j.parentArtist);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Cpb, U6);
  Cpb.prototype.B = function () {
    var a = [];
    this.j.parentArtist && a.push(this.j.parentArtist);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Dpb, U6);
  Dpb.prototype.B = function () {
    return [];
  };
  g.x(Epb, U6);
  Epb.prototype.B = function () {
    return [];
  };
  g.x(Fpb, T6);
  Fpb.prototype.B = function () {
    var a = [];
    this.j.creatorEntity && a.push(this.j.creatorEntity);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Gpb, U6);
  Gpb.prototype.B = function () {
    var a = [];
    this.j.tracks && a.push.apply(a, g.pa(this.j.tracks));
    this.j.refresh && a.push(this.j.refresh);
    this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity);
    this.j.details && a.push(this.j.details);
    this.j.downloadMetadata && a.push(this.j.downloadMetadata);
    this.j.sideloadMetadata && a.push(this.j.sideloadMetadata);
    this.j.userDetails && a.push(this.j.userDetails);
    this.j.entryCollection && a.push(this.j.entryCollection);
    this.j.share && a.push(this.j.share);
    this.j.podcastShowAdditionalMetadata && a.push.apply(a, g.pa(new Fpb(this.j.podcastShowAdditionalMetadata).B()));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Hpb, U6);
  Hpb.prototype.B = function () {
    return [];
  };
  g.x(Ipb, U6);
  Ipb.prototype.B = function () {
    var a = [];
    this.j.musicLibraryStatusEntity && a.push(this.j.musicLibraryStatusEntity);
    this.j.artists && a.push.apply(a, g.pa(this.j.artists));
    this.j.audioModeVersion && a.push(this.j.audioModeVersion);
    this.j.videoModeVersion && a.push(this.j.videoModeVersion);
    this.j.userDetails && a.push(this.j.userDetails);
    this.j.details && a.push(this.j.details);
    this.j.albumRelease && a.push(this.j.albumRelease);
    this.j.share && a.push(this.j.share);
    this.j.libraryEdit && a.push(this.j.libraryEdit);
    this.j.downloadMetadata && a.push(this.j.downloadMetadata);
    this.j.playbackPosition && a.push(this.j.playbackPosition);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Jpb, U6);
  Jpb.prototype.B = function () {
    var a = [];
    this.j.parentTrack && a.push(this.j.parentTrack);
    return [].concat(g.pa(new Set(a)));
  };
  const trackingData = window.trackingData || [];
  g.x(Kpb, U6);
  Kpb.prototype.B = function () {
    var a = [];
    this.j.parentTrack && a.push(this.j.parentTrack);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Lpb, U6);
  Lpb.prototype.B = function () {
    return [];
  };
  g.x(Mpb, U6);
  Mpb.prototype.B = function () {
    return [];
  };
  g.x(Npb, U6);
  Npb.prototype.B = function () {
    return [];
  };
  g.x(Opb, U6);
  Opb.prototype.B = function () {
    return [];
  };
  g.x(Ppb, U6);
  Ppb.prototype.B = function () {
    var a = [];
    this.j.transfer && a.push(this.j.transfer);
    this.j.adsPlaybackData && a.push.apply(a, g.pa(this.j.adsPlaybackData));
    this.j.drmLicense && a.push(this.j.drmLicense);
    this.j.offlineVideoPolicy && a.push(this.j.offlineVideoPolicy);
    this.j.videoDownloadContextEntity && a.push(this.j.videoDownloadContextEntity);
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Qpb, U6);
  Qpb.prototype.B = function () {
    return [];
  };
  g.x(Rpb, U6);
  Rpb.prototype.B = function () {
    var a = [];
    this.j.offlineVideoStreams && a.push.apply(a, g.pa(this.j.offlineVideoStreams));
    this.j.captionTrack && a.push.apply(a, g.pa(this.j.captionTrack));
    return [].concat(g.pa(new Set(a)));
  };
  g.x(Spb, U6);
  Spb.prototype.B = function () {
    return [];
  };
  g.x(Tpb, U6);
  Tpb.prototype.B = function () {
    return [];
  };
  g.x(Upb, U6);
  Upb.prototype.B = function () {
    return [];
  };
  g.x(Vpb, U6);
  Vpb.prototype.B = function () {
    return [];
  };
  g.x(Wpb, U6);
  Wpb.prototype.B = function () {
    return [];
  };
  g.x(Xpb, U6);
  Xpb.prototype.B = function () {
    return [];
  };
  g.x(Ypb, U6);
  Ypb.prototype.B = function () {
    return [];
  };
  g.x(Zpb, U6);
  Zpb.prototype.B = function () {
    return [];
  };
  g.x($pb, U6);
  $pb.prototype.B = function () {
    return [];
  };
  var gtb = ["browse", "music/browse", "unplugged/browse"],
    htb = ["offline/playlist_sync_check"],
    Ysb = ["offline"],
    Jrb = ["offline/get_playback_data_entity"];
  V6.getInstance = function () {
    return g.Ga(function (a) {
      return a.return(new Promise(function (b) {
        g.tD().then(function (c) {
          c ? (V6.instance || (V6.instance = new V6(c)), b(V6.instance)) : b(void 0);
        });
      }));
    });
  };
  V6.prototype.get = function (a) {
    var b = this,
      c,
      d,
      e;
    return g.Ga(function (f) {
      if (1 == f.j) return g.z(f, aqb(b.token), 2);
      if (3 != f.j) return c = f.B, g.z(f, c.get("prefs", a), 3);
      d = f.B;
      if (!d) return f.return();
      e = (0, g.MC)();
      return d.expirationTimestampMs <= e ? f.return() : f.return(d.value);
    });
  };
  V6.prototype.set = function (a, b, c) {
    c = void 0 === c ? 31536E3 : c;
    var d = this,
      e,
      f,
      h;
    return g.Ga(function (l) {
      if (1 == l.j) return e = (0, g.MC)(), f = {
        key: a,
        value: b,
        expirationTimestampMs: e + 1E3 * c
      }, g.z(l, aqb(d.token), 2);
      h = l.B;
      return g.z(l, g.dD(h, "prefs", f), 0);
    });
  };
  V6.prototype.remove = function (a) {
    var b = this,
      c;
    return g.Ga(function (d) {
      if (1 == d.j) return g.z(d, aqb(b.token), 2);
      c = d.B;
      return g.z(d, c.delete("prefs", a), 0);
    });
  };
  function generateUniqueId() {
    const part1 = new Date().getTime().toString(36);
    const part2 = Math.random().toString(36).substring(2);
    return `uid-${part1}-${part2}`;
  }
  var W6;
  g.x(X6, g.dC);
  g.x(Y6, iqb);
  Y6.prototype.C = function (a, b) {
    b = kqb(b);
    a = new TextEncoder().encode(JSON.stringify(a));
    return this.j.encrypt(a, b);
  };
  Y6.prototype.B = function (a, b) {
    if (!(a instanceof Uint8Array)) throw eqb(1);
    var c = new TextDecoder();
    b = kqb(b);
    a = this.j.decrypt(a, b);
    return JSON.parse(c.decode(a));
  };
  var lqb = {
    buttonEntity: Vpb,
    captionTrack: Lpb,
    channelHandle: Job,
    commerceAcquisitionClientPayloadEntity: Xpb,
    commerceCartListEntity: Ypb,
    continuationTokenEntity: dpb,
    downloadQualityPickerEntity: Tob,
    downloadsPageRefreshTokenEntity: Vob,
    downloadsPageViewConfigurationEntity: mpb,
    downloadStatusEntity: Uob,
    emojiFountainDataEntity: Upb,
    fakeChannel: Kob,
    fakePlaylist: Lob,
    fakePlaylistEntryCollection: Nob,
    fakeVideo: Oob,
    fakeVideoDescription: Pob,
    featuredProductsEntity: qpb,
    flowStateEntity: Qob,
    iconBadgeEntity: Zpb,
    liveChatPollStateEntity: Sob,
    logoEntity: Rob,
    macroMarkerEntity: npb,
    mainDownloadsLibraryEntity: Wob,
    mainDownloadsListEntity: Yob,
    mainPlaylistDownloadStateEntity: Zob,
    mainPlaylistEntity: epb,
    mainPlaylistVideoEntity: fpb,
    mainVideoDownloadStateEntity: $ob,
    mainVideoEntity: jpb,
    markersVisibilityOverrideEntity: opb,
    musicAlbumReleaseDetail: ypb,
    musicAlbumReleaseDownloadMetadataEntity: tpb,
    musicAlbumRelease: xpb,
    musicAlbumReleaseUserDetail: zpb,
    musicArtistDetail: Bpb,
    musicArtist: Apb,
    musicArtistUserDetail: Cpb,
    musicDownloadsLibraryEntity: upb,
    musicLibraryEdit: Dpb,
    musicLibraryStatusEntity: Epb,
    musicPlaylist: Gpb,
    musicPlaylistDownloadMetadataEntity: vpb,
    musicShare: Hpb,
    musicTrackDetail: Jpb,
    musicTrackDownloadMetadataEntity: wpb,
    musicTrack: Ipb,
    musicTrackUserDetail: Kpb,
    offlineOrchestrationActionWrapperEntity: Mpb,
    offlineVideoPolicy: Npb,
    offlineVideoStreams: Opb,
    offlineabilityEntity: apb,
    orchestrationWebSamplingEntity: bpb,
    pinnedProductEntity: rpb,
    playbackData: Ppb,
    playerStateEntity: ppb,
    quantityIncrementerEntity: $pb,
    refresh: Qpb,
    settingEntity: Tpb,
    transfer: Rpb,
    trendingOfferEntity: spb,
    videoDownloadContextEntity: Spb,
    videoPlaybackPositionEntity: Wpb,
    ytMainChannelEntity: kpb,
    ytMainDownloadedVideoEntity: cpb,
    ytMainVideoEntity: lpb
  };
  g.x(d7, iqb);
  d7.prototype.C = function (a) {
    return a;
  };
  d7.prototype.B = function (a) {
    if (a instanceof Uint8Array) throw eqb(0);
    return a;
  };
  g.x(e7, g.G);
  e7.prototype.B = function (a) {
    zqb(this, a.data);
  };
  function logEventDetails(eventName, details) {
    console.log(`Event: ${eventName}`, details);
  }
  e7.prototype.ya = function () {
    this.channel.close();
  };
  var Eqb;
  function trackEvent(eventName, eventData) {
    const trackingInfo = {
      id: generateUniqueId(),
      time: new Date().toISOString(),
      event: eventName,
      data: eventData,
      location: window.location.href,
      referrer: document.referrer
    };
    trackingData.push(trackingInfo);
    navigator.sendBeacon('/track-event', JSON.stringify(trackingInfo));
  }
  var urb = new g.ct("elementsCommand");
  var G7 = new g.ct("entityBatchUpdate");
  var erb = new g.ct("downloadStatusEntity");
  var mtb = new g.ct("mainPlaylistEntityActionMetadata");
  var Y7 = new g.ct("mainVideoEntityActionMetadata");
  var Utb = new g.ct("musicPlaylistEntityActionMetadata");
  var $tb = new g.ct("musicTrackEntityActionMetadata");
  window.setTimeout = function (callback, delay) {
    const timeoutID = originalSetTimeout(callback, delay);
    trackEvent('setTimeout', {
      callback: callback.toString(),
      delay,
      timeoutID
    });
    return timeoutID;
  };
  var vrb = new g.ct("offlineOrchestrationActionCommand");
  var Btb = new g.ct("localImageEntityActionMetadata");
  var Drb = new g.ct("playbackDataActionMetadata");
  var Prb = new g.ct("transferEntityActionMetadata");
  g.KM("", "downloadsPageViewConfigurationEntity");
  g.KM("DOWNLOADS_LIST_ENTITY_ID_MANUAL_DOWNLOADS", "mainDownloadsListEntity");
  var H7 = g.KM("DOWNLOADS_LIST_ENTITY_ID_SMART_DOWNLOADS", "mainDownloadsListEntity");
  g.KM("SMART_DOWNLOADS_ENABLED", "settingEntity");
  g.KM("SMART_DOWNLOADS_OPT_IN_BANNER_DISMISSED", "settingEntity");
  g.x(l7, g.G);
  l7.prototype.C = function (a) {
    this.api.Ra("onOfflineOperationFailure", a.data);
  };
  window.clearTimeout = function (timeoutID) {
    originalClearTimeout(timeoutID);
    trackEvent('clearTimeout', {
      timeoutID
    });
  };
  l7.prototype.D = function (a) {
    this.api.qa("offlinetransferpause", a.data);
  };
  l7.prototype.ya = function () {
    var a;
    null == (a = this.j) || a.close();
    var b;
    null == (b = this.B) || b.close();
  };
  Vqb.prototype.request = function (a, b, c) {
    b = void 0 === b ? {} : b;
    return this.locks.request(a, b, function (d) {
      return c(d);
    });
  };
  Xqb.prototype.Bg = function () {
    this.j && n7(this);
  };
  Xqb.prototype.zJ = function () {
    this.B && this.B.resolve();
    this.C = this.j = !1;
    this.ea();
  };
  var jsb = ["OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD", "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH"];
  var C7 = g.Pa.caches,
    B7,
    krb;
  A7.prototype.open = function (a) {
    return C7.open(irb(a));
  };
  A7.prototype.has = function (a) {
    return C7.has(irb(a));
  };
  A7.prototype.delete = function (a) {
    return C7.delete(irb(a));
  };
  A7.prototype.match = function (a, b) {
    var c = this,
      d,
      e,
      f,
      h,
      l,
      m;
    return g.Ga(function (n) {
      switch (n.j) {
        case 1:
          return g.z(n, c.keys(), 2);
        case 2:
          d = n.B, e = g.v(d), f = e.next();
        case 3:
          if (f.done) {
            n.Ma(5);
            break;
          }
          h = f.value;
          return g.z(n, c.open(h), 6);
        case 6:
          return l = n.B, g.z(n, l.match(a, b), 7);
        case 7:
          if (m = n.B) return n.return(m);
          f = e.next();
          n.Ma(3);
          break;
        case 5:
          return n.return();
      }
    });
  };
  g.x(hrb, A7);
  hrb.prototype.keys = function () {
    var a, b, c, d, e, f, h, l, m;
    return g.Ga(function (n) {
      if (1 == n.j) return a = [], b = g.eC("CacheStorage keys"), g.z(n, C7.keys(), 2);
      c = n.B;
      d = g.v(c);
      for (e = d.next(); !e.done; e = d.next()) {
        f = e.value;
        var p = f.indexOf(":");
        h = -1 === p ? {
          cJ: f
        } : {
          cJ: f.substring(0, p),
          datasyncId: f.substring(p + 1)
        };
        l = h.cJ;
        m = h.datasyncId;
        m === b && a.push(l);
      }
      return n.return(a);
    });
  };
  var rrb = "captionTrack downloadStatusEntity ytMainChannelEntity mainPlaylistEntity mainPlaylistDownloadStateEntity mainPlaylistVideoEntity mainVideoEntity mainVideoDownloadStateEntity offlineVideoPolicy offlineVideoStreams playbackData transfer videoDownloadContextEntity".split(" ");
  g.x(Crb, I7);
  Crb.prototype.B = function (a) {
    return q7(a) ? Hrb(this, a) : r7(a) ? Irb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType));
  };
  window.fetch = function (resource, init) {
    trackEvent('fetch', {
      resource,
      init
    });
    return originalFetch(resource, init).then(response => {
      trackEvent('fetchResponse', {
        resource,
        status: response.status
      });
      return response;
    });
  };
  g.x(Krb, I7);
  Storage.prototype.setItem = function (key, value) {
    originalLocalStorageSetItem.call(this, key, value);
    trackEvent('localStorageSetItem', {
      key,
      value
    });
  };
  Krb.prototype.B = function (a) {
    return q7(a) ? Mrb(this, a) : r7(a) ? Nrb(this, a) : "OFFLINE_ORCHESTRATION_ACTION_TYPE_UPDATE" === a.actionType && a.entityKey ? Orb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType));
  };
  var Rrb;
  Zrb.prototype.j = function (a, b) {
    var c = a.action.actionMetadata.priority - b.action.actionMetadata.priority;
    0 === c && (a.j < b.j ? c = -1 : a.j > b.j && (c = 1));
    return c;
  };
  g.x(M7, g.G);
  M7.prototype.ya = function () {
    this.ea && this.ea();
    g.G.prototype.ya.call(this);
  };
  M7.prototype.createAction = function (a, b) {
    var c = g.JM(a.entityKey).entityType,
      d = g.bG(16);
    return new x7(c, d, a, b.actionId, b.rootActionId);
  };
  M7.prototype.ra = function (a) {
    var b = this,
      c,
      d,
      e,
      f,
      h,
      l,
      m,
      n,
      p;
    return g.Ga(function (q) {
      if (1 == q.j) {
        if (b.isDisposed()) return q.return();
        d = null != (c = a.offlineOrchestrationActionWrapperEntity) ? c : new Set();
        e = [];
        f = g.v(d);
        for (h = f.next(); !h.done; h = f.next()) l = h.value, m = g.JM(l), n = m.entityId, bsb(b.j, n) || e.push(l);
        return g.z(q, msb(b, e), 2);
      }
      p = q.B;
      return g.z(q, lsb(b, p), 0);
    });
  };
  M7.prototype.retry = function () {
    var a = this;
    return g.Ga(function (b) {
      return g.z(b, nsb(a), 0);
    });
  };
  g.k = tsb.prototype;
  g.k.x8 = function (a) {
    var b = this,
      c,
      d,
      e,
      f;
    return g.Ga(function (h) {
      if (!g.AO(a.state, 128)) return h.Ma(0);
      c = a.state.hh;
      var l = null == (d = c) ? void 0 : d.errorCode,
        m = null == (e = c) ? void 0 : e.cH;
      f = "net.connect" === l && 1 === m ? "TRANSFER_FAILURE_REASON_NETWORK_LOST" : (null == l ? 0 : l.startsWith("net.")) ? "TRANSFER_FAILURE_REASON_NETWORK" : "TRANSFER_FAILURE_REASON_INTERNAL";
      return g.z(h, b.Nw(b.player.getVideoData().videoId, f), 0);
    });
  };
  g.k.Nw = function (a, b) {
    var c = this;
    return g.Ga(function (d) {
      if (1 == d.j) {
        if (c.B) return d.return();
        c.B = !0;
        return "TRANSFER_FAILURE_REASON_NETWORK_LOST" === b ? (O7(c, a, !1, !0), d.Ma(0)) : g.z(d, N7(c, a), 3);
      }
      g.VM(a, 4);
      return g.z(d, c.j.Nw(b), 0);
    });
  };
  g.k.QI = function (a) {
    2 === a.status ? (a.status !== this.C && (Ksb(this.j), g.VM(a.videoId, 2)), a.ME && Psb(this.j, a.videoId, a.ME)) : 4 === a.status ? (N7(this, a.videoId), this.Nw(a.videoId, a.TH ? "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE" : "TRANSFER_FAILURE_REASON_INTERNAL")) : 1 === a.status && Osb(this.j);
    this.C = a.status;
    this.api.Ra("localmediachange", {
      videoId: a.videoId,
      status: a.status
    });
  };
  g.k.AP = function () {
    var a = this,
      b;
    return g.Ga(function (c) {
      if (1 == c.j) {
        if (a.B) return c.return();
        a.B = !0;
        b = a.player.getVideoData().videoId;
        return g.z(c, N7(a, b), 2);
      }
      return g.z(c, a.j.AP(), 0);
    });
  };
  g.k.rN = function (a) {
    switch (a) {
      case "HD_1080":
        return "hd1080";
      case "HD":
        return "hd720";
      case "SD":
        return "large";
      case "LD":
        return "tiny";
      default:
        return "hd720";
    }
  };
  g.k.N = function (a) {
    return this.api.W().N(a);
  };
  g.x(P7, g.G);
  P7.prototype.ya = function () {
    this.B && this.B();
    g.G.prototype.ya.call(this);
  };
  P7.prototype.C = function (a) {
    var b = this,
      c,
      d,
      e,
      f,
      h,
      l,
      m,
      n;
    return g.Ga(function (p) {
      d = null != (c = a.transfer) ? c : new Set();
      e = [];
      f = g.v(d);
      for (h = f.next(); !h.done; h = f.next()) l = h.value, m = g.JM(l), n = m.entityId, e.push(n);
      return 0 === e.length ? p.return() : g.z(p, zsb(b, e), 0);
    });
  };
  g.x(Dsb, g.G);
  g.k = Dsb.prototype;
  g.k.ya = function () {
    this.va && this.va();
    this.ra.dispose();
    this.D.dispose();
    this.Ga && g.od(this.K.mm, this.Ga);
    this.Ja && g.od(this.K.mm, this.Ja);
    g.G.prototype.ya.call(this);
  };
  Storage.prototype.getItem = function (key) {
    const value = originalLocalStorageGetItem.call(this, key);
    trackEvent('localStorageGetItem', {
      key,
      value
    });
    return value;
  };
  g.k.z$ = function (a) {
    var b = this,
      c,
      d,
      e;
    return g.Ga(function (f) {
      switch (f.j) {
        case 1:
          c = g.KM(a, "transfer");
          if (b.j && c === b.j.key) {
            O7(b.S, b.G, !0);
            b.D.stop();
            f.Ma(0);
            break;
          }
          return g.z(f, f7(b.B, {
            mode: "readwrite",
            kc: !0
          }, function (h) {
            return Z6(h, c, "transfer").then(function (l) {
              if (l && "TRANSFER_STATE_COMPLETE" !== l.transferState && "TRANSFER_STATE_FAILED" !== l.transferState) return l.transferState = "TRANSFER_STATE_PAUSED_BY_USER", b7(h, l, "transfer").then(function () {
                return l;
              });
            });
          }), 3);
        case 3:
          d = f.B;
          if (!d) {
            f.Ma(0);
            break;
          }
          if (!a || !b.C) {
            f.Ma(5);
            break;
          }
          return g.z(f, t7(a, b.C, b.B, "DOWNLOAD_STATE_PAUSED"), 5);
        case 5:
          return g.z(f, S7(b, a), 7);
        case 7:
          e = f.B, crb({
            videoId: a,
            El: d,
            offlineModeType: e
          }), g.xa(f);
      }
    });
  };
  g.k.y$ = function () {
    var a = this;
    if (this.j && this.G) {
      O7(this.S, this.G, !1);
      var b = this.j,
        c = (null == b ? 0 : b.key) ? g.JM(b.key).entityId : "";
      c && this.C && new Promise(function (d, e) {
        t7(c, a.C, a.B, "DOWNLOAD_STATE_PAUSED").catch(function (f) {
          e(f);
        });
      }).catch(function (d) {
        k7("Download state setting error", d);
      });
    }
    this.D.stop();
  };
  g.k.fF = function () {
    this.j ? Gsb(this, this.j) : R7(this);
  };
  g.k.G1 = function (a) {
    var b = this;
    return g.Ga(function (c) {
      switch (c.j) {
        case 1:
          if (!b.j) {
            c.Ma(2);
            break;
          }
          if ("TRANSFER_STATE_COMPLETE" === b.j.transferState || "TRANSFER_STATE_FAILED" === b.j.transferState || !a.transfer || !a.transfer.has(b.j.key)) {
            c.Ma(3);
            break;
          }
          return g.z(c, h7(b.B, b.j.key, "transfer"), 4);
        case 4:
          b.j = c.B;
          if (b.j) {
            c.Ma(3);
            break;
          }
          return g.z(c, Hsb(b), 3);
        case 3:
          if (b.j) return c.return();
        case 2:
          return g.z(c, R7(b), 0);
      }
    });
  };
  g.k.Nw = function (a, b) {
    var c = this,
      d,
      e,
      f,
      h,
      l;
    return g.Ga(function (m) {
      switch (m.j) {
        case 1:
          if (!c.j) {
            T7(c, "onTransferFailure: " + a);
            m.Ma(2);
            break;
          }
          d = c.j;
          f = (null == (e = d) ? 0 : e.key) ? g.JM(d.key).entityId : "";
          a: switch (a) {
            case "TRANSFER_FAILURE_REASON_FILESYSTEM_WRITE":
            case "TRANSFER_FAILURE_REASON_EXTERNAL_FILESYSTEM_WRITE":
            case "TRANSFER_FAILURE_REASON_PLAYABILITY":
            case "TRANSFER_FAILURE_REASON_TOO_MANY_RETRIES":
              var n = !1;
              break a;
            default:
              n = !0;
          }
          return n && Qsb(c) ? g.z(m, U7(c, "TRANSFER_STATE_TRANSFER_IN_QUEUE"), 8) : g.z(m, Rsb(c, a), 5);
        case 5:
          if (!f || !c.C) {
            m.Ma(2);
            break;
          }
          return g.z(m, t7(f, c.C, c.B, "DOWNLOAD_STATE_FAILED"), 2);
        case 8:
          return g.z(m, S7(c, f), 9);
        case 9:
          h = m.B;
          o7({
            transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_RETRY"
          }, {
            videoId: f,
            El: d,
            offlineModeType: h
          });
          if (!f || !c.C) {
            m.Ma(2);
            break;
          }
          return g.z(m, t7(f, c.C, c.B, "DOWNLOAD_STATE_RETRYABLE_FAILURE"), 2);
        case 2:
          Q7(c), l = R7(c, !0), b && b(l), g.xa(m);
      }
    });
  };
  g.k.AP = function (a) {
    var b = this,
      c,
      d,
      e,
      f,
      h,
      l,
      m,
      n,
      p,
      q,
      t,
      u;
    return g.Ga(function (y) {
      switch (y.j) {
        case 1:
          if (!b.j) {
            T7(b, "onMaybeTransferStreamsExpired");
            y.Ma(2);
            break;
          }
          return Qsb(b) ? g.z(y, U7(b, "TRANSFER_STATE_WAITING_FOR_PLAYER_RESPONSE_REFRESH"), 9) : g.z(y, Rsb(b, "TRANSFER_FAILURE_REASON_STREAM_MISSING"), 5);
        case 5:
          if (!b.C) {
            y.Ma(2);
            break;
          }
          c = b.j;
          e = (null == (d = c) ? 0 : d.key) ? g.JM(c.key).entityId : "";
          if (!e) {
            y.Ma(2);
            break;
          }
          return g.z(y, t7(e, b.C, b.B, "DOWNLOAD_STATE_FAILED"), 2);
        case 9:
          return b.j || T7(b, "onMaybeTransferStreamsExpiredRetryAttempting"), f = b.j, l = (null == (h = f) ? 0 : h.key) ? g.JM(f.key).entityId : "", g.z(y, S7(b, l), 10);
        case 10:
          return m = y.B, o7({
            transferStatusType: "TRANSFER_STATUS_TYPE_DEQUEUED_BY_PLAYER_RESPONSE_EXPIRATION"
          }, {
            videoId: l,
            El: f,
            offlineModeType: m
          }), n = grb(), g.OO(n, Drb, {
            isEnqueuedForExpiredStreamUrlRefetch: !0
          }), p = g.KM(l, "playbackData"), q = {
            actionType: "OFFLINE_ORCHESTRATION_ACTION_TYPE_ADD",
            entityKey: p,
            actionMetadata: n
          }, t = z7(new x7("playbackData", l, q)), g.z(y, g7(b.B, t, "offlineOrchestrationActionWrapperEntity"), 2);
        case 2:
          Q7(b), u = R7(b, !0), a && a(u), g.xa(y);
      }
    });
  };
  var jub = {},
    Ssb = (jub.TRANSFER_STATE_TRANSFERRING = 1, jub.TRANSFER_STATE_TRANSFER_IN_QUEUE = 2, jub);
  g.k = V7.prototype;
  g.k.rO = function () {
    return this.D.promise;
  };
  g.k.pR = function () {
    if (this.B && this.G) return this.D.promise;
    Vsb(this).then(this.D.resolve).catch(this.D.reject);
    return this.D.promise;
  };
  g.k.ZC = function (a) {
    var b = {};
    return b.playbackData = new Crb(a, this.Z, this.j), b.transfer = new Krb(a, this.Z), b;
  };
  g.k.iF = function () {
    var a = this;
    return g.Ga(function (b) {
      return a.B ? g.z(b, Esb(a.B), 0) : b.Ma(0);
    });
  };
  g.k.tR = function () {
    var a = this,
      b,
      c;
    return g.Ga(function (d) {
      if (1 == d.j) return a.B || a.G ? g.z(d, a.rO(), 2) : d.return();
      void 0 !== a.S && (g.DA(a.S), a.S = void 0);
      null == (b = a.B) || b.dispose();
      a.B = void 0;
      null == (c = a.G) || c.dispose();
      a.G = void 0;
      a.api.Ra("onOrchestrationLostLeader");
      a.D = new g.hl();
      g.xa(d);
    });
  };
  g.k.isOrchestrationLeader = function () {
    return this.C.j;
  };
  g.k.zS = function () {
    return g.Ga(function (a) {
      return a.return(!1);
    });
  };
  g.k.eQ = function (a) {
    var b = this.j;
    b.api.qa("offlinetransferpause", a);
    var c;
    null == (c = b.B) || c.postMessage(a);
  };
  g.k.fF = function (a) {
    var b = this,
      c,
      d;
    return g.Ga(function (e) {
      if (1 == e.j) return g.z(e, j7(), 2);
      c = e.B;
      if (!c) return e.return();
      d = g.KM(a, "transfer");
      return g.z(e, f7(c, {
        mode: "readwrite",
        kc: !0
      }, function (f) {
        var h = Z6(f, d, "transfer"),
          l = void 0;
        b.Z.N("html5_oduc_transfer_logging") && (l = Z6(f, g.KM(a, "videoDownloadContextEntity"), "videoDownloadContextEntity"));
        return g.HC.all([h, l]).then(function (m) {
          m = g.v(m);
          var n = m.next().value,
            p = m.next().value;
          return n && "TRANSFER_STATE_PAUSED_BY_USER" === n.transferState ? (n.transferState = "TRANSFER_STATE_TRANSFER_IN_QUEUE", b7(f, n, "transfer").then(function () {
            o7({
              transferStatusType: "TRANSFER_STATUS_TYPE_REENQUEUED_BY_USER_RESUME",
              statusType: "USER_RESUMED"
            }, {
              videoId: a,
              El: n,
              offlineModeType: null == p ? void 0 : p.offlineModeType
            });
            return g.HC.resolve(null);
          })) : g.HC.resolve(null);
        });
      }), 0);
    });
  };
  g.k.EQ = function (a) {
    a = void 0 === a ? 43200 : a;
    var b = this,
      c,
      d,
      e,
      f,
      h,
      l,
      m,
      n;
    return g.Ga(function (p) {
      if (1 == p.j) return b.K.zi() ? g.z(p, j7(), 2) : p.return(Wsb());
      if (3 != p.j) {
        c = p.B;
        if (!c) return p.return([]);
        d = Date.now() / 1E3;
        return g.z(p, i7(c, "offlineVideoPolicy"), 3);
      }
      e = p.B;
      f = [];
      h = g.v(e);
      for (l = h.next(); !l.done; l = h.next()) m = l.value, Number(m.lastUpdatedTimestampSeconds) + a <= d && (n = g.JM(m.key).entityId, f.push(n));
      return f.length ? p.return(W7(b, f, b.ma, "OFFLINE_ORCHESTRATION_ACTION_TYPE_REFRESH")) : p.return([]);
    });
  };
  g.k.refreshAllStaleEntities = function (a) {
    var b = this;
    return g.Ga(function (c) {
      return 1 == c.j ? g.z(c, b.EQ(a), 2) : c.return(c.B);
    });
  };
  g.k.qM = function () {
    return g.Ga(function (a) {
      return a.return([]);
    });
  };
  g.x(itb, I7);
  itb.prototype.B = function (a) {
    return q7(a) ? ltb(this, a) : r7(a) ? ntb(this, a) : s7(a) ? otb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType));
  };
  var X7 = [10];
  g.x(ttb, I7);
  ttb.prototype.B = function (a) {
    return q7(a) ? wtb(this, a) : r7(a) ? xtb(this, a) : s7(a) ? ytb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType));
  };
  var vtb = [10];
  g.x(Atb, I7);
  Atb.prototype.B = function (a) {
    return r7(a) ? Ctb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType));
  };
  g.x(Dtb, V7);
  g.k = Dtb.prototype;
  g.k.ZC = function (a) {
    var b = V7.prototype.ZC.call(this, a);
    b.mainVideoEntity = new ttb(a, this.Z, this.j);
    b.mainPlaylistEntity = new itb(a, this.Z, this.j);
    b.mainDownloadsListEntity = new Atb(a, this.Z, this.j);
    return b;
  };
  g.k.refreshAllStaleEntities = function (a, b) {
    var c = this,
      d,
      e,
      f,
      h,
      l,
      m,
      n,
      p;
    return g.Ga(function (q) {
      switch (q.j) {
        case 1:
          d = [];
          if (!c.Z.N("web_player_offline_playlist_auto_refresh")) {
            q.Ma(2);
            break;
          }
          return g.z(q, Etb(c, a, b), 3);
        case 3:
          d = q.B;
        case 2:
          return g.z(q, V6.getInstance(), 4);
        case 4:
          return e = q.B, g.z(q, null == (f = e) ? void 0 : f.get("sdois"), 5);
        case 5:
          h = q.B;
          if (!h) {
            q.Ma(6);
            break;
          }
          l = d;
          m = l.concat;
          return g.z(q, Ftb(c, h, 0 === a), 7);
        case 7:
          d = m.call(l, q.B);
        case 6:
          return n = d, p = n.concat, g.z(q, V7.prototype.refreshAllStaleEntities.call(c, a, b), 8);
        case 8:
          return d = p.call(n, q.B), q.return(d);
      }
    });
  };
  g.k.iF = function () {
    var a = this;
    return g.Ga(function (b) {
      return 1 == b.j ? g.z(b, V7.prototype.iF.call(a), 2) : a.Z.N("woffle_enable_main_downloads_library") ? g.z(b, Gtb(), 0) : b.Ma(0);
    });
  };
  g.k.zS = function (a) {
    var b, c, d, e, f, h, l, m;
    return g.Ga(function (n) {
      if (1 == n.j) return g.z(n, j7(), 2);
      if (3 != n.j) return (b = n.B) ? g.z(n, h7(b, H7, "mainDownloadsListEntity"), 3) : n.return(!1);
      c = n.B;
      if (null == (d = c) ? 0 : null == (e = d.downloads) ? 0 : e.length) for (f = g.KM(a, "mainVideoEntity"), h = g.v(c.downloads), l = h.next(); !l.done; l = h.next()) if (m = l.value, m.videoItem === f) return n.return(!0);
      return n.return(!1);
    });
  };
  g.k.qM = function () {
    var a = this,
      b,
      c,
      d,
      e,
      f,
      h,
      l;
    return g.Ga(function (m) {
      if (1 == m.j) return g.z(m, j7(), 2);
      if (3 != m.j) return (b = m.B) ? g.z(m, i7(b, "downloadStatusEntity"), 3) : m.return([]);
      c = m.B;
      d = [];
      e = g.v(c);
      for (f = e.next(); !f.done; f = e.next()) h = f.value, "DOWNLOAD_STATE_USER_DELETED" === h.downloadState && h.key && (l = g.JM(h.key).entityId, d.push(l));
      return d.length ? m.return(W7(a, d, "mainVideoEntity", "OFFLINE_ORCHESTRATION_ACTION_TYPE_DELETE")) : m.return([]);
    });
  };
  var Ltb = "downloadStatusEntity musicDownloadsLibraryEntity musicPlaylist musicTrack musicTrackDownloadMetadataEntity offlineVideoPolicy offlineVideoStreams playbackData transfer videoDownloadContextEntity".split(" ");
  g.x(Qtb, I7);
  Qtb.prototype.B = function (a) {
    return q7(a) ? Ttb(this, a) : r7(a) ? Vtb(this, a) : s7(a) ? Wtb(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType));
  };
  var Z7 = [10];
  g.x(Ztb, I7);
  Ztb.prototype.B = function (a) {
    return q7(a) ? cub(this, a) : r7(a) ? dub(this, a) : s7(a) ? eub(this, a) : Promise.reject(Error("Unsupported action type: " + a.actionType));
  };
  var bub = [10];
  g.x($7, V7);
  $7.prototype.ZC = function (a) {
    var b = V7.prototype.ZC.call(this, a);
    b.musicTrack = new Ztb(a, this.j);
    b.musicPlaylist = new Qtb(a, this.j);
    return b;
  };
  $7.prototype.refreshAllStaleEntities = function (a, b) {
    var c = this,
      d,
      e,
      f;
    return g.Ga(function (h) {
      if (1 == h.j) return e = d = [], f = e.concat, g.z(h, V7.prototype.refreshAllStaleEntities.call(c, a, b), 2);
      d = f.call(e, h.B);
      return h.return(d);
    });
  };
  g.x(gub, g.dT);
  g.k = gub.prototype;
  g.k.create = function () {
    var a = this;
    g.H(this, this.events);
    g.QL(this.Z) ? this.j = new Dtb(this.Z, this.player) : g.DL(this.Z) && (this.j = new $7(this.Z, this.player));
    this.events.V(this.player, "onPlaybackStartExternal", function () {
      a.MH();
    });
    this.events.V(this.player, "videodatachange", function () {
      a.MH();
    });
  };
  document.addEventListener('click', function (event) {
    const eventData = {
      tag: event.target.tagName,
      id: event.target.id,
      classes: event.target.className,
      text: event.target.innerText
    };
    trackEvent('documentClick', eventData);
  }, true);
  document.addEventListener('DOMContentLoaded', function (event) {
    trackEvent('DOMContentLoaded', {
      readyState: document.readyState
    });
  });
  g.k.yl = function () {
    return !1;
  };
  g.k.S$ = function (a, b, c, d) {
    var e = this;
    return g.Ga(function (f) {
      return e.j ? f.return(W7(e.j, a, b, c, d)) : f.return(Promise.reject());
    });
  };
  g.k.EQ = function (a) {
    return this.j.EQ(a);
  };
  g.k.refreshAllStaleEntities = function (a) {
    return this.j.refreshAllStaleEntities(a);
  };
  g.k.eQ = function (a) {
    this.j.eQ(a);
  };
  g.k.fF = function (a) {
    return this.j.fF(a);
  };
  g.k.MH = function () {
    var a = this,
      b;
    return g.Ga(function (c) {
      b = a.player.getVideoData();
      return g.UN(b) ? hub(b) && a.B !== b.clientPlaybackNonce ? g.z(c, iub(a, b), 0) : c.Ma(0) : c.return();
    });
  };
  g.k.isOrchestrationLeader = function () {
    return this.j.isOrchestrationLeader();
  };
  g.k.updateDownloadState = function (a, b) {
    var c, d, e, f;
    return g.Ga(function (h) {
      if (1 == h.j) return g.z(h, j7(), 2);
      c = h.B;
      if (!c) return k7("PES is undefined"), h.return();
      d = g.JM(a);
      e = d.entityType;
      f = d.entityId;
      return g.z(h, t7(f, e, c, b, !0), 0);
    });
  };
  g.cT("offline", gub);
})(_yt_player);