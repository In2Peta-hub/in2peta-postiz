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
  yt as ie,
} from "./framer.CFqKih1k.mjs";
import { i as S, n as C, r as w, t as ae } from "./kumYuXBDg.BDiDl76I.mjs";
import { i as T, n as E, r as D, t as oe } from "./SUQaOk4ze.9vdOYSbE.mjs";
import { i as O, n as se, r as k, t as ce } from "./jXwTlEdH0.D4YWS_vr.mjs";
function le(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A,
  j,
  M,
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
  ue = e(() => {
    (l(),
      y(),
      p(),
      i(),
      O(),
      S(),
      T(),
      (A = [`ghC2ZHJPf`, `oAczlnHM_`, `hadlklqS7`]),
      (j = `framer-GVFRe`),
      (M = {
        ghC2ZHJPf: `framer-v-1ol9g8f`,
        hadlklqS7: `framer-v-j58o7e`,
        oAczlnHM_: `framer-v-1fycayk`,
      }),
      (N = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (P = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (F = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (I = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: n });
      }),
      (L = { "Primary ": `ghC2ZHJPf`, V2: `oAczlnHM_`, V3: `hadlklqS7` }),
      (R = d.create(r)),
      (z = ({
        border: e,
        height: t,
        id: n,
        image: r,
        numbur: i,
        padding: a,
        subText: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        cC0wwxTAk: i ?? l.cC0wwxTAk ?? `01`,
        mKkijz_yZ: a ?? l.mKkijz_yZ ?? `8px 5px 8px 8px`,
        PWko4QQ6a:
          o ??
          l.PWko4QQ6a ??
          `Import contacts, sync leads from forms, or connect your CRM instantly.`,
        uVAnmzQWM: s ?? l.uVAnmzQWM ?? `Capture & Segment`,
        variant: L[l.variant] ?? l.variant ?? `ghC2ZHJPf`,
        vSpPEMUJJ: r ?? l.vSpPEMUJJ,
        yzFj167lx: e ??
          l.yzFj167lx ?? {
            borderBottomWidth: 0,
            borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
      })),
      (B = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = m(
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
              cC0wwxTAk: y,
              uVAnmzQWM: x,
              PWko4QQ6a: S,
              vSpPEMUJJ: C,
              yzFj167lx: w,
              mKkijz_yZ: T,
              ...E
            } = z(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: se,
              gestureHandlers: k,
              gestureVariant: L,
              isLoading: V,
              setGestureState: H,
              setVariant: ue,
              variants: U,
            } = te({
              cycleOrder: A,
              defaultVariant: `ghC2ZHJPf`,
              ref: a,
              variant: v,
              variantClassNames: M,
            }),
            W = B(e, U),
            G = g(j, oe, ce, ae),
            K = () => D !== `hadlklqS7`;
          return c(ee, {
            id: _ ?? s,
            children: c(R, {
              animate: U,
              initial: !1,
              children: c(I, {
                value: P,
                children: u(d.div, {
                  ...E,
                  ...k,
                  className: g(G, `framer-1ol9g8f`, h, O),
                  "data-border": !0,
                  "data-framer-name": `Primary `,
                  layoutDependency: W,
                  layoutId: `ghC2ZHJPf`,
                  ref: a,
                  style: {
                    "--1l9ddcw": N(T),
                    "--border-bottom-width": (w?.borderBottomWidth ?? w?.borderWidth) + `px`,
                    "--border-color": w?.borderColor,
                    "--border-left-width": (w?.borderLeftWidth ?? w?.borderWidth) + `px`,
                    "--border-right-width": (w?.borderRightWidth ?? w?.borderWidth) + `px`,
                    "--border-style": w?.borderStyle,
                    "--border-top-width": (w?.borderTopWidth ?? w?.borderWidth) + `px`,
                    backgroundColor: `var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22))`,
                    ...m,
                  },
                  ...le(
                    {
                      hadlklqS7: { "data-framer-name": `V3` },
                      oAczlnHM_: { "data-framer-name": `V2` },
                    },
                    D,
                    L
                  ),
                  children: [
                    u(d.div, {
                      className: `framer-3a6t2s`,
                      "data-framer-name": `Content`,
                      layoutDependency: W,
                      layoutId: `SL8Urxaq9`,
                      children: [
                        K() &&
                          c(d.div, {
                            className: `framer-1ovdo7j`,
                            "data-border": !0,
                            layoutDependency: W,
                            layoutId: `wB0FR_gDT`,
                            style: {
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-18d30b46-d0d7-4595-9e6d-7c78c6c86a4f, rgb(62, 59, 57))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                            children: c(b, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.h6, {
                                  className: `framer-styles-preset-11qazq0`,
                                  "data-styles-preset": `SUQaOk4ze`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                  },
                                  children: `01`,
                                }),
                              }),
                              className: `framer-m6opsc`,
                              fonts: [`Inter`],
                              layoutDependency: W,
                              layoutId: `ZZbY5DyE0`,
                              style: {
                                "--extracted-1w1cjl5": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        u(d.div, {
                          className: `framer-9nv2zy`,
                          "data-framer-name": `Details`,
                          layoutDependency: W,
                          layoutId: `gMHZ55m1H`,
                          children: [
                            c(b, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.h5, {
                                  className: `framer-styles-preset-s5101p`,
                                  "data-styles-preset": `jXwTlEdH0`,
                                  dir: `auto`,
                                  children: `Capture & Segment`,
                                }),
                              }),
                              className: `framer-1b7rte`,
                              fonts: [`Inter`],
                              layoutDependency: W,
                              layoutId: `ODwmarmxX`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: x,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            c(b, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-i5ktzk`,
                                  "data-styles-preset": `kumYuXBDg`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                  },
                                  children: `Import contacts, sync leads from forms, or connect your CRM instantly.`,
                                }),
                              }),
                              className: `framer-j045z9`,
                              fonts: [`Inter`],
                              layoutDependency: W,
                              layoutId: `cUAC1iRFu`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: S,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    c(d.div, {
                      className: `framer-8pfqol`,
                      "data-framer-name": `Image Wrapper`,
                      layoutDependency: W,
                      layoutId: `lTTMAb4pQ`,
                      style: {
                        borderBottomLeftRadius: 12,
                        borderBottomRightRadius: 12,
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      },
                      children: c(re, {
                        as: `figcaption`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          intrinsicHeight: 1440,
                          intrinsicWidth: 2560,
                          pixelHeight: 1440,
                          pixelWidth: 2560,
                          sizes: `calc(${p?.width || `100vw`} - ${T * 2}px)`,
                          ...F(C),
                          positionX: `center`,
                          positionY: `top`,
                        },
                        className: `framer-1u6chfr`,
                        layoutDependency: W,
                        layoutId: `gOPLK0RIZ`,
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
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
          `.framer-GVFRe.framer-egkalh, .framer-GVFRe .framer-egkalh { display: block; }`,
          `.framer-GVFRe.framer-1ol9g8f { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: var(--1l9ddcw); position: relative; width: 309px; }`,
          `.framer-GVFRe .framer-3a6t2s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 8px 0px 8px; position: relative; width: 100%; }`,
          `.framer-GVFRe .framer-1ovdo7j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px 14px 10px 14px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-GVFRe .framer-m6opsc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-GVFRe .framer-9nv2zy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-GVFRe .framer-1b7rte { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-GVFRe .framer-j045z9 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-GVFRe .framer-8pfqol { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 250px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-GVFRe .framer-1u6chfr { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-GVFRe.framer-v-1fycayk .framer-8pfqol { height: 380px; }`,
          `.framer-GVFRe.framer-v-j58o7e.framer-1ol9g8f { width: 517px; }`,
          `.framer-GVFRe.framer-v-j58o7e .framer-8pfqol { height: 300px; }`,
          ...E,
          ...se,
          ...C,
          `.framer-GVFRe[data-border="true"]::after, .framer-GVFRe [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-GVFRe`
      )),
      (H = V),
      (V.displayName = `How it works Card`),
      (V.defaultProps = { height: 454, width: 309 }),
      v(V, {
        variant: {
          options: [`ghC2ZHJPf`, `oAczlnHM_`, `hadlklqS7`],
          optionTitles: [`Primary `, `V2`, `V3`],
          title: `Variant`,
          type: x.Enum,
        },
        cC0wwxTAk: { defaultValue: `01`, displayTextArea: !1, title: `Numbur`, type: x.String },
        oncC0wwxTAkChange: { changes: `cC0wwxTAk`, type: x.ChangeHandler },
        uVAnmzQWM: {
          defaultValue: `Capture & Segment`,
          displayTextArea: !1,
          title: `Title`,
          type: x.String,
        },
        onuVAnmzQWMChange: { changes: `uVAnmzQWM`, type: x.ChangeHandler },
        PWko4QQ6a: {
          defaultValue: `Import contacts, sync leads from forms, or connect your CRM instantly.`,
          displayTextArea: !0,
          title: `Sub Text`,
          type: x.String,
        },
        onPWko4QQ6aChange: { changes: `PWko4QQ6a`, type: x.ChangeHandler },
        vSpPEMUJJ: { title: `Image`, type: x.ResponsiveImage },
        yzFj167lx: {
          defaultValue: {
            borderBottomWidth: 0,
            borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
            borderLeftWidth: 0,
            borderRightWidth: 1,
            borderStyle: `solid`,
            borderTopWidth: 0,
          },
          title: `Border`,
          type: x.Border,
        },
        mKkijz_yZ: { defaultValue: `8px 5px 8px 8px`, title: `Padding`, type: x.Padding },
      }),
      _(
        V,
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
          ...h(D),
          ...h(k),
          ...h(w),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  U,
  W,
  G,
  K,
  q,
  J = e(() => {
    (l(),
      y(),
      i(),
      (U = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g d="M 31.663 18.334 C 31.667 17.55 31.667 16.718 31.667 15.834 C 31.667 8.37 31.667 4.638 29.348 2.319 C 27.029 0 23.298 0 15.833 0 C 8.369 0 4.637 0 2.319 2.319 C 0 4.638 0 8.369 0 15.834 C 0 23.297 0 27.029 2.319 29.348 C 4.636 31.667 8.369 31.667 15.833 31.667 C 16.718 31.667 17.55 31.667 18.333 31.663 M 27.499 21.5 L 27.929 22.662 C 28.493 24.185 28.775 24.947 29.33 25.502 C 29.886 26.058 30.648 26.34 32.171 26.904 L 33.333 27.334 L 32.171 27.764 C 30.648 28.327 29.886 28.609 29.331 29.164 C 28.775 29.72 28.493 30.482 27.929 32.005 L 27.499 33.167 L 27.069 32.005 C 26.506 30.482 26.224 29.72 25.669 29.165 C 25.113 28.609 24.351 28.327 22.828 27.763 L 21.666 27.333 L 22.828 26.903 C 24.351 26.34 25.113 26.058 25.668 25.503 C 26.224 24.947 26.506 24.185 27.07 22.662 L 27.5 21.5 Z M 0 11.5 L 31.667 11.5 M 7.5 5.5 L 7.515 5.5 M 14.166 5.5 L 14.181 5.5" fill="transparent" height="33.167px" id="ik2McLlA7" transform="translate(3.5 4.5)" width="33.33300036621094px"><path d="M 31.663 18.334 C 31.667 17.55 31.667 16.718 31.667 15.834 C 31.667 8.37 31.667 4.638 29.348 2.319 C 27.029 0 23.298 0 15.833 0 C 8.369 0 4.637 0 2.319 2.319 C 0 4.638 0 8.369 0 15.834 C 0 23.297 0 27.029 2.319 29.348 C 4.636 31.667 8.369 31.667 15.833 31.667 C 16.718 31.667 17.55 31.667 18.333 31.663" fill="transparent" height="31.667px" id="xJvulF0Je" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" width="31.666999999999916px"/><path d="M 27.499 10 L 27.929 11.162 C 28.493 12.685 28.775 13.447 29.33 14.002 C 29.886 14.558 30.648 14.84 32.171 15.404 L 33.333 15.834 L 32.171 16.264 C 30.648 16.827 29.886 17.109 29.331 17.664 C 28.775 18.22 28.493 18.982 27.929 20.505 L 27.499 21.667 L 27.069 20.505 C 26.506 18.982 26.224 18.22 25.669 17.665 C 25.113 17.109 24.351 16.827 22.828 16.263 L 21.666 15.833 L 22.828 15.403 C 24.351 14.84 25.113 14.558 25.668 14.003 C 26.224 13.447 26.506 12.685 27.07 11.162 L 27.5 10 Z M 0 0 L 31.667 0" fill="transparent" height="21.667px" id="XkoDEI590" stroke-dasharray="" stroke-linecap="butt" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(0 11.5)" width="33.33300036621094px"/><path d="M 0 0 L 0.015 0 M 6.666 0 L 6.681 0" fill="transparent" height="1px" id="uv0KSRZhF" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.333" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(7.5 5.5)" width="6.68099988937378px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (W = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(d.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (G = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (K = m(
        a(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = G(e);
          return c(W, {
            ...s,
            className: g(`framer-hblBX`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-hblBX { -webkit-mask: ${U}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${U}; width: 40px; }`,
        ],
        `framer-hblBX`
      )),
      (K.displayName = `ai-browser`),
      (q = K),
      v(K, {
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
  de = e(() => {
    (l(),
      y(),
      i(),
      (Y = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g d="M 2.197 27.803 C 0 25.607 0 22.071 0 15 C 0 7.929 0 4.393 2.197 2.197 C 4.393 0 7.929 0 15 0 C 22.071 0 25.607 0 27.803 2.197 C 30 4.393 30 7.929 30 15 C 30 22.071 30 25.607 27.803 27.803 C 25.607 30 22.071 30 15 30 C 7.929 30 4.393 30 2.197 27.803 Z M 6.5 18.166 L 11.155 13.512 C 11.467 13.199 11.891 13.024 12.333 13.024 C 12.776 13.024 13.2 13.199 13.512 13.512 L 16.155 16.155 C 16.805 16.805 17.861 16.805 18.512 16.155 L 23.167 11.5" fill="transparent" height="30px" id="TxfitRUPA" transform="translate(6 5)" width="30px"><path d="M 2.197 27.803 C 0 25.607 0 22.071 0 15 C 0 7.929 0 4.393 2.197 2.197 C 4.393 0 7.929 0 15 0 C 22.071 0 25.607 0 27.803 2.197 C 30 4.393 30 7.929 30 15 C 30 22.071 30 25.607 27.803 27.803 C 25.607 30 22.071 30 15 30 C 7.929 30 4.393 30 2.197 27.803 Z" fill="transparent" height="30px" id="FBiaFzUAt" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" width="30px"/><path d="M 0 6.666 L 4.655 2.012 C 4.967 1.699 5.391 1.524 5.833 1.524 C 6.276 1.524 6.7 1.699 7.012 2.012 L 9.655 4.655 C 10.305 5.305 11.361 5.305 12.012 4.655 L 16.667 0" fill="transparent" height="6.665999999999997px" id="GHKANda5C" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(6.5 11.5)" width="16.666999999999916px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
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
            className: g(`framer-18oG3`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-18oG3 { -webkit-mask: ${Y}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${Y}; width: 40px; }`,
        ],
        `framer-18oG3`
      )),
      (Q.displayName = `activity`),
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
export { H as a, J as i, $ as n, ue as o, q as r, de as t };
//# sourceMappingURL=no1daujM5.8j03r7eY.mjs.map
