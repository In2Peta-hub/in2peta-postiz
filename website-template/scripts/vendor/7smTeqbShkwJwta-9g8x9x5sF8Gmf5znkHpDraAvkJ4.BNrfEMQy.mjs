import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  A as t,
  L as n,
  O as r,
  P as i,
  R as a,
  T as o,
  _ as s,
  b as c,
  c as ee,
  j as l,
  l as u,
  s as d,
  u as f,
  z as p,
} from "./react.C83sJsFz.mjs";
import { E as m, a as h, r as g, t as _ } from "./motion.DVY4-TFg.mjs";
import {
  C as v,
  Ct as y,
  Dt as b,
  Et as x,
  G as S,
  J as C,
  K as w,
  L as T,
  N as E,
  O as te,
  P as D,
  Q as O,
  Tt as k,
  _t as A,
  a as j,
  at as M,
  b as ne,
  bt as re,
  dt as ie,
  f as ae,
  ft as oe,
  gt as se,
  ht as ce,
  i as N,
  k as P,
  kt as F,
  m as le,
  mt as ue,
  n as de,
  o as I,
  q as L,
  vt as fe,
  w as R,
  y as pe,
  yt as me,
  z,
} from "./framer.CFqKih1k.mjs";
import {
  a as he,
  c as B,
  d as ge,
  f as _e,
  i as ve,
  l as ye,
  o as V,
  r as be,
  s as xe,
  u as Se,
} from "./shared-lib.P4JA4aUc.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./kumYuXBDg.BDiDl76I.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./SUQaOk4ze.9vdOYSbE.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./cPVM1_Pc1.CsfRepwj.mjs";
import { n as Fe, t as H } from "./LULlC_Twp.tHxtAzPG.mjs";
import { i as Ie, r as Le } from "./kMLIh8Wrw.D1c-0SWh.mjs";
import { n as Re, t as ze } from "./RYbbKkijH.C2ni4dhN.mjs";
import { n as Be, t as Ve } from "./UIo2eoFvP.DkeJW8C_.mjs";
import {
  a as He,
  c as Ue,
  i as We,
  l as U,
  n as Ge,
  o as Ke,
  r as qe,
  s as Je,
  t as Ye,
  u as Xe,
} from "./S3SycdU06.6zsgfc_5.mjs";
import { a as Ze, i as Qe } from "./ekxIMAgLO.BaSq-aqc.mjs";
function W(e) {
  let {
      containerStyle: t,
      paddingStyle: n,
      topLeftPadding: r,
      topRightPadding: i,
      bottomRightPadding: o,
      bottomLeftPadding: s,
      isMixedPadding: c = !1,
      service: ee,
      backgroundColor: l,
      uploadedIcon: d,
      iconSize: f,
    } = e,
    {
      borderWidth: m,
      borderColor: h,
      radius: g,
      isMixedRadius: _,
      topLeftRadius: v,
      topRightRadius: y,
      bottomRightRadius: b,
      bottomLeftRadius: x,
    } = t,
    S = _ ? `${v}px ${y}px ${b}px ${x}px` : `${g}px`,
    C = c ? `${r}px ${i}px ${o}px ${s}px` : `${n}px`,
    w = {
      width: `auto`,
      height: `auto`,
      border: `${m}px solid ${h}`,
      padding: C,
      borderRadius: S,
      backgroundColor: l,
      cursor: `pointer`,
      transition: `opacity 0.3s`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    },
    T = () => {
      let e = p.location.href,
        t = ``;
      switch (ee) {
        case `Twitter`:
        case `X (Twitter)`:
          t = `https://twitter.com/intent/tweet?url=${encodeURIComponent(e)}`;
          break;
        case `LinkedIn`:
          t = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e)}`;
          break;
        case `Facebook`:
          t = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e)}`;
          break;
        case `WhatsApp`:
          t = `https://wa.me/?text=${encodeURIComponent(e)}`;
          break;
        case `Reddit`:
          t = `https://www.reddit.com/submit?url=${encodeURIComponent(e)}`;
          break;
        case `Pinterest`:
          t = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(e)}`;
          break;
        case `Telegram`:
          t = `https://t.me/share/url?url=${encodeURIComponent(e)}`;
          break;
        case `Email`:
          t = `mailto:?body=${encodeURIComponent(e)}`;
          break;
        case `Copy To Clipboard`:
          a.clipboard
            .writeText(e)
            .then(() => {
              alert(`URL copied to clipboard`);
            })
            .catch((e) => {
              console.error(`Could not copy text: `, e);
            });
          return;
        default:
          t = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e)}`;
      }
      p.open(t, `_blank`);
    },
    E = d?.src
      ? d
      : {
          src: `https://framerusercontent.com/images/AKiKExb2zMNepi3mCDBIpmsCYY.svg`,
          alt: `Default share icon`,
        };
  return u(`div`, {
    style: w,
    onClick: T,
    onMouseEnter: (e) => (e.currentTarget.style.opacity = `0.8`),
    onMouseLeave: (e) => (e.currentTarget.style.opacity = `1`),
    children: u(`img`, {
      src: E.src,
      alt: E.alt,
      srcSet: E.srcSet,
      style: { width: f, height: f, objectFit: `contain` },
    }),
  });
}
var $e = e(() => {
  (n(),
    d(),
    O(),
    (W.defaultProps = {
      service: `Facebook`,
      backgroundColor: `#333`,
      containerStyle: { borderWidth: 1, borderColor: `#333` },
      uuploadedIcon: {
        src: `https://framerusercontent.com/images/AKiKExb2zMNepi3mCDBIpmsCYY.svg`,
        alt: `Default share icon`,
      },
      iconSize: 24,
    }),
    D(W, {
      service: {
        type: I.Enum,
        title: `Service`,
        options: [
          `Facebook`,
          `Twitter`,
          `LinkedIn`,
          `WhatsApp`,
          `Email`,
          `Copy to clipboard`,
          `Reddit`,
          `Pinterest`,
          `Telegram`,
        ],
      },
      uploadedIcon: { type: I.ResponsiveImage, title: `Custom Icon` },
      iconSize: { type: I.Number, title: `Icon Size`, min: 8, max: 100, step: 1 },
      backgroundColor: { title: `Background Color`, type: I.Color, defaultValue: `#333` },
      containerStyle: {
        type: I.Object,
        title: `Border`,
        controls: {
          borderWidth: {
            title: `Border Width`,
            type: I.Number,
            defaultValue: 1,
            min: 0,
            max: 20,
            unit: `px`,
          },
          borderColor: { title: `Border Color`, type: I.Color, defaultValue: `#000000` },
          radius: {
            type: I.FusedNumber,
            title: `Border Radius`,
            defaultValue: 8,
            toggleKey: `isMixedRadius`,
            toggleTitles: [`All`, `Individual`],
            valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
            valueLabels: [`TR`, `BR`, `BL`, `TL`],
            min: 0,
          },
        },
      },
      paddingStyle: {
        type: I.FusedNumber,
        title: `Padding`,
        defaultValue: 16,
        toggleKey: `isMixedPadding`,
        toggleTitles: [`All`, `Individual`],
        valueKeys: [`topLeftPadding`, `topRightPadding`, `bottomRightPadding`, `bottomLeftPadding`],
        valueLabels: [`TR`, `BR`, `BL`, `TL`],
        min: 0,
        description: `[clicks.supply](https://clicks.supply/) is a collection of premium Framer templates, clonables, and tutorials to help you build better Framer websites.`,
      },
    }));
});
function et(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  G,
  K,
  ut = e(() => {
    (d(),
      O(),
      _(),
      o(),
      B(),
      Xe(),
      (tt = S(U)),
      (nt = { O0x28ij31: { hover: !0 } }),
      (rt = `framer-M6AwL`),
      (it = { O0x28ij31: `framer-v-1sk71s6` }),
      (at = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ot = ({ value: e, children: n }) => {
        let r = t(h),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(h.Provider, { value: a, children: n });
      }),
      (st = m.create(i)),
      (ct = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        HsMkLeaRa: n ?? i.HsMkLeaRa,
      })),
      (lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = b(
        s(function (e, t) {
          let n = r(null),
            a = t ?? n,
            o = c(),
            { activeLocale: s, setLocale: ee } = me();
          ie();
          let { style: l, className: d, layoutId: p, variant: h, HsMkLeaRa: _, ...v } = ct(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: te,
              setVariant: D,
              variants: O,
            } = x({
              defaultVariant: `O0x28ij31`,
              enabledGestures: nt,
              ref: a,
              variant: h,
              variantClassNames: it,
            }),
            k = lt(e, O),
            A = T(rt, he);
          return u(g, {
            id: p ?? o,
            children: u(st, {
              animate: O,
              initial: !1,
              children: u(ot, {
                value: at,
                children: u(pe, {
                  href: _,
                  motionChild: !0,
                  nodeId: `O0x28ij31`,
                  openInNewTab: !1,
                  scopeId: `OVQRH4G8b`,
                  children: f(m.a, {
                    ...v,
                    ...C,
                    className: `${T(A, `framer-1sk71s6`, d, b)} framer-35puts`,
                    "data-framer-name": `Button`,
                    layoutDependency: k,
                    layoutId: `O0x28ij31`,
                    ref: a,
                    style: { ...l },
                    ...et({ "O0x28ij31-hover": { "data-framer-name": void 0 } }, y, w),
                    children: [
                      f(m.div, {
                        className: `framer-twockq`,
                        "data-framer-name": `Icon`,
                        layoutDependency: k,
                        layoutId: `MCmpwBSon`,
                        children: [
                          u(U, {
                            animated: !0,
                            className: `framer-1wsxbtm`,
                            "data-framer-name": `Hover`,
                            layoutDependency: k,
                            layoutId: `YK7iteT6A`,
                            style: {
                              "--14vpx0c": `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                            },
                          }),
                          u(U, {
                            animated: !0,
                            className: `framer-2dymgt`,
                            "data-framer-name": `Default`,
                            layoutDependency: k,
                            layoutId: `k6DRSEgCE`,
                            style: {
                              "--14vpx0c": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                            },
                          }),
                        ],
                      }),
                      u(P, {
                        __fromCanvasComponent: !0,
                        children: u(i, {
                          children: u(m.p, {
                            className: `framer-styles-preset-14qd5ms`,
                            "data-styles-preset": `eMJMLduj1`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                            },
                            children: `Back to blog`,
                          }),
                        }),
                        className: `framer-8u8dl5`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `GW4nA5me7`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          "O0x28ij31-hover": {
                            "--extracted-r6o4lv": `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...et(
                          {
                            "O0x28ij31-hover": {
                              children: u(i, {
                                children: u(m.p, {
                                  className: `framer-styles-preset-14qd5ms`,
                                  "data-styles-preset": `eMJMLduj1`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))`,
                                  },
                                  children: `Back to blog`,
                                }),
                              }),
                            },
                          },
                          y,
                          w
                        ),
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-M6AwL.framer-35puts, .framer-M6AwL .framer-35puts { display: block; }`,
          `.framer-M6AwL.framer-1sk71s6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-M6AwL .framer-twockq { aspect-ratio: 1.0909090909090908 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 24px; }`,
          `.framer-M6AwL .framer-1wsxbtm { aspect-ratio: 1.0909090909090908 / 1; bottom: 0px; flex: none; position: absolute; right: -20px; top: 0px; width: var(--framer-aspect-ratio-supported, 24px); }`,
          `.framer-M6AwL .framer-2dymgt { bottom: var(--framer-aspect-ratio-supported, 0px); flex: none; height: 22px; left: 0px; position: absolute; right: 0px; top: 0px; width: calc(100% - 0px); }`,
          `.framer-M6AwL .framer-8u8dl5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-M6AwL.framer-v-1sk71s6.hover .framer-1wsxbtm { bottom: unset; height: var(--framer-aspect-ratio-supported, 22px); left: 0px; right: 0px; width: calc(100% - 0px); }`,
          `.framer-M6AwL.framer-v-1sk71s6.hover .framer-2dymgt { aspect-ratio: 1.0909090909090908 / 1; bottom: 0px; height: unset; left: -20px; right: unset; width: var(--framer-aspect-ratio-supported, 24px); }`,
          ...V,
        ],
        `framer-M6AwL`
      )),
      (K = G),
      (G.displayName = `Back Button`),
      (G.defaultProps = { height: 24, width: 122 }),
      D(G, { HsMkLeaRa: { title: `Link`, type: I.Link } }),
      E(
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
          ...tt,
          ...w(xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  dt,
  q,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  J,
  bt,
  xt,
  Y,
  X,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Z,
  Q,
  Ot,
  kt,
  At,
  jt,
  Mt,
  $,
  Nt,
  Pt;
e(() => {
  (d(),
    O(),
    _(),
    o(),
    ve(),
    $e(),
    Fe(),
    ut(),
    Le(),
    Re(),
    Be(),
    Ue(),
    je(),
    Ce(),
    We(),
    De(),
    _e(),
    Qe(),
    (dt = S(K)),
    (q = F(P)),
    (ft = S(W)),
    (pt = S(H)),
    (mt = S(be)),
    (ht = {
      IEtV7AOeQ: `(max-width: 809.98px)`,
      Ju4j0nNAb: `(min-width: 810px) and (max-width: 1439.98px)`,
      VrQTmPmp9: `(min-width: 1440px)`,
    }),
    (gt = []),
    (_t = `framer-oJJP4`),
    (vt = {
      IEtV7AOeQ: `framer-v-etdtlj`,
      Ju4j0nNAb: `framer-v-kffhti`,
      VrQTmPmp9: `framer-v-7gucu7`,
    }),
    (yt = (e, t, n) => (e && t ? `position` : n)),
    (J = {
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
    (bt = { damping: 35, delay: 0.1, mass: 2, stiffness: 120, type: `spring` }),
    (xt = { damping: 35, delay: 0.2, mass: 2, stiffness: 120, type: `spring` }),
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (St = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Ct = (e, t, { ZeS11p5hZ_Qrt_rd2FRUEAsZKodr: n }) => (e ? n : ``)),
    (wt = (e) => (typeof e == `string` ? e : String(e))),
    (Tt = (e, t, n) => {
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
    (Et = { dateStyle: `medium`, timeZone: `UTC` }),
    (Dt = (e, t) => Tt(e, Et, t)),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Q = (e) => ({
      from: {
        constraint: {
          left: { collection: `UEAsZKodr`, name: `ZeS11p5hZ`, type: `Identifier` },
          operator: `==`,
          right: { collection: `ZeS11p5hZ`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `UEAsZKodr`, data: Ie, type: `Collection` },
        right: { alias: `ZeS11p5hZ`, data: ze, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `UEAsZKodr`, name: `JLL8JOGHV`, type: `Identifier` },
        { alias: `ZeS11p5hZ`, collection: `ZeS11p5hZ`, name: `id`, type: `Identifier` },
        {
          alias: `ZeS11p5hZ.Qrt_rd2FR`,
          collection: `ZeS11p5hZ`,
          name: `Qrt_rd2FR`,
          type: `Identifier`,
        },
        { collection: `UEAsZKodr`, name: `ciByNfHzo`, type: `Identifier` },
        { collection: `UEAsZKodr`, name: `da3SPTjC9`, type: `Identifier` },
        { collection: `UEAsZKodr`, name: `oAZyvtn5K`, type: `Identifier` },
        { collection: `UEAsZKodr`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `UEAsZKodr`, name: `da3SPTjC9`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (Ot = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = A(e, t, `UEAsZKodr`);
      return n(y(r), i, a);
    }),
    (kt = { Desktop: `VrQTmPmp9`, Phone: `IEtV7AOeQ`, Tablet: `Ju4j0nNAb` }),
    (At = ({ value: e }) =>
      se()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (jt = (e) => ({
      from: {
        constraint: {
          left: { collection: `ekxIMAgLO`, name: `yHg1J3d_5`, type: `Identifier` },
          operator: `==`,
          right: { collection: `yHg1J3d_5`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `ekxIMAgLO`, data: Ie, type: `Collection` },
        right: { alias: `yHg1J3d_5`, data: Ve, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `ekxIMAgLO`, name: `JLL8JOGHV`, type: `Identifier` },
        { collection: `ekxIMAgLO`, name: `da3SPTjC9`, type: `Identifier` },
        { collection: `ekxIMAgLO`, name: `K7WVOFuwH`, type: `Identifier` },
        {
          alias: `yHg1J3d_5.oCcPMP0KO`,
          collection: `yHg1J3d_5`,
          name: `oCcPMP0KO`,
          type: `Identifier`,
        },
        {
          alias: `yHg1J3d_5.fGWA7o8Ej`,
          collection: `yHg1J3d_5`,
          name: `fGWA7o8Ej`,
          type: `Identifier`,
        },
        {
          alias: `yHg1J3d_5.icJ7Fp8vY`,
          collection: `yHg1J3d_5`,
          name: `icJ7Fp8vY`,
          type: `Identifier`,
        },
        { collection: `ekxIMAgLO`, name: `aHI5R8qRf`, type: `Identifier` },
      ],
      where: e,
    })),
    (Mt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: kt[r.variant] ?? r.variant ?? `VrQTmPmp9`,
    })),
    ($ = b(
      s(function (e, n) {
        let a = r(null),
          o = n ?? a,
          s = c(),
          { activeLocale: d, setLocale: p } = me(),
          _ = ie(),
          b = oe(),
          [x] = y(jt(C(b, `ekxIMAgLO`))),
          S = (e) => {
            if (!x) throw new ne(`No data matches path variables: ${JSON.stringify(b)}`);
            return x[e];
          },
          {
            style: w,
            className: E,
            layoutId: D,
            variant: O,
            JLL8JOGHV: A = S(`JLL8JOGHV`),
            da3SPTjC9: M = S(`da3SPTjC9`) ?? ``,
            K7WVOFuwH: se = S(`K7WVOFuwH`) ?? ``,
            yHg1J3d_5_oCcPMP0KO: F = S(`yHg1J3d_5.oCcPMP0KO`),
            yHg1J3d_5_fGWA7o8Ej: I = S(`yHg1J3d_5.fGWA7o8Ej`) ?? ``,
            yHg1J3d_5_icJ7Fp8vY: pe = S(`yHg1J3d_5.icJ7Fp8vY`) ?? ``,
            aHI5R8qRf: z = S(`aHI5R8qRf`) ?? ``,
            ...he
          } = Mt(e);
        re(l(() => Ze({ da3SPTjC9: M }, d), [M, d]));
        let [B, ge] = ce(O, ht, !1),
          _e = T(_t, Pe, ye, Ae, Ee, Ye, He),
          ve = t(ae)?.isLayoutTemplate,
          V = yt(ve, !!t(h)?.transition?.layout);
        k();
        let xe = fe();
        return (
          ue({}),
          u(ae.Provider, {
            value: {
              activeVariantId: B,
              humanReadableVariantMap: kt,
              primaryVariantId: `VrQTmPmp9`,
              variantClassNames: vt,
            },
            children: f(g, {
              id: D ?? s,
              children: [
                u(At, {
                  value: `html body { background: var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)); }`,
                }),
                f(m.div, {
                  ...he,
                  className: T(_e, `framer-7gucu7`, E),
                  ref: o,
                  style: { ...w },
                  children: [
                    u(m.main, {
                      className: `framer-1o8723i`,
                      "data-framer-name": `Main`,
                      layout: V,
                      children: f(`section`, {
                        className: `framer-1vufcwp`,
                        "data-framer-name": `Details `,
                        children: [
                          f(`div`, {
                            className: `framer-qkw699`,
                            "data-framer-name": `Containar`,
                            children: [
                              f(`div`, {
                                className: `framer-ldl89e`,
                                "data-framer-name": `Top content`,
                                children: [
                                  f(`div`, {
                                    className: `framer-ac77fa`,
                                    "data-framer-name": `Heading & Sub Text`,
                                    children: [
                                      u(te, {
                                        links: [
                                          {
                                            href: { webPageId: `CU0zg7VCq` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `CU0zg7VCq` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `CU0zg7VCq` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          u(R, {
                                            breakpoint: B,
                                            overrides: {
                                              IEtV7AOeQ: {
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  116 +
                                                  24 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: u(N, {
                                              height: 24,
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                0 +
                                                180 +
                                                54 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0,
                                              children: u(j, {
                                                className: `framer-101r7xj-container`,
                                                nodeId: `Zii5GZPKO`,
                                                scopeId: `ekxIMAgLO`,
                                                children: u(R, {
                                                  breakpoint: B,
                                                  overrides: {
                                                    IEtV7AOeQ: { HsMkLeaRa: e[2] },
                                                    Ju4j0nNAb: { HsMkLeaRa: e[1] },
                                                  },
                                                  children: u(K, {
                                                    height: `100%`,
                                                    HsMkLeaRa: e[0],
                                                    id: `Zii5GZPKO`,
                                                    layoutId: `Zii5GZPKO`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          }),
                                      }),
                                      f(`div`, {
                                        className: `framer-9q2s4s`,
                                        "data-framer-name": `Text Content`,
                                        children: [
                                          u(q, {
                                            __framer__animate: { transition: bt },
                                            __framer__animateOnce: !0,
                                            __framer__enter: J,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __fromCanvasComponent: !0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            children: u(i, {
                                              children: u(`h1`, {
                                                className: `framer-styles-preset-3yq5jl`,
                                                "data-styles-preset": `cPVM1_Pc1`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `Discover how to align campaign performance with real pipeline`,
                                              }),
                                            }),
                                            className: `framer-10w4m24`,
                                            "data-framer-name": `Title`,
                                            fonts: [`Inter`],
                                            text: M,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          u(q, {
                                            __framer__animate: { transition: xt },
                                            __framer__animateOnce: !0,
                                            __framer__enter: J,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __fromCanvasComponent: !0,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-13ryzp6`,
                                                "data-styles-preset": `Yw0GmpI8u`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `Content`,
                                              }),
                                            }),
                                            className: `framer-d6u3rf`,
                                            "data-framer-name": `Sub Text`,
                                            fonts: [`Inter`],
                                            text: se,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  u(R, {
                                    breakpoint: B,
                                    overrides: {
                                      IEtV7AOeQ: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: L(
                                            (_?.y || 0) + 0 + 0 + 116 + 24 + 0 + 0 + 0 + 268
                                          ),
                                          sizes: `min(max(min(max(${_?.width || `100vw`} - 32px, 1px), 1280px) - 36px, 1px), 1280px)`,
                                          ...Y(A),
                                        },
                                      },
                                      Ju4j0nNAb: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          loading: L(
                                            (_?.y || 0) + 0 + 0 + 180 + 54 + 0 + 0 + 0 + 276
                                          ),
                                          sizes: `min(max(min(max(${_?.width || `100vw`} - 80px, 1px), 1280px) - 64px, 1px), 1280px)`,
                                          ...Y(A),
                                        },
                                      },
                                    },
                                    children: u(le, {
                                      as: `figcaption`,
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        loading: L(
                                          (_?.y || 0) + 0 + 0 + 180 + 54 + 0 + 0 + 0 + 276
                                        ),
                                        sizes: `min(max(min(max(${_?.width || `100vw`} - 160px, 1px), 1280px) - 64px, 1px), 1280px)`,
                                        ...Y(A),
                                      },
                                      className: `framer-ooe399`,
                                      "data-framer-name": `Banner`,
                                    }),
                                  }),
                                  f(`div`, {
                                    className: `framer-10xiqjt`,
                                    "data-border": !0,
                                    children: [
                                      f(`div`, {
                                        className: `framer-w16h7a`,
                                        children: [
                                          u(R, {
                                            breakpoint: B,
                                            overrides: {
                                              IEtV7AOeQ: {
                                                background: {
                                                  alt: ``,
                                                  fit: `fill`,
                                                  loading: L(
                                                    (_?.y || 0) +
                                                      0 +
                                                      0 +
                                                      116 +
                                                      24 +
                                                      0 +
                                                      0 +
                                                      0 +
                                                      612 +
                                                      24 +
                                                      0 +
                                                      0
                                                  ),
                                                  sizes: `64px`,
                                                  ...Y(F),
                                                },
                                              },
                                            },
                                            children: u(le, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: L(
                                                  (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    180 +
                                                    54 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    950 +
                                                    92 +
                                                    0
                                                ),
                                                sizes: `64px`,
                                                ...Y(F),
                                              },
                                              className: `framer-1kyl0u`,
                                            }),
                                          }),
                                          f(`div`, {
                                            className: `framer-fk3zdy`,
                                            children: [
                                              u(P, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`h6`, {
                                                    className: `framer-styles-preset-11qazq0`,
                                                    "data-styles-preset": `SUQaOk4ze`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                    },
                                                    children: `Daniel Reed`,
                                                  }),
                                                }),
                                                className: `framer-19z5sts`,
                                                fonts: [`Inter`],
                                                text: I,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              u(P, {
                                                __fromCanvasComponent: !0,
                                                children: u(i, {
                                                  children: u(`p`, {
                                                    className: `framer-styles-preset-i5ktzk`,
                                                    "data-styles-preset": `kumYuXBDg`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                                    },
                                                    children: `Founder, BrightLayer Digital`,
                                                  }),
                                                }),
                                                className: `framer-slc0rd`,
                                                fonts: [`Inter`],
                                                text: pe,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      f(`div`, {
                                        className: `framer-t9lg8m`,
                                        children: [
                                          u(P, {
                                            __fromCanvasComponent: !0,
                                            children: u(i, {
                                              children: u(`p`, {
                                                className: `framer-styles-preset-13ryzp6`,
                                                "data-styles-preset": `Yw0GmpI8u`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `left`,
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `Share now :`,
                                              }),
                                            }),
                                            className: `framer-fbg5ml`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(`div`, {
                                            className: `framer-i3pas7`,
                                            children: [
                                              u(N, {
                                                children: u(j, {
                                                  className: `framer-10s5nb2-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `OS5W13UVJ`,
                                                  scopeId: `ekxIMAgLO`,
                                                  children: u(R, {
                                                    breakpoint: B,
                                                    overrides: { IEtV7AOeQ: { iconSize: 24 } },
                                                    children: u(W, {
                                                      backgroundColor: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                                      bottomLeftPadding: 0,
                                                      bottomRightPadding: 0,
                                                      containerStyle: {
                                                        borderColor: `rgb(2, 119, 183)`,
                                                        borderWidth: 0,
                                                        bottomLeftRadius: 8,
                                                        bottomRightRadius: 8,
                                                        isMixedRadius: !1,
                                                        radius: 8,
                                                        topLeftRadius: 8,
                                                        topRightRadius: 8,
                                                      },
                                                      height: `100%`,
                                                      iconSize: 32,
                                                      id: `OS5W13UVJ`,
                                                      isMixedPadding: !1,
                                                      layoutId: `OS5W13UVJ`,
                                                      paddingStyle: 0,
                                                      service: `LinkedIn`,
                                                      topLeftPadding: 0,
                                                      topRightPadding: 0,
                                                      uploadedIcon: X(
                                                        {
                                                          pixelHeight: 32,
                                                          pixelWidth: 32,
                                                          src: `../../assets/images/Uc5ba5tDfgg4QNBDeqChZ35BmII.svg`,
                                                        },
                                                        ``
                                                      ),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              u(N, {
                                                children: u(j, {
                                                  className: `framer-nyp1fg-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `TCi0nczFR`,
                                                  scopeId: `ekxIMAgLO`,
                                                  children: u(R, {
                                                    breakpoint: B,
                                                    overrides: { IEtV7AOeQ: { iconSize: 24 } },
                                                    children: u(W, {
                                                      backgroundColor: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                                      bottomLeftPadding: 0,
                                                      bottomRightPadding: 0,
                                                      containerStyle: {
                                                        borderColor: `rgb(2, 119, 183)`,
                                                        borderWidth: 0,
                                                        bottomLeftRadius: 8,
                                                        bottomRightRadius: 8,
                                                        isMixedRadius: !1,
                                                        radius: 8,
                                                        topLeftRadius: 8,
                                                        topRightRadius: 8,
                                                      },
                                                      height: `100%`,
                                                      iconSize: 32,
                                                      id: `TCi0nczFR`,
                                                      isMixedPadding: !1,
                                                      layoutId: `TCi0nczFR`,
                                                      paddingStyle: 0,
                                                      service: `Twitter`,
                                                      topLeftPadding: 0,
                                                      topRightPadding: 0,
                                                      uploadedIcon: X(
                                                        {
                                                          pixelHeight: 32,
                                                          pixelWidth: 32,
                                                          src: `../../assets/images/odOBzmOfvxgx8JOWenM8Nx93bE.svg`,
                                                        },
                                                        ``
                                                      ),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              u(N, {
                                                children: u(j, {
                                                  className: `framer-108z2s9-container`,
                                                  isAuthoredByUser: !0,
                                                  isModuleExternal: !0,
                                                  nodeId: `YONahcWZJ`,
                                                  scopeId: `ekxIMAgLO`,
                                                  children: u(R, {
                                                    breakpoint: B,
                                                    overrides: { IEtV7AOeQ: { iconSize: 24 } },
                                                    children: u(W, {
                                                      backgroundColor: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                                      bottomLeftPadding: 0,
                                                      bottomRightPadding: 0,
                                                      containerStyle: {
                                                        borderColor: `rgb(2, 119, 183)`,
                                                        borderWidth: 0,
                                                        bottomLeftRadius: 8,
                                                        bottomRightRadius: 8,
                                                        isMixedRadius: !1,
                                                        radius: 8,
                                                        topLeftRadius: 8,
                                                        topRightRadius: 8,
                                                      },
                                                      height: `100%`,
                                                      iconSize: 32,
                                                      id: `YONahcWZJ`,
                                                      isMixedPadding: !1,
                                                      layoutId: `YONahcWZJ`,
                                                      paddingStyle: 0,
                                                      service: `Facebook`,
                                                      topLeftPadding: 0,
                                                      topRightPadding: 0,
                                                      uploadedIcon: X(
                                                        {
                                                          pixelHeight: 26,
                                                          pixelWidth: 26,
                                                          src: `../../assets/images/8TIjcsrOWqUFC3WPOk7UUsgnA.svg`,
                                                        },
                                                        ``
                                                      ),
                                                      width: `100%`,
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
                              u(P, {
                                __fromCanvasComponent: !0,
                                children: z,
                                className: `framer-mgdoe9`,
                                "data-framer-name": `Content`,
                                fonts: [`Inter`],
                                stylesPresetsClassNames: {
                                  h3: `framer-styles-preset-1i7rln7`,
                                  p: `framer-styles-preset-17u18xj`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          u(`div`, { className: `framer-8tma16`, "data-framer-name": `Top Line` }),
                          u(`div`, { className: `framer-1ygblws`, "data-framer-name": `Box 1` }),
                          u(`div`, {
                            className: `framer-5muw7v`,
                            "data-framer-name": `Bottom line`,
                          }),
                          u(`div`, { className: `framer-rhif1v`, "data-framer-name": `Box 2` }),
                          u(`div`, { className: `framer-d3tdkh`, "data-framer-name": `Box 4` }),
                          u(`div`, { className: `framer-yhcf36`, "data-framer-name": `Box 3` }),
                          u(`div`, { className: `framer-mdo83c`, "data-framer-name": `Left Line` }),
                          u(`div`, {
                            className: `framer-167evz2`,
                            "data-framer-name": `Right Line`,
                          }),
                        ],
                      }),
                    }),
                    u(m.section, {
                      className: `framer-k5bbx3`,
                      layout: V,
                      children: f(`div`, {
                        className: `framer-zum371`,
                        "data-framer-name": `Container`,
                        children: [
                          u(P, {
                            __fromCanvasComponent: !0,
                            children: u(i, {
                              children: u(`h2`, {
                                className: `framer-styles-preset-3yq5jl`,
                                "data-styles-preset": `cPVM1_Pc1`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                },
                                children: `Related articles`,
                              }),
                            }),
                            className: `framer-1pjzpw6`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          f(`div`, {
                            className: `framer-1svttfl`,
                            "data-framer-name": `Blog Information`,
                            children: [
                              u(`div`, {
                                className: `framer-18lrlnb`,
                                children: u(de, {
                                  children: u(Ot, {
                                    pageSize: 3,
                                    query: Q(M),
                                    children: (e, t, n) =>
                                      u(ee, {
                                        children: e?.map(
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
                                            u(
                                              g,
                                              {
                                                id: `UEAsZKodr-${r}`,
                                                children: u(v.Provider, {
                                                  value: { oAZyvtn5K: a },
                                                  children: u(te, {
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
                                                      u(R, {
                                                        breakpoint: B,
                                                        overrides: {
                                                          IEtV7AOeQ: {
                                                            width: `max(max(min(${_?.width || `100vw`} - 32px, 1280px), 1px), 50px)`,
                                                            y:
                                                              (_?.y || 0) +
                                                              0 +
                                                              1288 +
                                                              60 +
                                                              0 +
                                                              0 +
                                                              106 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                          Ju4j0nNAb: {
                                                            width: `max(max(min(${_?.width || `100vw`} - 80px, 1280px), 1px) / 2, 50px)`,
                                                            y:
                                                              (_?.y || 0) +
                                                              0 +
                                                              1732 +
                                                              72 +
                                                              0 +
                                                              0 +
                                                              133 +
                                                              0 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: u(N, {
                                                          height: 424,
                                                          width: `max(max(min(${_?.width || `100vw`} - 160px, 1280px), 1px) / 3, 50px)`,
                                                          y:
                                                            (_?.y || 0) +
                                                            0 +
                                                            1732 +
                                                            72 +
                                                            0 +
                                                            0 +
                                                            138 +
                                                            0 +
                                                            0 +
                                                            0,
                                                          children: u(j, {
                                                            className: `framer-sot9uo-container`,
                                                            nodeId: `p5nTREIr2`,
                                                            scopeId: `ekxIMAgLO`,
                                                            children: u(R, {
                                                              breakpoint: B,
                                                              overrides: {
                                                                IEtV7AOeQ: {
                                                                  CphaCzuak: r[2],
                                                                  variant: Z(`B5eOgs6_u`),
                                                                },
                                                                Ju4j0nNAb: {
                                                                  CphaCzuak: r[1],
                                                                  uzYIOQFMN: {
                                                                    borderBottomWidth: 1,
                                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                                    borderLeftWidth: 1,
                                                                    borderRightWidth: 1,
                                                                    borderStyle: `solid`,
                                                                    borderTopWidth: 0,
                                                                  },
                                                                },
                                                              },
                                                              children: u(H, {
                                                                CphaCzuak: r[0],
                                                                F_CSN01FX: wt(
                                                                  Ct(St(o), d, {
                                                                    ZeS11p5hZ_Qrt_rd2FRUEAsZKodr: e,
                                                                  })
                                                                ),
                                                                height: `100%`,
                                                                id: `p5nTREIr2`,
                                                                layoutId: `p5nTREIr2`,
                                                                MhlZROnC2: n,
                                                                style: { width: `100%` },
                                                                UCDbjiNYK: Dt(t, xe),
                                                                uzYIOQFMN: {
                                                                  borderBottomWidth: 1,
                                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                                  borderLeftWidth: 1,
                                                                  borderRightWidth: 0,
                                                                  borderStyle: `solid`,
                                                                  borderTopWidth: 0,
                                                                },
                                                                variant: Z(`hnYxKWUZ8`),
                                                                width: `100%`,
                                                                YF3KZhs7x: Y(i),
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
                                      }),
                                  }),
                                }),
                              }),
                              u(`div`, {
                                className: `framer-lff0wx`,
                                "data-framer-name": `Top Line`,
                              }),
                              u(`div`, {
                                className: `framer-1pba73r`,
                                "data-framer-name": `Box 1`,
                              }),
                              u(`div`, {
                                className: `framer-1ekj8i9`,
                                "data-framer-name": `Bottom line`,
                              }),
                              u(`div`, {
                                className: `framer-194meem`,
                                "data-framer-name": `Box 2`,
                              }),
                              u(`div`, {
                                className: `framer-1egcsmc`,
                                "data-framer-name": `Box 4`,
                              }),
                              u(`div`, {
                                className: `framer-1mhgw9j`,
                                "data-framer-name": `Box 3`,
                              }),
                              u(`div`, {
                                className: `framer-9clmvs`,
                                "data-framer-name": `Left Line`,
                              }),
                              u(`div`, {
                                className: `framer-mhsphp`,
                                "data-framer-name": `Right Line`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    u(N, {
                      children: u(j, {
                        className: `framer-15hornf-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: V,
                        nodeId: `RYqkB7R5H`,
                        scopeId: `ekxIMAgLO`,
                        children: u(be, {
                          height: `100%`,
                          id: `RYqkB7R5H`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `RYqkB7R5H`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-oJJP4.framer-vhj4h6, .framer-oJJP4 .framer-vhj4h6 { display: block; }`,
        `.framer-oJJP4.framer-7gucu7 { align-content: center; align-items: center; background-color: var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-oJJP4 .framer-1o8723i { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 180px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-1vufcwp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 54px 32px 72px 32px; position: relative; width: 1px; }`,
        `.framer-oJJP4 .framer-qkw699 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1280px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-oJJP4 .framer-ldl89e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-ac77fa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-101r7xj-container, .framer-oJJP4 .framer-10s5nb2-container, .framer-oJJP4 .framer-nyp1fg-container, .framer-oJJP4 .framer-108z2s9-container, .framer-oJJP4 .framer-15hornf-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-oJJP4 .framer-9q2s4s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-10w4m24 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-d6u3rf { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 1031px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-ooe399 { border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 650px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-10xiqjt { --border-bottom-width: 1px; --border-color: var(--token-18d30b46-d0d7-4595-9e6d-7c78c6c86a4f, #3e3b39); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19); border-bottom-left-radius: 14px; border-bottom-right-radius: 14px; border-top-left-radius: 14px; border-top-right-radius: 14px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-oJJP4 .framer-w16h7a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-oJJP4 .framer-1kyl0u { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex: none; gap: 10px; height: 64px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 64px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-oJJP4 .framer-fk3zdy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-oJJP4 .framer-19z5sts, .framer-oJJP4 .framer-slc0rd, .framer-oJJP4 .framer-fbg5ml { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-oJJP4 .framer-t9lg8m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-oJJP4 .framer-i3pas7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-oJJP4 .framer-mgdoe9 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 860px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-oJJP4 .framer-8tma16 { background: linear-gradient(270deg, #161616 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 5%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 95%, rgb(22, 22, 22) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-oJJP4 .framer-1ygblws { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-oJJP4 .framer-5muw7v { background: linear-gradient(270deg, #161616 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 5%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 95%, rgb(22, 22, 22) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-oJJP4 .framer-rhif1v { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-oJJP4 .framer-d3tdkh, .framer-oJJP4 .framer-1egcsmc { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -4px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-oJJP4 .framer-yhcf36, .framer-oJJP4 .framer-1mhgw9j { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -4px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-oJJP4 .framer-mdo83c { background: linear-gradient(180deg, #161616 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 3%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 97%, rgb(22, 22, 22) 100%); flex: none; height: 106%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 106% / 2); width: 1px; z-index: 1; }`,
        `.framer-oJJP4 .framer-167evz2 { background: linear-gradient(180deg, #161616 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 5%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 95%, rgb(22, 22, 22) 100%); flex: none; height: 106%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.00000000000002% - 106% / 2); width: 1px; z-index: 1; }`,
        `.framer-oJJP4 .framer-k5bbx3 { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 72px 80px 172px 80px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-zum371 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-1pjzpw6 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-oJJP4 .framer-1svttfl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-18lrlnb { display: grid; flex: 1 0 0px; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-oJJP4 .framer-sot9uo-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-oJJP4 .framer-lff0wx { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 108% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 108%; z-index: 1; }`,
        `.framer-oJJP4 .framer-1pba73r { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-oJJP4 .framer-1ekj8i9 { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 108% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 108%; z-index: 1; }`,
        `.framer-oJJP4 .framer-194meem { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-oJJP4 .framer-9clmvs { background: linear-gradient(180deg, #161616 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 92%, rgb(22, 22, 22) 100%); flex: none; height: 120%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 120% / 2); width: 1px; z-index: 1; }`,
        `.framer-oJJP4 .framer-mhsphp { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 92%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 120% / 2); width: 1px; z-index: 1; }`,
        ...Me,
        ...Se,
        ...Oe,
        ...we,
        ...Ge,
        ...Ke,
        `.framer-oJJP4[data-border="true"]::after, .framer-oJJP4 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-oJJP4.framer-7gucu7 { width: 810px; } .framer-oJJP4 .framer-1o8723i { padding: 180px 40px 100px 40px; } .framer-oJJP4 .framer-k5bbx3 { padding: 72px 40px 172px 40px; } .framer-oJJP4 .framer-zum371 { gap: 75px; order: 0; } .framer-oJJP4 .framer-18lrlnb { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-oJJP4.framer-7gucu7 { width: 390px; } .framer-oJJP4 .framer-1o8723i { padding: 116px 16px 60px 16px; } .framer-oJJP4 .framer-1vufcwp { padding: 24px 12px 12px 24px; } .framer-oJJP4 .framer-9q2s4s { gap: 16px; } .framer-oJJP4 .framer-ooe399 { height: 320px; } .framer-oJJP4 .framer-10xiqjt { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: center; } .framer-oJJP4 .framer-i3pas7 { gap: 8px; } .framer-oJJP4 .framer-1ygblws { height: 7px; left: -3px; top: -3px; width: 7px; } .framer-oJJP4 .framer-rhif1v { height: 7px; right: -3px; top: -3px; width: 7px; } .framer-oJJP4 .framer-d3tdkh { bottom: -3px; height: 7px; right: -3px; width: 7px; } .framer-oJJP4 .framer-yhcf36 { bottom: -3px; height: 7px; left: -3px; width: 7px; } .framer-oJJP4 .framer-mdo83c, .framer-oJJP4 .framer-167evz2 { height: 104%; top: calc(50.00000000000002% - 104% / 2); } .framer-oJJP4 .framer-k5bbx3 { padding: 60px 16px 60px 16px; } .framer-oJJP4 .framer-zum371 { gap: 48px; } .framer-oJJP4 .framer-18lrlnb { grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-oJJP4 .framer-sot9uo-container { height: auto; } .framer-oJJP4 .framer-lff0wx { left: calc(50.00000000000002% - 106% / 2); width: 106%; } .framer-oJJP4 .framer-9clmvs { height: 110%; top: calc(50.00000000000002% - 110.00000000000001% / 2); } .framer-oJJP4 .framer-mhsphp { height: 110%; top: calc(50.10438413361171% - 110.00000000000001% / 2); }}`,
      ],
      `framer-oJJP4`
    )),
    (Nt = $),
    ($.displayName = `Articles`),
    ($.defaultProps = { height: 4502, width: 1440 }),
    E(
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
        ...dt,
        ...ft,
        ...pt,
        ...mt,
        ...w(Ne),
        ...w(ge),
        ...w(ke),
        ...w(Te),
        ...w(qe),
        ...w(Je),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = M.get(jt(C(t.pathVariables, `ekxIMAgLO`)), n).readMaybeAsync();
        return Promise.allSettled([
          z(K, {}, t),
          (async () => {
            let [e] = (await r) ?? [];
            return M.get(Q(e?.da3SPTjC9), n).preload();
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await M.get(Q(e?.da3SPTjC9), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => z(H, {}, t)));
          })(),
        ]);
      },
    }),
    (Pt = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerekxIMAgLO`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerIntrinsicWidth: `1440`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Ju4j0nNAb":{"layout":["fixed","auto"]},"IEtV7AOeQ":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `4502`,
            framerAutoSizeImages: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Pt as __FramerMetadata__, Nt as default, gt as queryParamNames };
//# sourceMappingURL=7smTeqbShkwJwta-9g8x9x5sF8Gmf5znkHpDraAvkJ4.BNrfEMQy.mjs.map
