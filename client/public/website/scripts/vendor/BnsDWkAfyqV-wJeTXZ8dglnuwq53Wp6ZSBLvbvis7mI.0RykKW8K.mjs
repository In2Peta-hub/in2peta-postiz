import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  A as t,
  O as n,
  P as r,
  T as ee,
  _ as te,
  b as ne,
  j as re,
  l as i,
  s as a,
  u as o,
} from "./react.C83sJsFz.mjs";
import { E as s, a as ie, r as ae, t as oe } from "./motion.DVY4-TFg.mjs";
import {
  A as se,
  Dt as c,
  G as l,
  K as u,
  L as ce,
  M as d,
  N as le,
  Nt as ue,
  O as de,
  Q as fe,
  Tt as pe,
  a as f,
  bt as me,
  dt as he,
  f as ge,
  gt as p,
  ht as _e,
  i as m,
  jt as h,
  k as g,
  kt as _,
  m as v,
  mt as ve,
  q as y,
  w as b,
  wt as x,
  yt as ye,
  z as S,
} from "./framer.CFqKih1k.mjs";
import { d as be, f as C, i as w, l as xe, r as Se, u as Ce } from "./shared-lib.P4JA4aUc.mjs";
import { n as T, t as E } from "./L1ANKHR4x.BSn5BK7F.mjs";
import { i as we, n as D, r as Te, t as Ee } from "./bz7TF8GsX.CGXVUdvb.mjs";
import { i as O, n as De, r as Oe, t as ke } from "./kumYuXBDg.BDiDl76I.mjs";
import { n as k, t as Ae } from "./v0GEiJsID.DbeCo17q.mjs";
import { i as je, n as A, r as j, t as Me } from "./oDmEg1BTY.D9HRz7PU.mjs";
import { n as Ne, t as M } from "./bCS5tafFa.DKT7mem2.mjs";
import { n as Pe, t as N } from "./BXLSbVJYa.DY9zsySh.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./cPVM1_Pc1.CsfRepwj.mjs";
import { i as ze, n as P, r as Be, t as Ve } from "./lWCsMyG06.CDHEYcI6.mjs";
import { i as He, n as Ue, r as F, t as I } from "./Kbsz4vDYF.Db5CsEil.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./SsXMH0HVD.DJyqsYbQ.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./ZHicPb8Xd.gi7bRg0S.mjs";
import { a as L, i as Qe, n as $e, o as et, r as tt, t as nt } from "./no1daujM5.8j03r7eY.mjs";
import { a as rt, i as it, n as at, o as R, r as ot, t as st } from "./wHF0eLOEk.DX9-N_-H.mjs";
import { n as ct, r as lt } from "./hufRl3X2K.CkA1vRRR.mjs";
var ut,
  z,
  dt,
  ft,
  pt,
  B,
  V,
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
  H,
  wt,
  Tt,
  Et,
  Dt,
  U,
  W,
  Ot,
  G,
  kt,
  At,
  jt,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  Mt,
  Nt,
  $,
  Pt,
  Ft;
