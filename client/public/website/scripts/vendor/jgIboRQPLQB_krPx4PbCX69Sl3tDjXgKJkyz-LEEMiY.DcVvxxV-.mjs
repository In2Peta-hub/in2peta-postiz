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
  Ct as m,
  Dt as h,
  Et as te,
  G as g,
  J as _,
  K as v,
  L as y,
  N as b,
  O as ne,
  P as x,
  Q as S,
  Tt as re,
  a as C,
  at as ie,
  b as w,
  bt as T,
  dt as E,
  f as D,
  ft as ae,
  g as oe,
  gt as se,
  ht as ce,
  i as O,
  k,
  kt as A,
  m as le,
  mt as ue,
  o as j,
  q as de,
  w as M,
  y as fe,
  yt as pe,
  z as N,
} from "./framer.CFqKih1k.mjs";
import { d as P, f as F, i as I, l as me, r as L, u as R } from "./shared-lib.P4JA4aUc.mjs";
import { i as z, n as B, r as he, t as ge } from "./cPVM1_Pc1.CsfRepwj.mjs";
import { i as V, r as H } from "./jtK6M3rat.BS8yqcCt.mjs";
import {
  a as _e,
  c as ve,
  i as ye,
  l as be,
  n as xe,
  o as U,
  r as Se,
  s as Ce,
  t as we,
  u as Te,
} from "./S3SycdU06.6zsgfc_5.mjs";
import { a as Ee, i as De } from "./QwlEuJYAN.D0xOcfs7.mjs";
function Oe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  W,
  G,
  Le = e(() => {
    (l(),
      S(),
      p(),
      i(),
      Te(),
      (ke = { Mq_TEHB7T: { hover: !0 } }),
      (Ae = `framer-Bfz1h`),
      (je = { Mq_TEHB7T: `framer-v-8blt55` }),
      (Me = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ne = ({ value: e, children: n }) => {
        let r = t(f),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(f.Provider, { value: a, children: n });
      }),
      (Pe = d.create(r)),
      (Fe = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        JJkB9voMu: r ?? a.JJkB9voMu,
        KNShxkO1h: t ?? a.KNShxkO1h ?? be,
      })),
      (Ie = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = h(
        a(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = o(),
            { activeLocale: s, setLocale: l } = pe();
          E();
          let {
              style: u,
              className: f,
              layoutId: p,
              variant: m,
              JJkB9voMu: h,
              KNShxkO1h: g,
              ..._
            } = Fe(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: ne,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: re,
              setGestureState: C,
              setVariant: ie,
              variants: w,
            } = te({
              defaultVariant: `Mq_TEHB7T`,
              enabledGestures: ke,
              ref: i,
              variant: m,
              variantClassNames: je,
            }),
            T = Ie(e, w),
            D = y(Ae);
          return c(ee, {
            id: p ?? a,
            children: c(Pe, {
              animate: w,
              initial: !1,
              children: c(Ne, {
                value: Me,
                children: c(fe, {
                  href: h,
                  motionChild: !0,
                  nodeId: `Mq_TEHB7T`,
                  openInNewTab: !1,
                  scopeId: `L4psnAbbm`,
                  children: c(d.a, {
                    ..._,
                    ...x,
                    className: `${y(D, `framer-8blt55`, f, b)} framer-113eb89`,
                    "data-border": !0,
                    "data-framer-name": `Left`,
                    layoutDependency: T,
                    layoutId: `Mq_TEHB7T`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      ...u,
                    },
                    variants: {
                      "Mq_TEHB7T-hover": {
                        backgroundColor: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                      },
                    },
                    ...Oe({ "Mq_TEHB7T-hover": { "data-framer-name": void 0 } }, v, S),
                    children: c(oe, {
                      animated: !0,
                      className: `framer-1qilfhe`,
                      Component: g,
                      layoutDependency: T,
                      layoutId: `AvuBjvJyT`,
                      style: {
                        "--14vpx0c": `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                      },
                      variants: {
                        "Mq_TEHB7T-hover": {
                          "--14vpx0c": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                        },
                      },
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Bfz1h.framer-113eb89, .framer-Bfz1h .framer-113eb89 { display: block; }`,
          `.framer-Bfz1h.framer-8blt55 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Bfz1h .framer-1qilfhe { aspect-ratio: 1.0909090909090908 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 22px); position: relative; width: 24px; }`,
          `.framer-Bfz1h[data-border="true"]::after, .framer-Bfz1h [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-Bfz1h`
      )),
      (G = W),
      (W.displayName = `Arrow Button`),
      (W.defaultProps = { height: 46, width: 48 }),
      x(W, {
        JJkB9voMu: { title: `Link`, type: j.Link },
        KNShxkO1h: {
          defaultValue: {
            identifier: `local-module:vector/hMwhF0TS1:default`,
            moduleId: `lM9WBikXGkk2kYtiR1I7`,
          },
          setModuleId: `n4UzSUlaQxIL3JldCsez`,
          title: `Icon`,
          type: j.VectorSetItem,
        },
      }),
      b(W, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  K,
  Re,
  ze,
  q,
  Be,
  Ve = e(() => {
    (l(),
      S(),
      i(),
      (K = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 37" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 8.333 8.333 L 0 16.667" fill="transparent" height="16.666666666666668px" id="yccg5EOZ7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.33" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(15 10.167)" width="8.333333333333258px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Re = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(d.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (ze = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (q = h(
        a(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = ze(e);
          return c(Re, {
            ...s,
            className: y(`framer-vLZoJ`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-vLZoJ { -webkit-mask: ${K}; aspect-ratio: 1.0810810810810811; background-color: var(--14vpx0c); mask: ${K}; width: 40px; }`,
        ],
        `framer-vLZoJ`
      )),
      (q.displayName = `Left Arrow `),
      (Be = q),
      x(q, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: j.Color,
        },
      }));
  }),
  He,
  Ue,
  We,
  Ge,
  Ke,
  J,
  qe,
  Je,
  Ye,
  Xe,
  Y,
  X,
  Z,
  Ze,
  Q,
  Qe,
  $,
  $e,
  et;
e(() => {
  (l(),
    S(),
    p(),
    i(),
    I(),
    Le(),
    H(),
    ve(),
    z(),
    ye(),
    F(),
    Te(),
    Ve(),
    De(),
    (He = A(k)),
    (Ue = g(G)),
    (We = g(L)),
    (Ge = {
      NdN8SSWNK: `(min-width: 1440px)`,
      tS_BFndIs: `(min-width: 810px) and (max-width: 1439.98px)`,
      ZjbNj4_EW: `(max-width: 809.98px)`,
    }),
    (Ke = []),
    (J = `framer-TtHjU`),
    (qe = {
      NdN8SSWNK: `framer-v-ay4xe3`,
      tS_BFndIs: `framer-v-1ur8w0s`,
      ZjbNj4_EW: `framer-v-15wnafd`,
    }),
    (Je = (e, t, n) => (e && t ? `position` : n)),
    (Ye = {
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
    (Xe = { damping: 35, delay: 0, mass: 2, stiffness: 120, type: `spring` }),
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Z = { Desktop: `NdN8SSWNK`, Phone: `ZjbNj4_EW`, Tablet: `tS_BFndIs` }),
    (Ze = ({ value: e }) =>
      se()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = (e) => ({
      from: {
        constraint: {
          left: { collection: `QwlEuJYAN`, name: `nextItemId`, type: `Identifier` },
          operator: `==`,
          right: { collection: `nextItemId`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: {
          constraint: {
            left: { collection: `QwlEuJYAN`, name: `previousItemId`, type: `Identifier` },
            operator: `==`,
            right: { collection: `previousItemId`, name: `id`, type: `Identifier` },
            type: `BinaryOperation`,
          },
          left: { alias: `QwlEuJYAN`, data: V, type: `Collection` },
          right: { alias: `previousItemId`, data: V, type: `Collection` },
          type: `LeftJoin`,
        },
        right: { alias: `nextItemId`, data: V, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `QwlEuJYAN`, name: `KP1VtjTDq`, type: `Identifier` },
        { collection: `QwlEuJYAN`, name: `K4nO7V0zW`, type: `Identifier` },
        { collection: `QwlEuJYAN`, name: `Acc4PTSER`, type: `Identifier` },
        { collection: `QwlEuJYAN`, name: `RSF6JtQqE`, type: `Identifier` },
        { collection: `QwlEuJYAN`, name: `o55cOAUaX`, type: `Identifier` },
        { collection: `QwlEuJYAN`, name: `uUjGTpM13`, type: `Identifier` },
        { collection: `QwlEuJYAN`, name: `qGsYMDAJ9`, type: `Identifier` },
        {
          alias: `previousItemId.diavS5Gwt`,
          collection: `previousItemId`,
          name: `diavS5Gwt`,
          type: `Identifier`,
        },
        { alias: `previousItemId`, collection: `previousItemId`, name: `id`, type: `Identifier` },
        {
          alias: `nextItemId.diavS5Gwt`,
          collection: `nextItemId`,
          name: `diavS5Gwt`,
          type: `Identifier`,
        },
        { alias: `nextItemId`, collection: `nextItemId`, name: `id`, type: `Identifier` },
      ],
      where: e,
    })),
    (Qe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `NdN8SSWNK`,
    })),
    ($ = h(
      a(function (e, i) {
        let a = n(null),
          l = i ?? a,
          p = o(),
          { activeLocale: h, setLocale: te } = pe(),
          g = E(),
          v = ae(),
          [b] = m(Q(_(v, `QwlEuJYAN`))),
          x = (e) => {
            if (!b) throw new w(`No data matches path variables: ${JSON.stringify(v)}`);
            return b[e];
          },
          {
            style: S,
            className: ie,
            layoutId: oe,
            variant: se,
            KP1VtjTDq: A = x(`KP1VtjTDq`) ?? ``,
            K4nO7V0zW: j = x(`K4nO7V0zW`),
            Acc4PTSER: fe = x(`Acc4PTSER`) ?? ``,
            RSF6JtQqE: N = x(`RSF6JtQqE`) ?? ``,
            o55cOAUaX: P = x(`o55cOAUaX`) ?? ``,
            uUjGTpM13: F = x(`uUjGTpM13`) ?? ``,
            qGsYMDAJ9: I = x(`qGsYMDAJ9`) ?? ``,
            previousItemId_diavS5Gwt: R = x(`previousItemId.diavS5Gwt`) ?? ``,
            previousItemId: z = x(`previousItemId`),
            nextItemId_diavS5Gwt: B = x(`nextItemId.diavS5Gwt`) ?? ``,
            nextItemId: he = x(`nextItemId`),
            ...V
          } = Qe(e);
        T(s(() => Ee({ K4nO7V0zW: j, KP1VtjTDq: A }, h), [A, j, h]));
        let [H, ve] = ce(se, Ge, !1),
          ye = y(J, ge, me, we, _e),
          xe = t(D)?.isLayoutTemplate,
          U = Je(xe, !!t(f)?.transition?.layout),
          Se = X(z);
        re();
        let Ce = X(he);
        return (
          ue({}),
          c(D.Provider, {
            value: {
              activeVariantId: H,
              humanReadableVariantMap: Z,
              primaryVariantId: `NdN8SSWNK`,
              variantClassNames: qe,
            },
            children: u(ee, {
              id: oe ?? p,
              children: [
                c(Ze, {
                  value: `html body { background: var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)); }`,
                }),
                u(d.div, {
                  ...V,
                  className: y(ye, `framer-ay4xe3`, ie),
                  ref: l,
                  style: { ...S },
                  children: [
                    c(d.main, {
                      className: `framer-876tjr`,
                      "data-framer-name": `Main`,
                      layout: U,
                      children: u(`section`, {
                        className: `framer-14pmsgw`,
                        "data-framer-name": `Details `,
                        children: [
                          u(`div`, {
                            className: `framer-arsyxk`,
                            "data-framer-name": `Container `,
                            children: [
                              u(`div`, {
                                className: `framer-2n4vcq`,
                                "data-border": !0,
                                children: [
                                  u(`div`, {
                                    className: `framer-j81eye`,
                                    children: [
                                      c(He, {
                                        __framer__animate: { transition: Xe },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Ye,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__threshold: 0,
                                        __fromCanvasComponent: !0,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        children: c(r, {
                                          children: c(`h1`, {
                                            className: `framer-styles-preset-3yq5jl`,
                                            "data-styles-preset": `cPVM1_Pc1`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                            },
                                            children: `We launched more experiments in one quarter than we did all last year.`,
                                          }),
                                        }),
                                        className: `framer-yx1ms1`,
                                        "data-framer-name": `Title`,
                                        fonts: [`Inter`],
                                        text: A,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      c(M, {
                                        breakpoint: H,
                                        overrides: {
                                          tS_BFndIs: {
                                            background: {
                                              alt: `Professional men engaging in workplace collaboration and networking during an office coffee break.`,
                                              fit: `fill`,
                                              loading: de(
                                                (g?.y || 0) +
                                                  0 +
                                                  0 +
                                                  175 +
                                                  60 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  98
                                              ),
                                              pixelHeight: 2976,
                                              pixelWidth: 1983,
                                              sizes: `min(max(min(max(${g?.width || `100vw`} - 80px, 1px), 1280px) - 64px, 1px), 1280px)`,
                                              ...Y(j),
                                            },
                                          },
                                          ZjbNj4_EW: {
                                            background: {
                                              alt: `Professional men engaging in workplace collaboration and networking during an office coffee break.`,
                                              fit: `fill`,
                                              pixelHeight: 2976,
                                              pixelWidth: 1983,
                                              sizes: `min(max(min(${g?.width || `100vw`} - 32px, 1280px) - 24px, 1px), 1280px)`,
                                              ...Y(j),
                                            },
                                          },
                                        },
                                        children: c(le, {
                                          background: {
                                            alt: `Professional men engaging in workplace collaboration and networking during an office coffee break.`,
                                            fit: `fill`,
                                            loading: de(
                                              (g?.y || 0) +
                                                0 +
                                                0 +
                                                175 +
                                                60 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                98
                                            ),
                                            pixelHeight: 2976,
                                            pixelWidth: 1983,
                                            sizes: `min(max(min(max(${g?.width || `100vw`} - 160px, 1px), 1280px) - 64px, 1px), 1280px)`,
                                            ...Y(j),
                                          },
                                          className: `framer-ryi4e5`,
                                          "data-framer-name": `Banner`,
                                        }),
                                      }),
                                    ],
                                  }),
                                  u(`div`, {
                                    className: `framer-14fgs2h`,
                                    children: [
                                      u(`div`, {
                                        className: `framer-173z5o6`,
                                        children: [
                                          u(`div`, {
                                            className: `framer-j9objm`,
                                            children: [
                                              c(k, {
                                                __fromCanvasComponent: !0,
                                                children: c(r, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-13ryzp6`,
                                                    "data-styles-preset": `Yw0GmpI8u`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                                    },
                                                    children: `Industry:`,
                                                  }),
                                                }),
                                                className: `framer-1bg77up`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              c(k, {
                                                __fromCanvasComponent: !0,
                                                children: c(r, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-13ryzp6`,
                                                    "data-styles-preset": `Yw0GmpI8u`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                    },
                                                    children: `Content`,
                                                  }),
                                                }),
                                                className: `framer-m880ov`,
                                                "data-framer-name": `Industry`,
                                                fonts: [`Inter`],
                                                text: fe,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          u(`div`, {
                                            className: `framer-16q3abs`,
                                            children: [
                                              c(k, {
                                                __fromCanvasComponent: !0,
                                                children: c(r, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-13ryzp6`,
                                                    "data-styles-preset": `Yw0GmpI8u`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                                    },
                                                    children: `Team Size:`,
                                                  }),
                                                }),
                                                className: `framer-1gorvwe`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              c(k, {
                                                __fromCanvasComponent: !0,
                                                children: c(r, {
                                                  children: c(`p`, {
                                                    className: `framer-styles-preset-13ryzp6`,
                                                    "data-styles-preset": `Yw0GmpI8u`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                    },
                                                    children: `Content`,
                                                  }),
                                                }),
                                                className: `framer-nrwsns`,
                                                "data-framer-name": `Team Size`,
                                                fonts: [`Inter`],
                                                text: N,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      u(`div`, {
                                        className: `framer-9s13ih`,
                                        children: [
                                          c(k, {
                                            __fromCanvasComponent: !0,
                                            children: c(r, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-13ryzp6`,
                                                "data-styles-preset": `Yw0GmpI8u`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                                },
                                                children: `Location:`,
                                              }),
                                            }),
                                            className: `framer-110necy`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(k, {
                                            __fromCanvasComponent: !0,
                                            children: c(r, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-13ryzp6`,
                                                "data-styles-preset": `Yw0GmpI8u`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `Content`,
                                              }),
                                            }),
                                            className: `framer-5bhvl9`,
                                            "data-framer-name": `Location`,
                                            fonts: [`Inter`],
                                            text: P,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      u(`div`, {
                                        className: `framer-2btdbl`,
                                        children: [
                                          c(k, {
                                            __fromCanvasComponent: !0,
                                            children: c(r, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-13ryzp6`,
                                                "data-styles-preset": `Yw0GmpI8u`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                                                },
                                                children: `Products Used:`,
                                              }),
                                            }),
                                            className: `framer-rsle33`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(k, {
                                            __fromCanvasComponent: !0,
                                            children: c(r, {
                                              children: c(`p`, {
                                                className: `framer-styles-preset-13ryzp6`,
                                                "data-styles-preset": `Yw0GmpI8u`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                                },
                                                children: `Content`,
                                              }),
                                            }),
                                            className: `framer-1bswrih`,
                                            "data-framer-name": `Products Used`,
                                            fonts: [`Inter`],
                                            text: F,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c(k, {
                                __fromCanvasComponent: !0,
                                children: I,
                                className: `framer-h9gpjf`,
                                "data-framer-name": `Content`,
                                fonts: [`Inter`],
                                stylesPresetsClassNames: {
                                  h3: `framer-styles-preset-1i7rln7`,
                                  p: `framer-styles-preset-17u18xj`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              u(`div`, {
                                className: `framer-1i87guq`,
                                children: [
                                  Se !== !1 &&
                                    c(ne, {
                                      links: [
                                        {
                                          href: {
                                            pathVariables: { diavS5Gwt: R },
                                            webPageId: `QwlEuJYAN`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { diavS5Gwt: R },
                                            webPageId: `QwlEuJYAN`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { diavS5Gwt: R },
                                            webPageId: `QwlEuJYAN`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        c(M, {
                                          breakpoint: H,
                                          overrides: {
                                            tS_BFndIs: {
                                              y: (g?.y || 0) + 0 + 0 + 175 + 60 + 0 + 1090 + 0,
                                            },
                                            ZjbNj4_EW: { y: void 0 },
                                          },
                                          children: c(O, {
                                            height: 46,
                                            y: (g?.y || 0) + 0 + 0 + 175 + 60 + 0 + 1006 + 0,
                                            children: c(C, {
                                              className: `framer-ra2gb1-container`,
                                              nodeId: `ET71Wfu5p`,
                                              scopeId: `QwlEuJYAN`,
                                              children: c(M, {
                                                breakpoint: H,
                                                overrides: {
                                                  tS_BFndIs: { JJkB9voMu: e[1] },
                                                  ZjbNj4_EW: { JJkB9voMu: e[2] },
                                                },
                                                children: c(G, {
                                                  height: `100%`,
                                                  id: `ET71Wfu5p`,
                                                  JJkB9voMu: e[0],
                                                  KNShxkO1h: be,
                                                  layoutId: `ET71Wfu5p`,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                    }),
                                  Ce !== !1 &&
                                    c(ne, {
                                      links: [
                                        {
                                          href: {
                                            pathVariables: { diavS5Gwt: B },
                                            webPageId: `QwlEuJYAN`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { diavS5Gwt: B },
                                            webPageId: `QwlEuJYAN`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                        {
                                          href: {
                                            pathVariables: { diavS5Gwt: B },
                                            webPageId: `QwlEuJYAN`,
                                          },
                                          implicitPathVariables: void 0,
                                        },
                                      ],
                                      children: (e) =>
                                        c(M, {
                                          breakpoint: H,
                                          overrides: {
                                            tS_BFndIs: {
                                              y: (g?.y || 0) + 0 + 0 + 175 + 60 + 0 + 1090 + 0,
                                            },
                                            ZjbNj4_EW: { y: void 0 },
                                          },
                                          children: c(O, {
                                            height: 46,
                                            y: (g?.y || 0) + 0 + 0 + 175 + 60 + 0 + 1006 + 0,
                                            children: c(C, {
                                              className: `framer-1qohsg-container`,
                                              nodeId: `Vvb0LEXnX`,
                                              scopeId: `QwlEuJYAN`,
                                              children: c(M, {
                                                breakpoint: H,
                                                overrides: {
                                                  tS_BFndIs: { JJkB9voMu: e[1] },
                                                  ZjbNj4_EW: { JJkB9voMu: e[2] },
                                                },
                                                children: c(G, {
                                                  height: `100%`,
                                                  id: `Vvb0LEXnX`,
                                                  JJkB9voMu: e[0],
                                                  KNShxkO1h: Be,
                                                  layoutId: `Vvb0LEXnX`,
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
                          c(`div`, { className: `framer-3sv7jx`, "data-framer-name": `Top Line` }),
                          c(`div`, { className: `framer-ozdak9`, "data-framer-name": `Box 1` }),
                          c(`div`, {
                            className: `framer-197j4ia`,
                            "data-framer-name": `Bottom line`,
                          }),
                          c(`div`, { className: `framer-x553u4`, "data-framer-name": `Box 2` }),
                          c(`div`, { className: `framer-u6yxs5`, "data-framer-name": `Box 4` }),
                          c(`div`, { className: `framer-1el6mw0`, "data-framer-name": `Box 3` }),
                          c(`div`, { className: `framer-d66xat`, "data-framer-name": `Left Line` }),
                          c(`div`, {
                            className: `framer-ttgi4z`,
                            "data-framer-name": `Right Line`,
                          }),
                        ],
                      }),
                    }),
                    c(O, {
                      children: c(C, {
                        className: `framer-17dpn6k-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: U,
                        nodeId: `RcYHolIVM`,
                        scopeId: `QwlEuJYAN`,
                        children: c(L, {
                          height: `100%`,
                          id: `RcYHolIVM`,
                          infinite: !1,
                          intensity: 12,
                          layoutId: `RcYHolIVM`,
                          orientation: `vertical`,
                          smooth: !0,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-TtHjU.framer-df69wf, .framer-TtHjU .framer-df69wf { display: block; }`,
        `.framer-TtHjU.framer-ay4xe3 { align-content: center; align-items: center; background-color: var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-TtHjU .framer-876tjr { align-content: center; align-items: center; background-color: var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 175px 80px 100px 80px; position: relative; width: 100%; }`,
        `.framer-TtHjU .framer-14pmsgw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 60px 32px 60px 32px; position: relative; width: 1px; }`,
        `.framer-TtHjU .framer-arsyxk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; max-width: 1280px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-TtHjU .framer-2n4vcq { --border-bottom-width: 1px; --border-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 24px 0px; position: relative; width: 100%; }`,
        `.framer-TtHjU .framer-j81eye { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-TtHjU .framer-yx1ms1 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 862px; position: relative; width: 100%; }`,
        `.framer-TtHjU .framer-ryi4e5 { border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; flex: none; height: 650px; position: relative; width: 100%; }`,
        `.framer-TtHjU .framer-14fgs2h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-TtHjU .framer-173z5o6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-TtHjU .framer-j9objm, .framer-TtHjU .framer-16q3abs, .framer-TtHjU .framer-9s13ih, .framer-TtHjU .framer-2btdbl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-TtHjU .framer-1bg77up, .framer-TtHjU .framer-1gorvwe, .framer-TtHjU .framer-110necy, .framer-TtHjU .framer-rsle33 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-TtHjU .framer-m880ov, .framer-TtHjU .framer-nrwsns, .framer-TtHjU .framer-5bhvl9, .framer-TtHjU .framer-1bswrih { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-TtHjU .framer-h9gpjf { --framer-paragraph-spacing: 16px; flex: none; height: auto; max-width: 860px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-TtHjU .framer-1i87guq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-TtHjU .framer-ra2gb1-container, .framer-TtHjU .framer-1qohsg-container, .framer-TtHjU .framer-17dpn6k-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-TtHjU .framer-3sv7jx { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
        `.framer-TtHjU .framer-ozdak9 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-TtHjU .framer-197j4ia { background: linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
        `.framer-TtHjU .framer-x553u4 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-TtHjU .framer-u6yxs5 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-TtHjU .framer-1el6mw0 { background-color: var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, #2f2b2a); border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; bottom: -5px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
        `.framer-TtHjU .framer-d66xat { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 5%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 94%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 106%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 106% / 2); width: 1px; z-index: 1; }`,
        `.framer-TtHjU .framer-ttgi4z { background: linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, #161616) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 4%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 96%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%); flex: none; height: 106%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.00000000000002% - 106% / 2); width: 1px; z-index: 1; }`,
        ...B,
        ...R,
        ...xe,
        ...U,
        `.framer-TtHjU[data-border="true"]::after, .framer-TtHjU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-TtHjU.framer-ay4xe3 { width: 810px; } .framer-TtHjU .framer-876tjr { padding: 175px 40px 100px 40px; } .framer-TtHjU .framer-14fgs2h { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; }}`,
        `@media (max-width: 809.98px) { .framer-TtHjU.framer-ay4xe3 { width: 390px; } .framer-TtHjU .framer-876tjr { flex-direction: column; padding: 120px 16px 60px 16px; } .framer-TtHjU .framer-14pmsgw { flex: none; padding: 12px; width: 100%; } .framer-TtHjU .framer-2n4vcq, .framer-TtHjU .framer-j81eye { gap: 24px; } .framer-TtHjU .framer-ryi4e5 { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; height: 233px; } .framer-TtHjU .framer-14fgs2h { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; } .framer-TtHjU .framer-173z5o6 { flex-wrap: wrap; gap: 24px 16px; width: 100%; } .framer-TtHjU .framer-9s13ih, .framer-TtHjU .framer-2btdbl { justify-content: flex-start; width: 100%; } .framer-TtHjU .framer-ozdak9 { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: var(--framer-aspect-ratio-supported, 7px); left: -3px; top: -3px; width: 7px; } .framer-TtHjU .framer-x553u4 { aspect-ratio: 0.9411764705882353 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; height: var(--framer-aspect-ratio-supported, 7px); right: -3px; top: -3px; width: 7px; } .framer-TtHjU .framer-u6yxs5 { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; right: -3px; width: 7px; } .framer-TtHjU .framer-1el6mw0 { border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; bottom: -3px; height: 7px; left: -3px; width: 7px; }}`,
      ],
      `framer-TtHjU`
    )),
    ($e = $),
    ($.displayName = `Case study`),
    ($.defaultProps = { height: 3753, width: 1440 }),
    b(
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
        ...Ue,
        ...We,
        ...v(he),
        ...v(P),
        ...v(Se),
        ...v(Ce),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale;
        return Promise.allSettled([
          ie.get(Q(_(t.pathVariables, `QwlEuJYAN`)), n).preload(),
          N(G, {}, t),
        ]);
      },
    }),
    (et = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerQwlEuJYAN`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1440`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `3753`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"tS_BFndIs":{"layout":["fixed","auto"]},"ZjbNj4_EW":{"layout":["fixed","auto"]}}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { et as __FramerMetadata__, $e as default, Ke as queryParamNames };
//# sourceMappingURL=jgIboRQPLQB_krPx4PbCX69Sl3tDjXgKJkyz-LEEMiY.DcVvxxV-.mjs.map
