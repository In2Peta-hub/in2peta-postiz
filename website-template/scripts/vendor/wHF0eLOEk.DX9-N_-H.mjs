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
import { E as d, a as f, r as ee, t as p } from "./motion.DVY4-TFg.mjs";
import {
  Dt as m,
  Et as te,
  K as h,
  L as g,
  N as _,
  P as v,
  Q as y,
  dt as ne,
  k as b,
  m as re,
  o as x,
  q as S,
  yt as ie,
} from "./framer.CFqKih1k.mjs";
import { i as C, n as w, r as T, t as E } from "./kumYuXBDg.BDiDl76I.mjs";
import { i as D, n as O, r as k, t as A } from "./jXwTlEdH0.D4YWS_vr.mjs";
function j(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  ae = e(() => {
    (l(),
      y(),
      p(),
      i(),
      D(),
      C(),
      (M = [`Y_6edaaa9`, `d8Cd0P_dr`, `DeiL4RSDF`]),
      (N = `framer-8DQqw`),
      (P = {
        d8Cd0P_dr: `framer-v-wlpdkg`,
        DeiL4RSDF: `framer-v-1sfggs8`,
        Y_6edaaa9: `framer-v-1hfreiq`,
      }),
      (F = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (I = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (L = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: n });
      }),
      (R = { "Scalora CRM": `DeiL4RSDF`, Desktop: `Y_6edaaa9`, Phone: `d8Cd0P_dr` }),
      (z = d.create(r)),
      (B = ({ border: e, height: t, id: n, image: r, subText: i, title: a, width: o, ...s }) => ({
        ...s,
        CLrlhYiqi: e ??
          s.CLrlhYiqi ?? {
            borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) /* {"name":"Straight Line - 01"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
        ODjT7kzLC: r ??
          s.ODjT7kzLC ?? {
            alt: `Three coworkers in a meeting, with one using a laptop and another taking notes at a desk.`,
            pixelHeight: 1440,
            pixelWidth: 2560,
            src: `../../assets/images/Rqbs1jcG6RYs6oXJu0AtvRU5v0-d2fd7e.png`,
            srcSet: `../../assets/images/Rqbs1jcG6RYs6oXJu0AtvRU5v0.png 512w,../../assets/images/Rqbs1jcG6RYs6oXJu0AtvRU5v0-fd8317.png 1024w,../../assets/images/Rqbs1jcG6RYs6oXJu0AtvRU5v0-fdd486.png 2048w,../../assets/images/Rqbs1jcG6RYs6oXJu0AtvRU5v0-d2fd7e.png 2560w`,
          },
        Ordr4ylGa: a ?? s.Ordr4ylGa ?? `Email & drip campaigns`,
        variant: R[s.variant] ?? s.variant ?? `Y_6edaaa9`,
        vWcxBpall:
          i ?? s.vWcxBpall ?? `Design and automate sequences that nurture leads intelligently.`,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = m(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: l, setLocale: f } = ie(),
            p = ne(),
            {
              style: m,
              className: h,
              layoutId: _,
              variant: v,
              ODjT7kzLC: y,
              Ordr4ylGa: x,
              vWcxBpall: C,
              CLrlhYiqi: w,
              ...T
            } = B(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: R,
              gestureVariant: H,
              isLoading: U,
              setGestureState: ae,
              setVariant: W,
              variants: G,
            } = te({
              cycleOrder: M,
              defaultVariant: `Y_6edaaa9`,
              ref: a,
              variant: v,
              variantClassNames: P,
            }),
            K = V(e, G),
            q = g(N, A, E);
          return c(ee, {
            id: _ ?? s,
            children: c(z, {
              animate: G,
              initial: !1,
              children: c(L, {
                value: F,
                children: u(d.div, {
                  ...T,
                  ...R,
                  className: g(q, `framer-1hfreiq`, h, O),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: K,
                  layoutId: `Y_6edaaa9`,
                  ref: a,
                  style: {
                    "--border-bottom-width": (w?.borderBottomWidth ?? w?.borderWidth) + `px`,
                    "--border-color": w?.borderColor,
                    "--border-left-width": (w?.borderLeftWidth ?? w?.borderWidth) + `px`,
                    "--border-right-width": (w?.borderRightWidth ?? w?.borderWidth) + `px`,
                    "--border-style": w?.borderStyle,
                    "--border-top-width": (w?.borderTopWidth ?? w?.borderWidth) + `px`,
                    ...m,
                  },
                  ...j(
                    {
                      d8Cd0P_dr: { "data-framer-name": `Phone` },
                      DeiL4RSDF: { "data-framer-name": `Scalora CRM` },
                    },
                    D,
                    H
                  ),
                  children: [
                    c(d.div, {
                      className: `framer-44mi2v`,
                      "data-framer-name": `Image Wrapper`,
                      layoutDependency: K,
                      layoutId: `qTjQS2vrp`,
                      style: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: c(re, {
                        as: `figcaption`,
                        background: {
                          alt: `Three coworkers in a meeting, with one using a laptop and another taking notes at a desk.`,
                          fit: `fill`,
                          intrinsicHeight: 1440,
                          intrinsicWidth: 2560,
                          loading: S(
                            (p?.y || 0) + 12 + (((p?.height || 505) - 37 - 540) / 2 + 0 + 0) + 0
                          ),
                          pixelHeight: 1440,
                          pixelWidth: 2560,
                          sizes: `calc(${p?.width || `100vw`} - 24px)`,
                          ...I(y),
                        },
                        className: `framer-1nvk3y`,
                        layoutDependency: K,
                        layoutId: `MKN1QOeyk`,
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        ...j(
                          {
                            d8Cd0P_dr: {
                              background: {
                                alt: `Three coworkers in a meeting, with one using a laptop and another taking notes at a desk.`,
                                fit: `fill`,
                                intrinsicHeight: 1440,
                                intrinsicWidth: 2560,
                                loading: S(
                                  (p?.y || 0) +
                                    8 +
                                    (((p?.height || 488) - 20 - 540) / 2 + 0 + 0) +
                                    0
                                ),
                                pixelHeight: 1440,
                                pixelWidth: 2560,
                                sizes: `calc(${p?.width || `100vw`} - 16px)`,
                                ...I(y),
                              },
                            },
                          },
                          D,
                          H
                        ),
                      }),
                    }),
                    u(d.div, {
                      className: `framer-196oa7b`,
                      "data-framer-name": ` Text Wrapper`,
                      layoutDependency: K,
                      layoutId: `H6cSp8sxr`,
                      children: [
                        c(b, {
                          __fromCanvasComponent: !0,
                          children: c(r, {
                            children: c(d.h5, {
                              className: `framer-styles-preset-s5101p`,
                              "data-styles-preset": `jXwTlEdH0`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                              },
                              children: `Email & drip campaigns`,
                            }),
                          }),
                          className: `framer-1lcxwx6`,
                          fonts: [`Inter`],
                          layoutDependency: K,
                          layoutId: `e1DkWEAp_`,
                          style: {
                            "--extracted-1lwpl3i": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: x,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...j(
                            {
                              DeiL4RSDF: {
                                children: c(r, {
                                  children: c(d.h5, {
                                    className: `framer-styles-preset-s5101p`,
                                    "data-styles-preset": `jXwTlEdH0`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                    },
                                    children: `Email & drip campaigns`,
                                  }),
                                }),
                              },
                            },
                            D,
                            H
                          ),
                        }),
                        c(b, {
                          __fromCanvasComponent: !0,
                          children: c(r, {
                            children: c(d.p, {
                              className: `framer-styles-preset-i5ktzk`,
                              "data-styles-preset": `kumYuXBDg`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                              },
                              children: `Design and automate sequences that nurture leads intelligently.`,
                            }),
                          }),
                          className: `framer-1x4ywi8`,
                          fonts: [`Inter`],
                          layoutDependency: K,
                          layoutId: `eSyXEbHAX`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: C,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...j(
                            {
                              DeiL4RSDF: {
                                children: c(r, {
                                  children: c(d.p, {
                                    className: `framer-styles-preset-i5ktzk`,
                                    "data-styles-preset": `kumYuXBDg`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                    },
                                    children: `Design and automate sequences that nurture leads intelligently.`,
                                  }),
                                }),
                              },
                            },
                            D,
                            H
                          ),
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
          `.framer-8DQqw.framer-zslhip, .framer-8DQqw .framer-zslhip { display: block; }`,
          `.framer-8DQqw.framer-1hfreiq { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 12px 25px 12px; position: relative; width: 426px; }`,
          `.framer-8DQqw .framer-44mi2v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 360px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-8DQqw .framer-1nvk3y { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-8DQqw .framer-196oa7b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-8DQqw .framer-1lcxwx6 { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-8DQqw .framer-1x4ywi8 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 300px; position: relative; width: 100%; }`,
          `.framer-8DQqw.framer-v-wlpdkg.framer-1hfreiq { padding: 8px 8px 12px 8px; width: 343px; }`,
          `.framer-8DQqw.framer-v-1sfggs8.framer-1hfreiq { width: 576px; }`,
          `.framer-8DQqw.framer-v-1sfggs8 .framer-196oa7b { align-content: flex-start; align-items: flex-start; }`,
          `.framer-8DQqw.framer-v-1sfggs8 .framer-1x4ywi8 { max-width: 420px; }`,
          ...O,
          ...w,
          `.framer-8DQqw[data-border="true"]::after, .framer-8DQqw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-8DQqw`
      )),
      (U = H),
      (H.displayName = `Core Features`),
      (H.defaultProps = { height: 505, width: 426 }),
      v(H, {
        variant: {
          options: [`Y_6edaaa9`, `d8Cd0P_dr`, `DeiL4RSDF`],
          optionTitles: [`Desktop`, `Phone`, `Scalora CRM`],
          title: `Variant`,
          type: x.Enum,
        },
        ODjT7kzLC: {
          __defaultAssetReference: `data:framer/asset-reference,Rqbs1jcG6RYs6oXJu0AtvRU5v0.png?originalFilename=Frame+2147207505111.png&width=2560&height=1440`,
          __vekterDefault: {
            alt: `Three coworkers in a meeting, with one using a laptop and another taking notes at a desk.`,
            assetReference: `data:framer/asset-reference,Rqbs1jcG6RYs6oXJu0AtvRU5v0.png?originalFilename=Frame+2147207505111.png&width=2560&height=1440`,
          },
          title: `Image`,
          type: x.ResponsiveImage,
        },
        Ordr4ylGa: {
          defaultValue: `Email & drip campaigns`,
          displayTextArea: !1,
          title: `Title`,
          type: x.String,
        },
        onOrdr4ylGaChange: { changes: `Ordr4ylGa`, type: x.ChangeHandler },
        vWcxBpall: {
          defaultValue: `Design and automate sequences that nurture leads intelligently.`,
          displayTextArea: !0,
          title: `Sub Text`,
          type: x.String,
        },
        onvWcxBpallChange: { changes: `vWcxBpall`, type: x.ChangeHandler },
        CLrlhYiqi: {
          defaultValue: {
            borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) /* {"name":"Straight Line - 01"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Border`,
          type: x.Border,
        },
      }),
      _(
        H,
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
          ...h(k),
          ...h(T),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  W,
  G,
  K,
  q,
  J,
  oe = e(() => {
    (l(),
      y(),
      i(),
      (W = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g d="M 19.877 1.519 L 8.79 6.841 C 7.953 7.248 7.002 7.356 6.096 7.145 C 5.487 7.009 5.183 6.941 4.938 6.913 C 1.896 6.565 0 8.973 0 11.741 L 0 13.26 C 0 16.028 1.896 18.435 4.937 18.088 C 5.182 18.06 5.487 17.992 6.095 17.855 C 7.001 17.644 7.952 17.751 8.789 18.159 L 19.877 23.482 C 22.422 24.704 23.695 25.315 25.114 24.838 C 26.533 24.362 27.02 23.34 27.994 21.297 C 30.669 15.686 30.669 9.315 27.994 3.704 C 27.02 1.66 26.533 0.638 25.114 0.162 C 23.695 -0.314 22.422 0.297 19.877 1.519 Z M 13.93 31.285 L 11.445 33.334 C 5.842 28.89 6.526 26.771 6.526 18.334 L 8.416 18.334 C 9.183 23.102 10.992 25.36 13.488 26.995 C 15.025 28.002 15.342 30.121 13.93 31.285 Z M 7.333 17.5 L 7.333 7.5" fill="transparent" height="33.33399963378906px" id="j6fPD7UaC" transform="translate(5 3.5)" width="30.00025000000014px"><path d="M 19.877 1.519 L 8.79 6.841 C 7.953 7.248 7.002 7.356 6.096 7.145 C 5.487 7.009 5.183 6.941 4.938 6.913 C 1.896 6.565 0 8.973 0 11.741 L 0 13.26 C 0 16.028 1.896 18.435 4.937 18.088 C 5.182 18.06 5.487 17.992 6.095 17.855 C 7.001 17.644 7.952 17.751 8.789 18.159 L 19.877 23.482 C 22.422 24.704 23.695 25.315 25.114 24.838 C 26.533 24.362 27.02 23.34 27.994 21.297 C 30.669 15.686 30.669 9.315 27.994 3.704 C 27.02 1.66 26.533 0.638 25.114 0.162 C 23.695 -0.314 22.422 0.297 19.877 1.519 Z" fill="transparent" height="24.999996041273434px" id="rXc4Umo5L" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" width="30.00025000000028px"/><path d="M 7.43 23.785 L 4.945 25.834 C -0.658 21.39 0.026 19.271 0.026 10.834 L 1.916 10.834 C 2.683 15.602 4.492 17.86 6.988 19.495 C 8.525 20.502 8.842 22.621 7.43 23.785 Z M 0.833 10 L 0.833 0" fill="transparent" height="25.833999633789062px" id="hecwWGu3u" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(6.5 7.5)" width="8.33339683960416px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (G = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(d.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (K = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (q = m(
        a(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = K(e);
          return c(G, {
            ...s,
            className: g(`framer-XRJm7`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-XRJm7 { -webkit-mask: ${W}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${W}; width: 40px; }`,
        ],
        `framer-XRJm7`
      )),
      (q.displayName = `promotion`),
      (J = q),
      v(q, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: x.Color,
        },
      }));
  }),
  Y,
  X,
  Z,
  Q,
  $,
  se = e(() => {
    (l(),
      y(),
      i(),
      (Y = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g d="M 0 15.833 C 0 8.369 0 4.637 2.319 2.318 C 4.637 0 8.369 0 15.833 0 C 23.297 0 27.029 0 29.348 2.318 C 31.667 4.638 31.667 8.369 31.667 15.833 C 31.667 23.297 31.667 27.029 29.348 29.348 C 27.029 31.666 23.298 31.666 15.833 31.666 C 8.369 31.666 4.637 31.666 2.319 29.348 C 0 27.028 0 23.297 0 15.833 Z M 0 10.833 L 7.917 10.833 M 31.667 10.833 L 23.75 10.833 M 20.833 7.5 L 10.833 7.5 C 8.992 7.5 7.5 8.992 7.5 10.833 C 7.5 12.674 8.992 14.166 10.833 14.166 L 20.833 14.166 C 22.674 14.166 24.166 12.674 24.166 10.833 C 24.166 8.992 22.674 7.5 20.833 7.5 Z" fill="transparent" height="31.665999999999997px" id="eq9biNC9T" transform="translate(4 4)" width="31.667px"><path d="M 0 15.833 C 0 8.369 0 4.637 2.319 2.318 C 4.637 0 8.369 0 15.833 0 C 23.297 0 27.029 0 29.348 2.318 C 31.667 4.638 31.667 8.369 31.667 15.833 C 31.667 23.297 31.667 27.029 29.348 29.348 C 27.029 31.666 23.298 31.666 15.833 31.666 C 8.369 31.666 4.637 31.666 2.319 29.348 C 0 27.028 0 23.297 0 15.833 Z M 0 10.833 L 7.917 10.833 M 31.667 10.833 L 23.75 10.833" fill="transparent" height="31.665999999999997px" id="ymmKF8zjt" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" width="31.667px"/><path d="M 13.333 0 L 3.333 0 C 1.492 0 0 1.492 0 3.333 C 0 5.174 1.492 6.666 3.333 6.666 L 13.333 6.666 C 15.174 6.666 16.666 5.174 16.666 3.333 C 16.666 1.492 15.174 0 13.333 0 Z" fill="transparent" height="6.665999999999997px" id="NeuMWZEOr" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(7.5 7.5)" width="16.666000000000167px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (X = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(d.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (Z = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (Q = m(
        a(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = Z(e);
          return c(X, {
            ...s,
            className: g(`framer-8Et4U`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-8Et4U { -webkit-mask: ${Y}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${Y}; width: 40px; }`,
        ],
        `framer-8Et4U`
      )),
      (Q.displayName = `airpod`),
      ($ = Q),
      v(Q, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: x.Color,
        },
      }));
  });
export { ae as a, oe as i, $ as n, U as o, J as r, se as t };
//# sourceMappingURL=wHF0eLOEk.DX9-N_-H.mjs.map
