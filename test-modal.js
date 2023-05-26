// https://john-dugan.com/javascript-debounce/
var debounce = function(e, t, n) {
    var a;
    return function() {
        var r = this
          , i = arguments
          , o = function() {
            a = null,
            n || e.apply(r, i)
        }
          , s = n && !a;
        clearTimeout(a),
        a = setTimeout(o, t || 200),
        s && e.apply(r, i)
    }
};

var ModalDialog = function() {
    "use strict";
    return function(A, B, f, C) {
        var d = "modal"
          , k = "lightbox"
          , l = "-" + d + "-open"
          , p = "icon-cross"
          , q = "svg-close"
          , r = "icon-loading"
          , t = "svg-loading"
          , v = function(a) {
            for (var b = f.getElementsByClassName("-" + d), c = b.length; c--; )
                a ? (b[c].classList.add(l),
                "body" !== b[c].tagName.toLowerCase() && b[c].setAttribute("aria-hidden", "true")) : (b[c].classList.remove(l),
                b[c].removeAttribute("aria-hidden"));
            return !!a
        }
          , n = function(a) {
            var b = a.target.count;
            a = f.getElementById(d + "_" + b);
            b = f.getElementById(d + "_" + b + "_" + k);
            a && (a.setAttribute("aria-hidden", "true"),
            b.className = b.className.replace(k + "-on", ""),
            v(!a.getAttribute("aria-hidden")),
            a = f.getElementById(a.returnId),
            f.body.classList.remove(l),
            a.focus())
        }
          , w = function(a) {
            var b = a.cloneNode(!0)
              , c = {};
            b.className = d;
            b.setAttribute("style", "position:fixed;visibility:hidden;transform: none");
            a.parentElement.appendChild(b);
            c.width = b.clientWidth;
            c.height = b.clientHeight;
            a.parentElement.removeChild(b);
            return c
        }
          , D = function() {
            for (var a, b, c, h = f.getElementsByClassName(d), e = h.length; e--; )
                for (a = w(h[e]),
                b = h[e].getElementsByClassName(d + "_iframe"),
                c = b.length; c--; )
                    b[c].width = a.width,
                    b[c].height = a.height
        }
          , E = function(a) {
            var b, c;
            a.getElementsByClassName(d + "_iframe")[0] || (c = f.createElement("iframe"),
            c.addEventListener("load", function() {
                c.classList.add(d + "_iframe-on")
            }, !1),
            c.src = a.modalSrc,
            c.className = d + "_iframe",
            b = w(a),
            c.width = b.width,
            c.height = b.height,
            c.setAttribute("frameborder", 0),
            c.setAttribute("allowfullscreen", !0),
            b = f.getElementById(d + "_" + a.count + "_lnk_close"),
            a.insertBefore(c, b))
        }
          , x = function(a) {
            var b = a;
            if ("body" === a.tagName.toLowerCase())
                return !1;
            a.modalSrc || (b = x(a.parentElement));
            return b
        }
          , y = function(a) {
            a.preventDefault();
            if (a = x(a.target)) {
                a = a.count;
                var b = d + "_" + a
                  , c = d + "_" + k
                  , h = f.getElementById(b)
                  , b = f.getElementById(b + "_" + k);
                h && b && (b.className.match(c + "-on") || (b.className += " " + c + "-on"),
                h.setAttribute("aria-hidden", "false"),
                E(h),
                v(!!h.getAttribute("aria-hidden")),
                f.body.classList.add(l),
                f.getElementById(d + "_" + a + "_title").focus())
            }
        }
          , F = function(a) {
            if (13 === a.which || 32 === a.which)
                a.preventDefault(),
                y(a)
        }
          , u = function(a) {
            var b = a.target;
            27 === a.which && n(a);
            9 === a.which && a.shiftKey && b.classList.contains(d + "_title") && (a.preventDefault(),
            f.getElementById(d + "_" + a.target.count + "_lnk_close").focus());
            9 === a.which && !a.shiftKey && b.classList.contains(d + "_lnk-close") && (a.preventDefault(),
            f.getElementById(d + "_" + a.target.count + "_title").focus());
            13 !== a.which && 32 !== a.which || !b.classList.contains(d + "_lnk-close") || (a.preventDefault(),
            n(a))
        }
          , G = function(a) {
            var b = f.createElement("h1");
            b.id = d + "_" + a.count + "_title";
            b.className = d + "_title";
            b.tabIndex = 0;
            var c;
            c = "";
            var h = a.getElementsByTagName("img");
            h && h[0] && (c = h[0].alt);
            c = a.getAttribute("data-" + d + "Title") || c || a.textContent;
            b.textContent = c;
            b.count = a.count;
            b.addEventListener("keydown", u, !1);
            return b
        }
          , z = function(a, b, c) {
            var d = f.createElementNS("http://www.w3.org/2000/svg", "svg");
            d.classList.add(b);
            c && (b = f.createElementNS("http://www.w3.org/2000/svg", "title"),
            b.textContent = c,
            d.appendChild(b));
            c = f.createElementNS("http://www.w3.org/2000/svg", "use");
            c.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + a);
            d.appendChild(c);
            return d
        }
          , H = function(a) {
            var b = f.createElement("p");
            b.id = d + "_" + a.count + "_desc";
            b.className = d + "_desc";
            b.tabIndex = 0;
            b.innerHTML = a.getAttribute("data-" + d + "Desc") || "<kbd>Tab</kbd> or <kbd>Shift+Tab</kbd> to move focus.";
            b.count = a.count;
            b.addEventListener("keydown", u, !1);
            return b
        }
          , I = function(a) {
            var b = f.createElement("a");
            b.id = d + "_" + a.count + "_lnk_close";
            b.className = d + "_lnk-close";
            b.tabIndex = 0;
            b.appendChild(z(p, q, "Close modal"));
            b.count = a.count;
            b.addEventListener("click", n, !1);
            b.addEventListener("keydown", u, !1);
            return b
        };
        return function(a, b, c, h) {
            d = a.modalName || d;
            k = a.lightboxClass || k;
            l = a.openClass ? "-" + d + a.openClass : l;
            p = a.svgCloseId || p;
            q = a.svgCloseClass || q;
            r = a.svgLoadingId || r;
            t = a.svgLoadingClass || t;
            var e;
            if (a = c.querySelectorAll("[data-" + d + "]")) {
                for (c = a.length; c--; )
                    if (e = !1,
                    a[c].hasAttribute("href") && (e = a[c].href),
                    a[c].getAttribute("data-" + d).length && (e = a[c].getAttribute("data-" + d)),
                    e) {
                        a[c].modalSrc = e;
                        a[c].count = c;
                        e = a[c];
                        e.id = e.id || "modal_" + e.count + "_lnk";
                        e.setAttribute("aria-controls", d + "_" + e.count);
                        "button" !== e.tagName.toLowerCase() && (e.setAttribute("aria-role", "button"),
                        e.addEventListener("keydown", F, !1));
                        e.tabIndex = 0;
                        e.addEventListener("click", y, !1);
                        e = a[c];
                        var g = f.createElement("section");
                        g.id = d + "_" + e.count;
                        g.count = e.count;
                        g.returnId = e.id;
                        g.className = d;
                        g.setAttribute("aria-hidden", "true");
                        g.setAttribute("aria-labelledby", d + "_" + e.count + "_title");
                        g.setAttribute("aria-describedby", d + "_" + e.count + "_desc");
                        g.setAttribute("role", "dialog");
                        g.modalSrc = e.modalSrc;
                        g.appendChild(G(e));
                        g.appendChild(z(r, t, "Loading"));
                        g.appendChild(H(e));
                        g.appendChild(I(e));
                        f.body.appendChild(g);
                        e = a[c];
                        var g = e.count
                          , m = f.createElement("div");
                        m.id = d + "_" + g + "_" + k;
                        m.className = d + "_" + k;
                        m.count = g;
                        m.returnId = e.id;
                        m.addEventListener("click", n, !1);
                        f.body.appendChild(m)
                    }
                b.addEventListener("resize", h(D, 250, !1))
            }
        }(A, B, document, C)
    }
}();
