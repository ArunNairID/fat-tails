function jstat() {}
j = jstat;
(function () {
    var a = false,
        b = /xyz/.test(function () {}) ? /\b_super\b/ : /.*/;
    this.Class = function () {};
    Class.extend = function (c) {
        function d() {
            !a && this.init && this.init.apply(this, arguments)
        }
        var e = this.prototype;
        a = true;
        var f = new this;
        a = false;
        for (var h in c) f[h] = typeof c[h] == "function" && typeof e[h] == "function" && b.test(c[h]) ? function (i, g) {
            return function () {
                var l = this._super;
                this._super = e[i];
                var n = g.apply(this, arguments);
                this._super = l;
                return n
            }
        }(h, c[h]) : c[h];
        d.prototype = f;
        d.constructor = d;
        d.extend = arguments.callee;
        return d
    }
})();
jstat.ONE_SQRT_2PI = 0.3989422804014327;
jstat.LN_SQRT_2PI = 0.9189385332046728;
jstat.LN_SQRT_PId2 = 0.22579135264472744;
jstat.DBL_MIN = 2.22507E-308;
jstat.DBL_EPSILON = 2.220446049250313E-16;
jstat.SQRT_32 = 5.656854249492381;
jstat.TWO_PI = 6.283185307179586;
jstat.DBL_MIN_EXP = -999;
jstat.SQRT_2dPI = 0.79788456080287;
jstat.LN_SQRT_PI = 0.5723649429247;
jstat.seq = function (a, b, c) {
    return (new Range(a, b, c)).getPoints()
};
jstat.dnorm = function (a, b, c, d) {
    if (b == null) b = 0;
    if (c == null) c = 1;
    if (d == null) d = false;
    b = new NormalDistribution(b, c);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (var e = 0; e < a.length; e++) c.push(b._pdf(a[e], d));
            return c
        } else throw "Illegal argument: x";
        else return b._pdf(a, d)
};
jstat.pnorm = function (a, b, c, d, e) {
    if (b == null) b = 0;
    if (c == null) c = 1;
    if (d == null) d = true;
    if (e == null) e = false;
    b = new NormalDistribution(b, c);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (var f = 0; f < a.length; f++) c.push(b._cdf(a[f], d, e));
            return c
        } else throw "Illegal argument: x";
        else return b._cdf(a, d, e)
};
jstat.dlnorm = function (a, b, c, d) {
    if (b == null) b = 0;
    if (c == null) c = 1;
    if (d == null) d = false;
    b = new LogNormalDistribution(b, c);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (var e = 0; e < a.length; e++) c.push(b._pdf(a[e], d));
            return c
        } else throw "Illegal argument: x";
        else return b._pdf(a, d)
};
jstat.plnorm = function (a, b, c, d, e) {
    if (b == null) b = 0;
    if (c == null) c = 1;
    if (d == null) d = true;
    if (e == null) e = false;
    b = new LogNormalDistribution(b, c);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (var f = 0; f < a.length; f++) c.push(b._cdf(a[f], d, e));
            return c
        } else throw "Illegal argument: x";
        else return b._cdf(a, d, e)
};
jstat.dbeta = function (a, b, c, d, e) {
    if (e == null) e = false;
    b = new BetaDistribution(b, c);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (d = 0; d < a.length; d++) c.push(b._pdf(a[d], e));
            return c
        } else throw "Illegal argument: x";
        else return b._pdf(a, e)
};
jstat.pbeta = function (a, b, c, d, e, f) {
    if (f == null) f = false;
    if (e == null) e = true;
    b = new BetaDistribution(b, c);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (d = 0; d < a.length; d++) c.push(b._cdf(a[d], e, f));
            return c
        } else throw "Illegal argument: x";
        else return b._cdf(a, e, f)
};
jstat.dgamma = function (a, b, c, d, e) {
    if (c == null) c = 1;
    if (d == null) d = 1 / c;
    if (e == null) e = false;
    b = new GammaDistribution(b, d);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (d = 0; d < a.length; d++) c.push(b._pdf(a[d], e));
            return c
        } else throw "Illegal argument: x";
        else return b._pdf(a, e)
};
jstat.pgamma = function (a, b, c, d, e, f) {
    if (c == null) c = 1;
    if (d == null) d = 1 / c;
    if (e == null) e = true;
    if (f == null) f = false;
    b = new GammaDistribution(b, d);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (d = 0; d < a.length; d++) c.push(b._cdf(a[d], e, f));
            return c
        } else throw "Illegal argument: x";
        else return b._cdf(a, e, f)
};
jstat.dt = function (a, b, c, d) {
    if (d == null) d = false;
    b = new StudentTDistribution(b, c);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (var e = 0; e < a.length; e++) c.push(b._pdf(a[e], d));
            return c
        } else throw "Illegal argument: x";
        else return b._pdf(a, d)
};
jstat.pt = function (a, b, c, d, e) {
    if (d == null) d = true;
    if (e == null) e = false;
    b = new StudentTDistribution(b, c);
    if (isNaN(a))
        if (a.length) {
            c = [];
            for (var f = 0; f < a.length; f++) c.push(b._cdf(a[f], d, e));
            return c
        } else throw "Illegal argument: x";
        else return b._cdf(a, d, e)
};
jstat.plot = function (a, b, c) {
    if (a == null) throw "x is undefined in jstat.plot";
    if (b == null) throw "y is undefined in jstat.plot";
    if (a.length != b.length) throw "x and y lengths differ in jstat.plot";
    var d = {
        series: {
            lines: {},
            points: {}
        }
    }, e = [];
    if (a.length == undefined) {
        e.push([a, b]);
        d.series.points.show = true
    } else
        for (var f = 0; f < a.length; f++) e.push([a[f], b[f]]);
    a = "jstat graph";
    if (c != null) {
        if (c.type != null)
            if (c.type == "l") d.series.lines.show = true;
            else if (c.type == "p") {
            d.series.lines.show = false;
            d.series.points.show = true
        }
        if (c.hover !=
            null) d.grid = {
            hoverable: c.hover
        };
        if (c.main != null) a = c.main
    }
    c = new Date;
    var h = c.getMilliseconds() * c.getMinutes() + c.getSeconds();
    $("body").append('<div title="' + a + '" style="display: none;" id="' + h + '"><div id="graph-' + h + '" style="width:95%; height: 95%"></div></div>');
    $("#" + h).dialog({
        modal: false,
        width: 475,
        height: 475,
        resizable: true,
        resize: function () {
            $.plot($("#graph-" + h), [e], d)
        },
        open: function () {
            $.plot($("#graph-" + h), [e], d)
        }
    })
};
jstat.log10 = function (a) {
    return Math.log(a) / Math.LN10
};
jstat.toSigFig = function (a, b) {
    if (a == 0) return 0;
    var c = Math.ceil(jstat.log10(a < 0 ? -a : a));
    c = b - parseInt(c);
    c = Math.pow(10, c);
    return Math.round(a * c) / c
};
jstat.trunc = function (a) {
    return a > 0 ? Math.floor(a) : Math.ceil(a)
};
jstat.isFinite = function (a) {
    return !isNaN(a) && a != Number.POSITIVE_INFINITY && a != Number.NEGATIVE_INFINITY
};
jstat.dopois_raw = function (a, b, c) {
    if (b == 0) {
        if (a == 0) return c ? 0 : 1;
        return c ? Number.NEGATIVE_INFINITY : 0
    }
    if (!jstat.isFinite(b)) return c ? Number.NEGATIVE_INFINITY : 0;
    if (a < 0) return c ? Number.NEGATIVE_INFINITY : 0;
    if (a <= b * jstat.DBL_MIN) return c ? -b : Math.exp(-b);
    if (b < a * jstat.DBL_MIN) {
        var d = -b + a * Math.log(b) - jstat.lgamma(a + 1);
        return c ? d : Math.exp(d)
    }
    d = jstat.TWO_PI * a;
    a = -jstat.stirlerr(a) - jstat.bd0(a, b);
    return c ? -0.5 * Math.log(d) + a : Math.exp(a) / Math.sqrt(d)
};
jstat.bd0 = function (a, b) {
    var c, d, e, f, h;
    if (!jstat.isFinite(a) || !jstat.isFinite(b) || b == 0) throw "illegal parameter in jstat.bd0";
    if (Math.abs(a - b) > 0.1 * (a + b)) {
        f = (a - b) / (a + b);
        d = (a - b) * f;
        c = 2 * a * f;
        f *= f;
        for (h = 1;; h++) {
            c *= f;
            e = d + c / ((h << 1) + 1);
            if (e == d) return e;
            d = e
        }
    }
    return a * Math.log(a / b) + b - a
};
jstat.stirlerr = function (a) {
    var b = [0, 0.15342640972002736, 0.08106146679532726, 0.05481412105191765, 0.0413406959554093, 0.03316287351993629, 0.02767792568499834, 0.023746163656297496, 0.020790672103765093, 0.018488450532673187, 0.016644691189821193, 0.015134973221917378, 0.013876128823070748, 0.012810465242920227, 0.01189670994589177, 0.011104559758206917, 0.010411265261972096, 0.009799416126158804, 0.009255462182712733, 0.008768700134139386, 0.00833056343336287, 0.00793411456431402, 0.007573675487951841, 0.007244554301320383,
        0.00694284010720953, 0.006665247032707682, 0.006408994188004207, 0.006171712263039458, 0.0059513701127588475, 0.0057462165130101155, 0.005554733551962801
    ],
        c;
    if (a <= 15) {
        c = a + a;
        if (c == parseInt(c)) return b[parseInt(c)];
        return jstat.lgamma(a + 1) - (a + 0.5) * Math.log(a) + a - jstat.LN_SQRT_2PI
    }
    c = a * a;
    if (a > 500) return (0.08333333333333333 - 0.002777777777777778 / c) / a;
    if (a > 80) return (0.08333333333333333 - (0.002777777777777778 - 7.936507936507937E-4 / c) / c) / a;
    if (a > 35) return (0.08333333333333333 - (0.002777777777777778 - (7.936507936507937E-4 -
        5.952380952380953E-4 / c) / c) / c) / a;
    return (0.08333333333333333 - (0.002777777777777778 - (7.936507936507937E-4 - (5.952380952380953E-4 - 8.417508417508417E-4 / c) / c) / c) / c) / a
};
jstat.lgamma = function (a) {
    return function (b) {
        var c, d;
        if (isNaN(b)) return b;
        if (b <= 0 && b == jstat.trunc(b)) {
            console.warn("Negative integer argument in lgammafn_sign");
            return Number.POSITIVE_INFINITY
        }
        c = Math.abs(b);
        if (c <= 10) return Math.log(Math.abs(jstat.gamma(b)));
        if (c > 2.5327372760800758E305) {
            console.warn("Illegal arguement passed to lgammafn_sign");
            return Number.POSITIVE_INFINITY
        }
        if (b > 0) return b > 1E17 ? b * (Math.log(b) - 1) : b > 4934720 ? jstat.LN_SQRT_2PI + (b - 0.5) * Math.log(b) - b : jstat.LN_SQRT_2PI + (b - 0.5) * Math.log(b) -
            b + jstat.lgammacor(b);
        d = Math.abs(Math.sin(Math.PI * c));
        if (d == 0) throw "Should never happen!!";
        c = jstat.LN_SQRT_PId2 + (b - 0.5) * Math.log(c) - b - Math.log(d) - jstat.lgammacor(c);
        if (Math.abs((b - jstat.trunc(b - 0.5)) * c / b) < 1.4901161193847656E-8) throw "The answer is less than half the precision argument too close to a negative integer";
        return c
    }(a, null)
};
jstat.gamma = function (a) {
    var b = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054],
        c = [-30.840230011973897, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.11842098015, 4755.846277527881, -134659.9598649693, -115132.25967555349],
        d = [-0.001910444077728, 8.4171387781295E-4, -5.952379913043012E-4, 7.936507935003503E-4, -0.0027777777777776816, 0.08333333333333333, 0.0057083835261],
        e, f, h, i, g, l, n;
    f = 0;
    h = 1;
    e = 0;
    g = a;
    if (g <= 0) {
        g = -a;
        n = jstat.trunc(g);
        i = g - n;
        if (i != 0) {
            if (n != jstat.trunc(n * 0.5) * 2) f = 1;
            h = -Math.PI / Math.sin(Math.PI * i);
            g += 1
        } else return Number.POSITIVE_INFINITY
    }
    if (g < jstat.DBL_EPSILON)
        if (g >= jstat.DBL_MIN) i = 1 / g;
        else return Number.POSITIVE_INFINITY;
        else if (g < 12) {
        n = g;
        if (g < 1) {
            l = g;
            g += 1
        } else {
            e = parseInt(g) - 1;
            g -= parseFloat(e);
            l = g - 1
        }
        i = 0;
        d = 1;
        for (a = 0; a < 8; ++a) {
            i = (i + b[a]) * l;
            d = d * l + c[a]
        }
        i = i / d + 1;
        if (n < g) i /= n;
        else if (n > g)
            for (a = 0; a < e; ++a) {
                i *= g;
                g += 1
            }
    } else if (g <= 171.624) {
        c = g * g;
        b = d[6];
        for (a = 0; a < 6; ++a) b = b / c + d[a];
        b = b / g -
            g + jstat.LN_SQRT_2PI;
        b += (g - 0.5) * Math.log(g);
        i = Math.exp(b)
    } else return Number.POSITIVE_INFINITY; if (f) i = -i;
    if (h != 1) i = h / i;
    return i
};
jstat.lgammacor = function (a) {
    var b = [+0.16663894804518634, -1.384948176067564E-5, +9.81082564692473E-9, -1.809129475572494E-11, +6.221098041892606E-14, -3.399615005417722E-16, +2.683181998482699E-18, -2.868042435334643E-20, +3.9628370610464347E-22, -6.831888753985767E-24, +1.4292273559424982E-25, -3.5475981581010704E-27, +1.025680058010471E-28, -3.401102254316749E-30, +1.276642195630063E-31],
        c;
    if (a < 10) return Number.NaN;
    else if (a >= 3.745194030963158E306) throw "Underflow error in lgammacor";
    else if (a < 9.490626562425156E7) {
        c =
            10 / a;
        return jstat.chebyshev(c * c * 2 - 1, b, 5) / a
    }
    return 1 / (a * 12)
};
jstat.incompleteBeta = function (a, b, c) {
    function d(f, h, i) {
        var g, l, n, p, k, o, m, t, q;
        m = f + h;
        q = f + 1;
        t = f - 1;
        p = 1;
        k = 1 - m * i / q;
        if (Math.abs(k) < 1.0E-30) k = 1.0E-30;
        o = k = 1 / k;
        for (g = 1; g <= 100; g++) {
            l = 2 * g;
            n = g * (h - g) * i / ((t + l) * (f + l));
            k = 1 + n * k;
            if (Math.abs(k) < 1.0E-30) k = 1.0E-30;
            p = 1 + n / p;
            if (Math.abs(p) < 1.0E-30) p = 1.0E-30;
            k = 1 / k;
            o *= k * p;
            n = -(f + g) * (m + g) * i / ((f + l) * (q + l));
            k = 1 + n * k;
            if (Math.abs(k) < 1.0E-30) k = 1.0E-30;
            p = 1 + n / p;
            if (Math.abs(p) < 1.0E-30) p = 1.0E-30;
            k = 1 / k;
            l = k * p;
            o *= l;
            if (Math.abs(l - 1) < 3.0E-12) break
        }
        if (g > 100) {
            console.warn("a or b too big, or MAXIT too small in betacf: " +
                f + ", " + h + ", " + i + ", " + o);
            return o
        }
        isNaN(o) && console.warn(f + ", " + h + ", " + i);
        return o
    }
    var e;
    if (c < 0 || c > 1) throw "bad x in routine incompleteBeta";
    e = c == 0 || c == 1 ? 0 : Math.exp(jstat.lgamma(a + b) - jstat.lgamma(a) - jstat.lgamma(b) + a * Math.log(c) + b * Math.log(1 - c));
    return c < (a + 1) / (a + b + 2) ? e * d(a, b, c) / a : 1 - e * d(b, a, 1 - c) / b
};
jstat.chebyshev = function (a, b, c) {
    var d, e, f, h;
    if (c < 1 || c > 1E3) return Number.NaN;
    if (a < -1.1 || a > 1.1) return Number.NaN;
    f = a * 2;
    a = e = d = 0;
    for (h = 1; h <= c; h++) {
        e = d;
        d = a;
        a = f * d - e + b[c - h]
    }
    return (a - e) * 0.5
};
jstat.fmin2 = function (a, b) {
    return a < b ? a : b
};
jstat.log1p = function (a) {
    var b = 0;
    if (a <= -1) return Number.NEGATIVE_INFINITY;
    if (a < 0 || a > 1) return Math.log(1 + a);
    for (var c = 1; c < 50; c++)
        if (c % 2 === 0) b -= Math.pow(a, c) / c;
        else b += Math.pow(a, c) / c;
    return b
};
jstat.expm1 = function (a) {
    var b;
    b = Math.abs(a);
    if (b < jstat.DBL_EPSILON) return a;
    if (b > 0.697) return Math.exp(a) - 1;
    b = b > 1.0E-8 ? Math.exp(a) - 1 : (a / 2 + 1) * a;
    b -= (1 + b) * (jstat.log1p(b) - a);
    return b
};
jstat.logBeta = function (a, b) {
    var c, d, e;
    d = e = a;
    if (b < d) d = b;
    if (b > e) e = b;
    if (d < 0) {
        console.warn("Both arguements must be >= 0");
        return Number.NaN
    } else if (d == 0) return Number.POSITIVE_INFINITY;
    else if (!jstat.isFinite(e)) return Number.NEGATIVE_INFINITY;
    if (d >= 10) {
        c = jstat.lgammacor(d) + jstat.lgammacor(e) - jstat.lgammacor(d + e);
        return Math.log(e) * -0.5 + jstat.LN_SQRT_2PI + c + (d - 0.5) * Math.log(d / (d + e)) + e * jstat.log1p(-d / (d + e))
    } else if (e >= 10) {
        c = jstat.lgammacor(e) - jstat.lgammacor(d + e);
        return jstat.lgamma(d) + c + d - d * Math.log(d +
            e) + (e - 0.5) * jstat.log1p(-d / (d + e))
    } else return Math.log(jstat.gamma(d) * (jstat.gamma(e) / jstat.gamma(d + e)))
};
jstat.dbinom_raw = function (a, b, c, d, e) {
    if (e == null) e = false;
    if (c == 0) return a == 0 ? e ? 0 : 1 : e ? Number.NEGATIVE_INFINITY : 0;
    if (d == 0) return a == b ? e ? 0 : 1 : e ? Number.NEGATIVE_INFINITY : 0;
    if (a == 0) {
        if (b == 0) return e ? 0 : 1;
        c = c < 0.1 ? -jstat.bd0(b, b * d) - b * c : b * Math.log(d);
        return e ? c : Math.exp(c)
    }
    if (a == b) {
        c = d < 0.1 ? -jstat.bd0(b, b * c) - b * d : b * Math.log(c);
        return e ? c : Math.exp(c)
    }
    if (a < 0 || a > b) return e ? Number.NEGATIVE_INFINITY : 0;
    c = jstat.stirlerr(b) - jstat.stirlerr(a) - jstat.stirlerr(b - a) - jstat.bd0(a, b * c) - jstat.bd0(b - a, b * d);
    a = Math.log(jstat.TWO_PI) +
        Math.log(a) + jstat.log1p(-a / b);
    return e ? c - 0.5 * a : Math.exp(c - 0.5 * a)
};
jstat.max = function (a) {
    for (var b = Number.NEGATIVE_INFINITY, c = 0; c < a.length; c++)
        if (a[c] > b) b = a[c];
    return b
};
Range = Class.extend({
    init: function (a, b, c) {
        this._minimum = parseFloat(a);
        this._maximum = parseFloat(b);
        this._numPoints = parseFloat(c)
    },
    getMinimum: function () {
        return this._minimum
    },
    getMaximum: function () {
        return this._maximum
    },
    getNumPoints: function () {
        return this._numPoints
    },
    getPoints: function () {
        for (var a = [], b = this._minimum, c = (this._maximum - this._minimum) / (this._numPoints - 1), d = 0; d < this._numPoints; d++) {
            a[d] = parseFloat(b.toFixed(6));
            b += c
        }
        return a
    }
});
Range.validate = function (a) {
    if (!a instanceof Range) return false;
    if (isNaN(a.getMinimum()) || isNaN(a.getMaximum()) || isNaN(a.getNumPoints()) || a.getMaximum() < a.getMinimum() || a.getNumPoints() <= 0) return false;
    return true
};
var ContinuousDistribution = Class.extend({
    init: function (a) {
        this._name = a
    },
    toString: function () {
        return this._string
    },
    getName: function () {
        return this._name
    },
    getClassName: function () {
        return this._name + "Distribution"
    },
    density: function (a) {
        if (isNaN(a))
            if (Range.validate(a)) {
                for (var b = (a.getMaximum() - a.getMinimum()) / a.getNumPoints(), c = a.getMinimum(), d = [], e = 0; e < a.getNumPoints(); e++) {
                    d[e] = parseFloat(this._pdf(c).toFixed(15));
                    c += b
                }
                return d
            } else throw "Invalid parameter supplied to " + this.getClassName() + ".density()";
            else return parseFloat(this._pdf(a).toFixed(15))
    },
    cumulativeDensity: function (a) {
        if (isNaN(a))
            if (Range.validate(a)) {
                for (var b = (a.getMaximum() - a.getMinimum()) / a.getNumPoints(), c = a.getMinimum(), d = [], e = 0; e < a.getNumPoints(); e++) {
                    d[e] = parseFloat(this._cdf(c).toFixed(15));
                    c += b
                }
                return d
            } else throw "Invalid parameter supplied to " + this.getClassName() + ".cumulativeDensity()";
            else return parseFloat(this._cdf(a).toFixed(15))
    },
    getRange: function (a, b) {
        if (a == null) a = 5;
        if (b == null) b = 100;
        var c = this.getMean() - a * Math.sqrt(this.getVariance()),
            d = this.getMean() + a * Math.sqrt(this.getVariance());
        if (this.getClassName() == "GammaDistribution" || this.getClassName() == "LogNormalDistribution") {
            c = 0;
            d = this.getMean() + a * Math.sqrt(this.getVariance())
        } else if (this.getClassName() == "BetaDistribution") {
            c = 0;
            d = 1
        }
        return new Range(c, d, b)
    },
    getVariance: function () {},
    getMean: function () {},
    getQuantile: function (a) {
        function b(e, f) {
            for (var h = e.getPoints(), i = 0, g = 999, l = 0; l < h.length; l++) {
                var n = c.cumulativeDensity(h[l]);
                n = Math.abs(n - f);
                if (n < g) {
                    i = l;
                    g = n
                }
            }
            if (g <= 1.0E-5) return h[i];
            else {
                h = new Range(h[i - 1], h[i + 1], 20);
                return b(h, f)
            }
        }
        var c = this,
            d = this.getRange(5, 20);
        return b(d, a)
    }
}),
    NormalDistribution = ContinuousDistribution.extend({
        init: function (a, b) {
            this._super("Normal");
            this._mean = parseFloat(a);
            this._sigma = parseFloat(b);
            this._string = "Normal (" + this._mean.toFixed(2) + ", " + this._sigma.toFixed(2) + ")"
        },
        _pdf: function (a, b) {
            if (b == null) b = false;
            var c = this._sigma,
                d = this._mean;
            if (!jstat.isFinite(c)) return b ? Number.NEGATIVE_INFINITY : 0;
            if (!jstat.isFinite(a) && d == a) return Number.NaN;
            if (c <= 0) {
                if (c <
                    0) throw "invalid sigma in _pdf";
                return a == d ? Number.POSITIVE_INFINITY : b ? Number.NEGATIVE_INFINITY : 0
            }
            a = (a - d) / c;
            if (!jstat.isFinite(a)) return b ? Number.NEGATIVE_INFINITY : 0;
            return b ? -(jstat.LN_SQRT_2PI + 0.5 * a * a + Math.log(c)) : jstat.ONE_SQRT_2PI * Math.exp(-0.5 * a * a) / c
        },
        _cdf: function (a, b, c) {
            if (b == null) b = true;
            if (c == null) c = false;
            var d, e = this._mean;
            d = this._sigma;
            var f, h;
            if (b)
                if (c) {
                    f = Number.NEGATIVE_INFINITY;
                    h = 0
                } else {
                    f = 0;
                    h = 1
                } else if (c) {
                f = 0;
                h = Number.NEGATIVE_INFINITY
            } else {
                f = 1;
                h = 0
            } if (!jstat.isFinite(a) && e == a) return Number.NaN;
            if (d <= 0) {
                if (d < 0) {
                    console.warn("Sigma is less than 0");
                    return Number.NaN
                }
                return a < e ? f : h
            }
            d = (a - e) / d;
            if (!jstat.isFinite(d)) return a < e ? f : h;
            a = d;
            a = function (i, g, l, n, p) {
                var k = [2.2352520354606837, 161.02823106855587, 1067.6894854603709, 18154.98125334356, 0.06568233791820745],
                    o = [47.202581904688245, 976.0985517377767, 10260.932208618979, 45507.78933502673],
                    m = [0.39894151208813466, 8.883149794388377, 93.50665613217785, 597.2702763948002, 2494.5375852903726, 6848.190450536283, 11602.65143764735, 9842.714838383978, 1.0765576773720192E-8],
                    t = [22.266688044328117, 235.387901782625, 1519.3775994075547, 6485.558298266761, 18615.571640885097, 34900.95272114598, 38912.00328609327, 19685.429676859992],
                    q = [0.215898534057957, 0.12740116116024736, 0.022235277870649807, 0.0014216191932278934, 2.9112874951168793E-5, 0.023073441764940174],
                    v = [1.284260096144911, 0.4682382124808651, 0.06598813786892856, 0.0037823963320275824, 7.297515550839662E-5],
                    r, u, w, s, x;
                r = jstat.DBL_EPSILON * 0.5;
                x = n != 1;
                n = n != 0;
                w = Math.abs(i);
                if (w <= 0.67448975) {
                    if (w > r) {
                        m = i * i;
                        u = k[4] * m;
                        r = m;
                        for (s = 0; s < 3; ++s) {
                            u =
                                (u + k[s]) * m;
                            r = (r + o[s]) * m
                        }
                    } else u = r = 0;
                    k = i * (u + k[3]) / (r + o[3]);
                    if (x) g = 0.5 + k;
                    if (n) l = 0.5 - k;
                    if (p) {
                        if (x) g = Math.log(g);
                        if (n) l = Math.log(l)
                    }
                } else if (w <= jstat.SQRT_32) {
                    u = m[8] * w;
                    r = w;
                    for (s = 0; s < 7; ++s) {
                        u = (u + m[s]) * w;
                        r = (r + t[s]) * w
                    }
                    k = (u + m[7]) / (r + t[7]);
                    m = jstat.trunc(i * 16) / 16;
                    o = (i - m) * (i + m);
                    if (p) {
                        g = -m * m * 0.5 + -o * 0.5 + Math.log(k);
                        if (x && i > 0 || n && i <= 0) l = jstat.log1p(-Math.exp(-m * m * 0.5) * Math.exp(-o * 0.5) * k)
                    } else {
                        g = Math.exp(-m * m * 0.5) * Math.exp(-o * 0.5) * k;
                        l = 1 - g
                    } if (i > 0) {
                        k = g;
                        if (x) g = l;
                        l = k
                    }
                } else if (p && w < 1.0E170 || x && -37.5193 < i && i < 8.2924 ||
                    n && -8.2924 < i && i < 37.5193) {
                    m = 1 / (i * i);
                    u = q[5] * m;
                    r = m;
                    for (s = 0; s < 4; ++s) {
                        u = (u + q[s]) * m;
                        r = (r + v[s]) * m
                    }
                    k = m * (u + q[4]) / (r + v[4]);
                    k = (jstat.ONE_SQRT_2PI - k) / w;
                    m = jstat.trunc(i * 16) / 16;
                    o = (i - m) * (i + m);
                    if (p) {
                        g = -m * m * 0.5 + -o * 0.5 + Math.log(k);
                        if (x && i > 0 || n && i <= 0) l = jstat.log1p(-Math.exp(-m * m * 0.5) * Math.exp(-o * 0.5) * k)
                    } else {
                        g = Math.exp(-m * m * 0.5) * Math.exp(-o * 0.5) * k;
                        l = 1 - g
                    } if (i > 0) {
                        k = g;
                        if (x) g = l;
                        l = k
                    }
                } else if (i > 0) {
                    g = p ? 0 : 1;
                    l = p ? Number.NEGATIVE_INFINITY : 0
                } else {
                    g = p ? Number.NEGATIVE_INFINITY : 0;
                    l = p ? 0 : 1
                }
                return [g, l]
            }(a, d, void 0, b ? false : true, c);
            return b ?
                a[0] : a[1]
        },
        getMean: function () {
            return this._mean
        },
        getSigma: function () {
            return this._sigma
        },
        getVariance: function () {
            return this._sigma * this._sigma
        }
    }),
    LogNormalDistribution = ContinuousDistribution.extend({
        init: function (a, b) {
            this._super("LogNormal");
            this._location = parseFloat(a);
            this._scale = parseFloat(b);
            this._string = "LogNormal (" + this._location.toFixed(2) + ", " + this._scale.toFixed(2) + ")"
        },
        _pdf: function (a, b) {
            var c, d = this._scale;
            c = this._location;
            if (b == null) b = false;
            if (d <= 0) throw "Illegal parameter in _pdf";
            if (a <=
                0) return b ? Number.NEGATIVE_INFINITY : 0;
            c = (Math.log(a) - c) / d;
            return b ? -(jstat.LN_SQRT_2PI + 0.5 * c * c + Math.log(a * d)) : jstat.ONE_SQRT_2PI * Math.exp(-0.5 * c * c) / (a * d)
        },
        _cdf: function (a, b, c) {
            var d = this._scale,
                e = this._location;
            if (b == null) b = true;
            if (c == null) c = false;
            if (d <= 0) throw "illegal std in _cdf";
            if (a > 0) return (new NormalDistribution(e, d))._cdf(Math.log(a), b, c);
            return b ? c ? Number.NEGATIVE_INFINITY : 0 : c ? 0 : 1
        },
        getLocation: function () {
            return this._location
        },
        getScale: function () {
            return this._scale
        },
        getMean: function () {
            return Math.exp((this._location +
                this._scale) / 2)
        },
        getVariance: function () {
            return (Math.exp(this._scale) - 1) * Math.exp(2 * this._location + this._scale)
        }
    }),
    GammaDistribution = ContinuousDistribution.extend({
        init: function (a, b) {
            this._super("Gamma");
            this._shape = parseFloat(a);
            this._scale = parseFloat(b);
            this._string = "Gamma (" + this._shape.toFixed(2) + ", " + this._scale.toFixed(2) + ")"
        },
        _pdf: function (a, b) {
            var c, d = this._shape,
                e = this._scale;
            if (b == null) b = false;
            if (d < 0 || e <= 0) throw "Illegal argument in _pdf";
            if (a < 0) return b ? Number.NEGATIVE_INFINITY : 0;
            if (d == 0) return a ==
                0 ? Number.POSITIVE_INFINITY : b ? Number.NEGATIVE_INFINITY : 0;
            if (a == 0) {
                if (d < 1) return Number.POSITIVE_INFINITY;
                if (d > 1) return b ? Number.NEGATIVE_INFINITY : 0;
                return b ? -Math.log(e) : 1 / e
            }
            if (d < 1) {
                c = jstat.dopois_raw(d, a / e, b);
                return b ? c + Math.log(d / a) : c * d / a
            }
            c = jstat.dopois_raw(d - 1, a / e, b);
            return b ? c - Math.log(e) : c / e
        },
        _cdf: function (a, b, c) {
            function d() {
                h = Math.sqrt(e) * 3 * (Math.pow(a / e, 1 / 3) + 1 / (9 * e) - 1);
                return (new NormalDistribution(0, 1))._cdf(h, b, c)
            }
            if (b == null) b = true;
            if (c == null) c = false;
            var e = this._shape,
                f = this._scale,
                h, i, g,
                l, n, p, k, o, m, t, q;
            if (e <= 0 || f <= 0) {
                console.warn("Invalid gamma params in _cdf");
                return Number.NaN
            }
            a /= f;
            if (isNaN(a)) return a;
            if (a <= 0) return b ? c ? Number.NEGATIVE_INFINITY : 0 : c ? 0 : 1;
            if (e > 1E5) return d();
            if (a > 1E8 * e) return a > jstat.DBL_MAX * e ? b ? c ? 0 : 1 : c ? Number.NEGATIVE_INFINITY : 0 : d();
            if (a <= 1 || a < e) {
                q = 1;
                f = e * Math.log(a) - a - jstat.lgamma(e + 1);
                m = g = 1;
                k = e;
                do {
                    k += 1;
                    g *= a / k;
                    m += g
                } while (g > jstat.DBL_EPSILON * m)
            } else {
                q = 0;
                f = e * Math.log(a) - a - jstat.lgamma(e);
                k = 1 - e;
                o = k + a + 1;
                h = 1;
                i = a;
                g = a + 1;
                l = a * o;
                m = g / l;
                for (t = 1;; t++) {
                    k += 1;
                    o += 2;
                    p = k * t;
                    n = o * g -
                        p * h;
                    p = o * l - p * i;
                    if (Math.abs(p) > 0) {
                        i = m;
                        m = n / p;
                        if (Math.abs(i - m) <= jstat.DBL_EPSILON * jstat.fmin2(1, m)) break
                    }
                    h = g;
                    i = l;
                    g = n;
                    l = p;
                    if (Math.abs(n) >= 1.0E37) {
                        h /= 1.0E37;
                        i /= 1.0E37;
                        g /= 1.0E37;
                        l /= 1.0E37
                    }
                }
            }
            f += Math.log(m);
            b = b == q;
            if (c && b) return f;
            return b ? Math.exp(f) : c ? f > -Math.LN2 ? Math.log(-jstat.expm1(f)) : jstat.log1p(-Math.exp(f)) : -jstat.expm1(f)
        },
        getShape: function () {
            return this._shape
        },
        getScale: function () {
            return this._scale
        },
        getMean: function () {
            return this._shape * this._scale
        },
        getVariance: function () {
            return this._shape * Math.pow(this._scale,
                2)
        }
    }),
    BetaDistribution = ContinuousDistribution.extend({
        init: function (a, b) {
            this._super("Beta");
            this._alpha = parseFloat(a);
            this._beta = parseFloat(b);
            this._string = "Beta (" + this._alpha.toFixed(2) + ", " + this._beta.toFixed(2) + ")"
        },
        _pdf: function (a, b) {
            if (b == null) b = false;
            var c = this._alpha,
                d = this._beta;
            if (c <= 0 || d <= 0) {
                console.warn("Illegal arguments in _pdf");
                return Number.NaN
            }
            if (a < 0 || a > 1) return b ? Number.NEGATIVE_INFINITY : 0;
            if (a == 0) {
                if (c > 1) return b ? Number.NEGATIVE_INFINITY : 0;
                if (c < 1) return Number.POSITIVE_INFINITY;
                return b ? Math.log(d) : d
            }
            if (a == 1) {
                if (d > 1) return b ? Number.NEGATIVE_INFINITY : 0;
                if (d < 1) return Number.POSITIVE_INFINITY;
                return b ? Math.log(c) : c
            }
            c = c <= 2 || d <= 2 ? (c - 1) * Math.log(a) + (d - 1) * jstat.log1p(-a) - jstat.logBeta(c, d) : Math.log(c + d - 1) + jstat.dbinom_raw(c - 1, c + d - 2, a, 1 - a, true);
            return b ? c : Math.exp(c)
        },
        _cdf: function (a, b, c) {
            if (b == null) b = true;
            if (c == null) c = false;
            var d = this._alpha,
                e = this._beta;
            if (d <= 0 || e <= 0) {
                console.warn("Invalid argument in _cdf");
                return Number.NaN
            }
            if (a <= 0) return b ? c ? Number.NEGATIVE_INFINITY : 0 : c ? 0.1 :
                1;
            if (a >= 1) return b ? c ? 0.1 : 1 : c ? Number.NEGATIVE_INFINITY : 0;
            return jstat.incompleteBeta(d, e, a)
        },
        getAlpha: function () {
            return this._alpha
        },
        getBeta: function () {
            return this._beta
        },
        getMean: function () {
            return this._alpha / (this._alpha + this._beta)
        },
        getVariance: function () {
            return this._alpha * this._beta / (Math.pow(this._alpha + this._beta, 2) * (this._alpha + this._beta + 1))
        }
    }),
    StudentTDistribution = ContinuousDistribution.extend({
        init: function (a, b) {
            this._super("StudentT");
            this._dof = parseFloat(a);
            if (b != null) {
                this._mu = parseFloat(b);
                this._string = "StudentT (" + this._dof.toFixed(2) + ", " + this._mu.toFixed(2) + ")"
            } else {
                this._mu = 0;
                this._string = "StudentT (" + this._dof.toFixed(2) + ")"
            }
        },
        _pdf: function (a, b) {
            if (b == null) b = false;
            if (this._mu == null) return this._dt(a, b);
            else {
                var c = this._dnt(a, b);
                c > 1 && console.warn("x:" + a + ", y: " + c);
                return c
            }
        },
        _cdf: function (a, b, c) {
            if (b == null) b = true;
            if (c == null) c = false;
            return this._mu == null ? this._pt(a, b, c) : this._pnt(a, b, c)
        },
        _dt: function (a, b) {
            var c, d, e = this._dof;
            if (e <= 0) {
                console.warn("Invalid parameters in _dt");
                return Number.NaN
            }
            if (!jstat.isFinite(a)) return b ?
                Number.NEGATIVE_INFINITY : 0;
            if (!jstat.isFinite(e)) return (new NormalDistribution(0, 1)).density(a, b);
            c = -jstat.bd0(e / 2, (e + 1) / 2) + jstat.stirlerr((e + 1) / 2) - jstat.stirlerr(e / 2);
            d = a * a > 0.2 * e ? Math.log(1 + a * a / e) * e / 2 : -jstat.bd0(e / 2, (e + a * a) / 2) + a * a / 2;
            e = jstat.TWO_PI * (1 + a * a / e);
            c = c - d;
            return b ? -0.5 * Math.log(e) + c : Math.exp(c) / Math.sqrt(e)
        },
        _dnt: function (a, b) {
            if (b == null) b = false;
            var c = this._dof,
                d = this._mu;
            if (c <= 0) {
                console.warn("Illegal arguments _dnf");
                return Number.NaN
            }
            if (d == 0) return this._dt(a, b);
            if (!jstat.isFinite(a)) return b ?
                Number.NEGATIVE_INFINITY : 0;
            if (!isFinite(c) || c > 1E8) return (new NormalDistribution(d, 1)).density(a, b);
            if (Math.abs(a) > Math.sqrt(c * jstat.DBL_EPSILON)) {
                d = new StudentTDistribution(c + 2, d);
                c = Math.log(c) - Math.log(Math.abs(a)) + Math.log(Math.abs(d._pnt(a * Math.sqrt((c + 2) / c), true, false) - this._pnt(a, true, false)))
            } else c = jstat.lgamma((c + 1) / 2) - jstat.lgamma(c / 2) - 0.5 * (Math.log(Math.PI) + Math.log(c) + d * d);
            return b ? c : Math.exp(c)
        },
        _pt: function (a, b, c) {
            if (b == null) b = true;
            if (c == null) c = false;
            var d, e;
            d = this._dof;
            var f, h;
            if (b) {
                f =
                    c ? Number.NEGATIVE_INFINITY : 0;
                h = 1
            } else if (c) {
                f = 0;
                h = Number.NEGATIVE_INFINITY
            } else {
                f = 1;
                h = 0
            } if (d <= 0) {
                console.warn("Invalid T distribution _pt");
                return Number.NaN
            }
            e = new NormalDistribution(0, 1);
            if (!jstat.isFinite(a)) return a < 0 ? f : h;
            if (!jstat.isFinite(d)) return e._cdf(a, b, c);
            if (d > 4E5) {
                d = 1 / (4 * d);
                return e._cdf(a * (1 - d) / sqrt(1 + a * a * 2 * d), b, c)
            }
            e = 1 + a / d * a;
            if (e > 1.0E100) {
                d = -0.5 * d * (2 * Math.log(Math.abs(a)) - Math.log(d)) - jstat.logBeta(0.5 * d, 0.5) - Math.log(0.5 * d);
                d = c ? d : Math.exp(d)
            } else if (d > a * a) {
                b = new BetaDistribution(0.5,
                    d / 2);
                return b._cdf(a * a / (d + a * a), false, c)
            } else {
                b = new BetaDistribution(d / 2, 0.5);
                return b._cdf(1 / e, true, c)
            } if (a <= 0) b = !b;
            if (c) return b ? jstat.log1p(-0.5 * Math.exp(d)) : d - M_LN2;
            else {
                d /= 2;
                return b ? 0.5 - d + 0.5 : d
            }
        },
        _pnt: function (a, b, c) {
            var d = this._dof,
                e = this._mu,
                f, h;
            if (b) {
                f = c ? Number.NEGATIVE_INFINITY : 0;
                h = 1
            } else if (c) {
                f = 0;
                h = Number.NEGATIVE_INFINITY
            } else {
                f = 1;
                h = 0
            }
            var i, g, l, n, p, k, o, m, t, q, v;
            if (d <= 0) return Number.NaN;
            else if (d == 0) return this._pt(a);
            if (!jstat.isFinite(a)) return a < 0 ? f : h;
            if (a >= 0) {
                h = false;
                n = a;
                e = e
            } else {
                if (e >=
                    40 && (!c || !b)) return f;
                h = true;
                n = -a;
                e = -e
            } if (d > 4E5 || e * e > 2 * Math.LN2 * -jstat.DBL_MIN_EXP) {
                f = 1 / (4 * d);
                a = new NormalDistribution(e, Math.sqrt(1 + n * n * 2 * f));
                return a._cdf(n * (1 - f), b != h, c)
            }
            a = a * a;
            l = d / (a + d);
            a /= a + d;
            if (a > 0) {
                n = e * e;
                o = 0.5 * Math.exp(-0.5 * n);
                if (o == 0) {
                    console.warn("underflow in _pnt");
                    return f
                }
                m = jstat.SQRT_2dPI * o * e;
                f = 0.5 - o;
                if (f < 1.0E-7) f = -0.5 * jstat.expm1(-0.5 * n);
                g = 0.5;
                d = 0.5 * d;
                l = Math.pow(l, d);
                i = jstat.LN_SQRT_PI + jstat.lgamma(d) - jstat.lgamma(0.5 + d);
                q = jstat.incompleteBeta(g, d, a);
                k = 2 * l * Math.exp(g * Math.log(a) - i);
                i = d * a;
                t = i < jstat.DBL_EPSILON ? i : 1 - l;
                p = i * l;
                i = o * q + m * t;
                for (v = 1; v <= 1E3; v++) {
                    g += 1;
                    q -= k;
                    t -= p;
                    k *= a * (g + d - 1) / g;
                    p *= a * (g + d - 0.5) / (g + 0.5);
                    o *= n / (2 * v);
                    m *= n / (2 * v + 1);
                    i += o * q + m * t;
                    f -= o;
                    if (f < -1.0E-10) {
                        console.write("precision error _pnt");
                        break
                    }
                    if (f <= 0 && v > 1) break;
                    l = 2 * f * (q - k);
                    if (Math.abs(l) < 1.0E-7) break
                }
                if (v == 1E3) throw "Non-convergence _pnt";
            } else i = 0;
            a = new NormalDistribution(0, 1);
            i += a._cdf(-e, true, false);
            b = b != h;
            i > 1 - 1.0E-10 && b && console.warn("precision error _pnt");
            h = jstat.fmin2(i, 1);
            return b ? c ? Math.log(h) : h : c ? jstat.log1p(-h) :
                0.5 - h + 0.5
        },
        getDegreesOfFreedom: function () {
            return this._dof
        },
        getNonCentralityParameter: function () {
            return this._mu
        },
        getMean: function () {
            if (this._dof > 1) {
                var a = 0.5 * Math.log(this._dof / 2) + jstat.lgamma((this._dof - 1) / 2) - jstat.lgamma(this._dof / 2);
                return Math.exp(a) * this._mu
            } else return Number.NaN
        },
        getVariance: function () {
            return this._dof > 2 ? this._dof * (1 + this._mu * this._mu) / (this._dof - 2) - this._mu * this._mu * this._dof / 2 * Math.pow(Math.exp(jstat.lgamma((this._dof - 1) / 2) - jstat.lgamma(this._dof / 2)), 2) : Number.NaN
        }
    }),
    Plot =
        Class.extend({
            init: function (a, b) {
                this._container = "#" + String(a);
                this._plots = [];
                this._flotObj = null;
                this._locked = false;
                this._options = b != null ? b : {}
            },
            getContainer: function () {
                return this._container
            },
            getGraph: function () {
                return this._flotObj
            },
            setData: function (a) {
                this._plots = a
            },
            clear: function () {
                this._plots = []
            },
            showLegend: function () {
                this._options.legend = {
                    show: true
                };
                this.render()
            },
            hideLegend: function () {
                this._options.legend = {
                    show: false
                };
                this.render()
            },
            render: function () {
                this._flotObj = null;
                this._flotObj = $.plot($(this._container),
                    this._plots, this._options)
            }
        }),
    DistributionPlot = Plot.extend({
        init: function (a, b, c, d) {
            this._super(a, d);
            this._showPDF = true;
            this._showCDF = false;
            this._pdfValues = [];
            this._cdfValues = [];
            this._maxY = 1;
            this._plotType = "line";
            this._fill = false;
            this._distribution = b;
            this._range = c != null && Range.validate(c) ? c : this._distribution.getRange();
            if (this._distribution != null) this._maxY = this._generateValues();
            else {
                this._options.xaxis = {
                    min: c.getMinimum(),
                    max: c.getMaximum()
                };
                this._options.yaxis = {
                    max: 1
                }
            }
            this.render()
        },
        setHover: function (a) {
            if (a) {
                if (this._options.grid ==
                    null) this._options.grid = {
                    hoverable: true,
                    mouseActiveRadius: 25
                };
                else {
                    this._options.grid.hoverable = true;
                    this._options.grid.mouseActiveRadius = 25
                }
                var b = null;
                $(this._container).bind("plothover", function (c, d, e) {
                    $("#x").text(d.x.toFixed(2));
                    $("#y").text(d.y.toFixed(2));
                    if (e) {
                        if (b != e.datapoint) {
                            b = e.datapoint;
                            $("#jstat_tooltip").remove();
                            var f = jstat.toSigFig(e.datapoint[0], 2),
                                h = jstat.toSigFig(e.datapoint[1], 2);
                            c = null;
                            d = e.series.color;
                            if (e.series.label == "PDF") {
                                c = "P(" + f + ") = " + h;
                                d = ["#fee", "#fdd", "#C05F5F"]
                            } else {
                                c =
                                    "F(" + f + ") = " + h;
                                d = ["#eef", "#ddf", "#4A4AC0"]
                            }
                            f = e.pageX;
                            e = e.pageY;
                            d = d;
                            $('<div id="jstat_tooltip">' + c + "</div>").css({
                                position: "absolute",
                                display: "none",
                                top: e + 15,
                                "font-size": "small",
                                left: f + 5,
                                border: "1px solid " + d[1],
                                color: d[2],
                                padding: "5px",
                                "background-color": d[0],
                                opacity: 0.8
                            }).appendTo("body").show()
                        }
                    } else {
                        $("#jstat_tooltip").remove();
                        b = null
                    }
                });
                $(this._container).bind("mouseleave", function () {
                    if ($("#jstat_tooltip").is(":visible")) {
                        $("#jstat_tooltip").remove();
                        b = null
                    }
                })
            } else {
                if (this._options.grid == null) this._options.grid = {
                    hoverable: false
                };
                else this._options.grid.hoverable = false;
                $(this._container).unbind("plothover")
            }
            this.render()
        },
        setType: function (a) {
            this._plotType = a;
            a = {};
            var b = {};
            if (this._plotType == "line") {
                a.show = true;
                b.show = false
            } else if (this._plotType == "points") {
                a.show = false;
                b.show = true
            } else if (this._plotType == "both") {
                a.show = true;
                b.show = true
            }
            if (this._options.series == null) this._options.series = {
                lines: a,
                points: b
            };
            else {
                if (this._options.series.lines == null) this._options.series.lines = a;
                else this._options.series.lines.show =
                    a.show; if (this._options.series.points == null) this._options.series.points = b;
                else this._options.series.points.show = b.show
            }
            this.render()
        },
        setFill: function (a) {
            this._fill = a;
            if (this._options.series == null) this._options.series = {
                lines: {
                    fill: a
                }
            };
            else if (this._options.series.lines == null) this._options.series.lines = {
                fill: a
            };
            else this._options.series.lines.fill = a;
            this.render()
        },
        clear: function () {
            this._super();
            this._distribution = null;
            this._pdfValues = [];
            this._cdfValues = [];
            this.render()
        },
        _generateValues: function () {
            this._cdfValues = [];
            this._pdfValues = [];
            var a = this._range.getPoints();
            this._options.xaxis = {
                min: a[0],
                max: a[a.length - 1]
            };
            for (var b = this._distribution.density(this._range), c = this._distribution.cumulativeDensity(this._range), d = 0; d < a.length; d++) {
                if (b[d] == Number.POSITIVE_INFINITY || b[d] == Number.NEGATIVE_INFINITY) b[d] = null;
                if (c[d] == Number.POSITIVE_INFINITY || c[d] == Number.NEGATIVE_INFINITY) c[d] = null;
                this._pdfValues.push([a[d], b[d]]);
                this._cdfValues.push([a[d], c[d]])
            }
            return jstat.max(b)
        },
        showPDF: function () {
            this._showPDF = true;
            this.render()
        },
        hidePDF: function () {
            this._showPDF = false;
            this.render()
        },
        showCDF: function () {
            this._showCDF = true;
            this.render()
        },
        hideCDF: function () {
            this._showCDF = false;
            this.render()
        },
        setDistribution: function (a, b) {
            this._distribution = a;
            this._range = b != null ? b : a.getRange();
            this._maxY = this._generateValues();
            this._options.yaxis = {
                max: this._maxY * 1.1
            };
            this.render()
        },
        getDistribution: function () {
            return this._distribution
        },
        getRange: function () {
            return this._range
        },
        setRange: function (a) {
            this._range = a;
            this._generateValues();
            this.render()
        },
        render: function () {
            if (this._distribution != null)
                if (this._showPDF && this._showCDF) {
                    this.setData([{
                        yaxis: 1,
                        data: this._pdfValues,
                        color: "rgb(237,194,64)",
                        clickable: false,
                        hoverable: true,
                        label: "PDF"
                    }, {
                        yaxis: 2,
                        data: this._cdfValues,
                        clickable: false,
                        color: "rgb(175,216,248)",
                        hoverable: true,
                        label: "CDF"
                    }]);
                    this._options.yaxis = {
                        max: this._maxY * 1.1
                    }
                } else if (this._showPDF) {
                this.setData([{
                    data: this._pdfValues,
                    hoverable: true,
                    color: "rgb(237,194,64)",
                    clickable: false,
                    label: "PDF"
                }]);
                this._options.yaxis = {
                    max: this._maxY * 1.1
                }
            } else {
                if (this._showCDF) {
                    this.setData([{
                        data: this._cdfValues,
                        hoverable: true,
                        color: "rgb(175,216,248)",
                        clickable: false,
                        label: "CDF)"
                    }]);
                    this._options.yaxis = {
                        max: 1.1
                    }
                }
            } else this.setData([]);
            this._super()
        }
    }),
    DistributionFactory = {};
