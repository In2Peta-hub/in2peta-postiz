import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  A as t,
  O as ee,
  P as n,
  T as r,
  _ as te,
  b as ne,
  j as re,
  l as i,
  s as ie,
  u as a,
} from "./react.C83sJsFz.mjs";
import { E as o, a as ae, r as oe, t as se } from "./motion.DVY4-TFg.mjs";
import {
  A as ce,
  Dt as s,
  G as c,
  K as l,
  L as le,
  M as u,
  N as ue,
  Nt as de,
  O as d,
  Q as f,
  Tt as fe,
  a as p,
  bt as pe,
  dt as me,
  f as m,
  gt as h,
  ht as he,
  i as g,
  jt as _,
  k as v,
  kt as y,
  m as b,
  mt as ge,
  q as x,
  w as S,
  yt as _e,
  z as C,
} from "./framer.CFqKih1k.mjs";
import { d as ve, f as ye, i as w, l as be, r as xe, u as T } from "./shared-lib.P4JA4aUc.mjs";
import { n as E, t as D } from "./u0bvwikdM.mTdmAJ8w.mjs";
import { i as O, n as Se, r as Ce, t as we } from "./bz7TF8GsX.CGXVUdvb.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./kumYuXBDg.BDiDl76I.mjs";
import { n as k, t as ke } from "./v0GEiJsID.DbeCo17q.mjs";
import { i as Ae, n as A, r as j, t as je } from "./oDmEg1BTY.D9HRz7PU.mjs";
import { n as Me, t as M } from "./bCS5tafFa.DKT7mem2.mjs";
import { n as Ne, t as N } from "./BXLSbVJYa.DY9zsySh.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./cPVM1_Pc1.CsfRepwj.mjs";
import { i as Re, n as P, r as ze, t as Be } from "./lWCsMyG06.CDHEYcI6.mjs";
import { i as Ve, n as He, r as F, t as I } from "./Kbsz4vDYF.Db5CsEil.mjs";
import { i as Ue, n as We, r as Ge, t as Ke } from "./SsXMH0HVD.DJyqsYbQ.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./ZHicPb8Xd.gi7bRg0S.mjs";
import { a as L, i as Ze, n as Qe, o as $e, r as et, t as tt } from "./no1daujM5.8j03r7eY.mjs";
import { a as nt, i as rt, n as it, o as R, r as at, t as ot } from "./wHF0eLOEk.DX9-N_-H.mjs";
import { n as st, t as ct } from "./p7ySS4UNl.BYbtdluS.mjs";
import { n as lt, t as ut } from "./unG8Pmmqe.JuYQ84J0.mjs";
import { n as dt, r as ft } from "./HlaWX_f9j.Cu3pE3pA.mjs";
var pt,
  z,
  mt,
  ht,
  gt,
  B,
  V,
  _t,
  vt,
  H,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  U,
  Dt,
  Ot,
  kt,
  At,
  W,
  G,
  jt,
  K,
  q,
  J,
  Y,
  Mt,
  Nt,
  X,
  Z,
  Q,
  Pt,
  Ft,
  $,
  It,
  Lt;
