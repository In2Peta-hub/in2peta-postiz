import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  A as t,
  C as n,
  E as r,
  F as i,
  L as a,
  M as o,
  N as s,
  O as c,
  P as l,
  S as u,
  T as d,
  _ as f,
  b as p,
  g as m,
  j as ee,
  k as te,
  l as h,
  s as g,
  u as _,
  v,
  z as y,
} from "./react.C83sJsFz.mjs";
import {
  E as b,
  G as ne,
  T as re,
  V as ie,
  a as x,
  et as S,
  f as ae,
  g as C,
  nt as w,
  q as oe,
  r as se,
  t as T,
} from "./motion.DVY4-TFg.mjs";
import {
  Dt as E,
  E as ce,
  Et as le,
  K as D,
  L as ue,
  N as O,
  P as de,
  Q as fe,
  dt as pe,
  g as me,
  k as he,
  o as k,
  yt as ge,
} from "./framer.CFqKih1k.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./kumYuXBDg.BDiDl76I.mjs";
import { i as xe, n as Se, r as Ce, t as A } from "./jXwTlEdH0.D4YWS_vr.mjs";
import { i as we, r as Te } from "./lWCsMyG06.CDHEYcI6.mjs";
var Ee,
  De,
  j = e(() => {
    ((Ee = (e) => e), (De = (e) => typeof e == `function`));
  }),
  Oe = e(() => {
    j();
  }),
  M = e(() => {
    (j(), Oe());
  }),
  N,
  ke = e(() => {
    ((N = {}),
      Object.defineProperty(N, `__esModule`, { value: !0 }),
      (N.warning = function () {}),
      (N.invariant = function () {}),
      N.__esModule,
      N.warning,
      N.invariant);
  }),
  Ae = e(() => {});
function je(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
    var i = 0;
    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]]);
  }
  return n;
}
var Me = e(() => {}),
  Ne = e(() => {
    j();
  });
