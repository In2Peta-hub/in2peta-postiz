import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  C as t,
  E as n,
  F as r,
  L as i,
  M as a,
  N as o,
  O as s,
  T as c,
  _ as l,
  g as u,
  j as ee,
  k as te,
  l as d,
  s as f,
  u as p,
  v as m,
  z as h,
} from "./react.C83sJsFz.mjs";
import {
  E as g,
  G as _,
  T as ne,
  V as v,
  et as y,
  f as re,
  g as ie,
  nt as b,
  q as ae,
  r as x,
  t as oe,
} from "./motion.DVY4-TFg.mjs";
import { Dt as S, E as se, L as C, P as w, Q as T, o as E } from "./framer.CFqKih1k.mjs";
import { a as D, o as ce } from "./oDmEg1BTY.D9HRz7PU.mjs";
function le(e, t) {
  let n,
    r = e.current;
  return (
    Object.defineProperty(e, `current`, {
      get() {
        return r;
      },
      set(e) {
        if (((r = e), e === null)) {
          t.abort();
          return;
        }
        n?.(e);
      },
      configurable: !0,
    }),
    r ||
      new Promise((e, r) => {
        ((n = e), t.signal.addEventListener(`abort`, r));
      }).catch(() => {})
  );
}
function O(e) {
  let {
      slots: i = [],
      startFrom: c,
      direction: l,
      effectsOptions: u,
      autoPlayControl: te,
      dragControl: f,
      alignment: ne,
      gap: x,
      padding: oe,
      paddingPerSide: S,
      paddingTop: C,
      paddingRight: w,
      paddingBottom: T,
      paddingLeft: E,
      itemAmount: D,
      fadeOptions: O,
      intervalControl: Te,
      transitionControl: k,
      arrowOptions: Ee,
      borderRadius: De,
      progressOptions: A,
      style: Oe,
    } = e,
    {
      effectsOpacity: ke,
      effectsScale: Ae,
      effectsRotate: je,
      effectsPerspective: Me,
      effectsHover: j,
      playOffscreen: Ne,
    } = u,
    { fadeContent: Pe, overflow: Fe, fadeWidth: M, fadeInset: Ie, fadeAlpha: N } = O,
    {
      showMouseControls: Le,
      arrowSize: P,
      arrowRadius: F,
      arrowFill: Re,
      leftArrow: ze,
      rightArrow: I,
      arrowShouldSpace: L = !0,
      arrowShouldFadeIn: Be = !1,
      arrowPosition: R,
      arrowPadding: z,
      arrowGap: Ve,
      arrowPaddingTop: He,
      arrowPaddingRight: Ue,
      arrowPaddingBottom: We,
      arrowPaddingLeft: Ge,
    } = Ee,
    {
      showProgressDots: Ke,
      dotSize: qe,
      dotsInset: Je,
      dotsRadius: Ye,
      dotsPadding: Xe,
      dotsGap: Ze,
      dotsFill: Qe,
      dotsBackground: $e,
      dotsActiveOpacity: et,
      dotsOpacity: tt,
      dotsBlur: nt,
    } = A,
    rt = S ? `${C}px ${w}px ${T}px ${E}px` : `${oe}px`,
    B = se.current() === se.canvas,
    V = i.filter(Boolean),
    it = n.count(V),
    at = it > 0;
  if (!at)
    return p(`section`, {
      style: me,
      children: [
        d(`div`, { style: he, children: `⭐️` }),
        d(`p`, { style: ge, children: `Connect to Content` }),
        d(`p`, {
          style: _e,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let H = s(null),
    U = ee(() => [{ current: null }, { current: null }], [V]),
    ot = s(void 0),
    [W, st] = r({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    G = ue(),
    ct = de(l, G),
    K = ct === `left` || ct === `right`,
    lt = ct === `right` || ct === `bottom`,
    q = K && G === `rtl` ? -1 : 1,
    [ut, dt] = r(!1),
    [ft, pt] = r(te),
    [mt, ht] = r(!1),
    [J, gt] = r(!1),
    _t = [],
    vt = 4;
  B && (vt = 1);
  let yt = a(() => {
      if (!H.current) return;
      let e =
          K && U[0].current && U[1].current && U[1].current.offsetLeft < U[0].current.offsetLeft,
        t = e ? U[1].current : U[0].current,
        n = e ? U[0].current : U[1].current,
        r = K ? H.current.offsetWidth : H.current.offsetHeight,
        i = t ? (K ? t.offsetLeft : t.offsetTop) : 0;
      st({
        parent: r,
        children:
          (n ? (K ? n.offsetLeft + n.offsetWidth : n.offsetTop + n.offsetHeight) : 0) - i + x,
        item: t ? (K ? t.offsetWidth : t.offsetHeight) : 0,
        itemWidth: t ? t.offsetWidth : 0,
        itemHeight: t ? t.offsetHeight : 0,
        viewportLength: K
          ? Math.max(
              document.documentElement.clientWidth || 0,
              h.innerWidth || 0,
              H.current.offsetWidth
            )
          : Math.max(
              document.documentElement.clientHeight || 0,
              h.innerHeight || 0,
              H.current.offsetHeight
            ),
      });
    }, []),
    bt = a(async () => {
      let e = new AbortController(),
        [t, n] = U;
      if (!B && (!t.current || !n.current))
        try {
          await Promise.all([le(t, e), it > 1 ? le(n, e) : !0]);
        } catch {
          e.abort();
        }
      ie.read(yt, !1, !0);
    }, [yt]);
  t(() => {
    bt();
  }, [D]);
  let xt = s(!0);
  (o(
    () =>
      ce(H.current, ({ contentSize: e }) => {
        (!xt.current && (e.width || e.height) && (bt(), m(() => gt(!0))), (xt.current = !1));
      }),
    []
  ),
    o(() => {
      if (J) {
        let e = setTimeout(() => m(() => gt(!1)), 500);
        return () => clearTimeout(e);
      }
    }, [J]));
  let Y = V?.length,
    St = B ? 0 : W?.children,
    Ct = W?.item + x,
    wt = c * Ct,
    [X, Z] = r(c + Y),
    [Tt, Et] = r(!1);
  B && X !== c && Z(c);
  let Dt = s(null),
    Ot = v(Dt),
    kt = ae() && Ot,
    At = lt ? 1 : -1,
    Q = _(St),
    jt = K ? -c * (W?.itemWidth + x) : -c * (W?.itemHeight + x),
    Mt = () => At * X * Ct,
    Nt = B
      ? 0
      : y(Q, (e) => {
          let t = b(-St * q, -St * q * 2, e * q);
          return isNaN(t) ? 0 : t;
        }),
    Pt = b(0, Y, X),
    Ft = b(0, -Y, X);
  t(() => {
    W?.children !== null && !xt.current && J && Q.set(Mt());
  }, [W, St, At, wt, X, Ct, J]);
  let It = () => {
      B ||
        !at ||
        !W.parent ||
        Tt ||
        (Q.get() !== Mt() && re(Q, Mt(), k),
        te &&
          ft &&
          (Ne || kt) &&
          (ot.current = setTimeout(() => {
            (m(() => Z((e) => e + 1 * q)), It());
          }, Te * 1e3)));
    },
    $ = (e, t = !1) => {
      lt
        ? t
          ? m(() => Z((t) => t - e))
          : Z((t) => t - e)
        : t
          ? m(() => Z((t) => t + e))
          : Z((t) => t + e);
    },
    Lt = (e) => {
      let t = b(0, Y, X),
        n = b(0, -Y, X),
        r = e - t,
        i = e - Math.abs(n);
      m(lt ? () => Z((e) => e - i) : () => Z((e) => e + r));
    },
    Rt = () => {
      m(() => Et(!0));
    },
    zt = (e, { offset: t, velocity: n }) => {
      m(() => Et(!1));
      let r = K ? t.x : t.y,
        i = K ? n.x : n.y,
        a = r < -W.item / 2,
        o = r > W.item / 2,
        s = Math.abs(r),
        c = Math.round(s / W.item),
        l = c === 0 ? 1 : c;
      i > 200 ? $(-l * q, !0) : i < -200 ? $(l * q, !0) : (a && $(c * q, !0), o && $(-c * q, !0));
    };
  o(() => {
    if (!(!kt || J || it <= 1)) return (It(), () => ot.current && clearTimeout(ot.current));
  }, [_t, kt, J]);
  let Bt = 0,
    Vt = `calc(${100 / D}% - ${x}px + ${x / D}px)`;
  for (let e = 0; e < vt; e++)
    _t = _t.concat(
      n.map(V, (t, n) => {
        let r;
        return (
          e === 0 && (n === 0 ? (r = U[0]) : n === V.length - 1 && (r = U[1])),
          d(
            xe,
            {
              ref: r,
              slideKey: e + n + `lg`,
              index: e,
              width: K && D > 1 ? Vt : `100%`,
              height: K ? `100%` : D > 1 ? Vt : `100%`,
              size: W,
              child: t,
              numChildren: V?.length,
              wrappedValue: Nt,
              childCounter: Bt++,
              gap: x,
              isCanvas: B,
              isHorizontal: K,
              effectsOpacity: ke,
              effectsScale: Ae,
              effectsRotate: je,
              directionModifier: q,
              children: e + n,
            },
            e + n + `lg`
          )
        );
      })
    );
  let Ht = K ? `to right` : `to bottom`,
    Ut = M / 2,
    Wt = 100 - M / 2,
    Gt = `linear-gradient(${Ht}, rgba(0, 0, 0, ${N}) ${be(Ie, 0, Ut)}%, rgba(0, 0, 0, 1) ${Ut}%, rgba(0, 0, 0, 1) ${Wt}%, rgba(0, 0, 0, ${N}) ${100 - Ie}%)`,
    Kt = [],
    qt = {};
  if (Ke) {
    for (let e = 0; e < V?.length; e++)
      Kt.push(
        d(
          Se,
          {
            dotStyle: { ...we, width: qe, height: qe, backgroundColor: Qe },
            buttonStyle: ve,
            selectedOpacity: et,
            opacity: tt,
            onClick: () => Lt(e),
            wrappedIndex: Pt,
            wrappedIndexInverted: Ft,
            total: Y,
            index: e,
            gap: Ze,
            padding: Xe,
            isHorizontal: K,
            isInverted: lt,
          },
          e
        )
      );
    nt > 0 && (qt.backdropFilter = qt.WebkitBackdropFilter = `blur(${nt}px)`);
  }
  let Jt = f
      ? {
          drag: K ? `x` : `y`,
          onDragStart: Rt,
          onDragEnd: zt,
          dragDirectionLock: !0,
          values: { x: G === `rtl` ? -Q : Q, y: Q },
          dragMomentum: !1,
        }
      : {},
    Yt = R === `top-left` || R === `top-mid` || R === `top-right`,
    Xt = R === `bottom-left` || R === `bottom-mid` || R === `bottom-right`,
    Zt = R === `top-left` || R === `bottom-left`,
    Qt = R === `top-right` || R === `bottom-right`,
    $t = R === `top-mid` || R === `bottom-mid` || R === `auto`,
    en = ze || `https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg?arrow=left`,
    tn = I || `https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg?arrow=right`;
  return p(`section`, {
    style: {
      ...pe,
      padding: rt,
      WebkitMaskImage: Pe ? Gt : void 0,
      maskImage: Pe ? Gt : void 0,
      opacity: W?.item === null ? fe : 1,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (dt(!0), j || pt(!1));
    },
    onMouseLeave: () => {
      (dt(!1), j || pt(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), m(() => ht(!0)));
    },
    onMouseUp: () => m(() => ht(!1)),
    ref: Dt,
    children: [
      d(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: Fe ? `visible` : `hidden`,
          borderRadius: De,
          userSelect: `none`,
          perspective: B ? `none` : Me,
        },
        children: d(g.ul, {
          ref: H,
          ...Jt,
          style: {
            ...pe,
            gap: x,
            placeItems: ne,
            x: K ? (B ? jt : Nt) : 0,
            y: K ? 0 : B ? jt : Nt,
            flexDirection: K ? `row` : `column`,
            transformStyle: je !== 0 && !B ? `preserve-3d` : void 0,
            cursor: f ? (mt ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...Oe,
          },
          children: _t,
        }),
      }),
      p(`fieldset`, {
        style: { ...ye },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          p(g.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: K ? `row` : `column`,
              justifyContent: L ? `space-between` : `center`,
              gap: L ? `unset` : Ve,
              opacity: Be ? fe : 1,
              alignItems: `center`,
              inset: z,
              top: L ? z : Yt ? He : `unset`,
              left: L ? z : Zt ? Ge : $t ? 0 : `unset`,
              right: L ? z : Qt ? Ue : $t ? 0 : `unset`,
              bottom: L ? z : Xt ? We : `unset`,
            },
            animate: Be && { opacity: ut ? 1 : fe },
            transition: k,
            children: [
              d(g.button, {
                type: `button`,
                style: {
                  ...ve,
                  backgroundColor: Re,
                  width: P,
                  height: P,
                  borderRadius: F,
                  rotate: K ? 0 : 90,
                  display: Le ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => $(-1, !0),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: d(`img`, {
                  decoding: `async`,
                  width: P,
                  height: P,
                  src: K && G === `rtl` ? tn : en,
                  alt: `Back Arrow`,
                }),
              }),
              d(g.button, {
                type: `button`,
                style: {
                  ...ve,
                  backgroundColor: Re,
                  width: P,
                  height: P,
                  borderRadius: F,
                  rotate: K ? 0 : 90,
                  display: Le ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => $(1, !0),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: d(`img`, {
                  decoding: `async`,
                  width: P,
                  height: P,
                  src: K && G === `rtl` ? en : tn,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Kt.length > 1
            ? d(`div`, {
                style: {
                  ...Ce,
                  left: K ? `50%` : Je,
                  top: K ? `unset` : `50%`,
                  transform: K ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: K ? `row` : `column`,
                  bottom: K ? Je : `unset`,
                  borderRadius: Ye,
                  backgroundColor: $e,
                  userSelect: `none`,
                  ...qt,
                },
                children: Kt,
              })
            : null,
        ],
      }),
    ],
  });
}
function ue() {
  let [e, t] = r(`ltr`);
  return (
    o(() => {
      h?.document?.documentElement?.dir === `rtl` && t(`rtl`);
    }, []),
    e
  );
}
function de(e, t) {
  return t === `rtl` ? (e === `left` ? `right` : e === `right` ? `left` : e) : e;
}
var fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  Te = e(() => {
    (i(),
      f(),
      D(),
      T(),
      oe(),
      c(),
      (fe = 0.001),
      (O.defaultProps = {
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
      w(O, {
        slots: { type: E.Array, title: `Content`, control: { type: E.ComponentInstance } },
        direction: {
          type: E.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: O.defaultProps.direction,
        },
        autoPlayControl: { type: E.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: E.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: E.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: E.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: O.defaultProps.startFrom,
        },
        effectsOptions: {
          type: E.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: E.Number,
              title: `Opacity`,
              defaultValue: O.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: E.Number,
              title: `Scale`,
              defaultValue: O.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: E.Number,
              title: `Perspective`,
              defaultValue: O.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: E.Number,
              title: `Rotate`,
              defaultValue: O.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: E.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: O.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: E.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: O.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: E.Enum,
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
          type: E.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: O.defaultProps.itemAmount,
        },
        gap: { type: E.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: E.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: E.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: E.Transition,
          defaultValue: O.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: E.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: E.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: E.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: E.Number,
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
              type: E.Number,
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
              type: E.Number,
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
          type: E.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: E.Boolean,
              title: `Show`,
              defaultValue: O.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: E.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: O.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: E.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: E.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: E.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: O.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: E.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: E.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: E.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: O.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: E.Enum,
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
              type: E.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: E.Number,
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
              type: E.Number,
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
              type: E.Number,
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
              type: E.Number,
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
              type: E.Number,
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
          type: E.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: E.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: E.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: E.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: E.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: E.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: E.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: E.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: E.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: E.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: E.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: E.Number,
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
      (pe = {
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
      (me = {
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
      (he = { fontSize: 32, marginBottom: 10 }),
      (ge = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (_e = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      (ve = {
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
      (ye = {
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
      (be = (e, t, n) => Math.min(Math.max(e, t), n)),
      (xe = u(
        l(function (e, t) {
          let {
              slideKey: n,
              width: r,
              height: i,
              child: a,
              size: c,
              gap: l,
              wrappedValue: u,
              numChildren: ee,
              childCounter: f,
              isCanvas: p,
              effects: m,
              effectsOpacity: h,
              effectsScale: g,
              effectsRotate: _,
              isHorizontal: v,
              isLast: re,
              index: ie,
              directionModifier: b,
            } = e,
            ae = s(),
            oe = (c?.item + l) * f,
            S = [-c?.item, 0, c?.parent - c?.item + l, c?.parent].map((e) => e - oe * b),
            se = !p && y(u, S, [-_, 0, 0, _]),
            C = !p && y(u, S, [_, 0, 0, -_]),
            w = !p && y(u, S, [h, 1, 1, h]),
            T = !p && y(u, S, [g, 1, 1, g]),
            E = !p && y(u, S, [1, 1, 0, 0]),
            D = !p && y(u, (e) => e >= S[1] && e <= S[2]);
          o(() => {
            if (!D) return;
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
              e(D),
              D.on(`change`, (t) => {
                e(t);
              })
            );
          }, []);
          let ce = p
              ? `visible`
              : y(
                  u,
                  [S[0] - c.viewportLength, ne(S[1], S[2], 0.5), S[3] + c.viewportLength],
                  [`hidden`, `visible`, `hidden`]
                ),
            le = n + `child`;
          return d(x, {
            inherit: `id`,
            id: le,
            children: d(`li`, {
              style: { display: `contents` },
              children: te(a, {
                ref: t ?? ae,
                key: le,
                style: {
                  ...a.props?.style,
                  flexShrink: 0,
                  userSelect: `none`,
                  width: r,
                  height: i,
                  opacity: w,
                  scale: T,
                  originX: v ? E : 0.5,
                  originY: v ? 0.5 : E,
                  rotateY: v ? se : 0,
                  rotateX: v ? 0 : C,
                  visibility: ce,
                },
                layoutId: a.props.layoutId ? a.props.layoutId + `-original-` + ie : void 0,
              }),
            }),
          });
        })
      )),
      (Se = u(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        wrappedIndexInverted: a,
        dotStyle: o,
        buttonStyle: s,
        gap: c,
        padding: l,
        isHorizontal: u,
        isInverted: ee,
        ...te
      }) {
        let f = i === r;
        ee && (f = Math.abs(a) === r);
        let p = c / 2,
          m = !u && r > 0 ? p : l,
          h = !u && r !== n - 1 ? p : l,
          _ = u && r !== n - 1 ? p : l,
          ne = u && r > 0 ? p : l;
        return d(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...te,
          style: { ...s, padding: `${m}px ${_}px ${h}px ${ne}px` },
          children: d(g.div, {
            style: { ...o },
            initial: !1,
            animate: { opacity: f ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (Ce = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (we = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }));
  }),
  k,
  Ee,
  De,
  A,
  Oe,
  ke = e(() => {
    (f(),
      T(),
      c(),
      (k = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 16.667 4.167 C 16.667 1.865 14.801 0 12.5 0 C 10.199 0 8.333 1.865 8.333 4.167 C 5.572 4.167 3.333 6.405 3.333 9.167 C 3.333 10.114 3.597 11.001 4.055 11.756 C 1.745 12.198 0 14.228 0 16.667 C 0 19.105 1.745 21.136 4.055 21.578 C 3.597 22.333 3.333 23.219 3.333 24.167 C 3.333 26.928 5.572 29.167 8.333 29.167 C 8.333 31.468 10.199 33.333 12.5 33.333 C 14.801 33.333 16.667 31.468 16.667 29.167" fill="transparent" height="33.333420000000004px" id="ZWPJzGDf1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(3.333 3.334)" width="16.666690000000003px"/><path d="M 0 29.167 C 0 31.468 1.866 33.333 4.167 33.333 C 6.468 33.333 8.333 31.468 8.333 29.167 C 11.095 29.167 13.333 26.928 13.333 24.167 C 13.333 23.219 13.07 22.333 12.612 21.577 C 14.921 21.136 16.667 19.105 16.667 16.667 C 16.667 14.228 14.921 12.198 12.612 11.756 C 13.07 11.001 13.333 10.114 13.333 9.167 C 13.333 6.405 11.095 4.167 8.333 4.167 C 8.333 1.865 6.468 0 4.167 0 C 1.866 0 0 1.865 0 4.167" fill="transparent" height="33.33339px" id="H7osqKhbB" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(20 3.333)" width="16.6667px"/><path d="M 5.812 0 L 5.812 3.298 M 0 5.834 L 3.42 5.834 M 13.372 5.834 L 16.792 5.834 M 13.372 10.789 L 16.792 10.789 M 0 10.789 L 3.42 10.789 M 5.812 13.365 L 5.812 16.664 M 10.854 13.365 L 10.854 16.664 M 10.836 0 L 10.836 3.298 M 5.087 13.279 L 11.705 13.279 C 12.626 13.279 13.372 12.533 13.372 11.613 L 13.372 4.965 C 13.372 4.045 12.626 3.298 11.705 3.298 L 5.087 3.298 C 4.166 3.298 3.42 4.045 3.42 4.965 L 3.42 11.613 C 3.42 12.533 4.166 13.279 5.087 13.279 Z" fill="transparent" height="16.663700314331056px" id="ywi4jMCP8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(11.667 11.668)" width="16.79170042266846px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ee = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(g.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (De = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (A = S(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = De(e);
          return d(Ee, {
            ...s,
            className: C(`framer-6ktCf`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-6ktCf { -webkit-mask: ${k}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${k}; width: 40px; }`,
        ],
        `framer-6ktCf`
      )),
      (A.displayName = `Ai Brain 02`),
      (Oe = A),
      w(A, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: E.Color,
        },
      }));
  }),
  Ae,
  je,
  Me,
  j,
  Ne,
  Pe = e(() => {
    (f(),
      T(),
      c(),
      (Ae = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 7.5 8.333 C 5.199 8.333 3.333 6.468 3.333 4.167 C 3.333 1.866 5.199 0 7.5 0 C 9.801 0 11.667 1.866 11.667 4.167 C 11.667 6.468 9.801 8.333 7.5 8.333 Z M 7.5 8.333 C 11.642 8.333 15 11.691 15 15.833 M 7.5 8.333 C 3.358 8.333 0 11.691 0 15.833" fill="transparent" height="15.833374977111816px" id="eQADJFiS_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(20.834 20)" width="15px"/><path d="M 7.5 8.333 C 5.199 8.333 3.333 6.468 3.333 4.167 C 3.333 1.865 5.199 0 7.5 0 C 9.801 0 11.667 1.865 11.667 4.167 C 11.667 6.468 9.801 8.333 7.5 8.333 Z M 7.5 8.333 C 11.642 8.333 15 11.691 15 15.833 M 7.5 8.333 C 3.358 8.333 0 11.691 0 15.833" fill="transparent" height="15.833312783813476px" id="j0Fv2P_4i" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(4.166 4.167)" width="14.99998702316259px"/><path d="M 0 0 C 0 4.607 3.726 8.333 8.333 8.333 L 7.5 5" fill="transparent" height="8.333375000000004px" id="ksCyCmQfx" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(5.834 25.833)" width="8.333387499999958px"/><path d="M 8.333 8.333 C 8.333 3.726 4.607 0 0 0 L 0.833 3.333" fill="transparent" height="8.333312499999998px" id="MRQiadQnS" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(22.5 5.833)" width="8.333375000000274px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (je = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(g.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (Me = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (j = S(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = Me(e);
          return d(je, {
            ...s,
            className: C(`framer-7TeHZ`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-7TeHZ { -webkit-mask: ${Ae}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${Ae}; width: 40px; }`,
        ],
        `framer-7TeHZ`
      )),
      (j.displayName = `User Switch`),
      (Ne = j),
      w(j, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: E.Color,
        },
      }));
  }),
  Fe,
  M,
  Ie,
  N,
  Le,
  P = e(() => {
    (f(),
      T(),
      c(),
      (Fe = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 13.333 0 C 7.048 0 3.905 0 1.953 1.953 C 0 3.905 0 7.048 0 13.333 C 0 19.619 0 22.761 1.953 24.714 C 3.905 26.667 7.048 26.667 13.333 26.667 L 20 26.667 C 26.285 26.667 29.428 26.667 31.381 24.714 C 33.333 22.761 33.333 19.619 33.333 13.333 C 33.333 11.384 33.333 9.736 33.275 8.333" fill="transparent" height="26.6667px" id="ZXsJnuSIE" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(3.334 10)" width="33.33332px"/><path d="M 6.667 0 L 7.158 1.328 C 7.802 3.069 8.124 3.939 8.759 4.574 C 9.394 5.209 10.265 5.531 12.006 6.175 L 13.333 6.667 L 12.006 7.158 C 10.265 7.802 9.394 8.124 8.759 8.759 C 8.124 9.394 7.802 10.265 7.158 12.006 L 6.667 13.333 L 6.175 12.006 C 5.531 10.265 5.209 9.394 4.574 8.759 C 3.939 8.124 3.069 7.802 1.328 7.158 L 0 6.667 L 1.328 6.175 C 3.069 5.531 3.939 5.209 4.574 4.574 C 5.209 3.939 5.531 3.069 6.175 1.328 Z" fill="transparent" height="13.33332px" id="oIK4PFDQg" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="round" stroke-width="2" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(23.334 3.334)" width="13.333299999999998px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (M = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(g.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (Ie = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (N = S(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = Ie(e);
          return d(M, {
            ...s,
            className: C(`framer-hXpjg`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-hXpjg { -webkit-mask: ${Fe}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${Fe}; width: 40px; }`,
        ],
        `framer-hXpjg`
      )),
      (N.displayName = `Ai Generative`),
      (Le = N),
      w(N, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: E.Color,
        },
      }));
  }),
  F,
  Re,
  ze,
  I,
  L,
  Be = e(() => {
    (f(),
      T(),
      c(),
      (F = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 0 13.611 L 6.872 6.739 C 8.747 4.864 9.684 3.927 10.719 3.172 C 12.841 1.623 15.303 0.603 17.899 0.198 C 19.165 0 20.49 0 23.142 0 C 23.28 0 23.333 0.064 23.333 0.192 C 23.333 2.843 23.333 4.169 23.136 5.434 C 22.73 8.03 21.71 10.492 20.161 12.615 C 19.407 13.649 18.469 14.586 16.594 16.461 L 9.722 23.333" fill="transparent" height="23.333312511444092px" id="FERe0vjU_" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(13.334 3.333)" width="23.333375000000274px"/><path d="M 13.902 0.164 C 11.064 0.164 7.496 -0.437 4.841 0.663 C 2.895 1.469 1.463 3.335 0 4.798 L 5.51 7.159 C 6.97 7.785 6.078 9.628 5.836 10.836 C 5.566 12.183 5.581 12.233 6.553 13.204 L 10.129 16.781 C 11.101 17.752 11.15 17.767 12.497 17.497 C 13.706 17.256 15.548 16.363 16.174 17.823 L 18.536 23.333 C 19.998 21.871 21.865 20.439 22.671 18.493 C 23.771 15.837 23.169 12.27 23.169 9.432" fill="transparent" height="23.333350448842044px" id="dm4GrFw15" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(3.334 13.333)" width="23.33336294884211px"/><path d="M 1.667 0 L 0 1.667" fill="transparent" height="1.6667500000000004px" id="ITl7ed08j" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(18.334 33.333)" width="1.6666249999997262px"/><path d="M 1.667 0 L 0 1.667" fill="transparent" height="1.6666250000000034px" id="WgDL88oOz" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(5 20)" width="1.6666624999999158px"/><path d="M 0 0 C 2 0.3 4.1 1.1 5.269 2.3 C 6.763 3.62 7.8 5.4 8.2 8.2" fill="transparent" height="8.200012499999998px" id="HoLj514T5" stroke-dasharray="" stroke-linecap="square" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(25 6.8)" width="8.199999999999932px"/><path d="M 2.4 0 L 0 2.4" fill="transparent" height="2.4000249999999994px" id="Ai0Lm9H14" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(27.5 10.1)" width="2.400000000000091px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Re = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(g.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (ze = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (I = S(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = ze(e);
          return d(Re, {
            ...s,
            className: C(`framer-eybyv`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-eybyv { -webkit-mask: ${F}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${F}; width: 40px; }`,
        ],
        `framer-eybyv`
      )),
      (I.displayName = `Rocket`),
      (L = I),
      w(I, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: E.Color,
        },
      }));
  });
export { Ne as a, ke as c, P as i, O as l, Be as n, Pe as o, Le as r, Oe as s, L as t, Te as u };
//# sourceMappingURL=TorZANghh.Csd5wx1e.mjs.map
