var Plaid = (function(e) {
	function __webpack_require__(n) {
		if (t[n]) return t[n].exports;
		var r = (t[n] = { i: n, l: !1, exports: {} });
		return e[n].call(r.exports, r, r.exports, __webpack_require__), (r.l = !0), r.exports;
	}
	var t = {};
	return (
		(__webpack_require__.m = e),
		(__webpack_require__.c = t),
		(__webpack_require__.i = function(e) {
			return e;
		}),
		(__webpack_require__.d = function(e, t, n) {
			__webpack_require__.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: n });
		}),
		(__webpack_require__.n = function(e) {
			var t =
				e && e.__esModule
					? function() {
							return e.default;
					  }
					: function() {
							return e;
					  };
			return __webpack_require__.d(t, 'a', t), t;
		}),
		(__webpack_require__.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t);
		}),
		(__webpack_require__.p = 'https://cdn.plaid.com/link/2.0.115'),
		__webpack_require__((__webpack_require__.s = 953))
	);
})({
	103: function(e, t, n) {
		e.exports = { default: n(270), __esModule: !0 };
	},
	104: function(e, t, n) {
		e.exports = { default: n(272), __esModule: !0 };
	},
	105: function(e, t) {
		e.exports = !0;
	},
	106: function(e, t) {
		var n = 0,
			r = Math.random();
		e.exports = function(e) {
			return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36));
		};
	},
	107: function(e, t, n) {
		'use strict';
		var r = n(285)(!0);
		n(146)(
			String,
			'String',
			function(e) {
				(this._t = String(e)), (this._i = 0);
			},
			function() {
				var e,
					t = this._t,
					n = this._i;
				return n >= t.length
					? { value: void 0, done: !0 }
					: ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
			}
		);
	},
	108: function(e, t, n) {
		var r = n(49),
			o = n(196),
			i = n(194),
			s = n(34),
			a = n(119),
			c = n(156),
			u = {},
			l = {},
			t = (e.exports = function(e, t, n, f, p) {
				var d,
					$,
					m,
					h,
					b = p
						? function() {
								return e;
						  }
						: c(e),
					v = r(n, f, t ? 2 : 1),
					y = 0;
				if ('function' != typeof b) throw TypeError(e + ' is not iterable!');
				if (i(b)) {
					for (d = a(e.length); d > y; y++)
						if ((h = t ? v(s(($ = e[y]))[0], $[1]) : v(e[y])) === u || h === l) return h;
				} else
					for (m = b.call(e); !($ = m.next()).done; )
						if ((h = o(m, v, $.value, t)) === u || h === l) return h;
			});
		(t.BREAK = u), (t.RETURN = l);
	},
	118: function(e, t, n) {
		var r = n(34),
			o = n(283),
			i = n(126),
			s = n(129)('IE_PROTO'),
			a = function() {},
			c = function() {
				var e,
					t = n(125)('iframe'),
					r = i.length;
				for (
					t.style.display = 'none',
						n(181).appendChild(t),
						t.src = 'javascript:',
						e = t.contentWindow.document,
						e.open(),
						e.write('<script>document.F=Object</script>'),
						e.close(),
						c = e.F;
					r--;

				)
					delete c.prototype[i[r]];
				return c();
			};
		e.exports =
			Object.create ||
			function(e, t) {
				var n;
				return (
					null !== e ? ((a.prototype = r(e)), (n = new a()), (a.prototype = null), (n[s] = e)) : (n = c()),
					void 0 === t ? n : o(n, t)
				);
			};
	},
	119: function(e, t, n) {
		var r = n(131),
			o = Math.min;
		e.exports = function(e) {
			return e > 0 ? o(r(e), 9007199254740991) : 0;
		};
	},
	120: function(e, t, n) {
		n(288);
		for (
			var r = n(18),
				o = n(45),
				i = n(78),
				s = n(19)('toStringTag'),
				a = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
					','
				),
				c = 0;
			c < a.length;
			c++
		) {
			var u = a[c],
				l = r[u],
				f = l && l.prototype;
			f && !f[s] && o(f, s, u), (i[u] = i.Array);
		}
	},
	121: function(e, t, n) {
		(function(r, o) {
			var i;
			(function() {
				'use strict';
				function lib$es6$promise$utils$$objectOrFunction(e) {
					return 'function' == typeof e || ('object' == typeof e && null !== e);
				}
				function lib$es6$promise$utils$$isFunction(e) {
					return 'function' == typeof e;
				}
				function lib$es6$promise$asap$$setScheduler(e) {
					c = e;
				}
				function lib$es6$promise$asap$$setAsap(e) {
					p = e;
				}
				function lib$es6$promise$asap$$useVertxTimer() {
					return function() {
						a(lib$es6$promise$asap$$flush);
					};
				}
				function lib$es6$promise$asap$$useSetTimeout() {
					return function() {
						setTimeout(lib$es6$promise$asap$$flush, 1);
					};
				}
				function lib$es6$promise$asap$$flush() {
					for (var e = 0; e < f; e += 2) {
						(0, v[e])(v[e + 1]), (v[e] = void 0), (v[e + 1] = void 0);
					}
					f = 0;
				}
				function lib$es6$promise$then$$then(e, t) {
					var n = this,
						r = new this.constructor(lib$es6$promise$$internal$$noop);
					void 0 === r[g] && lib$es6$promise$$internal$$makePromise(r);
					var o = n._state;
					if (o) {
						var i = arguments[o - 1];
						p(function() {
							lib$es6$promise$$internal$$invokeCallback(o, r, i, n._result);
						});
					} else lib$es6$promise$$internal$$subscribe(n, r, e, t);
					return r;
				}
				function lib$es6$promise$promise$resolve$$resolve(e) {
					var t = this;
					if (e && 'object' == typeof e && e.constructor === t) return e;
					var n = new t(lib$es6$promise$$internal$$noop);
					return lib$es6$promise$$internal$$resolve(n, e), n;
				}
				function lib$es6$promise$$internal$$noop() {}
				function lib$es6$promise$$internal$$selfFulfillment() {
					return new TypeError('You cannot resolve a promise with itself');
				}
				function lib$es6$promise$$internal$$cannotReturnOwn() {
					return new TypeError('A promises callback cannot return that same promise.');
				}
				function lib$es6$promise$$internal$$getThen(e) {
					try {
						return e.then;
					} catch (e) {
						return (k.error = e), k;
					}
				}
				function lib$es6$promise$$internal$$tryThen(e, t, n, r) {
					try {
						e.call(t, n, r);
					} catch (e) {
						return e;
					}
				}
				function lib$es6$promise$$internal$$handleForeignThenable(e, t, n) {
					p(function(e) {
						var r = !1,
							o = lib$es6$promise$$internal$$tryThen(
								n,
								t,
								function(n) {
									r ||
										((r = !0),
										t !== n
											? lib$es6$promise$$internal$$resolve(e, n)
											: lib$es6$promise$$internal$$fulfill(e, n));
								},
								function(t) {
									r || ((r = !0), lib$es6$promise$$internal$$reject(e, t));
								},
								'Settle: ' + (e._label || ' unknown promise')
							);
						!r && o && ((r = !0), lib$es6$promise$$internal$$reject(e, o));
					}, e);
				}
				function lib$es6$promise$$internal$$handleOwnThenable(e, t) {
					t._state === x
						? lib$es6$promise$$internal$$fulfill(e, t._result)
						: t._state === S
						? lib$es6$promise$$internal$$reject(e, t._result)
						: lib$es6$promise$$internal$$subscribe(
								t,
								void 0,
								function(t) {
									lib$es6$promise$$internal$$resolve(e, t);
								},
								function(t) {
									lib$es6$promise$$internal$$reject(e, t);
								}
						  );
				}
				function lib$es6$promise$$internal$$handleMaybeThenable(e, t, n) {
					t.constructor === e.constructor && n === y && constructor.resolve === w
						? lib$es6$promise$$internal$$handleOwnThenable(e, t)
						: n === k
						? lib$es6$promise$$internal$$reject(e, k.error)
						: void 0 === n
						? lib$es6$promise$$internal$$fulfill(e, t)
						: lib$es6$promise$utils$$isFunction(n)
						? lib$es6$promise$$internal$$handleForeignThenable(e, t, n)
						: lib$es6$promise$$internal$$fulfill(e, t);
				}
				function lib$es6$promise$$internal$$resolve(e, t) {
					e === t
						? lib$es6$promise$$internal$$reject(e, lib$es6$promise$$internal$$selfFulfillment())
						: lib$es6$promise$utils$$objectOrFunction(t)
						? lib$es6$promise$$internal$$handleMaybeThenable(e, t, lib$es6$promise$$internal$$getThen(t))
						: lib$es6$promise$$internal$$fulfill(e, t);
				}
				function lib$es6$promise$$internal$$publishRejection(e) {
					e._onerror && e._onerror(e._result), lib$es6$promise$$internal$$publish(e);
				}
				function lib$es6$promise$$internal$$fulfill(e, t) {
					e._state === _ &&
						((e._result = t),
						(e._state = x),
						0 !== e._subscribers.length && p(lib$es6$promise$$internal$$publish, e));
				}
				function lib$es6$promise$$internal$$reject(e, t) {
					e._state === _ &&
						((e._state = S), (e._result = t), p(lib$es6$promise$$internal$$publishRejection, e));
				}
				function lib$es6$promise$$internal$$subscribe(e, t, n, r) {
					var o = e._subscribers,
						i = o.length;
					(e._onerror = null),
						(o[i] = t),
						(o[i + x] = n),
						(o[i + S] = r),
						0 === i && e._state && p(lib$es6$promise$$internal$$publish, e);
				}
				function lib$es6$promise$$internal$$publish(e) {
					var t = e._subscribers,
						n = e._state;
					if (0 !== t.length) {
						for (var r, o, i = e._result, s = 0; s < t.length; s += 3)
							(r = t[s]),
								(o = t[s + n]),
								r ? lib$es6$promise$$internal$$invokeCallback(n, r, o, i) : o(i);
						e._subscribers.length = 0;
					}
				}
				function lib$es6$promise$$internal$$ErrorObject() {
					this.error = null;
				}
				function lib$es6$promise$$internal$$tryCatch(e, t) {
					try {
						return e(t);
					} catch (e) {
						return (P.error = e), P;
					}
				}
				function lib$es6$promise$$internal$$invokeCallback(e, t, n, r) {
					var o,
						i,
						s,
						a,
						c = lib$es6$promise$utils$$isFunction(n);
					if (c) {
						if (
							((o = lib$es6$promise$$internal$$tryCatch(n, r)),
							o === P ? ((a = !0), (i = o.error), (o = null)) : (s = !0),
							t === o)
						)
							return void lib$es6$promise$$internal$$reject(
								t,
								lib$es6$promise$$internal$$cannotReturnOwn()
							);
					} else (o = r), (s = !0);
					t._state !== _ ||
						(c && s
							? lib$es6$promise$$internal$$resolve(t, o)
							: a
							? lib$es6$promise$$internal$$reject(t, i)
							: e === x
							? lib$es6$promise$$internal$$fulfill(t, o)
							: e === S && lib$es6$promise$$internal$$reject(t, o));
				}
				function lib$es6$promise$$internal$$initializePromise(e, t) {
					try {
						t(
							function(t) {
								lib$es6$promise$$internal$$resolve(e, t);
							},
							function(t) {
								lib$es6$promise$$internal$$reject(e, t);
							}
						);
					} catch (t) {
						lib$es6$promise$$internal$$reject(e, t);
					}
				}
				function lib$es6$promise$$internal$$nextId() {
					return O++;
				}
				function lib$es6$promise$$internal$$makePromise(e) {
					(e[g] = O++), (e._state = void 0), (e._result = void 0), (e._subscribers = []);
				}
				function lib$es6$promise$promise$all$$all(e) {
					return new A(this, e).promise;
				}
				function lib$es6$promise$promise$race$$race(e) {
					var t = this;
					return new t(
						l(e)
							? function(n, r) {
									for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r);
							  }
							: function(e, t) {
									t(new TypeError('You must pass an array to race.'));
							  }
					);
				}
				function lib$es6$promise$promise$reject$$reject(e) {
					var t = this,
						n = new t(lib$es6$promise$$internal$$noop);
					return lib$es6$promise$$internal$$reject(n, e), n;
				}
				function lib$es6$promise$promise$$needsResolver() {
					throw new TypeError(
						'You must pass a resolver function as the first argument to the promise constructor'
					);
				}
				function lib$es6$promise$promise$$needsNew() {
					throw new TypeError(
						"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
					);
				}
				function lib$es6$promise$promise$$Promise(e) {
					(this[g] = lib$es6$promise$$internal$$nextId()),
						(this._result = this._state = void 0),
						(this._subscribers = []),
						lib$es6$promise$$internal$$noop !== e &&
							('function' != typeof e && lib$es6$promise$promise$$needsResolver(),
							this instanceof lib$es6$promise$promise$$Promise
								? lib$es6$promise$$internal$$initializePromise(this, e)
								: lib$es6$promise$promise$$needsNew());
				}
				function lib$es6$promise$enumerator$$Enumerator(e, t) {
					(this._instanceConstructor = e),
						(this.promise = new e(lib$es6$promise$$internal$$noop)),
						this.promise[g] || lib$es6$promise$$internal$$makePromise(this.promise),
						l(t)
							? ((this._input = t),
							  (this.length = t.length),
							  (this._remaining = t.length),
							  (this._result = new Array(this.length)),
							  0 === this.length
									? lib$es6$promise$$internal$$fulfill(this.promise, this._result)
									: ((this.length = this.length || 0),
									  this._enumerate(),
									  0 === this._remaining &&
											lib$es6$promise$$internal$$fulfill(this.promise, this._result)))
							: lib$es6$promise$$internal$$reject(
									this.promise,
									lib$es6$promise$enumerator$$validationError()
							  );
				}
				function lib$es6$promise$enumerator$$validationError() {
					return new Error('Array Methods must be provided an Array');
				}
				function lib$es6$promise$polyfill$$polyfill() {
					var e;
					if (void 0 !== o) e = o;
					else if ('undefined' != typeof self) e = self;
					else
						try {
							e = Function('return this')();
						} catch (e) {
							throw new Error('polyfill failed because global object is unavailable in this environment');
						}
					var t = e.Promise;
					(t && '[object Promise]' === Object.prototype.toString.call(t.resolve()) && !t.cast) ||
						(e.Promise = T);
				}
				var s;
				s = Array.isArray
					? Array.isArray
					: function(e) {
							return '[object Array]' === Object.prototype.toString.call(e);
					  };
				var a,
					c,
					u,
					l = s,
					f = 0,
					p = function(e, t) {
						(v[f] = e), (v[f + 1] = t), 2 === (f += 2) && (c ? c(lib$es6$promise$asap$$flush) : u());
					},
					d = 'undefined' != typeof window ? window : void 0,
					$ = d || {},
					m = $.MutationObserver || $.WebKitMutationObserver,
					h = 'undefined' == typeof self && void 0 !== r && '[object process]' === {}.toString.call(r),
					b =
						'undefined' != typeof Uint8ClampedArray &&
						'undefined' != typeof importScripts &&
						'undefined' != typeof MessageChannel,
					v = new Array(1e3);
				u = h
					? (function() {
							return function() {
								r.nextTick(lib$es6$promise$asap$$flush);
							};
					  })()
					: m
					? (function() {
							var e = 0,
								t = new m(lib$es6$promise$asap$$flush),
								n = document.createTextNode('');
							return (
								t.observe(n, { characterData: !0 }),
								function() {
									n.data = e = ++e % 2;
								}
							);
					  })()
					: b
					? (function() {
							var e = new MessageChannel();
							return (
								(e.port1.onmessage = lib$es6$promise$asap$$flush),
								function() {
									e.port2.postMessage(0);
								}
							);
					  })()
					: void 0 === d
					? (function() {
							try {
								var e = n(378);
								return (a = e.runOnLoop || e.runOnContext), lib$es6$promise$asap$$useVertxTimer();
							} catch (e) {
								return lib$es6$promise$asap$$useSetTimeout();
							}
					  })()
					: lib$es6$promise$asap$$useSetTimeout();
				var y = lib$es6$promise$then$$then,
					w = lib$es6$promise$promise$resolve$$resolve,
					g = Math.random()
						.toString(36)
						.substring(16),
					_ = void 0,
					x = 1,
					S = 2,
					k = new lib$es6$promise$$internal$$ErrorObject(),
					P = new lib$es6$promise$$internal$$ErrorObject(),
					O = 0,
					E = lib$es6$promise$promise$all$$all,
					I = lib$es6$promise$promise$race$$race,
					j = lib$es6$promise$promise$reject$$reject,
					T = lib$es6$promise$promise$$Promise;
				(lib$es6$promise$promise$$Promise.all = E),
					(lib$es6$promise$promise$$Promise.race = I),
					(lib$es6$promise$promise$$Promise.resolve = w),
					(lib$es6$promise$promise$$Promise.reject = j),
					(lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler),
					(lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap),
					(lib$es6$promise$promise$$Promise._asap = p),
					(lib$es6$promise$promise$$Promise.prototype = {
						constructor: lib$es6$promise$promise$$Promise,
						then: y,
						catch: function(e) {
							return this.then(null, e);
						},
					});
				var A = lib$es6$promise$enumerator$$Enumerator;
				(lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
					for (var e = this.length, t = this._input, n = 0; this._state === _ && n < e; n++)
						this._eachEntry(t[n], n);
				}),
					(lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(e, t) {
						var n = this._instanceConstructor,
							r = n.resolve;
						if (r === w) {
							var o = lib$es6$promise$$internal$$getThen(e);
							if (o === y && e._state !== _) this._settledAt(e._state, t, e._result);
							else if ('function' != typeof o) this._remaining--, (this._result[t] = e);
							else if (n === T) {
								var i = new n(lib$es6$promise$$internal$$noop);
								lib$es6$promise$$internal$$handleMaybeThenable(i, e, o), this._willSettleAt(i, t);
							} else
								this._willSettleAt(
									new n(function(t) {
										t(e);
									}),
									t
								);
						} else this._willSettleAt(r(e), t);
					}),
					(lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(e, t, n) {
						var r = this.promise;
						r._state === _ &&
							(this._remaining--,
							e === S ? lib$es6$promise$$internal$$reject(r, n) : (this._result[t] = n)),
							0 === this._remaining && lib$es6$promise$$internal$$fulfill(r, this._result);
					}),
					(lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(e, t) {
						var n = this;
						lib$es6$promise$$internal$$subscribe(
							e,
							void 0,
							function(e) {
								n._settledAt(x, t, e);
							},
							function(e) {
								n._settledAt(S, t, e);
							}
						);
					});
				var L = lib$es6$promise$polyfill$$polyfill,
					M = { Promise: T, polyfill: L };
				void 0 !==
					(i = function() {
						return M;
					}.call(t, n, t, e)) && (e.exports = i),
					L();
			}.call(this));
		}.call(t, n(336), n(54)));
	},
	124: function(e, t) {
		e.exports = function(e) {
			if (void 0 == e) throw TypeError("Can't call method on  " + e);
			return e;
		};
	},
	125: function(e, t, n) {
		var r = n(30),
			o = n(18).document,
			i = r(o) && r(o.createElement);
		e.exports = function(e) {
			return i ? o.createElement(e) : {};
		};
	},
	126: function(e, t) {
		e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
			','
		);
	},
	127: function(e, t, n) {
		'use strict';
		function PromiseCapability(e) {
			var t, n;
			(this.promise = new e(function(e, r) {
				if (void 0 !== t || void 0 !== n) throw TypeError('Bad Promise constructor');
				(t = e), (n = r);
			})),
				(this.resolve = r(t)),
				(this.reject = r(n));
		}
		var r = n(86);
		e.exports.f = function(e) {
			return new PromiseCapability(e);
		};
	},
	128: function(e, t) {
		t.f = Object.getOwnPropertySymbols;
	},
	129: function(e, t, n) {
		var r = n(130)('keys'),
			o = n(106);
		e.exports = function(e) {
			return r[e] || (r[e] = o(e));
		};
	},
	130: function(e, t, n) {
		var r = n(18),
			o = r['__core-js_shared__'] || (r['__core-js_shared__'] = {});
		e.exports = function(e) {
			return o[e] || (o[e] = {});
		};
	},
	131: function(e, t) {
		var n = Math.ceil,
			r = Math.floor;
		e.exports = function(e) {
			return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
		};
	},
	132: function(e, t, n) {
		var r = n(30);
		e.exports = function(e, t) {
			if (!r(e)) return e;
			var n, o;
			if (t && 'function' == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
			if ('function' == typeof (n = e.valueOf) && !r((o = n.call(e)))) return o;
			if (!t && 'function' == typeof (n = e.toString) && !r((o = n.call(e)))) return o;
			throw TypeError("Can't convert object to primitive value");
		};
	},
	133: function(e, t, n) {
		var r = n(18),
			o = n(15),
			i = n(105),
			s = n(134),
			a = n(31).f;
		e.exports = function(e) {
			var t = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
			'_' == e.charAt(0) || e in t || a(t, e, { value: s.f(e) });
		};
	},
	134: function(e, t, n) {
		t.f = n(19);
	},
	14: function(e, t, n) {
		'use strict';
		function toObject(e) {
			if (null === e || void 0 === e)
				throw new TypeError('Object.assign cannot be called with null or undefined');
			return Object(e);
		}
		var r = Object.getOwnPropertySymbols,
			o = Object.prototype.hasOwnProperty,
			i = Object.prototype.propertyIsEnumerable;
		e.exports = (function() {
			try {
				if (!Object.assign) return !1;
				var e = new String('abc');
				if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1;
				for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n;
				if (
					'0123456789' !==
					Object.getOwnPropertyNames(t)
						.map(function(e) {
							return t[e];
						})
						.join('')
				)
					return !1;
				var r = {};
				return (
					'abcdefghijklmnopqrst'.split('').forEach(function(e) {
						r[e] = e;
					}),
					'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, r)).join('')
				);
			} catch (e) {
				return !1;
			}
		})()
			? Object.assign
			: function(e, t) {
					for (var n, s, a = toObject(e), c = 1; c < arguments.length; c++) {
						n = Object(arguments[c]);
						for (var u in n) o.call(n, u) && (a[u] = n[u]);
						if (r) {
							s = r(n);
							for (var l = 0; l < s.length; l++) i.call(n, s[l]) && (a[s[l]] = n[s[l]]);
						}
					}
					return a;
			  };
	},
	144: function(e, t, n) {
		var r = n(77),
			o = n(19)('toStringTag'),
			i =
				'Arguments' ==
				r(
					(function() {
						return arguments;
					})()
				),
			s = function(e, t) {
				try {
					return e[t];
				} catch (e) {}
			};
		e.exports = function(e) {
			var t, n, a;
			return void 0 === e
				? 'Undefined'
				: null === e
				? 'Null'
				: 'string' == typeof (n = s((t = Object(e)), o))
				? n
				: i
				? r(t)
				: 'Object' == (a = r(t)) && 'function' == typeof t.callee
				? 'Arguments'
				: a;
		};
	},
	145: function(e, t, n) {
		var r = n(77);
		e.exports = Object('z').propertyIsEnumerable(0)
			? Object
			: function(e) {
					return 'String' == r(e) ? e.split('') : Object(e);
			  };
	},
	146: function(e, t, n) {
		'use strict';
		var r = n(105),
			o = n(25),
			i = n(187),
			s = n(45),
			a = n(50),
			c = n(78),
			u = n(280),
			l = n(88),
			f = n(200),
			p = n(19)('iterator'),
			d = !([].keys && 'next' in [].keys()),
			$ = function() {
				return this;
			};
		e.exports = function(e, t, n, m, h, b, v) {
			u(n, t, m);
			var y,
				w,
				g,
				_ = function(e) {
					if (!d && e in P) return P[e];
					switch (e) {
						case 'keys':
						case 'values':
							return function() {
								return new n(this, e);
							};
					}
					return function() {
						return new n(this, e);
					};
				},
				x = t + ' Iterator',
				S = 'values' == h,
				k = !1,
				P = e.prototype,
				O = P[p] || P['@@iterator'] || (h && P[h]),
				E = (!d && O) || _(h),
				I = h ? (S ? _('entries') : E) : void 0,
				j = 'Array' == t ? P.entries || O : O;
			if (
				(j &&
					(g = f(j.call(new e()))) !== Object.prototype &&
					g.next &&
					(l(g, x, !0), r || a(g, p) || s(g, p, $)),
				S &&
					O &&
					'values' !== O.name &&
					((k = !0),
					(E = function() {
						return O.call(this);
					})),
				(r && !v) || (!d && !k && P[p]) || s(P, p, E),
				(c[t] = E),
				(c[x] = $),
				h)
			)
				if (((y = { values: S ? E : _('values'), keys: b ? E : _('keys'), entries: I }), v))
					for (w in y) w in P || i(P, w, y[w]);
				else o(o.P + o.F * (d || k), t, y);
			return y;
		};
	},
	147: function(e, t) {},
	148: function(e, t, n) {
		'use strict';
		function encode(e, t) {
			return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
		}
		var r = n(376),
			o = n(14);
		(t.extract = function(e) {
			return e.split('?')[1] || '';
		}),
			(t.parse = function(e) {
				var t = Object.create(null);
				return 'string' != typeof e
					? t
					: (e = e.trim().replace(/^(\?|#|&)/, ''))
					? (e.split('&').forEach(function(e) {
							var n = e.replace(/\+/g, ' ').split('='),
								r = n.shift(),
								o = n.length > 0 ? n.join('=') : void 0;
							(r = decodeURIComponent(r)),
								(o = void 0 === o ? null : decodeURIComponent(o)),
								void 0 === t[r] ? (t[r] = o) : Array.isArray(t[r]) ? t[r].push(o) : (t[r] = [t[r], o]);
					  }),
					  t)
					: t;
			}),
			(t.stringify = function(e, t) {
				return (
					(t = o({ encode: !0, strict: !0 }, t)),
					e
						? Object.keys(e)
								.sort()
								.map(function(n) {
									var r = e[n];
									if (void 0 === r) return '';
									if (null === r) return encode(n, t);
									if (Array.isArray(r)) {
										var o = [];
										return (
											r.slice().forEach(function(e) {
												void 0 !== e &&
													(null === e
														? o.push(encode(n, t))
														: o.push(encode(n, t) + '=' + encode(e, t)));
											}),
											o.join('&')
										);
									}
									return encode(n, t) + '=' + encode(r, t);
								})
								.filter(function(e) {
									return e.length > 0;
								})
								.join('&')
						: ''
				);
			});
	},
	15: function(e, t) {
		var n = (e.exports = { version: '2.5.3' });
		'number' == typeof __e && (__e = n);
	},
	153: function(e, t) {
		e.exports = function(e, t, n, r) {
			if (!(e instanceof t) || (void 0 !== r && r in e)) throw TypeError(n + ': incorrect invocation!');
			return e;
		};
	},
	154: function(e, t, n) {
		var r = n(106)('meta'),
			o = n(30),
			i = n(50),
			s = n(31).f,
			a = 0,
			c =
				Object.isExtensible ||
				function() {
					return !0;
				},
			u = !n(55)(function() {
				return c(Object.preventExtensions({}));
			}),
			l = function(e) {
				s(e, r, { value: { i: 'O' + ++a, w: {} } });
			},
			f = function(e, t) {
				if (!o(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
				if (!i(e, r)) {
					if (!c(e)) return 'F';
					if (!t) return 'E';
					l(e);
				}
				return e[r].i;
			},
			p = function(e, t) {
				if (!i(e, r)) {
					if (!c(e)) return !0;
					if (!t) return !1;
					l(e);
				}
				return e[r].w;
			},
			d = function(e) {
				return u && $.NEED && c(e) && !i(e, r) && l(e), e;
			},
			$ = (e.exports = { KEY: r, NEED: !1, fastKey: f, getWeak: p, onFreeze: d });
	},
	155: function(e, t, n) {
		var r = n(45);
		e.exports = function(e, t, n) {
			for (var o in t) n && e[o] ? (e[o] = t[o]) : r(e, o, t[o]);
			return e;
		};
	},
	156: function(e, t, n) {
		var r = n(144),
			o = n(19)('iterator'),
			i = n(78);
		e.exports = n(15).getIteratorMethod = function(e) {
			if (void 0 != e) return e[o] || e['@@iterator'] || i[r(e)];
		};
	},
	179: function(e, t, n) {
		'use strict';
		e.exports = function() {
			var e = window.navigator || {},
				t = e.language || e.userLanguage || '',
				n = /windows phone/i.test(e.userAgent),
				r = /android|silk/i.test(e.userAgent) && !n,
				o = /MSIE |Trident/i.test(e.userAgent),
				i = null != e.appVersion && -1 !== e.appVersion.indexOf('MSIE 10'),
				s = /iPad|iPhone|iPod/.test(e.userAgent) && !window.MSStream && !n;
			return {
				browserLanguage: t,
				isAndroid: r,
				isIE: o,
				isIE10: i,
				isIOS: s,
				isIOSChrome: /CriOS/.test(e.userAgent),
				isMobile: s || r || n || /Mobi/i.test(e.userAgent),
			};
		};
	},
	18: function(e, t) {
		var n = (e.exports =
			'undefined' != typeof window && window.Math == Math
				? window
				: 'undefined' != typeof self && self.Math == Math
				? self
				: Function('return this')());
		'number' == typeof __g && (__g = n);
	},
	181: function(e, t, n) {
		var r = n(18).document;
		e.exports = r && r.documentElement;
	},
	182: function(e, t, n) {
		e.exports =
			!n(35) &&
			!n(55)(function() {
				return (
					7 !=
					Object.defineProperty(n(125)('div'), 'a', {
						get: function() {
							return 7;
						},
					}).a
				);
			});
	},
	183: function(e, t, n) {
		var r = n(184),
			o = n(126).concat('length', 'prototype');
		t.f =
			Object.getOwnPropertyNames ||
			function(e) {
				return r(e, o);
			};
	},
	184: function(e, t, n) {
		var r = n(50),
			o = n(56),
			i = n(277)(!1),
			s = n(129)('IE_PROTO');
		e.exports = function(e, t) {
			var n,
				a = o(e),
				c = 0,
				u = [];
			for (n in a) n != s && r(a, n) && u.push(n);
			for (; t.length > c; ) r(a, (n = t[c++])) && (~i(u, n) || u.push(n));
			return u;
		};
	},
	185: function(e, t) {
		e.exports = function(e) {
			try {
				return { e: !1, v: e() };
			} catch (e) {
				return { e: !0, v: e };
			}
		};
	},
	186: function(e, t, n) {
		var r = n(34),
			o = n(30),
			i = n(127);
		e.exports = function(e, t) {
			if ((r(e), o(t) && t.constructor === e)) return t;
			var n = i.f(e);
			return (0, n.resolve)(t), n.promise;
		};
	},
	187: function(e, t, n) {
		e.exports = n(45);
	},
	188: function(e, t, n) {
		var r = n(34),
			o = n(86),
			i = n(19)('species');
		e.exports = function(e, t) {
			var n,
				s = r(e).constructor;
			return void 0 === s || void 0 == (n = r(s)[i]) ? t : o(n);
		};
	},
	189: function(e, t, n) {
		var r,
			o,
			i,
			s = n(49),
			a = n(279),
			c = n(181),
			u = n(125),
			l = n(18),
			f = l.process,
			p = l.setImmediate,
			d = l.clearImmediate,
			$ = l.MessageChannel,
			m = l.Dispatch,
			h = 0,
			b = {},
			v = function() {
				var e = +this;
				if (b.hasOwnProperty(e)) {
					var t = b[e];
					delete b[e], t();
				}
			},
			y = function(e) {
				v.call(e.data);
			};
		(p && d) ||
			((p = function(e) {
				for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
				return (
					(b[++h] = function() {
						a('function' == typeof e ? e : Function(e), t);
					}),
					r(h),
					h
				);
			}),
			(d = function(e) {
				delete b[e];
			}),
			'process' == n(77)(f)
				? (r = function(e) {
						f.nextTick(s(v, e, 1));
				  })
				: m && m.now
				? (r = function(e) {
						m.now(s(v, e, 1));
				  })
				: $
				? ((o = new $()), (i = o.port2), (o.port1.onmessage = y), (r = s(i.postMessage, i, 1)))
				: l.addEventListener && 'function' == typeof postMessage && !l.importScripts
				? ((r = function(e) {
						l.postMessage(e + '', '*');
				  }),
				  l.addEventListener('message', y, !1))
				: (r =
						'onreadystatechange' in u('script')
							? function(e) {
									c.appendChild(u('script')).onreadystatechange = function() {
										c.removeChild(this), v.call(e);
									};
							  }
							: function(e) {
									setTimeout(s(v, e, 1), 0);
							  })),
			(e.exports = { set: p, clear: d });
	},
	19: function(e, t, n) {
		var r = n(130)('wks'),
			o = n(106),
			i = n(18).Symbol,
			s = 'function' == typeof i;
		(e.exports = function(e) {
			return r[e] || (r[e] = (s && i[e]) || (s ? i : o)('Symbol.' + e));
		}).store = r;
	},
	194: function(e, t, n) {
		var r = n(78),
			o = n(19)('iterator'),
			i = Array.prototype;
		e.exports = function(e) {
			return void 0 !== e && (r.Array === e || i[o] === e);
		};
	},
	195: function(e, t, n) {
		var r = n(77);
		e.exports =
			Array.isArray ||
			function(e) {
				return 'Array' == r(e);
			};
	},
	196: function(e, t, n) {
		var r = n(34);
		e.exports = function(e, t, n, o) {
			try {
				return o ? t(r(n)[0], n[1]) : t(n);
			} catch (t) {
				var i = e.return;
				throw (void 0 !== i && r(i.call(e)), t);
			}
		};
	},
	197: function(e, t, n) {
		var r = n(19)('iterator'),
			o = !1;
		try {
			var i = [7][r]();
			(i.return = function() {
				o = !0;
			}),
				Array.from(i, function() {
					throw 2;
				});
		} catch (e) {}
		e.exports = function(e, t) {
			if (!t && !o) return !1;
			var n = !1;
			try {
				var i = [7],
					s = i[r]();
				(s.next = function() {
					return { done: (n = !0) };
				}),
					(i[r] = function() {
						return s;
					}),
					e(i);
			} catch (e) {}
			return n;
		};
	},
	198: function(e, t) {
		e.exports = function(e, t) {
			return { value: t, done: !!e };
		};
	},
	199: function(e, t, n) {
		var r = n(90),
			o = n(87),
			i = n(56),
			s = n(132),
			a = n(50),
			c = n(182),
			u = Object.getOwnPropertyDescriptor;
		t.f = n(35)
			? u
			: function(e, t) {
					if (((e = i(e)), (t = s(t, !0)), c))
						try {
							return u(e, t);
						} catch (e) {}
					if (a(e, t)) return o(!r.f.call(e, t), e[t]);
			  };
	},
	200: function(e, t, n) {
		var r = n(50),
			o = n(79),
			i = n(129)('IE_PROTO'),
			s = Object.prototype;
		e.exports =
			Object.getPrototypeOf ||
			function(e) {
				return (
					(e = o(e)),
					r(e, i)
						? e[i]
						: 'function' == typeof e.constructor && e instanceof e.constructor
						? e.constructor.prototype
						: e instanceof Object
						? s
						: null
				);
			};
	},
	201: function(e, t, n) {
		var r = n(25),
			o = n(15),
			i = n(55);
		e.exports = function(e, t) {
			var n = (o.Object || {})[e] || Object[e],
				s = {};
			(s[e] = t(n)),
				r(
					r.S +
						r.F *
							i(function() {
								n(1);
							}),
					'Object',
					s
				);
		};
	},
	202: function(e, t, n) {
		'use strict';
		var r = n(18),
			o = n(15),
			i = n(31),
			s = n(35),
			a = n(19)('species');
		e.exports = function(e) {
			var t = 'function' == typeof o[e] ? o[e] : r[e];
			s &&
				t &&
				!t[a] &&
				i.f(t, a, {
					configurable: !0,
					get: function() {
						return this;
					},
				});
		};
	},
	25: function(e, t, n) {
		var r = n(18),
			o = n(15),
			i = n(49),
			s = n(45),
			a = function(e, t, n) {
				var c,
					u,
					l,
					f = e & a.F,
					p = e & a.G,
					d = e & a.S,
					$ = e & a.P,
					m = e & a.B,
					h = e & a.W,
					b = p ? o : o[t] || (o[t] = {}),
					v = b.prototype,
					y = p ? r : d ? r[t] : (r[t] || {}).prototype;
				p && (n = t);
				for (c in n)
					((u = !f && y && void 0 !== y[c]) && c in b) ||
						((l = u ? y[c] : n[c]),
						(b[c] =
							p && 'function' != typeof y[c]
								? n[c]
								: m && u
								? i(l, r)
								: h && y[c] == l
								? (function(e) {
										var t = function(t, n, r) {
											if (this instanceof e) {
												switch (arguments.length) {
													case 0:
														return new e();
													case 1:
														return new e(t);
													case 2:
														return new e(t, n);
												}
												return new e(t, n, r);
											}
											return e.apply(this, arguments);
										};
										return (t.prototype = e.prototype), t;
								  })(l)
								: $ && 'function' == typeof l
								? i(Function.call, l)
								: l),
						$ && (((b.virtual || (b.virtual = {}))[c] = l), e & a.R && v && !v[c] && s(v, c, l)));
			};
		(a.F = 1), (a.G = 2), (a.S = 4), (a.P = 8), (a.B = 16), (a.W = 32), (a.U = 64), (a.R = 128), (e.exports = a);
	},
	264: function(e, t, n) {
		e.exports = { default: n(271), __esModule: !0 };
	},
	266: function(e, t, n) {
		e.exports = { default: n(274), __esModule: !0 };
	},
	267: function(e, t, n) {
		e.exports = { default: n(275), __esModule: !0 };
	},
	270: function(e, t, n) {
		var r = n(15),
			o = r.JSON || (r.JSON = { stringify: JSON.stringify });
		e.exports = function(e) {
			return o.stringify.apply(o, arguments);
		};
	},
	271: function(e, t, n) {
		n(289), (e.exports = n(15).Object.assign);
	},
	272: function(e, t, n) {
		n(290), (e.exports = n(15).Object.keys);
	},
	273: function(e, t, n) {
		n(147), n(107), n(120), n(291), n(293), n(294), (e.exports = n(15).Promise);
	},
	274: function(e, t, n) {
		n(292), n(147), n(295), n(296), (e.exports = n(15).Symbol);
	},
	275: function(e, t, n) {
		n(107), n(120), (e.exports = n(134).f('iterator'));
	},
	276: function(e, t) {
		e.exports = function() {};
	},
	277: function(e, t, n) {
		var r = n(56),
			o = n(119),
			i = n(286);
		e.exports = function(e) {
			return function(t, n, s) {
				var a,
					c = r(t),
					u = o(c.length),
					l = i(s, u);
				if (e && n != n) {
					for (; u > l; ) if ((a = c[l++]) != a) return !0;
				} else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
				return !e && -1;
			};
		};
	},
	278: function(e, t, n) {
		var r = n(76),
			o = n(128),
			i = n(90);
		e.exports = function(e) {
			var t = r(e),
				n = o.f;
			if (n) for (var s, a = n(e), c = i.f, u = 0; a.length > u; ) c.call(e, (s = a[u++])) && t.push(s);
			return t;
		};
	},
	279: function(e, t) {
		e.exports = function(e, t, n) {
			var r = void 0 === n;
			switch (t.length) {
				case 0:
					return r ? e() : e.call(n);
				case 1:
					return r ? e(t[0]) : e.call(n, t[0]);
				case 2:
					return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
				case 3:
					return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
				case 4:
					return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
			}
			return e.apply(n, t);
		};
	},
	280: function(e, t, n) {
		'use strict';
		var r = n(118),
			o = n(87),
			i = n(88),
			s = {};
		n(45)(s, n(19)('iterator'), function() {
			return this;
		}),
			(e.exports = function(e, t, n) {
				(e.prototype = r(s, { next: o(1, n) })), i(e, t + ' Iterator');
			});
	},
	281: function(e, t, n) {
		var r = n(18),
			o = n(189).set,
			i = r.MutationObserver || r.WebKitMutationObserver,
			s = r.process,
			a = r.Promise,
			c = 'process' == n(77)(s);
		e.exports = function() {
			var e,
				t,
				n,
				u = function() {
					var r, o;
					for (c && (r = s.domain) && r.exit(); e; ) {
						(o = e.fn), (e = e.next);
						try {
							o();
						} catch (r) {
							throw (e ? n() : (t = void 0), r);
						}
					}
					(t = void 0), r && r.enter();
				};
			if (c)
				n = function() {
					s.nextTick(u);
				};
			else if (!i || (r.navigator && r.navigator.standalone))
				if (a && a.resolve) {
					var l = a.resolve();
					n = function() {
						l.then(u);
					};
				} else
					n = function() {
						o.call(r, u);
					};
			else {
				var f = !0,
					p = document.createTextNode('');
				new i(u).observe(p, { characterData: !0 }),
					(n = function() {
						p.data = f = !f;
					});
			}
			return function(r) {
				var o = { fn: r, next: void 0 };
				t && (t.next = o), e || ((e = o), n()), (t = o);
			};
		};
	},
	282: function(e, t, n) {
		'use strict';
		var r = n(76),
			o = n(128),
			i = n(90),
			s = n(79),
			a = n(145),
			c = Object.assign;
		e.exports =
			!c ||
			n(55)(function() {
				var e = {},
					t = {},
					n = Symbol(),
					r = 'abcdefghijklmnopqrst';
				return (
					(e[n] = 7),
					r.split('').forEach(function(e) {
						t[e] = e;
					}),
					7 != c({}, e)[n] || Object.keys(c({}, t)).join('') != r
				);
			})
				? function(e, t) {
						for (var n = s(e), c = arguments.length, u = 1, l = o.f, f = i.f; c > u; )
							for (
								var p, d = a(arguments[u++]), $ = l ? r(d).concat(l(d)) : r(d), m = $.length, h = 0;
								m > h;

							)
								f.call(d, (p = $[h++])) && (n[p] = d[p]);
						return n;
				  }
				: c;
	},
	283: function(e, t, n) {
		var r = n(31),
			o = n(34),
			i = n(76);
		e.exports = n(35)
			? Object.defineProperties
			: function(e, t) {
					o(e);
					for (var n, s = i(t), a = s.length, c = 0; a > c; ) r.f(e, (n = s[c++]), t[n]);
					return e;
			  };
	},
	284: function(e, t, n) {
		var r = n(56),
			o = n(183).f,
			i = {}.toString,
			s =
				'object' == typeof window && window && Object.getOwnPropertyNames
					? Object.getOwnPropertyNames(window)
					: [],
			a = function(e) {
				try {
					return o(e);
				} catch (e) {
					return s.slice();
				}
			};
		e.exports.f = function(e) {
			return s && '[object Window]' == i.call(e) ? a(e) : o(r(e));
		};
	},
	285: function(e, t, n) {
		var r = n(131),
			o = n(124);
		e.exports = function(e) {
			return function(t, n) {
				var i,
					s,
					a = String(o(t)),
					c = r(n),
					u = a.length;
				return c < 0 || c >= u
					? e
						? ''
						: void 0
					: ((i = a.charCodeAt(c)),
					  i < 55296 || i > 56319 || c + 1 === u || (s = a.charCodeAt(c + 1)) < 56320 || s > 57343
							? e
								? a.charAt(c)
								: i
							: e
							? a.slice(c, c + 2)
							: s - 56320 + ((i - 55296) << 10) + 65536);
			};
		};
	},
	286: function(e, t, n) {
		var r = n(131),
			o = Math.max,
			i = Math.min;
		e.exports = function(e, t) {
			return (e = r(e)), e < 0 ? o(e + t, 0) : i(e, t);
		};
	},
	288: function(e, t, n) {
		'use strict';
		var r = n(276),
			o = n(198),
			i = n(78),
			s = n(56);
		(e.exports = n(146)(
			Array,
			'Array',
			function(e, t) {
				(this._t = s(e)), (this._i = 0), (this._k = t);
			},
			function() {
				var e = this._t,
					t = this._k,
					n = this._i++;
				return !e || n >= e.length
					? ((this._t = void 0), o(1))
					: 'keys' == t
					? o(0, n)
					: 'values' == t
					? o(0, e[n])
					: o(0, [n, e[n]]);
			},
			'values'
		)),
			(i.Arguments = i.Array),
			r('keys'),
			r('values'),
			r('entries');
	},
	289: function(e, t, n) {
		var r = n(25);
		r(r.S + r.F, 'Object', { assign: n(282) });
	},
	290: function(e, t, n) {
		var r = n(79),
			o = n(76);
		n(201)('keys', function() {
			return function(e) {
				return o(r(e));
			};
		});
	},
	291: function(e, t, n) {
		'use strict';
		var r,
			o,
			i,
			s,
			a = n(105),
			c = n(18),
			u = n(49),
			l = n(144),
			f = n(25),
			p = n(30),
			d = n(86),
			$ = n(153),
			m = n(108),
			h = n(188),
			b = n(189).set,
			v = n(281)(),
			y = n(127),
			w = n(185),
			g = n(186),
			_ = c.TypeError,
			x = c.process,
			S = c.Promise,
			k = 'process' == l(x),
			P = function() {},
			O = (o = y.f),
			E = !!(function() {
				try {
					var e = S.resolve(1),
						t = ((e.constructor = {})[n(19)('species')] = function(e) {
							e(P, P);
						});
					return (k || 'function' == typeof PromiseRejectionEvent) && e.then(P) instanceof t;
				} catch (e) {}
			})(),
			I = function(e) {
				var t;
				return !(!p(e) || 'function' != typeof (t = e.then)) && t;
			},
			j = function(e, t) {
				if (!e._n) {
					e._n = !0;
					var n = e._c;
					v(function() {
						for (var r = e._v, o = 1 == e._s, i = 0; n.length > i; )
							!(function(t) {
								var n,
									i,
									s = o ? t.ok : t.fail,
									a = t.resolve,
									c = t.reject,
									u = t.domain;
								try {
									s
										? (o || (2 == e._h && L(e), (e._h = 1)),
										  !0 === s ? (n = r) : (u && u.enter(), (n = s(r)), u && u.exit()),
										  n === t.promise
												? c(_('Promise-chain cycle'))
												: (i = I(n))
												? i.call(n, a, c)
												: a(n))
										: c(r);
								} catch (e) {
									c(e);
								}
							})(n[i++]);
						(e._c = []), (e._n = !1), t && !e._h && T(e);
					});
				}
			},
			T = function(e) {
				b.call(c, function() {
					var t,
						n,
						r,
						o = e._v,
						i = A(e);
					if (
						(i &&
							((t = w(function() {
								k
									? x.emit('unhandledRejection', o, e)
									: (n = c.onunhandledrejection)
									? n({ promise: e, reason: o })
									: (r = c.console) && r.error && r.error('Unhandled promise rejection', o);
							})),
							(e._h = k || A(e) ? 2 : 1)),
						(e._a = void 0),
						i && t.e)
					)
						throw t.v;
				});
			},
			A = function(e) {
				return 1 !== e._h && 0 === (e._a || e._c).length;
			},
			L = function(e) {
				b.call(c, function() {
					var t;
					k ? x.emit('rejectionHandled', e) : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
				});
			},
			M = function(e) {
				var t = this;
				t._d || ((t._d = !0), (t = t._w || t), (t._v = e), (t._s = 2), t._a || (t._a = t._c.slice()), j(t, !0));
			},
			C = function(e) {
				var t,
					n = this;
				if (!n._d) {
					(n._d = !0), (n = n._w || n);
					try {
						if (n === e) throw _("Promise can't be resolved itself");
						(t = I(e))
							? v(function() {
									var r = { _w: n, _d: !1 };
									try {
										t.call(e, u(C, r, 1), u(M, r, 1));
									} catch (e) {
										M.call(r, e);
									}
							  })
							: ((n._v = e), (n._s = 1), j(n, !1));
					} catch (e) {
						M.call({ _w: n, _d: !1 }, e);
					}
				}
			};
		E ||
			((S = function(e) {
				$(this, S, 'Promise', '_h'), d(e), r.call(this);
				try {
					e(u(C, this, 1), u(M, this, 1));
				} catch (e) {
					M.call(this, e);
				}
			}),
			(r = function(e) {
				(this._c = []),
					(this._a = void 0),
					(this._s = 0),
					(this._d = !1),
					(this._v = void 0),
					(this._h = 0),
					(this._n = !1);
			}),
			(r.prototype = n(155)(S.prototype, {
				then: function(e, t) {
					var n = O(h(this, S));
					return (
						(n.ok = 'function' != typeof e || e),
						(n.fail = 'function' == typeof t && t),
						(n.domain = k ? x.domain : void 0),
						this._c.push(n),
						this._a && this._a.push(n),
						this._s && j(this, !1),
						n.promise
					);
				},
				catch: function(e) {
					return this.then(void 0, e);
				},
			})),
			(i = function() {
				var e = new r();
				(this.promise = e), (this.resolve = u(C, e, 1)), (this.reject = u(M, e, 1));
			}),
			(y.f = O = function(e) {
				return e === S || e === s ? new i(e) : o(e);
			})),
			f(f.G + f.W + f.F * !E, { Promise: S }),
			n(88)(S, 'Promise'),
			n(202)('Promise'),
			(s = n(15).Promise),
			f(f.S + f.F * !E, 'Promise', {
				reject: function(e) {
					var t = O(this);
					return (0, t.reject)(e), t.promise;
				},
			}),
			f(f.S + f.F * (a || !E), 'Promise', {
				resolve: function(e) {
					return g(a && this === s ? S : this, e);
				},
			}),
			f(
				f.S +
					f.F *
						!(
							E &&
							n(197)(function(e) {
								S.all(e).catch(P);
							})
						),
				'Promise',
				{
					all: function(e) {
						var t = this,
							n = O(t),
							r = n.resolve,
							o = n.reject,
							i = w(function() {
								var n = [],
									i = 0,
									s = 1;
								m(e, !1, function(e) {
									var a = i++,
										c = !1;
									n.push(void 0),
										s++,
										t.resolve(e).then(function(e) {
											c || ((c = !0), (n[a] = e), --s || r(n));
										}, o);
								}),
									--s || r(n);
							});
						return i.e && o(i.v), n.promise;
					},
					race: function(e) {
						var t = this,
							n = O(t),
							r = n.reject,
							o = w(function() {
								m(e, !1, function(e) {
									t.resolve(e).then(n.resolve, r);
								});
							});
						return o.e && r(o.v), n.promise;
					},
				}
			);
	},
	292: function(e, t, n) {
		'use strict';
		var r = n(18),
			o = n(50),
			i = n(35),
			s = n(25),
			a = n(187),
			c = n(154).KEY,
			u = n(55),
			l = n(130),
			f = n(88),
			p = n(106),
			d = n(19),
			$ = n(134),
			m = n(133),
			h = n(278),
			b = n(195),
			v = n(34),
			y = n(30),
			w = n(56),
			g = n(132),
			_ = n(87),
			x = n(118),
			S = n(284),
			k = n(199),
			P = n(31),
			O = n(76),
			E = k.f,
			I = P.f,
			j = S.f,
			T = r.Symbol,
			A = r.JSON,
			L = A && A.stringify,
			M = d('_hidden'),
			C = d('toPrimitive'),
			N = {}.propertyIsEnumerable,
			R = l('symbol-registry'),
			V = l('symbols'),
			D = l('op-symbols'),
			U = Object.prototype,
			F = 'function' == typeof T,
			q = r.QObject,
			B = !q || !q.prototype || !q.prototype.findChild,
			W =
				i &&
				u(function() {
					return (
						7 !=
						x(
							I({}, 'a', {
								get: function() {
									return I(this, 'a', { value: 7 }).a;
								},
							})
						).a
					);
				})
					? function(e, t, n) {
							var r = E(U, t);
							r && delete U[t], I(e, t, n), r && e !== U && I(U, t, r);
					  }
					: I,
			z = function(e) {
				var t = (V[e] = x(T.prototype));
				return (t._k = e), t;
			},
			G =
				F && 'symbol' == typeof T.iterator
					? function(e) {
							return 'symbol' == typeof e;
					  }
					: function(e) {
							return e instanceof T;
					  },
			H = function(e, t, n) {
				return (
					e === U && H(D, t, n),
					v(e),
					(t = g(t, !0)),
					v(n),
					o(V, t)
						? (n.enumerable
								? (o(e, M) && e[M][t] && (e[M][t] = !1), (n = x(n, { enumerable: _(0, !1) })))
								: (o(e, M) || I(e, M, _(1, {})), (e[M][t] = !0)),
						  W(e, t, n))
						: I(e, t, n)
				);
			},
			K = function(e, t) {
				v(e);
				for (var n, r = h((t = w(t))), o = 0, i = r.length; i > o; ) H(e, (n = r[o++]), t[n]);
				return e;
			},
			J = function(e, t) {
				return void 0 === t ? x(e) : K(x(e), t);
			},
			Y = function(e) {
				var t = N.call(this, (e = g(e, !0)));
				return (
					!(this === U && o(V, e) && !o(D, e)) &&
					(!(t || !o(this, e) || !o(V, e) || (o(this, M) && this[M][e])) || t)
				);
			},
			Q = function(e, t) {
				if (((e = w(e)), (t = g(t, !0)), e !== U || !o(V, t) || o(D, t))) {
					var n = E(e, t);
					return !n || !o(V, t) || (o(e, M) && e[M][t]) || (n.enumerable = !0), n;
				}
			},
			X = function(e) {
				for (var t, n = j(w(e)), r = [], i = 0; n.length > i; )
					o(V, (t = n[i++])) || t == M || t == c || r.push(t);
				return r;
			},
			Z = function(e) {
				for (var t, n = e === U, r = j(n ? D : w(e)), i = [], s = 0; r.length > s; )
					!o(V, (t = r[s++])) || (n && !o(U, t)) || i.push(V[t]);
				return i;
			};
		F ||
			((T = function() {
				if (this instanceof T) throw TypeError('Symbol is not a constructor!');
				var e = p(arguments.length > 0 ? arguments[0] : void 0),
					t = function(n) {
						this === U && t.call(D, n),
							o(this, M) && o(this[M], e) && (this[M][e] = !1),
							W(this, e, _(1, n));
					};
				return i && B && W(U, e, { configurable: !0, set: t }), z(e);
			}),
			a(T.prototype, 'toString', function() {
				return this._k;
			}),
			(k.f = Q),
			(P.f = H),
			(n(183).f = S.f = X),
			(n(90).f = Y),
			(n(128).f = Z),
			i && !n(105) && a(U, 'propertyIsEnumerable', Y, !0),
			($.f = function(e) {
				return z(d(e));
			})),
			s(s.G + s.W + s.F * !F, { Symbol: T });
		for (
			var ee = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
					','
				),
				te = 0;
			ee.length > te;

		)
			d(ee[te++]);
		for (var ne = O(d.store), re = 0; ne.length > re; ) m(ne[re++]);
		s(s.S + s.F * !F, 'Symbol', {
			for: function(e) {
				return o(R, (e += '')) ? R[e] : (R[e] = T(e));
			},
			keyFor: function(e) {
				if (!G(e)) throw TypeError(e + ' is not a symbol!');
				for (var t in R) if (R[t] === e) return t;
			},
			useSetter: function() {
				B = !0;
			},
			useSimple: function() {
				B = !1;
			},
		}),
			s(s.S + s.F * !F, 'Object', {
				create: J,
				defineProperty: H,
				defineProperties: K,
				getOwnPropertyDescriptor: Q,
				getOwnPropertyNames: X,
				getOwnPropertySymbols: Z,
			}),
			A &&
				s(
					s.S +
						s.F *
							(!F ||
								u(function() {
									var e = T();
									return '[null]' != L([e]) || '{}' != L({ a: e }) || '{}' != L(Object(e));
								})),
					'JSON',
					{
						stringify: function(e) {
							for (var t, n, r = [e], o = 1; arguments.length > o; ) r.push(arguments[o++]);
							if (((n = t = r[1]), (y(t) || void 0 !== e) && !G(e)))
								return (
									b(t) ||
										(t = function(e, t) {
											if (('function' == typeof n && (t = n.call(this, e, t)), !G(t))) return t;
										}),
									(r[1] = t),
									L.apply(A, r)
								);
						},
					}
				),
			T.prototype[C] || n(45)(T.prototype, C, T.prototype.valueOf),
			f(T, 'Symbol'),
			f(Math, 'Math', !0),
			f(r.JSON, 'JSON', !0);
	},
	293: function(e, t, n) {
		'use strict';
		var r = n(25),
			o = n(15),
			i = n(18),
			s = n(188),
			a = n(186);
		r(r.P + r.R, 'Promise', {
			finally: function(e) {
				var t = s(this, o.Promise || i.Promise),
					n = 'function' == typeof e;
				return this.then(
					n
						? function(n) {
								return a(t, e()).then(function() {
									return n;
								});
						  }
						: e,
					n
						? function(n) {
								return a(t, e()).then(function() {
									throw n;
								});
						  }
						: e
				);
			},
		});
	},
	294: function(e, t, n) {
		'use strict';
		var r = n(25),
			o = n(127),
			i = n(185);
		r(r.S, 'Promise', {
			try: function(e) {
				var t = o.f(this),
					n = i(e);
				return (n.e ? t.reject : t.resolve)(n.v), t.promise;
			},
		});
	},
	295: function(e, t, n) {
		n(133)('asyncIterator');
	},
	296: function(e, t, n) {
		n(133)('observable');
	},
	30: function(e, t) {
		e.exports = function(e) {
			return 'object' == typeof e ? null !== e : 'function' == typeof e;
		};
	},
	31: function(e, t, n) {
		var r = n(34),
			o = n(182),
			i = n(132),
			s = Object.defineProperty;
		t.f = n(35)
			? Object.defineProperty
			: function(e, t, n) {
					if ((r(e), (t = i(t, !0)), r(n), o))
						try {
							return s(e, t, n);
						} catch (e) {}
					if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
					return 'value' in n && (e[t] = n.value), e;
			  };
	},
	336: function(e, t) {
		function defaultSetTimout() {
			throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout() {
			throw new Error('clearTimeout has not been defined');
		}
		function runTimeout(e) {
			if (n === setTimeout) return setTimeout(e, 0);
			if ((n === defaultSetTimout || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
			try {
				return n(e, 0);
			} catch (t) {
				try {
					return n.call(null, e, 0);
				} catch (t) {
					return n.call(this, e, 0);
				}
			}
		}
		function runClearTimeout(e) {
			if (r === clearTimeout) return clearTimeout(e);
			if ((r === defaultClearTimeout || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
			try {
				return r(e);
			} catch (t) {
				try {
					return r.call(null, e);
				} catch (t) {
					return r.call(this, e);
				}
			}
		}
		function cleanUpNextTick() {
			a && i && ((a = !1), i.length ? (s = i.concat(s)) : (c = -1), s.length && drainQueue());
		}
		function drainQueue() {
			if (!a) {
				var e = runTimeout(cleanUpNextTick);
				a = !0;
				for (var t = s.length; t; ) {
					for (i = s, s = []; ++c < t; ) i && i[c].run();
					(c = -1), (t = s.length);
				}
				(i = null), (a = !1), runClearTimeout(e);
			}
		}
		function Item(e, t) {
			(this.fun = e), (this.array = t);
		}
		function noop() {}
		var n,
			r,
			o = (e.exports = {});
		!(function() {
			try {
				n = 'function' == typeof setTimeout ? setTimeout : defaultSetTimout;
			} catch (e) {
				n = defaultSetTimout;
			}
			try {
				r = 'function' == typeof clearTimeout ? clearTimeout : defaultClearTimeout;
			} catch (e) {
				r = defaultClearTimeout;
			}
		})();
		var i,
			s = [],
			a = !1,
			c = -1;
		(o.nextTick = function(e) {
			var t = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
			s.push(new Item(e, t)), 1 !== s.length || a || runTimeout(drainQueue);
		}),
			(Item.prototype.run = function() {
				this.fun.apply(null, this.array);
			}),
			(o.title = 'browser'),
			(o.browser = !0),
			(o.env = {}),
			(o.argv = []),
			(o.version = ''),
			(o.versions = {}),
			(o.on = noop),
			(o.addListener = noop),
			(o.once = noop),
			(o.off = noop),
			(o.removeListener = noop),
			(o.removeAllListeners = noop),
			(o.emit = noop),
			(o.prependListener = noop),
			(o.prependOnceListener = noop),
			(o.listeners = function(e) {
				return [];
			}),
			(o.binding = function(e) {
				throw new Error('process.binding is not supported');
			}),
			(o.cwd = function() {
				return '/';
			}),
			(o.chdir = function(e) {
				throw new Error('process.chdir is not supported');
			}),
			(o.umask = function() {
				return 0;
			});
	},
	34: function(e, t, n) {
		var r = n(30);
		e.exports = function(e) {
			if (!r(e)) throw TypeError(e + ' is not an object!');
			return e;
		};
	},
	35: function(e, t, n) {
		e.exports = !n(55)(function() {
			return (
				7 !=
				Object.defineProperty({}, 'a', {
					get: function() {
						return 7;
					},
				}).a
			);
		});
	},
	376: function(e, t, n) {
		'use strict';
		e.exports = function(e) {
			return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
				return (
					'%' +
					e
						.charCodeAt(0)
						.toString(16)
						.toUpperCase()
				);
			});
		};
	},
	378: function(e, t) {},
	388: function(e, t, n) {
		'use strict';
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var r = n(85),
			o = _interopRequireDefault(r),
			i = n(103),
			s = _interopRequireDefault(i),
			a = n(9),
			c = _interopRequireDefault(a),
			u = n(70),
			l = u.PLAID_INTERNAL_NAMESPACE,
			f = function(e, t) {
				var n = e.length,
					r = void 0;
				for (r = 0; r < n; r += 1) if (t(e[r])) return e[r];
			},
			p = function() {
				for (var e = document.getElementsByTagName('script'), t = 0, n = e.length; t < n; t += 1)
					if (/link-initialize(\..*?)?\.js$/.test(e[t].src)) return e[t];
				throw new Error('Failed to find script');
			},
			d = function(e) {
				try {
					return JSON.parse(e);
				} catch (e) {
					return {};
				}
			},
			$ = (function() {
				var e = 0;
				return function() {
					return (e += 1), String(e);
				};
			})(),
			m = function() {
				return null != window.location.origin
					? window.location.origin
					: window.location.protocol +
							'//' +
							window.location.hostname +
							(window.location.port ? ':' + window.location.port : '');
			},
			h = function(e) {
				return function(t) {
					var n = (0, c.default)({}, t, { action: l + '::' + t.action });
					e.postMessage((0, s.default)(n), 'https://cdn.plaid.com');
				};
			},
			b = function(e, t) {
				return function(n) {
					var r = d(n.data);
					for (var o in t) if (r.action === l + '-' + e + '::' + o) return t[o](r);
				};
			},
			v = function() {
				try {
					var e = window.localStorage.getItem('plaid-link');
					if (null == e) return null;
					var t = JSON.parse(e);
					return 'object' !== (void 0 === t ? 'undefined' : (0, o.default)(t)) ? null : t;
				} catch (e) {
					return null;
				}
			},
			y = function(e) {
				try {
					window.localStorage.setItem('plaid-link', (0, s.default)(e));
				} catch (e) {
					return;
				}
			},
			w = function() {
				var e = document.querySelectorAll('meta[name="viewport"]');
				if (0 === e.length) return '';
				var t = e[e.length - 1],
					n = t.content;
				return String(n);
			};
		e.exports = {
			createMessageHandler: b,
			find: f,
			findScriptTag: p,
			getMetaViewport: w,
			getUniqueId: $,
			getWindowOrigin: m,
			sendMessage: h,
			readLocalStorage: v,
			writeLocalStorage: y,
		};
	},
	44: function(e, t, n) {
		e.exports = { default: n(273), __esModule: !0 };
	},
	45: function(e, t, n) {
		var r = n(31),
			o = n(87);
		e.exports = n(35)
			? function(e, t, n) {
					return r.f(e, t, o(1, n));
			  }
			: function(e, t, n) {
					return (e[t] = n), e;
			  };
	},
	49: function(e, t, n) {
		var r = n(86);
		e.exports = function(e, t, n) {
			if ((r(e), void 0 === t)) return e;
			switch (n) {
				case 1:
					return function(n) {
						return e.call(t, n);
					};
				case 2:
					return function(n, r) {
						return e.call(t, n, r);
					};
				case 3:
					return function(n, r, o) {
						return e.call(t, n, r, o);
					};
			}
			return function() {
				return e.apply(t, arguments);
			};
		};
	},
	50: function(e, t) {
		var n = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return n.call(e, t);
		};
	},
	54: function(e, t) {
		var n;
		n = (function() {
			return this;
		})();
		try {
			n = n || Function('return this')() || (0, eval)('this');
		} catch (e) {
			'object' == typeof window && (n = window);
		}
		e.exports = n;
	},
	55: function(e, t) {
		e.exports = function(e) {
			try {
				return !!e();
			} catch (e) {
				return !0;
			}
		};
	},
	56: function(e, t, n) {
		var r = n(145),
			o = n(124);
		e.exports = function(e) {
			return r(o(e));
		};
	},
	70: function(e, t, n) {
		'use strict';
		e.exports = {
			API_VERSIONS: ['v1', 'v2'],
			EXTERNAL_ENVIRONMENTS_API_V1: ['tartan', 'production'],
			INTERNAL_ENVIRONMENTS_API_V1: ['testing', 'tartan', 'production'],
			EXTERNAL_ENVIRONMENTS_API_V2: ['sandbox', 'development', 'production'],
			INTERNAL_ENVIRONMENTS_API_V2: ['testing', 'sandbox', 'development', 'production'],
			LINK_CLIENT_URL: 'https://cdn.plaid.com/link/2.0.115',
			LINK_HTML_URL: 'https://cdn.plaid.com/link/2.0.115/link.html',
			PLAID_LINK_BUTTON_ID: 'plaid-link-button',
			PLAID_INTERNAL_NAMESPACE: 'plaid_link',
			PLAID_WEBVIEW_NAMESPACE: 'plaidlink',
			PRODUCTS_API_V1: ['auth', 'connect', 'income', 'info'],
			PRODUCTS_API_V2_ONLY: ['assets'],
			PRODUCTS_API_V2: ['auth', 'transactions', 'income', 'identity', 'assets'],
			VERSION: '2.0.115',
			CREATE_PARAMETERS: [
				'apiVersion',
				'clientName',
				'customizations',
				'env',
				'experiments',
				'forceIframe',
				'isEmbedded',
				'isSimpleIntegration',
				'key',
				'longtail',
				'longTail',
				'onEvent',
				'onExit',
				'onLoad',
				'onSuccess',
				'product',
				'selectAccount',
				'token',
				'useMobileWindow',
				'webhook',
			],
		};
	},
	76: function(e, t, n) {
		var r = n(184),
			o = n(126);
		e.exports =
			Object.keys ||
			function(e) {
				return r(e, o);
			};
	},
	77: function(e, t) {
		var n = {}.toString;
		e.exports = function(e) {
			return n.call(e).slice(8, -1);
		};
	},
	78: function(e, t) {
		e.exports = {};
	},
	79: function(e, t, n) {
		var r = n(124);
		e.exports = function(e) {
			return Object(r(e));
		};
	},
	85: function(e, t, n) {
		'use strict';
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { default: e };
		}
		t.__esModule = !0;
		var r = n(267),
			o = _interopRequireDefault(r),
			i = n(266),
			s = _interopRequireDefault(i),
			a =
				'function' == typeof s.default && 'symbol' == typeof o.default
					? function(e) {
							return typeof e;
					  }
					: function(e) {
							return e &&
								'function' == typeof s.default &&
								e.constructor === s.default &&
								e !== s.default.prototype
								? 'symbol'
								: typeof e;
					  };
		t.default =
			'function' == typeof s.default && 'symbol' === a(o.default)
				? function(e) {
						return void 0 === e ? 'undefined' : a(e);
				  }
				: function(e) {
						return e &&
							'function' == typeof s.default &&
							e.constructor === s.default &&
							e !== s.default.prototype
							? 'symbol'
							: void 0 === e
							? 'undefined'
							: a(e);
				  };
	},
	86: function(e, t) {
		e.exports = function(e) {
			if ('function' != typeof e) throw TypeError(e + ' is not a function!');
			return e;
		};
	},
	87: function(e, t) {
		e.exports = function(e, t) {
			return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
		};
	},
	874: function(e, t, n) {
		'use strict';
		var r = n(905),
			o = n(909),
			i = n(388),
			s = n(70),
			a = s.VERSION;
		void 0 !== window.Plaid &&
			console.warn(
				'Warning: The Plaid link-initialize.js script was embedded more than once. This is an unsupported configuration and may lead to unpredictable behavior. Please ensure Plaid Link is embedded only once per page.'
			);
		var c = {};
		(c.version = a), (c.create = r), (window.Plaid = c);
		var u = i.findScriptTag();
		o.setUp(c, u), (e.exports = c);
	},
	88: function(e, t, n) {
		var r = n(31).f,
			o = n(50),
			i = n(19)('toStringTag');
		e.exports = function(e, t, n) {
			e && !o((e = n ? e : e.prototype), i) && r(e, i, { configurable: !0, value: t });
		};
	},
	9: function(e, t, n) {
		'use strict';
		t.__esModule = !0;
		var r = n(264),
			o = (function(e) {
				return e && e.__esModule ? e : { default: e };
			})(r);
		t.default =
			o.default ||
			function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			};
	},
	90: function(e, t) {
		t.f = {}.propertyIsEnumerable;
	},
	904: function(e, t, n) {
		'use strict';
		(t.amex = {
			id: 'amex',
			apiV2Id: 'ins_10',
			index: 8,
			name: 'American Express',
			products: { auth: !1, connect: !0, income: !0, info: !1 },
			colors: { primary: '#007cc3', dark: '#006faf' },
			forgottenPassword:
				'https://online.americanexpress.com/myca/fuidfyp/us/action/fuidfyp?request_type=un_fuid&Face=en_US',
			accountLocked:
				'https://online.americanexpress.com/myca/fuidfyp/us/action/fuidfyp?request_type=NewPassword&Face=en_US&AccountRevoked=1',
			accountSetup: 'https://www.americanexpress.com/',
			fields: [
				{ name: 'username', label: 'User ID', type: 'text' },
				{ name: 'password', label: 'Password', type: 'password' },
			],
		}),
			(t.bofa = {
				id: 'bofa',
				apiV2Id: 'ins_1',
				index: 1,
				name: 'Bank of America',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#e31837', dark: '#c91631' },
				forgottenPassword: 'https://secure.bankofamerica.com/login/reset/entry/forgotPwdScreen.go',
				accountLocked: 'https://securemessaging.bankofamerica.com/srt/help.do?appid=12',
				accountSetup: 'https://secure.bankofamerica.com',
				fields: [
					{ name: 'username', label: 'Online ID', type: 'text' },
					{ name: 'password', label: 'Passcode', type: 'password' },
				],
			}),
			(t.capone = {
				id: 'capone',
				apiV2Id: 'ins_9',
				index: 5,
				name: 'Capital One',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#d03135', dark: '#b82c31' },
				forgottenPassword: 'https://verified.capitalone.com/signinhelp.html',
				accountLocked: 'https://www.capitalone.com',
				accountSetup: 'https://www.capitalone.com',
				fields: [
					{ name: 'username', label: 'Username / Customer #', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.chase = {
				id: 'chase',
				apiV2Id: 'ins_3',
				index: 0,
				name: 'Chase',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#095aa6', dark: '#085095' },
				forgottenPassword:
					'https://chaseonline.chase.com/Public/Reidentify/ReidentifyFilterView.aspx?LOB=RBGLogon',
				accountLocked: 'https://chaseonline.chase.com/Public/Error.aspx?logonReason=sso_logon_loc&LOB=RBGLogon',
				accountSetup: 'https://chaseonline.chase.com',
				fields: [
					{ name: 'username', label: 'User ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.citi = {
				id: 'citi',
				apiV2Id: 'ins_5',
				index: 3,
				name: 'Citi',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#204081', dark: '#1a3469' },
				forgottenPassword: 'https://online.citibank.com/US/JSO/uidn/RequestUserIDReminder.do',
				accountLocked: 'https://online.citibank.com/US/JSO/signon/uname/Next.do',
				accountSetup: 'https://online.citibank.com',
				fields: [
					{ name: 'username', label: 'User ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.citizens = {
				id: 'citizens',
				apiV2Id: 'ins_20',
				index: 17,
				name: 'Citizens Bank',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#37926d', dark: '#23825e' },
				forgottenPassword: 'https://www.citizensbankonline.com/efs/servlet/efs/reset-password-wait.jsp',
				accountLocked: 'https://www.citizensbankonline.com',
				accountSetup: 'https://www.citizensbankonline.com/efs/servlet/efs/default-enroll.jsp',
				fields: [
					{ name: 'username', label: 'Online User ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.fidelity = {
				id: 'fidelity',
				apiV2Id: 'ins_12',
				index: 16,
				name: 'Fidelity',
				products: { auth: !0, connect: !0, income: !1, info: !0 },
				colors: { primary: '#6f9824', dark: '#5c801f' },
				forgottenPassword: 'https://fps.fidelity.com/ftgw/Fps/Fidelity/RtlCust/Resolve/Init',
				accountLocked: 'http://wps.fidelity.com/servlets/Help/newlog/trouble.html#question3',
				accountSetup: 'https://login.fidelity.com/ftgw/Fas/Fidelity/RtlCust/Login/Init',
				fields: [
					{ name: 'username', label: 'Username', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.huntington = {
				id: 'huntington',
				apiV2Id: 'ins_21',
				index: 18,
				name: 'Huntington Bank',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#5ba63c', dark: '#519535' },
				forgottenPassword: 'https://selfservice.huntington.com/default/ForgotPassword/3',
				accountLocked: 'https://onlinebanking.huntington.com/rol/IA/UserLocked.aspx',
				accountSetup: 'https://selfservice.huntington.com/default/Enrollment/3',
				fields: [
					{ name: 'username', label: 'Username', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.nfcu = {
				id: 'nfcu',
				apiV2Id: 'ins_15',
				index: 12,
				name: 'Navy Federal Credit Union',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#0056a1', dark: '#004887' },
				forgottenPassword: 'https://www.navyfederal.org/forgot_password.html',
				accountLocked: 'https://www.navyfederal.org/',
				accountSetup: 'https://www.navyfederal.org/',
				fields: [
					{ name: 'username', label: 'Username', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.pnc = {
				id: 'pnc',
				apiV2Id: 'ins_13',
				index: 6,
				name: 'PNC',
				products: { auth: !0, connect: !0, income: !1, info: !0 },
				colors: { primary: '#0069aa', dark: '#005a91' },
				forgottenPassword: 'https://www.onlinebanking.pnc.com/alservlet/ForgotUserIdServlet',
				accountLocked: 'https://www.pnc.com',
				accountSetup: 'https://www.pnc.com',
				fields: [
					{ name: 'username', label: 'Username', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.schwab = {
				id: 'schwab',
				apiV2Id: 'ins_11',
				index: 15,
				name: 'Charles Schwab',
				products: { auth: !0, connect: !0, income: !1, info: !1 },
				colors: { primary: '#309cdb', dark: '#2b8ac2' },
				forgottenPassword: 'https://client.schwab.com/Areas/Login/ForgotPassword/FYPIdentification.aspx',
				accountLocked: 'https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx',
				accountSetup: 'https://client.schwab.com/Login/SignOn/CustomerCenterLogin.aspx',
				fields: [
					{ name: 'username', label: 'Login ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.suntrust = {
				id: 'suntrust',
				apiV2Id: 'ins_16',
				index: 10,
				name: 'SunTrust',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#f89912', dark: '#f28b0c' },
				forgottenPassword: 'https://onlinebanking.suntrust.com/UI/login#/forgotcredentials',
				accountLocked: 'https://www.suntrust.com',
				accountSetup: 'https://www.suntrust.com',
				fields: [
					{ name: 'username', label: 'User ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.td = {
				id: 'td',
				apiV2Id: 'ins_14',
				index: 9,
				name: 'TD Bank',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#2bb250', dark: '#189941' },
				forgottenPassword: 'https://onlinebanking.tdbank.com/default.asp',
				accountLocked: 'http://www.tdbank.com/',
				accountSetup: 'http://www.tdbank.com/',
				fields: [
					{ name: 'username', label: 'User Name', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.us = {
				id: 'us',
				apiV2Id: 'ins_6',
				index: 4,
				name: 'US Bank',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#061c72', dark: '#041559' },
				forgottenPassword: 'https://onlinebanking.usbank.com/Auth/LoginAssistanceDesktop/LoadLoginAssistance',
				accountLocked: 'https://onlinebanking.usbank.com/Auth/LoginAssistanceDesktop/LoadLoginAssistance',
				accountSetup: 'https://onlinebanking.usbank.com',
				fields: [
					{ name: 'username', label: 'Personal ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.usaa = {
				id: 'usaa',
				apiV2Id: 'ins_7',
				index: 7,
				name: 'USAA',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#083357', dark: '#072d4e' },
				forgottenPassword:
					'https://www.usaa.com/inet/ent_proof/proofingEvent?action=Init&event=forgotPassword&wa_ref=pub_auth_nav_forgotpwd',
				accountLocked: 'https://mobile.usaa.com/inet/ent_auth_password/locked?akredirect=true',
				accountSetup: 'https://www.usaa.com/inet/ent_logon/Logon',
				fields: [
					{ name: 'username', label: 'Online ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
					{ name: 'pin', label: 'PIN', type: 'password' },
				],
			}),
			(t.bbt = {
				id: 'bbt',
				apiV2Id: 'ins_2',
				index: 15,
				name: 'BB&T',
				products: { auth: !0, connect: !0, income: !1, info: !0 },
				colors: { primary: '#990033', dark: '#80002b' },
				forgottenPassword: 'https://online.bbt.com/bbtpassreset/',
				accountLocked:
					'https://www.bbt.com/privacy-and-security/security/online-security/online-security-measures.page',
				accountSetup: 'https://www.bbt.com/roao/showHome',
				fields: [
					{ name: 'username', label: 'User ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.wells = {
				id: 'wells',
				apiV2Id: 'ins_4',
				index: 2,
				name: 'Wells Fargo',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#d11f37', dark: '#bb1b31' },
				forgottenPassword: 'https://oam.wellsfargo.com/oamo/identity/help/passwordhelp',
				accountLocked: 'https://www.wellsfargo.com/help/faqs/sign-on',
				accountSetup: 'https://www.wellsfargo.com/',
				fields: [
					{ name: 'username', label: 'Username', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			}),
			(t.regions = {
				id: 'regions',
				apiV2Id: 'ins_19',
				index: 11,
				name: 'Regions',
				products: { auth: !0, connect: !0, income: !0, info: !0 },
				colors: { primary: '#88BD40', dark: '#5f9700' },
				forgottenPassword: 'https://onlinebanking.regions.com/customerservice/forgottenpassword',
				accountLocked: 'https://www.regions.com',
				accountSetup: 'https://www.regions.com/personal_banking/get_started_online_statements.rf',
				fields: [
					{ name: 'username', label: 'Online ID', type: 'text' },
					{ name: 'password', label: 'Password', type: 'password' },
				],
			});
	},
	905: function(e, t, n) {
		'use strict';
		function _interopRequireDefault(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var r = n(103),
			o = _interopRequireDefault(r),
			i = n(9),
			s = _interopRequireDefault(i),
			a = n(148),
			c = n(906),
			u = n(907),
			l = n(908),
			f = n(910),
			p = n(388),
			d = n(179),
			$ = n(70),
			m = $.LINK_HTML_URL,
			h = $.PLAID_LINK_BUTTON_ID,
			b = $.VERSION,
			v = n(911),
			y = v.validateCreateOptions,
			w = v.validateExitOptions,
			g = function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				y(e);
				var n = !0 === t.forceDesktop,
					r = !0 === t.forceMobile,
					o = !0 === t.logInternalAnalytics,
					i = [].slice.call(e.experiments || []),
					a = !0 === e.useMobileWindow,
					c = !0 === e.forceIframe,
					f = (c || l.isSupported()) && !a,
					$ = (!n && d().isMobile) || r,
					m = p.getUniqueId(),
					b = _({ isMobile: $, forceIframe: f }).create(),
					v = S(
						(0, s.default)({}, e, {
							experiments: i,
							forceIframe: f,
							isMobile: $,
							logInternalAnalytics: o,
							uniqueId: m,
						})
					),
					g = x(v),
					k = function(e) {
						var t = e.institutionId,
							n = e.openStartedAt;
						if ($ && !f) {
							var r = x((0, s.default)({}, v, { institution: t }));
							b.show(r);
						} else b.show(), p.sendMessage(b)({ action: 'open', institution: t, openStartedAt: n });
					},
					P = function(t) {
						w(e, t),
							b.isOpen()
								? p.sendMessage(b)({ action: 'exit', config: t })
								: console.warn('Link warning: attempted to exit Link when it was not open');
					};
				window.addEventListener(
					'message',
					p.createMessageHandler(m, {
						exit: function(t) {
							'function' == typeof e.onExit && e.onExit(t.error, t.metadata), b.hide();
						},
						event: function(t) {
							'function' == typeof e.onEvent && e.onEvent(t.eventName, t.metadata);
						},
						connected: function(t) {
							e.onSuccess(t.metadata.public_token, t.metadata), b.hide();
						},
						acknowledged: function() {
							var e = document.getElementById(h);
							null != e && (e.disabled = !1);
						},
					}),
					!1
				);
				var O = b.initialize(g, m).then(function() {
						'function' == typeof e.onLoad && e.onLoad();
					}),
					E = function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							t = Date.now();
						O.then(function() {
							return k({ institutionId: e, openStartedAt: t });
						});
					};
				return { institutions: u.filterByProduct(e.product), exit: P, open: E };
			},
			_ = function(e) {
				var t = e.isMobile,
					n = e.forceIframe;
				return t && n ? l : t && !n ? f : c;
			},
			x = function(e) {
				return m + '?' + a.stringify(e);
			},
			S = function(e) {
				var t = e.apiVersion,
					n = e.clientName,
					r = e.customizations,
					i = e.env,
					s = e.experiments,
					a = e.forceIframe,
					c = e.isEmbedded,
					u = e.isMobile,
					f = e.isSimpleIntegration,
					d = e.key,
					$ = e.logInternalAnalytics,
					m = e.onEvent,
					h = e.onExit,
					v = e.onLoad,
					y = e.product,
					w = e.selectAccount,
					g = e.token,
					_ = e.uniqueId,
					x = e.webhook;
				return {
					apiVersion: t,
					clientName: n,
					customizations: null != r ? (0, o.default)(r) : null,
					env: i,
					experiments: null != s ? (0, o.default)(s) : null,
					forceIframe: a,
					isEmbedded: c,
					isMobile: u,
					isParentInlineStylesheetSupported: l.isInlineStylesheetSupported(),
					isParentMetaViewportSet: l.isMetaViewportSet(),
					isSimpleIntegration: !0 === f,
					isUsingOnEventCallback: 'function' == typeof m,
					isUsingOnExitCallback: 'function' == typeof h,
					isUsingOnLoadCallback: 'function' == typeof v,
					key: d,
					logInternalAnalytics: !0 === $,
					origin: p.getWindowOrigin(),
					parentMetaViewport: p.getMetaViewport(),
					product: y,
					selectAccount: !0 === w,
					token: g,
					uniqueId: _,
					version: b,
					webhook: x,
				};
			};
		e.exports = g;
	},
	906: function(e, t, n) {
		'use strict';
		var r = n(44),
			o = (function(e) {
				return e && e.__esModule ? e : { default: e };
			})(r),
			i = void 0 === o.default ? n(121).Promise : o.default,
			s = function() {
				var e = document.body.style.overflow,
					t = null,
					n = !1;
				return {
					initialize: function(e, n) {
						return new i(function(r) {
							(t = document.createElement('iframe')),
								(t.id = 'plaid-link-iframe-' + n),
								(t.src = e),
								(t.width = '100%'),
								(t.height = '100%'),
								(t.style.position = 'fixed'),
								(t.style.top = '0'),
								(t.style.left = '0'),
								(t.style.right = '0'),
								(t.style.bottom = '0'),
								(t.style.zIndex = '9999999999'),
								(t.style.borderWidth = '0'),
								(t.style.display = 'none'),
								(t.style.overflowX = 'hidden'),
								(t.style.overflowY = 'auto'),
								(t.onload = r),
								document.body.appendChild(t);
						});
					},
					show: function(r) {
						(n = !0),
							(e = document.body.style.overflow),
							(t.style.display = 'block'),
							(document.body.style.overflow = 'hidden'),
							t.contentWindow.focus();
					},
					hide: function() {
						(n = !1), (t.style.display = 'none'), (document.body.style.overflow = e), window.parent.focus();
					},
					postMessage: function(e, n) {
						return t.contentWindow.postMessage(e, n);
					},
					isOpen: function() {
						return !0 === n;
					},
				};
			};
		e.exports = { create: s };
	},
	907: function(e, t, n) {
		'use strict';
		var r = n(104),
			o = (function(e) {
				return e && e.__esModule ? e : { default: e };
			})(r),
			i = n(388),
			s = n(904),
			a = (0, o.default)(s).map(function(e) {
				return s[e];
			}),
			c = function(e) {
				return i.find(a, function(t) {
					return t.id === e;
				});
			},
			u = function(e) {
				return a.filter(function(t) {
					return t.products[e];
				});
			};
		e.exports = { filterByProduct: u, findById: c };
	},
	908: function(e, t, n) {
		'use strict';
		var r = n(44),
			o = (function(e) {
				return e && e.__esModule ? e : { default: e };
			})(r),
			i = void 0 === o.default ? n(121).Promise : o.default,
			s = n(388),
			a = 'plaid-link-temporary-id',
			c = 'html' + Array(9).join('#' + a),
			u =
				'\n  ' +
				c +
				',\n  ' +
				c +
				' > body {\n    border: 0 !important;\n    height: 100% !important;\n    margin: 0 !important;\n    max-height: auto !important;\n    max-width: auto !important;\n    min-height: 0 !important;\n    min-width: 0 !important;\n    padding: 0 !important;\n    position: static !important;\n    width: auto !important;\n  }\n  ' +
				c +
				' > body > * {\n    display: none !important;\n  }\n  ' +
				c +
				' > body > .plaid-link-iframe {\n    border: 0 !important;\n    height: auto !important;\n    min-height: 100% !important;\n    width: 100% !important;\n  }\n',
			l = function() {
				var e = null,
					t = !1,
					n = '',
					r = { x: 0, y: 0 },
					o = function() {
						n = document.documentElement.id;
						var e = document.createElement('style');
						(e.id = 'plaid-link-stylesheet'),
							(e.textContent = u),
							document.querySelector('head').appendChild(e),
							(document.documentElement.id = a);
					},
					s = function() {
						var e = document.getElementById('plaid-link-stylesheet');
						e && e.parentNode.removeChild(e), (document.documentElement.id = n);
					},
					c = function() {
						r = { x: document.body.scrollLeft, y: document.body.scrollTop };
					},
					l = function() {
						window.scrollTo(r.x, r.y);
					};
				return {
					initialize: function(t, n) {
						return new i(function(r) {
							(e = document.createElement('iframe')),
								(e.className = 'plaid-link-iframe'),
								(e.id = 'plaid-link-iframe-' + n),
								(e.onload = r),
								(e.src = t),
								e.style.setProperty('display', 'none', 'important'),
								document.body.appendChild(e);
						});
					},
					show: function(n) {
						t ||
							((t = !0),
							c(),
							o(),
							window.scrollTo(0, 0),
							e.style.setProperty('display', 'block', 'important'),
							e.contentWindow.focus());
					},
					hide: function() {
						(t = !1), e.style.setProperty('display', 'none', 'important'), s(), l(), window.parent.focus();
					},
					postMessage: function(t, n) {
						return e.contentWindow.postMessage(t, n);
					},
					isOpen: function() {
						return !0 === t;
					},
				};
			},
			f = function() {
				try {
					var e = 'link-stylesheet-test-' + Math.floor(100 * Math.random()),
						t = document.createElement('div');
					t.id = e;
					var n = document.createElement('style');
					n.textContent = '#' + e + ' { width: 100px; height: 100px; }';
					var r = document.body;
					r.appendChild(t), r.appendChild(n);
					var o = 100 === t.offsetWidth;
					return r.removeChild(t), r.removeChild(n), o;
				} catch (e) {
					return !1;
				}
			},
			p = function() {
				return /device-width/.test(s.getMetaViewport());
			},
			d = function() {
				return f() && p();
			};
		e.exports = { create: l, isInlineStylesheetSupported: f, isMetaViewportSet: p, isSupported: d };
	},
	909: function(e, t, n) {
		'use strict';
		var r = n(85),
			o = (function(e) {
				return e && e.__esModule ? e : { default: e };
			})(r),
			i = n(70),
			s = i.PLAID_LINK_BUTTON_ID,
			a = function(e, t) {
				var n = document.createElement('input');
				return (n.type = 'hidden'), (n.name = e), (n.value = t), n;
			},
			c = function traverse(e, t) {
				for (var n in e)
					!(function(n) {
						'object' === (0, o.default)(e[n])
							? traverse(e[n], function(e, r) {
									t([n].concat(e), r);
							  })
							: t([n], e[n]);
					})(n);
			},
			u = function(e, t) {
				var n = t.getAttribute('data-form-id');
				if (null != n) {
					var r = document.getElementById(n);
					if (null == r) throw new Error('Uncaught Error: Specify a valid data-form-id');
					var o = t.getAttribute('data-api-version'),
						i = t.getAttribute('data-client-name'),
						u = t.getAttribute('data-product'),
						l = t.getAttribute('data-key'),
						f = t.getAttribute('data-env'),
						p = 'true' === t.getAttribute('data-select-account'),
						d = t.getAttribute('data-token'),
						$ = t.getAttribute('data-webhook'),
						m = null != t.getAttribute('data-longtail') || null != t.getAttribute('data-long-tail') || null,
						h = function(e, t) {
							c(t, function(e, t) {
								var n =
									e[0] +
									e
										.slice(1)
										.map(function(e) {
											return '[' + e + ']';
										})
										.join('');
								r.appendChild(a(n, t));
							}),
								r.submit();
						},
						b = e.create({
							apiVersion: o,
							clientName: i,
							env: f,
							isSimpleIntegration: !0,
							key: l,
							longtail: m,
							onSuccess: h,
							product: u,
							selectAccount: p,
							token: d,
							webhook: $,
						}),
						v = document.createElement('button');
					(v.id = s),
						(v.textContent = null != d ? 'Relink your bank account' : 'Link your bank account'),
						(v.onclick = function(e) {
							e.preventDefault(), b.open();
						}),
						r.appendChild(v);
				}
			};
		e.exports = { setUp: u };
	},
	910: function(e, t, n) {
		'use strict';
		var r = n(44),
			o = (function(e) {
				return e && e.__esModule ? e : { default: e };
			})(r),
			i = n(179),
			s = function() {
				var e = null;
				return {
					initialize: function(e, t) {
						return o.default.resolve();
					},
					show: function(t) {
						'plaid-link-tabview' === window.name && (window.name = '');
						var n = i().isIOSChrome ? '_blank' : 'plaid-link-tabview';
						e = window.open(t, n);
					},
					hide: function() {
						e.close(), null != window.opener && window.opener.focus();
					},
					postMessage: function(t, n) {
						return e.postMessage(t, n);
					},
					isOpen: function() {
						return null != e && !e.closed;
					},
				};
			};
		e.exports = { create: s };
	},
	911: function(e, t, n) {
		'use strict';
		var r = n(85),
			o = (function(e) {
				return e && e.__esModule ? e : { default: e };
			})(r),
			i = n(70),
			s = i.CREATE_PARAMETERS,
			a = function(e) {
				var t = e.env;
				return {
					error: function(e) {
						if ('production' !== t) throw new Error(e);
					},
					warn: function(e) {
						'production' !== t && console.warn(e);
					},
				};
			},
			c = function(e) {
				var t = a(e),
					n = t.warn;
				for (var r in e)
					s.indexOf(r) < 0 && n('Invalid Link parameter: ' + r + ' is not a valid Plaid.create() parameter');
			},
			u = function(e) {
				var t = a(e),
					n = t.error,
					r = t.warn;
				c(e),
					'function' != typeof e.onSuccess && n('Invalid onSuccess function'),
					void 0 !== e.forceIframe &&
						r(
							'The forceIframe option has been deprecated. Link will use an iframe by default when possible.'
						);
			},
			l = function(e, t) {
				var n = a(e),
					r = n.error;
				return null == t
					? null
					: ('object' !== (void 0 === t ? 'undefined' : (0, o.default)(t)) &&
							r('Invalid exit parameter, must be an Object'),
					  null);
			};
		e.exports = { validateCreateOptions: u, validateExitOptions: l };
	},
	953: function(e, t, n) {
		e.exports = n(874);
	},
});
//# sourceMappingURL=link-initialize.js.map