e(() => {
  (ie(),
    f(),
    se(),
    r(),
    w(),
    Ae(),
    Me(),
    Ne(),
    $e(),
    Ve(),
    nt(),
    He(),
    Be(),
    je(),
    ke(),
    O(),
    Pe(),
    Te(),
    Ue(),
    ye(),
    qe(),
    Ze(),
    rt(),
    Re(),
    tt(),
    ct(),
    D(),
    ut(),
    ot(),
    dt(),
    (pt = c(P)),
    (z = _(v)),
    (mt = _(o.div)),
    (ht = c(N)),
    (gt = _(p)),
    (B = y(o.div)),
    (V = de(o.div)),
    (_t = c(k)),
    (vt = c(A)),
    (H = y(p)),
    (yt = c(R)),
    (bt = c(L)),
    (xt = c(M)),
    (St = c(j)),
    (Ct = c(I)),
    (wt = c(F)),
    (Tt = c(xe)),
    (Et = {
      FiLNtqP49: `(max-width: 809.98px)`,
      lD__lH42Y: `(min-width: 1440px)`,
      MOmSWdoMh: `(min-width: 810px) and (max-width: 1439.98px)`,
    }),
    (U = () => typeof document < `u`),
    (Dt = []),
    (Ot = `framer-Yu1iE`),
    (kt = {
      FiLNtqP49: `framer-v-sf8f8v`,
      lD__lH42Y: `framer-v-1opkfql`,
      MOmSWdoMh: `framer-v-1f7sxx9`,
    }),
    (At = (e, t, ee) => (e && t ? `position` : ee)),
    (W = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (G = { damping: 35, delay: 0, mass: 2, stiffness: 120, type: `spring` }),
    (jt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: G,
      x: 0,
      y: 0,
    }),
    (K = {
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
    (q = { damping: 35, delay: 0.1, mass: 2, stiffness: 120, type: `spring` }),
    (J = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: q,
      x: 0,
      y: 0,
    }),
    (Y = { damping: 35, delay: 0.2, mass: 2, stiffness: 120, type: `spring` }),
    (Mt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 0,
    }),
    (Nt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 35, delay: 0.3, mass: 2, stiffness: 120, type: `spring` },
      x: 0,
      y: 0,
    }),
    (X = {
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
    (Z = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Q = { Desktop: `lD__lH42Y`, Phone: `FiLNtqP49`, Tablet: `MOmSWdoMh` }),
    (Pt = ({ value: e }) =>
      h()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ft = ({ height: e, id: t, width: ee, ...n }) => ({
      ...n,
      variant: Q[n.variant] ?? n.variant ?? `lD__lH42Y`,
    })),
    ($ = s(
      te(function (e, r) {
        let te = ee(null),
          ie = r ?? te,
          se = ne(),
          { activeLocale: s, setLocale: c } = _e(),
          l = me(),
          { style: ue, className: de, layoutId: f, variant: h, ..._ } = Ft(e);
        pe(re(() => ft({}, s), [s]));
        let [y, C] = he(h, Et, !1),
          ve = le(Ot, Xe, Ke, be, Oe, we, Le),
          ye = t(m)?.isLayoutTemplate,
          w = At(ye, !!t(ae)?.transition?.layout);
        fe();
        let T = () => (U() ? y !== `FiLNtqP49` : !0),
          D = () => (U() ? ![`MOmSWdoMh`, `FiLNtqP49`].includes(y) : !0),
          O = () => !!(!U() || [`MOmSWdoMh`, `FiLNtqP49`].includes(y));
        return (
          ge({}),
          i(m.Provider, {
            value: {
              activeVariantId: y,
              humanReadableVariantMap: Q,
              primaryVariantId: `lD__lH42Y`,
              variantClassNames: kt,
            },
            children: a(oe, {
              id: f ?? se,
              children: [
                i(Pt, {
                  value: `html body { background: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)); }`,
                }),
                a(o.div, {
                  ..._,
                  className: le(ve, `framer-1opkfql`, de),
                  ref: ie,
                  style: { ...ue },
                  children: [
                    a(o.main, {
                      className: `framer-18tqtlm`,
                      "data-framer-name": `Main`,
                      layout: w,
                      children: [
                        i(`section`, {
                          className: `framer-1bkrvnq`,
                          "data-framer-name": `Hero Section`,
                          children: i(S, {
                            breakpoint: y,
                            overrides: {
                              FiLNtqP49: {
                                background: {
                                  alt: `Background`,
                                  fit: `fill`,
                                  intrinsicHeight: 4512,
                                  intrinsicWidth: 5632,
                                  loading: x((l?.y || 0) + 0 + 0 + 0 + 0 + 8),
                                  pixelHeight: 4512,
                                  pixelWidth: 5632,
                                  sizes: `max(${l?.width || `100vw`} - 16px, 1px)`,
                                  src: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp`,
                                  srcSet: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-883017.webp 512w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-9cb107.webp 1024w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8.webp 2048w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-144bac.webp 4096w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp 5632w`,
                                },
                              },
                            },
                            children: i(b, {
                              background: {
                                alt: `Background`,
                                fit: `fill`,
                                intrinsicHeight: 4512,
                                intrinsicWidth: 5632,
                                loading: x((l?.y || 0) + 0 + 0 + 0 + 0 + 16),
                                pixelHeight: 4512,
                                pixelWidth: 5632,
                                sizes: `max(${l?.width || `100vw`} - 32px, 1px)`,
                                src: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp`,
                                srcSet: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-883017.webp 512w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-9cb107.webp 1024w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8.webp 2048w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-144bac.webp 4096w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp 5632w`,
                              },
                              className: `framer-9c7gsh`,
                              "data-framer-name": `Bg Content`,
                              children: a(`div`, {
                                className: `framer-dbzytn`,
                                "data-framer-name": `Container`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1b27dk4`,
                                    "data-framer-name": `Section Title`,
                                    children: [
                                      i(S, {
                                        breakpoint: y,
                                        overrides: { FiLNtqP49: { y: void 0 } },
                                        children: i(g, {
                                          height: 28,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            16 +
                                            0 +
                                            0 +
                                            176 +
                                            0 +
                                            0 +
                                            0,
                                          children: i(p, {
                                            className: `framer-18um98u-container`,
                                            nodeId: `dQML_J3iy`,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(P, {
                                              btyoXJXaz: E,
                                              height: `100%`,
                                              id: `dQML_J3iy`,
                                              layoutId: `dQML_J3iy`,
                                              Selq1Epo8: `Scalora Marketing`,
                                              variant: W(`nJO_haG3O`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      a(`div`, {
                                        className: `framer-17nqesl`,
                                        "data-framer-name": `Content Wrapper`,
                                        children: [
                                          a(`div`, {
                                            className: `framer-170u3d9`,
                                            "data-framer-name": `Title & subtext`,
                                            children: [
                                              a(`div`, {
                                                className: `framer-1akv8p4`,
                                                "data-framer-name": `Title`,
                                                children: [
                                                  i(S, {
                                                    breakpoint: y,
                                                    overrides: {
                                                      FiLNtqP49: {
                                                        children: i(n, {
                                                          children: a(`h1`, {
                                                            className: `framer-styles-preset-qi1ayi`,
                                                            "data-styles-preset": `ZHicPb8Xd`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                            },
                                                            children: [
                                                              `Campaigns`,
                                                              i(`br`, {}),
                                                              `that drive `,
                                                            ],
                                                          }),
                                                        }),
                                                      },
                                                    },
                                                    children: i(z, {
                                                      __fromCanvasComponent: !0,
                                                      animate: jt,
                                                      children: i(n, {
                                                        children: i(`h1`, {
                                                          className: `framer-styles-preset-qi1ayi`,
                                                          "data-styles-preset": `ZHicPb8Xd`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                          },
                                                          children: `Campaigns that drive`,
                                                        }),
                                                      }),
                                                      className: `framer-qkcv09`,
                                                      "data-framer-appear-id": `qkcv09`,
                                                      fonts: [`Inter`],
                                                      initial: K,
                                                      optimized: !0,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  a(mt, {
                                                    animate: J,
                                                    className: `framer-934fi5`,
                                                    "data-framer-appear-id": `934fi5`,
                                                    "data-framer-name": `Text`,
                                                    initial: K,
                                                    optimized: !0,
                                                    children: [
                                                      i(v, {
                                                        __fromCanvasComponent: !0,
                                                        children: i(n, {
                                                          children: i(`h1`, {
                                                            className: `framer-styles-preset-qi1ayi`,
                                                            "data-styles-preset": `ZHicPb8Xd`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                            },
                                                            children: `predictable`,
                                                          }),
                                                        }),
                                                        className: `framer-49d83j`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      i(v, {
                                                        __fromCanvasComponent: !0,
                                                        children: i(n, {
                                                          children: i(`h1`, {
                                                            className: `framer-styles-preset-u4ctgd`,
                                                            "data-styles-preset": `SsXMH0HVD`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                            },
                                                            children: `growth`,
                                                          }),
                                                        }),
                                                        className: `framer-1kutm52`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              i(z, {
                                                __fromCanvasComponent: !0,
                                                animate: Mt,
                                                children: i(n, {
                                                  children: i(`p`, {
                                                    className: `framer-styles-preset-13ryzp6`,
                                                    "data-styles-preset": `Yw0GmpI8u`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                    },
                                                    children: `Scalora Marketing connects campaigns directly to revenue eliminating guesswork from your growth strategy.`,
                                                  }),
                                                }),
                                                className: `framer-1knliu1`,
                                                "data-framer-appear-id": `1knliu1`,
                                                fonts: [`Inter`],
                                                initial: K,
                                                optimized: !0,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          i(d, {
                                            links: [
                                              {
                                                href: { webPageId: `HYgHLGuNh` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `HYgHLGuNh` },
                                                implicitPathVariables: void 0,
                                              },
                                              {
                                                href: { webPageId: `HYgHLGuNh` },
                                                implicitPathVariables: void 0,
                                              },
                                            ],
                                            children: (e) =>
                                              i(S, {
                                                breakpoint: y,
                                                overrides: {
                                                  FiLNtqP49: {
                                                    width: `min(min(max(${l?.width || `100vw`} - 16px, 1px), 1280px) - 32px, 720px)`,
                                                    y: void 0,
                                                  },
                                                },
                                                children: i(g, {
                                                  height: 48,
                                                  y:
                                                    (l?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    16 +
                                                    0 +
                                                    0 +
                                                    176 +
                                                    0 +
                                                    0 +
                                                    40 +
                                                    0 +
                                                    354,
                                                  children: i(gt, {
                                                    animate: Nt,
                                                    className: `framer-1l105di-container`,
                                                    "data-framer-appear-id": `1l105di`,
                                                    initial: K,
                                                    nodeId: `oDUQQ5SwC`,
                                                    optimized: !0,
                                                    rendersWithMotion: !0,
                                                    scopeId: `HlaWX_f9j`,
                                                    children: i(S, {
                                                      breakpoint: y,
                                                      overrides: {
                                                        FiLNtqP49: {
                                                          R5LxmUA6p: e[2],
                                                          style: { width: `100%` },
                                                        },
                                                        MOmSWdoMh: { R5LxmUA6p: e[1] },
                                                      },
                                                      children: i(N, {
                                                        height: `100%`,
                                                        id: `oDUQQ5SwC`,
                                                        layoutId: `oDUQQ5SwC`,
                                                        R5LxmUA6p: e[0],
                                                        TPy5bxyzI: `Get started free`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i(B, {
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 0.8,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 107,
                                        },
                                      },
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onInView`,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1tmdief`,
                                    "data-border": !0,
                                    "data-framer-name": `Image  Wrapper`,
                                    children: i(S, {
                                      breakpoint: y,
                                      overrides: {
                                        FiLNtqP49: {
                                          background: {
                                            alt: `Expense dashboard UI with sidebar navigation and spending analytics cards.`,
                                            fit: `fill`,
                                            intrinsicHeight: 2887,
                                            intrinsicWidth: 4800,
                                            pixelHeight: 2887,
                                            pixelWidth: 4800,
                                            positionX: `left`,
                                            positionY: `top`,
                                            sizes: `max(min(min(max(${l?.width || `100vw`} - 16px, 1px), 1280px) - 32px, 1200px) - 4px, 1px)`,
                                            src: `../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-867e70.png`,
                                            srcSet: `../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e08231.png 512w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e0d86b.png 1024w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM.png 2048w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e3edff.png 4096w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-867e70.png 4800w`,
                                          },
                                        },
                                        MOmSWdoMh: {
                                          background: {
                                            alt: `Expense dashboard UI with sidebar navigation and spending analytics cards.`,
                                            fit: `fill`,
                                            intrinsicHeight: 2887,
                                            intrinsicWidth: 4800,
                                            loading: x(
                                              (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                0 +
                                                0 +
                                                653.022 +
                                                10
                                            ),
                                            pixelHeight: 2887,
                                            pixelWidth: 4800,
                                            positionX: `left`,
                                            positionY: `top`,
                                            sizes: `700px`,
                                            src: `../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-867e70.png`,
                                            srcSet: `../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e08231.png 512w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e0d86b.png 1024w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM.png 2048w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e3edff.png 4096w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-867e70.png 4800w`,
                                          },
                                        },
                                      },
                                      children: i(b, {
                                        as: `figcaption`,
                                        background: {
                                          alt: `Expense dashboard UI with sidebar navigation and spending analytics cards.`,
                                          fit: `fill`,
                                          intrinsicHeight: 2887,
                                          intrinsicWidth: 4800,
                                          loading: x(
                                            (l?.y || 0) + 0 + 0 + 0 + 0 + 16 + 0 + 0 + 677.9895 + 10
                                          ),
                                          pixelHeight: 2887,
                                          pixelWidth: 4800,
                                          positionX: `left`,
                                          positionY: `top`,
                                          sizes: `1148px`,
                                          src: `../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-867e70.png`,
                                          srcSet: `../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e08231.png 512w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e0d86b.png 1024w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM.png 2048w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-e3edff.png 4096w,../../assets/images/Mo0IAXWkIJVbKQWMrnYH3chtM-867e70.png 4800w`,
                                        },
                                        className: `framer-6nmtob`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        i(`section`, {
                          className: `framer-220qz`,
                          "data-framer-name": `Trusted Company`,
                          children: a(`div`, {
                            className: `framer-oq35hd`,
                            "data-framer-name": `Container`,
                            children: [
                              i(B, {
                                __framer__animate: { transition: G },
                                __framer__animateOnce: !0,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1c004n4`,
                                "data-framer-name": `Section Title`,
                                children: i(v, {
                                  __fromCanvasComponent: !0,
                                  children: i(n, {
                                    children: i(`p`, {
                                      className: `framer-styles-preset-13ryzp6`,
                                      "data-styles-preset": `Yw0GmpI8u`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                      },
                                      children: `We’re working with `,
                                    }),
                                  }),
                                  className: `framer-1tgsawj`,
                                  "data-framer-name": `We working with`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(`div`, {
                                className: `framer-1ytcsmo`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  i(`div`, {
                                    className: `framer-mjz15s`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1kfqu16`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-abkstj`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1cer4ur`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1e6xie1`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  i(`div`, {
                                    className: `framer-19vz5qr`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  i(`div`, {
                                    className: `framer-19793f7`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  i(`div`, {
                                    className: `framer-9vzkku`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  a(`div`, {
                                    className: `framer-oq6855`,
                                    "data-border": !0,
                                    "data-framer-name": `Left Content`,
                                    children: [
                                      a(`div`, {
                                        className: `framer-6odqol`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          i(v, {
                                            __fromCanvasComponent: !0,
                                            children: i(n, {
                                              children: i(`p`, {
                                                className: `framer-styles-preset-i5ktzk`,
                                                "data-styles-preset": `kumYuXBDg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `Trusted by`,
                                              }),
                                            }),
                                            className: `framer-gu52yk`,
                                            "data-framer-name": `Trusted by`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          i(v, {
                                            __fromCanvasComponent: !0,
                                            children: i(n, {
                                              children: i(`h4`, {
                                                className: `framer-styles-preset-1qcdpqr`,
                                                "data-styles-preset": `bz7TF8GsX`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `600+ Brands`,
                                              }),
                                            }),
                                            className: `framer-1qwza8h`,
                                            "data-framer-name": `600+ Brands`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-ql9bez`,
                                        "data-framer-name": `Star & text`,
                                        children: [
                                          i(ce, {
                                            className: `framer-10rcngv`,
                                            "data-framer-name": `Stars`,
                                            fill: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                            intrinsicHeight: 18,
                                            intrinsicWidth: 108,
                                            svg: `<svg width="108" height="18" viewBox="0 0 108 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.57219 1.98449C8.01918 0.598271 9.98044 0.59827 10.4274 1.98449L11.6706 5.83988L15.7057 5.83988C17.156 5.83988 17.762 7.69348 16.5918 8.5502L13.3175 10.9473L14.5658 14.8187C15.0121 16.2027 13.4255 17.3483 12.2522 16.4894L8.99981 14.1083L5.74746 16.4894C4.57414 17.3483 2.9875 16.2027 3.43377 14.8187L4.68211 10.9473L1.40782 8.5502C0.237597 7.69348 0.843583 5.83988 2.2939 5.83988H6.32901L7.57219 1.98449Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.0722 1.98449C30.5192 0.598271 32.4804 0.59827 32.9274 1.98449L34.1706 5.83988L38.2057 5.83988C39.656 5.83988 40.262 7.69348 39.0918 8.5502L35.8175 10.9473L37.0658 14.8187C37.5121 16.2027 35.9255 17.3483 34.7522 16.4894L31.4998 14.1083L28.2475 16.4894C27.0741 17.3483 25.4875 16.2027 25.9338 14.8187L27.1821 10.9473L23.9078 8.5502C22.7376 7.69348 23.3436 5.83988 24.7939 5.83988H28.829L30.0722 1.98449Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M52.5722 1.98449C53.0192 0.598271 54.9804 0.59827 55.4274 1.98449L56.6706 5.83988L60.7057 5.83988C62.156 5.83988 62.762 7.69348 61.5918 8.5502L58.3175 10.9473L59.5658 14.8187C60.0121 16.2027 58.4255 17.3483 57.2522 16.4894L53.9998 14.1083L50.7475 16.4894C49.5741 17.3483 47.9875 16.2027 48.4338 14.8187L49.6821 10.9473L46.4078 8.5502C45.2376 7.69348 45.8436 5.83988 47.2939 5.83988H51.329L52.5722 1.98449Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M75.0722 1.98449C75.5192 0.598271 77.4804 0.59827 77.9274 1.98449L79.1706 5.83988L83.2057 5.83988C84.656 5.83988 85.262 7.69348 84.0918 8.5502L80.8175 10.9473L82.0658 14.8187C82.5121 16.2027 80.9255 17.3483 79.7522 16.4894L76.4998 14.1083L73.2475 16.4894C72.0741 17.3483 70.4875 16.2027 70.9338 14.8187L72.1821 10.9473L68.9078 8.5502C67.7376 7.69348 68.3436 5.83988 69.7939 5.83988H73.829L75.0722 1.98449Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M97.5722 1.98449C98.0192 0.598271 99.9804 0.59827 100.427 1.98449L101.671 5.83988L105.706 5.83988C107.156 5.83988 107.762 7.69348 106.592 8.5502L103.318 10.9473L104.566 14.8187C105.012 16.2027 103.425 17.3483 102.252 16.4894L98.9998 14.1083L95.7475 16.4894C94.5741 17.3483 92.9875 16.2027 93.4338 14.8187L94.6821 10.9473L91.4078 8.5502C90.2376 7.69348 90.8436 5.83988 92.2939 5.83988H96.329L97.5722 1.98449Z" fill="white"/>
</svg>
`,
                                            withExternalLayout: !0,
                                          }),
                                          i(v, {
                                            __fromCanvasComponent: !0,
                                            children: i(n, {
                                              children: i(`p`, {
                                                className: `framer-styles-preset-i5ktzk`,
                                                "data-styles-preset": `kumYuXBDg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `4.8/5 Average user rating`,
                                              }),
                                            }),
                                            className: `framer-fiadrr`,
                                            "data-framer-name": `4.8/5 Average user rating`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `center`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  a(`div`, {
                                    className: `framer-14lolx6`,
                                    "data-border": !0,
                                    "data-framer-name": `Ticker Wrappr`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-dg87uu`,
                                        "data-framer-name": `Ticker 1`,
                                        children: i(S, {
                                          breakpoint: y,
                                          overrides: {
                                            FiLNtqP49: {
                                              tickerEffectDraggable: !0,
                                              tickerEffectVelocity: 30,
                                            },
                                          },
                                          children: a(V, {
                                            className: `framer-1k36rco`,
                                            tickerEffectAlign: `center`,
                                            tickerEffectDirectionModifier: `reverse`,
                                            tickerEffectDraggable: !1,
                                            tickerEffectEnabled: !0,
                                            tickerEffectGap: 23,
                                            tickerEffectHoverModifier: 100,
                                            tickerEffectOverflow: `clip`,
                                            tickerEffectPosition: `relative`,
                                            tickerEffectStackDirection: `row`,
                                            tickerEffectVelocity: 50,
                                            children: [
                                              i(u, {
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            8 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            0 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 595,
                                                        sizes: `149px`,
                                                        src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                        srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                      },
                                                      draggable: `false`,
                                                    },
                                                    MOmSWdoMh: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            927 +
                                                            80 +
                                                            0 +
                                                            170 +
                                                            0 +
                                                            384 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 595,
                                                        sizes: `149px`,
                                                        src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                        srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                      },
                                                    },
                                                  },
                                                  children: i(b, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: x(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1163 +
                                                          100 +
                                                          0 +
                                                          210 +
                                                          97.5 +
                                                          32 +
                                                          0 +
                                                          0 +
                                                          0
                                                      ),
                                                      pixelHeight: 128,
                                                      pixelWidth: 595,
                                                      sizes: `149px`,
                                                      src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                      srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                    },
                                                    className: `framer-1lomp7v`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                              i(u, {
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            8 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            0 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 577,
                                                        sizes: `144px`,
                                                        src: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png`,
                                                        srcSet: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI.png 512w,../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png 577w`,
                                                      },
                                                      draggable: `false`,
                                                    },
                                                    MOmSWdoMh: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            927 +
                                                            80 +
                                                            0 +
                                                            170 +
                                                            0 +
                                                            384 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 577,
                                                        sizes: `144px`,
                                                        src: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png`,
                                                        srcSet: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI.png 512w,../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png 577w`,
                                                      },
                                                    },
                                                  },
                                                  children: i(b, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 577,
                                                      loading: x(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1163 +
                                                          100 +
                                                          0 +
                                                          210 +
                                                          97.5 +
                                                          32 +
                                                          0 +
                                                          0 +
                                                          0
                                                      ),
                                                      pixelHeight: 128,
                                                      pixelWidth: 577,
                                                      sizes: `144px`,
                                                      src: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png`,
                                                      srcSet: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI.png 512w,../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png 577w`,
                                                    },
                                                    className: `framer-1nnacf8`,
                                                    "data-framer-name": `Wondrot`,
                                                  }),
                                                }),
                                              }),
                                              i(u, {
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            8 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            0 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 603,
                                                        sizes: `151px`,
                                                        src: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png`,
                                                        srcSet: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4.png 512w,../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png 603w`,
                                                      },
                                                      draggable: `false`,
                                                    },
                                                    MOmSWdoMh: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            927 +
                                                            80 +
                                                            0 +
                                                            170 +
                                                            0 +
                                                            384 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 603,
                                                        sizes: `151px`,
                                                        src: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png`,
                                                        srcSet: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4.png 512w,../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png 603w`,
                                                      },
                                                    },
                                                  },
                                                  children: i(b, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 603,
                                                      loading: x(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1163 +
                                                          100 +
                                                          0 +
                                                          210 +
                                                          97.5 +
                                                          32 +
                                                          0 +
                                                          0 +
                                                          0
                                                      ),
                                                      pixelHeight: 128,
                                                      pixelWidth: 603,
                                                      sizes: `151px`,
                                                      src: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png`,
                                                      srcSet: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4.png 512w,../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png 603w`,
                                                    },
                                                    className: `framer-p12zer`,
                                                    "data-framer-name": `Raonadle`,
                                                  }),
                                                }),
                                              }),
                                              i(u, {
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            8 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            0 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 595,
                                                        sizes: `149px`,
                                                        src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                        srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                      },
                                                      draggable: `false`,
                                                    },
                                                    MOmSWdoMh: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            927 +
                                                            80 +
                                                            0 +
                                                            170 +
                                                            0 +
                                                            384 +
                                                            32 +
                                                            0 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 595,
                                                        sizes: `149px`,
                                                        src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                        srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                      },
                                                    },
                                                  },
                                                  children: i(b, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: x(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1163 +
                                                          100 +
                                                          0 +
                                                          210 +
                                                          97.5 +
                                                          32 +
                                                          0 +
                                                          0 +
                                                          0
                                                      ),
                                                      pixelHeight: 128,
                                                      pixelWidth: 595,
                                                      sizes: `149px`,
                                                      src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                      srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                    },
                                                    className: `framer-609in6`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-pjfi29`,
                                        "data-framer-name": `Line`,
                                      }),
                                      i(`div`, {
                                        className: `framer-1x4rcrr`,
                                        "data-framer-name": `Ticker 2`,
                                        children: i(S, {
                                          breakpoint: y,
                                          overrides: {
                                            FiLNtqP49: {
                                              tickerEffectDraggable: !0,
                                              tickerEffectVelocity: 30,
                                            },
                                          },
                                          children: a(V, {
                                            className: `framer-kw783p`,
                                            tickerEffectAlign: `center`,
                                            tickerEffectDirectionModifier: `default`,
                                            tickerEffectDraggable: !1,
                                            tickerEffectEnabled: !0,
                                            tickerEffectGap: 23,
                                            tickerEffectHoverModifier: 100,
                                            tickerEffectOverflow: `clip`,
                                            tickerEffectPosition: `relative`,
                                            tickerEffectStackDirection: `row`,
                                            tickerEffectVelocity: 50,
                                            children: [
                                              i(u, {
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            8 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            59 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 577,
                                                        sizes: `144px`,
                                                        src: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png`,
                                                        srcSet: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI.png 512w,../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png 577w`,
                                                      },
                                                      draggable: `false`,
                                                    },
                                                    MOmSWdoMh: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            927 +
                                                            80 +
                                                            0 +
                                                            170 +
                                                            0 +
                                                            384 +
                                                            32 +
                                                            97 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 577,
                                                        sizes: `144px`,
                                                        src: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png`,
                                                        srcSet: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI.png 512w,../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png 577w`,
                                                      },
                                                    },
                                                  },
                                                  children: i(b, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 577,
                                                      loading: x(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1163 +
                                                          100 +
                                                          0 +
                                                          210 +
                                                          97.5 +
                                                          32 +
                                                          97 +
                                                          0 +
                                                          0
                                                      ),
                                                      pixelHeight: 128,
                                                      pixelWidth: 577,
                                                      sizes: `144px`,
                                                      src: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png`,
                                                      srcSet: `../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI.png 512w,../../assets/images/bKrk1bhrQnwX7xAOrJF4WHiRJlI-466536.png 577w`,
                                                    },
                                                    className: `framer-1df6b2n`,
                                                    "data-framer-name": `Wondrot`,
                                                  }),
                                                }),
                                              }),
                                              i(u, {
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            8 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            59 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 595,
                                                        sizes: `149px`,
                                                        src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                        srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                      },
                                                      draggable: `false`,
                                                    },
                                                    MOmSWdoMh: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            927 +
                                                            80 +
                                                            0 +
                                                            170 +
                                                            0 +
                                                            384 +
                                                            32 +
                                                            97 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 595,
                                                        sizes: `149px`,
                                                        src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                        srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                      },
                                                    },
                                                  },
                                                  children: i(b, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: x(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1163 +
                                                          100 +
                                                          0 +
                                                          210 +
                                                          97.5 +
                                                          32 +
                                                          97 +
                                                          0 +
                                                          0
                                                      ),
                                                      pixelHeight: 128,
                                                      pixelWidth: 595,
                                                      sizes: `149px`,
                                                      src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                      srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                    },
                                                    className: `framer-7pkzt6`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                              i(u, {
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            8 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            59 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 603,
                                                        sizes: `151px`,
                                                        src: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png`,
                                                        srcSet: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4.png 512w,../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png 603w`,
                                                      },
                                                      draggable: `false`,
                                                    },
                                                    MOmSWdoMh: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            927 +
                                                            80 +
                                                            0 +
                                                            170 +
                                                            0 +
                                                            384 +
                                                            32 +
                                                            97 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 603,
                                                        sizes: `151px`,
                                                        src: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png`,
                                                        srcSet: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4.png 512w,../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png 603w`,
                                                      },
                                                    },
                                                  },
                                                  children: i(b, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 603,
                                                      loading: x(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1163 +
                                                          100 +
                                                          0 +
                                                          210 +
                                                          97.5 +
                                                          32 +
                                                          97 +
                                                          0 +
                                                          0
                                                      ),
                                                      pixelHeight: 128,
                                                      pixelWidth: 603,
                                                      sizes: `151px`,
                                                      src: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png`,
                                                      srcSet: `../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4.png 512w,../../assets/images/vHttXPzrhDakB9uSAfZFXzL1B4-9fc472.png 603w`,
                                                    },
                                                    className: `framer-1a398r8`,
                                                    "data-framer-name": `Raonadle`,
                                                  }),
                                                }),
                                              }),
                                              i(u, {
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            8 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            59 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 595,
                                                        sizes: `149px`,
                                                        src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                        srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                      },
                                                      draggable: `false`,
                                                    },
                                                    MOmSWdoMh: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: x(
                                                          (l?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            927 +
                                                            80 +
                                                            0 +
                                                            170 +
                                                            0 +
                                                            384 +
                                                            32 +
                                                            97 +
                                                            0 +
                                                            0
                                                        ),
                                                        pixelHeight: 128,
                                                        pixelWidth: 595,
                                                        sizes: `149px`,
                                                        src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                        srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                      },
                                                    },
                                                  },
                                                  children: i(b, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: x(
                                                        (l?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1163 +
                                                          100 +
                                                          0 +
                                                          210 +
                                                          97.5 +
                                                          32 +
                                                          97 +
                                                          0 +
                                                          0
                                                      ),
                                                      pixelHeight: 128,
                                                      pixelWidth: 595,
                                                      sizes: `149px`,
                                                      src: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png`,
                                                      srcSet: `../../assets/images/dGiDesTPUi9vudRkJiFFeKq8.png 512w,../../assets/images/dGiDesTPUi9vudRkJiFFeKq8-3c1e32.png 595w`,
                                                    },
                                                    className: `framer-1njp42g`,
                                                    "data-framer-name": `Bonraow`,
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
                            ],
                          }),
                        }),
                        i(`section`, {
                          className: `framer-h0es8v`,
                          "data-framer-name": `Why chose us`,
                          children: a(`div`, {
                            className: `framer-1tf5k9t`,
                            "data-framer-name": `Container`,
                            children: [
                              a(B, {
                                __framer__animate: { transition: G },
                                __framer__animateOnce: !0,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-b4iumw`,
                                "data-framer-name": `Section Title`,
                                children: [
                                  a(`div`, {
                                    className: `framer-184vltf`,
                                    "data-framer-name": `Title & Tag`,
                                    children: [
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          MOmSWdoMh: {
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: i(g, {
                                          height: 28,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1957 +
                                            100 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: i(p, {
                                            className: `framer-1swupt4-container`,
                                            nodeId: `QrFE_VuVP`,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(P, {
                                              btyoXJXaz: E,
                                              height: `100%`,
                                              id: `QrFE_VuVP`,
                                              layoutId: `QrFE_VuVP`,
                                              Selq1Epo8: `Why chose us`,
                                              variant: W(`mXdNMwppf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(v, {
                                        __fromCanvasComponent: !0,
                                        children: i(n, {
                                          children: i(`h2`, {
                                            className: `framer-styles-preset-3yq5jl`,
                                            "data-styles-preset": `cPVM1_Pc1`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                            },
                                            children: `Numbers that reflect real growth`,
                                          }),
                                        }),
                                        className: `framer-eb1wej`,
                                        "data-framer-name": `Numbers that reflect real growth`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  i(d, {
                                    links: [
                                      {
                                        href: { webPageId: `HYgHLGuNh` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `HYgHLGuNh` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `HYgHLGuNh` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            y: (l?.y || 0) + 0 + 0 + 0 + 777 + 60 + 0 + 0 + 0 + 126,
                                          },
                                          MOmSWdoMh: {
                                            y: (l?.y || 0) + 0 + 0 + 0 + 1830 + 80 + 0 + 0 + 0 + 62,
                                          },
                                        },
                                        children: i(g, {
                                          height: 44,
                                          y: (l?.y || 0) + 0 + 0 + 0 + 1957 + 100 + 0 + 0 + 0 + 62,
                                          children: i(p, {
                                            className: `framer-172umen-container`,
                                            nodeId: `X6mgL4VxQ`,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(S, {
                                              breakpoint: y,
                                              overrides: {
                                                FiLNtqP49: { kDj5Ixhw1: e[2] },
                                                MOmSWdoMh: { kDj5Ixhw1: e[1] },
                                              },
                                              children: i(k, {
                                                height: `100%`,
                                                id: `X6mgL4VxQ`,
                                                kDj5Ixhw1: e[0],
                                                kJdISHL06: `Book a demo`,
                                                layoutId: `X6mgL4VxQ`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-d9yhyp`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  a(`div`, {
                                    className: `framer-6hrial`,
                                    "data-border": !0,
                                    children: [
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              218 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: i(g, {
                                          height: 241,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1957 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            0,
                                          children: i(H, {
                                            __framer__animate: { transition: G },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-16f9paj-container`,
                                            nodeId: `RVlTL38Ri`,
                                            rendersWithMotion: !0,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(S, {
                                              breakpoint: y,
                                              overrides: {
                                                FiLNtqP49: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: W(`Esw7BwEul`),
                                                },
                                                MOmSWdoMh: { variant: W(`Esw7BwEul`) },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `RVlTL38Ri`,
                                                layoutId: `RVlTL38Ri`,
                                                NkyB81tga: `Email marketing`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `Automate targeted campaigns and follow-ups based on user behavior.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: it,
                                                variant: W(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              218 +
                                              0 +
                                              0 +
                                              0 +
                                              241,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: i(g, {
                                          height: 241,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1957 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            0,
                                          children: i(H, {
                                            __framer__animate: { transition: q },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1qjhm1k-container`,
                                            nodeId: `d_Lg17A2U`,
                                            rendersWithMotion: !0,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(S, {
                                              breakpoint: y,
                                              overrides: {
                                                FiLNtqP49: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: W(`Esw7BwEul`),
                                                },
                                                MOmSWdoMh: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: W(`Esw7BwEul`),
                                                },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `d_Lg17A2U`,
                                                layoutId: `d_Lg17A2U`,
                                                NkyB81tga: `Landing page builder`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `Build landing pages with built-in CRM sync and conversion tracking.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: et,
                                                variant: W(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              218 +
                                              0 +
                                              0 +
                                              0 +
                                              482,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              241,
                                          },
                                        },
                                        children: i(g, {
                                          height: 241,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1957 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            0,
                                          children: i(H, {
                                            __framer__animate: { transition: Y },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1n873uh-container`,
                                            nodeId: `TPiGwdJDk`,
                                            rendersWithMotion: !0,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(S, {
                                              breakpoint: y,
                                              overrides: {
                                                FiLNtqP49: { variant: W(`Esw7BwEul`) },
                                                MOmSWdoMh: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 1,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: W(`Esw7BwEul`),
                                                },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `TPiGwdJDk`,
                                                layoutId: `TPiGwdJDk`,
                                                NkyB81tga: `Campaign analytics`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 0,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `Segment contacts dynamically using behavior or custom attributes.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: Qe,
                                                variant: W(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              218 +
                                              0 +
                                              0 +
                                              0 +
                                              723,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              241,
                                          },
                                        },
                                        children: i(g, {
                                          height: 241,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1957 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            241,
                                          children: i(H, {
                                            __framer__animate: { transition: G },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1xl9q1y-container`,
                                            nodeId: `R2s6pr9sa`,
                                            rendersWithMotion: !0,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(S, {
                                              breakpoint: y,
                                              overrides: {
                                                FiLNtqP49: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: W(`Esw7BwEul`),
                                                },
                                                MOmSWdoMh: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: W(`Esw7BwEul`),
                                                },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `R2s6pr9sa`,
                                                layoutId: `R2s6pr9sa`,
                                                NkyB81tga: `Marketing automation`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 0,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `See exactly which campaigns generate pipeline and revenue.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: at,
                                                variant: W(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              218 +
                                              0 +
                                              0 +
                                              0 +
                                              964,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              482,
                                          },
                                        },
                                        children: i(g, {
                                          height: 241,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1957 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            241,
                                          children: i(H, {
                                            __framer__animate: { transition: q },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1s0egzn-container`,
                                            nodeId: `yxh58VDBG`,
                                            rendersWithMotion: !0,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(S, {
                                              breakpoint: y,
                                              overrides: {
                                                FiLNtqP49: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: W(`Esw7BwEul`),
                                                },
                                                MOmSWdoMh: { variant: W(`Esw7BwEul`) },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `yxh58VDBG`,
                                                layoutId: `yxh58VDBG`,
                                                NkyB81tga: `Real-time performance`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 0,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `Track campaign metrics, leads, and ROI in a single dashboard.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: lt,
                                                variant: W(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              218 +
                                              0 +
                                              0 +
                                              0 +
                                              1205,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              482,
                                          },
                                        },
                                        children: i(g, {
                                          height: 241,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 50px)`,
                                          y:
                                            (l?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1957 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            241,
                                          children: i(H, {
                                            __framer__animate: { transition: Y },
                                            __framer__animateOnce: !0,
                                            __framer__enter: X,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1k29ifl-container`,
                                            nodeId: `A2YNU7DQ4`,
                                            rendersWithMotion: !0,
                                            scopeId: `HlaWX_f9j`,
                                            children: i(S, {
                                              breakpoint: y,
                                              overrides: {
                                                FiLNtqP49: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: W(`Esw7BwEul`),
                                                },
                                                MOmSWdoMh: { variant: W(`Esw7BwEul`) },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `A2YNU7DQ4`,
                                                layoutId: `A2YNU7DQ4`,
                                                NkyB81tga: `A/B testing & optimization`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 0,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 0,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `Test subject lines and page variants to improve conversion rates.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: st,
                                                variant: W(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  i(`div`, {
                                    className: `framer-198esje`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1x2tq6f`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  i(`div`, {
                                    className: `framer-gdkrnt`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-172nkkt`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1anb47k`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1tm0xrg`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  i(`div`, {
                                    className: `framer-13964ig`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-10bb6zg`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(`section`, {
                          className: `framer-1j5laeh`,
                          "data-framer-name": `Core features`,
                          children: a(`div`, {
                            className: `framer-1wlx0cy`,
                            "data-framer-name": `Container`,
                            children: [
                              a(B, {
                                __framer__animate: { transition: G },
                                __framer__animateOnce: !0,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1a63269`,
                                "data-framer-name": `Section Title`,
                                children: [
                                  i(S, {
                                    breakpoint: y,
                                    overrides: {
                                      FiLNtqP49: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 2561 + 60 + 0 + 0 + 0 + 0,
                                      },
                                      MOmSWdoMh: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 2899 + 80 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: i(g, {
                                      height: 28,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 2825 + 100 + 0 + 0 + 0 + 0,
                                      children: i(p, {
                                        className: `framer-1k9pftt-container`,
                                        nodeId: `O6KhtApCI`,
                                        scopeId: `HlaWX_f9j`,
                                        children: i(P, {
                                          btyoXJXaz: E,
                                          height: `100%`,
                                          id: `O6KhtApCI`,
                                          layoutId: `O6KhtApCI`,
                                          Selq1Epo8: `Core features`,
                                          variant: W(`mXdNMwppf`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(v, {
                                    __fromCanvasComponent: !0,
                                    children: i(n, {
                                      children: i(`h2`, {
                                        className: `framer-styles-preset-3yq5jl`,
                                        "data-styles-preset": `cPVM1_Pc1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        },
                                        children: `Stop guessing. Start measuring real growth.`,
                                      }),
                                    }),
                                    className: `framer-1ih6eld`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1d5gqyr`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  a(`div`, {
                                    className: `framer-1ag4x7x`,
                                    "data-border": !0,
                                    children: [
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `min(max(${l?.width || `100vw`} - 32px, 1px), 1280px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2561 +
                                              60 +
                                              0 +
                                              150 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2899 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: i(g, {
                                          height: 505,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 1px)`,
                                          y: (l?.y || 0) + 0 + 0 + 0 + 2825 + 100 + 0 + 186 + 0 + 0,
                                          children: i(S, {
                                            breakpoint: y,
                                            overrides: {
                                              FiLNtqP49: {
                                                __framer__styleAppearEffectEnabled: void 0,
                                              },
                                            },
                                            children: i(H, {
                                              __framer__animate: { transition: G },
                                              __framer__animateOnce: !0,
                                              __framer__enter: X,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-13hdkhh-container`,
                                              nodeId: `rjAXGx6Aw`,
                                              rendersWithMotion: !0,
                                              scopeId: `HlaWX_f9j`,
                                              children: i(S, {
                                                breakpoint: y,
                                                overrides: {
                                                  FiLNtqP49: {
                                                    CLrlhYiqi: {
                                                      borderBottomWidth: 1,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 0,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                    variant: W(`d8Cd0P_dr`),
                                                  },
                                                  MOmSWdoMh: {
                                                    CLrlhYiqi: {
                                                      borderBottomWidth: 1,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 1,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                    variant: W(`d8Cd0P_dr`),
                                                  },
                                                },
                                                children: i(R, {
                                                  CLrlhYiqi: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 1,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  height: `100%`,
                                                  id: `rjAXGx6Aw`,
                                                  layoutId: `rjAXGx6Aw`,
                                                  Ordr4ylGa: `Email & drip campaigns`,
                                                  style: { width: `100%` },
                                                  variant: W(`Y_6edaaa9`),
                                                  vWcxBpall: `Design and automate sequences that nurture leads intelligently.`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `min(max(${l?.width || `100vw`} - 32px, 1px), 1280px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2561 +
                                              60 +
                                              0 +
                                              150 +
                                              0 +
                                              0 +
                                              0 +
                                              505,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2899 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: i(g, {
                                          height: 505,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 1px)`,
                                          y: (l?.y || 0) + 0 + 0 + 0 + 2825 + 100 + 0 + 186 + 0 + 0,
                                          children: i(S, {
                                            breakpoint: y,
                                            overrides: {
                                              FiLNtqP49: {
                                                __framer__styleAppearEffectEnabled: void 0,
                                              },
                                            },
                                            children: i(H, {
                                              __framer__animate: { transition: q },
                                              __framer__animateOnce: !0,
                                              __framer__enter: X,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-15idok2-container`,
                                              nodeId: `UUR4rWgnU`,
                                              rendersWithMotion: !0,
                                              scopeId: `HlaWX_f9j`,
                                              children: i(S, {
                                                breakpoint: y,
                                                overrides: {
                                                  FiLNtqP49: {
                                                    CLrlhYiqi: {
                                                      borderBottomWidth: 1,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 0,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                    variant: W(`d8Cd0P_dr`),
                                                  },
                                                  MOmSWdoMh: {
                                                    CLrlhYiqi: {
                                                      borderBottomWidth: 1,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 1,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                    variant: W(`d8Cd0P_dr`),
                                                  },
                                                },
                                                children: i(R, {
                                                  CLrlhYiqi: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 1,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  height: `100%`,
                                                  id: `UUR4rWgnU`,
                                                  layoutId: `UUR4rWgnU`,
                                                  ODjT7kzLC: Z(
                                                    {
                                                      pixelHeight: 1440,
                                                      pixelWidth: 2120,
                                                      positionX: `67.7%`,
                                                      positionY: `49%`,
                                                      src: `../../assets/images/nr2ycVsyQ9s3mqjqYG6GOFr804-2b6378.png`,
                                                      srcSet: `../../assets/images/nr2ycVsyQ9s3mqjqYG6GOFr804.png 512w,../../assets/images/nr2ycVsyQ9s3mqjqYG6GOFr804-3294ab.png 1024w,../../assets/images/nr2ycVsyQ9s3mqjqYG6GOFr804-b058a2.png 2048w,../../assets/images/nr2ycVsyQ9s3mqjqYG6GOFr804-2b6378.png 2120w`,
                                                    },
                                                    `Three coworkers talking around a laptop in a café.`
                                                  ),
                                                  Ordr4ylGa: `Landing pages that convert`,
                                                  style: { width: `100%` },
                                                  variant: W(`Y_6edaaa9`),
                                                  vWcxBpall: `Build high-converting pages  without developers.`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(S, {
                                        breakpoint: y,
                                        overrides: {
                                          FiLNtqP49: {
                                            width: `min(max(${l?.width || `100vw`} - 32px, 1px), 1280px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2561 +
                                              60 +
                                              0 +
                                              150 +
                                              0 +
                                              0 +
                                              0 +
                                              1010,
                                          },
                                          MOmSWdoMh: {
                                            width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (l?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2899 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              505,
                                          },
                                        },
                                        children: i(g, {
                                          height: 505,
                                          width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 3, 1px)`,
                                          y: (l?.y || 0) + 0 + 0 + 0 + 2825 + 100 + 0 + 186 + 0 + 0,
                                          children: i(S, {
                                            breakpoint: y,
                                            overrides: {
                                              FiLNtqP49: {
                                                __framer__styleAppearEffectEnabled: void 0,
                                              },
                                            },
                                            children: i(H, {
                                              __framer__animate: { transition: Y },
                                              __framer__animateOnce: !0,
                                              __framer__enter: X,
                                              __framer__styleAppearEffectEnabled: !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className: `framer-41028m-container`,
                                              nodeId: `l2BPMuC8d`,
                                              rendersWithMotion: !0,
                                              scopeId: `HlaWX_f9j`,
                                              children: i(S, {
                                                breakpoint: y,
                                                overrides: {
                                                  FiLNtqP49: { variant: W(`d8Cd0P_dr`) },
                                                  MOmSWdoMh: {
                                                    CLrlhYiqi: {
                                                      borderBottomWidth: 0,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 1,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                    variant: W(`d8Cd0P_dr`),
                                                  },
                                                },
                                                children: i(R, {
                                                  CLrlhYiqi: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  height: `100%`,
                                                  id: `l2BPMuC8d`,
                                                  layoutId: `l2BPMuC8d`,
                                                  ODjT7kzLC: Z(
                                                    {
                                                      pixelHeight: 1440,
                                                      pixelWidth: 2348,
                                                      positionX: `62.9%`,
                                                      positionY: `37.1%`,
                                                      src: `../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g-931363.png`,
                                                      srcSet: `../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g.png 512w,../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g-cd20b4.png 1024w,../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g-ec4300.png 2048w,../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g-931363.png 2348w`,
                                                    },
                                                    `Two men smiling and talking in a modern office.`
                                                  ),
                                                  Ordr4ylGa: `Revenue attribution`,
                                                  style: { width: `100%` },
                                                  variant: W(`Y_6edaaa9`),
                                                  vWcxBpall: `See exactly which campaigns drive  pipeline and revenue.`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  i(`div`, {
                                    className: `framer-z2kgar`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1xcqrcr`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  i(`div`, {
                                    className: `framer-egf9k3`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1l8xnw7`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  i(`div`, {
                                    className: `framer-o23vjb`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1cbd95x`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  i(`div`, {
                                    className: `framer-7vyg9x`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-cvzokz`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(`section`, {
                          className: `framer-bdrgzb`,
                          "data-framer-name": `How it works`,
                          children: a(`div`, {
                            className: `framer-majgol`,
                            "data-framer-name": `Container`,
                            children: [
                              a(B, {
                                __framer__animate: { transition: G },
                                __framer__animateOnce: !0,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-dftng1`,
                                "data-framer-name": `Section Title`,
                                children: [
                                  i(S, {
                                    breakpoint: y,
                                    overrides: {
                                      FiLNtqP49: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 4346 + 60 + 0 + 0 + 0 + 0,
                                      },
                                      MOmSWdoMh: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 4255 + 80 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: i(g, {
                                      height: 28,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 3716 + 100 + 0 + 0 + 0 + 0,
                                      children: i(p, {
                                        className: `framer-gn08gw-container`,
                                        nodeId: `qMahO8zEo`,
                                        scopeId: `HlaWX_f9j`,
                                        children: i(P, {
                                          btyoXJXaz: E,
                                          height: `100%`,
                                          id: `qMahO8zEo`,
                                          layoutId: `qMahO8zEo`,
                                          Selq1Epo8: `How it works`,
                                          variant: W(`mXdNMwppf`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(v, {
                                    __fromCanvasComponent: !0,
                                    children: i(n, {
                                      children: i(`h2`, {
                                        className: `framer-styles-preset-3yq5jl`,
                                        "data-styles-preset": `cPVM1_Pc1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        },
                                        children: `How scalora marketing works`,
                                      }),
                                    }),
                                    className: `framer-3lkm4y`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-1hcg286`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  a(`div`, {
                                    className: `framer-v9n1dh`,
                                    "data-border": !0,
                                    "data-framer-name": `Feature Grid`,
                                    children: [
                                      a(`div`, {
                                        className: `framer-ugndv4`,
                                        "data-framer-name": `Row 1`,
                                        children: [
                                          i(S, {
                                            breakpoint: y,
                                            overrides: {
                                              FiLNtqP49: {
                                                width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4346 +
                                                  60 +
                                                  0 +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  8 +
                                                  0 +
                                                  0,
                                              },
                                              MOmSWdoMh: {
                                                width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4255 +
                                                  80 +
                                                  0 +
                                                  186 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: i(g, {
                                              height: 454,
                                              width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 4, 1px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                3716 +
                                                100 +
                                                0 +
                                                186 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                              children: i(p, {
                                                className: `framer-u8pyej-container`,
                                                nodeId: `POIQDFwLj`,
                                                scopeId: `HlaWX_f9j`,
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      yzFj167lx: {
                                                        borderBottomWidth: 1,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 1,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                    },
                                                    MOmSWdoMh: {
                                                      yzFj167lx: {
                                                        borderBottomWidth: 0,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                    },
                                                  },
                                                  children: i(L, {
                                                    cC0wwxTAk: `01`,
                                                    height: `100%`,
                                                    id: `POIQDFwLj`,
                                                    layoutId: `POIQDFwLj`,
                                                    mKkijz_yZ: `8px 5px 8px 8px`,
                                                    PWko4QQ6a: `Import contacts, sync leads from forms, or connect your CRM instantly.`,
                                                    style: { width: `100%` },
                                                    uVAnmzQWM: `Capture & Segment`,
                                                    variant: W(`ghC2ZHJPf`),
                                                    vSpPEMUJJ: Z(
                                                      {
                                                        pixelHeight: 1e3,
                                                        pixelWidth: 1496,
                                                        src: `../../assets/images/w2r6pKcnljZlkroOrr1jFi5qaVY.png`,
                                                        srcSet: `../../assets/images/w2r6pKcnljZlkroOrr1jFi5qaVY-f9c1f0.png 512w,../../assets/images/w2r6pKcnljZlkroOrr1jFi5qaVY-bbdda2.png 1024w,../../assets/images/w2r6pKcnljZlkroOrr1jFi5qaVY.png 1496w`,
                                                      },
                                                      `Two men discussing something on a tablet`
                                                    ),
                                                    width: `100%`,
                                                    yzFj167lx: {
                                                      borderBottomWidth: 0,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 1,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          T() &&
                                            i(`div`, { className: `framer-zlnwdt hidden-sf8f8v` }),
                                          D() &&
                                            i(`div`, {
                                              className: `framer-147h3uz hidden-1f7sxx9 hidden-sf8f8v`,
                                            }),
                                          D() &&
                                            i(`div`, {
                                              className: `framer-bwwehv hidden-1f7sxx9 hidden-sf8f8v`,
                                            }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-1obbr3g`,
                                        "data-framer-name": `Row 1`,
                                        children: [
                                          T() &&
                                            i(`div`, { className: `framer-xggebd hidden-sf8f8v` }),
                                          i(S, {
                                            breakpoint: y,
                                            overrides: {
                                              FiLNtqP49: {
                                                width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4346 +
                                                  60 +
                                                  0 +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  8 +
                                                  454 +
                                                  0,
                                              },
                                              MOmSWdoMh: {
                                                width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4255 +
                                                  80 +
                                                  0 +
                                                  186 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  454 +
                                                  0,
                                              },
                                            },
                                            children: i(g, {
                                              height: 454,
                                              width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 4, 1px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                3716 +
                                                100 +
                                                0 +
                                                186 +
                                                0 +
                                                0 +
                                                454 +
                                                0,
                                              children: i(p, {
                                                className: `framer-90qvzr-container`,
                                                nodeId: `GT3y2Gh0E`,
                                                scopeId: `HlaWX_f9j`,
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      yzFj167lx: {
                                                        borderBottomWidth: 1,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                    },
                                                    MOmSWdoMh: {
                                                      yzFj167lx: {
                                                        borderBottomWidth: 0,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                    },
                                                  },
                                                  children: i(L, {
                                                    cC0wwxTAk: `02`,
                                                    height: `100%`,
                                                    id: `GT3y2Gh0E`,
                                                    layoutId: `GT3y2Gh0E`,
                                                    mKkijz_yZ: `8px 5px 8px 8px`,
                                                    PWko4QQ6a: `Create email sequences and workflows using the visual builder.`,
                                                    style: { width: `100%` },
                                                    uVAnmzQWM: `Launch campaigns`,
                                                    variant: W(`ghC2ZHJPf`),
                                                    vSpPEMUJJ: Z(
                                                      {
                                                        pixelHeight: 2731,
                                                        pixelWidth: 4096,
                                                        src: `../../assets/images/hO2UUziVx00fiyCjitMsRqVgfk-e23f00.jpg`,
                                                        srcSet: `../../assets/images/hO2UUziVx00fiyCjitMsRqVgfk-3dd143.jpg 512w,../../assets/images/hO2UUziVx00fiyCjitMsRqVgfk-49a7ab.jpg 1024w,../../assets/images/hO2UUziVx00fiyCjitMsRqVgfk.jpg 2048w,../../assets/images/hO2UUziVx00fiyCjitMsRqVgfk-e23f00.jpg 4096w`,
                                                      },
                                                      `Two young men working on a laptop in a café.      Like  Dislike`
                                                    ),
                                                    width: `100%`,
                                                    yzFj167lx: {
                                                      borderBottomWidth: 0,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 1,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          D() &&
                                            i(`div`, {
                                              className: `framer-e5a2jh hidden-1f7sxx9 hidden-sf8f8v`,
                                            }),
                                          D() &&
                                            i(`div`, {
                                              className: `framer-1b4vebp hidden-1f7sxx9 hidden-sf8f8v`,
                                            }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-fyawit`,
                                        "data-framer-name": `Row 1`,
                                        children: [
                                          T() &&
                                            i(`div`, { className: `framer-1t623p7 hidden-sf8f8v` }),
                                          D() &&
                                            i(`div`, {
                                              className: `framer-1hhqf3f hidden-1f7sxx9 hidden-sf8f8v`,
                                            }),
                                          i(S, {
                                            breakpoint: y,
                                            overrides: {
                                              FiLNtqP49: {
                                                width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4346 +
                                                  60 +
                                                  0 +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  8 +
                                                  908 +
                                                  0,
                                              },
                                              MOmSWdoMh: {
                                                width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4255 +
                                                  80 +
                                                  0 +
                                                  186 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  908 +
                                                  0,
                                              },
                                            },
                                            children: i(g, {
                                              height: 454,
                                              width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 4, 1px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                3716 +
                                                100 +
                                                0 +
                                                186 +
                                                0 +
                                                0 +
                                                908 +
                                                0,
                                              children: i(p, {
                                                className: `framer-1z5hpi-container`,
                                                nodeId: `r0yoYvV06`,
                                                scopeId: `HlaWX_f9j`,
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      yzFj167lx: {
                                                        borderBottomWidth: 1,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                    },
                                                    MOmSWdoMh: {
                                                      yzFj167lx: {
                                                        borderBottomWidth: 0,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                    },
                                                  },
                                                  children: i(L, {
                                                    cC0wwxTAk: `03`,
                                                    height: `100%`,
                                                    id: `r0yoYvV06`,
                                                    layoutId: `r0yoYvV06`,
                                                    mKkijz_yZ: `8px 5px 8px 8px`,
                                                    PWko4QQ6a: `Personalize communication automatically based on user actions.`,
                                                    style: { width: `100%` },
                                                    uVAnmzQWM: `Automate engagement`,
                                                    variant: W(`ghC2ZHJPf`),
                                                    vSpPEMUJJ: Z(
                                                      {
                                                        pixelHeight: 2664,
                                                        pixelWidth: 4096,
                                                        src: `../../assets/images/4cubgnDPbmaYvkGevvzLuco-843fef.jpg`,
                                                        srcSet: `../../assets/images/4cubgnDPbmaYvkGevvzLuco-7ab07f.jpg 512w,../../assets/images/4cubgnDPbmaYvkGevvzLuco-f9d362.jpg 1024w,../../assets/images/4cubgnDPbmaYvkGevvzLuco.jpg 2048w,../../assets/images/4cubgnDPbmaYvkGevvzLuco-843fef.jpg 4096w`,
                                                      },
                                                      `Two men discussing something while looking at a laptop.`
                                                    ),
                                                    width: `100%`,
                                                    yzFj167lx: {
                                                      borderBottomWidth: 0,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 1,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                          D() &&
                                            i(`div`, {
                                              className: `framer-14py9jt hidden-1f7sxx9 hidden-sf8f8v`,
                                            }),
                                        ],
                                      }),
                                      a(`div`, {
                                        className: `framer-1078j3e`,
                                        "data-framer-name": `Row 1`,
                                        children: [
                                          T() &&
                                            i(`div`, { className: `framer-ta5i6a hidden-sf8f8v` }),
                                          D() &&
                                            i(`div`, {
                                              className: `framer-7ekcjz hidden-1f7sxx9 hidden-sf8f8v`,
                                            }),
                                          D() &&
                                            i(`div`, {
                                              className: `framer-4cd9ar hidden-1f7sxx9 hidden-sf8f8v`,
                                            }),
                                          i(S, {
                                            breakpoint: y,
                                            overrides: {
                                              FiLNtqP49: {
                                                width: `max(min(max(${l?.width || `100vw`} - 32px, 1px), 1280px), 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4346 +
                                                  60 +
                                                  0 +
                                                  150 +
                                                  0 +
                                                  0 +
                                                  8 +
                                                  1362 +
                                                  0,
                                              },
                                              MOmSWdoMh: {
                                                width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1280px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4255 +
                                                  80 +
                                                  0 +
                                                  186 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1362 +
                                                  0,
                                              },
                                            },
                                            children: i(g, {
                                              height: 454,
                                              width: `max(max(min(max(${l?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 4, 1px)`,
                                              y:
                                                (l?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                3716 +
                                                100 +
                                                0 +
                                                186 +
                                                0 +
                                                0 +
                                                1362 +
                                                0,
                                              children: i(p, {
                                                className: `framer-kbcteg-container`,
                                                nodeId: `yZ7F1WIhy`,
                                                scopeId: `HlaWX_f9j`,
                                                children: i(S, {
                                                  breakpoint: y,
                                                  overrides: {
                                                    FiLNtqP49: {
                                                      yzFj167lx: {
                                                        borderBottomWidth: 0,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                    },
                                                    MOmSWdoMh: {
                                                      yzFj167lx: {
                                                        borderBottomWidth: 0,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                    },
                                                  },
                                                  children: i(L, {
                                                    cC0wwxTAk: `04`,
                                                    height: `100%`,
                                                    id: `yZ7F1WIhy`,
                                                    layoutId: `yZ7F1WIhy`,
                                                    mKkijz_yZ: `8px 5px 8px 8px`,
                                                    PWko4QQ6a: `Monitor performance in real time from open rates to pipeline contribution.`,
                                                    style: { width: `100%` },
                                                    uVAnmzQWM: `Track revenue & optimize`,
                                                    variant: W(`ghC2ZHJPf`),
                                                    vSpPEMUJJ: Z(
                                                      {
                                                        pixelHeight: 2734,
                                                        pixelWidth: 4096,
                                                        src: `../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY-5d1be3.jpg`,
                                                        srcSet: `../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY-aa9540.jpg 512w,../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY-f2b825.jpg 1024w,../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY.jpg 2048w,../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY-5d1be3.jpg 4096w`,
                                                      },
                                                      `Three men having a discussion at a table with documents and coffee.      Like  Dislike`
                                                    ),
                                                    width: `100%`,
                                                    yzFj167lx: {
                                                      borderBottomWidth: 0,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 1,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i(`div`, {
                                    className: `framer-yjirry`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-9qis7w`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1njihmt`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-kj99h2`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1yovg3`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1trtw9y`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  i(`div`, {
                                    className: `framer-16u7g14`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1xo76p8`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(`section`, {
                          className: `framer-191jk5i`,
                          "data-framer-name": `Testimonial`,
                          children: a(`div`, {
                            className: `framer-13i8aaj`,
                            "data-framer-name": `Container`,
                            children: [
                              a(B, {
                                __framer__animate: { transition: G },
                                __framer__animateOnce: !0,
                                __framer__enter: X,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-qh2mkw`,
                                "data-framer-name": `Section title`,
                                children: [
                                  i(S, {
                                    breakpoint: y,
                                    overrides: {
                                      FiLNtqP49: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 6440 + 60 + 0 + 0 + 0 + 0 + 0,
                                      },
                                      MOmSWdoMh: {
                                        y: (l?.y || 0) + 0 + 0 + 0 + 6417 + 80 + 0 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: i(g, {
                                      height: 28,
                                      y: (l?.y || 0) + 0 + 0 + 0 + 5918 + 100 + 0 + 0 + 0 + 0 + 0,
                                      children: i(p, {
                                        className: `framer-1f8pfpg-container`,
                                        nodeId: `WASxn908N`,
                                        scopeId: `HlaWX_f9j`,
                                        children: i(P, {
                                          btyoXJXaz: ze,
                                          height: `100%`,
                                          id: `WASxn908N`,
                                          layoutId: `WASxn908N`,
                                          Selq1Epo8: `Testimonial`,
                                          variant: W(`mXdNMwppf`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(v, {
                                    __fromCanvasComponent: !0,
                                    children: i(n, {
                                      children: i(`h2`, {
                                        className: `framer-styles-preset-3yq5jl`,
                                        "data-styles-preset": `cPVM1_Pc1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        },
                                        children: `Trusted by teams that think in systems`,
                                      }),
                                    }),
                                    className: `framer-dwyfkz`,
                                    "data-framer-name": `Trusted by teams that think in systems`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              a(`div`, {
                                className: `framer-jzlh0p`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  D() &&
                                    i(g, {
                                      children: i(p, {
                                        className: `framer-k5975n-container hidden-1f7sxx9 hidden-sf8f8v`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `cwdOvgR4D`,
                                        scopeId: `HlaWX_f9j`,
                                        children: i(j, {
                                          alignment: `center`,
                                          arrowOptions: {
                                            arrowFill: `rgba(0, 0, 0, 0.2)`,
                                            arrowGap: 20,
                                            arrowPadding: 20,
                                            arrowPaddingBottom: -77,
                                            arrowPaddingLeft: 0,
                                            arrowPaddingRight: 0,
                                            arrowPaddingTop: 0,
                                            arrowPosition: `bottom-mid`,
                                            arrowRadius: 0,
                                            arrowShouldFadeIn: !1,
                                            arrowShouldSpace: !1,
                                            arrowSize: 40,
                                            leftArrow: `../../assets/images/w8N36KCx0QOJ8PSCry8CMXYE.svg`,
                                            rightArrow: `../../assets/images/Psp69amx7TxLGXiODkM7rsP2tM.svg`,
                                            showMouseControls: !0,
                                          },
                                          autoPlayControl: !1,
                                          borderRadius: 0,
                                          direction: `left`,
                                          dragControl: !1,
                                          effectsOptions: {
                                            effectsHover: !0,
                                            effectsOpacity: 1,
                                            effectsPerspective: 1200,
                                            effectsRotate: 0,
                                            effectsScale: 1,
                                            playOffscreen: !1,
                                          },
                                          fadeOptions: {
                                            fadeAlpha: 0,
                                            fadeContent: !1,
                                            fadeInset: 0,
                                            fadeWidth: 25,
                                            overflow: !1,
                                          },
                                          gap: 10,
                                          height: `100%`,
                                          id: `cwdOvgR4D`,
                                          intervalControl: 1.5,
                                          itemAmount: 1,
                                          layoutId: `cwdOvgR4D`,
                                          padding: 0,
                                          paddingBottom: 0,
                                          paddingLeft: 0,
                                          paddingPerSide: !1,
                                          paddingRight: 0,
                                          paddingTop: 0,
                                          progressOptions: {
                                            dotsActiveOpacity: 1,
                                            dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                            dotsBlur: 0,
                                            dotsFill: `rgb(255, 255, 255)`,
                                            dotsGap: 10,
                                            dotsInset: 10,
                                            dotSize: 10,
                                            dotsOpacity: 0.5,
                                            dotsPadding: 10,
                                            dotsRadius: 50,
                                            showProgressDots: !1,
                                          },
                                          slots: [
                                            i(g, {
                                              height: 546,
                                              width: `1280px`,
                                              children: i(p, {
                                                className: `framer-1udqbgp-container`,
                                                "data-framer-name": `Testimonial Card 1`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 1`,
                                                nodeId: `XQG__xZ0B`,
                                                rendersWithMotion: !0,
                                                scopeId: `HlaWX_f9j`,
                                                children: i(M, {
                                                  FJTqBi2KV: `AutoPerf`,
                                                  height: `100%`,
                                                  id: `XQG__xZ0B`,
                                                  iEDAZpSS3: `Auto Performance`,
                                                  iwx62rpGT: `Founder, BrightLayer Digital`,
                                                  J5IwwRpSA: `“Our automated system streamlines workflows, removes repetitive tasks, and speeds up campaign deployment while keeping precise performance control.”`,
                                                  k3FDQtFQv: `52%`,
                                                  layoutId: `XQG__xZ0B`,
                                                  name: `Testimonial Card 1`,
                                                  nJPHXQfwW: `Increase in campaign conversions`,
                                                  rsB2i43WZ: Z(
                                                    {
                                                      pixelHeight: 48,
                                                      pixelWidth: 49,
                                                      src: `../../assets/images/d974ZurRRfwOHMlUV85GAzAcOU.svg`,
                                                    },
                                                    ``
                                                  ),
                                                  style: { width: `100%` },
                                                  tXLgOvUs3: `Daniel Reed`,
                                                  U1WzZWWko: `3.4X`,
                                                  variant: W(`ra6cRNcXv`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster campaign deployment`,
                                                }),
                                              }),
                                            }),
                                            i(g, {
                                              height: 546,
                                              width: `1280px`,
                                              children: i(p, {
                                                className: `framer-886c83-container`,
                                                "data-framer-name": `Testimonial Card 2`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 2`,
                                                nodeId: `cUwzqkfVx`,
                                                rendersWithMotion: !0,
                                                scopeId: `HlaWX_f9j`,
                                                children: i(M, {
                                                  FJTqBi2KV: `CampEngine`,
                                                  G47lkWz6h: Z(
                                                    {
                                                      pixelHeight: 2432,
                                                      pixelWidth: 2232,
                                                      src: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png`,
                                                      srcSet: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o.png 939w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-4cd58b.png 1879w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png 2232w`,
                                                    },
                                                    `Man Profile Image`
                                                  ),
                                                  height: `100%`,
                                                  id: `cUwzqkfVx`,
                                                  iEDAZpSS3: `Campaign Engine`,
                                                  iwx62rpGT: `Head of Growth, Nexora Media`,
                                                  J5IwwRpSA: `The optimization engine monitors performance metrics, reallocates budget automatically, and refines audience segments to ensure scalable campaign growth.`,
                                                  k3FDQtFQv: `48%`,
                                                  layoutId: `cUwzqkfVx`,
                                                  name: `Testimonial Card 2`,
                                                  nJPHXQfwW: `Increase in team productivity`,
                                                  rsB2i43WZ: Z(
                                                    {
                                                      pixelHeight: 48,
                                                      pixelWidth: 48,
                                                      src: `../../assets/images/BuHSBXD0r8c34jXjcfN3a4BaA.svg`,
                                                    },
                                                    `Company logo`
                                                  ),
                                                  style: { width: `100%` },
                                                  tXLgOvUs3: `Sophie Turner`,
                                                  U1WzZWWko: `3.1X`,
                                                  variant: W(`kZ3XQqCvF`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster reporting workflow`,
                                                }),
                                              }),
                                            }),
                                            i(g, {
                                              height: 546,
                                              width: `1280px`,
                                              children: i(p, {
                                                className: `framer-uoihf2-container`,
                                                "data-framer-name": `Testimonial Card 3`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 3`,
                                                nodeId: `E72DxIBLl`,
                                                rendersWithMotion: !0,
                                                scopeId: `HlaWX_f9j`,
                                                children: i(M, {
                                                  FJTqBi2KV: `SmartAuto`,
                                                  G47lkWz6h: Z(
                                                    {
                                                      pixelHeight: 1708,
                                                      pixelWidth: 1696,
                                                      src: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png`,
                                                      srcSet: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE.png 1016w,../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png 1696w`,
                                                    },
                                                    `Man Profile Image`
                                                  ),
                                                  height: `100%`,
                                                  id: `E72DxIBLl`,
                                                  iEDAZpSS3: `Smart Automation`,
                                                  iwx62rpGT: `Marketing Director, Elevate Labs`,
                                                  J5IwwRpSA: `This intelligent system analyzes real-time data, adjusts targeting strategies instantly, and maximizes return on investment without constant manual intervention from teams.`,
                                                  k3FDQtFQv: `61%`,
                                                  layoutId: `E72DxIBLl`,
                                                  name: `Testimonial Card 3`,
                                                  nJPHXQfwW: `Improvement in campaign ROI`,
                                                  rsB2i43WZ: Z(
                                                    {
                                                      pixelHeight: 48,
                                                      pixelWidth: 48,
                                                      src: `../../assets/images/fT2k6SCAEhcbpUqHlL6ZX4jRoQ.svg`,
                                                    },
                                                    `Company logo`
                                                  ),
                                                  style: { width: `100%` },
                                                  tXLgOvUs3: `Hasan Ali`,
                                                  U1WzZWWko: `2.8X`,
                                                  variant: W(`SyRKRfloD`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster decision-making`,
                                                }),
                                              }),
                                            }),
                                            i(g, {
                                              height: 546,
                                              width: `1280px`,
                                              children: i(p, {
                                                className: `framer-1calxti-container`,
                                                "data-framer-name": `Testimonial Card 4`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 4`,
                                                nodeId: `hrRczT6t0`,
                                                rendersWithMotion: !0,
                                                scopeId: `HlaWX_f9j`,
                                                children: i(M, {
                                                  FJTqBi2KV: `Agencies`,
                                                  G47lkWz6h: Z(
                                                    {
                                                      pixelHeight: 1708,
                                                      pixelWidth: 1696,
                                                      src: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png`,
                                                      srcSet: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg.png 1016w,../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png 1696w`,
                                                    },
                                                    `Man Profile Imagez`
                                                  ),
                                                  height: `100%`,
                                                  id: `hrRczT6t0`,
                                                  iEDAZpSS3: `AI Campaign Automation`,
                                                  iwx62rpGT: `Founder, AdNova Digital`,
                                                  J5IwwRpSA: `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
                                                  k3FDQtFQv: `55%`,
                                                  layoutId: `hrRczT6t0`,
                                                  name: `Testimonial Card 4`,
                                                  nJPHXQfwW: `Reduction in ad spend waste`,
                                                  style: { width: `100%` },
                                                  tXLgOvUs3: `Ethan Walker`,
                                                  U1WzZWWko: `4X`,
                                                  variant: W(`UiFZL4kB0`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster A/B testing cycles`,
                                                }),
                                              }),
                                            }),
                                          ],
                                          startFrom: 0,
                                          style: { height: `100%`, width: `100%` },
                                          transitionControl: {
                                            damping: 40,
                                            delay: 0,
                                            mass: 1,
                                            stiffness: 200,
                                            type: `spring`,
                                          },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  O() &&
                                    i(g, {
                                      children: i(p, {
                                        className: `framer-tta06t-container hidden-1opkfql`,
                                        "data-framer-name": `Slideshow for Small Device`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        name: `Slideshow for Small Device`,
                                        nodeId: `AamPulRyo`,
                                        scopeId: `HlaWX_f9j`,
                                        children: i(S, {
                                          breakpoint: y,
                                          overrides: { FiLNtqP49: { dragControl: !0 } },
                                          children: i(j, {
                                            alignment: `center`,
                                            arrowOptions: {
                                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                                              arrowGap: 20,
                                              arrowPadding: 20,
                                              arrowPaddingBottom: -77,
                                              arrowPaddingLeft: 0,
                                              arrowPaddingRight: 0,
                                              arrowPaddingTop: 0,
                                              arrowPosition: `bottom-mid`,
                                              arrowRadius: 0,
                                              arrowShouldFadeIn: !1,
                                              arrowShouldSpace: !1,
                                              arrowSize: 40,
                                              leftArrow: `../../assets/images/w8N36KCx0QOJ8PSCry8CMXYE.svg`,
                                              rightArrow: `../../assets/images/Psp69amx7TxLGXiODkM7rsP2tM.svg`,
                                              showMouseControls: !0,
                                            },
                                            autoPlayControl: !1,
                                            borderRadius: 0,
                                            direction: `left`,
                                            dragControl: !1,
                                            effectsOptions: {
                                              effectsHover: !0,
                                              effectsOpacity: 1,
                                              effectsPerspective: 1200,
                                              effectsRotate: 0,
                                              effectsScale: 1,
                                              playOffscreen: !1,
                                            },
                                            fadeOptions: {
                                              fadeAlpha: 0,
                                              fadeContent: !1,
                                              fadeInset: 0,
                                              fadeWidth: 25,
                                              overflow: !1,
                                            },
                                            gap: 10,
                                            height: `100%`,
                                            id: `AamPulRyo`,
                                            intervalControl: 1.5,
                                            itemAmount: 1,
                                            layoutId: `AamPulRyo`,
                                            name: `Slideshow for Small Device`,
                                            padding: 0,
                                            paddingBottom: 0,
                                            paddingLeft: 0,
                                            paddingPerSide: !1,
                                            paddingRight: 0,
                                            paddingTop: 0,
                                            progressOptions: {
                                              dotsActiveOpacity: 1,
                                              dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                              dotsBlur: 0,
                                              dotsFill: `rgb(255, 255, 255)`,
                                              dotsGap: 10,
                                              dotsInset: 10,
                                              dotSize: 10,
                                              dotsOpacity: 0.5,
                                              dotsPadding: 10,
                                              dotsRadius: 50,
                                              showProgressDots: !1,
                                            },
                                            slots: [
                                              i(g, {
                                                height: 546,
                                                width: `810px`,
                                                children: i(p, {
                                                  className: `framer-1482592-container`,
                                                  "data-framer-name": `Testimonial Card P1`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P1`,
                                                  nodeId: `qGXoloQRL`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `HlaWX_f9j`,
                                                  children: i(M, {
                                                    FJTqBi2KV: `AutoPerf`,
                                                    height: `100%`,
                                                    id: `qGXoloQRL`,
                                                    iEDAZpSS3: `Auto Performance`,
                                                    iwx62rpGT: `Founder, BrightLayer Digital`,
                                                    J5IwwRpSA: `“Our automated system streamlines workflows, removes repetitive tasks, and speeds up campaign deployment while keeping precise performance control.”`,
                                                    k3FDQtFQv: `52%`,
                                                    layoutId: `qGXoloQRL`,
                                                    name: `Testimonial Card P1`,
                                                    nJPHXQfwW: `Increase in campaign conversions`,
                                                    rsB2i43WZ: Z(
                                                      {
                                                        pixelHeight: 48,
                                                        pixelWidth: 49,
                                                        src: `../../assets/images/d974ZurRRfwOHMlUV85GAzAcOU.svg`,
                                                      },
                                                      `Company logo`
                                                    ),
                                                    style: { width: `100%` },
                                                    tXLgOvUs3: `Daniel Reed`,
                                                    U1WzZWWko: `3.4X`,
                                                    variant: W(`kai7Cuvgi`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster campaign deployment`,
                                                  }),
                                                }),
                                              }),
                                              i(g, {
                                                height: 546,
                                                width: `810px`,
                                                children: i(p, {
                                                  className: `framer-1xpl7ud-container`,
                                                  "data-framer-name": `Testimonial Card P2`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P2`,
                                                  nodeId: `PxpaKFV2s`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `HlaWX_f9j`,
                                                  children: i(M, {
                                                    FJTqBi2KV: `CampEngine`,
                                                    G47lkWz6h: Z(
                                                      {
                                                        pixelHeight: 2432,
                                                        pixelWidth: 2232,
                                                        src: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png`,
                                                        srcSet: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o.png 939w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-4cd58b.png 1879w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png 2232w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `PxpaKFV2s`,
                                                    iEDAZpSS3: `Campaign Engine`,
                                                    iwx62rpGT: `Head of Growth, Nexora Media`,
                                                    J5IwwRpSA: `The optimization engine monitors performance metrics, reallocates budget automatically, and refines audience segments to ensure scalable campaign growth.`,
                                                    k3FDQtFQv: `48%`,
                                                    layoutId: `PxpaKFV2s`,
                                                    name: `Testimonial Card P2`,
                                                    nJPHXQfwW: `Increase in team productivity`,
                                                    rsB2i43WZ: Z(
                                                      {
                                                        pixelHeight: 48,
                                                        pixelWidth: 48,
                                                        src: `../../assets/images/BuHSBXD0r8c34jXjcfN3a4BaA.svg`,
                                                      },
                                                      `Company logo`
                                                    ),
                                                    style: { width: `100%` },
                                                    tXLgOvUs3: `Sophie Turner`,
                                                    U1WzZWWko: `3.1X`,
                                                    variant: W(`GiDS5c_9T`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster reporting workflow`,
                                                  }),
                                                }),
                                              }),
                                              i(g, {
                                                height: 546,
                                                width: `810px`,
                                                children: i(p, {
                                                  className: `framer-v7fkx8-container`,
                                                  "data-framer-name": `Testimonial Card P3`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P3`,
                                                  nodeId: `DIt7p7yhK`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `HlaWX_f9j`,
                                                  children: i(M, {
                                                    FJTqBi2KV: `SmartAuto`,
                                                    G47lkWz6h: Z(
                                                      {
                                                        pixelHeight: 1708,
                                                        pixelWidth: 1696,
                                                        src: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png`,
                                                        srcSet: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE.png 1016w,../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png 1696w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `DIt7p7yhK`,
                                                    iEDAZpSS3: `Smart Automation`,
                                                    iwx62rpGT: `Marketing Director, Elevate Labs`,
                                                    J5IwwRpSA: `This intelligent system analyzes real-time data, adjusts targeting strategies instantly, and maximizes return on investment without constant manual intervention from teams.`,
                                                    k3FDQtFQv: `61%`,
                                                    layoutId: `DIt7p7yhK`,
                                                    name: `Testimonial Card P3`,
                                                    nJPHXQfwW: `Improvement in campaign ROI`,
                                                    rsB2i43WZ: Z(
                                                      {
                                                        pixelHeight: 48,
                                                        pixelWidth: 48,
                                                        src: `../../assets/images/fT2k6SCAEhcbpUqHlL6ZX4jRoQ.svg`,
                                                      },
                                                      `Company logo`
                                                    ),
                                                    style: { width: `100%` },
                                                    tXLgOvUs3: `Hasan Ali`,
                                                    U1WzZWWko: `2.8X`,
                                                    variant: W(`DT0oeOjRz`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster decision-making`,
                                                  }),
                                                }),
                                              }),
                                              i(g, {
                                                height: 546,
                                                width: `810px`,
                                                children: i(p, {
                                                  className: `framer-1qtentl-container`,
                                                  "data-framer-name": `Testimonial Card P4`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P4`,
                                                  nodeId: `OBZyzNiX1`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `HlaWX_f9j`,
                                                  children: i(M, {
                                                    FJTqBi2KV: `Agencies`,
                                                    G47lkWz6h: Z(
                                                      {
                                                        pixelHeight: 1708,
                                                        pixelWidth: 1696,
                                                        src: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png`,
                                                        srcSet: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg.png 1016w,../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png 1696w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `OBZyzNiX1`,
                                                    iEDAZpSS3: `AI Campaign Automation`,
                                                    iwx62rpGT: `Founder, AdNova Digital`,
                                                    J5IwwRpSA: `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
                                                    k3FDQtFQv: `55%`,
                                                    layoutId: `OBZyzNiX1`,
                                                    name: `Testimonial Card P4`,
                                                    nJPHXQfwW: `Reduction in ad spend waste`,
                                                    style: { width: `100%` },
                                                    tXLgOvUs3: `Ethan Walker`,
                                                    U1WzZWWko: `4X`,
                                                    variant: W(`zww_hjqbb`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster A/B testing cycles`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                            startFrom: 0,
                                            style: { height: `100%`, width: `100%` },
                                            transitionControl: {
                                              damping: 40,
                                              delay: 0,
                                              mass: 1,
                                              stiffness: 200,
                                              type: `spring`,
                                            },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  i(`div`, {
                                    className: `framer-o2bm0y`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1dvhi58`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  i(`div`, {
                                    className: `framer-gpbk8x`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-mubygu`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1n83a9n`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1vb0s2l`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  i(`div`, {
                                    className: `framer-nc7hrh`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-jv09oc`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(S, {
                          breakpoint: y,
                          overrides: {
                            FiLNtqP49: { y: (l?.y || 0) + 0 + 0 + 0 + 7514 },
                            MOmSWdoMh: { y: (l?.y || 0) + 0 + 0 + 0 + 7503 },
                          },
                          children: i(g, {
                            height: 802,
                            width: l?.width || `100vw`,
                            y: (l?.y || 0) + 0 + 0 + 0 + 6867,
                            children: i(p, {
                              className: `framer-626lqh-container`,
                              nodeId: `BO1Wh7LYn`,
                              scopeId: `HlaWX_f9j`,
                              children: i(S, {
                                breakpoint: y,
                                overrides: {
                                  FiLNtqP49: { variant: W(`xF5lKzz8e`) },
                                  MOmSWdoMh: { variant: W(`HDUioys2A`) },
                                },
                                children: i(I, {
                                  height: `100%`,
                                  id: `BO1Wh7LYn`,
                                  layoutId: `BO1Wh7LYn`,
                                  style: { width: `100%` },
                                  variant: W(`QXixqdn2a`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        i(S, {
                          breakpoint: y,
                          overrides: {
                            FiLNtqP49: { y: (l?.y || 0) + 0 + 0 + 0 + 8316 },
                            MOmSWdoMh: { y: (l?.y || 0) + 0 + 0 + 0 + 8305 },
                          },
                          children: i(g, {
                            height: 848,
                            width: l?.width || `100vw`,
                            y: (l?.y || 0) + 0 + 0 + 0 + 7669,
                            children: i(p, {
                              className: `framer-1ij5164-container`,
                              nodeId: `H3fDiSn6o`,
                              scopeId: `HlaWX_f9j`,
                              children: i(S, {
                                breakpoint: y,
                                overrides: {
                                  FiLNtqP49: { variant: W(`eD1hZ1m9l`) },
                                  MOmSWdoMh: { variant: W(`eZeHfWXpY`) },
                                },
                                children: i(F, {
                                  height: `100%`,
                                  id: `H3fDiSn6o`,
                                  layoutId: `H3fDiSn6o`,
                                  style: { width: `100%` },
                                  variant: W(`Nn0_sUYi2`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    i(g, {
                      children: i(p, {
                        className: `framer-6kj0ih-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: w,
                        nodeId: `ycVKZGGq5`,
                        scopeId: `HlaWX_f9j`,
                        children: i(xe, {
                          height: `100%`,
                          id: `ycVKZGGq5`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `ycVKZGGq5`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Yu1iE.framer-ta96ic, .framer-Yu1iE .framer-ta96ic { display: block; }`,
        `.framer-Yu1iE.framer-1opkfql { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-Yu1iE .framer-18tqtlm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1bkrvnq { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 0px 16px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-9c7gsh { align-content: center; align-items: center; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1147px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Yu1iE .framer-dbzytn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 176px 0px 602px 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1b27dk4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 720px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-18um98u-container, .framer-Yu1iE .framer-1swupt4-container, .framer-Yu1iE .framer-172umen-container, .framer-Yu1iE .framer-1k9pftt-container, .framer-Yu1iE .framer-gn08gw-container, .framer-Yu1iE .framer-1f8pfpg-container, .framer-Yu1iE .framer-6kj0ih-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Yu1iE .framer-17nqesl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-170u3d9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1akv8p4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-qkcv09 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-Yu1iE .framer-934fi5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Yu1iE .framer-49d83j, .framer-Yu1iE .framer-1kutm52 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Yu1iE .framer-1knliu1 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 550px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Yu1iE .framer-1l105di-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Yu1iE .framer-1tmdief { --border-bottom-width: 10px; --border-color: var(--token-a07d1ed9-425c-4a31-a256-9e3eb7b18cbd, rgba(225, 129, 65, 0.08)); --border-left-width: 10px; --border-right-width: 10px; --border-style: solid; --border-top-width: 10px; align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 688px; justify-content: center; left: calc(51.491477272727295% - min(1200px, 1168px) / 2); max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 10px 10px 0px 10px; position: absolute; top: calc(83.76963350785343% - 688px / 2); width: 1168px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-Yu1iE .framer-6nmtob { border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-Yu1iE .framer-220qz, .framer-Yu1iE .framer-h0es8v { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-oq35hd, .framer-Yu1iE .framer-1tf5k9t, .framer-Yu1iE .framer-1wlx0cy { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-1c004n4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1tgsawj, .framer-Yu1iE .framer-fiadrr { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Yu1iE .framer-1ytcsmo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-mjz15s { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 97%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-Yu1iE .framer-1kfqu16 { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-Yu1iE .framer-abkstj { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 71.62162162162163%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 99.54954954954955%); flex: none; height: 180%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 180% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-1cer4ur { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 84%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 180%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.00000000000002% - 180% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-1e6xie1, .framer-Yu1iE .framer-9qis7w { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-19vz5qr, .framer-Yu1iE .framer-kj99h2 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-19793f7, .framer-Yu1iE .framer-1yovg3 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-9vzkku, .framer-Yu1iE .framer-1trtw9y { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-oq6855 { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 48px 120px 28px 40px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-6odqol { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-gu52yk, .framer-Yu1iE .framer-1qwza8h, .framer-Yu1iE .framer-eb1wej { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Yu1iE .framer-ql9bez { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-10rcngv { flex: none; height: 18px; position: relative; width: 108px; }`,
        `.framer-Yu1iE .framer-14lolx6 { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 28px 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-dg87uu, .framer-Yu1iE .framer-1x4rcrr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 72px 0px 42px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1k36rco { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 18.01801801801802%, rgba(0, 0, 0, 0.82432) 82.43243243243244%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 18.01801801801802%, rgba(0, 0, 0, 0.82432) 82.43243243243244%, rgba(0, 0, 0, 0) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-1lomp7v, .framer-Yu1iE .framer-609in6 { aspect-ratio: 4.6484375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); overflow: visible; position: relative; width: 149px; }`,
        `.framer-Yu1iE .framer-1nnacf8, .framer-Yu1iE .framer-1df6b2n { aspect-ratio: 4.5078125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 31px); overflow: visible; position: relative; width: 144px; }`,
        `.framer-Yu1iE .framer-p12zer { aspect-ratio: 4.7109375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); overflow: visible; position: relative; width: 151px; }`,
        `.framer-Yu1iE .framer-pjfi29 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-kw783p { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 13.963963963963963%, rgba(0, 0, 0, 0.87387) 87.38738738738738%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 13.963963963963963%, rgba(0, 0, 0, 0.87387) 87.38738738738738%, rgba(0, 0, 0, 0) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-7pkzt6, .framer-Yu1iE .framer-1njp42g { aspect-ratio: 4.6484375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 149px; }`,
        `.framer-Yu1iE .framer-1a398r8 { aspect-ratio: 4.7109375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 151px; }`,
        `.framer-Yu1iE .framer-b4iumw { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-184vltf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-d9yhyp, .framer-Yu1iE .framer-1d5gqyr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-6hrial { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; display: grid; flex: 1 0 0px; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-16f9paj-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1qjhm1k-container, .framer-Yu1iE .framer-1n873uh-container, .framer-Yu1iE .framer-1xl9q1y-container, .framer-Yu1iE .framer-1s0egzn-container, .framer-Yu1iE .framer-1k29ifl-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-198esje, .framer-Yu1iE .framer-yjirry, .framer-Yu1iE .framer-o2bm0y { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-Yu1iE .framer-1x2tq6f { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -4px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-gdkrnt, .framer-Yu1iE .framer-1njihmt, .framer-Yu1iE .framer-gpbk8x { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-Yu1iE .framer-172nkkt, .framer-Yu1iE .framer-1l8xnw7, .framer-Yu1iE .framer-mubygu { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -4px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-1anb47k, .framer-Yu1iE .framer-o23vjb { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -4px; flex: none; height: 9px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-1tm0xrg, .framer-Yu1iE .framer-1cbd95x { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -4px; flex: none; height: 9px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-13964ig { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 130%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-10bb6zg { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 10%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 92.7927927927928%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 130%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-1j5laeh { align-content: center; align-items: center; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1a63269, .framer-Yu1iE .framer-dftng1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1ih6eld { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1ag4x7x { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-13hdkhh-container, .framer-Yu1iE .framer-15idok2-container, .framer-Yu1iE .framer-41028m-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-z2kgar { background: linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-Yu1iE .framer-1xcqrcr { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-egf9k3 { background: linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-Yu1iE .framer-7vyg9x { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 130%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-cvzokz { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 11.711711711711711%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 94.14414414414415%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 130%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-bdrgzb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-majgol { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-3lkm4y { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 700px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1hcg286 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Yu1iE .framer-v9n1dh { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-ugndv4, .framer-Yu1iE .framer-1obbr3g, .framer-Yu1iE .framer-fyawit, .framer-Yu1iE .framer-1078j3e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 150px; width: 100%; z-index: 1; }`,
        `.framer-Yu1iE .framer-u8pyej-container, .framer-Yu1iE .framer-90qvzr-container, .framer-Yu1iE .framer-1z5hpi-container, .framer-Yu1iE .framer-kbcteg-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-zlnwdt, .framer-Yu1iE .framer-147h3uz, .framer-Yu1iE .framer-xggebd, .framer-Yu1iE .framer-e5a2jh, .framer-Yu1iE .framer-1t623p7, .framer-Yu1iE .framer-1hhqf3f, .framer-Yu1iE .framer-ta5i6a, .framer-Yu1iE .framer-7ekcjz { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-bwwehv, .framer-Yu1iE .framer-1b4vebp, .framer-Yu1iE .framer-14py9jt, .framer-Yu1iE .framer-4cd9ar { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Yu1iE .framer-16u7g14 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 5%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 95%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 110%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 110.00000000000001% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-1xo76p8 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 6%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 95%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 110%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 110.00000000000001% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-191jk5i { align-content: center; align-items: center; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 80px 120px 80px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-13i8aaj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-qh2mkw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 540px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-dwyfkz { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-jzlh0p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-k5975n-container { flex: none; height: 543px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1udqbgp-container, .framer-Yu1iE .framer-886c83-container, .framer-Yu1iE .framer-uoihf2-container, .framer-Yu1iE .framer-1calxti-container { height: auto; position: relative; width: 1280px; }`,
        `.framer-Yu1iE .framer-tta06t-container { flex: none; height: 837px; position: relative; width: 100%; }`,
        `.framer-Yu1iE .framer-1482592-container, .framer-Yu1iE .framer-1xpl7ud-container, .framer-Yu1iE .framer-v7fkx8-container, .framer-Yu1iE .framer-1qtentl-container { height: auto; position: relative; width: 810px; }`,
        `.framer-Yu1iE .framer-1dvhi58 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; left: -5px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-1n83a9n { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 9px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-1vb0s2l { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 9px; left: -5px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-Yu1iE .framer-nc7hrh { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 7.000000000000001%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 93%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.89561586638833% - 119.93355481727575% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-jv09oc { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 7.000000000000001%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 93%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 119.93355481727575% / 2); width: 1px; z-index: 1; }`,
        `.framer-Yu1iE .framer-626lqh-container, .framer-Yu1iE .framer-1ij5164-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Je,
        ...We,
        ...T,
        ...Ee,
        ...Se,
        ...Fe,
        `.framer-Yu1iE[data-border="true"]::after, .framer-Yu1iE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-Yu1iE.framer-1opkfql { width: 810px; } .framer-Yu1iE .framer-9c7gsh { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; height: 911px; } .framer-Yu1iE .framer-dbzytn { padding: 176px 0px 366px 0px; } .framer-Yu1iE .framer-1tmdief { height: 370px; left: calc(50.00000000000002% - min(1200px, 720px) / 2); top: calc(85.16483516483518% - 370px / 2); width: 720px; } .framer-Yu1iE .framer-6nmtob, .framer-Yu1iE .framer-1z5hpi-container { order: 0; } .framer-Yu1iE .framer-220qz, .framer-Yu1iE .framer-h0es8v, .framer-Yu1iE .framer-1j5laeh, .framer-Yu1iE .framer-bdrgzb { padding: 80px 40px 80px 40px; } .framer-Yu1iE .framer-oq35hd { gap: 40px; } .framer-Yu1iE .framer-1ytcsmo, .framer-Yu1iE .framer-d9yhyp, .framer-Yu1iE .framer-1d5gqyr, .framer-Yu1iE .framer-1hcg286 { flex-direction: column; } .framer-Yu1iE .framer-abkstj { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 10%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 52%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 92%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 99.54954954954955%); height: 120%; top: calc(50.00000000000002% - 120% / 2); } .framer-Yu1iE .framer-1cer4ur { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 6%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 93%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); height: 120%; top: calc(50.00000000000002% - 120% / 2); } .framer-Yu1iE .framer-oq6855 { --border-right-width: 0px; align-content: center; align-items: center; flex: none; max-width: 1440px; width: 100%; } .framer-Yu1iE .framer-14lolx6 { --border-right-width: 0px; --border-top-width: 1px; flex: none; width: 100%; } .framer-Yu1iE .framer-1lomp7v, .framer-Yu1iE .framer-1nnacf8, .framer-Yu1iE .framer-p12zer, .framer-Yu1iE .framer-609in6, .framer-Yu1iE .framer-1df6b2n { height: var(--framer-aspect-ratio-supported, 32px); } .framer-Yu1iE .framer-184vltf { max-width: 400px; } .framer-Yu1iE .framer-6hrial { flex: none; grid-template-columns: repeat(2, minmax(50px, 1fr)); width: 100%; } .framer-Yu1iE .framer-10bb6zg, .framer-Yu1iE .framer-cvzokz, .framer-Yu1iE .framer-1xo76p8 { height: 120%; top: calc(50.10438413361171% - 120% / 2); } .framer-Yu1iE .framer-1ag4x7x { align-content: unset; align-items: unset; display: grid; flex: none; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); width: 100%; } .framer-Yu1iE .framer-13hdkhh-container, .framer-Yu1iE .framer-15idok2-container, .framer-Yu1iE .framer-41028m-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-Yu1iE .framer-v9n1dh { flex: none; width: 100%; } .framer-Yu1iE .framer-ugndv4, .framer-Yu1iE .framer-1obbr3g, .framer-Yu1iE .framer-fyawit, .framer-Yu1iE .framer-1078j3e { position: relative; top: unset; } .framer-Yu1iE .framer-1t623p7 { order: 1; } .framer-Yu1iE .framer-191jk5i { padding: 80px 40px 120px 40px; } .framer-Yu1iE .framer-qh2mkw { max-width: 500px; } .framer-Yu1iE .framer-tta06t-container { height: 700px; } .framer-Yu1iE .framer-nc7hrh { height: 110%; top: calc(49.89561586638833% - 110.00000000000001% / 2); } .framer-Yu1iE .framer-jv09oc { height: 110%; top: calc(50.10438413361171% - 110.00000000000001% / 2); }}`,
        `@media (max-width: 809.98px) { .framer-Yu1iE.framer-1opkfql { width: 390px; } .framer-Yu1iE .framer-1bkrvnq { justify-content: flex-start; order: 0; padding: 8px 8px 0px 8px; } .framer-Yu1iE .framer-9c7gsh { align-self: stretch; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; height: auto; order: 0; } .framer-Yu1iE .framer-dbzytn { gap: 48px; padding: 116px 16px 40px 16px; } .framer-Yu1iE .framer-934fi5 { flex-wrap: wrap; gap: 0px 12px; } .framer-Yu1iE .framer-1l105di-container { width: 100%; } .framer-Yu1iE .framer-1tmdief { --border-bottom-width: 2px; --border-left-width: 2px; --border-right-width: 2px; --border-top-width: 2px; aspect-ratio: 1.6442307692307692 / 1; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; height: var(--framer-aspect-ratio-supported, 208px); left: unset; padding: 2px; position: relative; top: unset; width: 100%; } .framer-Yu1iE .framer-6nmtob { border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; order: 0; } .framer-Yu1iE .framer-220qz { order: 1; padding: 60px 16px 60px 16px; } .framer-Yu1iE .framer-oq35hd { gap: 24px; } .framer-Yu1iE .framer-1ytcsmo, .framer-Yu1iE .framer-d9yhyp, .framer-Yu1iE .framer-1d5gqyr, .framer-Yu1iE .framer-1hcg286 { flex-direction: column; } .framer-Yu1iE .framer-abkstj, .framer-Yu1iE .framer-1cer4ur { height: 130%; top: calc(50.00000000000002% - 130% / 2); } .framer-Yu1iE .framer-1e6xie1, .framer-Yu1iE .framer-1x2tq6f, .framer-Yu1iE .framer-1xcqrcr, .framer-Yu1iE .framer-1dvhi58 { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: 7px; left: -3px; top: -3px; width: 7px; } .framer-Yu1iE .framer-19vz5qr, .framer-Yu1iE .framer-172nkkt, .framer-Yu1iE .framer-1l8xnw7, .framer-Yu1iE .framer-mubygu { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: 7px; right: -3px; top: -3px; width: 7px; } .framer-Yu1iE .framer-19793f7, .framer-Yu1iE .framer-1anb47k, .framer-Yu1iE .framer-o23vjb, .framer-Yu1iE .framer-1n83a9n { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; right: -3px; width: 7px; } .framer-Yu1iE .framer-9vzkku, .framer-Yu1iE .framer-1tm0xrg, .framer-Yu1iE .framer-1cbd95x, .framer-Yu1iE .framer-1vb0s2l { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; left: -3px; width: 7px; } .framer-Yu1iE .framer-oq6855 { flex: none; max-width: 700px; padding: 24px; width: 100%; } .framer-Yu1iE .framer-14lolx6 { --border-top-width: 1px; flex: none; gap: 13px; padding: 24px 0px 24px 0px; width: 100%; } .framer-Yu1iE .framer-dg87uu, .framer-Yu1iE .framer-1x4rcrr { padding: 0px 24px 0px 24px; } .framer-Yu1iE .framer-1lomp7v, .framer-Yu1iE .framer-1nnacf8, .framer-Yu1iE .framer-p12zer, .framer-Yu1iE .framer-609in6, .framer-Yu1iE .framer-1df6b2n { height: var(--framer-aspect-ratio-supported, 32px); } .framer-Yu1iE .framer-h0es8v { order: 2; padding: 60px 16px 60px 16px; } .framer-Yu1iE .framer-1tf5k9t, .framer-Yu1iE .framer-1wlx0cy, .framer-Yu1iE .framer-majgol { gap: 48px; } .framer-Yu1iE .framer-b4iumw { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: center; } .framer-Yu1iE .framer-184vltf { flex: none; gap: 16px; max-width: 300px; width: 100%; } .framer-Yu1iE .framer-6hrial { flex: none; grid-template-columns: repeat(1, minmax(50px, 1fr)); width: 100%; } .framer-Yu1iE .framer-13964ig, .framer-Yu1iE .framer-7vyg9x { height: 110%; top: calc(50.00000000000002% - 110.00000000000001% / 2); } .framer-Yu1iE .framer-10bb6zg, .framer-Yu1iE .framer-cvzokz { height: 110%; top: calc(50.10438413361171% - 110.00000000000001% / 2); } .framer-Yu1iE .framer-1j5laeh { order: 3; padding: 60px 16px 60px 16px; } .framer-Yu1iE .framer-1a63269, .framer-Yu1iE .framer-dftng1 { gap: 16px; } .framer-Yu1iE .framer-1ag4x7x { flex: none; flex-direction: column; width: 100%; } .framer-Yu1iE .framer-13hdkhh-container, .framer-Yu1iE .framer-15idok2-container, .framer-Yu1iE .framer-41028m-container { flex: none; width: 100%; } .framer-Yu1iE .framer-bdrgzb { order: 4; padding: 60px 16px 60px 16px; } .framer-Yu1iE .framer-v9n1dh { flex: none; padding: 8px 0px 0px 0px; width: 100%; } .framer-Yu1iE .framer-ugndv4, .framer-Yu1iE .framer-1obbr3g, .framer-Yu1iE .framer-fyawit, .framer-Yu1iE .framer-1078j3e { position: relative; top: unset; } .framer-Yu1iE .framer-9qis7w { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: var(--framer-aspect-ratio-supported, 8px); left: -3px; top: -3px; width: 7px; } .framer-Yu1iE .framer-kj99h2 { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: var(--framer-aspect-ratio-supported, 8px); right: -3px; top: -3px; width: 7px; } .framer-Yu1iE .framer-1yovg3 { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: var(--framer-aspect-ratio-supported, 7px); right: -3px; width: 7px; } .framer-Yu1iE .framer-1trtw9y { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: var(--framer-aspect-ratio-supported, 7px); left: -3px; width: 7px; } .framer-Yu1iE .framer-16u7g14 { height: 105%; top: calc(50.00000000000002% - 105% / 2); } .framer-Yu1iE .framer-1xo76p8 { height: 105%; top: calc(50.10438413361171% - 105% / 2); } .framer-Yu1iE .framer-191jk5i { order: 5; padding: 60px 16px 100px 16px; } .framer-Yu1iE .framer-13i8aaj { gap: 40px; } .framer-Yu1iE .framer-tta06t-container { height: 768px; } .framer-Yu1iE .framer-626lqh-container { order: 6; } .framer-Yu1iE .framer-1ij5164-container { order: 7; }}`,
      ],
      `framer-Yu1iE`
    )),
    (It = $),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 9463, width: 1440 }),
    ue(
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
        ...pt,
        ...ht,
        ..._t,
        ...vt,
        ...yt,
        ...bt,
        ...xt,
        ...St,
        ...Ct,
        ...wt,
        ...Tt,
        ...l(Ye),
        ...l(Ge),
        ...l(ve),
        ...l(De),
        ...l(Ce),
        ...l(Ie),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          C(P, {}, t),
          C(N, {}, t),
          C(k, {}, t),
          C(A, {}, t),
          C(R, {}, t),
          C(L, {}, t),
          C(M, {}, t),
          C(I, {}, t),
          C(F, {}, t),
        ])
      ),
    }),
    (Lt = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerHlaWX_f9j`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1440`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"MOmSWdoMh":{"layout":["fixed","auto"]},"FiLNtqP49":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `9463`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Lt as __FramerMetadata__, It as default, Dt as queryParamNames };
//# sourceMappingURL=W6IaS_vEiv2Vk78WLctt4PK8ihfI6pyfiK-jc3jxqGo.B46ER9y4.mjs.map
