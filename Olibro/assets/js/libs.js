if (function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function t(e) {
        return a.raw ? e : encodeURIComponent(e)
    }
    function o(e) {
        return a.raw ? e : decodeURIComponent(e)
    }
    function n(e) {
        return t(a.json ? JSON.stringify(e) : String(e))
    }
    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(s, " ")),
            a.json ? JSON.parse(e) : e
        } catch (t) {}
    }
    function r(t, o) {
        var n = a.raw ? t : i(t);
        return e.isFunction(o) ? o(n) : n
    }
    var s = /\+/g
      , a = e.cookie = function(i, s, l) {
        if (arguments.length > 1 && !e.isFunction(s)) {
            if (l = e.extend({}, a.defaults, l),
            "number" == typeof l.expires) {
                var c = l.expires
                  , u = l.expires = new Date;
                u.setTime(+u + 864e5 * c)
            }
            return document.cookie = [t(i), "=", n(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
        }
        for (var d = i ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], m = 0, f = p.length; m < f; m++) {
            var h = p[m].split("=")
              , y = o(h.shift())
              , g = h.join("=");
            if (i && i === y) {
                d = r(g, s);
                break
            }
            i || void 0 === (g = r(g)) || (d[y] = g)
        }
        return d
    }
    ;
    a.defaults = {},
    e.removeCookie = function(t, o) {
        return void 0 !== e.cookie(t) && (e.cookie(t, "", e.extend({}, o, {
            expires: -1
        })),
        !e.cookie(t))
    }
}),
"undefined" == typeof Currency)
    var Currency = {};
