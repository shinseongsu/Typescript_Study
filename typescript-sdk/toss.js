var TossPayments = function () {
    "use strict";
    var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var n = function (t) {
            return t && t.Math == Math && t
        },
        r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function () {
            return this
        }() || Function("return this")(),
        o = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        i = !o((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })),
        a = {}.propertyIsEnumerable,
        u = Object.getOwnPropertyDescriptor,
        c = {
            f: u && !a.call({
                1: 2
            }, 1) ? function (t) {
                var e = u(this, t);
                return !!e && e.enumerable
            } : a
        },
        s = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        l = {}.toString,
        f = function (t) {
            return l.call(t).slice(8, -1)
        },
        h = "".split,
        p = o((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == f(t) ? h.call(t, "") : Object(t)
        } : Object,
        d = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        },
        v = function (t) {
            return p(d(t))
        },
        y = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        g = function (t, e) {
            if (!y(t)) return t;
            var n, r;
            if (e && "function" == typeof (n = t.toString) && !y(r = n.call(t))) return r;
            if ("function" == typeof (n = t.valueOf) && !y(r = n.call(t))) return r;
            if (!e && "function" == typeof (n = t.toString) && !y(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        m = function (t) {
            return Object(d(t))
        },
        b = {}.hasOwnProperty,
        w = function (t, e) {
            return b.call(m(t), e)
        },
        S = r.document,
        E = y(S) && y(S.createElement),
        O = function (t) {
            return E ? S.createElement(t) : {}
        },
        j = !i && !o((function () {
            return 7 != Object.defineProperty(O("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })),
        x = Object.getOwnPropertyDescriptor,
        R = {
            f: i ? x : function (t, e) {
                if (t = v(t), e = g(e, !0), j) try {
                    return x(t, e)
                } catch (t) {}
                if (w(t, e)) return s(!c.f.call(t, e), t[e])
            }
        },
        _ = function (t) {
            if (!y(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        P = Object.defineProperty,
        L = {
            f: i ? P : function (t, e, n) {
                if (_(t), e = g(e, !0), _(n), j) try {
                    return P(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        },
        A = i ? function (t, e, n) {
            return L.f(t, e, s(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        },
        T = function (t, e) {
            try {
                A(r, t, e)
            } catch (n) {
                r[t] = e
            }
            return e
        },
        k = r["__core-js_shared__"] || T("__core-js_shared__", {}),
        I = Function.toString;
    "function" != typeof k.inspectSource && (k.inspectSource = function (t) {
        return I.call(t)
    });
    var U, C, M, q = k.inspectSource,
        B = r.WeakMap,
        N = "function" == typeof B && /native code/.test(q(B)),
        D = e((function (t) {
            (t.exports = function (t, e) {
                return k[t] || (k[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.11.2",
                mode: "global",
                copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
            })
        })),
        F = 0,
        G = Math.random(),
        z = function (t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++F + G).toString(36)
        },
        H = D("keys"),
        K = function (t) {
            return H[t] || (H[t] = z(t))
        },
        V = {},
        Y = r.WeakMap;
    if (N) {
        var W = k.state || (k.state = new Y),
            $ = W.get,
            X = W.has,
            J = W.set;
        U = function (t, e) {
            if (X.call(W, t)) throw new TypeError("Object already initialized");
            return e.facade = t, J.call(W, t, e), e
        }, C = function (t) {
            return $.call(W, t) || {}
        }, M = function (t) {
            return X.call(W, t)
        }
    } else {
        var Z = K("state");
        V[Z] = !0, U = function (t, e) {
            if (w(t, Z)) throw new TypeError("Object already initialized");
            return e.facade = t, A(t, Z, e), e
        }, C = function (t) {
            return w(t, Z) ? t[Z] : {}
        }, M = function (t) {
            return w(t, Z)
        }
    }
    var Q, tt, et = {
            set: U,
            get: C,
            has: M,
            enforce: function (t) {
                return M(t) ? C(t) : U(t, {})
            },
            getterFor: function (t) {
                return function (e) {
                    var n;
                    if (!y(e) || (n = C(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            }
        },
        nt = e((function (t) {
            var e = et.get,
                n = et.enforce,
                o = String(String).split("String");
            (t.exports = function (t, e, i, a) {
                var u, c = !!a && !!a.unsafe,
                    s = !!a && !!a.enumerable,
                    l = !!a && !!a.noTargetGet;
                "function" == typeof i && ("string" != typeof e || w(i, "name") || A(i, "name", e), (u = n(i)).source || (u.source = o.join("string" == typeof e ? e : ""))), t !== r ? (c ? !l && t[e] && (s = !0) : delete t[e], s ? t[e] = i : A(t, e, i)) : s ? t[e] = i : T(e, i)
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && e(this).source || q(this)
            }))
        })),
        rt = r,
        ot = function (t) {
            return "function" == typeof t ? t : void 0
        },
        it = function (t, e) {
            return arguments.length < 2 ? ot(rt[t]) || ot(r[t]) : rt[t] && rt[t][e] || r[t] && r[t][e]
        },
        at = Math.ceil,
        ut = Math.floor,
        ct = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? ut : at)(t)
        },
        st = Math.min,
        lt = function (t) {
            return t > 0 ? st(ct(t), 9007199254740991) : 0
        },
        ft = Math.max,
        ht = Math.min,
        pt = function (t) {
            return function (e, n, r) {
                var o, i = v(e),
                    a = lt(i.length),
                    u = function (t, e) {
                        var n = ct(t);
                        return n < 0 ? ft(n + e, 0) : ht(n, e)
                    }(r, a);
                if (t && n != n) {
                    for (; a > u;)
                        if ((o = i[u++]) != o) return !0
                } else
                    for (; a > u; u++)
                        if ((t || u in i) && i[u] === n) return t || u || 0;
                return !t && -1
            }
        },
        dt = {
            includes: pt(!0),
            indexOf: pt(!1)
        },
        vt = dt.indexOf,
        yt = function (t, e) {
            var n, r = v(t),
                o = 0,
                i = [];
            for (n in r) !w(V, n) && w(r, n) && i.push(n);
            for (; e.length > o;) w(r, n = e[o++]) && (~vt(i, n) || i.push(n));
            return i
        },
        gt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        mt = gt.concat("length", "prototype"),
        bt = {
            f: Object.getOwnPropertyNames || function (t) {
                return yt(t, mt)
            }
        },
        wt = {
            f: Object.getOwnPropertySymbols
        },
        St = it("Reflect", "ownKeys") || function (t) {
            var e = bt.f(_(t)),
                n = wt.f;
            return n ? e.concat(n(t)) : e
        },
        Et = function (t, e) {
            for (var n = St(e), r = L.f, o = R.f, i = 0; i < n.length; i++) {
                var a = n[i];
                w(t, a) || r(t, a, o(e, a))
            }
        },
        Ot = /#|\.prototype\./,
        jt = function (t, e) {
            var n = Rt[xt(t)];
            return n == Pt || n != _t && ("function" == typeof e ? o(e) : !!e)
        },
        xt = jt.normalize = function (t) {
            return String(t).replace(Ot, ".").toLowerCase()
        },
        Rt = jt.data = {},
        _t = jt.NATIVE = "N",
        Pt = jt.POLYFILL = "P",
        Lt = jt,
        At = R.f,
        Tt = function (t, e) {
            var n, o, i, a, u, c = t.target,
                s = t.global,
                l = t.stat;
            if (n = s ? r : l ? r[c] || T(c, {}) : (r[c] || {}).prototype)
                for (o in e) {
                    if (a = e[o], i = t.noTargetGet ? (u = At(n, o)) && u.value : n[o], !Lt(s ? o : c + (l ? "." : "#") + o, t.forced) && void 0 !== i) {
                        if (typeof a == typeof i) continue;
                        Et(a, i)
                    }(t.sham || i && i.sham) && A(a, "sham", !0), nt(n, o, a, t)
                }
        },
        kt = "process" == f(r.process),
        It = it("navigator", "userAgent") || "",
        Ut = r.process,
        Ct = Ut && Ut.versions,
        Mt = Ct && Ct.v8;
    Mt ? tt = (Q = Mt.split("."))[0] + Q[1] : It && (!(Q = It.match(/Edge\/(\d+)/)) || Q[1] >= 74) && (Q = It.match(/Chrome\/(\d+)/)) && (tt = Q[1]);
    var qt, Bt = tt && +tt,
        Nt = !!Object.getOwnPropertySymbols && !o((function () {
            return !Symbol.sham && (kt ? 38 === Bt : Bt > 37 && Bt < 41)
        })),
        Dt = Nt && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Ft = D("wks"),
        Gt = r.Symbol,
        zt = Dt ? Gt : Gt && Gt.withoutSetter || z,
        Ht = function (t) {
            return w(Ft, t) && (Nt || "string" == typeof Ft[t]) || (Nt && w(Gt, t) ? Ft[t] = Gt[t] : Ft[t] = zt("Symbol." + t)), Ft[t]
        },
        Kt = Ht("match"),
        Vt = function (t) {
            var e;
            return y(t) && (void 0 !== (e = t[Kt]) ? !!e : "RegExp" == f(t))
        },
        Yt = function (t) {
            if (Vt(t)) throw TypeError("The method doesn't accept regular expressions");
            return t
        },
        Wt = Ht("match"),
        $t = function (t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[Wt] = !1, "/./" [t](e)
                } catch (t) {}
            }
            return !1
        },
        Xt = R.f,
        Jt = "".startsWith,
        Zt = Math.min,
        Qt = $t("startsWith"),
        te = !(Qt || (qt = Xt(String.prototype, "startsWith"), !qt || qt.writable));
    Tt({
        target: "String",
        proto: !0,
        forced: !te && !Qt
    }, {
        startsWith: function (t) {
            var e = String(d(this));
            Yt(t);
            var n = lt(Zt(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                r = String(t);
            return Jt ? Jt.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    });
    var ee = function (t, e) {
        return (ee = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
    };
    var ne, re = function () {
        return (re = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function oe(t, e, n, r) {
        return new(n || (n = Promise))((function (o, i) {
            function a(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                    t(e)
                }))).then(a, u)
            }
            c((r = r.apply(t, e || [])).next())
        }))
    }

    function ie(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function u(i) {
            return function (u) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = a.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function ae(t, e) {
        for (var n = 0, r = e.length, o = t.length; n < r; n++, o++) t[o] = e[n];
        return t
    }! function (t) {
        t["준비"] = "READY", t["결제중"] = "ON_PAYMENT", t["완료"] = "DONE"
    }(ne || (ne = {}));
    var ue = ne.준비,
        ce = {
            get isReady() {
                return ue === ne.준비
            },
            setReady: function () {
                ue = ne.준비
            },
            setOnPayment: function () {
                ue = ne.결제중
            },
            setDone: function () {
                ue = ne.완료
            }
        },
        se = "https://api.tosspayments.com",
        le = {};
    le[Ht("toStringTag")] = "z";
    var fe = "[object z]" === String(le),
        he = Ht("toStringTag"),
        pe = "Arguments" == f(function () {
            return arguments
        }()),
        de = fe ? f : function (t) {
            var e, n, r;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), he)) ? n : pe ? f(e) : "Object" == (r = f(e)) && "function" == typeof e.callee ? "Arguments" : r
        },
        ve = fe ? {}.toString : function () {
            return "[object " + de(this) + "]"
        };
    fe || nt(Object.prototype, "toString", ve, {
        unsafe: !0
    });
    var ye = r.Promise,
        ge = function (t, e, n) {
            for (var r in e) nt(t, r, e[r], n);
            return t
        },
        me = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1,
                n = {};
            try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
            } catch (t) {}
            return function (n, r) {
                return _(n),
                    function (t) {
                        if (!y(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
                    }(r), e ? t.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0),
        be = L.f,
        we = Ht("toStringTag"),
        Se = function (t, e, n) {
            t && !w(t = n ? t : t.prototype, we) && be(t, we, {
                configurable: !0,
                value: e
            })
        },
        Ee = Ht("species"),
        Oe = function (t) {
            if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
            return t
        },
        je = function (t, e, n) {
            if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return t
        },
        xe = {},
        Re = Ht("iterator"),
        _e = Array.prototype,
        Pe = function (t) {
            return void 0 !== t && (xe.Array === t || _e[Re] === t)
        },
        Le = function (t, e, n) {
            if (Oe(t), void 0 === e) return t;
            switch (n) {
                case 0:
                    return function () {
                        return t.call(e)
                    };
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        Ae = Ht("iterator"),
        Te = function (t) {
            if (null != t) return t[Ae] || t["@@iterator"] || xe[de(t)]
        },
        ke = function (t) {
            var e = t.return;
            if (void 0 !== e) return _(e.call(t)).value
        },
        Ie = function (t, e) {
            this.stopped = t, this.result = e
        },
        Ue = function (t, e, n) {
            var r, o, i, a, u, c, s, l = n && n.that,
                f = !(!n || !n.AS_ENTRIES),
                h = !(!n || !n.IS_ITERATOR),
                p = !(!n || !n.INTERRUPTED),
                d = Le(e, l, 1 + f + p),
                v = function (t) {
                    return r && ke(r), new Ie(!0, t)
                },
                y = function (t) {
                    return f ? (_(t), p ? d(t[0], t[1], v) : d(t[0], t[1])) : p ? d(t, v) : d(t)
                };
            if (h) r = t;
            else {
                if ("function" != typeof (o = Te(t))) throw TypeError("Target is not iterable");
                if (Pe(o)) {
                    for (i = 0, a = lt(t.length); a > i; i++)
                        if ((u = y(t[i])) && u instanceof Ie) return u;
                    return new Ie(!1)
                }
                r = o.call(t)
            }
            for (c = r.next; !(s = c.call(r)).done;) {
                try {
                    u = y(s.value)
                } catch (t) {
                    throw ke(r), t
                }
                if ("object" == typeof u && u && u instanceof Ie) return u
            }
            return new Ie(!1)
        },
        Ce = Ht("iterator"),
        Me = !1;
    try {
        var qe = 0,
            Be = {
                next: function () {
                    return {
                        done: !!qe++
                    }
                },
                return: function () {
                    Me = !0
                }
            };
        Be[Ce] = function () {
            return this
        }, Array.from(Be, (function () {
            throw 2
        }))
    } catch (t) {}
    var Ne, De, Fe, Ge = Ht("species"),
        ze = function (t, e) {
            var n, r = _(t).constructor;
            return void 0 === r || null == (n = _(r)[Ge]) ? e : Oe(n)
        },
        He = it("document", "documentElement"),
        Ke = /(?:iphone|ipod|ipad).*applewebkit/i.test(It),
        Ve = r.location,
        Ye = r.setImmediate,
        We = r.clearImmediate,
        $e = r.process,
        Xe = r.MessageChannel,
        Je = r.Dispatch,
        Ze = 0,
        Qe = {},
        tn = function (t) {
            if (Qe.hasOwnProperty(t)) {
                var e = Qe[t];
                delete Qe[t], e()
            }
        },
        en = function (t) {
            return function () {
                tn(t)
            }
        },
        nn = function (t) {
            tn(t.data)
        },
        rn = function (t) {
            r.postMessage(t + "", Ve.protocol + "//" + Ve.host)
        };
    Ye && We || (Ye = function (t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return Qe[++Ze] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }, Ne(Ze), Ze
    }, We = function (t) {
        delete Qe[t]
    }, kt ? Ne = function (t) {
        $e.nextTick(en(t))
    } : Je && Je.now ? Ne = function (t) {
        Je.now(en(t))
    } : Xe && !Ke ? (Fe = (De = new Xe).port2, De.port1.onmessage = nn, Ne = Le(Fe.postMessage, Fe, 1)) : r.addEventListener && "function" == typeof postMessage && !r.importScripts && Ve && "file:" !== Ve.protocol && !o(rn) ? (Ne = rn, r.addEventListener("message", nn, !1)) : Ne = "onreadystatechange" in O("script") ? function (t) {
        He.appendChild(O("script")).onreadystatechange = function () {
            He.removeChild(this), tn(t)
        }
    } : function (t) {
        setTimeout(en(t), 0)
    });
    var on, an, un, cn, sn, ln, fn, hn, pn = {
            set: Ye,
            clear: We
        },
        dn = /web0s(?!.*chrome)/i.test(It),
        vn = R.f,
        yn = pn.set,
        gn = r.MutationObserver || r.WebKitMutationObserver,
        mn = r.document,
        bn = r.process,
        wn = r.Promise,
        Sn = vn(r, "queueMicrotask"),
        En = Sn && Sn.value;
    En || (on = function () {
        var t, e;
        for (kt && (t = bn.domain) && t.exit(); an;) {
            e = an.fn, an = an.next;
            try {
                e()
            } catch (t) {
                throw an ? cn() : un = void 0, t
            }
        }
        un = void 0, t && t.enter()
    }, Ke || kt || dn || !gn || !mn ? wn && wn.resolve ? ((fn = wn.resolve(void 0)).constructor = wn, hn = fn.then, cn = function () {
        hn.call(fn, on)
    }) : cn = kt ? function () {
        bn.nextTick(on)
    } : function () {
        yn.call(r, on)
    } : (sn = !0, ln = mn.createTextNode(""), new gn(on).observe(ln, {
        characterData: !0
    }), cn = function () {
        ln.data = sn = !sn
    }));
    var On, jn, xn, Rn, _n = En || function (t) {
            var e = {
                fn: t,
                next: void 0
            };
            un && (un.next = e), an || (an = e, cn()), un = e
        },
        Pn = function (t) {
            var e, n;
            this.promise = new t((function (t, r) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = r
            })), this.resolve = Oe(e), this.reject = Oe(n)
        },
        Ln = {
            f: function (t) {
                return new Pn(t)
            }
        },
        An = function (t) {
            try {
                return {
                    error: !1,
                    value: t()
                }
            } catch (t) {
                return {
                    error: !0,
                    value: t
                }
            }
        },
        Tn = "object" == typeof window,
        kn = pn.set,
        In = Ht("species"),
        Un = "Promise",
        Cn = et.get,
        Mn = et.set,
        qn = et.getterFor(Un),
        Bn = ye && ye.prototype,
        Nn = ye,
        Dn = r.TypeError,
        Fn = r.document,
        Gn = r.process,
        zn = Ln.f,
        Hn = zn,
        Kn = !!(Fn && Fn.createEvent && r.dispatchEvent),
        Vn = "function" == typeof PromiseRejectionEvent,
        Yn = !1,
        Wn = Lt(Un, (function () {
            var t = q(Nn) !== String(Nn);
            if (!t && 66 === Bt) return !0;
            if (Bt >= 51 && /native code/.test(Nn)) return !1;
            var e = new Nn((function (t) {
                    t(1)
                })),
                n = function (t) {
                    t((function () {}), (function () {}))
                };
            return (e.constructor = {})[In] = n, !(Yn = e.then((function () {})) instanceof n) || !t && Tn && !Vn
        })),
        $n = Wn || ! function (t, e) {
            if (!e && !Me) return !1;
            var n = !1;
            try {
                var r = {};
                r[Ce] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, t(r)
            } catch (t) {}
            return n
        }((function (t) {
            Nn.all(t).catch((function () {}))
        })),
        Xn = function (t) {
            var e;
            return !(!y(t) || "function" != typeof (e = t.then)) && e
        },
        Jn = function (t, e) {
            if (!t.notified) {
                t.notified = !0;
                var n = t.reactions;
                _n((function () {
                    for (var r = t.value, o = 1 == t.state, i = 0; n.length > i;) {
                        var a, u, c, s = n[i++],
                            l = o ? s.ok : s.fail,
                            f = s.resolve,
                            h = s.reject,
                            p = s.domain;
                        try {
                            l ? (o || (2 === t.rejection && er(t), t.rejection = 1), !0 === l ? a = r : (p && p.enter(), a = l(r), p && (p.exit(), c = !0)), a === s.promise ? h(Dn("Promise-chain cycle")) : (u = Xn(a)) ? u.call(a, f, h) : f(a)) : h(r)
                        } catch (t) {
                            p && !c && p.exit(), h(t)
                        }
                    }
                    t.reactions = [], t.notified = !1, e && !t.rejection && Qn(t)
                }))
            }
        },
        Zn = function (t, e, n) {
            var o, i;
            Kn ? ((o = Fn.createEvent("Event")).promise = e, o.reason = n, o.initEvent(t, !1, !0), r.dispatchEvent(o)) : o = {
                promise: e,
                reason: n
            }, !Vn && (i = r["on" + t]) ? i(o) : "unhandledrejection" === t && function (t, e) {
                var n = r.console;
                n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
            }("Unhandled promise rejection", n)
        },
        Qn = function (t) {
            kn.call(r, (function () {
                var e, n = t.facade,
                    r = t.value;
                if (tr(t) && (e = An((function () {
                        kt ? Gn.emit("unhandledRejection", r, n) : Zn("unhandledrejection", n, r)
                    })), t.rejection = kt || tr(t) ? 2 : 1, e.error)) throw e.value
            }))
        },
        tr = function (t) {
            return 1 !== t.rejection && !t.parent
        },
        er = function (t) {
            kn.call(r, (function () {
                var e = t.facade;
                kt ? Gn.emit("rejectionHandled", e) : Zn("rejectionhandled", e, t.value)
            }))
        },
        nr = function (t, e, n) {
            return function (r) {
                t(e, r, n)
            }
        },
        rr = function (t, e, n) {
            t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, Jn(t, !0))
        },
        or = function (t, e, n) {
            if (!t.done) {
                t.done = !0, n && (t = n);
                try {
                    if (t.facade === e) throw Dn("Promise can't be resolved itself");
                    var r = Xn(e);
                    r ? _n((function () {
                        var n = {
                            done: !1
                        };
                        try {
                            r.call(e, nr(or, n, t), nr(rr, n, t))
                        } catch (e) {
                            rr(n, e, t)
                        }
                    })) : (t.value = e, t.state = 1, Jn(t, !1))
                } catch (e) {
                    rr({
                        done: !1
                    }, e, t)
                }
            }
        };
    if (Wn && (Nn = function (t) {
            je(this, Nn, Un), Oe(t), On.call(this);
            var e = Cn(this);
            try {
                t(nr(or, e), nr(rr, e))
            } catch (t) {
                rr(e, t)
            }
        }, (On = function (t) {
            Mn(this, {
                type: Un,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = ge(Nn.prototype, {
            then: function (t, e) {
                var n = qn(this),
                    r = zn(ze(this, Nn));
                return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = kt ? Gn.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && Jn(n, !1), r.promise
            },
            catch: function (t) {
                return this.then(void 0, t)
            }
        }), jn = function () {
            var t = new On,
                e = Cn(t);
            this.promise = t, this.resolve = nr(or, e), this.reject = nr(rr, e)
        }, Ln.f = zn = function (t) {
            return t === Nn || t === xn ? new jn(t) : Hn(t)
        }, "function" == typeof ye && Bn !== Object.prototype)) {
        Rn = Bn.then, Yn || nt(Bn, "then", (function (t, e) {
            var n = this;
            return new Nn((function (t, e) {
                Rn.call(n, t, e)
            })).then(t, e)
        }), {
            unsafe: !0
        });
        try {
            delete Bn.constructor
        } catch (t) {}
        me && me(Bn, Nn.prototype)
    }
    Tt({
            global: !0,
            wrap: !0,
            forced: Wn
        }, {
            Promise: Nn
        }), Se(Nn, Un, !1),
        function (t) {
            var e = it(t),
                n = L.f;
            i && e && !e[Ee] && n(e, Ee, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }(Un), xn = it(Un), Tt({
            target: Un,
            stat: !0,
            forced: Wn
        }, {
            reject: function (t) {
                var e = zn(this);
                return e.reject.call(void 0, t), e.promise
            }
        }), Tt({
            target: Un,
            stat: !0,
            forced: Wn
        }, {
            resolve: function (t) {
                return function (t, e) {
                    if (_(t), y(e) && e.constructor === t) return e;
                    var n = Ln.f(t);
                    return (0, n.resolve)(e), n.promise
                }(this, t)
            }
        }), Tt({
            target: Un,
            stat: !0,
            forced: $n
        }, {
            all: function (t) {
                var e = this,
                    n = zn(e),
                    r = n.resolve,
                    o = n.reject,
                    i = An((function () {
                        var n = Oe(e.resolve),
                            i = [],
                            a = 0,
                            u = 1;
                        Ue(t, (function (t) {
                            var c = a++,
                                s = !1;
                            i.push(void 0), u++, n.call(e, t).then((function (t) {
                                s || (s = !0, i[c] = t, --u || r(i))
                            }), o)
                        })), --u || r(i)
                    }));
                return i.error && o(i.value), n.promise
            },
            race: function (t) {
                var e = this,
                    n = zn(e),
                    r = n.reject,
                    o = An((function () {
                        var o = Oe(e.resolve);
                        Ue(t, (function (t) {
                            o.call(e, t).then(n.resolve, r)
                        }))
                    }));
                return o.error && r(o.value), n.promise
            }
        });
    var ir = Array.isArray || function (t) {
            return "Array" == f(t)
        },
        ar = Ht("species"),
        ur = function (t, e) {
            var n;
            return ir(t) && ("function" != typeof (n = t.constructor) || n !== Array && !ir(n.prototype) ? y(n) && null === (n = n[ar]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === e ? 0 : e)
        },
        cr = [].push,
        sr = function (t) {
            var e = 1 == t,
                n = 2 == t,
                r = 3 == t,
                o = 4 == t,
                i = 6 == t,
                a = 7 == t,
                u = 5 == t || i;
            return function (c, s, l, f) {
                for (var h, d, v = m(c), y = p(v), g = Le(s, l, 3), b = lt(y.length), w = 0, S = f || ur, E = e ? S(c, b) : n || a ? S(c, 0) : void 0; b > w; w++)
                    if ((u || w in y) && (d = g(h = y[w], w, v), t))
                        if (e) E[w] = d;
                        else if (d) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return h;
                    case 6:
                        return w;
                    case 2:
                        cr.call(E, h)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        cr.call(E, h)
                }
                return i ? -1 : r || o ? o : E
            }
        },
        lr = {
            forEach: sr(0),
            map: sr(1),
            filter: sr(2),
            some: sr(3),
            every: sr(4),
            find: sr(5),
            findIndex: sr(6),
            filterOut: sr(7)
        },
        fr = function (t, e) {
            var n = [][t];
            return !!n && o((function () {
                n.call(null, e || function () {
                    throw 1
                }, 1)
            }))
        },
        hr = lr.forEach,
        pr = fr("forEach") ? [].forEach : function (t) {
            return hr(this, t, arguments.length > 1 ? arguments[1] : void 0)
        };
    Tt({
        target: "Array",
        proto: !0,
        forced: [].forEach != pr
    }, {
        forEach: pr
    });
    var dr = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var vr in dr) {
        var yr = r[vr],
            gr = yr && yr.prototype;
        if (gr && gr.forEach !== pr) try {
            A(gr, "forEach", pr)
        } catch (t) {
            gr.forEach = pr
        }
    }
    var mr = Object.keys || function (t) {
            return yt(t, gt)
        },
        br = o((function () {
            mr(1)
        }));
    Tt({
        target: "Object",
        stat: !0,
        forced: br
    }, {
        keys: function (t) {
            return mr(m(t))
        }
    });
    var wr = function (t) {
        function e(e) {
            var n = e.code,
                r = e.message,
                o = t.call(this, "[" + n + "]: " + r) || this;
            return o.isTossPaymentsError = !0, o.message = r, o.code = n, o
        }
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function n() {
                this.constructor = t
            }
            ee(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
        }(e, t), e
    }(Error);

    function Sr(t, e, n) {
        return new Promise((function (r, o) {
            var i, a, u = new XMLHttpRequest;
            u.open(t, e, !0), u.withCredentials = null !== (i = null == n ? void 0 : n.credentials) && void 0 !== i && i, u.setRequestHeader("Content-Type", "application/json"), null != (null == n ? void 0 : n.timeout) && (u.timeout = n.timeout), Object.keys(null !== (a = null == n ? void 0 : n.headers) && void 0 !== a ? a : {}).forEach((function (t) {
                u.setRequestHeader(t, n.headers[t])
            })), "GET" === t ? u.send() : u.send(JSON.stringify(null == n ? void 0 : n.body)), u.addEventListener("error", (function (t) {
                o(t)
            })), u.addEventListener("load", (function () {
                if (u.status >= 400) {
                    var t = Er(u.responseText);
                    return (null == (e = t) ? void 0 : e.hasOwnProperty("message")) && (null == e ? void 0 : e.hasOwnProperty("code")) ? o(new wr(t)) : o(t)
                }
                var e;
                r(Er(u.response))
            }))
        }))
    }

    function Er(t) {
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(t)
        } catch (e) {
            return t
        }
    }

    function Or(t) {
        var e = "Basic " + window.btoa(t + ":");
        return {
            get: function (t) {
                return Sr("GET", "" + se + t, {
                    credentials: !0,
                    headers: {
                        Authorization: e
                    }
                })
            },
            post: function (t, n) {
                return Sr("POST", "" + se + t, {
                    credentials: !0,
                    headers: {
                        Authorization: e
                    },
                    body: n
                })
            }
        }
    }

    function jr(t, e) {
        return Or(t).post("/v1/billing/authorizations", e)
    }
    var xr = [].join,
        Rr = p != Object,
        _r = fr("join", ",");
    Tt({
        target: "Array",
        proto: !0,
        forced: Rr || !_r
    }, {
        join: function (t) {
            return xr.call(v(this), void 0 === t ? "," : t)
        }
    });
    var Pr = Ht("species"),
        Lr = function (t) {
            return Bt >= 51 || !o((function () {
                var e = [];
                return (e.constructor = {})[Pr] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        },
        Ar = lr.map,
        Tr = Lr("map");
    Tt({
        target: "Array",
        proto: !0,
        forced: !Tr
    }, {
        map: function (t) {
            return Ar(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var kr = c.f,
        Ir = function (t) {
            return function (e) {
                for (var n, r = v(e), o = mr(r), a = o.length, u = 0, c = []; a > u;) n = o[u++], i && !kr.call(r, n) || c.push(t ? [n, r[n]] : r[n]);
                return c
            }
        },
        Ur = {
            entries: Ir(!0),
            values: Ir(!1)
        }.entries;
    Tt({
        target: "Object",
        stat: !0
    }, {
        entries: function (t) {
            return Ur(t)
        }
    });
    var Cr = L.f,
        Mr = Function.prototype,
        qr = Mr.toString,
        Br = /^\s*function ([^ (]*)/;

    function Nr() {
        return /MSIE|Trident/i.test(window.navigator.userAgent)
    }

    function Dr() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window) || !Nr() && /android/i.test(window.navigator.userAgent)
    }
    i && !("name" in Mr) && Cr(Mr, "name", {
        configurable: !0,
        get: function () {
            try {
                return qr.call(this).match(Br)[1]
            } catch (t) {
                return ""
            }
        }
    });

    function Fr(t, e) {
        var n = document.getElementById(e);
        if (null != n) return n;
        var r = document.createElement(t);
        return r.id = e, r
    }

    function Gr(t) {
        var e = t.id,
            n = void 0 === e ? "___tosspayments_iframe___" : e,
            r = t.styles,
            o = Fr("iframe", n);
        return o.name = n, Hr(o, re({
            border: "none"
        }, r)), o
    }

    function zr(t) {
        var e = (void 0 === t ? {} : t).styles,
            n = Fr("div", "___tosspayments_dimmer___");
        return Hr(n, re({
            position: "fixed",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "9999999",
            transform: "translateZ(0)",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            margin: "0",
            padding: "0"
        }, e)), n
    }

    function Hr(t, e) {
        for (var n in e) t.style[n] = e[n]
    }
    var Kr = lr.filter,
        Vr = Lr("filter");
    Tt({
        target: "Array",
        proto: !0,
        forced: !Vr
    }, {
        filter: function (t) {
            return Kr(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Yr = [];

    function Wr(t) {
        var e = t.data;
        if (function (t) {
                var e;
                return !0 === (null === (e = t) || void 0 === e ? void 0 : e.tosspayments)
            }(e))
            for (var n = 0, r = Yr; n < r.length; n++) {
                (0, r[n])({
                    target: e.window,
                    type: e.type,
                    params: e.params
                })
            }
    }
    var $r = {
        add: function (t) {
            1 === (Yr = ae(ae([], Yr), [t])).length && window.addEventListener("message", Wr)
        },
        remove: function (t) {
            0 === (Yr = Yr.filter((function (e) {
                return e !== t
            }))).length && window.removeEventListener("message", Wr)
        },
        consume: function (t) {
            var e = this;
            return void 0 === t && (t = function () {
                return !0
            }), new Promise((function (n) {
                e.add((function r(o) {
                    t(o) && (n(o), e.remove(r))
                }))
            }))
        },
        clear: function () {
            Yr = [], window.removeEventListener("message", Wr)
        }
    };

    function Xr(t, e, n) {
        return void 0 === n && (n = {}), oe(this, void 0, void 0, (function () {
            var r, o, i, a, u, c;
            return ie(this, (function (s) {
                switch (s.label) {
                    case 0:
                        return r = n.dimmer, o = void 0 === r ? zr() : r, i = n.iframe, a = void 0 === i ? function (t) {
                            var e = t.width,
                                n = t.height,
                                r = t.id,
                                o = void 0 === r ? "___tosspayments_iframe___" : r,
                                i = t.styles;
                            return Gr({
                                id: o,
                                styles: re({
                                    position: "absolute",
                                    border: "none",
                                    top: "50%",
                                    left: "50%",
                                    width: e + "px",
                                    height: n + "px",
                                    marginLeft: "-" + e / 2 + "px",
                                    marginTop: "-" + n / 2 + "px",
                                    backgroundColor: "#ffffff"
                                }, i)
                            })
                        }({
                            width: 650,
                            height: 650
                        }) : i, u = function () {
                            var t = Fr("form", "___tosspayments_form___");
                            return t.style.border = "0", t.style.clip = "rect(0 0 0 0)", t.style.height = "1px", t.style.margin = "-1px", t.style.overflow = "hidden", t.style.padding = "0", t.style.position = "absolute", t.style.whiteSpace = "nowrap", t.style.width = "1px", t
                        }(), a.title = "토스페이먼츠 전자결제", u.action = "" + se + t, u.method = "post", u.innerHTML = Object.entries(e).map((function (t) {
                            return '<input name="' + t[0] + '" value="' + t[1] + '" />'
                        })).join("\n"), Dr() ? (u.target = "_self", document.body.appendChild(u), u.submit(), [2]) : (u.target = a.name, o.appendChild(u), o.appendChild(a), document.body.appendChild(o), c = $r.consume((function (t) {
                            var e = t.target,
                                n = t.type;
                            return "LEGACY" === e && "cancel" === n
                        })), u.submit(), [4, c]);
                    case 1:
                        throw s.sent(), document.body.removeChild(o), ce.setReady(), new wr({
                            code: "USER_CANCEL",
                            message: "취소되었습니다"
                        })
                }
            }))
        }))
    }
    var Jr = Date.prototype,
        Zr = Jr.toString,
        Qr = Jr.getTime;
    new Date(NaN) + "" != "Invalid Date" && nt(Jr, "toString", (function () {
        var t = Qr.call(this);
        return t == t ? Zr.call(this) : "Invalid Date"
    }));
    var to = function () {
            var t = _(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        },
        eo = RegExp.prototype,
        no = eo.toString,
        ro = o((function () {
            return "/a/b" != no.call({
                source: "a",
                flags: "b"
            })
        })),
        oo = "toString" != no.name;
    (ro || oo) && nt(RegExp.prototype, "toString", (function () {
        var t = _(this),
            e = String(t.source),
            n = t.flags;
        return "/" + e + "/" + String(void 0 === n && t instanceof RegExp && !("flags" in eo) ? to.call(t) : n)
    }), {
        unsafe: !0
    });
    var io, ao = i ? Object.defineProperties : function (t, e) {
            _(t);
            for (var n, r = mr(e), o = r.length, i = 0; o > i;) L.f(t, n = r[i++], e[n]);
            return t
        },
        uo = K("IE_PROTO"),
        co = function () {},
        so = function (t) {
            return "<script>" + t + "<\/script>"
        },
        lo = function () {
            try {
                io = document.domain && new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            lo = io ? function (t) {
                t.write(so("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(io) : ((e = O("iframe")).style.display = "none", He.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(so("document.F=Object")), t.close(), t.F);
            for (var n = gt.length; n--;) delete lo.prototype[gt[n]];
            return lo()
        };
    V[uo] = !0;
    var fo = Object.create || function (t, e) {
            var n;
            return null !== t ? (co.prototype = _(t), n = new co, co.prototype = null, n[uo] = t) : n = lo(), void 0 === e ? n : ao(n, e)
        },
        ho = Ht("unscopables"),
        po = Array.prototype;
    null == po[ho] && L.f(po, ho, {
        configurable: !0,
        value: fo(null)
    });
    var vo, yo, go, mo = function (t) {
            po[ho][t] = !0
        },
        bo = !o((function () {
            function t() {}
            return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
        })),
        wo = K("IE_PROTO"),
        So = Object.prototype,
        Eo = bo ? Object.getPrototypeOf : function (t) {
            return t = m(t), w(t, wo) ? t[wo] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? So : null
        },
        Oo = Ht("iterator"),
        jo = !1;
    [].keys && ("next" in (go = [].keys()) ? (yo = Eo(Eo(go))) !== Object.prototype && (vo = yo) : jo = !0), (null == vo || o((function () {
        var t = {};
        return vo[Oo].call(t) !== t
    }))) && (vo = {}), w(vo, Oo) || A(vo, Oo, (function () {
        return this
    }));
    var xo = {
            IteratorPrototype: vo,
            BUGGY_SAFARI_ITERATORS: jo
        },
        Ro = xo.IteratorPrototype,
        _o = function () {
            return this
        },
        Po = function (t, e, n) {
            var r = e + " Iterator";
            return t.prototype = fo(Ro, {
                next: s(1, n)
            }), Se(t, r, !1), xe[r] = _o, t
        },
        Lo = xo.IteratorPrototype,
        Ao = xo.BUGGY_SAFARI_ITERATORS,
        To = Ht("iterator"),
        ko = function () {
            return this
        },
        Io = function (t, e, n, r, o, i, a) {
            Po(n, e, r);
            var u, c, s, l = function (t) {
                    if (t === o && v) return v;
                    if (!Ao && t in p) return p[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this)
                    }
                },
                f = e + " Iterator",
                h = !1,
                p = t.prototype,
                d = p[To] || p["@@iterator"] || o && p[o],
                v = !Ao && d || l(o),
                y = "Array" == e && p.entries || d;
            if (y && (u = Eo(y.call(new t)), Lo !== Object.prototype && u.next && (Eo(u) !== Lo && (me ? me(u, Lo) : "function" != typeof u[To] && A(u, To, ko)), Se(u, f, !0))), "values" == o && d && "values" !== d.name && (h = !0, v = function () {
                    return d.call(this)
                }), p[To] !== v && A(p, To, v), xe[e] = v, o)
                if (c = {
                        values: l("values"),
                        keys: i ? v : l("keys"),
                        entries: l("entries")
                    }, a)
                    for (s in c)(Ao || h || !(s in p)) && nt(p, s, c[s]);
                else Tt({
                    target: e,
                    proto: !0,
                    forced: Ao || h
                }, c);
            return c
        },
        Uo = et.set,
        Co = et.getterFor("Array Iterator"),
        Mo = Io(Array, "Array", (function (t, e) {
            Uo(this, {
                type: "Array Iterator",
                target: v(t),
                index: 0,
                kind: e
            })
        }), (function () {
            var t = Co(this),
                e = t.target,
                n = t.kind,
                r = t.index++;
            return !e || r >= e.length ? (t.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: e[r],
                done: !1
            } : {
                value: [r, e[r]],
                done: !1
            }
        }), "values");
    xe.Arguments = xe.Array, mo("keys"), mo("values"), mo("entries");
    var qo = function (t) {
            return function (e, n) {
                var r, o, i = String(d(e)),
                    a = ct(n),
                    u = i.length;
                return a < 0 || a >= u ? t ? "" : void 0 : (r = i.charCodeAt(a)) < 55296 || r > 56319 || a + 1 === u || (o = i.charCodeAt(a + 1)) < 56320 || o > 57343 ? t ? i.charAt(a) : r : t ? i.slice(a, a + 2) : o - 56320 + (r - 55296 << 10) + 65536
            }
        },
        Bo = {
            codeAt: qo(!1),
            charAt: qo(!0)
        },
        No = Bo.charAt,
        Do = et.set,
        Fo = et.getterFor("String Iterator");
    Io(String, "String", (function (t) {
        Do(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }), (function () {
        var t, e = Fo(this),
            n = e.string,
            r = e.index;
        return r >= n.length ? {
            value: void 0,
            done: !0
        } : (t = No(n, r), e.index += t.length, {
            value: t,
            done: !1
        })
    }));
    var Go = Ht("iterator"),
        zo = Ht("toStringTag"),
        Ho = Mo.values;
    for (var Ko in dr) {
        var Vo = r[Ko],
            Yo = Vo && Vo.prototype;
        if (Yo) {
            if (Yo[Go] !== Ho) try {
                A(Yo, Go, Ho)
            } catch (t) {
                Yo[Go] = Ho
            }
            if (Yo[zo] || A(Yo, zo, Ko), dr[Ko])
                for (var Wo in Mo)
                    if (Yo[Wo] !== Mo[Wo]) try {
                        A(Yo, Wo, Mo[Wo])
                    } catch (t) {
                        Yo[Wo] = Mo[Wo]
                    }
        }
    }
    var $o = Ht("iterator"),
        Xo = !o((function () {
            var t = new URL("b?a=1&b=2&c=3", "http://a"),
                e = t.searchParams,
                n = "";
            return t.pathname = "c%20d", e.forEach((function (t, r) {
                e.delete("b"), n += r + t
            })), !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[$o] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        })),
        Jo = Object.assign,
        Zo = Object.defineProperty,
        Qo = !Jo || o((function () {
            if (i && 1 !== Jo({
                    b: 1
                }, Jo(Zo({}, "a", {
                    enumerable: !0,
                    get: function () {
                        Zo(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var t = {},
                e = {},
                n = Symbol();
            return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
                e[t] = t
            })), 7 != Jo({}, t)[n] || "abcdefghijklmnopqrst" != mr(Jo({}, e)).join("")
        })) ? function (t, e) {
            for (var n = m(t), r = arguments.length, o = 1, a = wt.f, u = c.f; r > o;)
                for (var s, l = p(arguments[o++]), f = a ? mr(l).concat(a(l)) : mr(l), h = f.length, d = 0; h > d;) s = f[d++], i && !u.call(l, s) || (n[s] = l[s]);
            return n
        } : Jo,
        ti = function (t, e, n, r) {
            try {
                return r ? e(_(n)[0], n[1]) : e(n)
            } catch (e) {
                throw ke(t), e
            }
        },
        ei = function (t, e, n) {
            var r = g(e);
            r in t ? L.f(t, r, s(0, n)) : t[r] = n
        },
        ni = function (t) {
            var e, n, r, o, i, a, u = m(t),
                c = "function" == typeof this ? this : Array,
                s = arguments.length,
                l = s > 1 ? arguments[1] : void 0,
                f = void 0 !== l,
                h = Te(u),
                p = 0;
            if (f && (l = Le(l, s > 2 ? arguments[2] : void 0, 2)), null == h || c == Array && Pe(h))
                for (n = new c(e = lt(u.length)); e > p; p++) a = f ? l(u[p], p) : u[p], ei(n, p, a);
            else
                for (i = (o = h.call(u)).next, n = new c; !(r = i.call(o)).done; p++) a = f ? ti(o, l, [r.value, p], !0) : r.value, ei(n, p, a);
            return n.length = p, n
        },
        ri = /[^\0-\u007E]/,
        oi = /[.\u3002\uFF0E\uFF61]/g,
        ii = "Overflow: input needs wider integers to process",
        ai = Math.floor,
        ui = String.fromCharCode,
        ci = function (t) {
            return t + 22 + 75 * (t < 26)
        },
        si = function (t, e, n) {
            var r = 0;
            for (t = n ? ai(t / 700) : t >> 1, t += ai(t / e); t > 455; r += 36) t = ai(t / 35);
            return ai(r + 36 * t / (t + 38))
        },
        li = function (t) {
            var e, n, r = [],
                o = (t = function (t) {
                    for (var e = [], n = 0, r = t.length; n < r;) {
                        var o = t.charCodeAt(n++);
                        if (o >= 55296 && o <= 56319 && n < r) {
                            var i = t.charCodeAt(n++);
                            56320 == (64512 & i) ? e.push(((1023 & o) << 10) + (1023 & i) + 65536) : (e.push(o), n--)
                        } else e.push(o)
                    }
                    return e
                }(t)).length,
                i = 128,
                a = 0,
                u = 72;
            for (e = 0; e < t.length; e++)(n = t[e]) < 128 && r.push(ui(n));
            var c = r.length,
                s = c;
            for (c && r.push("-"); s < o;) {
                var l = 2147483647;
                for (e = 0; e < t.length; e++)(n = t[e]) >= i && n < l && (l = n);
                var f = s + 1;
                if (l - i > ai((2147483647 - a) / f)) throw RangeError(ii);
                for (a += (l - i) * f, i = l, e = 0; e < t.length; e++) {
                    if ((n = t[e]) < i && ++a > 2147483647) throw RangeError(ii);
                    if (n == i) {
                        for (var h = a, p = 36;; p += 36) {
                            var d = p <= u ? 1 : p >= u + 26 ? 26 : p - u;
                            if (h < d) break;
                            var v = h - d,
                                y = 36 - d;
                            r.push(ui(ci(d + v % y))), h = ai(v / y)
                        }
                        r.push(ui(ci(h))), u = si(a, f, s == c), a = 0, ++s
                    }
                }++a, ++i
            }
            return r.join("")
        },
        fi = function (t) {
            var e = Te(t);
            if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
            return _(e.call(t))
        },
        hi = it("fetch"),
        pi = it("Headers"),
        di = Ht("iterator"),
        vi = et.set,
        yi = et.getterFor("URLSearchParams"),
        gi = et.getterFor("URLSearchParamsIterator"),
        mi = /\+/g,
        bi = Array(4),
        wi = function (t) {
            return bi[t - 1] || (bi[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
        },
        Si = function (t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        },
        Ei = function (t) {
            var e = t.replace(mi, " "),
                n = 4;
            try {
                return decodeURIComponent(e)
            } catch (t) {
                for (; n;) e = e.replace(wi(n--), Si);
                return e
            }
        },
        Oi = /[!'()~]|%20/g,
        ji = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        xi = function (t) {
            return ji[t]
        },
        Ri = function (t) {
            return encodeURIComponent(t).replace(Oi, xi)
        },
        _i = function (t, e) {
            if (e)
                for (var n, r, o = e.split("&"), i = 0; i < o.length;)(n = o[i++]).length && (r = n.split("="), t.push({
                    key: Ei(r.shift()),
                    value: Ei(r.join("="))
                }))
        },
        Pi = function (t) {
            this.entries.length = 0, _i(this.entries, t)
        },
        Li = function (t, e) {
            if (t < e) throw TypeError("Not enough arguments")
        },
        Ai = Po((function (t, e) {
            vi(this, {
                type: "URLSearchParamsIterator",
                iterator: fi(yi(t).entries),
                kind: e
            })
        }), "Iterator", (function () {
            var t = gi(this),
                e = t.kind,
                n = t.iterator.next(),
                r = n.value;
            return n.done || (n.value = "keys" === e ? r.key : "values" === e ? r.value : [r.key, r.value]), n
        })),
        Ti = function () {
            je(this, Ti, "URLSearchParams");
            var t, e, n, r, o, i, a, u, c, s = arguments.length > 0 ? arguments[0] : void 0,
                l = this,
                f = [];
            if (vi(l, {
                    type: "URLSearchParams",
                    entries: f,
                    updateURL: function () {},
                    updateSearchParams: Pi
                }), void 0 !== s)
                if (y(s))
                    if ("function" == typeof (t = Te(s)))
                        for (n = (e = t.call(s)).next; !(r = n.call(e)).done;) {
                            if ((a = (i = (o = fi(_(r.value))).next).call(o)).done || (u = i.call(o)).done || !i.call(o).done) throw TypeError("Expected sequence with length 2");
                            f.push({
                                key: a.value + "",
                                value: u.value + ""
                            })
                        } else
                            for (c in s) w(s, c) && f.push({
                                key: c,
                                value: s[c] + ""
                            });
                    else _i(f, "string" == typeof s ? "?" === s.charAt(0) ? s.slice(1) : s : s + "")
        },
        ki = Ti.prototype;
    ge(ki, {
        append: function (t, e) {
            Li(arguments.length, 2);
            var n = yi(this);
            n.entries.push({
                key: t + "",
                value: e + ""
            }), n.updateURL()
        },
        delete: function (t) {
            Li(arguments.length, 1);
            for (var e = yi(this), n = e.entries, r = t + "", o = 0; o < n.length;) n[o].key === r ? n.splice(o, 1) : o++;
            e.updateURL()
        },
        get: function (t) {
            Li(arguments.length, 1);
            for (var e = yi(this).entries, n = t + "", r = 0; r < e.length; r++)
                if (e[r].key === n) return e[r].value;
            return null
        },
        getAll: function (t) {
            Li(arguments.length, 1);
            for (var e = yi(this).entries, n = t + "", r = [], o = 0; o < e.length; o++) e[o].key === n && r.push(e[o].value);
            return r
        },
        has: function (t) {
            Li(arguments.length, 1);
            for (var e = yi(this).entries, n = t + "", r = 0; r < e.length;)
                if (e[r++].key === n) return !0;
            return !1
        },
        set: function (t, e) {
            Li(arguments.length, 1);
            for (var n, r = yi(this), o = r.entries, i = !1, a = t + "", u = e + "", c = 0; c < o.length; c++)(n = o[c]).key === a && (i ? o.splice(c--, 1) : (i = !0, n.value = u));
            i || o.push({
                key: a,
                value: u
            }), r.updateURL()
        },
        sort: function () {
            var t, e, n, r = yi(this),
                o = r.entries,
                i = o.slice();
            for (o.length = 0, n = 0; n < i.length; n++) {
                for (t = i[n], e = 0; e < n; e++)
                    if (o[e].key > t.key) {
                        o.splice(e, 0, t);
                        break
                    } e === n && o.push(t)
            }
            r.updateURL()
        },
        forEach: function (t) {
            for (var e, n = yi(this).entries, r = Le(t, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length;) r((e = n[o++]).value, e.key, this)
        },
        keys: function () {
            return new Ai(this, "keys")
        },
        values: function () {
            return new Ai(this, "values")
        },
        entries: function () {
            return new Ai(this, "entries")
        }
    }, {
        enumerable: !0
    }), nt(ki, di, ki.entries), nt(ki, "toString", (function () {
        for (var t, e = yi(this).entries, n = [], r = 0; r < e.length;) t = e[r++], n.push(Ri(t.key) + "=" + Ri(t.value));
        return n.join("&")
    }), {
        enumerable: !0
    }), Se(Ti, "URLSearchParams"), Tt({
        global: !0,
        forced: !Xo
    }, {
        URLSearchParams: Ti
    }), Xo || "function" != typeof hi || "function" != typeof pi || Tt({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function (t) {
            var e, n, r, o = [t];
            return arguments.length > 1 && (y(e = arguments[1]) && (n = e.body, "URLSearchParams" === de(n) && ((r = e.headers ? new pi(e.headers) : new pi).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), e = fo(e, {
                body: s(0, String(n)),
                headers: s(0, r)
            }))), o.push(e)), hi.apply(this, o)
        }
    });
    var Ii, Ui = {
            URLSearchParams: Ti,
            getState: yi
        },
        Ci = Bo.codeAt,
        Mi = r.URL,
        qi = Ui.URLSearchParams,
        Bi = Ui.getState,
        Ni = et.set,
        Di = et.getterFor("URL"),
        Fi = Math.floor,
        Gi = Math.pow,
        zi = /[A-Za-z]/,
        Hi = /[\d+-.A-Za-z]/,
        Ki = /\d/,
        Vi = /^(0x|0X)/,
        Yi = /^[0-7]+$/,
        Wi = /^\d+$/,
        $i = /^[\dA-Fa-f]+$/,
        Xi = /[\0\t\n\r #%/:?@[\\]]/,
        Ji = /[\0\t\n\r #/:?@[\\]]/,
        Zi = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        Qi = /[\t\n\r]/g,
        ta = function (t, e) {
            var n, r, o;
            if ("[" == e.charAt(0)) {
                if ("]" != e.charAt(e.length - 1)) return "Invalid host";
                if (!(n = na(e.slice(1, -1)))) return "Invalid host";
                t.host = n
            } else if (la(t)) {
                if (e = function (t) {
                        var e, n, r = [],
                            o = t.toLowerCase().replace(oi, ".").split(".");
                        for (e = 0; e < o.length; e++) n = o[e], r.push(ri.test(n) ? "xn--" + li(n) : n);
                        return r.join(".")
                    }(e), Xi.test(e)) return "Invalid host";
                if (null === (n = ea(e))) return "Invalid host";
                t.host = n
            } else {
                if (Ji.test(e)) return "Invalid host";
                for (n = "", r = ni(e), o = 0; o < r.length; o++) n += ca(r[o], oa);
                t.host = n
            }
        },
        ea = function (t) {
            var e, n, r, o, i, a, u, c = t.split(".");
            if (c.length && "" == c[c.length - 1] && c.pop(), (e = c.length) > 4) return t;
            for (n = [], r = 0; r < e; r++) {
                if ("" == (o = c[r])) return t;
                if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = Vi.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) a = 0;
                else {
                    if (!(10 == i ? Wi : 8 == i ? Yi : $i).test(o)) return t;
                    a = parseInt(o, i)
                }
                n.push(a)
            }
            for (r = 0; r < e; r++)
                if (a = n[r], r == e - 1) {
                    if (a >= Gi(256, 5 - e)) return null
                } else if (a > 255) return null;
            for (u = n.pop(), r = 0; r < n.length; r++) u += n[r] * Gi(256, 3 - r);
            return u
        },
        na = function (t) {
            var e, n, r, o, i, a, u, c = [0, 0, 0, 0, 0, 0, 0, 0],
                s = 0,
                l = null,
                f = 0,
                h = function () {
                    return t.charAt(f)
                };
            if (":" == h()) {
                if (":" != t.charAt(1)) return;
                f += 2, l = ++s
            }
            for (; h();) {
                if (8 == s) return;
                if (":" != h()) {
                    for (e = n = 0; n < 4 && $i.test(h());) e = 16 * e + parseInt(h(), 16), f++, n++;
                    if ("." == h()) {
                        if (0 == n) return;
                        if (f -= n, s > 6) return;
                        for (r = 0; h();) {
                            if (o = null, r > 0) {
                                if (!("." == h() && r < 4)) return;
                                f++
                            }
                            if (!Ki.test(h())) return;
                            for (; Ki.test(h());) {
                                if (i = parseInt(h(), 10), null === o) o = i;
                                else {
                                    if (0 == o) return;
                                    o = 10 * o + i
                                }
                                if (o > 255) return;
                                f++
                            }
                            c[s] = 256 * c[s] + o, 2 != ++r && 4 != r || s++
                        }
                        if (4 != r) return;
                        break
                    }
                    if (":" == h()) {
                        if (f++, !h()) return
                    } else if (h()) return;
                    c[s++] = e
                } else {
                    if (null !== l) return;
                    f++, l = ++s
                }
            }
            if (null !== l)
                for (a = s - l, s = 7; 0 != s && a > 0;) u = c[s], c[s--] = c[l + a - 1], c[l + --a] = u;
            else if (8 != s) return;
            return c
        },
        ra = function (t) {
            var e, n, r, o;
            if ("number" == typeof t) {
                for (e = [], n = 0; n < 4; n++) e.unshift(t % 256), t = Fi(t / 256);
                return e.join(".")
            }
            if ("object" == typeof t) {
                for (e = "", r = function (t) {
                        for (var e = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > n && (e = r, n = o), r = null, o = 0) : (null === r && (r = i), ++o);
                        return o > n && (e = r, n = o), e
                    }(t), n = 0; n < 8; n++) o && 0 === t[n] || (o && (o = !1), r === n ? (e += n ? ":" : "::", o = !0) : (e += t[n].toString(16), n < 7 && (e += ":")));
                return "[" + e + "]"
            }
            return t
        },
        oa = {},
        ia = Qo({}, oa, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        aa = Qo({}, ia, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        ua = Qo({}, aa, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        ca = function (t, e) {
            var n = Ci(t, 0);
            return n > 32 && n < 127 && !w(e, t) ? t : encodeURIComponent(t)
        },
        sa = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        la = function (t) {
            return w(sa, t.scheme)
        },
        fa = function (t) {
            return "" != t.username || "" != t.password
        },
        ha = function (t) {
            return !t.host || t.cannotBeABaseURL || "file" == t.scheme
        },
        pa = function (t, e) {
            var n;
            return 2 == t.length && zi.test(t.charAt(0)) && (":" == (n = t.charAt(1)) || !e && "|" == n)
        },
        da = function (t) {
            var e;
            return t.length > 1 && pa(t.slice(0, 2)) && (2 == t.length || "/" === (e = t.charAt(2)) || "\\" === e || "?" === e || "#" === e)
        },
        va = function (t) {
            var e = t.path,
                n = e.length;
            !n || "file" == t.scheme && 1 == n && pa(e[0], !0) || e.pop()
        },
        ya = function (t) {
            return "." === t || "%2e" === t.toLowerCase()
        },
        ga = {},
        ma = {},
        ba = {},
        wa = {},
        Sa = {},
        Ea = {},
        Oa = {},
        ja = {},
        xa = {},
        Ra = {},
        _a = {},
        Pa = {},
        La = {},
        Aa = {},
        Ta = {},
        ka = {},
        Ia = {},
        Ua = {},
        Ca = {},
        Ma = {},
        qa = {},
        Ba = function (t, e, n, r) {
            var o, i, a, u, c, s = n || ga,
                l = 0,
                f = "",
                h = !1,
                p = !1,
                d = !1;
            for (n || (t.scheme = "", t.username = "", t.password = "", t.host = null, t.port = null, t.path = [], t.query = null, t.fragment = null, t.cannotBeABaseURL = !1, e = e.replace(Zi, "")), e = e.replace(Qi, ""), o = ni(e); l <= o.length;) {
                switch (i = o[l], s) {
                    case ga:
                        if (!i || !zi.test(i)) {
                            if (n) return "Invalid scheme";
                            s = ba;
                            continue
                        }
                        f += i.toLowerCase(), s = ma;
                        break;
                    case ma:
                        if (i && (Hi.test(i) || "+" == i || "-" == i || "." == i)) f += i.toLowerCase();
                        else {
                            if (":" != i) {
                                if (n) return "Invalid scheme";
                                f = "", s = ba, l = 0;
                                continue
                            }
                            if (n && (la(t) != w(sa, f) || "file" == f && (fa(t) || null !== t.port) || "file" == t.scheme && !t.host)) return;
                            if (t.scheme = f, n) return void(la(t) && sa[t.scheme] == t.port && (t.port = null));
                            f = "", "file" == t.scheme ? s = Aa : la(t) && r && r.scheme == t.scheme ? s = wa : la(t) ? s = ja : "/" == o[l + 1] ? (s = Sa, l++) : (t.cannotBeABaseURL = !0, t.path.push(""), s = Ca)
                        }
                        break;
                    case ba:
                        if (!r || r.cannotBeABaseURL && "#" != i) return "Invalid scheme";
                        if (r.cannotBeABaseURL && "#" == i) {
                            t.scheme = r.scheme, t.path = r.path.slice(), t.query = r.query, t.fragment = "", t.cannotBeABaseURL = !0, s = qa;
                            break
                        }
                        s = "file" == r.scheme ? Aa : Ea;
                        continue;
                    case wa:
                        if ("/" != i || "/" != o[l + 1]) {
                            s = Ea;
                            continue
                        }
                        s = xa, l++;
                        break;
                    case Sa:
                        if ("/" == i) {
                            s = Ra;
                            break
                        }
                        s = Ua;
                        continue;
                    case Ea:
                        if (t.scheme = r.scheme, i == Ii) t.username = r.username, t.password = r.password, t.host = r.host, t.port = r.port, t.path = r.path.slice(), t.query = r.query;
                        else if ("/" == i || "\\" == i && la(t)) s = Oa;
                        else if ("?" == i) t.username = r.username, t.password = r.password, t.host = r.host, t.port = r.port, t.path = r.path.slice(), t.query = "", s = Ma;
                        else {
                            if ("#" != i) {
                                t.username = r.username, t.password = r.password, t.host = r.host, t.port = r.port, t.path = r.path.slice(), t.path.pop(), s = Ua;
                                continue
                            }
                            t.username = r.username, t.password = r.password, t.host = r.host, t.port = r.port, t.path = r.path.slice(), t.query = r.query, t.fragment = "", s = qa
                        }
                        break;
                    case Oa:
                        if (!la(t) || "/" != i && "\\" != i) {
                            if ("/" != i) {
                                t.username = r.username, t.password = r.password, t.host = r.host, t.port = r.port, s = Ua;
                                continue
                            }
                            s = Ra
                        } else s = xa;
                        break;
                    case ja:
                        if (s = xa, "/" != i || "/" != f.charAt(l + 1)) continue;
                        l++;
                        break;
                    case xa:
                        if ("/" != i && "\\" != i) {
                            s = Ra;
                            continue
                        }
                        break;
                    case Ra:
                        if ("@" == i) {
                            h && (f = "%40" + f), h = !0, a = ni(f);
                            for (var v = 0; v < a.length; v++) {
                                var y = a[v];
                                if (":" != y || d) {
                                    var g = ca(y, ua);
                                    d ? t.password += g : t.username += g
                                } else d = !0
                            }
                            f = ""
                        } else if (i == Ii || "/" == i || "?" == i || "#" == i || "\\" == i && la(t)) {
                            if (h && "" == f) return "Invalid authority";
                            l -= ni(f).length + 1, f = "", s = _a
                        } else f += i;
                        break;
                    case _a:
                    case Pa:
                        if (n && "file" == t.scheme) {
                            s = ka;
                            continue
                        }
                        if (":" != i || p) {
                            if (i == Ii || "/" == i || "?" == i || "#" == i || "\\" == i && la(t)) {
                                if (la(t) && "" == f) return "Invalid host";
                                if (n && "" == f && (fa(t) || null !== t.port)) return;
                                if (u = ta(t, f)) return u;
                                if (f = "", s = Ia, n) return;
                                continue
                            }
                            "[" == i ? p = !0 : "]" == i && (p = !1), f += i
                        } else {
                            if ("" == f) return "Invalid host";
                            if (u = ta(t, f)) return u;
                            if (f = "", s = La, n == Pa) return
                        }
                        break;
                    case La:
                        if (!Ki.test(i)) {
                            if (i == Ii || "/" == i || "?" == i || "#" == i || "\\" == i && la(t) || n) {
                                if ("" != f) {
                                    var m = parseInt(f, 10);
                                    if (m > 65535) return "Invalid port";
                                    t.port = la(t) && m === sa[t.scheme] ? null : m, f = ""
                                }
                                if (n) return;
                                s = Ia;
                                continue
                            }
                            return "Invalid port"
                        }
                        f += i;
                        break;
                    case Aa:
                        if (t.scheme = "file", "/" == i || "\\" == i) s = Ta;
                        else {
                            if (!r || "file" != r.scheme) {
                                s = Ua;
                                continue
                            }
                            if (i == Ii) t.host = r.host, t.path = r.path.slice(), t.query = r.query;
                            else if ("?" == i) t.host = r.host, t.path = r.path.slice(), t.query = "", s = Ma;
                            else {
                                if ("#" != i) {
                                    da(o.slice(l).join("")) || (t.host = r.host, t.path = r.path.slice(), va(t)), s = Ua;
                                    continue
                                }
                                t.host = r.host, t.path = r.path.slice(), t.query = r.query, t.fragment = "", s = qa
                            }
                        }
                        break;
                    case Ta:
                        if ("/" == i || "\\" == i) {
                            s = ka;
                            break
                        }
                        r && "file" == r.scheme && !da(o.slice(l).join("")) && (pa(r.path[0], !0) ? t.path.push(r.path[0]) : t.host = r.host), s = Ua;
                        continue;
                    case ka:
                        if (i == Ii || "/" == i || "\\" == i || "?" == i || "#" == i) {
                            if (!n && pa(f)) s = Ua;
                            else if ("" == f) {
                                if (t.host = "", n) return;
                                s = Ia
                            } else {
                                if (u = ta(t, f)) return u;
                                if ("localhost" == t.host && (t.host = ""), n) return;
                                f = "", s = Ia
                            }
                            continue
                        }
                        f += i;
                        break;
                    case Ia:
                        if (la(t)) {
                            if (s = Ua, "/" != i && "\\" != i) continue
                        } else if (n || "?" != i)
                            if (n || "#" != i) {
                                if (i != Ii && (s = Ua, "/" != i)) continue
                            } else t.fragment = "", s = qa;
                        else t.query = "", s = Ma;
                        break;
                    case Ua:
                        if (i == Ii || "/" == i || "\\" == i && la(t) || !n && ("?" == i || "#" == i)) {
                            if (".." === (c = (c = f).toLowerCase()) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (va(t), "/" == i || "\\" == i && la(t) || t.path.push("")) : ya(f) ? "/" == i || "\\" == i && la(t) || t.path.push("") : ("file" == t.scheme && !t.path.length && pa(f) && (t.host && (t.host = ""), f = f.charAt(0) + ":"), t.path.push(f)), f = "", "file" == t.scheme && (i == Ii || "?" == i || "#" == i))
                                for (; t.path.length > 1 && "" === t.path[0];) t.path.shift();
                            "?" == i ? (t.query = "", s = Ma) : "#" == i && (t.fragment = "", s = qa)
                        } else f += ca(i, aa);
                        break;
                    case Ca:
                        "?" == i ? (t.query = "", s = Ma) : "#" == i ? (t.fragment = "", s = qa) : i != Ii && (t.path[0] += ca(i, oa));
                        break;
                    case Ma:
                        n || "#" != i ? i != Ii && ("'" == i && la(t) ? t.query += "%27" : t.query += "#" == i ? "%23" : ca(i, oa)) : (t.fragment = "", s = qa);
                        break;
                    case qa:
                        i != Ii && (t.fragment += ca(i, ia))
                }
                l++
            }
        },
        Na = function (t) {
            var e, n, r = je(this, Na, "URL"),
                o = arguments.length > 1 ? arguments[1] : void 0,
                a = String(t),
                u = Ni(r, {
                    type: "URL"
                });
            if (void 0 !== o)
                if (o instanceof Na) e = Di(o);
                else if (n = Ba(e = {}, String(o))) throw TypeError(n);
            if (n = Ba(u, a, null, e)) throw TypeError(n);
            var c = u.searchParams = new qi,
                s = Bi(c);
            s.updateSearchParams(u.query), s.updateURL = function () {
                u.query = String(c) || null
            }, i || (r.href = Fa.call(r), r.origin = Ga.call(r), r.protocol = za.call(r), r.username = Ha.call(r), r.password = Ka.call(r), r.host = Va.call(r), r.hostname = Ya.call(r), r.port = Wa.call(r), r.pathname = $a.call(r), r.search = Xa.call(r), r.searchParams = Ja.call(r), r.hash = Za.call(r))
        },
        Da = Na.prototype,
        Fa = function () {
            var t = Di(this),
                e = t.scheme,
                n = t.username,
                r = t.password,
                o = t.host,
                i = t.port,
                a = t.path,
                u = t.query,
                c = t.fragment,
                s = e + ":";
            return null !== o ? (s += "//", fa(t) && (s += n + (r ? ":" + r : "") + "@"), s += ra(o), null !== i && (s += ":" + i)) : "file" == e && (s += "//"), s += t.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== u && (s += "?" + u), null !== c && (s += "#" + c), s
        },
        Ga = function () {
            var t = Di(this),
                e = t.scheme,
                n = t.port;
            if ("blob" == e) try {
                return new Na(e.path[0]).origin
            } catch (t) {
                return "null"
            }
            return "file" != e && la(t) ? e + "://" + ra(t.host) + (null !== n ? ":" + n : "") : "null"
        },
        za = function () {
            return Di(this).scheme + ":"
        },
        Ha = function () {
            return Di(this).username
        },
        Ka = function () {
            return Di(this).password
        },
        Va = function () {
            var t = Di(this),
                e = t.host,
                n = t.port;
            return null === e ? "" : null === n ? ra(e) : ra(e) + ":" + n
        },
        Ya = function () {
            var t = Di(this).host;
            return null === t ? "" : ra(t)
        },
        Wa = function () {
            var t = Di(this).port;
            return null === t ? "" : String(t)
        },
        $a = function () {
            var t = Di(this),
                e = t.path;
            return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : ""
        },
        Xa = function () {
            var t = Di(this).query;
            return t ? "?" + t : ""
        },
        Ja = function () {
            return Di(this).searchParams
        },
        Za = function () {
            var t = Di(this).fragment;
            return t ? "#" + t : ""
        },
        Qa = function (t, e) {
            return {
                get: t,
                set: e,
                configurable: !0,
                enumerable: !0
            }
        };
    if (i && ao(Da, {
            href: Qa(Fa, (function (t) {
                var e = Di(this),
                    n = String(t),
                    r = Ba(e, n);
                if (r) throw TypeError(r);
                Bi(e.searchParams).updateSearchParams(e.query)
            })),
            origin: Qa(Ga),
            protocol: Qa(za, (function (t) {
                var e = Di(this);
                Ba(e, String(t) + ":", ga)
            })),
            username: Qa(Ha, (function (t) {
                var e = Di(this),
                    n = ni(String(t));
                if (!ha(e)) {
                    e.username = "";
                    for (var r = 0; r < n.length; r++) e.username += ca(n[r], ua)
                }
            })),
            password: Qa(Ka, (function (t) {
                var e = Di(this),
                    n = ni(String(t));
                if (!ha(e)) {
                    e.password = "";
                    for (var r = 0; r < n.length; r++) e.password += ca(n[r], ua)
                }
            })),
            host: Qa(Va, (function (t) {
                var e = Di(this);
                e.cannotBeABaseURL || Ba(e, String(t), _a)
            })),
            hostname: Qa(Ya, (function (t) {
                var e = Di(this);
                e.cannotBeABaseURL || Ba(e, String(t), Pa)
            })),
            port: Qa(Wa, (function (t) {
                var e = Di(this);
                ha(e) || ("" == (t = String(t)) ? e.port = null : Ba(e, t, La))
            })),
            pathname: Qa($a, (function (t) {
                var e = Di(this);
                e.cannotBeABaseURL || (e.path = [], Ba(e, t + "", Ia))
            })),
            search: Qa(Xa, (function (t) {
                var e = Di(this);
                "" == (t = String(t)) ? e.query = null: ("?" == t.charAt(0) && (t = t.slice(1)), e.query = "", Ba(e, t, Ma)), Bi(e.searchParams).updateSearchParams(e.query)
            })),
            searchParams: Qa(Ja),
            hash: Qa(Za, (function (t) {
                var e = Di(this);
                "" != (t = String(t)) ? ("#" == t.charAt(0) && (t = t.slice(1)), e.fragment = "", Ba(e, t, qa)) : e.fragment = null
            }))
        }), nt(Da, "toJSON", (function () {
            return Fa.call(this)
        }), {
            enumerable: !0
        }), nt(Da, "toString", (function () {
            return Fa.call(this)
        }), {
            enumerable: !0
        }), Mi) {
        var tu = Mi.createObjectURL,
            eu = Mi.revokeObjectURL;
        tu && nt(Na, "createObjectURL", (function (t) {
            return tu.apply(Mi, arguments)
        })), eu && nt(Na, "revokeObjectURL", (function (t) {
            return eu.apply(Mi, arguments)
        }))
    }
    Se(Na, "URL"), Tt({
        global: !0,
        forced: !Xo,
        sham: !i
    }, {
        URL: Na
    });
    var nu = dt.includes;
    Tt({
        target: "Array",
        proto: !0
    }, {
        includes: function (t) {
            return nu(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), mo("includes"), Tt({
        target: "String",
        proto: !0,
        forced: !$t("includes")
    }, {
        includes: function (t) {
            return !!~String(d(this)).indexOf(Yt(t), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ru = "TOSSPAY";

    function ou() {
        var t = localStorage.getItem("@tosspayments/client-id");
        if (null != t) return t;
        var e = Math.random().toString(36).substring(2);
        return localStorage.setItem("@tosspayments/client-id", e), e
    }

    function iu(t, e) {
        return oe(this, void 0, void 0, (function () {
            return ie(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, Sr("GET", "https://frontend-storage.tosspayments.com" + t, {
                            timeout: 2e3
                        })];
                    case 1:
                        return [2, n.sent()];
                    case 2:
                        return n.sent(), [2, e];
                    case 3:
                        return [2]
                }
            }))
        }))
    }

    function au(t) {
        return void 0 === t && (t = {}), oe(this, void 0, void 0, (function () {
            var e, n;
            return ie(this, (function (r) {
                switch (r.label) {
                    case 0:
                        e = re({
                            host: window.location.host,
                            phase: "live"
                        }, t), r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, Sr("POST", "https://event.tosspayments.com/api/v1/logging", {
                            body: e
                        })];
                    case 2:
                        return r.sent(), [3, 4];
                    case 3:
                        return n = r.sent(), console.error(n), [3, 4];
                    case 4:
                        return [2]
                }
            }))
        }))
    }

    function uu(t, e) {
        return RegExp(t, e)
    }
    var cu, su, lu = {
            UNSUPPORTED_Y: o((function () {
                var t = uu("a", "y");
                return t.lastIndex = 2, null != t.exec("abcd")
            })),
            BROKEN_CARET: o((function () {
                var t = uu("^r", "gy");
                return t.lastIndex = 2, null != t.exec("str")
            }))
        },
        fu = RegExp.prototype.exec,
        hu = D("native-string-replace", String.prototype.replace),
        pu = fu,
        du = (cu = /a/, su = /b*/g, fu.call(cu, "a"), fu.call(su, "a"), 0 !== cu.lastIndex || 0 !== su.lastIndex),
        vu = lu.UNSUPPORTED_Y || lu.BROKEN_CARET,
        yu = void 0 !== /()??/.exec("")[1];
    (du || yu || vu) && (pu = function (t) {
        var e, n, r, o, i = this,
            a = vu && i.sticky,
            u = to.call(i),
            c = i.source,
            s = 0,
            l = t;
        return a && (-1 === (u = u.replace("y", "")).indexOf("g") && (u += "g"), l = String(t).slice(i.lastIndex), i.lastIndex > 0 && (!i.multiline || i.multiline && "\n" !== t[i.lastIndex - 1]) && (c = "(?: " + c + ")", l = " " + l, s++), n = new RegExp("^(?:" + c + ")", u)), yu && (n = new RegExp("^" + c + "$(?!\\s)", u)), du && (e = i.lastIndex), r = fu.call(a ? n : i, l), a ? r ? (r.input = r.input.slice(s), r[0] = r[0].slice(s), r.index = i.lastIndex, i.lastIndex += r[0].length) : i.lastIndex = 0 : du && r && (i.lastIndex = i.global ? r.index + r[0].length : e), yu && r && r.length > 1 && hu.call(r[0], n, (function () {
            for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
        })), r
    });
    var gu = pu;
    Tt({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== gu
    }, {
        exec: gu
    });
    var mu = Ht("species"),
        bu = !o((function () {
            var t = /./;
            return t.exec = function () {
                var t = [];
                return t.groups = {
                    a: "7"
                }, t
            }, "7" !== "".replace(t, "$<a>")
        })),
        wu = "$0" === "a".replace(/./, "$0"),
        Su = Ht("replace"),
        Eu = !!/./ [Su] && "" === /./ [Su]("a", "$0"),
        Ou = !o((function () {
            var t = /(?:)/,
                e = t.exec;
            t.exec = function () {
                return e.apply(this, arguments)
            };
            var n = "ab".split(t);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        ju = Bo.charAt,
        xu = function (t, e, n) {
            return e + (n ? ju(t, e).length : 1)
        },
        Ru = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var r = n.call(t, e);
                if ("object" != typeof r) throw TypeError("RegExp exec method returned something other than an Object or null");
                return r
            }
            if ("RegExp" !== f(t)) throw TypeError("RegExp#exec called on incompatible receiver");
            return gu.call(t, e)
        },
        _u = lu.UNSUPPORTED_Y,
        Pu = [].push,
        Lu = Math.min;
    ! function (t, e, n, r) {
        var i = Ht(t),
            a = !o((function () {
                var e = {};
                return e[i] = function () {
                    return 7
                }, 7 != "" [t](e)
            })),
            u = a && !o((function () {
                var e = !1,
                    n = /a/;
                return "split" === t && ((n = {}).constructor = {}, n.constructor[mu] = function () {
                    return n
                }, n.flags = "", n[i] = /./ [i]), n.exec = function () {
                    return e = !0, null
                }, n[i](""), !e
            }));
        if (!a || !u || "replace" === t && (!bu || !wu || Eu) || "split" === t && !Ou) {
            var c = /./ [i],
                s = n(i, "" [t], (function (t, e, n, r, o) {
                    return e.exec === RegExp.prototype.exec ? a && !o ? {
                        done: !0,
                        value: c.call(e, n, r)
                    } : {
                        done: !0,
                        value: t.call(n, e, r)
                    } : {
                        done: !1
                    }
                }), {
                    REPLACE_KEEPS_$0: wu,
                    REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Eu
                }),
                l = s[0],
                f = s[1];
            nt(String.prototype, t, l), nt(RegExp.prototype, i, 2 == e ? function (t, e) {
                return f.call(t, this, e)
            } : function (t) {
                return f.call(t, this)
            })
        }
        r && A(RegExp.prototype[i], "sham", !0)
    }("split", 2, (function (t, e, n) {
        var r;
        return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, n) {
            var r = String(d(this)),
                o = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === o) return [];
            if (void 0 === t) return [r];
            if (!Vt(t)) return e.call(r, t, o);
            for (var i, a, u, c = [], s = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), l = 0, f = new RegExp(t.source, s + "g");
                (i = gu.call(f, r)) && !((a = f.lastIndex) > l && (c.push(r.slice(l, i.index)), i.length > 1 && i.index < r.length && Pu.apply(c, i.slice(1)), u = i[0].length, l = a, c.length >= o));) f.lastIndex === i.index && f.lastIndex++;
            return l === r.length ? !u && f.test("") || c.push("") : c.push(r.slice(l)), c.length > o ? c.slice(0, o) : c
        } : "0".split(void 0, 0).length ? function (t, n) {
            return void 0 === t && 0 === n ? [] : e.call(this, t, n)
        } : e, [function (e, n) {
            var o = d(this),
                i = null == e ? void 0 : e[t];
            return void 0 !== i ? i.call(e, o, n) : r.call(String(o), e, n)
        }, function (t, o) {
            var i = n(r, t, this, o, r !== e);
            if (i.done) return i.value;
            var a = _(t),
                u = String(this),
                c = ze(a, RegExp),
                s = a.unicode,
                l = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (_u ? "g" : "y"),
                f = new c(_u ? "^(?:" + a.source + ")" : a, l),
                h = void 0 === o ? 4294967295 : o >>> 0;
            if (0 === h) return [];
            if (0 === u.length) return null === Ru(f, u) ? [u] : [];
            for (var p = 0, d = 0, v = []; d < u.length;) {
                f.lastIndex = _u ? 0 : d;
                var y, g = Ru(f, _u ? u.slice(d) : u);
                if (null === g || (y = Lu(lt(f.lastIndex + (_u ? d : 0)), u.length)) === p) d = xu(u, d, s);
                else {
                    if (v.push(u.slice(p, d)), v.length === h) return v;
                    for (var m = 1; m <= g.length - 1; m++)
                        if (v.push(g[m]), v.length === h) return v;
                    d = p = y
                }
            }
            return v.push(u.slice(p)), v
        }]
    }), _u);
    Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;

    function Au(t, e, n) {
        void 0 === n && (n = {});
        var r = Or(t),
            o = n.isLegacy,
            i = void 0 === o || o;
        return r.post("/v1/payments", re(re({}, e), {
            isLegacy: i
        }))
    }! function () {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
                    return e[t]
                })).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (t) {
                r[t] = t
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() || Object.assign;
    var Tu = {
        "카드": "CARD",
        "가상계좌": "VIRTUAL_ACCOUNT",
        "휴대폰": "MOBILE_PHONE",
        "토스결제": "TOSSPAY"
    };

    function ku(t, e, n) {
        var r, o;
        return oe(this, void 0, void 0, (function () {
            var i, a, u, c, s, l, f, h, p, d, v, y, g;
            return ie(this, (function (m) {
                switch (m.label) {
                    case 0:
                        if (!ce.isReady) return [2];
                        ce.setOnPayment(), u = void 0 === (a = (i = "string" == typeof e ? [e, n] : [void 0, e])[0]) ? "" : null !== (r = Tu[a]) && void 0 !== r ? r : a, c = function (t) {
                            var e = t.successUrl,
                                n = t.failUrl,
                                r = function (t, e) {
                                    var n = {};
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                                        var o = 0;
                                        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                                    }
                                    return n
                                }(t, ["successUrl", "failUrl"]);
                            return re(re({}, r), {
                                successUrl: new URL(e).toString(),
                                failUrl: new URL(n).toString()
                            })
                        }(i[1]), m.label = 1;
                    case 1:
                        return m.trys.push([1, 6, , 7]), l = (s = u === Tu.카드) && "DIRECT" === (null === (o = c.flowMode) || void 0 === o ? void 0 : o.toUpperCase()), f = function (t) {
                            return {
                                enableV3: !0 === re({}, t).__v3__
                            }
                        }(c), (p = f.enableV3) ? [3, 4] : (d = Dr() && s && !l && !0) ? [4, Iu(t)] : [3, 3];
                    case 2:
                        d = m.sent(), m.label = 3;
                    case 3:
                        p = d, m.label = 4;
                    case 4:
                        return v = {
                            isLegacy: !(h = p)
                        }, [4, Au(t, u === Tu.토스결제 ? re(re({}, c), {
                            easyPay: ru,
                            flowMode: "DIRECT"
                        }) : c, v)];
                    case 5:
                        return y = m.sent(), au({
                            log_name: "payment_window::window_load_done",
                            schema_id: 1006098,
                            screen_name: "payment_window",
                            log_type: "event",
                            event_type: "background",
                            event_name: "window_load_done",
                            value: ou(),
                            clientkey: t,
                            paymentkey: y.key,
                            is_v3: h
                        }), h ? (window.location.href = "https://pay.tosspayments.com/card" + function (t) {
                            return "?" + Object.keys(t).filter((function (e) {
                                return void 0 !== t[e]
                            })).map((function (e) {
                                return e + "=" + encodeURIComponent(t[e])
                            })).join("&")
                        }({
                            p: y.key,
                            c: t
                        }), [2]) : [2, Xr("/proxy/pages/load", {
                            clientKey: t,
                            paymentKey: y.key,
                            methodType: u === Tu.토스결제 ? Tu.카드 : u
                        }, l ? {
                            dimmer: zr({
                                styles: {
                                    background: "none"
                                }
                            }),
                            iframe: Gr({
                                styles: {
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%"
                                }
                            })
                        } : void 0)];
                    case 6:
                        throw g = m.sent(), ce.setReady(), g;
                    case 7:
                        return [2]
                }
            }))
        }))
    }

    function Iu(t) {
        return oe(this, void 0, void 0, (function () {
            return ie(this, (function (e) {
                switch (e.label) {
                    case 0:
                        return [4, iu("/tosspayments.js/v3-allowed-list.json", {
                            clientKeys: []
                        })];
                    case 1:
                        return [2, e.sent().clientKeys.includes(t)]
                }
            }))
        }))
    }

    function Uu(t) {
        return t.startsWith("test_") && au({
            log_name: "payment_window::tosspayments_init",
            schema_id: 1006096,
            screen_name: "payment_window",
            log_type: "event",
            event_type: "background",
            event_name: "tosspayments_init",
            value: ou()
        }), {
            requestPayment: function (e, n) {
                return oe(this, void 0, void 0, (function () {
                    return ie(this, (function (r) {
                        return [2, ku(t, e, n)]
                    }))
                }))
            },
            requestBillingAuth: function (e, n) {
                return function (t, e, n) {
                    return oe(this, void 0, void 0, (function () {
                        var r;
                        return ie(this, (function (o) {
                            switch (o.label) {
                                case 0:
                                    return ce.isReady ? (ce.setOnPayment(), [4, jr(t, re({
                                        payMethod: e
                                    }, n))]) : [2];
                                case 1:
                                    return r = o.sent().authKey, [2, Xr("/proxy/pages/billing/load", {
                                        clientKey: t,
                                        authKey: r
                                    })]
                            }
                        }))
                    }))
                }(t, e, n)
            }
        }
    }
    return Uu.__versionHash__ = "c1ce42d4b87eca2321f0ce7f5527f046ec49b731", window.TossPayments = Uu,
        function () {
            if (Nr()) {
                var t = document.createEvent("Event");
                return t.initEvent("tossPaymentsInitialize", !1, !0), void window.dispatchEvent(t)
            }
            window.dispatchEvent(new Event("tossPaymentsInitialize"))
        }(), Uu
}();