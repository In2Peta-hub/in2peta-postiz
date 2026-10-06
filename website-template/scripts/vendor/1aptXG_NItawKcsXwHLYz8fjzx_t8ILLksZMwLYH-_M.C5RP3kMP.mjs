import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  A as t,
  O as n,
  P as r,
  T as i,
  _ as a,
  b as o,
  c as s,
  j as c,
  l,
  s as u,
  u as d,
} from "./react.C83sJsFz.mjs";
import { E as f, a as p, r as m, t as h } from "./motion.DVY4-TFg.mjs";
import {
  A as g,
  C as _,
  Ct as v,
  Dt as y,
  Et as b,
  G as x,
  K as S,
  L as C,
  M as w,
  N as T,
  Nt as E,
  O as D,
  P as ee,
  Q as O,
  Tt as te,
  _t as k,
  a as A,
  at as j,
  bt as ne,
  dt as re,
  f as ie,
  gt as ae,
  ht as oe,
  i as M,
  j as se,
  jt as ce,
  k as N,
  kt as P,
  lt as le,
  m as F,
  mt as ue,
  n as I,
  o as L,
  q as R,
  vt as de,
  w as z,
  wt as fe,
  yt as pe,
  z as B,
} from "./framer.CFqKih1k.mjs";
import { d as me, f as he, i as ge, l as _e, r as ve, u as ye } from "./shared-lib.P4JA4aUc.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./bz7TF8GsX.CGXVUdvb.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./kumYuXBDg.BDiDl76I.mjs";
import { n as Oe, t as ke } from "./v0GEiJsID.DbeCo17q.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./oDmEg1BTY.D9HRz7PU.mjs";
import {
  a as Pe,
  c as Fe,
  i as Ie,
  l as Le,
  n as Re,
  o as ze,
  r as Be,
  s as Ve,
  t as He,
  u as Ue,
} from "./TorZANghh.Csd5wx1e.mjs";
import { i as We, n as Ge, r as Ke, t as qe } from "./jXwTlEdH0.D4YWS_vr.mjs";
import { n as Je, t as V } from "./bCS5tafFa.DKT7mem2.mjs";
import { n as Ye, t as Xe } from "./BXLSbVJYa.DY9zsySh.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./cPVM1_Pc1.CsfRepwj.mjs";
import { i as tt, n as H, r as U, t as nt } from "./lWCsMyG06.CDHEYcI6.mjs";
import { i as rt, n as it, r as at, t as ot } from "./Kbsz4vDYF.Db5CsEil.mjs";
import { n as st, t as ct } from "./LULlC_Twp.tHxtAzPG.mjs";
import { n as W, t as lt } from "./oW17fL7y4.H0ic1fOV.mjs";
import { i as ut, r as dt } from "./jtK6M3rat.BS8yqcCt.mjs";
import { i as ft, r as pt } from "./kMLIh8Wrw.D1c-0SWh.mjs";
import { n as mt, t as ht } from "./RYbbKkijH.C2ni4dhN.mjs";
import { i as gt, n as _t, r as vt, t as yt } from "./SsXMH0HVD.DJyqsYbQ.mjs";
import { i as bt, n as xt, r as St, t as Ct } from "./ZHicPb8Xd.gi7bRg0S.mjs";
import { n as wt, r as Tt } from "./augiA20Il.Dcyh-cer.mjs";
function Et(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  G,
  Rt = e(() => {
    (u(),
      O(),
      h(),
      i(),
      We(),
      (Dt = [`BbW6ef8MA`, `rK1pip4po`]),
      (Ot = `framer-kQvhf`),
      (kt = { BbW6ef8MA: `framer-v-l2pz6u`, rK1pip4po: `framer-v-1vdlhh8` }),
      (At = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jt = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Mt = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(p.Provider, { value: a, children: n });
      }),
      (Nt = { "Active ": `BbW6ef8MA`, Inactive: `rK1pip4po` }),
      (Pt = f.create(r)),
      (Ft = ({ border: e, click2: t, height: n, id: r, padding: i, title: a, width: o, ...s }) => ({
        ...s,
        EwLZIb17Y: e ??
          s.EwLZIb17Y ?? {
            borderBottomWidth: 1,
            borderColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) /* {"name":"Black gray"} */`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
        MZHnolzev: t ?? s.MZHnolzev,
        pUUUNhwye: i ?? s.pUUUNhwye ?? `32px 40px 32px 40px`,
        Re7XJeJgH: a ?? s.Re7XJeJgH ?? `Scalora Marketing`,
        variant: Nt[s.variant] ?? s.variant ?? `BbW6ef8MA`,
      })),
      (It = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Lt = y(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: c, setLocale: u } = pe();
          re();
          let {
              style: d,
              className: p,
              layoutId: h,
              variant: g,
              Re7XJeJgH: _,
              pUUUNhwye: v,
              EwLZIb17Y: y,
              MZHnolzev: x,
              ...S
            } = Ft(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: ee,
              isLoading: O,
              setGestureState: te,
              setVariant: k,
              variants: A,
            } = b({
              cycleOrder: Dt,
              defaultVariant: `BbW6ef8MA`,
              ref: a,
              variant: g,
              variantClassNames: kt,
            }),
            j = It(e, A),
            { activeVariantCallback: ne, delay: ie } = le(w),
            ae = ne(async (...e) => {
              if ((te({ isPressed: !1 }), x && (await x(...e)) === !1)) return !1;
            }),
            oe = C(Ot, qe);
          return l(m, {
            id: h ?? s,
            children: l(Pt, {
              animate: A,
              initial: !1,
              children: l(Mt, {
                value: At,
                children: l(f.div, {
                  ...S,
                  ...D,
                  className: C(oe, `framer-l2pz6u`, p, T),
                  "data-border": !0,
                  "data-framer-name": `Active `,
                  "data-highlight": !0,
                  layoutDependency: j,
                  layoutId: `BbW6ef8MA`,
                  onTap: ae,
                  ref: a,
                  style: {
                    "--border-bottom-width": (y?.borderBottomWidth ?? y?.borderWidth) + `px`,
                    "--border-color": y?.borderColor,
                    "--border-left-width": (y?.borderLeftWidth ?? y?.borderWidth) + `px`,
                    "--border-right-width": (y?.borderRightWidth ?? y?.borderWidth) + `px`,
                    "--border-style": y?.borderStyle,
                    "--border-top-width": (y?.borderTopWidth ?? y?.borderWidth) + `px`,
                    ...d,
                  },
                  ...Et({ rK1pip4po: { "data-framer-name": `Inactive` } }, w, ee),
                  children: l(f.div, {
                    className: `framer-1ccfzc9`,
                    "data-framer-name": `Container`,
                    layoutDependency: j,
                    layoutId: `vRiHAU8Uo`,
                    style: {
                      "--106omcl": jt(v),
                      backgroundColor: `var(--token-c4120a70-7c2d-4cbc-a4f7-0d7eb6d06083, rgb(40, 37, 34))`,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                    variants: {
                      rK1pip4po: {
                        backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                      },
                    },
                    children: l(N, {
                      __fromCanvasComponent: !0,
                      children: l(r, {
                        children: l(f.h5, {
                          className: `framer-styles-preset-s5101p`,
                          "data-styles-preset": `jXwTlEdH0`,
                          dir: `auto`,
                          style: { "--framer-text-alignment": `left` },
                          children: `Scalora Marketing`,
                        }),
                      }),
                      className: `framer-1hjxjxn`,
                      "data-framer-name": `Scalora Marketing`,
                      fonts: [`Inter`],
                      layoutDependency: j,
                      layoutId: `uJaiULpqc`,
                      style: { "--framer-paragraph-spacing": `0px` },
                      text: _,
                      variants: {
                        rK1pip4po: {
                          "--extracted-1lwpl3i": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...Et(
                        {
                          rK1pip4po: {
                            children: l(r, {
                              children: l(f.h5, {
                                className: `framer-styles-preset-s5101p`,
                                "data-styles-preset": `jXwTlEdH0`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                },
                                children: `Scalora Marketing`,
                              }),
                            }),
                          },
                        },
                        w,
                        ee
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-kQvhf.framer-o5vvui, .framer-kQvhf .framer-o5vvui { display: block; }`,
          `.framer-kQvhf.framer-l2pz6u { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px; position: relative; width: 428px; }`,
          `.framer-kQvhf .framer-1ccfzc9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: var(--106omcl); position: relative; width: 100%; }`,
          `.framer-kQvhf .framer-1hjxjxn { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...Ge,
          `.framer-kQvhf[data-border="true"]::after, .framer-kQvhf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-kQvhf`
      )),
      (G = Lt),
      (Lt.displayName = `Product State Button`),
      (Lt.defaultProps = { height: 104, width: 428 }),
      ee(Lt, {
        variant: {
          options: [`BbW6ef8MA`, `rK1pip4po`],
          optionTitles: [`Active `, `Inactive`],
          title: `Variant`,
          type: L.Enum,
        },
        Re7XJeJgH: {
          defaultValue: `Scalora Marketing`,
          displayTextArea: !1,
          title: `Title`,
          type: L.String,
        },
        onRe7XJeJgHChange: { changes: `Re7XJeJgH`, type: L.ChangeHandler },
        pUUUNhwye: { defaultValue: `32px 40px 32px 40px`, title: `Padding`, type: L.Padding },
        EwLZIb17Y: {
          defaultValue: {
            borderBottomWidth: 1,
            borderColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) /* {"name":"Black gray"} */`,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `Border`,
          type: L.Border,
        },
        MZHnolzev: { title: `Click 2`, type: L.EventHandler },
      }),
      T(
        Lt,
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
          ...S(Ke),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zt,
  Bt,
  Vt,
  Ht,
  Ut,
  q,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt = e(() => {
    (u(),
      O(),
      h(),
      i(),
      be(),
      he(),
      Rt(),
      (zt = x(G)),
      (Bt = [
        `m2qKeD_C4`,
        `OS3x61Ci6`,
        `ilgWLkE7H`,
        `QjHNSwrPQ`,
        `kNFTl4UTd`,
        `SjkL2Q6Hd`,
        `t0L_JdQcb`,
        `DV_rwJIpx`,
      ]),
      (Vt = `framer-Ep6Cc`),
      (Ht = {
        DV_rwJIpx: `framer-v-mva11l`,
        ilgWLkE7H: `framer-v-dy6a2v`,
        kNFTl4UTd: `framer-v-ik44za`,
        m2qKeD_C4: `framer-v-1qh8web`,
        OS3x61Ci6: `framer-v-yq0o7`,
        QjHNSwrPQ: `framer-v-ih4cn5`,
        SjkL2Q6Hd: `framer-v-15j18cc`,
        t0L_JdQcb: `framer-v-6o4zxv`,
      }),
      (Ut = { bounce: 0, delay: 0, duration: 0.8, type: `spring` }),
      (q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Wt = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(p.Provider, { value: a, children: n });
      }),
      (Gt = {
        "Desktop/v2": `OS3x61Ci6`,
        "Desktop/v3": `ilgWLkE7H`,
        "Desktop/v4": `QjHNSwrPQ`,
        "Tablet/v2": `SjkL2Q6Hd`,
        "Tablet/v3": `t0L_JdQcb`,
        "Tablet/v4": `DV_rwJIpx`,
        Desktop: `m2qKeD_C4`,
        Tablet: `kNFTl4UTd`,
      }),
      (Kt = f.create(r)),
      (qt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Gt[r.variant] ?? r.variant ?? `m2qKeD_C4`,
      })),
      (Jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Yt = y(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: c, setLocale: u } = pe(),
            p = re(),
            { style: h, className: g, layoutId: _, variant: v, ...y } = qt(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: ee,
              setVariant: O,
              variants: te,
            } = b({
              cycleOrder: Bt,
              defaultVariant: `m2qKeD_C4`,
              ref: a,
              variant: v,
              variantClassNames: Ht,
            }),
            k = Jt(e, te),
            { activeVariantCallback: A, delay: j } = le(x),
            ne = A(async (...e) => {
              O(`m2qKeD_C4`);
            }),
            ie = A(async (...e) => {
              O(`kNFTl4UTd`);
            }),
            ae = A(async (...e) => {
              O(`OS3x61Ci6`);
            }),
            oe = A(async (...e) => {
              O(`SjkL2Q6Hd`);
            }),
            ce = A(async (...e) => {
              O(`ilgWLkE7H`);
            }),
            P = A(async (...e) => {
              O(`t0L_JdQcb`);
            }),
            ue = A(async (...e) => {
              O(`QjHNSwrPQ`);
            }),
            I = A(async (...e) => {
              O(`DV_rwJIpx`);
            }),
            L = C(Vt, Ce, _e);
          return l(m, {
            id: _ ?? s,
            children: l(Kt, {
              animate: te,
              initial: !1,
              children: l(Wt, {
                value: Ut,
                children: d(f.div, {
                  ...y,
                  ...T,
                  className: C(L, `framer-1qh8web`, g, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: k,
                  layoutId: `m2qKeD_C4`,
                  ref: a,
                  style: { ...h },
                  ...K(
                    {
                      DV_rwJIpx: { "data-framer-name": `Tablet/v4` },
                      ilgWLkE7H: { "data-framer-name": `Desktop/v3` },
                      kNFTl4UTd: { "data-framer-name": `Tablet` },
                      OS3x61Ci6: { "data-framer-name": `Desktop/v2` },
                      QjHNSwrPQ: { "data-framer-name": `Desktop/v4` },
                      SjkL2Q6Hd: { "data-framer-name": `Tablet/v2` },
                      t0L_JdQcb: { "data-framer-name": `Tablet/v3` },
                    },
                    x,
                    E
                  ),
                  children: [
                    d(f.div, {
                      className: `framer-1ygm9b`,
                      "data-border": !0,
                      "data-framer-name": `Left Content`,
                      layoutDependency: k,
                      layoutId: `NiLUFQJe9`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-18d30b46-d0d7-4595-9e6d-7c78c6c86a4f, rgb(62, 59, 57))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      children: [
                        l(M, {
                          height: 104,
                          width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 428px)`,
                          y:
                            (p?.y || 0) +
                            (0 + ((p?.height || 646) - 0 - ((p?.height || 646) - 0) * 1) / 2) +
                            0 +
                            0,
                          ...K(
                            {
                              DV_rwJIpx: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  0,
                              },
                              kNFTl4UTd: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  0,
                              },
                              SjkL2Q6Hd: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  0,
                              },
                              t0L_JdQcb: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  0,
                              },
                            },
                            x,
                            E
                          ),
                          children: l(se, {
                            className: `framer-twgx8b-container`,
                            layoutDependency: k,
                            layoutId: `XAChBxxw9-container`,
                            nodeId: `XAChBxxw9`,
                            rendersWithMotion: !0,
                            scopeId: `j2FovNryG`,
                            children: l(G, {
                              EwLZIb17Y: {
                                borderBottomWidth: 0,
                                borderColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              height: `100%`,
                              id: `XAChBxxw9`,
                              layoutId: `XAChBxxw9`,
                              MZHnolzev: ne,
                              pUUUNhwye: `32px 40px 32px 40px`,
                              Re7XJeJgH: `Scalora CRM`,
                              style: { width: `100%` },
                              variant: q(`BbW6ef8MA`),
                              width: `100%`,
                              ...K(
                                {
                                  DV_rwJIpx: {
                                    MZHnolzev: ie,
                                    pUUUNhwye: `24px`,
                                    variant: q(`rK1pip4po`),
                                  },
                                  ilgWLkE7H: { variant: q(`rK1pip4po`) },
                                  kNFTl4UTd: { MZHnolzev: ie, pUUUNhwye: `24px` },
                                  OS3x61Ci6: { variant: q(`rK1pip4po`) },
                                  QjHNSwrPQ: { variant: q(`rK1pip4po`) },
                                  SjkL2Q6Hd: {
                                    MZHnolzev: ie,
                                    pUUUNhwye: `24px`,
                                    variant: q(`rK1pip4po`),
                                  },
                                  t0L_JdQcb: {
                                    MZHnolzev: ie,
                                    pUUUNhwye: `24px`,
                                    variant: q(`rK1pip4po`),
                                  },
                                },
                                x,
                                E
                              ),
                            }),
                          }),
                        }),
                        l(M, {
                          height: 104,
                          width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 428px)`,
                          y:
                            (p?.y || 0) +
                            (0 + ((p?.height || 646) - 0 - ((p?.height || 646) - 0) * 1) / 2) +
                            0 +
                            104,
                          ...K(
                            {
                              DV_rwJIpx: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  104,
                              },
                              kNFTl4UTd: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  104,
                              },
                              SjkL2Q6Hd: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  104,
                              },
                              t0L_JdQcb: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  104,
                              },
                            },
                            x,
                            E
                          ),
                          children: l(se, {
                            className: `framer-n4d4iy-container`,
                            layoutDependency: k,
                            layoutId: `d5WNT1_lV-container`,
                            nodeId: `d5WNT1_lV`,
                            rendersWithMotion: !0,
                            scopeId: `j2FovNryG`,
                            children: l(G, {
                              EwLZIb17Y: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 1,
                              },
                              height: `100%`,
                              id: `d5WNT1_lV`,
                              layoutId: `d5WNT1_lV`,
                              MZHnolzev: ae,
                              pUUUNhwye: `32px 40px 32px 40px`,
                              Re7XJeJgH: `Scalora Marketing`,
                              style: { width: `100%` },
                              variant: q(`rK1pip4po`),
                              width: `100%`,
                              ...K(
                                {
                                  DV_rwJIpx: { MZHnolzev: oe, pUUUNhwye: `24px` },
                                  kNFTl4UTd: { MZHnolzev: oe, pUUUNhwye: `24px` },
                                  OS3x61Ci6: { variant: q(`BbW6ef8MA`) },
                                  SjkL2Q6Hd: {
                                    MZHnolzev: oe,
                                    pUUUNhwye: `24px`,
                                    variant: q(`BbW6ef8MA`),
                                  },
                                  t0L_JdQcb: { MZHnolzev: oe, pUUUNhwye: `24px` },
                                },
                                x,
                                E
                              ),
                            }),
                          }),
                        }),
                        l(M, {
                          height: 104,
                          width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 428px)`,
                          y:
                            (p?.y || 0) +
                            (0 + ((p?.height || 646) - 0 - ((p?.height || 646) - 0) * 1) / 2) +
                            0 +
                            208,
                          ...K(
                            {
                              DV_rwJIpx: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  208,
                              },
                              kNFTl4UTd: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  208,
                              },
                              SjkL2Q6Hd: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  208,
                              },
                              t0L_JdQcb: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  208,
                              },
                            },
                            x,
                            E
                          ),
                          children: l(se, {
                            className: `framer-cqw0-container`,
                            layoutDependency: k,
                            layoutId: `z88eRaNyC-container`,
                            nodeId: `z88eRaNyC`,
                            rendersWithMotion: !0,
                            scopeId: `j2FovNryG`,
                            children: l(G, {
                              EwLZIb17Y: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              height: `100%`,
                              id: `z88eRaNyC`,
                              layoutId: `z88eRaNyC`,
                              MZHnolzev: ce,
                              pUUUNhwye: `32px 40px 32px 40px`,
                              Re7XJeJgH: `Scalora Docs`,
                              style: { width: `100%` },
                              variant: q(`rK1pip4po`),
                              width: `100%`,
                              ...K(
                                {
                                  DV_rwJIpx: { MZHnolzev: P, pUUUNhwye: `24px` },
                                  ilgWLkE7H: { variant: q(`BbW6ef8MA`) },
                                  kNFTl4UTd: { MZHnolzev: P, pUUUNhwye: `24px` },
                                  SjkL2Q6Hd: { MZHnolzev: P, pUUUNhwye: `24px` },
                                  t0L_JdQcb: {
                                    MZHnolzev: P,
                                    pUUUNhwye: `24px`,
                                    variant: q(`BbW6ef8MA`),
                                  },
                                },
                                x,
                                E
                              ),
                            }),
                          }),
                        }),
                        l(M, {
                          height: 104,
                          width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 428px)`,
                          y:
                            (p?.y || 0) +
                            (0 + ((p?.height || 646) - 0 - ((p?.height || 646) - 0) * 1) / 2) +
                            0 +
                            312,
                          ...K(
                            {
                              DV_rwJIpx: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  312,
                              },
                              kNFTl4UTd: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  312,
                              },
                              SjkL2Q6Hd: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  312,
                              },
                              t0L_JdQcb: {
                                width: `min(max((${p?.width || `100vw`} - 8px) / 2, 1px), 320px)`,
                                y:
                                  (p?.y || 0) +
                                  (0 +
                                    ((p?.height || 413) - 0 - ((p?.height || 413) - 0) * 1) / 2) +
                                  0 +
                                  312,
                              },
                            },
                            x,
                            E
                          ),
                          children: l(se, {
                            className: `framer-etip6b-container`,
                            layoutDependency: k,
                            layoutId: `A9zXrOsfu-container`,
                            nodeId: `A9zXrOsfu`,
                            rendersWithMotion: !0,
                            scopeId: `j2FovNryG`,
                            children: l(G, {
                              EwLZIb17Y: {
                                borderBottomWidth: 1,
                                borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderStyle: `solid`,
                                borderTopWidth: 0,
                              },
                              height: `100%`,
                              id: `A9zXrOsfu`,
                              layoutId: `A9zXrOsfu`,
                              MZHnolzev: ue,
                              pUUUNhwye: `32px 40px 32px 40px`,
                              Re7XJeJgH: `Scalora Ops`,
                              style: { width: `100%` },
                              variant: q(`rK1pip4po`),
                              width: `100%`,
                              ...K(
                                {
                                  DV_rwJIpx: {
                                    MZHnolzev: I,
                                    pUUUNhwye: `24px`,
                                    variant: q(`BbW6ef8MA`),
                                  },
                                  kNFTl4UTd: { MZHnolzev: I, pUUUNhwye: `24px` },
                                  QjHNSwrPQ: { variant: q(`BbW6ef8MA`) },
                                  SjkL2Q6Hd: { MZHnolzev: I, pUUUNhwye: `24px` },
                                  t0L_JdQcb: { MZHnolzev: I, pUUUNhwye: `24px` },
                                },
                                x,
                                E
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(f.div, {
                      className: `framer-ozfbyd`,
                      "data-framer-name": `Right Content`,
                      layoutDependency: k,
                      layoutId: `vydyw6z8I`,
                      children: l(F, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1852,
                          intrinsicWidth: 2368,
                          loading: R(
                            (p?.y || 0) + (0 + ((p?.height || 646) - 0 - 724) / 2) + 4 + 0
                          ),
                          pixelHeight: 1852,
                          pixelWidth: 2368,
                          sizes: `max((${p?.width || `100vw`} - 8px) / 2, 1px)`,
                          src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                          srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                        },
                        className: `framer-1wi4b39`,
                        "data-framer-name": `Bg Layer`,
                        layoutDependency: k,
                        layoutId: `Cl9Bb74gH`,
                        ...K(
                          {
                            DV_rwJIpx: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1852,
                                intrinsicWidth: 2368,
                                loading: R(
                                  (p?.y || 0) + (0 + ((p?.height || 413) - 0 - 465) / 2) + 4 + 0
                                ),
                                pixelHeight: 1852,
                                pixelWidth: 2368,
                                sizes: `max((${p?.width || `100vw`} - 8px) / 2, 1px)`,
                                src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                                srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                              },
                            },
                            kNFTl4UTd: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1852,
                                intrinsicWidth: 2368,
                                loading: R(
                                  (p?.y || 0) + (0 + ((p?.height || 413) - 0 - 465) / 2) + 4 + 0
                                ),
                                pixelHeight: 1852,
                                pixelWidth: 2368,
                                sizes: `max((${p?.width || `100vw`} - 8px) / 2, 1px)`,
                                src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                                srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                              },
                            },
                            SjkL2Q6Hd: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1852,
                                intrinsicWidth: 2368,
                                loading: R(
                                  (p?.y || 0) + (0 + ((p?.height || 413) - 0 - 465) / 2) + 4 + 0
                                ),
                                pixelHeight: 1852,
                                pixelWidth: 2368,
                                sizes: `max((${p?.width || `100vw`} - 8px) / 2, 1px)`,
                                src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                                srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                              },
                            },
                            t0L_JdQcb: {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1852,
                                intrinsicWidth: 2368,
                                loading: R(
                                  (p?.y || 0) + (0 + ((p?.height || 413) - 0 - 465) / 2) + 4 + 0
                                ),
                                pixelHeight: 1852,
                                pixelWidth: 2368,
                                sizes: `max((${p?.width || `100vw`} - 8px) / 2, 1px)`,
                                src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                                srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                              },
                            },
                          },
                          x,
                          E
                        ),
                        children: d(f.div, {
                          className: `framer-1tffl0o`,
                          "data-framer-name": `Content Wrapper`,
                          layoutDependency: k,
                          layoutId: `KWbBJPKZ6`,
                          children: [
                            d(f.div, {
                              className: `framer-1lqr3h3`,
                              "data-framer-name": `Image Placeholder Wrapper`,
                              layoutDependency: k,
                              layoutId: `Y1HoJnqBq`,
                              children: [
                                l(F, {
                                  as: `figcaption`,
                                  background: {
                                    alt: `CRM web dashboard UI with employee stats, announcements, and schedule widgets.`,
                                    fit: `fill`,
                                    intrinsicHeight: 1716,
                                    intrinsicWidth: 2832,
                                    loading: R(
                                      (p?.y || 0) +
                                        (0 + ((p?.height || 646) - 0 - 724) / 2) +
                                        4 +
                                        0 +
                                        44 +
                                        0 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 1716,
                                    pixelWidth: 2832,
                                    sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 144px)`,
                                    src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
                                    srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
                                  },
                                  className: `framer-13w9krh`,
                                  "data-framer-name": `Scalora CRM`,
                                  layoutDependency: k,
                                  layoutId: `L5tJFBTzW`,
                                  style: { opacity: 1 },
                                  variants: {
                                    DV_rwJIpx: { opacity: 0 },
                                    ilgWLkE7H: { opacity: 0 },
                                    kNFTl4UTd: { opacity: 1 },
                                    OS3x61Ci6: { opacity: 0 },
                                    QjHNSwrPQ: { opacity: 0 },
                                    SjkL2Q6Hd: { opacity: 0 },
                                    t0L_JdQcb: { opacity: 0 },
                                  },
                                  ...K(
                                    {
                                      DV_rwJIpx: {
                                        background: {
                                          alt: `Modern finance dashboard UI with sidebar navigation, stats cards, and charts`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      ilgWLkE7H: {
                                        background: {
                                          alt: `Expense dashboard UI with sidebar navigation and spending analytics cards.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 646) - 0 - 724) / 2) +
                                              4 +
                                              0 +
                                              44 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 144px)`,
                                          src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      kNFTl4UTd: {
                                        background: {
                                          alt: `CRM web dashboard UI with employee stats, announcements, and schedule widgets.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      OS3x61Ci6: {
                                        background: {
                                          alt: `Modern sales analytics dashboard UI with sidebar navigation, KPI cards, charts, and performance gauge.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 646) - 0 - 724) / 2) +
                                              4 +
                                              0 +
                                              44 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 144px)`,
                                          src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      QjHNSwrPQ: {
                                        background: {
                                          alt: `Modern finance dashboard UI with sidebar navigation, stats cards, and charts`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 646) - 0 - 724) / 2) +
                                              4 +
                                              0 +
                                              44 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 144px)`,
                                          src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      SjkL2Q6Hd: {
                                        background: {
                                          alt: `Modern sales analytics dashboard UI with sidebar navigation, KPI cards, charts, and performance gauge.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      t0L_JdQcb: {
                                        background: {
                                          alt: `Expense dashboard UI with sidebar navigation and spending analytics cards.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                    },
                                    x,
                                    E
                                  ),
                                }),
                                l(F, {
                                  as: `figcaption`,
                                  background: {
                                    alt: `Marketing project dashboard UI showing revenue, projects, time spent, and resources.`,
                                    fit: `fill`,
                                    intrinsicHeight: 1716,
                                    intrinsicWidth: 2832,
                                    loading: R(
                                      (p?.y || 0) +
                                        (0 + ((p?.height || 646) - 0 - 724) / 2) +
                                        4 +
                                        0 +
                                        44 +
                                        0 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 1716,
                                    pixelWidth: 2832,
                                    sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 144px)`,
                                    src: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716`,
                                    srcSet: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716 2832w`,
                                  },
                                  className: `framer-b6d2le`,
                                  "data-framer-name": `Scalora Marketing`,
                                  layoutDependency: k,
                                  layoutId: `kZGdPulLC`,
                                  style: {
                                    borderBottomLeftRadius: 12,
                                    borderBottomRightRadius: 12,
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                    opacity: 0,
                                  },
                                  variants: {
                                    OS3x61Ci6: { opacity: 1 },
                                    SjkL2Q6Hd: {
                                      borderBottomLeftRadius: 0,
                                      borderBottomRightRadius: 0,
                                      borderTopLeftRadius: 0,
                                      borderTopRightRadius: 0,
                                      opacity: 1,
                                    },
                                  },
                                  ...K(
                                    {
                                      DV_rwJIpx: {
                                        background: {
                                          alt: `Marketing project dashboard UI showing revenue, projects, time spent, and resources.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      kNFTl4UTd: {
                                        background: {
                                          alt: `Marketing project dashboard UI showing revenue, projects, time spent, and resources.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      SjkL2Q6Hd: {
                                        background: {
                                          alt: `Marketing project dashboard UI showing revenue, projects, time spent, and resources.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      t0L_JdQcb: {
                                        background: {
                                          alt: `Marketing project dashboard UI showing revenue, projects, time spent, and resources.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                    },
                                    x,
                                    E
                                  ),
                                }),
                                l(F, {
                                  as: `figcaption`,
                                  background: {
                                    alt: `Modern expense tracking dashboard UI showing charts, spending categories, and recent transactions.`,
                                    fit: `fill`,
                                    intrinsicHeight: 1716,
                                    intrinsicWidth: 2832,
                                    loading: R(
                                      (p?.y || 0) +
                                        (0 + ((p?.height || 646) - 0 - 724) / 2) +
                                        4 +
                                        0 +
                                        44 +
                                        0 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 1716,
                                    pixelWidth: 2832,
                                    sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 144px)`,
                                    src: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716`,
                                    srcSet: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716 2832w`,
                                  },
                                  className: `framer-1oyff92`,
                                  "data-framer-name": `Scalora Docs`,
                                  layoutDependency: k,
                                  layoutId: `e701IWaIb`,
                                  style: { opacity: 0 },
                                  variants: {
                                    ilgWLkE7H: { opacity: 1 },
                                    t0L_JdQcb: { opacity: 1 },
                                  },
                                  ...K(
                                    {
                                      DV_rwJIpx: {
                                        background: {
                                          alt: `Modern expense tracking dashboard UI showing charts, spending categories, and recent transactions.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      kNFTl4UTd: {
                                        background: {
                                          alt: `Modern expense tracking dashboard UI showing charts, spending categories, and recent transactions.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      SjkL2Q6Hd: {
                                        background: {
                                          alt: `Modern expense tracking dashboard UI showing charts, spending categories, and recent transactions.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      t0L_JdQcb: {
                                        background: {
                                          alt: `Modern expense tracking dashboard UI showing charts, spending categories, and recent transactions.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                    },
                                    x,
                                    E
                                  ),
                                }),
                                l(F, {
                                  as: `figcaption`,
                                  background: {
                                    alt: `Analytics dashboard UI with sidebar navigation, revenue stats cards, bar chart overview, customer doughnut chart, and product sales table.`,
                                    fit: `fill`,
                                    intrinsicHeight: 1716,
                                    intrinsicWidth: 2832,
                                    loading: R(
                                      (p?.y || 0) +
                                        (0 + ((p?.height || 646) - 0 - 724) / 2) +
                                        4 +
                                        0 +
                                        44 +
                                        0 +
                                        0 +
                                        0 +
                                        0
                                    ),
                                    pixelHeight: 1716,
                                    pixelWidth: 2832,
                                    sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 144px)`,
                                    src: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716`,
                                    srcSet: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716 2832w`,
                                  },
                                  className: `framer-1vhvp8d`,
                                  "data-framer-name": `Scalora Ops`,
                                  layoutDependency: k,
                                  layoutId: `LFyQAsND_`,
                                  style: { opacity: 0 },
                                  variants: {
                                    DV_rwJIpx: { opacity: 1 },
                                    QjHNSwrPQ: { opacity: 1 },
                                  },
                                  ...K(
                                    {
                                      DV_rwJIpx: {
                                        background: {
                                          alt: `Analytics dashboard UI with sidebar navigation, revenue stats cards, bar chart overview, customer doughnut chart, and product sales table.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      kNFTl4UTd: {
                                        background: {
                                          alt: `Analytics dashboard UI with sidebar navigation, revenue stats cards, bar chart overview, customer doughnut chart, and product sales table.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      SjkL2Q6Hd: {
                                        background: {
                                          alt: `Analytics dashboard UI with sidebar navigation, revenue stats cards, bar chart overview, customer doughnut chart, and product sales table.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                      t0L_JdQcb: {
                                        background: {
                                          alt: `Analytics dashboard UI with sidebar navigation, revenue stats cards, bar chart overview, customer doughnut chart, and product sales table.`,
                                          fit: `fill`,
                                          intrinsicHeight: 1716,
                                          intrinsicWidth: 2832,
                                          loading: R(
                                            (p?.y || 0) +
                                              (0 + ((p?.height || 413) - 0 - 465) / 2) +
                                              4 +
                                              0 +
                                              20 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1716,
                                          pixelWidth: 2832,
                                          sizes: `calc(max((${p?.width || `100vw`} - 8px) / 2, 1px) - 40px)`,
                                          src: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716`,
                                          srcSet: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716 2832w`,
                                        },
                                      },
                                    },
                                    x,
                                    E
                                  ),
                                }),
                              ],
                            }),
                            d(f.div, {
                              className: `framer-12i3hvj`,
                              "data-framer-name": `Text Wrapper`,
                              layoutDependency: k,
                              layoutId: `wEjM_iUBZ`,
                              children: [
                                l(N, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(f.h4, {
                                      className: `framer-styles-preset-1qcdpqr`,
                                      "data-styles-preset": `bz7TF8GsX`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                      },
                                      children: `Scalora CRM`,
                                    }),
                                  }),
                                  className: `framer-127fscs`,
                                  "data-framer-name": `Scalora Marketing`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `ZfaLmex1f`,
                                  style: {
                                    "--extracted-1eung3n": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...K(
                                    {
                                      DV_rwJIpx: {
                                        children: l(r, {
                                          children: l(f.h4, {
                                            className: `framer-styles-preset-1qcdpqr`,
                                            "data-styles-preset": `bz7TF8GsX`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                            },
                                            children: `Scalora Ops`,
                                          }),
                                        }),
                                      },
                                      ilgWLkE7H: {
                                        children: l(r, {
                                          children: l(f.h4, {
                                            className: `framer-styles-preset-1qcdpqr`,
                                            "data-styles-preset": `bz7TF8GsX`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                            },
                                            children: `Scalora Docs`,
                                          }),
                                        }),
                                      },
                                      OS3x61Ci6: {
                                        children: l(r, {
                                          children: l(f.h4, {
                                            className: `framer-styles-preset-1qcdpqr`,
                                            "data-styles-preset": `bz7TF8GsX`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                            },
                                            children: `Scalora Marketing`,
                                          }),
                                        }),
                                      },
                                      QjHNSwrPQ: {
                                        children: l(r, {
                                          children: l(f.h4, {
                                            className: `framer-styles-preset-1qcdpqr`,
                                            "data-styles-preset": `bz7TF8GsX`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                            },
                                            children: `Scalora Ops`,
                                          }),
                                        }),
                                      },
                                      SjkL2Q6Hd: {
                                        children: l(r, {
                                          children: l(f.h4, {
                                            className: `framer-styles-preset-1qcdpqr`,
                                            "data-styles-preset": `bz7TF8GsX`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                            },
                                            children: `Scalora Marketing`,
                                          }),
                                        }),
                                      },
                                      t0L_JdQcb: {
                                        children: l(r, {
                                          children: l(f.h4, {
                                            className: `framer-styles-preset-1qcdpqr`,
                                            "data-styles-preset": `bz7TF8GsX`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                            },
                                            children: `Scalora Docs`,
                                          }),
                                        }),
                                      },
                                    },
                                    x,
                                    E
                                  ),
                                }),
                                l(N, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(f.p, {
                                      className: `framer-styles-preset-13ryzp6`,
                                      "data-styles-preset": `Yw0GmpI8u`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                      },
                                      children: `Manage leads, automate follow-ups, track deals, and close faster with a smart, visual CRM built for modern sales teams.`,
                                    }),
                                  }),
                                  className: `framer-1miq4mg`,
                                  "data-framer-name": `Plan, launch, and optimize campaigns across email, ads, and landing pages — all tracked in one dashboard.`,
                                  fonts: [`Inter`],
                                  layoutDependency: k,
                                  layoutId: `fyAAi2Szp`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...K(
                                    {
                                      DV_rwJIpx: {
                                        children: l(r, {
                                          children: l(f.p, {
                                            className: `framer-styles-preset-13ryzp6`,
                                            "data-styles-preset": `Yw0GmpI8u`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                            },
                                            children: `Build workflows that connect your teams, data, and tools  without complex integrations.`,
                                          }),
                                        }),
                                      },
                                      ilgWLkE7H: {
                                        children: l(r, {
                                          children: l(f.p, {
                                            className: `framer-styles-preset-13ryzp6`,
                                            "data-styles-preset": `Yw0GmpI8u`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                            },
                                            children: `Create, manage, and collaborate on documentation, SOPs, and internal knowledge in one flexible workspace.`,
                                          }),
                                        }),
                                      },
                                      OS3x61Ci6: {
                                        children: l(r, {
                                          children: l(f.p, {
                                            className: `framer-styles-preset-13ryzp6`,
                                            "data-styles-preset": `Yw0GmpI8u`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                            },
                                            children: `Plan, launch, and optimize campaigns across email, ads, and landing pages — all tracked in one dashboard.`,
                                          }),
                                        }),
                                      },
                                      QjHNSwrPQ: {
                                        children: l(r, {
                                          children: l(f.p, {
                                            className: `framer-styles-preset-13ryzp6`,
                                            "data-styles-preset": `Yw0GmpI8u`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                            },
                                            children: `Build workflows that connect your teams, data, and tools without complex integrations.`,
                                          }),
                                        }),
                                      },
                                      SjkL2Q6Hd: {
                                        children: l(r, {
                                          children: l(f.p, {
                                            className: `framer-styles-preset-13ryzp6`,
                                            "data-styles-preset": `Yw0GmpI8u`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                            },
                                            children: `Plan, launch, and optimize campaigns across email, ads, and landing pages — all tracked in one dashboard.`,
                                          }),
                                        }),
                                      },
                                      t0L_JdQcb: {
                                        children: l(r, {
                                          children: l(f.p, {
                                            className: `framer-styles-preset-13ryzp6`,
                                            "data-styles-preset": `Yw0GmpI8u`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                            },
                                            children: `Create, manage, and collaborate on documentation, SOPs, and internal knowledge in one flexible workspace.`,
                                          }),
                                        }),
                                      },
                                    },
                                    x,
                                    E
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    l(f.div, {
                      className: `framer-160pv8s`,
                      "data-framer-name": `Top Line`,
                      layoutDependency: k,
                      layoutId: `j_exBRGEw`,
                      style: {
                        background: `linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%)`,
                      },
                    }),
                    l(f.div, {
                      className: `framer-jk4p62`,
                      "data-framer-name": `Bottom line`,
                      layoutDependency: k,
                      layoutId: `BsjMES0Zo`,
                      style: {
                        background: `linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%)`,
                      },
                    }),
                    l(f.div, {
                      className: `framer-5pwftp`,
                      "data-framer-name": `Box 1`,
                      layoutDependency: k,
                      layoutId: `yy2Rjp2Kk`,
                      style: {
                        backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    l(f.div, {
                      className: `framer-1xeljte`,
                      "data-framer-name": `Box 2`,
                      layoutDependency: k,
                      layoutId: `bmO6kLeOW`,
                      style: {
                        backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    l(f.div, {
                      className: `framer-kc3ant`,
                      "data-framer-name": `Box 4`,
                      layoutDependency: k,
                      layoutId: `LhqfhgyUo`,
                      style: {
                        backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    l(f.div, {
                      className: `framer-3tcy7h`,
                      "data-framer-name": `Box 3`,
                      layoutDependency: k,
                      layoutId: `Ku6ppqJ8M`,
                      style: {
                        backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                        borderBottomLeftRadius: 2,
                        borderBottomRightRadius: 2,
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                      },
                    }),
                    l(f.div, {
                      className: `framer-1b64ulw`,
                      "data-framer-name": `Left Line`,
                      layoutDependency: k,
                      layoutId: `lEPYf_Ujv`,
                      style: {
                        background: `linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%)`,
                      },
                    }),
                    l(f.div, {
                      className: `framer-angvgw`,
                      "data-framer-name": `Right Line`,
                      layoutDependency: k,
                      layoutId: `xYvFGOE4D`,
                      style: {
                        background: `linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%)`,
                      },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Ep6Cc.framer-1rs37av, .framer-Ep6Cc .framer-1rs37av { display: block; }`,
          `.framer-Ep6Cc.framer-1qh8web { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px 4px 0px 0px; position: relative; width: 1280px; }`,
          `.framer-Ep6Cc .framer-1ygm9b { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; max-width: 428px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Ep6Cc .framer-twgx8b-container, .framer-Ep6Cc .framer-n4d4iy-container, .framer-Ep6Cc .framer-cqw0-container, .framer-Ep6Cc .framer-etip6b-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Ep6Cc .framer-ozfbyd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 0px 4px 0px; position: relative; width: 1px; }`,
          `.framer-Ep6Cc .framer-1wi4b39 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 44px 72px 44px 72px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Ep6Cc .framer-1tffl0o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ep6Cc .framer-1lqr3h3 { align-content: center; align-items: center; aspect-ratio: 1.6587677725118484 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 422px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ep6Cc .framer-13w9krh { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 4; }`,
          `.framer-Ep6Cc .framer-b6d2le { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
          `.framer-Ep6Cc .framer-1oyff92 { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 2; }`,
          `.framer-Ep6Cc .framer-1vhvp8d { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-Ep6Cc .framer-12i3hvj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ep6Cc .framer-127fscs { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Ep6Cc .framer-1miq4mg { flex: none; height: auto; max-width: 478px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Ep6Cc .framer-160pv8s { flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
          `.framer-Ep6Cc .framer-jk4p62 { bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
          `.framer-Ep6Cc .framer-5pwftp { flex: none; height: 9px; left: -5px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Ep6Cc .framer-1xeljte { flex: none; height: 9px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -5px; top: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Ep6Cc .framer-kc3ant { bottom: -5px; flex: none; height: 9px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Ep6Cc .framer-3tcy7h { bottom: -5px; flex: none; height: 9px; left: -5px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Ep6Cc .framer-1b64ulw { flex: none; height: 130%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 130.3125% / 2); width: 1px; z-index: 1; }`,
          `.framer-Ep6Cc .framer-angvgw { flex: none; height: 130%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.00000000000002% - 130.15625% / 2); width: 1px; z-index: 1; }`,
          `.framer-Ep6Cc.framer-v-ik44za.framer-1qh8web, .framer-Ep6Cc.framer-v-15j18cc.framer-1qh8web, .framer-Ep6Cc.framer-v-6o4zxv.framer-1qh8web, .framer-Ep6Cc.framer-v-mva11l.framer-1qh8web { width: 716px; }`,
          `.framer-Ep6Cc.framer-v-ik44za .framer-1ygm9b, .framer-Ep6Cc.framer-v-15j18cc .framer-1ygm9b, .framer-Ep6Cc.framer-v-6o4zxv .framer-1ygm9b, .framer-Ep6Cc.framer-v-mva11l .framer-1ygm9b { max-width: 320px; }`,
          `.framer-Ep6Cc.framer-v-ik44za .framer-1wi4b39, .framer-Ep6Cc.framer-v-15j18cc .framer-1wi4b39, .framer-Ep6Cc.framer-v-6o4zxv .framer-1wi4b39, .framer-Ep6Cc.framer-v-mva11l .framer-1wi4b39 { padding: 20px; }`,
          `.framer-Ep6Cc.framer-v-ik44za .framer-1lqr3h3, .framer-Ep6Cc.framer-v-15j18cc .framer-1lqr3h3, .framer-Ep6Cc.framer-v-6o4zxv .framer-1lqr3h3, .framer-Ep6Cc.framer-v-mva11l .framer-1lqr3h3 { aspect-ratio: 1.6492890995260663 / 1; height: var(--framer-aspect-ratio-supported, 211px); }`,
          `.framer-Ep6Cc.framer-v-15j18cc .framer-b6d2le { will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Ep6Cc.framer-v-6o4zxv .framer-twgx8b-container { order: 0; }`,
          `.framer-Ep6Cc.framer-v-6o4zxv .framer-n4d4iy-container { order: 1; }`,
          `.framer-Ep6Cc.framer-v-6o4zxv .framer-cqw0-container { order: 2; }`,
          `.framer-Ep6Cc.framer-v-6o4zxv .framer-etip6b-container { order: 3; }`,
          ...xe,
          ...ye,
          `.framer-Ep6Cc[data-border="true"]::after, .framer-Ep6Cc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Ep6Cc`
      )),
      (Xt = Yt),
      (Yt.displayName = `Product`),
      (Yt.defaultProps = { height: 646, width: 1280 }),
      ee(Yt, {
        variant: {
          options: [
            `m2qKeD_C4`,
            `OS3x61Ci6`,
            `ilgWLkE7H`,
            `QjHNSwrPQ`,
            `kNFTl4UTd`,
            `SjkL2Q6Hd`,
            `t0L_JdQcb`,
            `DV_rwJIpx`,
          ],
          optionTitles: [
            `Desktop`,
            `Desktop/v2`,
            `Desktop/v3`,
            `Desktop/v4`,
            `Tablet`,
            `Tablet/v2`,
            `Tablet/v3`,
            `Tablet/v4`,
          ],
          title: `Variant`,
          type: L.Enum,
        },
      }),
      T(
        Yt,
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
          ...zt,
          ...S(Se),
          ...S(me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Yt.loader = { load: (e, t) => (t.locale, Promise.allSettled([B(G, {}, t)])) }));
  }),
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln = e(() => {
    (u(),
      O(),
      h(),
      i(),
      he(),
      (Qt = `framer-zoxdd`),
      ($t = { V4bc7AHmk: `framer-v-zemajx` }),
      (en = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (tn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (nn = ({ value: e, children: n }) => {
        let r = t(p),
          i = e ?? r.transition,
          a = c(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return l(p.Provider, { value: a, children: n });
      }),
      (rn = f.create(r)),
      (an = ({ height: e, id: t, image: n, text: r, width: i, ...a }) => ({
        ...a,
        NzyRMmqdn: n ??
          a.NzyRMmqdn ?? {
            alt: ``,
            pixelHeight: 1716,
            pixelWidth: 2832,
            src: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716`,
            srcSet: `https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/gqSxMGiSU6WyChVWPPyAEe9e8Y.png?width=2832&height=1716 2832w`,
          },
        OjyMJJ76V:
          r ??
          a.OjyMJJ76V ??
          `Plan, launch, and optimize campaigns across email, ads, and landing pages — all tracked in one dashboard.`,
      })),
      (on = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (sn = y(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: c, setLocale: u } = pe(),
            p = re(),
            {
              style: h,
              className: g,
              layoutId: _,
              variant: v,
              NzyRMmqdn: y,
              OjyMJJ76V: x,
              ...S
            } = an(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: ee,
              isLoading: O,
              setGestureState: te,
              setVariant: k,
              variants: A,
            } = b({ defaultVariant: `V4bc7AHmk`, ref: a, variant: v, variantClassNames: $t }),
            j = on(e, A),
            ne = C(Qt, _e);
          return l(m, {
            id: _ ?? s,
            children: l(rn, {
              animate: A,
              initial: !1,
              children: l(nn, {
                value: en,
                children: l(F, {
                  ...S,
                  ...D,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 1852,
                    intrinsicWidth: 2368,
                    loading: R(p?.y || 0),
                    pixelHeight: 1852,
                    pixelWidth: 2368,
                    sizes: p?.width || `100vw`,
                    src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                    srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                  },
                  className: C(ne, `framer-zemajx`, g, T),
                  "data-framer-name": `Desktop`,
                  layoutDependency: j,
                  layoutId: `V4bc7AHmk`,
                  ref: a,
                  style: { ...h },
                  children: d(f.div, {
                    className: `framer-1glm27a`,
                    "data-framer-name": `Content Wrapper`,
                    layoutDependency: j,
                    layoutId: `pjXjajPiY`,
                    children: [
                      l(f.div, {
                        className: `framer-vsfdbw`,
                        "data-framer-name": `Text Wrapper`,
                        layoutDependency: j,
                        layoutId: `kfKWD67K5`,
                        children: l(N, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(f.p, {
                              className: `framer-styles-preset-13ryzp6`,
                              "data-styles-preset": `Yw0GmpI8u`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                              },
                              children: `Plan, launch, and optimize campaigns across email, ads, and landing pages — all tracked in one dashboard.`,
                            }),
                          }),
                          className: `framer-1cv6q78`,
                          "data-framer-name": `Plan, launch, and optimize campaigns across email, ads, and landing pages — all tracked in one dashboard.`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `Wicptj4nL`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: x,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      }),
                      l(f.div, {
                        className: `framer-52ykl`,
                        "data-framer-name": `Image Placeholder Wrapper`,
                        layoutDependency: j,
                        layoutId: `fp7v7XI1d`,
                        children: l(F, {
                          background: {
                            alt: ``,
                            fit: `fit`,
                            intrinsicHeight: 1716,
                            intrinsicWidth: 2832,
                            loading: R(
                              (p?.y || 0) +
                                24 +
                                (((p?.height || 862) - 48 - 573) / 2 + 0 + 0) +
                                0 +
                                154 +
                                0
                            ),
                            pixelHeight: 1716,
                            pixelWidth: 2832,
                            sizes: `calc(${p?.width || `100vw`} - 40px)`,
                            ...tn(y),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-6u4mct`,
                          "data-framer-name": `Scalora CRM`,
                          layoutDependency: j,
                          layoutId: `izVnmoY4X`,
                        }),
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
          `.framer-zoxdd.framer-wbg5in, .framer-zoxdd .framer-wbg5in { display: block; }`,
          `.framer-zoxdd.framer-zemajx { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 24px 20px 24px 20px; position: relative; width: 1280px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-zoxdd .framer-1glm27a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-zoxdd .framer-vsfdbw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 7px; position: relative; width: 100%; }`,
          `.framer-zoxdd .framer-1cv6q78 { flex: none; height: auto; max-width: 478px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-zoxdd .framer-52ykl { align-content: center; align-items: center; aspect-ratio: 1.680798004987531 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 738px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-zoxdd .framer-6u4mct { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 4; }`,
          ...ye,
        ],
        `framer-zoxdd`
      )),
      (cn = sn),
      (sn.displayName = `Product Crad phone`),
      (sn.defaultProps = { height: 862, width: 1280 }),
      ee(sn, {
        NzyRMmqdn: {
          __defaultAssetReference: `data:framer/asset-reference,gqSxMGiSU6WyChVWPPyAEe9e8Y.png?originalFilename=Dashboard+Desktop.png&width=2832&height=1716`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,gqSxMGiSU6WyChVWPPyAEe9e8Y.png?originalFilename=Dashboard+Desktop.png&width=2832&height=1716`,
          },
          title: `Image`,
          type: L.ResponsiveImage,
        },
        OjyMJJ76V: {
          defaultValue: `Plan, launch, and optimize campaigns across email, ads, and landing pages — all tracked in one dashboard.`,
          displayTextArea: !1,
          title: `Text`,
          type: L.String,
        },
        onOjyMJJ76VChange: { changes: `OjyMJJ76V`, type: L.ChangeHandler },
      }),
      T(
        sn,
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
          ...S(me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  J,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Y,
  X,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  Z,
  qn,
  Jn,
  Yn,
  Q,
  $,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr;
e(() => {
  (u(),
    O(),
    h(),
    i(),
    ge(),
    Ae(),
    Ue(),
    Je(),
    Ye(),
    rt(),
    Zt(),
    it(),
    st(),
    nt(),
    Ne(),
    lt(),
    ln(),
    ke(),
    Rt(),
    dt(),
    pt(),
    mt(),
    be(),
    Ze(),
    we(),
    gt(),
    he(),
    bt(),
    Fe(),
    ze(),
    tt(),
    Ie(),
    Re(),
    wt(),
    (un = x(H)),
    (dn = ce(N)),
    (fn = x(Le)),
    (pn = ce(f.div)),
    (mn = x(Xe)),
    (hn = ce(A)),
    (gn = P(F)),
    (J = P(f.div)),
    (_n = E(f.div)),
    (vn = x(Oe)),
    (yn = x(je)),
    (bn = P(A)),
    (xn = x(Xt)),
    (Sn = x(G)),
    (Cn = x(cn)),
    (wn = x(W)),
    (Tn = x(Me)),
    (En = x(V)),
    (Dn = x(ct)),
    (On = x(ot)),
    (kn = x(at)),
    (An = x(ve)),
    (jn = {
      mKN5cngFV: `(min-width: 810px) and (max-width: 1439.98px)`,
      t8ROkHIfN: `(max-width: 809.98px)`,
      WQLkyLRf1: `(min-width: 1440px)`,
    }),
    (Mn = () => typeof document < `u`),
    (Nn = []),
    (Pn = `framer-C67cd`),
    (Fn = {
      mKN5cngFV: `framer-v-1neqyyn`,
      t8ROkHIfN: `framer-v-fpsd0l`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (In = (e, t, n) => (e && t ? `position` : n)),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (X = { damping: 35, delay: 0, mass: 2, stiffness: 120, type: `spring` }),
    (Ln = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 0,
      y: 0,
    }),
    (Rn = {
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
    (zn = {
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
    (Bn = {
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
    (Vn = {
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
    (Hn = { delay: 0, duration: 5, ease: [0, 0, 1, 1], type: `tween` }),
    (Un = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -15,
    }),
    (Wn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 15,
    }),
    (Gn = (e, t) => `translateY(-50%) ${t}`),
    (Kn = (e, t) => `translateX(-50%) ${t}`),
    (Z = {
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
    (qn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -30,
      y: 0,
    }),
    (Jn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Yn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 30,
      y: 0,
    }),
    (Q = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    ($ = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Xn = () => ({
      from: { alias: `xer6LyFEp`, data: ut, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `xer6LyFEp`, name: `K4nO7V0zW`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `KP1VtjTDq`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `E_cdfRnTP`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `LB2VqtSvm`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `vRYNYxELP`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `Fz1Yp3hrG`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `BQ9UST8T5`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `aHYcs7PNz`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `oIvaScDKp`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `VOQNIsdsz`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `QBZWJjkWU`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `diavS5Gwt`, type: `Identifier` },
        { collection: `xer6LyFEp`, name: `id`, type: `Identifier` },
      ],
    })),
    (Zn = ({ query: e, pageSize: t, children: n }) => n(v(e))),
    (Qn = () => ({
      from: { alias: `i2Kvowb5S`, data: ut, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 0 },
      select: [
        { collection: `i2Kvowb5S`, name: `K4nO7V0zW`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `KP1VtjTDq`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `E_cdfRnTP`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `LB2VqtSvm`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `vRYNYxELP`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `Fz1Yp3hrG`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `BQ9UST8T5`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `aHYcs7PNz`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `oIvaScDKp`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `VOQNIsdsz`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `QBZWJjkWU`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `diavS5Gwt`, type: `Identifier` },
        { collection: `i2Kvowb5S`, name: `id`, type: `Identifier` },
      ],
    })),
    ($n = () => ({
      from: { alias: `iJLprioXO`, data: ut, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 0 },
      select: [
        { collection: `iJLprioXO`, name: `K4nO7V0zW`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `KP1VtjTDq`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `E_cdfRnTP`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `LB2VqtSvm`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `vRYNYxELP`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `Fz1Yp3hrG`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `BQ9UST8T5`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `aHYcs7PNz`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `oIvaScDKp`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `VOQNIsdsz`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `QBZWJjkWU`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `diavS5Gwt`, type: `Identifier` },
        { collection: `iJLprioXO`, name: `id`, type: `Identifier` },
      ],
    })),
    (er = () => ({
      from: { alias: `iGfPtMN67`, data: ut, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `iGfPtMN67`, name: `K4nO7V0zW`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `KP1VtjTDq`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `E_cdfRnTP`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `LB2VqtSvm`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `vRYNYxELP`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `Fz1Yp3hrG`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `BQ9UST8T5`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `aHYcs7PNz`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `oIvaScDKp`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `VOQNIsdsz`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `QBZWJjkWU`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `diavS5Gwt`, type: `Identifier` },
        { collection: `iGfPtMN67`, name: `id`, type: `Identifier` },
      ],
    })),
    (tr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 100,
    }),
    (nr = { damping: 25, delay: 0.4, mass: 1, stiffness: 125, type: `spring` }),
    (rr = { damping: 25, delay: 0.3, mass: 1, stiffness: 125, type: `spring` }),
    (ir = { damping: 25, delay: 0, mass: 1, stiffness: 125, type: `spring` }),
    (ar = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (or = (e, t, { ZeS11p5hZ_Qrt_rd2FROb8m9E0gb: n }) => (e ? n : ``)),
    (sr = (e) => (typeof e == `string` ? e : String(e))),
    (cr = (e, t, n) => {
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
    (lr = { dateStyle: `medium`, timeZone: `UTC` }),
    (ur = (e, t) => cr(e, lr, t)),
    (dr = () => ({
      from: {
        constraint: {
          left: { collection: `Ob8m9E0gb`, name: `ZeS11p5hZ`, type: `Identifier` },
          operator: `==`,
          right: { collection: `ZeS11p5hZ`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `Ob8m9E0gb`, data: ft, type: `Collection` },
        right: { alias: `ZeS11p5hZ`, data: ht, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `Ob8m9E0gb`, name: `JLL8JOGHV`, type: `Identifier` },
        { alias: `ZeS11p5hZ`, collection: `ZeS11p5hZ`, name: `id`, type: `Identifier` },
        {
          alias: `ZeS11p5hZ.Qrt_rd2FR`,
          collection: `ZeS11p5hZ`,
          name: `Qrt_rd2FR`,
          type: `Identifier`,
        },
        { collection: `Ob8m9E0gb`, name: `ciByNfHzo`, type: `Identifier` },
        { collection: `Ob8m9E0gb`, name: `da3SPTjC9`, type: `Identifier` },
        { collection: `Ob8m9E0gb`, name: `oAZyvtn5K`, type: `Identifier` },
        { collection: `Ob8m9E0gb`, name: `id`, type: `Identifier` },
      ],
    })),
    (fr = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = k(e, t, `Ob8m9E0gb`);
      return n(v(r), i, a);
    }),
    (pr = { Desktop: `WQLkyLRf1`, Phone: `t8ROkHIfN`, Tablet: `mKN5cngFV` }),
    (mr = ({ value: e }) =>
      ae()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (hr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: pr[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (gr = y(
      a(function (e, i) {
        let a = n(null),
          u = i ?? a,
          h = o(),
          { activeLocale: v, setLocale: y } = pe(),
          b = re(),
          { style: x, className: S, layoutId: T, variant: E, ...ee } = hr(e);
        ne(c(() => Tt({}, v), [v]));
        let [O, k] = oe(E, jn, !1),
          j = C(Pn, Ct, yt, _e, De, Ce, et),
          ae = t(ie)?.isLayoutTemplate,
          se = In(ae, !!t(p)?.transition?.layout);
        te();
        let ce = () => (Mn() ? O !== `t8ROkHIfN` : !0),
          P = () => !Mn() || O === `t8ROkHIfN`,
          le = fe(`ITm7MVvyC`),
          L = n(null),
          B = () => (Mn() ? ![`mKN5cngFV`, `t8ROkHIfN`].includes(O) : !0),
          me = () => !!(!Mn() || [`mKN5cngFV`, `t8ROkHIfN`].includes(O)),
          he = de();
        return (
          ue({}),
          l(ie.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: pr,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Fn,
            },
            children: d(m, {
              id: T ?? h,
              children: [
                l(mr, {
                  value: `html body { background: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)); }`,
                }),
                d(f.div, {
                  ...ee,
                  className: C(j, `framer-72rtr7`, S),
                  ref: u,
                  style: { ...x },
                  children: [
                    d(f.main, {
                      className: `framer-162phtq`,
                      "data-framer-name": `Main`,
                      layout: se,
                      children: [
                        l(`section`, {
                          className: `framer-opxj1e`,
                          "data-framer-name": `Hero Section`,
                          children: l(z, {
                            breakpoint: O,
                            overrides: { t8ROkHIfN: { fitImageDimension: `height` } },
                            children: l(F, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 4512,
                                intrinsicWidth: 5632,
                                loading: R((b?.y || 0) + 0 + 0 + 0 + 0 + 16),
                                pixelHeight: 4512,
                                pixelWidth: 5632,
                                sizes: `max(${b?.width || `100vw`} - 32px, 1px)`,
                                src: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp`,
                                srcSet: `../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-883017.webp 512w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-9cb107.webp 1024w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8.webp 2048w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-144bac.webp 4096w,../../assets/images/Wz15361ctqLcuqOL6f54dlMRsL8-f3d16b.webp 5632w`,
                              },
                              className: `framer-1y69297`,
                              "data-framer-name": `Bg Content`,
                              children: d(`div`, {
                                className: `framer-6yqi7g`,
                                "data-framer-name": `Container`,
                                children: [
                                  d(`div`, {
                                    className: `framer-x2raux`,
                                    "data-framer-name": `Section Title`,
                                    children: [
                                      l(z, {
                                        breakpoint: O,
                                        overrides: { t8ROkHIfN: { y: void 0 } },
                                        children: l(M, {
                                          height: 28,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            16 +
                                            120 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: l(A, {
                                            className: `framer-12zfb1a-container`,
                                            nodeId: `qs6phgAPx`,
                                            scopeId: `augiA20Il`,
                                            children: l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  Selq1Epo8: `All-in-one business ecosystem`,
                                                },
                                              },
                                              children: l(H, {
                                                btyoXJXaz: U,
                                                height: `100%`,
                                                id: `qs6phgAPx`,
                                                layoutId: `qs6phgAPx`,
                                                Selq1Epo8: `All in one ecosystem for your business`,
                                                variant: Y(`nJO_haG3O`),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      d(`div`, {
                                        className: `framer-1n5u1ej`,
                                        "data-framer-name": `Text & Button`,
                                        children: [
                                          d(`div`, {
                                            className: `framer-1c9ce69`,
                                            "data-framer-name": `Title & Subtext`,
                                            children: [
                                              d(`div`, {
                                                className: `framer-2d6shb`,
                                                "data-framer-name": `Title`,
                                                children: [
                                                  l(dn, {
                                                    __fromCanvasComponent: !0,
                                                    animate: Ln,
                                                    children: l(r, {
                                                      children: l(`h1`, {
                                                        className: `framer-styles-preset-qi1ayi`,
                                                        "data-styles-preset": `ZHicPb8Xd`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-alignment": `center`,
                                                          "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                        },
                                                        children: `The platform that`,
                                                      }),
                                                    }),
                                                    className: `framer-1vb1l4f`,
                                                    "data-framer-appear-id": `1vb1l4f`,
                                                    "data-framer-name": `The platform that helps you Build`,
                                                    fonts: [`Inter`],
                                                    initial: Rn,
                                                    optimized: !0,
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  d(pn, {
                                                    animate: zn,
                                                    className: `framer-1ownzfa`,
                                                    "data-framer-appear-id": `1ownzfa`,
                                                    "data-framer-name": `Text`,
                                                    initial: Rn,
                                                    optimized: !0,
                                                    children: [
                                                      l(N, {
                                                        __fromCanvasComponent: !0,
                                                        children: l(r, {
                                                          children: l(`h1`, {
                                                            className: `framer-styles-preset-qi1ayi`,
                                                            "data-styles-preset": `ZHicPb8Xd`,
                                                            dir: `auto`,
                                                            style: {
                                                              "--framer-text-alignment": `center`,
                                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                            },
                                                            children: `helps you`,
                                                          }),
                                                        }),
                                                        className: `framer-1amsq24`,
                                                        "data-framer-name": `helps you`,
                                                        fonts: [`Inter`],
                                                        verticalAlignment: `top`,
                                                        withExternalLayout: !0,
                                                      }),
                                                      l(M, {
                                                        children: l(A, {
                                                          className: `framer-ubcmm7-container`,
                                                          isModuleExternal: !0,
                                                          nodeId: `WLMGh4tVK`,
                                                          scopeId: `augiA20Il`,
                                                          children: l(Le, {
                                                            alignment: `flex-start`,
                                                            arrowOptions: {
                                                              arrowFill: `rgba(0, 0, 0, 0.2)`,
                                                              arrowGap: 10,
                                                              arrowPadding: 20,
                                                              arrowPaddingBottom: 0,
                                                              arrowPaddingLeft: 0,
                                                              arrowPaddingRight: 0,
                                                              arrowPaddingTop: 0,
                                                              arrowPosition: `auto`,
                                                              arrowRadius: 40,
                                                              arrowShouldFadeIn: !1,
                                                              arrowShouldSpace: !0,
                                                              arrowSize: 40,
                                                              showMouseControls: !1,
                                                            },
                                                            autoPlayControl: !0,
                                                            borderRadius: 0,
                                                            direction: `top`,
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
                                                            id: `WLMGh4tVK`,
                                                            intervalControl: 2,
                                                            itemAmount: 1,
                                                            layoutId: `WLMGh4tVK`,
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
                                                              l(f.div, {
                                                                className: `framer-1i6tikk`,
                                                                "data-framer-name": `Build`,
                                                                children: l(N, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: l(r, {
                                                                    children: l(`h1`, {
                                                                      className: `framer-styles-preset-u4ctgd`,
                                                                      "data-styles-preset": `SsXMH0HVD`,
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-text-alignment": `left`,
                                                                        "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                                      },
                                                                      children: `Build`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-1llqd7a`,
                                                                  "data-framer-name": `Build`,
                                                                  fonts: [`Inter`],
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                              l(f.div, {
                                                                className: `framer-w6hkjn`,
                                                                "data-framer-name": `Operate`,
                                                                children: l(N, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: l(r, {
                                                                    children: l(`h1`, {
                                                                      className: `framer-styles-preset-u4ctgd`,
                                                                      "data-styles-preset": `SsXMH0HVD`,
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-text-alignment": `left`,
                                                                        "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                                      },
                                                                      children: `Operate`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-u80je0`,
                                                                  "data-framer-name": `Operate`,
                                                                  fonts: [`Inter`],
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                              l(f.div, {
                                                                className: `framer-xvehh5`,
                                                                "data-framer-name": `Scale`,
                                                                children: l(N, {
                                                                  __fromCanvasComponent: !0,
                                                                  children: l(r, {
                                                                    children: l(`h1`, {
                                                                      className: `framer-styles-preset-u4ctgd`,
                                                                      "data-styles-preset": `SsXMH0HVD`,
                                                                      dir: `auto`,
                                                                      style: {
                                                                        "--framer-text-alignment": `left`,
                                                                        "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                                      },
                                                                      children: `Scale`,
                                                                    }),
                                                                  }),
                                                                  className: `framer-1nda6uh`,
                                                                  "data-framer-name": `Scale`,
                                                                  fonts: [`Inter`],
                                                                  verticalAlignment: `top`,
                                                                  withExternalLayout: !0,
                                                                }),
                                                              }),
                                                            ],
                                                            startFrom: 0,
                                                            style: {
                                                              height: `100%`,
                                                              width: `100%`,
                                                            },
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
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              l(dn, {
                                                __fromCanvasComponent: !0,
                                                animate: Bn,
                                                children: l(r, {
                                                  children: l(`p`, {
                                                    className: `framer-styles-preset-13ryzp6`,
                                                    "data-styles-preset": `Yw0GmpI8u`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                    },
                                                    children: `Scalora is a business platform designed to help teams manage marketing, operations, and growth from one workspace.`,
                                                  }),
                                                }),
                                                className: `framer-1ypdmnm`,
                                                "data-framer-appear-id": `1ypdmnm`,
                                                "data-framer-name": `Scalora is a business platform designed to help teams manage marketing, operations, and growth from one workspace.`,
                                                fonts: [`Inter`],
                                                initial: Rn,
                                                optimized: !0,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          l(D, {
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
                                              l(z, {
                                                breakpoint: O,
                                                overrides: {
                                                  t8ROkHIfN: {
                                                    width: `min(min(min(max(${b?.width || `100vw`} - 32px, 1px) - 32px, 1280px), 720px), 326px)`,
                                                    y: void 0,
                                                  },
                                                },
                                                children: l(M, {
                                                  height: 48,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    16 +
                                                    120 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    40 +
                                                    0 +
                                                    356,
                                                  children: l(hn, {
                                                    animate: Vn,
                                                    className: `framer-5n76r0-container`,
                                                    "data-framer-appear-id": `5n76r0`,
                                                    initial: Rn,
                                                    nodeId: `r5TMuOuPm`,
                                                    optimized: !0,
                                                    rendersWithMotion: !0,
                                                    scopeId: `augiA20Il`,
                                                    children: l(z, {
                                                      breakpoint: O,
                                                      overrides: {
                                                        mKN5cngFV: { R5LxmUA6p: e[1] },
                                                        t8ROkHIfN: {
                                                          R5LxmUA6p: e[2],
                                                          style: {
                                                            maxWidth: `100%`,
                                                            width: `100%`,
                                                          },
                                                        },
                                                      },
                                                      children: l(Xe, {
                                                        height: `100%`,
                                                        id: `r5TMuOuPm`,
                                                        layoutId: `r5TMuOuPm`,
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
                                  d(`div`, {
                                    className: `framer-jz0huk`,
                                    "data-framer-name": `Ui Elements`,
                                    children: [
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            background: {
                                              alt: `Scalora Card`,
                                              fit: `fill`,
                                              intrinsicHeight: 1304,
                                              intrinsicWidth: 1384,
                                              loading: R(
                                                (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  524 +
                                                  30.9879
                                              ),
                                              pixelHeight: 1304,
                                              pixelWidth: 1384,
                                              sizes: `280px`,
                                              src: `https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?width=1384&height=1304`,
                                              srcSet: `https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?scale-down-to=512&width=1384&height=1304 512w,https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?scale-down-to=1024&width=1384&height=1304 1024w,https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?width=1384&height=1304 1384w`,
                                            },
                                          },
                                          t8ROkHIfN: {
                                            background: {
                                              alt: `Scalora Card`,
                                              fit: `fill`,
                                              intrinsicHeight: 1304,
                                              intrinsicWidth: 1384,
                                              pixelHeight: 1304,
                                              pixelWidth: 1384,
                                              sizes: `137px`,
                                              src: `https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?width=1384&height=1304`,
                                              srcSet: `https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?scale-down-to=512&width=1384&height=1304 512w,https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?scale-down-to=1024&width=1384&height=1304 1024w,https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?width=1384&height=1304 1384w`,
                                            },
                                          },
                                        },
                                        children: l(gn, {
                                          __framer__loop: Un,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !0,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `mirror`,
                                          __framer__loopTransition: Hn,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          as: `figcaption`,
                                          background: {
                                            alt: `Scalora Card`,
                                            fit: `fill`,
                                            intrinsicHeight: 1304,
                                            intrinsicWidth: 1384,
                                            loading: R(
                                              (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                120 +
                                                0 +
                                                0 +
                                                524 +
                                                35.0073
                                            ),
                                            pixelHeight: 1304,
                                            pixelWidth: 1384,
                                            sizes: `340px`,
                                            src: `https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?width=1384&height=1304`,
                                            srcSet: `https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?scale-down-to=512&width=1384&height=1304 512w,https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?scale-down-to=1024&width=1384&height=1304 1024w,https://framerusercontent.com/images/ht6tZuEQ6ScE10uOaNZGTlOOBlQ.png?width=1384&height=1304 1384w`,
                                          },
                                          className: `framer-a3i7l7`,
                                          "data-framer-name": `Crm Card`,
                                          style: {
                                            rotateX: -30,
                                            rotateY: 40,
                                            transformPerspective: 3356,
                                          },
                                        }),
                                      }),
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            background: {
                                              alt: `Scalora Docs`,
                                              fit: `fill`,
                                              intrinsicHeight: 326,
                                              intrinsicWidth: 346,
                                              loading: R(
                                                (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  524 +
                                                  27.9879
                                              ),
                                              pixelHeight: 326,
                                              pixelWidth: 346,
                                              sizes: `280px`,
                                              src: `https://framerusercontent.com/images/vPXgU6Xkmo2wP3HBDxQ6PHOzYo.svg?width=346&height=326`,
                                            },
                                            transformTemplate: void 0,
                                          },
                                          t8ROkHIfN: {
                                            background: {
                                              alt: `Scalora Docs`,
                                              fit: `fill`,
                                              intrinsicHeight: 326,
                                              intrinsicWidth: 346,
                                              pixelHeight: 326,
                                              pixelWidth: 346,
                                              sizes: `137px`,
                                              src: `https://framerusercontent.com/images/vPXgU6Xkmo2wP3HBDxQ6PHOzYo.svg?width=346&height=326`,
                                            },
                                            transformTemplate: Kn,
                                          },
                                        },
                                        children: l(gn, {
                                          __framer__loop: Wn,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !0,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `mirror`,
                                          __framer__loopTransition: Hn,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          as: `figcaption`,
                                          background: {
                                            alt: `Scalora Docs`,
                                            fit: `fill`,
                                            intrinsicHeight: 326,
                                            intrinsicWidth: 346,
                                            loading: R(
                                              (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                120 +
                                                0 +
                                                0 +
                                                524 +
                                                52
                                            ),
                                            pixelHeight: 326,
                                            pixelWidth: 346,
                                            sizes: `340px`,
                                            src: `https://framerusercontent.com/images/vPXgU6Xkmo2wP3HBDxQ6PHOzYo.svg?width=346&height=326`,
                                          },
                                          className: `framer-1drxjh8`,
                                          "data-border": !0,
                                          "data-framer-name": `Docs Card`,
                                          style: {
                                            rotateX: -30,
                                            rotateY: 40,
                                            transformPerspective: 3356,
                                          },
                                          transformTemplate: Gn,
                                        }),
                                      }),
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            background: {
                                              alt: `Scalora Ops`,
                                              fit: `fill`,
                                              intrinsicHeight: 1304,
                                              intrinsicWidth: 1384,
                                              loading: R(
                                                (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  524 +
                                                  38.9879
                                              ),
                                              pixelHeight: 1304,
                                              pixelWidth: 1384,
                                              sizes: `280px`,
                                              src: `https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?width=1384&height=1304`,
                                              srcSet: `https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?scale-down-to=512&width=1384&height=1304 512w,https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?scale-down-to=1024&width=1384&height=1304 1024w,https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?width=1384&height=1304 1384w`,
                                            },
                                          },
                                          t8ROkHIfN: {
                                            background: {
                                              alt: `Scalora Ops`,
                                              fit: `fill`,
                                              intrinsicHeight: 1304,
                                              intrinsicWidth: 1384,
                                              pixelHeight: 1304,
                                              pixelWidth: 1384,
                                              sizes: `137px`,
                                              src: `https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?width=1384&height=1304`,
                                              srcSet: `https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?scale-down-to=512&width=1384&height=1304 512w,https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?scale-down-to=1024&width=1384&height=1304 1024w,https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?width=1384&height=1304 1384w`,
                                            },
                                            transformTemplate: Kn,
                                          },
                                        },
                                        children: l(gn, {
                                          __framer__loop: Un,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !0,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `mirror`,
                                          __framer__loopTransition: Hn,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          as: `figcaption`,
                                          background: {
                                            alt: `Scalora Ops`,
                                            fit: `fill`,
                                            intrinsicHeight: 1304,
                                            intrinsicWidth: 1384,
                                            loading: R(
                                              (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                120 +
                                                0 +
                                                0 +
                                                524 +
                                                42.0073
                                            ),
                                            pixelHeight: 1304,
                                            pixelWidth: 1384,
                                            sizes: `340px`,
                                            src: `https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?width=1384&height=1304`,
                                            srcSet: `https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?scale-down-to=512&width=1384&height=1304 512w,https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?scale-down-to=1024&width=1384&height=1304 1024w,https://framerusercontent.com/images/7OOtvt92pyTUjojYg8sJbuJbiwk.png?width=1384&height=1304 1384w`,
                                          },
                                          className: `framer-12csdyf`,
                                          "data-framer-name": `Ops Card`,
                                          style: {
                                            rotateX: -30,
                                            rotateY: 40,
                                            transformPerspective: 3356,
                                          },
                                        }),
                                      }),
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            background: {
                                              alt: `Scalora Mentor Card`,
                                              fit: `fill`,
                                              intrinsicHeight: 1304,
                                              intrinsicWidth: 1388,
                                              loading: R(
                                                (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  16 +
                                                  120 +
                                                  0 +
                                                  0 +
                                                  524 +
                                                  37.9879
                                              ),
                                              pixelHeight: 1304,
                                              pixelWidth: 1388,
                                              sizes: `280px`,
                                              src: `https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?width=1388&height=1304`,
                                              srcSet: `https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?scale-down-to=512&width=1388&height=1304 512w,https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?scale-down-to=1024&width=1388&height=1304 1024w,https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?width=1388&height=1304 1388w`,
                                            },
                                          },
                                          t8ROkHIfN: {
                                            background: {
                                              alt: `Scalora Mentor Card`,
                                              fit: `fill`,
                                              intrinsicHeight: 1304,
                                              intrinsicWidth: 1388,
                                              pixelHeight: 1304,
                                              pixelWidth: 1388,
                                              sizes: `137px`,
                                              src: `https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?width=1388&height=1304`,
                                              srcSet: `https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?scale-down-to=512&width=1388&height=1304 512w,https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?scale-down-to=1024&width=1388&height=1304 1024w,https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?width=1388&height=1304 1388w`,
                                            },
                                          },
                                        },
                                        children: l(gn, {
                                          __framer__loop: Wn,
                                          __framer__loopEffectEnabled: !0,
                                          __framer__loopPauseOffscreen: !0,
                                          __framer__loopRepeatDelay: 0,
                                          __framer__loopRepeatType: `mirror`,
                                          __framer__loopTransition: Hn,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          as: `figcaption`,
                                          background: {
                                            alt: `Scalora Mentor Card`,
                                            fit: `fill`,
                                            intrinsicHeight: 1304,
                                            intrinsicWidth: 1388,
                                            loading: R(
                                              (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                16 +
                                                120 +
                                                0 +
                                                0 +
                                                524 +
                                                34.0073
                                            ),
                                            pixelHeight: 1304,
                                            pixelWidth: 1388,
                                            sizes: `340px`,
                                            src: `https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?width=1388&height=1304`,
                                            srcSet: `https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?scale-down-to=512&width=1388&height=1304 512w,https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?scale-down-to=1024&width=1388&height=1304 1024w,https://framerusercontent.com/images/WqclxDkul2hF1qfXVLHbsd4Lc.png?width=1388&height=1304 1388w`,
                                          },
                                          className: `framer-1781ri8`,
                                          "data-framer-name": `Mentor Card`,
                                          style: {
                                            rotateX: -30,
                                            rotateY: 40,
                                            transformPerspective: 3356,
                                          },
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                        l(`section`, {
                          className: `framer-1eobnb7`,
                          "data-framer-name": `Trusted Company`,
                          children: d(`div`, {
                            className: `framer-ayi3et`,
                            "data-framer-name": `Container`,
                            children: [
                              l(J, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1pwajdi`,
                                "data-framer-name": `Section Title`,
                                children: l(N, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(`p`, {
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
                                  className: `framer-oeg1bn`,
                                  "data-framer-name": `We working with`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              d(`div`, {
                                className: `framer-1iqnpmh`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  l(`div`, {
                                    className: `framer-1vb6hfb`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-hi869m`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-n82bn1`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-g5g25l`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1c1uhcl`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1jtc9tq`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1q425if`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  l(`div`, {
                                    className: `framer-nxn30o`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  d(`div`, {
                                    className: `framer-1g436x4`,
                                    "data-border": !0,
                                    "data-framer-name": `Left Content`,
                                    children: [
                                      d(`div`, {
                                        className: `framer-2jpnu4`,
                                        "data-framer-name": `Title`,
                                        children: [
                                          l(N, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`p`, {
                                                className: `framer-styles-preset-i5ktzk`,
                                                "data-styles-preset": `kumYuXBDg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `Trusted by`,
                                              }),
                                            }),
                                            className: `framer-kqxo7o`,
                                            "data-framer-name": `Trusted by`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          l(N, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`h4`, {
                                                className: `framer-styles-preset-1qcdpqr`,
                                                "data-styles-preset": `bz7TF8GsX`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `600+ Brands`,
                                              }),
                                            }),
                                            className: `framer-3zihpy`,
                                            "data-framer-name": `600+ Brands`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      d(`div`, {
                                        className: `framer-c3mebs`,
                                        "data-framer-name": `Star & text`,
                                        children: [
                                          l(g, {
                                            className: `framer-1b8v8vp`,
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
                                          l(N, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`p`, {
                                                className: `framer-styles-preset-i5ktzk`,
                                                "data-styles-preset": `kumYuXBDg`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `4.8/5 Average user rating`,
                                              }),
                                            }),
                                            className: `framer-1uzrsyk`,
                                            "data-framer-name": `4.8/5 Average user rating`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `center`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  d(`div`, {
                                    className: `framer-fsu0g5`,
                                    "data-border": !0,
                                    "data-framer-name": `Ticker Wrappr`,
                                    children: [
                                      l(`div`, {
                                        className: `framer-1x244x1`,
                                        "data-framer-name": `Ticker 1`,
                                        children: l(z, {
                                          breakpoint: O,
                                          overrides: {
                                            t8ROkHIfN: {
                                              tickerEffectDraggable: !0,
                                              tickerEffectVelocity: 30,
                                            },
                                          },
                                          children: d(_n, {
                                            className: `framer-p16ovu`,
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
                                              l(w, {
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1124 +
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
                                                    t8ROkHIfN: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            319 +
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
                                                  children: l(F, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: R(
                                                        (b?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1124 +
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
                                                    className: `framer-1r2jmcu`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                              l(w, {
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1124 +
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
                                                    t8ROkHIfN: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            319 +
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
                                                  children: l(F, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 577,
                                                      loading: R(
                                                        (b?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1124 +
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
                                                    className: `framer-h5okev`,
                                                    "data-framer-name": `Wondrot`,
                                                  }),
                                                }),
                                              }),
                                              l(w, {
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1124 +
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
                                                    t8ROkHIfN: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            319 +
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
                                                  children: l(F, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 603,
                                                      loading: R(
                                                        (b?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1124 +
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
                                                    className: `framer-14v3ixw`,
                                                    "data-framer-name": `Raonadle`,
                                                  }),
                                                }),
                                              }),
                                              l(w, {
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1124 +
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
                                                    t8ROkHIfN: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            319 +
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
                                                  children: l(F, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: R(
                                                        (b?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1124 +
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
                                                    className: `framer-98e8zk`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                      l(`div`, {
                                        className: `framer-12y1nli`,
                                        "data-framer-name": `Line`,
                                      }),
                                      l(`div`, {
                                        className: `framer-1jgycy0`,
                                        "data-framer-name": `Ticker 2`,
                                        children: l(z, {
                                          breakpoint: O,
                                          overrides: {
                                            t8ROkHIfN: {
                                              tickerEffectDraggable: !0,
                                              tickerEffectVelocity: 30,
                                            },
                                          },
                                          children: d(_n, {
                                            className: `framer-k69uvg`,
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
                                              l(w, {
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1124 +
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
                                                    t8ROkHIfN: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 577,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            319 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            61 +
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
                                                  children: l(F, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 577,
                                                      loading: R(
                                                        (b?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1124 +
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
                                                    className: `framer-o2m4q8`,
                                                    "data-framer-name": `Wondrot`,
                                                  }),
                                                }),
                                              }),
                                              l(w, {
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1124 +
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
                                                    t8ROkHIfN: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            319 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            61 +
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
                                                  children: l(F, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: R(
                                                        (b?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1124 +
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
                                                    className: `framer-18mi89`,
                                                    "data-framer-name": `Bonraow`,
                                                  }),
                                                }),
                                              }),
                                              l(w, {
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1124 +
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
                                                    t8ROkHIfN: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 603,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            319 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            61 +
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
                                                  children: l(F, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 603,
                                                      loading: R(
                                                        (b?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1124 +
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
                                                    className: `framer-1ee4546`,
                                                    "data-framer-name": `Raonadle`,
                                                  }),
                                                }),
                                              }),
                                              l(w, {
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            1124 +
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
                                                    t8ROkHIfN: {
                                                      background: {
                                                        alt: `Logo`,
                                                        fit: `fill`,
                                                        intrinsicHeight: 128,
                                                        intrinsicWidth: 595,
                                                        loading: R(
                                                          (b?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            319 +
                                                            60 +
                                                            0 +
                                                            154 +
                                                            0 +
                                                            356 +
                                                            24 +
                                                            61 +
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
                                                  children: l(F, {
                                                    background: {
                                                      alt: `Logo`,
                                                      fit: `fill`,
                                                      intrinsicHeight: 128,
                                                      intrinsicWidth: 595,
                                                      loading: R(
                                                        (b?.y || 0) +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          1124 +
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
                                                    className: `framer-zdcms1`,
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
                        l(`section`, {
                          className: `framer-pe4yer`,
                          "data-framer-name": `By The Number`,
                          children: d(`div`, {
                            className: `framer-1r1yp8u`,
                            "data-framer-name": `Container`,
                            children: [
                              d(J, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-dfty4q`,
                                "data-framer-name": `Section Title`,
                                children: [
                                  d(`div`, {
                                    className: `framer-lf7o82`,
                                    "data-framer-name": `Title & Tag`,
                                    children: [
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2027 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          t8ROkHIfN: {
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1090 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: l(M, {
                                          height: 28,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1918 +
                                            100 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0,
                                          children: l(A, {
                                            className: `framer-1jhm0c2-container`,
                                            nodeId: `ZrDCbFtj7`,
                                            scopeId: `augiA20Il`,
                                            children: l(H, {
                                              btyoXJXaz: U,
                                              height: `100%`,
                                              id: `ZrDCbFtj7`,
                                              layoutId: `ZrDCbFtj7`,
                                              Selq1Epo8: `By the numbers`,
                                              variant: Y(`mXdNMwppf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(r, {
                                          children: l(`h2`, {
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
                                        className: `framer-1gefgn1`,
                                        "data-framer-name": `Numbers that reflect real growth`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  l(D, {
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
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            y: (b?.y || 0) + 0 + 0 + 0 + 2027 + 80 + 0 + 0 + 0 + 62,
                                          },
                                          t8ROkHIfN: {
                                            width: `calc(min(max(${b?.width || `100vw`} - 32px, 1px), 1280px) - 24px)`,
                                            y:
                                              (b?.y || 0) + 0 + 0 + 0 + 1090 + 60 + 0 + 0 + 0 + 126,
                                          },
                                        },
                                        children: l(M, {
                                          height: 44,
                                          y: (b?.y || 0) + 0 + 0 + 0 + 1918 + 100 + 0 + 0 + 0 + 62,
                                          children: l(A, {
                                            className: `framer-mgxa7a-container`,
                                            nodeId: `SjjD1DkqQ`,
                                            scopeId: `augiA20Il`,
                                            children: l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                mKN5cngFV: { kDj5Ixhw1: e[1] },
                                                t8ROkHIfN: {
                                                  kDj5Ixhw1: e[2],
                                                  style: { width: `100%` },
                                                },
                                              },
                                              children: l(Oe, {
                                                height: `100%`,
                                                id: `SjjD1DkqQ`,
                                                kDj5Ixhw1: e[0],
                                                kJdISHL06: `Book a demo`,
                                                layoutId: `SjjD1DkqQ`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                              d(`div`, {
                                className: `framer-1g484w9`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  d(`div`, {
                                    className: `framer-2aoxrx`,
                                    "data-border": !0,
                                    "data-framer-name": `Left sight`,
                                    children: [
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            width: `max(min(max(${b?.width || `100vw`} - 80px, 1px), 1280px) / 2, 1px)`,
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2027 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          t8ROkHIfN: {
                                            width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1090 +
                                              60 +
                                              0 +
                                              210 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: l(M, {
                                          height: 241,
                                          width: `max((min(max(${b?.width || `100vw`} - 160px, 1px), 1280px) * 0.53 - 14px) / 2, 1px)`,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1918 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            0,
                                          children: l(bn, {
                                            __framer__animate: { transition: X },
                                            __framer__animateOnce: !0,
                                            __framer__enter: qn,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1587ars-container`,
                                            nodeId: `keXGmqIfs`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                mKN5cngFV: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 1,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: Y(`Esw7BwEul`),
                                                  WuzKfyc1c: `32px`,
                                                },
                                                t8ROkHIfN: {
                                                  variant: Y(`Esw7BwEul`),
                                                  WuzKfyc1c: `24px`,
                                                },
                                              },
                                              children: l(je, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `keXGmqIfs`,
                                                layoutId: `keXGmqIfs`,
                                                NkyB81tga: `120K+`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 0,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `Daily Workflows. And reducing manual work across departments.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: Be,
                                                variant: Y(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            width: `max(min(max(${b?.width || `100vw`} - 80px, 1px), 1280px) / 2, 1px)`,
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2027 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          t8ROkHIfN: {
                                            width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1090 +
                                              60 +
                                              0 +
                                              210 +
                                              0 +
                                              0 +
                                              0 +
                                              241,
                                          },
                                        },
                                        children: l(M, {
                                          height: 241,
                                          width: `max((min(max(${b?.width || `100vw`} - 160px, 1px), 1280px) * 0.53 - 14px) / 2, 1px)`,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1918 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            241,
                                          children: l(bn, {
                                            __framer__animate: { transition: X },
                                            __framer__animateOnce: !0,
                                            __framer__enter: qn,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1kujmp0-container`,
                                            nodeId: `vdzzBaTKT`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                mKN5cngFV: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: Y(`Esw7BwEul`),
                                                  WuzKfyc1c: `32px`,
                                                },
                                                t8ROkHIfN: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: Y(`Esw7BwEul`),
                                                  WuzKfyc1c: `24px`,
                                                },
                                              },
                                              children: l(je, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `vdzzBaTKT`,
                                                layoutId: `vdzzBaTKT`,
                                                NkyB81tga: `45%`,
                                                OFN07Rxib: {
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderStyle: `solid`,
                                                  borderWidth: 0,
                                                },
                                                SSIrHXMQf: `Productivity Increase. After consolidating tools into platform`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: Ve,
                                                variant: Y(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  l(J, {
                                    __framer__animate: { transition: X },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Jn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1507efr`,
                                    "data-framer-name": `Annual growth`,
                                    children: l(`div`, {
                                      className: `framer-9btq5g`,
                                      "data-framer-name": `Container`,
                                      children: l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 1852,
                                              intrinsicWidth: 2368,
                                              loading: R(
                                                (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  2027 +
                                                  80 +
                                                  0 +
                                                  186 +
                                                  0 +
                                                  241 +
                                                  0 +
                                                  0 +
                                                  4
                                              ),
                                              pixelHeight: 1852,
                                              pixelWidth: 2368,
                                              sizes: `max(min(max(${b?.width || `100vw`} - 80px, 1px), 1280px) - 8px, 1px)`,
                                              src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                                              srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                                            },
                                            fitImageDimension: void 0,
                                          },
                                          t8ROkHIfN: {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              intrinsicHeight: 1852,
                                              intrinsicWidth: 2368,
                                              loading: R(
                                                (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1090 +
                                                  60 +
                                                  0 +
                                                  210 +
                                                  0 +
                                                  482 +
                                                  0 +
                                                  0 +
                                                  4
                                              ),
                                              pixelHeight: 1852,
                                              pixelWidth: 2368,
                                              sizes: `max(min(max(${b?.width || `100vw`} - 32px, 1px), 1280px) - 8px, 1px)`,
                                              src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                                              srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                                            },
                                          },
                                        },
                                        children: d(F, {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 1852,
                                            intrinsicWidth: 2368,
                                            loading: R(
                                              (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                1918 +
                                                100 +
                                                0 +
                                                186 +
                                                5.5 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 1852,
                                            pixelWidth: 2368,
                                            sizes: `max(min(max(${b?.width || `100vw`} - 160px, 1px), 1280px) * 0.47, 1px)`,
                                            src: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp`,
                                            srcSet: `../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-712879.webp 512w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI.webp 1024w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-20b5ca.webp 2048w,../../assets/images/QkXmMLKPs8zpPnf0a8aAwPZHbI-6d9611.webp 2368w`,
                                          },
                                          className: `framer-1vyzxwt`,
                                          "data-framer-name": `Content `,
                                          fitImageDimension: `height`,
                                          children: [
                                            l(g, {
                                              className: `framer-4009qr`,
                                              "data-framer-name": `Logo`,
                                              fill: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                              intrinsicHeight: 150,
                                              intrinsicWidth: 150,
                                              svg: `<svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="149" height="149" rx="15.5" stroke="#EC6F10" stroke-opacity="0.2"/>
<rect x="15.5" y="15.5" width="119" height="119" rx="13.5" stroke="#EC6F10" stroke-opacity="0.3"/>
<rect x="30" y="30" width="90" height="90" rx="12" fill="#EC6F10" fill-opacity="0.2"/>
<g filter="url(#filter0_d_14514_1066)">
<path d="M58.996 72.8769C66.2367 71.9756 71.9756 66.2367 72.8769 58.9962C73.0133 57.9 73.8953 57 75 57C76.1047 57 76.9867 57.9 77.1231 58.9962C78.0244 66.2367 83.7633 71.9756 91.0038 72.8769C92.1 73.0133 93 73.8953 93 75C93 76.1047 92.1 76.9867 91.0038 77.1231C83.7633 78.0244 78.0244 83.7633 77.1231 91.0038C76.9867 92.1 76.1047 93 75 93C73.8953 93 73.0133 92.1 72.8769 91.0038C71.9756 83.7633 66.2367 78.0244 58.996 77.1231C57.8999 76.9867 57 76.1047 57 75C57 73.8953 57.8999 73.0133 58.996 72.8769Z" fill="#EC6F10"/>
<path d="M58.996 72.8769C66.2367 71.9756 71.9756 66.2367 72.8769 58.9962C73.0133 57.9 73.8953 57 75 57C76.1047 57 76.9867 57.9 77.1231 58.9962C78.0244 66.2367 83.7633 71.9756 91.0038 72.8769C92.1 73.0133 93 73.8953 93 75C93 76.1047 92.1 76.9867 91.0038 77.1231C83.7633 78.0244 78.0244 83.7633 77.1231 91.0038C76.9867 92.1 76.1047 93 75 93C73.8953 93 73.0133 92.1 72.8769 91.0038C71.9756 83.7633 66.2367 78.0244 58.996 77.1231C57.8999 76.9867 57 76.1047 57 75C57 73.8953 57.8999 73.0133 58.996 72.8769Z" stroke="#EC6F10" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_14514_1066" x="54.75" y="54.75" width="40.5" height="42.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.592308 0 0 0 0 0.261187 0 0 0 0 0.236354 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14514_1066"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14514_1066" result="shape"/>
</filter>
</defs>
</svg>
`,
                                              withExternalLayout: !0,
                                            }),
                                            d(`div`, {
                                              className: `framer-1ntqv4x`,
                                              "data-border": !0,
                                              "data-framer-name": `Growth card`,
                                              children: [
                                                l(N, {
                                                  __fromCanvasComponent: !0,
                                                  children: l(r, {
                                                    children: l(`p`, {
                                                      className: `framer-styles-preset-13ryzp6`,
                                                      "data-styles-preset": `Yw0GmpI8u`,
                                                      dir: `auto`,
                                                      style: { "--framer-text-alignment": `left` },
                                                      children: `Annual growth`,
                                                    }),
                                                  }),
                                                  className: `framer-1mc7jon`,
                                                  "data-framer-name": `Annual growth`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                d(`div`, {
                                                  className: `framer-q6qw59`,
                                                  "data-framer-name": `Text`,
                                                  children: [
                                                    l(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: l(r, {
                                                        children: l(`h2`, {
                                                          className: `framer-styles-preset-3yq5jl`,
                                                          "data-styles-preset": `cPVM1_Pc1`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                          },
                                                          children: `5x`,
                                                        }),
                                                      }),
                                                      className: `framer-1ojalmm`,
                                                      "data-framer-name": `5x`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    l(N, {
                                                      __fromCanvasComponent: !0,
                                                      children: l(r, {
                                                        children: l(`p`, {
                                                          className: `framer-styles-preset-i5ktzk`,
                                                          "data-styles-preset": `kumYuXBDg`,
                                                          dir: `auto`,
                                                          style: {
                                                            "--framer-text-alignment": `left`,
                                                            "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                                          },
                                                          children: `We're a team of creative minds and strategic thinkers.`,
                                                        }),
                                                      }),
                                                      className: `framer-vi9ouz`,
                                                      "data-framer-name": `We're a team of creative minds and strategic thinkers.`,
                                                      fonts: [`Inter`],
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(`div`, {
                                    className: `framer-f2p58c`,
                                    "data-border": !0,
                                    "data-framer-name": `Right sight`,
                                    children: [
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            width: `max(min(max(${b?.width || `100vw`} - 80px, 1px), 1280px) / 2, 1px)`,
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2027 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              878 +
                                              0,
                                          },
                                          t8ROkHIfN: {
                                            width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1090 +
                                              60 +
                                              0 +
                                              210 +
                                              0 +
                                              764 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: l(M, {
                                          height: 241,
                                          width: `max((min(max(${b?.width || `100vw`} - 160px, 1px), 1280px) * 0.53 - 14px) / 2, 1px)`,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1918 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            0,
                                          children: l(bn, {
                                            __framer__animate: { transition: X },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Yn,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1flws91-container`,
                                            nodeId: `d_O9ydYK_`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                mKN5cngFV: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 1,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 1,
                                                  },
                                                  variant: Y(`Esw7BwEul`),
                                                  WuzKfyc1c: `32px`,
                                                },
                                                t8ROkHIfN: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 1,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 1,
                                                  },
                                                  variant: Y(`Esw7BwEul`),
                                                  WuzKfyc1c: `24px`,
                                                },
                                              },
                                              children: l(je, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `d_O9ydYK_`,
                                                layoutId: `d_O9ydYK_`,
                                                NkyB81tga: `5,000+`,
                                                OFN07Rxib: {
                                                  borderBottomWidth: 1,
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderLeftWidth: 0,
                                                  borderRightWidth: 0,
                                                  borderStyle: `solid`,
                                                  borderTopWidth: 0,
                                                },
                                                SSIrHXMQf: `Active Teams. Growing their business on Scalora`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: Pe,
                                                variant: Y(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            width: `max(min(max(${b?.width || `100vw`} - 80px, 1px), 1280px) / 2, 1px)`,
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2027 +
                                              80 +
                                              0 +
                                              186 +
                                              0 +
                                              878 +
                                              0,
                                          },
                                          t8ROkHIfN: {
                                            width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              1090 +
                                              60 +
                                              0 +
                                              210 +
                                              0 +
                                              764 +
                                              0 +
                                              241,
                                          },
                                        },
                                        children: l(M, {
                                          height: 241,
                                          width: `max((min(max(${b?.width || `100vw`} - 160px, 1px), 1280px) * 0.53 - 14px) / 2, 1px)`,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            1918 +
                                            100 +
                                            0 +
                                            186 +
                                            0 +
                                            0 +
                                            241,
                                          children: l(bn, {
                                            __framer__animate: { transition: X },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Yn,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                            className: `framer-1t3k37u-container`,
                                            nodeId: `ono6GfeiS`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                mKN5cngFV: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 1,
                                                  },
                                                  variant: Y(`Esw7BwEul`),
                                                  WuzKfyc1c: `32px`,
                                                },
                                                t8ROkHIfN: {
                                                  OFN07Rxib: {
                                                    borderBottomWidth: 0,
                                                    borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                    borderLeftWidth: 0,
                                                    borderRightWidth: 0,
                                                    borderStyle: `solid`,
                                                    borderTopWidth: 0,
                                                  },
                                                  variant: Y(`Esw7BwEul`),
                                                  WuzKfyc1c: `24px`,
                                                },
                                              },
                                              children: l(je, {
                                                fbbMtb5dq: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                height: `100%`,
                                                id: `ono6GfeiS`,
                                                layoutId: `ono6GfeiS`,
                                                NkyB81tga: `32%`,
                                                OFN07Rxib: {
                                                  borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                  borderStyle: `solid`,
                                                  borderWidth: 0,
                                                },
                                                SSIrHXMQf: `Daily Workflows. And reducing manual work across departments.`,
                                                style: { width: `100%` },
                                                uaqhQB_LA: He,
                                                variant: Y(`MyFCRv1YA`),
                                                width: `100%`,
                                                WuzKfyc1c: `40px`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  l(`div`, {
                                    className: `framer-13su5le`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-2yq275`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1szdjvy`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-9ye8on`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  l(`div`, {
                                    className: `framer-o63at`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1m49seo`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  l(`div`, {
                                    className: `framer-q3eolu`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1p3ogcp`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l(`section`, {
                          className: `framer-1leuevi`,
                          "data-framer-name": `Our Products`,
                          children: d(`div`, {
                            className: `framer-5q9yio`,
                            "data-framer-name": `Container`,
                            children: [
                              d(J, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1algxma`,
                                "data-framer-name": `Section Title`,
                                children: [
                                  l(z, {
                                    breakpoint: O,
                                    overrides: {
                                      mKN5cngFV: {
                                        y: (b?.y || 0) + 0 + 0 + 0 + 3492 + 80 + 0 + 0 + 0 + 0,
                                      },
                                      t8ROkHIfN: {
                                        y: (b?.y || 0) + 0 + 0 + 0 + 2666 + 60 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: l(M, {
                                      height: 28,
                                      y: (b?.y || 0) + 0 + 0 + 0 + 2786 + 100 + 0 + 0 + 0 + 0,
                                      children: l(A, {
                                        className: `framer-k2m80j-container`,
                                        nodeId: `H4IcfRCom`,
                                        scopeId: `augiA20Il`,
                                        children: l(H, {
                                          btyoXJXaz: U,
                                          height: `100%`,
                                          id: `H4IcfRCom`,
                                          layoutId: `H4IcfRCom`,
                                          Selq1Epo8: `Our products`,
                                          variant: Y(`mXdNMwppf`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  l(N, {
                                    __fromCanvasComponent: !0,
                                    children: l(r, {
                                      children: l(`h2`, {
                                        className: `framer-styles-preset-3yq5jl`,
                                        "data-styles-preset": `cPVM1_Pc1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        },
                                        children: `Meet the Scalora product ecosystem`,
                                      }),
                                    }),
                                    className: `framer-he0n1k`,
                                    "data-framer-name": `Meet the Scalora product ecosystem`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              d(`div`, {
                                className: `framer-1duozfb`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  ce() &&
                                    l(z, {
                                      breakpoint: O,
                                      overrides: {
                                        mKN5cngFV: {
                                          width: `min(max(${b?.width || `100vw`} - 80px, 1px), 1280px)`,
                                          y: (b?.y || 0) + 0 + 0 + 0 + 3492 + 80 + 0 + 162 + 0 + 0,
                                        },
                                      },
                                      children: l(M, {
                                        height: 646,
                                        width: `min(max(${b?.width || `100vw`} - 160px, 1px), 1280px)`,
                                        y: (b?.y || 0) + 0 + 0 + 0 + 2786 + 100 + 0 + 182 + 0 + 0,
                                        children: l(A, {
                                          className: `framer-12ll1xn-container hidden-fpsd0l`,
                                          "data-framer-name": `Product for Desktop`,
                                          name: `Product for Desktop`,
                                          nodeId: `n8_XmalXW`,
                                          scopeId: `augiA20Il`,
                                          children: l(z, {
                                            breakpoint: O,
                                            overrides: { mKN5cngFV: { variant: Y(`kNFTl4UTd`) } },
                                            children: l(Xt, {
                                              height: `100%`,
                                              id: `n8_XmalXW`,
                                              layoutId: `n8_XmalXW`,
                                              name: `Product for Desktop`,
                                              style: { width: `100%` },
                                              variant: Y(`m2qKeD_C4`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  P() &&
                                    d(`div`, {
                                      className: `framer-11xabqd hidden-72rtr7 hidden-1neqyyn`,
                                      "data-framer-name": `Product for Phone`,
                                      children: [
                                        d(`div`, {
                                          className: `framer-gexgte`,
                                          "data-framer-name": `Scalora CRM`,
                                          children: [
                                            l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2666 +
                                                    60 +
                                                    0 +
                                                    142 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: l(M, {
                                                height: 104,
                                                children: l(A, {
                                                  className: `framer-1f25gwp-container`,
                                                  nodeId: `VGiXa43Xw`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(z, {
                                                    breakpoint: O,
                                                    overrides: { t8ROkHIfN: { pUUUNhwye: `20px` } },
                                                    children: l(G, {
                                                      EwLZIb17Y: {
                                                        borderBottomWidth: 1,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 0,
                                                      },
                                                      height: `100%`,
                                                      id: `VGiXa43Xw`,
                                                      layoutId: `VGiXa43Xw`,
                                                      pUUUNhwye: `32px 40px 32px 40px`,
                                                      Re7XJeJgH: `Scalora CRM`,
                                                      style: { width: `100%` },
                                                      variant: Y(`BbW6ef8MA`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2666 +
                                                    60 +
                                                    0 +
                                                    142 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    108,
                                                },
                                              },
                                              children: l(M, {
                                                height: 862,
                                                children: l(A, {
                                                  className: `framer-z0o758-container`,
                                                  nodeId: `Gt5zzup3M`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(cn, {
                                                    height: `100%`,
                                                    id: `Gt5zzup3M`,
                                                    layoutId: `Gt5zzup3M`,
                                                    OjyMJJ76V: `Manage leads, automate follow-ups, track deals, and close faster with a smart, visual CRM built for modern sales teams.`,
                                                    style: { width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(`div`, {
                                          className: `framer-ngsp1m`,
                                          "data-framer-name": `Scalora Marketing`,
                                          children: [
                                            l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2666 +
                                                    60 +
                                                    0 +
                                                    142 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    974 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: l(M, {
                                                height: 104,
                                                children: l(A, {
                                                  className: `framer-8si3ng-container`,
                                                  nodeId: `x9Ofv1zpF`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(z, {
                                                    breakpoint: O,
                                                    overrides: { t8ROkHIfN: { pUUUNhwye: `20px` } },
                                                    children: l(G, {
                                                      EwLZIb17Y: {
                                                        borderBottomWidth: 1,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 1,
                                                      },
                                                      height: `100%`,
                                                      id: `x9Ofv1zpF`,
                                                      layoutId: `x9Ofv1zpF`,
                                                      pUUUNhwye: `32px 40px 32px 40px`,
                                                      Re7XJeJgH: `Scalora Marketing`,
                                                      style: { width: `100%` },
                                                      variant: Y(`BbW6ef8MA`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2666 +
                                                    60 +
                                                    0 +
                                                    142 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    974 +
                                                    0 +
                                                    108,
                                                },
                                              },
                                              children: l(M, {
                                                height: 862,
                                                children: l(A, {
                                                  className: `framer-1j7ddp8-container`,
                                                  nodeId: `U2EEY7eqp`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(cn, {
                                                    height: `100%`,
                                                    id: `U2EEY7eqp`,
                                                    layoutId: `U2EEY7eqp`,
                                                    NzyRMmqdn: Q(
                                                      {
                                                        pixelHeight: 1716,
                                                        pixelWidth: 2832,
                                                        src: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716`,
                                                        srcSet: `https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qfbWm7UFU1oFeP3A9ArXEhB1Ng.png?width=2832&height=1716 2832w`,
                                                      },
                                                      ``
                                                    ),
                                                    OjyMJJ76V: `Plan, launch, and optimize campaigns across email, ads, and landing pages — all tracked in one dashboard.`,
                                                    style: { width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(`div`, {
                                          className: `framer-1bkzypw`,
                                          "data-framer-name": `Scalora Marketing`,
                                          children: [
                                            l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2666 +
                                                    60 +
                                                    0 +
                                                    142 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1948 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: l(M, {
                                                height: 104,
                                                children: l(A, {
                                                  className: `framer-1g44asg-container`,
                                                  nodeId: `KoIMTksbP`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(z, {
                                                    breakpoint: O,
                                                    overrides: { t8ROkHIfN: { pUUUNhwye: `20px` } },
                                                    children: l(G, {
                                                      EwLZIb17Y: {
                                                        borderBottomWidth: 1,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 1,
                                                      },
                                                      height: `100%`,
                                                      id: `KoIMTksbP`,
                                                      layoutId: `KoIMTksbP`,
                                                      pUUUNhwye: `32px 40px 32px 40px`,
                                                      Re7XJeJgH: `Scalora Docs`,
                                                      style: { width: `100%` },
                                                      variant: Y(`BbW6ef8MA`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2666 +
                                                    60 +
                                                    0 +
                                                    142 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1948 +
                                                    0 +
                                                    108,
                                                },
                                              },
                                              children: l(M, {
                                                height: 862,
                                                children: l(A, {
                                                  className: `framer-1bueoiq-container`,
                                                  nodeId: `TxyMkQuXW`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(cn, {
                                                    height: `100%`,
                                                    id: `TxyMkQuXW`,
                                                    layoutId: `TxyMkQuXW`,
                                                    NzyRMmqdn: Q(
                                                      {
                                                        pixelHeight: 1716,
                                                        pixelWidth: 2832,
                                                        src: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716`,
                                                        srcSet: `https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/qiVsqCkQbquG9MRNwpJMfCfITU.png?width=2832&height=1716 2832w`,
                                                      },
                                                      ``
                                                    ),
                                                    OjyMJJ76V: `Create, manage, and collaborate on documentation, SOPs, and internal knowledge in one flexible workspace.`,
                                                    style: { width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        d(`div`, {
                                          className: `framer-f1fduy`,
                                          "data-framer-name": `Scalora Marketing`,
                                          children: [
                                            l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2666 +
                                                    60 +
                                                    0 +
                                                    142 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2922 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: l(M, {
                                                height: 104,
                                                children: l(A, {
                                                  className: `framer-jxr4sk-container`,
                                                  nodeId: `GDKJoC3WA`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(z, {
                                                    breakpoint: O,
                                                    overrides: { t8ROkHIfN: { pUUUNhwye: `20px` } },
                                                    children: l(G, {
                                                      EwLZIb17Y: {
                                                        borderBottomWidth: 1,
                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                        borderLeftWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderStyle: `solid`,
                                                        borderTopWidth: 1,
                                                      },
                                                      height: `100%`,
                                                      id: `GDKJoC3WA`,
                                                      layoutId: `GDKJoC3WA`,
                                                      pUUUNhwye: `32px 40px 32px 40px`,
                                                      Re7XJeJgH: `Scalora Ops`,
                                                      style: { width: `100%` },
                                                      variant: Y(`BbW6ef8MA`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(z, {
                                              breakpoint: O,
                                              overrides: {
                                                t8ROkHIfN: {
                                                  width: `min(max(${b?.width || `100vw`} - 32px, 1px), 1280px)`,
                                                  y:
                                                    (b?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2666 +
                                                    60 +
                                                    0 +
                                                    142 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    2922 +
                                                    0 +
                                                    108,
                                                },
                                              },
                                              children: l(M, {
                                                height: 862,
                                                children: l(A, {
                                                  className: `framer-979sb0-container`,
                                                  nodeId: `oelhITd6C`,
                                                  scopeId: `augiA20Il`,
                                                  children: l(cn, {
                                                    height: `100%`,
                                                    id: `oelhITd6C`,
                                                    layoutId: `oelhITd6C`,
                                                    NzyRMmqdn: Q(
                                                      {
                                                        pixelHeight: 1716,
                                                        pixelWidth: 2832,
                                                        src: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716`,
                                                        srcSet: `https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=512&width=2832&height=1716 512w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=1024&width=2832&height=1716 1024w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?scale-down-to=2048&width=2832&height=1716 2048w,https://framerusercontent.com/images/EmnrdWN6SggDKzbTtyNaORxwh8.png?width=2832&height=1716 2832w`,
                                                      },
                                                      ``
                                                    ),
                                                    OjyMJJ76V: `Build workflows that connect your teams, data, and tools — without complex integrations.`,
                                                    style: { width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  l(`div`, {
                                    className: `framer-1q286fz`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-aaxtx0`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1mph3l2`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-17gg8xc`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  l(`div`, {
                                    className: `framer-prjrtb`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1vulxfa`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  l(`div`, {
                                    className: `framer-3frspw`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1n6ij6r`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l(`section`, {
                          className: `framer-1kc8o5e`,
                          "data-framer-name": `Case study`,
                          children: d(`div`, {
                            className: `framer-pmshyw`,
                            "data-framer-name": `Container`,
                            children: [
                              d(J, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-7xv4wm`,
                                "data-framer-name": `Section Title`,
                                children: [
                                  d(`div`, {
                                    className: `framer-z0lef`,
                                    "data-framer-name": `Tag & Title`,
                                    children: [
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              4460 +
                                              100 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          t8ROkHIfN: {
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              6820 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: l(M, {
                                          height: 28,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            3814 +
                                            100 +
                                            0 +
                                            0 +
                                            0 +
                                            100 +
                                            0 +
                                            0,
                                          children: l(A, {
                                            className: `framer-16fps33-container`,
                                            nodeId: `KOy8OYI1m`,
                                            scopeId: `augiA20Il`,
                                            children: l(H, {
                                              btyoXJXaz: U,
                                              height: `100%`,
                                              id: `KOy8OYI1m`,
                                              layoutId: `KOy8OYI1m`,
                                              Selq1Epo8: `Case-study`,
                                              variant: Y(`mXdNMwppf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(r, {
                                          children: l(`h2`, {
                                            className: `framer-styles-preset-3yq5jl`,
                                            "data-styles-preset": `cPVM1_Pc1`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                            },
                                            children: `Built on systems. Proven by results.`,
                                          }),
                                        }),
                                        className: `framer-1ptokw1`,
                                        "data-framer-name": `Numbers that reflect real growth`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  d(`div`, {
                                    className: `framer-120wdqn`,
                                    "data-framer-name": `Subtext & Button`,
                                    children: [
                                      l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(r, {
                                          children: l(`p`, {
                                            className: `framer-styles-preset-13ryzp6`,
                                            "data-styles-preset": `Yw0GmpI8u`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                            },
                                            children: `See how growing companies replaced complexity with scalable infrastructure using Scalora.`,
                                          }),
                                        }),
                                        className: `framer-10le5p3`,
                                        "data-framer-name": `See how growing companies replaced complexity with scalable infrastructure using Scalora.`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      l(D, {
                                        links: [
                                          {
                                            href: { webPageId: `EIgX7kLOM` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `EIgX7kLOM` },
                                            implicitPathVariables: void 0,
                                          },
                                          {
                                            href: { webPageId: `EIgX7kLOM` },
                                            implicitPathVariables: void 0,
                                          },
                                        ],
                                        children: (e) =>
                                          l(z, {
                                            breakpoint: O,
                                            overrides: {
                                              mKN5cngFV: {
                                                y:
                                                  (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  4460 +
                                                  100 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  162,
                                              },
                                              t8ROkHIfN: {
                                                width: `calc(min(max(${b?.width || `100vw`} - 32px, 1px), 1280px) - 24px)`,
                                                y:
                                                  (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  6820 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  118 +
                                                  0 +
                                                  154,
                                              },
                                            },
                                            children: l(M, {
                                              height: 44,
                                              y:
                                                (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                3814 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                162,
                                              children: l(A, {
                                                className: `framer-v7s9fv-container`,
                                                nodeId: `PD6FbNAWQ`,
                                                scopeId: `augiA20Il`,
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: { kDj5Ixhw1: e[1] },
                                                    t8ROkHIfN: {
                                                      kDj5Ixhw1: e[2],
                                                      style: { width: `100%` },
                                                    },
                                                  },
                                                  children: l(Oe, {
                                                    height: `100%`,
                                                    id: `PD6FbNAWQ`,
                                                    kDj5Ixhw1: e[0],
                                                    kJdISHL06: `View all cases`,
                                                    layoutId: `PD6FbNAWQ`,
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
                              d(`div`, {
                                className: `framer-92ctoh`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  ce() &&
                                    l(M, {
                                      children: l(A, {
                                        className: `framer-85fgut-container hidden-fpsd0l`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `Dyhlw7JxG`,
                                        scopeId: `augiA20Il`,
                                        children: l(Me, {
                                          alignment: `center`,
                                          arrowOptions: {
                                            arrowFill: `rgba(0, 0, 0, 0.2)`,
                                            arrowGap: 16,
                                            arrowPadding: 20,
                                            arrowPaddingBottom: -78,
                                            arrowPaddingLeft: 0,
                                            arrowPaddingRight: 0,
                                            arrowPaddingTop: 0,
                                            arrowPosition: `bottom-mid`,
                                            arrowRadius: 7,
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
                                          id: `Dyhlw7JxG`,
                                          intervalControl: 1.5,
                                          itemAmount: 1,
                                          layoutId: `Dyhlw7JxG`,
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
                                            l(f.div, {
                                              className: `framer-109rcmy`,
                                              "data-framer-name": `Case Study Card `,
                                              children: l(f.div, {
                                                className: `framer-pv9rc3`,
                                                children: l(I, {
                                                  children: l(Zn, {
                                                    query: Xn(),
                                                    children: (e, t, n) =>
                                                      l(s, {
                                                        children: e?.map(
                                                          (
                                                            {
                                                              aHYcs7PNz: e,
                                                              BQ9UST8T5: t,
                                                              diavS5Gwt: n,
                                                              E_cdfRnTP: r,
                                                              Fz1Yp3hrG: i,
                                                              id: a,
                                                              K4nO7V0zW: o,
                                                              KP1VtjTDq: s,
                                                              LB2VqtSvm: c,
                                                              oIvaScDKp: u,
                                                              QBZWJjkWU: d,
                                                              VOQNIsdsz: f,
                                                              vRYNYxELP: p,
                                                            },
                                                            h
                                                          ) => (
                                                            (s ??= ``),
                                                            (r ??= ``),
                                                            (c ??= ``),
                                                            (i ??= ``),
                                                            (t ??= ``),
                                                            (e ??= ``),
                                                            (u ??= ``),
                                                            (f ??= ``),
                                                            (d ??= ``),
                                                            (n ??= ``),
                                                            l(
                                                              m,
                                                              {
                                                                id: `xer6LyFEp-${a}`,
                                                                children: l(_.Provider, {
                                                                  value: { diavS5Gwt: n },
                                                                  children: l(D, {
                                                                    links: [
                                                                      {
                                                                        href: {
                                                                          pathVariables: {
                                                                            diavS5Gwt: n,
                                                                          },
                                                                          webPageId: `QwlEuJYAN`,
                                                                        },
                                                                        implicitPathVariables:
                                                                          void 0,
                                                                      },
                                                                    ],
                                                                    children: (n) =>
                                                                      l(M, {
                                                                        height: 624,
                                                                        width: `1280px`,
                                                                        children: l(A, {
                                                                          className: `framer-1phqxb7-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `e8icKOjsF`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `augiA20Il`,
                                                                          children: l(W, {
                                                                            ejkuTQZJ2: t,
                                                                            Gc6K9ijL5: d,
                                                                            height: `100%`,
                                                                            id: `e8icKOjsF`,
                                                                            layoutId: `e8icKOjsF`,
                                                                            Lf2ujR06w: c,
                                                                            LIRay8WjM: n[0],
                                                                            lYIt5qBHK: $(p),
                                                                            n1xESMCkf: u,
                                                                            Nrp2RXM7D: f,
                                                                            Oj6gfy_A8: r,
                                                                            qHOUbwt7s: s,
                                                                            SQhdwfCb_: e,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            Tz9gl3bfB: $(o),
                                                                            Ua4UVWr3_: i,
                                                                            variant: Y(`EZFih9TUC`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                }),
                                                              },
                                                              a
                                                            )
                                                          )
                                                        ),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(f.div, {
                                              className: `framer-fpma4n`,
                                              "data-framer-name": `Case Study Card `,
                                              children: l(f.div, {
                                                className: `framer-455n78`,
                                                children: l(I, {
                                                  children: l(Zn, {
                                                    query: Qn(),
                                                    children: (e, t, n) =>
                                                      l(s, {
                                                        children: e?.map(
                                                          (
                                                            {
                                                              aHYcs7PNz: e,
                                                              BQ9UST8T5: t,
                                                              diavS5Gwt: n,
                                                              E_cdfRnTP: r,
                                                              Fz1Yp3hrG: i,
                                                              id: a,
                                                              K4nO7V0zW: o,
                                                              KP1VtjTDq: s,
                                                              LB2VqtSvm: c,
                                                              oIvaScDKp: u,
                                                              QBZWJjkWU: d,
                                                              VOQNIsdsz: f,
                                                              vRYNYxELP: p,
                                                            },
                                                            h
                                                          ) => (
                                                            (s ??= ``),
                                                            (r ??= ``),
                                                            (c ??= ``),
                                                            (i ??= ``),
                                                            (t ??= ``),
                                                            (e ??= ``),
                                                            (u ??= ``),
                                                            (f ??= ``),
                                                            (d ??= ``),
                                                            (n ??= ``),
                                                            l(
                                                              m,
                                                              {
                                                                id: `i2Kvowb5S-${a}`,
                                                                children: l(_.Provider, {
                                                                  value: { diavS5Gwt: n },
                                                                  children: l(D, {
                                                                    links: [
                                                                      {
                                                                        href: {
                                                                          pathVariables: {
                                                                            diavS5Gwt: n,
                                                                          },
                                                                          webPageId: `QwlEuJYAN`,
                                                                        },
                                                                        implicitPathVariables:
                                                                          void 0,
                                                                      },
                                                                    ],
                                                                    children: (n) =>
                                                                      l(M, {
                                                                        height: 624,
                                                                        width: `1280px`,
                                                                        children: l(A, {
                                                                          className: `framer-1tlg7wu-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `DPlBJGPKR`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `augiA20Il`,
                                                                          children: l(W, {
                                                                            ejkuTQZJ2: t,
                                                                            Gc6K9ijL5: d,
                                                                            height: `100%`,
                                                                            id: `DPlBJGPKR`,
                                                                            layoutId: `DPlBJGPKR`,
                                                                            Lf2ujR06w: c,
                                                                            LIRay8WjM: n[0],
                                                                            lYIt5qBHK: $(p),
                                                                            n1xESMCkf: u,
                                                                            Nrp2RXM7D: f,
                                                                            Oj6gfy_A8: r,
                                                                            qHOUbwt7s: s,
                                                                            SQhdwfCb_: e,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            Tz9gl3bfB: $(o),
                                                                            Ua4UVWr3_: i,
                                                                            variant: Y(`EZFih9TUC`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                }),
                                                              },
                                                              a
                                                            )
                                                          )
                                                        ),
                                                      }),
                                                  }),
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
                                  P() &&
                                    l(M, {
                                      children: l(A, {
                                        className: `framer-bdhc9s-container hidden-72rtr7 hidden-1neqyyn`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `sb_mNVdju`,
                                        scopeId: `augiA20Il`,
                                        children: l(Me, {
                                          alignment: `flex-start`,
                                          arrowOptions: {
                                            arrowFill: `rgba(0, 0, 0, 0.2)`,
                                            arrowGap: 16,
                                            arrowPadding: 20,
                                            arrowPaddingBottom: -77,
                                            arrowPaddingLeft: 0,
                                            arrowPaddingRight: 0,
                                            arrowPaddingTop: 0,
                                            arrowPosition: `bottom-mid`,
                                            arrowRadius: 7,
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
                                          dragControl: !0,
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
                                          id: `sb_mNVdju`,
                                          intervalControl: 1.5,
                                          itemAmount: 1,
                                          layoutId: `sb_mNVdju`,
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
                                            l(f.div, {
                                              className: `framer-1p2hhgf`,
                                              "data-framer-name": `Case Study Card Small`,
                                              children: l(f.div, {
                                                className: `framer-15af4np`,
                                                children: l(I, {
                                                  children: l(Zn, {
                                                    query: $n(),
                                                    children: (e, t, n) =>
                                                      l(s, {
                                                        children: e?.map(
                                                          (
                                                            {
                                                              aHYcs7PNz: e,
                                                              BQ9UST8T5: t,
                                                              diavS5Gwt: n,
                                                              E_cdfRnTP: r,
                                                              Fz1Yp3hrG: i,
                                                              id: a,
                                                              K4nO7V0zW: o,
                                                              KP1VtjTDq: s,
                                                              LB2VqtSvm: c,
                                                              oIvaScDKp: u,
                                                              QBZWJjkWU: d,
                                                              VOQNIsdsz: f,
                                                              vRYNYxELP: p,
                                                            },
                                                            h
                                                          ) => (
                                                            (s ??= ``),
                                                            (r ??= ``),
                                                            (c ??= ``),
                                                            (i ??= ``),
                                                            (t ??= ``),
                                                            (e ??= ``),
                                                            (u ??= ``),
                                                            (f ??= ``),
                                                            (d ??= ``),
                                                            (n ??= ``),
                                                            l(
                                                              m,
                                                              {
                                                                id: `iJLprioXO-${a}`,
                                                                children: l(_.Provider, {
                                                                  value: { diavS5Gwt: n },
                                                                  children: l(D, {
                                                                    links: [
                                                                      {
                                                                        href: {
                                                                          pathVariables: {
                                                                            diavS5Gwt: n,
                                                                          },
                                                                          webPageId: `QwlEuJYAN`,
                                                                        },
                                                                        implicitPathVariables:
                                                                          void 0,
                                                                      },
                                                                    ],
                                                                    children: (n) =>
                                                                      l(M, {
                                                                        height: 624,
                                                                        width: `375px`,
                                                                        children: l(A, {
                                                                          className: `framer-lfjyx1-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `vf4PDS43E`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `augiA20Il`,
                                                                          children: l(W, {
                                                                            ejkuTQZJ2: t,
                                                                            Gc6K9ijL5: d,
                                                                            height: `100%`,
                                                                            id: `vf4PDS43E`,
                                                                            layoutId: `vf4PDS43E`,
                                                                            Lf2ujR06w: c,
                                                                            LIRay8WjM: n[0],
                                                                            lYIt5qBHK: $(p),
                                                                            n1xESMCkf: u,
                                                                            Nrp2RXM7D: f,
                                                                            Oj6gfy_A8: r,
                                                                            qHOUbwt7s: s,
                                                                            SQhdwfCb_: e,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            Tz9gl3bfB: $(o),
                                                                            Ua4UVWr3_: i,
                                                                            variant: Y(`n_fDYj8rN`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                }),
                                                              },
                                                              a
                                                            )
                                                          )
                                                        ),
                                                      }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                            l(f.div, {
                                              className: `framer-3b9vk3`,
                                              "data-framer-name": `Case Study Card Small`,
                                              children: l(f.div, {
                                                className: `framer-tp8kcf`,
                                                children: l(I, {
                                                  children: l(Zn, {
                                                    query: er(),
                                                    children: (e, t, n) =>
                                                      l(s, {
                                                        children: e?.map(
                                                          (
                                                            {
                                                              aHYcs7PNz: e,
                                                              BQ9UST8T5: t,
                                                              diavS5Gwt: n,
                                                              E_cdfRnTP: r,
                                                              Fz1Yp3hrG: i,
                                                              id: a,
                                                              K4nO7V0zW: o,
                                                              KP1VtjTDq: s,
                                                              LB2VqtSvm: c,
                                                              oIvaScDKp: u,
                                                              QBZWJjkWU: d,
                                                              VOQNIsdsz: f,
                                                              vRYNYxELP: p,
                                                            },
                                                            h
                                                          ) => (
                                                            (s ??= ``),
                                                            (r ??= ``),
                                                            (c ??= ``),
                                                            (i ??= ``),
                                                            (t ??= ``),
                                                            (e ??= ``),
                                                            (u ??= ``),
                                                            (f ??= ``),
                                                            (d ??= ``),
                                                            (n ??= ``),
                                                            l(
                                                              m,
                                                              {
                                                                id: `iGfPtMN67-${a}`,
                                                                children: l(_.Provider, {
                                                                  value: { diavS5Gwt: n },
                                                                  children: l(D, {
                                                                    links: [
                                                                      {
                                                                        href: {
                                                                          pathVariables: {
                                                                            diavS5Gwt: n,
                                                                          },
                                                                          webPageId: `QwlEuJYAN`,
                                                                        },
                                                                        implicitPathVariables:
                                                                          void 0,
                                                                      },
                                                                    ],
                                                                    children: (n) =>
                                                                      l(M, {
                                                                        height: 624,
                                                                        width: `375px`,
                                                                        children: l(A, {
                                                                          className: `framer-yczkz1-container`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `ipFTl2Y_S`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `augiA20Il`,
                                                                          children: l(W, {
                                                                            ejkuTQZJ2: t,
                                                                            Gc6K9ijL5: d,
                                                                            height: `100%`,
                                                                            id: `ipFTl2Y_S`,
                                                                            layoutId: `ipFTl2Y_S`,
                                                                            Lf2ujR06w: c,
                                                                            LIRay8WjM: n[0],
                                                                            lYIt5qBHK: $(p),
                                                                            n1xESMCkf: u,
                                                                            Nrp2RXM7D: f,
                                                                            Oj6gfy_A8: r,
                                                                            qHOUbwt7s: s,
                                                                            SQhdwfCb_: e,
                                                                            style: {
                                                                              width: `100%`,
                                                                            },
                                                                            Tz9gl3bfB: $(o),
                                                                            Ua4UVWr3_: i,
                                                                            variant: Y(`n_fDYj8rN`),
                                                                            width: `100%`,
                                                                          }),
                                                                        }),
                                                                      }),
                                                                  }),
                                                                }),
                                                              },
                                                              a
                                                            )
                                                          )
                                                        ),
                                                      }),
                                                  }),
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
                                  l(`div`, {
                                    className: `framer-1vkdzq8`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1ghnbh1`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1m1ycnx`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-cf99pt`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  l(`div`, {
                                    className: `framer-136jg9o`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  l(`div`, {
                                    className: `framer-exs8to`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  l(`div`, {
                                    className: `framer-4if8q0`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1g95enq`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l(`div`, {
                          className: `framer-vg8qb4`,
                          "data-framer-name": `Integration`,
                          id: le,
                          ref: L,
                          children: d(`div`, {
                            className: `framer-1j5ed88`,
                            "data-framer-name": `Container`,
                            children: [
                              d(`div`, {
                                className: `framer-6wsgz6`,
                                "data-framer-name": `All Integration `,
                                children: [
                                  l(`div`, {
                                    className: `framer-187b7yg`,
                                    "data-framer-name": `Integration 1`,
                                    children: l(J, {
                                      __framer__animate: { transition: nr },
                                      __framer__animateOnce: !0,
                                      __framer__enter: tr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__targets: [{ ref: L, target: `animate` }],
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1sfab6g`,
                                      "data-framer-name": `Integration 1`,
                                      children: l(g, {
                                        className: `framer-u2vm6d`,
                                        "data-framer-name": `Logo 1`,
                                        fill: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                        intrinsicHeight: 531,
                                        intrinsicWidth: 151,
                                        svg: `<svg width="151" height="531" viewBox="0 0 151 531" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="43.858" cy="43.858" r="43.858" transform="matrix(0.855932 0.517089 -0.855932 0.517089 75.0791 0)" fill="#EC6F10"/>
<path d="M21.9854 45.3574C21.9854 54.2139 27.9275 62.232 37.5347 68.0359V521.606C27.9275 515.802 21.9854 507.784 21.9854 498.927V45.3574Z" fill="url(#paint0_linear_14564_1062)"/>
<path d="M37.5312 68.0361C58.2637 80.5611 91.8777 80.5611 112.61 68.0361V521.606C91.8777 534.131 58.2637 534.131 37.5312 521.606V68.0361Z" fill="url(#paint1_linear_14564_1062)"/>
<path d="M128.165 45.3574C128.165 54.2139 122.222 62.232 112.615 68.0359V521.606C122.222 515.802 128.165 507.784 128.165 498.927V45.3574Z" fill="url(#paint2_linear_14564_1062)"/>
<g clip-path="url(#clip0_14564_1062)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.5038 55.4795C46.4696 58.1584 49.7542 60.4587 53.9426 62.0894C58.1308 63.7201 63.0346 64.6081 68.0335 64.641C73.0325 64.6739 77.9025 63.8503 82.0273 62.2744C86.1523 60.6983 89.3468 58.4407 91.2073 55.787C93.0676 53.1334 93.5101 50.2028 92.479 47.3659C92.4515 47.2903 92.4229 47.2148 92.3934 47.1394C92.3726 47.0863 92.3511 47.033 92.3293 46.9799L100.772 51.854L102.131 51.0694C105.626 49.0519 107.982 46.4678 108.901 43.6437C109.82 40.8197 109.262 37.8825 107.296 35.2036C105.33 32.5247 102.046 30.2245 97.8574 28.5938C93.6692 26.9631 88.7656 26.075 83.7665 26.0422C78.7674 26.0093 73.8975 26.8329 69.7728 28.4088C65.6477 29.9849 62.4531 32.2424 60.5927 34.8961C58.7324 37.5498 58.2899 40.4804 59.3211 43.3173C59.368 43.4463 59.418 43.5751 59.4707 43.7033L51.0278 38.8292L49.6687 39.6138C46.1742 41.6312 43.8183 44.2154 42.899 47.0394C41.9796 49.8635 42.5381 52.8007 44.5038 55.4795ZM66.3861 50.834L51.1539 42.0404C48.908 43.6041 47.3797 45.4806 46.7214 47.5025C45.9435 49.8921 46.4162 52.3774 48.0795 54.6441C49.7428 56.9109 52.5221 58.8572 56.0661 60.2371C59.6099 61.6169 63.7593 62.3683 67.9891 62.3961C72.2191 62.424 76.3397 61.7271 79.8301 60.3935C83.3204 59.06 86.0235 57.1498 87.5977 54.9044C89.1086 52.7491 89.5143 50.378 88.7729 48.0683C88.1376 49.1277 87.0917 50.119 85.6335 50.9608C80.3792 53.9941 71.7617 53.9373 66.3861 50.834ZM100.646 48.6427L85.4139 39.8492C80.0383 36.7459 71.4208 36.6891 66.1665 39.7224C64.7084 40.5642 63.6624 41.5555 63.0271 42.6149C62.2857 40.3052 62.6913 37.934 64.2023 35.7788C65.7765 33.5334 68.4796 31.6232 71.9699 30.2896C75.4602 28.9561 79.5809 28.2592 83.8109 28.287C88.0408 28.3149 92.1901 29.0662 95.7339 30.4461C99.2779 31.826 102.057 33.7723 103.72 36.039C105.384 38.3057 105.857 40.7911 105.079 43.1807C104.42 45.2025 102.892 47.079 100.646 48.6427ZM82.7152 49.433C78.9968 51.4951 73.0456 51.4558 69.2448 49.3442L71.8158 47.86C74.3169 46.9622 77.5469 46.9833 80.0844 47.9142L82.7152 49.433ZM82.987 49.2761C86.5591 47.1294 86.4911 43.6937 82.8334 41.4995L80.2624 42.9838C78.7069 44.4278 78.7438 46.2926 80.3568 47.7576L82.987 49.2761ZM82.5552 41.339C78.7544 39.2273 72.8031 39.1881 69.0847 41.2503L71.7149 42.7687C74.2525 43.6998 77.4826 43.7212 79.9839 42.8234L82.5552 41.339ZM68.8129 41.4072C65.2409 43.5538 65.3089 46.9894 68.9666 49.1837L71.538 47.6992C73.093 46.2553 73.0562 44.3907 71.4436 42.9259L68.8129 41.4072Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_14564_1062" x1="29.76" y1="45.3574" x2="29.76" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint1_linear_14564_1062" x1="75.0707" y1="68.0361" x2="75.0707" y2="531" gradientUnits="userSpaceOnUse">
<stop stop-color="#333333"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint2_linear_14564_1062" x1="120.39" y1="45.3574" x2="120.39" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<clipPath id="clip0_14564_1062">
<rect width="59.6356" height="41.7449" fill="white" transform="matrix(0.866044 -0.499967 0.866044 0.499967 32 49.814)"/>
</clipPath>
</defs>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  l(`div`, {
                                    className: `framer-k0evuk`,
                                    "data-framer-name": `Integration 2`,
                                    children: l(J, {
                                      __framer__animate: { transition: rr },
                                      __framer__animateOnce: !0,
                                      __framer__enter: tr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__targets: [{ ref: L, target: `animate` }],
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-xpi8u`,
                                      "data-framer-name": `Integration 2`,
                                      children: l(g, {
                                        className: `framer-1k1t8vz`,
                                        "data-framer-name": `Logo 2`,
                                        fill: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                        intrinsicHeight: 531,
                                        intrinsicWidth: 151,
                                        svg: `<svg width="151" height="531" viewBox="0 0 151 531" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="43.858" cy="43.858" r="43.858" transform="matrix(0.855932 0.517089 -0.855932 0.517089 75.0791 0)" fill="#EC6F10"/>
<path d="M21.9854 45.3574C21.9854 54.2139 27.9275 62.232 37.5347 68.0359V521.606C27.9275 515.802 21.9854 507.784 21.9854 498.927V45.3574Z" fill="url(#paint0_linear_14564_1072)"/>
<path d="M37.5312 68.0361C58.2637 80.5611 91.8777 80.5611 112.61 68.0361V521.606C91.8777 534.131 58.2637 534.131 37.5312 521.606V68.0361Z" fill="url(#paint1_linear_14564_1072)"/>
<path d="M128.166 45.3574C128.166 54.2139 122.223 62.232 112.616 68.0359V521.606C122.223 515.802 128.166 507.784 128.166 498.927V45.3574Z" fill="url(#paint2_linear_14564_1072)"/>
<g clip-path="url(#clip0_14564_1072)">
<path d="M60.3101 59.8759C58.2643 58.6949 56.6414 57.2927 55.5343 55.7496C54.4271 54.2065 53.8572 52.5526 53.8572 50.8823C53.8572 49.212 54.427 47.5582 55.5342 46.015C56.6415 44.4719 58.2643 43.0698 60.3102 41.8887L75.8888 50.8823L60.3101 59.8759Z" fill="#E8DDFF"/>
<path d="M60.3096 59.8755C62.3554 61.0566 64.7841 61.9934 67.4572 62.6326C70.1302 63.2718 72.9951 63.6008 75.8883 63.6008C78.7816 63.6008 81.6464 63.2718 84.3194 62.6327C86.9925 61.9934 89.4212 61.0566 91.467 59.8755L75.8883 50.8819L60.3096 59.8755Z" fill="white"/>
<path d="M91.4671 41.8884C93.513 43.0695 95.1361 44.4714 96.2435 46.0145C97.3506 47.5576 97.9206 49.2115 97.9203 50.8819C97.9203 52.5522 97.3505 54.2061 96.2432 55.7492C95.1361 57.2923 93.5132 58.6944 91.4674 59.8754L75.8887 50.8818L91.4671 41.8884Z" fill="#B2B0AE"/>
<path d="M87.6138 28.5739C94.0739 32.3033 94.0737 38.3501 87.6137 42.0795L75.9167 48.8321L64.2196 42.0794C57.7595 38.35 57.7595 32.3033 64.2195 28.574C70.6795 24.8446 81.1537 24.8445 87.6138 28.5739Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_14564_1072" x1="29.76" y1="45.3574" x2="29.76" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint1_linear_14564_1072" x1="75.0707" y1="68.0361" x2="75.0707" y2="531" gradientUnits="userSpaceOnUse">
<stop stop-color="#333333"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint2_linear_14564_1072" x1="120.391" y1="45.3574" x2="120.391" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<clipPath id="clip0_14564_1072">
<rect width="51.2159" height="50.1707" fill="white" transform="matrix(0.866044 -0.499967 0.866044 0.499967 32 45.6064)"/>
</clipPath>
</defs>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  l(`div`, {
                                    className: `framer-1u8sbrs`,
                                    "data-framer-name": `Integration 3`,
                                    children: l(J, {
                                      __framer__animate: { transition: ir },
                                      __framer__animateOnce: !0,
                                      __framer__enter: tr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__targets: [{ ref: L, target: `animate` }],
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1itowcn`,
                                      "data-framer-name": `Integration 3`,
                                      children: l(g, {
                                        className: `framer-1q74qp1`,
                                        "data-framer-name": `Logo 3`,
                                        fill: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                        intrinsicHeight: 531,
                                        intrinsicWidth: 151,
                                        svg: `<svg width="151" height="531" viewBox="0 0 151 531" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="43.858" cy="43.858" r="43.858" transform="matrix(0.855932 0.517089 -0.855932 0.517089 75.0791 0)" fill="#EC6F10"/>
<path d="M21.9854 45.3574C21.9854 54.2139 27.9275 62.232 37.5347 68.0359V521.606C27.9275 515.802 21.9854 507.784 21.9854 498.927V45.3574Z" fill="url(#paint0_linear_14564_1085)"/>
<path d="M37.5312 68.0361C58.2637 80.5611 91.8777 80.5611 112.61 68.0361V521.606C91.8777 534.131 58.2637 534.131 37.5312 521.606V68.0361Z" fill="url(#paint1_linear_14564_1085)"/>
<path d="M128.166 45.3574C128.166 54.2139 122.223 62.232 112.616 68.0359V521.606C122.223 515.802 128.166 507.784 128.166 498.927V45.3574Z" fill="url(#paint2_linear_14564_1085)"/>
<g clip-path="url(#clip0_14564_1085)">
<path d="M91.4133 51.7334C87.4233 49.3845 83.1252 48.0827 81.813 48.8255C80.5009 49.5684 82.6716 52.0747 86.6615 54.4235C90.6514 56.7724 94.9497 58.0743 96.2617 57.3314C97.574 56.5886 95.4032 54.0823 91.4133 51.7334Z" fill="white"/>
<path d="M82.9612 55.5549C81.8046 52.3336 79.4082 49.8967 77.6086 50.1121C75.809 50.3274 75.2878 53.1134 76.4444 56.3347C77.601 59.556 79.9974 61.9928 81.797 61.7775C83.5966 61.5622 84.1177 58.7763 82.9612 55.5549Z" fill="white"/>
<path d="M72.274 56.1448C74.3181 53.0739 74.5844 50.276 72.8688 49.8955C71.1533 49.5149 68.1057 51.6958 66.0617 54.7667C64.0176 57.8375 63.7513 60.6355 65.4668 61.016C67.1823 61.3966 70.23 59.2157 72.274 56.1448Z" fill="white"/>
<path d="M69.0972 48.2292C68.0105 47.3736 63.4041 48.257 58.8085 50.2022C54.2129 52.1475 51.3685 54.4181 52.4552 55.2737C53.5419 56.1293 58.1482 55.2459 62.7438 53.3006C67.3394 51.3554 70.1839 49.0848 69.0972 48.2292Z" fill="white"/>
<path d="M67.4672 45.6371C67.3541 44.5781 62.6515 43.8839 56.9638 44.0864C51.2761 44.289 46.757 45.3116 46.8701 46.3706C46.9833 47.4295 51.6859 48.1238 57.3736 47.9212C63.0614 47.7187 67.5805 46.696 67.4672 45.6371Z" fill="white"/>
<path d="M68.5281 42.9598C69.4247 42.0336 66.1189 39.9818 61.1445 38.3768C56.1701 36.7718 51.4107 36.2216 50.5141 37.1477C49.6176 38.0739 52.9233 40.1257 57.8977 41.7307C62.872 43.3356 67.6315 43.8859 68.5281 42.9598Z" fill="white"/>
<path d="M70.0005 34.8837C67.3191 31.9808 63.8308 30.0323 62.2091 30.5316C60.5875 31.0308 61.4466 33.7887 64.1281 36.6915C66.8096 39.5943 70.2979 41.5428 71.9195 41.0436C73.5412 40.5443 72.6821 37.7864 70.0005 34.8837Z" fill="white"/>
<path d="M80.7341 34.7009C81.1961 31.422 80.0857 28.6941 78.2539 28.6081C76.4222 28.5221 74.5628 31.1105 74.1008 34.3894C73.6388 37.6684 74.7493 40.3962 76.581 40.4822C78.4128 40.5682 80.2722 37.9799 80.7341 34.7009Z" fill="white"/>
<path d="M89.9327 37.9006C93.3923 35.2864 95.013 32.6451 93.5525 32.001C92.0923 31.3569 88.1039 32.9539 84.6442 35.5681C81.1846 38.1822 79.5639 40.8235 81.0243 41.4677C82.4847 42.1117 86.4731 40.5148 89.9327 37.9006Z" fill="white"/>
<path d="M103.241 39.6342C102.615 38.6366 97.7644 38.7351 92.4058 39.8543C87.0472 40.9735 83.21 42.6897 83.8352 43.6873C84.4605 44.685 89.3114 44.5865 94.6701 43.4672C100.029 42.348 103.866 40.6319 103.241 39.6342Z" fill="white"/>
<path d="M104.247 49.0773C104.655 48.0429 100.482 46.6116 94.9261 45.8805C89.3701 45.1494 84.5349 45.3954 84.1265 46.4298C83.718 47.4642 87.8911 48.8955 93.4471 49.6266C99.0032 50.3577 103.838 50.1117 104.247 49.0773Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_14564_1085" x1="29.76" y1="45.3574" x2="29.76" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint1_linear_14564_1085" x1="75.0707" y1="68.0361" x2="75.0707" y2="531" gradientUnits="userSpaceOnUse">
<stop stop-color="#333333"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint2_linear_14564_1085" x1="120.391" y1="45.3574" x2="120.391" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<clipPath id="clip0_14564_1085">
<rect width="50.6893" height="50.6893" fill="white" transform="matrix(0.866044 -0.499967 0.866044 0.499967 32 45.3418)"/>
</clipPath>
</defs>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  l(`div`, {
                                    className: `framer-1trqcaa`,
                                    "data-framer-name": `Integration 4`,
                                    children: l(J, {
                                      __framer__animate: { transition: rr },
                                      __framer__animateOnce: !0,
                                      __framer__enter: tr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__targets: [{ ref: L, target: `animate` }],
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-118ktro`,
                                      "data-framer-name": `Integration 4`,
                                      children: l(g, {
                                        className: `framer-1r1lvou`,
                                        "data-framer-name": `Logo 4`,
                                        fill: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                        intrinsicHeight: 531,
                                        intrinsicWidth: 151,
                                        svg: `<svg width="151" height="531" viewBox="0 0 151 531" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="43.858" cy="43.858" r="43.858" transform="matrix(0.855932 0.517089 -0.855932 0.517089 75.0791 0)" fill="#EC6F10"/>
<path d="M21.9854 45.3574C21.9854 54.2139 27.9275 62.232 37.5347 68.0359V521.606C27.9275 515.802 21.9854 507.784 21.9854 498.927V45.3574Z" fill="url(#paint0_linear_14564_1105)"/>
<path d="M37.5312 68.0361C58.2637 80.5611 91.8777 80.5611 112.61 68.0361V521.606C91.8777 534.131 58.2637 534.131 37.5312 521.606V68.0361Z" fill="url(#paint1_linear_14564_1105)"/>
<path d="M128.166 45.3574C128.166 54.2139 122.223 62.232 112.616 68.0359V521.606C122.223 515.802 128.166 507.784 128.166 498.927V45.3574Z" fill="url(#paint2_linear_14564_1105)"/>
<g clip-path="url(#clip0_14564_1105)">
<path d="M65.7188 39.4643C71.343 42.7111 71.343 47.9754 65.7188 51.2223L55.5352 57.1013L45.3516 51.2223C39.7273 47.9754 39.7273 42.7111 45.3516 39.4643C50.9758 36.2174 60.0945 36.2174 65.7188 39.4643Z" fill="white"/>
<path d="M86.0859 51.2223C80.4617 47.9754 80.4617 42.7111 86.0859 39.4643L96.2696 33.5853L106.453 39.4643C112.077 42.7111 112.077 47.9754 106.453 51.2223C100.829 54.4691 91.7102 54.4691 86.0859 51.2223Z" fill="white"/>
<path d="M65.7188 62.9801C71.343 66.2269 80.4617 66.227 86.086 62.9801L96.2696 57.1011L86.086 51.2221C80.4617 47.9752 71.343 47.9752 65.7188 51.2221C60.0945 54.469 60.0945 59.7332 65.7188 62.9801Z" fill="white"/>
<path d="M86.086 27.7065C80.4617 24.4596 71.343 24.4596 65.7188 27.7065L55.5352 33.5854L65.7188 39.4644C71.343 42.7113 80.4617 42.7113 86.086 39.4644C91.7102 36.2176 91.7102 30.9533 86.086 27.7065Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_14564_1105" x1="29.76" y1="45.3574" x2="29.76" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint1_linear_14564_1105" x1="75.0707" y1="68.0361" x2="75.0707" y2="531" gradientUnits="userSpaceOnUse">
<stop stop-color="#333333"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint2_linear_14564_1105" x1="120.391" y1="45.3574" x2="120.391" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<clipPath id="clip0_14564_1105">
<rect width="51.2159" height="50.1707" fill="white" transform="matrix(0.866044 -0.499967 0.866044 0.499967 32 45.6045)"/>
</clipPath>
</defs>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                  l(`div`, {
                                    className: `framer-1qiae26`,
                                    "data-framer-name": `Integration 5`,
                                    children: l(J, {
                                      __framer__animate: { transition: nr },
                                      __framer__animateOnce: !0,
                                      __framer__enter: tr,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__targets: [{ ref: L, target: `animate` }],
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1pmcrrr`,
                                      "data-framer-name": `Integration 5`,
                                      children: l(g, {
                                        className: `framer-16uok85`,
                                        "data-framer-name": `Logo 5`,
                                        fill: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                        intrinsicHeight: 531,
                                        intrinsicWidth: 151,
                                        svg: `<svg width="151" height="531" viewBox="0 0 151 531" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="43.858" cy="43.858" r="43.858" transform="matrix(0.855932 0.517089 -0.855932 0.517089 75.0791 0)" fill="#EC6F10"/>
<path d="M21.9854 45.3574C21.9854 54.2139 27.9275 62.232 37.5347 68.0359V521.606C27.9275 515.802 21.9854 507.784 21.9854 498.927V45.3574Z" fill="url(#paint0_linear_14564_1118)"/>
<path d="M37.5312 68.0361C58.2637 80.5611 91.8777 80.5611 112.61 68.0361V521.606C91.8777 534.131 58.2637 534.131 37.5312 521.606V68.0361Z" fill="url(#paint1_linear_14564_1118)"/>
<path d="M128.166 45.3574C128.166 54.2139 122.223 62.232 112.616 68.0359V521.606C122.223 515.802 128.166 507.784 128.166 498.927V45.3574Z" fill="url(#paint2_linear_14564_1118)"/>
<g clip-path="url(#clip0_14564_1118)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M47.4255 36.7719C44.9797 38.1839 43.6057 40.0989 43.6057 42.0957L43.6057 51.7309L47.4255 53.9361C50.1242 55.4941 53.7114 56.2265 57.2455 56.1334C57.0842 58.1736 58.3529 60.2445 61.0516 61.8025L64.8715 64.0077L81.5617 64.0077C85.0206 64.0077 88.3377 63.2145 90.7835 61.8025C93.4822 60.2445 94.751 58.1737 94.5897 56.1334C98.1238 56.2265 101.711 55.4941 104.41 53.9361C106.855 52.5241 108.23 50.6092 108.23 48.6124L108.23 38.9771L104.41 36.7719C101.711 35.2139 98.1238 34.4815 94.5897 34.5746C94.751 32.5343 93.4822 30.4635 90.7835 28.9055L86.9637 26.7003L70.2735 26.7003C66.8146 26.7004 63.4975 27.4936 61.0516 28.9055C58.3529 30.4635 57.0842 32.5344 57.2455 34.5746C53.7114 34.4815 50.1242 35.2139 47.4255 36.7719ZM82.1598 41.7503C81.961 41.7556 81.7616 41.7582 81.5617 41.7582L69.689 41.7582L69.689 48.6124C69.689 48.7277 69.6844 48.8429 69.6753 48.9577C69.8741 48.9524 70.0736 48.9498 70.2735 48.9498L82.1462 48.9498L82.1462 42.0956C82.1462 41.9802 82.1507 41.8651 82.1598 41.7503ZM88.9592 50.1018L90.7835 51.155C93.2159 52.5592 97.1598 52.5592 99.5922 51.155C100.76 50.4806 101.416 49.566 101.416 48.6124L101.416 40.6062L99.5922 39.553C97.1598 38.1488 93.2159 38.1488 90.7835 39.553C89.6155 40.2274 88.9592 41.142 88.9592 42.0956L88.9592 50.1018ZM84.1417 52.8829L70.2735 52.8829C68.6215 52.8829 67.0373 53.2618 65.8692 53.9361C63.4367 55.3403 63.4368 57.6171 65.8692 59.0213L67.6935 60.0745L81.5617 60.0745C83.2137 60.0745 84.798 59.6957 85.966 59.0213C88.3984 57.6171 88.3984 55.3403 85.966 53.9361L84.1417 52.8829ZM61.0517 39.5531L62.8759 40.6062L62.8759 48.6124C62.8759 49.566 62.2197 50.4806 61.0517 51.1549C58.6192 52.5592 54.6754 52.5592 52.2431 51.1549L50.4188 50.1018L50.4188 42.0957C50.4188 41.142 51.075 40.2274 52.2431 39.5531C54.6755 38.1489 58.6192 38.1488 61.0517 39.5531ZM81.5617 37.825L67.6934 37.825L65.8692 36.7719C63.4368 35.3677 63.4368 33.0909 65.8692 31.6867C67.0373 31.0124 68.6216 30.6335 70.2735 30.6335L84.1417 30.6335L85.966 31.6867C88.3984 33.0909 88.3984 35.3677 85.966 36.7719C84.798 37.4462 83.2137 37.825 81.5617 37.825Z" fill="white"/>
</g>
<defs>
<linearGradient id="paint0_linear_14564_1118" x1="29.76" y1="45.3574" x2="29.76" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint1_linear_14564_1118" x1="75.0707" y1="68.0361" x2="75.0707" y2="531" gradientUnits="userSpaceOnUse">
<stop stop-color="#333333"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<linearGradient id="paint2_linear_14564_1118" x1="120.391" y1="45.3574" x2="120.391" y2="521.606" gradientUnits="userSpaceOnUse">
<stop stop-color="#2E2E2E"/>
<stop offset="1" stop-color="#161616"/>
</linearGradient>
<clipPath id="clip0_14564_1118">
<rect width="50.0644" height="51.3161" fill="white" transform="matrix(0.866044 -0.499967 0.866044 0.499967 32 45.0312)"/>
</clipPath>
</defs>
</svg>
`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              d(J, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-l7rwyk`,
                                "data-framer-name": `Text Wrapper`,
                                transformTemplate: Kn,
                                children: [
                                  l(z, {
                                    breakpoint: O,
                                    overrides: {
                                      mKN5cngFV: {
                                        y: (b?.y || 0) + 0 + 0 + 0 + 5594 + 200 + 811 - 264 + 0 + 0,
                                      },
                                      t8ROkHIfN: {
                                        y: (b?.y || 0) + 0 + 0 + 0 + 8408 + 80 + 455 - 256 + 0 + 0,
                                      },
                                    },
                                    children: l(M, {
                                      height: 28,
                                      y: (b?.y || 0) + 0 + 0 + 0 + 4928 + 200 + 811 - 264 + 0 + 0,
                                      children: l(A, {
                                        className: `framer-b13bc6-container`,
                                        nodeId: `H_3JT3lS6`,
                                        scopeId: `augiA20Il`,
                                        children: l(H, {
                                          btyoXJXaz: U,
                                          height: `100%`,
                                          id: `H_3JT3lS6`,
                                          layoutId: `H_3JT3lS6`,
                                          Selq1Epo8: `Integration`,
                                          variant: Y(`mXdNMwppf`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  l(N, {
                                    __fromCanvasComponent: !0,
                                    children: l(r, {
                                      children: d(`h2`, {
                                        className: `framer-styles-preset-3yq5jl`,
                                        "data-styles-preset": `cPVM1_Pc1`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        },
                                        children: [
                                          `One AI Engine.`,
                                          l(`br`, {}),
                                          `Fully Connected.`,
                                        ],
                                      }),
                                    }),
                                    className: `framer-gc6ra`,
                                    "data-framer-name": `One AI Engine. Fully Connected.`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  l(N, {
                                    __fromCanvasComponent: !0,
                                    children: l(r, {
                                      children: l(`p`, {
                                        className: `framer-styles-preset-13ryzp6`,
                                        "data-styles-preset": `Yw0GmpI8u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                        },
                                        children: `Scalora connects your CRM, website, ads, and commerce tools into one intelligent automation system.`,
                                      }),
                                    }),
                                    className: `framer-1uenaz6`,
                                    "data-framer-name": `Scalora connects your CRM, website, ads, and commerce tools into one intelligent automation system.`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l(`div`, {
                          className: `framer-5huqem`,
                          "data-framer-name": `Testimonial`,
                          children: d(`div`, {
                            className: `framer-143j4f8`,
                            "data-framer-name": `Container`,
                            children: [
                              d(J, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-13p91l2`,
                                "data-framer-name": `Section title`,
                                children: [
                                  l(z, {
                                    breakpoint: O,
                                    overrides: {
                                      mKN5cngFV: {
                                        y: (b?.y || 0) + 0 + 0 + 0 + 6805 + 80 + 0 + 0 + 0 + 0 + 0,
                                      },
                                      t8ROkHIfN: {
                                        y: (b?.y || 0) + 0 + 0 + 0 + 9023 + 60 + 0 + 0 + 0 + 0 + 0,
                                      },
                                    },
                                    children: l(M, {
                                      height: 28,
                                      y: (b?.y || 0) + 0 + 0 + 0 + 6139 + 100 + 0 + 0 + 0 + 0 + 0,
                                      children: l(A, {
                                        className: `framer-1h6mi07-container`,
                                        nodeId: `kKHev4DFP`,
                                        scopeId: `augiA20Il`,
                                        children: l(H, {
                                          btyoXJXaz: U,
                                          height: `100%`,
                                          id: `kKHev4DFP`,
                                          layoutId: `kKHev4DFP`,
                                          Selq1Epo8: `Testimonial`,
                                          variant: Y(`mXdNMwppf`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  l(N, {
                                    __fromCanvasComponent: !0,
                                    children: l(r, {
                                      children: l(`h2`, {
                                        className: `framer-styles-preset-3yq5jl`,
                                        "data-styles-preset": `cPVM1_Pc1`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Trusted by teams that think in systems`,
                                      }),
                                    }),
                                    className: `framer-ekq0ne`,
                                    "data-framer-name": `Trusted by teams that think in systems`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              d(`div`, {
                                className: `framer-1rx31sp`,
                                "data-framer-name": `Bottom Content`,
                                children: [
                                  B() &&
                                    l(M, {
                                      children: l(A, {
                                        className: `framer-1sa3nlq-container hidden-1neqyyn hidden-fpsd0l`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `LwAM_m9gk`,
                                        scopeId: `augiA20Il`,
                                        children: l(Me, {
                                          alignment: `center`,
                                          arrowOptions: {
                                            arrowFill: `rgba(0, 0, 0, 0)`,
                                            arrowGap: 16,
                                            arrowPadding: 20,
                                            arrowPaddingBottom: -77,
                                            arrowPaddingLeft: 0,
                                            arrowPaddingRight: 0,
                                            arrowPaddingTop: 0,
                                            arrowPosition: `bottom-mid`,
                                            arrowRadius: 7,
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
                                          id: `LwAM_m9gk`,
                                          intervalControl: 1.5,
                                          itemAmount: 1,
                                          layoutId: `LwAM_m9gk`,
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
                                            l(M, {
                                              height: 546,
                                              width: `1280px`,
                                              children: l(A, {
                                                className: `framer-10bveku-container`,
                                                "data-framer-name": `Testimonial Card 1`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 1`,
                                                nodeId: `Q7tnBysPC`,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                children: l(V, {
                                                  FJTqBi2KV: `AutoPerf`,
                                                  height: `100%`,
                                                  id: `Q7tnBysPC`,
                                                  iEDAZpSS3: `Auto Performance`,
                                                  iwx62rpGT: `Founder, BrightLayer Digital`,
                                                  J5IwwRpSA: `“Our automated system streamlines workflows, removes repetitive tasks, and speeds up campaign deployment while keeping precise performance control.”`,
                                                  k3FDQtFQv: `52%`,
                                                  layoutId: `Q7tnBysPC`,
                                                  name: `Testimonial Card 1`,
                                                  nJPHXQfwW: `Increase in campaign conversions`,
                                                  rsB2i43WZ: Q(
                                                    {
                                                      pixelHeight: 48,
                                                      pixelWidth: 48,
                                                      src: `https://framerusercontent.com/images/bPXmiMV1Cf8aXNhneMNXYJYZo.svg?width=48&height=48`,
                                                    },
                                                    ``
                                                  ),
                                                  style: { width: `100%` },
                                                  tXLgOvUs3: `Daniel Reed`,
                                                  U1WzZWWko: `3.4X`,
                                                  variant: Y(`ra6cRNcXv`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster campaign deployment`,
                                                }),
                                              }),
                                            }),
                                            l(M, {
                                              height: 546,
                                              width: `1280px`,
                                              children: l(A, {
                                                className: `framer-141nnau-container`,
                                                "data-framer-name": `Testimonial Card 2`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 2`,
                                                nodeId: `Ms2h2B9Ke`,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                children: l(V, {
                                                  FJTqBi2KV: `CampEngine`,
                                                  G47lkWz6h: Q(
                                                    {
                                                      pixelHeight: 2432,
                                                      pixelWidth: 2232,
                                                      src: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png`,
                                                      srcSet: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o.png 939w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-4cd58b.png 1879w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png 2232w`,
                                                    },
                                                    `Man Profile Image`
                                                  ),
                                                  height: `100%`,
                                                  id: `Ms2h2B9Ke`,
                                                  iEDAZpSS3: `Campaign Engine`,
                                                  iwx62rpGT: `Head of Growth, Nexora Media`,
                                                  J5IwwRpSA: `The optimization engine monitors performance metrics, reallocates budget automatically, and refines audience segments to ensure scalable campaign growth.`,
                                                  k3FDQtFQv: `48%`,
                                                  layoutId: `Ms2h2B9Ke`,
                                                  name: `Testimonial Card 2`,
                                                  nJPHXQfwW: `Increase in team productivity`,
                                                  rsB2i43WZ: Q(
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
                                                  variant: Y(`kZ3XQqCvF`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster reporting workflow`,
                                                }),
                                              }),
                                            }),
                                            l(M, {
                                              height: 546,
                                              width: `1280px`,
                                              children: l(A, {
                                                className: `framer-1yhd3zm-container`,
                                                "data-framer-name": `Testimonial Card 3`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 3`,
                                                nodeId: `nh5zqYEmK`,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                children: l(V, {
                                                  FJTqBi2KV: `SmartAuto`,
                                                  G47lkWz6h: Q(
                                                    {
                                                      pixelHeight: 1708,
                                                      pixelWidth: 1696,
                                                      src: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png`,
                                                      srcSet: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE.png 1016w,../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png 1696w`,
                                                    },
                                                    `Man Profile Image`
                                                  ),
                                                  height: `100%`,
                                                  id: `nh5zqYEmK`,
                                                  iEDAZpSS3: `Smart Automation`,
                                                  iwx62rpGT: `Marketing Director, Elevate Labs`,
                                                  J5IwwRpSA: `This intelligent system analyzes real-time data, adjusts targeting strategies instantly, and maximizes return on investment without constant manual intervention from teams.`,
                                                  k3FDQtFQv: `61%`,
                                                  layoutId: `nh5zqYEmK`,
                                                  name: `Testimonial Card 3`,
                                                  nJPHXQfwW: `Improvement in campaign ROI`,
                                                  rsB2i43WZ: Q(
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
                                                  variant: Y(`SyRKRfloD`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster decision-making`,
                                                }),
                                              }),
                                            }),
                                            l(M, {
                                              height: 546,
                                              width: `1280px`,
                                              children: l(A, {
                                                className: `framer-121lc4h-container`,
                                                "data-framer-name": `Testimonial Card 4`,
                                                inComponentSlot: !0,
                                                name: `Testimonial Card 4`,
                                                nodeId: `M6Vl96dsJ`,
                                                rendersWithMotion: !0,
                                                scopeId: `augiA20Il`,
                                                children: l(V, {
                                                  FJTqBi2KV: `Agencies`,
                                                  G47lkWz6h: Q(
                                                    {
                                                      pixelHeight: 1708,
                                                      pixelWidth: 1696,
                                                      src: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png`,
                                                      srcSet: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg.png 1016w,../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png 1696w`,
                                                    },
                                                    `Man Profile Imagez`
                                                  ),
                                                  height: `100%`,
                                                  id: `M6Vl96dsJ`,
                                                  iEDAZpSS3: `AI Campaign Automation`,
                                                  iwx62rpGT: `Founder, AdNova Digital`,
                                                  J5IwwRpSA: `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
                                                  k3FDQtFQv: `55%`,
                                                  layoutId: `M6Vl96dsJ`,
                                                  name: `Testimonial Card 4`,
                                                  nJPHXQfwW: `Reduction in ad spend waste`,
                                                  style: { width: `100%` },
                                                  tXLgOvUs3: `Ethan Walker`,
                                                  U1WzZWWko: `4X`,
                                                  variant: Y(`UiFZL4kB0`),
                                                  width: `100%`,
                                                  yV_HVFDbM: `Faster A/B testing cycles`,
                                                }),
                                              }),
                                            }),
                                          ],
                                          startFrom: 0,
                                          style: {
                                            height: `100%`,
                                            maxWidth: `100%`,
                                            width: `100%`,
                                          },
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
                                  me() &&
                                    l(M, {
                                      children: l(A, {
                                        className: `framer-r46a1i-container hidden-72rtr7`,
                                        "data-framer-name": `Slideshow for Small Device`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        name: `Slideshow for Small Device`,
                                        nodeId: `gRa1zwyqs`,
                                        scopeId: `augiA20Il`,
                                        children: l(z, {
                                          breakpoint: O,
                                          overrides: {
                                            t8ROkHIfN: {
                                              arrowOptions: {
                                                arrowFill: `rgba(0, 0, 0, 0.2)`,
                                                arrowGap: 16,
                                                arrowPadding: 20,
                                                arrowPaddingBottom: -77,
                                                arrowPaddingLeft: 0,
                                                arrowPaddingRight: 0,
                                                arrowPaddingTop: 0,
                                                arrowPosition: `bottom-mid`,
                                                arrowRadius: 7,
                                                arrowShouldFadeIn: !1,
                                                arrowShouldSpace: !1,
                                                arrowSize: 40,
                                                leftArrow: `../../assets/images/w8N36KCx0QOJ8PSCry8CMXYE.svg`,
                                                rightArrow: `../../assets/images/Psp69amx7TxLGXiODkM7rsP2tM.svg`,
                                                showMouseControls: !0,
                                              },
                                              dragControl: !0,
                                            },
                                          },
                                          children: l(Me, {
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
                                              arrowRadius: 7,
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
                                            id: `gRa1zwyqs`,
                                            intervalControl: 1.5,
                                            itemAmount: 1,
                                            layoutId: `gRa1zwyqs`,
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
                                              l(M, {
                                                height: 546,
                                                width: `810px`,
                                                children: l(A, {
                                                  className: `framer-itwkq1-container`,
                                                  "data-framer-name": `Testimonial Card P1`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P1`,
                                                  nodeId: `yBQlJJzKd`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: l(V, {
                                                    FJTqBi2KV: `AutoPerf`,
                                                    height: `100%`,
                                                    id: `yBQlJJzKd`,
                                                    iEDAZpSS3: `Auto Performance`,
                                                    iwx62rpGT: `Founder, BrightLayer Digital`,
                                                    J5IwwRpSA: `“Our automated system streamlines workflows, removes repetitive tasks, and speeds up campaign deployment while keeping precise performance control.”`,
                                                    k3FDQtFQv: `52%`,
                                                    layoutId: `yBQlJJzKd`,
                                                    name: `Testimonial Card P1`,
                                                    nJPHXQfwW: `Increase in campaign conversions`,
                                                    rsB2i43WZ: Q(
                                                      {
                                                        pixelHeight: 48,
                                                        pixelWidth: 48,
                                                        src: `https://framerusercontent.com/images/bPXmiMV1Cf8aXNhneMNXYJYZo.svg?width=48&height=48`,
                                                      },
                                                      `Company logo`
                                                    ),
                                                    style: { width: `100%` },
                                                    tXLgOvUs3: `Daniel Reed`,
                                                    U1WzZWWko: `3.4X`,
                                                    variant: Y(`kai7Cuvgi`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster campaign deployment`,
                                                  }),
                                                }),
                                              }),
                                              l(M, {
                                                height: 546,
                                                width: `810px`,
                                                children: l(A, {
                                                  className: `framer-1bdcu92-container`,
                                                  "data-framer-name": `Testimonial Card P2`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P2`,
                                                  nodeId: `fDYG7SNrT`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: l(V, {
                                                    FJTqBi2KV: `CampEngine`,
                                                    G47lkWz6h: Q(
                                                      {
                                                        pixelHeight: 2432,
                                                        pixelWidth: 2232,
                                                        src: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png`,
                                                        srcSet: `../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o.png 939w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-4cd58b.png 1879w,../../assets/images/SyLL6wTyTuUViU4fytT1fjJz0o-34b977.png 2232w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `fDYG7SNrT`,
                                                    iEDAZpSS3: `Campaign Engine`,
                                                    iwx62rpGT: `Head of Growth, Nexora Media`,
                                                    J5IwwRpSA: `The optimization engine monitors performance metrics, reallocates budget automatically, and refines audience segments to ensure scalable campaign growth.`,
                                                    k3FDQtFQv: `48%`,
                                                    layoutId: `fDYG7SNrT`,
                                                    name: `Testimonial Card P2`,
                                                    nJPHXQfwW: `Increase in team productivity`,
                                                    rsB2i43WZ: Q(
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
                                                    variant: Y(`GiDS5c_9T`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster reporting workflow`,
                                                  }),
                                                }),
                                              }),
                                              l(M, {
                                                height: 546,
                                                width: `810px`,
                                                children: l(A, {
                                                  className: `framer-6s52ae-container`,
                                                  "data-framer-name": `Testimonial Card P3`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P3`,
                                                  nodeId: `iO3Li44Rf`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: l(V, {
                                                    FJTqBi2KV: `SmartAuto`,
                                                    G47lkWz6h: Q(
                                                      {
                                                        pixelHeight: 1708,
                                                        pixelWidth: 1696,
                                                        src: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png`,
                                                        srcSet: `../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE.png 1016w,../../assets/images/Qis2kuA1vVbfaDT8hg8rXjqNE-230ca9.png 1696w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `iO3Li44Rf`,
                                                    iEDAZpSS3: `Smart Automation`,
                                                    iwx62rpGT: `Marketing Director, Elevate Labs`,
                                                    J5IwwRpSA: `This intelligent system analyzes real-time data, adjusts targeting strategies instantly, and maximizes return on investment without constant manual intervention from teams.`,
                                                    k3FDQtFQv: `61%`,
                                                    layoutId: `iO3Li44Rf`,
                                                    name: `Testimonial Card P3`,
                                                    nJPHXQfwW: `Improvement in campaign ROI`,
                                                    rsB2i43WZ: Q(
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
                                                    variant: Y(`DT0oeOjRz`),
                                                    width: `100%`,
                                                    yV_HVFDbM: `Faster decision-making`,
                                                  }),
                                                }),
                                              }),
                                              l(M, {
                                                height: 546,
                                                width: `810px`,
                                                children: l(A, {
                                                  className: `framer-zqhw0e-container`,
                                                  "data-framer-name": `Testimonial Card P4`,
                                                  inComponentSlot: !0,
                                                  name: `Testimonial Card P4`,
                                                  nodeId: `Mt_iBpkza`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `augiA20Il`,
                                                  children: l(V, {
                                                    FJTqBi2KV: `Agencies`,
                                                    G47lkWz6h: Q(
                                                      {
                                                        pixelHeight: 1708,
                                                        pixelWidth: 1696,
                                                        src: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png`,
                                                        srcSet: `../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg.png 1016w,../../assets/images/xLWxZNMRcrjsr8W3LTk18n7S2lg-9c5511.png 1696w`,
                                                      },
                                                      `Man Profile Image`
                                                    ),
                                                    height: `100%`,
                                                    id: `Mt_iBpkza`,
                                                    iEDAZpSS3: `AI Campaign Automation`,
                                                    iwx62rpGT: `Founder, AdNova Digital`,
                                                    J5IwwRpSA: `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
                                                    k3FDQtFQv: `55%`,
                                                    layoutId: `Mt_iBpkza`,
                                                    name: `Testimonial Card P4`,
                                                    nJPHXQfwW: `Reduction in ad spend waste`,
                                                    style: { width: `100%` },
                                                    tXLgOvUs3: `Ethan Walker`,
                                                    U1WzZWWko: `4X`,
                                                    variant: Y(`zww_hjqbb`),
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
                                  l(`div`, {
                                    className: `framer-14qtzmy`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1lopg1p`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  l(`div`, {
                                    className: `framer-71buix`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-i41vbz`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1ak2wj6`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  l(`div`, {
                                    className: `framer-8emkg0`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  l(`div`, {
                                    className: `framer-c9pmin`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1bu9dab`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l(`div`, {
                          className: `framer-1glxsn0`,
                          children: d(`div`, {
                            className: `framer-iwsjwl`,
                            "data-framer-name": `Containar`,
                            children: [
                              d(J, {
                                __framer__animate: { transition: X },
                                __framer__animateOnce: !0,
                                __framer__enter: Z,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-1e14ang`,
                                "data-framer-name": `Section Title`,
                                children: [
                                  d(`div`, {
                                    className: `framer-x46dg3`,
                                    "data-framer-name": ` Right Content`,
                                    children: [
                                      l(z, {
                                        breakpoint: O,
                                        overrides: {
                                          mKN5cngFV: {
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              7891 +
                                              80 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              100 +
                                              0 +
                                              0,
                                          },
                                          t8ROkHIfN: {
                                            y:
                                              (b?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              10157 +
                                              60 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: l(M, {
                                          height: 28,
                                          y:
                                            (b?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            7091 +
                                            100 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            100 +
                                            0 +
                                            0,
                                          children: l(A, {
                                            className: `framer-9xujzn-container`,
                                            nodeId: `iFoMNuCWm`,
                                            scopeId: `augiA20Il`,
                                            children: l(H, {
                                              btyoXJXaz: U,
                                              height: `100%`,
                                              id: `iFoMNuCWm`,
                                              layoutId: `iFoMNuCWm`,
                                              Selq1Epo8: `News & Insight`,
                                              variant: Y(`mXdNMwppf`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(r, {
                                          children: l(`h2`, {
                                            className: `framer-styles-preset-3yq5jl`,
                                            "data-styles-preset": `cPVM1_Pc1`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                            },
                                            children: `Insights that help you scale smarter`,
                                          }),
                                        }),
                                        className: `framer-2kx2nd`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  d(`div`, {
                                    className: `framer-r6bx5h`,
                                    "data-framer-name": `Left Content`,
                                    children: [
                                      l(N, {
                                        __fromCanvasComponent: !0,
                                        children: l(r, {
                                          children: l(`p`, {
                                            className: `framer-styles-preset-13ryzp6`,
                                            "data-styles-preset": `Yw0GmpI8u`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                            },
                                            children: `Stay ahead with practical frameworks, growth strategies, and operational playbooks for modern teams.`,
                                          }),
                                        }),
                                        className: `framer-9xxdrs`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      l(D, {
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
                                          l(z, {
                                            breakpoint: O,
                                            overrides: {
                                              mKN5cngFV: {
                                                y:
                                                  (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  7891 +
                                                  80 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  162,
                                              },
                                              t8ROkHIfN: {
                                                y:
                                                  (b?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  10157 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  112 +
                                                  0 +
                                                  154,
                                              },
                                            },
                                            children: l(M, {
                                              height: 44,
                                              y:
                                                (b?.y || 0) +
                                                0 +
                                                0 +
                                                0 +
                                                7091 +
                                                100 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                162,
                                              children: l(A, {
                                                className: `framer-1r1xdst-container`,
                                                nodeId: `pUiL8rzEK`,
                                                scopeId: `augiA20Il`,
                                                children: l(z, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    mKN5cngFV: { kDj5Ixhw1: e[1] },
                                                    t8ROkHIfN: { kDj5Ixhw1: e[2] },
                                                  },
                                                  children: l(Oe, {
                                                    height: `100%`,
                                                    id: `pUiL8rzEK`,
                                                    kDj5Ixhw1: e[0],
                                                    kJdISHL06: `View all blogs`,
                                                    layoutId: `pUiL8rzEK`,
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
                              d(`div`, {
                                className: `framer-1cr0evc`,
                                "data-framer-name": `Blog Information`,
                                children: [
                                  l(`div`, {
                                    className: `framer-1pn2a53`,
                                    children: l(I, {
                                      children: l(fr, {
                                        pageSize: 3,
                                        query: dr(),
                                        children: (e, t, n) =>
                                          l(s, {
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
                                                l(
                                                  m,
                                                  {
                                                    id: `Ob8m9E0gb-${r}`,
                                                    children: l(_.Provider, {
                                                      value: { oAZyvtn5K: a },
                                                      children: l(D, {
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
                                                          l(z, {
                                                            breakpoint: O,
                                                            overrides: {
                                                              mKN5cngFV: {
                                                                width: `max(max(min(${b?.width || `100vw`} - 80px, 1280px), 1px) / 2, 50px)`,
                                                                y:
                                                                  (b?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  7891 +
                                                                  80 +
                                                                  0 +
                                                                  0 +
                                                                  286 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                              t8ROkHIfN: {
                                                                width: `max(max(min(${b?.width || `100vw`} - 32px, 1280px), 1px), 50px)`,
                                                                y:
                                                                  (b?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  10157 +
                                                                  60 +
                                                                  0 +
                                                                  0 +
                                                                  350 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: l(M, {
                                                              height: 424,
                                                              width: `max(max(min(${b?.width || `100vw`} - 160px, 1280px), 1px) / 3, 50px)`,
                                                              y:
                                                                (b?.y || 0) +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                7091 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                286 +
                                                                0 +
                                                                0 +
                                                                0,
                                                              children: l(A, {
                                                                className: `framer-derjyi-container`,
                                                                nodeId: `DvOx2WPLr`,
                                                                scopeId: `augiA20Il`,
                                                                children: l(z, {
                                                                  breakpoint: O,
                                                                  overrides: {
                                                                    mKN5cngFV: {
                                                                      CphaCzuak: r[1],
                                                                      uzYIOQFMN: {
                                                                        borderBottomWidth: 1,
                                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                                        borderLeftWidth: 0,
                                                                        borderRightWidth: 1,
                                                                        borderStyle: `solid`,
                                                                        borderTopWidth: 0,
                                                                      },
                                                                    },
                                                                    t8ROkHIfN: {
                                                                      CphaCzuak: r[2],
                                                                      uzYIOQFMN: {
                                                                        borderBottomWidth: 1,
                                                                        borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                                        borderLeftWidth: 0,
                                                                        borderRightWidth: 0,
                                                                        borderStyle: `solid`,
                                                                        borderTopWidth: 0,
                                                                      },
                                                                      variant: Y(`B5eOgs6_u`),
                                                                    },
                                                                  },
                                                                  children: l(ct, {
                                                                    CphaCzuak: r[0],
                                                                    F_CSN01FX: sr(
                                                                      or(ar(o), v, {
                                                                        ZeS11p5hZ_Qrt_rd2FROb8m9E0gb:
                                                                          e,
                                                                      })
                                                                    ),
                                                                    height: `100%`,
                                                                    id: `DvOx2WPLr`,
                                                                    layoutId: `DvOx2WPLr`,
                                                                    MhlZROnC2: n,
                                                                    style: { width: `100%` },
                                                                    UCDbjiNYK: ur(t, he),
                                                                    uzYIOQFMN: {
                                                                      borderBottomWidth: 0,
                                                                      borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                                                      borderLeftWidth: 0,
                                                                      borderRightWidth: 1,
                                                                      borderStyle: `solid`,
                                                                      borderTopWidth: 0,
                                                                    },
                                                                    variant: Y(`hnYxKWUZ8`),
                                                                    width: `100%`,
                                                                    YF3KZhs7x: $(i),
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
                                  l(`div`, {
                                    className: `framer-1468eg`,
                                    "data-framer-name": `Top Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1rmh4dz`,
                                    "data-framer-name": `Box 1`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1l1etp1`,
                                    "data-framer-name": `Bottom line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-gnpfs0`,
                                    "data-framer-name": `Box 2`,
                                  }),
                                  l(`div`, {
                                    className: `framer-qhhh5f`,
                                    "data-framer-name": `Box 4`,
                                  }),
                                  l(`div`, {
                                    className: `framer-19bi8fl`,
                                    "data-framer-name": `Box 3`,
                                  }),
                                  l(`div`, {
                                    className: `framer-15vn629`,
                                    "data-framer-name": `Left Line`,
                                  }),
                                  l(`div`, {
                                    className: `framer-1ydfun6`,
                                    "data-framer-name": `Right Line`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        l(z, {
                          breakpoint: O,
                          overrides: {
                            mKN5cngFV: { y: (b?.y || 0) + 0 + 0 + 0 + 9185 },
                            t8ROkHIfN: { y: (b?.y || 0) + 0 + 0 + 0 + 12747 },
                          },
                          children: l(M, {
                            height: 802,
                            width: b?.width || `100vw`,
                            y: (b?.y || 0) + 0 + 0 + 0 + 8425,
                            children: l(A, {
                              className: `framer-1mkqeqw-container`,
                              nodeId: `yBCqnG1Cj`,
                              scopeId: `augiA20Il`,
                              children: l(z, {
                                breakpoint: O,
                                overrides: {
                                  mKN5cngFV: { variant: Y(`HDUioys2A`) },
                                  t8ROkHIfN: { variant: Y(`xF5lKzz8e`) },
                                },
                                children: l(ot, {
                                  height: `100%`,
                                  id: `yBCqnG1Cj`,
                                  layoutId: `yBCqnG1Cj`,
                                  style: { width: `100%` },
                                  variant: Y(`QXixqdn2a`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        l(z, {
                          breakpoint: O,
                          overrides: {
                            mKN5cngFV: { y: (b?.y || 0) + 0 + 0 + 0 + 9987 },
                            t8ROkHIfN: { y: (b?.y || 0) + 0 + 0 + 0 + 11899 },
                          },
                          children: l(M, {
                            height: 848,
                            width: b?.width || `100vw`,
                            y: (b?.y || 0) + 0 + 0 + 0 + 9227,
                            children: l(A, {
                              className: `framer-16iye30-container`,
                              nodeId: `lqFV_By1Q`,
                              scopeId: `augiA20Il`,
                              children: l(z, {
                                breakpoint: O,
                                overrides: {
                                  mKN5cngFV: { variant: Y(`eZeHfWXpY`) },
                                  t8ROkHIfN: { variant: Y(`eD1hZ1m9l`) },
                                },
                                children: l(at, {
                                  height: `100%`,
                                  id: `lqFV_By1Q`,
                                  layoutId: `lqFV_By1Q`,
                                  style: { width: `100%` },
                                  variant: Y(`Nn0_sUYi2`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(M, {
                      children: l(A, {
                        className: `framer-1kzul8k-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: se,
                        nodeId: `McTWDkU4X`,
                        scopeId: `augiA20Il`,
                        children: l(ve, {
                          height: `100%`,
                          id: `McTWDkU4X`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `McTWDkU4X`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-C67cd.framer-lux5qc, .framer-C67cd .framer-lux5qc { display: block; }`,
        `.framer-C67cd.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-C67cd .framer-162phtq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-opxj1e { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; min-height: 1124px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1y69297 { align-content: center; align-items: center; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 120px 0px 0px 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-C67cd .framer-6yqi7g, .framer-C67cd .framer-143j4f8, .framer-C67cd .framer-iwsjwl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-x2raux { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; max-width: 720px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-12zfb1a-container, .framer-C67cd .framer-1jhm0c2-container, .framer-C67cd .framer-mgxa7a-container, .framer-C67cd .framer-k2m80j-container, .framer-C67cd .framer-16fps33-container, .framer-C67cd .framer-v7s9fv-container, .framer-C67cd .framer-b13bc6-container, .framer-C67cd .framer-1h6mi07-container, .framer-C67cd .framer-9xujzn-container, .framer-C67cd .framer-1r1xdst-container, .framer-C67cd .framer-1kzul8k-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-C67cd .framer-1n5u1ej { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1c9ce69 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-2d6shb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1vb1l4f { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-C67cd .framer-1ownzfa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-C67cd .framer-1amsq24, .framer-C67cd .framer-1llqd7a, .framer-C67cd .framer-u80je0, .framer-C67cd .framer-1nda6uh, .framer-C67cd .framer-1ojalmm { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-C67cd .framer-ubcmm7-container { flex: none; height: 82px; position: relative; width: 204px; }`,
        `.framer-C67cd .framer-1i6tikk, .framer-C67cd .framer-w6hkjn, .framer-C67cd .framer-xvehh5 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-C67cd .framer-1ypdmnm { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 550px; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-C67cd .framer-5n76r0-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-C67cd .framer-jz0huk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 412px; justify-content: center; max-width: 780px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-a3i7l7 { -webkit-backdrop-filter: blur(16px); aspect-ratio: 1.0618556701030928 / 1; backdrop-filter: blur(16px); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 320px); left: -14px; overflow: visible; position: absolute; top: 35px; width: 340px; z-index: 1; }`,
        `.framer-C67cd .framer-1drxjh8 { --border-bottom-width: 1px; --border-color: var(--token-ade93898-d5cf-4c68-84fc-11acd2339d3f, rgba(220, 119, 34, 0.12)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(16px); aspect-ratio: 1.0618556701030928 / 1; backdrop-filter: blur(16px); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 320px); left: 124px; overflow: visible; position: absolute; top: 51%; transform: translateY(-50%); width: 340px; z-index: 2; }`,
        `.framer-C67cd .framer-12csdyf { -webkit-backdrop-filter: blur(10px); aspect-ratio: 1.0618556701030928 / 1; backdrop-filter: blur(10px); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 320px); left: 291px; overflow: visible; position: absolute; top: 42px; width: 340px; z-index: 2; }`,
        `.framer-C67cd .framer-1781ri8 { -webkit-backdrop-filter: blur(10px); aspect-ratio: 1.0618556701030928 / 1; backdrop-filter: blur(10px); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; flex: none; height: var(--framer-aspect-ratio-supported, 320px); left: 462px; overflow: visible; position: absolute; top: 34px; width: 340px; z-index: 2; }`,
        `.framer-C67cd .framer-1eobnb7, .framer-C67cd .framer-1kc8o5e { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-ayi3et, .framer-C67cd .framer-1r1yp8u, .framer-C67cd .framer-5q9yio, .framer-C67cd .framer-pmshyw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-1pwajdi, .framer-C67cd .framer-9btq5g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-oeg1bn, .framer-C67cd .framer-1uzrsyk, .framer-C67cd .framer-vi9ouz { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C67cd .framer-1iqnpmh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1vb6hfb { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 97%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-C67cd .framer-hi869m { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-C67cd .framer-n82bn1 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 71.62162162162163%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 99.54954954954955%); flex: none; height: 180%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 180% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-g5g25l { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 84%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 180%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.00000000000002% - 180% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1c1uhcl, .framer-C67cd .framer-2yq275, .framer-C67cd .framer-1ghnbh1, .framer-C67cd .framer-1lopg1p, .framer-C67cd .framer-1rmh4dz { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-C67cd .framer-1jtc9tq, .framer-C67cd .framer-9ye8on, .framer-C67cd .framer-cf99pt, .framer-C67cd .framer-i41vbz, .framer-C67cd .framer-gnpfs0 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-C67cd .framer-1q425if, .framer-C67cd .framer-o63at, .framer-C67cd .framer-136jg9o, .framer-C67cd .framer-1ak2wj6, .framer-C67cd .framer-qhhh5f { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-C67cd .framer-nxn30o, .framer-C67cd .framer-1m49seo, .framer-C67cd .framer-exs8to, .framer-C67cd .framer-8emkg0, .framer-C67cd .framer-19bi8fl { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-C67cd .framer-1g436x4 { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 48px 120px 28px 40px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-2jpnu4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-kqxo7o, .framer-C67cd .framer-3zihpy, .framer-C67cd .framer-1gefgn1, .framer-C67cd .framer-1mc7jon { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C67cd .framer-c3mebs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1b8v8vp { flex: none; height: 18px; position: relative; width: 108px; }`,
        `.framer-C67cd .framer-fsu0g5 { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 0px 28px 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-1x244x1, .framer-C67cd .framer-1jgycy0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 72px 0px 42px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-p16ovu { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 18.01801801801802%, rgba(0, 0, 0, 0.82432) 82.43243243243244%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 18.01801801801802%, rgba(0, 0, 0, 0.82432) 82.43243243243244%, rgba(0, 0, 0, 0) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-1r2jmcu, .framer-C67cd .framer-98e8zk { aspect-ratio: 4.6484375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); overflow: visible; position: relative; width: 149px; }`,
        `.framer-C67cd .framer-h5okev, .framer-C67cd .framer-o2m4q8 { aspect-ratio: 4.5078125 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 31px); overflow: visible; position: relative; width: 144px; }`,
        `.framer-C67cd .framer-14v3ixw { aspect-ratio: 4.7109375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 33px); overflow: visible; position: relative; width: 151px; }`,
        `.framer-C67cd .framer-12y1nli { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-C67cd .framer-k69uvg { -webkit-mask: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 13.963963963963963%, rgba(0, 0, 0, 0.87387) 87.38738738738738%, rgba(0, 0, 0, 0) 100%) add; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 23px; height: min-content; justify-content: flex-start; mask: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgb(0, 0, 0) 13.963963963963963%, rgba(0, 0, 0, 0.87387) 87.38738738738738%, rgba(0, 0, 0, 0) 100%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-18mi89, .framer-C67cd .framer-zdcms1 { aspect-ratio: 4.6484375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 149px; }`,
        `.framer-C67cd .framer-1ee4546 { aspect-ratio: 4.7109375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 151px; }`,
        `.framer-C67cd .framer-pe4yer { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-dfty4q, .framer-C67cd .framer-7xv4wm { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-lf7o82, .framer-C67cd .framer-z0lef { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-1g484w9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-2aoxrx { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-1587ars-container, .framer-C67cd .framer-1kujmp0-container, .framer-C67cd .framer-1flws91-container, .framer-C67cd .framer-1t3k37u-container, .framer-C67cd .framer-1f25gwp-container, .framer-C67cd .framer-z0o758-container, .framer-C67cd .framer-8si3ng-container, .framer-C67cd .framer-1j7ddp8-container, .framer-C67cd .framer-1g44asg-container, .framer-C67cd .framer-1bueoiq-container, .framer-C67cd .framer-jxr4sk-container, .framer-C67cd .framer-979sb0-container, .framer-C67cd .framer-1phqxb7-container, .framer-C67cd .framer-1tlg7wu-container, .framer-C67cd .framer-lfjyx1-container, .framer-C67cd .framer-yczkz1-container, .framer-C67cd .framer-1mkqeqw-container, .framer-C67cd .framer-16iye30-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1507efr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 47%; }`,
        `.framer-C67cd .framer-1vyzxwt { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 61px; height: auto; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 115px 40px 115px; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-C67cd .framer-4009qr { flex: none; height: 150px; position: relative; width: 150px; }`,
        `.framer-C67cd .framer-1ntqv4x { --border-bottom-width: 1px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 361px; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-q6qw59 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-f2p58c { --border-bottom-width: 0px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-13su5le, .framer-C67cd .framer-1vkdzq8 { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-C67cd .framer-1szdjvy, .framer-C67cd .framer-1m1ycnx { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-C67cd .framer-q3eolu { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 130%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1p3ogcp { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 130%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 130% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1leuevi { align-content: center; align-items: center; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1algxma { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-he0n1k { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 466px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1duozfb, .framer-C67cd .framer-92ctoh, .framer-C67cd .framer-1rx31sp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-12ll1xn-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-C67cd .framer-11xabqd, .framer-C67cd .framer-gexgte, .framer-C67cd .framer-ngsp1m, .framer-C67cd .framer-1bkzypw, .framer-C67cd .framer-f1fduy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1q286fz { background: linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-C67cd .framer-aaxtx0 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; left: -5px; opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-C67cd .framer-1mph3l2 { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-C67cd .framer-17gg8xc { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 9px; opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -5px; top: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-C67cd .framer-prjrtb { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 9px; opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -5px; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-C67cd .framer-1vulxfa { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 9px; left: -5px; opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 9px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-C67cd .framer-3frspw { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 110%; left: 0px; opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.89561586638833% - 110.00000000000001% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1n6ij6r { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 115%; opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 114.99999999999999% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1ptokw1, .framer-C67cd .framer-gc6ra { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-120wdqn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; min-width: 400px; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-C67cd .framer-10le5p3 { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-C67cd .framer-85fgut-container { flex: none; height: 628px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-109rcmy, .framer-C67cd .framer-fpma4n { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 624px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
        `.framer-C67cd .framer-pv9rc3, .framer-C67cd .framer-455n78, .framer-C67cd .framer-15af4np, .framer-C67cd .framer-tp8kcf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-bdhc9s-container { flex: none; height: 1000px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1p2hhgf, .framer-C67cd .framer-3b9vk3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 375px; }`,
        `.framer-C67cd .framer-4if8q0 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.89561586638833% - 119.93355481727575% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1g95enq { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 119.93355481727575% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-vg8qb4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 200px 80px 200px 80px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1j5ed88 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1280px; overflow: visible; padding: 0px 0px 80px 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-6wsgz6 { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 24%) add; align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 24%) add; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-187b7yg, .framer-C67cd .framer-1qiae26 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-C67cd .framer-1sfab6g, .framer-C67cd .framer-xpi8u, .framer-C67cd .framer-1itowcn, .framer-C67cd .framer-118ktro, .framer-C67cd .framer-1pmcrrr { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: auto; }`,
        `.framer-C67cd .framer-u2vm6d, .framer-C67cd .framer-1k1t8vz, .framer-C67cd .framer-1q74qp1, .framer-C67cd .framer-1r1lvou, .framer-C67cd .framer-16uok85 { aspect-ratio: 0.2843691148775895 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 531px); position: relative; width: 151px; }`,
        `.framer-C67cd .framer-k0evuk, .framer-C67cd .framer-1trqcaa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 100px 0px; position: relative; width: min-content; }`,
        `.framer-C67cd .framer-1u8sbrs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 200px 0px; position: relative; width: min-content; }`,
        `.framer-C67cd .framer-l7rwyk { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; left: 50%; max-width: 500px; overflow: visible; padding: 0px; position: absolute; transform: translateX(-50%); width: 100%; z-index: 1; }`,
        `.framer-C67cd .framer-1uenaz6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C67cd .framer-5huqem { align-content: center; align-items: center; background-color: var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 119px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 80px 120px 80px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-13p91l2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 540px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-ekq0ne { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 450px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C67cd .framer-1sa3nlq-container { flex: none; height: 546px; max-width: 1280px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-10bveku-container, .framer-C67cd .framer-141nnau-container, .framer-C67cd .framer-1yhd3zm-container, .framer-C67cd .framer-121lc4h-container { height: auto; position: relative; width: 1280px; }`,
        `.framer-C67cd .framer-r46a1i-container { flex: none; height: 837px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-itwkq1-container, .framer-C67cd .framer-1bdcu92-container, .framer-C67cd .framer-6s52ae-container, .framer-C67cd .framer-zqhw0e-container { height: auto; position: relative; width: 810px; }`,
        `.framer-C67cd .framer-14qtzmy { background: linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-C67cd .framer-71buix { background: linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-C67cd .framer-c9pmin { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) -2%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 120%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.89561586638833% - 120% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1bu9dab { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); flex: none; height: 120%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 120% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1glxsn0 { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 75px; height: min-content; justify-content: center; overflow: visible; padding: 100px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1e14ang { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-x46dg3 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 506px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-2kx2nd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 506px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C67cd .framer-r6bx5h { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 506px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-9xxdrs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-C67cd .framer-1cr0evc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1pn2a53 { display: grid; flex: 1 0 0px; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-C67cd .framer-derjyi-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
        `.framer-C67cd .framer-1468eg { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 108% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 108%; z-index: 1; }`,
        `.framer-C67cd .framer-1l1etp1 { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 108% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 108%; z-index: 1; }`,
        `.framer-C67cd .framer-15vn629 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.89561586638833% - 120% / 2); width: 1px; z-index: 1; }`,
        `.framer-C67cd .framer-1ydfun6 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 120%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 120% / 2); width: 1px; z-index: 1; }`,
        ...xt,
        ..._t,
        ...ye,
        ...Te,
        ...xe,
        ...Qe,
        `.framer-C67cd[data-border="true"]::after, .framer-C67cd [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-C67cd.framer-72rtr7 { width: 810px; } .framer-C67cd .framer-1vb1l4f { max-width: 502px; } .framer-C67cd .framer-jz0huk { aspect-ratio: 1.912536443148688 / 1; height: var(--framer-aspect-ratio-supported, 343px); max-width: 656px; } .framer-C67cd .framer-a3i7l7 { height: var(--framer-aspect-ratio-supported, 264px); left: -14px; top: 31px; width: 280px; } .framer-C67cd .framer-1drxjh8 { height: var(--framer-aspect-ratio-supported, 264px); left: 124px; top: 28px; transform: unset; width: 280px; } .framer-C67cd .framer-12csdyf { height: var(--framer-aspect-ratio-supported, 264px); left: 257px; top: 39px; width: 280px; } .framer-C67cd .framer-1781ri8 { height: var(--framer-aspect-ratio-supported, 264px); left: 400px; top: 38px; width: 280px; } .framer-C67cd .framer-1eobnb7, .framer-C67cd .framer-pe4yer, .framer-C67cd .framer-1leuevi, .framer-C67cd .framer-1glxsn0 { padding: 80px 40px 80px 40px; } .framer-C67cd .framer-ayi3et { gap: 40px; } .framer-C67cd .framer-1iqnpmh { flex-direction: column; } .framer-C67cd .framer-n82bn1 { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 10%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 52%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 92%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 99.54954954954955%); height: 120%; top: calc(50.00000000000002% - 120% / 2); } .framer-C67cd .framer-g5g25l { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 6%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 93%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); height: 120%; top: calc(50.00000000000002% - 120% / 2); } .framer-C67cd .framer-1g436x4 { --border-right-width: 0px; align-content: center; align-items: center; flex: none; max-width: 1440px; width: 100%; } .framer-C67cd .framer-fsu0g5 { --border-right-width: 0px; --border-top-width: 1px; flex: none; width: 100%; } .framer-C67cd .framer-1r2jmcu, .framer-C67cd .framer-h5okev, .framer-C67cd .framer-14v3ixw, .framer-C67cd .framer-98e8zk, .framer-C67cd .framer-o2m4q8 { height: var(--framer-aspect-ratio-supported, 32px); } .framer-C67cd .framer-lf7o82, .framer-C67cd .framer-he0n1k { max-width: 400px; } .framer-C67cd .framer-1g484w9 { flex-direction: column; gap: 0px; } .framer-C67cd .framer-2aoxrx, .framer-C67cd .framer-f2p58c { flex: none; flex-direction: row; width: 100%; } .framer-C67cd .framer-1587ars-container, .framer-C67cd .framer-1kujmp0-container, .framer-C67cd .framer-1flws91-container, .framer-C67cd .framer-1t3k37u-container, .framer-C67cd .framer-187b7yg, .framer-C67cd .framer-k0evuk, .framer-C67cd .framer-1k1t8vz, .framer-C67cd .framer-1u8sbrs, .framer-C67cd .framer-1q74qp1, .framer-C67cd .framer-1trqcaa, .framer-C67cd .framer-1r1lvou, .framer-C67cd .framer-1qiae26, .framer-C67cd .framer-16uok85 { flex: 1 0 0px; width: 1px; } .framer-C67cd .framer-1507efr { width: 100%; } .framer-C67cd .framer-9btq5g { padding: 4px; } .framer-C67cd .framer-1vyzxwt { height: min-content; padding: 40px 20px 40px 20px; } .framer-C67cd .framer-vi9ouz { max-width: 297px; } .framer-C67cd .framer-1p3ogcp, .framer-C67cd .framer-1g95enq { height: 120%; top: calc(50.10438413361171% - 120% / 2); } .framer-C67cd .framer-5q9yio { gap: 60px; } .framer-C67cd .framer-1kc8o5e { padding: 100px 40px 100px 40px; } .framer-C67cd .framer-7xv4wm { align-content: flex-start; align-items: flex-start; } .framer-C67cd .framer-z0lef { max-width: 340px; } .framer-C67cd .framer-120wdqn { min-width: 300px; } .framer-C67cd .framer-85fgut-container { height: 648px; } .framer-C67cd .framer-4if8q0 { height: 120%; top: calc(49.89561586638833% - 120% / 2); } .framer-C67cd .framer-vg8qb4 { padding: 200px 40px 200px 40px; } .framer-C67cd .framer-6wsgz6 { -webkit-mask: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0,0,0,1) 26%) add; gap: 0px; mask: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 26%) add; max-width: 810px; } .framer-C67cd .framer-1sfab6g, .framer-C67cd .framer-xpi8u, .framer-C67cd .framer-1itowcn, .framer-C67cd .framer-118ktro, .framer-C67cd .framer-1pmcrrr { align-self: unset; width: 100%; } .framer-C67cd .framer-u2vm6d { aspect-ratio: 0.2749529190207156 / 1; flex: 1 0 0px; width: 1px; } .framer-C67cd .framer-gc6ra { max-width: 357px; } .framer-C67cd .framer-5huqem { padding: 80px 40px 120px 40px; } .framer-C67cd .framer-13p91l2 { max-width: 500px; } .framer-C67cd .framer-r46a1i-container { height: 700px; } .framer-C67cd .framer-c9pmin { height: 110%; top: calc(49.89561586638833% - 110.00000000000001% / 2); } .framer-C67cd .framer-1bu9dab { height: 110%; top: calc(50.10438413361171% - 110.00000000000001% / 2); } .framer-C67cd .framer-iwsjwl { order: 0; } .framer-C67cd .framer-1e14ang { padding: 0px 12px 0px 12px; } .framer-C67cd .framer-x46dg3 { max-width: 353px; } .framer-C67cd .framer-r6bx5h { max-width: 300px; } .framer-C67cd .framer-1pn2a53 { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-C67cd.framer-72rtr7 { width: 390px; } .framer-C67cd .framer-opxj1e { height: min-content; min-height: unset; order: 0; } .framer-C67cd .framer-1y69297 { border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; height: auto; padding: 100px 16px 72px 16px; } .framer-C67cd .framer-6yqi7g { gap: 48px; } .framer-C67cd .framer-x2raux, .framer-C67cd .framer-1c9ce69 { gap: 16px; } .framer-C67cd .framer-2d6shb { gap: 6px; } .framer-C67cd .framer-1ownzfa { flex-wrap: wrap; gap: 8px; } .framer-C67cd .framer-ubcmm7-container { height: 45px; width: 116px; } .framer-C67cd .framer-1ypdmnm { max-width: 350px; } .framer-C67cd .framer-5n76r0-container { max-width: 326px; width: 100%; } .framer-C67cd .framer-jz0huk { height: 166px; max-width: 321px; min-width: 270px; } .framer-C67cd .framer-a3i7l7 { height: var(--framer-aspect-ratio-supported, 129px); left: -12px; top: 15px; width: 137px; } .framer-C67cd .framer-1drxjh8 { height: var(--framer-aspect-ratio-supported, 129px); left: 36%; top: 22px; transform: translateX(-50%); width: 137px; } .framer-C67cd .framer-12csdyf { height: var(--framer-aspect-ratio-supported, 129px); left: 62%; top: 17px; transform: translateX(-50%); width: 137px; } .framer-C67cd .framer-1781ri8 { height: var(--framer-aspect-ratio-supported, 129px); left: unset; right: -10px; top: 18px; width: 137px; } .framer-C67cd .framer-1eobnb7 { order: 1; padding: 60px 16px 60px 16px; } .framer-C67cd .framer-ayi3et { gap: 24px; } .framer-C67cd .framer-1iqnpmh { flex-direction: column; } .framer-C67cd .framer-n82bn1, .framer-C67cd .framer-g5g25l { height: 130%; top: calc(50.00000000000002% - 130% / 2); } .framer-C67cd .framer-1c1uhcl, .framer-C67cd .framer-2yq275, .framer-C67cd .framer-1ghnbh1, .framer-C67cd .framer-1lopg1p, .framer-C67cd .framer-1rmh4dz { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: 7px; left: -3px; top: -3px; width: 7px; } .framer-C67cd .framer-1jtc9tq, .framer-C67cd .framer-9ye8on, .framer-C67cd .framer-cf99pt, .framer-C67cd .framer-i41vbz, .framer-C67cd .framer-gnpfs0 { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: 7px; right: -3px; top: -3px; width: 7px; } .framer-C67cd .framer-1q425if, .framer-C67cd .framer-o63at, .framer-C67cd .framer-136jg9o, .framer-C67cd .framer-1ak2wj6, .framer-C67cd .framer-qhhh5f { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; right: -3px; width: 7px; } .framer-C67cd .framer-nxn30o, .framer-C67cd .framer-1m49seo, .framer-C67cd .framer-exs8to, .framer-C67cd .framer-8emkg0, .framer-C67cd .framer-19bi8fl { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; left: -3px; width: 7px; } .framer-C67cd .framer-1g436x4 { flex: none; max-width: 700px; padding: 24px; width: 100%; } .framer-C67cd .framer-fsu0g5 { --border-top-width: 1px; flex: none; gap: 14px; padding: 24px 0px 24px 0px; width: 100%; } .framer-C67cd .framer-1x244x1, .framer-C67cd .framer-1jgycy0 { padding: 0px 24px 0px 24px; } .framer-C67cd .framer-1r2jmcu, .framer-C67cd .framer-h5okev, .framer-C67cd .framer-14v3ixw, .framer-C67cd .framer-98e8zk, .framer-C67cd .framer-o2m4q8 { height: var(--framer-aspect-ratio-supported, 32px); } .framer-C67cd .framer-pe4yer { order: 2; padding: 60px 16px 60px 16px; } .framer-C67cd .framer-1r1yp8u, .framer-C67cd .framer-5q9yio, .framer-C67cd .framer-pmshyw, .framer-C67cd .framer-143j4f8, .framer-C67cd .framer-iwsjwl { gap: 40px; } .framer-C67cd .framer-dfty4q { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; justify-content: center; padding: 0px 12px 0px 12px; } .framer-C67cd .framer-lf7o82, .framer-C67cd .framer-z0lef { flex: none; gap: 16px; width: 100%; } .framer-C67cd .framer-1gefgn1 { width: 86%; } .framer-C67cd .framer-mgxa7a-container, .framer-C67cd .framer-1507efr, .framer-C67cd .framer-v7s9fv-container { width: 100%; } .framer-C67cd .framer-1g484w9 { flex-direction: column; gap: 0px; } .framer-C67cd .framer-2aoxrx, .framer-C67cd .framer-f2p58c { flex: none; width: 100%; } .framer-C67cd .framer-9btq5g { padding: 4px; } .framer-C67cd .framer-1vyzxwt { padding: 40px 16px 40px 16px; } .framer-C67cd .framer-q3eolu { height: 110%; top: calc(50.00000000000002% - 110.00000000000001% / 2); } .framer-C67cd .framer-1p3ogcp, .framer-C67cd .framer-1ydfun6 { height: 110%; top: calc(50.10438413361171% - 110.00000000000001% / 2); } .framer-C67cd .framer-1leuevi { order: 3; padding: 60px 16px 60px 16px; } .framer-C67cd .framer-11xabqd { order: 1; } .framer-C67cd .framer-1q286fz { opacity: unset; order: 2; } .framer-C67cd .framer-aaxtx0 { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: var(--framer-aspect-ratio-supported, 8px); left: -3px; opacity: unset; order: 3; top: -3px; width: 7px; } .framer-C67cd .framer-1mph3l2 { background: linear-gradient(270deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); opacity: unset; order: 4; } .framer-C67cd .framer-17gg8xc { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: var(--framer-aspect-ratio-supported, 8px); opacity: unset; order: 5; right: -3px; top: -3px; width: 7px; } .framer-C67cd .framer-prjrtb { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: var(--framer-aspect-ratio-supported, 8px); opacity: unset; order: 7; right: -3px; width: 7px; } .framer-C67cd .framer-1vulxfa { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: var(--framer-aspect-ratio-supported, 8px); left: -3px; opacity: unset; order: 6; width: 7px; } .framer-C67cd .framer-3frspw { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 7.000000000000001%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 100%); opacity: unset; order: 8; } .framer-C67cd .framer-1n6ij6r { background: linear-gradient(180deg, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, #1b1a19) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25)) 99.09909909909909%); height: 110%; opacity: unset; order: 9; top: calc(50.10438413361171% - 110.00000000000001% / 2); } .framer-C67cd .framer-1kc8o5e { order: 4; padding: 60px 16px 140px 16px; } .framer-C67cd .framer-7xv4wm { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; justify-content: center; padding: 0px 12px 0px 12px; } .framer-C67cd .framer-120wdqn { gap: 24px; min-width: unset; width: 100%; } .framer-C67cd .framer-10le5p3, .framer-C67cd .framer-1sfab6g, .framer-C67cd .framer-xpi8u, .framer-C67cd .framer-1itowcn, .framer-C67cd .framer-118ktro, .framer-C67cd .framer-1pmcrrr { align-self: unset; width: 100%; } .framer-C67cd .framer-92ctoh { padding: 16px 0px 16px 0px; } .framer-C67cd .framer-vg8qb4 { order: 5; padding: 80px 16px 80px 16px; } .framer-C67cd .framer-1j5ed88 { padding: 0px 0px 120px 0px; } .framer-C67cd .framer-6wsgz6 { gap: 0px; max-width: 380px; } .framer-C67cd .framer-187b7yg, .framer-C67cd .framer-1qiae26 { flex: 1 0 0px; width: 1px; } .framer-C67cd .framer-u2vm6d, .framer-C67cd .framer-1k1t8vz, .framer-C67cd .framer-1q74qp1, .framer-C67cd .framer-1r1lvou, .framer-C67cd .framer-16uok85 { aspect-ratio: unset; height: 236px; width: 66px; } .framer-C67cd .framer-k0evuk, .framer-C67cd .framer-1trqcaa { flex: 1 0 0px; padding: 0px 0px 46px 0px; width: 1px; } .framer-C67cd .framer-1u8sbrs { flex: 1 0 0px; padding: 0px 0px 99px 0px; width: 1px; } .framer-C67cd .framer-l7rwyk { gap: 20px; max-width: unset; } .framer-C67cd .framer-1uenaz6 { --framer-text-wrap-override: balance; max-width: 358px; } .framer-C67cd .framer-5huqem { order: 6; padding: 60px 16px 140px 16px; } .framer-C67cd .framer-r46a1i-container { height: 788px; } .framer-C67cd .framer-1glxsn0 { gap: 44px; order: 7; padding: 60px 16px 60px 16px; } .framer-C67cd .framer-1e14ang { flex-direction: column; gap: 10px; justify-content: center; padding: 0px 12px 0px 12px; } .framer-C67cd .framer-x46dg3 { flex: none; gap: 16px; max-width: unset; width: 100%; } .framer-C67cd .framer-2kx2nd { max-width: unset; } .framer-C67cd .framer-r6bx5h { flex: none; gap: 24px; max-width: unset; width: 100%; } .framer-C67cd .framer-1pn2a53 { gap: 0px 24px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-C67cd .framer-derjyi-container { height: auto; } .framer-C67cd .framer-1468eg { left: calc(50.00000000000002% - 106% / 2); width: 106%; } .framer-C67cd .framer-15vn629 { height: 110%; top: calc(49.89561586638833% - 110.00000000000001% / 2); } .framer-C67cd .framer-1mkqeqw-container { order: 9; } .framer-C67cd .framer-16iye30-container { order: 8; }}`,
      ],
      `framer-C67cd`
    )),
    (_r = gr),
    (gr.displayName = `Home`),
    (gr.defaultProps = { height: 10513, width: 1440 }),
    T(
      gr,
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
        ...un,
        ...fn,
        ...mn,
        ...vn,
        ...yn,
        ...xn,
        ...Sn,
        ...Cn,
        ...wn,
        ...Tn,
        ...En,
        ...Dn,
        ...On,
        ...kn,
        ...An,
        ...S(St),
        ...S(vt),
        ...S(me),
        ...S(Ee),
        ...S(Se),
        ...S($e),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (gr.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = j.get(Xn(), n),
          i = j.get(Qn(), n),
          a = j.get($n(), n),
          o = j.get(er(), n),
          s = j.get(dr(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          a.preload(),
          o.preload(),
          s.preload(),
          B(H, {}, t),
          B(Xe, {}, t),
          B(Oe, {}, t),
          B(je, {}, t),
          B(Xt, {}, t),
          B(G, {}, t),
          B(cn, {}, t),
          B(V, {}, t),
          B(ot, {}, t),
          B(at, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => B(W, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => B(W, {}, t)));
          })(),
          (async () => {
            let e = (await a.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => B(W, {}, t)));
          })(),
          (async () => {
            let e = (await o.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => B(W, {}, t)));
          })(),
          (async () => {
            let e = (await s.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => B(ct, {}, t)));
          })(),
        ]);
      },
    }),
    (vr = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerScrollSections: `{"ITm7MVvyC":{"pattern":":ITm7MVvyC","name":"integration"}}`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1440`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"mKN5cngFV":{"layout":["fixed","auto"]},"t8ROkHIfN":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `10513`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { vr as __FramerMetadata__, _r as default, Nn as queryParamNames };
//# sourceMappingURL=1aptXG_NItawKcsXwHLYz8fjzx_t8ILLksZMwLYH-_M.C5RP3kMP.mjs.map
