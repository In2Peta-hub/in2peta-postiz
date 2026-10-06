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
  m as w,
  o as T,
  q as E,
  y as D,
  yt as O,
} from "./framer.CFqKih1k.mjs";
import { i as k, n as A, r as j, t as M } from "./kumYuXBDg.BDiDl76I.mjs";
import { i as N, n as P, r as F, t as I } from "./jXwTlEdH0.D4YWS_vr.mjs";
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
  J,
  Y,
  X,
  Z = e(() => {
    (l(),
      x(),
      m(),
      i(),
      N(),
      k(),
      (R = { hnYxKWUZ8: { hover: !0 } }),
      (z = [`hnYxKWUZ8`, `B5eOgs6_u`]),
      (B = `framer-QUxp8`),
      (V = { B5eOgs6_u: `framer-v-1r4zv8z`, hnYxKWUZ8: `framer-v-1o33153` }),
      (H = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: n });
      }),
      (G = { Desktop: `hnYxKWUZ8`, Phone: `B5eOgs6_u` }),
      (K = d.create(r)),
      (q = ({
        border: e,
        category: t,
        date: n,
        height: r,
        id: i,
        image: a,
        link: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        CphaCzuak: o ?? l.CphaCzuak,
        F_CSN01FX: t ?? l.F_CSN01FX ?? `Growth strategy`,
        MhlZROnC2: s ?? l.MhlZROnC2 ?? `The hidden cost of tool sprawl in growing companies`,
        UCDbjiNYK: n ?? l.UCDbjiNYK ?? `24 May, 2025`,
        uzYIOQFMN: e ??
          l.uzYIOQFMN ?? {
            borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) /* {"name":"Straight Line - 01"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
        variant: G[l.variant] ?? l.variant ?? `hnYxKWUZ8`,
        YF3KZhs7x: a ??
          l.YF3KZhs7x ?? {
            alt: ``,
            pixelHeight: 2012,
            pixelWidth: 1340,
            src: `../../assets/images/HiQJBtBimlldYiYuvwlHhYEBtp0-f9740c.png`,
            srcSet: `../../assets/images/HiQJBtBimlldYiYuvwlHhYEBtp0.png 681w,../../assets/images/HiQJBtBimlldYiYuvwlHhYEBtp0-f9740c.png 1340w`,
          },
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = h(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: l, setLocale: f } = O(),
            m = S(),
            {
              style: h,
              className: _,
              layoutId: y,
              variant: b,
              YF3KZhs7x: x,
              F_CSN01FX: T,
              UCDbjiNYK: k,
              MhlZROnC2: A,
              CphaCzuak: j,
              uzYIOQFMN: N,
              ...P
            } = q(e),
            {
              baseVariant: F,
              classNames: G,
              clearLoadingGesture: Y,
              gestureHandlers: X,
              gestureVariant: Z,
              isLoading: ee,
              setGestureState: te,
              setVariant: ne,
              variants: Q,
            } = g({
              cycleOrder: z,
              defaultVariant: `hnYxKWUZ8`,
              enabledGestures: R,
              ref: a,
              variant: b,
              variantClassNames: V,
            }),
            $ = J(e, Q),
            re = v(B, M, I);
          return c(p, {
            id: y ?? s,
            children: c(K, {
              animate: Q,
              initial: !1,
              children: c(W, {
                value: H,
                children: c(D, {
                  href: j,
                  motionChild: !0,
                  nodeId: `hnYxKWUZ8`,
                  openInNewTab: !1,
                  scopeId: `LULlC_Twp`,
                  children: u(d.a, {
                    ...P,
                    ...X,
                    className: `${v(re, `framer-1o33153`, _, G)} framer-1kv0r44`,
                    "data-border": !0,
                    "data-framer-name": `Desktop`,
                    layoutDependency: $,
                    layoutId: `hnYxKWUZ8`,
                    ref: a,
                    style: {
                      "--border-bottom-width": (N?.borderBottomWidth ?? N?.borderWidth) + `px`,
                      "--border-color": N?.borderColor,
                      "--border-left-width": (N?.borderLeftWidth ?? N?.borderWidth) + `px`,
                      "--border-right-width": (N?.borderRightWidth ?? N?.borderWidth) + `px`,
                      "--border-style": N?.borderStyle,
                      "--border-top-width": (N?.borderTopWidth ?? N?.borderWidth) + `px`,
                      ...h,
                    },
                    ...L(
                      {
                        "hnYxKWUZ8-hover": { "data-framer-name": void 0 },
                        B5eOgs6_u: { "data-framer-name": `Phone` },
                      },
                      F,
                      Z
                    ),
                    children: [
                      c(d.div, {
                        className: `framer-9bmr7w`,
                        "data-framer-name": `Image Wrapper`,
                        layoutDependency: $,
                        layoutId: `XNvQDj9b1`,
                        style: {
                          borderBottomLeftRadius: 12,
                          borderBottomRightRadius: 12,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        },
                        children: c(w, {
                          as: `figcaption`,
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2012,
                            intrinsicWidth: 1340,
                            loading: E(
                              (m?.y || 0) + 12 + (((m?.height || 424) - 36 - 356) / 2 + 0 + 0) + 0
                            ),
                            pixelHeight: 2012,
                            pixelWidth: 1340,
                            sizes: `calc(${m?.width || `100vw`} - 24px)`,
                            ...U(x),
                          },
                          className: `framer-uf0a8e`,
                          layoutDependency: $,
                          layoutId: `TnNCT7okw`,
                          style: {
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 12,
                            scale: 1,
                          },
                          variants: { "hnYxKWUZ8-hover": { scale: 1.1 } },
                          ...L(
                            {
                              B5eOgs6_u: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 2012,
                                  intrinsicWidth: 1340,
                                  loading: E(
                                    (m?.y || 0) +
                                      8 +
                                      (((m?.height || 416) - 24 - 360) / 2 + 0 + 0) +
                                      0
                                  ),
                                  pixelHeight: 2012,
                                  pixelWidth: 1340,
                                  sizes: `calc(${m?.width || `100vw`} - 16px)`,
                                  ...U(x),
                                },
                              },
                            },
                            F,
                            Z
                          ),
                        }),
                      }),
                      u(d.div, {
                        className: `framer-1c54smh`,
                        "data-framer-name": ` Text Wrapper`,
                        layoutDependency: $,
                        layoutId: `HKBYabUAN`,
                        children: [
                          u(d.div, {
                            className: `framer-3e7ehh`,
                            "data-framer-name": `Category & Date`,
                            layoutDependency: $,
                            layoutId: `VWTxjmYf_`,
                            children: [
                              c(C, {
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
                                    children: `Growth strategy`,
                                  }),
                                }),
                                className: `framer-qh9hg5`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `roJFxbPpq`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: T,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              c(d.div, {
                                className: `framer-198tdir`,
                                "data-framer-name": `Dot`,
                                layoutDependency: $,
                                layoutId: `lMzw6EQQK`,
                                style: {
                                  backgroundColor: `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                  borderBottomLeftRadius: 3,
                                  borderBottomRightRadius: 3,
                                  borderTopLeftRadius: 3,
                                  borderTopRightRadius: 3,
                                },
                              }),
                              c(C, {
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
                                    children: `24 May, 2025`,
                                  }),
                                }),
                                className: `framer-gdrf1v`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `SAPR5LVfC`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: k,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          c(C, {
                            __fromCanvasComponent: !0,
                            children: c(r, {
                              children: c(d.h5, {
                                className: `framer-styles-preset-s5101p`,
                                "data-styles-preset": `jXwTlEdH0`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                },
                                children: `The hidden cost of tool sprawl in growing companies`,
                              }),
                            }),
                            className: `framer-1kno3b7`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `Z8QUs9LBo`,
                            style: {
                              "--extracted-1lwpl3i": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: A,
                            variants: {
                              "hnYxKWUZ8-hover": {
                                "--extracted-1lwpl3i": `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                              },
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...L(
                              {
                                "hnYxKWUZ8-hover": {
                                  children: c(r, {
                                    children: c(d.h5, {
                                      className: `framer-styles-preset-s5101p`,
                                      "data-styles-preset": `jXwTlEdH0`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))`,
                                      },
                                      children: `The hidden cost of tool sprawl in growing companies`,
                                    }),
                                  }),
                                },
                              },
                              F,
                              Z
                            ),
                          }),
                        ],
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
          `.framer-QUxp8.framer-1kv0r44, .framer-QUxp8 .framer-1kv0r44 { display: block; }`,
          `.framer-QUxp8.framer-1o33153 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px 12px 24px 12px; position: relative; text-decoration: none; width: 426px; }`,
          `.framer-QUxp8 .framer-9bmr7w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 272px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QUxp8 .framer-uf0a8e { flex: none; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QUxp8 .framer-1c54smh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-QUxp8 .framer-3e7ehh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-QUxp8 .framer-qh9hg5, .framer-QUxp8 .framer-gdrf1v { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-QUxp8 .framer-198tdir { flex: none; height: 5px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-QUxp8 .framer-1kno3b7 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 360px; position: relative; width: 100%; }`,
          `.framer-QUxp8.framer-v-1r4zv8z.framer-1o33153 { cursor: unset; padding: 8px 8px 16px 8px; }`,
          `.framer-QUxp8.framer-v-1r4zv8z .framer-1c54smh { padding: 0px 0px 4px 0px; }`,
          ...A,
          ...P,
          `.framer-QUxp8[data-border="true"]::after, .framer-QUxp8 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-QUxp8`
      )),
      (X = Y),
      (Y.displayName = `Blog Card`),
      (Y.defaultProps = { height: 424, width: 426 }),
      b(Y, {
        variant: {
          options: [`hnYxKWUZ8`, `B5eOgs6_u`],
          optionTitles: [`Desktop`, `Phone`],
          title: `Variant`,
          type: T.Enum,
        },
        YF3KZhs7x: {
          __defaultAssetReference: `data:framer/asset-reference,HiQJBtBimlldYiYuvwlHhYEBtp0.png?originalFilename=Frame+2147207505.png&width=1340&height=2012`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,HiQJBtBimlldYiYuvwlHhYEBtp0.png?originalFilename=Frame+2147207505.png&width=1340&height=2012`,
          },
          title: `Image`,
          type: T.ResponsiveImage,
        },
        F_CSN01FX: {
          defaultValue: `Growth strategy`,
          displayTextArea: !1,
          title: `Category`,
          type: T.String,
        },
        onF_CSN01FXChange: { changes: `F_CSN01FX`, type: T.ChangeHandler },
        UCDbjiNYK: {
          defaultValue: `24 May, 2025`,
          displayTextArea: !1,
          title: `Date`,
          type: T.String,
        },
        onUCDbjiNYKChange: { changes: `UCDbjiNYK`, type: T.ChangeHandler },
        MhlZROnC2: {
          defaultValue: `The hidden cost of tool sprawl in growing companies`,
          displayTextArea: !1,
          title: `Title`,
          type: T.String,
        },
        onMhlZROnC2Change: { changes: `MhlZROnC2`, type: T.ChangeHandler },
        CphaCzuak: { title: `Link`, type: T.Link },
        uzYIOQFMN: {
          defaultValue: {
            borderColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) /* {"name":"Straight Line - 01"} */`,
            borderStyle: `solid`,
            borderWidth: 1,
          },
          title: `Border`,
          type: T.Border,
        },
      }),
      y(
        Y,
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
          ..._(j),
          ..._(F),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Z as n, X as t };
//# sourceMappingURL=LULlC_Twp.tHxtAzPG.mjs.map