function Pe(e, t) {
  return (
    typeof e == `string`
      ? t
        ? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
        : (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
function Fe(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
  if (typeof IntersectionObserver > `u`) return () => {};
  let a = Pe(e),
    o = new WeakMap(),
    s = new IntersectionObserver(
      (e) => {
        e.forEach((e) => {
          let n = o.get(e.target);
          if (e.isIntersecting !== !!n)
            if (e.isIntersecting) {
              let n = t(e);
              De(n) ? o.set(e.target, n) : s.unobserve(e.target);
            } else n && (n(e), o.delete(e.target));
        });
      },
      { root: n, rootMargin: r, threshold: typeof i == `number` ? i : V[i] }
    );
  return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function Ie(e, t) {
  if (t) {
    let { inlineSize: e, blockSize: n } = t[0];
    return { width: e, height: n };
  }
  return e instanceof SVGElement && `getBBox` in e
    ? e.getBBox()
    : { width: e.offsetWidth, height: e.offsetHeight };
}
function Le({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = H.get(e)) == null ||
    r.forEach((r) => {
      r({
        target: e,
        contentSize: t,
        get size() {
          return Ie(e, n);
        },
      });
    });
}
function Re(e) {
  e.forEach(Le);
}
function ze() {
  typeof ResizeObserver < `u` && (U = new ResizeObserver(Re));
}
function Be(e, t) {
  U || ze();
  let n = Pe(e);
  return (
    n.forEach((e) => {
      let n = H.get(e);
      (n || ((n = new Set()), H.set(e, n)), n.add(t), U?.observe(e));
    }),
    () => {
      n.forEach((e) => {
        let n = H.get(e);
        (n?.delete(t), (n != null && n.size) || U == null || U.unobserve(e));
      });
    }
  );
}
function Ve() {
  ((G = () => {
    let e = { width: y.innerWidth, height: y.innerHeight },
      t = { target: y, size: e, contentSize: e };
    W.forEach((e) => e(t));
  }),
    y.addEventListener(`resize`, G));
}
function He(e) {
  return (
    W.add(e),
    G || Ve(),
    () => {
      (W.delete(e), !W.size && G && (G = void 0));
    }
  );
}
function Ue(e, t) {
  return De(e) ? He(e) : Be(e, t);
}
function We(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function Ge(e, t, n) {
  e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var Ke,
  P,
  F,
  I,
  L,
  R,
  qe,
  z,
  Je,
  B,
  Ye,
  V,
  H,
  U,
  W,
  G,
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    for (let e in (a(),
    M(),
    ke(),
    Ae(),
    j(),
    Me(),
    Ne(),
    (Ke = [``, `X`, `Y`, `Z`]),
    (P = [`translate`, `scale`, `rotate`, `skew`]),
    (F = { syntax: `<angle>`, initialValue: `0deg`, toDefaultUnit: (e) => e + `deg` }),
    (I = {
      translate: {
        syntax: `<length-percentage>`,
        initialValue: `0px`,
        toDefaultUnit: (e) => e + `px`,
      },
      rotate: F,
      scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: Ee },
      skew: F,
    }),
    (L = new Map()),
    (R = (e) => `--motion-${e}`),
    (qe = [`x`, `y`, `z`]),
    P.forEach((e) => {
      Ke.forEach((t) => {
        (qe.push(e + t), L.set(R(e + t), I[e]));
      });
    }),
    new Set(qe),
    (z = (e, t) => document.createElement(`div`).animate(e, t)),
    (Je = {
      cssRegisterProperty: () =>
        typeof CSS < `u` && Object.hasOwnProperty.call(CSS, `registerProperty`),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, `animate`),
      partialKeyframes: () => {
        try {
          z({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () => !!z({ opacity: [0, 1] }, { duration: 0.001 }).finished,
      linearEasing: () => {
        try {
          z({ opacity: 0 }, { easing: `linear(0, 1)` });
        } catch {
          return !1;
        }
        return !0;
      },
    }),
    (B = {}),
    (Ye = {}),
    Je))
      Ye[e] = () => (B[e] === void 0 && (B[e] = Je[e]()), B[e]);
    ((V = { any: 0, all: 1 }),
      (H = new WeakMap()),
      (W = new Set()),
      (Xe = {
        isActive: (e) => !!e.inView,
        subscribe: (e, { enable: t, disable: n }, { inViewOptions: r = {} }) => {
          let { once: i } = r;
          return Fe(
            e,
            (r) => {
              if ((t(), Ge(e, `viewenter`, r), !i))
                return (t) => {
                  (n(), Ge(e, `viewleave`, t));
                };
            },
            je(r, [`once`])
          );
        },
      }),
      (Ze = (e, t, n) => (r) => {
        (!r.pointerType || r.pointerType === `mouse`) && (n(), We(e, t, r));
      }),
      (Qe = {
        inView: Xe,
        hover: {
          isActive: (e) => !!e.hover,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = Ze(e, `hoverstart`, t),
              i = Ze(e, `hoverend`, n);
            return (
              e.addEventListener(`pointerenter`, r),
              e.addEventListener(`pointerleave`, i),
              () => {
                (e.removeEventListener(`pointerenter`, r),
                  e.removeEventListener(`pointerleave`, i));
              }
            );
          },
        },
        press: {
          isActive: (e) => !!e.press,
          subscribe: (e, { enable: t, disable: n }) => {
            let r = (t) => {
                (n(), We(e, `pressend`, t), y.removeEventListener(`pointerup`, r));
              },
              i = (n) => {
                (t(), We(e, `pressstart`, n), y.addEventListener(`pointerup`, r));
              };
            return (
              e.addEventListener(`pointerdown`, i),
              () => {
                (e.removeEventListener(`pointerdown`, i), y.removeEventListener(`pointerup`, r));
              }
            );
          },
        },
      }),
      [...Object.keys(Qe)]);
  });
function et() {
  throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);
}
function tt(e) {
  let t = u.useRef(et);
  return (
    u.useInsertionEffect(() => {
      t.current = e;
    }, [e]),
    (...e) => {
      K() && et();
      let n = t.current;
      return n(...e);
    }
  );
}
var nt,
  K,
  rt = e(() => {
    (d(),
      (nt = u.createContext(!0)),
      (K =
        `use` in u
          ? () => {
              try {
                return u.use(nt);
              } catch {
                return !1;
              }
            }
          : () => !1));
  });
function it(e) {
  let {
      slots: t = [],
      startFrom: a,
      direction: l,
      effectsOptions: u,
      autoPlayControl: d,
      dragControl: f,
      alignment: p,
      gap: m,
      padding: ee,
      paddingPerSide: te,
      paddingTop: g,
      paddingRight: re,
      paddingBottom: x,
      paddingLeft: se,
      itemAmount: T,
      fadeOptions: E,
      intervalControl: le,
      transitionControl: D,
      arrowOptions: ue,
      borderRadius: O,
      progressOptions: de,
      style: fe,
    } = e,
    {
      effectsOpacity: pe,
      effectsScale: me,
      effectsRotate: he,
      effectsPerspective: k,
      effectsHover: ge,
      playOffscreen: _e,
    } = u,
    { fadeContent: ve, overflow: ye, fadeWidth: be, fadeInset: xe, fadeAlpha: Se } = E,
    {
      showMouseControls: Ce,
      arrowSize: A,
      arrowRadius: we,
      arrowFill: Te,
      leftArrow: Ee,
      rightArrow: De,
      arrowShouldSpace: j = !0,
      arrowShouldFadeIn: Oe = !1,
      arrowPosition: M,
      arrowPadding: N,
      arrowGap: ke,
      arrowPaddingTop: Ae,
      arrowPaddingRight: je,
      arrowPaddingBottom: Me,
      arrowPaddingLeft: Ne,
    } = ue,
    {
      showProgressDots: Pe,
      dotSize: Fe,
      dotsInset: Ie,
      dotsRadius: Le,
      dotsPadding: Re,
      dotsGap: ze,
      dotsFill: Be,
      dotsBackground: Ve,
      dotsActiveOpacity: He,
      dotsOpacity: We,
      dotsBlur: Ge,
    } = de,
    Ke = te ? `${g}px ${re}px ${x}px ${se}px` : `${ee}px`,
    P = ce.current() === ce.canvas,
    F = t.filter(Boolean),
    I = r.count(F);
  if (!(I > 0))
    return _(`section`, {
      style: mt,
      children: [
        h(`div`, { style: ht, children: `⭐️` }),
        h(`p`, { style: gt, children: `Connect to Content` }),
        h(`p`, {
          style: _t,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let L = o(() => {
      R.current && z.current && B.current && Y();
    }, []),
    R = c(null),
    qe = o(
      (e) => {
        ((R.current = e), L());
      },
      [L]
    ),
    z = c(null),
    Je = o(
      (e) => {
        ((z.current = e), L());
      },
      [L]
    ),
    B = c(null),
    Ye = o(
      (e) => {
        ((B.current = e), L());
      },
      [L]
    ),
    [V, H] = i({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    U = l === `left` || l === `right`,
    W = ot(),
    G = U && W === `rtl` ? -1 : 1,
    [Xe, Ze] = i(!1),
    [Qe, $e] = i(d),
    [et, nt] = i(!1),
    K = V?.item !== null && V?.parent !== null && W !== null,
    rt = Math.ceil((a + T) / I),
    it = [],
    st = rt * 4;
  (P || !K) && (st = rt);
  let [q, J] = i(a + I);
  s(() => {
    if (!V.item || !W) return;
    let e = -1 * q * ((V.item ?? 0) + m) * (W === `rtl` ? -1 : 1);
    Z.get() !== e && ae(Z, e, D);
  }, [q, V.item, m, W]);
  let ft = () => {
      if (!R.current || !z.current || !B.current) return;
      let e = at(),
        t = U && e === `rtl`,
        n = t ? B.current : z.current,
        r = t ? z.current : B.current,
        i = U ? R.current.offsetWidth : R.current.offsetHeight,
        a = n ? (U ? n.offsetLeft : n.offsetTop) : 0;
      H({
        parent: i,
        children:
          (r ? (U ? r.offsetLeft + r.offsetWidth : r.offsetTop + r.offsetHeight) : 0) - a + m,
        item: n ? (U ? n.offsetWidth : n.offsetHeight) : 0,
        itemWidth: n ? n.offsetWidth : 0,
        itemHeight: n ? n.offsetHeight : 0,
        viewportLength: U
          ? Math.max(
              document.documentElement.clientWidth || 0,
              y.innerWidth || 0,
              R.current.offsetWidth
            )
          : Math.max(
              document.documentElement.clientHeight || 0,
              y.innerHeight || 0,
              R.current.offsetHeight
            ),
      });
    },
    Y = tt(async () => {
      C.read(ft, !1, !0);
    });
  (n(() => {
    Y();
  }, [t.length, T, m, l, ee, te, g, re, x, se]),
    s(() => {
      let e = R.current;
      if (e)
        return Ue(e, ({ contentSize: e }) => {
          (e.width || e.height) && Y();
        });
    }, []));
  let X = P ? 0 : V?.children,
    [Tt, Et] = i(!1),
    Dt = c(null),
    Ot = ie(Dt),
    kt = oe() && Ot,
    Z = ne(X),
    At = P
      ? 0
      : S(Z, (e) => {
          let t = X ?? 0,
            n = e ?? 0,
            r = w(-t * G, -t * G * 2, n);
          return Number.isNaN(r) ? 0 : r;
        }),
    jt = w(0, I, q),
    Q = (e) => {
      v(() => J((t) => t + e));
    },
    Mt = (e) => {
      let t = e - w(0, I, q);
      v(() => J((e) => e + t));
    },
    Nt = (l === `right` || l === `bottom` ? -1 : 1) * G,
    Pt = d && Qe && (_e || kt) && !P && I > 1 && !Tt && K;
  s(() => {
    if (!Pt) return;
    let e = setTimeout(() => {
      Q(Nt);
    }, le * 1e3);
    return () => clearTimeout(e);
  }, [Pt, Nt, le, q]);
  let $ = () => {
      v(() => Et(!0));
    },
    Ft = (e, { offset: t, velocity: n }) => {
      v(() => Et(!1));
      let r = U ? t.x : t.y,
        i = U ? n.x : n.y,
        a = r < -V.item / 2,
        o = r > V.item / 2,
        s = Math.abs(r),
        c = Math.round(s / V.item),
        l = c === 0 ? 1 : c;
      i > 200 ? Q(-l * G) : i < -200 ? Q(l * G) : (a && Q(c * G), o && Q(-c * G));
    },
    It = Math.max(0, Math.min(a ?? 0, Math.max(0, I - 1))),
    Lt = (It * 100) / T,
    Rt = (It * m) / T,
    zt = 0,
    Bt = `calc(${100 / T}% - ${m}px + ${m / T}px)`;
  for (let e = 0; e < st; e++)
    it = it.concat(
      r.map(F, (t, n) => {
        let r;
        return (
          e === 0 && (n === 0 ? (r = Je) : n === F.length - 1 && (r = Ye)),
          h(
            xt,
            {
              ref: r,
              slideKey: e + n + `lg`,
              index: e,
              width: U && T > 1 ? Bt : `100%`,
              height: U ? `100%` : T > 1 ? Bt : `100%`,
              size: V,
              child: t,
              numChildren: F?.length,
              wrappedXOrY: At,
              childCounter: zt++,
              gap: m,
              isCanvas: P,
              isInitialized: K,
              isHorizontal: U,
              effectsOpacity: pe,
              effectsScale: me,
              effectsRotate: he,
              writingDirection: W,
              rtlDirectionModifier: G,
              children: e + n,
            },
            e + n + `lg`
          )
        );
      })
    );
  let Vt = U ? `to right` : `to bottom`,
    Ht = be / 2,
    Ut = 100 - be / 2,
    Wt = `linear-gradient(${Vt}, rgba(0, 0, 0, ${Se}) ${bt(xe, 0, Ht)}%, rgba(0, 0, 0, 1) ${Ht}%, rgba(0, 0, 0, 1) ${Ut}%, rgba(0, 0, 0, ${Se}) ${100 - xe}%)`,
    Gt = [],
    Kt = {};
  if (Pe) {
    for (let e = 0; e < F?.length; e++)
      Gt.push(
        h(
          St,
          {
            dotStyle: { ...wt, width: Fe, height: Fe, backgroundColor: Be },
            buttonStyle: vt,
            selectedOpacity: He,
            opacity: We,
            disabled: !P && !K,
            onClick: () => Mt(e),
            wrappedIndex: P || !K ? It : jt,
            total: I,
            index: e,
            gap: ze,
            padding: Re,
            isHorizontal: U,
          },
          e
        )
      );
    Ge > 0 && (Kt.backdropFilter = Kt.WebkitBackdropFilter = `blur(${Ge}px)`);
  }
  let qt =
      K && f
        ? {
            drag: U ? `x` : `y`,
            onDragStart: $,
            onDragEnd: Ft,
            dragDirectionLock: !0,
            values: { x: W === `rtl` ? -Z : Z, y: Z },
            dragMomentum: !1,
          }
        : {},
    Jt = M === `top-left` || M === `top-mid` || M === `top-right`,
    Yt = M === `bottom-left` || M === `bottom-mid` || M === `bottom-right`,
    Xt = M === `top-left` || M === `bottom-left`,
    Zt = M === `top-right` || M === `bottom-right`,
    Qt = M === `top-mid` || M === `bottom-mid` || M === `auto`,
    $t = Ee || `https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left`,
    en = De || `https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right`;
  return _(`section`, {
    className: `${ct} ${U ? lt : ut}`,
    style: {
      ...pt,
      padding: Ke,
      WebkitMaskImage: ve ? Wt : void 0,
      maskImage: ve ? Wt : void 0,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (Ze(!0), ge || $e(!1));
    },
    onMouseLeave: () => {
      (Ze(!1), ge || $e(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), v(() => nt(!0)));
    },
    onMouseUp: () => v(() => nt(!1)),
    ref: Dt,
    children: [
      h(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: ye ? `visible` : `hidden`,
          borderRadius: O,
          userSelect: `none`,
          perspective: P ? `none` : k,
        },
        children: h(b.ul, {
          ref: qe,
          ...qt,
          style: {
            ...pt,
            gap: m,
            placeItems: p,
            ...(P || !K
              ? {
                  transform: U
                    ? `translateX(calc(${dt} * (${Lt}% + ${Rt}px)))`
                    : `translateY(calc(${dt} * (${Lt}% + ${Rt}px)))`,
                }
              : { x: U ? At : 0, y: U ? 0 : At }),
            flexDirection: U ? `row` : `column`,
            transformStyle: he !== 0 && !P ? `preserve-3d` : void 0,
            cursor: (P || K) && f ? (et ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...fe,
          },
          children: it,
        }),
      }),
      _(`fieldset`, {
        style: { ...yt },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          _(b.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: U ? `row` : `column`,
              justifyContent: j ? `space-between` : `center`,
              gap: j ? `unset` : ke,
              opacity: Oe || (!P && !K) ? 0 : 1,
              alignItems: `center`,
              inset: N,
              top: j ? N : Jt ? Ae : `unset`,
              left: j ? N : Xt ? Ne : Qt ? 0 : `unset`,
              right: j ? N : Zt ? je : Qt ? 0 : `unset`,
              bottom: j ? N : Yt ? Me : `unset`,
            },
            animate: P || K ? (Oe ? { opacity: Xe ? 1 : 0 } : { opacity: 1 }) : { opacity: 0 },
            transition: D,
            children: [
              h(b.button, {
                type: `button`,
                style: {
                  ...vt,
                  backgroundColor: Te,
                  width: A,
                  height: A,
                  borderRadius: we,
                  rotate: U ? 0 : 90,
                  display: Ce ? `block` : `none`,
                  pointerEvents: P || K ? `auto` : `none`,
                  cursor: P || K ? `pointer` : `default`,
                },
                disabled: !(P || K),
                onClick: () => Q(-1),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: h(`img`, {
                  decoding: `async`,
                  width: A,
                  height: A,
                  src: U && W === `rtl` ? en : $t,
                  alt: `Back Arrow`,
                }),
              }),
              h(b.button, {
                type: `button`,
                style: {
                  ...vt,
                  backgroundColor: Te,
                  width: A,
                  height: A,
                  borderRadius: we,
                  rotate: U ? 0 : 90,
                  display: Ce ? `block` : `none`,
                  pointerEvents: P || K ? `auto` : `none`,
                  cursor: P || K ? `pointer` : `default`,
                },
                disabled: !(P || K),
                onClick: () => Q(1),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: h(`img`, {
                  decoding: `async`,
                  width: A,
                  height: A,
                  src: U && W === `rtl` ? $t : en,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Gt.length > 1
            ? h(b.div, {
                style: {
                  ...Ct,
                  left: U ? `50%` : Ie,
                  top: U ? `unset` : `50%`,
                  transform: U ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: U ? `row` : `column`,
                  bottom: U ? Ie : `unset`,
                  borderRadius: Le,
                  backgroundColor: Ve,
                  userSelect: `none`,
                  ...Kt,
                  opacity: P ? 1 : 0,
                  pointerEvents: P || K ? `auto` : `none`,
                },
                animate: { opacity: K ? 1 : 0 },
                transition: { duration: 0.35, ease: `easeOut` },
                children: Gt,
              })
            : null,
        ],
      }),
    ],
  });
}
function at() {
  return y?.document?.documentElement?.dir === `rtl` ? `rtl` : `ltr`;
}
function ot() {
  let [e, t] = i(null);
  return (
    s(
      () => (
        t(at()),
        st(() => {
          t(at());
        })
      ),
      []
    ),
    e
  );
}
function st(e) {
  return (
    X.push(e),
    Y ||
      ((Y = new MutationObserver(() => X.forEach((e) => e()))),
      Y.observe(document.documentElement, { attributeFilter: [`dir`] })),
    () => {
      (X.splice(X.indexOf(e), 1), X.length === 0 && (Y?.disconnect(), (Y = null)));
    }
  );
}
var ct,
  lt,
  ut,
  q,
  dt,
  J,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Y,
  X,
  Tt = e(() => {
    (a(),
      g(),
      $e(),
      fe(),
      T(),
      d(),
      rt(),
      (ct = `framer-slideshow`),
      (lt = `framer-slideshow-axis-x`),
      (ut = `framer-slideshow-axis-y`),
      (q = `--framer-dir-multiplier`),
      (dt = `var(${q}, -1)`),
      (J = E(
        it,
        [`.${lt} { ${q}: -1; }`, `html[dir="rtl"] .${lt} { ${q}: 1; }`, `.${ut} { ${q}: -1; }`],
        `framer-slideshow-component`
      )),
      (ft = J),
      (J.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      de(J, {
        slots: { type: k.Array, title: `Content`, control: { type: k.ComponentInstance } },
        direction: {
          type: k.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: J.defaultProps.direction,
        },
        autoPlayControl: { type: k.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: k.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: k.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: k.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: J.defaultProps.startFrom,
        },
        effectsOptions: {
          type: k.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: k.Number,
              title: `Opacity`,
              defaultValue: J.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: k.Number,
              title: `Scale`,
              defaultValue: J.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: k.Number,
              title: `Perspective`,
              defaultValue: J.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: k.Number,
              title: `Rotate`,
              defaultValue: J.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: k.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: J.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: k.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: J.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: k.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        itemAmount: {
          type: k.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: J.defaultProps.itemAmount,
        },
        gap: { type: k.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: k.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: k.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: k.Transition,
          defaultValue: J.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: k.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: k.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: k.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: k.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: k.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: k.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        arrowOptions: {
          type: k.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: k.Boolean,
              title: `Show`,
              defaultValue: J.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: k.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: J.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: k.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: k.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: k.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: J.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: k.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: k.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: k.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: J.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: k.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: k.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: k.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: k.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: k.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: k.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: k.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: k.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: k.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: k.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: k.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: k.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: k.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: k.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: k.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: k.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: k.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: k.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: k.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (pt = {
        display: `flex`,
        flexDirection: `row`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (mt = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (ht = { fontSize: 32, marginBottom: 10 }),
      (gt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (_t = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (vt = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (yt = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (bt = (e, t, n) => Math.min(Math.max(e, t), n)),
      (xt = m(
        f(function (e, t) {
          let {
              slideKey: n,
              width: r,
              height: i,
              child: a,
              size: o,
              gap: l,
              wrappedXOrY: u,
              numChildren: d,
              childCounter: f,
              isCanvas: p,
              isInitialized: m,
              effects: ee,
              effectsOpacity: g,
              effectsScale: _,
              effectsRotate: v,
              isHorizontal: y,
              isLast: b,
              index: ne,
              writingDirection: ie,
              rtlDirectionModifier: x,
            } = e,
            ae = c(),
            C = o?.item ?? 0,
            w = o?.parent ?? 0,
            oe = (C + l) * f,
            T = (y && ie === `rtl` ? [C - l, 0, -w + C - l, -w - l] : [-C, 0, w - C + l, w]).map(
              (e) => e - oe * x
            ),
            E = !p && S(u, T, y && ie === `rtl` ? [v, 0, 0, -v] : [-v, 0, 0, v]),
            ce = !p && S(u, T, [v, 0, 0, -v]),
            le = !p && S(u, T, [g, 1, 1, g]),
            D = !p && S(u, T, [_, 1, 1, _]),
            ue = !p && S(u, T, y && ie === `rtl` ? [0, 0, 1, 1] : [1, 1, 0, 0]),
            O =
              !p &&
              S(u, (e) => {
                let t = Math.min(T[1], T[2]),
                  n = Math.max(T[1], T[2]);
                return e >= t && e <= n;
              });
          s(() => {
            if (!O || !m) return;
            function e(e) {
              let n = t?.current ?? ae.current;
              n &&
                (e
                  ? n.querySelectorAll(`button,a`).forEach((e) => {
                      let t = e.dataset.origTabIndex;
                      t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                    })
                  : n.querySelectorAll(`button,a`).forEach((e) => {
                      let t = e.getAttribute(`tabIndex`);
                      (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                    }),
                n.setAttribute(`aria-hidden`, !e));
            }
            return (
              e(O),
              O.on(`change`, (t) => {
                e(t);
              })
            );
          }, [m]);
          let de = p
              ? `visible`
              : S(
                  u,
                  [T[0] - o.viewportLength * x, re(T[1], T[2], 0.5), T[3] + o.viewportLength * x],
                  [`hidden`, `visible`, `hidden`]
                ),
            fe = n + `child`;
          return h(se, {
            inherit: `id`,
            id: fe,
            children: h(`li`, {
              style: { display: `contents` },
              children: te(a, {
                ref: t ?? ae,
                key: fe,
                style: {
                  ...a.props?.style,
                  flexShrink: 0,
                  userSelect: `none`,
                  width: r,
                  height: i,
                  ...(m
                    ? {
                        opacity: le,
                        scale: D,
                        originX: y ? ue : 0.5,
                        originY: y ? 0.5 : ue,
                        rotateY: y ? E : 0,
                        rotateX: y ? 0 : ce,
                        visibility: de,
                      }
                    : {}),
                },
                layoutId: a.props.layoutId ? a.props.layoutId + `-original-` + ne : void 0,
              }),
            }),
          });
        })
      )),
      (St = m(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        ...u
      }) {
        let d = i === r,
          f = s / 2,
          p = !l && r !== 0 ? f : c,
          m = !l && r !== n - 1 ? f : c,
          ee = l ? (r === 0 ? c : f) : c,
          te = l ? (r === n - 1 ? c : f) : c;
        return h(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...u,
          style: {
            ...o,
            paddingTop: p,
            paddingBottom: m,
            paddingInlineStart: ee,
            paddingInlineEnd: te,
          },
          children: h(b.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: d ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Ct = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (wt = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }),
      (Y = null),
      (X = []));
  });
function Et(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dt,
  Ot,
  kt,
  Z,
  At,
  jt,
  Q,
  Mt,
  Nt,
  Pt,
  $,
  Ft,
  It = e(() => {
    (g(),
      fe(),
      T(),
      d(),
      xe(),
      _e(),
      we(),
      (Dt = [`MyFCRv1YA`, `Esw7BwEul`, `Srt6UiHEV`]),
      (Ot = `framer-2eCii`),
      (kt = {
        Esw7BwEul: `framer-v-1qwz6td`,
        MyFCRv1YA: `framer-v-1pma71g`,
        Srt6UiHEV: `framer-v-q5cg2s`,
      }),
      (Z = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (At = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jt = ({ value: e, children: n }) => {
        let r = t(x),
          i = e ?? r.transition,
          a = ee(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return h(x.Provider, { value: a, children: n });
      }),
      (Q = { "Small Device": `Esw7BwEul`, "Variant 3": `Srt6UiHEV`, Default: `MyFCRv1YA` }),
      (Mt = b.create(l)),
      (Nt = ({
        amount: e,
        border: t,
        height: n,
        icon: r,
        iconFillColor: i,
        id: a,
        padding: o,
        subText: s,
        width: c,
        ...l
      }) => ({
        ...l,
        fbbMtb5dq:
          i ??
          l.fbbMtb5dq ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
        NkyB81tga: e ?? l.NkyB81tga ?? `120K+`,
        OFN07Rxib: t ??
          l.OFN07Rxib ?? {
            borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) /* {"name":"Straight Line - 01"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
        SSIrHXMQf:
          s ?? l.SSIrHXMQf ?? `Daily Workflows. And reducing manual work across departments.`,
        uaqhQB_LA: r ?? l.uaqhQB_LA ?? Te,
        variant: Q[l.variant] ?? l.variant ?? `MyFCRv1YA`,
        WuzKfyc1c: o ?? l.WuzKfyc1c ?? `40px`,
      })),
      (Pt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = E(
        f(function (e, t) {
          let n = c(null),
            r = t ?? n,
            i = p(),
            { activeLocale: a, setLocale: o } = ge();
          pe();
          let {
              style: s,
              className: u,
              layoutId: d,
              variant: f,
              OFN07Rxib: m,
              uaqhQB_LA: ee,
              fbbMtb5dq: te,
              NkyB81tga: g,
              SSIrHXMQf: v,
              WuzKfyc1c: y,
              ...ne
            } = Nt(e),
            {
              baseVariant: re,
              classNames: ie,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: ae,
              isLoading: C,
              setGestureState: w,
              setVariant: oe,
              variants: T,
            } = le({
              cycleOrder: Dt,
              defaultVariant: `MyFCRv1YA`,
              ref: r,
              variant: f,
              variantClassNames: kt,
            }),
            E = Pt(e, T),
            ce = ue(Ot, A, be);
          return h(se, {
            id: d ?? i,
            children: h(Mt, {
              animate: T,
              initial: !1,
              children: h(jt, {
                value: At,
                children: _(b.div, {
                  ...ne,
                  ...S,
                  className: ue(ce, `framer-1pma71g`, u, ie),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  layoutDependency: E,
                  layoutId: `MyFCRv1YA`,
                  ref: r,
                  style: {
                    "--1n63mt5": Z(y),
                    "--border-bottom-width": (m?.borderBottomWidth ?? m?.borderWidth) + `px`,
                    "--border-color": m?.borderColor,
                    "--border-left-width": (m?.borderLeftWidth ?? m?.borderWidth) + `px`,
                    "--border-right-width": (m?.borderRightWidth ?? m?.borderWidth) + `px`,
                    "--border-style": m?.borderStyle,
                    "--border-top-width": (m?.borderTopWidth ?? m?.borderWidth) + `px`,
                    ...s,
                  },
                  ...Et(
                    {
                      Esw7BwEul: { "data-framer-name": `Small Device` },
                      Srt6UiHEV: { "data-framer-name": `Variant 3` },
                    },
                    re,
                    ae
                  ),
                  children: [
                    h(me, {
                      animated: !0,
                      className: `framer-3vjxdk`,
                      Component: ee,
                      layoutDependency: E,
                      layoutId: `cbKJZW064`,
                      style: { "--14vpx0c": te },
                    }),
                    _(b.div, {
                      className: `framer-1ck9ekr`,
                      "data-framer-name": `Text Wrapper`,
                      layoutDependency: E,
                      layoutId: `sk6hTIAfL`,
                      children: [
                        h(he, {
                          __fromCanvasComponent: !0,
                          children: h(l, {
                            children: h(b.h5, {
                              className: `framer-styles-preset-s5101p`,
                              "data-styles-preset": `jXwTlEdH0`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                              },
                              children: `120K+`,
                            }),
                          }),
                          className: `framer-17hyqay`,
                          "data-framer-name": `120K+`,
                          fonts: [`Inter`],
                          layoutDependency: E,
                          layoutId: `PThkRyPL6`,
                          style: {
                            "--extracted-1lwpl3i": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: g,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        h(he, {
                          __fromCanvasComponent: !0,
                          children: h(l, {
                            children: h(b.p, {
                              className: `framer-styles-preset-i5ktzk`,
                              "data-styles-preset": `kumYuXBDg`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                              },
                              children: `Daily Workflows. And reducing manual work across departments.`,
                            }),
                          }),
                          className: `framer-1d2z4bp`,
                          "data-framer-name": `Daily Workflows. And reducing manual work across departments.`,
                          fonts: [`Inter`],
                          layoutDependency: E,
                          layoutId: `xAGYFu8da`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-2eCii.framer-214jb3, .framer-2eCii .framer-214jb3 { display: block; }`,
          `.framer-2eCii.framer-1pma71g { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: var(--1n63mt5); position: relative; width: 381px; }`,
          `.framer-2eCii .framer-3vjxdk { flex: none; height: var(--framer-aspect-ratio-supported, 37px); position: relative; width: 40px; }`,
          `.framer-2eCii .framer-1ck9ekr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-2eCii .framer-17hyqay { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-2eCii .framer-1d2z4bp { --framer-text-wrap-override: none; flex: none; height: auto; max-width: 400px; position: relative; width: 100%; }`,
          `.framer-2eCii.framer-v-1qwz6td.framer-1pma71g { padding: 24px; }`,
          `.framer-2eCii.framer-v-1qwz6td .framer-1ck9ekr, .framer-2eCii.framer-v-q5cg2s .framer-1ck9ekr { gap: 8px; }`,
          `.framer-2eCii.framer-v-1qwz6td .framer-1d2z4bp, .framer-2eCii.framer-v-q5cg2s .framer-1d2z4bp { --framer-text-wrap-override: balance; max-width: 300px; }`,
          `.framer-2eCii.framer-v-q5cg2s.framer-1pma71g { padding: 16px; }`,
          ...Se,
          ...ve,
          `.framer-2eCii[data-border="true"]::after, .framer-2eCii [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-2eCii`
      )),
      (Ft = $),
      ($.displayName = `Growth Card`),
      ($.defaultProps = { height: 241, width: 381 }),
      de($, {
        variant: {
          options: [`MyFCRv1YA`, `Esw7BwEul`, `Srt6UiHEV`],
          optionTitles: [`Default`, `Small Device`, `Variant 3`],
          title: `Variant`,
          type: k.Enum,
        },
        OFN07Rxib: {
          defaultValue: {
            borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) /* {"name":"Straight Line - 01"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Border`,
          type: k.Border,
        },
        uaqhQB_LA: {
          defaultValue: {
            identifier: `local-module:vector/NGObd38dz:default`,
            moduleId: `1yVtMWWfWyKSzkl5DcvJ`,
          },
          setModuleId: `n4UzSUlaQxIL3JldCsez`,
          title: `Icon`,
          type: k.VectorSetItem,
        },
        fbbMtb5dq: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          title: `Icon Fill Color`,
          type: k.Color,
        },
        NkyB81tga: { defaultValue: `120K+`, displayTextArea: !1, title: `Amount`, type: k.String },
        onNkyB81tgaChange: { changes: `NkyB81tga`, type: k.ChangeHandler },
        SSIrHXMQf: {
          defaultValue: `Daily Workflows. And reducing manual work across departments.`,
          displayTextArea: !0,
          title: `SubText`,
          type: k.String,
        },
        onSSIrHXMQfChange: { changes: `SSIrHXMQf`, type: k.ChangeHandler },
        WuzKfyc1c: { defaultValue: `40px`, title: `Padding`, type: k.Padding },
      }),
      O(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...D(Ce),
          ...D(ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { $e as a, Tt as i, Ft as n, Ue as o, ft as r, It as t };
//# sourceMappingURL=oDmEg1BTY.D9HRz7PU.mjs.map
