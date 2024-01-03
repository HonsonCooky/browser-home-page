(() => {
  var e = {
    5: () => {
      var e = window.matchMedia("(prefers-color-scheme: dark)"),
        r = document.querySelector("link#light-scheme-icon"),
        t = document.querySelector("link#dark-scheme-icon");
      e.addEventListener("change", (e) => {
        e.matches
          ? (r.remove(), document.head.append(t))
          : (t.remove(), document.head.append(r));
      });
    },
  },
    r = {};
  function t(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var a = (r[o] = { exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return t.d(r, { a: r }), r;
  }),
    (t.d = (e, r) => {
      for (var o in r)
        t.o(r, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
    }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      "use strict";
      t(5);
    })();
})();
