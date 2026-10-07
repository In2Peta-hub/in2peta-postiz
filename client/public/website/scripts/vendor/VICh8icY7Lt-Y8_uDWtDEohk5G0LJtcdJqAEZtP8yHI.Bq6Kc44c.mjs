import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  A as t,
  O as n,
  P as r,
  T as i,
  _ as a,
  b as o,
  c as s,
  j as ee,
  l as c,
  s as l,
  u,
} from "./react.C83sJsFz.mjs";
import { E as d, a as f, r as p, t as m } from "./motion.DVY4-TFg.mjs";
import {
  At as h,
  C as g,
  Ct as _,
  Dt as v,
  Et as y,
  G as b,
  K as x,
  L as S,
  N as C,
  O as te,
  P as w,
  Q as T,
  Tt as E,
  _t as ne,
  a as D,
  at as O,
  bt as k,
  d as A,
  dt as j,
  f as M,
  gt as re,
  ht as ie,
  i as N,
  jt as P,
  k as F,
  kt as I,
  lt as ae,
  m as L,
  mt as oe,
  n as se,
  o as R,
  q as z,
  u as ce,
  ut as le,
  vt as ue,
  w as de,
  yt as B,
  z as V,
} from "./framer.CFqKih1k.mjs";
import {
  a as H,
  c as U,
  d as fe,
  f as pe,
  i as me,
  l as he,
  o as ge,
  r as _e,
  s as ve,
  u as ye,
} from "./shared-lib.P4JA4aUc.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./cPVM1_Pc1.CsfRepwj.mjs";
import { i as we, n as W, r as Te, t as Ee } from "./lWCsMyG06.CDHEYcI6.mjs";
import { n as De, t as Oe } from "./LULlC_Twp.tHxtAzPG.mjs";
import { i as ke, r as Ae } from "./kMLIh8Wrw.D1c-0SWh.mjs";
import { n as je, t as Me } from "./RYbbKkijH.C2ni4dhN.mjs";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./ZHicPb8Xd.gi7bRg0S.mjs";
import { n as Le, t as Re } from "./O_XoZ3FcZ.B2MjJM3Z.mjs";
import { n as ze, r as Be } from "./CU0zg7VCq.BTNg6bfJ.mjs";
function Ve(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  G,
  K,
  Qe = e(() => {
    (l(),
      T(),
      m(),
      i(),
      U(),
      (He = { QtSiIiCVD: { hover: !0 } }),
      (Ue = [`QtSiIiCVD`, `Gv74H_53N`]),
      (We = `framer-N3rdk`),
      (Ge = { Gv74H_53N: `framer-v-1ny6lbe`, QtSiIiCVD: `framer-v-1bdtzdd` }),
      (Ke = { duration: 0, type: `tween` }),
      (qe = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = ee(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: n });
      }),
      (Je = { Active: `Gv74H_53N`, Default: `QtSiIiCVD` }),
      (Ye = d.create(r)),
      (Xe = ({ click: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        eAHGXWjyh: e ?? a.eAHGXWjyh,
        mXpY5N3RA: r ?? a.mXpY5N3RA ?? `Category`,
        variant: Je[a.variant] ?? a.variant ?? `QtSiIiCVD`,
      })),
      (Ze = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = v(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: ee, setLocale: l } = B(),
            f = j(),
            {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              mXpY5N3RA: v,
              eAHGXWjyh: b,
              ...x
            } = Xe(e),
            {
              baseVariant: C,
              classNames: te,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: ne,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = y({
              cycleOrder: Ue,
              defaultVariant: `QtSiIiCVD`,
              enabledGestures: He,
              ref: a,
              variant: _,
              variantClassNames: Ge,
            }),
            A = Ze(e, k),
            { activeVariantCallback: M, delay: re } = ae(C),
            ie = M(async (...e) => {
              if ((D({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
            }),
            N = S(We, H),
            P = () => E === `QtSiIiCVD-hover` || C === `Gv74H_53N`;
          return c(p, {
            id: g ?? s,
            children: c(Ye, {
              animate: k,
              initial: !1,
              children: c(qe, {
                value: Ke,
                children: u(d.div, {
                  ...x,
                  ...T,
                  className: S(N, `framer-1bdtzdd`, h, te),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: A,
                  layoutId: `QtSiIiCVD`,
                  onTap: ie,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-18d30b46-d0d7-4595-9e6d-7c78c6c86a4f, rgb(62, 59, 57))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...m,
                  },
                  variants: {
                    "QtSiIiCVD-hover": {
                      "--border-color": `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                      backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                    },
                    Gv74H_53N: {
                      "--border-bottom-width": `0px`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-top-width": `0px`,
                      backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                    },
                  },
                  ...Ve(
                    {
                      "QtSiIiCVD-hover": { "data-framer-name": void 0 },
                      Gv74H_53N: { "data-framer-name": `Active` },
                    },
                    C,
                    E
                  ),
                  children: [
                    P() &&
                      c(L, {
                        background: {
                          alt: `Logo`,
                          fit: `fill`,
                          intrinsicHeight: 532,
                          intrinsicWidth: 992,
                          pixelHeight: 532,
                          pixelWidth: 992,
                          src: `../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U.png`,
                          srcSet: `../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U-1fc034.png 512w,../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U.png 992w`,
                        },
                        className: `framer-i4t5sa`,
                        "data-framer-name": `Noise Bg`,
                        layoutDependency: A,
                        layoutId: `xO9t3j7Sc`,
                        ...Ve(
                          {
                            "QtSiIiCVD-hover": {
                              background: {
                                alt: `Logo`,
                                fit: `fill`,
                                intrinsicHeight: 532,
                                intrinsicWidth: 992,
                                loading: z((f?.y || 0) + -51),
                                pixelHeight: 532,
                                pixelWidth: 992,
                                sizes: `calc(${f?.width || `100vw`} + 139px)`,
                                src: `../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U.png`,
                                srcSet: `../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U-1fc034.png 512w,../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U.png 992w`,
                              },
                            },
                            Gv74H_53N: {
                              background: {
                                alt: `Logo`,
                                fit: `fill`,
                                intrinsicHeight: 532,
                                intrinsicWidth: 992,
                                loading: z((f?.y || 0) + -51),
                                pixelHeight: 532,
                                pixelWidth: 992,
                                sizes: `calc(${f?.width || `100vw`} + 139px)`,
                                src: `../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U.png`,
                                srcSet: `../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U-1fc034.png 512w,../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U.png 992w`,
                              },
                            },
                          },
                          C,
                          E
                        ),
                      }),
                    c(F, {
                      __fromCanvasComponent: !0,
                      children: c(r, {
                        children: c(d.p, {
                          className: `framer-styles-preset-14qd5ms`,
                          "data-styles-preset": `eMJMLduj1`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                          },
                          children: `Category`,
                        }),
                      }),
                      className: `framer-1vv3y3k`,
                      "data-framer-name": `Title`,
                      fonts: [`Inter`],
                      layoutDependency: A,
                      layoutId: `sxhsH3Zfy`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                      },
                      text: v,
                      variants: { Gv74H_53N: { "--extracted-r6o4lv": `rgb(255, 255, 255)` } },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Ve(
                        {
                          Gv74H_53N: {
                            children: c(r, {
                              children: c(d.p, {
                                className: `framer-styles-preset-14qd5ms`,
                                "data-styles-preset": `eMJMLduj1`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                },
                                children: `Category`,
                              }),
                            }),
                          },
                        },
                        C,
                        E
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-N3rdk.framer-4n1k1f, .framer-N3rdk .framer-4n1k1f { display: block; }`,
          `.framer-N3rdk.framer-1bdtzdd { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 12px 24px 12px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-N3rdk .framer-i4t5sa { bottom: -52px; flex: none; left: -69px; overflow: visible; position: absolute; right: -70px; top: -51px; z-index: 2; }`,
          `.framer-N3rdk .framer-1vv3y3k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...ge,
          `.framer-N3rdk[data-border="true"]::after, .framer-N3rdk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-N3rdk`
      )),
      (K = G),
      (G.displayName = `Tab`),
      (G.defaultProps = { height: 48, width: 116 }),
      w(G, {
        variant: {
          options: [`QtSiIiCVD`, `Gv74H_53N`],
          optionTitles: [`Default`, `Active`],
          title: `Variant`,
          type: R.Enum,
        },
        mXpY5N3RA: {
          defaultValue: `Category`,
          displayTextArea: !1,
          title: `Title`,
          type: R.String,
        },
        onmXpY5N3RAChange: { changes: `mXpY5N3RA`, type: R.ChangeHandler },
        eAHGXWjyh: { title: `Click`, type: R.EventHandler },
      }),
      C(
        G,
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
          ...x(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  J,
  Y,
  mt = e(() => {
    (l(),
      T(),
      m(),
      i(),
      U(),
      ($e = I(d.div)),
      (et = { B1r4vipuv: { hover: !0, pressed: !0 } }),
      (tt = [`B1r4vipuv`, `RKPwJKw0g`, `gX5sldcjh`, `WJ3xpZiaO`, `D3P6Y9xBs`]),
      (nt = `framer-BCs9Y`),
      (rt = {
        B1r4vipuv: `framer-v-13kp5uj`,
        D3P6Y9xBs: `framer-v-1cwzj08`,
        gX5sldcjh: `framer-v-1cqa84m`,
        RKPwJKw0g: `framer-v-v9tyqn`,
        WJ3xpZiaO: `framer-v-ak4mmi`,
      }),
      (it = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (at = (e, t) => `translateY(-50%) ${t}`),
      (ot = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (st = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (ct = (e, t) => `translateX(-50%) ${t}`),
      (lt = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = ee(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: n });
      }),
      (ut = {
        Default: `B1r4vipuv`,
        Disabled: `gX5sldcjh`,
        Error: `D3P6Y9xBs`,
        Loading: `RKPwJKw0g`,
        Success: `WJ3xpZiaO`,
      }),
      (dt = d.create(r)),
      (ft = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        EdpegOGgS: n ?? i.EdpegOGgS ?? `Subscribe`,
        variant: ut[i.variant] ?? i.variant ?? `B1r4vipuv`,
      })),
      (pt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = v(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: ee, setLocale: l } = B(),
            f = j(),
            { style: m, className: h, layoutId: g, variant: _, EdpegOGgS: v, ...b } = ft(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: te,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: ne,
              setVariant: D,
              variants: O,
            } = y({
              cycleOrder: tt,
              defaultVariant: `B1r4vipuv`,
              enabledGestures: et,
              ref: a,
              variant: _,
              variantClassNames: rt,
            }),
            k = pt(e, O),
            A = S(nt, H),
            M = () => x !== `RKPwJKw0g`,
            re = () => T !== `B1r4vipuv-pressed`,
            ie = () => x === `RKPwJKw0g`;
          return c(p, {
            id: g ?? s,
            children: c(dt, {
              animate: O,
              initial: !1,
              children: c(lt, {
                value: it,
                children: u(d.button, {
                  ...b,
                  ...w,
                  className: S(A, `framer-13kp5uj`, h, C),
                  "data-border": !0,
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: k,
                  layoutId: `B1r4vipuv`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-a07d1ed9-425c-4a31-a256-9e3eb7b18cbd, rgba(225, 129, 65, 0.08))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    opacity: 1,
                    ...m,
                  },
                  variants: {
                    "B1r4vipuv-hover": { opacity: 1 },
                    "B1r4vipuv-pressed": { opacity: 1 },
                    D3P6Y9xBs: {
                      backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                      opacity: 1,
                    },
                    gX5sldcjh: { opacity: 0.5 },
                    WJ3xpZiaO: { opacity: 1 },
                  },
                  ...q(
                    {
                      "B1r4vipuv-hover": { "data-framer-name": void 0 },
                      "B1r4vipuv-pressed": { "data-framer-name": void 0 },
                      D3P6Y9xBs: { "data-framer-name": `Error` },
                      gX5sldcjh: { "data-framer-name": `Disabled` },
                      RKPwJKw0g: { "data-framer-name": `Loading` },
                      WJ3xpZiaO: { "data-framer-name": `Success` },
                    },
                    x,
                    T
                  ),
                  children: [
                    c(L, {
                      background: {
                        alt: `Logo`,
                        fit: `fill`,
                        intrinsicHeight: 532,
                        intrinsicWidth: 992,
                        loading: z((f?.y || 0) + -51),
                        pixelHeight: 532,
                        pixelWidth: 992,
                        sizes: `calc(${f?.width || `100vw`} + 139px)`,
                        src: `../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U.png`,
                        srcSet: `../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U-1fc034.png 512w,../../assets/images/OJYeJ6Wvl1jEHttHmFVGi5En2U.png 992w`,
                      },
                      className: `framer-1ul5nwc`,
                      "data-framer-name": `Noise Bg`,
                      layoutDependency: k,
                      layoutId: `PWdETpnZW`,
                    }),
                    M() &&
                      u(d.div, {
                        className: `framer-asq8v8`,
                        "data-framer-name": `Text Wrapper`,
                        layoutDependency: k,
                        layoutId: `mN_QIkWkI`,
                        children: [
                          c(F, {
                            __fromCanvasComponent: !0,
                            children: c(r, {
                              children: c(d.p, {
                                className: `framer-styles-preset-14qd5ms`,
                                "data-styles-preset": `eMJMLduj1`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                },
                                children: `Subscribe`,
                              }),
                            }),
                            className: `framer-qvp2ku`,
                            "data-framer-name": `Static`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `p4W7yT6fD`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                              opacity: 0,
                            },
                            text: v,
                            variants: {
                              "B1r4vipuv-pressed": { opacity: 1 },
                              D3P6Y9xBs: {
                                "--extracted-r6o4lv": `var(--token-9a561a59-6f59-4444-b79d-017e3ccb5a49, rgb(255, 34, 68))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...q(
                              {
                                D3P6Y9xBs: {
                                  children: c(r, {
                                    children: c(d.p, {
                                      className: `framer-styles-preset-14qd5ms`,
                                      "data-styles-preset": `eMJMLduj1`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9a561a59-6f59-4444-b79d-017e3ccb5a49, rgb(255, 34, 68)))`,
                                      },
                                      children: `Something went wrong`,
                                    }),
                                  }),
                                  text: void 0,
                                },
                                WJ3xpZiaO: {
                                  children: c(r, {
                                    children: c(d.p, {
                                      className: `framer-styles-preset-14qd5ms`,
                                      "data-styles-preset": `eMJMLduj1`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                      },
                                      children: `Thank you`,
                                    }),
                                  }),
                                  text: void 0,
                                },
                              },
                              x,
                              T
                            ),
                          }),
                          re() &&
                            c(F, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-14qd5ms`,
                                  "data-styles-preset": `eMJMLduj1`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                  },
                                  children: `Subscribe`,
                                }),
                              }),
                              className: `framer-103zymp`,
                              "data-framer-name": `Text 1 `,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `g8rsLNO7e`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: v,
                              transformTemplate: at,
                              variants: {
                                D3P6Y9xBs: {
                                  "--extracted-r6o4lv": `var(--token-9a561a59-6f59-4444-b79d-017e3ccb5a49, rgb(255, 34, 68))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  "B1r4vipuv-hover": { transformTemplate: void 0 },
                                  D3P6Y9xBs: {
                                    children: c(r, {
                                      children: c(d.p, {
                                        className: `framer-styles-preset-14qd5ms`,
                                        "data-styles-preset": `eMJMLduj1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9a561a59-6f59-4444-b79d-017e3ccb5a49, rgb(255, 34, 68)))`,
                                        },
                                        children: `Something went wrong`,
                                      }),
                                    }),
                                    text: void 0,
                                  },
                                  WJ3xpZiaO: {
                                    children: c(r, {
                                      children: c(d.p, {
                                        className: `framer-styles-preset-14qd5ms`,
                                        "data-styles-preset": `eMJMLduj1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                        },
                                        children: `Thank you`,
                                      }),
                                    }),
                                    text: void 0,
                                  },
                                },
                                x,
                                T
                              ),
                            }),
                          re() &&
                            c(F, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-14qd5ms`,
                                  "data-styles-preset": `eMJMLduj1`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                  },
                                  children: `Subscribe`,
                                }),
                              }),
                              className: `framer-o66ncz`,
                              "data-framer-name": `Text 2`,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `P9BKFpkZV`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: v,
                              variants: {
                                D3P6Y9xBs: {
                                  "--extracted-r6o4lv": `var(--token-9a561a59-6f59-4444-b79d-017e3ccb5a49, rgb(255, 34, 68))`,
                                },
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...q(
                                {
                                  D3P6Y9xBs: {
                                    children: c(r, {
                                      children: c(d.p, {
                                        className: `framer-styles-preset-14qd5ms`,
                                        "data-styles-preset": `eMJMLduj1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9a561a59-6f59-4444-b79d-017e3ccb5a49, rgb(255, 34, 68)))`,
                                        },
                                        children: `Something went wrong`,
                                      }),
                                    }),
                                    text: void 0,
                                  },
                                  WJ3xpZiaO: {
                                    children: c(r, {
                                      children: c(d.p, {
                                        className: `framer-styles-preset-14qd5ms`,
                                        "data-styles-preset": `eMJMLduj1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                        },
                                        children: `Thank you`,
                                      }),
                                    }),
                                    text: void 0,
                                  },
                                },
                                x,
                                T
                              ),
                            }),
                        ],
                      }),
                    ie() &&
                      c(d.div, {
                        className: `framer-sb5xrw`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: k,
                        layoutId: `TcYVJ4d5N`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: c($e, {
                          __framer__loop: st,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: ot,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-vxdibw`,
                          "data-framer-name": `Conic`,
                          layoutDependency: k,
                          layoutId: `zdtbp_Id3`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            RKPwJKw0g: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: c(d.div, {
                            className: `framer-2bbwvj`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: k,
                            layoutId: `upuXD031K`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: ct,
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-BCs9Y.framer-1pewl4r, .framer-BCs9Y .framer-1pewl4r { display: block; }`,
          `.framer-BCs9Y.framer-13kp5uj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 24px 12px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-BCs9Y .framer-1ul5nwc { bottom: -52px; flex: none; left: -69px; overflow: visible; position: absolute; right: -70px; top: -51px; z-index: 2; }`,
          `.framer-BCs9Y .framer-asq8v8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-BCs9Y .framer-qvp2ku { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-BCs9Y .framer-103zymp { -webkit-user-select: none; flex: none; height: auto; left: 0px; position: absolute; top: 50%; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-BCs9Y .framer-o66ncz { -webkit-user-select: none; flex: none; height: auto; left: 0px; position: absolute; top: 30px; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-BCs9Y .framer-sb5xrw { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-BCs9Y .framer-vxdibw { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-BCs9Y .framer-2bbwvj { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-BCs9Y.framer-v-v9tyqn.framer-13kp5uj, .framer-BCs9Y.framer-v-1cqa84m.framer-13kp5uj, .framer-BCs9Y.framer-v-ak4mmi.framer-13kp5uj, .framer-BCs9Y.framer-v-1cwzj08.framer-13kp5uj { cursor: unset; }`,
          `.framer-BCs9Y.framer-v-v9tyqn .framer-vxdibw { overflow: hidden; }`,
          `.framer-BCs9Y.framer-v-13kp5uj.hover .framer-103zymp { top: -45px; }`,
          `.framer-BCs9Y.framer-v-13kp5uj.hover .framer-o66ncz { top: 0px; }`,
          ...ge,
          `.framer-BCs9Y[data-border="true"]::after, .framer-BCs9Y [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-BCs9Y`
      )),
      (Y = J),
      (J.displayName = `Subscribe Button`),
      (J.defaultProps = { height: 48, width: 121 }),
      w(J, {
        variant: {
          options: [`B1r4vipuv`, `RKPwJKw0g`, `gX5sldcjh`, `WJ3xpZiaO`, `D3P6Y9xBs`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: R.Enum,
        },
        EdpegOGgS: {
          defaultValue: `Subscribe`,
          displayTextArea: !1,
          title: `Title`,
          type: R.String,
        },
        onEdpegOGgSChange: { changes: `EdpegOGgS`, type: R.ChangeHandler },
      }),
      C(
        J,
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
          ...x(ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
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
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  X,
  jt,
  Z,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Q,
  Yt,
  Xt,
  Zt,
  Qt,
  $,
  $t,
  en;
e(() => {
  (l(),
    T(),
    m(),
    i(),
    me(),
    Le(),
    De(),
    Ee(),
    Qe(),
    mt(),
    Ae(),
    je(),
    be(),
    pe(),
    Ne(),
    we(),
    ze(),
    (ht = b(W)),
    (gt = P(F)),
    (_t = b(Y)),
    (vt = P(ce)),
    (yt = b(K)),
    (bt = I(d.div)),
    (xt = b(Oe)),
    (St = I(D)),
    (Ct = b(Re)),
    (wt = h(D)),
    (Tt = b(_e)),
    (Et = {
      CpvgYG32K: `(min-width: 1440px)`,
      HztlDCUEG: `(max-width: 809.98px)`,
      NV65UfJsr: `(min-width: 810px) and (max-width: 1439.98px)`,
    }),
    (Dt = [`tag`, `tag-2`, `blog-tag`]),
    (Ot = `framer-kwrm5`),
    (kt = {
      CpvgYG32K: `framer-v-60ji90`,
      HztlDCUEG: `framer-v-1jpriag`,
      NV65UfJsr: `framer-v-tuc1eo`,
    }),
    (At = (e, t, n) => (e && t ? `position` : n)),
    (X = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (jt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 35, delay: 0, mass: 2, stiffness: 120, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Z = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (Mt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 35, delay: 0.1, mass: 2, stiffness: 120, type: `spring` },
      x: 0,
      y: 0,
    }),
    (Nt = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Pt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (Ft = { damping: 35, delay: 0.2, mass: 2, stiffness: 120, type: `spring` }),
    (It = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Lt = (e, t) => (e ? `QtSiIiCVD` : `Gv74H_53N`)),
    (Rt = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (zt = (e, t) => (e ? `Gv74H_53N` : `QtSiIiCVD`)),
    (Bt = () => ({
      from: { alias: `Ze5ekU9WP`, data: Me, type: `Collection` },
      select: [
        { collection: `Ze5ekU9WP`, name: `id`, type: `Identifier` },
        { collection: `Ze5ekU9WP`, name: `Qrt_rd2FR`, type: `Identifier` },
        { collection: `Ze5ekU9WP`, name: `mi5NwLI0B`, type: `Identifier` },
      ],
    })),
    (Vt = ({ query: e, pageSize: t, children: n }) => n(_(e))),
    (Ht = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Ut = (e, t, { ZeS11p5hZ_Qrt_rd2FRgcQz3ec1n: n }) => (e ? n : ``)),
    (Wt = (e) => (typeof e == `string` ? e : String(e))),
    (Gt = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (Kt = { dateStyle: `medium`, timeZone: `UTC` }),
    (qt = (e, t) => Gt(e, Kt, t)),
    (Jt = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (Q = (e) => ({
      from: {
        constraint: {
          left: { collection: `gcQz3ec1n`, name: `ZeS11p5hZ`, type: `Identifier` },
          operator: `==`,
          right: { collection: `ZeS11p5hZ`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `gcQz3ec1n`, data: ke, type: `Collection` },
        right: { alias: `ZeS11p5hZ`, data: Me, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `gcQz3ec1n`, name: `JLL8JOGHV`, type: `Identifier` },
        { alias: `ZeS11p5hZ`, collection: `ZeS11p5hZ`, name: `id`, type: `Identifier` },
        {
          alias: `ZeS11p5hZ.Qrt_rd2FR`,
          collection: `ZeS11p5hZ`,
          name: `Qrt_rd2FR`,
          type: `Identifier`,
        },
        { collection: `gcQz3ec1n`, name: `ciByNfHzo`, type: `Identifier` },
        { collection: `gcQz3ec1n`, name: `da3SPTjC9`, type: `Identifier` },
        { collection: `gcQz3ec1n`, name: `oAZyvtn5K`, type: `Identifier` },
        { collection: `gcQz3ec1n`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: { type: `LiteralValue`, value: e },
          operator: `==`,
          right: { type: `LiteralValue`, value: null },
          type: `BinaryOperation`,
        },
        operator: `or`,
        right: {
          left: { collection: `ZeS11p5hZ`, name: `id`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (Yt = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = ne(e, t, `gcQz3ec1n`);
      return n(_(r), i, a);
    }),
    (Xt = { Desktop: `CpvgYG32K`, Phone: `HztlDCUEG`, Tablet: `NV65UfJsr` }),
    (Zt = ({ value: e }) =>
      re()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Qt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Xt[r.variant] ?? r.variant ?? `CpvgYG32K`,
    })),
    ($ = v(
      a(function (e, i) {
        let a = n(null),
          l = i ?? a,
          m = o(),
          { activeLocale: h, setLocale: _ } = B(),
          v = j(),
          [y, b] = le({ collectionId: `RYbbKkijH`, optional: !0, parameterName: `blog-tag` }),
          { style: x, className: C, layoutId: w, variant: T, ...ne } = Qt(e);
        k(ee(() => Be({}, h), [h]));
        let [O, re] = ie(T, Et, !1),
          { activeVariantCallback: P, delay: I } = ae(void 0),
          L = P(async (...e) => {
            b?.(void 0);
          }),
          R = ({ argubt74w: e }) =>
            P(async (...t) => {
              b?.(e);
            }),
          z = S(Ot, Ie, he, Ce),
          ce = t(M)?.isLayoutTemplate,
          V = At(ce, !!t(f)?.transition?.layout),
          H = ue();
        E();
        let U = n(null);
        return (
          oe({}),
          c(M.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Xt,
              primaryVariantId: `CpvgYG32K`,
              variantClassNames: kt,
            },
            children: u(p, {
              id: w ?? m,
              children: [
                c(Zt, {
                  value: `html body { background: var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)); }`,
                }),
                u(d.div, {
                  ...ne,
                  className: S(z, `framer-60ji90`, C),
                  ref: l,
                  style: { ...x },
                  children: [
                    u(d.main, {
                      className: `framer-drwjn`,
                      "data-framer-name": `Main`,
                      layout: V,
                      children: [
                        c(`section`, {
                          className: `framer-1ok3729`,
                          "data-framer-name": `Hero`,
                          children: c(`div`, {
                            className: `framer-38fhki`,
                            "data-framer-name": `Container`,
                            children: u(`div`, {
                              className: `framer-1v5bgqj`,
                              "data-framer-name": `Content Wrapper `,
                              children: [
                                c(N, {
                                  height: 28,
                                  children: c(D, {
                                    className: `framer-je0q1d-container`,
                                    nodeId: `Aya5j1Cqv`,
                                    scopeId: `CU0zg7VCq`,
                                    children: c(W, {
                                      btyoXJXaz: Te,
                                      height: `100%`,
                                      id: `Aya5j1Cqv`,
                                      layoutId: `Aya5j1Cqv`,
                                      Selq1Epo8: `The scalora journal`,
                                      variant: X(`nJO_haG3O`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                u(`div`, {
                                  className: `framer-r41y9n`,
                                  "data-framer-name": `Text Wrapper`,
                                  children: [
                                    u(`div`, {
                                      className: `framer-achhcw`,
                                      "data-framer-name": `Heading & Sub Text`,
                                      children: [
                                        c(gt, {
                                          __fromCanvasComponent: !0,
                                          animate: jt,
                                          children: c(r, {
                                            children: c(`h1`, {
                                              className: `framer-styles-preset-qi1ayi`,
                                              "data-styles-preset": `ZHicPb8Xd`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                              },
                                              children: `Ideas for building scalable businesses`,
                                            }),
                                          }),
                                          className: `framer-4z0ecv`,
                                          "data-framer-appear-id": `4z0ecv`,
                                          fonts: [`Inter`],
                                          initial: Z,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        c(gt, {
                                          __fromCanvasComponent: !0,
                                          animate: Mt,
                                          children: c(r, {
                                            children: c(`p`, {
                                              className: `framer-styles-preset-13ryzp6`,
                                              "data-styles-preset": `Yw0GmpI8u`,
                                              dir: `auto`,
                                              style: {
                                                "--framer-text-alignment": `center`,
                                                "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                              },
                                              children: `Actionable frameworks, operational strategies, and growth playbooks for modern teams building scalable businesses.`,
                                            }),
                                          }),
                                          className: `framer-pkqmgx`,
                                          "data-framer-appear-id": `pkqmgx`,
                                          fonts: [`Inter`],
                                          initial: Z,
                                          optimized: !0,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    c(vt, {
                                      animate: Mt,
                                      className: `framer-1ljl7p9`,
                                      "data-border": !0,
                                      "data-framer-appear-id": `1ljl7p9`,
                                      initial: Z,
                                      nodeId: `jYTQ8H_aS`,
                                      optimized: !0,
                                      children: (e) =>
                                        c(s, {
                                          children: u(`div`, {
                                            className: `framer-131eywc`,
                                            "data-framer-name": `Email And Button`,
                                            children: [
                                              c(`label`, {
                                                className: `framer-1kemllc`,
                                                children: c(A, {
                                                  className: `framer-9gie42`,
                                                  inputName: `Email`,
                                                  placeholder: `Enter your email address`,
                                                  type: `email`,
                                                }),
                                              }),
                                              c(N, {
                                                height: 48,
                                                children: c(D, {
                                                  className: `framer-1uqgcwt-container`,
                                                  nodeId: `nW0GNeVr3`,
                                                  scopeId: `CU0zg7VCq`,
                                                  children: c(Y, {
                                                    EdpegOGgS: `Subscribe`,
                                                    height: `100%`,
                                                    id: `nW0GNeVr3`,
                                                    layoutId: `nW0GNeVr3`,
                                                    type: `submit`,
                                                    variant: Nt(
                                                      e,
                                                      { pending: `RKPwJKw0g` },
                                                      X(`B1r4vipuv`)
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        c(`section`, {
                          className: `framer-hq0fan`,
                          children: u(`div`, {
                            className: `framer-akjkgj`,
                            "data-framer-name": `Container`,
                            children: [
                              u(bt, {
                                __framer__animate: { transition: Ft },
                                __framer__animateOnce: !0,
                                __framer__enter: Pt,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1fwzv5c`,
                                "data-framer-name": `Article Feed`,
                                children: [
                                  c(F, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(`h2`, {
                                        className: `framer-styles-preset-3yq5jl`,
                                        "data-styles-preset": `cPVM1_Pc1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        },
                                        children: `Latest articles`,
                                      }),
                                    }),
                                    className: `framer-9moz3r`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  c(`div`, {
                                    className: `framer-1bq2l04`,
                                    children: c(se, {
                                      children: c(Vt, {
                                        query: Bt(),
                                        children: (e, t, n) =>
                                          u(s, {
                                            children: [
                                              c(N, {
                                                height: 48,
                                                children: c(D, {
                                                  className: `framer-1ua3fwb-container`,
                                                  nodeId: `JZGLJ4hvQ`,
                                                  scopeId: `CU0zg7VCq`,
                                                  children: c(K, {
                                                    eAHGXWjyh: L,
                                                    height: `100%`,
                                                    id: `JZGLJ4hvQ`,
                                                    layoutId: `JZGLJ4hvQ`,
                                                    mXpY5N3RA: `All article`,
                                                    variant: X(Lt(It(y), h)),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                              e?.map(
                                                ({ id: e, mi5NwLI0B: t, Qrt_rd2FR: n }, r) => (
                                                  (n ??= ``),
                                                  (t ??= ``),
                                                  c(
                                                    p,
                                                    {
                                                      id: `Ze5ekU9WP-${e}`,
                                                      children: c(g.Provider, {
                                                        value: { mi5NwLI0B: t },
                                                        children: c(N, {
                                                          height: 48,
                                                          children: c(D, {
                                                            className: `framer-j3d95h-container`,
                                                            nodeId: `eajp1ToKD`,
                                                            scopeId: `CU0zg7VCq`,
                                                            children: c(K, {
                                                              eAHGXWjyh: R({ argubt74w: e }),
                                                              height: `100%`,
                                                              id: `eajp1ToKD`,
                                                              layoutId: `eajp1ToKD`,
                                                              mXpY5N3RA: n,
                                                              variant: X(zt(Rt(y, e), h)),
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    },
                                                    e
                                                  )
                                                )
                                              ),
                                            ],
                                          }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-11nwf0o`,
                                "data-framer-name": `Main Botton Content`,
                                children: [
                                  c(`div`, {
                                    className: `framer-1mwir88`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  c(`div`, {
                                    className: `framer-1osq5sn`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  c(`div`, {
                                    className: `framer-13lxwts`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  c(`div`, {
                                    className: `framer-r5ophg`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  c(`div`, {
                                    className: `framer-15sl5if`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  c(`div`, {
                                    className: `framer-17nddr1`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  c(`div`, {
                                    className: `framer-172aw2`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  c(`div`, {
                                    className: `framer-28m05t`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                  c(`div`, {
                                    className: `framer-rzohhc`,
                                    children: c(se, {
                                      children: c(Yt, {
                                        pageSize: 10,
                                        query: Q(y),
                                        children: (e, t, n) =>
                                          u(s, {
                                            children: [
                                              e?.map(
                                                (
                                                  {
                                                    "ZeS11p5hZ.Qrt_rd2FR": e,
                                                    ciByNfHzo: t,
                                                    da3SPTjC9: n,
                                                    id: r,
                                                    JLL8JOGHV: i,
                                                    oAZyvtn5K: a,
                                                    ZeS11p5hZ: o,
                                                  },
                                                  s
                                                ) => (
                                                  (e ??= ``),
                                                  (n ??= ``),
                                                  (a ??= ``),
                                                  c(
                                                    p,
                                                    {
                                                      id: `gcQz3ec1n-${r}`,
                                                      children: c(g.Provider, {
                                                        value: { oAZyvtn5K: a },
                                                        children: c(te, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { oAZyvtn5K: a },
                                                                webPageId: `ekxIMAgLO`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { oAZyvtn5K: a },
                                                                webPageId: `ekxIMAgLO`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { oAZyvtn5K: a },
                                                                webPageId: `ekxIMAgLO`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (r) =>
                                                            c(de, {
                                                              breakpoint: O,
                                                              overrides: {
                                                                HztlDCUEG: {
                                                                  width: `max(min(${v?.width || `100vw`} - 32px, 1280px), 50px)`,
                                                                },
                                                                NV65UfJsr: {
                                                                  width: `max(min(${v?.width || `100vw`} - 80px, 1280px) / 2, 50px)`,
                                                                },
                                                              },
                                                              children: c(N, {
                                                                height: 424,
                                                                width: `max(max(min(${v?.width || `100vw`} - 160px, 1280px), 1px) / 3, 50px)`,
                                                                children: c(St, {
                                                                  __framer__animate: {
                                                                    transition: Ft,
                                                                  },
                                                                  __framer__animateOnce: !0,
                                                                  __framer__enter: Pt,
                                                                  __framer__styleAppearEffectEnabled:
                                                                    !0,
                                                                  __framer__threshold: 0,
                                                                  __perspectiveFX: !1,
                                                                  __targetOpacity: 1,
                                                                  className: `framer-1kgjnqm-container`,
                                                                  nodeId: `MWt55sLzL`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `CU0zg7VCq`,
                                                                  children: c(de, {
                                                                    breakpoint: O,
                                                                    overrides: {
                                                                      HztlDCUEG: {
                                                                        CphaCzuak: r[2],
                                                                        uzYIOQFMN: {
                                                                          borderBottomWidth: 1,
                                                                          borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                                          borderLeftWidth: 0,
                                                                          borderRightWidth: 0,
                                                                          borderStyle: `solid`,
                                                                          borderTopWidth: 0,
                                                                        },
                                                                        variant: X(`B5eOgs6_u`),
                                                                      },
                                                                      NV65UfJsr: {
                                                                        CphaCzuak: r[1],
                                                                        uzYIOQFMN: {
                                                                          borderBottomWidth: 1,
                                                                          borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                                          borderLeftWidth: 0,
                                                                          borderRightWidth: 1,
                                                                          borderStyle: `solid`,
                                                                          borderTopWidth: 0,
                                                                        },
                                                                        variant: X(`B5eOgs6_u`),
                                                                      },
                                                                    },
                                                                    children: c(Oe, {
                                                                      CphaCzuak: r[0],
                                                                      F_CSN01FX: Wt(
                                                                        Ut(It(o), h, {
                                                                          ZeS11p5hZ_Qrt_rd2FRgcQz3ec1n:
                                                                            e,
                                                                        })
                                                                      ),
                                                                      height: `100%`,
                                                                      id: `MWt55sLzL`,
                                                                      layoutId: `MWt55sLzL`,
                                                                      MhlZROnC2: n,
                                                                      style: { width: `100%` },
                                                                      UCDbjiNYK: qt(t, H),
                                                                      uzYIOQFMN: {
                                                                        borderBottomWidth: 1,
                                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                                        borderLeftWidth: 1,
                                                                        borderRightWidth: 0,
                                                                        borderStyle: `solid`,
                                                                        borderTopWidth: 0,
                                                                      },
                                                                      variant: X(`hnYxKWUZ8`),
                                                                      width: `100%`,
                                                                      YF3KZhs7x: Ht(i),
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    },
                                                    r
                                                  )
                                                )
                                              ),
                                              c(N, {
                                                height: 40,
                                                children: c(wt, {
                                                  __loadMore: n,
                                                  __paginationInfo: t,
                                                  className: `framer-jtds6d-container`,
                                                  isModuleExternal: !0,
                                                  nodeId: `c1Btvtq1R`,
                                                  ref: U,
                                                  scopeId: `CU0zg7VCq`,
                                                  children: c(Re, {
                                                    height: `100%`,
                                                    id: `c1Btvtq1R`,
                                                    layoutId: `c1Btvtq1R`,
                                                    variant: Jt(
                                                      t,
                                                      {
                                                        disabled: `PX1MOnVXY`,
                                                        loading: `G47S15YSn`,
                                                      },
                                                      X(`G47S15YSn`)
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    c(N, {
                      children: c(D, {
                        className: `framer-1pktntl-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: V,
                        nodeId: `i2S4emzoG`,
                        scopeId: `CU0zg7VCq`,
                        children: c(_e, {
                          height: `100%`,
                          id: `i2S4emzoG`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `i2S4emzoG`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-kwrm5.framer-1wt2la6, .framer-kwrm5 .framer-1wt2la6 { display: block; }`,
        `.framer-kwrm5.framer-60ji90 { align-content: center; align-items: center; background-color: var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-kwrm5 .framer-drwjn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-1ok3729 { align-content: flex-start; align-items: flex-start; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 0px 16px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-38fhki { align-content: center; align-items: center; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #242424); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 220px 16px 160px 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-kwrm5 .framer-1v5bgqj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-je0q1d-container, .framer-kwrm5 .framer-1uqgcwt-container, .framer-kwrm5 .framer-1ua3fwb-container, .framer-kwrm5 .framer-j3d95h-container, .framer-kwrm5 .framer-1pktntl-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-kwrm5 .framer-r41y9n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-achhcw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-4z0ecv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 714px; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-kwrm5 .framer-pkqmgx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 506px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kwrm5 .framer-1ljl7p9 { --border-bottom-width: 1px; --border-color: var(--token-18d30b46-d0d7-4595-9e6d-7c78c6c86a4f, #3e3b39); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: 346px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-kwrm5 .framer-131eywc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-kwrm5 .framer-1kemllc { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-kwrm5 .framer-9gie42 { --framer-input-font-color: var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, #ffffff); --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0px; --framer-input-font-line-height: 24px; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 12px 24px 12px 24px; --framer-input-placeholder-color: var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, #b2b0ae); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-hq0fan { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-akjkgj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-1fwzv5c { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-9moz3r { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-kwrm5 .framer-1bq2l04 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 16px 16px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-11nwf0o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-1mwir88 { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 107.96874999999999% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 108%; z-index: 1; }`,
        `.framer-kwrm5 .framer-1osq5sn { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-kwrm5 .framer-13lxwts { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 107.96874999999999% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 108%; z-index: 1; }`,
        `.framer-kwrm5 .framer-r5ophg { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-kwrm5 .framer-15sl5if { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -4px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-kwrm5 .framer-17nddr1 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -4px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-kwrm5 .framer-172aw2 { background: linear-gradient(180deg, #161616 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 108%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.91909385113271% - 108% / 2); width: 1px; z-index: 1; }`,
        `.framer-kwrm5 .framer-28m05t { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 108%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.080906148867335% - 108% / 2); width: 1px; z-index: 1; }`,
        `.framer-kwrm5 .framer-rzohhc { display: grid; flex: 1 0 0px; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-kwrm5 .framer-1kgjnqm-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-kwrm5 .framer-jtds6d-container { bottom: -52px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; }`,
        ...Pe,
        ...ye,
        ...xe,
        `.framer-kwrm5[data-border="true"]::after, .framer-kwrm5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-kwrm5.framer-60ji90 { width: 810px; } .framer-kwrm5 .framer-4z0ecv, .framer-kwrm5 .framer-pkqmgx { max-width: 623px; } .framer-kwrm5 .framer-hq0fan { padding: 80px 40px 80px 40px; } .framer-kwrm5 .framer-akjkgj { gap: 75px; order: 0; } .framer-kwrm5 .framer-11nwf0o { flex-direction: column; } .framer-kwrm5 .framer-rzohhc { flex: none; grid-template-columns: repeat(2, minmax(50px, 1fr)); width: 100%; } .framer-kwrm5 .framer-jtds6d-container { bottom: -49px; }}`,
        `@media (max-width: 809.98px) { .framer-kwrm5.framer-60ji90 { width: 390px; } .framer-kwrm5 .framer-1ok3729 { padding: 8px 8px 0px 8px; } .framer-kwrm5 .framer-38fhki { padding: 116px 16px 40px 16px; } .framer-kwrm5 .framer-1v5bgqj, .framer-kwrm5 .framer-achhcw { gap: 16px; } .framer-kwrm5 .framer-1ljl7p9 { width: 100%; } .framer-kwrm5 .framer-131eywc { flex-wrap: wrap; } .framer-kwrm5 .framer-hq0fan { padding: 60px 16px 60px 16px; } .framer-kwrm5 .framer-akjkgj { gap: 40px; } .framer-kwrm5 .framer-1fwzv5c { gap: 24px; } .framer-kwrm5 .framer-11nwf0o { flex-direction: column; } .framer-kwrm5 .framer-1mwir88 { left: calc(50.00000000000002% - 106% / 2); width: 106%; } .framer-kwrm5 .framer-1osq5sn { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: 7px; left: -3px; top: -3px; width: 7px; } .framer-kwrm5 .framer-13lxwts { left: calc(50.00000000000002% - 108% / 2); width: 108%; } .framer-kwrm5 .framer-r5ophg { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: 7px; right: -3px; top: -3px; width: 7px; } .framer-kwrm5 .framer-15sl5if { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; right: -3px; width: 7px; } .framer-kwrm5 .framer-17nddr1 { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; left: -3px; width: 7px; } .framer-kwrm5 .framer-172aw2 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 1%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 98.1981981981982%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); height: 102%; top: calc(50.00000000000002% - 102% / 2); } .framer-kwrm5 .framer-28m05t { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 1%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 98.1981981981982%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); height: 102%; top: calc(50.00000000000002% - 101.98412698412697% / 2); } .framer-kwrm5 .framer-rzohhc { flex: none; grid-template-columns: repeat(1, minmax(50px, 1fr)); width: 100%; }}`,
      ],
      `framer-kwrm5`
    )),
    ($t = $),
    ($.displayName = `Blog`),
    ($.defaultProps = { height: 3528, width: 1440 }),
    C(
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
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Display`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter Display`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
              weight: `400`,
            },
          ],
        },
        ...ht,
        ..._t,
        ...yt,
        ...xt,
        ...Ct,
        ...Tt,
        ...x(Fe),
        ...x(fe),
        ...x(Se),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = (async () => ({
            hvxXCk0O51: await (async () => {
              let e = t.pathVariables?.[`blog-tag`] ?? ``;
              if (!e) return ``;
              let r = t.collectionUtils?.get(`RYbbKkijH`);
              return r ? ((await r.getRecordIdBySlug(e, n)) ?? ``) : ``;
            })(),
          }))(),
          i = O.get(Bt(), n);
        return Promise.allSettled([
          i.preload(),
          r.then(({ hvxXCk0O51: e }) => O.get(Q(e), n).preload()),
          V(W, {}, t),
          V(Y, {}, t),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [V(K, {}, t), V(K, {}, t)]));
          })(),
          (async () => {
            let { hvxXCk0O51: e } = await r,
              i = (await O.get(Q(e), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => [V(Oe, {}, t), V(Re, {}, t)]));
          })(),
        ]);
      },
    }),
    (en = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerCU0zg7VCq`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1440`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"NV65UfJsr":{"layout":["fixed","auto"]},"HztlDCUEG":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `3528`,
            framerScrollSections: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { en as __FramerMetadata__, $t as default, Dt as queryParamNames };
//# sourceMappingURL=VICh8icY7Lt-Y8_uDWtDEohk5G0LJtcdJqAEZtP8yHI.Bq6Kc44c.mjs.map