DistributionFactory.build = function (a) {
    if (a.NormalDistribution)
        if (a.NormalDistribution.mean != null && a.NormalDistribution.standardDeviation != null) return new NormalDistribution(a.NormalDistribution.mean[0], a.NormalDistribution.standardDeviation[0]);
        else throw "Malformed JSON provided to DistributionBuilder " + a;
        else if (a.LogNormalDistribution)
        if (a.LogNormalDistribution.location != null && a.LogNormalDistribution.scale != null) return new LogNormalDistribution(a.LogNormalDistribution.location[0], a.LogNormalDistribution.scale[0]);
        else throw "Malformed JSON provided to DistributionBuilder " + a;
        else if (a.BetaDistribution)
        if (a.BetaDistribution.alpha != null && a.BetaDistribution.beta != null) return new BetaDistribution(a.BetaDistribution.alpha[0], a.BetaDistribution.beta[0]);
        else throw "Malformed JSON provided to DistributionBuilder " + a;
        else if (a.GammaDistribution)
        if (a.GammaDistribution.shape != null && a.GammaDistribution.scale != null) return new GammaDistribution(a.GammaDistribution.shape[0], a.GammaDistribution.scale[0]);
        else throw "Malformed JSON provided to DistributionBuilder " +
            a;
        else if (a.StudentTDistribution)
        if (a.StudentTDistribution.degreesOfFreedom != null && a.StudentTDistribution.nonCentralityParameter != null) return new StudentTDistribution(a.StudentTDistribution.degreesOfFreedom[0], a.StudentTDistribution.nonCentralityParameter[0]);
        else if (a.StudentTDistribution.degreesOfFreedom != null) return new StudentTDistribution(a.StudentTDistribution.degreesOfFreedom[0]);
    else throw "Malformed JSON provided to DistributionBuilder " + a;
    else throw "Malformed JSON provided to DistributionBuilder " +
        a;
};