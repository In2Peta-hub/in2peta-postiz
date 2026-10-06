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
} from "./react.C83sJsFz.mjs";
import { E as u, a as d, r as f, t as p } from "./motion.DVY4-TFg.mjs";
import {
  Dt as m,
  Et as h,
  L as g,
  N as _,
  P as v,
  Q as y,
  dt as b,
  g as x,
  o as S,
  y as C,
  yt as w,
} from "./framer.CFqKih1k.mjs";
var T,
  E,
  D,
  O,
  k,
  A = e(() => {
    (l(),
      y(),
      i(),
      (T = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g d="M 0 40 L 0 0 L 40 0 L 40 40 Z M 33.219 1.25 L 6.778 1.25 C 3.738 1.25 1.25 3.738 1.25 6.778 L 1.25 33.222 C 1.25 36.263 3.738 38.75 6.778 38.75 L 33.222 38.75 C 36.263 38.75 38.75 36.263 38.75 33.222 L 38.75 6.778 C 38.747 3.738 36.263 1.25 33.219 1.25 Z M 26.864 20.265 L 22.414 20.265 L 22.414 36.365 L 15.756 36.365 L 15.756 20.265 L 12.425 20.265 L 12.425 14.715 L 15.756 14.715 L 15.756 11.385 C 15.756 6.857 17.635 4.164 22.984 4.164 L 27.429 4.164 L 27.429 9.712 L 24.649 9.712 C 22.57 9.712 22.432 10.49 22.432 11.937 L 22.414 14.715 L 27.452 14.715 Z" fill="transparent" height="40px" id="F43fbixaY" width="40px"><path d="M 0 40 L 0 0 L 40 0 L 40 40 Z" fill="transparent" height="40px" id="sU5Z6cfJY" width="40px"/><path d="M 31.969 0 L 5.528 0 C 2.488 0 0 2.488 0 5.528 L 0 31.972 C 0 35.013 2.488 37.5 5.528 37.5 L 31.972 37.5 C 35.013 37.5 37.5 35.013 37.5 31.972 L 37.5 5.528 C 37.497 2.488 35.013 0 31.969 0 Z M 25.614 19.015 L 21.164 19.015 L 21.164 35.115 L 14.506 35.115 L 14.506 19.015 L 11.175 19.015 L 11.175 13.465 L 14.506 13.465 L 14.506 10.135 C 14.506 5.607 16.385 2.914 21.734 2.914 L 26.179 2.914 L 26.179 8.462 L 23.399 8.462 C 21.32 8.462 21.182 9.24 21.182 10.687 L 21.164 13.465 L 26.202 13.465 Z" fill="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" height="37.5px" id="YT9P94lx5" transform="translate(1.25 1.25)" width="37.5px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (E = a((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? c(u.div, { ...a, layoutId: r, ref: t }) : c(`div`, { ...a, ref: t });
      })),
      (D = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (O = m(
        a(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = D(e);
          return c(E, {
            ...s,
            className: g(`framer-OXcPb`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-OXcPb { -webkit-mask: ${T}; aspect-ratio: 1; background-color: var(--14vpx0c); mask: ${T}; width: 40px; }`,
        ],
        `framer-OXcPb`
      )),
      (O.displayName = `Raphael Facebook`),
      (k = O),
      v(O, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: S.Color,
        },
      }));
  });
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
  W = e(() => {
    (l(),
      y(),
      p(),
      i(),
      A(),
      (M = { LQi1ROGHJ: { hover: !0 }, xjR29VZ0J: { hover: !0 } }),
      (N = [`xjR29VZ0J`, `LQi1ROGHJ`]),
      (P = `framer-JHqxc`),
      (F = { LQi1ROGHJ: `framer-v-16rot9s`, xjR29VZ0J: `framer-v-5xtar2` }),
      (I = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (L = ({ value: e, children: n }) => {
        let r = t(d),
          i = e ?? r.transition,
          a = s(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return c(d.Provider, { value: a, children: n });
      }),
      (R = { Icon: `xjR29VZ0J`, V2: `LQi1ROGHJ` }),
      (z = u.create(r)),
      (B = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        GzYCAQM8z: t ?? a.GzYCAQM8z ?? k,
        swGSa9CnM: r ?? a.swGSa9CnM,
        variant: R[a.variant] ?? a.variant ?? `xjR29VZ0J`,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = m(
        a(function (e, t) {
          let r = n(null),
            i = t ?? r,
            a = o(),
            { activeLocale: s, setLocale: l } = w();
          b();
          let {
              style: d,
              className: p,
              layoutId: m,
              variant: _,
              GzYCAQM8z: v,
              swGSa9CnM: y,
              ...S
            } = B(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: A,
              setGestureState: R,
              setVariant: H,
              variants: U,
            } = h({
              cycleOrder: N,
              defaultVariant: `xjR29VZ0J`,
              enabledGestures: M,
              ref: i,
              variant: _,
              variantClassNames: F,
            }),
            W = V(e, U),
            G = g(P);
          return c(f, {
            id: m ?? a,
            children: c(z, {
              animate: U,
              initial: !1,
              children: c(L, {
                value: I,
                children: c(C, {
                  href: y,
                  motionChild: !0,
                  nodeId: `xjR29VZ0J`,
                  openInNewTab: !1,
                  scopeId: `NvSDu3rnD`,
                  children: c(u.a, {
                    ...S,
                    ...O,
                    className: `${g(G, `framer-5xtar2`, p, E)} framer-19ll0fj`,
                    "data-framer-name": `Icon`,
                    layoutDependency: W,
                    layoutId: `xjR29VZ0J`,
                    ref: i,
                    style: { ...d },
                    ...j(
                      {
                        "LQi1ROGHJ-hover": { "data-framer-name": void 0 },
                        "xjR29VZ0J-hover": { "data-framer-name": void 0 },
                        LQi1ROGHJ: { "data-framer-name": `V2` },
                      },
                      T,
                      k
                    ),
                    children: c(x, {
                      animated: !0,
                      className: `framer-l2ogzv`,
                      Component: v,
                      layoutDependency: W,
                      layoutId: `OoD5NmJhX`,
                      style: {
                        "--14vpx0c": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                      },
                      variants: {
                        "LQi1ROGHJ-hover": {
                          "--14vpx0c": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                        },
                        "xjR29VZ0J-hover": {
                          "--14vpx0c": `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
                        },
                        LQi1ROGHJ: {
                          "--14vpx0c": `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
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
          `.framer-JHqxc.framer-19ll0fj, .framer-JHqxc .framer-19ll0fj { display: block; }`,
          `.framer-JHqxc.framer-5xtar2 { cursor: pointer; height: 24px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 24px; }`,
          `.framer-JHqxc .framer-l2ogzv { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); left: 0px; position: absolute; right: 0px; top: 0px; width: calc(100% - 0px); }`,
        ],
        `framer-JHqxc`
      )),
      (U = H),
      (H.displayName = `Social Icon`),
      (H.defaultProps = { height: 24, width: 24 }),
      v(H, {
        variant: {
          options: [`xjR29VZ0J`, `LQi1ROGHJ`],
          optionTitles: [`Icon`, `V2`],
          title: `Variant`,
          type: S.Enum,
        },
        GzYCAQM8z: {
          defaultValue: {
            identifier: `local-module:vector/G4_C7sdRh:default`,
            moduleId: `j3tubPWjPHOl0S6JUfgi`,
          },
          setModuleId: `n4UzSUlaQxIL3JldCsez`,
          title: `Icon`,
          type: S.VectorSetItem,
        },
        swGSa9CnM: { title: `Link`, type: S.Link },
      }),
      _(H, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
export { A as i, W as n, k as r, U as t };
//# sourceMappingURL=NvSDu3rnD.CVPddLET.mjs.map
