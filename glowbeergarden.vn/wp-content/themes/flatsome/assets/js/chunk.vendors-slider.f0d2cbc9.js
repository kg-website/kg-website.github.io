(window.flatsomeJsonp = window.flatsomeJsonp || []).push([
    [5], {
        54: function(t, e, i) {
            var n, s, o, r, a, h, l, c, d, u, p, f, g, v, m, y, b, E, S, C, w, x, D, _, P, A, L, k, I;
            ! function(n, s) {
                k = [i(4)], void 0 === (I = function(t) {
                    return function(t, e) {
                        "use strict";
                        var i = Array.prototype.slice,
                            n = t.console,
                            s = void 0 === n ? function() {} : function(t) {
                                n.error(t)
                            };

                        function o(n, o, a) {
                            function h(t, e, i) {
                                var o, r = "$()." + n + '("' + e + '")';
                                return t.each((function(t, h) {
                                    var l = a.data(h, n);
                                    if (l) {
                                        var c = l[e];
                                        if (c && "_" != e.charAt(0)) {
                                            var d = c.apply(l, i);
                                            o = void 0 === o ? d : o
                                        } else s(r + " is not a valid method")
                                    } else s(n + " not initialized. Cannot call methods, i.e. " + r)
                                })), void 0 !== o ? o : t
                            }

                            function l(t, e) {
                                t.each((function(t, i) {
                                    var s = a.data(i, n);
                                    s ? (s.option(e), s._init()) : (s = new o(i, e), a.data(i, n, s))
                                }))
                            }(a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
                                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
                            }), a.fn[n] = function(t) {
                                if ("string" == typeof t) {
                                    var e = i.call(arguments, 1);
                                    return h(this, t, e)
                                }
                                return l(this, t), this
                            }, r(a))
                        }

                        function r(t) {
                            !t || t && t.bridget || (t.bridget = o)
                        }
                        return r(e || t.jQuery), o
                    }(n, t)
                }.apply(e, k)) || (t.exports = I)
            }(window), "undefined" != typeof window && window, o = {
                    id: "ev-emitter/ev-emitter",
                    exports: {},
                    loaded: !1
                }, n = "function" == typeof(s = function() {
                    function t() {}
                    var e = t.prototype;
                    return e.on = function(t, e) {
                        if (t && e) {
                            var i = this._events = this._events || {},
                                n = i[t] = i[t] || [];
                            return -1 == n.indexOf(e) && n.push(e), this
                        }
                    }, e.once = function(t, e) {
                        if (t && e) {
                            this.on(t, e);
                            var i = this._onceEvents = this._onceEvents || {};
                            return (i[t] = i[t] || {})[e] = !0, this
                        }
                    }, e.off = function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) {
                            var n = i.indexOf(e);
                            return -1 != n && i.splice(n, 1), this
                        }
                    }, e.emitEvent = function(t, e) {
                        var i = this._events && this._events[t];
                        if (i && i.length) {
                            i = i.slice(0), e = e || [];
                            for (var n = this._onceEvents && this._onceEvents[t], s = 0; s < i.length; s++) {
                                var o = i[s];
                                n && n[o] && (this.off(t, o), delete n[o]), o.apply(this, e)
                            }
                            return this
                        }
                    }, e.allOff = function() {
                        delete this._events, delete this._onceEvents
                    }, t
                }) ? s.call(o.exports, i, o.exports, o) : s, o.loaded = !0, void 0 !== n || (n = o.exports), window, h = {
                    id: "get-size/get-size",
                    exports: {},
                    loaded: !1
                }, r = "function" == typeof(a = function() {
                    "use strict";

                    function t(t) {
                        var e = parseFloat(t);
                        return -1 == t.indexOf("%") && !isNaN(e) && e
                    }
                    var e = "undefined" == typeof console ? function() {} : function(t) {
                            console.error(t)
                        },
                        i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                        n = i.length;

                    function s(t) {
                        var i = getComputedStyle(t);
                        return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), i
                    }
                    var o, r = !1;
                    return function e(a) {
                        if (function() {
                                if (!r) {
                                    r = !0;
                                    var i = document.createElement("div");
                                    i.style.width = "200px", i.style.padding = "1px 2px 3px 4px", i.style.borderStyle = "solid", i.style.borderWidth = "1px 2px 3px 4px", i.style.boxSizing = "border-box";
                                    var n = document.body || document.documentElement;
                                    n.appendChild(i);
                                    var a = s(i);
                                    o = 200 == Math.round(t(a.width)), e.isBoxSizeOuter = o, n.removeChild(i)
                                }
                            }(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                            var h = s(a);
                            if ("none" == h.display) return function() {
                                for (var t = {
                                        width: 0,
                                        height: 0,
                                        innerWidth: 0,
                                        innerHeight: 0,
                                        outerWidth: 0,
                                        outerHeight: 0
                                    }, e = 0; e < n; e++) t[i[e]] = 0;
                                return t
                            }();
                            var l = {};
                            l.width = a.offsetWidth, l.height = a.offsetHeight;
                            for (var c = l.isBorderBox = "border-box" == h.boxSizing, d = 0; d < n; d++) {
                                var u = i[d],
                                    p = h[u],
                                    f = parseFloat(p);
                                l[u] = isNaN(f) ? 0 : f
                            }
                            var g = l.paddingLeft + l.paddingRight,
                                v = l.paddingTop + l.paddingBottom,
                                m = l.marginLeft + l.marginRight,
                                y = l.marginTop + l.marginBottom,
                                b = l.borderLeftWidth + l.borderRightWidth,
                                E = l.borderTopWidth + l.borderBottomWidth,
                                S = c && o,
                                C = t(h.width);
                            !1 !== C && (l.width = C + (S ? 0 : g + b));
                            var w = t(h.height);
                            return !1 !== w && (l.height = w + (S ? 0 : v + E)), l.innerWidth = l.width - (g + b), l.innerHeight = l.height - (v + E), l.outerWidth = l.width + m, l.outerHeight = l.height + y, l
                        }
                    }
                }) ? a.call(h.exports, i, h.exports, h) : a, h.loaded = !0, void 0 !== r || (r = h.exports),
                function(t, e) {
                    "use strict";
                    d = {
                        id: "desandro-matches-selector/matches-selector",
                        exports: {},
                        loaded: !1
                    }, l = "function" == typeof(c = e) ? c.call(d.exports, i, d.exports, d) : c, d.loaded = !0, void 0 !== l || (l = d.exports)
                }(window, (function() {
                    "use strict";
                    var t = function() {
                        var t = window.Element.prototype;
                        if (t.matches) return "matches";
                        if (t.matchesSelector) return "matchesSelector";
                        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                            var n = e[i] + "MatchesSelector";
                            if (t[n]) return n
                        }
                    }();
                    return function(e, i) {
                        return e[t](i)
                    }
                })),
                function(t, i) {
                    u = function(e) {
                        return function(t, e) {
                            var i = {
                                    extend: function(t, e) {
                                        for (var i in e) t[i] = e[i];
                                        return t
                                    },
                                    modulo: function(t, e) {
                                        return (t % e + e) % e
                                    }
                                },
                                n = Array.prototype.slice;
                            i.makeArray = function(t) {
                                return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t]
                            }, i.removeFrom = function(t, e) {
                                var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
                            }, i.getParent = function(t, i) {
                                for (; t.parentNode && t != document.body;)
                                    if (t = t.parentNode, e(t, i)) return t
                            }, i.getQueryElement = function(t) {
                                return "string" == typeof t ? document.querySelector(t) : t
                            }, i.handleEvent = function(t) {
                                var e = "on" + t.type;
                                this[e] && this[e](t)
                            }, i.filterFindElements = function(t, n) {
                                t = i.makeArray(t);
                                var s = [];
                                return t.forEach((function(t) {
                                    if (t instanceof HTMLElement)
                                        if (n) {
                                            e(t, n) && s.push(t);
                                            for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++) s.push(i[o])
                                        } else s.push(t)
                                })), s
                            }, i.debounceMethod = function(t, e, i) {
                                i = i || 100;
                                var n = t.prototype[e],
                                    s = e + "Timeout";
                                t.prototype[e] = function() {
                                    var t = this[s];
                                    clearTimeout(t);
                                    var e = arguments,
                                        o = this;
                                    this[s] = setTimeout((function() {
                                        n.apply(o, e), delete o[s]
                                    }), i)
                                }
                            }, i.docReady = function(t) {
                                var e = document.readyState;
                                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                            }, i.toDashed = function(t) {
                                return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                                    return e + "-" + i
                                })).toLowerCase()
                            };
                            var s = t.console;
                            return i.htmlInit = function(e, n) {
                                i.docReady((function() {
                                    var o = i.toDashed(n),
                                        r = "data-" + o,
                                        a = document.querySelectorAll("[" + r + "]"),
                                        h = document.querySelectorAll(".js-" + o),
                                        l = i.makeArray(a).concat(i.makeArray(h)),
                                        c = r + "-options",
                                        d = t.jQuery;
                                    l.forEach((function(t) {
                                        var i, o = t.getAttribute(r) || t.getAttribute(c);
                                        try {
                                            i = o && JSON.parse(o)
                                        } catch (e) {
                                            return void(s && s.error("Error parsing " + r + " on " + t.className + ": " + e))
                                        }
                                        var a = new e(t, i);
                                        d && d.data(t, n, a)
                                    }))
                                }))
                            }, i
                        }(t, e)
                    }.apply(e, k = [l])
                }(window), window, p = function(t) {
                    return function(t, e) {
                        function i(t, e) {
                            this.element = t, this.parent = e, this.create()
                        }
                        var n = i.prototype;
                        return n.create = function() {
                            this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
                        }, n.destroy = function() {
                            this.unselect(), this.element.style.position = "";
                            var t = this.parent.originSide;
                            this.element.style[t] = "", this.element.removeAttribute("aria-hidden")
                        }, n.getSize = function() {
                            this.size = e(this.element)
                        }, n.setPosition = function(t) {
                            this.x = t, this.updateTarget(), this.renderPosition(t)
                        }, n.updateTarget = n.setDefaultTarget = function() {
                            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
                        }, n.renderPosition = function(t) {
                            var e = this.parent.originSide;
                            this.element.style[e] = this.parent.getPositionValue(t)
                        }, n.select = function() {
                            this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
                        }, n.unselect = function() {
                            this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
                        }, n.wrapShift = function(t) {
                            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
                        }, n.remove = function() {
                            this.element.parentNode.removeChild(this.element)
                        }, i
                    }(0, t)
                }.apply(e, k = [r]), window, v = {
                    id: "flickity/js/slide",
                    exports: {},
                    loaded: !1
                }, f = "function" == typeof(g = function() {
                    "use strict";

                    function t(t) {
                        this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
                    }
                    var e = t.prototype;
                    return e.addCell = function(t) {
                        if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                            this.x = t.x;
                            var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                            this.firstMargin = t.size[e]
                        }
                    }, e.updateTarget = function() {
                        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                            e = this.getLastCell(),
                            i = e ? e.size[t] : 0,
                            n = this.outerWidth - (this.firstMargin + i);
                        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
                    }, e.getLastCell = function() {
                        return this.cells[this.cells.length - 1]
                    }, e.select = function() {
                        this.cells.forEach((function(t) {
                            t.select()
                        }))
                    }, e.unselect = function() {
                        this.cells.forEach((function(t) {
                            t.unselect()
                        }))
                    }, e.getCellElements = function() {
                        return this.cells.map((function(t) {
                            return t.element
                        }))
                    }, t
                }) ? g.call(v.exports, i, v.exports, v) : g, v.loaded = !0, void 0 !== f || (f = v.exports), window, m = function(t) {
                    return function(t, e) {
                        return {
                            startAnimation: function() {
                                this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
                            },
                            animate: function() {
                                this.applyDragForce(), this.applySelectedAttraction();
                                var t = this.x;
                                if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                                    var e = this;
                                    requestAnimationFrame((function() {
                                        e.animate()
                                    }))
                                }
                            },
                            positionSlider: function() {
                                var t = this.x;
                                this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
                            },
                            setTranslateX: function(t, e) {
                                t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
                                var i = this.getPositionValue(t);
                                this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
                            },
                            dispatchScrollEvent: function() {
                                var t = this.slides[0];
                                if (t) {
                                    var e = -this.x - t.target,
                                        i = e / this.slidesWidth;
                                    this.dispatchEvent("scroll", null, [i, e])
                                }
                            },
                            positionSliderAtSelected: function() {
                                this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
                            },
                            getPositionValue: function(t) {
                                return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
                            },
                            settle: function(t) {
                                !this.isPointerDown && Math.round(100 * this.x) == Math.round(100 * t) && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
                            },
                            shiftWrapCells: function(t) {
                                var e = this.cursorPosition + t;
                                this._shiftCells(this.beforeShiftCells, e, -1);
                                var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                                this._shiftCells(this.afterShiftCells, i, 1)
                            },
                            _shiftCells: function(t, e, i) {
                                for (var n = 0; n < t.length; n++) {
                                    var s = t[n],
                                        o = e > 0 ? i : 0;
                                    s.wrapShift(o), e -= s.size.outerWidth
                                }
                            },
                            _unshiftCells: function(t) {
                                if (t && t.length)
                                    for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
                            },
                            integratePhysics: function() {
                                this.x += this.velocity, this.velocity *= this.getFrictionFactor()
                            },
                            applyForce: function(t) {
                                this.velocity += t
                            },
                            getFrictionFactor: function() {
                                return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
                            },
                            getRestingPosition: function() {
                                return this.x + this.velocity / (1 - this.getFrictionFactor())
                            },
                            applyDragForce: function() {
                                if (this.isDraggable && this.isPointerDown) {
                                    var t = this.dragX - this.x - this.velocity;
                                    this.applyForce(t)
                                }
                            },
                            applySelectedAttraction: function() {
                                if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                                    var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                                    this.applyForce(t)
                                }
                            }
                        }
                    }(0, t)
                }.apply(e, k = [u]),
                function(t, i) {
                    y = function(e, i, n, s, o, r) {
                        return function(t, e, i, n, s, o, r) {
                            var a = t.jQuery,
                                h = t.getComputedStyle,
                                l = t.console;

                            function c(t, e) {
                                for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
                            }
                            var d = 0,
                                u = {};

                            function p(t, e) {
                                var i = n.getQueryElement(t);
                                if (i) {
                                    if (this.element = i, this.element.flickityGUID) {
                                        var s = u[this.element.flickityGUID];
                                        return s && s.option(e), s
                                    }
                                    a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
                                } else l && l.error("Bad element for Flickity: " + (i || t))
                            }
                            p.defaults = {
                                accessibility: !0,
                                cellAlign: "center",
                                freeScrollFriction: .075,
                                friction: .28,
                                namespaceJQueryEvents: !0,
                                percentPosition: !0,
                                resize: !0,
                                selectedAttraction: .025,
                                setGallerySize: !0
                            }, p.createMethods = [];
                            var f = p.prototype;
                            n.extend(f, e.prototype), f._create = function() {
                                var e = this.guid = ++d;
                                for (var i in this.element.flickityGUID = e, u[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
                                    var n = this.options.on[i];
                                    this.on(i, n)
                                }
                                p.createMethods.forEach((function(t) {
                                    this[t]()
                                }), this), this.options.watchCSS ? this.watchCSS() : this.activate()
                            }, f.option = function(t) {
                                n.extend(this.options, t)
                            }, f.activate = function() {
                                this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), c(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
                            }, f._createSlider = function() {
                                var t = document.createElement("div");
                                t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
                            }, f._filterFindCellElements = function(t) {
                                return n.filterFindElements(t, this.options.cellSelector)
                            }, f.reloadCells = function() {
                                this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
                            }, f._makeCells = function(t) {
                                return this._filterFindCellElements(t).map((function(t) {
                                    return new s(t, this)
                                }), this)
                            }, f.getLastCell = function() {
                                return this.cells[this.cells.length - 1]
                            }, f.getLastSlide = function() {
                                return this.slides[this.slides.length - 1]
                            }, f.positionCells = function() {
                                this._sizeCells(this.cells), this._positionCells(0)
                            }, f._positionCells = function(t) {
                                t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
                                var e = 0;
                                if (t > 0) {
                                    var i = this.cells[t - 1];
                                    e = i.x + i.size.outerWidth
                                }
                                for (var n = this.cells.length, s = t; s < n; s++) {
                                    var o = this.cells[s];
                                    o.setPosition(e), e += o.size.outerWidth, this.maxCellHeight = Math.max(o.size.outerHeight, this.maxCellHeight)
                                }
                                this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
                            }, f._sizeCells = function(t) {
                                t.forEach((function(t) {
                                    t.getSize()
                                }))
                            }, f.updateSlides = function() {
                                if (this.slides = [], this.cells.length) {
                                    var t = new o(this);
                                    this.slides.push(t);
                                    var e = "left" == this.originSide ? "marginRight" : "marginLeft",
                                        i = this._getCanCellFit();
                                    this.cells.forEach((function(n, s) {
                                        if (t.cells.length) {
                                            var r = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                                            i.call(this, s, r) || (t.updateTarget(), t = new o(this), this.slides.push(t)), t.addCell(n)
                                        } else t.addCell(n)
                                    }), this), t.updateTarget(), this.updateSelectedSlide()
                                }
                            }, f._getCanCellFit = function() {
                                var t = this.options.groupCells;
                                if (!t) return function() {
                                    return !1
                                };
                                if ("number" == typeof t) {
                                    var e = parseInt(t, 10);
                                    return function(t) {
                                        return t % e != 0
                                    }
                                }
                                var i = "string" == typeof t && t.match(/^(\d+)%$/),
                                    n = i ? parseInt(i[1], 10) / 100 : 1;
                                return function(t, e) {
                                    return e <= (this.size.innerWidth + 1) * n
                                }
                            }, f._init = f.reposition = function() {
                                this.positionCells(), this.positionSliderAtSelected()
                            }, f.getSize = function() {
                                this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
                            };
                            var g = {
                                center: {
                                    left: .5,
                                    right: .5
                                },
                                left: {
                                    left: 0,
                                    right: 1
                                },
                                right: {
                                    right: 0,
                                    left: 1
                                }
                            };
                            return f.setCellAlign = function() {
                                var t = g[this.options.cellAlign];
                                this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
                            }, f.setGallerySize = function() {
                                if (this.options.setGallerySize) {
                                    var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                                    this.viewport.style.height = t + "px"
                                }
                            }, f._getWrapShiftCells = function() {
                                if (this.options.wrapAround) {
                                    this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                                    var t = this.cursorPosition,
                                        e = this.cells.length - 1;
                                    this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
                                }
                            }, f._getGapCells = function(t, e, i) {
                                for (var n = []; t > 0;) {
                                    var s = this.cells[e];
                                    if (!s) break;
                                    n.push(s), e += i, t -= s.size.outerWidth
                                }
                                return n
                            }, f._containSlides = function() {
                                if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                                    var t = this.options.rightToLeft,
                                        e = t ? "marginRight" : "marginLeft",
                                        i = t ? "marginLeft" : "marginRight",
                                        n = this.slideableWidth - this.getLastCell().size[i],
                                        s = n < this.size.innerWidth,
                                        o = this.cursorPosition + this.cells[0].size[e],
                                        r = n - this.size.innerWidth * (1 - this.cellAlign);
                                    this.slides.forEach((function(t) {
                                        s ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, o), t.target = Math.min(t.target, r))
                                    }), this)
                                }
                            }, f.dispatchEvent = function(t, e, i) {
                                var n = e ? [e].concat(i) : i;
                                if (this.emitEvent(t, n), a && this.$element) {
                                    var s = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                                    if (e) {
                                        var o = new a.Event(e);
                                        o.type = t, s = o
                                    }
                                    this.$element.trigger(s, i)
                                }
                            }, f.select = function(t, e, i) {
                                if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
                                    var s = this.selectedIndex;
                                    this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != s && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
                                }
                            }, f._wrapSelect = function(t) {
                                var e = this.slides.length;
                                if (!(this.options.wrapAround && e > 1)) return t;
                                var i = n.modulo(t, e),
                                    s = Math.abs(i - this.selectedIndex),
                                    o = Math.abs(i + e - this.selectedIndex),
                                    r = Math.abs(i - e - this.selectedIndex);
                                !this.isDragSelect && o < s ? t += e : !this.isDragSelect && r < s && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
                            }, f.previous = function(t, e) {
                                this.select(this.selectedIndex - 1, t, e)
                            }, f.next = function(t, e) {
                                this.select(this.selectedIndex + 1, t, e)
                            }, f.updateSelectedSlide = function() {
                                var t = this.slides[this.selectedIndex];
                                t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
                            }, f.unselectSelectedSlide = function() {
                                this.selectedSlide && this.selectedSlide.unselect()
                            }, f.selectInitialIndex = function() {
                                var t = this.options.initialIndex;
                                if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
                                else {
                                    if (t && "string" == typeof t && this.queryCell(t)) return void this.selectCell(t, !1, !0);
                                    var e = 0;
                                    t && this.slides[t] && (e = t), this.select(e, !1, !0)
                                }
                            }, f.selectCell = function(t, e, i) {
                                var n = this.queryCell(t);
                                if (n) {
                                    var s = this.getCellSlideIndex(n);
                                    this.select(s, e, i)
                                }
                            }, f.getCellSlideIndex = function(t) {
                                for (var e = 0; e < this.slides.length; e++)
                                    if (-1 != this.slides[e].cells.indexOf(t)) return e
                            }, f.getCell = function(t) {
                                for (var e = 0; e < this.cells.length; e++) {
                                    var i = this.cells[e];
                                    if (i.element == t) return i
                                }
                            }, f.getCells = function(t) {
                                t = n.makeArray(t);
                                var e = [];
                                return t.forEach((function(t) {
                                    var i = this.getCell(t);
                                    i && e.push(i)
                                }), this), e
                            }, f.getCellElements = function() {
                                return this.cells.map((function(t) {
                                    return t.element
                                }))
                            }, f.getParentCell = function(t) {
                                return this.getCell(t) || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
                            }, f.getAdjacentCellElements = function(t, e) {
                                if (!t) return this.selectedSlide.getCellElements();
                                e = void 0 === e ? this.selectedIndex : e;
                                var i = this.slides.length;
                                if (1 + 2 * t >= i) return this.getCellElements();
                                for (var s = [], o = e - t; o <= e + t; o++) {
                                    var r = this.options.wrapAround ? n.modulo(o, i) : o,
                                        a = this.slides[r];
                                    a && (s = s.concat(a.getCellElements()))
                                }
                                return s
                            }, f.queryCell = function(t) {
                                if ("number" == typeof t) return this.cells[t];
                                if ("string" == typeof t) {
                                    if (t.match(/^[#.]?[\d/]/)) return;
                                    t = this.element.querySelector(t)
                                }
                                return this.getCell(t)
                            }, f.uiChange = function() {
                                this.emitEvent("uiChange")
                            }, f.childUIPointerDown = function(t) {
                                "touchstart" != t.type && t.preventDefault(), this.focus()
                            }, f.onresize = function() {
                                this.watchCSS(), this.resize()
                            }, n.debounceMethod(p, "onresize", 150), f.resize = function() {
                                if (this.isActive) {
                                    this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                                    var t = this.selectedElements && this.selectedElements[0];
                                    this.selectCell(t, !1, !0)
                                }
                            }, f.watchCSS = function() {
                                this.options.watchCSS && (-1 != h(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
                            }, f.onkeydown = function(t) {
                                var e = document.activeElement && document.activeElement != this.element;
                                if (this.options.accessibility && !e) {
                                    var i = p.keyboardHandlers[t.keyCode];
                                    i && i.call(this)
                                }
                            }, p.keyboardHandlers = {
                                37: function() {
                                    var t = this.options.rightToLeft ? "next" : "previous";
                                    this.uiChange(), this[t]()
                                },
                                39: function() {
                                    var t = this.options.rightToLeft ? "previous" : "next";
                                    this.uiChange(), this[t]()
                                }
                            }, f.focus = function() {
                                var e = t.pageYOffset;
                                this.element.focus({
                                    preventScroll: !0
                                }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
                            }, f.deactivate = function() {
                                this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((function(t) {
                                    t.destroy()
                                })), this.element.removeChild(this.viewport), c(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
                            }, f.destroy = function() {
                                this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid]
                            }, n.extend(f, r), p.data = function(t) {
                                var e = (t = n.getQueryElement(t)) && t.flickityGUID;
                                return e && u[e]
                            }, n.htmlInit(p, "flickity"), a && a.bridget && a.bridget("flickity", p), p.setJQuery = function(t) {
                                a = t
                            }, p.Cell = s, p.Slide = o, p
                        }(t, e, i, n, s, o, r)
                    }.apply(e, k = [n, r, u, p, f, m])
                }(window),
                function(t, i) {
                    b = function(e) {
                        return function(t, e) {
                            function i() {}
                            var n = i.prototype = Object.create(e.prototype);
                            n.bindStartEvent = function(t) {
                                this._bindStartEvent(t, !0)
                            }, n.unbindStartEvent = function(t) {
                                this._bindStartEvent(t, !1)
                            }, n._bindStartEvent = function(e, i) {
                                var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
                                    s = "mousedown";
                                t.PointerEvent ? s = "pointerdown" : "ontouchstart" in t && (s = "touchstart"), e[n](s, this)
                            }, n.handleEvent = function(t) {
                                var e = "on" + t.type;
                                this[e] && this[e](t)
                            }, n.getTouch = function(t) {
                                for (var e = 0; e < t.length; e++) {
                                    var i = t[e];
                                    if (i.identifier == this.pointerIdentifier) return i
                                }
                            }, n.onmousedown = function(t) {
                                var e = t.button;
                                e && 0 !== e && 1 !== e || this._pointerDown(t, t)
                            }, n.ontouchstart = function(t) {
                                this._pointerDown(t, t.changedTouches[0])
                            }, n.onpointerdown = function(t) {
                                this._pointerDown(t, t)
                            }, n._pointerDown = function(t, e) {
                                t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
                            }, n.pointerDown = function(t, e) {
                                this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
                            };
                            var s = {
                                mousedown: ["mousemove", "mouseup"],
                                touchstart: ["touchmove", "touchend", "touchcancel"],
                                pointerdown: ["pointermove", "pointerup", "pointercancel"]
                            };
                            return n._bindPostStartEvents = function(e) {
                                if (e) {
                                    var i = s[e.type];
                                    i.forEach((function(e) {
                                        t.addEventListener(e, this)
                                    }), this), this._boundPointerEvents = i
                                }
                            }, n._unbindPostStartEvents = function() {
                                this._boundPointerEvents && (this._boundPointerEvents.forEach((function(e) {
                                    t.removeEventListener(e, this)
                                }), this), delete this._boundPointerEvents)
                            }, n.onmousemove = function(t) {
                                this._pointerMove(t, t)
                            }, n.onpointermove = function(t) {
                                t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
                            }, n.ontouchmove = function(t) {
                                var e = this.getTouch(t.changedTouches);
                                e && this._pointerMove(t, e)
                            }, n._pointerMove = function(t, e) {
                                this.pointerMove(t, e)
                            }, n.pointerMove = function(t, e) {
                                this.emitEvent("pointerMove", [t, e])
                            }, n.onmouseup = function(t) {
                                this._pointerUp(t, t)
                            }, n.onpointerup = function(t) {
                                t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
                            }, n.ontouchend = function(t) {
                                var e = this.getTouch(t.changedTouches);
                                e && this._pointerUp(t, e)
                            }, n._pointerUp = function(t, e) {
                                this._pointerDone(), this.pointerUp(t, e)
                            }, n.pointerUp = function(t, e) {
                                this.emitEvent("pointerUp", [t, e])
                            }, n._pointerDone = function() {
                                this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
                            }, n._pointerReset = function() {
                                this.isPointerDown = !1, delete this.pointerIdentifier
                            }, n.pointerDone = function() {}, n.onpointercancel = function(t) {
                                t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
                            }, n.ontouchcancel = function(t) {
                                var e = this.getTouch(t.changedTouches);
                                e && this._pointerCancel(t, e)
                            }, n._pointerCancel = function(t, e) {
                                this._pointerDone(), this.pointerCancel(t, e)
                            }, n.pointerCancel = function(t, e) {
                                this.emitEvent("pointerCancel", [t, e])
                            }, i.getPointerPoint = function(t) {
                                return {
                                    x: t.pageX,
                                    y: t.pageY
                                }
                            }, i
                        }(t, e)
                    }.apply(e, k = [n])
                }(window),
                function(t, i) {
                    E = function(e) {
                        return function(t, e) {
                            function i() {}
                            var n = i.prototype = Object.create(e.prototype);
                            n.bindHandles = function() {
                                this._bindHandles(!0)
                            }, n.unbindHandles = function() {
                                this._bindHandles(!1)
                            }, n._bindHandles = function(e) {
                                for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", s = 0; s < this.handles.length; s++) {
                                    var o = this.handles[s];
                                    this._bindStartEvent(o, e), o[i]("click", this), t.PointerEvent && (o.style.touchAction = n)
                                }
                            }, n._touchActionValue = "none", n.pointerDown = function(t, e) {
                                this.okayPointerDown(t) && (this.pointerDownPointer = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
                            };
                            var s = {
                                    TEXTAREA: !0,
                                    INPUT: !0,
                                    SELECT: !0,
                                    OPTION: !0
                                },
                                o = {
                                    radio: !0,
                                    checkbox: !0,
                                    button: !0,
                                    submit: !0,
                                    image: !0,
                                    file: !0
                                };
                            return n.okayPointerDown = function(t) {
                                var e = s[t.target.nodeName],
                                    i = o[t.target.type],
                                    n = !e || i;
                                return n || this._pointerReset(), n
                            }, n.pointerDownBlur = function() {
                                var t = document.activeElement;
                                t && t.blur && t != document.body && t.blur()
                            }, n.pointerMove = function(t, e) {
                                var i = this._dragPointerMove(t, e);
                                this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
                            }, n._dragPointerMove = function(t, e) {
                                var i = {
                                    x: e.pageX - this.pointerDownPointer.pageX,
                                    y: e.pageY - this.pointerDownPointer.pageY
                                };
                                return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
                            }, n.hasDragStarted = function(t) {
                                return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
                            }, n.pointerUp = function(t, e) {
                                this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
                            }, n._dragPointerUp = function(t, e) {
                                this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
                            }, n._dragStart = function(t, e) {
                                this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
                            }, n.dragStart = function(t, e) {
                                this.emitEvent("dragStart", [t, e])
                            }, n._dragMove = function(t, e, i) {
                                this.isDragging && this.dragMove(t, e, i)
                            }, n.dragMove = function(t, e, i) {
                                t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
                            }, n._dragEnd = function(t, e) {
                                this.isDragging = !1, setTimeout(function() {
                                    delete this.isPreventingClicks
                                }.bind(this)), this.dragEnd(t, e)
                            }, n.dragEnd = function(t, e) {
                                this.emitEvent("dragEnd", [t, e])
                            }, n.onclick = function(t) {
                                this.isPreventingClicks && t.preventDefault()
                            }, n._staticClick = function(t, e) {
                                this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                                    delete this.isIgnoringMouseUp
                                }.bind(this), 400)))
                            }, n.staticClick = function(t, e) {
                                this.emitEvent("staticClick", [t, e])
                            }, i.getPointerPoint = e.getPointerPoint, i
                        }(t, e)
                    }.apply(e, k = [b])
                }(window),
                function(t, i) {
                    S = function(e, i, n) {
                        return function(t, e, i, n) {
                            n.extend(e.defaults, {
                                draggable: ">1",
                                dragThreshold: 3
                            }), e.createMethods.push("_createDrag");
                            var s = e.prototype;
                            n.extend(s, i.prototype), s._touchActionValue = "pan-y";
                            var o = "createTouch" in document,
                                r = !1;
                            s._createDrag = function() {
                                this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), o && !r && (t.addEventListener("touchmove", (function() {})), r = !0)
                            }, s.onActivateDrag = function() {
                                this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
                            }, s.onDeactivateDrag = function() {
                                this.unbindHandles(), this.element.classList.remove("is-draggable")
                            }, s.updateDraggable = function() {
                                ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
                            }, s.bindDrag = function() {
                                this.options.draggable = !0, this.updateDraggable()
                            }, s.unbindDrag = function() {
                                this.options.draggable = !1, this.updateDraggable()
                            }, s._uiChangeDrag = function() {
                                delete this.isFreeScrolling
                            }, s.pointerDown = function(e, i) {
                                this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = h(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
                            }, s._pointerDownDefault = function(t, e) {
                                this.pointerDownPointer = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
                            };
                            var a = {
                                INPUT: !0,
                                TEXTAREA: !0,
                                SELECT: !0
                            };

                            function h() {
                                return {
                                    x: t.pageXOffset,
                                    y: t.pageYOffset
                                }
                            }
                            return s.pointerDownFocus = function(t) {
                                a[t.target.nodeName] || this.focus()
                            }, s._pointerDownPreventDefault = function(t) {
                                var e = "touchstart" == t.type,
                                    i = "touch" == t.pointerType,
                                    n = a[t.target.nodeName];
                                e || i || n || t.preventDefault()
                            }, s.hasDragStarted = function(t) {
                                return Math.abs(t.x) > this.options.dragThreshold
                            }, s.pointerUp = function(t, e) {
                                delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
                            }, s.pointerDone = function() {
                                t.removeEventListener("scroll", this), delete this.pointerDownScroll
                            }, s.dragStart = function(e, i) {
                                this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
                            }, s.pointerMove = function(t, e) {
                                var i = this._dragPointerMove(t, e);
                                this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
                            }, s.dragMove = function(t, e, i) {
                                if (this.isDraggable) {
                                    t.preventDefault(), this.previousDragX = this.dragX;
                                    var n = this.options.rightToLeft ? -1 : 1;
                                    this.options.wrapAround && (i.x %= this.slideableWidth);
                                    var s = this.dragStartPosition + i.x * n;
                                    if (!this.options.wrapAround && this.slides.length) {
                                        var o = Math.max(-this.slides[0].target, this.dragStartPosition);
                                        s = s > o ? .5 * (s + o) : s;
                                        var r = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                                        s = s < r ? .5 * (s + r) : s
                                    }
                                    this.dragX = s, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
                                }
                            }, s.dragEnd = function(t, e) {
                                if (this.isDraggable) {
                                    this.options.freeScroll && (this.isFreeScrolling = !0);
                                    var i = this.dragEndRestingSelect();
                                    if (this.options.freeScroll && !this.options.wrapAround) {
                                        var n = this.getRestingPosition();
                                        this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                                    } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                                    delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
                                }
                            }, s.dragEndRestingSelect = function() {
                                var t = this.getRestingPosition(),
                                    e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                                    i = this._getClosestResting(t, e, 1),
                                    n = this._getClosestResting(t, e, -1);
                                return i.distance < n.distance ? i.index : n.index
                            }, s._getClosestResting = function(t, e, i) {
                                for (var n = this.selectedIndex, s = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
                                        return t <= e
                                    } : function(t, e) {
                                        return t < e
                                    }; o(e, s) && (n += i, s = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
                                return {
                                    distance: s,
                                    index: n - i
                                }
                            }, s.getSlideDistance = function(t, e) {
                                var i = this.slides.length,
                                    s = this.options.wrapAround && i > 1,
                                    o = s ? n.modulo(e, i) : e,
                                    r = this.slides[o];
                                if (!r) return null;
                                var a = s ? this.slideableWidth * Math.floor(e / i) : 0;
                                return t - (r.target + a)
                            }, s.dragEndBoostSelect = function() {
                                if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
                                var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                                    e = this.previousDragX - this.dragX;
                                return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
                            }, s.staticClick = function(t, e) {
                                var i = this.getParentCell(t.target),
                                    n = i && i.element,
                                    s = i && this.cells.indexOf(i);
                                this.dispatchEvent("staticClick", t, [e, n, s])
                            }, s.onscroll = function() {
                                var t = h(),
                                    e = this.pointerDownScroll.x - t.x,
                                    i = this.pointerDownScroll.y - t.y;
                                (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
                            }, e
                        }(t, e, i, n)
                    }.apply(e, k = [y, E, u])
                }(window), window, C = function(t, e, i) {
                    return function(t, e, i, n) {
                        "use strict";
                        var s = "http://www.w3.org/2000/svg";

                        function o(t, e) {
                            this.direction = t, this.parent = e, this._create()
                        }
                        o.prototype = Object.create(i.prototype), o.prototype._create = function() {
                            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
                            var t = this.parent.options.rightToLeft ? 1 : -1;
                            this.isLeft = this.direction == t;
                            var e = this.element = document.createElement("button");
                            e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                            var i = this.createSVG();
                            e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
                        }, o.prototype.activate = function() {
                            this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
                        }, o.prototype.deactivate = function() {
                            this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
                        }, o.prototype.createSVG = function() {
                            var t = document.createElementNS(s, "svg");
                            t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
                            var e, i = document.createElementNS(s, "path"),
                                n = "string" == typeof(e = this.parent.options.arrowShape) ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
                            return i.setAttribute("d", n), i.setAttribute("class", "arrow"), this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(i), t
                        }, o.prototype.handleEvent = n.handleEvent, o.prototype.onclick = function() {
                            if (this.isEnabled) {
                                this.parent.uiChange();
                                var t = this.isPrevious ? "previous" : "next";
                                this.parent[t]()
                            }
                        }, o.prototype.enable = function() {
                            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
                        }, o.prototype.disable = function() {
                            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
                        }, o.prototype.update = function() {
                            var t = this.parent.slides;
                            if (this.parent.options.wrapAround && t.length > 1) this.enable();
                            else {
                                var e = t.length ? t.length - 1 : 0,
                                    i = this.isPrevious ? 0 : e;
                                this[this.parent.selectedIndex == i ? "disable" : "enable"]()
                            }
                        }, o.prototype.destroy = function() {
                            this.deactivate(), this.allOff()
                        }, n.extend(e.defaults, {
                            prevNextButtons: !0,
                            arrowShape: {
                                x0: 10,
                                x1: 60,
                                y1: 50,
                                x2: 70,
                                y2: 40,
                                x3: 30
                            }
                        }), e.createMethods.push("_createPrevNextButtons");
                        var r = e.prototype;
                        return r._createPrevNextButtons = function() {
                            this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
                        }, r.activatePrevNextButtons = function() {
                            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
                        }, r.deactivatePrevNextButtons = function() {
                            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
                        }, e.PrevNextButton = o, e
                    }(0, t, e, i)
                }.apply(e, k = [y, b, u]), window, w = function(t, e, i) {
                    return function(t, e, i, n) {
                        function s(t) {
                            this.parent = t, this._create()
                        }
                        s.prototype = Object.create(i.prototype), s.prototype._create = function() {
                            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
                        }, s.prototype.activate = function() {
                            this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
                        }, s.prototype.deactivate = function() {
                            this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
                        }, s.prototype.setDots = function() {
                            var t = this.parent.slides.length - this.dots.length;
                            t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
                        }, s.prototype.addDots = function(t) {
                            for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, s = n + t, o = n; o < s; o++) {
                                var r = document.createElement("li");
                                r.className = "dot", r.setAttribute("aria-label", "Page dot " + (o + 1)), e.appendChild(r), i.push(r)
                            }
                            this.holder.appendChild(e), this.dots = this.dots.concat(i)
                        }, s.prototype.removeDots = function(t) {
                            this.dots.splice(this.dots.length - t, t).forEach((function(t) {
                                this.holder.removeChild(t)
                            }), this)
                        }, s.prototype.updateSelected = function() {
                            this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
                        }, s.prototype.onTap = s.prototype.onClick = function(t) {
                            var e = t.target;
                            if ("LI" == e.nodeName) {
                                this.parent.uiChange();
                                var i = this.dots.indexOf(e);
                                this.parent.select(i)
                            }
                        }, s.prototype.destroy = function() {
                            this.deactivate(), this.allOff()
                        }, e.PageDots = s, n.extend(e.defaults, {
                            pageDots: !0
                        }), e.createMethods.push("_createPageDots");
                        var o = e.prototype;
                        return o._createPageDots = function() {
                            this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
                        }, o.activatePageDots = function() {
                            this.pageDots.activate()
                        }, o.updateSelectedPageDots = function() {
                            this.pageDots.updateSelected()
                        }, o.updatePageDots = function() {
                            this.pageDots.setDots()
                        }, o.deactivatePageDots = function() {
                            this.pageDots.deactivate()
                        }, e.PageDots = s, e
                    }(0, t, e, i)
                }.apply(e, k = [y, b, u]), window, x = function(t, e, i) {
                    return function(t, e, i) {
                        function n(t) {
                            this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
                        }
                        n.prototype = Object.create(t.prototype), n.prototype.play = function() {
                            "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
                        }, n.prototype.tick = function() {
                            if ("playing" == this.state) {
                                var t = this.parent.options.autoPlay;
                                t = "number" == typeof t ? t : 3e3;
                                var e = this;
                                this.clear(), this.timeout = setTimeout((function() {
                                    e.parent.next(!0), e.tick()
                                }), t)
                            }
                        }, n.prototype.stop = function() {
                            this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
                        }, n.prototype.clear = function() {
                            clearTimeout(this.timeout)
                        }, n.prototype.pause = function() {
                            "playing" == this.state && (this.state = "paused", this.clear())
                        }, n.prototype.unpause = function() {
                            "paused" == this.state && this.play()
                        }, n.prototype.visibilityChange = function() {
                            this[document.hidden ? "pause" : "unpause"]()
                        }, n.prototype.visibilityPlay = function() {
                            this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
                        }, e.extend(i.defaults, {
                            pauseAutoPlayOnHover: !0
                        }), i.createMethods.push("_createPlayer");
                        var s = i.prototype;
                        return s._createPlayer = function() {
                            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
                        }, s.activatePlayer = function() {
                            this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
                        }, s.playPlayer = function() {
                            this.player.play()
                        }, s.stopPlayer = function() {
                            this.player.stop()
                        }, s.pausePlayer = function() {
                            this.player.pause()
                        }, s.unpausePlayer = function() {
                            this.player.unpause()
                        }, s.deactivatePlayer = function() {
                            this.player.stop(), this.element.removeEventListener("mouseenter", this)
                        }, s.onmouseenter = function() {
                            this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
                        }, s.onmouseleave = function() {
                            this.player.unpause(), this.element.removeEventListener("mouseleave", this)
                        }, i.Player = n, i
                    }(t, e, i)
                }.apply(e, k = [n, u, y]), window, D = function(t, e) {
                    return function(t, e, i) {
                        var n = e.prototype;
                        return n.insert = function(t, e) {
                            var i = this._makeCells(t);
                            if (i && i.length) {
                                var n = this.cells.length;
                                e = void 0 === e ? n : e;
                                var s = function(t) {
                                        var e = document.createDocumentFragment();
                                        return t.forEach((function(t) {
                                            e.appendChild(t.element)
                                        })), e
                                    }(i),
                                    o = e == n;
                                if (o) this.slider.appendChild(s);
                                else {
                                    var r = this.cells[e].element;
                                    this.slider.insertBefore(s, r)
                                }
                                if (0 === e) this.cells = i.concat(this.cells);
                                else if (o) this.cells = this.cells.concat(i);
                                else {
                                    var a = this.cells.splice(e, n - e);
                                    this.cells = this.cells.concat(i).concat(a)
                                }
                                this._sizeCells(i), this.cellChange(e, !0)
                            }
                        }, n.append = function(t) {
                            this.insert(t, this.cells.length)
                        }, n.prepend = function(t) {
                            this.insert(t, 0)
                        }, n.remove = function(t) {
                            var e = this.getCells(t);
                            if (e && e.length) {
                                var n = this.cells.length - 1;
                                e.forEach((function(t) {
                                    t.remove();
                                    var e = this.cells.indexOf(t);
                                    n = Math.min(e, n), i.removeFrom(this.cells, t)
                                }), this), this.cellChange(n, !0)
                            }
                        }, n.cellSizeChange = function(t) {
                            var e = this.getCell(t);
                            if (e) {
                                e.getSize();
                                var i = this.cells.indexOf(e);
                                this.cellChange(i)
                            }
                        }, n.cellChange = function(t, e) {
                            var i = this.selectedElement;
                            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
                            var n = this.getCell(i);
                            n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
                        }, e
                    }(0, t, e)
                }.apply(e, k = [y, u]), window, _ = function(t, e) {
                    return function(t, e, i) {
                        "use strict";
                        e.createMethods.push("_createLazyload");
                        var n = e.prototype;

                        function s(t, e) {
                            this.img = t, this.flickity = e, this.load()
                        }
                        return n._createLazyload = function() {
                            this.on("select", this.lazyLoad)
                        }, n.lazyLoad = function() {
                            var t = this.options.lazyLoad;
                            if (t) {
                                var e = "number" == typeof t ? t : 0,
                                    n = this.getAdjacentCellElements(e),
                                    o = [];
                                n.forEach((function(t) {
                                    var e = function(t) {
                                        if ("IMG" == t.nodeName) {
                                            var e = t.getAttribute("data-flickity-lazyload"),
                                                n = t.getAttribute("data-flickity-lazyload-src"),
                                                s = t.getAttribute("data-flickity-lazyload-srcset");
                                            if (e || n || s) return [t]
                                        }
                                        var o = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                                        return i.makeArray(o)
                                    }(t);
                                    o = o.concat(e)
                                })), o.forEach((function(t) {
                                    new s(t, this)
                                }), this)
                            }
                        }, s.prototype.handleEvent = i.handleEvent, s.prototype.load = function() {
                            this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                            var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                                e = this.img.getAttribute("data-flickity-lazyload-srcset");
                            this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
                        }, s.prototype.onload = function(t) {
                            this.complete(t, "flickity-lazyloaded")
                        }, s.prototype.onerror = function(t) {
                            this.complete(t, "flickity-lazyerror")
                        }, s.prototype.complete = function(t, e) {
                            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                            var i = this.flickity.getParentCell(this.img),
                                n = i && i.element;
                            this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
                        }, e.LazyLoader = s, e
                    }(0, t, e)
                }.apply(e, k = [y, u]), window, k = [y, S, C, w, x, D, _], P = "function" == typeof(A = function(t) {
                    return t
                }) ? A.apply(e, k) : A, window, k = [P, u], void 0 === (I = "function" == typeof(A = function(t, e) {
                    t.createMethods.push("_createAsNavFor");
                    var i = t.prototype;
                    return i._createAsNavFor = function() {
                        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
                        var t = this.options.asNavFor;
                        if (t) {
                            var e = this;
                            setTimeout((function() {
                                e.setNavCompanion(t)
                            }))
                        }
                    }, i.setNavCompanion = function(i) {
                        i = e.getQueryElement(i);
                        var n = t.data(i);
                        if (n && n != this) {
                            this.navCompanion = n;
                            var s = this;
                            this.onNavCompanionSelect = function() {
                                s.navCompanionSelect()
                            }, n.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
                        }
                    }, i.navCompanionSelect = function(t) {
                        var e = this.navCompanion && this.navCompanion.selectedCells;
                        if (e) {
                            var i, n = e[0],
                                s = this.navCompanion.cells.indexOf(n),
                                o = s + e.length - 1,
                                r = Math.floor((o - (i = s)) * this.navCompanion.cellAlign + i);
                            if (this.selectCell(r, !1, t), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                                var a = this.cells.slice(s, o + 1);
                                this.navSelectedElements = a.map((function(t) {
                                    return t.element
                                })), this.changeNavSelectedClass("add")
                            }
                        }
                    }, i.changeNavSelectedClass = function(t) {
                        this.navSelectedElements.forEach((function(e) {
                            e.classList[t]("is-nav-selected")
                        }))
                    }, i.activateAsNavFor = function() {
                        this.navCompanionSelect(!0)
                    }, i.removeNavSelectedElements = function() {
                        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
                    }, i.onNavStaticClick = function(t, e, i, n) {
                        "number" == typeof n && this.navCompanion.selectCell(n)
                    }, i.deactivateAsNavFor = function() {
                        this.removeNavSelectedElements()
                    }, i.destroyAsNavFor = function() {
                        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
                    }, t
                }) ? A.apply(e, k) : A) || (t.exports = I),
                function(t, i) {
                    "use strict";
                    L = function(e) {
                        return function(t, e) {
                            var i = t.jQuery,
                                n = t.console;

                            function s(t, e) {
                                for (var i in e) t[i] = e[i];
                                return t
                            }
                            var o = Array.prototype.slice;

                            function r(t, e, a) {
                                if (!(this instanceof r)) return new r(t, e, a);
                                var h, l = t;
                                "string" == typeof t && (l = document.querySelectorAll(t)), l ? (this.elements = (h = l, Array.isArray(h) ? h : "object" == typeof h && "number" == typeof h.length ? o.call(h) : [h]), this.options = s({}, this.options), "function" == typeof e ? a = e : s(this.options, e), a && this.on("always", a), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (l || t))
                            }
                            r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function() {
                                this.images = [], this.elements.forEach(this.addElementImages, this)
                            }, r.prototype.addElementImages = function(t) {
                                "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                                var e = t.nodeType;
                                if (e && a[e]) {
                                    for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                                        var s = i[n];
                                        this.addImage(s)
                                    }
                                    if ("string" == typeof this.options.background) {
                                        var o = t.querySelectorAll(this.options.background);
                                        for (n = 0; n < o.length; n++) {
                                            var r = o[n];
                                            this.addElementBackgroundImages(r)
                                        }
                                    }
                                }
                            };
                            var a = {
                                1: !0,
                                9: !0,
                                11: !0
                            };

                            function h(t) {
                                this.img = t
                            }

                            function l(t, e) {
                                this.url = t, this.element = e, this.img = new Image
                            }
                            return r.prototype.addElementBackgroundImages = function(t) {
                                var e = getComputedStyle(t);
                                if (e)
                                    for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                                        var s = n && n[2];
                                        s && this.addBackground(s, t), n = i.exec(e.backgroundImage)
                                    }
                            }, r.prototype.addImage = function(t) {
                                var e = new h(t);
                                this.images.push(e)
                            }, r.prototype.addBackground = function(t, e) {
                                var i = new l(t, e);
                                this.images.push(i)
                            }, r.prototype.check = function() {
                                var t = this;

                                function e(e, i, n) {
                                    setTimeout((function() {
                                        t.progress(e, i, n)
                                    }))
                                }
                                this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
                                    t.once("progress", e), t.check()
                                })) : this.complete()
                            }, r.prototype.progress = function(t, e, i) {
                                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e)
                            }, r.prototype.complete = function() {
                                var t = this.hasAnyBroken ? "fail" : "done";
                                if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                                    var e = this.hasAnyBroken ? "reject" : "resolve";
                                    this.jqDeferred[e](this)
                                }
                            }, h.prototype = Object.create(e.prototype), h.prototype.check = function() {
                                this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                            }, h.prototype.getIsImageComplete = function() {
                                return this.img.complete && this.img.naturalWidth
                            }, h.prototype.confirm = function(t, e) {
                                this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                            }, h.prototype.handleEvent = function(t) {
                                var e = "on" + t.type;
                                this[e] && this[e](t)
                            }, h.prototype.onload = function() {
                                this.confirm(!0, "onload"), this.unbindEvents()
                            }, h.prototype.onerror = function() {
                                this.confirm(!1, "onerror"), this.unbindEvents()
                            }, h.prototype.unbindEvents = function() {
                                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                            }, l.prototype = Object.create(h.prototype), l.prototype.check = function() {
                                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                            }, l.prototype.unbindEvents = function() {
                                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                            }, l.prototype.confirm = function(t, e) {
                                this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                            }, r.makeJQueryPlugin = function(e) {
                                (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                                    return new r(this, t, e).jqDeferred.promise(i(this))
                                })
                            }, r.makeJQueryPlugin(), r
                        }(t, e)
                    }.apply(e, k = [n])
                }("undefined" != typeof window ? window : this), window, void 0 === (I = function(t, e) {
                    return function(t, e, i) {
                        "use strict";
                        e.createMethods.push("_createImagesLoaded");
                        var n = e.prototype;
                        return n._createImagesLoaded = function() {
                            this.on("activate", this.imagesLoaded)
                        }, n.imagesLoaded = function() {
                            if (this.options.imagesLoaded) {
                                var t = this;
                                i(this.slider).on("progress", (function(e, i) {
                                    var n = t.getParentCell(i.img);
                                    t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected()
                                }))
                            }
                        }, e
                    }(0, t, e)
                }.apply(e, k = [P, L])) || (t.exports = I)
        }
    }
]);