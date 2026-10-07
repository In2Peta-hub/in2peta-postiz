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
  Et as ee,
  G as te,
  K as g,
  L as _,
  N as v,
  P as y,
  Q as b,
  dt as ne,
  i as re,
  j as ie,
  k as x,
  m as S,
  o as C,
  q as w,
  yt as ae,
  z as T,
} from "./framer.CFqKih1k.mjs";
import { d as E, f as D, l as oe, u as O } from "./shared-lib.P4JA4aUc.mjs";
import { i as k, n as A, r as j, t as se } from "./bz7TF8GsX.CGXVUdvb.mjs";
import { n as M, t as N } from "./v0GEiJsID.DbeCo17q.mjs";
import { i as P, n as F, r as I, t as ce } from "./SUQaOk4ze.9vdOYSbE.mjs";
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
  le = e(() => {
    (l(),
      b(),
      m(),
      i(),
      k(),
      P(),
      D(),
      N(),
      (R = te(M)),
      (z = [`EZFih9TUC`, `n_fDYj8rN`, `BSU7Ul1B0`, `XscEAnag1`]),
      (B = `framer-vvXE3`),
      (V = {
        BSU7Ul1B0: `framer-v-1ijho8z`,
        EZFih9TUC: `framer-v-150w9fz`,
        n_fDYj8rN: `framer-v-1qbp0oy`,
        XscEAnag1: `framer-v-1q716da`,
      }),
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
      (G = {
        "Desktop Line": `BSU7Ul1B0`,
        "Tablet/Phone Line ": `XscEAnag1`,
        "Tablet/Phone": `n_fDYj8rN`,
        Desktop: `EZFih9TUC`,
      }),
      (K = d.create(r)),
      (q = ({
        designation: e,
        height: t,
        id: n,
        image: r,
        link: i,
        logo: a,
        personName: o,
        primaryMetric: s,
        primaryMetricLabel: c,
        secondaryMetric: l,
        secondaryMetricLabel: u,
        tertiaryMetric: d,
        tertiaryMetricLabel: f,
        title: p,
        width: m,
        ...h
      }) => ({
        ...h,
        ejkuTQZJ2: c ?? h.ejkuTQZJ2 ?? `Increase in email conversions`,
        Gc6K9ijL5: f ?? h.Gc6K9ijL5 ?? `Higher average order value`,
        Lf2ujR06w: e ?? h.Lf2ujR06w ?? `Head of Growth`,
        LIRay8WjM: i ?? h.LIRay8WjM,
        lYIt5qBHK: a ??
          h.lYIt5qBHK ?? {
            alt: ``,
            pixelHeight: 192,
            pixelWidth: 244,
            src: `https://framerusercontent.com/images/SuVDwSWTh273GYAUhzA08I4Kk0.png?width=244&height=192`,
          },
        n1xESMCkf: u ?? h.n1xESMCkf ?? `Faster campaign deployment`,
        Nrp2RXM7D: d ?? h.Nrp2RXM7D ?? `28%`,
        Oj6gfy_A8: o ?? h.Oj6gfy_A8 ?? `Sarah Mitchell`,
        qHOUbwt7s:
          p ??
          h.qHOUbwt7s ??
          `How Nexora reduced tool costs by 42% and increased sales velocity by 35%`,
        SQhdwfCb_: l ?? h.SQhdwfCb_ ?? `3x`,
        Tz9gl3bfB: r ??
          h.Tz9gl3bfB ?? {
            alt: `A group of diverse male colleagues laughing and talking during a coffee break outdoors.`,
            pixelHeight: 2500,
            pixelWidth: 3962,
            src: `https://framerusercontent.com/images/tzIlU8IRt4ZCcSOf6DtZY3Fjz0.png?width=3962&height=2500`,
            srcSet: `https://framerusercontent.com/images/tzIlU8IRt4ZCcSOf6DtZY3Fjz0.png?scale-down-to=512&width=3962&height=2500 512w,https://framerusercontent.com/images/tzIlU8IRt4ZCcSOf6DtZY3Fjz0.png?scale-down-to=1024&width=3962&height=2500 1024w,https://framerusercontent.com/images/tzIlU8IRt4ZCcSOf6DtZY3Fjz0.png?scale-down-to=2048&width=3962&height=2500 2048w,https://framerusercontent.com/images/tzIlU8IRt4ZCcSOf6DtZY3Fjz0.png?width=3962&height=2500 3962w`,
          },
        Ua4UVWr3_: s ?? h.Ua4UVWr3_ ?? `42%`,
        variant: G[h.variant] ?? h.variant ?? `EZFih9TUC`,
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = h(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: l, setLocale: f } = ae(),
            m = ne(),
            {
              style: h,
              className: te,
              layoutId: g,
              variant: v,
              Tz9gl3bfB: y,
              qHOUbwt7s: b,
              Oj6gfy_A8: C,
              Lf2ujR06w: T,
              lYIt5qBHK: E,
              Ua4UVWr3_: D,
              ejkuTQZJ2: O,
              SQhdwfCb_: k,
              n1xESMCkf: A,
              Nrp2RXM7D: j,
              Gc6K9ijL5: N,
              LIRay8WjM: P,
              ...F
            } = q(e),
            {
              baseVariant: I,
              classNames: R,
              clearLoadingGesture: G,
              gestureHandlers: Y,
              gestureVariant: X,
              isLoading: le,
              setGestureState: ue,
              setVariant: de,
              variants: Z,
            } = ee({
              cycleOrder: z,
              defaultVariant: `EZFih9TUC`,
              ref: a,
              variant: v,
              variantClassNames: V,
            }),
            Q = J(e, Z),
            fe = _(B, se, ce, oe),
            $ = () => !![`BSU7Ul1B0`, `XscEAnag1`].includes(I);
          return c(p, {
            id: g ?? s,
            children: c(K, {
              animate: Z,
              initial: !1,
              children: c(W, {
                value: H,
                children: u(d.div, {
                  ...F,
                  ...Y,
                  className: _(fe, `framer-150w9fz`, te, R),
                  "data-framer-name": `Desktop`,
                  layoutDependency: Q,
                  layoutId: `EZFih9TUC`,
                  ref: a,
                  style: { ...h },
                  ...L(
                    {
                      BSU7Ul1B0: { "data-framer-name": `Desktop Line` },
                      n_fDYj8rN: { "data-framer-name": `Tablet/Phone` },
                      XscEAnag1: { "data-framer-name": `Tablet/Phone Line ` },
                    },
                    I,
                    X
                  ),
                  children: [
                    u(d.div, {
                      className: `framer-1883q9r`,
                      "data-border": !0,
                      "data-framer-name": `Top Content`,
                      layoutDependency: Q,
                      layoutId: `EsVH0UNOI`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      children: [
                        c(d.div, {
                          className: `framer-gyhqvz`,
                          "data-framer-name": `Left Content`,
                          layoutDependency: Q,
                          layoutId: `D7BVHn8cs`,
                          children: c(d.div, {
                            className: `framer-1qnhmny`,
                            "data-framer-name": `Image Wrapper`,
                            layoutDependency: Q,
                            layoutId: `DnBlQp9UV`,
                            style: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                            children: c(S, {
                              as: `figcaption`,
                              background: {
                                alt: `A group of diverse male colleagues laughing and talking during a coffee break outdoors.`,
                                fit: `fill`,
                                loading: w(
                                  (m?.y || 0) +
                                    0 +
                                    (((m?.height || 624) - 0 - 728) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    8 +
                                    0
                                ),
                                pixelHeight: 2500,
                                pixelWidth: 3962,
                                sizes: `max(max(${m?.width || `100vw`} / 2, 1px) - 16px, 1px)`,
                                ...U(y),
                              },
                              className: `framer-8cmt5v`,
                              "data-framer-name": `Placeholder Image`,
                              layoutDependency: Q,
                              layoutId: `jFXvDIIOq`,
                              style: {
                                borderBottomLeftRadius: 12,
                                borderBottomRightRadius: 12,
                                borderTopLeftRadius: 12,
                                borderTopRightRadius: 12,
                              },
                              ...L(
                                {
                                  n_fDYj8rN: {
                                    background: {
                                      alt: `A group of diverse male colleagues laughing and talking during a coffee break outdoors.`,
                                      fit: `fill`,
                                      loading: w((m?.y || 0) + 0 + 0 + 0 + 0 + 8 + 0),
                                      pixelHeight: 2500,
                                      pixelWidth: 3962,
                                      sizes: `max(${m?.width || `100vw`} - 16px, 1px)`,
                                      ...U(y),
                                    },
                                  },
                                  XscEAnag1: {
                                    background: {
                                      alt: `A group of diverse male colleagues laughing and talking during a coffee break outdoors.`,
                                      fit: `fill`,
                                      loading: w(
                                        (m?.y || 0) +
                                          0 +
                                          (((m?.height || 1088) - 0 - 1384) / 2 + 0 + 0) +
                                          0 +
                                          0 +
                                          8 +
                                          0
                                      ),
                                      pixelHeight: 2500,
                                      pixelWidth: 3962,
                                      sizes: `max(${m?.width || `100vw`} - 16px, 1px)`,
                                      ...U(y),
                                    },
                                  },
                                },
                                I,
                                X
                              ),
                            }),
                          }),
                        }),
                        u(d.div, {
                          className: `framer-8cfpxv`,
                          "data-border": !0,
                          "data-framer-name": `Right Content`,
                          layoutDependency: Q,
                          layoutId: `MTAJqy9zC`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          variants: {
                            n_fDYj8rN: { "--border-left-width": `0px` },
                            XscEAnag1: { "--border-left-width": `0px` },
                          },
                          children: [
                            u(d.div, {
                              className: `framer-18l68p8`,
                              "data-framer-name": `Title`,
                              layoutDependency: Q,
                              layoutId: `UxtCoTXTV`,
                              children: [
                                c(x, {
                                  __fromCanvasComponent: !0,
                                  children: c(r, {
                                    children: c(d.h4, {
                                      className: `framer-styles-preset-1qcdpqr`,
                                      "data-styles-preset": `bz7TF8GsX`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `left`,
                                        "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                      },
                                      children: `How Nexora reduced tool costs by 42% and increased sales velocity by 35%`,
                                    }),
                                  }),
                                  className: `framer-wba4vt`,
                                  "data-framer-name": `How Nexora reduced tool costs by 42% and increased sales velocity by 35%`,
                                  fonts: [`Inter`],
                                  layoutDependency: Q,
                                  layoutId: `DOpxMGmFf`,
                                  style: {
                                    "--extracted-1eung3n": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: b,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(re, {
                                  height: 44,
                                  y:
                                    (m?.y || 0) +
                                    0 +
                                    (((m?.height || 624) - 0 - 728) / 2 + 0 + 0) +
                                    0 +
                                    0 +
                                    40 +
                                    0 +
                                    0 +
                                    64,
                                  ...L(
                                    {
                                      n_fDYj8rN: {
                                        y: (m?.y || 0) + 0 + 0 + 0 + 346 + 24 + 0 + 0 + 64,
                                      },
                                      XscEAnag1: {
                                        y:
                                          (m?.y || 0) +
                                          0 +
                                          (((m?.height || 1088) - 0 - 1384) / 2 + 0 + 0) +
                                          0 +
                                          346 +
                                          24 +
                                          0 +
                                          0 +
                                          64,
                                      },
                                    },
                                    I,
                                    X
                                  ),
                                  children: c(ie, {
                                    className: `framer-1stwaj8-container`,
                                    layoutDependency: Q,
                                    layoutId: `iuKDdEt7T-container`,
                                    nodeId: `iuKDdEt7T`,
                                    rendersWithMotion: !0,
                                    scopeId: `oW17fL7y4`,
                                    children: c(M, {
                                      height: `100%`,
                                      id: `iuKDdEt7T`,
                                      kDj5Ixhw1: P,
                                      kJdISHL06: `View Case Study`,
                                      layoutId: `iuKDdEt7T`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            u(d.div, {
                              className: `framer-10r28t3`,
                              "data-framer-name": `Profile Information`,
                              layoutDependency: Q,
                              layoutId: `JpZVJrmj8`,
                              children: [
                                u(d.div, {
                                  className: `framer-5d6u89`,
                                  "data-framer-name": `Person-info`,
                                  layoutDependency: Q,
                                  layoutId: `SZSU406QW`,
                                  children: [
                                    c(x, {
                                      __fromCanvasComponent: !0,
                                      children: c(r, {
                                        children: c(d.h6, {
                                          className: `framer-styles-preset-11qazq0`,
                                          "data-styles-preset": `SUQaOk4ze`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                          },
                                          children: `Sarah Mitchell`,
                                        }),
                                      }),
                                      className: `framer-1wgu27f`,
                                      "data-framer-name": `Sarah Mitchell`,
                                      fonts: [`Inter`],
                                      layoutDependency: Q,
                                      layoutId: `X9NfZ9vzg`,
                                      style: {
                                        "--extracted-1w1cjl5": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      text: C,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    c(x, {
                                      __fromCanvasComponent: !0,
                                      children: c(r, {
                                        children: c(d.p, {
                                          className: `framer-styles-preset-13ryzp6`,
                                          "data-styles-preset": `Yw0GmpI8u`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                          },
                                          children: `Head of Growth`,
                                        }),
                                      }),
                                      className: `framer-145aclx`,
                                      "data-framer-name": `Head of Growth`,
                                      fonts: [`Inter`],
                                      layoutDependency: Q,
                                      layoutId: `OnkJRlB4U`,
                                      style: {
                                        "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      text: T,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(S, {
                                  as: `figcaption`,
                                  background: {
                                    alt: ``,
                                    fit: `fit`,
                                    loading: w(
                                      (m?.y || 0) +
                                        0 +
                                        (((m?.height || 624) - 0 - 728) / 2 + 0 + 0) +
                                        0 +
                                        0 +
                                        40 +
                                        226 +
                                        56
                                    ),
                                    pixelHeight: 192,
                                    pixelWidth: 244,
                                    sizes: `60.6316px`,
                                    ...U(E),
                                    positionX: `center`,
                                    positionY: `center`,
                                  },
                                  className: `framer-1vpw3f5`,
                                  "data-framer-name": `Logo`,
                                  layoutDependency: Q,
                                  layoutId: `xAXPdv3FB`,
                                  ...L(
                                    {
                                      n_fDYj8rN: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: w((m?.y || 0) + 0 + 0 + 0 + 346 + 24 + 140 + 56),
                                          pixelHeight: 192,
                                          pixelWidth: 244,
                                          sizes: `51px`,
                                          ...U(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                      XscEAnag1: {
                                        background: {
                                          alt: ``,
                                          fit: `fit`,
                                          loading: w(
                                            (m?.y || 0) +
                                              0 +
                                              (((m?.height || 1088) - 0 - 1384) / 2 + 0 + 0) +
                                              0 +
                                              346 +
                                              24 +
                                              140 +
                                              56
                                          ),
                                          pixelHeight: 192,
                                          pixelWidth: 244,
                                          sizes: `51px`,
                                          ...U(E),
                                          positionX: `center`,
                                          positionY: `center`,
                                        },
                                      },
                                    },
                                    I,
                                    X
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u(d.div, {
                      className: `framer-1f73lzo`,
                      "data-framer-name": `Growth Information`,
                      layoutDependency: Q,
                      layoutId: `E7SsfhuDf`,
                      children: [
                        u(d.div, {
                          className: `framer-f6bljr`,
                          "data-border": !0,
                          "data-framer-name": `01`,
                          layoutDependency: Q,
                          layoutId: `W_3ESnNhZ`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          variants: {
                            n_fDYj8rN: {
                              "--border-bottom-width": `1px`,
                              "--border-right-width": `0px`,
                            },
                            XscEAnag1: {
                              "--border-bottom-width": `1px`,
                              "--border-right-width": `0px`,
                            },
                          },
                          children: [
                            c(x, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.h4, {
                                  className: `framer-styles-preset-1qcdpqr`,
                                  "data-styles-preset": `bz7TF8GsX`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                  },
                                  children: `42%`,
                                }),
                              }),
                              className: `framer-78bcvg`,
                              "data-framer-name": `42%`,
                              fonts: [`Inter`],
                              layoutDependency: Q,
                              layoutId: `CnqoTRNUn`,
                              style: {
                                "--extracted-1eung3n": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: D,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            c(x, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-13ryzp6`,
                                  "data-styles-preset": `Yw0GmpI8u`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                  },
                                  children: `Increase in email conversions`,
                                }),
                              }),
                              className: `framer-16na7ul`,
                              "data-framer-name": `Increase in email conversions`,
                              fonts: [`Inter`],
                              layoutDependency: Q,
                              layoutId: `h5ohdPUcl`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: O,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        u(d.div, {
                          className: `framer-1wh0liq`,
                          "data-border": !0,
                          "data-framer-name": `02`,
                          layoutDependency: Q,
                          layoutId: `JBpGy5Mmz`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          variants: {
                            n_fDYj8rN: {
                              "--border-bottom-width": `1px`,
                              "--border-right-width": `0px`,
                            },
                            XscEAnag1: {
                              "--border-bottom-width": `1px`,
                              "--border-right-width": `0px`,
                            },
                          },
                          children: [
                            c(x, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.h4, {
                                  className: `framer-styles-preset-1qcdpqr`,
                                  "data-styles-preset": `bz7TF8GsX`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                  },
                                  children: `3x`,
                                }),
                              }),
                              className: `framer-1bvwdtp`,
                              "data-framer-name": `3x`,
                              fonts: [`Inter`],
                              layoutDependency: Q,
                              layoutId: `t7JQr6tci`,
                              style: {
                                "--extracted-1eung3n": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: k,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            c(x, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-13ryzp6`,
                                  "data-styles-preset": `Yw0GmpI8u`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                  },
                                  children: `Faster campaign deployment`,
                                }),
                              }),
                              className: `framer-1wsjuc`,
                              "data-framer-name": `Faster campaign deployment`,
                              fonts: [`Inter`],
                              layoutDependency: Q,
                              layoutId: `f0jZV3E4K`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: A,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        u(d.div, {
                          className: `framer-103k3ld`,
                          "data-border": !0,
                          "data-framer-name": `03`,
                          layoutDependency: Q,
                          layoutId: `PsfLunxfF`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          children: [
                            c(x, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.h4, {
                                  className: `framer-styles-preset-1qcdpqr`,
                                  "data-styles-preset": `bz7TF8GsX`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                  },
                                  children: `28%`,
                                }),
                              }),
                              className: `framer-ud2rwm`,
                              "data-framer-name": `28%`,
                              fonts: [`Inter`],
                              layoutDependency: Q,
                              layoutId: `YqkUdvx3K`,
                              style: {
                                "--extracted-1eung3n": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: j,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            c(x, {
                              __fromCanvasComponent: !0,
                              children: c(r, {
                                children: c(d.p, {
                                  className: `framer-styles-preset-13ryzp6`,
                                  "data-styles-preset": `Yw0GmpI8u`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                  },
                                  children: `Higher average order value`,
                                }),
                              }),
                              className: `framer-1q01d10`,
                              "data-framer-name": `Higher average order value`,
                              fonts: [`Inter`],
                              layoutDependency: Q,
                              layoutId: `CTWVlFyPB`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: N,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    $() &&
                      c(d.div, {
                        className: `framer-1fttb8z`,
                        "data-framer-name": `Top Line`,
                        layoutDependency: Q,
                        layoutId: `eheGKSAhp`,
                        style: {
                          background: `linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 3%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                        },
                      }),
                    $() &&
                      c(d.div, {
                        className: `framer-7jscg0`,
                        "data-framer-name": `Bottom line`,
                        layoutDependency: Q,
                        layoutId: `JpxPCV0WZ`,
                        style: {
                          background: `linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                        },
                      }),
                    $() &&
                      c(d.div, {
                        className: `framer-1utar9h`,
                        "data-framer-name": `Left Line`,
                        layoutDependency: Q,
                        layoutId: `gmh1naX0w`,
                        style: {
                          background: `linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 5%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                        },
                        variants: {
                          BSU7Ul1B0: {
                            background: `linear-gradient(180deg, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 3%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 95%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                          },
                          XscEAnag1: {
                            background: `linear-gradient(180deg, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 5%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 100%)`,
                          },
                        },
                      }),
                    $() &&
                      c(d.div, {
                        className: `framer-15gqbxt`,
                        "data-framer-name": `Right Line`,
                        layoutDependency: Q,
                        layoutId: `i7dpQMsHG`,
                        style: {
                          background: `linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 94%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                        },
                        variants: {
                          BSU7Ul1B0: {
                            background: `linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 3%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 98%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 100%)`,
                          },
                          XscEAnag1: {
                            background: `linear-gradient(180deg, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 94%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 100%)`,
                          },
                        },
                      }),
                    $() &&
                      c(d.div, {
                        className: `framer-rcn75j`,
                        "data-framer-name": `Box 1`,
                        layoutDependency: Q,
                        layoutId: `Ix2oZOMRU`,
                        style: {
                          backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                          borderBottomLeftRadius: 2,
                          borderBottomRightRadius: 2,
                          borderTopLeftRadius: 2,
                          borderTopRightRadius: 2,
                        },
                        variants: {
                          XscEAnag1: {
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
                        },
                      }),
                    $() &&
                      c(d.div, {
                        className: `framer-1j09vpd`,
                        "data-framer-name": `Box 2`,
                        layoutDependency: Q,
                        layoutId: `Jfflnpxv0`,
                        style: {
                          backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                          borderBottomLeftRadius: 2,
                          borderBottomRightRadius: 2,
                          borderTopLeftRadius: 2,
                          borderTopRightRadius: 2,
                        },
                        variants: {
                          XscEAnag1: {
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
                        },
                      }),
                    $() &&
                      c(d.div, {
                        className: `framer-54qkxc`,
                        "data-framer-name": `Box 4`,
                        layoutDependency: Q,
                        layoutId: `hCIbSBimi`,
                        style: {
                          backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                          borderBottomLeftRadius: 2,
                          borderBottomRightRadius: 2,
                          borderTopLeftRadius: 2,
                          borderTopRightRadius: 2,
                        },
                        variants: {
                          XscEAnag1: {
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
                        },
                      }),
                    $() &&
                      c(d.div, {
                        className: `framer-okenss`,
                        "data-framer-name": `Box 3`,
                        layoutDependency: Q,
                        layoutId: `YGFVqWNVV`,
                        style: {
                          backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                          borderBottomLeftRadius: 2,
                          borderBottomRightRadius: 2,
                          borderTopLeftRadius: 2,
                          borderTopRightRadius: 2,
                        },
                        variants: {
                          XscEAnag1: {
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
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
          `.framer-vvXE3.framer-6uq149, .framer-vvXE3 .framer-6uq149 { display: block; }`,
          `.framer-vvXE3.framer-150w9fz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
          `.framer-vvXE3 .framer-1883q9r { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-vvXE3 .framer-gyhqvz { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 466px; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1px; }`,
          `.framer-vvXE3 .framer-1qnhmny { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-vvXE3 .framer-8cmt5v { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-vvXE3 .framer-8cfpxv { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 40px; position: relative; width: 1px; }`,
          `.framer-vvXE3 .framer-18l68p8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-vvXE3 .framer-wba4vt, .framer-vvXE3 .framer-16na7ul, .framer-vvXE3 .framer-1wsjuc, .framer-vvXE3 .framer-1q01d10 { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-vvXE3 .framer-1stwaj8-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-vvXE3 .framer-10r28t3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-vvXE3 .framer-5d6u89 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-vvXE3 .framer-1wgu27f, .framer-vvXE3 .framer-145aclx, .framer-vvXE3 .framer-78bcvg, .framer-vvXE3 .framer-1bvwdtp, .framer-vvXE3 .framer-ud2rwm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-vvXE3 .framer-1vpw3f5 { aspect-ratio: 1.2631579240163167 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); position: relative; width: 61px; }`,
          `.framer-vvXE3 .framer-1f73lzo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-vvXE3 .framer-f6bljr, .framer-vvXE3 .framer-1wh0liq, .framer-vvXE3 .framer-103k3ld { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px; position: relative; width: 1px; }`,
          `.framer-vvXE3 .framer-1fttb8z { flex: none; height: 1px; left: calc(50.00000000000002% - 108% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 108%; z-index: 1; }`,
          `.framer-vvXE3 .framer-7jscg0 { bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 108% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 108%; z-index: 1; }`,
          `.framer-vvXE3 .framer-1utar9h { flex: none; height: 112%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.89561586638833% - 112.00000000000001% / 2); width: 1px; z-index: 1; }`,
          `.framer-vvXE3 .framer-15gqbxt { flex: none; height: 112%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 112.00000000000001% / 2); width: 1px; z-index: 1; }`,
          `.framer-vvXE3 .framer-rcn75j { flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-vvXE3 .framer-1j09vpd { flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-vvXE3 .framer-54qkxc { bottom: -5px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-vvXE3 .framer-okenss { bottom: -5px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-vvXE3.framer-v-1qbp0oy.framer-150w9fz { justify-content: flex-start; padding: 0px 0px 16px 0px; width: 375px; }`,
          `.framer-vvXE3.framer-v-1qbp0oy .framer-1883q9r, .framer-vvXE3.framer-v-1qbp0oy .framer-1f73lzo, .framer-vvXE3.framer-v-1q716da .framer-1883q9r, .framer-vvXE3.framer-v-1q716da .framer-1f73lzo { flex-direction: column; }`,
          `.framer-vvXE3.framer-v-1qbp0oy .framer-gyhqvz, .framer-vvXE3.framer-v-1q716da .framer-gyhqvz { flex: none; height: 346px; width: 100%; }`,
          `.framer-vvXE3.framer-v-1qbp0oy .framer-8cfpxv, .framer-vvXE3.framer-v-1q716da .framer-8cfpxv { align-self: unset; flex: none; gap: 32px; height: min-content; justify-content: center; padding: 24px; width: 100%; }`,
          `.framer-vvXE3.framer-v-1qbp0oy .framer-1vpw3f5, .framer-vvXE3.framer-v-1q716da .framer-1vpw3f5 { height: var(--framer-aspect-ratio-supported, 40px); width: 51px; }`,
          `.framer-vvXE3.framer-v-1qbp0oy .framer-f6bljr, .framer-vvXE3.framer-v-1qbp0oy .framer-1wh0liq, .framer-vvXE3.framer-v-1qbp0oy .framer-103k3ld, .framer-vvXE3.framer-v-1q716da .framer-f6bljr, .framer-vvXE3.framer-v-1q716da .framer-1wh0liq, .framer-vvXE3.framer-v-1q716da .framer-103k3ld { flex: none; padding: 24px; width: 100%; }`,
          `.framer-vvXE3.framer-v-1qbp0oy .framer-16na7ul, .framer-vvXE3.framer-v-1qbp0oy .framer-1wsjuc, .framer-vvXE3.framer-v-1qbp0oy .framer-1q01d10, .framer-vvXE3.framer-v-1q716da .framer-16na7ul, .framer-vvXE3.framer-v-1q716da .framer-1wsjuc, .framer-vvXE3.framer-v-1q716da .framer-1q01d10 { max-width: 340px; }`,
          `.framer-vvXE3.framer-v-1ijho8z .framer-1utar9h { height: 125%; top: calc(49.89561586638833% - 125% / 2); }`,
          `.framer-vvXE3.framer-v-1ijho8z .framer-15gqbxt { height: 125%; top: calc(50.10438413361171% - 125% / 2); }`,
          `.framer-vvXE3.framer-v-1ijho8z .framer-rcn75j, .framer-vvXE3.framer-v-1ijho8z .framer-1j09vpd { top: -4px; }`,
          `.framer-vvXE3.framer-v-1ijho8z .framer-54qkxc, .framer-vvXE3.framer-v-1ijho8z .framer-okenss { bottom: -4px; }`,
          `.framer-vvXE3.framer-v-1q716da.framer-150w9fz { width: 375px; }`,
          `.framer-vvXE3.framer-v-1q716da .framer-1utar9h { height: 110%; top: calc(49.89561586638833% - 110.00000000000001% / 2); }`,
          `.framer-vvXE3.framer-v-1q716da .framer-15gqbxt { height: 110%; top: calc(50.047483380816736% - 110.00000000000001% / 2); }`,
          `.framer-vvXE3.framer-v-1q716da .framer-rcn75j { height: 7px; left: -3px; top: -3px; width: 7px; }`,
          `.framer-vvXE3.framer-v-1q716da .framer-1j09vpd { height: 7px; right: -3px; top: -3px; width: 7px; }`,
          `.framer-vvXE3.framer-v-1q716da .framer-54qkxc { bottom: -3px; height: 7px; right: -3px; width: 7px; }`,
          `.framer-vvXE3.framer-v-1q716da .framer-okenss { bottom: -3px; height: 7px; left: -3px; width: 7px; }`,
          ...A,
          ...F,
          ...O,
          `.framer-vvXE3[data-border="true"]::after, .framer-vvXE3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-vvXE3`
      )),
      (X = Y),
      (Y.displayName = `Case Study Card`),
      (Y.defaultProps = { height: 624, width: 1280 }),
      y(Y, {
        variant: {
          options: [`EZFih9TUC`, `n_fDYj8rN`, `BSU7Ul1B0`, `XscEAnag1`],
          optionTitles: [`Desktop`, `Tablet/Phone`, `Desktop Line`, `Tablet/Phone Line `],
          title: `Variant`,
          type: C.Enum,
        },
        Tz9gl3bfB: {
          __defaultAssetReference: `data:framer/asset-reference,tzIlU8IRt4ZCcSOf6DtZY3Fjz0.png?width=3962&height=2500`,
          __vekterDefault: {
            alt: `A group of diverse male colleagues laughing and talking during a coffee break outdoors.`,
            assetReference: `data:framer/asset-reference,tzIlU8IRt4ZCcSOf6DtZY3Fjz0.png?width=3962&height=2500`,
          },
          title: `Image`,
          type: C.ResponsiveImage,
        },
        qHOUbwt7s: {
          defaultValue: `How Nexora reduced tool costs by 42% and increased sales velocity by 35%`,
          displayTextArea: !1,
          title: `Title`,
          type: C.String,
        },
        onqHOUbwt7sChange: { changes: `qHOUbwt7s`, type: C.ChangeHandler },
        Oj6gfy_A8: {
          defaultValue: `Sarah Mitchell`,
          displayTextArea: !1,
          title: `Person Name`,
          type: C.String,
        },
        onOj6gfy_A8Change: { changes: `Oj6gfy_A8`, type: C.ChangeHandler },
        Lf2ujR06w: {
          defaultValue: `Head of Growth`,
          displayTextArea: !1,
          title: `Designation`,
          type: C.String,
        },
        onLf2ujR06wChange: { changes: `Lf2ujR06w`, type: C.ChangeHandler },
        lYIt5qBHK: {
          __defaultAssetReference: `data:framer/asset-reference,SuVDwSWTh273GYAUhzA08I4Kk0.png?width=244&height=192`,
          __vekterDefault: {
            alt: ``,
            assetReference: `data:framer/asset-reference,SuVDwSWTh273GYAUhzA08I4Kk0.png?width=244&height=192`,
          },
          title: `Logo`,
          type: C.ResponsiveImage,
        },
        Ua4UVWr3_: {
          defaultValue: `42%`,
          displayTextArea: !1,
          title: `Primary Metric`,
          type: C.String,
        },
        onUa4UVWr3_Change: { changes: `Ua4UVWr3_`, type: C.ChangeHandler },
        ejkuTQZJ2: {
          defaultValue: `Increase in email conversions`,
          displayTextArea: !1,
          title: `Primary Metric Label`,
          type: C.String,
        },
        onejkuTQZJ2Change: { changes: `ejkuTQZJ2`, type: C.ChangeHandler },
        SQhdwfCb_: {
          defaultValue: `3x`,
          displayTextArea: !1,
          title: `Secondary Metric`,
          type: C.String,
        },
        onSQhdwfCb_Change: { changes: `SQhdwfCb_`, type: C.ChangeHandler },
        n1xESMCkf: {
          defaultValue: `Faster campaign deployment`,
          displayTextArea: !1,
          title: `Secondary Metric Label`,
          type: C.String,
        },
        onn1xESMCkfChange: { changes: `n1xESMCkf`, type: C.ChangeHandler },
        Nrp2RXM7D: {
          defaultValue: `28%`,
          displayTextArea: !1,
          title: `Tertiary Metric`,
          type: C.String,
        },
        onNrp2RXM7DChange: { changes: `Nrp2RXM7D`, type: C.ChangeHandler },
        Gc6K9ijL5: {
          defaultValue: `Higher average order value`,
          displayTextArea: !1,
          title: `Tertiary Metric Label`,
          type: C.String,
        },
        onGc6K9ijL5Change: { changes: `Gc6K9ijL5`, type: C.ChangeHandler },
        LIRay8WjM: { title: `Link`, type: C.Link },
      }),
      v(
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
          ...R,
          ...g(j),
          ...g(I),
          ...g(E),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(M, {}, t)])) }));
  });
export { X as n, le as t };
//# sourceMappingURL=oW17fL7y4.H0ic1fOV.mjs.map
