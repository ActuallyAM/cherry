!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (T, e) {
  'use strict';
  function g(e) {
    return 'function' == typeof e && 'number' != typeof e.nodeType;
  }
  function y(e) {
    return null != e && e === e.window;
  }
  var t = [],
    n = Object.getPrototypeOf,
    s = t.slice,
    m = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    r = {},
    o = r.toString,
    v = r.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    x = {},
    C = T.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || C).createElement('script');
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function h(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? r[o.call(e)] || 'object'
      : typeof e;
  }
  var f = '3.5.1',
    E = function (e, t) {
      return new E.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = h(e);
    return (
      !g(e) &&
      !y(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  (E.fn = E.prototype =
    {
      jquery: f,
      constructor: E,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        e = E.merge(this.constructor(), e);
        return (e.prevObject = this), e;
      },
      each: function (e) {
        return E.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          E.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          e = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= e && e < t ? [this[e]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (E.extend = E.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o = arguments[0] || {},
          a = 1,
          s = arguments.length,
          u = !1;
        for (
          'boolean' == typeof o && ((u = o), (o = arguments[a] || {}), a++),
            'object' == typeof o || g(o) || (o = {}),
            a === s && ((o = this), a--);
          a < s;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = e[t]),
                '__proto__' !== t &&
                  o !== n &&
                  (u && n && (E.isPlainObject(n) || (r = Array.isArray(n)))
                    ? ((i = o[t]),
                      (i =
                        r && !Array.isArray(i)
                          ? []
                          : r || E.isPlainObject(i)
                          ? i
                          : {}),
                      (r = !1),
                      (o[t] = E.extend(u, i, n)))
                    : void 0 !== n && (o[t] = n));
        return o;
      }),
    E.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        return !(
          !e ||
          '[object Object]' !== o.call(e) ||
          ((e = n(e)) &&
            ('function' !=
              typeof (e = v.call(e, 'constructor') && e.constructor) ||
              a.call(e) !== l))
        );
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e))
          for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        t = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? E.merge(t, 'string' == typeof e ? [e] : e)
              : u.call(t, e)),
          t
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) != a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return m(a);
      },
      guid: 1,
      support: x,
    }),
    'function' == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        r['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    function f(e, t) {
      return (
        (e = '0x' + e.slice(1) - 65536),
        t ||
          (e < 0
            ? String.fromCharCode(65536 + e)
            : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320))
      );
    }
    function p(e, t) {
      return t
        ? '\0' === e
          ? '�'
          : e.slice(0, -1) +
            '\\' +
            e.charCodeAt(e.length - 1).toString(16) +
            ' '
        : '\\' + e;
    }
    function r() {
      T();
    }
    var e,
      d,
      b,
      o,
      i,
      h,
      g,
      y,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      m,
      s,
      c,
      v,
      S = 'sizzle' + +new Date(),
      x = n.document,
      k = 0,
      A = 0,
      N = ue(),
      D = ue(),
      j = ue(),
      q = ue(),
      L = function (e, t) {
        return e === t && (l = !0), 0;
      },
      H = {}.hasOwnProperty,
      t = [],
      O = t.pop,
      P = t.push,
      R = t.push,
      M = t.slice,
      I = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      W =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      F = '[\\x20\\t\\r\\n\\f]',
      B =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        F +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      $ =
        '\\[' +
        F +
        '*(' +
        B +
        ')(?:' +
        F +
        '*([*^$|!~]?=)' +
        F +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        B +
        '))|)' +
        F +
        '*\\]',
      _ =
        ':(' +
        B +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        $ +
        ')*)|.*)\\)|)',
      z = new RegExp(F + '+', 'g'),
      U = new RegExp('^' + F + '+|((?:^|[^\\\\])(?:\\\\.)*)' + F + '+$', 'g'),
      X = new RegExp('^' + F + '*,' + F + '*'),
      V = new RegExp('^' + F + '*([>+~]|' + F + ')' + F + '*'),
      G = new RegExp(F + '|>'),
      Y = new RegExp(_),
      Q = new RegExp('^' + B + '$'),
      J = {
        ID: new RegExp('^#(' + B + ')'),
        CLASS: new RegExp('^\\.(' + B + ')'),
        TAG: new RegExp('^(' + B + '|[*])'),
        ATTR: new RegExp('^' + $),
        PSEUDO: new RegExp('^' + _),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            F +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            F +
            '*(?:([+-]|)' +
            F +
            '*(\\d+)|))' +
            F +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + W + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            F +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            F +
            '*((?:-\\d)?\\d*)' +
            F +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      K = /HTML$/i,
      Z = /^(?:input|select|textarea|button)$/i,
      ee = /^h\d$/i,
      te = /^[^{]+\{\s*\[native \w/,
      ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      re = /[+~]/,
      ie = new RegExp('\\\\[\\da-fA-F]{1,6}' + F + '?|\\\\([^\\r\\n\\f])', 'g'),
      oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ae = ve(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      R.apply((t = M.call(x.childNodes)), x.childNodes),
        t[x.childNodes.length].nodeType;
    } catch (e) {
      R = {
        apply: t.length
          ? function (e, t) {
              P.apply(e, M.call(t));
            }
          : function (e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            },
      };
    }
    function se(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c = t && t.ownerDocument,
        f = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))
      )
        return n;
      if (!r && (T(t), (t = t || C), E)) {
        if (11 !== f && (s = ne.exec(e)))
          if ((l = s[1])) {
            if (9 === f) {
              if (!(o = t.getElementById(l))) return n;
              if (o.id === l) return n.push(o), n;
            } else if (c && (o = c.getElementById(l)) && v(t, o) && o.id === l)
              return n.push(o), n;
          } else {
            if (s[2]) return R.apply(n, t.getElementsByTagName(e)), n;
            if (
              (l = s[3]) &&
              d.getElementsByClassName &&
              t.getElementsByClassName
            )
              return R.apply(n, t.getElementsByClassName(l)), n;
          }
        if (
          d.qsa &&
          !q[e + ' '] &&
          (!m || !m.test(e)) &&
          (1 !== f || 'object' !== t.nodeName.toLowerCase())
        ) {
          if (((l = e), (c = t), 1 === f && (G.test(e) || V.test(e)))) {
            for (
              ((c = (re.test(e) && ge(t.parentNode)) || t) === t && d.scope) ||
                ((a = t.getAttribute('id'))
                  ? (a = a.replace(oe, p))
                  : t.setAttribute('id', (a = S))),
                i = (u = h(e)).length;
              i--;

            )
              u[i] = (a ? '#' + a : ':scope') + ' ' + me(u[i]);
            l = u.join(',');
          }
          try {
            return R.apply(n, c.querySelectorAll(l)), n;
          } catch (t) {
            q(e, !0);
          } finally {
            a === S && t.removeAttribute('id');
          }
        }
      }
      return y(e.replace(U, '$1'), t, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
      }
    }
    function fe(e, t) {
      for (var n = e.split('|'), r = n.length; r--; ) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function he(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--; )
              e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          e = (e.ownerDocument || e).documentElement;
        return !K.test(t || (e && e.nodeName) || 'HTML');
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          e = e ? e.ownerDocument || e : x;
        return (
          e != C &&
            9 === e.nodeType &&
            e.documentElement &&
            ((a = (C = e).documentElement),
            (E = !i(C)),
            x != C &&
              (t = C.defaultView) &&
              t.top !== t &&
              (t.addEventListener
                ? t.addEventListener('unload', r, !1)
                : t.attachEvent && t.attachEvent('onunload', r)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement('div')),
                void 0 !== e.querySelectorAll &&
                  !e.querySelectorAll(':scope fieldset div').length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment('')),
                !e.getElementsByTagName('*').length
              );
            })),
            (d.getElementsByClassName = te.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(ie, f);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    e = t.getElementById(e);
                    return e ? [e] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var t = e.replace(ie, f);
                  return function (e) {
                    e =
                      void 0 !== e.getAttributeNode && e.getAttributeNode('id');
                    return e && e.value === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' !== e) return o;
                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (m = []),
            (d.qsa = te.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    m.push('[*^$]=' + F + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    m.push('\\[' + F + '*(?:value|' + W + ')'),
                  e.querySelectorAll('[id~=' + S + '-]').length || m.push('~='),
                  (t = C.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    m.push('\\[' + F + '*name' + F + '*=' + F + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || m.push(':checked'),
                  e.querySelectorAll('a#' + S + '+*').length ||
                    m.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  m.push('[\\r\\n\\f]');
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    m.push('name' + F + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    m.push(':enabled', ':disabled'),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    m.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  m.push(',.*:');
              })),
            (d.matchesSelector = te.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, '*')),
                  c.call(e, "[s!='']:x"),
                  s.push('!=', _);
              }),
            (m = m.length && new RegExp(m.join('|'))),
            (s = s.length && new RegExp(s.join('|'))),
            (t = te.test(a.compareDocumentPosition)),
            (v =
              t || te.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      t = t && t.parentNode;
                    return (
                      e === t ||
                      !(
                        !t ||
                        1 !== t.nodeType ||
                        !(n.contains
                          ? n.contains(t)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(t))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (L = t
              ? function (e, t) {
                  return e === t
                    ? ((l = !0), 0)
                    : (n =
                        !e.compareDocumentPosition -
                        !t.compareDocumentPosition) ||
                        (1 &
                          (n =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!d.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e == C || (e.ownerDocument == x && v(x, e))
                            ? -1
                            : t == C || (t.ownerDocument == x && v(x, t))
                            ? 1
                            : u
                            ? I(u, e) - I(u, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  var n;
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? I(u, e) - I(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == x
                    ? -1
                    : s[r] == x
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !q[t + ' '] &&
          (!s || !s.test(t)) &&
          (!m || !m.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          q(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), v(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        n = n && H.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== n
        ? n
        : d.attributes || !E
        ? e.getAttribute(t)
        : (n = e.getAttributeNode(t)) && n.specified
        ? n.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(oe, p);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(L),
        l)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: J,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(ie, f)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(ie, f)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return J.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    Y.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(ie, f).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = N[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + F + ')' + e + '(' + F + '|$)')) &&
                N(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (t, n, r) {
            return function (e) {
              e = se.attr(e, t);
              return null == e
                ? '!=' === n
                : !n ||
                    ((e += ''),
                    '=' === n
                      ? e === r
                      : '!=' === n
                      ? e !== r
                      : '^=' === n
                      ? r && 0 === e.indexOf(r)
                      : '*=' === n
                      ? r && -1 < e.indexOf(r)
                      : '$=' === n
                      ? r && e.slice(-r.length) === r
                      : '~=' === n
                      ? -1 < (' ' + e.replace(z, ' ') + ' ').indexOf(r)
                      : '|=' === n &&
                        (e === r || e.slice(0, r.length + 1) === r + '-'));
            };
          },
          CHILD: function (h, e, t, g, y) {
            var m = 'nth' !== h.slice(0, 3),
              v = 'last' !== h.slice(-4),
              x = 'of-type' === e;
            return 1 === g && 0 === y
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = m != v ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (m) {
                      for (; l; ) {
                        for (a = e; (a = a[l]); )
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = 'only' === h && !u && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((u = [v ? c.firstChild : c.lastChild]), v && p)) {
                      for (
                        d =
                          (s =
                            (r =
                              (i =
                                (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                            r[1]) && r[2],
                          a = s && c.childNodes[s];
                        (a = (++s && a && a[l]) || (d = s = 0) || u.pop());

                      )
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      !1 ===
                      (d = p
                        ? (s =
                            (r =
                              (i =
                                (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                                (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                            r[1])
                        : d)
                    )
                      for (
                        ;
                        (a = (++s && a && a[l]) || (d = s = 0) || u.pop()) &&
                        ((x
                          ? a.nodeName.toLowerCase() !== f
                          : 1 !== a.nodeType) ||
                          !++d ||
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a !== e));

                      );
                    return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error('unsupported pseudo: ' + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      for (var n, r = a(e, o), i = r.length; i--; )
                        e[(n = I(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = g(e.replace(U, '$1'));
            return s[S]
              ? le(function (e, t, n, r) {
                  for (var i, o = s(e, null, r, []), a = e.length; a--; )
                    (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(ie, f)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              Q.test(n || '') || se.error('unsupported lang: ' + n),
              (n = n.replace(ie, f).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return ee.test(e.nodeName);
          },
          input: function (e) {
            return Z.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (e = e.getAttribute('type')) ||
                'text' === e.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = (function (t) {
        return function (e) {
          return 'input' === e.nodeName.toLowerCase() && e.type === t;
        };
      })(e);
    for (e in { submit: !0, reset: !0 })
      b.pseudos[e] = (function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();
          return ('input' === t || 'button' === t) && e.type === n;
        };
      })(e);
    function ye() {}
    function me(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function ve(a, e, t) {
      var s = e.dir,
        u = e.next,
        l = u || s,
        c = t && 'parentNode' === l,
        f = A++;
      return e.first
        ? function (e, t, n) {
            for (; (e = e[s]); ) if (1 === e.nodeType || c) return a(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o = [k, f];
            if (n) {
              for (; (e = e[s]); )
                if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
            } else
              for (; (e = e[s]); )
                if (1 === e.nodeType || c)
                  if (
                    ((r =
                      (i = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (i[e.uniqueID] = {})),
                    u && u === e.nodeName.toLowerCase())
                  )
                    e = e[s] || e;
                  else {
                    if ((i = r[l]) && i[0] === k && i[1] === f)
                      return (o[2] = i[2]);
                    if (((r[l] = o)[2] = a(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function xe(i) {
      return 1 < i.length
        ? function (e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function be(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function we(e) {
      for (
        var r,
          t,
          n,
          i = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = ve(
            function (e) {
              return e === r;
            },
            a,
            !0
          ),
          l = ve(
            function (e) {
              return -1 < I(r, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              n = (!o && (n || t !== w)) || ((r = t).nodeType ? u : l)(e, t, n);
              return (r = null), n;
            },
          ];
        s < i;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [ve(xe(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < i && !b.relative[e[n].type]; n++);
            return (function e(d, h, g, y, m, t) {
              return (
                y && !y[S] && (y = e(y)),
                m && !m[S] && (m = e(m, t)),
                le(function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    s = [],
                    u = [],
                    l = t.length,
                    c =
                      e ||
                      (function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                          se(e, t[r], n);
                        return n;
                      })(h || '*', n.nodeType ? [n] : n, []),
                    f = !d || (!e && h) ? c : be(c, s, d, n, r),
                    p = g ? (m || (e ? d : l || y) ? [] : t) : f;
                  if ((g && g(f, p, n, r), y))
                    for (i = be(p, u), y(i, [], n, r), o = i.length; o--; )
                      (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                  if (e) {
                    if (m || d) {
                      if (m) {
                        for (i = [], o = p.length; o--; )
                          (a = p[o]) && i.push((f[o] = a));
                        m(null, (p = []), i, r);
                      }
                      for (o = p.length; o--; )
                        (a = p[o]) &&
                          -1 < (i = m ? I(e, a) : s[o]) &&
                          (e[i] = !(t[i] = a));
                    }
                  } else (p = be(p === t ? p.splice(l, p.length) : p)), m ? m(null, t, p, r) : R.apply(t, p);
                })
              );
            })(
              1 < s && xe(c),
              1 < s &&
                me(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace(U, '$1'),
              t,
              s < n && we(e.slice(s, n)),
              n < i && we((e = e.slice(n))),
              n < i && me(e)
            );
          }
          c.push(t);
        }
      return xe(c);
    }
    return (
      (ye.prototype = b.filters = b.pseudos),
      (b.setFilters = new ye()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = D[e + ' '];
          if (l) return t ? 0 : l.slice(0);
          for (a = e, s = [], u = b.preFilter; a; ) {
            for (o in ((n && !(r = X.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = V.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(U, ' ') }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = J[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : D(e, s).slice(0);
        }),
      (g = se.compile =
        function (e, t) {
          var n,
            y,
            m,
            v,
            x,
            r,
            i = [],
            o = [],
            a = j[e + ' '];
          if (!a) {
            for (n = (t = t || h(e)).length; n--; )
              ((a = we(t[n]))[S] ? i : o).push(a);
            (a = j(
              e,
              ((v = 0 < (m = i).length),
              (x = 0 < (y = o).length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    for (
                      a = 0, t || o.ownerDocument == C || (T(o), (n = !E));
                      (s = y[a++]);

                    )
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  v && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), v && l !== u)) {
                  for (a = 0; (s = m[a++]); ) s(c, f, t, n);
                  if (e) {
                    if (0 < u) for (; l--; ) c[l] || f[l] || (f[l] = O.call(r));
                    f = be(f);
                  }
                  R.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + m.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              v ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (y = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              'ID' === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(ie, f), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            for (
              i = J.needsContext.test(e) ? 0 : o.length;
              i-- && ((a = o[i]), !b.relative[(s = a.type)]);

            )
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(ie, f),
                  (re.test(o[0].type) && ge(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && me(o))))
                  return R.apply(n, r), n;
                break;
              }
          }
          return (
            (l || g(e, c))(
              r,
              t,
              !E,
              n,
              !t || (re.test(e) && ge(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split('').sort(L).join('') === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(W, function (e, t, n) {
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (t = e.getAttributeNode(t)) && t.specified
              ? t.value
              : null;
        }),
      se
    );
  })(T);
  (E.find = d),
    (E.expr = d.selectors),
    (E.expr[':'] = E.expr.pseudos),
    (E.uniqueSort = E.unique = d.uniqueSort),
    (E.text = d.getText),
    (E.isXMLDoc = d.isXML),
    (E.contains = d.contains),
    (E.escapeSelector = d.escape);
  function w(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
      if (1 === e.nodeType) {
        if (i && E(e).is(n)) break;
        r.push(e);
      }
    return r;
  }
  function S(e, t) {
    for (var n = []; e; e = e.nextSibling)
      1 === e.nodeType && e !== t && n.push(e);
    return n;
  }
  var k = E.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return g(n)
      ? E.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? E.grep(e, function (e) {
          return (e === n) !== r;
        })
      : 'string' != typeof n
      ? E.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : E.filter(n, e, r);
  }
  (E.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? E.find.matchesSelector(r, e)
          ? [r]
          : []
        : E.find.matches(
            e,
            E.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
        return 1 < r ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, 'string' == typeof e && k.test(e) ? E(e) : e || [], !1)
          .length;
      },
    });
  var j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (E.fn.init = function (e, t, n) {
    if (!e) return this;
    if (((n = n || q), 'string' != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : g(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(E)
        : E.makeArray(e, this);
    if (
      !(r =
        '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : j.exec(e)) ||
      (!r[1] && t)
    )
      return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof E ? t[0] : t),
        E.merge(
          this,
          E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)
        ),
        N.test(r[1]) && E.isPlainObject(t))
      )
        for (var r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return (
      (e = C.getElementById(r[2])) && ((this[0] = e), (this.length = 1)), this
    );
  }).prototype = E.fn;
  var q = E(C),
    L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && E(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? i.call(E(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          e = e.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (e) {
          return w(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return w(e, 'parentNode', n);
        },
        next: function (e) {
          return O(e, 'nextSibling');
        },
        prev: function (e) {
          return O(e, 'previousSibling');
        },
        nextAll: function (e) {
          return w(e, 'nextSibling');
        },
        prevAll: function (e) {
          return w(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return w(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return w(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && n(e.contentDocument)
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (r, i) {
        E.fn[r] = function (e, t) {
          var n = E.map(this, i, e);
          return (
            (t = 'Until' !== r.slice(-5) ? e : t) &&
              'string' == typeof t &&
              (n = E.filter(t, n)),
            1 < this.length &&
              (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (E.Callbacks = function (r) {
    var e, n;
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          E.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : E.extend({}, r);
    function i() {
      for (s = s || r.once, a = o = !0; l.length; c = -1)
        for (t = l.shift(); ++c < u.length; )
          !1 === u[c].apply(t[0], t[1]) &&
            r.stopOnFalse &&
            ((c = u.length), (t = !1));
      r.memory || (t = !1), (o = !1), s && (u = t ? [] : '');
    }
    var o,
      t,
      a,
      s,
      u = [],
      l = [],
      c = -1,
      f = {
        add: function () {
          return (
            u &&
              (t && !o && ((c = u.length - 1), l.push(t)),
              (function n(e) {
                E.each(e, function (e, t) {
                  g(t)
                    ? (r.unique && f.has(t)) || u.push(t)
                    : t && t.length && 'string' !== h(t) && n(t);
                });
              })(arguments),
              t && !o && i()),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (e, t) {
              for (var n; -1 < (n = E.inArray(t, u, n)); )
                u.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, u) : 0 < u.length;
        },
        empty: function () {
          return (u = u && []), this;
        },
        disable: function () {
          return (s = l = []), (u = t = ''), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (s = l = []), t || o || (u = t = ''), this;
        },
        locked: function () {
          return !!s;
        },
        fireWith: function (e, t) {
          return (
            s ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              o || i()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!a;
        },
      };
    return f;
  }),
    E.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              E.Callbacks('memory'),
              E.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              E.Callbacks('once memory'),
              E.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              E.Callbacks('once memory'),
              E.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return E.Deferred(function (r) {
                E.each(o, function (e, t) {
                  var n = g(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && g(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + 'With'](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  function e() {
                    var e, t;
                    if (!(i < u)) {
                      if ((e = a.apply(n, r)) === o.promise())
                        throw new TypeError('Thenable self-resolution');
                      (t =
                        e &&
                        ('object' == typeof e || 'function' == typeof e) &&
                        e.then),
                        g(t)
                          ? s
                            ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                            : (u++,
                              t.call(
                                e,
                                l(u, o, R, s),
                                l(u, o, M, s),
                                l(u, o, R, o.notifyWith)
                              ))
                          : (a !== R && ((n = void 0), (r = [e])),
                            (s || o.resolveWith)(n, r));
                    }
                  }
                  var n = this,
                    r = arguments,
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (E.Deferred.getStackHook &&
                        (t.stackTrace = E.Deferred.getStackHook()),
                      T.setTimeout(t));
                };
              }
              return E.Deferred(function (e) {
                o[0][3].add(l(0, e, g(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, g(t) ? t : R)),
                  o[2][3].add(l(0, e, g(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? E.extend(e, a) : a;
            },
          },
          s = {};
        return (
          E.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        function t(t) {
          return function (e) {
            (i[t] = this),
              (o[t] = 1 < arguments.length ? s.call(arguments) : e),
              --n || a.resolveWith(i, o);
          };
        }
        var n = arguments.length,
          r = n,
          i = Array(r),
          o = s.call(arguments),
          a = E.Deferred();
        if (
          n <= 1 &&
          (I(e, a.done(t(r)).resolve, a.reject, !n),
          'pending' === a.state() || g(o[r] && o[r].then))
        )
          return a.then();
        for (; r--; ) I(o[r], t(r), a.reject);
        return a.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (E.Deferred.exceptionHook = function (e, t) {
    T.console &&
      T.console.warn &&
      e &&
      W.test(e.name) &&
      T.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (E.readyException = function (e) {
      T.setTimeout(function () {
        throw e;
      });
    });
  var F = E.Deferred();
  function B() {
    C.removeEventListener('DOMContentLoaded', B),
      T.removeEventListener('load', B),
      E.ready();
  }
  (E.fn.ready = function (e) {
    return (
      F.then(e).catch(function (e) {
        E.readyException(e);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
          F.resolveWith(C, [E]);
      },
    }),
    (E.ready.then = F.then),
    'complete' === C.readyState ||
    ('loading' !== C.readyState && !C.documentElement.doScroll)
      ? T.setTimeout(E.ready)
      : (C.addEventListener('DOMContentLoaded', B),
        T.addEventListener('load', B));
  function $(e, t, n, r, i, o, a) {
    var s = 0,
      u = e.length,
      l = null == n;
    if ('object' === h(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
    else if (
      void 0 !== r &&
      ((i = !0),
      g(r) || (a = !0),
      (t = l
        ? a
          ? (t.call(e, r), null)
          : ((l = t),
            function (e, t, n) {
              return l.call(E(e), n);
            })
        : t))
    )
      for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  }
  var _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, 'ms-').replace(z, U);
  }
  function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }
  function G() {
    this.expando = E.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 !== t && !E.isEmptyObject(r)) ||
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        e = e[this.expando];
        return void 0 !== e && !E.isEmptyObject(e);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 !== n)
          return 'object' == typeof n
            ? this.each(function () {
                Q.set(this, n);
              })
            : $(
                this,
                function (e) {
                  var t;
                  return o && void 0 === e
                    ? void 0 !== (t = Q.get(o, n)) || void 0 !== (t = Z(o, n))
                      ? t
                      : void 0
                    : void this.each(function () {
                        Q.set(this, n, e);
                      });
                },
                null,
                e,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
        ) {
          for (t = a.length; t--; )
            a[t] &&
              0 === (r = a[t].name).indexOf('data-') &&
              ((r = X(r.slice(5))), Z(o, r, i[r]));
          Y.set(o, 'hasDataAttrs', !0);
        }
        return i;
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    E.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (r = Y.get(e, (t = (t || 'fx') + 'queue'))),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, E.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = E.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = E._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                E.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: E.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    E.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? E.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && E.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        function n() {
          --i || o.resolveWith(a, [a]);
        }
        var r,
          i = 1,
          o = E.Deferred(),
          a = this,
          s = this.length;
        for (
          'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
          s--;

        )
          (r = Y.get(a[s], e + 'queueHooks')) &&
            r.empty &&
            (i++, r.empty.add(n));
        return n(), o.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = C.documentElement,
    ie = function (e) {
      return E.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  function ae(e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && ie(e) && 'none' === E.css(e, 'display'))
    );
  }
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return E.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (E.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (E.cssNumber[t] || ('px' !== l && +u)) &&
        te.exec(E.css(e, t));
    if (c && c[3] !== l) {
      for (l = l || c[3], c = +(u /= 2) || 1; a--; )
        E.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      E.style(e, t, (c *= 2) + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u = [], l = 0, c = e.length; l < c; l++)
      (r = e[l]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((u[l] = Y.get(r, 'display') || null),
              u[l] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (u[l] =
                ((s = o = i = void 0),
                (o = r.ownerDocument),
                (a = r.nodeName),
                (s = ue[a]) ||
                  ((i = o.body.appendChild(o.createElement(a))),
                  (s = E.css(i, 'display')),
                  i.parentNode.removeChild(i),
                  (ue[a] = s = 'none' === s ? 'block' : s)))))
          : 'none' !== n && ((u[l] = 'none'), Y.set(r, 'display', n)));
    for (l = 0; l < c; l++) null != u[l] && (e[l].style.display = u[l]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var ce = /^(?:checkbox|radio)$/i,
    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    pe = /^$|^module$|\/(?:java|ecma)script/i,
    f = C.createDocumentFragment().appendChild(C.createElement('div'));
  (d = C.createElement('input')).setAttribute('type', 'radio'),
    d.setAttribute('checked', 'checked'),
    d.setAttribute('name', 't'),
    f.appendChild(d),
    (x.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (f.innerHTML = '<textarea>x</textarea>'),
    (x.noCloneChecked = !!f.cloneNode(!0).lastChild.defaultValue),
    (f.innerHTML = '<option></option>'),
    (x.option = !!f.lastChild);
  var de = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function he(e, t) {
    var n =
      void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName(t || '*')
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll(t || '*')
        : [];
    return void 0 === t || (t && A(e, t)) ? E.merge([e], n) : n;
  }
  function ge(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
  }
  (de.tbody = de.tfoot = de.colgroup = de.caption = de.thead),
    (de.th = de.td),
    x.option ||
      (de.optgroup = de.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var ye = /<|&#?\w+;/;
  function me(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c = t.createDocumentFragment(),
        f = [],
        p = 0,
        d = e.length;
      p < d;
      p++
    )
      if ((o = e[p]) || 0 === o)
        if ('object' === h(o)) E.merge(f, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          for (
            a = a || c.appendChild(t.createElement('div')),
              s = (fe.exec(o) || ['', ''])[1].toLowerCase(),
              s = de[s] || de._default,
              a.innerHTML = s[1] + E.htmlPrefilter(o) + s[2],
              l = s[0];
            l--;

          )
            a = a.lastChild;
          E.merge(f, a.childNodes), ((a = c.firstChild).textContent = '');
        } else f.push(t.createTextNode(o));
    for (c.textContent = '', p = 0; (o = f[p++]); )
      if (r && -1 < E.inArray(o, r)) i && i.push(o);
      else if (
        ((u = ie(o)), (a = he(c.appendChild(o), 'script')), u && ge(a), n)
      )
        for (l = 0; (o = a[l++]); ) pe.test(o.type || '') && n.push(o);
    return c;
  }
  var ve = /^key/,
    xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return C.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        E.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (E.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: E.event.trigger(
                    E.extend(r[0], E.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && E.event.add(e, i, we);
  }
  (E.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h = Y.get(t);
      if (V(t))
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && E.find.matchesSelector(re, i),
            n.guid || (n.guid = E.guid++),
            (s = h.events) || (s = h.events = Object.create(null)),
            (a = h.handle) ||
              (a = h.handle =
                function (e) {
                  return void 0 !== E && E.event.triggered !== e.type
                    ? E.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            u = (e = (e || '').match(P) || ['']).length;
          u--;

        )
          (f = d = (l = be.exec(e[u]) || [])[1]),
            (p = (l[2] || '').split('.').sort()),
            f &&
              ((c = E.event.special[f] || {}),
              (f = (i ? c.delegateType : c.bindType) || f),
              (c = E.event.special[f] || {}),
              (l = E.extend(
                {
                  type: f,
                  origType: d,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && E.expr.match.needsContext.test(i),
                  namespace: p.join('.'),
                },
                o
              )),
              (d = s[f]) ||
                (((d = s[f] = []).delegateCount = 0),
                (c.setup && !1 !== c.setup.call(t, r, p, a)) ||
                  (t.addEventListener && t.addEventListener(f, a))),
              c.add &&
                (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? d.splice(d.delegateCount++, 0, l) : d.push(l),
              (E.event.global[f] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.hasData(e) && Y.get(e);
      if (y && (u = y.events)) {
        for (l = (t = (t || '').match(P) || ['']).length; l--; )
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            for (
              f = E.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s =
                  s[2] &&
                  new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                E.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
        E.isEmptyObject(u) && Y.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = new Array(arguments.length),
        s = E.event.fix(e),
        u = (Y.get(this, 'events') || Object.create(null))[s.type] || [],
        e = E.event.special[s.type] || {};
      for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((s.delegateTarget = this),
        !e.preDispatch || !1 !== e.preDispatch.call(this, s))
      ) {
        for (
          o = E.event.handlers.call(this, s, u), t = 0;
          (r = o[t++]) && !s.isPropagationStopped();

        )
          for (
            s.currentTarget = r.elem, n = 0;
            (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();

          )
            (s.rnamespace &&
              !1 !== i.namespace &&
              !s.rnamespace.test(i.namespace)) ||
              ((s.handleObj = i),
              (s.data = i.data),
              void 0 !==
                (i = (
                  (E.event.special[i.origType] || {}).handle || i.handler
                ).apply(r.elem, a)) &&
                !1 === (s.result = i) &&
                (s.preventDefault(), s.stopPropagation()));
        return e.postDispatch && e.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < E(i, this).index(l)
                  : E.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: g(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          e = this || e;
          return (
            ce.test(e.type) && e.click && A(e, 'input') && Se(e, 'click', we),
            !1
          );
        },
        trigger: function (e) {
          e = this || e;
          return (
            ce.test(e.type) && e.click && A(e, 'input') && Se(e, 'click'), !0
          );
        },
        _default: function (e) {
          e = e.target;
          return (
            (ce.test(e.type) &&
              e.click &&
              A(e, 'input') &&
              Y.get(e, 'click')) ||
            A(e, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && E.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && ve.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && xe.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      E.event.addProp
    ),
    E.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      E.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        delegateType: t,
      };
    }),
    E.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        E.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || E.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    E.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            E(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' != typeof e)
          return (
            (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = Te),
            this.each(function () {
              E.event.remove(this, e, n, t);
            })
          );
        for (i in e) this.off(i, t, e[i]);
        return this;
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function De(e, t) {
    return (
      (A(e, 'table') &&
        A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        E(e).children('tbody')[0]) ||
      e
    );
  }
  function je(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function qe(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (o = Y.get(e).events))
        for (i in (Y.remove(t, 'handle events'), o))
          for (n = 0, r = o[i].length; n < r; n++) E.event.add(t, i, o[i][n]);
      Q.hasData(e) && ((e = Q.access(e)), (e = E.extend({}, e)), Q.set(t, e));
    }
  }
  function He(n, r, i, o) {
    r = m(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = g(d);
    if (h || (1 < f && 'string' == typeof d && !x.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = E.map(he(e, 'script'), je)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = E.clone(u, !0, !0)), s && E.merge(a, he(u, 'script'))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            pe.test(u.type || '') &&
              !Y.access(u, 'globalEval') &&
              E.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? E._evalUrl &&
                  !u.noModule &&
                  E._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute('nonce') },
                    l
                  )
                : b(u.textContent.replace(Ne, ''), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || E.cleanData(he(r)),
        r.parentNode &&
          (n && ie(r) && ge(he(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          x.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          E.isXMLDoc(e)
        )
      )
        for (a = he(c), r = 0, i = (o = he(e)).length; r < i; r++)
          (s = o[r]),
            'input' === (l = (u = a[r]).nodeName.toLowerCase()) &&
            ce.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || he(e), a = a || he(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = he(c, 'script')).length && ge(a, !f && he(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            De(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            (t = De(this, e)).insertBefore(e, t.firstChild);
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(he(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !ke.test(e) &&
              !de[(fe.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (E.cleanData(he(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            E.inArray(this, n) < 0 &&
              (E.cleanData(he(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    E.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        E.fn[e] = function (e) {
          for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              E(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  function Pe(e) {
    var t = e.ownerDocument.defaultView;
    return (t = !t || !t.opener ? T : t).getComputedStyle(e);
  }
  function Re(e, t, n) {
    var r,
      i = {};
    for (r in t) (i[r] = e.style[r]), (e.style[r] = t[r]);
    for (r in ((n = n.call(e)), t)) e.style[r] = i[r];
    return n;
  }
  var Me,
    Ie,
    We,
    Fe,
    Be,
    $e,
    _e,
    ze,
    Ue = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Xe = new RegExp(ne.join('|'), 'i');
  function Ve(e, t, n) {
    var r,
      i,
      o = e.style;
    return (
      (n = n || Pe(e)) &&
        ('' !== (i = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (i = E.style(e, t)),
        !x.pixelBoxStyles() &&
          Ue.test(i) &&
          Xe.test(t) &&
          ((r = o.width),
          (e = o.minWidth),
          (t = o.maxWidth),
          (o.minWidth = o.maxWidth = o.width = i),
          (i = n.width),
          (o.width = r),
          (o.minWidth = e),
          (o.maxWidth = t))),
      void 0 !== i ? i + '' : i
    );
  }
  function Ge(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function Ye() {
    var e;
    ze &&
      ((_e.style.cssText =
        'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
      (ze.style.cssText =
        'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
      re.appendChild(_e).appendChild(ze),
      (e = T.getComputedStyle(ze)),
      (Me = '1%' !== e.top),
      ($e = 12 === Qe(e.marginLeft)),
      (ze.style.right = '60%'),
      (Fe = 36 === Qe(e.right)),
      (Ie = 36 === Qe(e.width)),
      (ze.style.position = 'absolute'),
      (We = 12 === Qe(ze.offsetWidth / 3)),
      re.removeChild(_e),
      (ze = null));
  }
  function Qe(e) {
    return Math.round(parseFloat(e));
  }
  (_e = C.createElement('div')),
    (ze = C.createElement('div')).style &&
      ((ze.style.backgroundClip = 'content-box'),
      (ze.cloneNode(!0).style.backgroundClip = ''),
      (x.clearCloneStyle = 'content-box' === ze.style.backgroundClip),
      E.extend(x, {
        boxSizingReliable: function () {
          return Ye(), Ie;
        },
        pixelBoxStyles: function () {
          return Ye(), Fe;
        },
        pixelPosition: function () {
          return Ye(), Me;
        },
        reliableMarginLeft: function () {
          return Ye(), $e;
        },
        scrollboxSize: function () {
          return Ye(), We;
        },
        reliableTrDimensions: function () {
          var e, t, n;
          return (
            null == Be &&
              ((e = C.createElement('table')),
              (n = C.createElement('tr')),
              (t = C.createElement('div')),
              (e.style.cssText = 'position:absolute;left:-11111px'),
              (n.style.height = '1px'),
              (t.style.height = '9px'),
              re.appendChild(e).appendChild(n).appendChild(t),
              (n = T.getComputedStyle(n)),
              (Be = 3 < parseInt(n.height)),
              re.removeChild(e)),
            Be
          );
        },
      }));
  var Je = ['Webkit', 'Moz', 'ms'],
    Ke = C.createElement('div').style,
    Ze = {};
  function et(e) {
    return (
      E.cssProps[e] ||
      Ze[e] ||
      (e in Ke
        ? e
        : (Ze[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), n = Je.length;
                n--;

              )
                if ((e = Je[n] + t) in Ke) return e;
            })(e) || e))
    );
  }
  var tt = /^(none|table(?!-c[ea]).+)/,
    nt = /^--/,
    rt = { position: 'absolute', visibility: 'hidden', display: 'block' },
    it = { letterSpacing: '0', fontWeight: '400' };
  function ot(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function at(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += E.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= E.css(e, 'padding' + ne[a], !0, i)),
            'margin' !== n &&
              (u -= E.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += E.css(e, 'padding' + ne[a], !0, i)),
            'padding' !== n
              ? (u += E.css(e, 'border' + ne[a] + 'Width', !0, i))
              : (s += E.css(e, 'border' + ne[a] + 'Width', !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function st(e, t, n) {
    var r = Pe(e),
      i =
        (!x.boxSizingReliable() || n) &&
        'border-box' === E.css(e, 'boxSizing', !1, r),
      o = i,
      a = Ve(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Ue.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!x.boxSizingReliable() && i) ||
        (!x.reliableTrDimensions() && A(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === E.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === E.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        at(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function ut(e, t, n, r, i) {
    return new ut.prototype.init(e, t, n, r, i);
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            e = Ve(e, 'opacity');
            return '' === e ? '1' : e;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = nt.test(t),
          l = e.style;
        if (
          (u || (t = et(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' == (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (E.cssNumber[s] ? '' : 'px')),
            x.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o = X(t);
      return (
        nt.test(t) || (t = et(o)),
        'normal' ===
          (i =
            void 0 ===
            (i =
              (o = E.cssHooks[t] || E.cssHooks[o]) && 'get' in o
                ? o.get(e, !0, n)
                : i)
              ? Ve(e, t, r)
              : i) &&
          t in it &&
          (i = it[t]),
        '' === n || n
          ? ((t = parseFloat(i)), !0 === n || isFinite(t) ? t || 0 : i)
          : i
      );
    },
  }),
    E.each(['height', 'width'], function (e, s) {
      E.cssHooks[s] = {
        get: function (e, t, n) {
          if (t)
            return !tt.test(E.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? st(e, s, n)
              : Re(e, rt, function () {
                  return st(e, s, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Pe(e),
            o = !x.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === E.css(e, 'boxSizing', !1, i),
            n = n ? at(e, s, n, a, i) : 0;
          return (
            a &&
              o &&
              (n -= Math.ceil(
                e['offset' + s[0].toUpperCase() + s.slice(1)] -
                  parseFloat(i[s]) -
                  at(e, s, 'border', !1, i) -
                  0.5
              )),
            n &&
              (r = te.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[s] = t), (t = E.css(e, s))),
            ot(0, t, n)
          );
        },
      };
    }),
    (E.cssHooks.marginLeft = Ge(x.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ve(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Re(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    E.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      (E.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        'margin' !== i && (E.cssHooks[i + o].set = ot);
    }),
    E.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Pe(e), i = t.length; a < i; a++)
                o[t[a]] = E.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((E.Tween = ut).prototype = {
      constructor: ut,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || E.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (E.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = ut.propHooks[this.prop];
        return (e && e.get ? e : ut.propHooks._default).get(this);
      },
      run: function (e) {
        var t,
          n = ut.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                E.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          (n && n.set ? n : ut.propHooks._default).set(this),
          this
        );
      },
    }).init.prototype = ut.prototype),
    ((ut.propHooks = {
      _default: {
        get: function (e) {
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (e = E.css(e.elem, e.prop, '')) && 'auto' !== e
            ? e
            : 0;
        },
        set: function (e) {
          E.fx.step[e.prop]
            ? E.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!E.cssHooks[e.prop] && null == e.elem.style[et(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : E.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = ut.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (E.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (E.fx = ut.prototype.init),
    (E.fx.step = {});
  var lt,
    ct,
    ft = /^(?:toggle|show|hide)$/,
    pt = /queueHooks$/;
  function dt() {
    ct &&
      (!1 === C.hidden && T.requestAnimationFrame
        ? T.requestAnimationFrame(dt)
        : T.setTimeout(dt, E.fx.interval),
      E.fx.tick());
  }
  function ht() {
    return (
      T.setTimeout(function () {
        lt = void 0;
      }),
      (lt = Date.now())
    );
  }
  function gt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = ne[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function yt(e, t, n) {
    for (
      var r,
        i = (mt.tweeners[t] || []).concat(mt.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function mt(i, e, t) {
    var n,
      o,
      r = 0,
      a = mt.prefilters.length,
      s = E.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (o) return !1;
        for (
          var e = lt || ht(),
            e = Math.max(0, l.startTime + l.duration - e),
            t = 1 - (e / l.duration || 0),
            n = 0,
            r = l.tweens.length;
          n < r;
          n++
        )
          l.tweens[n].run(t);
        return (
          s.notifyWith(i, [l, t, e]),
          t < 1 && r
            ? e
            : (r || s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l]), !1)
        );
      },
      l = s.promise({
        elem: i,
        props: E.extend({}, e),
        opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: lt || ht(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          e = E.Tween(
            i,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(e), e;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (o) return this;
          for (o = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l, e]))
              : s.rejectWith(i, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      (function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = E.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < a;
      r++
    )
      if ((n = mt.prefilters[r].call(l, i, c, l.opts)))
        return (
          g(n.stop) &&
            (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      E.map(c, yt, l),
      g(l.opts.start) && l.opts.start.call(i, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      E.fx.timer(E.extend(u, { elem: i, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (E.Animation = E.extend(mt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      for (
        var n, r = 0, i = (e = g(e) ? ((t = e), ['*']) : e.match(P)).length;
        r < i;
        r++
      )
        (n = e[r]),
          (mt.tweeners[n] = mt.tweeners[n] || []),
          mt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = 'width' in t || 'height' in t,
          f = this,
          p = {},
          d = e.style,
          h = e.nodeType && ae(e),
          g = Y.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = E._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          f.always(function () {
            f.always(function () {
              a.unqueued--, E.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ft.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (h ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !g || void 0 === g[r]) continue;
              h = !0;
            }
            p[r] = (g && g[r]) || E.style(e, r);
          }
        if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
          for (r in (c &&
            1 === e.nodeType &&
            ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
            null == (l = g && g.display) && (l = Y.get(e, 'display')),
            'none' === (c = E.css(e, 'display')) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = E.css(e, 'display')),
                  le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === E.css(e, 'float') &&
              (u ||
                (f.done(function () {
                  d.display = l;
                }),
                null == l && ((c = d.display), (l = 'none' === c ? '' : c))),
              (d.display = 'inline-block'))),
          n.overflow &&
            ((d.overflow = 'hidden'),
            f.always(function () {
              (d.overflow = n.overflow[0]),
                (d.overflowX = n.overflow[1]),
                (d.overflowY = n.overflow[2]);
            })),
          (u = !1),
          p))
            u ||
              (g
                ? 'hidden' in g && (h = g.hidden)
                : (g = Y.access(e, 'fxshow', { display: l })),
              o && (g.hidden = !h),
              h && le([e], !0),
              f.done(function () {
                for (r in (h || le([e]), Y.remove(e, 'fxshow'), p))
                  E.style(e, r, p[r]);
              })),
              (u = yt(h ? g[r] : 0, r, f)),
              r in g ||
                ((g[r] = u.start), h && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
    },
  })),
    (E.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? E.extend({}, e)
          : {
              complete: n || (!n && t) || (g(e) && e),
              duration: e,
              easing: (n && t) || (t && !g(t) && t),
            };
      return (
        E.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in E.fx.speeds
              ? (r.duration = E.fx.speeds[r.duration])
              : (r.duration = E.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
        }),
        r
      );
    }),
    E.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = E.isEmptyObject(t),
          o = E.speed(e, n, r),
          r = function () {
            var e = mt(this, E.extend({}, t), o);
            (i || Y.get(this, 'finish')) && e.stop(!0);
          };
        return (
          (r.finish = r),
          i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        );
      },
      stop: function (i, e, o) {
        function a(e) {
          var t = e.stop;
          delete e.stop, t(o);
        }
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = E.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && pt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || E.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = E.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                E.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    E.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = E.fn[r];
      E.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(r, !0), e, t, n);
      };
    }),
    E.each(
      {
        slideDown: gt('show'),
        slideUp: gt('hide'),
        slideToggle: gt('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, r) {
        E.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (E.timers = []),
    (E.fx.tick = function () {
      var e,
        t = 0,
        n = E.timers;
      for (lt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || E.fx.stop(), (lt = void 0);
    }),
    (E.fx.timer = function (e) {
      E.timers.push(e), E.fx.start();
    }),
    (E.fx.interval = 13),
    (E.fx.start = function () {
      ct || ((ct = !0), dt());
    }),
    (E.fx.stop = function () {
      ct = null;
    }),
    (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (E.fn.delay = function (r, e) {
      return (
        (r = (E.fx && E.fx.speeds[r]) || r),
        this.queue((e = e || 'fx'), function (e, t) {
          var n = T.setTimeout(e, r);
          t.stop = function () {
            T.clearTimeout(n);
          };
        })
      );
    }),
    (f = C.createElement('input')),
    (ee = C.createElement('select').appendChild(C.createElement('option'))),
    (f.type = 'checkbox'),
    (x.checkOn = '' !== f.value),
    (x.optSelected = ee.selected),
    ((f = C.createElement('input')).value = 't'),
    (f.type = 'radio'),
    (x.radioValue = 't' === f.value);
  var vt,
    xt = E.expr.attrHandle;
  E.fn.extend({
    attr: function (e, t) {
      return $(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    },
  }),
    E.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? E.prop(e, t, n)
            : ((1 === o && E.isXMLDoc(e)) ||
                (i =
                  E.attrHooks[t.toLowerCase()] ||
                  (E.expr.match.bool.test(t) ? vt : void 0)),
              void 0 !== n
                ? null === n
                  ? void E.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : !(i && 'get' in i && null !== (r = i.get(e, t))) &&
                  null == (r = E.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!x.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (vt = {
      set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = xt[t] || E.find.attr;
      xt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = xt[o]),
            (xt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (xt[o] = i)),
          r
        );
      };
    });
  var bt = /^(?:input|select|textarea|button)$/i,
    wt = /^(?:a|area)$/i;
  function Tt(e) {
    return (e.match(P) || []).join(' ');
  }
  function Ct(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function Et(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
  }
  E.fn.extend({
    prop: function (e, t) {
      return $(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && E.isXMLDoc(e)) ||
              ((t = E.propFix[t] || t), (i = E.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : bt.test(e.nodeName) || (wt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    x.optSelected ||
      (E.propHooks.selected = {
        get: function (e) {
          e = e.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (e) {
          e = e.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    E.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s = 0;
        if (g(t))
          return this.each(function (e) {
            E(this).addClass(t.call(this, e, Ct(this)));
          });
        if ((e = Et(t)).length)
          for (; (n = this[s++]); )
            if (((a = Ct(n)), (r = 1 === n.nodeType && ' ' + Tt(a) + ' '))) {
              for (o = 0; (i = e[o++]); )
                r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ');
              a !== (a = Tt(r)) && n.setAttribute('class', a);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s = 0;
        if (g(t))
          return this.each(function (e) {
            E(this).removeClass(t.call(this, e, Ct(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = Et(t)).length)
          for (; (n = this[s++]); )
            if (((a = Ct(n)), (r = 1 === n.nodeType && ' ' + Tt(a) + ' '))) {
              for (o = 0; (i = e[o++]); )
                for (; -1 < r.indexOf(' ' + i + ' '); )
                  r = r.replace(' ' + i + ' ', ' ');
              a !== (a = Tt(r)) && n.setAttribute('class', a);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = 'string' == o || Array.isArray(i);
        return 'boolean' == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : g(i)
          ? this.each(function (e) {
              E(this).toggleClass(i.call(this, e, Ct(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a)
                for (t = 0, n = E(this), r = Et(i); (e = r[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== i && 'boolean' != o) ||
                  ((e = Ct(this)) && Y.set(this, '__className__', e),
                  this.setAttribute &&
                    this.setAttribute(
                      'class',
                      (!e && !1 !== i && Y.get(this, '__className__')) || ''
                    ));
            });
      },
      hasClass: function (e) {
        for (var t, n = 0, r = ' ' + e + ' '; (t = this[n++]); )
          if (1 === t.nodeType && -1 < (' ' + Tt(Ct(t)) + ' ').indexOf(r))
            return !0;
        return !1;
      },
    });
  var St = /\r/g;
  E.fn.extend({
    val: function (t) {
      var n,
        e,
        r,
        i = this[0];
      return arguments.length
        ? ((r = g(t)),
          this.each(function (e) {
            1 === this.nodeType &&
              (null == (e = r ? t.call(this, e, E(this).val()) : t)
                ? (e = '')
                : 'number' == typeof e
                ? (e += '')
                : Array.isArray(e) &&
                  (e = E.map(e, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((n =
                E.valHooks[this.type] ||
                E.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in n &&
                void 0 !== n.set(this, e, 'value')) ||
                (this.value = e));
          }))
        : i
        ? (n = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) &&
          'get' in n &&
          void 0 !== (e = n.get(i, 'value'))
          ? e
          : 'string' == typeof (e = i.value)
          ? e.replace(St, '')
          : null == e
          ? ''
          : e
        : void 0;
    },
  }),
    E.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = E.find.attr(e, 'value');
            return null != t ? t : Tt(E.text(e));
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n = e.options,
                r = e.selectedIndex,
                i = 'select-one' === e.type,
                o = i ? null : [],
                a = i ? r + 1 : n.length,
                s = r < 0 ? a : i ? r : 0;
              s < a;
              s++
            )
              if (
                ((t = n[s]).selected || s === r) &&
                !t.disabled &&
                (!t.parentNode.disabled || !A(t.parentNode, 'optgroup'))
              ) {
                if (((t = E(t).val()), i)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            for (
              var n, r, i = e.options, o = E.makeArray(t), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    E.each(['radio', 'checkbox'], function () {
      (E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < E.inArray(E(e).val(), t));
        },
      }),
        x.checkOn ||
          (E.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (x.focusin = 'onfocusin' in T);
  function kt(e) {
    e.stopPropagation();
  }
  var At = /^(?:focusinfocus|focusoutblur)$/;
  E.extend(E.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = [n || C],
        p = v.call(e, 'type') ? e.type : e,
        d = v.call(e, 'namespace') ? e.namespace.split('.') : [],
        h = (c = o = n = n || C);
      if (
        3 !== n.nodeType &&
        8 !== n.nodeType &&
        !At.test(p + E.event.triggered) &&
        (-1 < p.indexOf('.') && ((p = (d = p.split('.')).shift()), d.sort()),
        (s = p.indexOf(':') < 0 && 'on' + p),
        ((e = e[E.expando]
          ? e
          : new E.Event(p, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
        (e.namespace = d.join('.')),
        (e.rnamespace = e.namespace
          ? new RegExp('(^|\\.)' + d.join('\\.(?:.*\\.|)') + '(\\.|$)')
          : null),
        (e.result = void 0),
        e.target || (e.target = n),
        (t = null == t ? [e] : E.makeArray(t, [e])),
        (l = E.event.special[p] || {}),
        r || !l.trigger || !1 !== l.trigger.apply(n, t))
      ) {
        if (!r && !l.noBubble && !y(n)) {
          for (
            a = l.delegateType || p, At.test(a + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            f.push(h), (o = h);
          o === (n.ownerDocument || C) &&
            f.push(o.defaultView || o.parentWindow || T);
        }
        for (i = 0; (h = f[i++]) && !e.isPropagationStopped(); )
          (c = h),
            (e.type = 1 < i ? a : l.bindType || p),
            (u =
              (Y.get(h, 'events') || Object.create(null))[e.type] &&
              Y.get(h, 'handle')) && u.apply(h, t),
            (u = s && h[s]) &&
              u.apply &&
              V(h) &&
              ((e.result = u.apply(h, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = p),
          r ||
            e.isDefaultPrevented() ||
            (l._default && !1 !== l._default.apply(f.pop(), t)) ||
            !V(n) ||
            (s &&
              g(n[p]) &&
              !y(n) &&
              ((o = n[s]) && (n[s] = null),
              (E.event.triggered = p),
              e.isPropagationStopped() && c.addEventListener(p, kt),
              n[p](),
              e.isPropagationStopped() && c.removeEventListener(p, kt),
              (E.event.triggered = void 0),
              o && (n[s] = o))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      e = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
      E.event.trigger(e, null, t);
    },
  }),
    E.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      },
    }),
    x.focusin ||
      E.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
        function i(e) {
          E.event.simulate(r, e.target, E.event.fix(e));
        }
        E.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Nt = T.location,
    Dt = { guid: Date.now() },
    jt = /\?/;
  E.parseXML = function (e) {
    var t;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new T.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName('parsererror').length) ||
        E.error('Invalid XML: ' + e),
      t
    );
  };
  var qt = /\[\]$/,
    Lt = /\r?\n/g,
    Ht = /^(?:submit|button|image|reset|file)$/i,
    Ot = /^(?:input|select|textarea|keygen)/i;
  (E.param = function (e, t) {
    function n(e, t) {
      (t = g(t) ? t() : t),
        (i[i.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == t ? '' : t));
    }
    var r,
      i = [];
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        n(this.name, this.value);
      });
    else
      for (r in e)
        !(function n(r, e, i, o) {
          if (Array.isArray(e))
            E.each(e, function (e, t) {
              i || qt.test(r)
                ? o(r, t)
                : n(
                    r +
                      '[' +
                      ('object' == typeof t && null != t ? e : '') +
                      ']',
                    t,
                    i,
                    o
                  );
            });
          else if (i || 'object' !== h(e)) o(r, e);
          else for (var t in e) n(r + '[' + t + ']', e[t], i, o);
        })(r, e[r], t, n);
    return i.join('&');
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, 'elements');
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(':disabled') &&
              Ot.test(this.nodeName) &&
              !Ht.test(e) &&
              (this.checked || !ce.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(Lt, '\r\n') };
                })
              : { name: t.name, value: n.replace(Lt, '\r\n') };
          })
          .get();
      },
    });
  var Pt = /%20/g,
    Rt = /#.*$/,
    Mt = /([?&])_=[^&]*/,
    It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Wt = /^(?:GET|HEAD)$/,
    Ft = /^\/\//,
    Bt = {},
    $t = {},
    _t = '*/'.concat('*'),
    zt = C.createElement('a');
  function Ut(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (g(t))
        for (; (n = i[r++]); )
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Xt(t, r, i, o) {
    var a = {},
      s = t === $t;
    function u(e) {
      var n;
      return (
        (a[e] = !0),
        E.each(t[e] || [], function (e, t) {
          t = t(r, i, o);
          return 'string' != typeof t || s || a[t]
            ? s
              ? !(n = t)
              : void 0
            : (r.dataTypes.unshift(t), u(t), !1);
        }),
        n
      );
    }
    return u(r.dataTypes[0]) || (!a['*'] && u('*'));
  }
  function Vt(e, t) {
    var n,
      r,
      i = E.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : (r = r || {}))[n] = t[n]);
    return r && E.extend(!0, e, r), e;
  }
  (zt.href = Nt.href),
    E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Nt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Nt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': _t,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': E.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Vt(Vt(e, E.ajaxSettings), t) : Vt(E.ajaxSettings, e);
      },
      ajaxPrefilter: Ut(Bt),
      ajaxTransport: Ut($t),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0));
        var u,
          l,
          c,
          n,
          f,
          p,
          d,
          r,
          i,
          h = E.ajaxSetup({}, (t = t || {})),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? E(g) : E.event,
          m = E.Deferred(),
          v = E.Callbacks('once memory'),
          x = h.statusCode || {},
          o = {},
          a = {},
          s = 'canceled',
          b = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (p) {
                if (!n)
                  for (n = {}; (t = It.exec(c)); )
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return p ? c : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == p &&
                  ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e),
                  (o[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == p && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              if (e)
                if (p) b.always(e[b.status]);
                else for (var t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              e = e || s;
              return u && u.abort(e), w(0, e), this;
            },
          };
        if (
          (m.promise(b),
          (h.url = ((e || h.url || Nt.href) + '').replace(
            Ft,
            Nt.protocol + '//'
          )),
          (h.type = t.method || t.type || h.method || h.type),
          (h.dataTypes = (h.dataType || '*').toLowerCase().match(P) || ['']),
          null == h.crossDomain)
        ) {
          i = C.createElement('a');
          try {
            (i.href = h.url),
              (i.href = i.href),
              (h.crossDomain =
                zt.protocol + '//' + zt.host != i.protocol + '//' + i.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data &&
            h.processData &&
            'string' != typeof h.data &&
            (h.data = E.param(h.data, h.traditional)),
          Xt(Bt, h, t, b),
          p)
        )
          return b;
        for (r in ((d = E.event && h.global) &&
          0 == E.active++ &&
          E.event.trigger('ajaxStart'),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Wt.test(h.type)),
        (l = h.url.replace(Rt, '')),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 ===
              (h.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (h.data = h.data.replace(Pt, '+'))
          : ((i = h.url.slice(l.length)),
            h.data &&
              (h.processData || 'string' == typeof h.data) &&
              ((l += (jt.test(l) ? '&' : '?') + h.data), delete h.data),
            !1 === h.cache &&
              ((l = l.replace(Mt, '$1')),
              (i = (jt.test(l) ? '&' : '?') + '_=' + Dt.guid++ + i)),
            (h.url = l + i)),
        h.ifModified &&
          (E.lastModified[l] &&
            b.setRequestHeader('If-Modified-Since', E.lastModified[l]),
          E.etag[l] && b.setRequestHeader('If-None-Match', E.etag[l])),
        ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) &&
          b.setRequestHeader('Content-Type', h.contentType),
        b.setRequestHeader(
          'Accept',
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] +
                ('*' !== h.dataTypes[0] ? ', ' + _t + '; q=0.01' : '')
            : h.accepts['*']
        ),
        h.headers))
          b.setRequestHeader(r, h.headers[r]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p))
          return b.abort();
        if (
          ((s = 'abort'),
          v.add(h.complete),
          b.done(h.success),
          b.fail(h.error),
          (u = Xt($t, h, t, b)))
        ) {
          if (((b.readyState = 1), d && y.trigger('ajaxSend', [b, h]), p))
            return b;
          h.async &&
            0 < h.timeout &&
            (f = T.setTimeout(function () {
              b.abort('timeout');
            }, h.timeout));
          try {
            (p = !1), u.send(o, w);
          } catch (e) {
            if (p) throw e;
            w(-1, e);
          }
        } else w(-1, 'No Transport');
        function w(e, t, n, r) {
          var i,
            o,
            a,
            s = t;
          p ||
            ((p = !0),
            f && T.clearTimeout(f),
            (u = void 0),
            (c = r || ''),
            (b.readyState = 0 < e ? 4 : 0),
            (r = (200 <= e && e < 300) || 304 === e),
            n &&
              (a = (function (e, t, n) {
                for (
                  var r, i, o, a, s = e.contents, u = e.dataTypes;
                  '*' === u[0];

                )
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a = a || i;
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(h, b, n)),
            !r &&
              -1 < E.inArray('script', h.dataTypes) &&
              (h.converters['text script'] = function () {}),
            (a = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(h, a, b, r)),
            r
              ? (h.ifModified &&
                  ((n = b.getResponseHeader('Last-Modified')) &&
                    (E.lastModified[l] = n),
                  (n = b.getResponseHeader('etag')) && (E.etag[l] = n)),
                204 === e || 'HEAD' === h.type
                  ? (s = 'nocontent')
                  : 304 === e
                  ? (s = 'notmodified')
                  : ((s = a.state), (i = a.data), (r = !(o = a.error))))
              : ((o = s), (!e && s) || ((s = 'error'), e < 0 && (e = 0))),
            (b.status = e),
            (b.statusText = (t || s) + ''),
            r ? m.resolveWith(g, [i, s, b]) : m.rejectWith(g, [b, s, o]),
            b.statusCode(x),
            (x = void 0),
            d && y.trigger(r ? 'ajaxSuccess' : 'ajaxError', [b, h, r ? i : o]),
            v.fireWith(g, [b, s]),
            d &&
              (y.trigger('ajaxComplete', [b, h]),
              --E.active || E.event.trigger('ajaxStop')));
        }
        return b;
      },
      getJSON: function (e, t, n) {
        return E.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return E.get(e, void 0, t, 'script');
      },
    }),
    E.each(['get', 'post'], function (e, i) {
      E[i] = function (e, t, n, r) {
        return (
          g(t) && ((r = r || n), (n = t), (t = void 0)),
          E.ajax(
            E.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              E.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    E.ajaxPrefilter(function (e) {
      for (var t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (E._evalUrl = function (e, t, n) {
      return E.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          E.globalEval(e, t, n);
        },
      });
    }),
    E.fn.extend({
      wrapAll: function (e) {
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (e = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return g(n)
          ? this.each(function (e) {
              E(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = E(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = g(t);
        return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (E.ajaxSettings.xhr = function () {
      try {
        return new T.XMLHttpRequest();
      } catch (e) {}
    });
  var Gt = { 0: 200, 1223: 204 },
    Yt = E.ajaxSettings.xhr();
  (x.cors = !!Yt && 'withCredentials' in Yt),
    (x.ajax = Yt = !!Yt),
    E.ajaxTransport(function (i) {
      var o, a;
      if (x.cors || (Yt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        Gt[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') ||
                          'string' != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      T.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    E.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    E.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return E.globalEval(e), e;
        },
      },
    }),
    E.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    E.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = E('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              C.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Qt = [],
    Jt = /(=)\?(?=&|$)|\?\?/;
  E.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = Qt.pop() || E.expando + '_' + Dt.guid++;
      return (this[e] = !0), e;
    },
  }),
    E.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Jt.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Jt.test(e.data) &&
              'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Jt, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (jt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || E.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = T[r]),
          (T[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? E(T).removeProp(r) : (T[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(r)),
              o && g(i) && i(o[0]),
              (o = i = void 0);
          }),
          'script'
        );
    }),
    (x.createHTMLDocument =
      (((f = C.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === f.childNodes.length)),
    (E.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (x.createHTMLDocument
              ? (((r = (t =
                  C.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = C.location.href),
                t.head.appendChild(r))
              : (t = C)),
          (r = !n && []),
          (n = N.exec(e))
            ? [t.createElement(n[1])]
            : ((n = me([e], t, r)),
              r && r.length && E(r).remove(),
              E.merge([], n.childNodes)));
      var r;
    }),
    (E.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = Tt(e.slice(s))), (e = e.slice(0, s))),
        g(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          E.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? E('<div>').append(E.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (E.expr.pseudos.animated = function (t) {
      return E.grep(E.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (E.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s = E.css(e, 'position'),
          u = E(e),
          l = {};
        'static' === s && (e.style.position = 'relative'),
          (o = u.offset()),
          (r = E.css(e, 'top')),
          (a = E.css(e, 'left')),
          (a =
            ('absolute' === s || 'fixed' === s) && -1 < (r + a).indexOf('auto')
              ? ((i = (s = u.position()).top), s.left)
              : ((i = parseFloat(r) || 0), parseFloat(a) || 0)),
          null != (t = g(t) ? t.call(e, n, E.extend({}, o)) : t).top &&
            (l.top = t.top - o.top + i),
          null != t.left && (l.left = t.left - o.left + a),
          'using' in t
            ? t.using.call(e, l)
            : ('number' == typeof l.top && (l.top += 'px'),
              'number' == typeof l.left && (l.left += 'px'),
              u.css(l));
      },
    }),
    E.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                E.offset.setOffset(this, t, e);
              });
        var e,
          n = this[0];
        return n
          ? n.getClientRects().length
            ? ((e = n.getBoundingClientRect()),
              (n = n.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === E.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                n = r.ownerDocument,
                e = r.offsetParent || n.documentElement;
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === E.css(e, 'position');

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = E(e).offset()).top += E.css(e, 'borderTopWidth', !0)),
              (i.left += E.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - E.css(r, 'marginTop', !0),
            left: t.left - i.left - E.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && 'static' === E.css(e, 'position');

          )
            e = e.offsetParent;
          return e || re;
        });
      },
    }),
    E.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, i) {
        var o = 'pageYOffset' === i;
        E.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              return (
                y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n
                  ? r
                    ? r[i]
                    : e[t]
                  : void (r
                      ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                      : (e[t] = n))
              );
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    E.each(['top', 'left'], function (e, n) {
      E.cssHooks[n] = Ge(x.pixelPosition, function (e, t) {
        if (t)
          return (t = Ve(e, n)), Ue.test(t) ? E(e).position()[n] + 'px' : t;
      });
    }),
    E.each({ Height: 'height', Width: 'width' }, function (a, s) {
      E.each(
        { padding: 'inner' + a, content: s, '': 'outer' + a },
        function (r, o) {
          E.fn[o] = function (e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border');
            return $(
              this,
              function (e, t, n) {
                var r;
                return y(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + a]
                    : e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body['scroll' + a],
                      r['scroll' + a],
                      e.body['offset' + a],
                      r['offset' + a],
                      r['client' + a]
                    ))
                  : void 0 === n
                  ? E.css(e, t, i)
                  : E.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    E.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        E.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    E.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        E.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (E.proxy = function (e, t) {
    var n, r;
    if (('string' == typeof t && ((r = e[t]), (t = e), (e = r)), g(e)))
      return (
        (n = s.call(arguments, 2)),
        ((r = function () {
          return e.apply(t || this, n.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || E.guid++),
        r
      );
  }),
    (E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = A),
    (E.isFunction = g),
    (E.isWindow = y),
    (E.camelCase = X),
    (E.type = h),
    (E.now = Date.now),
    (E.isNumeric = function (e) {
      var t = E.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (E.trim = function (e) {
      return null == e ? '' : (e + '').replace(Kt, '');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return E;
      });
  var Zt = T.jQuery,
    en = T.$;
  return (
    (E.noConflict = function (e) {
      return T.$ === E && (T.$ = en), e && T.jQuery === E && (T.jQuery = Zt), E;
    }),
    void 0 === e && (T.jQuery = T.$ = E),
    E
  );
});
!(function (t) {
  'object' == typeof module && 'object' == typeof module.exports
    ? t(require('jquery'))
    : 'function' == typeof define && define.amd
    ? define([], t(window.jQuery))
    : t(window.jQuery);
})(function (s) {
  return s
    ? ((s.Unslider = function (t, n) {
        var o = this;
        return (
          (o._ = 'unslider'),
          (o.defaults = {
            autoplay: !1,
            delay: 3e3,
            speed: 750,
            easing: 'swing',
            keys: { prev: 37, next: 39 },
            nav: !0,
            arrows: {
              prev: '<a class="' + o._ + '-arrow prev">Prev</a>',
              next: '<a class="' + o._ + '-arrow next">Next</a>',
            },
            animation: 'horizontal',
            selectors: { container: 'ul:first', slides: 'li' },
            animateHeight: !1,
            activeClass: o._ + '-active',
            swipe: !0,
            swipeThreshold: 0.2,
          }),
          (o.$context = t),
          (o.options = {}),
          (o.$parent = null),
          (o.$container = null),
          (o.$slides = null),
          (o.$nav = null),
          (o.$arrows = []),
          (o.total = 0),
          (o.current = 0),
          (o.prefix = o._ + '-'),
          (o.eventSuffix = '.' + o.prefix + ~~(2e3 * Math.random())),
          (o.interval = []),
          (o.init = function (t) {
            return (
              (o.options = s.extend({}, o.defaults, t)),
              (o.$container = o.$context
                .find(o.options.selectors.container)
                .addClass(o.prefix + 'wrap')),
              (o.$slides = o.$container.children(o.options.selectors.slides)),
              o.setup(),
              s.each(['nav', 'arrows', 'keys', 'infinite'], function (t, n) {
                o.options[n] && o['init' + s._ucfirst(n)]();
              }),
              jQuery.event.special.swipe && o.options.swipe && o.initSwipe(),
              o.options.autoplay && o.start(),
              o.calculateSlides(),
              o.$context.trigger(o._ + '.ready'),
              o.animate(o.options.index || o.current, 'init')
            );
          }),
          (o.setup = function () {
            o.$context
              .addClass(o.prefix + o.options.animation)
              .wrap('<div class="' + o._ + '" />'),
              (o.$parent = o.$context.parent('.' + o._)),
              'static' === o.$context.css('position') &&
                o.$context.css('position', 'relative'),
              o.$context.css('overflow', 'hidden');
          }),
          (o.calculateSlides = function () {
            var t;
            (o.$slides = o.$container.children(o.options.selectors.slides)),
              (o.total = o.$slides.length),
              'fade' !== o.options.animation &&
                ((t = 'width'),
                'vertical' === o.options.animation && (t = 'height'),
                o.$container
                  .css(t, 100 * o.total + '%')
                  .addClass(o.prefix + 'carousel'),
                o.$slides.css(t, 100 / o.total + '%'));
          }),
          (o.start = function () {
            return (
              o.interval.push(
                setTimeout(function () {
                  o.next();
                }, o.options.delay)
              ),
              o
            );
          }),
          (o.stop = function () {
            for (var t; (t = o.interval.pop()); ) clearTimeout(t);
            return o;
          }),
          (o.initNav = function () {
            var e = s('<nav class="' + o.prefix + 'nav"><ol /></nav>');
            o.$slides.each(function (t) {
              var n = this.getAttribute('data-nav') || t + 1;
              s.isFunction(o.options.nav) &&
                (n = o.options.nav.call(o.$slides.eq(t), t, n)),
                e
                  .children('ol')
                  .append('<li data-slide="' + t + '">' + n + '</li>');
            }),
              (o.$nav = e.insertAfter(o.$context)),
              o.$nav.find('li').on('click' + o.eventSuffix, function () {
                var t = s(this).addClass(o.options.activeClass);
                t.siblings().removeClass(o.options.activeClass),
                  o.animate(t.attr('data-slide'));
              });
          }),
          (o.initArrows = function () {
            !0 === o.options.arrows && (o.options.arrows = o.defaults.arrows),
              s.each(o.options.arrows, function (t, n) {
                o.$arrows.push(
                  s(n)
                    .insertAfter(o.$context)
                    .on('click' + o.eventSuffix, o[t])
                );
              });
          }),
          (o.initKeys = function () {
            !0 === o.options.keys && (o.options.keys = o.defaults.keys),
              s(document).on('keyup' + o.eventSuffix, function (e) {
                s.each(o.options.keys, function (t, n) {
                  e.which === n && s.isFunction(o[t]) && o[t].call(o);
                });
              });
          }),
          (o.initSwipe = function () {
            var n = o.$slides.width();
            'fade' !== o.options.animation &&
              o.$container.on({
                movestart: function (t) {
                  if (
                    (t.distX > t.distY && t.distX < -t.distY) ||
                    (t.distX < t.distY && t.distX > -t.distY)
                  )
                    return !!t.preventDefault();
                  o.$container.css('position', 'relative');
                },
                move: function (t) {
                  o.$container.css(
                    'left',
                    -100 * o.current + (100 * t.distX) / n + '%'
                  );
                },
                moveend: function (t) {
                  Math.abs(t.distX) / n > o.options.swipeThreshold
                    ? o[t.distX < 0 ? 'next' : 'prev']()
                    : o.$container.animate(
                        { left: -100 * o.current + '%' },
                        o.options.speed / 2
                      );
                },
              });
          }),
          (o.initInfinite = function () {
            var e = ['first', 'last'];
            s.each(e, function (t, n) {
              o.$slides.push.apply(
                o.$slides,
                o.$slides
                  .filter(':not(".' + o._ + '-clone")')
                  [n]()
                  .clone()
                  .addClass(o._ + '-clone')
                  ['insert' + (0 === t ? 'After' : 'Before')](
                    o.$slides[e[~~!t]]()
                  )
              );
            });
          }),
          (o.destroyArrows = function () {
            s.each(o.$arrows, function (t, n) {
              n.remove();
            });
          }),
          (o.destroySwipe = function () {
            o.$container.off('movestart move moveend');
          }),
          (o.destroyKeys = function () {
            s(document).off('keyup' + o.eventSuffix);
          }),
          (o.setIndex = function (t) {
            return (
              t < 0 && (t = o.total - 1),
              (o.current = Math.min(Math.max(0, t), o.total - 1)),
              o.options.nav &&
                o.$nav
                  .find('[data-slide="' + o.current + '"]')
                  ._active(o.options.activeClass),
              o.$slides.eq(o.current)._active(o.options.activeClass),
              o
            );
          }),
          (o.animate = function (t, n) {
            if (
              ('last' === (t = 'first' === t ? 0 : t) && (t = o.total),
              isNaN(t))
            )
              return o;
            o.options.autoplay && o.stop().start(),
              o.setIndex(t),
              o.$context.trigger(o._ + '.change', [t, o.$slides.eq(t)]);
            t = 'animate' + s._ucfirst(o.options.animation);
            return s.isFunction(o[t]) && o[t](o.current, n), o;
          }),
          (o.next = function () {
            var t = o.current + 1;
            return (
              t >= o.total &&
                (t = o.options.noloop && !o.options.infinite ? o.total - 1 : 0),
              o.animate(t, 'next')
            );
          }),
          (o.prev = function () {
            var t = o.current - 1;
            return (
              t < 0 &&
                (t = o.options.noloop && !o.options.infinite ? 0 : o.total - 1),
              o.animate(t, 'prev')
            );
          }),
          (o.animateHorizontal = function (t) {
            var n = 'left';
            return (
              'rtl' === o.$context.attr('dir') && (n = 'right'),
              o.options.infinite && o.$container.css('margin-' + n, '-100%'),
              o.slide(n, t)
            );
          }),
          (o.animateVertical = function (t) {
            return (
              (o.options.animateHeight = !0),
              o.options.infinite &&
                o.$container.css('margin-top', -o.$slides.outerHeight()),
              o.slide('top', t)
            );
          }),
          (o.slide = function (t, n) {
            var e;
            o.animateHeight(n),
              o.options.infinite &&
                (n === o.total - 1 && ((e = o.total - 3), (n = -1)),
                n === o.total - 2 && ((e = 0), (n = o.total - 2)),
                'number' == typeof e &&
                  (o.setIndex(e),
                  o.$context.on(o._ + '.moved', function () {
                    o.current === e &&
                      o.$container.css(t, -100 * e + '%').off(o._ + '.moved');
                  })));
            var i = {};
            return (i[t] = -100 * n + '%'), o._move(o.$container, i);
          }),
          (o.animateFade = function (t) {
            o.animateHeight(t);
            t = o.$slides.eq(t).addClass(o.options.activeClass);
            o._move(t.siblings().removeClass(o.options.activeClass), {
              opacity: 0,
            }),
              o._move(t, { opacity: 1 }, !1);
          }),
          (o.animateHeight = function (t) {
            o.options.animateHeight &&
              o._move(
                o.$context,
                { height: o.$slides.eq(t).outerHeight() },
                !1
              );
          }),
          (o._move = function (t, n, e, i) {
            return (
              !1 !== e &&
                (e = function () {
                  o.$context.trigger(o._ + '.moved');
                }),
              t._move(n, i || o.options.speed, o.options.easing, e)
            );
          }),
          o.init(n)
        );
      }),
      (s.fn._active = function (t) {
        return this.addClass(t).siblings().removeClass(t);
      }),
      (s._ucfirst = function (t) {
        return (t + '').toLowerCase().replace(/^./, function (t) {
          return t.toUpperCase();
        });
      }),
      (s.fn._move = function () {
        return (
          this.stop(!0, !0),
          s.fn[s.fn.velocity ? 'velocity' : 'animate'].apply(this, arguments)
        );
      }),
      void (s.fn.unslider = function (i) {
        return this.each(function (t, n) {
          var e = s(n);
          if (!(s(n).data('unslider') instanceof s.Unslider)) {
            if ('string' == typeof i && e.data('unslider')) {
              i = i.split(':');
              n = e.data('unslider')[i[0]];
              if (s.isFunction(n))
                return n.apply(e, i[1] ? i[1].split(',') : null);
            }
            return e.data('unslider', new s.Unslider(e, i));
          }
        });
      }))
    : console.warn('Unslider needs jQuery');
});
jQuery(document).ready(function (e) {
  e('.banner').unslider({ autoplay: !0, infinite: !0 });
}),
  jQuery(document).ready(function () {
    jQuery('.cookie-close').on('click', function (e) {
      jQuery('.cookie').toggle('show');
    });
  }),
  $(document).ready(function () {
    $('.search-bar').mouseenter(function () {
      $('.search-bar').stop().show();
    }),
      $('.search-bar, .search-bar').mouseleave(function () {
        $('.search-bar').is(':hover') || $('.search-bar').hide();
      });
  }),
  document.querySelector('.menu-dots').addEventListener('click', function () {
    (document.querySelector('.header-mobile').style.display = 'none'),
      (document.querySelector('.mobile').style.display = 'block'),
      document.body.classList.add('hide');
  }),
  document.querySelector('.fa-times').addEventListener('click', function () {
    (document.querySelector('.header-mobile').style.display = 'flex'),
      (document.querySelector('.mobile').style.display = 'none'),
      document.body.classList.remove('hide');
  }),
  document.querySelector('.fa-search').addEventListener('click', function () {
    document.querySelector('.search-bar').style.display = 'flex';
  });
const menuMobile = document.querySelectorAll('.mobile-menu'),
  menuPlus = document.querySelectorAll('.sub-plus'),
  menuMinus = document.querySelectorAll('.sub-minus'),
  menuSubPlus = document.querySelectorAll('.sub-sub-plus'),
  menuSubMinus = document.querySelectorAll('.sub-sub-minus'),
  menuSub = document.querySelectorAll('.mobile-sub-menu'),
  menuSubTitle = document.querySelectorAll('.sub-menu-title'),
  menuSubMenu = document.querySelectorAll('.mobile-sub-sub-menu');
for (let e = 0; e < menuPlus.length; e++)
  menuPlus[e].addEventListener('click', function () {
    (menuPlus[e].style.display = 'none'),
      (menuMinus[e].style.display = 'flex'),
      (menuSub[e].style.display = 'block'),
      (menuMobile[e].style.color = '#d41217'),
      (menuMobile[e].style.background = '#d4121733'),
      menuMobile[e].classList.add('active');
  });
for (let e = 0; e < menuMinus.length; e++)
  menuMinus[e].addEventListener('click', function () {
    (menuMinus[e].style.display = 'none'),
      (menuPlus[e].style.display = 'flex'),
      (menuSub[e].style.display = 'none'),
      (menuMobile[e].style.color = '#4a4a4a'),
      (menuMobile[e].style.background = '#fff'),
      menuMobile[e].classList.remove('active');
  });
for (let e = 0; e < menuSubPlus.length; e++)
  menuSubPlus[e].addEventListener('click', function () {
    (menuSubTitle[e].style.color = '#d41217'),
      (menuSubPlus[e].style.display = 'none'),
      (menuSubMinus[e].style.display = 'block'),
      (menuSubMenu[e].style.display = 'block');
  });
for (let e = 0; e < menuSubMinus.length; e++)
  menuSubMinus[e].addEventListener('click', function () {
    (menuSubPlus[e].style.display = 'block'),
      (menuSubMinus[e].style.display = 'none'),
      (menuSubMenu[e].style.display = 'none'),
      (menuSubTitle[e].style.color = '#4a4a4a');
  });
const menu = document.querySelectorAll('.menu'),
  menuSecondary = document.querySelectorAll('.secondary-menu');
for (let e = 0; e < menu.length; e++)
  menu[e].addEventListener('mouseover', function () {
    menuSecondary[e].style.display = 'block';
  });
for (let e = 0; e < menuSecondary.length; e++)
  menuSecondary[e].addEventListener('mousemove', function () {
    menuSecondary[e].style.display = 'block';
  });
for (let e = 0; e < menuSecondary.length; e++)
  menuSecondary[e].addEventListener('mouseout', function () {
    menuSecondary[e].style.display = 'none';
  });
for (let e = 0; e < menu.length; e++)
  menu[e].addEventListener('mouseout', function () {
    menuSecondary[e].style.display = 'none';
  });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJ1bnNsaWRlci1taW4uanMiLCJhcHAuanMiXSwibmFtZXMiOlsiZSIsInQiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsInRoaXMiLCJDIiwibSIsIm5vZGVUeXBlIiwieCIsInIiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInMiLCJzbGljZSIsImciLCJmbGF0IiwiY2FsbCIsImNvbmNhdCIsImFwcGx5IiwidSIsInB1c2giLCJpIiwiaW5kZXhPZiIsIm4iLCJvIiwidG9TdHJpbmciLCJ2IiwiaGFzT3duUHJvcGVydHkiLCJhIiwibCIsInkiLCJFIiwiYyIsInR5cGUiLCJzcmMiLCJub25jZSIsIm5vTW9kdWxlIiwiYiIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwidyIsImYiLCJTIiwiZm4iLCJpbml0IiwicCIsImxlbmd0aCIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsImdldCIsInB1c2hTdGFjayIsIm1lcmdlIiwicHJldk9iamVjdCIsImVhY2giLCJtYXAiLCJhcmd1bWVudHMiLCJmaXJzdCIsImVxIiwibGFzdCIsImV2ZW4iLCJncmVwIiwib2RkIiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzUGxhaW5PYmplY3QiLCJBcnJheSIsImlzQXJyYXkiLCJleHBhbmRvIiwiTWF0aCIsInJhbmRvbSIsInJlcGxhY2UiLCJpc1JlYWR5IiwiZXJyb3IiLCJub29wIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJtYWtlQXJyYXkiLCJpbkFycmF5IiwiZ3VpZCIsInN1cHBvcnQiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJkIiwibmUiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJpZSIsImNoYXJDb2RlQXQiLCJvZSIsIlQiLCJoIiwiRGF0ZSIsImsiLCJ1ZSIsIkEiLCJOIiwiRCIsImoiLCJxIiwicG9wIiwiTCIsIkgiLCJPIiwiUCIsIlIiLCJNIiwiSSIsIlciLCJGIiwiQiIsIlJlZ0V4cCIsIiQiLCJfIiwieiIsIlUiLCJYIiwiViIsIkciLCJJRCIsIkNMQVNTIiwiVEFHIiwiQVRUUiIsIlBTRVVETyIsIkNISUxEIiwiYm9vbCIsIm5lZWRzQ29udGV4dCIsIlkiLCJRIiwiSiIsIksiLCJaIiwiZWUiLCJ0ZSIsInJlIiwiYWUiLCJiZSIsImRpc2FibGVkIiwibm9kZU5hbWUiLCJkaXIiLCJuZXh0IiwiY2hpbGROb2RlcyIsInNlIiwib3duZXJEb2N1bWVudCIsImV4ZWMiLCJnZXRFbGVtZW50QnlJZCIsImlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicXNhIiwidGVzdCIsInllIiwic2NvcGUiLCJ4ZSIsImpvaW4iLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVtb3ZlQXR0cmlidXRlIiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsImxlIiwiY2UiLCJmZSIsImF0dHJIYW5kbGUiLCJwZSIsInNvdXJjZUluZGV4IiwibmV4dFNpYmxpbmciLCJnZSIsImlzRGlzYWJsZWQiLCJ2ZSIsImlzWE1MIiwibmFtZXNwYWNlVVJJIiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImF0dHJpYnV0ZXMiLCJjbGFzc05hbWUiLCJjcmVhdGVDb21tZW50IiwiZ2V0QnlJZCIsImdldEVsZW1lbnRzQnlOYW1lIiwiZmlsdGVyIiwiZmluZCIsImdldEF0dHJpYnV0ZU5vZGUiLCJ2YWx1ZSIsImlubmVySFRNTCIsIm1hdGNoZXNTZWxlY3RvciIsIm1hdGNoZXMiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJkaXNjb25uZWN0ZWRNYXRjaCIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiY29udGFpbnMiLCJzb3J0RGV0YWNoZWQiLCJ1bnNoaWZ0IiwiYXR0ciIsInNwZWNpZmllZCIsImVzY2FwZSIsInVuaXF1ZVNvcnQiLCJkZXRlY3REdXBsaWNhdGVzIiwic29ydFN0YWJsZSIsImdldFRleHQiLCJ0ZXh0Q29udGVudCIsImZpcnN0Q2hpbGQiLCJub2RlVmFsdWUiLCJzZWxlY3RvcnMiLCJjcmVhdGVQc2V1ZG8iLCJtYXRjaCIsInJlbGF0aXZlIiwiPiIsIiAiLCIrIiwifiIsInByZUZpbHRlciIsImxhc3RDaGlsZCIsInVuaXF1ZUlEIiwicHNldWRvcyIsInNldEZpbHRlcnMiLCJub3QiLCJoYXMiLCJsYW5nIiwidGFyZ2V0IiwibG9jYXRpb24iLCJoYXNoIiwicm9vdCIsImZvY3VzIiwiYWN0aXZlRWxlbWVudCIsImhhc0ZvY3VzIiwiaHJlZiIsInRhYkluZGV4IiwiZW5hYmxlZCIsImNoZWNrZWQiLCJzZWxlY3RlZCIsInNlbGVjdGVkSW5kZXgiLCJlbXB0eSIsInBhcmVudCIsImhlYWRlciIsImlucHV0IiwiYnV0dG9uIiwibHQiLCJndCIsIm50aCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsImRlIiwic3VibWl0IiwicmVzZXQiLCJoZSIsIm1lIiwid2UiLCJUZSIsIkVlIiwiQ2UiLCJmaWx0ZXJzIiwidG9rZW5pemUiLCJjb21waWxlIiwic2VsZWN0b3IiLCJzZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJleHByIiwidW5pcXVlIiwiaXNYTUxEb2MiLCJlc2NhcGVTZWxlY3RvciIsImlzIiwicmVhZHkiLCJwYXJzZUhUTUwiLCJjaGlsZHJlbiIsImNvbnRlbnRzIiwicHJldiIsImNsb3Nlc3QiLCJpbmRleCIsInByZXZBbGwiLCJhZGQiLCJhZGRCYWNrIiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImNvbnRlbnREb2N1bWVudCIsImNvbnRlbnQiLCJyZXZlcnNlIiwicHJvbWlzZSIsImRvbmUiLCJmYWlsIiwidGhlbiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJzdG9wT25GYWxzZSIsIm1lbW9yeSIsInJlbW92ZSIsImRpc2FibGUiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwiY2F0Y2giLCJwaXBlIiwicHJvZ3Jlc3MiLCJub3RpZnkiLCJyZXNvbHZlIiwicmVqZWN0IiwiVHlwZUVycm9yIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiZXhjZXB0aW9uSG9vayIsInN0YWNrVHJhY2UiLCJyZWplY3RXaXRoIiwiZ2V0U3RhY2tIb29rIiwic2V0VGltZW91dCIsIndoZW4iLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJtZXNzYWdlIiwic3RhY2siLCJyZWFkeUV4Y2VwdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVdhaXQiLCJyZWFkeVN0YXRlIiwiZG9TY3JvbGwiLCJ0b1VwcGVyQ2FzZSIsInVpZCIsImNhY2hlIiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJzZXQiLCJhY2Nlc3MiLCJoYXNEYXRhIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInJlbW92ZURhdGEiLCJfZGF0YSIsIl9yZW1vdmVEYXRhIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJzdG9wIiwiY2xlYXJRdWV1ZSIsInNvdXJjZSIsImNvbXBvc2VkIiwiZ2V0Um9vdE5vZGUiLCJzdHlsZSIsImRpc3BsYXkiLCJjc3MiLCJjdXIiLCJjc3NOdW1iZXIiLCJ1bml0Iiwic3RhcnQiLCJib2R5Iiwic2hvdyIsImhpZGUiLCJ0b2dnbGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwiX2RlZmF1bHQiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJvcHRncm91cCIsImh0bWxQcmVmaWx0ZXIiLCJjcmVhdGVUZXh0Tm9kZSIsIlNlIiwia2UiLCJvZmYiLCJldmVudCIsIkFlIiwibmFtZXNwYWNlIiwiaGFuZGxlciIsImlzVHJpZ2dlciIsInNwZWNpYWwiLCJkZWxlZ2F0ZVR5cGUiLCJzdG9wUHJvcGFnYXRpb24iLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRyaWdnZXIiLCJFdmVudCIsImdsb2JhbCIsImV2ZW50cyIsImNyZWF0ZSIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsImRlbGVnYXRlQ291bnQiLCJzZXR1cCIsInRlYXJkb3duIiwicmVtb3ZlRXZlbnQiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJybmFtZXNwYWNlIiwiaGFuZGxlT2JqIiwicmVzdWx0IiwicG9zdERpc3BhdGNoIiwiYWRkUHJvcCIsImVudW1lcmFibGUiLCJvcmlnaW5hbEV2ZW50Iiwid3JpdGFibGUiLCJsb2FkIiwibm9CdWJibGUiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInJlbGF0ZWRUYXJnZXQiLCJ0aW1lU3RhbXAiLCJub3ciLCJpc1NpbXVsYXRlZCIsImFsdEtleSIsImJ1YmJsZXMiLCJjYW5jZWxhYmxlIiwiY2hhbmdlZFRvdWNoZXMiLCJjdHJsS2V5IiwiZGV0YWlsIiwiZXZlbnRQaGFzZSIsIm1ldGFLZXkiLCJwYWdlWCIsInBhZ2VZIiwic2hpZnRLZXkiLCJ2aWV3IiwiY2hhciIsImNvZGUiLCJjaGFyQ29kZSIsImtleSIsImtleUNvZGUiLCJidXR0b25zIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwic2NyZWVuWCIsInNjcmVlblkiLCJ0YXJnZXRUb3VjaGVzIiwidG9FbGVtZW50IiwidG91Y2hlcyIsIndoaWNoIiwiYmx1ciIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwib24iLCJvbmUiLCJOZSIsIkRlIiwiamUiLCJxZSIsIkxlIiwiSGUiLCJPZSIsIlBlIiwiaHRtbCIsImNsb25lIiwiX2V2YWxVcmwiLCJSZSIsImNsZWFuRGF0YSIsImRldGFjaCIsImFwcGVuZCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJhZnRlciIsInJlcGxhY2VXaXRoIiwicmVwbGFjZUNoaWxkIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJpbnNlcnRBZnRlciIsInJlcGxhY2VBbGwiLCJJZSIsIm9wZW5lciIsImdldENvbXB1dGVkU3R5bGUiLCJXZSIsIk1lIiwiRmUiLCJCZSIsImdldFByb3BlcnR5VmFsdWUiLCJwaXhlbEJveFN0eWxlcyIsIndpZHRoIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIiRlIiwiY3NzVGV4dCIsIm1hcmdpbkxlZnQiLCJyaWdodCIsInBvc2l0aW9uIiwib2Zmc2V0V2lkdGgiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsImJveFNpemluZ1JlbGlhYmxlIiwicGl4ZWxQb3NpdGlvbiIsInJlbGlhYmxlTWFyZ2luTGVmdCIsInNjcm9sbGJveFNpemUiLCJyZWxpYWJsZVRyRGltZW5zaW9ucyIsImhlaWdodCIsInBhcnNlSW50IiwiX2UiLCJ6ZSIsIlVlIiwiWGUiLCJjc3NQcm9wcyIsIlZlIiwiR2UiLCJZZSIsInZpc2liaWxpdHkiLCJRZSIsImxldHRlclNwYWNpbmciLCJmb250V2VpZ2h0IiwiSmUiLCJtYXgiLCJLZSIsImNlaWwiLCJaZSIsImdldENsaWVudFJlY3RzIiwiZXQiLCJjc3NIb29rcyIsIm9wYWNpdHkiLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImNvbHVtbkNvdW50IiwiZmlsbE9wYWNpdHkiLCJmbGV4R3JvdyIsImZsZXhTaHJpbmsiLCJncmlkQXJlYSIsImdyaWRDb2x1bW4iLCJncmlkQ29sdW1uRW5kIiwiZ3JpZENvbHVtblN0YXJ0IiwiZ3JpZFJvdyIsImdyaWRSb3dFbmQiLCJncmlkUm93U3RhcnQiLCJsaW5lSGVpZ2h0Iiwib3JkZXIiLCJvcnBoYW5zIiwid2lkb3dzIiwiekluZGV4Iiwiem9vbSIsInNldFByb3BlcnR5IiwiaXNGaW5pdGUiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImV4cGFuZCIsIlR3ZWVuIiwicHJvcCIsImVhc2luZyIsIm9wdGlvbnMiLCJwcm9wSG9va3MiLCJydW4iLCJkdXJhdGlvbiIsInBvcyIsInN0ZXAiLCJmeCIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJsaW5lYXIiLCJzd2luZyIsImNvcyIsIlBJIiwidHQiLCJudCIsIm90IiwiYXQiLCJzdCIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsInV0IiwiY3QiLCJmdCIsInR3ZWVuZXJzIiwicHJlZmlsdGVycyIsInN0YXJ0VGltZSIsInR3ZWVucyIsInByb3BzIiwib3B0cyIsInNwZWNpYWxFYXNpbmciLCJvcmlnaW5hbFByb3BlcnRpZXMiLCJvcmlnaW5hbE9wdGlvbnMiLCJjcmVhdGVUd2VlbiIsImJpbmQiLCJjb21wbGV0ZSIsInRpbWVyIiwiYW5pbSIsIkFuaW1hdGlvbiIsIioiLCJ0d2VlbmVyIiwidW5xdWV1ZWQiLCJvdmVyZmxvdyIsIm92ZXJmbG93WCIsIm92ZXJmbG93WSIsInByZWZpbHRlciIsInNwZWVkIiwic3BlZWRzIiwib2xkIiwiZmFkZVRvIiwiYW5pbWF0ZSIsImZpbmlzaCIsInRpbWVycyIsInNsaWRlRG93biIsInNsaWRlVXAiLCJzbGlkZVRvZ2dsZSIsImZhZGVJbiIsImZhZGVPdXQiLCJmYWRlVG9nZ2xlIiwic2xvdyIsImZhc3QiLCJkZWxheSIsImNsZWFyVGltZW91dCIsInJ0IiwiaXQiLCJjaGVja09uIiwib3B0U2VsZWN0ZWQiLCJyYWRpb1ZhbHVlIiwicHQiLCJkdCIsInJlbW92ZUF0dHIiLCJhdHRySG9va3MiLCJodCIsInZ0IiwieXQiLCJtdCIsInJlbW92ZVByb3AiLCJwcm9wRml4IiwiZm9yIiwiY2xhc3MiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsInh0IiwidmFsIiwidmFsSG9va3MiLCJmb2N1c2luIiwid3QiLCJidCIsInBhcmVudFdpbmRvdyIsInNpbXVsYXRlIiwidHJpZ2dlckhhbmRsZXIiLCJUdCIsIkN0IiwiRXQiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIlN0Iiwia3QiLCJBdCIsIk50IiwicGFyYW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJEdCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwianQiLCJxdCIsIkx0IiwiSHQiLCJPdCIsIlB0IiwiUnQiLCJNdCIsIkl0IiwiV3QiLCJGdCIsIkJ0IiwiZGF0YVR5cGVzIiwiJHQiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsImFjdGl2ZSIsImxhc3RNb2RpZmllZCIsImV0YWciLCJ1cmwiLCJpc0xvY2FsIiwicHJvdG9jb2wiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJhY2NlcHRzIiwieG1sIiwianNvbiIsInJlc3BvbnNlRmllbGRzIiwiY29udmVydGVycyIsIiogdGV4dCIsInRleHQgaHRtbCIsInRleHQganNvbiIsInRleHQgeG1sIiwiY29udGV4dCIsImFqYXhTZXR1cCIsImFqYXhQcmVmaWx0ZXIiLCJhamF4VHJhbnNwb3J0IiwiYWpheCIsInN0YXR1c0NvZGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwibWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsIm1ldGhvZCIsImRhdGFUeXBlIiwiY3Jvc3NEb21haW4iLCJob3N0IiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwic3VjY2VzcyIsInRpbWVvdXQiLCJzZW5kIiwiZGF0YUZpbHRlciIsInRocm93cyIsInN0YXR1c1RleHQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0IiwidGV4dCBzY3JpcHQiLCJ3cmFwQWxsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ3cmFwSW5uZXIiLCJ3cmFwIiwidW53cmFwIiwidmlzaWJsZSIsIm9mZnNldEhlaWdodCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiX3QiLCIwIiwiMTIyMyIsInp0IiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbmFib3J0Iiwib250aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVzcG9uc2VUeXBlIiwicmVzcG9uc2VUZXh0IiwiYmluYXJ5IiwicmVzcG9uc2UiLCJzY3JpcHQiLCJzY3JpcHRBdHRycyIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiWHQiLCJWdCIsImpzb25wIiwianNvbnBDYWxsYmFjayIsImNyZWF0ZUhUTUxEb2N1bWVudCIsIlV0IiwiaW1wbGVtZW50YXRpb24iLCJhbmltYXRlZCIsIm9mZnNldCIsInNldE9mZnNldCIsInVzaW5nIiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCIiLCJ1bmJpbmQiLCJkZWxlZ2F0ZSIsInVuZGVsZWdhdGUiLCJob3ZlciIsIkd0IiwicHJveHkiLCJob2xkUmVhZHkiLCJwYXJzZUpTT04iLCJpc0Z1bmN0aW9uIiwiaXNXaW5kb3ciLCJjYW1lbENhc2UiLCJpc051bWVyaWMiLCJpc05hTiIsInRyaW0iLCJkZWZpbmUiLCJhbWQiLCJZdCIsImpRdWVyeSIsIlF0Iiwibm9Db25mbGljdCIsInJlcXVpcmUiLCJVbnNsaWRlciIsImRlZmF1bHRzIiwiYXV0b3BsYXkiLCJrZXlzIiwibmF2IiwiYXJyb3dzIiwiYW5pbWF0aW9uIiwiY29udGFpbmVyIiwic2xpZGVzIiwiYW5pbWF0ZUhlaWdodCIsImFjdGl2ZUNsYXNzIiwic3dpcGUiLCJzd2lwZVRocmVzaG9sZCIsIiRjb250ZXh0IiwiJHBhcmVudCIsIiRjb250YWluZXIiLCIkc2xpZGVzIiwiJG5hdiIsIiRhcnJvd3MiLCJ0b3RhbCIsImN1cnJlbnQiLCJwcmVmaXgiLCJldmVudFN1ZmZpeCIsIl91Y2ZpcnN0IiwiaW5pdFN3aXBlIiwiY2FsY3VsYXRlU2xpZGVzIiwiaW5pdE5hdiIsImluaXRBcnJvd3MiLCJpbml0S2V5cyIsIm1vdmVzdGFydCIsImRpc3RYIiwiZGlzdFkiLCJtb3ZlIiwibW92ZWVuZCIsImFicyIsImluaXRJbmZpbml0ZSIsImRlc3Ryb3lBcnJvd3MiLCJkZXN0cm95U3dpcGUiLCJkZXN0cm95S2V5cyIsInNldEluZGV4IiwibWluIiwiX2FjdGl2ZSIsIm5vbG9vcCIsImluZmluaXRlIiwiYW5pbWF0ZUhvcml6b250YWwiLCJzbGlkZSIsImFuaW1hdGVWZXJ0aWNhbCIsIm91dGVySGVpZ2h0IiwiX21vdmUiLCJhbmltYXRlRmFkZSIsInZlbG9jaXR5IiwidW5zbGlkZXIiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwibWVudU1vYmlsZSIsIm1lbnVQbHVzIiwibWVudU1pbnVzIiwibWVudVN1YlBsdXMiLCJtZW51U3ViTWludXMiLCJtZW51U3ViIiwibWVudVN1YlRpdGxlIiwibWVudVN1Yk1lbnUiLCJjb2xvciIsImJhY2tncm91bmQiLCJtZW51IiwibWVudVNlY29uZGFyeSJdLCJtYXBwaW5ncyI6IkNBQ0MsU0FBU0EsRUFBRUMsZ0JBQWdCLGlCQUFpQkMsUUFBUSxpQkFBaUJBLE9BQU9DLFFBQVFELE9BQU9DLFFBQVFILEVBQUVJLFNBQVNILEVBQUVELEdBQUUsR0FBSSxTQUFTQSxHQUFHLElBQUlBLEVBQUVJLFNBQVMsTUFBTSxJQUFJQyxNQUFNLDRDQUE0QyxPQUFPSixFQUFFRCxJQUFJQyxFQUFFRCxHQUE1TixDQUFnTyxvQkFBb0JNLE9BQU9BLE9BQU9DLEtBQUssU0FBVUMsRUFBRVIsZ0JBQStPLFNBQUZTLEVBQVdULEdBQUcsTUFBTSxtQkFBbUJBLEdBQUcsaUJBQWlCQSxFQUFFVSxTQUFZLFNBQUZDLEVBQVdYLEdBQUcsT0FBTyxNQUFNQSxHQUFHQSxJQUFJQSxFQUFFTSxPQUF4VSxJQUFJTCxFQUFFLEdBQUdXLEVBQUVDLE9BQU9DLGVBQWVDLEVBQUVkLEVBQUVlLE1BQU1DLEVBQUVoQixFQUFFaUIsS0FBSyxTQUFTbEIsR0FBRyxPQUFPQyxFQUFFaUIsS0FBS0MsS0FBS25CLElBQUksU0FBU0EsR0FBRyxPQUFPQyxFQUFFbUIsT0FBT0MsTUFBTSxHQUFHckIsSUFBSXNCLEVBQUVyQixFQUFFc0IsS0FBS0MsRUFBRXZCLEVBQUV3QixRQUFRQyxFQUFFLEdBQUdDLEVBQUVELEVBQUVFLFNBQVNDLEVBQUVILEVBQUVJLGVBQWVDLEVBQUVGLEVBQUVELFNBQVNJLEVBQUVELEVBQUVaLEtBQUtOLFFBQVFvQixFQUFFLEdBQXNIQyxFQUFFMUIsRUFBRUosU0FBUytCLEVBQUUsQ0FBQ0MsTUFBSyxFQUFHQyxLQUFJLEVBQUdDLE9BQU0sRUFBR0MsVUFBUyxHQUFJLFNBQVNDLEVBQUV4QyxFQUFFQyxFQUFFeUIsR0FBRyxJQUFJZCxFQUFFWSxFQUFFRyxHQUFHRCxFQUFFQSxHQUFHUSxHQUFHTyxjQUFjLFVBQVUsR0FBR2QsRUFBRWUsS0FBSzFD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R0EsRUFBSTQyQixjQUFjNzBCLE9BQVEvQixJQUN4QzQyQixjQUFjNTJCLEdBQUdxSyxpQkFBaUIsWUFBYSxXQUM3Q3VzQixjQUFjNTJCLEdBQUd3VixNQUFNQyxRQUFVLFVBR3JDLElBQUssSUFBSXpWLEVBQUksRUFBR0EsRUFBSTQyQixjQUFjNzBCLE9BQVEvQixJQUN4QzQyQixjQUFjNTJCLEdBQUdxSyxpQkFBaUIsV0FBWSxXQUM1Q3VzQixjQUFjNTJCLEdBQUd3VixNQUFNQyxRQUFVLFNBR3JDLElBQUssSUFBSXpWLEVBQUksRUFBR0EsRUFBSTIyQixLQUFLNTBCLE9BQVEvQixJQUMvQjIyQixLQUFLMzJCLEdBQUdxSyxpQkFBaUIsV0FBWSxXQUNuQ3VzQixjQUFjNTJCLEdBQUd3VixNQUFNQyxRQUFVIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjMuNS4xIHwgKGMpIEpTIEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWUuZG9jdW1lbnQ/dChlLCEwKTpmdW5jdGlvbihlKXtpZighZS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiB0KGUpfTp0KGUpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLChmdW5jdGlvbihDLGUpe1widXNlIHN0cmljdFwiO3ZhciB0PVtdLHI9T2JqZWN0LmdldFByb3RvdHlwZU9mLHM9dC5zbGljZSxnPXQuZmxhdD9mdW5jdGlvbihlKXtyZXR1cm4gdC5mbGF0LmNhbGwoZSl9OmZ1bmN0aW9uKGUpe3JldHVybiB0LmNvbmNhdC5hcHBseShbXSxlKX0sdT10LnB1c2gsaT10LmluZGV4T2Ysbj17fSxvPW4udG9TdHJpbmcsdj1uLmhhc093blByb3BlcnR5LGE9di50b1N0cmluZyxsPWEuY2FsbChPYmplY3QpLHk9e30sbT1mdW5jdGlvbihlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZcIm51bWJlclwiIT10eXBlb2YgZS5ub2RlVHlwZX0seD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZSYmZT09PWUud2luZG93fSxFPUMuZG9jdW1lbnQsYz17dHlwZTohMCxzcmM6ITAsbm9uY2U6ITAsbm9Nb2R1bGU6ITB9O2Z1bmN0aW9uIGIoZSx0LG4pe3ZhciByLGksbz0obj1ufHxFKS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKG8udGV4dD1lLHQpZm9yKHIgaW4gYykoaT10W3JdfHx0LmdldEF0dHJpYnV0ZSYmdC5nZXRBdHRyaWJ1dGUocikpJiZvLnNldEF0dHJpYnV0ZShyLGkpO24uaGVhZC5hcHBlbmRDaGlsZChvKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pfWZ1bmN0aW9uIHcoZSl7cmV0dXJuIG51bGw9PWU/ZStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP25bby5jYWxsKGUpXXx8XCJvYmplY3RcIjp0eXBlb2YgZX12YXIgZj1cIjMuNS4xXCIsUz1mdW5jdGlvbihlLHQpe3JldHVybiBuZXcgUy5mbi5pbml0KGUsdCl9O2Z1bmN0aW9uIHAoZSl7dmFyIHQ9ISFlJiZcImxlbmd0aFwiaW4gZSYmZS5sZW5ndGgsbj13KGUpO3JldHVybiFtKGUpJiYheChlKSYmKFwiYXJyYXlcIj09PW58fDA9PT10fHxcIm51bWJlclwiPT10eXBlb2YgdCYmMDx0JiZ0LTEgaW4gZSl9Uy5mbj1TLnByb3RvdHlwZT17anF1ZXJ5OmYsY29uc3RydWN0b3I6UyxsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHMuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP3MuY2FsbCh0aGlzKTplPDA/dGhpc1tlK3RoaXMubGVuZ3RoXTp0aGlzW2VdfSxwdXNoU3RhY2s6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksZSk7cmV0dXJuIHQucHJldk9iamVjdD10aGlzLHR9LGVhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFMuZWFjaCh0aGlzLGUpfSxtYXA6ZnVuY3Rpb24obil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMubWFwKHRoaXMsKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIG4uY2FsbChlLHQsZSl9KSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhzLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGV2ZW46ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soUy5ncmVwKHRoaXMsKGZ1bmN0aW9uKGUsdCl7cmV0dXJuKHQrMSklMn0pKSl9LG9kZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhTLmdyZXAodGhpcywoZnVuY3Rpb24oZSx0KXtyZXR1cm4gdCUyfSkpKX0sZXE6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5sZW5ndGgsbj0rZSsoZTwwP3Q6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKDA8PW4mJm48dD9bdGhpc1tuXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKCl9LHB1c2g6dSxzb3J0OnQuc29ydCxzcGxpY2U6dC5zcGxpY2V9LFMuZXh0ZW5kPVMuZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGUsdCxuLHIsaSxvLGE9YXJndW1lbnRzWzBdfHx7fSxzPTEsdT1hcmd1bWVudHMubGVuZ3RoLGw9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmKGw9YSxhPWFyZ3VtZW50c1tzXXx8e30scysrKSxcIm9iamVjdFwiPT10eXBlb2YgYXx8bShhKXx8KGE9e30pLHM9PT11JiYoYT10aGlzLHMtLSk7czx1O3MrKylpZihudWxsIT0oZT1hcmd1bWVudHNbc10pKWZvcih0IGluIGUpcj1lW3RdLFwiX19wcm90b19fXCIhPT10JiZhIT09ciYmKGwmJnImJihTLmlzUGxhaW5PYmplY3Qocil8fChpPUFycmF5LmlzQXJyYXkocikpKT8obj1hW3RdLG89aSYmIUFycmF5LmlzQXJyYXkobik/W106aXx8Uy5pc1BsYWluT2JqZWN0KG4pP246e30saT0hMSxhW3RdPVMuZXh0ZW5kKGwsbyxyKSk6dm9pZCAwIT09ciYmKGFbdF09cikpO3JldHVybiBhfSxTLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhmK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oZSl7dGhyb3cgbmV3IEVycm9yKGUpfSxub29wOmZ1bmN0aW9uKCl7fSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGUpe3ZhciB0LG47cmV0dXJuISghZXx8XCJbb2JqZWN0IE9iamVjdF1cIiE9PW8uY2FsbChlKXx8KHQ9cihlKSkmJihcImZ1bmN0aW9uXCIhPXR5cGVvZihuPXYuY2FsbCh0LFwiY29uc3RydWN0b3JcIikmJnQuY29uc3RydWN0b3IpfHxhLmNhbGwobikhPT1sKSl9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZSlyZXR1cm4hMTtyZXR1cm4hMH0sZ2xvYmFsRXZhbDpmdW5jdGlvbihlLHQsbil7YihlLHtub25jZTp0JiZ0Lm5vbmNlfSxuKX0sZWFjaDpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MDtpZihwKGUpKWZvcihuPWUubGVuZ3RoO3I8biYmITEhPT10LmNhbGwoZVtyXSxyLGVbcl0pO3IrKyk7ZWxzZSBmb3IociBpbiBlKWlmKCExPT09dC5jYWxsKGVbcl0scixlW3JdKSlicmVhaztyZXR1cm4gZX0sbWFrZUFycmF5OmZ1bmN0aW9uKGUsdCl7dmFyIG49dHx8W107cmV0dXJuIG51bGwhPWUmJihwKE9iamVjdChlKSk/Uy5tZXJnZShuLFwic3RyaW5nXCI9PXR5cGVvZiBlP1tlXTplKTp1LmNhbGwobixlKSksbn0saW5BcnJheTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIG51bGw9PXQ/LTE6aS5jYWxsKHQsZSxuKX0sbWVyZ2U6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49K3QubGVuZ3RoLHI9MCxpPWUubGVuZ3RoO3I8bjtyKyspZVtpKytdPXRbcl07cmV0dXJuIGUubGVuZ3RoPWksZX0sZ3JlcDpmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9MCxvPWUubGVuZ3RoLGE9IW47aTxvO2krKykhdChlW2ldLGkpIT09YSYmci5wdXNoKGVbaV0pO3JldHVybiByfSxtYXA6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz0wLGE9W107aWYocChlKSlmb3Iocj1lLmxlbmd0aDtvPHI7bysrKW51bGwhPShpPXQoZVtvXSxvLG4pKSYmYS5wdXNoKGkpO2Vsc2UgZm9yKG8gaW4gZSludWxsIT0oaT10KGVbb10sbyxuKSkmJmEucHVzaChpKTtyZXR1cm4gZyhhKX0sZ3VpZDoxLHN1cHBvcnQ6eX0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmKFMuZm5bU3ltYm9sLml0ZXJhdG9yXT10W1N5bWJvbC5pdGVyYXRvcl0pLFMuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3IgU3ltYm9sXCIuc3BsaXQoXCIgXCIpLChmdW5jdGlvbihlLHQpe25bXCJbb2JqZWN0IFwiK3QrXCJdXCJdPXQudG9Mb3dlckNhc2UoKX0pKTt2YXIgZD1mdW5jdGlvbihuKXt2YXIgZSxkLGIsbyxpLGgsZixnLHcsdSxsLFQsQyxhLEUsdixzLGMseSxTPVwic2l6emxlXCIrMSpuZXcgRGF0ZSxwPW4uZG9jdW1lbnQsaz0wLHI9MCxtPXVlKCkseD11ZSgpLEE9dWUoKSxOPXVlKCksRD1mdW5jdGlvbihlLHQpe3JldHVybiBlPT09dCYmKGw9ITApLDB9LGo9e30uaGFzT3duUHJvcGVydHksdD1bXSxxPXQucG9wLEw9dC5wdXNoLEg9dC5wdXNoLE89dC5zbGljZSxQPWZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKGVbbl09PT10KXJldHVybiBuO3JldHVybi0xfSxSPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixNPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixJPVwiKD86XFxcXFxcXFxbXFxcXGRhLWZBLUZdezEsNn1cIitNK1wiP3xcXFxcXFxcXFteXFxcXHJcXFxcblxcXFxmXXxbXFxcXHctXXxbXlxcMC1cXFxceDdmXSkrXCIsVz1cIlxcXFxbXCIrTStcIiooXCIrSStcIikoPzpcIitNK1wiKihbKl4kfCF+XT89KVwiK00rXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitJK1wiKSl8KVwiK00rXCIqXFxcXF1cIixGPVwiOihcIitJK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitXK1wiKSopfC4qKVxcXFwpfClcIixCPW5ldyBSZWdFeHAoTStcIitcIixcImdcIiksJD1uZXcgUmVnRXhwKFwiXlwiK00rXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK00rXCIrJFwiLFwiZ1wiKSxfPW5ldyBSZWdFeHAoXCJeXCIrTStcIiosXCIrTStcIipcIiksej1uZXcgUmVnRXhwKFwiXlwiK00rXCIqKFs+K35dfFwiK00rXCIpXCIrTStcIipcIiksVT1uZXcgUmVnRXhwKE0rXCJ8PlwiKSxYPW5ldyBSZWdFeHAoRiksVj1uZXcgUmVnRXhwKFwiXlwiK0krXCIkXCIpLEc9e0lEOm5ldyBSZWdFeHAoXCJeIyhcIitJK1wiKVwiKSxDTEFTUzpuZXcgUmVnRXhwKFwiXlxcXFwuKFwiK0krXCIpXCIpLFRBRzpuZXcgUmVnRXhwKFwiXihcIitJK1wifFsqXSlcIiksQVRUUjpuZXcgUmVnRXhwKFwiXlwiK1cpLFBTRVVETzpuZXcgUmVnRXhwKFwiXlwiK0YpLENISUxEOm5ldyBSZWdFeHAoXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiK00rXCIqKGV2ZW58b2RkfCgoWystXXwpKFxcXFxkKilufClcIitNK1wiKig/OihbKy1dfClcIitNK1wiKihcXFxcZCspfCkpXCIrTStcIipcXFxcKXwpXCIsXCJpXCIpLGJvb2w6bmV3IFJlZ0V4cChcIl4oPzpcIitSK1wiKSRcIixcImlcIiksbmVlZHNDb250ZXh0Om5ldyBSZWdFeHAoXCJeXCIrTStcIipbPit+XXw6KGV2ZW58b2RkfGVxfGd0fGx0fG50aHxmaXJzdHxsYXN0KSg/OlxcXFwoXCIrTStcIiooKD86LVxcXFxkKT9cXFxcZCopXCIrTStcIipcXFxcKXwpKD89W14tXXwkKVwiLFwiaVwiKX0sWT0vSFRNTCQvaSxRPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksSj0vXmhcXGQkL2ksSz0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFo9L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sZWU9L1srfl0vLHRlPW5ldyBSZWdFeHAoXCJcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiK00rXCI/fFxcXFxcXFxcKFteXFxcXHJcXFxcblxcXFxmXSlcIixcImdcIiksbmU9ZnVuY3Rpb24oZSx0KXt2YXIgbj1cIjB4XCIrZS5zbGljZSgxKS02NTUzNjtyZXR1cm4gdHx8KG48MD9TdHJpbmcuZnJvbUNoYXJDb2RlKG4rNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUobj4+MTB8NTUyOTYsMTAyMyZufDU2MzIwKSl9LHJlPS8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLGllPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQ/XCJcXDBcIj09PWU/XCLvv71cIjplLnNsaWNlKDAsLTEpK1wiXFxcXFwiK2UuY2hhckNvZGVBdChlLmxlbmd0aC0xKS50b1N0cmluZygxNikrXCIgXCI6XCJcXFxcXCIrZX0sb2U9ZnVuY3Rpb24oKXtUKCl9LGFlPWJlKChmdW5jdGlvbihlKXtyZXR1cm4hMD09PWUuZGlzYWJsZWQmJlwiZmllbGRzZXRcIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKX0pLHtkaXI6XCJwYXJlbnROb2RlXCIsbmV4dDpcImxlZ2VuZFwifSk7dHJ5e0guYXBwbHkodD1PLmNhbGwocC5jaGlsZE5vZGVzKSxwLmNoaWxkTm9kZXMpLHRbcC5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZSl7SD17YXBwbHk6dC5sZW5ndGg/ZnVuY3Rpb24oZSx0KXtMLmFwcGx5KGUsTy5jYWxsKHQpKX06ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49ZS5sZW5ndGgscj0wO2VbbisrXT10W3IrK107KTtlLmxlbmd0aD1uLTF9fX1mdW5jdGlvbiBzZSh0LGUsbixyKXt2YXIgaSxvLGEscyx1LGwsYyxmPWUmJmUub3duZXJEb2N1bWVudCxwPWU/ZS5ub2RlVHlwZTo5O2lmKG49bnx8W10sXCJzdHJpbmdcIiE9dHlwZW9mIHR8fCF0fHwxIT09cCYmOSE9PXAmJjExIT09cClyZXR1cm4gbjtpZighciYmKFQoZSksZT1lfHxDLEUpKXtpZigxMSE9PXAmJih1PVouZXhlYyh0KSkpaWYoaT11WzFdKXtpZig5PT09cCl7aWYoIShhPWUuZ2V0RWxlbWVudEJ5SWQoaSkpKXJldHVybiBuO2lmKGEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNlIGlmKGYmJihhPWYuZ2V0RWxlbWVudEJ5SWQoaSkpJiZ5KGUsYSkmJmEuaWQ9PT1pKXJldHVybiBuLnB1c2goYSksbn1lbHNle2lmKHVbMl0pcmV0dXJuIEguYXBwbHkobixlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpKSxuO2lmKChpPXVbM10pJiZkLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShuLGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpKSksbn1pZihkLnFzYSYmIU5bdCtcIiBcIl0mJighdnx8IXYudGVzdCh0KSkmJigxIT09cHx8XCJvYmplY3RcIiE9PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpe2lmKGM9dCxmPWUsMT09PXAmJihVLnRlc3QodCl8fHoudGVzdCh0KSkpe2ZvcigoZj1lZS50ZXN0KHQpJiZ5ZShlLnBhcmVudE5vZGUpfHxlKT09PWUmJmQuc2NvcGV8fCgocz1lLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXMucmVwbGFjZShyZSxpZSk6ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLHM9UykpLG89KGw9aCh0KSkubGVuZ3RoO28tLTspbFtvXT0ocz9cIiNcIitzOlwiOnNjb3BlXCIpK1wiIFwiK3hlKGxbb10pO2M9bC5qb2luKFwiLFwiKX10cnl7cmV0dXJuIEguYXBwbHkobixmLnF1ZXJ5U2VsZWN0b3JBbGwoYykpLG59Y2F0Y2goZSl7Tih0LCEwKX1maW5hbGx5e3M9PT1TJiZlLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGcodC5yZXBsYWNlKCQsXCIkMVwiKSxlLG4scil9ZnVuY3Rpb24gdWUoKXt2YXIgcj1bXTtyZXR1cm4gZnVuY3Rpb24gZSh0LG4pe3JldHVybiByLnB1c2godCtcIiBcIik+Yi5jYWNoZUxlbmd0aCYmZGVsZXRlIGVbci5zaGlmdCgpXSxlW3QrXCIgXCJdPW59fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBlW1NdPSEwLGV9ZnVuY3Rpb24gY2UoZSl7dmFyIHQ9Qy5jcmVhdGVFbGVtZW50KFwiZmllbGRzZXRcIik7dHJ5e3JldHVybiEhZSh0KX1jYXRjaChlKXtyZXR1cm4hMX1maW5hbGx5e3QucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpLHQ9bnVsbH19ZnVuY3Rpb24gZmUoZSx0KXtmb3IodmFyIG49ZS5zcGxpdChcInxcIikscj1uLmxlbmd0aDtyLS07KWIuYXR0ckhhbmRsZVtuW3JdXT10fWZ1bmN0aW9uIHBlKGUsdCl7dmFyIG49dCYmZSxyPW4mJjE9PT1lLm5vZGVUeXBlJiYxPT09dC5ub2RlVHlwZSYmZS5zb3VyY2VJbmRleC10LnNvdXJjZUluZGV4O2lmKHIpcmV0dXJuIHI7aWYobilmb3IoO249bi5uZXh0U2libGluZzspaWYobj09PXQpcmV0dXJuLTE7cmV0dXJuIGU/MTotMX1mdW5jdGlvbiBkZSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZlLnR5cGU9PT10fX1mdW5jdGlvbiBoZShuKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybihcImlucHV0XCI9PT10fHxcImJ1dHRvblwiPT09dCkmJmUudHlwZT09PW59fWZ1bmN0aW9uIGdlKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cImZvcm1cImluIGU/ZS5wYXJlbnROb2RlJiYhMT09PWUuZGlzYWJsZWQ/XCJsYWJlbFwiaW4gZT9cImxhYmVsXCJpbiBlLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmRpc2FibGVkPT09dDplLmRpc2FibGVkPT09dDplLmlzRGlzYWJsZWQ9PT10fHxlLmlzRGlzYWJsZWQhPT0hdCYmYWUoZSk9PT10OmUuZGlzYWJsZWQ9PT10OlwibGFiZWxcImluIGUmJmUuZGlzYWJsZWQ9PT10fX1mdW5jdGlvbiB2ZShhKXtyZXR1cm4gbGUoKGZ1bmN0aW9uKG8pe3JldHVybiBvPStvLGxlKChmdW5jdGlvbihlLHQpe2Zvcih2YXIgbixyPWEoW10sZS5sZW5ndGgsbyksaT1yLmxlbmd0aDtpLS07KWVbbj1yW2ldXSYmKGVbbl09ISh0W25dPWVbbl0pKX0pKX0pKX1mdW5jdGlvbiB5ZShlKXtyZXR1cm4gZSYmdm9pZCAwIT09ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSYmZX1mb3IoZSBpbiBkPXNlLnN1cHBvcnQ9e30saT1zZS5pc1hNTD1mdW5jdGlvbihlKXt2YXIgdD1lLm5hbWVzcGFjZVVSSSxuPShlLm93bmVyRG9jdW1lbnR8fGUpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4hWS50ZXN0KHR8fG4mJm4ubm9kZU5hbWV8fFwiSFRNTFwiKX0sVD1zZS5zZXREb2N1bWVudD1mdW5jdGlvbihlKXt2YXIgdCxuLHI9ZT9lLm93bmVyRG9jdW1lbnR8fGU6cDtyZXR1cm4gciE9QyYmOT09PXIubm9kZVR5cGUmJnIuZG9jdW1lbnRFbGVtZW50JiYoYT0oQz1yKS5kb2N1bWVudEVsZW1lbnQsRT0haShDKSxwIT1DJiYobj1DLmRlZmF1bHRWaWV3KSYmbi50b3AhPT1uJiYobi5hZGRFdmVudExpc3RlbmVyP24uYWRkRXZlbnRMaXN0ZW5lcihcInVubG9hZFwiLG9lLCExKTpuLmF0dGFjaEV2ZW50JiZuLmF0dGFjaEV2ZW50KFwib251bmxvYWRcIixvZSkpLGQuc2NvcGU9Y2UoKGZ1bmN0aW9uKGUpe3JldHVybiBhLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKEMuY3JlYXRlRWxlbWVudChcImRpdlwiKSksdm9pZCAwIT09ZS5xdWVyeVNlbGVjdG9yQWxsJiYhZS5xdWVyeVNlbGVjdG9yQWxsKFwiOnNjb3BlIGZpZWxkc2V0IGRpdlwiKS5sZW5ndGh9KSksZC5hdHRyaWJ1dGVzPWNlKChmdW5jdGlvbihlKXtyZXR1cm4gZS5jbGFzc05hbWU9XCJpXCIsIWUuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSkpLGQuZ2V0RWxlbWVudHNCeVRhZ05hbWU9Y2UoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmFwcGVuZENoaWxkKEMuY3JlYXRlQ29tbWVudChcIlwiKSksIWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aH0pKSxkLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9Sy50ZXN0KEMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksZC5nZXRCeUlkPWNlKChmdW5jdGlvbihlKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChlKS5pZD1TLCFDLmdldEVsZW1lbnRzQnlOYW1lfHwhQy5nZXRFbGVtZW50c0J5TmFtZShTKS5sZW5ndGh9KSksZC5nZXRCeUlkPyhiLmZpbHRlci5JRD1mdW5jdGlvbihlKXt2YXIgdD1lLnJlcGxhY2UodGUsbmUpO3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PXR9fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDAhPT10LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbj10LmdldEVsZW1lbnRCeUlkKGUpO3JldHVybiBuP1tuXTpbXX19KTooYi5maWx0ZXIuSUQ9ZnVuY3Rpb24oZSl7dmFyIG49ZS5yZXBsYWNlKHRlLG5lKTtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9dm9pZCAwIT09ZS5nZXRBdHRyaWJ1dGVOb2RlJiZlLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gdCYmdC52YWx1ZT09PW59fSxiLmZpbmQuSUQ9ZnVuY3Rpb24oZSx0KXtpZih2b2lkIDAhPT10LmdldEVsZW1lbnRCeUlkJiZFKXt2YXIgbixyLGksbz10LmdldEVsZW1lbnRCeUlkKGUpO2lmKG8pe2lmKChuPW8uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpKSYmbi52YWx1ZT09PWUpcmV0dXJuW29dO2ZvcihpPXQuZ2V0RWxlbWVudHNCeU5hbWUoZSkscj0wO289aVtyKytdOylpZigobj1vLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKSkmJm4udmFsdWU9PT1lKXJldHVybltvXX1yZXR1cm5bXX19KSxiLmZpbmQuVEFHPWQuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdm9pZCAwIT09dC5nZXRFbGVtZW50c0J5VGFnTmFtZT90LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpOmQucXNhP3QucXVlcnlTZWxlY3RvckFsbChlKTp2b2lkIDB9OmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1bXSxpPTAsbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpO2lmKFwiKlwiPT09ZSl7Zm9yKDtuPW9baSsrXTspMT09PW4ubm9kZVR5cGUmJnIucHVzaChuKTtyZXR1cm4gcn1yZXR1cm4gb30sYi5maW5kLkNMQVNTPWQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oZSx0KXtpZih2b2lkIDAhPT10LmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJkUpcmV0dXJuIHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShlKX0scz1bXSx2PVtdLChkLnFzYT1LLnRlc3QoQy5xdWVyeVNlbGVjdG9yQWxsKSkmJihjZSgoZnVuY3Rpb24oZSl7dmFyIHQ7YS5hcHBlbmRDaGlsZChlKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrUytcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK1MrXCItXFxyXFxcXCcgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnYucHVzaChcIlsqXiRdPVwiK00rXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGUucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHx2LnB1c2goXCJcXFxcW1wiK00rXCIqKD86dmFsdWV8XCIrUitcIilcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIitTK1wiLV1cIikubGVuZ3RofHx2LnB1c2goXCJ+PVwiKSwodD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwiXCIpLGUuYXBwZW5kQ2hpbGQodCksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9JyddXCIpLmxlbmd0aHx8di5wdXNoKFwiXFxcXFtcIitNK1wiKm5hbWVcIitNK1wiKj1cIitNK1wiKig/OicnfFxcXCJcXFwiKVwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHYucHVzaChcIjpjaGVja2VkXCIpLGUucXVlcnlTZWxlY3RvckFsbChcImEjXCIrUytcIisqXCIpLmxlbmd0aHx8di5wdXNoKFwiLiMuK1srfl1cIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiXFxcXFxcZlwiKSx2LnB1c2goXCJbXFxcXHJcXFxcblxcXFxmXVwiKX0pKSxjZSgoZnVuY3Rpb24oZSl7ZS5pbm5lckhUTUw9XCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjt2YXIgdD1DLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTt0LnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxlLmFwcGVuZENoaWxkKHQpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksZS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZ2LnB1c2goXCJuYW1lXCIrTStcIipbKl4kfCF+XT89XCIpLDIhPT1lLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGgmJnYucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5hcHBlbmRDaGlsZChlKS5kaXNhYmxlZD0hMCwyIT09ZS5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCYmdi5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHYucHVzaChcIiwuKjpcIil9KSkpLChkLm1hdGNoZXNTZWxlY3Rvcj1LLnRlc3QoYz1hLm1hdGNoZXN8fGEud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxhLm1vek1hdGNoZXNTZWxlY3Rvcnx8YS5vTWF0Y2hlc1NlbGVjdG9yfHxhLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmNlKChmdW5jdGlvbihlKXtkLmRpc2Nvbm5lY3RlZE1hdGNoPWMuY2FsbChlLFwiKlwiKSxjLmNhbGwoZSxcIltzIT0nJ106eFwiKSxzLnB1c2goXCIhPVwiLEYpfSkpLHY9di5sZW5ndGgmJm5ldyBSZWdFeHAodi5qb2luKFwifFwiKSkscz1zLmxlbmd0aCYmbmV3IFJlZ0V4cChzLmpvaW4oXCJ8XCIpKSx0PUsudGVzdChhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx5PXR8fEsudGVzdChhLmNvbnRhaW5zKT9mdW5jdGlvbihlLHQpe3ZhciBuPTk9PT1lLm5vZGVUeXBlP2UuZG9jdW1lbnRFbGVtZW50OmUscj10JiZ0LnBhcmVudE5vZGU7cmV0dXJuIGU9PT1yfHwhKCFyfHwxIT09ci5ub2RlVHlwZXx8IShuLmNvbnRhaW5zP24uY29udGFpbnMocik6ZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihyKSkpfTpmdW5jdGlvbihlLHQpe2lmKHQpZm9yKDt0PXQucGFyZW50Tm9kZTspaWYodD09PWUpcmV0dXJuITA7cmV0dXJuITF9LEQ9dD9mdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG49IWUuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIXQuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIG58fCgxJihuPShlLm93bmVyRG9jdW1lbnR8fGUpPT0odC5vd25lckRvY3VtZW50fHx0KT9lLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKHQpOjEpfHwhZC5zb3J0RGV0YWNoZWQmJnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZSk9PT1uP2U9PUN8fGUub3duZXJEb2N1bWVudD09cCYmeShwLGUpPy0xOnQ9PUN8fHQub3duZXJEb2N1bWVudD09cCYmeShwLHQpPzE6dT9QKHUsZSktUCh1LHQpOjA6NCZuPy0xOjEpfTpmdW5jdGlvbihlLHQpe2lmKGU9PT10KXJldHVybiBsPSEwLDA7dmFyIG4scj0wLGk9ZS5wYXJlbnROb2RlLG89dC5wYXJlbnROb2RlLGE9W2VdLHM9W3RdO2lmKCFpfHwhbylyZXR1cm4gZT09Qz8tMTp0PT1DPzE6aT8tMTpvPzE6dT9QKHUsZSktUCh1LHQpOjA7aWYoaT09PW8pcmV0dXJuIHBlKGUsdCk7Zm9yKG49ZTtuPW4ucGFyZW50Tm9kZTspYS51bnNoaWZ0KG4pO2ZvcihuPXQ7bj1uLnBhcmVudE5vZGU7KXMudW5zaGlmdChuKTtmb3IoO2Fbcl09PT1zW3JdOylyKys7cmV0dXJuIHI/cGUoYVtyXSxzW3JdKTphW3JdPT1wPy0xOnNbcl09PXA/MTowfSksQ30sc2UubWF0Y2hlcz1mdW5jdGlvbihlLHQpe3JldHVybiBzZShlLG51bGwsbnVsbCx0KX0sc2UubWF0Y2hlc1NlbGVjdG9yPWZ1bmN0aW9uKGUsdCl7aWYoVChlKSxkLm1hdGNoZXNTZWxlY3RvciYmRSYmIU5bdCtcIiBcIl0mJighc3x8IXMudGVzdCh0KSkmJighdnx8IXYudGVzdCh0KSkpdHJ5e3ZhciBuPWMuY2FsbChlLHQpO2lmKG58fGQuZGlzY29ubmVjdGVkTWF0Y2h8fGUuZG9jdW1lbnQmJjExIT09ZS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gbn1jYXRjaChlKXtOKHQsITApfXJldHVybiAwPHNlKHQsQyxudWxsLFtlXSkubGVuZ3RofSxzZS5jb250YWlucz1mdW5jdGlvbihlLHQpe3JldHVybihlLm93bmVyRG9jdW1lbnR8fGUpIT1DJiZUKGUpLHkoZSx0KX0sc2UuYXR0cj1mdW5jdGlvbihlLHQpeyhlLm93bmVyRG9jdW1lbnR8fGUpIT1DJiZUKGUpO3ZhciBuPWIuYXR0ckhhbmRsZVt0LnRvTG93ZXJDYXNlKCldLHI9biYmai5jYWxsKGIuYXR0ckhhbmRsZSx0LnRvTG93ZXJDYXNlKCkpP24oZSx0LCFFKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PXI/cjpkLmF0dHJpYnV0ZXN8fCFFP2UuZ2V0QXR0cmlidXRlKHQpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0sc2UuZXNjYXBlPWZ1bmN0aW9uKGUpe3JldHVybihlK1wiXCIpLnJlcGxhY2UocmUsaWUpfSxzZS5lcnJvcj1mdW5jdGlvbihlKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIitlKX0sc2UudW5pcXVlU29ydD1mdW5jdGlvbihlKXt2YXIgdCxuPVtdLHI9MCxpPTA7aWYobD0hZC5kZXRlY3REdXBsaWNhdGVzLHU9IWQuc29ydFN0YWJsZSYmZS5zbGljZSgwKSxlLnNvcnQoRCksbCl7Zm9yKDt0PWVbaSsrXTspdD09PWVbaV0mJihyPW4ucHVzaChpKSk7Zm9yKDtyLS07KWUuc3BsaWNlKG5bcl0sMSl9cmV0dXJuIHU9bnVsbCxlfSxvPXNlLmdldFRleHQ9ZnVuY3Rpb24oZSl7dmFyIHQsbj1cIlwiLHI9MCxpPWUubm9kZVR5cGU7aWYoaSl7aWYoMT09PWl8fDk9PT1pfHwxMT09PWkpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlLnRleHRDb250ZW50KXJldHVybiBlLnRleHRDb250ZW50O2ZvcihlPWUuZmlyc3RDaGlsZDtlO2U9ZS5uZXh0U2libGluZyluKz1vKGUpfWVsc2UgaWYoMz09PWl8fDQ9PT1pKXJldHVybiBlLm5vZGVWYWx1ZX1lbHNlIGZvcig7dD1lW3IrK107KW4rPW8odCk7cmV0dXJuIG59LChiPXNlLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmxlLG1hdGNoOkcsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT1lWzFdLnJlcGxhY2UodGUsbmUpLGVbM109KGVbM118fGVbNF18fGVbNV18fFwiXCIpLnJlcGxhY2UodGUsbmUpLFwifj1cIj09PWVbMl0mJihlWzNdPVwiIFwiK2VbM10rXCIgXCIpLGUuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09ZVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1lWzFdLnNsaWNlKDAsMyk/KGVbM118fHNlLmVycm9yKGVbMF0pLGVbNF09KyhlWzRdP2VbNV0rKGVbNl18fDEpOjIqKFwiZXZlblwiPT09ZVszXXx8XCJvZGRcIj09PWVbM10pKSxlWzVdPSsoZVs3XStlWzhdfHxcIm9kZFwiPT09ZVszXSkpOmVbM10mJnNlLmVycm9yKGVbMF0pLGV9LFBTRVVETzpmdW5jdGlvbihlKXt2YXIgdCxuPSFlWzZdJiZlWzJdO3JldHVybiBHLkNISUxELnRlc3QoZVswXSk/bnVsbDooZVszXT9lWzJdPWVbNF18fGVbNV18fFwiXCI6biYmWC50ZXN0KG4pJiYodD1oKG4sITApKSYmKHQ9bi5pbmRleE9mKFwiKVwiLG4ubGVuZ3RoLXQpLW4ubGVuZ3RoKSYmKGVbMF09ZVswXS5zbGljZSgwLHQpLGVbMl09bi5zbGljZSgwLHQpKSxlLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5yZXBsYWNlKHRlLG5lKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09ZT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihlKXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dH19LENMQVNTOmZ1bmN0aW9uKGUpe3ZhciB0PW1bZStcIiBcIl07cmV0dXJuIHR8fCh0PW5ldyBSZWdFeHAoXCIoXnxcIitNK1wiKVwiK2UrXCIoXCIrTStcInwkKVwiKSkmJm0oZSwoZnVuY3Rpb24oZSl7cmV0dXJuIHQudGVzdChcInN0cmluZ1wiPT10eXBlb2YgZS5jbGFzc05hbWUmJmUuY2xhc3NOYW1lfHx2b2lkIDAhPT1lLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KSl9LEFUVFI6ZnVuY3Rpb24obixyLGkpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1zZS5hdHRyKGUsbik7cmV0dXJuIG51bGw9PXQ/XCIhPVwiPT09cjohcnx8KHQrPVwiXCIsXCI9XCI9PT1yP3Q9PT1pOlwiIT1cIj09PXI/dCE9PWk6XCJePVwiPT09cj9pJiYwPT09dC5pbmRleE9mKGkpOlwiKj1cIj09PXI/aSYmLTE8dC5pbmRleE9mKGkpOlwiJD1cIj09PXI/aSYmdC5zbGljZSgtaS5sZW5ndGgpPT09aTpcIn49XCI9PT1yPy0xPChcIiBcIit0LnJlcGxhY2UoQixcIiBcIikrXCIgXCIpLmluZGV4T2YoaSk6XCJ8PVwiPT09ciYmKHQ9PT1pfHx0LnNsaWNlKDAsaS5sZW5ndGgrMSk9PT1pK1wiLVwiKSl9fSxDSElMRDpmdW5jdGlvbihoLGUsdCxnLHYpe3ZhciB5PVwibnRoXCIhPT1oLnNsaWNlKDAsMyksbT1cImxhc3RcIiE9PWguc2xpY2UoLTQpLHg9XCJvZi10eXBlXCI9PT1lO3JldHVybiAxPT09ZyYmMD09PXY/ZnVuY3Rpb24oZSl7cmV0dXJuISFlLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD15IT09bT9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixjPWUucGFyZW50Tm9kZSxmPXgmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxwPSFuJiYheCxkPSExO2lmKGMpe2lmKHkpe2Zvcig7bDspe2ZvcihhPWU7YT1hW2xdOylpZih4P2Eubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWY6MT09PWEubm9kZVR5cGUpcmV0dXJuITE7dT1sPVwib25seVwiPT09aCYmIXUmJlwibmV4dFNpYmxpbmdcIn1yZXR1cm4hMH1pZih1PVttP2MuZmlyc3RDaGlsZDpjLmxhc3RDaGlsZF0sbSYmcCl7Zm9yKGQ9KHM9KHI9KGk9KG89KGE9YylbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pJiZyWzJdLGE9cyYmYy5jaGlsZE5vZGVzW3NdO2E9KytzJiZhJiZhW2xdfHwoZD1zPTApfHx1LnBvcCgpOylpZigxPT09YS5ub2RlVHlwZSYmKytkJiZhPT09ZSl7aVtoXT1bayxzLGRdO2JyZWFrfX1lbHNlIGlmKHAmJihkPXM9KHI9KGk9KG89KGE9ZSlbU118fChhW1NdPXt9KSlbYS51bmlxdWVJRF18fChvW2EudW5pcXVlSURdPXt9KSlbaF18fFtdKVswXT09PWsmJnJbMV0pLCExPT09ZClmb3IoOyhhPSsrcyYmYSYmYVtsXXx8KGQ9cz0wKXx8dS5wb3AoKSkmJigoeD9hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkhPT1mOjEhPT1hLm5vZGVUeXBlKXx8ISsrZHx8KHAmJigoaT0obz1hW1NdfHwoYVtTXT17fSkpW2EudW5pcXVlSURdfHwob1thLnVuaXF1ZUlEXT17fSkpW2hdPVtrLGRdKSxhIT09ZSkpOyk7cmV0dXJuKGQtPXYpPT09Z3x8ZCVnPT0wJiYwPD1kL2d9fX0sUFNFVURPOmZ1bmN0aW9uKGUsbyl7dmFyIHQsYT1iLnBzZXVkb3NbZV18fGIuc2V0RmlsdGVyc1tlLnRvTG93ZXJDYXNlKCldfHxzZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrZSk7cmV0dXJuIGFbU10/YShvKToxPGEubGVuZ3RoPyh0PVtlLGUsXCJcIixvXSxiLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoZS50b0xvd2VyQ2FzZSgpKT9sZSgoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4scj1hKGUsbyksaT1yLmxlbmd0aDtpLS07KWVbbj1QKGUscltpXSldPSEodFtuXT1yW2ldKX0pKTpmdW5jdGlvbihlKXtyZXR1cm4gYShlLDAsdCl9KTphfX0scHNldWRvczp7bm90OmxlKChmdW5jdGlvbihlKXt2YXIgcj1bXSxpPVtdLHM9ZihlLnJlcGxhY2UoJCxcIiQxXCIpKTtyZXR1cm4gc1tTXT9sZSgoZnVuY3Rpb24oZSx0LG4scil7Zm9yKHZhciBpLG89cyhlLG51bGwscixbXSksYT1lLmxlbmd0aDthLS07KShpPW9bYV0pJiYoZVthXT0hKHRbYV09aSkpfSkpOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gclswXT1lLHMocixudWxsLG4saSksclswXT1udWxsLCFpLnBvcCgpfX0pKSxoYXM6bGUoKGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gMDxzZSh0LGUpLmxlbmd0aH19KSksY29udGFpbnM6bGUoKGZ1bmN0aW9uKHQpe3JldHVybiB0PXQucmVwbGFjZSh0ZSxuZSksZnVuY3Rpb24oZSl7cmV0dXJuLTE8KGUudGV4dENvbnRlbnR8fG8oZSkpLmluZGV4T2YodCl9fSkpLGxhbmc6bGUoKGZ1bmN0aW9uKG4pe3JldHVybiBWLnRlc3Qobnx8XCJcIil8fHNlLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrbiksbj1uLnJlcGxhY2UodGUsbmUpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oZSl7dmFyIHQ7ZG97aWYodD1FP2UubGFuZzplLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxlLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuKHQ9dC50b0xvd2VyQ2FzZSgpKT09PW58fDA9PT10LmluZGV4T2YobitcIi1cIil9d2hpbGUoKGU9ZS5wYXJlbnROb2RlKSYmMT09PWUubm9kZVR5cGUpO3JldHVybiExfX0pKSx0YXJnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9bi5sb2NhdGlvbiYmbi5sb2NhdGlvbi5oYXNoO3JldHVybiB0JiZ0LnNsaWNlKDEpPT09ZS5pZH0scm9vdDpmdW5jdGlvbihlKXtyZXR1cm4gZT09PWF9LGZvY3VzOmZ1bmN0aW9uKGUpe3JldHVybiBlPT09Qy5hY3RpdmVFbGVtZW50JiYoIUMuaGFzRm9jdXN8fEMuaGFzRm9jdXMoKSkmJiEhKGUudHlwZXx8ZS5ocmVmfHx+ZS50YWJJbmRleCl9LGVuYWJsZWQ6Z2UoITEpLGRpc2FibGVkOmdlKCEwKSxjaGVja2VkOmZ1bmN0aW9uKGUpe3ZhciB0PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT10JiYhIWUuY2hlY2tlZHx8XCJvcHRpb25cIj09PXQmJiEhZS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsITA9PT1lLnNlbGVjdGVkfSxlbXB0eTpmdW5jdGlvbihlKXtmb3IoZT1lLmZpcnN0Q2hpbGQ7ZTtlPWUubmV4dFNpYmxpbmcpaWYoZS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIWIucHNldWRvcy5lbXB0eShlKX0saGVhZGVyOmZ1bmN0aW9uKGUpe3JldHVybiBKLnRlc3QoZS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGUpe3JldHVybiBRLnRlc3QoZS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihlKXt2YXIgdD1lLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09dCYmXCJidXR0b25cIj09PWUudHlwZXx8XCJidXR0b25cIj09PXR9LHRleHQ6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWUudHlwZSYmKG51bGw9PSh0PWUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09dC50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6dmUoKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSkpLGxhc3Q6dmUoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuW3QtMV19KSksZXE6dmUoKGZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5bbjwwP24rdDpuXX0pKSxldmVuOnZlKChmdW5jdGlvbihlLHQpe2Zvcih2YXIgbj0wO248dDtuKz0yKWUucHVzaChuKTtyZXR1cm4gZX0pKSxvZGQ6dmUoKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciBuPTE7bjx0O24rPTIpZS5wdXNoKG4pO3JldHVybiBlfSkpLGx0OnZlKChmdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPW48MD9uK3Q6dDxuP3Q6bjswPD0tLXI7KWUucHVzaChyKTtyZXR1cm4gZX0pKSxndDp2ZSgoZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1uPDA/bit0Om47KytyPHQ7KWUucHVzaChyKTtyZXR1cm4gZX0pKX19KS5wc2V1ZG9zLm50aD1iLnBzZXVkb3MuZXEse3JhZGlvOiEwLGNoZWNrYm94OiEwLGZpbGU6ITAscGFzc3dvcmQ6ITAsaW1hZ2U6ITB9KWIucHNldWRvc1tlXT1kZShlKTtmb3IoZSBpbntzdWJtaXQ6ITAscmVzZXQ6ITB9KWIucHNldWRvc1tlXT1oZShlKTtmdW5jdGlvbiBtZSgpe31mdW5jdGlvbiB4ZShlKXtmb3IodmFyIHQ9MCxuPWUubGVuZ3RoLHI9XCJcIjt0PG47dCsrKXIrPWVbdF0udmFsdWU7cmV0dXJuIHJ9ZnVuY3Rpb24gYmUocyxlLHQpe3ZhciB1PWUuZGlyLGw9ZS5uZXh0LGM9bHx8dSxmPXQmJlwicGFyZW50Tm9kZVwiPT09YyxwPXIrKztyZXR1cm4gZS5maXJzdD9mdW5jdGlvbihlLHQsbil7Zm9yKDtlPWVbdV07KWlmKDE9PT1lLm5vZGVUeXBlfHxmKXJldHVybiBzKGUsdCxuKTtyZXR1cm4hMX06ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhPVtrLHBdO2lmKG4pe2Zvcig7ZT1lW3VdOylpZigoMT09PWUubm9kZVR5cGV8fGYpJiZzKGUsdCxuKSlyZXR1cm4hMH1lbHNlIGZvcig7ZT1lW3VdOylpZigxPT09ZS5ub2RlVHlwZXx8ZilpZihpPShvPWVbU118fChlW1NdPXt9KSlbZS51bmlxdWVJRF18fChvW2UudW5pcXVlSURdPXt9KSxsJiZsPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKWU9ZVt1XXx8ZTtlbHNle2lmKChyPWlbY10pJiZyWzBdPT09ayYmclsxXT09PXApcmV0dXJuIGFbMl09clsyXTtpZigoaVtjXT1hKVsyXT1zKGUsdCxuKSlyZXR1cm4hMH1yZXR1cm4hMX19ZnVuY3Rpb24gd2UoaSl7cmV0dXJuIDE8aS5sZW5ndGg/ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgcj1pLmxlbmd0aDtyLS07KWlmKCFpW3JdKGUsdCxuKSlyZXR1cm4hMTtyZXR1cm4hMH06aVswXX1mdW5jdGlvbiBUZShlLHQsbixyLGkpe2Zvcih2YXIgbyxhPVtdLHM9MCx1PWUubGVuZ3RoLGw9bnVsbCE9dDtzPHU7cysrKShvPWVbc10pJiYobiYmIW4obyxyLGkpfHwoYS5wdXNoKG8pLGwmJnQucHVzaChzKSkpO3JldHVybiBhfWZ1bmN0aW9uIENlKGQsaCxnLHYseSxlKXtyZXR1cm4gdiYmIXZbU10mJih2PUNlKHYpKSx5JiYheVtTXSYmKHk9Q2UoeSxlKSksbGUoKGZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVtdLHU9W10sbD10Lmxlbmd0aCxjPWV8fGZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspc2UoZSx0W3JdLG4pO3JldHVybiBufShofHxcIipcIixuLm5vZGVUeXBlP1tuXTpuLFtdKSxmPSFkfHwhZSYmaD9jOlRlKGMscyxkLG4scikscD1nP3l8fChlP2Q6bHx8dik/W106dDpmO2lmKGcmJmcoZixwLG4sciksdilmb3IoaT1UZShwLHUpLHYoaSxbXSxuLHIpLG89aS5sZW5ndGg7by0tOykoYT1pW29dKSYmKHBbdVtvXV09IShmW3Vbb11dPWEpKTtpZihlKXtpZih5fHxkKXtpZih5KXtmb3IoaT1bXSxvPXAubGVuZ3RoO28tLTspKGE9cFtvXSkmJmkucHVzaChmW29dPWEpO3kobnVsbCxwPVtdLGkscil9Zm9yKG89cC5sZW5ndGg7by0tOykoYT1wW29dKSYmLTE8KGk9eT9QKGUsYSk6c1tvXSkmJihlW2ldPSEodFtpXT1hKSl9fWVsc2UgcD1UZShwPT09dD9wLnNwbGljZShsLHAubGVuZ3RoKTpwKSx5P3kobnVsbCx0LHAscik6SC5hcHBseSh0LHApfSkpfWZ1bmN0aW9uIEVlKGUpe2Zvcih2YXIgaSx0LG4scj1lLmxlbmd0aCxvPWIucmVsYXRpdmVbZVswXS50eXBlXSxhPW98fGIucmVsYXRpdmVbXCIgXCJdLHM9bz8xOjAsdT1iZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1pfSksYSwhMCksbD1iZSgoZnVuY3Rpb24oZSl7cmV0dXJuLTE8UChpLGUpfSksYSwhMCksYz1bZnVuY3Rpb24oZSx0LG4pe3ZhciByPSFvJiYobnx8dCE9PXcpfHwoKGk9dCkubm9kZVR5cGU/dShlLHQsbik6bChlLHQsbikpO3JldHVybiBpPW51bGwscn1dO3M8cjtzKyspaWYodD1iLnJlbGF0aXZlW2Vbc10udHlwZV0pYz1bYmUod2UoYyksdCldO2Vsc2V7aWYoKHQ9Yi5maWx0ZXJbZVtzXS50eXBlXS5hcHBseShudWxsLGVbc10ubWF0Y2hlcykpW1NdKXtmb3Iobj0rK3M7bjxyJiYhYi5yZWxhdGl2ZVtlW25dLnR5cGVdO24rKyk7cmV0dXJuIENlKDE8cyYmd2UoYyksMTxzJiZ4ZShlLnNsaWNlKDAscy0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09ZVtzLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKCQsXCIkMVwiKSx0LHM8biYmRWUoZS5zbGljZShzLG4pKSxuPHImJkVlKGU9ZS5zbGljZShuKSksbjxyJiZ4ZShlKSl9Yy5wdXNoKHQpfXJldHVybiB3ZShjKX1yZXR1cm4gbWUucHJvdG90eXBlPWIuZmlsdGVycz1iLnBzZXVkb3MsYi5zZXRGaWx0ZXJzPW5ldyBtZSxoPXNlLnRva2VuaXplPWZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYSxzLHUsbD14W2UrXCIgXCJdO2lmKGwpcmV0dXJuIHQ/MDpsLnNsaWNlKDApO2ZvcihhPWUscz1bXSx1PWIucHJlRmlsdGVyO2E7KXtmb3IobyBpbiBuJiYhKHI9Xy5leGVjKGEpKXx8KHImJihhPWEuc2xpY2UoclswXS5sZW5ndGgpfHxhKSxzLnB1c2goaT1bXSkpLG49ITEsKHI9ei5leGVjKGEpKSYmKG49ci5zaGlmdCgpLGkucHVzaCh7dmFsdWU6bix0eXBlOnJbMF0ucmVwbGFjZSgkLFwiIFwiKX0pLGE9YS5zbGljZShuLmxlbmd0aCkpLGIuZmlsdGVyKSEocj1HW29dLmV4ZWMoYSkpfHx1W29dJiYhKHI9dVtvXShyKSl8fChuPXIuc2hpZnQoKSxpLnB1c2goe3ZhbHVlOm4sdHlwZTpvLG1hdGNoZXM6cn0pLGE9YS5zbGljZShuLmxlbmd0aCkpO2lmKCFuKWJyZWFrfXJldHVybiB0P2EubGVuZ3RoOmE/c2UuZXJyb3IoZSk6eChlLHMpLnNsaWNlKDApfSxmPXNlLmNvbXBpbGU9ZnVuY3Rpb24oZSx0KXt2YXIgbix2LHksbSx4LHIsaT1bXSxvPVtdLGE9QVtlK1wiIFwiXTtpZighYSl7Zm9yKHR8fCh0PWgoZSkpLG49dC5sZW5ndGg7bi0tOykoYT1FZSh0W25dKSlbU10/aS5wdXNoKGEpOm8ucHVzaChhKTsoYT1BKGUsKHY9byxtPTA8KHk9aSkubGVuZ3RoLHg9MDx2Lmxlbmd0aCxyPWZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHU9MCxsPVwiMFwiLGM9ZSYmW10sZj1bXSxwPXcsZD1lfHx4JiZiLmZpbmQuVEFHKFwiKlwiLGkpLGg9ays9bnVsbD09cD8xOk1hdGgucmFuZG9tKCl8fC4xLGc9ZC5sZW5ndGg7Zm9yKGkmJih3PXQ9PUN8fHR8fGkpO2whPT1nJiZudWxsIT0obz1kW2xdKTtsKyspe2lmKHgmJm8pe2ZvcihhPTAsdHx8by5vd25lckRvY3VtZW50PT1DfHwoVChvKSxuPSFFKTtzPXZbYSsrXTspaWYocyhvLHR8fEMsbikpe3IucHVzaChvKTticmVha31pJiYoaz1oKX1tJiYoKG89IXMmJm8pJiZ1LS0sZSYmYy5wdXNoKG8pKX1pZih1Kz1sLG0mJmwhPT11KXtmb3IoYT0wO3M9eVthKytdOylzKGMsZix0LG4pO2lmKGUpe2lmKDA8dSlmb3IoO2wtLTspY1tsXXx8ZltsXXx8KGZbbF09cS5jYWxsKHIpKTtmPVRlKGYpfUguYXBwbHkocixmKSxpJiYhZSYmMDxmLmxlbmd0aCYmMTx1K3kubGVuZ3RoJiZzZS51bmlxdWVTb3J0KHIpfXJldHVybiBpJiYoaz1oLHc9cCksY30sbT9sZShyKTpyKSkpLnNlbGVjdG9yPWV9cmV0dXJuIGF9LGc9c2Uuc2VsZWN0PWZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlLGM9IXImJmgoZT1sLnNlbGVjdG9yfHxlKTtpZihuPW58fFtdLDE9PT1jLmxlbmd0aCl7aWYoMjwobz1jWzBdPWNbMF0uc2xpY2UoMCkpLmxlbmd0aCYmXCJJRFwiPT09KGE9b1swXSkudHlwZSYmOT09PXQubm9kZVR5cGUmJkUmJmIucmVsYXRpdmVbb1sxXS50eXBlXSl7aWYoISh0PShiLmZpbmQuSUQoYS5tYXRjaGVzWzBdLnJlcGxhY2UodGUsbmUpLHQpfHxbXSlbMF0pKXJldHVybiBuO2wmJih0PXQucGFyZW50Tm9kZSksZT1lLnNsaWNlKG8uc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWZvcihpPUcubmVlZHNDb250ZXh0LnRlc3QoZSk/MDpvLmxlbmd0aDtpLS0mJihhPW9baV0sIWIucmVsYXRpdmVbcz1hLnR5cGVdKTspaWYoKHU9Yi5maW5kW3NdKSYmKHI9dShhLm1hdGNoZXNbMF0ucmVwbGFjZSh0ZSxuZSksZWUudGVzdChvWzBdLnR5cGUpJiZ5ZSh0LnBhcmVudE5vZGUpfHx0KSkpe2lmKG8uc3BsaWNlKGksMSksIShlPXIubGVuZ3RoJiZ4ZShvKSkpcmV0dXJuIEguYXBwbHkobixyKSxuO2JyZWFrfX1yZXR1cm4obHx8ZihlLGMpKShyLHQsIUUsbiwhdHx8ZWUudGVzdChlKSYmeWUodC5wYXJlbnROb2RlKXx8dCksbn0sZC5zb3J0U3RhYmxlPVMuc3BsaXQoXCJcIikuc29ydChEKS5qb2luKFwiXCIpPT09UyxkLmRldGVjdER1cGxpY2F0ZXM9ISFsLFQoKSxkLnNvcnREZXRhY2hlZD1jZSgoZnVuY3Rpb24oZSl7cmV0dXJuIDEmZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihDLmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSl9KSksY2UoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlubmVySFRNTD1cIjxhIGhyZWY9JyMnPjwvYT5cIixcIiNcIj09PWUuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSkpfHxmZShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIiwoZnVuY3Rpb24oZSx0LG4pe2lmKCFuKXJldHVybiBlLmdldEF0dHJpYnV0ZSh0LFwidHlwZVwiPT09dC50b0xvd2VyQ2FzZSgpPzE6Mil9KSksZC5hdHRyaWJ1dGVzJiZjZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixlLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09ZS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSkpfHxmZShcInZhbHVlXCIsKGZ1bmN0aW9uKGUsdCxuKXtpZighbiYmXCJpbnB1dFwiPT09ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBlLmRlZmF1bHRWYWx1ZX0pKSxjZSgoZnVuY3Rpb24oZSl7cmV0dXJuIG51bGw9PWUuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KSl8fGZlKFIsKGZ1bmN0aW9uKGUsdCxuKXt2YXIgcjtpZighbilyZXR1cm4hMD09PWVbdF0/dC50b0xvd2VyQ2FzZSgpOihyPWUuZ2V0QXR0cmlidXRlTm9kZSh0KSkmJnIuc3BlY2lmaWVkP3IudmFsdWU6bnVsbH0pKSxzZX0oQyk7Uy5maW5kPWQsUy5leHByPWQuc2VsZWN0b3JzLFMuZXhwcltcIjpcIl09Uy5leHByLnBzZXVkb3MsUy51bmlxdWVTb3J0PVMudW5pcXVlPWQudW5pcXVlU29ydCxTLnRleHQ9ZC5nZXRUZXh0LFMuaXNYTUxEb2M9ZC5pc1hNTCxTLmNvbnRhaW5zPWQuY29udGFpbnMsUy5lc2NhcGVTZWxlY3Rvcj1kLmVzY2FwZTt2YXIgaD1mdW5jdGlvbihlLHQsbil7Zm9yKHZhciByPVtdLGk9dm9pZCAwIT09bjsoZT1lW3RdKSYmOSE9PWUubm9kZVR5cGU7KWlmKDE9PT1lLm5vZGVUeXBlKXtpZihpJiZTKGUpLmlzKG4pKWJyZWFrO3IucHVzaChlKX1yZXR1cm4gcn0sVD1mdW5jdGlvbihlLHQpe2Zvcih2YXIgbj1bXTtlO2U9ZS5uZXh0U2libGluZykxPT09ZS5ub2RlVHlwZSYmZSE9PXQmJm4ucHVzaChlKTtyZXR1cm4gbn0saz1TLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0O2Z1bmN0aW9uIEEoZSx0KXtyZXR1cm4gZS5ub2RlTmFtZSYmZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09dC50b0xvd2VyQ2FzZSgpfXZhciBOPS9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pO2Z1bmN0aW9uIEQoZSxuLHIpe3JldHVybiBtKG4pP1MuZ3JlcChlLChmdW5jdGlvbihlLHQpe3JldHVybiEhbi5jYWxsKGUsdCxlKSE9PXJ9KSk6bi5ub2RlVHlwZT9TLmdyZXAoZSwoZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT1uIT09cn0pKTpcInN0cmluZ1wiIT10eXBlb2Ygbj9TLmdyZXAoZSwoZnVuY3Rpb24oZSl7cmV0dXJuLTE8aS5jYWxsKG4sZSkhPT1yfSkpOlMuZmlsdGVyKG4sZSxyKX1TLmZpbHRlcj1mdW5jdGlvbihlLHQsbil7dmFyIHI9dFswXTtyZXR1cm4gbiYmKGU9XCI6bm90KFwiK2UrXCIpXCIpLDE9PT10Lmxlbmd0aCYmMT09PXIubm9kZVR5cGU/Uy5maW5kLm1hdGNoZXNTZWxlY3RvcihyLGUpP1tyXTpbXTpTLmZpbmQubWF0Y2hlcyhlLFMuZ3JlcCh0LChmdW5jdGlvbihlKXtyZXR1cm4gMT09PWUubm9kZVR5cGV9KSkpfSxTLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihlKXt2YXIgdCxuLHI9dGhpcy5sZW5ndGgsaT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLnB1c2hTdGFjayhTKGUpLmZpbHRlcigoZnVuY3Rpb24oKXtmb3IodD0wO3Q8cjt0KyspaWYoUy5jb250YWlucyhpW3RdLHRoaXMpKXJldHVybiEwfSkpKTtmb3Iobj10aGlzLnB1c2hTdGFjayhbXSksdD0wO3Q8cjt0KyspUy5maW5kKGUsaVt0XSxuKTtyZXR1cm4gMTxyP1MudW5pcXVlU29ydChuKTpufSxmaWx0ZXI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcyxlfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEQodGhpcyxlfHxbXSwhMCkpfSxpczpmdW5jdGlvbihlKXtyZXR1cm4hIUQodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgZSYmay50ZXN0KGUpP1MoZSk6ZXx8W10sITEpLmxlbmd0aH19KTt2YXIgaixxPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSspKSQvOyhTLmZuLmluaXQ9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoIWUpcmV0dXJuIHRoaXM7aWYobj1ufHxqLFwic3RyaW5nXCI9PXR5cGVvZiBlKXtpZighKHI9XCI8XCI9PT1lWzBdJiZcIj5cIj09PWVbZS5sZW5ndGgtMV0mJjM8PWUubGVuZ3RoP1tudWxsLGUsbnVsbF06cS5leGVjKGUpKXx8IXJbMV0mJnQpcmV0dXJuIXR8fHQuanF1ZXJ5Pyh0fHxuKS5maW5kKGUpOnRoaXMuY29uc3RydWN0b3IodCkuZmluZChlKTtpZihyWzFdKXtpZih0PXQgaW5zdGFuY2VvZiBTP3RbMF06dCxTLm1lcmdlKHRoaXMsUy5wYXJzZUhUTUwoclsxXSx0JiZ0Lm5vZGVUeXBlP3Qub3duZXJEb2N1bWVudHx8dDpFLCEwKSksTi50ZXN0KHJbMV0pJiZTLmlzUGxhaW5PYmplY3QodCkpZm9yKHIgaW4gdCltKHRoaXNbcl0pP3RoaXNbcl0odFtyXSk6dGhpcy5hdHRyKHIsdFtyXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGk9RS5nZXRFbGVtZW50QnlJZChyWzJdKSkmJih0aGlzWzBdPWksdGhpcy5sZW5ndGg9MSksdGhpc31yZXR1cm4gZS5ub2RlVHlwZT8odGhpc1swXT1lLHRoaXMubGVuZ3RoPTEsdGhpcyk6bShlKT92b2lkIDAhPT1uLnJlYWR5P24ucmVhZHkoZSk6ZShTKTpTLm1ha2VBcnJheShlLHRoaXMpfSkucHJvdG90eXBlPVMuZm4saj1TKEUpO3ZhciBMPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEg9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07ZnVuY3Rpb24gTyhlLHQpe2Zvcig7KGU9ZVt0XSkmJjEhPT1lLm5vZGVUeXBlOyk7cmV0dXJuIGV9Uy5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihlKXt2YXIgdD1TKGUsdGhpcyksbj10Lmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTA7ZTxuO2UrKylpZihTLmNvbnRhaW5zKHRoaXMsdFtlXSkpcmV0dXJuITB9KSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oZSx0KXt2YXIgbixyPTAsaT10aGlzLmxlbmd0aCxvPVtdLGE9XCJzdHJpbmdcIiE9dHlwZW9mIGUmJlMoZSk7aWYoIWsudGVzdChlKSlmb3IoO3I8aTtyKyspZm9yKG49dGhpc1tyXTtuJiZuIT09dDtuPW4ucGFyZW50Tm9kZSlpZihuLm5vZGVUeXBlPDExJiYoYT8tMTxhLmluZGV4KG4pOjE9PT1uLm5vZGVUeXBlJiZTLmZpbmQubWF0Y2hlc1NlbGVjdG9yKG4sZSkpKXtvLnB1c2gobik7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKDE8by5sZW5ndGg/Uy51bmlxdWVTb3J0KG8pOm8pfSxpbmRleDpmdW5jdGlvbihlKXtyZXR1cm4gZT9cInN0cmluZ1wiPT10eXBlb2YgZT9pLmNhbGwoUyhlKSx0aGlzWzBdKTppLmNhbGwodGhpcyxlLmpxdWVyeT9lWzBdOmUpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKFMudW5pcXVlU29ydChTLm1lcmdlKHRoaXMuZ2V0KCksUyhlLHQpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmFkZChudWxsPT1lP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGUpKX19KSxTLmVhY2goe3BhcmVudDpmdW5jdGlvbihlKXt2YXIgdD1lLnBhcmVudE5vZGU7cmV0dXJuIHQmJjExIT09dC5ub2RlVHlwZT90Om51bGx9LHBhcmVudHM6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihlLHQsbil7cmV0dXJuIGgoZSxcInBhcmVudE5vZGVcIixuKX0sbmV4dDpmdW5jdGlvbihlKXtyZXR1cm4gTyhlLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oZSl7cmV0dXJuIE8oZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihlKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oZSl7cmV0dXJuIGgoZSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwibmV4dFNpYmxpbmdcIixuKX0scHJldlVudGlsOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gaChlLFwicHJldmlvdXNTaWJsaW5nXCIsbil9LHNpYmxpbmdzOmZ1bmN0aW9uKGUpe3JldHVybiBUKChlLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGUpfSxjaGlsZHJlbjpmdW5jdGlvbihlKXtyZXR1cm4gVChlLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9ZS5jb250ZW50RG9jdW1lbnQmJnIoZS5jb250ZW50RG9jdW1lbnQpP2UuY29udGVudERvY3VtZW50OihBKGUsXCJ0ZW1wbGF0ZVwiKSYmKGU9ZS5jb250ZW50fHxlKSxTLm1lcmdlKFtdLGUuY2hpbGROb2RlcykpfX0sKGZ1bmN0aW9uKHIsaSl7Uy5mbltyXT1mdW5jdGlvbihlLHQpe3ZhciBuPVMubWFwKHRoaXMsaSxlKTtyZXR1cm5cIlVudGlsXCIhPT1yLnNsaWNlKC01KSYmKHQ9ZSksdCYmXCJzdHJpbmdcIj09dHlwZW9mIHQmJihuPVMuZmlsdGVyKHQsbikpLDE8dGhpcy5sZW5ndGgmJihIW3JdfHxTLnVuaXF1ZVNvcnQobiksTC50ZXN0KHIpJiZuLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2sobil9fSkpO3ZhciBQPS9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZztmdW5jdGlvbiBSKGUpe3JldHVybiBlfWZ1bmN0aW9uIE0oZSl7dGhyb3cgZX1mdW5jdGlvbiBJKGUsdCxuLHIpe3ZhciBpO3RyeXtlJiZtKGk9ZS5wcm9taXNlKT9pLmNhbGwoZSkuZG9uZSh0KS5mYWlsKG4pOmUmJm0oaT1lLnRoZW4pP2kuY2FsbChlLHQsbik6dC5hcHBseSh2b2lkIDAsW2VdLnNsaWNlKHIpKX1jYXRjaChlKXtuLmFwcGx5KHZvaWQgMCxbZV0pfX1TLkNhbGxiYWNrcz1mdW5jdGlvbihyKXt2YXIgZSxuO3I9XCJzdHJpbmdcIj09dHlwZW9mIHI/KGU9cixuPXt9LFMuZWFjaChlLm1hdGNoKFApfHxbXSwoZnVuY3Rpb24oZSx0KXtuW3RdPSEwfSkpLG4pOlMuZXh0ZW5kKHt9LHIpO3ZhciBpLHQsbyxhLHM9W10sdT1bXSxsPS0xLGM9ZnVuY3Rpb24oKXtmb3IoYT1hfHxyLm9uY2Usbz1pPSEwO3UubGVuZ3RoO2w9LTEpZm9yKHQ9dS5zaGlmdCgpOysrbDxzLmxlbmd0aDspITE9PT1zW2xdLmFwcGx5KHRbMF0sdFsxXSkmJnIuc3RvcE9uRmFsc2UmJihsPXMubGVuZ3RoLHQ9ITEpO3IubWVtb3J5fHwodD0hMSksaT0hMSxhJiYocz10P1tdOlwiXCIpfSxmPXthZGQ6ZnVuY3Rpb24oKXtyZXR1cm4gcyYmKHQmJiFpJiYobD1zLmxlbmd0aC0xLHUucHVzaCh0KSksZnVuY3Rpb24gbihlKXtTLmVhY2goZSwoZnVuY3Rpb24oZSx0KXttKHQpP3IudW5pcXVlJiZmLmhhcyh0KXx8cy5wdXNoKHQpOnQmJnQubGVuZ3RoJiZcInN0cmluZ1wiIT09dyh0KSYmbih0KX0pKX0oYXJndW1lbnRzKSx0JiYhaSYmYygpKSx0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gUy5lYWNoKGFyZ3VtZW50cywoZnVuY3Rpb24oZSx0KXtmb3IodmFyIG47LTE8KG49Uy5pbkFycmF5KHQscyxuKSk7KXMuc3BsaWNlKG4sMSksbjw9bCYmbC0tfSkpLHRoaXN9LGhhczpmdW5jdGlvbihlKXtyZXR1cm4gZT8tMTxTLmluQXJyYXkoZSxzKTowPHMubGVuZ3RofSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBzJiYocz1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBhPXU9W10scz10PVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hc30sbG9jazpmdW5jdGlvbigpe3JldHVybiBhPXU9W10sdHx8aXx8KHM9dD1cIlwiKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWF9LGZpcmVXaXRoOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIGF8fCh0PVtlLCh0PXR8fFtdKS5zbGljZT90LnNsaWNlKCk6dF0sdS5wdXNoKHQpLGl8fGMoKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBmLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhb319O3JldHVybiBmfSxTLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oZSl7dmFyIG89W1tcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm1lbW9yeVwiKSwyXSxbXCJyZXNvbHZlXCIsXCJkb25lXCIsUy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLDAsXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFMuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksMSxcInJlamVjdGVkXCJdXSxpPVwicGVuZGluZ1wiLGE9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGl9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBzLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sY2F0Y2g6ZnVuY3Rpb24oZSl7cmV0dXJuIGEudGhlbihudWxsLGUpfSxwaXBlOmZ1bmN0aW9uKCl7dmFyIGk9YXJndW1lbnRzO3JldHVybiBTLkRlZmVycmVkKChmdW5jdGlvbihyKXtTLmVhY2gobywoZnVuY3Rpb24oZSx0KXt2YXIgbj1tKGlbdFs0XV0pJiZpW3RbNF1dO3NbdFsxXV0oKGZ1bmN0aW9uKCl7dmFyIGU9biYmbi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7ZSYmbShlLnByb21pc2UpP2UucHJvbWlzZSgpLnByb2dyZXNzKHIubm90aWZ5KS5kb25lKHIucmVzb2x2ZSkuZmFpbChyLnJlamVjdCk6clt0WzBdK1wiV2l0aFwiXSh0aGlzLG4/W2VdOmFyZ3VtZW50cyl9KSl9KSksaT1udWxsfSkpLnByb21pc2UoKX0sdGhlbjpmdW5jdGlvbih0LG4scil7dmFyIHU9MDtmdW5jdGlvbiBsKGksbyxhLHMpe3JldHVybiBmdW5jdGlvbigpe3ZhciBuPXRoaXMscj1hcmd1bWVudHMsZT1mdW5jdGlvbigpe3ZhciBlLHQ7aWYoIShpPHUpKXtpZigoZT1hLmFwcGx5KG4scikpPT09by5wcm9taXNlKCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoZW5hYmxlIHNlbGYtcmVzb2x1dGlvblwiKTt0PWUmJihcIm9iamVjdFwiPT10eXBlb2YgZXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSkmJmUudGhlbixtKHQpP3M/dC5jYWxsKGUsbCh1LG8sUixzKSxsKHUsbyxNLHMpKToodSsrLHQuY2FsbChlLGwodSxvLFIscyksbCh1LG8sTSxzKSxsKHUsbyxSLG8ubm90aWZ5V2l0aCkpKTooYSE9PVImJihuPXZvaWQgMCxyPVtlXSksKHN8fG8ucmVzb2x2ZVdpdGgpKG4scikpfX0sdD1zP2U6ZnVuY3Rpb24oKXt0cnl7ZSgpfWNhdGNoKGUpe1MuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayYmUy5EZWZlcnJlZC5leGNlcHRpb25Ib29rKGUsdC5zdGFja1RyYWNlKSx1PD1pKzEmJihhIT09TSYmKG49dm9pZCAwLHI9W2VdKSxvLnJlamVjdFdpdGgobixyKSl9fTtpP3QoKTooUy5EZWZlcnJlZC5nZXRTdGFja0hvb2smJih0LnN0YWNrVHJhY2U9Uy5EZWZlcnJlZC5nZXRTdGFja0hvb2soKSksQy5zZXRUaW1lb3V0KHQpKX19cmV0dXJuIFMuRGVmZXJyZWQoKGZ1bmN0aW9uKGUpe29bMF1bM10uYWRkKGwoMCxlLG0ocik/cjpSLGUubm90aWZ5V2l0aCkpLG9bMV1bM10uYWRkKGwoMCxlLG0odCk/dDpSKSksb1syXVszXS5hZGQobCgwLGUsbShuKT9uOk0pKX0pKS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWU/Uy5leHRlbmQoZSxhKTphfX0scz17fTtyZXR1cm4gUy5lYWNoKG8sKGZ1bmN0aW9uKGUsdCl7dmFyIG49dFsyXSxyPXRbNV07YVt0WzFdXT1uLmFkZCxyJiZuLmFkZCgoZnVuY3Rpb24oKXtpPXJ9KSxvWzMtZV1bMl0uZGlzYWJsZSxvWzMtZV1bM10uZGlzYWJsZSxvWzBdWzJdLmxvY2ssb1swXVszXS5sb2NrKSxuLmFkZCh0WzNdLmZpcmUpLHNbdFswXV09ZnVuY3Rpb24oKXtyZXR1cm4gc1t0WzBdK1wiV2l0aFwiXSh0aGlzPT09cz92b2lkIDA6dGhpcyxhcmd1bWVudHMpLHRoaXN9LHNbdFswXStcIldpdGhcIl09bi5maXJlV2l0aH0pKSxhLnByb21pc2UocyksZSYmZS5jYWxsKHMscyksc30sd2hlbjpmdW5jdGlvbihlKXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoLHQ9bixyPUFycmF5KHQpLGk9cy5jYWxsKGFyZ3VtZW50cyksbz1TLkRlZmVycmVkKCksYT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7clt0XT10aGlzLGlbdF09MTxhcmd1bWVudHMubGVuZ3RoP3MuY2FsbChhcmd1bWVudHMpOmUsLS1ufHxvLnJlc29sdmVXaXRoKHIsaSl9fTtpZihuPD0xJiYoSShlLG8uZG9uZShhKHQpKS5yZXNvbHZlLG8ucmVqZWN0LCFuKSxcInBlbmRpbmdcIj09PW8uc3RhdGUoKXx8bShpW3RdJiZpW3RdLnRoZW4pKSlyZXR1cm4gby50aGVuKCk7Zm9yKDt0LS07KUkoaVt0XSxhKHQpLG8ucmVqZWN0KTtyZXR1cm4gby5wcm9taXNlKCl9fSk7dmFyIFc9L14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87Uy5EZWZlcnJlZC5leGNlcHRpb25Ib29rPWZ1bmN0aW9uKGUsdCl7Qy5jb25zb2xlJiZDLmNvbnNvbGUud2FybiYmZSYmVy50ZXN0KGUubmFtZSkmJkMuY29uc29sZS53YXJuKFwialF1ZXJ5LkRlZmVycmVkIGV4Y2VwdGlvbjogXCIrZS5tZXNzYWdlLGUuc3RhY2ssdCl9LFMucmVhZHlFeGNlcHRpb249ZnVuY3Rpb24oZSl7Qy5zZXRUaW1lb3V0KChmdW5jdGlvbigpe3Rocm93IGV9KSl9O3ZhciBGPVMuRGVmZXJyZWQoKTtmdW5jdGlvbiBCKCl7RS5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEIpLEMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixCKSxTLnJlYWR5KCl9Uy5mbi5yZWFkeT1mdW5jdGlvbihlKXtyZXR1cm4gRi50aGVuKGUpLmNhdGNoKChmdW5jdGlvbihlKXtTLnJlYWR5RXhjZXB0aW9uKGUpfSkpLHRoaXN9LFMuZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLHJlYWR5OmZ1bmN0aW9uKGUpeyghMD09PWU/LS1TLnJlYWR5V2FpdDpTLmlzUmVhZHkpfHwoUy5pc1JlYWR5PSEwKSE9PWUmJjA8LS1TLnJlYWR5V2FpdHx8Ri5yZXNvbHZlV2l0aChFLFtTXSl9fSksUy5yZWFkeS50aGVuPUYudGhlbixcImNvbXBsZXRlXCI9PT1FLnJlYWR5U3RhdGV8fFwibG9hZGluZ1wiIT09RS5yZWFkeVN0YXRlJiYhRS5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGw/Qy5zZXRUaW1lb3V0KFMucmVhZHkpOihFLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsQiksQy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEIpKTt2YXIgJD1mdW5jdGlvbihlLHQsbixyLGksbyxhKXt2YXIgcz0wLHU9ZS5sZW5ndGgsbD1udWxsPT1uO2lmKFwib2JqZWN0XCI9PT13KG4pKWZvcihzIGluIGk9ITAsbikkKGUsdCxzLG5bc10sITAsbyxhKTtlbHNlIGlmKHZvaWQgMCE9PXImJihpPSEwLG0ocil8fChhPSEwKSxsJiYoYT8odC5jYWxsKGUsciksdD1udWxsKToobD10LHQ9ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBsLmNhbGwoUyhlKSxuKX0pKSx0KSlmb3IoO3M8dTtzKyspdChlW3NdLG4sYT9yOnIuY2FsbChlW3NdLHMsdChlW3NdLG4pKSk7cmV0dXJuIGk/ZTpsP3QuY2FsbChlKTp1P3QoZVswXSxuKTpvfSxfPS9eLW1zLS8sej0vLShbYS16XSkvZztmdW5jdGlvbiBVKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX1mdW5jdGlvbiBYKGUpe3JldHVybiBlLnJlcGxhY2UoXyxcIm1zLVwiKS5yZXBsYWNlKHosVSl9dmFyIFY9ZnVuY3Rpb24oZSl7cmV0dXJuIDE9PT1lLm5vZGVUeXBlfHw5PT09ZS5ub2RlVHlwZXx8IStlLm5vZGVUeXBlfTtmdW5jdGlvbiBHKCl7dGhpcy5leHBhbmRvPVMuZXhwYW5kbytHLnVpZCsrfUcudWlkPTEsRy5wcm90b3R5cGU9e2NhY2hlOmZ1bmN0aW9uKGUpe3ZhciB0PWVbdGhpcy5leHBhbmRvXTtyZXR1cm4gdHx8KHQ9e30sVihlKSYmKGUubm9kZVR5cGU/ZVt0aGlzLmV4cGFuZG9dPXQ6T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdGhpcy5leHBhbmRvLHt2YWx1ZTp0LGNvbmZpZ3VyYWJsZTohMH0pKSksdH0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPXRoaXMuY2FjaGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaVtYKHQpXT1uO2Vsc2UgZm9yKHIgaW4gdClpW1gocildPXRbcl07cmV0dXJuIGl9LGdldDpmdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMuY2FjaGUoZSk6ZVt0aGlzLmV4cGFuZG9dJiZlW3RoaXMuZXhwYW5kb11bWCh0KV19LGFjY2VzczpmdW5jdGlvbihlLHQsbil7cmV0dXJuIHZvaWQgMD09PXR8fHQmJlwic3RyaW5nXCI9PXR5cGVvZiB0JiZ2b2lkIDA9PT1uP3RoaXMuZ2V0KGUsdCk6KHRoaXMuc2V0KGUsdCxuKSx2b2lkIDAhPT1uP246dCl9LHJlbW92ZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9ZVt0aGlzLmV4cGFuZG9dO2lmKHZvaWQgMCE9PXIpe2lmKHZvaWQgMCE9PXQpe249KHQ9QXJyYXkuaXNBcnJheSh0KT90Lm1hcChYKToodD1YKHQpKWluIHI/W3RdOnQubWF0Y2goUCl8fFtdKS5sZW5ndGg7Zm9yKDtuLS07KWRlbGV0ZSByW3Rbbl1dfSh2b2lkIDA9PT10fHxTLmlzRW1wdHlPYmplY3QocikpJiYoZS5ub2RlVHlwZT9lW3RoaXMuZXhwYW5kb109dm9pZCAwOmRlbGV0ZSBlW3RoaXMuZXhwYW5kb10pfX0saGFzRGF0YTpmdW5jdGlvbihlKXt2YXIgdD1lW3RoaXMuZXhwYW5kb107cmV0dXJuIHZvaWQgMCE9PXQmJiFTLmlzRW1wdHlPYmplY3QodCl9fTt2YXIgWT1uZXcgRyxRPW5ldyBHLEo9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLEs9L1tBLVpdL2c7ZnVuY3Rpb24gWihlLHQsbil7dmFyIHIsaTtpZih2b2lkIDA9PT1uJiYxPT09ZS5ub2RlVHlwZSlpZihyPVwiZGF0YS1cIit0LnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpLFwic3RyaW5nXCI9PXR5cGVvZihuPWUuZ2V0QXR0cmlidXRlKHIpKSl7dHJ5e249XCJ0cnVlXCI9PT0oaT1uKXx8XCJmYWxzZVwiIT09aSYmKFwibnVsbFwiPT09aT9udWxsOmk9PT0raStcIlwiPytpOkoudGVzdChpKT9KU09OLnBhcnNlKGkpOmkpfWNhdGNoKGUpe31RLnNldChlLHQsbil9ZWxzZSBuPXZvaWQgMDtyZXR1cm4gbn1TLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihlKXtyZXR1cm4gUS5oYXNEYXRhKGUpfHxZLmhhc0RhdGEoZSl9LGRhdGE6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBRLmFjY2VzcyhlLHQsbil9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtRLnJlbW92ZShlLHQpfSxfZGF0YTpmdW5jdGlvbihlLHQsbil7cmV0dXJuIFkuYWNjZXNzKGUsdCxuKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oZSx0KXtZLnJlbW92ZShlLHQpfX0pLFMuZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKG4sZSl7dmFyIHQscixpLG89dGhpc1swXSxhPW8mJm8uYXR0cmlidXRlcztpZih2b2lkIDA9PT1uKXtpZih0aGlzLmxlbmd0aCYmKGk9US5nZXQobyksMT09PW8ubm9kZVR5cGUmJiFZLmdldChvLFwiaGFzRGF0YUF0dHJzXCIpKSl7Zm9yKHQ9YS5sZW5ndGg7dC0tOylhW3RdJiYwPT09KHI9YVt0XS5uYW1lKS5pbmRleE9mKFwiZGF0YS1cIikmJihyPVgoci5zbGljZSg1KSksWihvLHIsaVtyXSkpO1kuc2V0KG8sXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGl9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIG4/dGhpcy5lYWNoKChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbil9KSk6JCh0aGlzLChmdW5jdGlvbihlKXt2YXIgdDtpZihvJiZ2b2lkIDA9PT1lKXJldHVybiB2b2lkIDAhPT0odD1RLmdldChvLG4pKT90OnZvaWQgMCE9PSh0PVoobyxuKSk/dDp2b2lkIDA7dGhpcy5lYWNoKChmdW5jdGlvbigpe1Euc2V0KHRoaXMsbixlKX0pKX0pLG51bGwsZSwxPGFyZ3VtZW50cy5sZW5ndGgsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtRLnJlbW92ZSh0aGlzLGUpfSkpfX0pLFMuZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoZSlyZXR1cm4gdD0odHx8XCJmeFwiKStcInF1ZXVlXCIscj1ZLmdldChlLHQpLG4mJighcnx8QXJyYXkuaXNBcnJheShuKT9yPVkuYWNjZXNzKGUsdCxTLm1ha2VBcnJheShuKSk6ci5wdXNoKG4pKSxyfHxbXX0sZGVxdWV1ZTpmdW5jdGlvbihlLHQpe3Q9dHx8XCJmeFwiO3ZhciBuPVMucXVldWUoZSx0KSxyPW4ubGVuZ3RoLGk9bi5zaGlmdCgpLG89Uy5fcXVldWVIb29rcyhlLHQpO1wiaW5wcm9ncmVzc1wiPT09aSYmKGk9bi5zaGlmdCgpLHItLSksaSYmKFwiZnhcIj09PXQmJm4udW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIG8uc3RvcCxpLmNhbGwoZSwoZnVuY3Rpb24oKXtTLmRlcXVldWUoZSx0KX0pLG8pKSwhciYmbyYmby5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGUsdCl7dmFyIG49dCtcInF1ZXVlSG9va3NcIjtyZXR1cm4gWS5nZXQoZSxuKXx8WS5hY2Nlc3MoZSxuLHtlbXB0eTpTLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZCgoZnVuY3Rpb24oKXtZLnJlbW92ZShlLFt0K1wicXVldWVcIixuXSl9KSl9KX19KSxTLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24odCxuKXt2YXIgZT0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiB0JiYobj10LHQ9XCJmeFwiLGUtLSksYXJndW1lbnRzLmxlbmd0aDxlP1MucXVldWUodGhpc1swXSx0KTp2b2lkIDA9PT1uP3RoaXM6dGhpcy5lYWNoKChmdW5jdGlvbigpe3ZhciBlPVMucXVldWUodGhpcyx0LG4pO1MuX3F1ZXVlSG9va3ModGhpcyx0KSxcImZ4XCI9PT10JiZcImlucHJvZ3Jlc3NcIiE9PWVbMF0mJlMuZGVxdWV1ZSh0aGlzLHQpfSkpfSxkZXF1ZXVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Uy5kZXF1ZXVlKHRoaXMsZSl9KSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucXVldWUoZXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MSxpPVMuRGVmZXJyZWQoKSxvPXRoaXMsYT10aGlzLmxlbmd0aCxzPWZ1bmN0aW9uKCl7LS1yfHxpLnJlc29sdmVXaXRoKG8sW29dKX07Zm9yKFwic3RyaW5nXCIhPXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSxlPWV8fFwiZnhcIjthLS07KShuPVkuZ2V0KG9bYV0sZStcInF1ZXVlSG9va3NcIikpJiZuLmVtcHR5JiYocisrLG4uZW1wdHkuYWRkKHMpKTtyZXR1cm4gcygpLGkucHJvbWlzZSh0KX19KTt2YXIgZWU9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLHRlPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK2VlK1wiKShbYS16JV0qKSRcIixcImlcIiksbmU9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLHJlPUUuZG9jdW1lbnRFbGVtZW50LGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKX0sb2U9e2NvbXBvc2VkOiEwfTtyZS5nZXRSb290Tm9kZSYmKGllPWZ1bmN0aW9uKGUpe3JldHVybiBTLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKXx8ZS5nZXRSb290Tm9kZShvZSk9PT1lLm93bmVyRG9jdW1lbnR9KTt2YXIgYWU9ZnVuY3Rpb24oZSx0KXtyZXR1cm5cIm5vbmVcIj09PShlPXR8fGUpLnN0eWxlLmRpc3BsYXl8fFwiXCI9PT1lLnN0eWxlLmRpc3BsYXkmJmllKGUpJiZcIm5vbmVcIj09PVMuY3NzKGUsXCJkaXNwbGF5XCIpfTtmdW5jdGlvbiBzZShlLHQsbixyKXt2YXIgaSxvLGE9MjAscz1yP2Z1bmN0aW9uKCl7cmV0dXJuIHIuY3VyKCl9OmZ1bmN0aW9uKCl7cmV0dXJuIFMuY3NzKGUsdCxcIlwiKX0sdT1zKCksbD1uJiZuWzNdfHwoUy5jc3NOdW1iZXJbdF0/XCJcIjpcInB4XCIpLGM9ZS5ub2RlVHlwZSYmKFMuY3NzTnVtYmVyW3RdfHxcInB4XCIhPT1sJiYrdSkmJnRlLmV4ZWMoUy5jc3MoZSx0KSk7aWYoYyYmY1szXSE9PWwpe2Zvcih1Lz0yLGw9bHx8Y1szXSxjPSt1fHwxO2EtLTspUy5zdHlsZShlLHQsYytsKSwoMS1vKSooMS0obz1zKCkvdXx8LjUpKTw9MCYmKGE9MCksYy89bztjKj0yLFMuc3R5bGUoZSx0LGMrbCksbj1ufHxbXX1yZXR1cm4gbiYmKGM9K2N8fCt1fHwwLGk9blsxXT9jKyhuWzFdKzEpKm5bMl06K25bMl0sciYmKHIudW5pdD1sLHIuc3RhcnQ9YyxyLmVuZD1pKSksaX12YXIgdWU9e307ZnVuY3Rpb24gbGUoZSx0KXtmb3IodmFyIG4scixpLG8sYSxzLHUsbD1bXSxjPTAsZj1lLmxlbmd0aDtjPGY7YysrKShyPWVbY10pLnN0eWxlJiYobj1yLnN0eWxlLmRpc3BsYXksdD8oXCJub25lXCI9PT1uJiYobFtjXT1ZLmdldChyLFwiZGlzcGxheVwiKXx8bnVsbCxsW2NdfHwoci5zdHlsZS5kaXNwbGF5PVwiXCIpKSxcIlwiPT09ci5zdHlsZS5kaXNwbGF5JiZhZShyKSYmKGxbY109KHU9YT1vPXZvaWQgMCxhPShpPXIpLm93bmVyRG9jdW1lbnQscz1pLm5vZGVOYW1lLCh1PXVlW3NdKXx8KG89YS5ib2R5LmFwcGVuZENoaWxkKGEuY3JlYXRlRWxlbWVudChzKSksdT1TLmNzcyhvLFwiZGlzcGxheVwiKSxvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyksXCJub25lXCI9PT11JiYodT1cImJsb2NrXCIpLHVlW3NdPXUpKSkpOlwibm9uZVwiIT09biYmKGxbY109XCJub25lXCIsWS5zZXQocixcImRpc3BsYXlcIixuKSkpO2ZvcihjPTA7YzxmO2MrKyludWxsIT1sW2NdJiYoZVtjXS5zdHlsZS5kaXNwbGF5PWxbY10pO3JldHVybiBlfVMuZm4uZXh0ZW5kKHtzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGxlKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGxlKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oZSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlP2U/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKChmdW5jdGlvbigpe2FlKHRoaXMpP1ModGhpcykuc2hvdygpOlModGhpcykuaGlkZSgpfSkpfX0pO3ZhciBjZSxmZSxwZT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaSxkZT0vPChbYS16XVteXFwvXFwwPlxceDIwXFx0XFxyXFxuXFxmXSopL2ksaGU9L14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaTtjZT1FLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKS5hcHBlbmRDaGlsZChFLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLChmZT1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksZmUuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxmZS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGNlLmFwcGVuZENoaWxkKGZlKSx5LmNoZWNrQ2xvbmU9Y2UuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGNlLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIix5Lm5vQ2xvbmVDaGVja2VkPSEhY2UuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGNlLmlubmVySFRNTD1cIjxvcHRpb24+PC9vcHRpb24+XCIseS5vcHRpb249ISFjZS5sYXN0Q2hpbGQ7dmFyIGdlPXt0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtmdW5jdGlvbiB2ZShlLHQpe3ZhciBuO3JldHVybiBuPXZvaWQgMCE9PWUuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0fHxcIipcIik6dm9pZCAwIT09ZS5xdWVyeVNlbGVjdG9yQWxsP2UucXVlcnlTZWxlY3RvckFsbCh0fHxcIipcIik6W10sdm9pZCAwPT09dHx8dCYmQShlLHQpP1MubWVyZ2UoW2VdLG4pOm59ZnVuY3Rpb24geWUoZSx0KXtmb3IodmFyIG49MCxyPWUubGVuZ3RoO248cjtuKyspWS5zZXQoZVtuXSxcImdsb2JhbEV2YWxcIiwhdHx8WS5nZXQodFtuXSxcImdsb2JhbEV2YWxcIikpfWdlLnRib2R5PWdlLnRmb290PWdlLmNvbGdyb3VwPWdlLmNhcHRpb249Z2UudGhlYWQsZ2UudGg9Z2UudGQseS5vcHRpb258fChnZS5vcHRncm91cD1nZS5vcHRpb249WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0pO3ZhciBtZT0vPHwmIz9cXHcrOy87ZnVuY3Rpb24geGUoZSx0LG4scixpKXtmb3IodmFyIG8sYSxzLHUsbCxjLGY9dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCkscD1bXSxkPTAsaD1lLmxlbmd0aDtkPGg7ZCsrKWlmKChvPWVbZF0pfHwwPT09bylpZihcIm9iamVjdFwiPT09dyhvKSlTLm1lcmdlKHAsby5ub2RlVHlwZT9bb106byk7ZWxzZSBpZihtZS50ZXN0KG8pKXtmb3IoYT1hfHxmLmFwcGVuZENoaWxkKHQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkscz0oZGUuZXhlYyhvKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksdT1nZVtzXXx8Z2UuX2RlZmF1bHQsYS5pbm5lckhUTUw9dVsxXStTLmh0bWxQcmVmaWx0ZXIobykrdVsyXSxjPXVbMF07Yy0tOylhPWEubGFzdENoaWxkO1MubWVyZ2UocCxhLmNoaWxkTm9kZXMpLChhPWYuZmlyc3RDaGlsZCkudGV4dENvbnRlbnQ9XCJcIn1lbHNlIHAucHVzaCh0LmNyZWF0ZVRleHROb2RlKG8pKTtmb3IoZi50ZXh0Q29udGVudD1cIlwiLGQ9MDtvPXBbZCsrXTspaWYociYmLTE8Uy5pbkFycmF5KG8scikpaSYmaS5wdXNoKG8pO2Vsc2UgaWYobD1pZShvKSxhPXZlKGYuYXBwZW5kQ2hpbGQobyksXCJzY3JpcHRcIiksbCYmeWUoYSksbilmb3IoYz0wO289YVtjKytdOyloZS50ZXN0KG8udHlwZXx8XCJcIikmJm4ucHVzaChvKTtyZXR1cm4gZn12YXIgYmU9L15rZXkvLHdlPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxUZT0vXihbXi5dKikoPzpcXC4oLispfCkvO2Z1bmN0aW9uIENlKCl7cmV0dXJuITB9ZnVuY3Rpb24gRWUoKXtyZXR1cm4hMX1mdW5jdGlvbiBTZShlLHQpe3JldHVybiBlPT09ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIEUuYWN0aXZlRWxlbWVudH1jYXRjaChlKXt9fSgpPT0oXCJmb2N1c1wiPT09dCl9ZnVuY3Rpb24ga2UoZSx0LG4scixpLG8pe3ZhciBhLHM7aWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe2ZvcihzIGluXCJzdHJpbmdcIiE9dHlwZW9mIG4mJihyPXJ8fG4sbj12b2lkIDApLHQpa2UoZSxzLG4scix0W3NdLG8pO3JldHVybiBlfWlmKG51bGw9PXImJm51bGw9PWk/KGk9bixyPW49dm9pZCAwKTpudWxsPT1pJiYoXCJzdHJpbmdcIj09dHlwZW9mIG4/KGk9cixyPXZvaWQgMCk6KGk9cixyPW4sbj12b2lkIDApKSwhMT09PWkpaT1FZTtlbHNlIGlmKCFpKXJldHVybiBlO3JldHVybiAxPT09byYmKGE9aSwoaT1mdW5jdGlvbihlKXtyZXR1cm4gUygpLm9mZihlKSxhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pLmd1aWQ9YS5ndWlkfHwoYS5ndWlkPVMuZ3VpZCsrKSksZS5lYWNoKChmdW5jdGlvbigpe1MuZXZlbnQuYWRkKHRoaXMsdCxpLHIsbil9KSl9ZnVuY3Rpb24gQWUoZSxpLG8pe28/KFkuc2V0KGUsaSwhMSksUy5ldmVudC5hZGQoZSxpLHtuYW1lc3BhY2U6ITEsaGFuZGxlcjpmdW5jdGlvbihlKXt2YXIgdCxuLHI9WS5nZXQodGhpcyxpKTtpZigxJmUuaXNUcmlnZ2VyJiZ0aGlzW2ldKXtpZihyLmxlbmd0aCkoUy5ldmVudC5zcGVjaWFsW2ldfHx7fSkuZGVsZWdhdGVUeXBlJiZlLnN0b3BQcm9wYWdhdGlvbigpO2Vsc2UgaWYocj1zLmNhbGwoYXJndW1lbnRzKSxZLnNldCh0aGlzLGksciksdD1vKHRoaXMsaSksdGhpc1tpXSgpLHIhPT0obj1ZLmdldCh0aGlzLGkpKXx8dD9ZLnNldCh0aGlzLGksITEpOm49e30sciE9PW4pcmV0dXJuIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksZS5wcmV2ZW50RGVmYXVsdCgpLG4udmFsdWV9ZWxzZSByLmxlbmd0aCYmKFkuc2V0KHRoaXMsaSx7dmFsdWU6Uy5ldmVudC50cmlnZ2VyKFMuZXh0ZW5kKHJbMF0sUy5FdmVudC5wcm90b3R5cGUpLHIuc2xpY2UoMSksdGhpcyl9KSxlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpKX19KSk6dm9pZCAwPT09WS5nZXQoZSxpKSYmUy5ldmVudC5hZGQoZSxpLENlKX1TLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVkuZ2V0KHQpO2lmKFYodCkpZm9yKG4uaGFuZGxlciYmKG49KG89bikuaGFuZGxlcixpPW8uc2VsZWN0b3IpLGkmJlMuZmluZC5tYXRjaGVzU2VsZWN0b3IocmUsaSksbi5ndWlkfHwobi5ndWlkPVMuZ3VpZCsrKSwodT12LmV2ZW50cyl8fCh1PXYuZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCkpLChhPXYuaGFuZGxlKXx8KGE9di5oYW5kbGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9PVMmJlMuZXZlbnQudHJpZ2dlcmVkIT09ZS50eXBlP1MuZXZlbnQuZGlzcGF0Y2guYXBwbHkodCxhcmd1bWVudHMpOnZvaWQgMH0pLGw9KGU9KGV8fFwiXCIpLm1hdGNoKFApfHxbXCJcIl0pLmxlbmd0aDtsLS07KWQ9Zz0ocz1UZS5leGVjKGVbbF0pfHxbXSlbMV0saD0oc1syXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxkJiYoZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGQ9KGk/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGQsZj1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LGM9Uy5leHRlbmQoe3R5cGU6ZCxvcmlnVHlwZTpnLGRhdGE6cixoYW5kbGVyOm4sZ3VpZDpuLmd1aWQsc2VsZWN0b3I6aSxuZWVkc0NvbnRleHQ6aSYmUy5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGkpLG5hbWVzcGFjZTpoLmpvaW4oXCIuXCIpfSxvKSwocD11W2RdKXx8KChwPXVbZF09W10pLmRlbGVnYXRlQ291bnQ9MCxmLnNldHVwJiYhMSE9PWYuc2V0dXAuY2FsbCh0LHIsaCxhKXx8dC5hZGRFdmVudExpc3RlbmVyJiZ0LmFkZEV2ZW50TGlzdGVuZXIoZCxhKSksZi5hZGQmJihmLmFkZC5jYWxsKHQsYyksYy5oYW5kbGVyLmd1aWR8fChjLmhhbmRsZXIuZ3VpZD1uLmd1aWQpKSxpP3Auc3BsaWNlKHAuZGVsZWdhdGVDb3VudCsrLDAsYyk6cC5wdXNoKGMpLFMuZXZlbnQuZ2xvYmFsW2RdPSEwKX0scmVtb3ZlOmZ1bmN0aW9uKGUsdCxuLHIsaSl7dmFyIG8sYSxzLHUsbCxjLGYscCxkLGgsZyx2PVkuaGFzRGF0YShlKSYmWS5nZXQoZSk7aWYodiYmKHU9di5ldmVudHMpKXtmb3IobD0odD0odHx8XCJcIikubWF0Y2goUCl8fFtcIlwiXSkubGVuZ3RoO2wtLTspaWYoZD1nPShzPVRlLmV4ZWModFtsXSl8fFtdKVsxXSxoPShzWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLGQpe2ZvcihmPVMuZXZlbnQuc3BlY2lhbFtkXXx8e30scD11W2Q9KHI/Zi5kZWxlZ2F0ZVR5cGU6Zi5iaW5kVHlwZSl8fGRdfHxbXSxzPXNbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitoLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxhPW89cC5sZW5ndGg7by0tOyljPXBbb10sIWkmJmchPT1jLm9yaWdUeXBlfHxuJiZuLmd1aWQhPT1jLmd1aWR8fHMmJiFzLnRlc3QoYy5uYW1lc3BhY2UpfHxyJiZyIT09Yy5zZWxlY3RvciYmKFwiKipcIiE9PXJ8fCFjLnNlbGVjdG9yKXx8KHAuc3BsaWNlKG8sMSksYy5zZWxlY3RvciYmcC5kZWxlZ2F0ZUNvdW50LS0sZi5yZW1vdmUmJmYucmVtb3ZlLmNhbGwoZSxjKSk7YSYmIXAubGVuZ3RoJiYoZi50ZWFyZG93biYmITEhPT1mLnRlYXJkb3duLmNhbGwoZSxoLHYuaGFuZGxlKXx8Uy5yZW1vdmVFdmVudChlLGQsdi5oYW5kbGUpLGRlbGV0ZSB1W2RdKX1lbHNlIGZvcihkIGluIHUpUy5ldmVudC5yZW1vdmUoZSxkK3RbbF0sbixyLCEwKTtTLmlzRW1wdHlPYmplY3QodSkmJlkucmVtb3ZlKGUsXCJoYW5kbGUgZXZlbnRzXCIpfX0sZGlzcGF0Y2g6ZnVuY3Rpb24oZSl7dmFyIHQsbixyLGksbyxhLHM9bmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpLHU9Uy5ldmVudC5maXgoZSksbD0oWS5nZXQodGhpcyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbdS50eXBlXXx8W10sYz1TLmV2ZW50LnNwZWNpYWxbdS50eXBlXXx8e307Zm9yKHNbMF09dSx0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKylzW3RdPWFyZ3VtZW50c1t0XTtpZih1LmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWMucHJlRGlzcGF0Y2h8fCExIT09Yy5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsdSkpe2ZvcihhPVMuZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLHUsbCksdD0wOyhpPWFbdCsrXSkmJiF1LmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7KWZvcih1LmN1cnJlbnRUYXJnZXQ9aS5lbGVtLG49MDsobz1pLmhhbmRsZXJzW24rK10pJiYhdS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpOyl1LnJuYW1lc3BhY2UmJiExIT09by5uYW1lc3BhY2UmJiF1LnJuYW1lc3BhY2UudGVzdChvLm5hbWVzcGFjZSl8fCh1LmhhbmRsZU9iaj1vLHUuZGF0YT1vLmRhdGEsdm9pZCAwIT09KHI9KChTLmV2ZW50LnNwZWNpYWxbby5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fG8uaGFuZGxlcikuYXBwbHkoaS5lbGVtLHMpKSYmITE9PT0odS5yZXN1bHQ9cikmJih1LnByZXZlbnREZWZhdWx0KCksdS5zdG9wUHJvcGFnYXRpb24oKSkpO3JldHVybiBjLnBvc3REaXNwYXRjaCYmYy5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLHUpLHUucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oZSx0KXt2YXIgbixyLGksbyxhLHM9W10sdT10LmRlbGVnYXRlQ291bnQsbD1lLnRhcmdldDtpZih1JiZsLm5vZGVUeXBlJiYhKFwiY2xpY2tcIj09PWUudHlwZSYmMTw9ZS5idXR0b24pKWZvcig7bCE9PXRoaXM7bD1sLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWwubm9kZVR5cGUmJihcImNsaWNrXCIhPT1lLnR5cGV8fCEwIT09bC5kaXNhYmxlZCkpe2ZvcihvPVtdLGE9e30sbj0wO248dTtuKyspdm9pZCAwPT09YVtpPShyPXRbbl0pLnNlbGVjdG9yK1wiIFwiXSYmKGFbaV09ci5uZWVkc0NvbnRleHQ/LTE8UyhpLHRoaXMpLmluZGV4KGwpOlMuZmluZChpLHRoaXMsbnVsbCxbbF0pLmxlbmd0aCksYVtpXSYmby5wdXNoKHIpO28ubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczpvfSl9cmV0dXJuIGw9dGhpcyx1PHQubGVuZ3RoJiZzLnB1c2goe2VsZW06bCxoYW5kbGVyczp0LnNsaWNlKHUpfSksc30sYWRkUHJvcDpmdW5jdGlvbih0LGUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShTLkV2ZW50LnByb3RvdHlwZSx0LHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6bShlKT9mdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gZSh0aGlzLm9yaWdpbmFsRXZlbnQpfTpmdW5jdGlvbigpe2lmKHRoaXMub3JpZ2luYWxFdmVudClyZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50W3RdfSxzZXQ6ZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsdCx7ZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZX0pfX0pfSxmaXg6ZnVuY3Rpb24oZSl7cmV0dXJuIGVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGUpfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sY2xpY2s6e3NldHVwOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXN8fGU7cmV0dXJuIHBlLnRlc3QodC50eXBlKSYmdC5jbGljayYmQSh0LFwiaW5wdXRcIikmJkFlKHQsXCJjbGlja1wiLENlKSwhMX0sdHJpZ2dlcjpmdW5jdGlvbihlKXt2YXIgdD10aGlzfHxlO3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZBZSh0LFwiY2xpY2tcIiksITB9LF9kZWZhdWx0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGFyZ2V0O3JldHVybiBwZS50ZXN0KHQudHlwZSkmJnQuY2xpY2smJkEodCxcImlucHV0XCIpJiZZLmdldCh0LFwiY2xpY2tcIil8fEEodCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihlKXt2b2lkIDAhPT1lLnJlc3VsdCYmZS5vcmlnaW5hbEV2ZW50JiYoZS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWUucmVzdWx0KX19fX0sUy5yZW1vdmVFdmVudD1mdW5jdGlvbihlLHQsbil7ZS5yZW1vdmVFdmVudExpc3RlbmVyJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxuKX0sUy5FdmVudD1mdW5jdGlvbihlLHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIFMuRXZlbnQpKXJldHVybiBuZXcgUy5FdmVudChlLHQpO2UmJmUudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWUsdGhpcy50eXBlPWUudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1lLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWUuZGVmYXVsdFByZXZlbnRlZCYmITE9PT1lLnJldHVyblZhbHVlP0NlOkVlLHRoaXMudGFyZ2V0PWUudGFyZ2V0JiYzPT09ZS50YXJnZXQubm9kZVR5cGU/ZS50YXJnZXQucGFyZW50Tm9kZTplLnRhcmdldCx0aGlzLmN1cnJlbnRUYXJnZXQ9ZS5jdXJyZW50VGFyZ2V0LHRoaXMucmVsYXRlZFRhcmdldD1lLnJlbGF0ZWRUYXJnZXQpOnRoaXMudHlwZT1lLHQmJlMuZXh0ZW5kKHRoaXMsdCksdGhpcy50aW1lU3RhbXA9ZSYmZS50aW1lU3RhbXB8fERhdGUubm93KCksdGhpc1tTLmV4cGFuZG9dPSEwfSxTLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6Uy5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6RWUsaXNQcm9wYWdhdGlvblN0b3BwZWQ6RWUsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6RWUsaXNTaW11bGF0ZWQ6ITEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Q2UsZSYmIXRoaXMuaXNTaW11bGF0ZWQmJmUuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPUNlLGUmJiF0aGlzLmlzU2ltdWxhdGVkJiZlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxTLmVhY2goe2FsdEtleTohMCxidWJibGVzOiEwLGNhbmNlbGFibGU6ITAsY2hhbmdlZFRvdWNoZXM6ITAsY3RybEtleTohMCxkZXRhaWw6ITAsZXZlbnRQaGFzZTohMCxtZXRhS2V5OiEwLHBhZ2VYOiEwLHBhZ2VZOiEwLHNoaWZ0S2V5OiEwLHZpZXc6ITAsY2hhcjohMCxjb2RlOiEwLGNoYXJDb2RlOiEwLGtleTohMCxrZXlDb2RlOiEwLGJ1dHRvbjohMCxidXR0b25zOiEwLGNsaWVudFg6ITAsY2xpZW50WTohMCxvZmZzZXRYOiEwLG9mZnNldFk6ITAscG9pbnRlcklkOiEwLHBvaW50ZXJUeXBlOiEwLHNjcmVlblg6ITAsc2NyZWVuWTohMCx0YXJnZXRUb3VjaGVzOiEwLHRvRWxlbWVudDohMCx0b3VjaGVzOiEwLHdoaWNoOmZ1bmN0aW9uKGUpe3ZhciB0PWUuYnV0dG9uO3JldHVybiBudWxsPT1lLndoaWNoJiZiZS50ZXN0KGUudHlwZSk/bnVsbCE9ZS5jaGFyQ29kZT9lLmNoYXJDb2RlOmUua2V5Q29kZTohZS53aGljaCYmdm9pZCAwIT09dCYmd2UudGVzdChlLnR5cGUpPzEmdD8xOjImdD8zOjQmdD8yOjA6ZS53aGljaH19LFMuZXZlbnQuYWRkUHJvcCksUy5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sKGZ1bmN0aW9uKGUsdCl7Uy5ldmVudC5zcGVjaWFsW2VdPXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBBZSh0aGlzLGUsU2UpLCExfSx0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIEFlKHRoaXMsZSksITB9LGRlbGVnYXRlVHlwZTp0fX0pKSxTLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sKGZ1bmN0aW9uKGUsaSl7Uy5ldmVudC5zcGVjaWFsW2VdPXtkZWxlZ2F0ZVR5cGU6aSxiaW5kVHlwZTppLGhhbmRsZTpmdW5jdGlvbihlKXt2YXIgdCxuPWUucmVsYXRlZFRhcmdldCxyPWUuaGFuZGxlT2JqO3JldHVybiBuJiYobj09PXRoaXN8fFMuY29udGFpbnModGhpcyxuKSl8fChlLnR5cGU9ci5vcmlnVHlwZSx0PXIuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksZS50eXBlPWkpLHR9fX0pKSxTLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIGtlKHRoaXMsZSx0LG4scil9LG9uZTpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4ga2UodGhpcyxlLHQsbixyLDEpfSxvZmY6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGk7aWYoZSYmZS5wcmV2ZW50RGVmYXVsdCYmZS5oYW5kbGVPYmopcmV0dXJuIHI9ZS5oYW5kbGVPYmosUyhlLmRlbGVnYXRlVGFyZ2V0KS5vZmYoci5uYW1lc3BhY2U/ci5vcmlnVHlwZStcIi5cIityLm5hbWVzcGFjZTpyLm9yaWdUeXBlLHIuc2VsZWN0b3Isci5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlKXtmb3IoaSBpbiBlKXRoaXMub2ZmKGksdCxlW2ldKTtyZXR1cm4gdGhpc31yZXR1cm4hMSE9PXQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHR8fChuPXQsdD12b2lkIDApLCExPT09biYmKG49RWUpLHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtTLmV2ZW50LnJlbW92ZSh0aGlzLGUsbix0KX0pKX19KTt2YXIgTmU9LzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksRGU9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxqZT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2c7ZnVuY3Rpb24gcWUoZSx0KXtyZXR1cm4gQShlLFwidGFibGVcIikmJkEoMTEhPT10Lm5vZGVUeXBlP3Q6dC5maXJzdENoaWxkLFwidHJcIikmJlMoZSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXXx8ZX1mdW5jdGlvbiBMZShlKXtyZXR1cm4gZS50eXBlPShudWxsIT09ZS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIitlLnR5cGUsZX1mdW5jdGlvbiBIZShlKXtyZXR1cm5cInRydWUvXCI9PT0oZS50eXBlfHxcIlwiKS5zbGljZSgwLDUpP2UudHlwZT1lLnR5cGUuc2xpY2UoNSk6ZS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGV9ZnVuY3Rpb24gT2UoZSx0KXt2YXIgbixyLGksbyxhLHM7aWYoMT09PXQubm9kZVR5cGUpe2lmKFkuaGFzRGF0YShlKSYmKHM9WS5nZXQoZSkuZXZlbnRzKSlmb3IoaSBpbiBZLnJlbW92ZSh0LFwiaGFuZGxlIGV2ZW50c1wiKSxzKWZvcihuPTAscj1zW2ldLmxlbmd0aDtuPHI7bisrKVMuZXZlbnQuYWRkKHQsaSxzW2ldW25dKTtRLmhhc0RhdGEoZSkmJihvPVEuYWNjZXNzKGUpLGE9Uy5leHRlbmQoe30sbyksUS5zZXQodCxhKSl9fWZ1bmN0aW9uIFBlKG4scixpLG8pe3I9ZyhyKTt2YXIgZSx0LGEscyx1LGwsYz0wLGY9bi5sZW5ndGgscD1mLTEsZD1yWzBdLGg9bShkKTtpZihofHwxPGYmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYheS5jaGVja0Nsb25lJiZEZS50ZXN0KGQpKXJldHVybiBuLmVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PW4uZXEoZSk7aCYmKHJbMF09ZC5jYWxsKHRoaXMsZSx0Lmh0bWwoKSkpLFBlKHQscixpLG8pfSkpO2lmKGYmJih0PShlPXhlKHIsblswXS5vd25lckRvY3VtZW50LCExLG4sbykpLmZpcnN0Q2hpbGQsMT09PWUuY2hpbGROb2Rlcy5sZW5ndGgmJihlPXQpLHR8fG8pKXtmb3Iocz0oYT1TLm1hcCh2ZShlLFwic2NyaXB0XCIpLExlKSkubGVuZ3RoO2M8ZjtjKyspdT1lLGMhPT1wJiYodT1TLmNsb25lKHUsITAsITApLHMmJlMubWVyZ2UoYSx2ZSh1LFwic2NyaXB0XCIpKSksaS5jYWxsKG5bY10sdSxjKTtpZihzKWZvcihsPWFbYS5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxTLm1hcChhLEhlKSxjPTA7YzxzO2MrKyl1PWFbY10saGUudGVzdCh1LnR5cGV8fFwiXCIpJiYhWS5hY2Nlc3ModSxcImdsb2JhbEV2YWxcIikmJlMuY29udGFpbnMobCx1KSYmKHUuc3JjJiZcIm1vZHVsZVwiIT09KHUudHlwZXx8XCJcIikudG9Mb3dlckNhc2UoKT9TLl9ldmFsVXJsJiYhdS5ub01vZHVsZSYmUy5fZXZhbFVybCh1LnNyYyx7bm9uY2U6dS5ub25jZXx8dS5nZXRBdHRyaWJ1dGUoXCJub25jZVwiKX0sbCk6Yih1LnRleHRDb250ZW50LnJlcGxhY2UoamUsXCJcIiksdSxsKSl9cmV0dXJuIG59ZnVuY3Rpb24gUmUoZSx0LG4pe2Zvcih2YXIgcixpPXQ/Uy5maWx0ZXIodCxlKTplLG89MDtudWxsIT0ocj1pW29dKTtvKyspbnx8MSE9PXIubm9kZVR5cGV8fFMuY2xlYW5EYXRhKHZlKHIpKSxyLnBhcmVudE5vZGUmJihuJiZpZShyKSYmeWUodmUocixcInNjcmlwdFwiKSksci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHIpKTtyZXR1cm4gZX1TLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sY2xvbmU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbyxhLHMsdSxsLGM9ZS5jbG9uZU5vZGUoITApLGY9aWUoZSk7aWYoISh5Lm5vQ2xvbmVDaGVja2VkfHwxIT09ZS5ub2RlVHlwZSYmMTEhPT1lLm5vZGVUeXBlfHxTLmlzWE1MRG9jKGUpKSlmb3IoYT12ZShjKSxyPTAsaT0obz12ZShlKSkubGVuZ3RoO3I8aTtyKyspcz1vW3JdLFwiaW5wdXRcIj09PShsPSh1PWFbcl0pLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpJiZwZS50ZXN0KHMudHlwZSk/dS5jaGVja2VkPXMuY2hlY2tlZDpcImlucHV0XCIhPT1sJiZcInRleHRhcmVhXCIhPT1sfHwodS5kZWZhdWx0VmFsdWU9cy5kZWZhdWx0VmFsdWUpO2lmKHQpaWYobilmb3Iobz1vfHx2ZShlKSxhPWF8fHZlKGMpLHI9MCxpPW8ubGVuZ3RoO3I8aTtyKyspT2Uob1tyXSxhW3JdKTtlbHNlIE9lKGUsYyk7cmV0dXJuIDA8KGE9dmUoYyxcInNjcmlwdFwiKSkubGVuZ3RoJiZ5ZShhLCFmJiZ2ZShlLFwic2NyaXB0XCIpKSxjfSxjbGVhbkRhdGE6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG4scixpPVMuZXZlbnQuc3BlY2lhbCxvPTA7dm9pZCAwIT09KG49ZVtvXSk7bysrKWlmKFYobikpe2lmKHQ9bltZLmV4cGFuZG9dKXtpZih0LmV2ZW50cylmb3IociBpbiB0LmV2ZW50cylpW3JdP1MuZXZlbnQucmVtb3ZlKG4scik6Uy5yZW1vdmVFdmVudChuLHIsdC5oYW5kbGUpO25bWS5leHBhbmRvXT12b2lkIDB9bltRLmV4cGFuZG9dJiYobltRLmV4cGFuZG9dPXZvaWQgMCl9fX0pLFMuZm4uZXh0ZW5kKHtkZXRhY2g6ZnVuY3Rpb24oZSl7cmV0dXJuIFJlKHRoaXMsZSwhMCl9LHJlbW92ZTpmdW5jdGlvbihlKXtyZXR1cm4gUmUodGhpcyxlKX0sdGV4dDpmdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLChmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT9TLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goKGZ1bmN0aW9uKCl7MSE9PXRoaXMubm9kZVR5cGUmJjExIT09dGhpcy5ub2RlVHlwZSYmOSE9PXRoaXMubm9kZVR5cGV8fCh0aGlzLnRleHRDb250ZW50PWUpfSkpfSksbnVsbCxlLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsKGZ1bmN0aW9uKGUpezEhPT10aGlzLm5vZGVUeXBlJiYxMSE9PXRoaXMubm9kZVR5cGUmJjkhPT10aGlzLm5vZGVUeXBlfHxxZSh0aGlzLGUpLmFwcGVuZENoaWxkKGUpfSkpfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIFBlKHRoaXMsYXJndW1lbnRzLChmdW5jdGlvbihlKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIHQ9cWUodGhpcyxlKTt0Lmluc2VydEJlZm9yZShlLHQuZmlyc3RDaGlsZCl9fSkpfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsKGZ1bmN0aW9uKGUpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLHRoaXMpfSkpfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiBQZSh0aGlzLGFyZ3VtZW50cywoZnVuY3Rpb24oZSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsdGhpcy5uZXh0U2libGluZyl9KSl9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBlLHQ9MDtudWxsIT0oZT10aGlzW3RdKTt0KyspMT09PWUubm9kZVR5cGUmJihTLmNsZWFuRGF0YSh2ZShlLCExKSksZS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT1udWxsIT1lJiZlLHQ9bnVsbD09dD9lOnQsdGhpcy5tYXAoKGZ1bmN0aW9uKCl7cmV0dXJuIFMuY2xvbmUodGhpcyxlLHQpfSkpfSxodG1sOmZ1bmN0aW9uKGUpe3JldHVybiAkKHRoaXMsKGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXNbMF18fHt9LG49MCxyPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWUmJjE9PT10Lm5vZGVUeXBlKXJldHVybiB0LmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmIU5lLnRlc3QoZSkmJiFnZVsoZGUuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXtlPVMuaHRtbFByZWZpbHRlcihlKTt0cnl7Zm9yKDtuPHI7bisrKTE9PT0odD10aGlzW25dfHx7fSkubm9kZVR5cGUmJihTLmNsZWFuRGF0YSh2ZSh0LCExKSksdC5pbm5lckhUTUw9ZSk7dD0wfWNhdGNoKGUpe319dCYmdGhpcy5lbXB0eSgpLmFwcGVuZChlKX0pLG51bGwsZSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgbj1bXTtyZXR1cm4gUGUodGhpcyxhcmd1bWVudHMsKGZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMucGFyZW50Tm9kZTtTLmluQXJyYXkodGhpcyxuKTwwJiYoUy5jbGVhbkRhdGEodmUodGhpcykpLHQmJnQucmVwbGFjZUNoaWxkKGUsdGhpcykpfSksbil9fSksUy5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LChmdW5jdGlvbihlLGEpe1MuZm5bZV09ZnVuY3Rpb24oZSl7Zm9yKHZhciB0LG49W10scj1TKGUpLGk9ci5sZW5ndGgtMSxvPTA7bzw9aTtvKyspdD1vPT09aT90aGlzOnRoaXMuY2xvbmUoITApLFMocltvXSlbYV0odCksdS5hcHBseShuLHQuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhuKX19KSk7dmFyIE1lPW5ldyBSZWdFeHAoXCJeKFwiK2VlK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLEllPWZ1bmN0aW9uKGUpe3ZhciB0PWUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztyZXR1cm4gdCYmdC5vcGVuZXJ8fCh0PUMpLHQuZ2V0Q29tcHV0ZWRTdHlsZShlKX0sV2U9ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fTtmb3IoaSBpbiB0KW9baV09ZS5zdHlsZVtpXSxlLnN0eWxlW2ldPXRbaV07Zm9yKGkgaW4gcj1uLmNhbGwoZSksdCllLnN0eWxlW2ldPW9baV07cmV0dXJuIHJ9LEZlPW5ldyBSZWdFeHAobmUuam9pbihcInxcIiksXCJpXCIpO2Z1bmN0aW9uIEJlKGUsdCxuKXt2YXIgcixpLG8sYSxzPWUuc3R5bGU7cmV0dXJuKG49bnx8SWUoZSkpJiYoXCJcIiE9PShhPW4uZ2V0UHJvcGVydHlWYWx1ZSh0KXx8blt0XSl8fGllKGUpfHwoYT1TLnN0eWxlKGUsdCkpLCF5LnBpeGVsQm94U3R5bGVzKCkmJk1lLnRlc3QoYSkmJkZlLnRlc3QodCkmJihyPXMud2lkdGgsaT1zLm1pbldpZHRoLG89cy5tYXhXaWR0aCxzLm1pbldpZHRoPXMubWF4V2lkdGg9cy53aWR0aD1hLGE9bi53aWR0aCxzLndpZHRoPXIscy5taW5XaWR0aD1pLHMubWF4V2lkdGg9bykpLHZvaWQgMCE9PWE/YStcIlwiOmF9ZnVuY3Rpb24gJGUoZSx0KXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7aWYoIWUoKSlyZXR1cm4odGhpcy5nZXQ9dCkuYXBwbHkodGhpcyxhcmd1bWVudHMpO2RlbGV0ZSB0aGlzLmdldH19fSFmdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtpZihsKXt1LnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4O3dpZHRoOjYwcHg7bWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCIsbC5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NjAlO3RvcDoxJVwiLHJlLmFwcGVuZENoaWxkKHUpLmFwcGVuZENoaWxkKGwpO3ZhciBlPUMuZ2V0Q29tcHV0ZWRTdHlsZShsKTtuPVwiMSVcIiE9PWUudG9wLHM9MTI9PT10KGUubWFyZ2luTGVmdCksbC5zdHlsZS5yaWdodD1cIjYwJVwiLG89MzY9PT10KGUucmlnaHQpLHI9MzY9PT10KGUud2lkdGgpLGwuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiLGk9MTI9PT10KGwub2Zmc2V0V2lkdGgvMykscmUucmVtb3ZlQ2hpbGQodSksbD1udWxsfX1mdW5jdGlvbiB0KGUpe3JldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQoZSkpfXZhciBuLHIsaSxvLGEscyx1PUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxsPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKTtsLnN0eWxlJiYobC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cImNvbnRlbnQtYm94XCIsbC5jbG9uZU5vZGUoITApLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiXCIseS5jbGVhckNsb25lU3R5bGU9XCJjb250ZW50LWJveFwiPT09bC5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCxTLmV4dGVuZCh5LHtib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBlKCkscn0scGl4ZWxCb3hTdHlsZXM6ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG99LHBpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZSgpLG59LHJlbGlhYmxlTWFyZ2luTGVmdDpmdW5jdGlvbigpe3JldHVybiBlKCksc30sc2Nyb2xsYm94U2l6ZTpmdW5jdGlvbigpe3JldHVybiBlKCksaX0scmVsaWFibGVUckRpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgZSx0LG4scjtyZXR1cm4gbnVsbD09YSYmKGU9RS5jcmVhdGVFbGVtZW50KFwidGFibGVcIiksdD1FLmNyZWF0ZUVsZW1lbnQoXCJ0clwiKSxuPUUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi0xMTExMXB4XCIsdC5zdHlsZS5oZWlnaHQ9XCIxcHhcIixuLnN0eWxlLmhlaWdodD1cIjlweFwiLHJlLmFwcGVuZENoaWxkKGUpLmFwcGVuZENoaWxkKHQpLmFwcGVuZENoaWxkKG4pLHI9Qy5nZXRDb21wdXRlZFN0eWxlKHQpLGE9MzxwYXJzZUludChyLmhlaWdodCkscmUucmVtb3ZlQ2hpbGQoZSkpLGF9fSkpfSgpO3ZhciBfZT1bXCJXZWJraXRcIixcIk1velwiLFwibXNcIl0semU9RS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFVlPXt9O2Z1bmN0aW9uIFhlKGUpe3ZhciB0O3JldHVybiBTLmNzc1Byb3BzW2VdfHxVZVtlXXx8KGUgaW4gemU/ZTpVZVtlXT1mdW5jdGlvbihlKXtmb3IodmFyIHQ9ZVswXS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj1fZS5sZW5ndGg7bi0tOylpZigoZT1fZVtuXSt0KWluIHplKXJldHVybiBlfShlKXx8ZSl9dmFyIFZlPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxHZT0vXi0tLyxZZT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sUWU9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifTtmdW5jdGlvbiBKZShlLHQsbil7dmFyIHI9dGUuZXhlYyh0KTtyZXR1cm4gcj9NYXRoLm1heCgwLHJbMl0tKG58fDApKSsoclszXXx8XCJweFwiKTp0fWZ1bmN0aW9uIEtlKGUsdCxuLHIsaSxvKXt2YXIgYT1cIndpZHRoXCI9PT10PzE6MCxzPTAsdT0wO2lmKG49PT0ocj9cImJvcmRlclwiOlwiY29udGVudFwiKSlyZXR1cm4gMDtmb3IoO2E8NDthKz0yKVwibWFyZ2luXCI9PT1uJiYodSs9Uy5jc3MoZSxuK25lW2FdLCEwLGkpKSxyPyhcImNvbnRlbnRcIj09PW4mJih1LT1TLmNzcyhlLFwicGFkZGluZ1wiK25lW2FdLCEwLGkpKSxcIm1hcmdpblwiIT09biYmKHUtPVMuY3NzKGUsXCJib3JkZXJcIituZVthXStcIldpZHRoXCIsITAsaSkpKToodSs9Uy5jc3MoZSxcInBhZGRpbmdcIituZVthXSwhMCxpKSxcInBhZGRpbmdcIiE9PW4/dSs9Uy5jc3MoZSxcImJvcmRlclwiK25lW2FdK1wiV2lkdGhcIiwhMCxpKTpzKz1TLmNzcyhlLFwiYm9yZGVyXCIrbmVbYV0rXCJXaWR0aFwiLCEwLGkpKTtyZXR1cm4hciYmMDw9byYmKHUrPU1hdGgubWF4KDAsTWF0aC5jZWlsKGVbXCJvZmZzZXRcIit0WzBdLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV0tby11LXMtLjUpKXx8MCksdX1mdW5jdGlvbiBaZShlLHQsbil7dmFyIHI9SWUoZSksaT0oIXkuYm94U2l6aW5nUmVsaWFibGUoKXx8bikmJlwiYm9yZGVyLWJveFwiPT09Uy5jc3MoZSxcImJveFNpemluZ1wiLCExLHIpLG89aSxhPUJlKGUsdCxyKSxzPVwib2Zmc2V0XCIrdFswXS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSk7aWYoTWUudGVzdChhKSl7aWYoIW4pcmV0dXJuIGE7YT1cImF1dG9cIn1yZXR1cm4oIXkuYm94U2l6aW5nUmVsaWFibGUoKSYmaXx8IXkucmVsaWFibGVUckRpbWVuc2lvbnMoKSYmQShlLFwidHJcIil8fFwiYXV0b1wiPT09YXx8IXBhcnNlRmxvYXQoYSkmJlwiaW5saW5lXCI9PT1TLmNzcyhlLFwiZGlzcGxheVwiLCExLHIpKSYmZS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCYmKGk9XCJib3JkZXItYm94XCI9PT1TLmNzcyhlLFwiYm94U2l6aW5nXCIsITEsciksKG89cyBpbiBlKSYmKGE9ZVtzXSkpLChhPXBhcnNlRmxvYXQoYSl8fDApK0tlKGUsdCxufHwoaT9cImJvcmRlclwiOlwiY29udGVudFwiKSxvLHIsYSkrXCJweFwifWZ1bmN0aW9uIGV0KGUsdCxuLHIsaSl7cmV0dXJuIG5ldyBldC5wcm90b3R5cGUuaW5pdChlLHQsbixyLGkpfVMuZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGUsdCl7aWYodCl7dmFyIG49QmUoZSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PW4/XCIxXCI6bn19fX0sY3NzTnVtYmVyOnthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsZ3JpZEFyZWE6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TdGFydDohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1N0YXJ0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e30sc3R5bGU6ZnVuY3Rpb24oZSx0LG4scil7aWYoZSYmMyE9PWUubm9kZVR5cGUmJjghPT1lLm5vZGVUeXBlJiZlLnN0eWxlKXt2YXIgaSxvLGEscz1YKHQpLHU9R2UudGVzdCh0KSxsPWUuc3R5bGU7aWYodXx8KHQ9WGUocykpLGE9Uy5jc3NIb29rc1t0XXx8Uy5jc3NIb29rc1tzXSx2b2lkIDA9PT1uKXJldHVybiBhJiZcImdldFwiaW4gYSYmdm9pZCAwIT09KGk9YS5nZXQoZSwhMSxyKSk/aTpsW3RdO1wic3RyaW5nXCI9PShvPXR5cGVvZiBuKSYmKGk9dGUuZXhlYyhuKSkmJmlbMV0mJihuPXNlKGUsdCxpKSxvPVwibnVtYmVyXCIpLG51bGwhPW4mJm49PW4mJihcIm51bWJlclwiIT09b3x8dXx8KG4rPWkmJmlbM118fChTLmNzc051bWJlcltzXT9cIlwiOlwicHhcIikpLHkuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09bnx8MCE9PXQuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChsW3RdPVwiaW5oZXJpdFwiKSxhJiZcInNldFwiaW4gYSYmdm9pZCAwPT09KG49YS5zZXQoZSxuLHIpKXx8KHU/bC5zZXRQcm9wZXJ0eSh0LG4pOmxbdF09bikpfX0sY3NzOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzPVgodCk7cmV0dXJuIEdlLnRlc3QodCl8fCh0PVhlKHMpKSwoYT1TLmNzc0hvb2tzW3RdfHxTLmNzc0hvb2tzW3NdKSYmXCJnZXRcImluIGEmJihpPWEuZ2V0KGUsITAsbikpLHZvaWQgMD09PWkmJihpPUJlKGUsdCxyKSksXCJub3JtYWxcIj09PWkmJnQgaW4gUWUmJihpPVFlW3RdKSxcIlwiPT09bnx8bj8obz1wYXJzZUZsb2F0KGkpLCEwPT09bnx8aXNGaW5pdGUobyk/b3x8MDppKTppfX0pLFMuZWFjaChbXCJoZWlnaHRcIixcIndpZHRoXCJdLChmdW5jdGlvbihlLHUpe1MuY3NzSG9va3NbdV09e2dldDpmdW5jdGlvbihlLHQsbil7aWYodClyZXR1cm4hVmUudGVzdChTLmNzcyhlLFwiZGlzcGxheVwiKSl8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgmJmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg/WmUoZSx1LG4pOldlKGUsWWUsKGZ1bmN0aW9uKCl7cmV0dXJuIFplKGUsdSxuKX0pKX0sc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpPUllKGUpLG89IXkuc2Nyb2xsYm94U2l6ZSgpJiZcImFic29sdXRlXCI9PT1pLnBvc2l0aW9uLGE9KG98fG4pJiZcImJvcmRlci1ib3hcIj09PVMuY3NzKGUsXCJib3hTaXppbmdcIiwhMSxpKSxzPW4/S2UoZSx1LG4sYSxpKTowO3JldHVybiBhJiZvJiYocy09TWF0aC5jZWlsKGVbXCJvZmZzZXRcIit1WzBdLnRvVXBwZXJDYXNlKCkrdS5zbGljZSgxKV0tcGFyc2VGbG9hdChpW3VdKS1LZShlLHUsXCJib3JkZXJcIiwhMSxpKS0uNSkpLHMmJihyPXRlLmV4ZWModCkpJiZcInB4XCIhPT0oclszXXx8XCJweFwiKSYmKGUuc3R5bGVbdV09dCx0PVMuY3NzKGUsdSkpLEplKDAsdCxzKX19fSkpLFMuY3NzSG9va3MubWFyZ2luTGVmdD0kZSh5LnJlbGlhYmxlTWFyZ2luTGVmdCwoZnVuY3Rpb24oZSx0KXtpZih0KXJldHVybihwYXJzZUZsb2F0KEJlKGUsXCJtYXJnaW5MZWZ0XCIpKXx8ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LVdlKGUse21hcmdpbkxlZnQ6MH0sKGZ1bmN0aW9uKCl7cmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdH0pKSkrXCJweFwifSkpLFMuZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LChmdW5jdGlvbihpLG8pe1MuY3NzSG9va3NbaStvXT17ZXhwYW5kOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49e30scj1cInN0cmluZ1wiPT10eXBlb2YgZT9lLnNwbGl0KFwiIFwiKTpbZV07dDw0O3QrKyluW2krbmVbdF0rb109clt0XXx8clt0LTJdfHxyWzBdO3JldHVybiBufX0sXCJtYXJnaW5cIiE9PWkmJihTLmNzc0hvb2tzW2krb10uc2V0PUplKX0pKSxTLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcywoZnVuY3Rpb24oZSx0LG4pe3ZhciByLGksbz17fSxhPTA7aWYoQXJyYXkuaXNBcnJheSh0KSl7Zm9yKHI9SWUoZSksaT10Lmxlbmd0aDthPGk7YSsrKW9bdFthXV09Uy5jc3MoZSx0W2FdLCExLHIpO3JldHVybiBvfXJldHVybiB2b2lkIDAhPT1uP1Muc3R5bGUoZSx0LG4pOlMuY3NzKGUsdCl9KSxlLHQsMTxhcmd1bWVudHMubGVuZ3RoKX19KSwoKFMuVHdlZW49ZXQpLnByb3RvdHlwZT17Y29uc3RydWN0b3I6ZXQsaW5pdDpmdW5jdGlvbihlLHQsbixyLGksbyl7dGhpcy5lbGVtPWUsdGhpcy5wcm9wPW4sdGhpcy5lYXNpbmc9aXx8Uy5lYXNpbmcuX2RlZmF1bHQsdGhpcy5vcHRpb25zPXQsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPXIsdGhpcy51bml0PW98fChTLmNzc051bWJlcltuXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBlPWV0LnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBlJiZlLmdldD9lLmdldCh0aGlzKTpldC5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oZSl7dmFyIHQsbj1ldC5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPXQ9Uy5lYXNpbmdbdGhpcy5lYXNpbmddKGUsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmUsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9dD1lLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSp0K3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLG4mJm4uc2V0P24uc2V0KHRoaXMpOmV0LnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319KS5pbml0LnByb3RvdHlwZT1ldC5wcm90b3R5cGUsKGV0LnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gMSE9PWUuZWxlbS5ub2RlVHlwZXx8bnVsbCE9ZS5lbGVtW2UucHJvcF0mJm51bGw9PWUuZWxlbS5zdHlsZVtlLnByb3BdP2UuZWxlbVtlLnByb3BdOih0PVMuY3NzKGUuZWxlbSxlLnByb3AsXCJcIikpJiZcImF1dG9cIiE9PXQ/dDowfSxzZXQ6ZnVuY3Rpb24oZSl7Uy5meC5zdGVwW2UucHJvcF0/Uy5meC5zdGVwW2UucHJvcF0oZSk6MSE9PWUuZWxlbS5ub2RlVHlwZXx8IVMuY3NzSG9va3NbZS5wcm9wXSYmbnVsbD09ZS5lbGVtLnN0eWxlW1hlKGUucHJvcCldP2UuZWxlbVtlLnByb3BdPWUubm93OlMuc3R5bGUoZS5lbGVtLGUucHJvcCxlLm5vdytlLnVuaXQpfX19KS5zY3JvbGxUb3A9ZXQucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihlKXtlLmVsZW0ubm9kZVR5cGUmJmUuZWxlbS5wYXJlbnROb2RlJiYoZS5lbGVtW2UucHJvcF09ZS5ub3cpfX0sUy5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLjUtTWF0aC5jb3MoZSpNYXRoLlBJKS8yfSxfZGVmYXVsdDpcInN3aW5nXCJ9LFMuZng9ZXQucHJvdG90eXBlLmluaXQsUy5meC5zdGVwPXt9O3ZhciB0dCxudCxydCxpdCxvdD0vXig/OnRvZ2dsZXxzaG93fGhpZGUpJC8sYXQ9L3F1ZXVlSG9va3MkLztmdW5jdGlvbiBzdCgpe250JiYoITE9PT1FLmhpZGRlbiYmQy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/Qy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3QpOkMuc2V0VGltZW91dChzdCxTLmZ4LmludGVydmFsKSxTLmZ4LnRpY2soKSl9ZnVuY3Rpb24gdXQoKXtyZXR1cm4gQy5zZXRUaW1lb3V0KChmdW5jdGlvbigpe3R0PXZvaWQgMH0pKSx0dD1EYXRlLm5vdygpfWZ1bmN0aW9uIGx0KGUsdCl7dmFyIG4scj0wLGk9e2hlaWdodDplfTtmb3IodD10PzE6MDtyPDQ7cis9Mi10KWlbXCJtYXJnaW5cIisobj1uZVtyXSldPWlbXCJwYWRkaW5nXCIrbl09ZTtyZXR1cm4gdCYmKGkub3BhY2l0eT1pLndpZHRoPWUpLGl9ZnVuY3Rpb24gY3QoZSx0LG4pe2Zvcih2YXIgcixpPShmdC50d2VlbmVyc1t0XXx8W10pLmNvbmNhdChmdC50d2VlbmVyc1tcIipcIl0pLG89MCxhPWkubGVuZ3RoO288YTtvKyspaWYocj1pW29dLmNhbGwobix0LGUpKXJldHVybiByfWZ1bmN0aW9uIGZ0KG8sZSx0KXt2YXIgbixhLHI9MCxpPWZ0LnByZWZpbHRlcnMubGVuZ3RoLHM9Uy5EZWZlcnJlZCgpLmFsd2F5cygoZnVuY3Rpb24oKXtkZWxldGUgdS5lbGVtfSkpLHU9ZnVuY3Rpb24oKXtpZihhKXJldHVybiExO2Zvcih2YXIgZT10dHx8dXQoKSx0PU1hdGgubWF4KDAsbC5zdGFydFRpbWUrbC5kdXJhdGlvbi1lKSxuPTEtKHQvbC5kdXJhdGlvbnx8MCkscj0wLGk9bC50d2VlbnMubGVuZ3RoO3I8aTtyKyspbC50d2VlbnNbcl0ucnVuKG4pO3JldHVybiBzLm5vdGlmeVdpdGgobyxbbCxuLHRdKSxuPDEmJmk/dDooaXx8cy5ub3RpZnlXaXRoKG8sW2wsMSwwXSkscy5yZXNvbHZlV2l0aChvLFtsXSksITEpfSxsPXMucHJvbWlzZSh7ZWxlbTpvLHByb3BzOlMuZXh0ZW5kKHt9LGUpLG9wdHM6Uy5leHRlbmQoITAse3NwZWNpYWxFYXNpbmc6e30sZWFzaW5nOlMuZWFzaW5nLl9kZWZhdWx0fSx0KSxvcmlnaW5hbFByb3BlcnRpZXM6ZSxvcmlnaW5hbE9wdGlvbnM6dCxzdGFydFRpbWU6dHR8fHV0KCksZHVyYXRpb246dC5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oZSx0KXt2YXIgbj1TLlR3ZWVuKG8sbC5vcHRzLGUsdCxsLm9wdHMuc3BlY2lhbEVhc2luZ1tlXXx8bC5vcHRzLmVhc2luZyk7cmV0dXJuIGwudHdlZW5zLnB1c2gobiksbn0sc3RvcDpmdW5jdGlvbihlKXt2YXIgdD0wLG49ZT9sLnR3ZWVucy5sZW5ndGg6MDtpZihhKXJldHVybiB0aGlzO2ZvcihhPSEwO3Q8bjt0KyspbC50d2VlbnNbdF0ucnVuKDEpO3JldHVybiBlPyhzLm5vdGlmeVdpdGgobyxbbCwxLDBdKSxzLnJlc29sdmVXaXRoKG8sW2wsZV0pKTpzLnJlamVjdFdpdGgobyxbbCxlXSksdGhpc319KSxjPWwucHJvcHM7Zm9yKGZ1bmN0aW9uKGUsdCl7dmFyIG4scixpLG8sYTtmb3IobiBpbiBlKWlmKGk9dFtyPVgobildLG89ZVtuXSxBcnJheS5pc0FycmF5KG8pJiYoaT1vWzFdLG89ZVtuXT1vWzBdKSxuIT09ciYmKGVbcl09byxkZWxldGUgZVtuXSksKGE9Uy5jc3NIb29rc1tyXSkmJlwiZXhwYW5kXCJpbiBhKWZvcihuIGluIG89YS5leHBhbmQobyksZGVsZXRlIGVbcl0sbyluIGluIGV8fChlW25dPW9bbl0sdFtuXT1pKTtlbHNlIHRbcl09aX0oYyxsLm9wdHMuc3BlY2lhbEVhc2luZyk7cjxpO3IrKylpZihuPWZ0LnByZWZpbHRlcnNbcl0uY2FsbChsLG8sYyxsLm9wdHMpKXJldHVybiBtKG4uc3RvcCkmJihTLl9xdWV1ZUhvb2tzKGwuZWxlbSxsLm9wdHMucXVldWUpLnN0b3A9bi5zdG9wLmJpbmQobikpLG47cmV0dXJuIFMubWFwKGMsY3QsbCksbShsLm9wdHMuc3RhcnQpJiZsLm9wdHMuc3RhcnQuY2FsbChvLGwpLGwucHJvZ3Jlc3MobC5vcHRzLnByb2dyZXNzKS5kb25lKGwub3B0cy5kb25lLGwub3B0cy5jb21wbGV0ZSkuZmFpbChsLm9wdHMuZmFpbCkuYWx3YXlzKGwub3B0cy5hbHdheXMpLFMuZngudGltZXIoUy5leHRlbmQodSx7ZWxlbTpvLGFuaW06bCxxdWV1ZTpsLm9wdHMucXVldWV9KSksbH1TLkFuaW1hdGlvbj1TLmV4dGVuZChmdCx7dHdlZW5lcnM6e1wiKlwiOltmdW5jdGlvbihlLHQpe3ZhciBuPXRoaXMuY3JlYXRlVHdlZW4oZSx0KTtyZXR1cm4gc2Uobi5lbGVtLGUsdGUuZXhlYyh0KSxuKSxufV19LHR3ZWVuZXI6ZnVuY3Rpb24oZSx0KXttKGUpPyh0PWUsZT1bXCIqXCJdKTplPWUubWF0Y2goUCk7Zm9yKHZhciBuLHI9MCxpPWUubGVuZ3RoO3I8aTtyKyspbj1lW3JdLGZ0LnR3ZWVuZXJzW25dPWZ0LnR3ZWVuZXJzW25dfHxbXSxmdC50d2VlbmVyc1tuXS51bnNoaWZ0KHQpfSxwcmVmaWx0ZXJzOltmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGEscyx1LGwsYyxmPVwid2lkdGhcImluIHR8fFwiaGVpZ2h0XCJpbiB0LHA9dGhpcyxkPXt9LGg9ZS5zdHlsZSxnPWUubm9kZVR5cGUmJmFlKGUpLHY9WS5nZXQoZSxcImZ4c2hvd1wiKTtmb3IociBpbiBuLnF1ZXVlfHwobnVsbD09KGE9Uy5fcXVldWVIb29rcyhlLFwiZnhcIikpLnVucXVldWVkJiYoYS51bnF1ZXVlZD0wLHM9YS5lbXB0eS5maXJlLGEuZW1wdHkuZmlyZT1mdW5jdGlvbigpe2EudW5xdWV1ZWR8fHMoKX0pLGEudW5xdWV1ZWQrKyxwLmFsd2F5cygoZnVuY3Rpb24oKXtwLmFsd2F5cygoZnVuY3Rpb24oKXthLnVucXVldWVkLS0sUy5xdWV1ZShlLFwiZnhcIikubGVuZ3RofHxhLmVtcHR5LmZpcmUoKX0pKX0pKSksdClpZihpPXRbcl0sb3QudGVzdChpKSl7aWYoZGVsZXRlIHRbcl0sbz1vfHxcInRvZ2dsZVwiPT09aSxpPT09KGc/XCJoaWRlXCI6XCJzaG93XCIpKXtpZihcInNob3dcIiE9PWl8fCF2fHx2b2lkIDA9PT12W3JdKWNvbnRpbnVlO2c9ITB9ZFtyXT12JiZ2W3JdfHxTLnN0eWxlKGUscil9aWYoKHU9IVMuaXNFbXB0eU9iamVjdCh0KSl8fCFTLmlzRW1wdHlPYmplY3QoZCkpZm9yKHIgaW4gZiYmMT09PWUubm9kZVR5cGUmJihuLm92ZXJmbG93PVtoLm92ZXJmbG93LGgub3ZlcmZsb3dYLGgub3ZlcmZsb3dZXSxudWxsPT0obD12JiZ2LmRpc3BsYXkpJiYobD1ZLmdldChlLFwiZGlzcGxheVwiKSksXCJub25lXCI9PT0oYz1TLmNzcyhlLFwiZGlzcGxheVwiKSkmJihsP2M9bDoobGUoW2VdLCEwKSxsPWUuc3R5bGUuZGlzcGxheXx8bCxjPVMuY3NzKGUsXCJkaXNwbGF5XCIpLGxlKFtlXSkpKSwoXCJpbmxpbmVcIj09PWN8fFwiaW5saW5lLWJsb2NrXCI9PT1jJiZudWxsIT1sKSYmXCJub25lXCI9PT1TLmNzcyhlLFwiZmxvYXRcIikmJih1fHwocC5kb25lKChmdW5jdGlvbigpe2guZGlzcGxheT1sfSkpLG51bGw9PWwmJihjPWguZGlzcGxheSxsPVwibm9uZVwiPT09Yz9cIlwiOmMpKSxoLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLG4ub3ZlcmZsb3cmJihoLm92ZXJmbG93PVwiaGlkZGVuXCIscC5hbHdheXMoKGZ1bmN0aW9uKCl7aC5vdmVyZmxvdz1uLm92ZXJmbG93WzBdLGgub3ZlcmZsb3dYPW4ub3ZlcmZsb3dbMV0saC5vdmVyZmxvd1k9bi5vdmVyZmxvd1syXX0pKSksdT0hMSxkKXV8fCh2P1wiaGlkZGVuXCJpbiB2JiYoZz12LmhpZGRlbik6dj1ZLmFjY2VzcyhlLFwiZnhzaG93XCIse2Rpc3BsYXk6bH0pLG8mJih2LmhpZGRlbj0hZyksZyYmbGUoW2VdLCEwKSxwLmRvbmUoKGZ1bmN0aW9uKCl7Zm9yKHIgaW4gZ3x8bGUoW2VdKSxZLnJlbW92ZShlLFwiZnhzaG93XCIpLGQpUy5zdHlsZShlLHIsZFtyXSl9KSkpLHU9Y3QoZz92W3JdOjAscixwKSxyIGluIHZ8fCh2W3JdPXUuc3RhcnQsZyYmKHUuZW5kPXUuc3RhcnQsdS5zdGFydD0wKSl9XSxwcmVmaWx0ZXI6ZnVuY3Rpb24oZSx0KXt0P2Z0LnByZWZpbHRlcnMudW5zaGlmdChlKTpmdC5wcmVmaWx0ZXJzLnB1c2goZSl9fSksUy5zcGVlZD1mdW5jdGlvbihlLHQsbil7dmFyIHI9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/Uy5leHRlbmQoe30sZSk6e2NvbXBsZXRlOm58fCFuJiZ0fHxtKGUpJiZlLGR1cmF0aW9uOmUsZWFzaW5nOm4mJnR8fHQmJiFtKHQpJiZ0fTtyZXR1cm4gUy5meC5vZmY/ci5kdXJhdGlvbj0wOlwibnVtYmVyXCIhPXR5cGVvZiByLmR1cmF0aW9uJiYoci5kdXJhdGlvbiBpbiBTLmZ4LnNwZWVkcz9yLmR1cmF0aW9uPVMuZnguc3BlZWRzW3IuZHVyYXRpb25dOnIuZHVyYXRpb249Uy5meC5zcGVlZHMuX2RlZmF1bHQpLG51bGwhPXIucXVldWUmJiEwIT09ci5xdWV1ZXx8KHIucXVldWU9XCJmeFwiKSxyLm9sZD1yLmNvbXBsZXRlLHIuY29tcGxldGU9ZnVuY3Rpb24oKXttKHIub2xkKSYmci5vbGQuY2FsbCh0aGlzKSxyLnF1ZXVlJiZTLmRlcXVldWUodGhpcyxyLnF1ZXVlKX0scn0sUy5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gdGhpcy5maWx0ZXIoYWUpLmNzcyhcIm9wYWNpdHlcIiwwKS5zaG93KCkuZW5kKCkuYW5pbWF0ZSh7b3BhY2l0eTp0fSxlLG4scil9LGFuaW1hdGU6ZnVuY3Rpb24odCxlLG4scil7dmFyIGk9Uy5pc0VtcHR5T2JqZWN0KHQpLG89Uy5zcGVlZChlLG4sciksYT1mdW5jdGlvbigpe3ZhciBlPWZ0KHRoaXMsUy5leHRlbmQoe30sdCksbyk7KGl8fFkuZ2V0KHRoaXMsXCJmaW5pc2hcIikpJiZlLnN0b3AoITApfTtyZXR1cm4gYS5maW5pc2g9YSxpfHwhMT09PW8ucXVldWU/dGhpcy5lYWNoKGEpOnRoaXMucXVldWUoby5xdWV1ZSxhKX0sc3RvcDpmdW5jdGlvbihpLGUsbyl7dmFyIGE9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zdG9wO2RlbGV0ZSBlLnN0b3AsdChvKX07cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGkmJihvPWUsZT1pLGk9dm9pZCAwKSxlJiZ0aGlzLnF1ZXVlKGl8fFwiZnhcIixbXSksdGhpcy5lYWNoKChmdW5jdGlvbigpe3ZhciBlPSEwLHQ9bnVsbCE9aSYmaStcInF1ZXVlSG9va3NcIixuPVMudGltZXJzLHI9WS5nZXQodGhpcyk7aWYodClyW3RdJiZyW3RdLnN0b3AmJmEoclt0XSk7ZWxzZSBmb3IodCBpbiByKXJbdF0mJnJbdF0uc3RvcCYmYXQudGVzdCh0KSYmYShyW3RdKTtmb3IodD1uLmxlbmd0aDt0LS07KW5bdF0uZWxlbSE9PXRoaXN8fG51bGwhPWkmJm5bdF0ucXVldWUhPT1pfHwoblt0XS5hbmltLnN0b3AobyksZT0hMSxuLnNwbGljZSh0LDEpKTshZSYmb3x8Uy5kZXF1ZXVlKHRoaXMsaSl9KSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4hMSE9PWEmJihhPWF8fFwiZnhcIiksdGhpcy5lYWNoKChmdW5jdGlvbigpe3ZhciBlLHQ9WS5nZXQodGhpcyksbj10W2ErXCJxdWV1ZVwiXSxyPXRbYStcInF1ZXVlSG9va3NcIl0saT1TLnRpbWVycyxvPW4/bi5sZW5ndGg6MDtmb3IodC5maW5pc2g9ITAsUy5xdWV1ZSh0aGlzLGEsW10pLHImJnIuc3RvcCYmci5zdG9wLmNhbGwodGhpcywhMCksZT1pLmxlbmd0aDtlLS07KWlbZV0uZWxlbT09PXRoaXMmJmlbZV0ucXVldWU9PT1hJiYoaVtlXS5hbmltLnN0b3AoITApLGkuc3BsaWNlKGUsMSkpO2ZvcihlPTA7ZTxvO2UrKyluW2VdJiZuW2VdLmZpbmlzaCYmbltlXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgdC5maW5pc2h9KSl9fSksUy5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSwoZnVuY3Rpb24oZSxyKXt2YXIgaT1TLmZuW3JdO1MuZm5bcl09ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBudWxsPT1lfHxcImJvb2xlYW5cIj09dHlwZW9mIGU/aS5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKGx0KHIsITApLGUsdCxuKX19KSksUy5lYWNoKHtzbGlkZURvd246bHQoXCJzaG93XCIpLHNsaWRlVXA6bHQoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOmx0KFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sKGZ1bmN0aW9uKGUscil7Uy5mbltlXT1mdW5jdGlvbihlLHQsbil7cmV0dXJuIHRoaXMuYW5pbWF0ZShyLGUsdCxuKX19KSksUy50aW1lcnM9W10sUy5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGUsdD0wLG49Uy50aW1lcnM7Zm9yKHR0PURhdGUubm93KCk7dDxuLmxlbmd0aDt0KyspKGU9blt0XSkoKXx8blt0XSE9PWV8fG4uc3BsaWNlKHQtLSwxKTtuLmxlbmd0aHx8Uy5meC5zdG9wKCksdHQ9dm9pZCAwfSxTLmZ4LnRpbWVyPWZ1bmN0aW9uKGUpe1MudGltZXJzLnB1c2goZSksUy5meC5zdGFydCgpfSxTLmZ4LmludGVydmFsPTEzLFMuZnguc3RhcnQ9ZnVuY3Rpb24oKXtudHx8KG50PSEwLHN0KCkpfSxTLmZ4LnN0b3A9ZnVuY3Rpb24oKXtudD1udWxsfSxTLmZ4LnNwZWVkcz17c2xvdzo2MDAsZmFzdDoyMDAsX2RlZmF1bHQ6NDAwfSxTLmZuLmRlbGF5PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHI9Uy5meCYmUy5meC5zcGVlZHNbcl18fHIsZT1lfHxcImZ4XCIsdGhpcy5xdWV1ZShlLChmdW5jdGlvbihlLHQpe3ZhciBuPUMuc2V0VGltZW91dChlLHIpO3Quc3RvcD1mdW5jdGlvbigpe0MuY2xlYXJUaW1lb3V0KG4pfX0pKX0scnQ9RS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksaXQ9RS5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLmFwcGVuZENoaWxkKEUuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSkscnQudHlwZT1cImNoZWNrYm94XCIseS5jaGVja09uPVwiXCIhPT1ydC52YWx1ZSx5Lm9wdFNlbGVjdGVkPWl0LnNlbGVjdGVkLChydD1FLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSkudmFsdWU9XCJ0XCIscnQudHlwZT1cInJhZGlvXCIseS5yYWRpb1ZhbHVlPVwidFwiPT09cnQudmFsdWU7dmFyIHB0LGR0PVMuZXhwci5hdHRySGFuZGxlO1MuZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuICQodGhpcyxTLmF0dHIsZSx0LDE8YXJndW1lbnRzLmxlbmd0aCl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZWFjaCgoZnVuY3Rpb24oKXtTLnJlbW92ZUF0dHIodGhpcyxlKX0pKX19KSxTLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gdm9pZCAwPT09ZS5nZXRBdHRyaWJ1dGU/Uy5wcm9wKGUsdCxuKTooMT09PW8mJlMuaXNYTUxEb2MoZSl8fChpPVMuYXR0ckhvb2tzW3QudG9Mb3dlckNhc2UoKV18fChTLmV4cHIubWF0Y2guYm9vbC50ZXN0KHQpP3B0OnZvaWQgMCkpLHZvaWQgMCE9PW4/bnVsbD09PW4/dm9pZCBTLnJlbW92ZUF0dHIoZSx0KTppJiZcInNldFwiaW4gaSYmdm9pZCAwIT09KHI9aS5zZXQoZSxuLHQpKT9yOihlLnNldEF0dHJpYnV0ZSh0LG4rXCJcIiksbik6aSYmXCJnZXRcImluIGkmJm51bGwhPT0ocj1pLmdldChlLHQpKT9yOm51bGw9PShyPVMuZmluZC5hdHRyKGUsdCkpP3ZvaWQgMDpyKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oZSx0KXtpZigheS5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT10JiZBKGUsXCJpbnB1dFwiKSl7dmFyIG49ZS52YWx1ZTtyZXR1cm4gZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsdCksbiYmKGUudmFsdWU9biksdH19fX0scmVtb3ZlQXR0cjpmdW5jdGlvbihlLHQpe3ZhciBuLHI9MCxpPXQmJnQubWF0Y2goUCk7aWYoaSYmMT09PWUubm9kZVR5cGUpZm9yKDtuPWlbcisrXTspZS5yZW1vdmVBdHRyaWJ1dGUobil9fSkscHQ9e3NldDpmdW5jdGlvbihlLHQsbil7cmV0dXJuITE9PT10P1MucmVtb3ZlQXR0cihlLG4pOmUuc2V0QXR0cmlidXRlKG4sbiksbn19LFMuZWFjaChTLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksKGZ1bmN0aW9uKGUsdCl7dmFyIGE9ZHRbdF18fFMuZmluZC5hdHRyO2R0W3RdPWZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG89dC50b0xvd2VyQ2FzZSgpO3JldHVybiBufHwoaT1kdFtvXSxkdFtvXT1yLHI9bnVsbCE9YShlLHQsbik/bzpudWxsLGR0W29dPWkpLHJ9fSkpO3ZhciBodD0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLGd0PS9eKD86YXxhcmVhKSQvaTtmdW5jdGlvbiB2dChlKXtyZXR1cm4oZS5tYXRjaChQKXx8W10pLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIHl0KGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZSYmZS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIn1mdW5jdGlvbiBtdChlKXtyZXR1cm4gQXJyYXkuaXNBcnJheShlKT9lOlwic3RyaW5nXCI9PXR5cGVvZiBlJiZlLm1hdGNoKFApfHxbXX1TLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQpe3JldHVybiAkKHRoaXMsUy5wcm9wLGUsdCwxPGFyZ3VtZW50cy5sZW5ndGgpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbUy5wcm9wRml4W2VdfHxlXX0pKX19KSxTLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvPWUubm9kZVR5cGU7aWYoMyE9PW8mJjghPT1vJiYyIT09bylyZXR1cm4gMT09PW8mJlMuaXNYTUxEb2MoZSl8fCh0PVMucHJvcEZpeFt0XXx8dCxpPVMucHJvcEhvb2tzW3RdKSx2b2lkIDAhPT1uP2kmJlwic2V0XCJpbiBpJiZ2b2lkIDAhPT0ocj1pLnNldChlLG4sdCkpP3I6ZVt0XT1uOmkmJlwiZ2V0XCJpbiBpJiZudWxsIT09KHI9aS5nZXQoZSx0KSk/cjplW3RdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9Uy5maW5kLmF0dHIoZSxcInRhYmluZGV4XCIpO3JldHVybiB0P3BhcnNlSW50KHQsMTApOmh0LnRlc3QoZS5ub2RlTmFtZSl8fGd0LnRlc3QoZS5ub2RlTmFtZSkmJmUuaHJlZj8wOi0xfX19LHByb3BGaXg6e2ZvcjpcImh0bWxGb3JcIixjbGFzczpcImNsYXNzTmFtZVwifX0pLHkub3B0U2VsZWN0ZWR8fChTLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PWUucGFyZW50Tm9kZTtyZXR1cm4gdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJlbnROb2RlO3QmJih0LnNlbGVjdGVkSW5kZXgsdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCl9fSksUy5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSwoZnVuY3Rpb24oKXtTLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSkpLFMuZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbihlKXtTKHRoaXMpLmFkZENsYXNzKHQuY2FsbCh0aGlzLGUseXQodGhpcykpKX0pKTtpZigoZT1tdCh0KSkubGVuZ3RoKWZvcig7bj10aGlzW3UrK107KWlmKGk9eXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2ZvcihhPTA7bz1lW2ErK107KXIuaW5kZXhPZihcIiBcIitvK1wiIFwiKTwwJiYocis9bytcIiBcIik7aSE9PShzPXZ0KHIpKSYmbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLHMpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyx1PTA7aWYobSh0KSlyZXR1cm4gdGhpcy5lYWNoKChmdW5jdGlvbihlKXtTKHRoaXMpLnJlbW92ZUNsYXNzKHQuY2FsbCh0aGlzLGUseXQodGhpcykpKX0pKTtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5hdHRyKFwiY2xhc3NcIixcIlwiKTtpZigoZT1tdCh0KSkubGVuZ3RoKWZvcig7bj10aGlzW3UrK107KWlmKGk9eXQobikscj0xPT09bi5ub2RlVHlwZSYmXCIgXCIrdnQoaSkrXCIgXCIpe2ZvcihhPTA7bz1lW2ErK107KWZvcig7LTE8ci5pbmRleE9mKFwiIFwiK28rXCIgXCIpOylyPXIucmVwbGFjZShcIiBcIitvK1wiIFwiLFwiIFwiKTtpIT09KHM9dnQocikpJiZuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGksdCl7dmFyIG89dHlwZW9mIGksYT1cInN0cmluZ1wiPT09b3x8QXJyYXkuaXNBcnJheShpKTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIHQmJmE/dD90aGlzLmFkZENsYXNzKGkpOnRoaXMucmVtb3ZlQ2xhc3MoaSk6bShpKT90aGlzLmVhY2goKGZ1bmN0aW9uKGUpe1ModGhpcykudG9nZ2xlQ2xhc3MoaS5jYWxsKHRoaXMsZSx5dCh0aGlzKSx0KSx0KX0pKTp0aGlzLmVhY2goKGZ1bmN0aW9uKCl7dmFyIGUsdCxuLHI7aWYoYSlmb3IodD0wLG49Uyh0aGlzKSxyPW10KGkpO2U9clt0KytdOyluLmhhc0NsYXNzKGUpP24ucmVtb3ZlQ2xhc3MoZSk6bi5hZGRDbGFzcyhlKTtlbHNlIHZvaWQgMCE9PWkmJlwiYm9vbGVhblwiIT09b3x8KChlPXl0KHRoaXMpKSYmWS5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIixlKSx0aGlzLnNldEF0dHJpYnV0ZSYmdGhpcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGV8fCExPT09aT9cIlwiOlkuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKSl9KSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGUpe3ZhciB0LG4scj0wO2Zvcih0PVwiIFwiK2UrXCIgXCI7bj10aGlzW3IrK107KWlmKDE9PT1uLm5vZGVUeXBlJiYtMTwoXCIgXCIrdnQoeXQobikpK1wiIFwiKS5pbmRleE9mKHQpKXJldHVybiEwO3JldHVybiExfX0pO3ZhciB4dD0vXFxyL2c7Uy5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihuKXt2YXIgcixlLGksdD10aGlzWzBdO3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPW0obiksdGhpcy5lYWNoKChmdW5jdGlvbihlKXt2YXIgdDsxPT09dGhpcy5ub2RlVHlwZSYmKG51bGw9PSh0PWk/bi5jYWxsKHRoaXMsZSxTKHRoaXMpLnZhbCgpKTpuKT90PVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIHQ/dCs9XCJcIjpBcnJheS5pc0FycmF5KHQpJiYodD1TLm1hcCh0LChmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZT9cIlwiOmUrXCJcIn0pKSksKHI9Uy52YWxIb29rc1t0aGlzLnR5cGVdfHxTLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0pJiZcInNldFwiaW4gciYmdm9pZCAwIT09ci5zZXQodGhpcyx0LFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPXQpKX0pKSk6dD8ocj1TLnZhbEhvb2tzW3QudHlwZV18fFMudmFsSG9va3NbdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSkmJlwiZ2V0XCJpbiByJiZ2b2lkIDAhPT0oZT1yLmdldCh0LFwidmFsdWVcIikpP2U6XCJzdHJpbmdcIj09dHlwZW9mKGU9dC52YWx1ZSk/ZS5yZXBsYWNlKHh0LFwiXCIpOm51bGw9PWU/XCJcIjplOnZvaWQgMH19KSxTLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGUpe3ZhciB0PVMuZmluZC5hdHRyKGUsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9dD90OnZ0KFMudGV4dChlKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihlKXt2YXIgdCxuLHIsaT1lLm9wdGlvbnMsbz1lLnNlbGVjdGVkSW5kZXgsYT1cInNlbGVjdC1vbmVcIj09PWUudHlwZSxzPWE/bnVsbDpbXSx1PWE/bysxOmkubGVuZ3RoO2ZvcihyPW88MD91OmE/bzowO3I8dTtyKyspaWYoKChuPWlbcl0pLnNlbGVjdGVkfHxyPT09bykmJiFuLmRpc2FibGVkJiYoIW4ucGFyZW50Tm9kZS5kaXNhYmxlZHx8IUEobi5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZih0PVMobikudmFsKCksYSlyZXR1cm4gdDtzLnB1c2godCl9cmV0dXJuIHN9LHNldDpmdW5jdGlvbihlLHQpe2Zvcih2YXIgbixyLGk9ZS5vcHRpb25zLG89Uy5tYWtlQXJyYXkodCksYT1pLmxlbmd0aDthLS07KSgocj1pW2FdKS5zZWxlY3RlZD0tMTxTLmluQXJyYXkoUy52YWxIb29rcy5vcHRpb24uZ2V0KHIpLG8pKSYmKG49ITApO3JldHVybiBufHwoZS5zZWxlY3RlZEluZGV4PS0xKSxvfX19fSksUy5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSwoZnVuY3Rpb24oKXtTLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oZSx0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiBlLmNoZWNrZWQ9LTE8Uy5pbkFycmF5KFMoZSkudmFsKCksdCl9fSx5LmNoZWNrT258fChTLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWUuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmUudmFsdWV9KX0pKSx5LmZvY3VzaW49XCJvbmZvY3VzaW5cImluIEM7dmFyIGJ0PS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyx3dD1mdW5jdGlvbihlKXtlLnN0b3BQcm9wYWdhdGlvbigpfTtTLmV4dGVuZChTLmV2ZW50LHt0cmlnZ2VyOmZ1bmN0aW9uKGUsdCxuLHIpe3ZhciBpLG8sYSxzLHUsbCxjLGYscD1bbnx8RV0sZD12LmNhbGwoZSxcInR5cGVcIik/ZS50eXBlOmUsaD12LmNhbGwoZSxcIm5hbWVzcGFjZVwiKT9lLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYobz1mPWE9bj1ufHxFLDMhPT1uLm5vZGVUeXBlJiY4IT09bi5ub2RlVHlwZSYmIWJ0LnRlc3QoZCtTLmV2ZW50LnRyaWdnZXJlZCkmJigtMTxkLmluZGV4T2YoXCIuXCIpJiYoZD0oaD1kLnNwbGl0KFwiLlwiKSkuc2hpZnQoKSxoLnNvcnQoKSksdT1kLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitkLChlPWVbUy5leHBhbmRvXT9lOm5ldyBTLkV2ZW50KGQsXCJvYmplY3RcIj09dHlwZW9mIGUmJmUpKS5pc1RyaWdnZXI9cj8yOjMsZS5uYW1lc3BhY2U9aC5qb2luKFwiLlwiKSxlLnJuYW1lc3BhY2U9ZS5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK2guam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsZS5yZXN1bHQ9dm9pZCAwLGUudGFyZ2V0fHwoZS50YXJnZXQ9biksdD1udWxsPT10P1tlXTpTLm1ha2VBcnJheSh0LFtlXSksYz1TLmV2ZW50LnNwZWNpYWxbZF18fHt9LHJ8fCFjLnRyaWdnZXJ8fCExIT09Yy50cmlnZ2VyLmFwcGx5KG4sdCkpKXtpZighciYmIWMubm9CdWJibGUmJiF4KG4pKXtmb3Iocz1jLmRlbGVnYXRlVHlwZXx8ZCxidC50ZXN0KHMrZCl8fChvPW8ucGFyZW50Tm9kZSk7bztvPW8ucGFyZW50Tm9kZSlwLnB1c2gobyksYT1vO2E9PT0obi5vd25lckRvY3VtZW50fHxFKSYmcC5wdXNoKGEuZGVmYXVsdFZpZXd8fGEucGFyZW50V2luZG93fHxDKX1mb3IoaT0wOyhvPXBbaSsrXSkmJiFlLmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7KWY9byxlLnR5cGU9MTxpP3M6Yy5iaW5kVHlwZXx8ZCwobD0oWS5nZXQobyxcImV2ZW50c1wiKXx8T2JqZWN0LmNyZWF0ZShudWxsKSlbZS50eXBlXSYmWS5nZXQobyxcImhhbmRsZVwiKSkmJmwuYXBwbHkobyx0KSwobD11JiZvW3VdKSYmbC5hcHBseSYmVihvKSYmKGUucmVzdWx0PWwuYXBwbHkobyx0KSwhMT09PWUucmVzdWx0JiZlLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBlLnR5cGU9ZCxyfHxlLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxjLl9kZWZhdWx0JiYhMSE9PWMuX2RlZmF1bHQuYXBwbHkocC5wb3AoKSx0KXx8IVYobil8fHUmJm0obltkXSkmJiF4KG4pJiYoKGE9blt1XSkmJihuW3VdPW51bGwpLFMuZXZlbnQudHJpZ2dlcmVkPWQsZS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpJiZmLmFkZEV2ZW50TGlzdGVuZXIoZCx3dCksbltkXSgpLGUuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSYmZi5yZW1vdmVFdmVudExpc3RlbmVyKGQsd3QpLFMuZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxhJiYoblt1XT1hKSksZS5yZXN1bHR9fSxzaW11bGF0ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9Uy5leHRlbmQobmV3IFMuRXZlbnQsbix7dHlwZTplLGlzU2ltdWxhdGVkOiEwfSk7Uy5ldmVudC50cmlnZ2VyKHIsbnVsbCx0KX19KSxTLmZuLmV4dGVuZCh7dHJpZ2dlcjpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKCl7Uy5ldmVudC50cmlnZ2VyKGUsdCx0aGlzKX0pKX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzWzBdO2lmKG4pcmV0dXJuIFMuZXZlbnQudHJpZ2dlcihlLHQsbiwhMCl9fSkseS5mb2N1c2lufHxTLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSwoZnVuY3Rpb24obixyKXt2YXIgaT1mdW5jdGlvbihlKXtTLmV2ZW50LnNpbXVsYXRlKHIsZS50YXJnZXQsUy5ldmVudC5maXgoZSkpfTtTLmV2ZW50LnNwZWNpYWxbcl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLmRvY3VtZW50fHx0aGlzLHQ9WS5hY2Nlc3MoZSxyKTt0fHxlLmFkZEV2ZW50TGlzdGVuZXIobixpLCEwKSxZLmFjY2VzcyhlLHIsKHR8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBlPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcy5kb2N1bWVudHx8dGhpcyx0PVkuYWNjZXNzKGUsciktMTt0P1kuYWNjZXNzKGUscix0KTooZS5yZW1vdmVFdmVudExpc3RlbmVyKG4saSwhMCksWS5yZW1vdmUoZSxyKSl9fX0pKTt2YXIgVHQ9Qy5sb2NhdGlvbixDdD17Z3VpZDpEYXRlLm5vdygpfSxFdD0vXFw/LztTLnBhcnNlWE1MPWZ1bmN0aW9uKGUpe3ZhciB0O2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gbnVsbDt0cnl7dD0obmV3IEMuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfWNhdGNoKGUpe3Q9dm9pZCAwfXJldHVybiB0JiYhdC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8Uy5lcnJvcihcIkludmFsaWQgWE1MOiBcIitlKSx0fTt2YXIgU3Q9L1xcW1xcXSQvLGt0PS9cXHI/XFxuL2csQXQ9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLE50PS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBEdChuLGUscixpKXt2YXIgdDtpZihBcnJheS5pc0FycmF5KGUpKVMuZWFjaChlLChmdW5jdGlvbihlLHQpe3J8fFN0LnRlc3Qobik/aShuLHQpOkR0KG4rXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT10P2U6XCJcIikrXCJdXCIsdCxyLGkpfSkpO2Vsc2UgaWYocnx8XCJvYmplY3RcIiE9PXcoZSkpaShuLGUpO2Vsc2UgZm9yKHQgaW4gZSlEdChuK1wiW1wiK3QrXCJdXCIsZVt0XSxyLGkpfVMucGFyYW09ZnVuY3Rpb24oZSx0KXt2YXIgbixyPVtdLGk9ZnVuY3Rpb24oZSx0KXt2YXIgbj1tKHQpP3QoKTp0O3Jbci5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChlKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQobnVsbD09bj9cIlwiOm4pfTtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoQXJyYXkuaXNBcnJheShlKXx8ZS5qcXVlcnkmJiFTLmlzUGxhaW5PYmplY3QoZSkpUy5lYWNoKGUsKGZ1bmN0aW9uKCl7aSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KSk7ZWxzZSBmb3IobiBpbiBlKUR0KG4sZVtuXSx0LGkpO3JldHVybiByLmpvaW4oXCImXCIpfSxTLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIFMucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoKGZ1bmN0aW9uKCl7dmFyIGU9Uy5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gZT9TLm1ha2VBcnJheShlKTp0aGlzfSkpLmZpbHRlcigoZnVuY3Rpb24oKXt2YXIgZT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIVModGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJk50LnRlc3QodGhpcy5ub2RlTmFtZSkmJiFBdC50ZXN0KGUpJiYodGhpcy5jaGVja2VkfHwhcGUudGVzdChlKSl9KSkubWFwKChmdW5jdGlvbihlLHQpe3ZhciBuPVModGhpcykudmFsKCk7cmV0dXJuIG51bGw9PW4/bnVsbDpBcnJheS5pc0FycmF5KG4pP1MubWFwKG4sKGZ1bmN0aW9uKGUpe3JldHVybntuYW1lOnQubmFtZSx2YWx1ZTplLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSkpOntuYW1lOnQubmFtZSx2YWx1ZTpuLnJlcGxhY2Uoa3QsXCJcXHJcXG5cIil9fSkpLmdldCgpfX0pO3ZhciBqdD0vJTIwL2cscXQ9LyMuKiQvLEx0PS8oWz8mXSlfPVteJl0qLyxIdD0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLE90PS9eKD86R0VUfEhFQUQpJC8sUHQ9L15cXC9cXC8vLFJ0PXt9LE10PXt9LEl0PVwiKi9cIi5jb25jYXQoXCIqXCIpLFd0PUUuY3JlYXRlRWxlbWVudChcImFcIik7ZnVuY3Rpb24gRnQobyl7cmV0dXJuIGZ1bmN0aW9uKGUsdCl7XCJzdHJpbmdcIiE9dHlwZW9mIGUmJih0PWUsZT1cIipcIik7dmFyIG4scj0wLGk9ZS50b0xvd2VyQ2FzZSgpLm1hdGNoKFApfHxbXTtpZihtKHQpKWZvcig7bj1pW3IrK107KVwiK1wiPT09blswXT8obj1uLnNsaWNlKDEpfHxcIipcIiwob1tuXT1vW25dfHxbXSkudW5zaGlmdCh0KSk6KG9bbl09b1tuXXx8W10pLnB1c2godCl9fWZ1bmN0aW9uIEJ0KHQsaSxvLGEpe3ZhciBzPXt9LHU9dD09PU10O2Z1bmN0aW9uIGwoZSl7dmFyIHI7cmV0dXJuIHNbZV09ITAsUy5lYWNoKHRbZV18fFtdLChmdW5jdGlvbihlLHQpe3ZhciBuPXQoaSxvLGEpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBufHx1fHxzW25dP3U/IShyPW4pOnZvaWQgMDooaS5kYXRhVHlwZXMudW5zaGlmdChuKSxsKG4pLCExKX0pKSxyfXJldHVybiBsKGkuZGF0YVR5cGVzWzBdKXx8IXNbXCIqXCJdJiZsKFwiKlwiKX1mdW5jdGlvbiAkdChlLHQpe3ZhciBuLHIsaT1TLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKG4gaW4gdCl2b2lkIDAhPT10W25dJiYoKGlbbl0/ZTpyfHwocj17fSkpW25dPXRbbl0pO3JldHVybiByJiZTLmV4dGVuZCghMCxlLHIpLGV9V3QuaHJlZj1UdC5ocmVmLFMuZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpUdC5ocmVmLHR5cGU6XCJHRVRcIixpc0xvY2FsOi9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLnRlc3QoVHQucHJvdG9jb2wpLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOkl0LHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L1xcYnhtbFxcYi8saHRtbDovXFxiaHRtbC8sanNvbjovXFxianNvblxcYi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpKU09OLnBhcnNlLFwidGV4dCB4bWxcIjpTLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdD8kdCgkdChlLFMuYWpheFNldHRpbmdzKSx0KTokdChTLmFqYXhTZXR0aW5ncyxlKX0sYWpheFByZWZpbHRlcjpGdChSdCksYWpheFRyYW5zcG9ydDpGdChNdCksYWpheDpmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBlJiYodD1lLGU9dm9pZCAwKSx0PXR8fHt9O3ZhciBjLGYscCxuLGQscixoLGcsaSxvLHY9Uy5hamF4U2V0dXAoe30sdCkseT12LmNvbnRleHR8fHYsbT12LmNvbnRleHQmJih5Lm5vZGVUeXBlfHx5LmpxdWVyeSk/Uyh5KTpTLmV2ZW50LHg9Uy5EZWZlcnJlZCgpLGI9Uy5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSx3PXYuc3RhdHVzQ29kZXx8e30sYT17fSxzPXt9LHU9XCJjYW5jZWxlZFwiLFQ9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihlKXt2YXIgdDtpZihoKXtpZighbilmb3Iobj17fTt0PUh0LmV4ZWMocCk7KW5bdFsxXS50b0xvd2VyQ2FzZSgpK1wiIFwiXT0oblt0WzFdLnRvTG93ZXJDYXNlKCkrXCIgXCJdfHxbXSkuY29uY2F0KHRbMl0pO3Q9bltlLnRvTG93ZXJDYXNlKCkrXCIgXCJdfXJldHVybiBudWxsPT10P251bGw6dC5qb2luKFwiLCBcIil9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiBoP3A6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihlLHQpe3JldHVybiBudWxsPT1oJiYoZT1zW2UudG9Mb3dlckNhc2UoKV09c1tlLnRvTG93ZXJDYXNlKCldfHxlLGFbZV09dCksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09aCYmKHYubWltZVR5cGU9ZSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihlKXt2YXIgdDtpZihlKWlmKGgpVC5hbHdheXMoZVtULnN0YXR1c10pO2Vsc2UgZm9yKHQgaW4gZSl3W3RdPVt3W3RdLGVbdF1dO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihlKXt2YXIgdD1lfHx1O3JldHVybiBjJiZjLmFib3J0KHQpLGwoMCx0KSx0aGlzfX07aWYoeC5wcm9taXNlKFQpLHYudXJsPSgoZXx8di51cmx8fFR0LmhyZWYpK1wiXCIpLnJlcGxhY2UoUHQsVHQucHJvdG9jb2wrXCIvL1wiKSx2LnR5cGU9dC5tZXRob2R8fHQudHlwZXx8di5tZXRob2R8fHYudHlwZSx2LmRhdGFUeXBlcz0odi5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goUCl8fFtcIlwiXSxudWxsPT12LmNyb3NzRG9tYWluKXtyPUUuY3JlYXRlRWxlbWVudChcImFcIik7dHJ5e3IuaHJlZj12LnVybCxyLmhyZWY9ci5ocmVmLHYuY3Jvc3NEb21haW49V3QucHJvdG9jb2wrXCIvL1wiK1d0Lmhvc3QhPXIucHJvdG9jb2wrXCIvL1wiK3IuaG9zdH1jYXRjaChlKXt2LmNyb3NzRG9tYWluPSEwfX1pZih2LmRhdGEmJnYucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiB2LmRhdGEmJih2LmRhdGE9Uy5wYXJhbSh2LmRhdGEsdi50cmFkaXRpb25hbCkpLEJ0KFJ0LHYsdCxUKSxoKXJldHVybiBUO2ZvcihpIGluKGc9Uy5ldmVudCYmdi5nbG9iYWwpJiYwPT1TLmFjdGl2ZSsrJiZTLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksdi50eXBlPXYudHlwZS50b1VwcGVyQ2FzZSgpLHYuaGFzQ29udGVudD0hT3QudGVzdCh2LnR5cGUpLGY9di51cmwucmVwbGFjZShxdCxcIlwiKSx2Lmhhc0NvbnRlbnQ/di5kYXRhJiZ2LnByb2Nlc3NEYXRhJiYwPT09KHYuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJih2LmRhdGE9di5kYXRhLnJlcGxhY2UoanQsXCIrXCIpKToobz12LnVybC5zbGljZShmLmxlbmd0aCksdi5kYXRhJiYodi5wcm9jZXNzRGF0YXx8XCJzdHJpbmdcIj09dHlwZW9mIHYuZGF0YSkmJihmKz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrdi5kYXRhLGRlbGV0ZSB2LmRhdGEpLCExPT09di5jYWNoZSYmKGY9Zi5yZXBsYWNlKEx0LFwiJDFcIiksbz0oRXQudGVzdChmKT9cIiZcIjpcIj9cIikrXCJfPVwiK0N0Lmd1aWQrKytvKSx2LnVybD1mK28pLHYuaWZNb2RpZmllZCYmKFMubGFzdE1vZGlmaWVkW2ZdJiZULnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLFMubGFzdE1vZGlmaWVkW2ZdKSxTLmV0YWdbZl0mJlQuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixTLmV0YWdbZl0pKSwodi5kYXRhJiZ2Lmhhc0NvbnRlbnQmJiExIT09di5jb250ZW50VHlwZXx8dC5jb250ZW50VHlwZSkmJlQuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLHYuY29udGVudFR5cGUpLFQuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLHYuZGF0YVR5cGVzWzBdJiZ2LmFjY2VwdHNbdi5kYXRhVHlwZXNbMF1dP3YuYWNjZXB0c1t2LmRhdGFUeXBlc1swXV0rKFwiKlwiIT09di5kYXRhVHlwZXNbMF0/XCIsIFwiK0l0K1wiOyBxPTAuMDFcIjpcIlwiKTp2LmFjY2VwdHNbXCIqXCJdKSx2LmhlYWRlcnMpVC5zZXRSZXF1ZXN0SGVhZGVyKGksdi5oZWFkZXJzW2ldKTtpZih2LmJlZm9yZVNlbmQmJighMT09PXYuYmVmb3JlU2VuZC5jYWxsKHksVCx2KXx8aCkpcmV0dXJuIFQuYWJvcnQoKTtpZih1PVwiYWJvcnRcIixiLmFkZCh2LmNvbXBsZXRlKSxULmRvbmUodi5zdWNjZXNzKSxULmZhaWwodi5lcnJvciksYz1CdChNdCx2LHQsVCkpe2lmKFQucmVhZHlTdGF0ZT0xLGcmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW1Qsdl0pLGgpcmV0dXJuIFQ7di5hc3luYyYmMDx2LnRpbWVvdXQmJihkPUMuc2V0VGltZW91dCgoZnVuY3Rpb24oKXtULmFib3J0KFwidGltZW91dFwiKX0pLHYudGltZW91dCkpO3RyeXtoPSExLGMuc2VuZChhLGwpfWNhdGNoKGUpe2lmKGgpdGhyb3cgZTtsKC0xLGUpfX1lbHNlIGwoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24gbChlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9dDtofHwoaD0hMCxkJiZDLmNsZWFyVGltZW91dChkKSxjPXZvaWQgMCxwPXJ8fFwiXCIsVC5yZWFkeVN0YXRlPTA8ZT80OjAsaT0yMDA8PWUmJmU8MzAwfHwzMDQ9PT1lLG4mJihzPWZ1bmN0aW9uKGUsdCxuKXtmb3IodmFyIHIsaSxvLGEscz1lLmNvbnRlbnRzLHU9ZS5kYXRhVHlwZXM7XCIqXCI9PT11WzBdOyl1LnNoaWZ0KCksdm9pZCAwPT09ciYmKHI9ZS5taW1lVHlwZXx8dC5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYocilmb3IoaSBpbiBzKWlmKHNbaV0mJnNbaV0udGVzdChyKSl7dS51bnNoaWZ0KGkpO2JyZWFrfWlmKHVbMF1pbiBuKW89dVswXTtlbHNle2ZvcihpIGluIG4pe2lmKCF1WzBdfHxlLmNvbnZlcnRlcnNbaStcIiBcIit1WzBdXSl7bz1pO2JyZWFrfWF8fChhPWkpfW89b3x8YX1pZihvKXJldHVybiBvIT09dVswXSYmdS51bnNoaWZ0KG8pLG5bb119KHYsVCxuKSksIWkmJi0xPFMuaW5BcnJheShcInNjcmlwdFwiLHYuZGF0YVR5cGVzKSYmKHYuY29udmVydGVyc1tcInRleHQgc2NyaXB0XCJdPWZ1bmN0aW9uKCl7fSkscz1mdW5jdGlvbihlLHQsbixyKXt2YXIgaSxvLGEscyx1LGw9e30sYz1lLmRhdGFUeXBlcy5zbGljZSgpO2lmKGNbMV0pZm9yKGEgaW4gZS5jb252ZXJ0ZXJzKWxbYS50b0xvd2VyQ2FzZSgpXT1lLmNvbnZlcnRlcnNbYV07Zm9yKG89Yy5zaGlmdCgpO287KWlmKGUucmVzcG9uc2VGaWVsZHNbb10mJihuW2UucmVzcG9uc2VGaWVsZHNbb11dPXQpLCF1JiZyJiZlLmRhdGFGaWx0ZXImJih0PWUuZGF0YUZpbHRlcih0LGUuZGF0YVR5cGUpKSx1PW8sbz1jLnNoaWZ0KCkpaWYoXCIqXCI9PT1vKW89dTtlbHNlIGlmKFwiKlwiIT09dSYmdSE9PW8pe2lmKCEoYT1sW3UrXCIgXCIrb118fGxbXCIqIFwiK29dKSlmb3IoaSBpbiBsKWlmKChzPWkuc3BsaXQoXCIgXCIpKVsxXT09PW8mJihhPWxbdStcIiBcIitzWzBdXXx8bFtcIiogXCIrc1swXV0pKXshMD09PWE/YT1sW2ldOiEwIT09bFtpXSYmKG89c1swXSxjLnVuc2hpZnQoc1sxXSkpO2JyZWFrfWlmKCEwIT09YSlpZihhJiZlLnRocm93cyl0PWEodCk7ZWxzZSB0cnl7dD1hKHQpfWNhdGNoKGUpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6YT9lOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK3UrXCIgdG8gXCIrb319fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOnR9fSh2LHMsVCxpKSxpPyh2LmlmTW9kaWZpZWQmJigodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSkmJihTLmxhc3RNb2RpZmllZFtmXT11KSwodT1ULmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSkmJihTLmV0YWdbZl09dSkpLDIwND09PWV8fFwiSEVBRFwiPT09di50eXBlP2w9XCJub2NvbnRlbnRcIjozMDQ9PT1lP2w9XCJub3Rtb2RpZmllZFwiOihsPXMuc3RhdGUsbz1zLmRhdGEsaT0hKGE9cy5lcnJvcikpKTooYT1sLCFlJiZsfHwobD1cImVycm9yXCIsZTwwJiYoZT0wKSkpLFQuc3RhdHVzPWUsVC5zdGF0dXNUZXh0PSh0fHxsKStcIlwiLGk/eC5yZXNvbHZlV2l0aCh5LFtvLGwsVF0pOngucmVqZWN0V2l0aCh5LFtULGwsYV0pLFQuc3RhdHVzQ29kZSh3KSx3PXZvaWQgMCxnJiZtLnRyaWdnZXIoaT9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbVCx2LGk/bzphXSksYi5maXJlV2l0aCh5LFtULGxdKSxnJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW1Qsdl0pLC0tUy5hY3RpdmV8fFMuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIFR9LGdldEpTT046ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBTLmdldChlLHQsbixcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihlLHQpe3JldHVybiBTLmdldChlLHZvaWQgMCx0LFwic2NyaXB0XCIpfX0pLFMuZWFjaChbXCJnZXRcIixcInBvc3RcIl0sKGZ1bmN0aW9uKGUsaSl7U1tpXT1mdW5jdGlvbihlLHQsbixyKXtyZXR1cm4gbSh0KSYmKHI9cnx8bixuPXQsdD12b2lkIDApLFMuYWpheChTLmV4dGVuZCh7dXJsOmUsdHlwZTppLGRhdGFUeXBlOnIsZGF0YTp0LHN1Y2Nlc3M6bn0sUy5pc1BsYWluT2JqZWN0KGUpJiZlKSl9fSkpLFMuYWpheFByZWZpbHRlcigoZnVuY3Rpb24oZSl7dmFyIHQ7Zm9yKHQgaW4gZS5oZWFkZXJzKVwiY29udGVudC10eXBlXCI9PT10LnRvTG93ZXJDYXNlKCkmJihlLmNvbnRlbnRUeXBlPWUuaGVhZGVyc1t0XXx8XCJcIil9KSksUy5fZXZhbFVybD1mdW5jdGlvbihlLHQsbil7cmV0dXJuIFMuYWpheCh7dXJsOmUsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsY2FjaGU6ITAsYXN5bmM6ITEsZ2xvYmFsOiExLGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbigpe319LGRhdGFGaWx0ZXI6ZnVuY3Rpb24oZSl7Uy5nbG9iYWxFdmFsKGUsdCxuKX19KX0sUy5mbi5leHRlbmQoe3dyYXBBbGw6ZnVuY3Rpb24oZSl7dmFyIHQ7cmV0dXJuIHRoaXNbMF0mJihtKGUpJiYoZT1lLmNhbGwodGhpc1swXSkpLHQ9UyhlLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmdC5pbnNlcnRCZWZvcmUodGhpc1swXSksdC5tYXAoKGZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXM7ZS5maXJzdEVsZW1lbnRDaGlsZDspZT1lLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBlfSkpLmFwcGVuZCh0aGlzKSksdGhpc30sd3JhcElubmVyOmZ1bmN0aW9uKG4pe3JldHVybiBtKG4pP3RoaXMuZWFjaCgoZnVuY3Rpb24oZSl7Uyh0aGlzKS53cmFwSW5uZXIobi5jYWxsKHRoaXMsZSkpfSkpOnRoaXMuZWFjaCgoZnVuY3Rpb24oKXt2YXIgZT1TKHRoaXMpLHQ9ZS5jb250ZW50cygpO3QubGVuZ3RoP3Qud3JhcEFsbChuKTplLmFwcGVuZChuKX0pKX0sd3JhcDpmdW5jdGlvbih0KXt2YXIgbj1tKHQpO3JldHVybiB0aGlzLmVhY2goKGZ1bmN0aW9uKGUpe1ModGhpcykud3JhcEFsbChuP3QuY2FsbCh0aGlzLGUpOnQpfSkpfSx1bndyYXA6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucGFyZW50KGUpLm5vdChcImJvZHlcIikuZWFjaCgoZnVuY3Rpb24oKXtTKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KSksdGhpc319KSxTLmV4cHIucHNldWRvcy5oaWRkZW49ZnVuY3Rpb24oZSl7cmV0dXJuIVMuZXhwci5wc2V1ZG9zLnZpc2libGUoZSl9LFMuZXhwci5wc2V1ZG9zLnZpc2libGU9ZnVuY3Rpb24oZSl7cmV0dXJuISEoZS5vZmZzZXRXaWR0aHx8ZS5vZmZzZXRIZWlnaHR8fGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpfSxTLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBDLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGUpe319O3ZhciBfdD17MDoyMDAsMTIyMzoyMDR9LHp0PVMuYWpheFNldHRpbmdzLnhocigpO3kuY29ycz0hIXp0JiZcIndpdGhDcmVkZW50aWFsc1wiaW4genQseS5hamF4PXp0PSEhenQsUy5hamF4VHJhbnNwb3J0KChmdW5jdGlvbihpKXt2YXIgbyxhO2lmKHkuY29yc3x8enQmJiFpLmNyb3NzRG9tYWluKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG4scj1pLnhocigpO2lmKHIub3BlbihpLnR5cGUsaS51cmwsaS5hc3luYyxpLnVzZXJuYW1lLGkucGFzc3dvcmQpLGkueGhyRmllbGRzKWZvcihuIGluIGkueGhyRmllbGRzKXJbbl09aS54aHJGaWVsZHNbbl07Zm9yKG4gaW4gaS5taW1lVHlwZSYmci5vdmVycmlkZU1pbWVUeXBlJiZyLm92ZXJyaWRlTWltZVR5cGUoaS5taW1lVHlwZSksaS5jcm9zc0RvbWFpbnx8ZVtcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChlW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpLGUpci5zZXRSZXF1ZXN0SGVhZGVyKG4sZVtuXSk7bz1mdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oKXtvJiYobz1hPXIub25sb2FkPXIub25lcnJvcj1yLm9uYWJvcnQ9ci5vbnRpbWVvdXQ9ci5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxcImFib3J0XCI9PT1lP3IuYWJvcnQoKTpcImVycm9yXCI9PT1lP1wibnVtYmVyXCIhPXR5cGVvZiByLnN0YXR1cz90KDAsXCJlcnJvclwiKTp0KHIuc3RhdHVzLHIuc3RhdHVzVGV4dCk6dChfdFtyLnN0YXR1c118fHIuc3RhdHVzLHIuc3RhdHVzVGV4dCxcInRleHRcIiE9PShyLnJlc3BvbnNlVHlwZXx8XCJ0ZXh0XCIpfHxcInN0cmluZ1wiIT10eXBlb2Ygci5yZXNwb25zZVRleHQ/e2JpbmFyeTpyLnJlc3BvbnNlfTp7dGV4dDpyLnJlc3BvbnNlVGV4dH0sci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sci5vbmxvYWQ9bygpLGE9ci5vbmVycm9yPXIub250aW1lb3V0PW8oXCJlcnJvclwiKSx2b2lkIDAhPT1yLm9uYWJvcnQ/ci5vbmFib3J0PWE6ci5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT09ci5yZWFkeVN0YXRlJiZDLnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7byYmYSgpfSkpfSxvPW8oXCJhYm9ydFwiKTt0cnl7ci5zZW5kKGkuaGFzQ29udGVudCYmaS5kYXRhfHxudWxsKX1jYXRjaChlKXtpZihvKXRocm93IGV9fSxhYm9ydDpmdW5jdGlvbigpe28mJm8oKX19fSkpLFMuYWpheFByZWZpbHRlcigoZnVuY3Rpb24oZSl7ZS5jcm9zc0RvbWFpbiYmKGUuY29udGVudHMuc2NyaXB0PSExKX0pKSxTLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihlKXtyZXR1cm4gUy5nbG9iYWxFdmFsKGUpLGV9fX0pLFMuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLChmdW5jdGlvbihlKXt2b2lkIDA9PT1lLmNhY2hlJiYoZS5jYWNoZT0hMSksZS5jcm9zc0RvbWFpbiYmKGUudHlwZT1cIkdFVFwiKX0pKSxTLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIiwoZnVuY3Rpb24obil7dmFyIHIsaTtpZihuLmNyb3NzRG9tYWlufHxuLnNjcmlwdEF0dHJzKXJldHVybntzZW5kOmZ1bmN0aW9uKGUsdCl7cj1TKFwiPHNjcmlwdD5cIikuYXR0cihuLnNjcmlwdEF0dHJzfHx7fSkucHJvcCh7Y2hhcnNldDpuLnNjcmlwdENoYXJzZXQsc3JjOm4udXJsfSkub24oXCJsb2FkIGVycm9yXCIsaT1mdW5jdGlvbihlKXtyLnJlbW92ZSgpLGk9bnVsbCxlJiZ0KFwiZXJyb3JcIj09PWUudHlwZT80MDQ6MjAwLGUudHlwZSl9KSxFLmhlYWQuYXBwZW5kQ2hpbGQoclswXSl9LGFib3J0OmZ1bmN0aW9uKCl7aSYmaSgpfX19KSk7dmFyIFV0LFh0PVtdLFZ0PS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87Uy5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGU9WHQucG9wKCl8fFMuZXhwYW5kbytcIl9cIitDdC5ndWlkKys7cmV0dXJuIHRoaXNbZV09ITAsZX19KSxTLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsKGZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYT0hMSE9PWUuanNvbnAmJihWdC50ZXN0KGUudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBlLmRhdGEmJjA9PT0oZS5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmVnQudGVzdChlLmRhdGEpJiZcImRhdGFcIik7aWYoYXx8XCJqc29ucFwiPT09ZS5kYXRhVHlwZXNbMF0pcmV0dXJuIHI9ZS5qc29ucENhbGxiYWNrPW0oZS5qc29ucENhbGxiYWNrKT9lLmpzb25wQ2FsbGJhY2soKTplLmpzb25wQ2FsbGJhY2ssYT9lW2FdPWVbYV0ucmVwbGFjZShWdCxcIiQxXCIrcik6ITEhPT1lLmpzb25wJiYoZS51cmwrPShFdC50ZXN0KGUudXJsKT9cIiZcIjpcIj9cIikrZS5qc29ucCtcIj1cIityKSxlLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBvfHxTLmVycm9yKHIrXCIgd2FzIG5vdCBjYWxsZWRcIiksb1swXX0sZS5kYXRhVHlwZXNbMF09XCJqc29uXCIsaT1DW3JdLENbcl09ZnVuY3Rpb24oKXtvPWFyZ3VtZW50c30sbi5hbHdheXMoKGZ1bmN0aW9uKCl7dm9pZCAwPT09aT9TKEMpLnJlbW92ZVByb3Aocik6Q1tyXT1pLGVbcl0mJihlLmpzb25wQ2FsbGJhY2s9dC5qc29ucENhbGxiYWNrLFh0LnB1c2gocikpLG8mJm0oaSkmJmkob1swXSksbz1pPXZvaWQgMH0pKSxcInNjcmlwdFwifSkpLHkuY3JlYXRlSFRNTERvY3VtZW50PSgoVXQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikuYm9keSkuaW5uZXJIVE1MPVwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIiwyPT09VXQuY2hpbGROb2Rlcy5sZW5ndGgpLFMucGFyc2VIVE1MPWZ1bmN0aW9uKGUsdCxuKXtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgZT9bXTooXCJib29sZWFuXCI9PXR5cGVvZiB0JiYobj10LHQ9ITEpLHR8fCh5LmNyZWF0ZUhUTUxEb2N1bWVudD8oKHI9KHQ9RS5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIikpLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpKS5ocmVmPUUubG9jYXRpb24uaHJlZix0LmhlYWQuYXBwZW5kQ2hpbGQocikpOnQ9RSksbz0hbiYmW10sKGk9Ti5leGVjKGUpKT9bdC5jcmVhdGVFbGVtZW50KGlbMV0pXTooaT14ZShbZV0sdCxvKSxvJiZvLmxlbmd0aCYmUyhvKS5yZW1vdmUoKSxTLm1lcmdlKFtdLGkuY2hpbGROb2RlcykpKTt2YXIgcixpLG99LFMuZm4ubG9hZD1mdW5jdGlvbihlLHQsbil7dmFyIHIsaSxvLGE9dGhpcyxzPWUuaW5kZXhPZihcIiBcIik7cmV0dXJuLTE8cyYmKHI9dnQoZS5zbGljZShzKSksZT1lLnNsaWNlKDAscykpLG0odCk/KG49dCx0PXZvaWQgMCk6dCYmXCJvYmplY3RcIj09dHlwZW9mIHQmJihpPVwiUE9TVFwiKSwwPGEubGVuZ3RoJiZTLmFqYXgoe3VybDplLHR5cGU6aXx8XCJHRVRcIixkYXRhVHlwZTpcImh0bWxcIixkYXRhOnR9KS5kb25lKChmdW5jdGlvbihlKXtvPWFyZ3VtZW50cyxhLmh0bWwocj9TKFwiPGRpdj5cIikuYXBwZW5kKFMucGFyc2VIVE1MKGUpKS5maW5kKHIpOmUpfSkpLmFsd2F5cyhuJiZmdW5jdGlvbihlLHQpe2EuZWFjaCgoZnVuY3Rpb24oKXtuLmFwcGx5KHRoaXMsb3x8W2UucmVzcG9uc2VUZXh0LHQsZV0pfSkpfSksdGhpc30sUy5leHByLnBzZXVkb3MuYW5pbWF0ZWQ9ZnVuY3Rpb24odCl7cmV0dXJuIFMuZ3JlcChTLnRpbWVycywoZnVuY3Rpb24oZSl7cmV0dXJuIHQ9PT1lLmVsZW19KSkubGVuZ3RofSxTLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGUsdCxuKXt2YXIgcixpLG8sYSxzLHUsbD1TLmNzcyhlLFwicG9zaXRpb25cIiksYz1TKGUpLGY9e307XCJzdGF0aWNcIj09PWwmJihlLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIikscz1jLm9mZnNldCgpLG89Uy5jc3MoZSxcInRvcFwiKSx1PVMuY3NzKGUsXCJsZWZ0XCIpLChcImFic29sdXRlXCI9PT1sfHxcImZpeGVkXCI9PT1sKSYmLTE8KG8rdSkuaW5kZXhPZihcImF1dG9cIik/KGE9KHI9Yy5wb3NpdGlvbigpKS50b3AsaT1yLmxlZnQpOihhPXBhcnNlRmxvYXQobyl8fDAsaT1wYXJzZUZsb2F0KHUpfHwwKSxtKHQpJiYodD10LmNhbGwoZSxuLFMuZXh0ZW5kKHt9LHMpKSksbnVsbCE9dC50b3AmJihmLnRvcD10LnRvcC1zLnRvcCthKSxudWxsIT10LmxlZnQmJihmLmxlZnQ9dC5sZWZ0LXMubGVmdCtpKSxcInVzaW5nXCJpbiB0P3QudXNpbmcuY2FsbChlLGYpOihcIm51bWJlclwiPT10eXBlb2YgZi50b3AmJihmLnRvcCs9XCJweFwiKSxcIm51bWJlclwiPT10eXBlb2YgZi5sZWZ0JiYoZi5sZWZ0Kz1cInB4XCIpLGMuY3NzKGYpKX19LFMuZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24odCl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09dD90aGlzOnRoaXMuZWFjaCgoZnVuY3Rpb24oZSl7Uy5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsdCxlKX0pKTt2YXIgZSxuLHI9dGhpc1swXTtyZXR1cm4gcj9yLmdldENsaWVudFJlY3RzKCkubGVuZ3RoPyhlPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksbj1yLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcse3RvcDplLnRvcCtuLnBhZ2VZT2Zmc2V0LGxlZnQ6ZS5sZWZ0K24ucGFnZVhPZmZzZXR9KTp7dG9wOjAsbGVmdDowfTp2b2lkIDB9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGUsdCxuLHI9dGhpc1swXSxpPXt0b3A6MCxsZWZ0OjB9O2lmKFwiZml4ZWRcIj09PVMuY3NzKHIsXCJwb3NpdGlvblwiKSl0PXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZWxzZXtmb3IodD10aGlzLm9mZnNldCgpLG49ci5vd25lckRvY3VtZW50LGU9ci5vZmZzZXRQYXJlbnR8fG4uZG9jdW1lbnRFbGVtZW50O2UmJihlPT09bi5ib2R5fHxlPT09bi5kb2N1bWVudEVsZW1lbnQpJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpOyllPWUucGFyZW50Tm9kZTtlJiZlIT09ciYmMT09PWUubm9kZVR5cGUmJigoaT1TKGUpLm9mZnNldCgpKS50b3ArPVMuY3NzKGUsXCJib3JkZXJUb3BXaWR0aFwiLCEwKSxpLmxlZnQrPVMuY3NzKGUsXCJib3JkZXJMZWZ0V2lkdGhcIiwhMCkpfXJldHVybnt0b3A6dC50b3AtaS50b3AtUy5jc3MocixcIm1hcmdpblRvcFwiLCEwKSxsZWZ0OnQubGVmdC1pLmxlZnQtUy5jc3MocixcIm1hcmdpbkxlZnRcIiwhMCl9fX0sb2Zmc2V0UGFyZW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKChmdW5jdGlvbigpe2Zvcih2YXIgZT10aGlzLm9mZnNldFBhcmVudDtlJiZcInN0YXRpY1wiPT09Uy5jc3MoZSxcInBvc2l0aW9uXCIpOyllPWUub2Zmc2V0UGFyZW50O3JldHVybiBlfHxyZX0pKX19KSxTLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LChmdW5jdGlvbih0LGkpe3ZhciBvPVwicGFnZVlPZmZzZXRcIj09PWk7Uy5mblt0XT1mdW5jdGlvbihlKXtyZXR1cm4gJCh0aGlzLChmdW5jdGlvbihlLHQsbil7dmFyIHI7aWYoeChlKT9yPWU6OT09PWUubm9kZVR5cGUmJihyPWUuZGVmYXVsdFZpZXcpLHZvaWQgMD09PW4pcmV0dXJuIHI/cltpXTplW3RdO3I/ci5zY3JvbGxUbyhvP3IucGFnZVhPZmZzZXQ6bixvP246ci5wYWdlWU9mZnNldCk6ZVt0XT1ufSksdCxlLGFyZ3VtZW50cy5sZW5ndGgpfX0pKSxTLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLChmdW5jdGlvbihlLG4pe1MuY3NzSG9va3Nbbl09JGUoeS5waXhlbFBvc2l0aW9uLChmdW5jdGlvbihlLHQpe2lmKHQpcmV0dXJuIHQ9QmUoZSxuKSxNZS50ZXN0KHQpP1MoZSkucG9zaXRpb24oKVtuXStcInB4XCI6dH0pKX0pKSxTLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sKGZ1bmN0aW9uKGEscyl7Uy5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6cyxcIlwiOlwib3V0ZXJcIithfSwoZnVuY3Rpb24ocixvKXtTLmZuW29dPWZ1bmN0aW9uKGUsdCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aCYmKHJ8fFwiYm9vbGVhblwiIT10eXBlb2YgZSksaT1yfHwoITA9PT1lfHwhMD09PXQ/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gJCh0aGlzLChmdW5jdGlvbihlLHQsbil7dmFyIHI7cmV0dXJuIHgoZSk/MD09PW8uaW5kZXhPZihcIm91dGVyXCIpP2VbXCJpbm5lclwiK2FdOmUuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWUubm9kZVR5cGU/KHI9ZS5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoZS5ib2R5W1wic2Nyb2xsXCIrYV0scltcInNjcm9sbFwiK2FdLGUuYm9keVtcIm9mZnNldFwiK2FdLHJbXCJvZmZzZXRcIithXSxyW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1uP1MuY3NzKGUsdCxpKTpTLnN0eWxlKGUsdCxuLGkpfSkscyxuP2U6dm9pZCAwLG4pfX0pKX0pKSxTLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSwoZnVuY3Rpb24oZSx0KXtTLmZuW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLm9uKHQsZSl9fSkpLFMuZm4uZXh0ZW5kKHtiaW5kOmZ1bmN0aW9uKGUsdCxuKXtyZXR1cm4gdGhpcy5vbihlLG51bGwsdCxuKX0sdW5iaW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMub2ZmKGUsbnVsbCx0KX0sZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4scil7cmV0dXJuIHRoaXMub24odCxlLG4scil9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihlLFwiKipcIik6dGhpcy5vZmYodCxlfHxcIioqXCIsbil9LGhvdmVyOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMubW91c2VlbnRlcihlKS5tb3VzZWxlYXZlKHR8fGUpfX0pLFMuZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksKGZ1bmN0aW9uKGUsbil7Uy5mbltuXT1mdW5jdGlvbihlLHQpe3JldHVybiAwPGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vbihuLG51bGwsZSx0KTp0aGlzLnRyaWdnZXIobil9fSkpO3ZhciBHdD0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7Uy5wcm94eT1mdW5jdGlvbihlLHQpe3ZhciBuLHIsaTtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG49ZVt0XSx0PWUsZT1uKSxtKGUpKXJldHVybiByPXMuY2FsbChhcmd1bWVudHMsMiksKGk9ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0fHx0aGlzLHIuY29uY2F0KHMuY2FsbChhcmd1bWVudHMpKSl9KS5ndWlkPWUuZ3VpZD1lLmd1aWR8fFMuZ3VpZCsrLGl9LFMuaG9sZFJlYWR5PWZ1bmN0aW9uKGUpe2U/Uy5yZWFkeVdhaXQrKzpTLnJlYWR5KCEwKX0sUy5pc0FycmF5PUFycmF5LmlzQXJyYXksUy5wYXJzZUpTT049SlNPTi5wYXJzZSxTLm5vZGVOYW1lPUEsUy5pc0Z1bmN0aW9uPW0sUy5pc1dpbmRvdz14LFMuY2FtZWxDYXNlPVgsUy50eXBlPXcsUy5ub3c9RGF0ZS5ub3csUy5pc051bWVyaWM9ZnVuY3Rpb24oZSl7dmFyIHQ9Uy50eXBlKGUpO3JldHVybihcIm51bWJlclwiPT09dHx8XCJzdHJpbmdcIj09PXQpJiYhaXNOYU4oZS1wYXJzZUZsb2F0KGUpKX0sUy50cmltPWZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT1lP1wiXCI6KGUrXCJcIikucmVwbGFjZShHdCxcIlwiKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSwoZnVuY3Rpb24oKXtyZXR1cm4gU30pKTt2YXIgWXQ9Qy5qUXVlcnksUXQ9Qy4kO3JldHVybiBTLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oZSl7cmV0dXJuIEMuJD09PVMmJihDLiQ9UXQpLGUmJkMualF1ZXJ5PT09UyYmKEMualF1ZXJ5PVl0KSxTfSx2b2lkIDA9PT1lJiYoQy5qUXVlcnk9Qy4kPVMpLFN9KSk7IiwiIWZ1bmN0aW9uKHQpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz90KHJlcXVpcmUoXCJqcXVlcnlcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCh3aW5kb3cualF1ZXJ5KSk6dCh3aW5kb3cualF1ZXJ5KX0oZnVuY3Rpb24odCl7aWYoIXQpcmV0dXJuIGNvbnNvbGUud2FybihcIlVuc2xpZGVyIG5lZWRzIGpRdWVyeVwiKTt0LlVuc2xpZGVyPWZ1bmN0aW9uKG4sZSl7dmFyIGk9dGhpcztyZXR1cm4gaS5fPVwidW5zbGlkZXJcIixpLmRlZmF1bHRzPXthdXRvcGxheTohMSxkZWxheTozZTMsc3BlZWQ6NzUwLGVhc2luZzpcInN3aW5nXCIsa2V5czp7cHJldjozNyxuZXh0OjM5fSxuYXY6ITAsYXJyb3dzOntwcmV2Oic8YSBjbGFzcz1cIicraS5fKyctYXJyb3cgcHJldlwiPlByZXY8L2E+JyxuZXh0Oic8YSBjbGFzcz1cIicraS5fKyctYXJyb3cgbmV4dFwiPk5leHQ8L2E+J30sYW5pbWF0aW9uOlwiaG9yaXpvbnRhbFwiLHNlbGVjdG9yczp7Y29udGFpbmVyOlwidWw6Zmlyc3RcIixzbGlkZXM6XCJsaVwifSxhbmltYXRlSGVpZ2h0OiExLGFjdGl2ZUNsYXNzOmkuXytcIi1hY3RpdmVcIixzd2lwZTohMCxzd2lwZVRocmVzaG9sZDouMn0saS4kY29udGV4dD1uLGkub3B0aW9ucz17fSxpLiRwYXJlbnQ9bnVsbCxpLiRjb250YWluZXI9bnVsbCxpLiRzbGlkZXM9bnVsbCxpLiRuYXY9bnVsbCxpLiRhcnJvd3M9W10saS50b3RhbD0wLGkuY3VycmVudD0wLGkucHJlZml4PWkuXytcIi1cIixpLmV2ZW50U3VmZml4PVwiLlwiK2kucHJlZml4K35+KDJlMypNYXRoLnJhbmRvbSgpKSxpLmludGVydmFsPVtdLGkuaW5pdD1mdW5jdGlvbihuKXtyZXR1cm4gaS5vcHRpb25zPXQuZXh0ZW5kKHt9LGkuZGVmYXVsdHMsbiksaS4kY29udGFpbmVyPWkuJGNvbnRleHQuZmluZChpLm9wdGlvbnMuc2VsZWN0b3JzLmNvbnRhaW5lcikuYWRkQ2xhc3MoaS5wcmVmaXgrXCJ3cmFwXCIpLGkuJHNsaWRlcz1pLiRjb250YWluZXIuY2hpbGRyZW4oaS5vcHRpb25zLnNlbGVjdG9ycy5zbGlkZXMpLGkuc2V0dXAoKSx0LmVhY2goW1wibmF2XCIsXCJhcnJvd3NcIixcImtleXNcIixcImluZmluaXRlXCJdLGZ1bmN0aW9uKG4sZSl7aS5vcHRpb25zW2VdJiZpW1wiaW5pdFwiK3QuX3VjZmlyc3QoZSldKCl9KSxqUXVlcnkuZXZlbnQuc3BlY2lhbC5zd2lwZSYmaS5vcHRpb25zLnN3aXBlJiZpLmluaXRTd2lwZSgpLGkub3B0aW9ucy5hdXRvcGxheSYmaS5zdGFydCgpLGkuY2FsY3VsYXRlU2xpZGVzKCksaS4kY29udGV4dC50cmlnZ2VyKGkuXytcIi5yZWFkeVwiKSxpLmFuaW1hdGUoaS5vcHRpb25zLmluZGV4fHxpLmN1cnJlbnQsXCJpbml0XCIpfSxpLnNldHVwPWZ1bmN0aW9uKCl7aS4kY29udGV4dC5hZGRDbGFzcyhpLnByZWZpeCtpLm9wdGlvbnMuYW5pbWF0aW9uKS53cmFwKCc8ZGl2IGNsYXNzPVwiJytpLl8rJ1wiIC8+JyksaS4kcGFyZW50PWkuJGNvbnRleHQucGFyZW50KFwiLlwiK2kuXyksXCJzdGF0aWNcIj09PWkuJGNvbnRleHQuY3NzKFwicG9zaXRpb25cIikmJmkuJGNvbnRleHQuY3NzKFwicG9zaXRpb25cIixcInJlbGF0aXZlXCIpLGkuJGNvbnRleHQuY3NzKFwib3ZlcmZsb3dcIixcImhpZGRlblwiKX0saS5jYWxjdWxhdGVTbGlkZXM9ZnVuY3Rpb24oKXtpZihpLiRzbGlkZXM9aS4kY29udGFpbmVyLmNoaWxkcmVuKGkub3B0aW9ucy5zZWxlY3RvcnMuc2xpZGVzKSxpLnRvdGFsPWkuJHNsaWRlcy5sZW5ndGgsXCJmYWRlXCIhPT1pLm9wdGlvbnMuYW5pbWF0aW9uKXt2YXIgdD1cIndpZHRoXCI7XCJ2ZXJ0aWNhbFwiPT09aS5vcHRpb25zLmFuaW1hdGlvbiYmKHQ9XCJoZWlnaHRcIiksaS4kY29udGFpbmVyLmNzcyh0LDEwMCppLnRvdGFsK1wiJVwiKS5hZGRDbGFzcyhpLnByZWZpeCtcImNhcm91c2VsXCIpLGkuJHNsaWRlcy5jc3ModCwxMDAvaS50b3RhbCtcIiVcIil9fSxpLnN0YXJ0PWZ1bmN0aW9uKCl7cmV0dXJuIGkuaW50ZXJ2YWwucHVzaChzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5uZXh0KCl9LGkub3B0aW9ucy5kZWxheSkpLGl9LGkuc3RvcD1mdW5jdGlvbigpe2Zvcih2YXIgdDt0PWkuaW50ZXJ2YWwucG9wKCk7KWNsZWFyVGltZW91dCh0KTtyZXR1cm4gaX0saS5pbml0TmF2PWZ1bmN0aW9uKCl7dmFyIG49dCgnPG5hdiBjbGFzcz1cIicraS5wcmVmaXgrJ25hdlwiPjxvbCAvPjwvbmF2PicpO2kuJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGUpe3ZhciBvPXRoaXMuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYXZcIil8fGUrMTt0LmlzRnVuY3Rpb24oaS5vcHRpb25zLm5hdikmJihvPWkub3B0aW9ucy5uYXYuY2FsbChpLiRzbGlkZXMuZXEoZSksZSxvKSksbi5jaGlsZHJlbihcIm9sXCIpLmFwcGVuZCgnPGxpIGRhdGEtc2xpZGU9XCInK2UrJ1wiPicrbytcIjwvbGk+XCIpfSksaS4kbmF2PW4uaW5zZXJ0QWZ0ZXIoaS4kY29udGV4dCksaS4kbmF2LmZpbmQoXCJsaVwiKS5vbihcImNsaWNrXCIraS5ldmVudFN1ZmZpeCxmdW5jdGlvbigpe3ZhciBuPXQodGhpcykuYWRkQ2xhc3MoaS5vcHRpb25zLmFjdGl2ZUNsYXNzKTtuLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoaS5vcHRpb25zLmFjdGl2ZUNsYXNzKSxpLmFuaW1hdGUobi5hdHRyKFwiZGF0YS1zbGlkZVwiKSl9KX0saS5pbml0QXJyb3dzPWZ1bmN0aW9uKCl7ITA9PT1pLm9wdGlvbnMuYXJyb3dzJiYoaS5vcHRpb25zLmFycm93cz1pLmRlZmF1bHRzLmFycm93cyksdC5lYWNoKGkub3B0aW9ucy5hcnJvd3MsZnVuY3Rpb24obixlKXtpLiRhcnJvd3MucHVzaCh0KGUpLmluc2VydEFmdGVyKGkuJGNvbnRleHQpLm9uKFwiY2xpY2tcIitpLmV2ZW50U3VmZml4LGlbbl0pKX0pfSxpLmluaXRLZXlzPWZ1bmN0aW9uKCl7ITA9PT1pLm9wdGlvbnMua2V5cyYmKGkub3B0aW9ucy5rZXlzPWkuZGVmYXVsdHMua2V5cyksdChkb2N1bWVudCkub24oXCJrZXl1cFwiK2kuZXZlbnRTdWZmaXgsZnVuY3Rpb24obil7dC5lYWNoKGkub3B0aW9ucy5rZXlzLGZ1bmN0aW9uKGUsbyl7bi53aGljaD09PW8mJnQuaXNGdW5jdGlvbihpW2VdKSYmaVtlXS5jYWxsKGkpfSl9KX0saS5pbml0U3dpcGU9ZnVuY3Rpb24oKXt2YXIgdD1pLiRzbGlkZXMud2lkdGgoKTtcImZhZGVcIiE9PWkub3B0aW9ucy5hbmltYXRpb24mJmkuJGNvbnRhaW5lci5vbih7bW92ZXN0YXJ0OmZ1bmN0aW9uKHQpe2lmKHQuZGlzdFg+dC5kaXN0WSYmdC5kaXN0WDwtdC5kaXN0WXx8dC5kaXN0WDx0LmRpc3RZJiZ0LmRpc3RYPi10LmRpc3RZKXJldHVybiEhdC5wcmV2ZW50RGVmYXVsdCgpO2kuJGNvbnRhaW5lci5jc3MoXCJwb3NpdGlvblwiLFwicmVsYXRpdmVcIil9LG1vdmU6ZnVuY3Rpb24obil7aS4kY29udGFpbmVyLmNzcyhcImxlZnRcIiwtMTAwKmkuY3VycmVudCsxMDAqbi5kaXN0WC90K1wiJVwiKX0sbW92ZWVuZDpmdW5jdGlvbihuKXtNYXRoLmFicyhuLmRpc3RYKS90Pmkub3B0aW9ucy5zd2lwZVRocmVzaG9sZD9pW24uZGlzdFg8MD9cIm5leHRcIjpcInByZXZcIl0oKTppLiRjb250YWluZXIuYW5pbWF0ZSh7bGVmdDotMTAwKmkuY3VycmVudCtcIiVcIn0saS5vcHRpb25zLnNwZWVkLzIpfX0pfSxpLmluaXRJbmZpbml0ZT1mdW5jdGlvbigpe3ZhciBuPVtcImZpcnN0XCIsXCJsYXN0XCJdO3QuZWFjaChuLGZ1bmN0aW9uKHQsZSl7aS4kc2xpZGVzLnB1c2guYXBwbHkoaS4kc2xpZGVzLGkuJHNsaWRlcy5maWx0ZXIoJzpub3QoXCIuJytpLl8rJy1jbG9uZVwiKScpW2VdKCkuY2xvbmUoKS5hZGRDbGFzcyhpLl8rXCItY2xvbmVcIilbXCJpbnNlcnRcIisoMD09PXQ/XCJBZnRlclwiOlwiQmVmb3JlXCIpXShpLiRzbGlkZXNbblt+fiF0XV0oKSkpfSl9LGkuZGVzdHJveUFycm93cz1mdW5jdGlvbigpe3QuZWFjaChpLiRhcnJvd3MsZnVuY3Rpb24odCxuKXtuLnJlbW92ZSgpfSl9LGkuZGVzdHJveVN3aXBlPWZ1bmN0aW9uKCl7aS4kY29udGFpbmVyLm9mZihcIm1vdmVzdGFydCBtb3ZlIG1vdmVlbmRcIil9LGkuZGVzdHJveUtleXM9ZnVuY3Rpb24oKXt0KGRvY3VtZW50KS5vZmYoXCJrZXl1cFwiK2kuZXZlbnRTdWZmaXgpfSxpLnNldEluZGV4PWZ1bmN0aW9uKHQpe3JldHVybiB0PDAmJih0PWkudG90YWwtMSksaS5jdXJyZW50PU1hdGgubWluKE1hdGgubWF4KDAsdCksaS50b3RhbC0xKSxpLm9wdGlvbnMubmF2JiZpLiRuYXYuZmluZCgnW2RhdGEtc2xpZGU9XCInK2kuY3VycmVudCsnXCJdJykuX2FjdGl2ZShpLm9wdGlvbnMuYWN0aXZlQ2xhc3MpLGkuJHNsaWRlcy5lcShpLmN1cnJlbnQpLl9hY3RpdmUoaS5vcHRpb25zLmFjdGl2ZUNsYXNzKSxpfSxpLmFuaW1hdGU9ZnVuY3Rpb24obixlKXtpZihcImZpcnN0XCI9PT1uJiYobj0wKSxcImxhc3RcIj09PW4mJihuPWkudG90YWwpLGlzTmFOKG4pKXJldHVybiBpO2kub3B0aW9ucy5hdXRvcGxheSYmaS5zdG9wKCkuc3RhcnQoKSxpLnNldEluZGV4KG4pLGkuJGNvbnRleHQudHJpZ2dlcihpLl8rXCIuY2hhbmdlXCIsW24saS4kc2xpZGVzLmVxKG4pXSk7dmFyIG89XCJhbmltYXRlXCIrdC5fdWNmaXJzdChpLm9wdGlvbnMuYW5pbWF0aW9uKTtyZXR1cm4gdC5pc0Z1bmN0aW9uKGlbb10pJiZpW29dKGkuY3VycmVudCxlKSxpfSxpLm5leHQ9ZnVuY3Rpb24oKXt2YXIgdD1pLmN1cnJlbnQrMTtyZXR1cm4gdD49aS50b3RhbCYmKHQ9aS5vcHRpb25zLm5vbG9vcCYmIWkub3B0aW9ucy5pbmZpbml0ZT9pLnRvdGFsLTE6MCksaS5hbmltYXRlKHQsXCJuZXh0XCIpfSxpLnByZXY9ZnVuY3Rpb24oKXt2YXIgdD1pLmN1cnJlbnQtMTtyZXR1cm4gdDwwJiYodD1pLm9wdGlvbnMubm9sb29wJiYhaS5vcHRpb25zLmluZmluaXRlPzA6aS50b3RhbC0xKSxpLmFuaW1hdGUodCxcInByZXZcIil9LGkuYW5pbWF0ZUhvcml6b250YWw9ZnVuY3Rpb24odCl7dmFyIG49XCJsZWZ0XCI7cmV0dXJuXCJydGxcIj09PWkuJGNvbnRleHQuYXR0cihcImRpclwiKSYmKG49XCJyaWdodFwiKSxpLm9wdGlvbnMuaW5maW5pdGUmJmkuJGNvbnRhaW5lci5jc3MoXCJtYXJnaW4tXCIrbixcIi0xMDAlXCIpLGkuc2xpZGUobix0KX0saS5hbmltYXRlVmVydGljYWw9ZnVuY3Rpb24odCl7cmV0dXJuIGkub3B0aW9ucy5hbmltYXRlSGVpZ2h0PSEwLGkub3B0aW9ucy5pbmZpbml0ZSYmaS4kY29udGFpbmVyLmNzcyhcIm1hcmdpbi10b3BcIiwtaS4kc2xpZGVzLm91dGVySGVpZ2h0KCkpLGkuc2xpZGUoXCJ0b3BcIix0KX0saS5zbGlkZT1mdW5jdGlvbih0LG4pe2lmKGkuYW5pbWF0ZUhlaWdodChuKSxpLm9wdGlvbnMuaW5maW5pdGUpe3ZhciBlO249PT1pLnRvdGFsLTEmJihlPWkudG90YWwtMyxuPS0xKSxuPT09aS50b3RhbC0yJiYoZT0wLG49aS50b3RhbC0yKSxcIm51bWJlclwiPT10eXBlb2YgZSYmKGkuc2V0SW5kZXgoZSksaS4kY29udGV4dC5vbihpLl8rXCIubW92ZWRcIixmdW5jdGlvbigpe2kuY3VycmVudD09PWUmJmkuJGNvbnRhaW5lci5jc3ModCwtMTAwKmUrXCIlXCIpLm9mZihpLl8rXCIubW92ZWRcIil9KSl9dmFyIG89e307cmV0dXJuIG9bdF09LTEwMCpuK1wiJVwiLGkuX21vdmUoaS4kY29udGFpbmVyLG8pfSxpLmFuaW1hdGVGYWRlPWZ1bmN0aW9uKHQpe2kuYW5pbWF0ZUhlaWdodCh0KTt2YXIgbj1pLiRzbGlkZXMuZXEodCkuYWRkQ2xhc3MoaS5vcHRpb25zLmFjdGl2ZUNsYXNzKTtpLl9tb3ZlKG4uc2libGluZ3MoKS5yZW1vdmVDbGFzcyhpLm9wdGlvbnMuYWN0aXZlQ2xhc3MpLHtvcGFjaXR5OjB9KSxpLl9tb3ZlKG4se29wYWNpdHk6MX0sITEpfSxpLmFuaW1hdGVIZWlnaHQ9ZnVuY3Rpb24odCl7aS5vcHRpb25zLmFuaW1hdGVIZWlnaHQmJmkuX21vdmUoaS4kY29udGV4dCx7aGVpZ2h0OmkuJHNsaWRlcy5lcSh0KS5vdXRlckhlaWdodCgpfSwhMSl9LGkuX21vdmU9ZnVuY3Rpb24odCxuLGUsbyl7cmV0dXJuITEhPT1lJiYoZT1mdW5jdGlvbigpe2kuJGNvbnRleHQudHJpZ2dlcihpLl8rXCIubW92ZWRcIil9KSx0Ll9tb3ZlKG4sb3x8aS5vcHRpb25zLnNwZWVkLGkub3B0aW9ucy5lYXNpbmcsZSl9LGkuaW5pdChlKX0sdC5mbi5fYWN0aXZlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmFkZENsYXNzKHQpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3ModCl9LHQuX3VjZmlyc3Q9ZnVuY3Rpb24odCl7cmV0dXJuKHQrXCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9eLi8sZnVuY3Rpb24odCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX0pfSx0LmZuLl9tb3ZlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc3RvcCghMCwhMCksdC5mblt0LmZuLnZlbG9jaXR5P1widmVsb2NpdHlcIjpcImFuaW1hdGVcIl0uYXBwbHkodGhpcyxhcmd1bWVudHMpfSx0LmZuLnVuc2xpZGVyPWZ1bmN0aW9uKG4pe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSxpKXt2YXIgbz10KGkpO2lmKCEodChpKS5kYXRhKFwidW5zbGlkZXJcIilpbnN0YW5jZW9mIHQuVW5zbGlkZXIpKXtpZihcInN0cmluZ1wiPT10eXBlb2YgbiYmby5kYXRhKFwidW5zbGlkZXJcIikpe249bi5zcGxpdChcIjpcIik7dmFyIHM9by5kYXRhKFwidW5zbGlkZXJcIilbblswXV07aWYodC5pc0Z1bmN0aW9uKHMpKXJldHVybiBzLmFwcGx5KG8sblsxXT9uWzFdLnNwbGl0KFwiLFwiKTpudWxsKX1yZXR1cm4gby5kYXRhKFwidW5zbGlkZXJcIixuZXcgdC5VbnNsaWRlcihvLG4pKX19KX19KTsiLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gICQoJy5iYW5uZXInKS51bnNsaWRlcih7XG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gIH0pO1xufSk7XG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICBqUXVlcnkoJy5jb29raWUtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBqUXVlcnkoJy5jb29raWUnKS50b2dnbGUoJ3Nob3cnKTtcbiAgfSk7XG59KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcuc2VhcmNoLWJhcicpLm1vdXNlZW50ZXIoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zZWFyY2gtYmFyJykuc3RvcCgpLnNob3coKTtcbiAgfSk7XG5cbiAgJCgnLnNlYXJjaC1iYXIsIC5zZWFyY2gtYmFyJykubW91c2VsZWF2ZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCEkKCcuc2VhcmNoLWJhcicpLmlzKCc6aG92ZXInKSkge1xuICAgICAgJCgnLnNlYXJjaC1iYXInKS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtZG90cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW1vYmlsZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYS10aW1lcycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLW1vYmlsZScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYmFyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4Jztcbn0pO1xuXG5jb25zdCBtZW51TW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vYmlsZS1tZW51Jyk7XG5jb25zdCBtZW51UGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItcGx1cycpO1xuY29uc3QgbWVudU1pbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Yi1taW51cycpO1xuY29uc3QgbWVudVN1YlBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLXN1Yi1wbHVzJyk7XG5jb25zdCBtZW51U3ViTWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3ViLXN1Yi1taW51cycpO1xuY29uc3QgbWVudVN1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2JpbGUtc3ViLW1lbnUnKTtcbmNvbnN0IG1lbnVTdWJUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudS10aXRsZScpO1xuY29uc3QgbWVudVN1Yk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9iaWxlLXN1Yi1zdWItbWVudScpO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVQbHVzLmxlbmd0aDsgaSsrKSB7XG4gIG1lbnVQbHVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1lbnVQbHVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWVudU1pbnVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgbWVudVN1YltpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBtZW51TW9iaWxlW2ldLnN0eWxlLmNvbG9yID0gJyNkNDEyMTcnO1xuICAgIG1lbnVNb2JpbGVbaV0uc3R5bGUuYmFja2dyb3VuZCA9ICcjZDQxMjE3MzMnO1xuICAgIG1lbnVNb2JpbGVbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVNaW51cy5sZW5ndGg7IGkrKykge1xuICBtZW51TWludXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbWVudU1pbnVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWVudVBsdXNbaV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBtZW51U3ViW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWVudU1vYmlsZVtpXS5zdHlsZS5jb2xvciA9ICcjNGE0YTRhJztcbiAgICBtZW51TW9iaWxlW2ldLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZic7XG4gICAgbWVudU1vYmlsZVtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVTdWJQbHVzLmxlbmd0aDsgaSsrKSB7XG4gIG1lbnVTdWJQbHVzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG1lbnVTdWJUaXRsZVtpXS5zdHlsZS5jb2xvciA9ICcjZDQxMjE3JztcbiAgICBtZW51U3ViUGx1c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG1lbnVTdWJNaW51c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBtZW51U3ViTWVudVtpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSk7XG59XG5mb3IgKGxldCBpID0gMDsgaSA8IG1lbnVTdWJNaW51cy5sZW5ndGg7IGkrKykge1xuICBtZW51U3ViTWludXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgbWVudVN1YlBsdXNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgbWVudVN1Yk1pbnVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgbWVudVN1Yk1lbnVbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtZW51U3ViVGl0bGVbaV0uc3R5bGUuY29sb3IgPSAnIzRhNGE0YSc7XG4gIH0pO1xufVxuXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUnKTtcbmNvbnN0IG1lbnVTZWNvbmRhcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kYXJ5LW1lbnUnKTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51Lmxlbmd0aDsgaSsrKSB7XG4gIG1lbnVbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgIG1lbnVTZWNvbmRhcnlbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0pO1xufVxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51U2Vjb25kYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gIG1lbnVTZWNvbmRhcnlbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKCkge1xuICAgIG1lbnVTZWNvbmRhcnlbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0pO1xufVxuZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51U2Vjb25kYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gIG1lbnVTZWNvbmRhcnlbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgbWVudVNlY29uZGFyeVtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbn1cbmZvciAobGV0IGkgPSAwOyBpIDwgbWVudS5sZW5ndGg7IGkrKykge1xuICBtZW51W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgIG1lbnVTZWNvbmRhcnlbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG59XG4iXX0=
