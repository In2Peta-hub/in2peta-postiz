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
  m as x,
  o as S,
  q as C,
  yt as w,
} from "./framer.CFqKih1k.mjs";
import { d as T, f as E, l as re, u as D } from "./shared-lib.P4JA4aUc.mjs";
import { i as O, n as k, r as A, t as ie } from "./bz7TF8GsX.CGXVUdvb.mjs";
import { i as j, n as M, r as N, t as ae } from "./kumYuXBDg.BDiDl76I.mjs";
import { i as P, n as F, r as I, t as oe } from "./SUQaOk4ze.9vdOYSbE.mjs";
import { i as se, n as L, r as R, t as ce } from "./jXwTlEdH0.D4YWS_vr.mjs";
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
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
  Z,
  Q = e(() => {
    (l(),
      y(),
      p(),
      i(),
      O(),
      se(),
      j(),
      P(),
      E(),
      (B = [
        `ra6cRNcXv`,
        `kZ3XQqCvF`,
        `SyRKRfloD`,
        `UiFZL4kB0`,
        `kai7Cuvgi`,
        `GiDS5c_9T`,
        `DT0oeOjRz`,
        `zww_hjqbb`,
      ]),
      (V = `framer-Orgmc`),
      (H = {
        DT0oeOjRz: `framer-v-11u2odi`,
        GiDS5c_9T: `framer-v-nktllh`,
        kai7Cuvgi: `framer-v-a55fk`,
        kZ3XQqCvF: `framer-v-1lgulvt`,
        ra6cRNcXv: `framer-v-163n8b5`,
        SyRKRfloD: `framer-v-k8lmdv`,
        UiFZL4kB0: `framer-v-1nh1iqi`,
        zww_hjqbb: `framer-v-4z52v7`,
      }),
      (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (G = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: n });
      }),
      (K = {
        "Testimonial 2": `kZ3XQqCvF`,
        "Testimonial 3": `SyRKRfloD`,
        "Testimonial 4": `UiFZL4kB0`,
        "Testimonial For small Device ": `kai7Cuvgi`,
        "Testimonial For small Device 2": `GiDS5c_9T`,
        "Testimonial For small Device 3": `DT0oeOjRz`,
        "Testimonial For small Device 4": `zww_hjqbb`,
        Testimonial: `ra6cRNcXv`,
      }),
      (q = d.create(r)),
      (J = ({
        campainText: e,
        companyName: t,
        faster3X: n,
        height: r,
        id: i,
        incraseConversionsText: a,
        incraseGrowthNumber: o,
        logo: s,
        profileDesignation: c,
        profileImage: l,
        profileName: u,
        reviewText: d,
        title: f,
        width: ee,
        ...p
      }) => ({
        ...p,
        FJTqBi2KV: t ?? p.FJTqBi2KV ?? `Agencies`,
        G47lkWz6h: l ??
          p.G47lkWz6h ?? {
            alt: `Profile Image`,
            pixelHeight: 256,
            pixelWidth: 256,
            positionX: `48.8%`,
            positionY: `36.7%`,
            src: `../../assets/images/CmIL4pJLGIFluY1bSakFcnyY.png`,
          },
        iEDAZpSS3: f ?? p.iEDAZpSS3 ?? `AI Campaign Automation`,
        iwx62rpGT: c ?? p.iwx62rpGT ?? `Founder, BrightLayer Digital`,
        J5IwwRpSA:
          d ??
          p.J5IwwRpSA ??
          `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
        k3FDQtFQv: o ?? p.k3FDQtFQv ?? `52%`,
        nJPHXQfwW: a ?? p.nJPHXQfwW ?? `Increase in campaign conversions`,
        rsB2i43WZ: s ??
          p.rsB2i43WZ ?? {
            alt: `Company logo`,
            pixelHeight: 48,
            pixelWidth: 48,
            src: `../../assets/images/ZCm7LG3x1OMmGE5tKEYw631V4.svg`,
          },
        tXLgOvUs3: u ?? p.tXLgOvUs3 ?? `Daniel Reed`,
        U1WzZWWko: n ?? p.U1WzZWWko ?? `3.4X`,
        variant: K[p.variant] ?? p.variant ?? `ra6cRNcXv`,
        yV_HVFDbM: e ?? p.yV_HVFDbM ?? `Faster campaign deployment`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = m(
        a(function (e, t) {
          let i = n(null),
            a = t ?? i,
            s = o(),
            { activeLocale: l, setLocale: f } = w(),
            p = ne(),
            {
              style: m,
              className: h,
              layoutId: _,
              variant: v,
              rsB2i43WZ: y,
              FJTqBi2KV: S,
              iEDAZpSS3: T,
              G47lkWz6h: E,
              tXLgOvUs3: D,
              iwx62rpGT: O,
              J5IwwRpSA: k,
              k3FDQtFQv: A,
              nJPHXQfwW: j,
              U1WzZWWko: M,
              yV_HVFDbM: N,
              ...P
            } = J(e),
            {
              baseVariant: F,
              classNames: I,
              clearLoadingGesture: se,
              gestureHandlers: L,
              gestureVariant: R,
              isLoading: K,
              setGestureState: X,
              setVariant: Z,
              variants: Q,
            } = te({
              cycleOrder: B,
              defaultVariant: `ra6cRNcXv`,
              ref: a,
              variant: v,
              variantClassNames: H,
            }),
            $ = Y(e, Q),
            le = g(V, ae, ce, oe, ie, re);
          return c(ee, {
            id: _ ?? s,
            children: c(q, {
              animate: Q,
              initial: !1,
              children: c(G, {
                value: U,
                children: u(d.div, {
                  ...P,
                  ...L,
                  className: g(le, `framer-163n8b5`, h, I),
                  "data-framer-name": `Testimonial`,
                  layoutDependency: $,
                  layoutId: `ra6cRNcXv`,
                  ref: a,
                  style: { ...m },
                  ...z(
                    {
                      DT0oeOjRz: { "data-framer-name": `Testimonial For small Device 3` },
                      GiDS5c_9T: { "data-framer-name": `Testimonial For small Device 2` },
                      kai7Cuvgi: { "data-framer-name": `Testimonial For small Device ` },
                      kZ3XQqCvF: { "data-framer-name": `Testimonial 2` },
                      SyRKRfloD: { "data-framer-name": `Testimonial 3` },
                      UiFZL4kB0: { "data-framer-name": `Testimonial 4` },
                      zww_hjqbb: { "data-framer-name": `Testimonial For small Device 4` },
                    },
                    F,
                    R
                  ),
                  children: [
                    c(d.div, {
                      className: `framer-9qtsqq`,
                      "data-border": !0,
                      "data-framer-name": `Left Content`,
                      layoutDependency: $,
                      layoutId: `AhzQGX3IS`,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      children: u(d.div, {
                        className: `framer-pp5o56`,
                        "data-framer-name": `Container`,
                        layoutDependency: $,
                        layoutId: `szF3ZI_Q_`,
                        style: {
                          background: `linear-gradient(117deg, rgba(249, 145, 69, 0.17) 0%, rgba(147, 85, 41, 0) 100%)`,
                        },
                        children: [
                          u(d.div, {
                            className: `framer-16xug9x`,
                            "data-framer-name": `Title & Animated Layer`,
                            layoutDependency: $,
                            layoutId: `RWfW5tI7e`,
                            children: [
                              u(d.div, {
                                className: `framer-9qw95w`,
                                "data-framer-name": `Top Content`,
                                layoutDependency: $,
                                layoutId: `abyDFiWEr`,
                                children: [
                                  u(d.div, {
                                    className: `framer-1cbt81j`,
                                    "data-framer-name": `Company logo`,
                                    layoutDependency: $,
                                    layoutId: `N4IIGPBI2`,
                                    children: [
                                      c(x, {
                                        background: {
                                          alt: `Company logo`,
                                          fit: `fill`,
                                          intrinsicHeight: 96,
                                          intrinsicWidth: 344,
                                          loading: C(
                                            (p?.y || 0) + 0 + 4 + 40 + 0 + 0 + 0 + 0 + 0 + 3
                                          ),
                                          pixelHeight: 48,
                                          pixelWidth: 48,
                                          sizes: `18px`,
                                          ...W(y),
                                        },
                                        className: `framer-79cux2`,
                                        "data-framer-name": `logo`,
                                        layoutDependency: $,
                                        layoutId: `Q_Jm8TaXq`,
                                        ...z(
                                          {
                                            DT0oeOjRz: {
                                              background: {
                                                alt: `Company logo`,
                                                fit: `fill`,
                                                intrinsicHeight: 96,
                                                intrinsicWidth: 344,
                                                loading: C(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    4 +
                                                    24 +
                                                    -51.2 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    3
                                                ),
                                                pixelHeight: 48,
                                                pixelWidth: 48,
                                                sizes: `18px`,
                                                ...W(y),
                                              },
                                            },
                                            GiDS5c_9T: {
                                              background: {
                                                alt: `Company logo`,
                                                fit: `fill`,
                                                intrinsicHeight: 96,
                                                intrinsicWidth: 344,
                                                loading: C(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    4 +
                                                    24 +
                                                    -58.2 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    3
                                                ),
                                                pixelHeight: 48,
                                                pixelWidth: 48,
                                                sizes: `18px`,
                                                ...W(y),
                                              },
                                            },
                                            kai7Cuvgi: {
                                              background: {
                                                alt: `Company logo`,
                                                fit: `fill`,
                                                intrinsicHeight: 96,
                                                intrinsicWidth: 344,
                                                loading: C(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    4 +
                                                    24 +
                                                    -51.2 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    3
                                                ),
                                                pixelHeight: 48,
                                                pixelWidth: 48,
                                                sizes: `18px`,
                                                ...W(y),
                                              },
                                            },
                                            zww_hjqbb: {
                                              background: {
                                                alt: `Company logo`,
                                                fit: `fill`,
                                                intrinsicHeight: 96,
                                                intrinsicWidth: 344,
                                                loading: C(
                                                  (p?.y || 0) +
                                                    0 +
                                                    0 +
                                                    4 +
                                                    24 +
                                                    -51.2 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    3
                                                ),
                                                pixelHeight: 48,
                                                pixelWidth: 48,
                                                sizes: `18px`,
                                                ...W(y),
                                              },
                                            },
                                          },
                                          F,
                                          R
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
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                            },
                                            children: `Agencies`,
                                          }),
                                        }),
                                        className: `framer-107wg98`,
                                        fonts: [`Inter`],
                                        layoutDependency: $,
                                        layoutId: `eSDLcx7SL`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        text: S,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                  c(b, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(d.h5, {
                                        className: `framer-styles-preset-s5101p`,
                                        "data-styles-preset": `jXwTlEdH0`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `AI Campaign Automation`,
                                      }),
                                    }),
                                    className: `framer-udpotr`,
                                    "data-framer-name": `AI Campaign Automation`,
                                    fonts: [`Inter`],
                                    layoutDependency: $,
                                    layoutId: `euRwQZl6j`,
                                    style: { "--framer-paragraph-spacing": `0px` },
                                    text: T,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(d.div, {
                                className: `framer-ugkafd`,
                                "data-framer-name": `Animated Layer`,
                                layoutDependency: $,
                                layoutId: `kWd4hQ3sG`,
                                style: {
                                  backgroundColor: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                                  borderBottomLeftRadius: 4,
                                  borderBottomRightRadius: 4,
                                  borderTopLeftRadius: 4,
                                  borderTopRightRadius: 4,
                                },
                                children: [
                                  c(d.div, {
                                    className: `framer-oltbi0`,
                                    "data-framer-name": `Frame 1`,
                                    layoutDependency: $,
                                    layoutId: `hgm7GN9xX`,
                                    style: {
                                      backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                                      borderBottomLeftRadius: 2,
                                      borderBottomRightRadius: 2,
                                      borderTopLeftRadius: 2,
                                      borderTopRightRadius: 2,
                                    },
                                    variants: {
                                      kZ3XQqCvF: {
                                        backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                                      },
                                      SyRKRfloD: {
                                        backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                                      },
                                      UiFZL4kB0: {
                                        backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                                      },
                                    },
                                  }),
                                  c(d.div, {
                                    className: `framer-1uzm1ih`,
                                    "data-framer-name": `Frame 2`,
                                    layoutDependency: $,
                                    layoutId: `FYr67aVkr`,
                                    style: {
                                      backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                                      borderBottomLeftRadius: 2,
                                      borderBottomRightRadius: 2,
                                      borderTopLeftRadius: 2,
                                      borderTopRightRadius: 2,
                                    },
                                    variants: {
                                      kZ3XQqCvF: {
                                        backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                                      },
                                    },
                                  }),
                                  c(d.div, {
                                    className: `framer-ar6bxo`,
                                    "data-framer-name": `Frame 3`,
                                    layoutDependency: $,
                                    layoutId: `dznooF4CP`,
                                    style: {
                                      backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                                      borderBottomLeftRadius: 2,
                                      borderBottomRightRadius: 2,
                                      borderTopLeftRadius: 2,
                                      borderTopRightRadius: 2,
                                    },
                                    variants: {
                                      SyRKRfloD: {
                                        backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                                      },
                                    },
                                  }),
                                  c(d.div, {
                                    className: `framer-l9z3ym`,
                                    "data-framer-name": `Frame 4`,
                                    layoutDependency: $,
                                    layoutId: `X_PnypAMO`,
                                    style: {
                                      backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                                      borderBottomLeftRadius: 2,
                                      borderBottomRightRadius: 2,
                                      borderTopLeftRadius: 2,
                                      borderTopRightRadius: 2,
                                    },
                                    variants: {
                                      UiFZL4kB0: {
                                        backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                                      },
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u(d.div, {
                            className: `framer-1tpscc9`,
                            "data-framer-name": `Profile Information`,
                            layoutDependency: $,
                            layoutId: `gHdJYdaLa`,
                            children: [
                              c(x, {
                                background: {
                                  alt: `Profile Image`,
                                  fit: `stretch`,
                                  loading: C((p?.y || 0) + 0 + 4 + 40 + 310 + 42),
                                  pixelHeight: 256,
                                  pixelWidth: 256,
                                  sizes: `64px`,
                                  ...W(E),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                                className: `framer-1urjl8g`,
                                "data-framer-name": `Profile Image`,
                                layoutDependency: $,
                                layoutId: `HfwZn02dp`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                                ...z(
                                  {
                                    DT0oeOjRz: {
                                      background: {
                                        alt: `Profile Image`,
                                        fit: `stretch`,
                                        loading: C((p?.y || 0) + 0 + 0 + 4 + 24 + 83.2 + 42),
                                        pixelHeight: 256,
                                        pixelWidth: 256,
                                        sizes: `64px`,
                                        ...W(E),
                                        positionX: `center`,
                                        positionY: `center`,
                                      },
                                    },
                                    GiDS5c_9T: {
                                      background: {
                                        alt: `Profile Image`,
                                        fit: `stretch`,
                                        loading: C((p?.y || 0) + 0 + 0 + 4 + 24 + 90.2 + 42),
                                        pixelHeight: 256,
                                        pixelWidth: 256,
                                        sizes: `64px`,
                                        ...W(E),
                                        positionX: `center`,
                                        positionY: `center`,
                                      },
                                    },
                                    kai7Cuvgi: {
                                      background: {
                                        alt: `Profile Image`,
                                        fit: `stretch`,
                                        loading: C((p?.y || 0) + 0 + 0 + 4 + 24 + 83.2 + 42),
                                        pixelHeight: 256,
                                        pixelWidth: 256,
                                        sizes: `64px`,
                                        ...W(E),
                                        positionX: `center`,
                                        positionY: `center`,
                                      },
                                    },
                                    zww_hjqbb: {
                                      background: {
                                        alt: `Profile Image`,
                                        fit: `stretch`,
                                        loading: C((p?.y || 0) + 0 + 0 + 4 + 24 + 83.2 + 42),
                                        pixelHeight: 256,
                                        pixelWidth: 256,
                                        sizes: `64px`,
                                        ...W(E),
                                        positionX: `center`,
                                        positionY: `center`,
                                      },
                                    },
                                  },
                                  F,
                                  R
                                ),
                              }),
                              u(d.div, {
                                className: `framer-16g0yvy`,
                                "data-framer-name": `Name & Designation`,
                                layoutDependency: $,
                                layoutId: `DFlLZ8G6Q`,
                                children: [
                                  c(b, {
                                    __fromCanvasComponent: !0,
                                    children: c(r, {
                                      children: c(d.h6, {
                                        className: `framer-styles-preset-11qazq0`,
                                        "data-styles-preset": `SUQaOk4ze`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                        },
                                        children: `Daniel Reed`,
                                      }),
                                    }),
                                    className: `framer-jbttb6`,
                                    "data-framer-name": `Daniel Reed`,
                                    fonts: [`Inter`],
                                    layoutDependency: $,
                                    layoutId: `IXZUWe_rr`,
                                    style: {
                                      "--extracted-1w1cjl5": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                      "--framer-paragraph-spacing": `0px`,
                                    },
                                    text: D,
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
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                        },
                                        children: `Founder, BrightLayer Digital`,
                                      }),
                                    }),
                                    className: `framer-vrdwea`,
                                    "data-framer-name": `Founder, BrightLayer Digital`,
                                    fonts: [`Inter`],
                                    layoutDependency: $,
                                    layoutId: `hcWfk3FDG`,
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
                            ],
                          }),
                        ],
                      }),
                    }),
                    u(d.div, {
                      className: `framer-mq23e8`,
                      "data-framer-name": `Right Content`,
                      layoutDependency: $,
                      layoutId: `jlHBJzbFa`,
                      children: [
                        c(d.div, {
                          className: `framer-17byl9g`,
                          "data-framer-name": `Title`,
                          layoutDependency: $,
                          layoutId: `Y_Z9pYcUD`,
                          children: c(b, {
                            __fromCanvasComponent: !0,
                            children: c(r, {
                              children: c(d.h4, {
                                className: `framer-styles-preset-1qcdpqr`,
                                "data-styles-preset": `bz7TF8GsX`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1eung3n, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                },
                                children: `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
                              }),
                            }),
                            className: `framer-1lgykf6`,
                            "data-framer-name": `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `vNyFfeCsk`,
                            style: {
                              "--extracted-1eung3n": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            text: k,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        u(d.div, {
                          className: `framer-vlv1r`,
                          "data-border": !0,
                          "data-framer-name": `Stats`,
                          layoutDependency: $,
                          layoutId: `UUKTc3qDA`,
                          style: {
                            "--border-bottom-width": `0px`,
                            "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                          },
                          children: [
                            u(d.div, {
                              className: `framer-n0r3g0`,
                              "data-border": !0,
                              "data-framer-name": `01`,
                              layoutDependency: $,
                              layoutId: `QZJyYS95W`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `1px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              variants: {
                                DT0oeOjRz: {
                                  "--border-bottom-width": `1px`,
                                  "--border-right-width": `0px`,
                                },
                                GiDS5c_9T: {
                                  "--border-bottom-width": `1px`,
                                  "--border-right-width": `0px`,
                                },
                                kai7Cuvgi: {
                                  "--border-bottom-width": `1px`,
                                  "--border-right-width": `0px`,
                                },
                                zww_hjqbb: {
                                  "--border-bottom-width": `1px`,
                                  "--border-right-width": `0px`,
                                },
                              },
                              children: [
                                c(b, {
                                  __fromCanvasComponent: !0,
                                  children: c(r, {
                                    children: c(d.h4, {
                                      className: `framer-styles-preset-1qcdpqr`,
                                      "data-styles-preset": `bz7TF8GsX`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `52%`,
                                    }),
                                  }),
                                  className: `framer-z5pc87`,
                                  "data-framer-name": `52%`,
                                  fonts: [`Inter`],
                                  layoutDependency: $,
                                  layoutId: `bVbyuDzHU`,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  text: A,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(b, {
                                  __fromCanvasComponent: !0,
                                  children: c(r, {
                                    children: c(d.p, {
                                      className: `framer-styles-preset-13ryzp6`,
                                      "data-styles-preset": `Yw0GmpI8u`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                      },
                                      children: `Increase in campaign conversions`,
                                    }),
                                  }),
                                  className: `framer-16y7g40`,
                                  "data-framer-name": `Increase in campaign conversions`,
                                  fonts: [`Inter`],
                                  layoutDependency: $,
                                  layoutId: `ONYIM4Bk1`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: j,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            u(d.div, {
                              className: `framer-ntd8sr`,
                              "data-border": !0,
                              "data-framer-name": `03`,
                              layoutDependency: $,
                              layoutId: `cvmo_wZQC`,
                              style: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `0px`,
                              },
                              children: [
                                c(b, {
                                  __fromCanvasComponent: !0,
                                  children: c(r, {
                                    children: c(d.h4, {
                                      className: `framer-styles-preset-1qcdpqr`,
                                      "data-styles-preset": `bz7TF8GsX`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `3.4X`,
                                    }),
                                  }),
                                  className: `framer-1bng020`,
                                  "data-framer-name": `3.4X`,
                                  fonts: [`Inter`],
                                  layoutDependency: $,
                                  layoutId: `UWdO_EyUo`,
                                  style: { "--framer-paragraph-spacing": `0px` },
                                  text: M,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                c(b, {
                                  __fromCanvasComponent: !0,
                                  children: c(r, {
                                    children: c(d.p, {
                                      className: `framer-styles-preset-13ryzp6`,
                                      "data-styles-preset": `Yw0GmpI8u`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                                      },
                                      children: `Faster campaign deployment`,
                                    }),
                                  }),
                                  className: `framer-1l30xuk`,
                                  "data-framer-name": `Faster campaign deployment`,
                                  fonts: [`Inter`],
                                  layoutDependency: $,
                                  layoutId: `GqXiDo2WD`,
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
          `.framer-Orgmc.framer-1g4kmg0, .framer-Orgmc .framer-1g4kmg0 { display: block; }`,
          `.framer-Orgmc.framer-163n8b5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1280px; }`,
          `.framer-Orgmc .framer-9qtsqq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px; position: relative; width: 43%; }`,
          `.framer-Orgmc .framer-pp5o56 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 538px; justify-content: space-between; overflow: hidden; padding: 40px; position: relative; width: 1px; }`,
          `.framer-Orgmc .framer-16xug9x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-Orgmc .framer-9qw95w { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Orgmc .framer-1cbt81j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-Orgmc .framer-79cux2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: 18px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 18px; }`,
          `.framer-Orgmc .framer-107wg98, .framer-Orgmc .framer-jbttb6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-Orgmc .framer-udpotr, .framer-Orgmc .framer-vrdwea, .framer-Orgmc .framer-z5pc87, .framer-Orgmc .framer-16y7g40, .framer-Orgmc .framer-1bng020, .framer-Orgmc .framer-1l30xuk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Orgmc .framer-ugkafd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3.200000047683716px; height: min-content; justify-content: flex-start; overflow: visible; padding: 3.200000047683716px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-Orgmc .framer-oltbi0 { flex: none; gap: 0px; height: 8px; overflow: hidden; position: relative; width: 48px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Orgmc .framer-1uzm1ih, .framer-Orgmc .framer-ar6bxo, .framer-Orgmc .framer-l9z3ym { flex: none; gap: 0px; height: 8px; overflow: hidden; position: relative; width: 18px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Orgmc .framer-1tpscc9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Orgmc .framer-1urjl8g { flex: none; gap: 0px; height: 64px; overflow: hidden; position: relative; width: 64px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Orgmc .framer-16g0yvy { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Orgmc .framer-mq23e8 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Orgmc .framer-17byl9g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px 40px 60px 40px; position: relative; width: 100%; }`,
          `.framer-Orgmc .framer-1lgykf6 { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Orgmc .framer-vlv1r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Orgmc .framer-n0r3g0, .framer-Orgmc .framer-ntd8sr { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 40px; position: relative; width: 1px; }`,
          `.framer-Orgmc.framer-v-1lgulvt .framer-oltbi0, .framer-Orgmc.framer-v-k8lmdv .framer-oltbi0, .framer-Orgmc.framer-v-1nh1iqi .framer-oltbi0 { width: 18px; }`,
          `.framer-Orgmc.framer-v-1lgulvt .framer-1uzm1ih, .framer-Orgmc.framer-v-k8lmdv .framer-ar6bxo, .framer-Orgmc.framer-v-1nh1iqi .framer-l9z3ym { width: 48px; }`,
          `.framer-Orgmc.framer-v-1nh1iqi .framer-1lgykf6 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 4; display: -webkit-box; white-space: pre-line; }`,
          `.framer-Orgmc.framer-v-a55fk.framer-163n8b5, .framer-Orgmc.framer-v-nktllh.framer-163n8b5, .framer-Orgmc.framer-v-11u2odi.framer-163n8b5, .framer-Orgmc.framer-v-4z52v7.framer-163n8b5 { flex-direction: column; width: 347px; }`,
          `.framer-Orgmc.framer-v-a55fk .framer-9qtsqq, .framer-Orgmc.framer-v-nktllh .framer-9qtsqq, .framer-Orgmc.framer-v-11u2odi .framer-9qtsqq, .framer-Orgmc.framer-v-4z52v7 .framer-9qtsqq { width: 100%; }`,
          `.framer-Orgmc.framer-v-a55fk .framer-pp5o56, .framer-Orgmc.framer-v-nktllh .framer-pp5o56, .framer-Orgmc.framer-v-11u2odi .framer-pp5o56, .framer-Orgmc.framer-v-4z52v7 .framer-pp5o56 { aspect-ratio: 0.8475 / 1; gap: 32px; height: var(--framer-aspect-ratio-supported, 250px); justify-content: center; max-height: 250px; padding: 24px; }`,
          `.framer-Orgmc.framer-v-a55fk .framer-16xug9x, .framer-Orgmc.framer-v-11u2odi .framer-16xug9x, .framer-Orgmc.framer-v-4z52v7 .framer-16xug9x { gap: 20px; }`,
          `.framer-Orgmc.framer-v-a55fk .framer-mq23e8, .framer-Orgmc.framer-v-nktllh .framer-mq23e8, .framer-Orgmc.framer-v-11u2odi .framer-mq23e8, .framer-Orgmc.framer-v-4z52v7 .framer-mq23e8 { align-self: unset; flex: none; gap: 0px; height: min-content; justify-content: center; width: 100%; }`,
          `.framer-Orgmc.framer-v-a55fk .framer-17byl9g, .framer-Orgmc.framer-v-nktllh .framer-17byl9g, .framer-Orgmc.framer-v-11u2odi .framer-17byl9g, .framer-Orgmc.framer-v-4z52v7 .framer-17byl9g { padding: 24px; }`,
          `.framer-Orgmc.framer-v-a55fk .framer-vlv1r, .framer-Orgmc.framer-v-nktllh .framer-vlv1r, .framer-Orgmc.framer-v-11u2odi .framer-vlv1r, .framer-Orgmc.framer-v-4z52v7 .framer-vlv1r { flex-direction: column; }`,
          `.framer-Orgmc.framer-v-a55fk .framer-n0r3g0, .framer-Orgmc.framer-v-a55fk .framer-ntd8sr, .framer-Orgmc.framer-v-nktllh .framer-n0r3g0, .framer-Orgmc.framer-v-nktllh .framer-ntd8sr, .framer-Orgmc.framer-v-11u2odi .framer-n0r3g0, .framer-Orgmc.framer-v-11u2odi .framer-ntd8sr, .framer-Orgmc.framer-v-4z52v7 .framer-n0r3g0, .framer-Orgmc.framer-v-4z52v7 .framer-ntd8sr { flex: none; padding: 24px; width: 100%; }`,
          `.framer-Orgmc.framer-v-nktllh .framer-oltbi0, .framer-Orgmc.framer-v-11u2odi .framer-ar6bxo, .framer-Orgmc.framer-v-4z52v7 .framer-ar6bxo { order: 1; }`,
          `.framer-Orgmc.framer-v-nktllh .framer-1uzm1ih, .framer-Orgmc.framer-v-11u2odi .framer-1uzm1ih, .framer-Orgmc.framer-v-4z52v7 .framer-1uzm1ih { order: 0; }`,
          `.framer-Orgmc.framer-v-nktllh .framer-ar6bxo, .framer-Orgmc.framer-v-11u2odi .framer-oltbi0, .framer-Orgmc.framer-v-4z52v7 .framer-l9z3ym { order: 2; }`,
          `.framer-Orgmc.framer-v-nktllh .framer-l9z3ym, .framer-Orgmc.framer-v-11u2odi .framer-l9z3ym, .framer-Orgmc.framer-v-4z52v7 .framer-oltbi0 { order: 3; }`,
          ...M,
          ...L,
          ...F,
          ...k,
          ...D,
          `.framer-Orgmc[data-border="true"]::after, .framer-Orgmc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Orgmc`
      )),
      (Z = X),
      (X.displayName = `Testimonial Card`),
      (X.defaultProps = { height: 546, width: 1280 }),
      v(X, {
        variant: {
          options: [
            `ra6cRNcXv`,
            `kZ3XQqCvF`,
            `SyRKRfloD`,
            `UiFZL4kB0`,
            `kai7Cuvgi`,
            `GiDS5c_9T`,
            `DT0oeOjRz`,
            `zww_hjqbb`,
          ],
          optionTitles: [
            `Testimonial`,
            `Testimonial 2`,
            `Testimonial 3`,
            `Testimonial 4`,
            `Testimonial For small Device `,
            `Testimonial For small Device 2`,
            `Testimonial For small Device 3`,
            `Testimonial For small Device 4`,
          ],
          title: `Variant`,
          type: S.Enum,
        },
        rsB2i43WZ: {
          __defaultAssetReference: `data:framer/asset-reference,ZCm7LG3x1OMmGE5tKEYw631V4.svg?originalFilename=Simplification.svg&width=48&height=48`,
          __vekterDefault: {
            alt: `Company logo`,
            assetReference: `data:framer/asset-reference,ZCm7LG3x1OMmGE5tKEYw631V4.svg?originalFilename=Simplification.svg&width=48&height=48`,
          },
          title: `Logo`,
          type: S.ResponsiveImage,
        },
        FJTqBi2KV: {
          defaultValue: `Agencies`,
          displayTextArea: !1,
          title: `Company Name`,
          type: S.String,
        },
        onFJTqBi2KVChange: { changes: `FJTqBi2KV`, type: S.ChangeHandler },
        iEDAZpSS3: {
          defaultValue: `AI Campaign Automation`,
          displayTextArea: !1,
          title: `Title`,
          type: S.String,
        },
        oniEDAZpSS3Change: { changes: `iEDAZpSS3`, type: S.ChangeHandler },
        G47lkWz6h: {
          __defaultAssetReference: `data:framer/asset-reference,CmIL4pJLGIFluY1bSakFcnyY.png?width=256&height=256`,
          __vekterDefault: {
            alt: `Profile Image`,
            assetReference: `data:framer/asset-reference,CmIL4pJLGIFluY1bSakFcnyY.png?width=256&height=256`,
            positionX: `48.8%`,
            positionY: `36.7%`,
          },
          title: `Profile Image`,
          type: S.ResponsiveImage,
        },
        tXLgOvUs3: {
          defaultValue: `Daniel Reed`,
          displayTextArea: !1,
          title: `Profile Name`,
          type: S.String,
        },
        ontXLgOvUs3Change: { changes: `tXLgOvUs3`, type: S.ChangeHandler },
        iwx62rpGT: {
          defaultValue: `Founder, BrightLayer Digital`,
          displayTextArea: !1,
          title: `Profile Designation`,
          type: S.String,
        },
        oniwx62rpGTChange: { changes: `iwx62rpGT`, type: S.ChangeHandler },
        J5IwwRpSA: {
          defaultValue: `“Before this, our team was buried in repetitive campaign setup and constant optimization tweaks. Now campaigns launch, test, and improve automatically in the background.”`,
          displayTextArea: !0,
          title: `Review Text`,
          type: S.String,
        },
        onJ5IwwRpSAChange: { changes: `J5IwwRpSA`, type: S.ChangeHandler },
        k3FDQtFQv: {
          defaultValue: `52%`,
          displayTextArea: !1,
          title: `Incrase Growth Number`,
          type: S.String,
        },
        onk3FDQtFQvChange: { changes: `k3FDQtFQv`, type: S.ChangeHandler },
        nJPHXQfwW: {
          defaultValue: `Increase in campaign conversions`,
          displayTextArea: !1,
          title: `Incrase Conversions Text`,
          type: S.String,
        },
        onnJPHXQfwWChange: { changes: `nJPHXQfwW`, type: S.ChangeHandler },
        U1WzZWWko: {
          defaultValue: `3.4X`,
          displayTextArea: !1,
          title: `Faster 3x`,
          type: S.String,
        },
        onU1WzZWWkoChange: { changes: `U1WzZWWko`, type: S.ChangeHandler },
        yV_HVFDbM: {
          defaultValue: `Faster campaign deployment`,
          displayTextArea: !1,
          title: `Campain Text`,
          type: S.String,
        },
        onyV_HVFDbMChange: { changes: `yV_HVFDbM`, type: S.ChangeHandler },
      }),
      _(
        X,
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
          ...h(N),
          ...h(R),
          ...h(I),
          ...h(A),
          ...h(T),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Q as n, Z as t };
//# sourceMappingURL=bCS5tafFa.DKT7mem2.mjs.map