e(() => {
  (a(),
    fe(),
    oe(),
    ee(),
    w(),
    je(),
    Ne(),
    Pe(),
    et(),
    He(),
    rt(),
    Ue(),
    Ve(),
    Me(),
    Ae(),
    we(),
    Fe(),
    O(),
    We(),
    C(),
    Je(),
    Qe(),
    it(),
    T(),
    ze(),
    nt(),
    st(),
    ct(),
    (ut = l(P)),
    (z = h(g)),
    (dt = h(s.div)),
    (ft = l(N)),
    (pt = h(f)),
    (B = _(s.div)),
    (V = ue(s.div)),
    (mt = l(k)),
    (ht = l(A)),
    (gt = l(R)),
    (_t = l(L)),
    (vt = l(M)),
    (yt = l(j)),
    (bt = l(I)),
    (xt = l(F)),
    (St = l(Se)),
    (Ct = {
      EWwmLL0iY: `(min-width: 1440px)`,
      RIGpoQpJC: `(min-width: 810px) and (max-width: 1439.98px)`,
      Zp5Db0cjy: `(max-width: 809.98px)`,
    }),
    (H = () => typeof document < `u`),
    (wt = []),
    (Tt = `framer-6023y`),
    (Et = {
      EWwmLL0iY: `framer-v-fnl47z`,
      RIGpoQpJC: `framer-v-gqpdue`,
      Zp5Db0cjy: `framer-v-qzdkt5`,
    }),
    (Dt = (e, t, n) => (e && t ? `position` : n)),
    (U = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (W = { damping: 35, delay: 0, mass: 2, stiffness: 120, type: `spring` }),
    (Ot = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: W,
      x: 0,
      y: 0,
    }),
    (G = {
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
    (kt = {
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
    (At = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 35, delay: 0.2, mass: 2, stiffness: 120, type: `spring` },
      x: 0,
      y: 0,
    }),
    (jt = {
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
    (K = {
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
    (q = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (J = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transformPerspective: 1200,
      x: 0,
      y: 0,
    }),
    (Y = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (X = {
      opacity: 0.22,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Z = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (Q = { Desktop: `EWwmLL0iY`, Phone: `Zp5Db0cjy`, Tablet: `RIGpoQpJC` }),
    (Mt = ({ value: e }) =>
      p()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Nt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `EWwmLL0iY`,
    })),
    ($ = c(
      te(function (e, ee) {
        let te = n(null),
          a = ee ?? te,
          oe = ne(),
          { activeLocale: c, setLocale: l } = ye(),
          u = he(),
          { style: le, className: ue, layoutId: fe, variant: p, ...h } = Nt(e);
        me(re(() => lt({}, c), [c]));
        let [_, S] = _e(p, Ct, !1),
          be = ce(Tt, Ze, qe, xe, ke, Ee, Re),
          C = t(ge)?.isLayoutTemplate,
          w = Dt(C, !!t(ie)?.transition?.layout);
        pe();
        let Ce = x(`IPQU_O1QJ`),
          T = n(null),
          we = x(`IXJooI3aK`),
          D = n(null),
          Te = x(`FhlqV5cNj`),
          O = n(null),
          De = () => (H() ? ![`RIGpoQpJC`, `Zp5Db0cjy`].includes(_) : !0),
          Oe = () => !!(!H() || [`RIGpoQpJC`, `Zp5Db0cjy`].includes(_));
        return (
          ve({}),
          i(ge.Provider, {
            value: {
              activeVariantId: _,
              humanReadableVariantMap: Q,
              primaryVariantId: `EWwmLL0iY`,
              variantClassNames: Et,
            },
            children: o(ae, {
              id: fe ?? oe,
              children: [
                i(Mt, {
                  value: `html body { background: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)); }`,
                }),
                o(s.div, {
                  ...h,
                  className: ce(be, `framer-fnl47z`, ue),
                  ref: a,
                  style: { ...le },
                  children: [
                    o(s.main, {
                      className: `framer-z1glts`,
                      "data-framer-name": `Main`,
                      layout: w,
                      children: [
                        i(`section`, {
                          className: `framer-1s8gvx7`,
                          "data-framer-name": `Hero Section`,
                          children: i(b, {
                            breakpoint: _,
                            overrides: {
                              Zp5Db0cjy: {
                                background: {
                                  alt: `Background`,
                                  fit: `fill`,
                                  intrinsicHeight: 4512,
                                  intrinsicWidth: 5632,
                                  loading: y((u?.y || 0) + 0 + 0 + 0 + 0 + 8),
                                  pixelHeight: 4512,
                                  pixelWidth: 5632,
                                  sizes: `max(${u?.width || `100vw`} - 16px, 1px)`,
                                  src: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp`,
                                  srcSet: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-883017.webp 512w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-9cb107.webp 1024w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8.webp 2048w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-144bac.webp 4096w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp 5632w`,
                                },
                              },
                            },
                            children: i(v, {
                              background: {
                                alt: `Background`,
                                fit: `fill`,
                                intrinsicHeight: 4512,
                                intrinsicWidth: 5632,
                                loading: y((u?.y || 0) + 0 + 0 + 0 + 0 + 16),
                                pixelHeight: 4512,
                                pixelWidth: 5632,
                                sizes: `max(${u?.width || `100vw`} - 32px, 1px)`,
                                src: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp`,
                                srcSet: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-883017.webp 512w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-9cb107.webp 1024w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8.webp 2048w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-144bac.webp 4096w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp 5632w`,
                              },
                              className: `framer-1j7j24p`,
                              "data-framer-name": `Bg Content`,
                              children: o(`div`, {
                                className: `framer-2riuoh`,
                                "data-framer-name": `Container`,
                                children: [
                                  o(`div`, {
                                    className: `framer-lznfg5`,
                                    "data-framer-name": `Section Title`,
                                    children: [
                                      i(b, {
                                        breakpoint: _,
                                        overrides: { Zp5Db0cjy: { y: void 0 } },
                                        children: i(m, {
                                          height: 28,
                                          y:
                                            (u?.y || 0) +
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
                                          children: i(f, {
                                            className: `framer-102ka7n-container`,
                                            nodeId: `blBbgFu8i`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(P, {
                                              btyoXJXaz: E,
                                              height: `100%`,
                                              id: `blBbgFu8i`,
                                              layoutId: `blBbgFu8i`,
                                              Selq1Epo8: `Scalora CRM`,
                                              variant: U(`nJO_haG3O`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      o(`div`, {
                                        className: `framer-1fpootq`,
                                        "data-framer-name": `Content Wrapper`,
                                        children: [
                                          o(`div`, {
                                            className: `framer-shzj48`,
                                            "data-framer-name": `Title & subtext`,
                                            children: [
                                              o(`div`, {
                                                className: `framer-13s63r9`,
                                                "data-framer-name": `Title`,
                                                children: [
                                                  i(b, {
                                                    breakpoint: _,
                                                    overrides: {
                                                      Zp5Db0cjy: {
                                                        children: i(r, {
                                                          children: o(`h1`, {
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
                                                      animate: Ot,
                                                      children: i(r, {
                                                        children: i(`h1`, {
                                                          className: `framer-styles-preset-qi1ayi`,
                                                          "data-styles-preset": `ZHicPb8Xd`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `center`,
                                                            "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                          },
                                                          children: `Turn relationships `,
                                                        }),
                                                      }),
                                                      className: `framer-12thgtg`,
                                                      "data-framer-appear-id": `12thgtg`,
                                                      fonts: [`Inter`],
                                                      initial: G,
                                                      optimized: !0,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  }),
                                                  o(dt, {
                                                    animate: kt,
                                                    className: `framer-xfgcux`,
                                                    "data-framer-appear-id": `xfgcux`,
                                                    "data-framer-name": `Text`,
                                                    initial: G,
                                                    optimized: !0,
                                                    children: [
                                                      i(g, {
                                                        __fromCanvasComponent: !0,
                                                        children: i(r, {
                                                          children: i(`h1`, {
                                                            className: `framer-styles-preset-qi1ayi`,
                                                            "data-styles-preset": `ZHicPb8Xd`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                            },
                                                            children: `into`,
                                                          }),
                                                        }),
                                                        className: `framer-1258x5z`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      i(g, {
                                                        __fromCanvasComponent: !0,
                                                        children: i(r, {
                                                          children: i(`h1`, {
                                                            className: `framer-styles-preset-u4ctgd`,
                                                            "data-styles-preset": `SsXMH0HVD`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                            },
                                                            children: `revenue`,
                                                          }),
                                                        }),
                                                        className: `framer-abvqlk`,
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
                                                animate: At,
                                                children: i(r, {
                                                  children: i(`p`, {
                                                    className: `framer-styles-preset-13ryzp6`,
                                                    "data-styles-preset": `Yw0GmpI8u`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                    },
                                                    children: `Scalora CRM is built for modern sales teams that want clarity, automation, and predictable growth.`,
                                                  }),
                                                }),
                                                className: `framer-gsejv3`,
                                                "data-framer-appear-id": `gsejv3`,
                                                fonts: [`Inter`],
                                                initial: G,
                                                optimized: !0,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          i(de, {
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
                                              i(b, {
                                                breakpoint: _,
                                                overrides: {
                                                  Zp5Db0cjy: {
                                                    width: `min(min(max(${u?.width || `100vw`} - 16px, 1px), 1280px) - 32px, 720px)`,
                                                    y: void 0,
                                                  },
                                                },
                                                children: i(m, {
                                                  height: 48,
                                                  y:
                                                    (u?.y || 0) +
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
                                                  children: i(pt, {
                                                    animate: jt,
                                                    className: `framer-exjgr7-container`,
                                                    "data-framer-appear-id": `exjgr7`,
                                                    initial: G,
                                                    nodeId: `fQ3B3iXr6`,
                                                    optimized: !0,
                                                    rendersWithMotion: !0,
                                                    scopeId: `hufRl3X2K`,
                                                    children: i(b, {
                                                      breakpoint: _,
                                                      overrides: {
                                                        RIGpoQpJC: { R5LxmUA6p: e[1] },
                                                        Zp5Db0cjy: {
                                                          R5LxmUA6p: e[2],
                                                          style: { width: `100%` },
                                                        },
                                                      },
                                                      children: i(N, {
                                                        height: `100%`,
                                                        id: `fQ3B3iXr6`,
                                                        layoutId: `fQ3B3iXr6`,
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
                                    className: `framer-cgpzou`,
                                    "data-border": !0,
                                    "data-framer-name": `Image  Wrapper`,
                                    children: i(b, {
                                      breakpoint: _,
                                      overrides: {
                                        RIGpoQpJC: {
                                          background: {
                                            alt: `CRM dashboard showing job openings, employee stats, and upcoming schedule.`,
                                            fit: `fill`,
                                            intrinsicHeight: 2166,
                                            intrinsicWidth: 3600,
                                            loading: y(
                                              (u?.y || 0) +
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
                                            pixelHeight: 2166,
                                            pixelWidth: 3600,
                                            positionX: `left`,
                                            positionY: `top`,
                                            sizes: `700px`,
                                            src: `../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-7362c1.png`,
                                            srcSet: `../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-e53f68.png 512w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-6f37dd.png 1024w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ.png 2048w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-7362c1.png 3600w`,
                                          },
                                        },
                                        Zp5Db0cjy: {
                                          background: {
                                            alt: `CRM dashboard showing job openings, employee stats, and upcoming schedule.`,
                                            fit: `fill`,
                                            intrinsicHeight: 2166,
                                            intrinsicWidth: 3600,
                                            pixelHeight: 2166,
                                            pixelWidth: 3600,
                                            positionX: `left`,
                                            positionY: `top`,
                                            sizes: `max(min(min(max(${u?.width || `100vw`} - 16px, 1px), 1280px) - 32px, 1200px) - 4px, 1px)`,
                                            src: `../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-7362c1.png`,
                                            srcSet: `../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-e53f68.png 512w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-6f37dd.png 1024w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ.png 2048w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-7362c1.png 3600w`,
                                          },
                                        },
                                      },
                                      children: i(v, {
                                        as: `figcaption`,
                                        background: {
                                          alt: `CRM dashboard showing job openings, employee stats, and upcoming schedule.`,
                                          fit: `fill`,
                                          intrinsicHeight: 2166,
                                          intrinsicWidth: 3600,
                                          loading: y(
                                            (u?.y || 0) + 0 + 0 + 0 + 0 + 16 + 0 + 0 + 677.9895 + 10
                                          ),
                                          pixelHeight: 2166,
                                          pixelWidth: 3600,
                                          positionX: `left`,
                                          positionY: `top`,
                                          sizes: `1148px`,
                                          src: `../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-7362c1.png`,
                                          srcSet: `../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-e53f68.png 512w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-6f37dd.png 1024w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ.png 2048w,../../assets/images/GuuVh9HACBUn4ZCsfoNguud0AmQ-7362c1.png 3600w`,
                                        },
                                        className: `framer-wz3oa9`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        i(`section`, {
                          className: `framer-1heqjpp`,
                          "data-framer-name": `Trusted Company`,
                          children: o(`div`, {
                            className: `framer-qp7mbk`,
                            "data-framer-name": `Container`,
                            children: [
                              i(B, {
                                __framer__animate: { transition: W },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-2hxv4i`,
                                "data-framer-name": `Section Title`,
                                children: i(g, {
                                  __fromCanvasComponent: !0,
                                  children: i(r, {
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
                                  className: `framer-1yurwtt`,
                                  "data-framer-name": `We working with`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              o(`div`, {
                                className: `framer-1cmlfak`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  i(`div`, {
                                    className: `framer-1kidy3y`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1ra3ogi`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-14q4rmc`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-19a54pa`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-17o6chm`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  i(`div`, {
                                    className: `framer-kl0ck3`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  i(`div`, {
                                    className: `framer-g0moo1`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  i(`div`, {
                                    className: `framer-g0l00`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  o(`div`, {
                                    className: `framer-1v4yqmr`,
                                    "data-border": !0,
                                    "data-framer-name": `Left Content`,
                                    children: [
                                      o(`div`, {
                                        className: `framer-16r566m`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          i(g, {
                                            __fromCanvasComponent: !0,
                                            children: i(r, {
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
                                            className: `framer-1nyvwg0`,
                                            "data-framer-name": `Trusted by`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          i(g, {
                                            __fromCanvasComponent: !0,
                                            children: i(r, {
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
                                            className: `framer-d1qn03`,
                                            "data-framer-name": `600+ Brands`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      o(`div`, {
                                        className: `framer-tkk1on`,
                                        "data-framer-name": `Star & text`,
                                        children: [
                                          i(se, {
                                            className: `framer-9w30df`,
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
                                          i(g, {
                                            __fromCanvasComponent: !0,
                                            children: i(r, {
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
                                            className: `framer-skgbyc`,
                                            "data-framer-name": `4.8/5 Average user rating`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `center`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-utgwa7`,
                                    "data-border": !0,
                                    "data-framer-name": `Ticker Wrappr`,
                                    children: [
                                      i(`div`, {
                                        className: `framer-1vqk9ea`,
                                        "data-framer-name": `Ticker 1`,
                                        children: i(b, {
                                          breakpoint: _,
                                          overrides: {
                                            Zp5Db0cjy: {
                                              tickerEffectDraggable: !0,
                                              tickerEffectVelocity: 30,
                                            },
                                          },
                                          children: o(V, {
                                            className: `framer-1m7cmvb`,
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
                                              i(d, {
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                    Zp5Db0cjy: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                  },
                                                  children: i(v, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: y(
                                                        (u?.y || 0) +
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
                                                    className: `framer-1fwbvze`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                              i(d, {
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                    Zp5Db0cjy: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                  },
                                                  children: i(v, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 577,
                                                      loading: y(
                                                        (u?.y || 0) +
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
                                                    className: `framer-4lpmjh`,
                                                    "data-framer-name": `Wondrot`,
                                                  }),
                                                }),
                                              }),
                                              i(d, {
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                    Zp5Db0cjy: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                  },
                                                  children: i(v, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 603,
                                                      loading: y(
                                                        (u?.y || 0) +
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
                                                    className: `framer-m4h142`,
                                                    "data-framer-name": `Raonadle`,
                                                  }),
                                                }),
                                              }),
                                              i(d, {
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                    Zp5Db0cjy: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                  },
                                                  children: i(v, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: y(
                                                        (u?.y || 0) +
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
                                                    className: `framer-wwku0z`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                      i(`div`, {
                                        className: `framer-1dnxmtl`,
                                        "data-framer-name": `Line`,
                                      }),
                                      i(`div`, {
                                        className: `framer-mvt2p0`,
                                        "data-framer-name": `Ticker 2`,
                                        children: i(b, {
                                          breakpoint: _,
                                          overrides: {
                                            Zp5Db0cjy: {
                                              tickerEffectDraggable: !0,
                                              tickerEffectVelocity: 30,
                                            },
                                          },
                                          children: o(V, {
                                            className: `framer-byn7cp`,
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
                                              i(d, {
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                    Zp5Db0cjy: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                  },
                                                  children: i(v, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 577,
                                                      loading: y(
                                                        (u?.y || 0) +
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
                                                    className: `framer-12hnkpa`,
                                                    "data-framer-name": `Wondrot`,
                                                  }),
                                                }),
                                              }),
                                              i(d, {
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                    Zp5Db0cjy: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                  },
                                                  children: i(v, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: y(
                                                        (u?.y || 0) +
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
                                                    className: `framer-1gemy8q`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                              i(d, {
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                    Zp5Db0cjy: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                  },
                                                  children: i(v, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 603,
                                                      loading: y(
                                                        (u?.y || 0) +
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
                                                    className: `framer-2f1f16`,
                                                    "data-framer-name": `Raonadle`,
                                                  }),
                                                }),
                                              }),
                                              i(d, {
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                    Zp5Db0cjy: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: y(
                                                          (u?.y || 0) +
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
                                                  },
                                                  children: i(v, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: y(
                                                        (u?.y || 0) +
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
                                                    className: `framer-wes9jj`,
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
                          className: `framer-12fivdt`,
                          "data-framer-name": `Why chose us`,
                          children: o(`div`, {
                            className: `framer-8nsjh7`,
                            "data-framer-name": `Bottom Content`,
                            children: [
                              i(`div`, {
                                className: `framer-13o8x3c`,
                                "data-framer-name": `Top Line`,
                              }),
                              i(`div`, {
                                className: `framer-1xy9d0x`,
                                "data-framer-name": `Box 1`,
                              }),
                              i(`div`, {
                                className: `framer-1qve4hf`,
                                "data-framer-name": `Bottom line`,
                              }),
                              i(`div`, { className: `framer-j1rnbb`, "data-framer-name": `Box 2` }),
                              i(`div`, { className: `framer-2zq1pk`, "data-framer-name": `Box 4` }),
                              i(`div`, {
                                className: `framer-1j5usyl`,
                                "data-framer-name": `Box 3`,
                              }),
                              i(`div`, {
                                className: `framer-2bqp5x`,
                                "data-framer-name": `Left Line`,
                              }),
                              i(`div`, {
                                className: `framer-1kelcpp`,
                                "data-framer-name": `Right Line`,
                              }),
                              o(`div`, {
                                className: `framer-1r4pw27`,
                                "data-framer-name": `Container`,
                                children: [
                                  o(B, {
                                    __framer__animate: { transition: W },
                                    __framer__animateOnce: !0,
                                    __framer__enter: K,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1xvbqjm`,
                                    "data-framer-name": `Section Title`,
                                    children: [
                                      o(`div`, {
                                        className: `framer-ahx9nv`,
                                        "data-framer-name": `Title & Tag`,
                                        children: [
                                          i(b, {
                                            breakpoint: _,
                                            overrides: {
                                              RIGpoQpJC: {
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1830 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  48 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                              Zp5Db0cjy: {
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  777 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  24 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: i(m, {
                                              height: 28,
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1957 +
                                                100 +
                                                0 +
                                                0 +
                                                48 +
                                                0 +
                                                0 +
                                                0,
                                              children: i(f, {
                                                className: `framer-dymf8a-container`,
                                                nodeId: `zlINOuY94`,
                                                scopeId: `hufRl3X2K`,
                                                children: i(P, {
                                                  btyoXJXaz: E,
                                                  height: `100%`,
                                                  id: `zlINOuY94`,
                                                  layoutId: `zlINOuY94`,
                                                  Selq1Epo8: `Why chose us`,
                                                  variant: U(`mXdNMwppf`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          i(g, {
                                            __fromCanvasComponent: !0,
                                            children: i(r, {
                                              children: i(`h2`, {
                                                className: `framer-styles-preset-3yq5jl`,
                                                "data-styles-preset": `cPVM1_Pc1`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `More than a CRM  a connected revenue system`,
                                              }),
                                            }),
                                            className: `framer-l3eagm`,
                                            "data-framer-name": `Numbers that reflect real growth`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      i(de, {
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
                                          i(b, {
                                            breakpoint: _,
                                            overrides: {
                                              RIGpoQpJC: {
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1830 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  48 +
                                                  146,
                                              },
                                              Zp5Db0cjy: {
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  777 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  24 +
                                                  126,
                                              },
                                            },
                                            children: i(m, {
                                              height: 44,
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1957 +
                                                100 +
                                                0 +
                                                0 +
                                                48 +
                                                146,
                                              children: i(f, {
                                                className: `framer-19mb6gy-container`,
                                                nodeId: `U2sQtRgs1`,
                                                scopeId: `hufRl3X2K`,
                                                children: i(b, {
                                                  breakpoint: _,
                                                  overrides: {
                                                    RIGpoQpJC: { kDj5Ixhw1: e[1] },
                                                    Zp5Db0cjy: { kDj5Ixhw1: e[2] },
                                                  },
                                                  children: i(k, {
                                                    height: `100%`,
                                                    id: `U2sQtRgs1`,
                                                    kDj5Ixhw1: e[0],
                                                    kJdISHL06: `Book a demo`,
                                                    layoutId: `U2sQtRgs1`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                  o(`div`, {
                                    className: `framer-5arf6m`,
                                    "data-border": !0,
                                    children: [
                                      i(b, {
                                        breakpoint: _,
                                        overrides: {
                                          RIGpoQpJC: {
                                            width: `max(min(max(${u?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              318 +
                                              0 +
                                              0,
                                          },
                                          Zp5Db0cjy: {
                                            width: `max(min(max(${u?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              266 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: i(m, {
                                          height: 241,
                                          width: `max(max((min(max(${u?.width || `100vw`} - 160px, 1px), 1280px) - 112px) / 2, 1px), 50px)`,
                                          y: (u?.y || 0) + 0 + 0 + 0 + 1957 + 100 + 0 + 0 + 0 + 0,
                                          children: i(f, {
                                            className: `framer-7qq6s-container`,
                                            nodeId: `DR83jM2s6`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 1,
                                                  },
                                                  variant: U(`Esw7BwEul`),
                                                },
                                                Zp5Db0cjy: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 1,
                                                  },
                                                  variant: U(`Esw7BwEul`),
                                                },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `DR83jM2s6`,
                                                layoutId: `DR83jM2s6`,
                                                NkyB81tga: `Unified Data, Zero Silos`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 1,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `All customer data, interactions, and deal activities live in one shared system no duplication or manual syncing.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: at,
                                                variant: U(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(b, {
                                        breakpoint: _,
                                        overrides: {
                                          RIGpoQpJC: {
                                            width: `max(min(max(${u?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              318 +
                                              0 +
                                              0,
                                          },
                                          Zp5Db0cjy: {
                                            width: `max(min(max(${u?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              266 +
                                              0 +
                                              241,
                                          },
                                        },
                                        children: i(m, {
                                          height: 241,
                                          width: `max(max((min(max(${u?.width || `100vw`} - 160px, 1px), 1280px) - 112px) / 2, 1px), 50px)`,
                                          y: (u?.y || 0) + 0 + 0 + 0 + 1957 + 100 + 0 + 0 + 0 + 241,
                                          children: i(f, {
                                            className: `framer-mp9gc1-container`,
                                            nodeId: `uXPUVPGQl`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 1,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 1,
                                                  },
                                                  variant: U(`Esw7BwEul`),
                                                },
                                                Zp5Db0cjy: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: U(`Esw7BwEul`),
                                                },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `uXPUVPGQl`,
                                                layoutId: `uXPUVPGQl`,
                                                NkyB81tga: `Built for Speed & Clarity`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 1,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 1,
                                                },
                                                SSIrHXMQf: `Instant visibility into pipeline status, deal progress, and next actions so nothing slows your team down.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: tt,
                                                variant: U(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(b, {
                                        breakpoint: _,
                                        overrides: {
                                          RIGpoQpJC: {
                                            width: `max(min(max(${u?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              318 +
                                              0 +
                                              241,
                                          },
                                          Zp5Db0cjy: {
                                            width: `max(min(max(${u?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              266 +
                                              0 +
                                              482,
                                          },
                                        },
                                        children: i(m, {
                                          height: 241,
                                          width: `max(max((min(max(${u?.width || `100vw`} - 160px, 1px), 1280px) - 112px) / 2, 1px), 50px)`,
                                          y: (u?.y || 0) + 0 + 0 + 0 + 1957 + 100 + 0 + 0 + 0 + 482,
                                          children: i(f, {
                                            className: `framer-1h3a7o2-container`,
                                            nodeId: `rmKmwpsUD`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: U(`Esw7BwEul`),
                                                },
                                                Zp5Db0cjy: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: U(`Esw7BwEul`),
                                                },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `rmKmwpsUD`,
                                                layoutId: `rmKmwpsUD`,
                                                NkyB81tga: `Automation That Actually Helps`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 1,
                                                  borderRightWidth: 0,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 1,
                                                },
                                                SSIrHXMQf: `Eliminate repetitive tasks like follow-ups, assignments, and reminders with smart workflows.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: $e,
                                                variant: U(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(b, {
                                        breakpoint: _,
                                        overrides: {
                                          RIGpoQpJC: {
                                            width: `max(min(max(${u?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1830 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              318 +
                                              0 +
                                              241,
                                          },
                                          Zp5Db0cjy: {
                                            width: `max(min(max(${u?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              777 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              266 +
                                              0 +
                                              723,
                                          },
                                        },
                                        children: i(m, {
                                          height: 241,
                                          width: `max(max((min(max(${u?.width || `100vw`} - 160px, 1px), 1280px) - 112px) / 2, 1px), 50px)`,
                                          y: (u?.y || 0) + 0 + 0 + 0 + 1957 + 100 + 0 + 0 + 0 + 723,
                                          children: i(f, {
                                            className: `framer-gz3b5-container`,
                                            nodeId: `nG5SP4E3g`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 1,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: U(`Esw7BwEul`),
                                                },
                                                Zp5Db0cjy: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: U(`Esw7BwEul`),
                                                },
                                              },
                                              children: i(A, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `nG5SP4E3g`,
                                                layoutId: `nG5SP4E3g`,
                                                NkyB81tga: `Fully Connected Ecosystem`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 0,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 1,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 1,
                                                },
                                                SSIrHXMQf: `Works seamlessly with Scalora Marketing, Docs, and Ops creating a complete revenue engine.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: ot,
                                                variant: U(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
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
                          className: `framer-9cluls`,
                          "data-framer-name": `Core features`,
                          children: o(`div`, {
                            className: `framer-tq2fwh`,
                            "data-framer-name": `Container`,
                            children: [
                              o(B, {
                                __framer__animate: { transition: W },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1fh2jha`,
                                "data-framer-name": `Section Title`,
                                children: [
                                  i(b, {
                                    breakpoint: _,
                                    overrides: {
                                      RIGpoQpJC: {
                                        y: (u?.y || 0) + 0 + 0 + 0 + 2790 + 80 + 0 + 0 + 0 + 0,
                                      },
                                      Zp5Db0cjy: {
                                        y: (u?.y || 0) + 0 + 0 + 0 + 2127 + 60 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: i(m, {
                                      height: 28,
                                      y: (u?.y || 0) + 0 + 0 + 0 + 3121 + 100 + 0 + 0 + 0 + 0,
                                      children: i(f, {
                                        className: `framer-1yh3a89-container`,
                                        nodeId: `lCUmzn2FU`,
                                        scopeId: `hufRl3X2K`,
                                        children: i(P, {
                                          btyoXJXaz: E,
                                          height: `100%`,
                                          id: `lCUmzn2FU`,
                                          layoutId: `lCUmzn2FU`,
                                          Selq1Epo8: `Core features`,
                                          variant: U(`mXdNMwppf`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(g, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
                                      children: i(`h2`, {
                                        className: `framer-styles-preset-3yq5jl`,
                                        "data-styles-preset": `cPVM1_Pc1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        },
                                        children: `Everything you need to manage  and close deals faster`,
                                      }),
                                    }),
                                    className: `framer-f8qtgt`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(`div`, {
                                className: `framer-1k0cfjr`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  o(`div`, {
                                    className: `framer-kyha1l`,
                                    "data-border": !0,
                                    children: [
                                      i(b, {
                                        breakpoint: _,
                                        overrides: {
                                          RIGpoQpJC: {
                                            width: `max(min(max(${u?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2790 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          Zp5Db0cjy: {
                                            width: `max(min(max(${u?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2127 +
                                              60 +
                                              0 +
                                              150 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: i(m, {
                                          height: 505,
                                          width: `max(max(min(max(${u?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 2, 50px)`,
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            3121 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            0,
                                          children: i(f, {
                                            className: `framer-17bmzg4-container`,
                                            nodeId: `k8OlRC8LR`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                Zp5Db0cjy: {
                                                  CLrlhYiqi: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                },
                                              },
                                              children: i(R, {
                                                CLrlhYiqi: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                height: `100%`,
                                                id: `k8OlRC8LR`,
                                                layoutId: `k8OlRC8LR`,
                                                ODjT7kzLC: q(
                                                  {
                                                    pixelHeight: 2336,
                                                    pixelWidth: 4096,
                                                    src: `../../assets/images/rfs0gONTCHpLX2ZV1oNdt59VR6w-0f9ed7.jpg`,
                                                    srcSet: `../../assets/images/rfs0gONTCHpLX2ZV1oNdt59VR6w-84632f.jpg 512w,../../assets/images/rfs0gONTCHpLX2ZV1oNdt59VR6w.jpg 1024w,../../assets/images/rfs0gONTCHpLX2ZV1oNdt59VR6w-d60ee9.jpg 2048w,../../assets/images/rfs0gONTCHpLX2ZV1oNdt59VR6w-0f9ed7.jpg 4096w`,
                                                  },
                                                  `Hand reaching toward a glowing holographic data dashboard in a modern yellow office.      Like  Dislike`
                                                ),
                                                Ordr4ylGa: `Visual pipeline management`,
                                                style: { width: `100%` },
                                                variant: U(`DeiL4RSDF`),
                                                vWcxBpall: `Manage deals with a clear, drag-and-drop interface designed for speed and visibility.`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(b, {
                                        breakpoint: _,
                                        overrides: {
                                          RIGpoQpJC: {
                                            width: `max(min(max(${u?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2790 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          Zp5Db0cjy: {
                                            width: `max(min(max(${u?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2127 +
                                              60 +
                                              0 +
                                              150 +
                                              0 +
                                              0 +
                                              0 +
                                              505,
                                          },
                                        },
                                        children: i(m, {
                                          height: 505,
                                          width: `max(max(min(max(${u?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 2, 50px)`,
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            3121 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            0,
                                          children: i(f, {
                                            className: `framer-1hqe79z-container`,
                                            nodeId: `EfCWHpjtG`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                Zp5Db0cjy: {
                                                  CLrlhYiqi: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                },
                                              },
                                              children: i(R, {
                                                CLrlhYiqi: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 1,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                height: `100%`,
                                                id: `EfCWHpjtG`,
                                                layoutId: `EfCWHpjtG`,
                                                ODjT7kzLC: q(
                                                  {
                                                    pixelHeight: 2731,
                                                    pixelWidth: 4096,
                                                    src: `../../assets/images/dQfXB4IbOGbJ5ryLm22ePytA4-631649.jpg`,
                                                    srcSet: `../../assets/images/dQfXB4IbOGbJ5ryLm22ePytA4.jpg 512w,../../assets/images/dQfXB4IbOGbJ5ryLm22ePytA4-c80322.jpg 1024w,../../assets/images/dQfXB4IbOGbJ5ryLm22ePytA4-f9f7e7.jpg 2048w,../../assets/images/dQfXB4IbOGbJ5ryLm22ePytA4-631649.jpg 4096w`,
                                                  },
                                                  `Two young men collaborating at a computer in an orange office.`
                                                ),
                                                Ordr4ylGa: `Smart lead tracking`,
                                                style: { width: `100%` },
                                                variant: U(`DeiL4RSDF`),
                                                vWcxBpall: `Capture, qualify, and route leads automatically based on your business rules.`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(b, {
                                        breakpoint: _,
                                        overrides: {
                                          RIGpoQpJC: {
                                            width: `max(min(max(${u?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2790 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              505,
                                          },
                                          Zp5Db0cjy: {
                                            width: `max(min(max(${u?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2127 +
                                              60 +
                                              0 +
                                              150 +
                                              0 +
                                              0 +
                                              0 +
                                              1010,
                                          },
                                        },
                                        children: i(m, {
                                          height: 505,
                                          width: `max(max(min(max(${u?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 2, 50px)`,
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            3121 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            505,
                                          children: i(f, {
                                            className: `framer-1k67ox9-container`,
                                            nodeId: `ssK5ilzgj`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  CLrlhYiqi: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 1,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
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
                                                id: `ssK5ilzgj`,
                                                layoutId: `ssK5ilzgj`,
                                                ODjT7kzLC: q(
                                                  {
                                                    pixelHeight: 1440,
                                                    pixelWidth: 2348,
                                                    positionX: `62.9%`,
                                                    positionY: `37.1%`,
                                                    src: `../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g-931363.png`,
                                                    srcSet: `../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g.png 512w,../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g-cd20b4.png 1024w,../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g-ec4300.png 2048w,../../assets/images/b8FXfH46bqfxgwagJ169Wu9gA9g-931363.png 2348w`,
                                                  },
                                                  `Two men smiling and talking in an office, with one holding a notebook and pen.`
                                                ),
                                                Ordr4ylGa: `Workflow automation`,
                                                style: { width: `100%` },
                                                variant: U(`DeiL4RSDF`),
                                                vWcxBpall: `Automate repetitive sales processes so your team 
focuses on closing.`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      i(b, {
                                        breakpoint: _,
                                        overrides: {
                                          RIGpoQpJC: {
                                            width: `max(min(max(${u?.width || `100vw`} - 80px, 1px), 1280px) / 2, 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2790 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0 +
                                              505,
                                          },
                                          Zp5Db0cjy: {
                                            width: `max(min(max(${u?.width || `100vw`} - 32px, 1px), 1280px), 50px)`,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2127 +
                                              60 +
                                              0 +
                                              150 +
                                              0 +
                                              0 +
                                              0 +
                                              1515,
                                          },
                                        },
                                        children: i(m, {
                                          height: 505,
                                          width: `max(max(min(max(${u?.width || `100vw`} - 160px, 1px), 1280px), 1px) / 2, 50px)`,
                                          y:
                                            (u?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            3121 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            505,
                                          children: i(f, {
                                            className: `framer-rhug7f-container`,
                                            nodeId: `oMYFvsGZT`,
                                            scopeId: `hufRl3X2K`,
                                            children: i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  CLrlhYiqi: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 1,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                },
                                                Zp5Db0cjy: {
                                                  CLrlhYiqi: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                },
                                              },
                                              children: i(R, {
                                                CLrlhYiqi: {
                                                  borderBottomWidth: 0,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 1,
                                                  borderRightWidth: 0,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                height: `100%`,
                                                id: `oMYFvsGZT`,
                                                layoutId: `oMYFvsGZT`,
                                                ODjT7kzLC: q(
                                                  {
                                                    pixelHeight: 4096,
                                                    pixelWidth: 2731,
                                                    src: `../../assets/images/dEUOtFeMCSvjOYvoLy4KnE0ohl4.jpg`,
                                                    srcSet: `../../assets/images/dEUOtFeMCSvjOYvoLy4KnE0ohl4-209b2b.jpg 682w,../../assets/images/dEUOtFeMCSvjOYvoLy4KnE0ohl4-4319c9.jpg 1365w,../../assets/images/dEUOtFeMCSvjOYvoLy4KnE0ohl4.jpg 2731w`,
                                                  },
                                                  `Three colleagues gathered around a computer in an office.`
                                                ),
                                                Ordr4ylGa: `Communication Tracking`,
                                                style: { width: `100%` },
                                                variant: U(`DeiL4RSDF`),
                                                vWcxBpall: `Track every interaction in one place  emails, meetings,
notes, and tasks. `,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  i(`div`, {
                                    className: `framer-1dt5uz`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-f8l0yk`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  i(`div`, {
                                    className: `framer-144skio`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-vpmq3t`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  i(`div`, {
                                    className: `framer-fzm7m2`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1v8k0cj`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1nqtxzq`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-o7av6b`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(`div`, {
                          className: `framer-mz830u`,
                          "data-framer-name": `How it works`,
                          children: i(`div`, {
                            className: `framer-3vswua`,
                            "data-framer-name": `Container`,
                            children: o(`div`, {
                              className: `framer-102kwjz`,
                              "data-framer-name": `Bottom Content`,
                              children: [
                                i(`div`, {
                                  className: `framer-1z0xzrq`,
                                  "data-framer-name": `Top Line`,
                                }),
                                i(`div`, {
                                  className: `framer-hjiy2`,
                                  "data-framer-name": `Bottom line`,
                                }),
                                i(`div`, {
                                  className: `framer-ubw5nd`,
                                  "data-framer-name": `Left Line`,
                                }),
                                i(`div`, {
                                  className: `framer-17mnq2f`,
                                  "data-framer-name": `Right Line`,
                                }),
                                i(`div`, {
                                  className: `framer-1soh7ny`,
                                  "data-framer-name": `Box 1`,
                                }),
                                i(`div`, {
                                  className: `framer-1rbh11h`,
                                  "data-framer-name": `Box 2`,
                                }),
                                i(`div`, {
                                  className: `framer-so6m38`,
                                  "data-framer-name": `Box 4`,
                                }),
                                i(`div`, {
                                  className: `framer-19w5rs9`,
                                  "data-framer-name": `Box 3`,
                                }),
                                o(`div`, {
                                  className: `framer-1v9vrbz`,
                                  "data-framer-name": `Content Wrapper`,
                                  children: [
                                    o(B, {
                                      __framer__animate: { transition: W },
                                      __framer__animateOnce: !0,
                                      __framer__enter: K,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-53doak`,
                                      "data-framer-name": `Section Title`,
                                      children: [
                                        i(b, {
                                          breakpoint: _,
                                          overrides: {
                                            RIGpoQpJC: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                4146 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                            Zp5Db0cjy: {
                                              y:
                                                (u?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                4417 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                100 +
                                                0 +
                                                0 +
                                                0,
                                            },
                                          },
                                          children: i(m, {
                                            height: 28,
                                            y:
                                              (u?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              4517 +
                                              100 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              0 +
                                              0,
                                            children: i(f, {
                                              className: `framer-7anwn-container`,
                                              nodeId: `qIg0XQ2vV`,
                                              scopeId: `hufRl3X2K`,
                                              children: i(P, {
                                                btyoXJXaz: E,
                                                height: `100%`,
                                                id: `qIg0XQ2vV`,
                                                layoutId: `qIg0XQ2vV`,
                                                Selq1Epo8: `How it works`,
                                                variant: U(`mXdNMwppf`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        i(b, {
                                          breakpoint: _,
                                          overrides: {
                                            RIGpoQpJC: {
                                              children: i(r, {
                                                children: i(`h2`, {
                                                  className: `framer-styles-preset-3yq5jl`,
                                                  "data-styles-preset": `cPVM1_Pc1`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                  },
                                                  children: `From manual processes to intelligent automation`,
                                                }),
                                              }),
                                            },
                                            Zp5Db0cjy: {
                                              children: i(r, {
                                                children: i(`h2`, {
                                                  className: `framer-styles-preset-3yq5jl`,
                                                  "data-styles-preset": `cPVM1_Pc1`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `center`,
                                                    "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                  },
                                                  children: `From manual processes to intelligent automation`,
                                                }),
                                              }),
                                            },
                                          },
                                          children: i(g, {
                                            __fromCanvasComponent: !0,
                                            children: i(r, {
                                              children: i(`h2`, {
                                                className: `framer-styles-preset-3yq5jl`,
                                                "data-styles-preset": `cPVM1_Pc1`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `From manual processes to intelligent automation`,
                                              }),
                                            }),
                                            className: `framer-lfqn9t`,
                                            "data-framer-name": `The platform that helps you Build`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      ],
                                    }),
                                    o(`div`, {
                                      className: `framer-nli42u`,
                                      "data-framer-name": `Story  Wrepper`,
                                      children: [
                                        o(`div`, {
                                          className: `framer-ww31yh`,
                                          "data-framer-name": `Our Story 1`,
                                          id: Ce,
                                          ref: T,
                                          children: [
                                            i(`div`, {
                                              className: `framer-8cbfp0`,
                                              "data-framer-name": `Progressbar wrapper`,
                                              children: o(`div`, {
                                                className: `framer-go02eu`,
                                                "data-framer-name": `Dot And Progress bar`,
                                                children: [
                                                  i(`div`, {
                                                    className: `framer-jnmp6n`,
                                                    "data-framer-name": `Dot `,
                                                    children: i(b, {
                                                      breakpoint: _,
                                                      overrides: {
                                                        RIGpoQpJC: {
                                                          background: {
                                                            alt: `Number 1 `,
                                                            fit: `fill`,
                                                            intrinsicHeight: 192,
                                                            intrinsicWidth: 192,
                                                            loading: y(
                                                              (u?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4146 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                178 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                15
                                                            ),
                                                            pixelHeight: 192,
                                                            pixelWidth: 192,
                                                            sizes: `48px`,
                                                            src: `../../assets/images/FoQw86fKpUJs4Zn1T0pW7XG1OU.png`,
                                                          },
                                                        },
                                                        Zp5Db0cjy: {
                                                          background: {
                                                            alt: `Number 1 `,
                                                            fit: `fill`,
                                                            intrinsicHeight: 192,
                                                            intrinsicWidth: 192,
                                                            loading: y(
                                                              (u?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4417 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                146 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                16 +
                                                                0 +
                                                                16
                                                            ),
                                                            pixelHeight: 192,
                                                            pixelWidth: 192,
                                                            sizes: `32px`,
                                                            src: `../../assets/images/FoQw86fKpUJs4Zn1T0pW7XG1OU.png`,
                                                          },
                                                        },
                                                      },
                                                      children: i(v, {
                                                        background: {
                                                          alt: `Number 1 `,
                                                          fit: `fill`,
                                                          intrinsicHeight: 192,
                                                          intrinsicWidth: 192,
                                                          loading: y(
                                                            (u?.y || 0) +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              4517 +
                                                              100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              100 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              16 +
                                                              0 +
                                                              15
                                                          ),
                                                          pixelHeight: 192,
                                                          pixelWidth: 192,
                                                          sizes: `48px`,
                                                          src: `../../assets/images/FoQw86fKpUJs4Zn1T0pW7XG1OU.png`,
                                                        },
                                                        className: `framer-9p5x7h`,
                                                        "data-framer-name": `Dor`,
                                                      }),
                                                    }),
                                                  }),
                                                  i(`div`, {
                                                    className: `framer-1uxs6i2`,
                                                    "data-framer-name": `Progress bar`,
                                                    children: i(b, {
                                                      breakpoint: _,
                                                      overrides: {
                                                        RIGpoQpJC: {
                                                          __framer__parallaxTransformEnabled:
                                                            void 0,
                                                          __framer__styleAppearEffectEnabled:
                                                            void 0,
                                                          style: {},
                                                        },
                                                        Zp5Db0cjy: {
                                                          __framer__parallaxTransformEnabled:
                                                            void 0,
                                                          __framer__styleAppearEffectEnabled:
                                                            void 0,
                                                          style: {},
                                                        },
                                                      },
                                                      children: i(B, {
                                                        __framer__adjustPosition: !0,
                                                        __framer__animate: { transition: Y },
                                                        __framer__animateOnce: !0,
                                                        __framer__enter: J,
                                                        __framer__offset: 0,
                                                        __framer__parallaxTransformEnabled: !0,
                                                        __framer__speed: 0,
                                                        __framer__styleAppearEffectEnabled: !0,
                                                        __framer__targets: [
                                                          { ref: T, target: `animate` },
                                                        ],
                                                        __framer__threshold: 0.5,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-qfrluc`,
                                                        "data-framer-name": `Fill`,
                                                        style: { transformPerspective: 1200 },
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  width: `max(max(min(${u?.width || `100vw`} - 160px, 1280px), 1px) - 118px, 1px)`,
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    4146 +
                                                    100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    178 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                                Zp5Db0cjy: {
                                                  width: `max(max(min(${u?.width || `100vw`} - 32px, 1280px), 1px) - 66px, 1px)`,
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    4417 +
                                                    100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    146 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: i(m, {
                                                height: 454,
                                                width: `max(max((max(min(${u?.width || `100vw`} - 160px, 1280px), 1px) - 112px) / 2, 1px) - 86px, 1px)`,
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4517 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  0,
                                                children: i(f, {
                                                  className: `framer-bao7fq-container`,
                                                  nodeId: `ECoF7ZCdO`,
                                                  scopeId: `hufRl3X2K`,
                                                  children: i(L, {
                                                    cC0wwxTAk: `01`,
                                                    height: `100%`,
                                                    id: `ECoF7ZCdO`,
                                                    layoutId: `ECoF7ZCdO`,
                                                    mKkijz_yZ: `8px 5px 8px 8px`,
                                                    PWko4QQ6a: `Import contacts, forms, or sync campaigns from Scalora Marketing.`,
                                                    style: { width: `100%` },
                                                    uVAnmzQWM: `Capture & Organize Leads`,
                                                    variant: U(`hadlklqS7`),
                                                    vSpPEMUJJ: q(
                                                      {
                                                        pixelHeight: 3867,
                                                        pixelWidth: 5801,
                                                        src: `../../assets/images/M1Y8mZLMgFaDZKirzBx5CY70-b09100.jpeg`,
                                                        srcSet: `../../assets/images/M1Y8mZLMgFaDZKirzBx5CY70-db43e5.jpeg 512w,../../assets/images/M1Y8mZLMgFaDZKirzBx5CY70-a12cf9.jpeg 1024w,../../assets/images/M1Y8mZLMgFaDZKirzBx5CY70.jpeg 2048w,../../assets/images/M1Y8mZLMgFaDZKirzBx5CY70-cd204f.jpeg 4096w,../../assets/images/M1Y8mZLMgFaDZKirzBx5CY70-b09100.jpeg 5801w`,
                                                      },
                                                      `Person working on a laptop with a business analytics dashboard in a cozy office.      Like  Dislike`
                                                    ),
                                                    width: `100%`,
                                                    yzFj167lx: {
                                                      borderBottomWidth: 0,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 0,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        o(`div`, {
                                          className: `framer-1ewb1hl`,
                                          "data-framer-name": `Our Story 2`,
                                          id: we,
                                          ref: D,
                                          children: [
                                            i(`div`, {
                                              className: `framer-et8xdu`,
                                              "data-framer-name": `Progressbar wrapper`,
                                              children: o(`div`, {
                                                className: `framer-5gg5nj`,
                                                "data-framer-name": `Dot And Progress bar`,
                                                children: [
                                                  i(b, {
                                                    breakpoint: _,
                                                    overrides: {
                                                      RIGpoQpJC: {
                                                        __framer__styleAppearEffectEnabled: void 0,
                                                      },
                                                      Zp5Db0cjy: {
                                                        __framer__styleAppearEffectEnabled: void 0,
                                                      },
                                                    },
                                                    children: i(B, {
                                                      __framer__animate: { transition: Z },
                                                      __framer__animateOnce: !1,
                                                      __framer__enter: X,
                                                      __framer__styleAppearEffectEnabled: !0,
                                                      __framer__targets: [
                                                        { ref: D, target: `animate` },
                                                      ],
                                                      __framer__threshold: 0.5,
                                                      __perspectiveFX: !1,
                                                      __targetOpacity: 1,
                                                      className: `framer-u5l6et`,
                                                      "data-framer-name": `Dot `,
                                                      children: i(b, {
                                                        breakpoint: _,
                                                        overrides: {
                                                          RIGpoQpJC: {
                                                            background: {
                                                              alt: `Number 2`,
                                                              fit: `fill`,
                                                              intrinsicHeight: 192,
                                                              intrinsicWidth: 192,
                                                              loading: y(
                                                                (u?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4146 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  100 +
                                                                  178 +
                                                                  0 +
                                                                  454 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  14
                                                              ),
                                                              pixelHeight: 192,
                                                              pixelWidth: 192,
                                                              sizes: `48px`,
                                                              src: `../../assets/images/bYB2PH7pA5KQbqGJWQTR7jLeBxk.png`,
                                                            },
                                                          },
                                                          Zp5Db0cjy: {
                                                            background: {
                                                              alt: `Number 2`,
                                                              fit: `fill`,
                                                              intrinsicHeight: 192,
                                                              intrinsicWidth: 192,
                                                              loading: y(
                                                                (u?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4417 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  100 +
                                                                  146 +
                                                                  0 +
                                                                  454 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  -8
                                                              ),
                                                              pixelHeight: 192,
                                                              pixelWidth: 192,
                                                              sizes: `32px`,
                                                              src: `../../assets/images/bYB2PH7pA5KQbqGJWQTR7jLeBxk.png`,
                                                            },
                                                          },
                                                        },
                                                        children: i(v, {
                                                          background: {
                                                            alt: `Number 2`,
                                                            fit: `fill`,
                                                            intrinsicHeight: 192,
                                                            intrinsicWidth: 192,
                                                            loading: y(
                                                              (u?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4517 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                454 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                14
                                                            ),
                                                            pixelHeight: 192,
                                                            pixelWidth: 192,
                                                            sizes: `48px`,
                                                            src: `../../assets/images/bYB2PH7pA5KQbqGJWQTR7jLeBxk.png`,
                                                          },
                                                          className: `framer-ub5bzs`,
                                                          "data-framer-name": `Dor`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  i(`div`, {
                                                    className: `framer-1cko6re`,
                                                    "data-framer-name": `Progress bar`,
                                                    children: i(b, {
                                                      breakpoint: _,
                                                      overrides: {
                                                        RIGpoQpJC: {
                                                          __framer__parallaxTransformEnabled:
                                                            void 0,
                                                          __framer__styleAppearEffectEnabled:
                                                            void 0,
                                                          style: {},
                                                        },
                                                        Zp5Db0cjy: {
                                                          __framer__parallaxTransformEnabled:
                                                            void 0,
                                                          __framer__styleAppearEffectEnabled:
                                                            void 0,
                                                          style: {},
                                                        },
                                                      },
                                                      children: i(B, {
                                                        __framer__adjustPosition: !0,
                                                        __framer__animate: { transition: Y },
                                                        __framer__animateOnce: !0,
                                                        __framer__enter: J,
                                                        __framer__offset: 0,
                                                        __framer__parallaxTransformEnabled: !0,
                                                        __framer__speed: 0,
                                                        __framer__styleAppearEffectEnabled: !0,
                                                        __framer__targets: [
                                                          { ref: D, target: `animate` },
                                                        ],
                                                        __framer__threshold: 0.5,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-1hvvvf0`,
                                                        "data-framer-name": `Fill`,
                                                        style: { transformPerspective: 1200 },
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  width: `max(max(min(${u?.width || `100vw`} - 160px, 1280px), 1px) - 118px, 1px)`,
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    4146 +
                                                    100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    178 +
                                                    0 +
                                                    454 +
                                                    0,
                                                },
                                                Zp5Db0cjy: {
                                                  width: `max(max(min(${u?.width || `100vw`} - 32px, 1280px), 1px) - 66px, 1px)`,
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    4417 +
                                                    100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    146 +
                                                    0 +
                                                    454 +
                                                    0,
                                                },
                                              },
                                              children: i(m, {
                                                height: 454,
                                                width: `max(max((max(min(${u?.width || `100vw`} - 160px, 1280px), 1px) - 112px) / 2, 1px) - 86px, 1px)`,
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4517 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  454 +
                                                  0,
                                                children: i(f, {
                                                  className: `framer-e591n9-container`,
                                                  nodeId: `FhzVttlsP`,
                                                  scopeId: `hufRl3X2K`,
                                                  children: i(L, {
                                                    cC0wwxTAk: `01`,
                                                    height: `100%`,
                                                    id: `FhzVttlsP`,
                                                    layoutId: `FhzVttlsP`,
                                                    mKkijz_yZ: `8px 5px 8px 8px`,
                                                    PWko4QQ6a: `Leads are routed to the right sales reps based on predefined rules.`,
                                                    style: { width: `100%` },
                                                    uVAnmzQWM: `Assign & Manage Deals`,
                                                    variant: U(`hadlklqS7`),
                                                    vSpPEMUJJ: q(
                                                      {
                                                        pixelHeight: 2731,
                                                        pixelWidth: 4096,
                                                        src: `../../assets/images/fCSQuRdB75b4EYHW0lT9YOkQxjM-b25387.jpg`,
                                                        srcSet: `../../assets/images/fCSQuRdB75b4EYHW0lT9YOkQxjM-fb6121.jpg 512w,../../assets/images/fCSQuRdB75b4EYHW0lT9YOkQxjM-c61b4a.jpg 1024w,../../assets/images/fCSQuRdB75b4EYHW0lT9YOkQxjM.jpg 2048w,../../assets/images/fCSQuRdB75b4EYHW0lT9YOkQxjM-b25387.jpg 4096w`,
                                                      },
                                                      `Three coworkers smiling and collaborating at a computer in a modern office.`
                                                    ),
                                                    width: `100%`,
                                                    yzFj167lx: {
                                                      borderBottomWidth: 0,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 0,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        o(`div`, {
                                          className: `framer-1fb845o`,
                                          "data-framer-name": `Our Story 3`,
                                          id: Te,
                                          ref: O,
                                          children: [
                                            i(`div`, {
                                              className: `framer-r90436`,
                                              "data-framer-name": `Progressbar wrapper`,
                                              children: o(`div`, {
                                                className: `framer-tq72lk`,
                                                "data-framer-name": `Dot And Progress bar`,
                                                children: [
                                                  i(b, {
                                                    breakpoint: _,
                                                    overrides: {
                                                      RIGpoQpJC: {
                                                        __framer__styleAppearEffectEnabled: void 0,
                                                      },
                                                      Zp5Db0cjy: {
                                                        __framer__styleAppearEffectEnabled: void 0,
                                                      },
                                                    },
                                                    children: i(B, {
                                                      __framer__animate: { transition: Z },
                                                      __framer__animateOnce: !1,
                                                      __framer__enter: X,
                                                      __framer__styleAppearEffectEnabled: !0,
                                                      __framer__targets: [
                                                        { ref: O, target: `animate` },
                                                      ],
                                                      __framer__threshold: 0.5,
                                                      __perspectiveFX: !1,
                                                      __targetOpacity: 1,
                                                      className: `framer-1bz177l`,
                                                      "data-framer-name": `Dot `,
                                                      children: i(b, {
                                                        breakpoint: _,
                                                        overrides: {
                                                          RIGpoQpJC: {
                                                            background: {
                                                              alt: `Number 3`,
                                                              fit: `fill`,
                                                              intrinsicHeight: 192,
                                                              intrinsicWidth: 192,
                                                              loading: y(
                                                                (u?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4146 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  100 +
                                                                  178 +
                                                                  0 +
                                                                  908 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  14
                                                              ),
                                                              pixelHeight: 192,
                                                              pixelWidth: 192,
                                                              sizes: `48px`,
                                                              src: `../../assets/images/nC8N7nLMJiPVkWH65FJW3VkUFjk.png`,
                                                            },
                                                          },
                                                          Zp5Db0cjy: {
                                                            background: {
                                                              alt: `Number 3`,
                                                              fit: `fill`,
                                                              intrinsicHeight: 192,
                                                              intrinsicWidth: 192,
                                                              loading: y(
                                                                (u?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  4417 +
                                                                  100 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  100 +
                                                                  146 +
                                                                  0 +
                                                                  908 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  -8
                                                              ),
                                                              pixelHeight: 192,
                                                              pixelWidth: 192,
                                                              sizes: `32px`,
                                                              src: `../../assets/images/nC8N7nLMJiPVkWH65FJW3VkUFjk.png`,
                                                            },
                                                          },
                                                        },
                                                        children: i(v, {
                                                          background: {
                                                            alt: `Number 3`,
                                                            fit: `fill`,
                                                            intrinsicHeight: 192,
                                                            intrinsicWidth: 192,
                                                            loading: y(
                                                              (u?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                4517 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                908 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                14
                                                            ),
                                                            pixelHeight: 192,
                                                            pixelWidth: 192,
                                                            sizes: `48px`,
                                                            src: `../../assets/images/nC8N7nLMJiPVkWH65FJW3VkUFjk.png`,
                                                          },
                                                          className: `framer-3dabs6`,
                                                          "data-framer-name": `Dor`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  i(`div`, {
                                                    className: `framer-1qxx6a6`,
                                                    "data-framer-name": `Progress bar`,
                                                    children: i(b, {
                                                      breakpoint: _,
                                                      overrides: {
                                                        RIGpoQpJC: {
                                                          __framer__parallaxTransformEnabled:
                                                            void 0,
                                                          __framer__styleAppearEffectEnabled:
                                                            void 0,
                                                          style: {},
                                                        },
                                                        Zp5Db0cjy: {
                                                          __framer__parallaxTransformEnabled:
                                                            void 0,
                                                          __framer__styleAppearEffectEnabled:
                                                            void 0,
                                                          style: {},
                                                        },
                                                      },
                                                      children: i(B, {
                                                        __framer__adjustPosition: !0,
                                                        __framer__animate: { transition: Y },
                                                        __framer__animateOnce: !0,
                                                        __framer__enter: J,
                                                        __framer__offset: 0,
                                                        __framer__parallaxTransformEnabled: !0,
                                                        __framer__speed: 0,
                                                        __framer__styleAppearEffectEnabled: !0,
                                                        __framer__targets: [
                                                          { ref: O, target: `animate` },
                                                        ],
                                                        __framer__threshold: 0.5,
                                                        __perspectiveFX: !1,
                                                        __targetOpacity: 1,
                                                        className: `framer-p00u5z`,
                                                        "data-framer-name": `Fill`,
                                                        style: { transformPerspective: 1200 },
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            }),
                                            i(b, {
                                              breakpoint: _,
                                              overrides: {
                                                RIGpoQpJC: {
                                                  width: `max(max(min(${u?.width || `100vw`} - 160px, 1280px), 1px) - 118px, 1px)`,
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    4146 +
                                                    100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    178 +
                                                    0 +
                                                    908 +
                                                    0,
                                                },
                                                Zp5Db0cjy: {
                                                  width: `max(max(min(${u?.width || `100vw`} - 32px, 1280px), 1px) - 66px, 1px)`,
                                                  y:
                                                    (u?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    4417 +
                                                    100 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    100 +
                                                    146 +
                                                    0 +
                                                    908 +
                                                    0,
                                                },
                                              },
                                              children: i(m, {
                                                height: 454,
                                                width: `max(max((max(min(${u?.width || `100vw`} - 160px, 1280px), 1px) - 112px) / 2, 1px) - 86px, 1px)`,
                                                y:
                                                  (u?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4517 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  100 +
                                                  0 +
                                                  908 +
                                                  0,
                                                children: i(f, {
                                                  className: `framer-1pky5qa-container`,
                                                  nodeId: `Z1NZbbrhE`,
                                                  scopeId: `hufRl3X2K`,
                                                  children: i(L, {
                                                    cC0wwxTAk: `01`,
                                                    height: `100%`,
                                                    id: `Z1NZbbrhE`,
                                                    layoutId: `Z1NZbbrhE`,
                                                    mKkijz_yZ: `8px 5px 8px 8px`,
                                                    PWko4QQ6a: `Set up workflows to send emails, create tasks, and trigger actions`,
                                                    style: { width: `100%` },
                                                    uVAnmzQWM: `Automate Follow-Ups`,
                                                    variant: U(`hadlklqS7`),
                                                    vSpPEMUJJ: q(
                                                      {
                                                        pixelHeight: 2734,
                                                        pixelWidth: 4096,
                                                        src: `../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY-5d1be3.jpg`,
                                                        srcSet: `../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY-aa9540.jpg 512w,../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY-f2b825.jpg 1024w,../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY.jpg 2048w,../../assets/images/gZ5fGCe9cYOrPHH2Ts1zDvDi3IY-5d1be3.jpg 4096w`,
                                                      },
                                                      `Three men having a discussion at a table with coffee and tablets.`
                                                    ),
                                                    width: `100%`,
                                                    yzFj167lx: {
                                                      borderBottomWidth: 0,
                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                      borderLeftWidth: 0,
                                                      borderRightWidth: 0,
                                                      borderStyle: `solid`,
                                                      borderTopWidth: 0,
                                                    },
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                        i(`section`, {
                          className: `framer-1wbg9yt`,
                          "data-framer-name": `Testimonial`,
                          children: o(`div`, {
                            className: `framer-ah81ij`,
                            "data-framer-name": `Container`,
                            children: [
                              o(B, {
                                __framer__animate: { transition: W },
                                __framer__animateOnce: !0,
                                __framer__enter: K,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-57qwsl`,
                                "data-framer-name": `Section title`,
                                children: [
                                  i(b, {
                                    breakpoint: _,
                                    overrides: {
                                      RIGpoQpJC: {
                                        y: (u?.y || 0) + 0 + 0 + 0 + 6026 + 80 + 0 + 0 + 0 + 0 + 0,
                                      },
                                      Zp5Db0cjy: {
                                        y: (u?.y || 0) + 0 + 0 + 0 + 6241 + 60 + 0 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: i(m, {
                                      height: 28,
                                      y: (u?.y || 0) + 0 + 0 + 0 + 6219 + 100 + 0 + 0 + 0 + 0 + 0,
                                      children: i(f, {
                                        className: `framer-gg6g7x-container`,
                                        nodeId: `VZ5RhbaNp`,
                                        scopeId: `hufRl3X2K`,
                                        children: i(P, {
                                          btyoXJXaz: Be,
                                          height: `100%`,
                                          id: `VZ5RhbaNp`,
                                          layoutId: `VZ5RhbaNp`,
                                          Selq1Epo8: `Testimonial`,
                                          variant: U(`mXdNMwppf`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  i(g, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
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
                                    className: `framer-ypy38`,
                                    "data-framer-name": `Trusted by teams that think in systems`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(`div`, {
                                className: `framer-1f9qbs7`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  De() &&
                                    i(m, {
                                      children: i(f, {
                                        className: `framer-19c8k8f-container hidden-gqpdue hidden-qzdkt5`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `pzYZvXIYo`,
                                        scopeId: `hufRl3X2K`,
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
                                          id: `pzYZvXIYo`,
                                          intervalControl: 1.5,
                                          itemAmount: 1,
                                          layoutId: `pzYZvXIYo`,
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
                                            i(m, {
                                              height: 546,
                                              width: `1280px`,
                                              children: i(f, {
                                                className: `framer-g9mfk7-container`,
                                                "data-framer-name": `Testimonial Card 1`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 1`,
                                                nodeId: `Q4Pmdo1Wb`,
                                                rendersWithMotion: !0,
                                                scopeId: `hufRl3X2K`,
                                                children: i(M, {
                                                  FJTqBi2KV: `AutoPerf`,
                                                  height: `100%`,
                                                  id: `Q4Pmdo1Wb`,
                                                  iEDAZpSS3: `Auto Performance`,
                                                  iwx62rpGT: `Founder, BrightLayer Digital`,
                                                  J5IwwRpSA: `“Our automated system streamlines workflows, removes repetitive tasks, and speeds up campaign deployment while keeping precise performance control.”`,
                                                  k3FDQtFQv: `52%`,
                                                  layoutId: `Q4Pmdo1Wb`,
                                                  name: `Testimonial Card 1`,
                                                  nJPHXQfwW: `Increase in campaign conversions`,
                                                  rsB2i43WZ: q(
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
                                                  variant: U(`ra6cRNcXv`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster campaign deployment`,
                                                }),
                                              }),
                                            }),
                                            i(m, {
                                              height: 546,
                                              width: `1280px`,
                                              children: i(f, {
                                                className: `framer-s27jc6-container`,
                                                "data-framer-name": `Testimonial Card 2`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 2`,
                                                nodeId: `yu5_SYxlw`,
                                                rendersWithMotion: !0,
                                                scopeId: `hufRl3X2K`,
                                                children: i(M, {
                                                  FJTqBi2KV: `CampEngine`,
                                                  G47lkWz6h: q(
                                                    {
                                                      pixelHeight: 2432,
                                                      pixelWidth: 2232,
                                                      src: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png`,
                                                      srcSet: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o.png 939w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-4cd58b.png 1879w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png 2232w`,
                                                    },
                                                    `Man Profile Image`
                                                  ),
                                                  height: `100%`,
                                                  id: `yu5_SYxlw`,
                                                  iEDAZpSS3: `Campaign Engine`,
                                                  iwx62rpGT: `Head of Growth, Nexora Media`,
                                                  J5IwwRpSA: `The optimization engine monitors performance metrics, reallocates budget automatically, and refines audience segments to ensure scalable campaign growth.`,
                                                  k3FDQtFQv: `48%`,
                                                  layoutId: `yu5_SYxlw`,
                                                  name: `Testimonial Card 2`,
                                                  nJPHXQfwW: `Increase in team productivity`,
                                                  rsB2i43WZ: q(
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
                                                  variant: U(`kZ3XQqCvF`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster reporting workflow`,
                                                }),
                                              }),
                                            }),
                                            i(m, {
                                              height: 546,
                                              width: `1280px`,
                                              children: i(f, {
                                                className: `framer-1hj15bi-container`,
                                                "data-framer-name": `Testimonial Card 3`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 3`,
                                                nodeId: `hUZPFIoUf`,
                                                rendersWithMotion: !0,
                                                scopeId: `hufRl3X2K`,
                                                children: i(M, {
                                                  FJTqBi2KV: `SmartAuto`,
                                                  G47lkWz6h: q(
                                                    {
                                                      pixelHeight: 1708,
                                                      pixelWidth: 1696,
                                                      src: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png`,
                                                      srcSet: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE.png 1016w,../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png 1696w`,
                                                    },
                                                    `Man Profile Image`
                                                  ),
                                                  height: `100%`,
                                                  id: `hUZPFIoUf`,
                                                  iEDAZpSS3: `Smart Automation`,
                                                  iwx62rpGT: `Marketing Director, Elevate Labs`,
                                                  J5IwwRpSA: `This intelligent system analyzes real-time data, adjusts targeting strategies instantly, and maximizes return on investment without constant manual intervention from teams.`,
                                                  k3FDQtFQv: `61%`,
                                                  layoutId: `hUZPFIoUf`,
                                                  name: `Testimonial Card 3`,
                                                  nJPHXQfwW: `Improvement in campaign ROI`,
                                                  rsB2i43WZ: q(
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
                                                  variant: U(`SyRKRfloD`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster decision-making`,
                                                }),
                                              }),
                                            }),
                                            i(m, {
                                              height: 546,
                                              width: `1280px`,
                                              children: i(f, {
                                                className: `framer-yn0fhx-container`,
                                                "data-framer-name": `Testimonial Card 4`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 4`,
                                                nodeId: `qSkIvEI1E`,
                                                rendersWithMotion: !0,
                                                scopeId: `hufRl3X2K`,
                                                children: i(M, {
                                                  FJTqBi2KV: `Agencies`,
                                                  G47lkWz6h: q(
                                                    {
                                                      pixelHeight: 1708,
                                                      pixelWidth: 1696,
                                                      src: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png`,
                                                      srcSet: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg.png 1016w,../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png 1696w`,
                                                    },
                                                    `Man Profile Imagez`
                                                  ),
                                                  height: `100%`,
                                                  id: `qSkIvEI1E`,
                                                  iEDAZpSS3: `AI Campaign Automation`,
                                                  iwx62rpGT: `Founder, AdNova Digital`,
                                                  J5IwwRpSA: `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
                                                  k3FDQtFQv: `55%`,
                                                  layoutId: `qSkIvEI1E`,
                                                  name: `Testimonial Card 4`,
                                                  nJPHXQfwW: `Reduction in ad spend waste`,
                                                  style: { width: `100%` },
                                                  tXLgOvUs3: `Ethan Walker`,
                                                  U1WzZWWko: `4X`,
                                                  variant: U(`UiFZL4kB0`),
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
                                  Oe() &&
                                    i(m, {
                                      children: i(f, {
                                        className: `framer-j3kl1r-container hidden-fnl47z`,
                                        "data-framer-name": `Slideshow for Small Device`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        name: `Slideshow for Small Device`,
                                        nodeId: `ObXC8rWYP`,
                                        scopeId: `hufRl3X2K`,
                                        children: i(b, {
                                          breakpoint: _,
                                          overrides: { Zp5Db0cjy: { dragControl: !0 } },
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
                                            id: `ObXC8rWYP`,
                                            intervalControl: 1.5,
                                            itemAmount: 1,
                                            layoutId: `ObXC8rWYP`,
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
                                              i(m, {
                                                height: 546,
                                                width: `810px`,
                                                children: i(f, {
                                                  className: `framer-1a9ojpj-container`,
                                                  "data-framer-name": `Testimonial Card P1`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P1`,
                                                  nodeId: `S5uhjxHna`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `hufRl3X2K`,
                                                  children: i(M, {
                                                    FJTqBi2KV: `AutoPerf`,
                                                    height: `100%`,
                                                    id: `S5uhjxHna`,
                                                    iEDAZpSS3: `Auto Performance`,
                                                    iwx62rpGT: `Founder, BrightLayer Digital`,
                                                    J5IwwRpSA: `“Our automated system streamlines workflows, removes repetitive tasks, and speeds up campaign deployment while keeping precise performance control.”`,
                                                    k3FDQtFQv: `52%`,
                                                    layoutId: `S5uhjxHna`,
                                                    name: `Testimonial Card P1`,
                                                    nJPHXQfwW: `Increase in campaign conversions`,
                                                    rsB2i43WZ: q(
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
                                                    variant: U(`kai7Cuvgi`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster campaign deployment`,
                                                  }),
                                                }),
                                              }),
                                              i(m, {
                                                height: 546,
                                                width: `810px`,
                                                children: i(f, {
                                                  className: `framer-1a6log4-container`,
                                                  "data-framer-name": `Testimonial Card P2`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P2`,
                                                  nodeId: `hE4OCc6XU`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `hufRl3X2K`,
                                                  children: i(M, {
                                                    FJTqBi2KV: `CampEngine`,
                                                    G47lkWz6h: q(
                                                      {
                                                        pixelHeight: 2432,
                                                        pixelWidth: 2232,
                                                        src: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png`,
                                                        srcSet: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o.png 939w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-4cd58b.png 1879w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png 2232w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `hE4OCc6XU`,
                                                    iEDAZpSS3: `Campaign Engine`,
                                                    iwx62rpGT: `Head of Growth, Nexora Media`,
                                                    J5IwwRpSA: `The optimization engine monitors performance metrics, reallocates budget automatically, and refines audience segments to ensure scalable campaign growth.`,
                                                    k3FDQtFQv: `48%`,
                                                    layoutId: `hE4OCc6XU`,
                                                    name: `Testimonial Card P2`,
                                                    nJPHXQfwW: `Increase in team productivity`,
                                                    rsB2i43WZ: q(
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
                                                    variant: U(`GiDS5c_9T`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster reporting workflow`,
                                                  }),
                                                }),
                                              }),
                                              i(m, {
                                                height: 546,
                                                width: `810px`,
                                                children: i(f, {
                                                  className: `framer-n76jfg-container`,
                                                  "data-framer-name": `Testimonial Card P3`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P3`,
                                                  nodeId: `CFrNoG4Np`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `hufRl3X2K`,
                                                  children: i(M, {
                                                    FJTqBi2KV: `SmartAuto`,
                                                    G47lkWz6h: q(
                                                      {
                                                        pixelHeight: 1708,
                                                        pixelWidth: 1696,
                                                        src: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png`,
                                                        srcSet: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE.png 1016w,../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png 1696w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `CFrNoG4Np`,
                                                    iEDAZpSS3: `Smart Automation`,
                                                    iwx62rpGT: `Marketing Director, Elevate Labs`,
                                                    J5IwwRpSA: `This intelligent system analyzes real-time data, adjusts targeting strategies instantly, and maximizes return on investment without constant manual intervention from teams.`,
                                                    k3FDQtFQv: `61%`,
                                                    layoutId: `CFrNoG4Np`,
                                                    name: `Testimonial Card P3`,
                                                    nJPHXQfwW: `Improvement in campaign ROI`,
                                                    rsB2i43WZ: q(
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
                                                    variant: U(`DT0oeOjRz`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster decision-making`,
                                                  }),
                                                }),
                                              }),
                                              i(m, {
                                                height: 546,
                                                width: `810px`,
                                                children: i(f, {
                                                  className: `framer-1bi0tsn-container`,
                                                  "data-framer-name": `Testimonial Card P4`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P4`,
                                                  nodeId: `X_gSi96CP`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `hufRl3X2K`,
                                                  children: i(M, {
                                                    FJTqBi2KV: `Agencies`,
                                                    G47lkWz6h: q(
                                                      {
                                                        pixelHeight: 1708,
                                                        pixelWidth: 1696,
                                                        src: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png`,
                                                        srcSet: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg.png 1016w,../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png 1696w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `X_gSi96CP`,
                                                    iEDAZpSS3: `AI Campaign Automation`,
                                                    iwx62rpGT: `Founder, AdNova Digital`,
                                                    J5IwwRpSA: `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
                                                    k3FDQtFQv: `55%`,
                                                    layoutId: `X_gSi96CP`,
                                                    name: `Testimonial Card P4`,
                                                    nJPHXQfwW: `Reduction in ad spend waste`,
                                                    style: { width: `100%` },
                                                    tXLgOvUs3: `Ethan Walker`,
                                                    U1WzZWWko: `4X`,
                                                    variant: U(`zww_hjqbb`),
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
                                    className: `framer-1q9nuuy`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-19tncuz`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  i(`div`, {
                                    className: `framer-m4rcjh`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1nx1zi0`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1p3c091`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1bfdcka`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  i(`div`, {
                                    className: `framer-1s2t169`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  i(`div`, {
                                    className: `framer-herq58`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i(b, {
                          breakpoint: _,
                          overrides: {
                            RIGpoQpJC: { y: (u?.y || 0) + 0 + 0 + 0 + 7112 },
                            Zp5Db0cjy: { y: (u?.y || 0) + 0 + 0 + 0 + 7315 },
                          },
                          children: i(m, {
                            height: 802,
                            width: u?.width || `100vw`,
                            y: (u?.y || 0) + 0 + 0 + 0 + 7168,
                            children: i(f, {
                              className: `framer-zin0jp-container`,
                              nodeId: `unyxY8AvM`,
                              scopeId: `hufRl3X2K`,
                              children: i(b, {
                                breakpoint: _,
                                overrides: {
                                  RIGpoQpJC: { variant: U(`HDUioys2A`) },
                                  Zp5Db0cjy: { variant: U(`xF5lKzz8e`) },
                                },
                                children: i(I, {
                                  height: `100%`,
                                  id: `unyxY8AvM`,
                                  layoutId: `unyxY8AvM`,
                                  style: { width: `100%` },
                                  variant: U(`QXixqdn2a`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        i(b, {
                          breakpoint: _,
                          overrides: {
                            RIGpoQpJC: { y: (u?.y || 0) + 0 + 0 + 0 + 7914 },
                            Zp5Db0cjy: { y: (u?.y || 0) + 0 + 0 + 0 + 8117 },
                          },
                          children: i(m, {
                            height: 848,
                            width: u?.width || `100vw`,
                            y: (u?.y || 0) + 0 + 0 + 0 + 7970,
                            children: i(f, {
                              className: `framer-lw9kel-container`,
                              nodeId: `LH7UTW4gM`,
                              scopeId: `hufRl3X2K`,
                              children: i(b, {
                                breakpoint: _,
                                overrides: {
                                  RIGpoQpJC: { variant: U(`eZeHfWXpY`) },
                                  Zp5Db0cjy: { variant: U(`eD1hZ1m9l`) },
                                },
                                children: i(F, {
                                  height: `100%`,
                                  id: `LH7UTW4gM`,
                                  layoutId: `LH7UTW4gM`,
                                  style: { width: `100%` },
                                  variant: U(`Nn0_sUYi2`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    i(m, {
                      children: i(f, {
                        className: `framer-q9mva2-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: w,
                        nodeId: `YwXSZaPE1`,
                        scopeId: `hufRl3X2K`,
                        children: i(Se, {
                          height: `100%`,
                          id: `YwXSZaPE1`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `YwXSZaPE1`,
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
        `.framer-6023y.framer-1lz7op1, .framer-6023y .framer-1lz7op1 { display: block; }`,
        `.framer-6023y.framer-fnl47z { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-6023y .framer-z1glts { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1s8gvx7 { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 0px 16px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1j7j24p { align-content: center; align-items: center; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1147px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6023y .framer-2riuoh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 53px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 176px 0px 602px 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-lznfg5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 720px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-102ka7n-container, .framer-6023y .framer-dymf8a-container, .framer-6023y .framer-19mb6gy-container, .framer-6023y .framer-1yh3a89-container, .framer-6023y .framer-7anwn-container, .framer-6023y .framer-gg6g7x-container, .framer-6023y .framer-q9mva2-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-6023y .framer-1fpootq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-shzj48 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-13s63r9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-12thgtg { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-6023y .framer-xfgcux { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6023y .framer-1258x5z, .framer-6023y .framer-abvqlk { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-6023y .framer-gsejv3 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 550px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6023y .framer-exjgr7-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6023y .framer-cgpzou { --border-bottom-width: 10px; --border-color: var(--token-a07d1ed9-425c-4a31-a256-9e3eb7b18cbd, rgba(225, 129, 65, 0.08)); --border-left-width: 10px; --border-right-width: 10px; --border-style: solid; --border-top-width: 10px; align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 688px; justify-content: center; left: calc(51.491477272727295% - min(1200px, 1168px) / 2); max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 10px 10px 0px 10px; position: absolute; top: calc(83.76963350785343% - 688px / 2); width: 1168px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-6023y .framer-wz3oa9 { border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-6023y .framer-1heqjpp, .framer-6023y .framer-12fivdt { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-qp7mbk, .framer-6023y .framer-tq2fwh { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-2hxv4i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1yurwtt, .framer-6023y .framer-skgbyc { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6023y .framer-1cmlfak, .framer-6023y .framer-102kwjz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1kidy3y, .framer-6023y .framer-1z0xzrq { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 97%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-6023y .framer-1ra3ogi, .framer-6023y .framer-hjiy2 { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-6023y .framer-14q4rmc { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 71.62162162162163%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 99.54954954954955%); flex: none; height: 180%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 180% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-19a54pa { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 84%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 180%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.00000000000002% - 180% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-17o6chm, .framer-6023y .framer-1soh7ny { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-kl0ck3, .framer-6023y .framer-1rbh11h { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-g0moo1, .framer-6023y .framer-so6m38 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-g0l00, .framer-6023y .framer-19w5rs9 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-1v4yqmr { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 48px 120px 28px 40px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-16r566m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1nyvwg0, .framer-6023y .framer-d1qn03, .framer-6023y .framer-l3eagm { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6023y .framer-tkk1on { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-9w30df { flex: none; height: 18px; position: relative; width: 108px; }`,
        `.framer-6023y .framer-utgwa7 { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 28px 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-1vqk9ea, .framer-6023y .framer-mvt2p0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 72px 0px 42px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1m7cmvb { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 18.01801801801802%, rgba(0, 0, 0, 0.82432) 82.43243243243244%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 18.01801801801802%, rgba(0, 0, 0, 0.82432) 82.43243243243244%, rgba(0, 0, 0, 0) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-1fwbvze, .framer-6023y .framer-wwku0z { aspect-ratio: 4.6484375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); overflow: visible; position: relative; width: 149px; }`,
        `.framer-6023y .framer-4lpmjh, .framer-6023y .framer-12hnkpa { aspect-ratio: 4.5078125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 31px); overflow: visible; position: relative; width: 144px; }`,
        `.framer-6023y .framer-m4h142 { aspect-ratio: 4.7109375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); overflow: visible; position: relative; width: 151px; }`,
        `.framer-6023y .framer-1dnxmtl { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-6023y .framer-byn7cp { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 13.963963963963963%, rgba(0, 0, 0, 0.87387) 87.38738738738738%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 13.963963963963963%, rgba(0, 0, 0, 0.87387) 87.38738738738738%, rgba(0, 0, 0, 0) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-1gemy8q, .framer-6023y .framer-wes9jj { aspect-ratio: 4.6484375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 149px; }`,
        `.framer-6023y .framer-2f1f16 { aspect-ratio: 4.7109375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 151px; }`,
        `.framer-6023y .framer-8nsjh7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-13o8x3c, .framer-6023y .framer-1q9nuuy { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-6023y .framer-1xy9d0x { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -4px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-1qve4hf, .framer-6023y .framer-m4rcjh { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-6023y .framer-j1rnbb, .framer-6023y .framer-vpmq3t, .framer-6023y .framer-1nx1zi0 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -4px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-2zq1pk, .framer-6023y .framer-fzm7m2 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -4px; flex: none; height: 9px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-1j5usyl, .framer-6023y .framer-1v8k0cj { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -4px; flex: none; height: 9px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-2bqp5x { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 130%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-1kelcpp { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 10%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 92.7927927927928%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 130%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-1r4pw27 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px 0px 0px 32px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-1xvbqjm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 48px 0px 48px 0px; position: sticky; top: 150px; width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-ahx9nv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 600px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-5arf6m { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; display: grid; flex: 1 0 0px; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-7qq6s-container, .framer-6023y .framer-mp9gc1-container, .framer-6023y .framer-1h3a7o2-container, .framer-6023y .framer-gz3b5-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-6023y .framer-9cluls { align-content: center; align-items: center; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1fh2jha { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-f8qtgt { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 700px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1k0cfjr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-kyha1l { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; display: grid; flex: 1 0 0px; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-17bmzg4-container, .framer-6023y .framer-1hqe79z-container, .framer-6023y .framer-1k67ox9-container, .framer-6023y .framer-rhug7f-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1dt5uz { background: linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-6023y .framer-f8l0yk { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-144skio { background: linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-6023y .framer-1nqtxzq { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 130%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-o7av6b { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 11.711711711711711%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 94.14414414414415%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 130%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-mz830u { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-3vswua, .framer-6023y .framer-ah81ij { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-ubw5nd { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 9%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 99.54954954954955%); flex: none; height: 110%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 110.00000000000001% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-17mnq2f { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 10%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 92%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 110%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.00000000000002% - 110.00000000000001% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-1v9vrbz { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 40px 32px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-53doak { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-lfqn9t, .framer-6023y .framer-ypy38 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-6023y .framer-nli42u { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-6023y .framer-ww31yh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-8cbfp0, .framer-6023y .framer-et8xdu, .framer-6023y .framer-r90436 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 54px; }`,
        `.framer-6023y .framer-go02eu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 16px 0px 0px 0px; position: relative; width: min-content; }`,
        `.framer-6023y .framer-jnmp6n { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 48px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 48px; }`,
        `.framer-6023y .framer-9p5x7h, .framer-6023y .framer-ub5bzs, .framer-6023y .framer-3dabs6 { align-content: center; align-items: center; aspect-ratio: 1 / 1; border-bottom-left-radius: 24%; border-bottom-right-radius: 24%; border-top-left-radius: 24%; border-top-right-radius: 24%; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 48px); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-6023y .framer-1uxs6i2, .framer-6023y .framer-1cko6re, .framer-6023y .framer-1qxx6a6 { align-content: center; align-items: center; background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 0; }`,
        `.framer-6023y .framer-qfrluc, .framer-6023y .framer-1hvvvf0, .framer-6023y .framer-p00u5z { background-color: var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, #ec6f10); border-bottom-left-radius: 99px; border-bottom-right-radius: 99px; flex: 1 0 0px; height: 1px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-6023y .framer-bao7fq-container, .framer-6023y .framer-e591n9-container, .framer-6023y .framer-1pky5qa-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-6023y .framer-1ewb1hl, .framer-6023y .framer-1fb845o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-5gg5nj, .framer-6023y .framer-tq72lk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-6023y .framer-u5l6et, .framer-6023y .framer-1bz177l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 48px; }`,
        `.framer-6023y .framer-1wbg9yt { align-content: center; align-items: center; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 80px 120px 80px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-57qwsl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 540px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1f9qbs7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-19c8k8f-container { flex: none; height: 543px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-g9mfk7-container, .framer-6023y .framer-s27jc6-container, .framer-6023y .framer-1hj15bi-container, .framer-6023y .framer-yn0fhx-container { height: auto; position: relative; width: 1280px; }`,
        `.framer-6023y .framer-j3kl1r-container { flex: none; height: 837px; position: relative; width: 100%; }`,
        `.framer-6023y .framer-1a9ojpj-container, .framer-6023y .framer-1a6log4-container, .framer-6023y .framer-n76jfg-container, .framer-6023y .framer-1bi0tsn-container { height: auto; position: relative; width: 810px; }`,
        `.framer-6023y .framer-19tncuz { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; left: -5px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-1p3c091 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 9px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-1bfdcka { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 9px; left: -5px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-6023y .framer-1s2t169 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 7.000000000000001%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 93%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.89561586638833% - 119.93355481727575% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-herq58 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 7.000000000000001%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 93%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 119.93355481727575% / 2); width: 1px; z-index: 1; }`,
        `.framer-6023y .framer-zin0jp-container, .framer-6023y .framer-lw9kel-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...Ye,
        ...Ge,
        ...Ce,
        ...De,
        ...D,
        ...Ie,
        `.framer-6023y[data-border="true"]::after, .framer-6023y [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-6023y.framer-fnl47z { width: 810px; } .framer-6023y .framer-1j7j24p { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; height: 911px; } .framer-6023y .framer-2riuoh { padding: 176px 0px 366px 0px; } .framer-6023y .framer-cgpzou { height: 370px; left: calc(50.00000000000002% - min(1200px, 720px) / 2); top: calc(85.16483516483518% - 370px / 2); width: 720px; } .framer-6023y .framer-wz3oa9, .framer-6023y .framer-13o8x3c { order: 0; } .framer-6023y .framer-1heqjpp, .framer-6023y .framer-12fivdt, .framer-6023y .framer-9cluls { padding: 80px 40px 80px 40px; } .framer-6023y .framer-qp7mbk { gap: 40px; } .framer-6023y .framer-1cmlfak, .framer-6023y .framer-8nsjh7, .framer-6023y .framer-1k0cfjr, .framer-6023y .framer-1v9vrbz { flex-direction: column; } .framer-6023y .framer-14q4rmc { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 10%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 52%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 92%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 99.54954954954955%); height: 120%; top: calc(50.00000000000002% - 120% / 2); } .framer-6023y .framer-19a54pa { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 6%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 93%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); height: 120%; top: calc(50.00000000000002% - 120% / 2); } .framer-6023y .framer-1v4yqmr { --border-right-width: 0px; align-content: center; align-items: center; flex: none; max-width: 1440px; width: 100%; } .framer-6023y .framer-utgwa7 { --border-right-width: 0px; --border-top-width: 1px; flex: none; width: 100%; } .framer-6023y .framer-1fwbvze, .framer-6023y .framer-4lpmjh, .framer-6023y .framer-m4h142, .framer-6023y .framer-wwku0z, .framer-6023y .framer-12hnkpa { height: var(--framer-aspect-ratio-supported, 32px); } .framer-6023y .framer-1xy9d0x { order: 2; } .framer-6023y .framer-1qve4hf { order: 3; } .framer-6023y .framer-j1rnbb { order: 4; } .framer-6023y .framer-2zq1pk { order: 5; } .framer-6023y .framer-1j5usyl { order: 6; } .framer-6023y .framer-2bqp5x { order: 7; } .framer-6023y .framer-1kelcpp { height: 120%; order: 8; top: calc(50.10438413361171% - 120% / 2); } .framer-6023y .framer-1r4pw27 { flex: none; flex-direction: column; order: 1; padding: 0px; width: 100%; } .framer-6023y .framer-1xvbqjm { flex: none; padding: 48px 32px 0px 32px; position: relative; top: unset; width: 100%; } .framer-6023y .framer-5arf6m { flex: none; grid-template-columns: repeat(2, minmax(50px, 1fr)); width: 100%; } .framer-6023y .framer-kyha1l, .framer-6023y .framer-nli42u { flex: none; width: 100%; } .framer-6023y .framer-o7av6b { height: 120%; top: calc(50.10438413361171% - 120% / 2); } .framer-6023y .framer-53doak { align-content: center; align-items: center; flex: none; justify-content: center; width: 100%; } .framer-6023y .framer-1wbg9yt { padding: 80px 40px 120px 40px; } .framer-6023y .framer-57qwsl { max-width: 500px; } .framer-6023y .framer-j3kl1r-container { height: 700px; } .framer-6023y .framer-1s2t169 { height: 110%; top: calc(49.89561586638833% - 110.00000000000001% / 2); } .framer-6023y .framer-herq58 { height: 110%; top: calc(50.10438413361171% - 110.00000000000001% / 2); }}`,
        `@media (max-width: 809.98px) { .framer-6023y.framer-fnl47z { width: 390px; } .framer-6023y .framer-1s8gvx7 { justify-content: flex-start; order: 0; padding: 8px 8px 0px 8px; } .framer-6023y .framer-1j7j24p { align-self: stretch; border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; height: auto; order: 0; } .framer-6023y .framer-2riuoh { gap: 48px; padding: 116px 16px 40px 16px; } .framer-6023y .framer-xfgcux { flex-wrap: wrap; gap: 0px 12px; } .framer-6023y .framer-exjgr7-container { width: 100%; } .framer-6023y .framer-cgpzou { --border-bottom-width: 2px; --border-left-width: 2px; --border-right-width: 2px; --border-top-width: 2px; aspect-ratio: 1.7720207253886011 / 1; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; height: var(--framer-aspect-ratio-supported, 193px); left: unset; padding: 2px; position: relative; top: unset; width: 100%; } .framer-6023y .framer-wz3oa9 { border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; order: 0; } .framer-6023y .framer-1heqjpp { order: 1; padding: 60px 16px 60px 16px; } .framer-6023y .framer-qp7mbk { gap: 24px; } .framer-6023y .framer-1cmlfak, .framer-6023y .framer-8nsjh7, .framer-6023y .framer-1k0cfjr { flex-direction: column; } .framer-6023y .framer-14q4rmc, .framer-6023y .framer-19a54pa { height: 130%; top: calc(50.00000000000002% - 130% / 2); } .framer-6023y .framer-17o6chm, .framer-6023y .framer-1xy9d0x, .framer-6023y .framer-f8l0yk, .framer-6023y .framer-19tncuz { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: 7px; left: -3px; top: -3px; width: 7px; } .framer-6023y .framer-kl0ck3, .framer-6023y .framer-j1rnbb, .framer-6023y .framer-vpmq3t, .framer-6023y .framer-1nx1zi0 { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: 7px; right: -3px; top: -3px; width: 7px; } .framer-6023y .framer-g0moo1, .framer-6023y .framer-2zq1pk, .framer-6023y .framer-fzm7m2, .framer-6023y .framer-1p3c091 { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; right: -3px; width: 7px; } .framer-6023y .framer-g0l00, .framer-6023y .framer-1j5usyl, .framer-6023y .framer-1v8k0cj, .framer-6023y .framer-1bfdcka { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; left: -3px; width: 7px; } .framer-6023y .framer-1v4yqmr { flex: none; max-width: 700px; padding: 24px; width: 100%; } .framer-6023y .framer-utgwa7 { --border-top-width: 1px; flex: none; gap: 13px; padding: 24px 0px 24px 0px; width: 100%; } .framer-6023y .framer-1vqk9ea, .framer-6023y .framer-mvt2p0 { padding: 0px 24px 0px 24px; } .framer-6023y .framer-1fwbvze, .framer-6023y .framer-4lpmjh, .framer-6023y .framer-m4h142, .framer-6023y .framer-wwku0z, .framer-6023y .framer-12hnkpa { height: var(--framer-aspect-ratio-supported, 32px); } .framer-6023y .framer-12fivdt { order: 2; padding: 60px 16px 60px 16px; } .framer-6023y .framer-2bqp5x, .framer-6023y .framer-1nqtxzq { height: 110%; top: calc(50.00000000000002% - 110.00000000000001% / 2); } .framer-6023y .framer-1kelcpp, .framer-6023y .framer-o7av6b { height: 110%; top: calc(50.10438413361171% - 110.00000000000001% / 2); } .framer-6023y .framer-1r4pw27 { flex: none; flex-direction: column; gap: 48px; padding: 0px; width: 100%; } .framer-6023y .framer-1xvbqjm { flex: none; gap: 24px; padding: 24px; position: relative; top: unset; width: 100%; } .framer-6023y .framer-ahx9nv { gap: 16px; max-width: 400px; } .framer-6023y .framer-l3eagm { --framer-text-wrap-override: balance; } .framer-6023y .framer-5arf6m, .framer-6023y .framer-nli42u { flex: none; width: 100%; } .framer-6023y .framer-9cluls { order: 3; padding: 60px 16px 60px 16px; } .framer-6023y .framer-tq2fwh { gap: 48px; } .framer-6023y .framer-1fh2jha, .framer-6023y .framer-ww31yh, .framer-6023y .framer-1ewb1hl, .framer-6023y .framer-1fb845o { gap: 16px; } .framer-6023y .framer-kyha1l { flex: none; grid-template-columns: repeat(1, minmax(50px, 1fr)); width: 100%; } .framer-6023y .framer-mz830u { order: 4; padding: 100px 16px 100px 16px; } .framer-6023y .framer-1v9vrbz { flex-direction: column; gap: 48px; padding: 100px 0px 16px 16px; } .framer-6023y .framer-53doak { align-content: center; align-items: center; flex: none; justify-content: center; width: 100%; } .framer-6023y .framer-8cbfp0, .framer-6023y .framer-et8xdu, .framer-6023y .framer-r90436 { width: 34px; } .framer-6023y .framer-jnmp6n, .framer-6023y .framer-9p5x7h, .framer-6023y .framer-ub5bzs, .framer-6023y .framer-3dabs6 { height: var(--framer-aspect-ratio-supported, 32px); width: 32px; } .framer-6023y .framer-u5l6et, .framer-6023y .framer-1bz177l { height: 32px; width: 32px; } .framer-6023y .framer-1wbg9yt { order: 5; padding: 60px 16px 100px 16px; } .framer-6023y .framer-ah81ij { gap: 40px; } .framer-6023y .framer-j3kl1r-container { height: 768px; } .framer-6023y .framer-zin0jp-container { order: 6; } .framer-6023y .framer-lw9kel-container { order: 7; }}`,
      ],
      `framer-6023y`
    )),
    (Pt = $),
    ($.displayName = `Product Single`),
    ($.defaultProps = { height: 9574, width: 1440 }),
    le(
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
        ...ut,
        ...ft,
        ...mt,
        ...ht,
        ...gt,
        ..._t,
        ...vt,
        ...yt,
        ...bt,
        ...xt,
        ...St,
        ...u(Xe),
        ...u(Ke),
        ...u(be),
        ...u(Oe),
        ...u(Te),
        ...u(Le),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => (
        t.locale,
        Promise.allSettled([
          S(P, {}, t),
          S(N, {}, t),
          S(k, {}, t),
          S(A, {}, t),
          S(R, {}, t),
          S(L, {}, t),
          S(M, {}, t),
          S(I, {}, t),
          S(F, {}, t),
        ])
      ),
    }),
    (Ft = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerhufRl3X2K`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1440`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"RIGpoQpJC":{"layout":["fixed","auto"]},"Zp5Db0cjy":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `{"IPQU_O1QJ":{"pattern":":IPQU_O1QJ","name":"our-story-1"},"IXJooI3aK":{"pattern":":IXJooI3aK","name":"our-story-2"},"FhlqV5cNj":{"pattern":":FhlqV5cNj","name":"our-story-3"}}`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `9574`,
            framerContractVersion: `1`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ft as __FramerMetadata__, Pt as default, wt as queryParamNames };
//# sourceMappingURL=BnsDWkAfyqV-wJeTXZ8dglnuwq53Wp6ZSBLvbvis7mI.0RykKW8K.mjs.map
