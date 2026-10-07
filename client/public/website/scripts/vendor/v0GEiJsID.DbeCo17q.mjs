import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  A as t,
  O as n,
  P as r,
  T as i,
  _ as a,
  b as o,
  j as s,
  l as c,
  s as l,
  u,
} from "./react.C83sJsFz.mjs";
import { E as d, a as f, r as p, t as m } from "./motion.DVY4-TFg.mjs";
import {
  Dt as h,
  Et as g,
  K as _,
  L as v,
  N as y,
  P as b,
  Q as x,
  dt as S,
  k as C,
  o as w,
  y as T,
  yt as E,
} from "./framer.CFqKih1k.mjs";
import { a as D, c as O, o as k, s as A } from "./shared-lib.P4JA4aUc.mjs";
var j,
  M,
  N,
  P,
  F,
  I = e(() => {
    (l(),
      x(),
      i(),
      (j = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 37" xmlns="http://www.w3.org/2000/svg"><path d="M 0 16.667 L 8.333 8.333 L 0 0" fill="transparent" height="16.66666666666663px" id="OK7LqVzCR" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.33" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(16 10.167) rotate(90 4.167 8.333)" width="8.333333333333314px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (M = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(d.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (N = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (P = h(
        a(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = N(e);
          return c(M, {
            ...s,
            className: v(`framer-BkKdZ`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-BkKdZ { -webkit-mask: ${j}; aspect-ratio: 1.0810810810810811; background-color: var(--14vpx0c); mask: ${j}; width: 40px; }`,
        ],
        `framer-BkKdZ`
      )),
      (P.displayName = `Down Arrow`),
      (F = P),
      b(P, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: w.Color,
        },
      }));
  });
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J = e(() => {
    (l(),
      x(),
      m(),
      i(),
      O(),
      (R = { lZQvm5vR1: { hover: !0 } }),
      (z = `framer-6Y5G2`),
      (B = { lZQvm5vR1: `framer-v-18ztz1z` }),
      (V = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (H = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: n });
      }),
      (U = d.create(r)),
      (W = ({ height: e, id: t, link: n, title: r, width: i, ...a }) => ({
        ...a,
        kDj5Ixhw1: n ?? a.kDj5Ixhw1,
        kJdISHL06: r ?? a.kJdISHL06 ?? `View Case Study`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = h(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: l, setLocale: f } = E();
          S();
          let {
              style: m,
              className: h,
              layoutId: _,
              variant: y,
              kJdISHL06: b,
              kDj5Ixhw1: x,
              ...w
            } = W(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: P,
              setVariant: F,
              variants: I,
            } = g({
              defaultVariant: `lZQvm5vR1`,
              enabledGestures: R,
              ref: a,
              variant: y,
              variantClassNames: B,
            }),
            K = G(e, I),
            q = v(z, D);
          return c(p, {
            id: _ ?? s,
            children: c(U, {
              animate: I,
              initial: !1,
              children: c(H, {
                value: V,
                children: c(T, {
                  href: x,
                  motionChild: !0,
                  nodeId: `lZQvm5vR1`,
                  openInNewTab: !1,
                  scopeId: `v0GEiJsID`,
                  children: c(d.a, {
                    ...w,
                    ...j,
                    className: `${v(q, `framer-18ztz1z`, h, k)} framer-a63w10`,
                    "data-border": !0,
                    "data-framer-name": `Secondary`,
                    layoutDependency: K,
                    layoutId: `lZQvm5vR1`,
                    ref: a,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22))`,
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                      ...m,
                    },
                    variants: {
                      "lZQvm5vR1-hover": {
                        "--border-color": `var(--token-bf6832a6-f620-4bca-bb5e-83b41963a7bd, rgba(255, 255, 255, 0))`,
                        backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                      },
                    },
                    ...L({ "lZQvm5vR1-hover": { "data-framer-name": void 0 } }, O, M),
                    children: u(d.div, {
                      className: `framer-1ykx3fv`,
                      "data-framer-name": `Text Wrapper`,
                      layoutDependency: K,
                      layoutId: `NX_NGEjgb`,
                      children: [
                        c(C, {
                          __fromCanvasComponent: !0,
                          children: c(r, {
                            children: c(d.p, {
                              className: `framer-styles-preset-14qd5ms`,
                              "data-styles-preset": `eMJMLduj1`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                              },
                              children: `View Case Study`,
                            }),
                          }),
                          className: `framer-16t5va1`,
                          "data-framer-name": `Static`,
                          fonts: [`Inter`],
                          layoutDependency: K,
                          layoutId: `MX0GrmvyS`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                            opacity: 0,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        c(C, {
                          __fromCanvasComponent: !0,
                          children: c(r, {
                            children: c(d.p, {
                              className: `framer-styles-preset-14qd5ms`,
                              "data-styles-preset": `eMJMLduj1`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                              },
                              children: `View Case Study`,
                            }),
                          }),
                          className: `framer-1fekv2a`,
                          "data-framer-name": `Text 1`,
                          fonts: [`Inter`],
                          layoutDependency: K,
                          layoutId: `HReGpDlSn`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        c(C, {
                          __fromCanvasComponent: !0,
                          children: c(r, {
                            children: c(d.p, {
                              className: `framer-styles-preset-14qd5ms`,
                              "data-styles-preset": `eMJMLduj1`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                              },
                              children: `View Case Study`,
                            }),
                          }),
                          className: `framer-k2uns5`,
                          "data-framer-name": `Text 2`,
                          fonts: [`Inter`],
                          layoutDependency: K,
                          layoutId: `NH0N94a0v`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: b,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6Y5G2.framer-a63w10, .framer-6Y5G2 .framer-a63w10 { display: block; }`,
          `.framer-6Y5G2.framer-18ztz1z { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 24px 10px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6Y5G2 .framer-1ykx3fv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-6Y5G2 .framer-16t5va1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-6Y5G2 .framer-1fekv2a { flex: none; height: auto; left: 0px; position: absolute; top: 0px; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-6Y5G2 .framer-k2uns5 { flex: none; height: auto; left: 0px; position: absolute; top: 47px; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-6Y5G2.framer-v-18ztz1z.hover .framer-1fekv2a { top: -65px; }`,
          `.framer-6Y5G2.framer-v-18ztz1z.hover .framer-k2uns5 { top: 0px; }`,
          ...k,
          `.framer-6Y5G2[data-border="true"]::after, .framer-6Y5G2 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-6Y5G2`
      )),
      (q = K),
      (K.displayName = `Secondary Button`),
      (K.defaultProps = { height: 44, width: 172 }),
      b(K, {
        kJdISHL06: {
          defaultValue: `View Case Study`,
          displayTextArea: !1,
          title: `Title`,
          type: w.String,
        },
        onkJdISHL06Change: { changes: `kJdISHL06`, type: w.ChangeHandler },
        kDj5Ixhw1: { title: `Link`, type: w.Link },
      }),
      y(
        K,
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
          ..._(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { I as i, q as n, F as r, J as t };
//# sourceMappingURL=v0GEiJsID.DbeCo17q.mjs.map