Currency.cookie = {
    configuration: {
        expires: 365,
        path: "/",
        domain: window.location.hostname
    },
    name: "currency",
    write: function(e) {
        jQuery.cookie(this.name, e, this.configuration)
    },
    read: function() {
        return jQuery.cookie(this.name)
    },
    destroy: function() {
        jQuery.cookie(this.name, null, this.configuration)
    }
},
Currency.moneyFormats = {
    USD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} USD"
    },
    EUR: {
        money_format: "&euro;{{amount}}",
        money_with_currency_format: "&euro;{{amount}} EUR"
    },
    GBP: {
        money_format: "&pound;{{amount}}",
        money_with_currency_format: "&pound;{{amount}} GBP"
    },
    CAD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} CAD"
    },
    ALL: {
        money_format: "Lek {{amount}}",
        money_with_currency_format: "Lek {{amount}} ALL"
    },
    DZD: {
        money_format: "DA {{amount}}",
        money_with_currency_format: "DA {{amount}} DZD"
    },
    AOA: {
        money_format: "Kz{{amount}}",
        money_with_currency_format: "Kz{{amount}} AOA"
    },
    ARS: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} ARS"
    },
    AMD: {
        money_format: "{{amount}} AMD",
        money_with_currency_format: "{{amount}} AMD"
    },
    AWG: {
        money_format: "Afl{{amount}}",
        money_with_currency_format: "Afl{{amount}} AWG"
    },
    AUD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} AUD"
    },
    BBD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} Bds"
    },
    AZN: {
        money_format: "m.{{amount}}",
        money_with_currency_format: "m.{{amount}} AZN"
    },
    BDT: {
        money_format: "Tk {{amount}}",
        money_with_currency_format: "Tk {{amount}} BDT"
    },
    BSD: {
        money_format: "BS${{amount}}",
        money_with_currency_format: "BS${{amount}} BSD"
    },
    BHD: {
        money_format: "{{amount}}0 BD",
        money_with_currency_format: "{{amount}}0 BHD"
    },
    BYR: {
        money_format: "Br {{amount}}",
        money_with_currency_format: "Br {{amount}} BYR"
    },
    BZD: {
        money_format: "BZ${{amount}}",
        money_with_currency_format: "BZ${{amount}} BZD"
    },
    BTN: {
        money_format: "Nu {{amount}}",
        money_with_currency_format: "Nu {{amount}} BTN"
    },
    BAM: {
        money_format: "KM {{amount_with_comma_separator}}",
        money_with_currency_format: "KM {{amount_with_comma_separator}} BAM"
    },
    BRL: {
        money_format: "R$ {{amount_with_comma_separator}}",
        money_with_currency_format: "R$ {{amount_with_comma_separator}} BRL"
    },
    BOB: {
        money_format: "Bs{{amount_with_comma_separator}}",
        money_with_currency_format: "Bs{{amount_with_comma_separator}} BOB"
    },
    BWP: {
        money_format: "P{{amount}}",
        money_with_currency_format: "P{{amount}} BWP"
    },
    BND: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} BND"
    },
    BGN: {
        money_format: "{{amount}} Ð»Ð²",
        money_with_currency_format: "{{amount}} Ð»Ð² BGN"
    },
    MMK: {
        money_format: "K{{amount}}",
        money_with_currency_format: "K{{amount}} MMK"
    },
    KHR: {
        money_format: "KHR{{amount}}",
        money_with_currency_format: "KHR{{amount}}"
    },
    KYD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} KYD"
    },
    XAF: {
        money_format: "FCFA{{amount}}",
        money_with_currency_format: "FCFA{{amount}} XAF"
    },
    CLP: {
        money_format: "${{amount_no_decimals}}",
        money_with_currency_format: "${{amount_no_decimals}} CLP"
    },
    CNY: {
        money_format: "&#165;{{amount}}",
        money_with_currency_format: "&#165;{{amount}} CNY"
    },
    COP: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} COP"
    },
    CRC: {
        money_format: "&#8353; {{amount_with_comma_separator}}",
        money_with_currency_format: "&#8353; {{amount_with_comma_separator}} CRC"
    },
    HRK: {
        money_format: "{{amount_with_comma_separator}} kn",
        money_with_currency_format: "{{amount_with_comma_separator}} kn HRK"
    },
    CZK: {
        money_format: "{{amount_with_comma_separator}} K&#269;",
        money_with_currency_format: "{{amount_with_comma_separator}} K&#269;"
    },
    DKK: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "kr.{{amount_with_comma_separator}}"
    },
    DOP: {
        money_format: "RD$ {{amount}}",
        money_with_currency_format: "RD$ {{amount}}"
    },
    XCD: {
        money_format: "${{amount}}",
        money_with_currency_format: "EC${{amount}}"
    },
    EGP: {
        money_format: "LE {{amount}}",
        money_with_currency_format: "LE {{amount}} EGP"
    },
    ETB: {
        money_format: "Br{{amount}}",
        money_with_currency_format: "Br{{amount}} ETB"
    },
    XPF: {
        money_format: "{{amount_no_decimals_with_comma_separator}} XPF",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} XPF"
    },
    FJD: {
        money_format: "${{amount}}",
        money_with_currency_format: "FJ${{amount}}"
    },
    GMD: {
        money_format: "D {{amount}}",
        money_with_currency_format: "D {{amount}} GMD"
    },
    GHS: {
        money_format: "GH&#8373;{{amount}}",
        money_with_currency_format: "GH&#8373;{{amount}}"
    },
    GTQ: {
        money_format: "Q{{amount}}",
        money_with_currency_format: "{{amount}} GTQ"
    },
    GYD: {
        money_format: "G${{amount}}",
        money_with_currency_format: "${{amount}} GYD"
    },
    GEL: {
        money_format: "{{amount}} GEL",
        money_with_currency_format: "{{amount}} GEL"
    },
    HNL: {
        money_format: "L {{amount}}",
        money_with_currency_format: "L {{amount}} HNL"
    },
    HKD: {
        money_format: "${{amount}}",
        money_with_currency_format: "HK${{amount}}"
    },
    HUF: {
        money_format: "{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} Ft"
    },
    ISK: {
        money_format: "{{amount_no_decimals}} kr",
        money_with_currency_format: "{{amount_no_decimals}} kr ISK"
    },
    INR: {
        money_format: "Rs. {{amount}}",
        money_with_currency_format: "Rs. {{amount}}"
    },
    IDR: {
        money_format: "{{amount_with_comma_separator}}",
        money_with_currency_format: "Rp {{amount_with_comma_separator}}"
    },
    ILS: {
        money_format: "{{amount}} NIS",
        money_with_currency_format: "{{amount}} NIS"
    },
    JMD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} JMD"
    },
    JPY: {
        money_format: "&#165;{{amount_no_decimals}}",
        money_with_currency_format: "&#165;{{amount_no_decimals}} JPY"
    },
    JEP: {
        money_format: "&pound;{{amount}}",
        money_with_currency_format: "&pound;{{amount}} JEP"
    },
    JOD: {
        money_format: "{{amount}}0 JD",
        money_with_currency_format: "{{amount}}0 JOD"
    },
    KZT: {
        money_format: "{{amount}} KZT",
        money_with_currency_format: "{{amount}} KZT"
    },
    KES: {
        money_format: "KSh{{amount}}",
        money_with_currency_format: "KSh{{amount}}"
    },
    KWD: {
        money_format: "{{amount}}0 KD",
        money_with_currency_format: "{{amount}}0 KWD"
    },
    KGS: {
        money_format: "Ð»Ð²{{amount}}",
        money_with_currency_format: "Ð»Ð²{{amount}}"
    },
    LVL: {
        money_format: "Ls {{amount}}",
        money_with_currency_format: "Ls {{amount}} LVL"
    },
    LBP: {
        money_format: "L&pound;{{amount}}",
        money_with_currency_format: "L&pound;{{amount}} LBP"
    },
    LTL: {
        money_format: "{{amount}} Lt",
        money_with_currency_format: "{{amount}} Lt"
    },
    MGA: {
        money_format: "Ar {{amount}}",
        money_with_currency_format: "Ar {{amount}} MGA"
    },
    MKD: {
        money_format: "Ð´ÐµÐ½ {{amount}}",
        money_with_currency_format: "Ð´ÐµÐ½ {{amount}} MKD"
    },
    MOP: {
        money_format: "MOP${{amount}}",
        money_with_currency_format: "MOP${{amount}}"
    },
    MVR: {
        money_format: "Rf{{amount}}",
        money_with_currency_format: "Rf{{amount}} MRf"
    },
    MXN: {
        money_format: "$ {{amount}}",
        money_with_currency_format: "$ {{amount}} MXN"
    },
    MYR: {
        money_format: "RM{{amount}} MYR",
        money_with_currency_format: "RM{{amount}} MYR"
    },
    MUR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} MUR"
    },
    MDL: {
        money_format: "{{amount}} MDL",
        money_with_currency_format: "{{amount}} MDL"
    },
    MAD: {
        money_format: "{{amount}} dh",
        money_with_currency_format: "Dh {{amount}} MAD"
    },
    MNT: {
        money_format: "{{amount_no_decimals}} &#8366",
        money_with_currency_format: "{{amount_no_decimals}} MNT"
    },
    MZN: {
        money_format: "{{amount}} Mt",
        money_with_currency_format: "Mt {{amount}} MZN"
    },
    NAD: {
        money_format: "N${{amount}}",
        money_with_currency_format: "N${{amount}} NAD"
    },
    NPR: {
        money_format: "Rs{{amount}}",
        money_with_currency_format: "Rs{{amount}} NPR"
    },
    ANG: {
        money_format: "&fnof;{{amount}}",
        money_with_currency_format: "{{amount}} NA&fnof;"
    },
    NZD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} NZD"
    },
    NIO: {
        money_format: "C${{amount}}",
        money_with_currency_format: "C${{amount}} NIO"
    },
    NGN: {
        money_format: "&#8358;{{amount}}",
        money_with_currency_format: "&#8358;{{amount}} NGN"
    },
    NOK: {
        money_format: "kr {{amount_with_comma_separator}}",
        money_with_currency_format: "kr {{amount_with_comma_separator}} NOK"
    },
    OMR: {
        money_format: "{{amount_with_comma_separator}} OMR",
        money_with_currency_format: "{{amount_with_comma_separator}} OMR"
    },
    PKR: {
        money_format: "Rs.{{amount}}",
        money_with_currency_format: "Rs.{{amount}} PKR"
    },
    PGK: {
        money_format: "K {{amount}}",
        money_with_currency_format: "K {{amount}} PGK"
    },
    PYG: {
        money_format: "Gs. {{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "Gs. {{amount_no_decimals_with_comma_separator}} PYG"
    },
    PEN: {
        money_format: "S/. {{amount}}",
        money_with_currency_format: "S/. {{amount}} PEN"
    },
    PHP: {
        money_format: "&#8369;{{amount}}",
        money_with_currency_format: "&#8369;{{amount}} PHP"
    },
    PLN: {
        money_format: "{{amount_with_comma_separator}} zl",
        money_with_currency_format: "{{amount_with_comma_separator}} zl PLN"
    },
    QAR: {
        money_format: "QAR {{amount_with_comma_separator}}",
        money_with_currency_format: "QAR {{amount_with_comma_separator}}"
    },
    RON: {
        money_format: "{{amount_with_comma_separator}} lei",
        money_with_currency_format: "{{amount_with_comma_separator}} lei RON"
    },
    RUB: {
        money_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}}",
        money_with_currency_format: "&#1088;&#1091;&#1073;{{amount_with_comma_separator}} RUB"
    },
    RWF: {
        money_format: "{{amount_no_decimals}} RF",
        money_with_currency_format: "{{amount_no_decimals}} RWF"
    },
    WST: {
        money_format: "WS$ {{amount}}",
        money_with_currency_format: "WS$ {{amount}} WST"
    },
    SAR: {
        money_format: "{{amount}} SR",
        money_with_currency_format: "{{amount}} SAR"
    },
    STD: {
        money_format: "Db {{amount}}",
        money_with_currency_format: "Db {{amount}} STD"
    },
    RSD: {
        money_format: "{{amount}} RSD",
        money_with_currency_format: "{{amount}} RSD"
    },
    SCR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} SCR"
    },
    SGD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} SGD"
    },
    SYP: {
        money_format: "S&pound;{{amount}}",
        money_with_currency_format: "S&pound;{{amount}} SYP"
    },
    ZAR: {
        money_format: "R {{amount}}",
        money_with_currency_format: "R {{amount}} ZAR"
    },
    KRW: {
        money_format: "&#8361;{{amount_no_decimals}}",
        money_with_currency_format: "&#8361;{{amount_no_decimals}} KRW"
    },
    LKR: {
        money_format: "Rs {{amount}}",
        money_with_currency_format: "Rs {{amount}} LKR"
    },
    SEK: {
        money_format: "{{amount_no_decimals}} kr",
        money_with_currency_format: "{{amount_no_decimals}} kr SEK"
    },
    CHF: {
        money_format: "{{amount}} CHF",
        money_with_currency_format: "{{amount}} CHF"
    },
    TWD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} TWD"
    },
    THB: {
        money_format: "{{amount}} &#xe3f;",
        money_with_currency_format: "{{amount}} &#xe3f; THB"
    },
    TZS: {
        money_format: "{{amount}} TZS",
        money_with_currency_format: "{{amount}} TZS"
    },
    TTD: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}} TTD"
    },
    TND: {
        money_format: "{{amount}}",
        money_with_currency_format: "{{amount}} DT"
    },
    TRY: {
        money_format: "{{amount}}TL",
        money_with_currency_format: "{{amount}}TL"
    },
    UGX: {
        money_format: "Ush {{amount_no_decimals}}",
        money_with_currency_format: "Ush {{amount_no_decimals}} UGX"
    },
    UAH: {
        money_format: "â‚´{{amount}}",
        money_with_currency_format: "â‚´{{amount}} UAH"
    },
    AED: {
        money_format: "Dhs. {{amount}}",
        money_with_currency_format: "Dhs. {{amount}} AED"
    },
    UYU: {
        money_format: "${{amount_with_comma_separator}}",
        money_with_currency_format: "${{amount_with_comma_separator}} UYU"
    },
    VUV: {
        money_format: "${{amount}}",
        money_with_currency_format: "${{amount}}VT"
    },
    VEF: {
        money_format: "Bs. {{amount_with_comma_separator}}",
        money_with_currency_format: "Bs. {{amount_with_comma_separator}} VEF"
    },
    VND: {
        money_format: "{{amount_no_decimals_with_comma_separator}}&#8363;",
        money_with_currency_format: "{{amount_no_decimals_with_comma_separator}} VND"
    },
    XBT: {
        money_format: "{{amount_no_decimals}} BTC",
        money_with_currency_format: "{{amount_no_decimals}} BTC"
    },
    XOF: {
        money_format: "CFA{{amount}}",
        money_with_currency_format: "CFA{{amount}} XOF"
    },
    ZMW: {
        money_format: "K{{amount_no_decimals_with_comma_separator}}",
        money_with_currency_format: "ZMW{{amount_no_decimals_with_comma_separator}}"
    }
},
Currency.currentCurrency = "",
Currency.format = "money_format",
function() {
    var e;
    e = function() {
        function e(e, t) {
            var o, n;
            if (this.options = {
                target: "instafeed",
                get: "popular",
                resolution: "thumbnail",
                sortBy: "none",
                links: !0,
                mock: !1,
                useHttp: !1
            },
            "object" == typeof e)
                for (o in e)
                    n = e[o],
                    this.options[o] = n;
            this.context = null != t ? t : this,
            this.unique = this._genKey()
        }
        return e.prototype.hasNext = function() {
            return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
        }
        ,
        e.prototype.next = function() {
            return !!this.hasNext() && this.run(this.context.nextUrl)
        }
        ,
        e.prototype.run = function(t) {
            var o, n, i;
            if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken)
                throw new Error("Missing clientId or accessToken.");
            if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId)
                throw new Error("Missing clientId or accessToken.");
            return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this),
            "undefined" != typeof document && null !== document && (i = document.createElement("script"),
            i.id = "instafeed-fetcher",
            i.src = t || this._buildUrl(),
            o = document.getElementsByTagName("head"),
            o[0].appendChild(i),
            n = "instafeedCache" + this.unique,
            window[n] = new e(this.options,this),
            window[n].unique = this.unique),
            !0
        }
        ,
        e.prototype.parse = function(e) {
            var t, o, n, i, r, s, a, l, c, u, d, p, m, f, h, y, g, v, b, w, _, k, T, S, C, x, $, E, A, O, I, P, N;
            if ("object" != typeof e) {
                if (null != this.options.error && "function" == typeof this.options.error)
                    return this.options.error.call(this, "Invalid JSON data"),
                    !1;
                throw new Error("Invalid JSON response")
            }
            if (200 !== e.meta.code) {
                if (null != this.options.error && "function" == typeof this.options.error)
                    return this.options.error.call(this, e.meta.error_message),
                    !1;
                throw new Error("Error from Instagram: " + e.meta.error_message)
            }
            if (0 === e.data.length) {
                if (null != this.options.error && "function" == typeof this.options.error)
                    return this.options.error.call(this, "No images were returned from Instagram"),
                    !1;
                throw new Error("No images were returned from Instagram")
            }
            if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, e),
            this.context.nextUrl = "",
            null != e.pagination && (this.context.nextUrl = e.pagination.next_url),
            "none" !== this.options.sortBy)
                switch (I = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"),
                O = "least" === I[0],
                I[1]) {
                case "random":
                    e.data.sort(function() {
                        return .5 - Math.random()
                    });
                    break;
                case "recent":
                    e.data = this._sortBy(e.data, "created_time", O);
                    break;
                case "liked":
                    e.data = this._sortBy(e.data, "likes.count", O);
                    break;
                case "commented":
                    e.data = this._sortBy(e.data, "comments.count", O);
                    break;
                default:
                    throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
                }
            if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                if (y = e.data,
                A = parseInt(this.options.limit, 10),
                null != this.options.limit && y.length > A && (y = y.slice(0, A)),
                a = document.createDocumentFragment(),
                null != this.options.filter && "function" == typeof this.options.filter && (y = this._filter(y, this.options.filter)),
                null != this.options.template && "string" == typeof this.options.template) {
                    for (c = "",
                    f = "",
                    w = "",
                    N = document.createElement("div"),
                    d = 0,
                    C = y.length; d < C; d++) {
                        if (p = y[d],
                        m = p.images[this.options.resolution],
                        "object" != typeof m)
                            throw s = "No image found for resolution: " + this.options.resolution + ".",
                            new Error(s);
                        _ = m.width,
                        v = m.height,
                        b = "square",
                        _ > v && (b = "landscape"),
                        _ < v && (b = "portrait"),
                        h = m.url,
                        u = window.location.protocol.indexOf("http") >= 0,
                        u && !this.options.useHttp && (h = h.replace(/https?:\/\//, "//")),
                        f = this._makeTemplate(this.options.template, {
                            model: p,
                            id: p.id,
                            link: p.link,
                            type: p.type,
                            image: h,
                            width: _,
                            height: v,
                            orientation: b,
                            caption: this._getObjectProperty(p, "caption.text"),
                            likes: p.likes.count,
                            comments: p.comments.count,
                            location: this._getObjectProperty(p, "location.name")
                        }),
                        c += f
                    }
                    for (N.innerHTML = c,
                    i = [],
                    n = 0,
                    o = N.childNodes.length; n < o; )
                        i.push(N.childNodes[n]),
                        n += 1;
                    for (T = 0,
                    x = i.length; T < x; T++)
                        E = i[T],
                        a.appendChild(E)
                } else
                    for (S = 0,
                    $ = y.length; S < $; S++) {
                        if (p = y[S],
                        g = document.createElement("img"),
                        m = p.images[this.options.resolution],
                        "object" != typeof m)
                            throw s = "No image found for resolution: " + this.options.resolution + ".",
                            new Error(s);
                        h = m.url,
                        u = window.location.protocol.indexOf("http") >= 0,
                        u && !this.options.useHttp && (h = h.replace(/https?:\/\//, "//")),
                        g.src = h,
                        this.options.links === !0 ? (t = document.createElement("a"),
                        t.href = p.link,
                        t.appendChild(g),
                        a.appendChild(t)) : a.appendChild(g)
                    }
                if (P = this.options.target,
                "string" == typeof P && (P = document.getElementById(P)),
                null == P)
                    throw s = 'No element with id="' + this.options.target + '" on page.',
                    new Error(s);
                P.appendChild(a),
                l = document.getElementsByTagName("head")[0],
                l.removeChild(document.getElementById("instafeed-fetcher")),
                k = "instafeedCache" + this.unique,
                window[k] = void 0;
                try {
                    delete window[k]
                } catch (L) {
                    r = L
                }
            }
            return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this),
            !0
        }
        ,
        e.prototype._buildUrl = function() {
            var e, t, o;
            switch (e = "https://api.instagram.com/v1",
            this.options.get) {
            case "popular":
                t = "media/popular";
                break;
            case "tagged":
                if (!this.options.tagName)
                    throw new Error("No tag name specified. Use the 'tagName' option.");
                t = "tags/" + this.options.tagName + "/media/recent";
                break;
            case "location":
                if (!this.options.locationId)
                    throw new Error("No location specified. Use the 'locationId' option.");
                t = "locations/" + this.options.locationId + "/media/recent";
                break;
            case "user":
                if (!this.options.userId)
                    throw new Error("No user specified. Use the 'userId' option.");
                t = "users/" + this.options.userId + "/media/recent";
                break;
            default:
                throw new Error("Invalid option for get: '" + this.options.get + "'.")
            }
            return o = e + "/" + t,
            o += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId,
            null != this.options.limit && (o += "&count=" + this.options.limit),
            o += "&callback=instafeedCache" + this.unique + ".parse"
        }
        ,
        e.prototype._genKey = function() {
            var e;
            return e = function() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            ,
            "" + e() + e() + e() + e()
        }
        ,
        e.prototype._makeTemplate = function(e, t) {
            var o, n, i, r, s;
            for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,
            o = e; n.test(o); )
                r = o.match(n)[1],
                s = null != (i = this._getObjectProperty(t, r)) ? i : "",
                o = o.replace(n, function() {
                    return "" + s
                });
            return o
        }
        ,
        e.prototype._getObjectProperty = function(e, t) {
            var o, n;
            for (t = t.replace(/\[(\w+)\]/g, ".$1"),
            n = t.split("."); n.length; ) {
                if (o = n.shift(),
                !(null != e && o in e))
                    return null;
                e = e[o]
            }
            return e
        }
        ,
        e.prototype._sortBy = function(e, t, o) {
            var n;
            return n = function(e, n) {
                var i, r;
                return i = this._getObjectProperty(e, t),
                r = this._getObjectProperty(n, t),
                o ? i > r ? 1 : -1 : i < r ? 1 : -1
            }
            ,
            e.sort(n.bind(this)),
            e
        }
        ,
        e.prototype._filter = function(e, t) {
            var o, n, i, r, s;
            for (o = [],
            n = function(e) {
                if (t(e))
                    return o.push(e)
            }
            ,
            i = 0,
            s = e.length; i < s; i++)
                r = e[i],
                n(r);
            return o
        }
        ,
        e
    }(),
    function(e, t) {
        return "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Instafeed = t()
    }(this, function() {
        return e
    })
}
.call(this),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(e) {
    var t, o, n, i, r, s, a = "Close", l = "BeforeClose", c = "AfterClose", u = "BeforeAppend", d = "MarkupParse", p = "Open", m = "Change", f = "mfp", h = "." + f, y = "mfp-ready", g = "mfp-removing", v = "mfp-prevent-close", b = function() {}, w = !!window.jQuery, _ = e(window), k = function(e, o) {
        t.ev.on(f + e + h, o)
    }, T = function(t, o, n, i) {
        var r = document.createElement("div");
        return r.className = "mfp-" + t,
        n && (r.innerHTML = n),
        i ? o && o.appendChild(r) : (r = e(r),
        o && r.appendTo(o)),
        r
    }, S = function(o, n) {
        t.ev.triggerHandler(f + o, n),
        t.st.callbacks && (o = o.charAt(0).toLowerCase() + o.slice(1),
        t.st.callbacks[o] && t.st.callbacks[o].apply(t, e.isArray(n) ? n : [n]))
    }, C = function(o) {
        return o === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)),
        s = o),
        t.currTemplate.closeBtn
    }, x = function() {
        e.magnificPopup.instance || (t = new b,
        t.init(),
        e.magnificPopup.instance = t)
    }, $ = function() {
        var e = document.createElement("p").style
          , t = ["ms", "O", "Moz", "Webkit"];
        if (void 0 !== e.transition)
            return !0;
        for (; t.length; )
            if (t.pop() + "Transition"in e)
                return !0;
        return !1
    };
    b.prototype = {
        constructor: b,
        init: function() {
            var o = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener,
            t.isAndroid = /android/gi.test(o),
            t.isIOS = /iphone|ipad|ipod/gi.test(o),
            t.supportsTransition = $(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            n = e(document),
            t.popupsCache = {}
        },
        open: function(o) {
            var i;
            if (o.isObj === !1) {
                t.items = o.items.toArray(),
                t.index = 0;
                var s, a = o.items;
                for (i = 0; i < a.length; i++)
                    if (s = a[i],
                    s.parsed && (s = s.el[0]),
                    s === o.el[0]) {
                        t.index = i;
                        break
                    }
            } else
                t.items = e.isArray(o.items) ? o.items : [o.items],
                t.index = o.index || 0;
            if (t.isOpen)
                return void t.updateItemHTML();
            t.types = [],
            r = "",
            o.mainEl && o.mainEl.length ? t.ev = o.mainEl.eq(0) : t.ev = n,
            o.key ? (t.popupsCache[o.key] || (t.popupsCache[o.key] = {}),
            t.currTemplate = t.popupsCache[o.key]) : t.currTemplate = {},
            t.st = e.extend(!0, {}, e.magnificPopup.defaults, o),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1,
            t.st.closeOnBgClick = !1,
            t.st.showCloseBtn = !1,
            t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = T("bg").on("click" + h, function() {
                t.close()
            }),
            t.wrap = T("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                t._checkIfClose(e.target) && t.close()
            }),
            t.container = T("container", t.wrap)),
            t.contentContainer = T("content"),
            t.st.preloader && (t.preloader = T("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (i = 0; i < l.length; i++) {
                var c = l[i];
                c = c.charAt(0).toUpperCase() + c.slice(1),
                t["init" + c].call(t)
            }
            S("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? (k(d, function(e, t, o, n) {
                o.close_replaceWith = C(n.type)
            }),
            r += " mfp-close-btn-in") : t.wrap.append(C())),
            t.st.alignTop && (r += " mfp-align-top"),
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: _.scrollTop(),
                position: "absolute"
            }),
            (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: n.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && n.on("keyup" + h, function(e) {
                27 === e.keyCode && t.close()
            }),
            _.on("resize" + h, function() {
                t.updateSize()
            }),
            t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
            r && t.wrap.addClass(r);
            var u = t.wH = _.height()
              , m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var f = t._getScrollbarSize();
                f && (m.marginRight = f)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var g = t.st.mainClass;
            return t.isIE7 && (g += " mfp-ie7"),
            g && t._addClassToMFP(g),
            t.updateItemHTML(),
            S("BuildControls"),
            e("html").css(m),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function() {
                t.content ? (t._addClassToMFP(y),
                t._setFocus()) : t.bgOverlay.addClass(y),
                n.on("focusin" + h, t._onFocusIn)
            }, 16),
            t.isOpen = !0,
            t.updateSize(u),
            S(p),
            o
        },
        close: function() {
            t.isOpen && (S(l),
            t.isOpen = !1,
            t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g),
            setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            S(a);
            var o = g + " " + y + " ";
            if (t.bgOverlay.detach(),
            t.wrap.detach(),
            t.container.empty(),
            t.st.mainClass && (o += t.st.mainClass + " "),
            t._removeClassFromMFP(o),
            t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "",
                e("html").css(i)
            }
            n.off("keyup" + h + " focusin" + h),
            t.ev.off(h),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null,
            t.content = null,
            t.currTemplate = null,
            t.prevHeight = 0,
            S(c)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var o = document.documentElement.clientWidth / window.innerWidth
                  , n = window.innerHeight * o;
                t.wrap.css("height", n),
                t.wH = n
            } else
                t.wH = e || _.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            S("Resize")
        },
        updateItemHTML: function() {
            var o = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            o.parsed || (o = t.parseEl(t.index));
            var n = o.type;
            if (S("BeforeChange", [t.currItem ? t.currItem.type : "", n]),
            t.currItem = o,
            !t.currTemplate[n]) {
                var r = !!t.st[n] && t.st[n].markup;
                S("FirstMarkupParse", r),
                r ? t.currTemplate[n] = e(r) : t.currTemplate[n] = !0
            }
            i && i !== o.type && t.container.removeClass("mfp-" + i + "-holder");
            var s = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](o, t.currTemplate[n]);
            t.appendContent(s, n),
            o.preloaded = !0,
            S(m, o),
            i = o.type,
            t.container.prepend(t.contentContainer),
            S("AfterChange")
        },
        appendContent: function(e, o) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[o] === !0 ? t.content.find(".mfp-close").length || t.content.append(C()) : t.content = e : t.content = "",
            S(u),
            t.container.addClass("mfp-" + o + "-holder"),
            t.contentContainer.append(t.content)
        },
        parseEl: function(o) {
            var n, i = t.items[o];
            if (i.tagName ? i = {
                el: e(i)
            } : (n = i.type,
            i = {
                data: i,
                src: i.src
            }),
            i.el) {
                for (var r = t.types, s = 0; s < r.length; s++)
                    if (i.el.hasClass("mfp-" + r[s])) {
                        n = r[s];
                        break
                    }
                i.src = i.el.attr("data-mfp-src"),
                i.src || (i.src = i.el.attr("href"))
            }
            return i.type = n || t.st.type || "inline",
            i.index = o,
            i.parsed = !0,
            t.items[o] = i,
            S("ElementParse", i),
            t.items[o]
        },
        addGroup: function(e, o) {
            var n = function(n) {
                n.mfpEl = this,
                t._openClick(n, e, o)
            };
            o || (o = {});
            var i = "click.magnificPopup";
            o.mainEl = e,
            o.items ? (o.isObj = !0,
            e.off(i).on(i, n)) : (o.isObj = !1,
            o.delegate ? e.off(i).on(i, o.delegate, n) : (o.items = e,
            e.off(i).on(i, n)))
        },
        _openClick: function(o, n, i) {
            var r = void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick;
            if (r || !(2 === o.which || o.ctrlKey || o.metaKey || o.altKey || o.shiftKey)) {
                var s = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;
                if (s)
                    if (e.isFunction(s)) {
                        if (!s.call(t))
                            return !0
                    } else if (_.width() < s)
                        return !0;
                o.type && (o.preventDefault(),
                t.isOpen && o.stopPropagation()),
                i.el = e(o.mfpEl),
                i.delegate && (i.items = n.find(i.delegate)),
                t.open(i)
            }
        },
        updateStatus: function(e, n) {
            if (t.preloader) {
                o !== e && t.container.removeClass("mfp-s-" + o),
                n || "loading" !== e || (n = t.st.tLoading);
                var i = {
                    status: e,
                    text: n
                };
                S("UpdateStatus", i),
                e = i.status,
                n = i.text,
                t.preloader.html(n),
                t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }),
                t.container.addClass("mfp-s-" + e),
                o = e
            }
        },
        _checkIfClose: function(o) {
            if (!e(o).hasClass(v)) {
                var n = t.st.closeOnContentClick
                  , i = t.st.closeOnBgClick;
                if (n && i)
                    return !0;
                if (!t.content || e(o).hasClass("mfp-close") || t.preloader && o === t.preloader[0])
                    return !0;
                if (o === t.content[0] || e.contains(t.content[0], o)) {
                    if (n)
                        return !0
                } else if (i && e.contains(document, o))
                    return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || _.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(o) {
            if (o.target !== t.wrap[0] && !e.contains(t.wrap[0], o.target))
                return t._setFocus(),
                !1
        },
        _parseMarkup: function(t, o, n) {
            var i;
            n.data && (o = e.extend(n.data, o)),
            S(d, [t, o, n]),
            e.each(o, function(o, n) {
                if (void 0 === n || n === !1)
                    return !0;
                if (i = o.split("_"),
                i.length > 1) {
                    var r = t.find(h + "-" + i[0]);
                    if (r.length > 0) {
                        var s = i[1];
                        "replaceWith" === s ? r[0] !== n[0] && r.replaceWith(n) : "img" === s ? r.is("img") ? r.attr("src", n) : r.replaceWith(e("<img>").attr("src", n).attr("class", r.attr("class"))) : r.attr(i[1], n)
                    }
                } else
                    t.find(h + "-" + o).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    },
    e.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function(t, o) {
            return x(),
            t = t ? e.extend(!0, {}, t) : {},
            t.isObj = !0,
            t.index = o || 0,
            this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, o) {
            o.options && (e.magnificPopup.defaults[t] = o.options),
            e.extend(this.proto, o.proto),
            this.modules.push(t)
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
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    },
    e.fn.magnificPopup = function(o) {
        x();
        var n = e(this);
        if ("string" == typeof o)
            if ("open" === o) {
                var i, r = w ? n.data("magnificPopup") : n[0].magnificPopup, s = parseInt(arguments[1], 10) || 0;
                r.items ? i = r.items[s] : (i = n,
                r.delegate && (i = i.find(r.delegate)),
                i = i.eq(s)),
                t._openClick({
                    mfpEl: i
                }, n, r)
            } else
                t.isOpen && t[o].apply(t, Array.prototype.slice.call(arguments, 1));
        else
            o = e.extend(!0, {}, o),
            w ? n.data("magnificPopup", o) : n[0].magnificPopup = o,
            t.addGroup(n, o);
        return n
    }
    ;
    var E, A, O, I = "inline", P = function() {
        O && (A.after(O.addClass(E)).detach(),
        O = null)
    };
    e.magnificPopup.registerModule(I, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(I),
                k(a + "." + I, function() {
                    P()
                })
            },
            getInline: function(o, n) {
                if (P(),
                o.src) {
                    var i = t.st.inline
                      , r = e(o.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (A || (E = i.hiddenClass,
                        A = T(E),
                        E = "mfp-" + E),
                        O = r.after(A).detach().removeClass(E)),
                        t.updateStatus("ready")
                    } else
                        t.updateStatus("error", i.tNotFound),
                        r = e("<div>");
                    return o.inlineElement = r,
                    r
                }
                return t.updateStatus("ready"),
                t._parseMarkup(n, {}, o),
                n
            }
        }
    });
    var N, L = "ajax", M = function() {
        N && e(document.body).removeClass(N)
    }, D = function() {
        M(),
        t.req && t.req.abort()
    };
    e.magnificPopup.registerModule(L, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(L),
                N = t.st.ajax.cursor,
                k(a + "." + L, D),
                k("BeforeChange." + L, D)
            },
            getAjax: function(o) {
                N && e(document.body).addClass(N),
                t.updateStatus("loading");
                var n = e.extend({
                    url: o.src,
                    success: function(n, i, r) {
                        var s = {
                            data: n,
                            xhr: r
                        };
                        S("ParseAjax", s),
                        t.appendContent(e(s.data), L),
                        o.finished = !0,
                        M(),
                        t._setFocus(),
                        setTimeout(function() {
                            t.wrap.addClass(y)
                        }, 16),
                        t.updateStatus("ready"),
                        S("AjaxContentAdded")
                    },
                    error: function() {
                        M(),
                        o.finished = o.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", o.src));
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(n),
                ""
            }
        }
    });
    var j, F = function(o) {
        if (o.data && void 0 !== o.data.title)
            return o.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n))
                return n.call(t, o);
            if (o.el)
                return o.el.attr(n) || ""
        }
        return ""
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
            initImage: function() {
                var o = t.st.image
                  , n = ".image";
                t.types.push("image"),
                k(p + n, function() {
                    "image" === t.currItem.type && o.cursor && e(document.body).addClass(o.cursor)
                }),
                k(a + n, function() {
                    o.cursor && e(document.body).removeClass(o.cursor),
                    _.off("resize" + h)
                }),
                k("Resize" + n, t.resizeImage),
                t.isLowIE && k("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var o = 0;
                    t.isLowIE && (o = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - o)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0,
                j && clearInterval(j),
                e.isCheckingImgSize = !1,
                S("ImageHasSize", e),
                e.imgHidden && (t.content && t.content.removeClass("mfp-loading"),
                e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var o = 0
                  , n = e.img[0]
                  , i = function(r) {
                    j && clearInterval(j),
                    j = setInterval(function() {
                        return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (o > 200 && clearInterval(j),
                        o++,
                        void (3 === o ? i(10) : 40 === o ? i(50) : 100 === o && i(500)))
                    }, r)
                };
                i(1)
            },
            getImage: function(o, n) {
                var i = 0
                  , r = function() {
                    o && (o.img[0].complete ? (o.img.off(".mfploader"),
                    o === t.currItem && (t._onImageHasSize(o),
                    t.updateStatus("ready")),
                    o.hasSize = !0,
                    o.loaded = !0,
                    S("ImageLoadComplete")) : (i++,
                    i < 200 ? setTimeout(r, 100) : s()))
                }
                  , s = function() {
                    o && (o.img.off(".mfploader"),
                    o === t.currItem && (t._onImageHasSize(o),
                    t.updateStatus("error", a.tError.replace("%url%", o.src))),
                    o.hasSize = !0,
                    o.loaded = !0,
                    o.loadError = !0)
                }
                  , a = t.st.image
                  , l = n.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img",
                    o.el && o.el.find("img").length && (c.alt = o.el.find("img").attr("alt")),
                    o.img = e(c).on("load.mfploader", r).on("error.mfploader", s),
                    c.src = o.src,
                    l.is("img") && (o.img = o.img.clone()),
                    c = o.img[0],
                    c.naturalWidth > 0 ? o.hasSize = !0 : c.width || (o.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: F(o),
                    img_replaceWith: o.img
                }, o),
                t.resizeImage(),
                o.hasSize ? (j && clearInterval(j),
                o.loadError ? (n.addClass("mfp-loading"),
                t.updateStatus("error", a.tError.replace("%url%", o.src))) : (n.removeClass("mfp-loading"),
                t.updateStatus("ready")),
                n) : (t.updateStatus("loading"),
                o.loading = !0,
                o.hasSize || (o.imgHidden = !0,
                n.addClass("mfp-loading"),
                t.findImageSize(o)),
                n)
            }
        }
    });
    var R, H = function() {
        return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform),
        R
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, o = t.st.zoom, n = ".zoom";
                if (o.enabled && t.supportsTransition) {
                    var i, r, s = o.duration, c = function(e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image")
                          , n = "all " + o.duration / 1e3 + "s " + o.easing
                          , i = {
                            position: "fixed",
                            zIndex: 9999,
                            left: 0,
                            top: 0,
                            "-webkit-backface-visibility": "hidden"
                        }
                          , r = "transition";
                        return i["-webkit-" + r] = i["-moz-" + r] = i["-o-" + r] = i[r] = n,
                        t.css(i),
                        t
                    }, u = function() {
                        t.content.css("visibility", "visible")
                    };
                    k("BuildControls" + n, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i),
                            t.content.css("visibility", "hidden"),
                            e = t._getItemToZoom(),
                            !e)
                                return void u();
                            r = c(e),
                            r.css(t._getOffset()),
                            t.wrap.append(r),
                            i = setTimeout(function() {
                                r.css(t._getOffset(!0)),
                                i = setTimeout(function() {
                                    u(),
                                    setTimeout(function() {
                                        r.remove(),
                                        e = r = null,
                                        S("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }),
                    k(l + n, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(i),
                            t.st.removalDelay = s,
                            !e) {
                                if (e = t._getItemToZoom(),
                                !e)
                                    return;
                                r = c(e)
                            }
                            r.css(t._getOffset(!0)),
                            t.wrap.append(r),
                            t.content.css("visibility", "hidden"),
                            setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }),
                    k(a + n, function() {
                        t._allowZoom() && (u(),
                        r && r.remove(),
                        e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return !!t.currItem.hasSize && t.currItem.img
            },
            _getOffset: function(o) {
                var n;
                n = o ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var i = n.offset()
                  , r = parseInt(n.css("padding-top"), 10)
                  , s = parseInt(n.css("padding-bottom"), 10);
                i.top -= e(window).scrollTop() - r;
                var a = {
                    width: n.width(),
                    height: (w ? n.innerHeight() : n[0].offsetHeight) - s - r
                };
                return H() ? a["-moz-transform"] = a.transform = "translate(" + i.left + "px," + i.top + "px)" : (a.left = i.left,
                a.top = i.top),
                a
            }
        }
    });
    var B = "iframe"
      , z = "//about:blank"
      , W = function(e) {
        if (t.currTemplate[B]) {
            var o = t.currTemplate[B].find("iframe");
            o.length && (e || (o[0].src = z),
            t.isIE8 && o.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(B, {
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
            initIframe: function() {
                t.types.push(B),
                k("BeforeChange", function(e, t, o) {
                    t !== o && (t === B ? W() : o === B && W(!0))
                }),
                k(a + "." + B, function() {
                    W()
                })
            },
            getIframe: function(o, n) {
                var i = o.src
                  , r = t.st.iframe;
                e.each(r.patterns, function() {
                    if (i.indexOf(this.index) > -1)
                        return this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)),
                        i = this.src.replace("%id%", i),
                        !1
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = i),
                t._parseMarkup(n, s, o),
                t.updateStatus("ready"),
                n
            }
        }
    });
    var U = function(e) {
        var o = t.items.length;
        return e > o - 1 ? e - o : e < 0 ? o + e : e
    }
      , q = function(e, t, o) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, o)
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
            initGallery: function() {
                var o = t.st.gallery
                  , i = ".mfp-gallery";
                return t.direction = !0,
                !(!o || !o.enabled) && (r += " mfp-gallery",
                k(p + i, function() {
                    o.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        if (t.items.length > 1)
                            return t.next(),
                            !1
                    }),
                    n.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }),
                k("UpdateStatus" + i, function(e, o) {
                    o.text && (o.text = q(o.text, t.currItem.index, t.items.length))
                }),
                k(d + i, function(e, n, i, r) {
                    var s = t.items.length;
                    i.counter = s > 1 ? q(o.tCounter, r.index, s) : ""
                }),
                k("BuildControls" + i, function() {
                    if (t.items.length > 1 && o.arrows && !t.arrowLeft) {
                        var n = o.arrowMarkup
                          , i = t.arrowLeft = e(n.replace(/%title%/gi, o.tPrev).replace(/%dir%/gi, "left")).addClass(v)
                          , r = t.arrowRight = e(n.replace(/%title%/gi, o.tNext).replace(/%dir%/gi, "right")).addClass(v);
                        i.click(function() {
                            t.prev()
                        }),
                        r.click(function() {
                            t.next()
                        }),
                        t.container.append(i.add(r))
                    }
                }),
                k(m + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null
                    }, 16)
                }),
                void k(a + i, function() {
                    n.off(i),
                    t.wrap.off("click" + i),
                    t.arrowRight = t.arrowLeft = null
                }))
            },
            next: function() {
                t.direction = !0,
                t.index = U(t.index + 1),
                t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1,
                t.index = U(t.index - 1),
                t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, o = t.st.gallery.preload, n = Math.min(o[0], t.items.length), i = Math.min(o[1], t.items.length);
                for (e = 1; e <= (t.direction ? i : n); e++)
                    t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? n : i); e++)
                    t._preloadItem(t.index - e)
            },
            _preloadItem: function(o) {
                if (o = U(o),
                !t.items[o].preloaded) {
                    var n = t.items[o];
                    n.parsed || (n = t.parseEl(o)),
                    S("LazyLoad", n),
                    "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        n.hasSize = !0
                    }).on("error.mfploader", function() {
                        n.hasSize = !0,
                        n.loadError = !0,
                        S("LazyLoadError", n)
                    }).attr("src", n.src)),
                    n.preloaded = !0
                }
            }
        }
    });
    var G = "retina";
    e.magnificPopup.registerModule(G, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina
                      , o = e.ratio;
                    o = isNaN(o) ? o() : o,
                    o > 1 && (k("ImageHasSize." + G, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / o,
                            width: "100%"
                        })
                    }),
                    k("ElementParse." + G, function(t, n) {
                        n.src = e.replaceSrc(n, o)
                    }))
                }
            }
        }
    }),
    x()
});
var objectFitImages = function() {
    "use strict";
    function e(e) {
        for (var t, o = getComputedStyle(e).fontFamily, n = {}; null !== (t = s.exec(o)); )
            n[t[1]] = t[2];
        return n
    }
    function t(t, n) {
        if (!t[r].parsingSrcset) {
            var i = e(t);
            if (i["object-fit"] = i["object-fit"] || "fill",
            !t[r].s) {
                if ("fill" === i["object-fit"])
                    return;
                if (!t[r].skipTest && l && !i["object-position"])
                    return
            }
            var s = t[r].ios7src || t.currentSrc || t.src;
            if (n)
                s = n;
            else if (t.srcset && !u && window.picturefill) {
                var a = window.picturefill._.ns;
                t[r].parsingSrcset = !0,
                t[a] && t[a].evaled || window.picturefill._.fillImg(t, {
                    reselect: !0
                }),
                t[a].curSrc || (t[a].supported = !1,
                window.picturefill._.fillImg(t, {
                    reselect: !0
                })),
                delete t[r].parsingSrcset,
                s = t[a].curSrc || s
            }
            if (t[r].s)
                t[r].s = s,
                n && (t[r].srcAttr = n);
            else {
                t[r] = {
                    s: s,
                    srcAttr: n || d.call(t, "src"),
                    srcsetAttr: t.srcset
                },
                t.src = r;
                try {
                    t.srcset && (t.srcset = "",
                    Object.defineProperty(t, "srcset", {
                        value: t[r].srcsetAttr
                    })),
                    o(t)
                } catch (c) {
                    t[r].ios7src = s
                }
            }
            t.style.backgroundImage = 'url("' + s + '")',
            t.style.backgroundPosition = i["object-position"] || "center",
            t.style.backgroundRepeat = "no-repeat",
            /scale-down/.test(i["object-fit"]) ? (t[r].i || (t[r].i = new Image,
            t[r].i.src = s),
            function p() {
                return t[r].i.naturalWidth ? void (t[r].i.naturalWidth > t.width || t[r].i.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto") : void setTimeout(p, 100)
            }()) : t.style.backgroundSize = i["object-fit"].replace("none", "auto").replace("fill", "100% 100%")
        }
    }
    function o(e) {
        var o = {
            get: function() {
                return e[r].s
            },
            set: function(o) {
                return delete e[r].i,
                t(e, o),
                o
            }
        };
        Object.defineProperty(e, "src", o),
        Object.defineProperty(e, "currentSrc", {
            get: o.get
        })
    }
    function n() {
        c || (HTMLImageElement.prototype.getAttribute = function(e) {
            return !this[r] || "src" !== e && "srcset" !== e ? d.call(this, e) : this[r][e + "Attr"]
        }
        ,
        HTMLImageElement.prototype.setAttribute = function(e, t) {
            !this[r] || "src" !== e && "srcset" !== e ? p.call(this, e, t) : this["src" === e ? "src" : e + "Attr"] = String(t)
        }
        )
    }
    function i(e, o) {
        var n = !m && !e;
        if (o = o || {},
        e = e || "img",
        c && !o.skipTest)
            return !1;
        "string" == typeof e ? e = document.querySelectorAll("img") : e.length || (e = [e]);
        for (var s = 0; s < e.length; s++)
            e[s][r] = e[s][r] || o,
            t(e[s]);
        n && (document.body.addEventListener("load", function(e) {
            "IMG" === e.target.tagName && i(e.target, {
                skipTest: o.skipTest
            })
        }, !0),
        m = !0,
        e = "img"),
        o.watchMQ && window.addEventListener("resize", i.bind(null, e, {
            skipTest: o.skipTest
        }))
    }
    var r = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      , s = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g
      , a = new Image
      , l = "object-fit"in a.style
      , c = "object-position"in a.style
      , u = "string" == typeof a.currentSrc
      , d = a.getAttribute
      , p = a.setAttribute
      , m = !1;
    return i.supportsObjectFit = l,
    i.supportsObjectPosition = c,
    n(),
    i
}();
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t(e, document) : "function" == typeof define && define.amd ? define([], function() {
        return t(e, document)
    }) : e.plyr = t(e, document)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function o() {
        var e, o, n, i = navigator.userAgent, r = navigator.appName, s = "" + parseFloat(navigator.appVersion), a = parseInt(navigator.appVersion, 10), l = !1, c = !1, u = !1, d = !1;
        return navigator.appVersion.indexOf("Windows NT") !== -1 && navigator.appVersion.indexOf("rv:11") !== -1 ? (l = !0,
        r = "IE",
        s = "11") : (o = i.indexOf("MSIE")) !== -1 ? (l = !0,
        r = "IE",
        s = i.substring(o + 5)) : (o = i.indexOf("Chrome")) !== -1 ? (u = !0,
        r = "Chrome",
        s = i.substring(o + 7)) : (o = i.indexOf("Safari")) !== -1 ? (d = !0,
        r = "Safari",
        s = i.substring(o + 7),
        (o = i.indexOf("Version")) !== -1 && (s = i.substring(o + 8))) : (o = i.indexOf("Firefox")) !== -1 ? (c = !0,
        r = "Firefox",
        s = i.substring(o + 8)) : (e = i.lastIndexOf(" ") + 1) < (o = i.lastIndexOf("/")) && (r = i.substring(e, o),
        s = i.substring(o + 1),
        r.toLowerCase() === r.toUpperCase() && (r = navigator.appName)),
        (n = s.indexOf(";")) !== -1 && (s = s.substring(0, n)),
        (n = s.indexOf(" ")) !== -1 && (s = s.substring(0, n)),
        a = parseInt("" + s, 10),
        isNaN(a) && (s = "" + parseFloat(navigator.appVersion),
        a = parseInt(navigator.appVersion, 10)),
        {
            name: r,
            version: a,
            isIE: l,
            isFirefox: c,
            isChrome: u,
            isSafari: d,
            isIos: /(iPad|iPhone|iPod)/g.test(navigator.platform),
            isIphone: /(iPhone|iPod)/g.test(navigator.userAgent),
            isTouch: "ontouchstart"in t.documentElement
        }
    }
    function n(e, t) {
        var o = e.media;
        if ("video" === e.type)
            switch (t) {
            case "video/webm":
                return !(!o.canPlayType || !o.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ""));
            case "video/mp4":
                return !(!o.canPlayType || !o.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ""));
            case "video/ogg":
                return !(!o.canPlayType || !o.canPlayType('video/ogg; codecs="theora"').replace(/no/, ""))
            }
        else if ("audio" === e.type)
            switch (t) {
            case "audio/mpeg":
                return !(!o.canPlayType || !o.canPlayType("audio/mpeg;").replace(/no/, ""));
            case "audio/ogg":
                return !(!o.canPlayType || !o.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ""));
            case "audio/wav":
                return !(!o.canPlayType || !o.canPlayType('audio/wav; codecs="1"').replace(/no/, ""))
            }
        return !1
    }
    function i(e) {
        if (!t.querySelectorAll('script[src="' + e + '"]').length) {
            var o = t.createElement("script");
            o.src = e;
            var n = t.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(o, n)
        }
    }
    function r(e, t) {
        return Array.prototype.indexOf && e.indexOf(t) !== -1
    }
    function s(e, t, o) {
        return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1"),"g"), o)
    }
    function a(e, t) {
        e.length || (e = [e]);
        for (var o = e.length - 1; o >= 0; o--) {
            var n = o > 0 ? t.cloneNode(!0) : t
              , i = e[o]
              , r = i.parentNode
              , s = i.nextSibling;
            return n.appendChild(i),
            s ? r.insertBefore(n, s) : r.appendChild(n),
            n
        }
    }
    function l(e) {
        e && e.parentNode.removeChild(e)
    }
    function c(e, t) {
        e.insertBefore(t, e.firstChild)
    }
    function u(e, t) {
        for (var o in t)
            e.setAttribute(o, M["boolean"](t[o]) && t[o] ? "" : t[o])
    }
    function d(e, o, n) {
        var i = t.createElement(e);
        u(i, n),
        c(o, i)
    }
    function p(e) {
        return e.replace(".", "")
    }
    function m(e, t, o) {
        if (e)
            if (e.classList)
                e.classList[o ? "add" : "remove"](t);
            else {
                var n = (" " + e.className + " ").replace(/\s+/g, " ").replace(" " + t + " ", "");
                e.className = n + (o ? " " + t : "")
            }
    }
    function f(e, t) {
        return !!e && (e.classList ? e.classList.contains(t) : new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className))
    }
    function h(e, o) {
        var n = Element.prototype
          , i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function(e) {
            return [].indexOf.call(t.querySelectorAll(e), this) !== -1
        }
        ;
        return i.call(e, o)
    }
    function y(e, t, o, n, i) {
        o && v(e, t, function(t) {
            o.apply(e, [t])
        }, i),
        v(e, t, function(t) {
            n.apply(e, [t])
        }, i)
    }
    function g(e, t, o, n, i) {
        var r = t.split(" ");
        if (M["boolean"](i) || (i = !1),
        e instanceof NodeList)
            for (var s = 0; s < e.length; s++)
                e[s]instanceof Node && g(e[s], arguments[1], arguments[2], arguments[3]);
        else
            for (var a = 0; a < r.length; a++)
                e[n ? "addEventListener" : "removeEventListener"](r[a], o, i)
    }
    function v(e, t, o, n) {
        e && g(e, t, o, !0, n)
    }
    function b(e, t, o, n) {
        e && g(e, t, o, !1, n)
    }
    function w(e, t, o, n) {
        if (e && t) {
            M["boolean"](o) || (o = !1);
            var i = new CustomEvent(t,{
                bubbles: o,
                detail: n
            });
            e.dispatchEvent(i)
        }
    }
    function _(e, t) {
        if (e)
            return t = M["boolean"](t) ? t : !e.getAttribute("aria-pressed"),
            e.setAttribute("aria-pressed", t),
            t
    }
    function k(e, t) {
        return 0 === e || 0 === t || isNaN(e) || isNaN(t) ? 0 : (e / t * 100).toFixed(2)
    }
    function T() {
        var e = arguments;
        if (e.length) {
            if (1 === e.length)
                return e[0];
            for (var t = Array.prototype.shift.call(e), o = e.length, n = 0; n < o; n++) {
                var i = e[n];
                for (var r in i)
                    i[r] && i[r].constructor && i[r].constructor === Object ? (t[r] = t[r] || {},
                    T(t[r], i[r])) : t[r] = i[r]
            }
            return t
        }
    }
    function S(e) {
        var t = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        return e.match(t) ? RegExp.$2 : e
    }
    function C(e) {
        var t = /^.*(vimeo.com\/|video\/)(\d+).*/;
        return e.match(t) ? RegExp.$2 : e
    }
    function x() {
        var e = {
            supportsFullScreen: !1,
            isFullScreen: function() {
                return !1
            },
            requestFullScreen: function() {},
            cancelFullScreen: function() {},
            fullScreenEventName: "",
            element: null,
            prefix: ""
        }
          , o = "webkit o moz ms khtml".split(" ");
        if (M.undefined(t.cancelFullScreen))
            for (var n = 0, i = o.length; n < i; n++) {
                if (e.prefix = o[n],
                !M.undefined(t[e.prefix + "CancelFullScreen"])) {
                    e.supportsFullScreen = !0;
                    break
                }
                if (!M.undefined(t.msExitFullscreen) && t.msFullscreenEnabled) {
                    e.prefix = "ms",
                    e.supportsFullScreen = !0;
                    break
                }
            }
        else
            e.supportsFullScreen = !0;
        return e.supportsFullScreen && (e.fullScreenEventName = "ms" === e.prefix ? "MSFullscreenChange" : e.prefix + "fullscreenchange",
        e.isFullScreen = function(e) {
            switch (M.undefined(e) && (e = t.body),
            this.prefix) {
            case "":
                return t.fullscreenElement === e;
            case "moz":
                return t.mozFullScreenElement === e;
            default:
                return t[this.prefix + "FullscreenElement"] === e
            }
        }
        ,
        e.requestFullScreen = function(e) {
            return M.undefined(e) && (e = t.body),
            "" === this.prefix ? e.requestFullScreen() : e[this.prefix + ("ms" === this.prefix ? "RequestFullscreen" : "RequestFullScreen")]()
        }
        ,
        e.cancelFullScreen = function() {
            return "" === this.prefix ? t.cancelFullScreen() : t[this.prefix + ("ms" === this.prefix ? "ExitFullscreen" : "CancelFullScreen")]()
        }
        ,
        e.element = function() {
            return "" === this.prefix ? t.fullscreenElement : t[this.prefix + "FullscreenElement"]
        }
        ),
        e
    }
    function $(g, $) {
        function O(e, t, o, n) {
            w(e, t, o, T({}, n, {
                plyr: Ge
            }))
        }
        function j(t, o) {
            $.debug && e.console && (o = Array.prototype.slice.call(o),
            M.string($.logPrefix) && $.logPrefix.length && o.unshift($.logPrefix),
            console[t].apply(console, o))
        }
        function F() {
            return {
                url: $.iconUrl,
                absolute: 0 === $.iconUrl.indexOf("http") || Ke.browser.isIE && !e.svg4everybody
            }
        }
        function R() {
            var e = []
              , t = F()
              , o = (t.absolute ? "" : t.url) + "#" + $.iconPrefix;
            return r($.controls, "play-large") && e.push('<button type="button" data-plyr="play" class="plyr__play-large">', '<svg><use xlink:href="' + o + '-play" /></svg>', '<span class="plyr__sr-only">' + $.i18n.play + "</span>", "</button>"),
            e.push('<div class="plyr__controls">'),
            r($.controls, "restart") && e.push('<button type="button" data-plyr="restart">', '<svg><use xlink:href="' + o + '-restart" /></svg>', '<span class="plyr__sr-only">' + $.i18n.restart + "</span>", "</button>"),
            r($.controls, "rewind") && e.push('<button type="button" data-plyr="rewind">', '<svg><use xlink:href="' + o + '-rewind" /></svg>', '<span class="plyr__sr-only">' + $.i18n.rewind + "</span>", "</button>"),
            r($.controls, "play") && e.push('<button type="button" data-plyr="play">', '<svg><use xlink:href="' + o + '-play" /></svg>', '<span class="plyr__sr-only">' + $.i18n.play + "</span>", "</button>", '<button type="button" data-plyr="pause">', '<svg><use xlink:href="' + o + '-pause" /></svg>', '<span class="plyr__sr-only">' + $.i18n.pause + "</span>", "</button>"),
            r($.controls, "fast-forward") && e.push('<button type="button" data-plyr="fast-forward">', '<svg><use xlink:href="' + o + '-fast-forward" /></svg>', '<span class="plyr__sr-only">' + $.i18n.forward + "</span>", "</button>"),
            r($.controls, "progress") && (e.push('<span class="plyr__progress">', '<label for="seek{id}" class="plyr__sr-only">Seek</label>', '<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.1" value="0" data-plyr="seek">', '<progress class="plyr__progress--played" max="100" value="0" role="presentation"></progress>', '<progress class="plyr__progress--buffer" max="100" value="0">', "<span>0</span>% " + $.i18n.buffered, "</progress>"),
            $.tooltips.seek && e.push('<span class="plyr__tooltip">00:00</span>'),
            e.push("</span>")),
            r($.controls, "current-time") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + $.i18n.currentTime + "</span>", '<span class="plyr__time--current">00:00</span>', "</span>"),
            r($.controls, "duration") && e.push('<span class="plyr__time">', '<span class="plyr__sr-only">' + $.i18n.duration + "</span>", '<span class="plyr__time--duration">00:00</span>', "</span>"),
            r($.controls, "mute") && e.push('<button type="button" data-plyr="mute">', '<svg class="icon--muted"><use xlink:href="' + o + '-muted" /></svg>', '<svg><use xlink:href="' + o + '-volume" /></svg>', '<span class="plyr__sr-only">' + $.i18n.toggleMute + "</span>", "</button>"),
            r($.controls, "volume") && e.push('<span class="plyr__volume">', '<label for="volume{id}" class="plyr__sr-only">' + $.i18n.volume + "</label>", '<input id="volume{id}" class="plyr__volume--input" type="range" min="' + $.volumeMin + '" max="' + $.volumeMax + '" value="' + $.volume + '" data-plyr="volume">', '<progress class="plyr__volume--display" max="' + $.volumeMax + '" value="' + $.volumeMin + '" role="presentation"></progress>', "</span>"),
            r($.controls, "captions") && e.push('<button type="button" data-plyr="captions">', '<svg class="icon--captions-on"><use xlink:href="' + o + '-captions-on" /></svg>', '<svg><use xlink:href="' + o + '-captions-off" /></svg>', '<span class="plyr__sr-only">' + $.i18n.toggleCaptions + "</span>", "</button>"),
            r($.controls, "fullscreen") && e.push('<button type="button" data-plyr="fullscreen">', '<svg class="icon--exit-fullscreen"><use xlink:href="' + o + '-exit-fullscreen" /></svg>', '<svg><use xlink:href="' + o + '-enter-fullscreen" /></svg>', '<span class="plyr__sr-only">' + $.i18n.toggleFullscreen + "</span>", "</button>"),
            e.push("</div>"),
            e.join("")
        }
        function H() {
            if (Ke.supported.full && ("audio" !== Ke.type || $.fullscreen.allowAudio) && $.fullscreen.enabled) {
                var e = P.supportsFullScreen;
                e || $.fullscreen.fallback && !K() ? (Ve((e ? "Native" : "Fallback") + " fullscreen enabled"),
                e || m(Ke.container, $.classes.fullscreen.fallback, !0),
                m(Ke.container, $.classes.fullscreen.enabled, !0)) : Ve("Fullscreen not supported and fallback disabled"),
                Ke.buttons && Ke.buttons.fullscreen && _(Ke.buttons.fullscreen, !1),
                Y()
            }
        }
        function B() {
            if ("video" === Ke.type) {
                G($.selectors.captions) || Ke.videoContainer.insertAdjacentHTML("afterbegin", '<div class="' + p($.selectors.captions) + '"></div>'),
                Ke.usingTextTracks = !1,
                Ke.media.textTracks && (Ke.usingTextTracks = !0);
                for (var e, t = "", o = Ke.media.childNodes, n = 0; n < o.length; n++)
                    "track" === o[n].nodeName.toLowerCase() && (e = o[n].kind,
                    "captions" !== e && "subtitles" !== e || (t = o[n].getAttribute("src")));
                if (Ke.captionExists = !0,
                "" === t ? (Ke.captionExists = !1,
                Ve("No caption track found")) : Ve("Caption track found; URI: " + t),
                Ke.captionExists) {
                    for (var i = Ke.media.textTracks, r = 0; r < i.length; r++)
                        i[r].mode = "hidden";
                    if (U(Ke),
                    (Ke.browser.isIE && Ke.browser.version >= 10 || Ke.browser.isFirefox && Ke.browser.version >= 31) && (Ve("Detected browser with known TextTrack issues - using manual fallback"),
                    Ke.usingTextTracks = !1),
                    Ke.usingTextTracks) {
                        Ve("TextTracks supported");
                        for (var s = 0; s < i.length; s++) {
                            var a = i[s];
                            "captions" !== a.kind && "subtitles" !== a.kind || v(a, "cuechange", function() {
                                this.activeCues[0] && "text"in this.activeCues[0] ? z(this.activeCues[0].getCueAsHTML()) : z()
                            })
                        }
                    } else if (Ve("TextTracks not supported so rendering captions manually"),
                    Ke.currentCaption = "",
                    Ke.captions = [],
                    "" !== t) {
                        var l = new XMLHttpRequest;
                        l.onreadystatechange = function() {
                            if (4 === l.readyState)
                                if (200 === l.status) {
                                    var e, t = [], o = l.responseText, n = "\r\n";
                                    o.indexOf(n + n) === -1 && (n = o.indexOf("\r\r") !== -1 ? "\r" : "\n"),
                                    t = o.split(n + n);
                                    for (var i = 0; i < t.length; i++) {
                                        e = t[i],
                                        Ke.captions[i] = [];
                                        var r = e.split(n)
                                          , s = 0;
                                        r[s].indexOf(":") === -1 && (s = 1),
                                        Ke.captions[i] = [r[s], r[s + 1]]
                                    }
                                    Ke.captions.shift(),
                                    Ve("Successfully loaded the caption file via AJAX")
                                } else
                                    Ze($.logPrefix + "There was a problem loading the caption file via AJAX")
                        }
                        ,
                        l.open("get", t, !0),
                        l.send()
                    }
                } else
                    m(Ke.container, $.classes.captions.enabled)
            }
        }
        function z(e) {
            var o = G($.selectors.captions)
              , n = t.createElement("span");
            o.innerHTML = "",
            M.undefined(e) && (e = ""),
            M.string(e) ? n.innerHTML = e.trim() : n.appendChild(e),
            o.appendChild(n);
            o.offsetHeight
        }
        function W(e) {
            function t(e, t) {
                var o = [];
                o = e.split(" --> ");
                for (var n = 0; n < o.length; n++)
                    o[n] = o[n].replace(/(\d+:\d+:\d+\.\d+).*/, "$1");
                return i(o[t])
            }
            function o(e) {
                return t(e, 0)
            }
            function n(e) {
                return t(e, 1)
            }
            function i(e) {
                if (null === e || void 0 === e)
                    return 0;
                var t, o = [], n = [];
                return o = e.split(","),
                n = o[0].split(":"),
                t = Math.floor(60 * n[0] * 60) + Math.floor(60 * n[1]) + Math.floor(n[2])
            }
            if (!Ke.usingTextTracks && "video" === Ke.type && Ke.supported.full && (Ke.subcount = 0,
            e = M.number(e) ? e : Ke.media.currentTime,
            Ke.captions[Ke.subcount])) {
                for (; n(Ke.captions[Ke.subcount][0]) < e.toFixed(1); )
                    if (Ke.subcount++,
                    Ke.subcount > Ke.captions.length - 1) {
                        Ke.subcount = Ke.captions.length - 1;
                        break
                    }
                Ke.media.currentTime.toFixed(1) >= o(Ke.captions[Ke.subcount][0]) && Ke.media.currentTime.toFixed(1) <= n(Ke.captions[Ke.subcount][0]) ? (Ke.currentCaption = Ke.captions[Ke.subcount][1],
                z(Ke.currentCaption)) : z()
            }
        }
        function U() {
            if (Ke.buttons.captions) {
                m(Ke.container, $.classes.captions.enabled, !0);
                var e = Ke.storage.captionsEnabled;
                M["boolean"](e) || (e = $.captions.defaultActive),
                e && (m(Ke.container, $.classes.captions.active, !0),
                _(Ke.buttons.captions, !0))
            }
        }
        function q(e) {
            return Ke.container.querySelectorAll(e)
        }
        function G(e) {
            return q(e)[0]
        }
        function K() {
            try {
                return e.self !== e.top
            } catch (t) {
                return !0
            }
        }
        function Y() {
            function e(e) {
                9 === e.which && Ke.isFullscreen && (e.target !== n || e.shiftKey ? e.target === o && e.shiftKey && (e.preventDefault(),
                n.focus()) : (e.preventDefault(),
                o.focus()))
            }
            var t = q("input:not([disabled]), button:not([disabled])")
              , o = t[0]
              , n = t[t.length - 1];
            v(Ke.container, "keydown", e)
        }
        function X(e, t) {
            if (M.string(t))
                d(e, Ke.media, {
                    src: t
                });
            else if (t.constructor === Array)
                for (var o = t.length - 1; o >= 0; o--)
                    d(e, Ke.media, t[o])
        }
        function V() {
            if ($.loadSprite) {
                var e = F();
                e.absolute ? (Ve("AJAX loading absolute SVG sprite" + (Ke.browser.isIE ? " (due to IE)" : "")),
                E(e.url, "sprite-plyr")) : Ve("Sprite will be used as external resource directly")
            }
            var o = $.html;
            Ve("Injecting custom controls"),
            o || (o = R()),
            o = s(o, "{seektime}", $.seekTime),
            o = s(o, "{id}", Math.floor(1e4 * Math.random())),
            $.title && (o = s(o, "{title}", $.title));
            var n;
            if (M.string($.selectors.controls.container) && (n = t.querySelector($.selectors.controls.container)),
            M.htmlElement(n) || (n = Ke.container),
            n.insertAdjacentHTML("beforeend", o),
            $.tooltips.controls)
                for (var i = q([$.selectors.controls.wrapper, " ", $.selectors.labels, " .", $.classes.hidden].join("")), r = i.length - 1; r >= 0; r--) {
                    var a = i[r];
                    m(a, $.classes.hidden, !1),
                    m(a, $.classes.tooltip, !0)
                }
        }
        function Z() {
            try {
                return Ke.controls = G($.selectors.controls.wrapper),
                Ke.buttons = {},
                Ke.buttons.seek = G($.selectors.buttons.seek),
                Ke.buttons.play = q($.selectors.buttons.play),
                Ke.buttons.pause = G($.selectors.buttons.pause),
                Ke.buttons.restart = G($.selectors.buttons.restart),
                Ke.buttons.rewind = G($.selectors.buttons.rewind),
                Ke.buttons.forward = G($.selectors.buttons.forward),
                Ke.buttons.fullscreen = G($.selectors.buttons.fullscreen),
                Ke.buttons.mute = G($.selectors.buttons.mute),
                Ke.buttons.captions = G($.selectors.buttons.captions),
                Ke.progress = {},
                Ke.progress.container = G($.selectors.progress.container),
                Ke.progress.buffer = {},
                Ke.progress.buffer.bar = G($.selectors.progress.buffer),
                Ke.progress.buffer.text = Ke.progress.buffer.bar && Ke.progress.buffer.bar.getElementsByTagName("span")[0],
                Ke.progress.played = G($.selectors.progress.played),
                Ke.progress.tooltip = Ke.progress.container && Ke.progress.container.querySelector("." + $.classes.tooltip),
                Ke.volume = {},
                Ke.volume.input = G($.selectors.volume.input),
                Ke.volume.display = G($.selectors.volume.display),
                Ke.duration = G($.selectors.duration),
                Ke.currentTime = G($.selectors.currentTime),
                Ke.seekTime = q($.selectors.seekTime),
                !0
            } catch (e) {
                return Ze("It looks like there is a problem with your controls HTML"),
                J(!0),
                !1
            }
        }
        function Q() {
            m(Ke.container, $.selectors.container.replace(".", ""), Ke.supported.full)
        }
        function J(e) {
            e && r($.types.html5, Ke.type) ? Ke.media.setAttribute("controls", "") : Ke.media.removeAttribute("controls")
        }
        function ee(e) {
            var t = $.i18n.play;
            if (M.string($.title) && $.title.length && (t += ", " + $.title,
            Ke.container.setAttribute("aria-label", $.title)),
            Ke.supported.full && Ke.buttons.play)
                for (var o = Ke.buttons.play.length - 1; o >= 0; o--)
                    Ke.buttons.play[o].setAttribute("aria-label", t);
            M.htmlElement(e) && e.setAttribute("title", $.i18n.frameTitle.replace("{title}", $.title))
        }
        function te() {
            var t = null;
            Ke.storage = {},
            D.supported && $.storage.enabled && (e.localStorage.removeItem("plyr-volume"),
            t = e.localStorage.getItem($.storage.key),
            t && (/^\d+(\.\d+)?$/.test(t) ? oe({
                volume: parseFloat(t)
            }) : Ke.storage = JSON.parse(t)))
        }
        function oe(t) {
            D.supported && $.storage.enabled && (T(Ke.storage, t),
            e.localStorage.setItem($.storage.key, JSON.stringify(Ke.storage)))
        }
        function ne() {
            if (!Ke.media)
                return void Ze("No media element found!");
            if (Ke.supported.full && (m(Ke.container, $.classes.type.replace("{0}", Ke.type), !0),
            r($.types.embed, Ke.type) && m(Ke.container, $.classes.type.replace("{0}", "video"), !0),
            m(Ke.container, $.classes.stopped, $.autoplay),
            m(Ke.container, $.classes.isIos, Ke.browser.isIos),
            m(Ke.container, $.classes.isTouch, Ke.browser.isTouch),
            "video" === Ke.type)) {
                var e = t.createElement("div");
                e.setAttribute("class", $.classes.videoWrapper),
                a(Ke.media, e),
                Ke.videoContainer = e
            }
            r($.types.embed, Ke.type) && ie()
        }
        function ie() {
            var o, n = t.createElement("div"), r = Ke.type + "-" + Math.floor(1e4 * Math.random());
            switch (Ke.type) {
            case "youtube":
                o = S(Ke.embedId);
                break;
            case "vimeo":
                o = C(Ke.embedId);
                break;
            default:
                o = Ke.embedId
            }
            for (var s = q('[id^="' + Ke.type + '-"]'), a = s.length - 1; a >= 0; a--)
                l(s[a]);
            if (m(Ke.media, $.classes.videoWrapper, !0),
            m(Ke.media, $.classes.embedWrapper, !0),
            "youtube" === Ke.type)
                Ke.media.appendChild(n),
                n.setAttribute("id", r),
                M.object(e.YT) ? se(o, n) : (i($.urls.youtube.api),
                e.onYouTubeReadyCallbacks = e.onYouTubeReadyCallbacks || [],
                e.onYouTubeReadyCallbacks.push(function() {
                    se(o, n)
                }),
                e.onYouTubeIframeAPIReady = function() {
                    e.onYouTubeReadyCallbacks.forEach(function(e) {
                        e()
                    })
                }
                );
            else if ("vimeo" === Ke.type)
                if (Ke.supported.full ? Ke.media.appendChild(n) : n = Ke.media,
                n.setAttribute("id", r),
                M.object(e.Vimeo))
                    ae(o, n);
                else {
                    i($.urls.vimeo.api);
                    var c = e.setInterval(function() {
                        M.object(e.Vimeo) && (e.clearInterval(c),
                        ae(o, n))
                    }, 50)
                }
            else if ("soundcloud" === Ke.type) {
                var d = t.createElement("iframe");
                d.loaded = !1,
                v(d, "load", function() {
                    d.loaded = !0
                }),
                u(d, {
                    src: "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + o,
                    id: r
                }),
                n.appendChild(d),
                Ke.media.appendChild(n),
                e.SC || i($.urls.soundcloud.api);
                var p = e.setInterval(function() {
                    e.SC && d.loaded && (e.clearInterval(p),
                    le.call(d))
                }, 50)
            }
        }
        function re() {
            Ke.supported.full && (Ue(),
            qe()),
            ee(G("iframe"))
        }
        function se(t, o) {
            Ke.embed = new e.YT.Player(o.id,{
                videoId: t,
                playerVars: {
                    autoplay: $.autoplay ? 1 : 0,
                    controls: Ke.supported.full ? 0 : 1,
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    cc_load_policy: $.captions.defaultActive ? 1 : 0,
                    cc_lang_pref: "en",
                    wmode: "transparent",
                    modestbranding: 1,
                    disablekb: 1,
                    origin: "*"
                },
                events: {
                    onError: function(e) {
                        O(Ke.container, "error", !0, {
                            code: e.data,
                            embed: e.target
                        })
                    },
                    onReady: function(t) {
                        var o = t.target;
                        Ke.media.play = function() {
                            o.playVideo(),
                            Ke.media.paused = !1
                        }
                        ,
                        Ke.media.pause = function() {
                            o.pauseVideo(),
                            Ke.media.paused = !0
                        }
                        ,
                        Ke.media.stop = function() {
                            o.stopVideo(),
                            Ke.media.paused = !0
                        }
                        ,
                        Ke.media.duration = o.getDuration(),
                        Ke.media.paused = !0,
                        Ke.media.currentTime = 0,
                        Ke.media.muted = o.isMuted(),
                        "function" == typeof o.getVideoData && ($.title = o.getVideoData().title),
                        Ke.supported.full && Ke.media.querySelector("iframe").setAttribute("tabindex", "-1"),
                        re(),
                        O(Ke.media, "timeupdate"),
                        O(Ke.media, "durationchange"),
                        e.clearInterval(Ye.buffering),
                        Ye.buffering = e.setInterval(function() {
                            Ke.media.buffered = o.getVideoLoadedFraction(),
                            (null === Ke.media.lastBuffered || Ke.media.lastBuffered < Ke.media.buffered) && O(Ke.media, "progress"),
                            Ke.media.lastBuffered = Ke.media.buffered,
                            1 === Ke.media.buffered && (e.clearInterval(Ye.buffering),
                            O(Ke.media, "canplaythrough"))
                        }, 200)
                    },
                    onStateChange: function(t) {
                        var o = t.target;
                        switch (e.clearInterval(Ye.playing),
                        t.data) {
                        case 0:
                            Ke.media.paused = !0,
                            O(Ke.media, "ended");
                            break;
                        case 1:
                            Ke.media.paused = !1,
                            Ke.media.seeking && O(Ke.media, "seeked"),
                            Ke.media.seeking = !1,
                            O(Ke.media, "play"),
                            O(Ke.media, "playing"),
                            Ye.playing = e.setInterval(function() {
                                Ke.media.currentTime = o.getCurrentTime(),
                                O(Ke.media, "timeupdate")
                            }, 100),
                            Ke.media.duration !== o.getDuration() && (Ke.media.duration = o.getDuration(),
                            O(Ke.media, "durationchange"));
                            break;
                        case 2:
                            Ke.media.paused = !0,
                            O(Ke.media, "pause")
                        }
                        O(Ke.container, "statechange", !1, {
                            code: t.data
                        })
                    }
                }
            })
        }
        function ae(o, n) {
            function i(e) {
                return Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&")
            }
            var r = {
                loop: $.loop,
                autoplay: $.autoplay,
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: 0
            }
              , s = i(r)
              , a = t.createElement("iframe")
              , l = "https://player.vimeo.com/video/" + o + "?" + s;
            a.setAttribute("src", l),
            a.setAttribute("allowfullscreen", ""),
            n.appendChild(a),
            Ke.embed = new e.Vimeo.Player(a),
            Ke.media.play = function() {
                Ke.embed.play(),
                Ke.media.paused = !1
            }
            ,
            Ke.media.pause = function() {
                Ke.embed.pause(),
                Ke.media.paused = !0
            }
            ,
            Ke.media.stop = function() {
                Ke.embed.stop(),
                Ke.media.paused = !0
            }
            ,
            Ke.media.paused = !0,
            Ke.media.currentTime = 0,
            re(),
            Ke.embed.getCurrentTime().then(function(e) {
                Ke.media.currentTime = e,
                O(Ke.media, "timeupdate")
            }),
            Ke.embed.getDuration().then(function(e) {
                Ke.media.duration = e,
                O(Ke.media, "durationchange")
            }),
            Ke.embed.on("loaded", function() {
                M.htmlElement(Ke.embed.element) && Ke.supported.full && Ke.embed.element.setAttribute("tabindex", "-1")
            }),
            Ke.embed.on("play", function() {
                Ke.media.paused = !1,
                O(Ke.media, "play"),
                O(Ke.media, "playing")
            }),
            Ke.embed.on("pause", function() {
                Ke.media.paused = !0,
                O(Ke.media, "pause")
            }),
            Ke.embed.on("timeupdate", function(e) {
                Ke.media.seeking = !1,
                Ke.media.currentTime = e.seconds,
                O(Ke.media, "timeupdate")
            }),
            Ke.embed.on("progress", function(e) {
                Ke.media.buffered = e.percent,
                O(Ke.media, "progress"),
                1 === parseInt(e.percent) && O(Ke.media, "canplaythrough")
            }),
            Ke.embed.on("seeked", function() {
                Ke.media.seeking = !1,
                O(Ke.media, "seeked"),
                O(Ke.media, "play")
            }),
            Ke.embed.on("ended", function() {
                Ke.media.paused = !0,
                O(Ke.media, "ended")
            })
        }
        function le() {
            Ke.embed = e.SC.Widget(this),
            Ke.embed.bind(e.SC.Widget.Events.READY, function() {
                Ke.media.play = function() {
                    Ke.embed.play(),
                    Ke.media.paused = !1
                }
                ,
                Ke.media.pause = function() {
                    Ke.embed.pause(),
                    Ke.media.paused = !0
                }
                ,
                Ke.media.stop = function() {
                    Ke.embed.seekTo(0),
                    Ke.embed.pause(),
                    Ke.media.paused = !0
                }
                ,
                Ke.media.paused = !0,
                Ke.media.currentTime = 0,
                Ke.embed.getDuration(function(e) {
                    Ke.media.duration = e / 1e3,
                    re()
                }),
                Ke.embed.getPosition(function(e) {
                    Ke.media.currentTime = e,
                    O(Ke.media, "timeupdate")
                }),
                Ke.embed.bind(e.SC.Widget.Events.PLAY, function() {
                    Ke.media.paused = !1,
                    O(Ke.media, "play"),
                    O(Ke.media, "playing")
                }),
                Ke.embed.bind(e.SC.Widget.Events.PAUSE, function() {
                    Ke.media.paused = !0,
                    O(Ke.media, "pause")
                }),
                Ke.embed.bind(e.SC.Widget.Events.PLAY_PROGRESS, function(e) {
                    Ke.media.seeking = !1,
                    Ke.media.currentTime = e.currentPosition / 1e3,
                    O(Ke.media, "timeupdate")
                }),
                Ke.embed.bind(e.SC.Widget.Events.LOAD_PROGRESS, function(e) {
                    Ke.media.buffered = e.loadProgress,
                    O(Ke.media, "progress"),
                    1 === parseInt(e.loadProgress) && O(Ke.media, "canplaythrough")
                }),
                Ke.embed.bind(e.SC.Widget.Events.FINISH, function() {
                    Ke.media.paused = !0,
                    O(Ke.media, "ended")
                })
            })
        }
        function ce() {
            "play"in Ke.media && Ke.media.play()
        }
        function ue() {
            "pause"in Ke.media && Ke.media.pause()
        }
        function de(e) {
            return M["boolean"](e) || (e = Ke.media.paused),
            e ? ce() : ue(),
            e
        }
        function pe(e) {
            M.number(e) || (e = $.seekTime),
            fe(Ke.media.currentTime - e)
        }
        function me(e) {
            M.number(e) || (e = $.seekTime),
            fe(Ke.media.currentTime + e)
        }
        function fe(e) {
            var t = 0
              , o = Ke.media.paused
              , n = he();
            M.number(e) ? t = e : M.object(e) && r(["input", "change"], e.type) && (t = e.target.value / e.target.max * n),
            t < 0 ? t = 0 : t > n && (t = n),
            Pe(t);
            try {
                Ke.media.currentTime = t.toFixed(4)
            } catch (i) {}
            if (r($.types.embed, Ke.type)) {
                switch (Ke.type) {
                case "youtube":
                    Ke.embed.seekTo(t);
                    break;
                case "vimeo":
                    Ke.embed.setCurrentTime(t.toFixed(0));
                    break;
                case "soundcloud":
                    Ke.embed.seekTo(1e3 * t)
                }
                o && ue(),
                O(Ke.media, "timeupdate"),
                Ke.media.seeking = !0,
                O(Ke.media, "seeking")
            }
            Ve("Seeking to " + Ke.media.currentTime + " seconds"),
            W(t)
        }
        function he() {
            var e = parseInt($.duration)
              , t = 0;
            return null === Ke.media.duration || isNaN(Ke.media.duration) || (t = Ke.media.duration),
            isNaN(e) ? t : e
        }
        function ye() {
            m(Ke.container, $.classes.playing, !Ke.media.paused),
            m(Ke.container, $.classes.stopped, Ke.media.paused),
            Le(Ke.media.paused)
        }
        function ge() {
            N = {
                x: e.pageXOffset || 0,
                y: e.pageYOffset || 0
            }
        }
        function ve() {
            e.scrollTo(N.x, N.y)
        }
        function be(e) {
            var o = P.supportsFullScreen;
            if (o) {
                if (!e || e.type !== P.fullScreenEventName)
                    return P.isFullScreen(Ke.container) ? P.cancelFullScreen() : (ge(),
                    P.requestFullScreen(Ke.container)),
                    void (Ke.isFullscreen = P.isFullScreen(Ke.container));
                Ke.isFullscreen = P.isFullScreen(Ke.container)
            } else
                Ke.isFullscreen = !Ke.isFullscreen,
                t.body.style.overflow = Ke.isFullscreen ? "hidden" : "";
            m(Ke.container, $.classes.fullscreen.active, Ke.isFullscreen),
            Y(Ke.isFullscreen),
            Ke.buttons && Ke.buttons.fullscreen && _(Ke.buttons.fullscreen, Ke.isFullscreen),
            O(Ke.container, Ke.isFullscreen ? "enterfullscreen" : "exitfullscreen", !0),
            !Ke.isFullscreen && o && ve()
        }
        function we(e) {
            if (M["boolean"](e) || (e = !Ke.media.muted),
            _(Ke.buttons.mute, e),
            Ke.media.muted = e,
            0 === Ke.media.volume && _e($.volume),
            r($.types.embed, Ke.type)) {
                switch (Ke.type) {
                case "youtube":
                    Ke.embed[Ke.media.muted ? "mute" : "unMute"]();
                    break;
                case "vimeo":
                case "soundcloud":
                    Ke.embed.setVolume(Ke.media.muted ? 0 : parseFloat($.volume / $.volumeMax))
                }
                O(Ke.media, "volumechange")
            }
        }
        function _e(e) {
            var t = $.volumeMax
              , o = $.volumeMin;
            if (M.undefined(e) && (e = Ke.storage.volume),
            (null === e || isNaN(e)) && (e = $.volume),
            e > t && (e = t),
            e < o && (e = o),
            Ke.media.volume = parseFloat(e / t),
            Ke.volume.display && (Ke.volume.display.value = e),
            r($.types.embed, Ke.type)) {
                switch (Ke.type) {
                case "youtube":
                    Ke.embed.setVolume(100 * Ke.media.volume);
                    break;
                case "vimeo":
                case "soundcloud":
                    Ke.embed.setVolume(Ke.media.volume)
                }
                O(Ke.media, "volumechange")
            }
            0 === e ? Ke.media.muted = !0 : Ke.media.muted && e > 0 && we()
        }
        function ke(e) {
            var t = Ke.media.muted ? 0 : Ke.media.volume * $.volumeMax;
            M.number(e) || (e = $.volumeStep),
            _e(t + e)
        }
        function Te(e) {
            var t = Ke.media.muted ? 0 : Ke.media.volume * $.volumeMax;
            M.number(e) || (e = $.volumeStep),
            _e(t - e)
        }
        function Se() {
            var e = Ke.media.muted ? 0 : Ke.media.volume * $.volumeMax;
            Ke.supported.full && (Ke.volume.input && (Ke.volume.input.value = e),
            Ke.volume.display && (Ke.volume.display.value = e)),
            oe({
                volume: e
            }),
            m(Ke.container, $.classes.muted, 0 === e),
            Ke.supported.full && Ke.buttons.mute && _(Ke.buttons.mute, 0 === e)
        }
        function Ce(e) {
            Ke.supported.full && Ke.buttons.captions && (M["boolean"](e) || (e = Ke.container.className.indexOf($.classes.captions.active) === -1),
            Ke.captionsEnabled = e,
            _(Ke.buttons.captions, Ke.captionsEnabled),
            m(Ke.container, $.classes.captions.active, Ke.captionsEnabled),
            O(Ke.container, Ke.captionsEnabled ? "captionsenabled" : "captionsdisabled", !0),
            oe({
                captionsEnabled: Ke.captionsEnabled
            }))
        }
        function xe(e) {
            var t = "waiting" === e.type;
            clearTimeout(Ye.loading),
            Ye.loading = setTimeout(function() {
                m(Ke.container, $.classes.loading, t),
                Le(t)
            }, t ? 250 : 0)
        }
        function $e(e) {
            if (Ke.supported.full) {
                var t = Ke.progress.played
                  , o = 0
                  , n = he();
                if (e)
                    switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                        if (Ke.controls.pressed)
                            return;
                        o = k(Ke.media.currentTime, n),
                        "timeupdate" === e.type && Ke.buttons.seek && (Ke.buttons.seek.value = o);
                        break;
                    case "playing":
                    case "progress":
                        t = Ke.progress.buffer,
                        o = function() {
                            var e = Ke.media.buffered;
                            return e && e.length ? k(e.end(0), n) : M.number(e) ? 100 * e : 0
                        }()
                    }
                Ee(t, o)
            }
        }
        function Ee(e, t) {
            if (Ke.supported.full) {
                if (M.undefined(t) && (t = 0),
                M.undefined(e)) {
                    if (!Ke.progress || !Ke.progress.buffer)
                        return;
                    e = Ke.progress.buffer
                }
                M.htmlElement(e) ? e.value = t : e && (e.bar && (e.bar.value = t),
                e.text && (e.text.innerHTML = t))
            }
        }
        function Ae(e, t) {
            if (t) {
                isNaN(e) && (e = 0),
                Ke.secs = parseInt(e % 60),
                Ke.mins = parseInt(e / 60 % 60),
                Ke.hours = parseInt(e / 60 / 60 % 60);
                var o = parseInt(he() / 60 / 60 % 60) > 0;
                Ke.secs = ("0" + Ke.secs).slice(-2),
                Ke.mins = ("0" + Ke.mins).slice(-2),
                t.innerHTML = (o ? Ke.hours + ":" : "") + Ke.mins + ":" + Ke.secs
            }
        }
        function Oe() {
            if (Ke.supported.full) {
                var e = he() || 0;
                !Ke.duration && $.displayDuration && Ke.media.paused && Ae(e, Ke.currentTime),
                Ke.duration && Ae(e, Ke.duration),
                Ne()
            }
        }
        function Ie(e) {
            Ae(Ke.media.currentTime, Ke.currentTime),
            e && "timeupdate" === e.type && Ke.media.seeking || $e(e)
        }
        function Pe(e) {
            M.number(e) || (e = 0);
            var t = he()
              , o = k(e, t);
            Ke.progress && Ke.progress.played && (Ke.progress.played.value = o),
            Ke.buttons && Ke.buttons.seek && (Ke.buttons.seek.value = o)
        }
        function Ne(e) {
            var t = he();
            if ($.tooltips.seek && Ke.progress.container && 0 !== t) {
                var o = Ke.progress.container.getBoundingClientRect()
                  , n = 0
                  , i = $.classes.tooltip + "--visible";
                if (e)
                    n = 100 / o.width * (e.pageX - o.left);
                else {
                    if (!f(Ke.progress.tooltip, i))
                        return;
                    n = Ke.progress.tooltip.style.left.replace("%", "")
                }
                n < 0 ? n = 0 : n > 100 && (n = 100),
                Ae(t / 100 * n, Ke.progress.tooltip),
                Ke.progress.tooltip.style.left = n + "%",
                e && r(["mouseenter", "mouseleave"], e.type) && m(Ke.progress.tooltip, i, "mouseenter" === e.type)
            }
        }
        function Le(t) {
            if ($.hideControls && "audio" !== Ke.type) {
                var o = 0
                  , n = !1
                  , i = t
                  , s = f(Ke.container, $.classes.loading);
                if (M["boolean"](t) || (t && t.type ? (n = "enterfullscreen" === t.type,
                i = r(["mousemove", "touchstart", "mouseenter", "focus"], t.type),
                r(["mousemove", "touchmove"], t.type) && (o = 2e3),
                "focus" === t.type && (o = 3e3)) : i = f(Ke.container, $.classes.hideControls)),
                e.clearTimeout(Ye.hover),
                i || Ke.media.paused || s) {
                    if (m(Ke.container, $.classes.hideControls, !1),
                    Ke.media.paused || s)
                        return;
                    Ke.browser.isTouch && (o = 3e3)
                }
                i && Ke.media.paused || (Ye.hover = e.setTimeout(function() {
                    (!Ke.controls.pressed && !Ke.controls.hover || n) && m(Ke.container, $.classes.hideControls, !0)
                }, o))
            }
        }
        function Me(e) {
            if (!M.undefined(e))
                return void De(e);
            var t;
            switch (Ke.type) {
            case "youtube":
                t = Ke.embed.getVideoUrl();
                break;
            case "vimeo":
                Ke.embed.getVideoUrl.then(function(e) {
                    t = e
                });
                break;
            case "soundcloud":
                Ke.embed.getCurrentSound(function(e) {
                    t = e.permalink_url
                });
                break;
            default:
                t = Ke.media.currentSrc
            }
            return t || ""
        }
        function De(e) {
            function o() {
                if (Ke.embed = null,
                l(Ke.media),
                "video" === Ke.type && Ke.videoContainer && l(Ke.videoContainer),
                Ke.container && Ke.container.removeAttribute("class"),
                "type"in e && (Ke.type = e.type,
                "video" === Ke.type)) {
                    var o = e.sources[0];
                    "type"in o && r($.types.embed, o.type) && (Ke.type = o.type)
                }
                switch (Ke.supported = A(Ke.type),
                Ke.type) {
                case "video":
                    Ke.media = t.createElement("video");
                    break;
                case "audio":
                    Ke.media = t.createElement("audio");
                    break;
                case "youtube":
                case "vimeo":
                case "soundcloud":
                    Ke.media = t.createElement("div"),
                    Ke.embedId = e.sources[0].src
                }
                c(Ke.container, Ke.media),
                M["boolean"](e.autoplay) && ($.autoplay = e.autoplay),
                r($.types.html5, Ke.type) && ($.crossorigin && Ke.media.setAttribute("crossorigin", ""),
                $.autoplay && Ke.media.setAttribute("autoplay", ""),
                "poster"in e && Ke.media.setAttribute("poster", e.poster),
                $.loop && Ke.media.setAttribute("loop", "")),
                m(Ke.container, $.classes.fullscreen.active, Ke.isFullscreen),
                m(Ke.container, $.classes.captions.active, Ke.captionsEnabled),
                Q(),
                r($.types.html5, Ke.type) && X("source", e.sources),
                ne(),
                r($.types.html5, Ke.type) && ("tracks"in e && X("track", e.tracks),
                Ke.media.load()),
                (r($.types.html5, Ke.type) || r($.types.embed, Ke.type) && !Ke.supported.full) && (Ue(),
                qe()),
                $.title = e.title,
                ee()
            }
            return M.object(e) && "sources"in e && e.sources.length ? (m(Ke.container, $.classes.ready, !1),
            ue(),
            Pe(),
            Ee(),
            Be(),
            void ze(o, !1)) : void Ze("Invalid source format")
        }
        function je(e) {
            "video" === Ke.type && Ke.media.setAttribute("poster", e)
        }
        function Fe() {
            m(G("." + $.classes.tabFocus), $.classes.tabFocus, !1)
        }
        function Re() {
            function o() {
                var e = de()
                  , t = Ke.buttons[e ? "play" : "pause"]
                  , o = Ke.buttons[e ? "pause" : "play"];
                if (o && (o = o.length > 1 ? o[o.length - 1] : o[0]),
                o) {
                    var n = f(t, $.classes.tabFocus);
                    setTimeout(function() {
                        o.focus(),
                        n && (m(t, $.classes.tabFocus, !1),
                        m(o, $.classes.tabFocus, !0))
                    }, 100)
                }
            }
            function n() {
                var e = t.activeElement;
                return e = e && e !== t.body ? t.querySelector(":focus") : null
            }
            function i(e) {
                return e.keyCode ? e.keyCode : e.which
            }
            function s(e) {
                for (var t in Ke.buttons) {
                    var o = Ke.buttons[t];
                    if (M.nodeList(o))
                        for (var n = 0; n < o.length; n++)
                            m(o[n], $.classes.tabFocus, o[n] === e);
                    else
                        m(o, $.classes.tabFocus, o === e)
                }
            }
            function a(e) {
                function t() {
                    var e = Ke.media.duration;
                    M.number(e) && fe(e / 10 * (o - 48))
                }
                var o = i(e)
                  , n = "keydown" === e.type
                  , s = n && o === c;
                if (M.number(o))
                    if (n) {
                        var a = [48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67];
                        switch (r(a, o) && (e.preventDefault(),
                        e.stopPropagation()),
                        o) {
                        case 48:
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            s || t();
                            break;
                        case 32:
                        case 75:
                            s || de();
                            break;
                        case 38:
                            ke();
                            break;
                        case 40:
                            Te();
                            break;
                        case 77:
                            s || we();
                            break;
                        case 39:
                            me();
                            break;
                        case 37:
                            pe();
                            break;
                        case 70:
                            be();
                            break;
                        case 67:
                            s || Ce()
                        }
                        !P.supportsFullScreen && Ke.isFullscreen && 27 === o && be(),
                        c = o
                    } else
                        c = null
            }
            var l = Ke.browser.isIE ? "change" : "input";
            if ($.keyboardShorcuts.focused) {
                var c = null;
                $.keyboardShorcuts.global && v(e, "keydown keyup", function(e) {
                    var t = i(e)
                      , o = n()
                      , s = [48, 49, 50, 51, 52, 53, 54, 56, 57, 75, 77, 70, 67]
                      , l = I().length;
                    1 !== l || !r(s, t) || M.htmlElement(o) && h(o, $.selectors.editable) || a(e)
                }),
                v(Ke.container, "keydown keyup", a)
            }
            v(e, "keyup", function(e) {
                var t = i(e)
                  , o = n();
                9 === t && s(o)
            }),
            v(t.body, "click", Fe);
            for (var u in Ke.buttons) {
                var d = Ke.buttons[u];
                v(d, "blur", function() {
                    m(d, "tab-focus", !1)
                })
            }
            y(Ke.buttons.play, "click", $.listeners.play, o),
            y(Ke.buttons.pause, "click", $.listeners.pause, o),
            y(Ke.buttons.restart, "click", $.listeners.restart, fe),
            y(Ke.buttons.rewind, "click", $.listeners.rewind, pe),
            y(Ke.buttons.forward, "click", $.listeners.forward, me),
            y(Ke.buttons.seek, l, $.listeners.seek, fe),
            y(Ke.volume.input, l, $.listeners.volume, function() {
                _e(Ke.volume.input.value)
            }),
            y(Ke.buttons.mute, "click", $.listeners.mute, we),
            y(Ke.buttons.fullscreen, "click", $.listeners.fullscreen, be),
            P.supportsFullScreen && v(t, P.fullScreenEventName, be),
            y(Ke.buttons.captions, "click", $.listeners.captions, Ce),
            v(Ke.progress.container, "mouseenter mouseleave mousemove", Ne),
            $.hideControls && (v(Ke.container, "mouseenter mouseleave mousemove touchstart touchend touchcancel touchmove enterfullscreen", Le),
            v(Ke.controls, "mouseenter mouseleave", function(e) {
                Ke.controls.hover = "mouseenter" === e.type
            }),
            v(Ke.controls, "mousedown mouseup touchstart touchend touchcancel", function(e) {
                Ke.controls.pressed = r(["mousedown", "touchstart"], e.type)
            }),
            v(Ke.controls, "focus blur", Le, !0)),
            v(Ke.volume.input, "wheel", function(e) {
                e.preventDefault();
                var t = e.webkitDirectionInvertedFromDevice
                  , o = $.volumeStep / 5;
                (e.deltaY < 0 || e.deltaX > 0) && (t ? Te(o) : ke(o)),
                (e.deltaY > 0 || e.deltaX < 0) && (t ? ke(o) : Te(o))
            })
        }
        function He() {
            if (v(Ke.media, "timeupdate seeking", Ie),
            v(Ke.media, "timeupdate", W),
            v(Ke.media, "durationchange loadedmetadata", Oe),
            v(Ke.media, "ended", function() {
                "video" === Ke.type && $.showPosterOnEnd && ("video" === Ke.type && z(),
                fe(),
                Ke.media.load())
            }),
            v(Ke.media, "progress playing", $e),
            v(Ke.media, "volumechange", Se),
            v(Ke.media, "play pause ended", ye),
            v(Ke.media, "waiting canplay seeked", xe),
            $.clickToPlay && "audio" !== Ke.type) {
                var e = G("." + $.classes.videoWrapper);
                if (!e)
                    return;
                e.style.cursor = "pointer",
                v(e, "click", function() {
                    $.hideControls && Ke.browser.isTouch && !Ke.media.paused || (Ke.media.paused ? ce() : Ke.media.ended ? (fe(),
                    ce()) : ue())
                })
            }
            $.disableContextMenu && v(Ke.media, "contextmenu", function(e) {
                e.preventDefault()
            }),
            v(Ke.media, $.events.concat(["keyup", "keydown"]).join(" "), function(e) {
                O(Ke.container, e.type, !0)
            })
        }
        function Be() {
            if (r($.types.html5, Ke.type)) {
                for (var e = Ke.media.querySelectorAll("source"), t = 0; t < e.length; t++)
                    l(e[t]);
                Ke.media.setAttribute("src", $.blankUrl),
                Ke.media.load(),
                Ve("Cancelled network requests")
            }
        }
        function ze(o, n) {
            function i() {
                clearTimeout(Ye.cleanUp),
                M["boolean"](n) || (n = !0),
                M["function"](o) && o.call(Xe),
                n && (Ke.init = !1,
                Ke.container.parentNode.replaceChild(Xe, Ke.container),
                Ke.container = null,
                t.body.style.overflow = "",
                b(t.body, "click", Fe),
                O(Xe, "destroyed", !0))
            }
            if (!Ke.init)
                return null;
            switch (Ke.type) {
            case "youtube":
                e.clearInterval(Ye.buffering),
                e.clearInterval(Ye.playing),
                Ke.embed.destroy(),
                i();
                break;
            case "vimeo":
                Ke.embed.unload().then(i),
                Ye.cleanUp = e.setTimeout(i, 200);
                break;
            case "video":
            case "audio":
                J(!0),
                i()
            }
        }
        function We() {
            if (Ke.init)
                return null;
            if (P = x(),
            Ke.browser = o(),
            M.htmlElement(Ke.media)) {
                te();
                var e = g.tagName.toLowerCase();
                "div" === e ? (Ke.type = g.getAttribute("data-type"),
                Ke.embedId = g.getAttribute("data-video-id"),
                g.removeAttribute("data-type"),
                g.removeAttribute("data-video-id")) : (Ke.type = e,
                $.crossorigin = null !== g.getAttribute("crossorigin"),
                $.autoplay = $.autoplay || null !== g.getAttribute("autoplay"),
                $.loop = $.loop || null !== g.getAttribute("loop")),
                Ke.supported = A(Ke.type),
                Ke.supported.basic && (Ke.container = a(g, t.createElement("div")),
                Ke.container.setAttribute("tabindex", 0),
                Q(),
                Ve("" + Ke.browser.name + " " + Ke.browser.version),
                ne(),
                (r($.types.html5, Ke.type) || r($.types.embed, Ke.type) && !Ke.supported.full) && (Ue(),
                qe(),
                ee()),
                Ke.init = !0)
            }
        }
        function Ue() {
            if (!Ke.supported.full)
                return Ze("Basic support only", Ke.type),
                l(G($.selectors.controls.wrapper)),
                l(G($.selectors.buttons.play)),
                void J(!0);
            var e = !q($.selectors.controls.wrapper).length;
            e && V(),
            Z() && (e && Re(),
            He(),
            J(),
            H(),
            B(),
            _e(),
            Se(),
            Ie(),
            ye(),
            Oe())
        }
        function qe() {
            e.setTimeout(function() {
                O(Ke.media, "ready")
            }, 0),
            m(Ke.media, L.classes.setup, !0),
            m(Ke.container, $.classes.ready, !0),
            Ke.media.plyr = Ge,
            $.autoplay && ce()
        }
        var Ge, Ke = this, Ye = {};
        Ke.media = g;
        var Xe = g.cloneNode(!0)
          , Ve = function() {
            j("log", arguments)
        }
          , Ze = function() {
            j("warn", arguments)
        };
        return Ve("Config", $),
        Ge = {
            getOriginal: function() {
                return Xe
            },
            getContainer: function() {
                return Ke.container
            },
            getEmbed: function() {
                return Ke.embed
            },
            getMedia: function() {
                return Ke.media
            },
            getType: function() {
                return Ke.type
            },
            getDuration: he,
            getCurrentTime: function() {
                return Ke.media.currentTime
            },
            getVolume: function() {
                return Ke.media.volume
            },
            isMuted: function() {
                return Ke.media.muted
            },
            isReady: function() {
                return f(Ke.container, $.classes.ready)
            },
            isLoading: function() {
                return f(Ke.container, $.classes.loading)
            },
            isPaused: function() {
                return Ke.media.paused
            },
            on: function(e, t) {
                return v(Ke.container, e, t),
                this
            },
            play: ce,
            pause: ue,
            stop: function() {
                ue(),
                fe()
            },
            restart: fe,
            rewind: pe,
            forward: me,
            seek: fe,
            source: Me,
            poster: je,
            setVolume: _e,
            togglePlay: de,
            toggleMute: we,
            toggleCaptions: Ce,
            toggleFullscreen: be,
            toggleControls: Le,
            isFullscreen: function() {
                return Ke.isFullscreen || !1
            },
            support: function(e) {
                return n(Ke, e)
            },
            destroy: ze
        },
        We(),
        Ke.init ? Ge : null
    }
    function E(e, o) {
        var n = new XMLHttpRequest;
        if (!M.string(o) || !M.htmlElement(t.querySelector("#" + o))) {
            var i = t.createElement("div");
            i.setAttribute("hidden", ""),
            M.string(o) && i.setAttribute("id", o),
            t.body.insertBefore(i, t.body.childNodes[0]),
            "withCredentials"in n && (n.open("GET", e, !0),
            n.onload = function() {
                i.innerHTML = n.responseText
            }
            ,
            n.send())
        }
    }
    function A(e) {
        var n = o()
          , i = n.isIE && n.version <= 9
          , r = n.isIos
          , s = n.isIphone
          , a = !!t.createElement("audio").canPlayType
          , l = !!t.createElement("video").canPlayType
          , c = !1
          , u = !1;
        switch (e) {
        case "video":
            c = l,
            u = c && !i && !s;
            break;
        case "audio":
            c = a,
            u = c && !i;
            break;
        case "vimeo":
            c = !0,
            u = !i && !r;
            break;
        case "youtube":
            c = !0,
            u = !i && !r,
            r && !s && n.version >= 10 && (u = !0);
            break;
        case "soundcloud":
            c = !0,
            u = !i && !s;
            break;
        default:
            c = a && l,
            u = c && !i
        }
        return {
            basic: c,
            full: u
        }
    }
    function O(e, o) {
        function n(e, t) {
            f(t, L.classes.hook) || i.push({
                target: e,
                media: t
            })
        }
        var i = []
          , r = []
          , s = [L.selectors.html5, L.selectors.embed].join(",");
        if (M.string(e) ? e = t.querySelectorAll(e) : M.htmlElement(e) ? e = [e] : M.nodeList(e) || M.array(e) || M.string(e) || (M.undefined(o) && M.object(e) && (o = e),
        e = t.querySelectorAll(s)),
        M.nodeList(e) && (e = Array.prototype.slice.call(e)),
        !A().basic || !e.length)
            return !1;
        for (var a = 0; a < e.length; a++) {
            var l = e[a]
              , c = l.querySelectorAll(s);
            if (c.length)
                for (var u = 0; u < c.length; u++)
                    n(l, c[u]);
            else
                h(l, s) && n(l, l)
        }
        return i.forEach(function(e) {
            var t = e.target
              , n = e.media
              , i = !1;
            n === t && (i = !0);
            var s = {};
            try {
                s = JSON.parse(t.getAttribute("data-plyr"))
            } catch (a) {}
            var l = T({}, L, o, s);
            if (!l.enabled)
                return null;
            var c = new $(n,l);
            if (M.object(c)) {
                if (l.debug) {
                    var u = l.events.concat(["setup", "statechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled"]);
                    v(c.getContainer(), u.join(" "), function(e) {
                        console.log([l.logPrefix, "event:", e.type].join(" "), e.detail.plyr)
                    })
                }
                w(c.getContainer(), "setup", !0, {
                    plyr: c
                }),
                r.push(c)
            }
        }),
        r
    }
    function I(e) {
        if (M.string(e) ? e = t.querySelector(e) : M.undefined(e) && (e = t.body),
        M.htmlElement(e)) {
            var o = e.querySelectorAll("." + L.classes.setup)
              , n = [];
            return Array.prototype.slice.call(o).forEach(function(e) {
                M.object(e.plyr) && n.push(e.plyr)
            }),
            n
        }
        return []
    }
    var P, N = {
        x: 0,
        y: 0
    }, L = {
        enabled: !0,
        debug: !1,
        autoplay: !1,
        loop: !1,
        seekTime: 10,
        volume: 10,
        volumeMin: 0,
        volumeMax: 10,
        volumeStep: 1,
        duration: null,
        displayDuration: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/2.0.18/plyr.svg",
        blankUrl: "https://cdn.plyr.io/static/blank.mp4",
        clickToPlay: !0,
        hideControls: !0,
        showPosterOnEnd: !1,
        disableContextMenu: !0,
        keyboardShorcuts: {
            focused: !0,
            global: !1
        },
        tooltips: {
            controls: !1,
            seek: !0
        },
        selectors: {
            html5: "video, audio",
            embed: "[data-type]",
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
                container: null,
                wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
                seek: '[data-plyr="seek"]',
                play: '[data-plyr="play"]',
                pause: '[data-plyr="pause"]',
                restart: '[data-plyr="restart"]',
                rewind: '[data-plyr="rewind"]',
                forward: '[data-plyr="fast-forward"]',
                mute: '[data-plyr="mute"]',
                captions: '[data-plyr="captions"]',
                fullscreen: '[data-plyr="fullscreen"]'
            },
            volume: {
                input: '[data-plyr="volume"]',
                display: ".plyr__volume--display"
            },
            progress: {
                container: ".plyr__progress",
                buffer: ".plyr__progress--buffer",
                played: ".plyr__progress--played"
            },
            captions: ".plyr__captions",
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration"
        },
        classes: {
            setup: "plyr--setup",
            ready: "plyr--ready",
            videoWrapper: "plyr__video-wrapper",
            embedWrapper: "plyr__video-embed",
            type: "plyr--{0}",
            stopped: "plyr--stopped",
            playing: "plyr--playing",
            muted: "plyr--muted",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isIos: "plyr--is-ios",
            isTouch: "plyr--is-touch",
            captions: {
                enabled: "plyr--captions-enabled",
                active: "plyr--captions-active"
            },
            fullscreen: {
                enabled: "plyr--fullscreen-enabled",
                fallback: "plyr--fullscreen-fallback",
                active: "plyr--fullscreen-active"
            },
            tabFocus: "tab-focus"
        },
        captions: {
            defaultActive: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            allowAudio: !1
        },
        storage: {
            enabled: !0,
            key: "plyr"
        },
        controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "fullscreen"],
        i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime} secs",
            play: "Play",
            pause: "Pause",
            forward: "Forward {seektime} secs",
            played: "played",
            buffered: "buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            toggleMute: "Toggle Mute",
            toggleCaptions: "Toggle Captions",
            toggleFullscreen: "Toggle Fullscreen",
            frameTitle: "Player for {title}"
        },
        types: {
            embed: ["youtube", "vimeo", "soundcloud"],
            html5: ["video", "audio"]
        },
        urls: {
            vimeo: {
                api: "https://player.vimeo.com/api/player.js"
            },
            youtube: {
                api: "https://www.youtube.com/iframe_api"
            },
            soundcloud: {
                api: "https://w.soundcloud.com/player/api.js"
            }
        },
        listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            forward: null,
            mute: null,
            volume: null,
            captions: null,
            fullscreen: null
        },
        events: ["ready", "ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied"],
        logPrefix: "[Plyr]"
    }, M = {
        object: function(e) {
            return null !== e && "object" == typeof e
        },
        array: function(e) {
            return null !== e && "object" == typeof e && e.constructor === Array
        },
        number: function(e) {
            return null !== e && ("number" == typeof e && !isNaN(e - 0) || "object" == typeof e && e.constructor === Number)
        },
        string: function(e) {
            return null !== e && ("string" == typeof e || "object" == typeof e && e.constructor === String)
        },
        "boolean": function(e) {
            return null !== e && "boolean" == typeof e
        },
        nodeList: function(e) {
            return null !== e && e instanceof NodeList
        },
        htmlElement: function(e) {
            return null !== e && e instanceof HTMLElement
        },
        "function": function(e) {
            return null !== e && "function" == typeof e
        },
        undefined: function(e) {
            return null !== e && "undefined" == typeof e
        }
    }, D = {
        supported: function() {
            try {
                e.localStorage.setItem("___test", "OK");
                var t = e.localStorage.getItem("___test");
                return e.localStorage.removeItem("___test"),
                "OK" === t
            } catch (o) {
                return !1
            }
            return !1
        }()
    };
    return {
        setup: O,
        supported: A,
        loadSprite: E,
        get: I
    }
}),
function() {
    function e(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var o = document.createEvent("CustomEvent");
        return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
        o
    }
    "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype,
    window.CustomEvent = e)
}(),
Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
    value: function(e) {
        if (null == this)
            throw new TypeError('"this" is null or not defined');
        var t = Object(this)
          , o = t.length >>> 0;
        if ("function" != typeof e)
            throw new TypeError("predicate must be a function");
        for (var n = arguments[1], i = 0; i < o; ) {
            var r = t[i];
            if (e.call(n, r, i, t))
                return r;
            i++
        }
    }
}),
new function(e) {
    var t = e.separator || "&"
      , o = e.spaces !== !1
      , n = (e.suffix === !1 ? "" : "[]",
    e.prefix !== !1)
      , i = n ? e.hash === !0 ? "#" : "?" : ""
      , r = e.numbers !== !1;
    jQuery.query = new function() {
        var e = function(e, t) {
            return void 0 != e && null !== e && (!t || e.constructor == t)
        }
          , n = function(e) {
            for (var t, o = /\[([^[]*)\]/g, n = /^([^[]+)(\[.*\])?$/.exec(e), i = n[1], r = []; t = o.exec(n[2]); )
                r.push(t[1]);
            return [i, r]
        }
          , s = function(t, o, n) {
            var i = o.shift();
            if ("object" != typeof t && (t = null),
            "" === i)
                if (t || (t = []),
                e(t, Array))
                    t.push(0 == o.length ? n : s(null, o.slice(0), n));
                else if (e(t, Object)) {
                    for (var r = 0; null != t[r++]; )
                        ;
                    t[--r] = 0 == o.length ? n : s(t[r], o.slice(0), n)
                } else
                    t = [],
                    t.push(0 == o.length ? n : s(null, o.slice(0), n));
            else if (i && i.match(/^\s*[0-9]+\s*$/)) {
                var a = parseInt(i, 10);
                t || (t = []),
                t[a] = 0 == o.length ? n : s(t[a], o.slice(0), n)
            } else {
                if (!i)
                    return n;
                var a = i.replace(/^\s*|\s*$/g, "");
                if (t || (t = {}),
                e(t, Array)) {
                    for (var l = {}, r = 0; r < t.length; ++r)
                        l[r] = t[r];
                    t = l
                }
                t[a] = 0 == o.length ? n : s(t[a], o.slice(0), n)
            }
            return t
        }
          , a = function(e) {
            var t = this;
            return t.keys = {},
            e.queryObject ? jQuery.each(e.get(), function(e, o) {
                t.SET(e, o)
            }) : t.parseNew.apply(t, arguments),
            t
        };
        return a.prototype = {
            queryObject: !0,
            parseNew: function() {
                var e = this;
                return e.keys = {},
                jQuery.each(arguments, function() {
                    var t = "" + this;
                    t = t.replace(/^[?#]/, ""),
                    t = t.replace(/[;&]$/, ""),
                    o && (t = t.replace(/[+]/g, " ")),
                    jQuery.each(t.split(/[&;]/), function() {
                        var t = decodeURIComponent(this.split("=")[0] || "")
                          , o = decodeURIComponent(this.split("=")[1] || "");
                        t && (r && (/^[+-]?[0-9]+\.[0-9]*$/.test(o) ? o = parseFloat(o) : /^[+-]?[1-9][0-9]*$/.test(o) && (o = parseInt(o, 10))),
                        o = !o && 0 !== o || o,
                        e.SET(t, o))
                    })
                }),
                e
            },
            has: function(t, o) {
                var n = this.get(t);
                return e(n, o)
            },
            GET: function(t) {
                if (!e(t))
                    return this.keys;
                for (var o = n(t), i = o[0], r = o[1], s = this.keys[i]; null != s && 0 != r.length; )
                    s = s[r.shift()];
                return "number" == typeof s ? s : s || ""
            },
            get: function(t) {
                var o = this.GET(t);
                return e(o, Object) ? jQuery.extend(!0, {}, o) : e(o, Array) ? o.slice(0) : o
            },
            SET: function(t, o) {
                var i = e(o) ? o : null
                  , r = n(t)
                  , a = r[0]
                  , l = r[1]
                  , c = this.keys[a];
                return this.keys[a] = s(c, l.slice(0), i),
                this
            },
            set: function(e, t) {
                return this.copy().SET(e, t)
            },
            REMOVE: function(t, o) {
                if (o) {
                    var n = this.GET(t);
                    if (e(n, Array)) {
                        for (tval in n)
                            n[tval] = n[tval].toString();
                        var i = $.inArray(o, n);
                        if (!(i >= 0))
                            return;
                        t = n.splice(i, 1),
                        t = t[i]
                    } else if (o != n)
                        return
                }
                return this.SET(t, null).COMPACT()
            },
            remove: function(e, t) {
                return this.copy().REMOVE(e, t)
            },
            EMPTY: function() {
                var e = this;
                return jQuery.each(e.keys, function(t, o) {
                    delete e.keys[t]
                }),
                e
            },
            load: function(e) {
                var t = e.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1")
                  , o = e.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                return new a(e.length == o.length ? "" : o,e.length == t.length ? "" : t)
            },
            empty: function() {
                return this.copy().EMPTY()
            },
            copy: function() {
                return new a(this)
            },
            COMPACT: function() {
                function t(o) {
                    function n(t, o, n) {
                        e(t, Array) ? t.push(n) : t[o] = n
                    }
                    var i = "object" == typeof o ? e(o, Array) ? [] : {} : o;
                    return "object" == typeof o && jQuery.each(o, function(o, r) {
                        return !e(r) || void n(i, o, t(r))
                    }),
                    i
                }
                return this.keys = t(this.keys),
                this
            },
            compact: function() {
                return this.copy().COMPACT()
            },
            toString: function() {
                var n = []
                  , r = []
                  , s = function(e) {
                    return e += "",
                    e = encodeURIComponent(e),
                    o && (e = e.replace(/%20/g, "+")),
                    e
                }
                  , a = function(t, o, n) {
                    if (e(n) && n !== !1) {
                        var i = [s(o)];
                        n !== !0 && (i.push("="),
                        i.push(s(n))),
                        t.push(i.join(""))
                    }
                }
                  , l = function(e, t) {
                    var o = function(e) {
                        return t && "" != t ? [t, "[", e, "]"].join("") : [e].join("")
                    };
                    jQuery.each(e, function(e, t) {
                        "object" == typeof t ? l(t, o(e)) : a(r, o(e), t)
                    })
                };
                return l(this.keys),
                r.length > 0 && n.push(i),
                n.push(r.join(t)),
                n.join("")
            }
        },
        new a(location.search,location.hash)
    }
}
(jQuery.query || {}),
!function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(o) {
        return t(e, o)
    }) : "object" == typeof exports ? t(e, require("jquery")) : t(e, e.jQuery || e.Zepto)
}(this, function(e, t) {
    "use strict";
    function o(e) {
        if (k && "none" === e.css("animation-name") && "none" === e.css("-webkit-animation-name") && "none" === e.css("-moz-animation-name") && "none" === e.css("-o-animation-name") && "none" === e.css("-ms-animation-name"))
            return 0;
        var t, o, n, i, r = e.css("animation-duration") || e.css("-webkit-animation-duration") || e.css("-moz-animation-duration") || e.css("-o-animation-duration") || e.css("-ms-animation-duration") || "0s", s = e.css("animation-delay") || e.css("-webkit-animation-delay") || e.css("-moz-animation-delay") || e.css("-o-animation-delay") || e.css("-ms-animation-delay") || "0s", a = e.css("animation-iteration-count") || e.css("-webkit-animation-iteration-count") || e.css("-moz-animation-iteration-count") || e.css("-o-animation-iteration-count") || e.css("-ms-animation-iteration-count") || "1";
        for (r = r.split(", "),
        s = s.split(", "),
        a = a.split(", "),
        i = 0,
        o = r.length,
        t = Number.NEGATIVE_INFINITY; i < o; i++)
            n = parseFloat(r[i]) * parseInt(a[i], 10) + parseFloat(s[i]),
            n > t && (t = n);
        return t
    }
    function n() {
        if (t(document.body).height() <= t(window).height())
            return 0;
        var e, o, n = document.createElement("div"), i = document.createElement("div");
        return n.style.visibility = "hidden",
        n.style.width = "100px",
        document.body.appendChild(n),
        e = n.offsetWidth,
        n.style.overflow = "scroll",
        i.style.width = "100%",
        n.appendChild(i),
        o = i.offsetWidth,
        n.parentNode.removeChild(n),
        e - o
    }
    function i() {
        if (!T) {
            var e, o, i = t("html"), r = u("is-locked");
            i.hasClass(r) || (o = t(document.body),
            e = parseInt(o.css("padding-right"), 10) + n(),
            o.css("padding-right", e + "px"),
            i.addClass(r))
        }
    }
    function r() {
        if (!T) {
            var e, o, i = t("html"), r = u("is-locked");
            i.hasClass(r) && (o = t(document.body),
            e = parseInt(o.css("padding-right"), 10) - n(),
            o.css("padding-right", e + "px"),
            i.removeClass(r))
        }
    }
    function s(e, t, o, n) {
        var i = u("is", t)
          , r = [u("is", w.CLOSING), u("is", w.OPENING), u("is", w.CLOSED), u("is", w.OPENED)].join(" ");
        e.$bg.removeClass(r).addClass(i),
        e.$overlay.removeClass(r).addClass(i),
        e.$wrapper.removeClass(r).addClass(i),
        e.$modal.removeClass(r).addClass(i),
        e.state = t,
        !o && e.$modal.trigger({
            type: t,
            reason: n
        }, [{
            reason: n
        }])
    }
    function a(e, n, i) {
        var r = 0
          , s = function(e) {
            e.target === this && r++
        }
          , a = function(e) {
            e.target === this && 0 === --r && (t.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, t) {
                i[t].off(g + " " + v)
            }),
            n())
        };
        t.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, t) {
            i[t].on(g, s).on(v, a)
        }),
        e(),
        0 === o(i.$bg) && 0 === o(i.$overlay) && 0 === o(i.$wrapper) && 0 === o(i.$modal) && (t.each(["$bg", "$overlay", "$wrapper", "$modal"], function(e, t) {
            i[t].off(g + " " + v)
        }),
        n())
    }
    function l(e) {
        e.state !== w.CLOSED && (t.each(["$bg", "$overlay", "$wrapper", "$modal"], function(t, o) {
            e[o].off(g + " " + v)
        }),
        e.$bg.removeClass(e.settings.modifier),
        e.$overlay.removeClass(e.settings.modifier).hide(),
        e.$wrapper.hide(),
        r(),
        s(e, w.CLOSED, !0))
    }
    function c(e) {
        var t, o, n, i, r = {};
        for (e = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","),
        t = e.split(","),
        i = 0,
        o = t.length; i < o; i++)
            t[i] = t[i].split(":"),
            n = t[i][1],
            ("string" == typeof n || n instanceof String) && (n = "true" === n || "false" !== n && n),
            ("string" == typeof n || n instanceof String) && (n = isNaN(n) ? n : +n),
            r[t[i][0]] = n;
        return r
    }
    function u() {
        for (var e = y, t = 0; t < arguments.length; ++t)
            e += "-" + arguments[t];
        return e
    }
    function d() {
        var e, o, n = location.hash.replace("#", "");
        if (n) {
            try {
                o = t('[data-remodal-id="' + n + '"]')
            } catch (i) {}
            o && o.length && (e = t[h].lookup[o.data(h)],
            e && e.settings.hashTracking && e.open())
        } else
            m && m.state === w.OPENED && m.settings.hashTracking && m.close()
    }
    function p(e, o) {
        var n = t(document.body)
          , i = n
          , r = this;
        r.settings = t.extend({}, b, o),
        r.index = t[h].lookup.push(r) - 1,
        r.state = w.CLOSED,
        r.$overlay = t("." + u("overlay")),
        null !== r.settings.appendTo && r.settings.appendTo.length && (i = t(r.settings.appendTo)),
        r.$overlay.length || (r.$overlay = t("<div>").addClass(u("overlay") + " " + u("is", w.CLOSED)).hide(),
        i.append(r.$overlay)),
        r.$bg = t("." + u("bg")).addClass(u("is", w.CLOSED)),
        r.$modal = e.addClass(y + " " + u("is-initialized") + " " + r.settings.modifier + " " + u("is", w.CLOSED)).attr("tabindex", "-1"),
        r.$wrapper = t("<div>").addClass(u("wrapper") + " " + r.settings.modifier + " " + u("is", w.CLOSED)).hide().append(r.$modal),
        i.append(r.$wrapper),
        r.$wrapper.on("click." + y, '[data-remodal-action="close"]', function(e) {
            e.preventDefault(),
            r.close()
        }),
        r.$wrapper.on("click." + y, '[data-remodal-action="cancel"]', function(e) {
            e.preventDefault(),
            r.$modal.trigger(_.CANCELLATION),
            r.settings.closeOnCancel && r.close(_.CANCELLATION)
        }),
        r.$wrapper.on("click." + y, '[data-remodal-action="confirm"]', function(e) {
            e.preventDefault(),
            r.$modal.trigger(_.CONFIRMATION),
            r.settings.closeOnConfirm && r.close(_.CONFIRMATION)
        }),
        r.$wrapper.on("click." + y, function(e) {
            var o = t(e.target);
            o.hasClass(u("wrapper")) && r.settings.closeOnOutsideClick && r.close()
        })
    }
    var m, f, h = "remodal", y = e.REMODAL_GLOBALS && e.REMODAL_GLOBALS.NAMESPACE || h, g = t.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(e) {
        return e + "." + y
    }).join(" "), v = t.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(e) {
        return e + "." + y
    }).join(" "), b = t.extend({
        hashTracking: !0,
        closeOnConfirm: !0,
        closeOnCancel: !0,
        closeOnEscape: !0,
        closeOnOutsideClick: !0,
        modifier: "",
        appendTo: null
    }, e.REMODAL_GLOBALS && e.REMODAL_GLOBALS.DEFAULTS), w = {
        CLOSING: "closing",
        CLOSED: "closed",
        OPENING: "opening",
        OPENED: "opened"
    }, _ = {
        CONFIRMATION: "confirmation",
        CANCELLATION: "cancellation"
    }, k = function() {
        var e = document.createElement("div").style;
        return void 0 !== e.animationName || void 0 !== e.WebkitAnimationName || void 0 !== e.MozAnimationName || void 0 !== e.msAnimationName || void 0 !== e.OAnimationName
    }(), T = /iPad|iPhone|iPod/.test(navigator.platform);
    p.prototype.open = function() {
        var e, o = this;
        o.state !== w.OPENING && o.state !== w.CLOSING && (e = o.$modal.attr("data-remodal-id"),
        e && o.settings.hashTracking && (f = t(window).scrollTop(),
        location.hash = e),
        m && m !== o && l(m),
        m = o,
        i(),
        o.$bg.addClass(o.settings.modifier),
        o.$overlay.addClass(o.settings.modifier).show(),
        o.$wrapper.show().scrollTop(0),
        o.$modal.focus(),
        a(function() {
            s(o, w.OPENING)
        }, function() {
            s(o, w.OPENED)
        }, o))
    }
    ,
    p.prototype.close = function(e) {
        var o = this;
        o.state !== w.OPENING && o.state !== w.CLOSING && (o.settings.hashTracking && o.$modal.attr("data-remodal-id") === location.hash.substr(1) && (location.hash = "",
        t(window).scrollTop(f)),
        a(function() {
            s(o, w.CLOSING, !1, e)
        }, function() {
            o.$bg.removeClass(o.settings.modifier),
            o.$overlay.removeClass(o.settings.modifier).hide(),
            o.$wrapper.hide(),
            r(),
            s(o, w.CLOSED, !1, e)
        }, o))
    }
    ,
    p.prototype.getState = function() {
        return this.state
    }
    ,
    p.prototype.destroy = function() {
        var e, o = t[h].lookup;
        l(this),
        this.$wrapper.remove(),
        delete o[this.index],
        e = t.grep(o, function(e) {
            return !!e
        }).length,
        0 === e && (this.$overlay.remove(),
        this.$bg.removeClass(u("is", w.CLOSING) + " " + u("is", w.OPENING) + " " + u("is", w.CLOSED) + " " + u("is", w.OPENED)))
    }
    ,
    t[h] = {
        lookup: []
    },
    t.fn[h] = function(e) {
        var o, n;
        return this.each(function(i, r) {
            n = t(r),
            null == n.data(h) ? (o = new p(n,e),
            n.data(h, o.index),
            o.settings.hashTracking && n.attr("data-remodal-id") === location.hash.substr(1) && o.open()) : o = t[h].lookup[n.data(h)]
        }),
        o
    }
    ,
    t(document).ready(function() {
        t(document).on("click", "[data-remodal-target]", function(e) {
            e.preventDefault();
            var o = e.currentTarget
              , n = o.getAttribute("data-remodal-target")
              , i = t('[data-remodal-id="' + n + '"]');
            t[h].lookup[i.data(h)].open()
        }),
        t(document).find("." + y).each(function(e, o) {
            var n = t(o)
              , i = n.data("remodal-options");
            i ? ("string" == typeof i || i instanceof String) && (i = c(i)) : i = {},
            n[h](i)
        }),
        t(document).on("keydown." + y, function(e) {
            m && m.settings.closeOnEscape && m.state === w.OPENED && 27 === e.keyCode && m.close()
        }),
        t(window).on("hashchange." + y, d)
    })
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.RouterRouter = t()
}(this, function() {
    "use strict";
    var e = /[\-{}\[\]+?.,\\\^$|#\s]/g
      , t = /(\(\?)?:\w+/g
      , o = /\((.*?)\)/g
      , n = /\*\w+/g
      , i = /^[#\/]|\s+$/g
      , r = /\/$/
      , s = function(e) {
        if (e)
            for (var t, o = Object.keys(e); "undefined" != typeof (t = o.pop()); )
                this.route(t, e[t])
    }
      , a = function(e, t) {
        var o = e.exec(t).slice(1);
        return o.map(function(e) {
            return e ? decodeURIComponent(e) : null
        })
    }
      , l = function(e) {
        return e.replace(i, "").replace(r, "")
    }
      , c = function(e, t) {
        return Object.prototype.toString.call(e) === "[object " + t + "]"
    }
      , u = function(i) {
        return i = i.replace(e, "\\$&").replace(o, "(?:$1)?").replace(t, function(e, t) {
            return t ? e : "([^/?]+)"
        }).replace(n, "([^?]*?)"),
        new RegExp("^" + i + "(?:\\?([\\s\\S]*))?$")
    }
      , d = function(e) {
        this.options = e || {},
        s(this.options.routes)
    };
    return d.prototype.route = function(e, t, o) {
        c(e, "RegExp") || (e = u(e)),
        c(t, "Function") && (o = t,
        t = ""),
        o || (o = this.options[t]);
        var n = l(window.location.pathname);
        if (e.test(n)) {
            var i = a(e, n);
            c(o, "Function") && o.apply(this, i)
        }
        return this
    }
    ,
    d
}),

function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    t = function() {
        function t(t, n) {
            var i, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, o) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(o + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            e.extend(r, r.initials),
            r.activeBreakpoint = null,
            r.animType = null,
            r.animProp = null,
            r.breakpoints = [],
            r.breakpointSettings = [],
            r.cssTransitions = !1,
            r.focussed = !1,
            r.interrupted = !1,
            r.hidden = "hidden",
            r.paused = !0,
            r.positionProp = null,
            r.respondTo = null,
            r.rowCount = 1,
            r.shouldClick = !0,
            r.$slider = e(t),
            r.$slidesCache = null,
            r.transformType = null,
            r.transitionType = null,
            r.visibilityChange = "visibilitychange",
            r.windowWidth = 0,
            r.windowTimer = null,
            i = e(t).data("slick") || {},
            r.options = e.extend({}, r.defaults, n, i),
            r.currentSlide = r.options.initialSlide,
            r.originalSettings = r.options,
            "undefined" != typeof document.mozHidden ? (r.hidden = "mozHidden",
            r.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (r.hidden = "webkitHidden",
            r.visibilityChange = "webkitvisibilitychange"),
            r.autoPlay = e.proxy(r.autoPlay, r),
            r.autoPlayClear = e.proxy(r.autoPlayClear, r),
            r.autoPlayIterator = e.proxy(r.autoPlayIterator, r),
            r.changeSlide = e.proxy(r.changeSlide, r),
            r.clickHandler = e.proxy(r.clickHandler, r),
            r.selectHandler = e.proxy(r.selectHandler, r),
            r.setPosition = e.proxy(r.setPosition, r),
            r.swipeHandler = e.proxy(r.swipeHandler, r),
            r.dragHandler = e.proxy(r.dragHandler, r),
            r.keyHandler = e.proxy(r.keyHandler, r),
            r.instanceUid = o++,
            r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            r.registerBreakpoints(),
            r.init(!0)
        }
        var o = 0;
        return t
    }(),
    t.prototype.activateADA = function() {
        var e = this;
        e.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    t.prototype.addSlide = t.prototype.slickAdd = function(t, o, n) {
        var i = this;
        if ("boolean" == typeof o)
            n = o,
            o = null;
        else if (o < 0 || o >= i.slideCount)
            return !1;
        i.unload(),
        "number" == typeof o ? 0 === o && 0 === i.$slides.length ? e(t).appendTo(i.$slideTrack) : n ? e(t).insertBefore(i.$slides.eq(o)) : e(t).insertAfter(i.$slides.eq(o)) : n === !0 ? e(t).prependTo(i.$slideTrack) : e(t).appendTo(i.$slideTrack),
        i.$slides = i.$slideTrack.children(this.options.slide),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.append(i.$slides),
        i.$slides.each(function(t, o) {
            e(o).attr("data-slick-index", t)
        }),
        i.$slidesCache = i.$slides,
        i.reinit()
    }
    ,
    t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            if (1 === t)
                return;
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }
    ,
    t.prototype.animateSlide = function(t, o) {
        var n = {}
          , i = this;
        i.animateHeight(),
        i.options.rtl === !0 && i.options.vertical === !1 && (t = -t),
        i.transformsEnabled === !1 ? i.options.vertical === !1 ? i.$slideTrack.animate({
            left: t
        }, i.options.speed, i.options.easing, o) : i.$slideTrack.animate({
            top: t
        }, i.options.speed, i.options.easing, o) : i.cssTransitions === !1 ? (i.options.rtl === !0 && (i.currentLeft = -i.currentLeft),
        e({
            animStart: i.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function(e) {
                e = Math.ceil(e),
                i.options.vertical === !1 ? (n[i.animType] = "translate(" + e + "px, 0px)",
                i.$slideTrack.css(n)) : (n[i.animType] = "translate(0px," + e + "px)",
                i.$slideTrack.css(n))
            },
            complete: function() {
                o && o.call()
            }
        })) : (i.applyTransition(),
        t = Math.ceil(t),
        i.options.vertical === !1 ? n[i.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + t + "px, 0px)",
        i.$slideTrack.css(n),
        o && setTimeout(function() {
            i.disableTransition(),
            o.call()
        }, i.options.speed))
    }
    ,
    t.prototype.getNavTarget = function() {
        var t = this
          , o = t.options.asNavFor;
        return o && null !== o && (o = e(o).not(t.$slider)),
        o
    }
    ,
    t.prototype.asNavFor = function(t) {
        var o = this
          , n = o.getNavTarget();
        null !== n && "object" == typeof n && n.each(function() {
            var o = e(this).slick("getSlick");
            o.unslicked || o.slideHandler(t, !0)
        })
    }
    ,
    t.prototype.applyTransition = function(e) {
        var t = this
          , o = {};
        t.options.fade === !1 ? o[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : o[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        t.options.fade === !1 ? t.$slideTrack.css(o) : t.$slides.eq(e).css(o)
    }
    ,
    t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }
    ,
    t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }
    ,
    t.prototype.autoPlayIterator = function() {
        var e = this
          , t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
        e.currentSlide - 1 === 0 && (e.direction = 1))),
        e.slideHandler(t))
    }
    ,
    t.prototype.buildArrows = function() {
        var t = this;
        t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
        t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
        t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
        t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    t.prototype.buildDots = function() {
        var t, o, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"),
            o = e("<ul />").addClass(n.options.dotsClass),
            t = 0; t <= n.getDotCount(); t += 1)
                o.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
            n.$dots = o.appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each(function(t, o) {
            e(o).attr("data-slick-index", t).data("originalStyling", e(o).attr("style") || "")
        }),
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        t.options.centerMode !== !0 && t.options.swipeToSlide !== !0 || (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.options.draggable === !0 && t.$list.addClass("draggable")
    }
    ,
    t.prototype.buildRows = function() {
        var e, t, o, n, i, r, s, a = this;
        if (n = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows,
            i = Math.ceil(r.length / s),
            e = 0; e < i; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (o = 0; o < a.options.slidesPerRow; o++) {
                        var u = e * s + (t * a.options.slidesPerRow + o);
                        r.get(u) && c.appendChild(r.get(u))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    t.prototype.checkResponsive = function(t, o) {
        var n, i, r, s = this, a = !1, l = s.$slider.width(), c = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = c : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(c, l)),
        s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            i = null;
            for (n in s.breakpoints)
                s.breakpoints.hasOwnProperty(n) && (s.originalSettings.mobileFirst === !1 ? r < s.breakpoints[n] && (i = s.breakpoints[n]) : r > s.breakpoints[n] && (i = s.breakpoints[n]));
            null !== i ? null !== s.activeBreakpoint ? (i !== s.activeBreakpoint || o) && (s.activeBreakpoint = i,
            "unslick" === s.breakpointSettings[i] ? s.unslick(i) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[i]),
            t === !0 && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = i) : (s.activeBreakpoint = i,
            "unslick" === s.breakpointSettings[i] ? s.unslick(i) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[i]),
            t === !0 && (s.currentSlide = s.options.initialSlide),
            s.refresh(t)),
            a = i) : null !== s.activeBreakpoint && (s.activeBreakpoint = null,
            s.options = s.originalSettings,
            t === !0 && (s.currentSlide = s.options.initialSlide),
            s.refresh(t),
            a = i),
            t || a === !1 || s.$slider.trigger("breakpoint", [s, a])
        }
    }
    ,
    t.prototype.changeSlide = function(t, o) {
        var n, i, r, s = this, a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(),
        a.is("li") || (a = a.closest("li")),
        r = s.slideCount % s.options.slidesToScroll !== 0,
        n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
        t.data.message) {
        case "previous":
            i = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - i, !1, o);
            break;
        case "next":
            i = 0 === n ? s.options.slidesToScroll : n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + i, !1, o);
            break;
        case "index":
            var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, o),
            a.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    t.prototype.checkNavigable = function(e) {
        var t, o, n = this;
        if (t = n.getNavigableIndexes(),
        o = 0,
        e > t[t.length - 1])
            e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = o;
                    break
                }
                o = t[i]
            }
        return e
    }
    ,
    t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
        t.$slider.off("focus.slick blur.slick"),
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        e(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(),
        e.removeAttr("style"),
        t.$slider.empty().append(e))
    }
    ,
    t.prototype.clickHandler = function(e) {
        var t = this;
        t.shouldClick === !1 && (e.stopImmediatePropagation(),
        e.stopPropagation(),
        e.preventDefault())
    }
    ,
    t.prototype.destroy = function(t) {
        var o = this;
        o.autoPlayClear(),
        o.touchObject = {},
        o.cleanUpEvents(),
        e(".slick-cloned", o.$slider).detach(),
        o.$dots && o.$dots.remove(),
        o.$prevArrow && o.$prevArrow.length && (o.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        o.htmlExpr.test(o.options.prevArrow) && o.$prevArrow.remove()),
        o.$nextArrow && o.$nextArrow.length && (o.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        o.htmlExpr.test(o.options.nextArrow) && o.$nextArrow.remove()),
        o.$slides && (o.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.detach(),
        o.$list.detach(),
        o.$slider.append(o.$slides)),
        o.cleanUpRows(),
        o.$slider.removeClass("slick-slider"),
        o.$slider.removeClass("slick-initialized"),
        o.$slider.removeClass("slick-dotted"),
        o.unslicked = !0,
        t || o.$slider.trigger("destroy", [o])
    }
    ,
    t.prototype.disableTransition = function(e) {
        var t = this
          , o = {};
        o[t.transitionType] = "",
        t.options.fade === !1 ? t.$slideTrack.css(o) : t.$slides.eq(e).css(o)
    }
    ,
    t.prototype.fadeSlide = function(e, t) {
        var o = this;
        o.cssTransitions === !1 ? (o.$slides.eq(e).css({
            zIndex: o.options.zIndex
        }),
        o.$slides.eq(e).animate({
            opacity: 1
        }, o.options.speed, o.options.easing, t)) : (o.applyTransition(e),
        o.$slides.eq(e).css({
            opacity: 1,
            zIndex: o.options.zIndex
        }),
        t && setTimeout(function() {
            o.disableTransition(e),
            t.call()
        }, o.options.speed))
    }
    ,
    t.prototype.fadeSlideOut = function(e) {
        var t = this;
        t.cssTransitions === !1 ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e),
        t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }
    ,
    t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides,
        t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.filter(e).appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(o) {
            o.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = n.is(":focus"),
                t.autoPlay())
            }, 0)
        })
    }
    ,
    t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        var e = this;
        return e.currentSlide
    }
    ,
    t.prototype.getDotCount = function() {
        var e = this
          , t = 0
          , o = 0
          , n = 0;
        if (e.options.infinite === !0)
            for (; t < e.slideCount; )
                ++n,
                t = o + e.options.slidesToScroll,
                o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (e.options.centerMode === !0)
            n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount; )
                ++n,
                t = o + e.options.slidesToScroll,
                o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else
            n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }
    ,
    t.prototype.getLeft = function(e) {
        var t, o, n, i = this, r = 0;
        return i.slideOffset = 0,
        o = i.$slides.first().outerHeight(!0),
        i.options.infinite === !0 ? (i.slideCount > i.options.slidesToShow && (i.slideOffset = i.slideWidth * i.options.slidesToShow * -1,
        r = o * i.options.slidesToShow * -1),
        i.slideCount % i.options.slidesToScroll !== 0 && e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow && (e > i.slideCount ? (i.slideOffset = (i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth * -1,
        r = (i.options.slidesToShow - (e - i.slideCount)) * o * -1) : (i.slideOffset = i.slideCount % i.options.slidesToScroll * i.slideWidth * -1,
        r = i.slideCount % i.options.slidesToScroll * o * -1))) : e + i.options.slidesToShow > i.slideCount && (i.slideOffset = (e + i.options.slidesToShow - i.slideCount) * i.slideWidth,
        r = (e + i.options.slidesToShow - i.slideCount) * o),
        i.slideCount <= i.options.slidesToShow && (i.slideOffset = 0,
        r = 0),
        i.options.centerMode === !0 && i.slideCount <= i.options.slidesToShow ? i.slideOffset = i.slideWidth * Math.floor(i.options.slidesToShow) / 2 - i.slideWidth * i.slideCount / 2 : i.options.centerMode === !0 && i.options.infinite === !0 ? i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth : i.options.centerMode === !0 && (i.slideOffset = 0,
        i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)),
        t = i.options.vertical === !1 ? e * i.slideWidth * -1 + i.slideOffset : e * o * -1 + r,
        i.options.variableWidth === !0 && (n = i.slideCount <= i.options.slidesToShow || i.options.infinite === !1 ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow),
        t = i.options.rtl === !0 ? n[0] ? (i.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0,
        i.options.centerMode === !0 && (n = i.slideCount <= i.options.slidesToShow || i.options.infinite === !1 ? i.$slideTrack.children(".slick-slide").eq(e) : i.$slideTrack.children(".slick-slide").eq(e + i.options.slidesToShow + 1),
        t = i.options.rtl === !0 ? n[0] ? (i.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0,
        t += (i.$list.width() - n.outerWidth()) / 2)),
        t
    }
    ,
    t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        var t = this;
        return t.options[e]
    }
    ,
    t.prototype.getNavigableIndexes = function() {
        var e, t = this, o = 0, n = 0, i = [];
        for (t.options.infinite === !1 ? e = t.slideCount : (o = t.options.slidesToScroll * -1,
        n = t.options.slidesToScroll * -1,
        e = 2 * t.slideCount); o < e; )
            i.push(o),
            o = n + t.options.slidesToScroll,
            n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return i
    }
    ,
    t.prototype.getSlick = function() {
        return this
    }
    ,
    t.prototype.getSlideCount = function() {
        var t, o, n, i = this;
        return n = i.options.centerMode === !0 ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        i.options.swipeToSlide === !0 ? (i.$slideTrack.find(".slick-slide").each(function(t, r) {
            if (r.offsetLeft - n + e(r).outerWidth() / 2 > i.swipeLeft * -1)
                return o = r,
                !1
        }),
        t = Math.abs(e(o).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }
    ,
    t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        var o = this;
        o.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }
    ,
    t.prototype.init = function(t) {
        var o = this;
        e(o.$slider).hasClass("slick-initialized") || (e(o.$slider).addClass("slick-initialized"),
        o.buildRows(),
        o.buildOut(),
        o.setProps(),
        o.startLoad(),
        o.loadSlider(),
        o.initializeEvents(),
        o.updateArrows(),
        o.updateDots(),
        o.checkResponsive(!0),
        o.focusHandler()),
        t && o.$slider.trigger("init", [o]),
        o.options.accessibility === !0 && o.initADA(),
        o.options.autoplay && (o.paused = !1,
        o.autoPlay())
    }
    ,
    t.prototype.initADA = function() {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        t.$slideTrack.attr("role", "listbox"),
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(o) {
            e(this).attr("role", "option");
            var n = t.options.centerMode ? o : Math.floor(o / t.options.slidesToShow);
            t.options.dots === !0 && e(this).attr("aria-describedby", "slick-slide" + t.instanceUid + n)
        }),
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(o) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + o,
                id: "slick-slide" + t.instanceUid + o
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        t.activateADA()
    }
    ,
    t.prototype.initArrowEvents = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide),
        e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }
    ,
    t.prototype.initDotEvents = function() {
        var t = this;
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide),
        t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }
    ,
    t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }
    ,
    t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
        t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }
    ,
    t.prototype.initUI = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
        e.$nextArrow.show()),
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }
    ,
    t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "next" : "previous"
            }
        }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
            data: {
                message: t.options.rtl === !0 ? "previous" : "next"
            }
        }))
    }
    ,
    t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this)
                  , o = e(this).attr("data-lazy")
                  , n = document.createElement("img");
                n.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        t.attr("src", o).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        s.$slider.trigger("lazyLoaded", [s, t, o])
                    })
                }
                ,
                n.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    s.$slider.trigger("lazyLoadError", [s, t, o])
                }
                ,
                n.src = o
            })
        }
        var o, n, i, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (i = s.currentSlide + (s.options.slidesToShow / 2 + 1),
        r = i + s.options.slidesToShow + 2) : (i = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
        r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (i = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
        r = Math.ceil(i + s.options.slidesToShow),
        s.options.fade === !0 && (i > 0 && i--,
        r <= s.slideCount && r++)),
        o = s.$slider.find(".slick-slide").slice(i, r),
        t(o),
        s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"),
        t(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow),
        t(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(s.options.slidesToShow * -1),
        t(n))
    }
    ,
    t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }
    ,
    t.prototype.next = t.prototype.slickNext = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(),
        e.setPosition()
    }
    ,
    t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(),
        e.paused = !0
    }
    ,
    t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }
    ,
    t.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 && t.initADA())
    }
    ,
    t.prototype.prev = t.prototype.slickPrev = function() {
        var e = this;
        e.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }
    ,
    t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var o, n, i, r = this, s = e("img[data-lazy]", r.$slider);
        s.length ? (o = s.first(),
        n = o.attr("data-lazy"),
        i = document.createElement("img"),
        i.onload = function() {
            o.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"),
            r.options.adaptiveHeight === !0 && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, o, n]),
            r.progressiveLazyLoad()
        }
        ,
        i.onerror = function() {
            t < 3 ? setTimeout(function() {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (o.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            r.$slider.trigger("lazyLoadError", [r, o, n]),
            r.progressiveLazyLoad())
        }
        ,
        i.src = n) : r.$slider.trigger("allImagesLoaded", [r])
    }
    ,
    t.prototype.refresh = function(t) {
        var o, n, i = this;
        n = i.slideCount - i.options.slidesToShow,
        !i.options.infinite && i.currentSlide > n && (i.currentSlide = n),
        i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
        o = i.currentSlide,
        i.destroy(!0),
        e.extend(i, i.initials, {
            currentSlide: o
        }),
        i.init(),
        t || i.changeSlide({
            data: {
                message: "index",
                index: o
            }
        }, !1)
    }
    ,
    t.prototype.registerBreakpoints = function() {
        var t, o, n, i = this, r = i.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            i.respondTo = i.options.respondTo || "window";
            for (t in r)
                if (n = i.breakpoints.length - 1,
                o = r[t].breakpoint,
                r.hasOwnProperty(t)) {
                    for (; n >= 0; )
                        i.breakpoints[n] && i.breakpoints[n] === o && i.breakpoints.splice(n, 1),
                        n--;
                    i.breakpoints.push(o),
                    i.breakpointSettings[o] = r[t].settings
                }
            i.breakpoints.sort(function(e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    }
    ,
    t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.setPosition(),
        t.focusHandler(),
        t.paused = !t.options.autoplay,
        t.autoPlay(),
        t.$slider.trigger("reInit", [t])
    }
    ,
    t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
        t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(),
            t.checkResponsive(),
            t.unslicked || t.setPosition()
        }, 50))
    }
    ,
    t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, o) {
        var n = this;
        return "boolean" == typeof e ? (t = e,
        e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e,
        !(n.slideCount < 1 || e < 0 || e > n.slideCount - 1) && (n.unload(),
        o === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        void n.reinit())
    }
    ,
    t.prototype.setCSS = function(e) {
        var t, o, n = this, i = {};
        n.options.rtl === !0 && (e = -e),
        t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        o = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
        i[n.positionProp] = e,
        n.transformsEnabled === !1 ? n.$slideTrack.css(i) : (i = {},
        n.cssTransitions === !1 ? (i[n.animType] = "translate(" + t + ", " + o + ")",
        n.$slideTrack.css(i)) : (i[n.animType] = "translate3d(" + t + ", " + o + ", 0px)",
        n.$slideTrack.css(i)))
    }
    ,
    t.prototype.setDimensions = function() {
        var e = this;
        e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
        e.options.centerMode === !0 && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
        e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }
    ,
    t.prototype.setFade = function() {
        var t, o = this;
        o.$slides.each(function(n, i) {
            t = o.slideWidth * n * -1,
            o.options.rtl === !0 ? e(i).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            }) : e(i).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: o.options.zIndex - 2,
                opacity: 0
            })
        }),
        o.$slides.eq(o.currentSlide).css({
            zIndex: o.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            if (1 === t)
                return;
            e.$list.css("height", t)
        }
    }
    ,
    t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, o, n, i, r, s = this, a = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0],
        a = arguments[1],
        r = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0],
        i = arguments[1],
        a = arguments[2],
        "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : "undefined" != typeof arguments[1] && (r = "single")),
        "single" === r)
            s.options[n] = i;
        else if ("multiple" === r)
            e.each(n, function(e, t) {
                s.options[e] = t
            });
        else if ("responsive" === r)
            for (o in i)
                if ("array" !== e.type(s.options.responsive))
                    s.options.responsive = [i[o]];
                else {
                    for (t = s.options.responsive.length - 1; t >= 0; )
                        s.options.responsive[t].breakpoint === i[o].breakpoint && s.options.responsive.splice(t, 1),
                        t--;
                    s.options.responsive.push(i[o])
                }
        a && (s.unload(),
        s.reinit())
    }
    ,
    t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }
    ,
    t.prototype.setProps = function() {
        var e = this
          , t = document.body.style;
        e.positionProp = e.options.vertical === !0 ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform",
        e.transformType = "-o-transform",
        e.transitionType = "OTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform",
        e.transformType = "-moz-transform",
        e.transitionType = "MozTransition",
        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
        e.transformType = "-webkit-transform",
        e.transitionType = "webkitTransition",
        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform",
        e.transformType = "-ms-transform",
        e.transitionType = "msTransition",
        void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform",
        e.transformType = "transform",
        e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
    }
    ,
    t.prototype.setSlideClasses = function(e) {
        var t, o, n, i, r = this;
        o = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(e).addClass("slick-current"),
        r.options.centerMode === !0 ? (t = Math.floor(r.options.slidesToShow / 2),
        r.options.infinite === !0 && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e,
        o.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === e ? o.eq(o.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && o.eq(r.options.slidesToShow).addClass("slick-center")),
        r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : o.length <= r.options.slidesToShow ? o.addClass("slick-active").attr("aria-hidden", "false") : (i = r.slideCount % r.options.slidesToShow,
        n = r.options.infinite === !0 ? r.options.slidesToShow + e : e,
        r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? o.slice(n - (r.options.slidesToShow - i), n + i).addClass("slick-active").attr("aria-hidden", "false") : o.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }
    ,
    t.prototype.setupInfinite = function() {
        var t, o, n, i = this;
        if (i.options.fade === !0 && (i.options.centerMode = !1),
        i.options.infinite === !0 && i.options.fade === !1 && (o = null,
        i.slideCount > i.options.slidesToShow)) {
            for (n = i.options.centerMode === !0 ? i.options.slidesToShow + 1 : i.options.slidesToShow,
            t = i.slideCount; t > i.slideCount - n; t -= 1)
                o = t - 1,
                e(i.$slides[o]).clone(!0).attr("id", "").attr("data-slick-index", o - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < n; t += 1)
                o = t,
                e(i.$slides[o]).clone(!0).attr("id", "").attr("data-slick-index", o + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }
    ,
    t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(),
        t.interrupted = e
    }
    ,
    t.prototype.selectHandler = function(t) {
        var o = this
          , n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
          , i = parseInt(n.attr("data-slick-index"));
        return i || (i = 0),
        o.slideCount <= o.options.slidesToShow ? (o.setSlideClasses(i),
        void o.asNavFor(i)) : void o.slideHandler(i)
    }
    ,
    t.prototype.slideHandler = function(e, t, o) {
        var n, i, r, s, a, l = null, c = this;
        if (t = t || !1,
        (c.animating !== !0 || c.options.waitForAnimate !== !0) && !(c.options.fade === !0 && c.currentSlide === e || c.slideCount <= c.options.slidesToShow))
            return t === !1 && c.asNavFor(e),
            n = e,
            l = c.getLeft(n),
            s = c.getLeft(c.currentSlide),
            c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft,
            c.options.infinite === !1 && c.options.centerMode === !1 && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll) ? void (c.options.fade === !1 && (n = c.currentSlide,
            o !== !0 ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (e < 0 || e > c.slideCount - c.options.slidesToScroll) ? void (c.options.fade === !1 && (n = c.currentSlide,
            o !== !0 ? c.animateSlide(s, function() {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
            i = n < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n,
            c.animating = !0,
            c.$slider.trigger("beforeChange", [c, c.currentSlide, i]),
            r = c.currentSlide,
            c.currentSlide = i,
            c.setSlideClasses(c.currentSlide),
            c.options.asNavFor && (a = c.getNavTarget(),
            a = a.slick("getSlick"),
            a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)),
            c.updateDots(),
            c.updateArrows(),
            c.options.fade === !0 ? (o !== !0 ? (c.fadeSlideOut(r),
            c.fadeSlide(i, function() {
                c.postSlide(i)
            })) : c.postSlide(i),
            void c.animateHeight()) : void (o !== !0 ? c.animateSlide(l, function() {
                c.postSlide(i)
            }) : c.postSlide(i)))
    }
    ,
    t.prototype.startLoad = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
        e.$nextArrow.hide()),
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }
    ,
    t.prototype.swipeDirection = function() {
        var e, t, o, n, i = this;
        return e = i.touchObject.startX - i.touchObject.curX,
        t = i.touchObject.startY - i.touchObject.curY,
        o = Math.atan2(t, e),
        n = Math.round(180 * o / Math.PI),
        n < 0 && (n = 360 - Math.abs(n)),
        n <= 45 && n >= 0 ? i.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? i.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? i.options.rtl === !1 ? "right" : "left" : i.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
    }
    ,
    t.prototype.swipeEnd = function(e) {
        var t, o, n = this;
        if (n.dragging = !1,
        n.interrupted = !1,
        n.shouldClick = !(n.touchObject.swipeLength > 10),
        void 0 === n.touchObject.curX)
            return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]),
        n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (o = n.swipeDirection()) {
            case "left":
            case "down":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                n.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                n.currentDirection = 1
            }
            "vertical" != o && (n.slideHandler(t),
            n.touchObject = {},
            n.$slider.trigger("swipe", [n, o]))
        } else
            n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
            n.touchObject = {})
    }
    ,
    t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(t.options.swipe === !1 || "ontouchend"in document && t.options.swipe === !1 || t.options.draggable === !1 && e.type.indexOf("mouse") !== -1))
            switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
            t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
            t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
            }
    }
    ,
    t.prototype.swipeMove = function(e) {
        var t, o, n, i, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
        !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide),
        s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX,
        s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY,
        s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
        s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
        o = s.swipeDirection(),
        "vertical" !== o ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(),
        i = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
        s.options.verticalSwiping === !0 && (i = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
        n = s.touchObject.swipeLength,
        s.touchObject.edgeHit = !1,
        s.options.infinite === !1 && (0 === s.currentSlide && "right" === o || s.currentSlide >= s.getDotCount() && "left" === o) && (n = s.touchObject.swipeLength * s.options.edgeFriction,
        s.touchObject.edgeHit = !0),
        s.options.vertical === !1 ? s.swipeLeft = t + n * i : s.swipeLeft = t + n * (s.$list.height() / s.listWidth) * i,
        s.options.verticalSwiping === !0 && (s.swipeLeft = t + n * i),
        s.options.fade !== !0 && s.options.touchMove !== !1 && (s.animating === !0 ? (s.swipeLeft = null,
        !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }
    ,
    t.prototype.swipeStart = function(e) {
        var t, o = this;
        return o.interrupted = !0,
        1 !== o.touchObject.fingerCount || o.slideCount <= o.options.slidesToShow ? (o.touchObject = {},
        !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
        o.touchObject.startX = o.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
        o.touchObject.startY = o.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
        void (o.dragging = !0))
    }
    ,
    t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]),
        t.destroy()
    }
    ,
    t.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2),
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }
    ,
    e.fn.slick = function() {
        var e, o, n = this, i = arguments[0], r = Array.prototype.slice.call(arguments, 1), s = n.length;
        for (e = 0; e < s; e++)
            if ("object" == typeof i || "undefined" == typeof i ? n[e].slick = new t(n[e],i) : o = n[e].slick[i].apply(n[e].slick, r),
            "undefined" != typeof o)
                return o;
        return n
    }
}),
function(e, t) {
    function o() {
        S = A = C = x = $ = E = D
    }
    function n(e, t) {
        for (var o in t)
            t.hasOwnProperty(o) && (e[o] = t[o])
    }
    function i(e) {
        return parseFloat(e) || 0
    }
    function r() {
        I = {
            top: t.pageYOffset,
            left: t.pageXOffset
        }
    }
    function s() {
        return t.pageXOffset != I.left ? (r(),
        void C()) : void (t.pageYOffset != I.top && (r(),
        l()))
    }
    function a(e) {
        setTimeout(function() {
            t.pageYOffset != I.top && (I.top = t.pageYOffset,
            l())
        }, 0)
    }
    function l() {
        for (var e = N.length - 1; e >= 0; e--)
            c(N[e])
    }
    function c(e) {
        if (e.inited) {
            var t = I.top <= e.limit.start ? 0 : I.top >= e.limit.end ? 2 : 1;
            e.mode != t && h(e, t)
        }
    }
    function u() {
        for (var e = N.length - 1; e >= 0; e--)
            if (N[e].inited) {
                var t = Math.abs(b(N[e].clone) - N[e].docOffsetTop)
                  , o = Math.abs(N[e].parent.node.offsetHeight - N[e].parent.height);
                if (t >= 2 || o >= 2)
                    return !1
            }
        return !0
    }
    function d(e) {
        isNaN(parseFloat(e.computed.top)) || e.isCell || "none" == e.computed.display || (e.inited = !0,
        e.clone || y(e),
        "absolute" != e.parent.computed.position && "relative" != e.parent.computed.position && (e.parent.node.style.position = "relative"),
        c(e),
        e.parent.height = e.parent.node.offsetHeight,
        e.docOffsetTop = b(e.clone))
    }
    function p(e) {
        var t = !0;
        e.clone && g(e),
        n(e.node.style, e.css);
        for (var o = N.length - 1; o >= 0; o--)
            if (N[o].node !== e.node && N[o].parent.node === e.parent.node) {
                t = !1;
                break
            }
        t && (e.parent.node.style.position = e.parent.css.position),
        e.mode = -1
    }
    function m() {
        for (var e = N.length - 1; e >= 0; e--)
            d(N[e])
    }
    function f() {
        for (var e = N.length - 1; e >= 0; e--)
            p(N[e])
    }
    function h(e, t) {
        var o = e.node.style;
        switch (t) {
        case 0:
            o.position = "absolute",
            o.left = e.offset.left + "px",
            o.right = e.offset.right + "px",
            o.top = e.offset.top + "px",
            o.bottom = "auto",
            o.width = "auto",
            o.marginLeft = 0,
            o.marginRight = 0,
            o.marginTop = 0;
            break;
        case 1:
            o.position = "fixed",
            o.left = e.box.left + "px",
            o.right = e.box.right + "px",
            o.top = e.css.top,
            o.bottom = "auto",
            o.width = "auto",
            o.marginLeft = 0,
            o.marginRight = 0,
            o.marginTop = 0;
            break;
        case 2:
            o.position = "absolute",
            o.left = e.offset.left + "px",
            o.right = e.offset.right + "px",
            o.top = "auto",
            o.bottom = 0,
            o.width = "auto",
            o.marginLeft = 0,
            o.marginRight = 0
        }
        e.mode = t
    }
    function y(e) {
        e.clone = document.createElement("div");
        var t = e.node.nextSibling || e.node
          , o = e.clone.style;
        o.height = e.height + "px",
        o.width = e.width + "px",
        o.marginTop = e.computed.marginTop,
        o.marginBottom = e.computed.marginBottom,
        o.marginLeft = e.computed.marginLeft,
        o.marginRight = e.computed.marginRight,
        o.padding = o.border = o.borderSpacing = 0,
        o.fontSize = "1em",
        o.position = "static",
        o.display = "inline-block",
        o.cssFloat = e.computed.cssFloat,
        e.node.parentNode.insertBefore(e.clone, t)
    }
    function g(e) {
        e.clone.parentNode.removeChild(e.clone),
        e.clone = void 0
    }
    function v(e) {
        var t = getComputedStyle(e)
          , o = e.parentNode
          , n = getComputedStyle(o)
          , r = e.style.position;
        e.style.position = "relative";
        var s = {
            top: t.top,
            marginTop: t.marginTop,
            marginBottom: t.marginBottom,
            marginLeft: t.marginLeft,
            marginRight: t.marginRight,
            cssFloat: t.cssFloat,
            display: t.display
        }
          , a = {
            top: i(t.top),
            marginBottom: i(t.marginBottom),
            paddingLeft: i(t.paddingLeft),
            paddingRight: i(t.paddingRight),
            borderLeftWidth: i(t.borderLeftWidth),
            borderRightWidth: i(t.borderRightWidth)
        };
        e.style.position = r;
        var l = {
            position: e.style.position,
            top: e.style.top,
            bottom: e.style.bottom,
            left: e.style.left,
            right: e.style.right,
            width: e.style.width,
            marginTop: e.style.marginTop,
            marginLeft: e.style.marginLeft,
            marginRight: e.style.marginRight
        }
          , c = w(e)
          , u = w(o)
          , d = {
            node: o,
            css: {
                position: o.style.position
            },
            computed: {
                position: n.position
            },
            numeric: {
                borderLeftWidth: i(n.borderLeftWidth),
                borderRightWidth: i(n.borderRightWidth),
                borderTopWidth: i(n.borderTopWidth),
                borderBottomWidth: i(n.borderBottomWidth)
            }
        }
          , p = {
            node: e,
            box: {
                left: c.win.left,
                right: M.clientWidth - c.win.right
            },
            offset: {
                top: c.win.top - u.win.top - d.numeric.borderTopWidth,
                left: c.win.left - u.win.left - d.numeric.borderLeftWidth,
                right: -c.win.right + u.win.right - d.numeric.borderRightWidth
            },
            css: l,
            isCell: "table-cell" == t.display,
            computed: s,
            numeric: a,
            width: c.win.right - c.win.left,
            height: c.win.bottom - c.win.top,
            mode: -1,
            inited: !1,
            parent: d,
            limit: {
                start: c.doc.top - a.top,
                end: u.doc.top + o.offsetHeight - d.numeric.borderBottomWidth - e.offsetHeight - a.top - a.marginBottom
            }
        };
        return p
    }
    function b(e) {
        for (var t = 0; e; )
            t += e.offsetTop,
            e = e.offsetParent;
        return t
    }
    function w(e) {
        var o = e.getBoundingClientRect();
        return {
            doc: {
                top: o.top + t.pageYOffset,
                left: o.left + t.pageXOffset
            },
            win: o
        }
    }
    function _() {
        P = setInterval(function() {
            !u() && C()
        }, 500)
    }
    function k() {
        clearInterval(P)
    }
    function T() {
        L && (document[j] ? k() : _())
    }
    function S() {
        L || (r(),
        m(),
        t.addEventListener("scroll", s),
        t.addEventListener("wheel", a),
        t.addEventListener("resize", C),
        t.addEventListener("orientationchange", C),
        e.addEventListener(F, T),
        _(),
        L = !0)
    }
    function C() {
        if (L) {
            f();
            for (var e = N.length - 1; e >= 0; e--)
                N[e] = v(N[e].node);
            m()
        }
    }
    function x() {
        t.removeEventListener("scroll", s),
        t.removeEventListener("wheel", a),
        t.removeEventListener("resize", C),
        t.removeEventListener("orientationchange", C),
        e.removeEventListener(F, T),
        k(),
        L = !1
    }
    function $() {
        x(),
        f()
    }
    function E() {
        for ($(); N.length; )
            N.pop()
    }
    function A(e) {
        for (var t = N.length - 1; t >= 0; t--)
            if (N[t].node === e)
                return;
        var o = v(e);
        N.push(o),
        L ? d(o) : S()
    }
    function O(e) {
        for (var t = N.length - 1; t >= 0; t--)
            N[t].node === e && (p(N[t]),
            N.splice(t, 1))
    }
    var I, P, N = [], L = !1, M = e.documentElement, D = function() {}, j = "hidden", F = "visibilitychange";
    void 0 !== e.webkitHidden && (j = "webkitHidden",
    F = "webkitvisibilitychange"),
    t.getComputedStyle || o();
    for (var R = ["", "-webkit-", "-moz-", "-ms-"], H = document.createElement("div"), B = R.length - 1; B >= 0; B--) {
        try {
            H.style.position = R[B] + "sticky"
        } catch (z) {}
        "" != H.style.position && o()
    }
    r(),
    t.Stickyfill = {
        stickies: N,
        add: A,
        remove: O,
        init: S,
        rebuild: C,
        pause: x,
        stop: $,
        kill: E
    }
}(document, window),
window.jQuery && !function(e) {
    e.fn.Stickyfill = function(e) {
        return this.each(function() {
            Stickyfill.add(this)
        }),
        this
    }
}(window.jQuery),
window.Template7 = function() {
    "use strict";
    function e(e) {
        return "[object Array]" === Object.prototype.toString.apply(e)
    }
    function t(e) {
        return "function" == typeof e
    }
    function o(e) {
        return "undefined" != typeof window && window.escape ? window.escape(e) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
    function n(e) {
        var t, o, n, i = e.replace(/[{}#}]/g, "").split(" "), a = [];
        for (o = 0; o < i.length; o++) {
            var l, c, u = i[o];
            if (0 === o)
                a.push(u);
            else if (0 === u.indexOf('"') || 0 === u.indexOf("'"))
                if (l = 0 === u.indexOf('"') ? s : r,
                c = 0 === u.indexOf('"') ? '"' : "'",
                2 === u.match(l).length)
                    a.push(u);
                else {
                    for (t = 0,
                    n = o + 1; n < i.length; n++)
                        if (u += " " + i[n],
                        i[n].indexOf(c) >= 0) {
                            t = n,
                            a.push(u);
                            break
                        }
                    t && (o = t)
                }
            else if (u.indexOf("=") > 0) {
                var d = u.split("=")
                  , p = d[0]
                  , m = d[1];
                if (2 !== m.match(l).length) {
                    for (t = 0,
                    n = o + 1; n < i.length; n++)
                        if (m += " " + i[n],
                        i[n].indexOf(c) >= 0) {
                            t = n;
                            break
                        }
                    t && (o = t)
                }
                var f = [p, m.replace(l, "")];
                a.push(f)
            } else
                a.push(u)
        }
        return a
    }
    function i(t) {
        var o, i, r = [];
        if (!t)
            return [];
        var s = t.split(/({{[^{^}]*}})/);
        for (o = 0; o < s.length; o++) {
            var a = s[o];
            if ("" !== a)
                if (a.indexOf("{{") < 0)
                    r.push({
                        type: "plain",
                        content: a
                    });
                else {
                    if (a.indexOf("{/") >= 0)
                        continue;
                    if (a.indexOf("{#") < 0 && a.indexOf(" ") < 0 && a.indexOf("else") < 0) {
                        r.push({
                            type: "variable",
                            contextName: a.replace(/[{}]/g, "")
                        });
                        continue
                    }
                    var l = n(a)
                      , c = l[0]
                      , u = ">" === c
                      , d = []
                      , p = {};
                    for (i = 1; i < l.length; i++) {
                        var m = l[i];
                        e(m) ? p[m[0]] = "false" !== m[1] && m[1] : d.push(m)
                    }
                    if (a.indexOf("{#") >= 0) {
                        var f, h = "", y = "", g = 0, v = !1, b = !1, w = 0;
                        for (i = o + 1; i < s.length; i++)
                            if (s[i].indexOf("{{#") >= 0 && w++,
                            s[i].indexOf("{{/") >= 0 && w--,
                            s[i].indexOf("{{#" + c) >= 0)
                                h += s[i],
                                b && (y += s[i]),
                                g++;
                            else if (s[i].indexOf("{{/" + c) >= 0) {
                                if (!(g > 0)) {
                                    f = i,
                                    v = !0;
                                    break
                                }
                                g--,
                                h += s[i],
                                b && (y += s[i])
                            } else
                                s[i].indexOf("else") >= 0 && 0 === w ? b = !0 : (b || (h += s[i]),
                                b && (y += s[i]));
                        v && (f && (o = f),
                        r.push({
                            type: "helper",
                            helperName: c,
                            contextName: d,
                            content: h,
                            inverseContent: y,
                            hash: p
                        }))
                    } else
                        a.indexOf(" ") > 0 && (u && (c = "_partial",
                        d[0] && (d[0] = '"' + d[0].replace(/"|'/g, "") + '"')),
                        r.push({
                            type: "helper",
                            helperName: c,
                            contextName: d,
                            hash: p
                        }))
                }
        }
        return r
    }
    var r = new RegExp("'","g")
      , s = new RegExp('"',"g")
      , a = function(e, t) {
        function o(e, t) {
            return e.content ? a(e.content, t) : function() {
                return ""
            }
        }
        function n(e, t) {
            return e.inverseContent ? a(e.inverseContent, t) : function() {
                return ""
            }
        }
        function r(e, t) {
            var o, n, i = 0;
            if (0 === e.indexOf("../")) {
                i = e.split("../").length - 1;
                var r = t.split("_")[1] - i;
                t = "ctx_" + (r >= 1 ? r : 1),
                n = e.split("../")[i].split(".")
            } else
                0 === e.indexOf("@global") ? (t = "Template7.global",
                n = e.split("@global.")[1].split(".")) : 0 === e.indexOf("@root") ? (t = "root",
                n = e.split("@root.")[1].split(".")) : n = e.split(".");
            o = t;
            for (var s = 0; s < n.length; s++) {
                var a = n[s];
                0 === a.indexOf("@") ? s > 0 ? o += "[(data && data." + a.replace("@", "") + ")]" : o = "(data && data." + e.replace("@", "") + ")" : isFinite(a) ? o += "[" + a + "]" : "this" === a || a.indexOf("this.") >= 0 || a.indexOf("this[") >= 0 || a.indexOf("this(") >= 0 ? o = a.replace("this", t) : o += "." + a
            }
            return o
        }
        function s(e, t) {
            for (var o = [], n = 0; n < e.length; n++)
                /^['"]/.test(e[n]) ? o.push(e[n]) : /^(true|false|\d+)$/.test(e[n]) ? o.push(e[n]) : o.push(r(e[n], t));
            return o.join(", ")
        }
        function a(e, t) {
            if (t = t || 1,
            e = e || l.template,
            "string" != typeof e)
                throw new Error("Template7: Template must be a string");
            var a = i(e);
            if (0 === a.length)
                return function() {
                    return ""
                }
                ;
            var c = "ctx_" + t
              , u = "";
            u += 1 === t ? "(function (" + c + ", data, root) {\n" : "(function (" + c + ", data) {\n",
            1 === t && (u += "function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}\n",
            u += "function isFunction(func){return (typeof func === 'function');}\n",
            u += 'function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n',
            u += "root = root || ctx_1 || {};\n"),
            u += "var r = '';\n";
            var d;
            for (d = 0; d < a.length; d++) {
                var p = a[d];
                if ("plain" !== p.type) {
                    var m, f;
                    if ("variable" === p.type && (m = r(p.contextName, c),
                    u += "r += c(" + m + ", " + c + ");"),
                    "helper" === p.type)
                        if (p.helperName in l.helpers)
                            f = s(p.contextName, c),
                            u += "r += (Template7.helpers." + p.helperName + ").call(" + c + ", " + (f && f + ", ") + "{hash:" + JSON.stringify(p.hash) + ", data: data || {}, fn: " + o(p, t + 1) + ", inverse: " + n(p, t + 1) + ", root: root});";
                        else {
                            if (p.contextName.length > 0)
                                throw new Error('Template7: Missing helper: "' + p.helperName + '"');
                            m = r(p.helperName, c),
                            u += "if (" + m + ") {",
                            u += "if (isArray(" + m + ")) {",
                            u += "r += (Template7.helpers.each).call(" + c + ", " + m + ", {hash:" + JSON.stringify(p.hash) + ", data: data || {}, fn: " + o(p, t + 1) + ", inverse: " + n(p, t + 1) + ", root: root});",
                            u += "}else {",
                            u += "r += (Template7.helpers.with).call(" + c + ", " + m + ", {hash:" + JSON.stringify(p.hash) + ", data: data || {}, fn: " + o(p, t + 1) + ", inverse: " + n(p, t + 1) + ", root: root});",
                            u += "}}"
                        }
                } else
                    u += "r +='" + p.content.replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/'/g, "\\'") + "';"
            }
            return u += "\nreturn r;})",
            eval.call(window, u)
        }
        var l = this;
        l.template = e,
        l.compile = function(e) {
            return l.compiled || (l.compiled = a(e)),
            l.compiled
        }
    };
    a.prototype = {
        options: {},
        partials: {},
        helpers: {
            _partial: function(e, t) {
                var o = a.prototype.partials[e];
                if (!o || o && !o.template)
                    return "";
                o.compiled || (o.compiled = new a(o.template).compile());
                var n = this;
                for (var i in t.hash)
                    n[i] = t.hash[i];
                return o.compiled(n, t.data, t.root)
            },
            escape: function(e, t) {
                if ("string" != typeof e)
                    throw new Error('Template7: Passed context to "escape" helper should be a string');
                return o(e)
            },
            "if": function(e, o) {
                return t(e) && (e = e.call(this)),
                e ? o.fn(this, o.data) : o.inverse(this, o.data)
            },
            unless: function(e, o) {
                return t(e) && (e = e.call(this)),
                e ? o.inverse(this, o.data) : o.fn(this, o.data)
            },
            each: function(o, n) {
                var i = ""
                  , r = 0;
                if (t(o) && (o = o.call(this)),
                e(o)) {
                    for (n.hash.reverse && (o = o.reverse()),
                    r = 0; r < o.length; r++)
                        i += n.fn(o[r], {
                            first: 0 === r,
                            last: r === o.length - 1,
                            index: r
                        });
                    n.hash.reverse && (o = o.reverse())
                } else
                    for (var s in o)
                        r++,
                        i += n.fn(o[s], {
                            key: s
                        });
                return r > 0 ? i : n.inverse(this)
            },
            "with": function(e, o) {
                return t(e) && (e = e.call(this)),
                o.fn(e)
            },
            join: function(e, o) {
                return t(e) && (e = e.call(this)),
                e.join(o.hash.delimiter || o.hash.delimeter)
            },
            js: function(e, t) {
                var o;
                return o = e.indexOf("return") >= 0 ? "(function(){" + e + "})" : "(function(){return (" + e + ")})",
                eval.call(this, o).call(this)
            },
            js_compare: function(e, t) {
                var o;
                o = e.indexOf("return") >= 0 ? "(function(){" + e + "})" : "(function(){return (" + e + ")})";
                var n = eval.call(this, o).call(this);
                return n ? t.fn(this, t.data) : t.inverse(this, t.data)
            }
        }
    };
    var l = function(e, t) {
        if (2 === arguments.length) {
            var o = new a(e)
              , n = o.compile()(t);
            return o = null,
            n
        }
        return new a(e)
    };
    return l.registerHelper = function(e, t) {
        a.prototype.helpers[e] = t
    }
    ,
    l.unregisterHelper = function(e) {
        a.prototype.helpers[e] = void 0,
        delete a.prototype.helpers[e]
    }
    ,
    l.registerPartial = function(e, t) {
        a.prototype.partials[e] = {
            template: t
        }
    }
    ,
    l.unregisterPartial = function(e, t) {
        a.prototype.partials[e] && (a.prototype.partials[e] = void 0,
        delete a.prototype.partials[e])
    }
    ,
    l.compile = function(e, t) {
        var o = new a(e,t);
        return o.compile()
    }
    ,
    l.options = a.prototype.options,
    l.helpers = a.prototype.helpers,
    l.partials = a.prototype.partials,
    l
}(),
function(e, t) {
    "use strict";
    if ("function" != typeof e.createEvent)
        return !1;
    var o, n, i, r, s, a, l, c, u = function(e) {
        var t = e.toLowerCase()
          , o = "MS" + e;
        return navigator.msPointerEnabled ? o : t
    }, d = {
        useJquery: !t.IGNORE_JQUERY && "undefined" != typeof jQuery,
        swipeThreshold: t.SWIPE_THRESHOLD || 100,
        tapThreshold: t.TAP_THRESHOLD || 150,
        dbltapThreshold: t.DBL_TAP_THRESHOLD || 200,
        longtapThreshold: t.LONG_TAP_THRESHOLD || 1e3,
        tapPrecision: t.TAP_PRECISION / 2 || 30,
        justTouchEvents: t.JUST_ON_TOUCH_DEVICES
    }, p = !1, m = {
        touchstart: u("PointerDown") + " touchstart",
        touchend: u("PointerUp") + " touchend",
        touchmove: u("PointerMove") + " touchmove"
    }, f = function(e, t, o) {
        for (var n = t.split(" "), i = n.length; i--; )
            e.addEventListener(n[i], o, !1)
    }, h = function(e) {
        return e.targetTouches ? e.targetTouches[0] : e
    }, y = function() {
        return (new Date).getTime()
    }, g = function(t, i, r, s) {
        var a = e.createEvent("Event");
        if (a.originalEvent = r,
        s = s || {},
        s.x = o,
        s.y = n,
        s.distance = s.distance,
        d.useJquery && (a = jQuery.Event(i, {
            originalEvent: r
        }),
        jQuery(t).trigger(a, s)),
        a.initEvent) {
            for (var l in s)
                a[l] = s[l];
            a.initEvent(i, !0, !0),
            t.dispatchEvent(a)
        }
        for (; t; )
            t["on" + i] && t["on" + i](a),
            t = t.parentNode
    }, v = function(e) {
        if ("mousedown" !== e.type && (p = !0),
        "mousedown" !== e.type || !p) {
            var t = h(e);
            i = o = t.pageX,
            r = n = t.pageY,
            c = setTimeout(function() {
                g(e.target, "longtap", e),
                a = e.target
            }, d.longtapThreshold),
            s = y(),
            _++
        }
    }, b = function(e) {
        if ("mouseup" === e.type && p)
            return void (p = !1);
        var t = []
          , u = y()
          , m = r - n
          , f = i - o;
        if (clearTimeout(l),
        clearTimeout(c),
        f <= -d.swipeThreshold && t.push("swiperight"),
        f >= d.swipeThreshold && t.push("swipeleft"),
        m <= -d.swipeThreshold && t.push("swipedown"),
        m >= d.swipeThreshold && t.push("swipeup"),
        t.length) {
            for (var h = 0; h < t.length; h++) {
                var v = t[h];
                g(e.target, v, e, {
                    distance: {
                        x: Math.abs(f),
                        y: Math.abs(m)
                    }
                })
            }
            _ = 0
        } else
            i >= o - d.tapPrecision && i <= o + d.tapPrecision && r >= n - d.tapPrecision && r <= n + d.tapPrecision && s + d.tapThreshold - u >= 0 && (g(e.target, _ >= 2 && a === e.target ? "dbltap" : "tap", e),
            a = e.target),
            l = setTimeout(function() {
                _ = 0
            }, d.dbltapThreshold)
    }, w = function(e) {
        if ("mousemove" !== e.type || !p) {
            var t = h(e);
            o = t.pageX,
            n = t.pageY
        }
    }, _ = 0;
    f(e, m.touchstart + (d.justTouchEvents ? "" : " mousedown"), v),
    f(e, m.touchend + (d.justTouchEvents ? "" : " mouseup"), b),
    f(e, m.touchmove + (d.justTouchEvents ? "" : " mousemove"), w),
    t.tocca = function(e) {
        for (var t in e)
            d[t] = e[t];
        return d
    }
}(document, window);
