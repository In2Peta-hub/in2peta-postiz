import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import {
  A as t,
  F as n,
  N as r,
  O as i,
  P as a,
  T as o,
  _ as s,
  b as c,
  j as l,
  l as u,
  s as d,
  u as f,
} from "./react.C83sJsFz.mjs";
import { E as p, a as m, r as h, t as g } from "./motion.DVY4-TFg.mjs";
import {
  A as _,
  Dt as v,
  E as y,
  Et as b,
  G as x,
  K as S,
  L as C,
  N as w,
  O as ee,
  P as T,
  Q as E,
  Tt as D,
  dt as te,
  g as O,
  i as k,
  j as A,
  k as j,
  kt as M,
  lt as N,
  m as P,
  o as F,
  q as I,
  yt as ne,
  z as L,
} from "./framer.CFqKih1k.mjs";
import { d as re, f as ie, l as ae, u as oe } from "./shared-lib.P4JA4aUc.mjs";
import { i as se, n as ce, r as le, t as ue } from "./kumYuXBDg.BDiDl76I.mjs";
import { i as de, r as fe } from "./v0GEiJsID.DbeCo17q.mjs";
import { i as pe, n as me, r as he, t as ge } from "./SUQaOk4ze.9vdOYSbE.mjs";
import { n as _e, t as ve } from "./BXLSbVJYa.DY9zsySh.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./cPVM1_Pc1.CsfRepwj.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./lWCsMyG06.CDHEYcI6.mjs";
function De({ direction: e, style: t }) {
  let n = y.current() === y.canvas,
    a = i(null),
    o = i(),
    s = e === `vertical` || e === `both`,
    c = e === `horizontal` || e === `both`;
  return (
    r(() => {
      if (n) return;
      let e = a.current?.parentElement?.parentElement;
      if (!e) return;
      let t = e.parentElement;
      if (!t) return;
      let r = () => {
        let n = e.getBoundingClientRect();
        (c && (t.style.width = `${n.width}px`),
          s && (t.style.height = `${n.height}px`),
          (o.current = requestAnimationFrame(r)));
      };
      return (
        (o.current = requestAnimationFrame(r)),
        () => {
          (o.current && cancelAnimationFrame(o.current),
            t && (c && (t.style.width = ``), s && (t.style.height = ``)));
        }
      );
    }, [e]),
    u(`div`, { ref: a, style: { ...t } })
  );
}
var Oe = e(() => {
    (d(),
      E(),
      o(),
      (De.displayName = `Layout Jump Preventer`),
      T(De, {
        direction: {
          type: F.Enum,
          defaultValue: `vertical`,
          options: [`vertical`, `horizontal`, `both`],
          optionTitles: [`Vertical`, `Horizontal`, `Both`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          optionIcons: [`direction-vertical`, `direction-horizontal`, `direction-all`],
          description: `More components at [Framer University](https://frameruni.link/cc).`,
        },
      }));
  }),
  ke,
  Ae,
  je,
  R,
  Me,
  Ne = e(() => {
    (d(),
      E(),
      o(),
      (ke = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 37" xmlns="http://www.w3.org/2000/svg"><path d="M 8.333 16.667 L 0 8.333 L 8.333 0" fill="transparent" height="16.666666666666657px" id="qTU5g_rC6" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.33" stroke="var(--14vpx0c, var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)))" transform="translate(15 10.167) rotate(90 4.167 8.333)" width="8.333333333333314px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ae = s((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? u(p.div, { ...a, layoutId: r, ref: t }) : u(`div`, { ...a, ref: t });
      })),
      (je = ({ fillColor: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        fWdNChV6U:
          e ??
          i.fWdNChV6U ??
          `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))`,
      })),
      (R = v(
        s(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, fWdNChV6U: o, ...s } = je(e);
          return u(Ae, {
            ...s,
            className: C(`framer-GHg2i`, r),
            layoutId: i,
            ref: t,
            style: { "--14vpx0c": o, ...n },
          });
        }),
        [
          `.framer-GHg2i { -webkit-mask: ${ke}; aspect-ratio: 1.0810810810810811; background-color: var(--14vpx0c); mask: ${ke}; width: 40px; }`,
        ],
        `framer-GHg2i`
      )),
      (R.displayName = `Up Arrow`),
      (Me = R),
      T(R, {
        fWdNChV6U: {
          defaultValue: `var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16)) /* {"name":"Brand"} */`,
          hidden: !1,
          title: `Fill Color`,
          type: F.Color,
        },
      }));
  });
function Pe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  z,
  B,
  We = e(() => {
    (d(),
      E(),
      g(),
      o(),
      se(),
      pe(),
      de(),
      Ne(),
      (Fe = [`nbRdJdZAk`, `qFwK8jg5o`]),
      (Ie = `framer-sKYPW`),
      (Le = { nbRdJdZAk: `framer-v-7p4bna`, qFwK8jg5o: `framer-v-jz9mps` }),
      (Re = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ze = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(m.Provider, { value: a, children: n });
      }),
      (Be = { "Open ": `qFwK8jg5o`, Close: `nbRdJdZAk` }),
      (Ve = p.create(a)),
      (He = ({ answer: e, click: t, height: n, id: r, question: i, width: a, ...o }) => ({
        ...o,
        i0Jv4uh2Q:
          e ??
          o.i0Jv4uh2Q ??
          `Scalora is a unified business platform that combines CRM, marketing, documentation, and automation into one connected ecosystem. Instead of managing multiple tools, you run everything from a single scalable system.`,
        Ml_iLqjsK: t ?? o.Ml_iLqjsK,
        TRFpLAqKz: i ?? o.TRFpLAqKz ?? `What is Scalora exactly?`,
        variant: Be[o.variant] ?? o.variant ?? `nbRdJdZAk`,
      })),
      (Ue = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = v(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            o = c(),
            { activeLocale: s, setLocale: l } = ne();
          te();
          let {
              style: d,
              className: m,
              layoutId: g,
              variant: _,
              TRFpLAqKz: v,
              i0Jv4uh2Q: y,
              Ml_iLqjsK: x,
              ...S
            } = He(e),
            {
              baseVariant: w,
              classNames: ee,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: k,
              setGestureState: A,
              setVariant: M,
              variants: P,
            } = b({
              cycleOrder: Fe,
              defaultVariant: `nbRdJdZAk`,
              ref: r,
              variant: _,
              variantClassNames: Le,
            }),
            F = Ue(e, P),
            { activeVariantCallback: I, delay: L } = N(w),
            re = I(async (...e) => {
              if ((A({ isPressed: !1 }), x && (await x(...e)) === !1)) return !1;
              M(`qFwK8jg5o`);
            }),
            ie = I(async (...e) => {
              if ((A({ isPressed: !1 }), x && (await x(...e)) === !1)) return !1;
              M(`nbRdJdZAk`);
            }),
            ae = C(Ie, ge, ue),
            oe = () => w === `qFwK8jg5o`;
          return u(h, {
            id: g ?? o,
            children: u(Ve, {
              animate: P,
              initial: !1,
              children: u(ze, {
                value: Re,
                children: f(p.div, {
                  ...S,
                  ...E,
                  className: C(ae, `framer-7p4bna`, m, ee),
                  "data-border": !0,
                  "data-framer-name": `Close`,
                  "data-highlight": !0,
                  layoutDependency: F,
                  layoutId: `nbRdJdZAk`,
                  onTap: re,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...d,
                  },
                  variants: {
                    qFwK8jg5o: {
                      backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                    },
                  },
                  ...Pe({ qFwK8jg5o: { "data-framer-name": `Open `, onTap: ie } }, w, D),
                  children: [
                    f(p.div, {
                      className: `framer-1mb3ib9`,
                      layoutDependency: F,
                      layoutId: `WU0qJLTu7`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `rgba(0, 0, 0, 0)`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                      },
                      variants: {
                        qFwK8jg5o: {
                          "--border-bottom-width": `1px`,
                          "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                      },
                      ...Pe({ qFwK8jg5o: { "data-border": !0 } }, w, D),
                      children: [
                        u(j, {
                          __fromCanvasComponent: !0,
                          children: u(a, {
                            children: u(p.h6, {
                              className: `framer-styles-preset-11qazq0`,
                              "data-styles-preset": `SUQaOk4ze`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                              },
                              children: `What is Scalora exactly?`,
                            }),
                          }),
                          className: `framer-t2ilal`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `L6F6fwomU`,
                          style: {
                            "--extracted-1w1cjl5": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        u(p.div, {
                          className: `framer-17dw620`,
                          "data-border": !0,
                          layoutDependency: F,
                          layoutId: `iGl3DVAc2`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                            "--border-left-width": `1px`,
                            "--border-right-width": `1px`,
                            "--border-style": `solid`,
                            "--border-top-width": `1px`,
                            backgroundColor: `var(--token-2d9c1d48-e53b-48be-b7ac-45880481ffdc, rgb(27, 26, 25))`,
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius: 40,
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                          },
                          children: u(O, {
                            animated: !0,
                            className: `framer-rwhjws`,
                            Component: fe,
                            layoutDependency: F,
                            layoutId: `onsr3PbYx`,
                            style: {
                              "--14vpx0c": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                            },
                            ...Pe({ qFwK8jg5o: { Component: Me } }, w, D),
                          }),
                        }),
                      ],
                    }),
                    oe() &&
                      u(j, {
                        __fromCanvasComponent: !0,
                        children: u(a, {
                          children: u(p.p, {
                            className: `framer-styles-preset-i5ktzk`,
                            "data-styles-preset": `kumYuXBDg`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174)))`,
                            },
                            children: `Scalora is a unified business platform that combines CRM, marketing, documentation, and automation into one connected ecosystem. Instead of managing multiple tools, you run everything from a single scalable system.`,
                          }),
                        }),
                        className: `framer-11ajz33`,
                        fonts: [`Inter`],
                        layoutDependency: F,
                        layoutId: `NuIvrTnHB`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-9e8ea393-7c3a-4907-88ad-70f5503b29b1, rgb(178, 176, 174))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: y,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-sKYPW.framer-1zocve, .framer-sKYPW .framer-1zocve { display: block; }`,
          `.framer-sKYPW.framer-7p4bna { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px 24px 20px 24px; position: relative; width: 469px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-sKYPW .framer-1mb3ib9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-sKYPW .framer-t2ilal { --framer-text-wrap-override: balance; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-sKYPW .framer-17dw620 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 7px 6px 7px 6px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-sKYPW .framer-rwhjws { aspect-ratio: 1.1111111111111112 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; width: 20px; }`,
          `.framer-sKYPW .framer-11ajz33 { flex: none; height: auto; max-width: 480px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-sKYPW.framer-v-jz9mps .framer-1mb3ib9 { padding: 0px 0px 16px 0px; }`,
          ...me,
          ...ce,
          `.framer-sKYPW[data-border="true"]::after, .framer-sKYPW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-sKYPW`
      )),
      (B = z),
      (z.displayName = `FAQ Card`),
      (z.defaultProps = { height: 72, width: 469 }),
      T(z, {
        variant: {
          options: [`nbRdJdZAk`, `qFwK8jg5o`],
          optionTitles: [`Close`, `Open `],
          title: `Variant`,
          type: F.Enum,
        },
        TRFpLAqKz: {
          defaultValue: `What is Scalora exactly?`,
          displayTextArea: !1,
          title: `Question`,
          type: F.String,
        },
        onTRFpLAqKzChange: { changes: `TRFpLAqKz`, type: F.ChangeHandler },
        i0Jv4uh2Q: {
          defaultValue: `Scalora is a unified business platform that combines CRM, marketing, documentation, and automation into one connected ecosystem. Instead of managing multiple tools, you run everything from a single scalable system.`,
          displayTextArea: !0,
          title: `Answer`,
          type: F.String,
        },
        oni0Jv4uh2QChange: { changes: `i0Jv4uh2Q`, type: F.ChangeHandler },
        Ml_iLqjsK: { title: `Click`, type: F.EventHandler },
      }),
      w(
        z,
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
          ...S(he),
          ...S(le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function V(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  H,
  Ze,
  Qe,
  $e,
  U,
  et,
  tt,
  W,
  G,
  nt = e(() => {
    (d(),
      E(),
      g(),
      o(),
      Oe(),
      We(),
      (Ge = x(B)),
      (Ke = x(De)),
      (qe = [`ftJavOiTy`, `jAv4VEgQ5`]),
      (Je = `framer-OefQO`),
      (Ye = { ftJavOiTy: `framer-v-722lwp`, jAv4VEgQ5: `framer-v-1r3v6i7` }),
      (Xe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ze = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(m.Provider, { value: a, children: n });
      }),
      (Qe = { "Tablet/Phone": `jAv4VEgQ5`, Desktop: `ftJavOiTy` }),
      ($e = p.create(a)),
      (U = (e, t) => {
        let [r, i] = n(e),
          [a, o] = n(e);
        return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
      }),
      (et = ({
        answer1: e,
        answer10: t,
        answer2: n,
        answer3: r,
        answer4: i,
        answer5: a,
        answer6: o,
        answer7: s,
        answer8: c,
        answer9: l,
        height: u,
        id: d,
        question1: f,
        question10: p,
        question2: m,
        question3: h,
        question4: g,
        question5: _,
        question6: v,
        question7: y,
        question8: b,
        question9: x,
        width: S,
        ...C
      }) => ({
        ...C,
        BVVYy3aAq: m ?? C.BVVYy3aAq ?? `Who is Scalora built for?`,
        dGK6jQQ77: f ?? C.dGK6jQQ77 ?? `What is Scalora exactly?`,
        dmvX0l3FO:
          r ??
          C.dmvX0l3FO ??
          `Yes. You can import audiences, assets, and historical performance data via CSV or connected accounts, then map workflows so your team switches with minimal downtime.`,
        dNT9DaPzP:
          n ??
          C.dNT9DaPzP ??
          `Scalora is built for startups, agencies, and in-house teams who manage multiple channels and need consistent content, analytics, and automation without complexity today.`,
        eLa74Nugg:
          a ??
          C.eLa74Nugg ??
          `We use encryption in transit and at rest, role-based access, audit logs, and regular security reviews to protect your data and maintain compliance.`,
        Fi0o56m9a: g ?? C.Fi0o56m9a ?? `Does Scalora integrate with other software?`,
        H4jIE4pQW:
          l ??
          C.H4jIE4pQW ??
          `Yes. Assign roles, comment on assets, approve drafts, and track changes in real time. Shared calendars and tasks keep everyone aligned across projects.`,
        kAI95DY5w: _ ?? C.kAI95DY5w ?? `Is Scalora secure?`,
        PKpKzBpl6: v ?? C.PKpKzBpl6 ?? `How is Scalora priced?`,
        qIXkXhGAo:
          c ??
          C.qIXkXhGAo ??
          `It generates channel-ready copy and creatives, suggests audiences, predicts budget impact, and continuously tests variants, learning from performance to improve every campaign automatically.`,
        RM3WdOVtK:
          e ??
          C.RM3WdOVtK ??
          `Scalora is an AI-powered marketing workspace that plans, creates, and optimizes campaigns from one dashboard, turning data into clear actions and faster results.`,
        RM8vWSii7: b ?? C.RM8vWSii7 ?? `What can Scalora’s AI actually do?`,
        UQPQTLrRj:
          i ??
          C.UQPQTLrRj ??
          `Scalora integrates with popular ad platforms, email tools, CRMs, and analytics suites through native connectors and Zapier-style webhooks, keeping your stack in sync automatically.`,
        variant: Qe[C.variant] ?? C.variant ?? `ftJavOiTy`,
        vbu_r259n:
          o ??
          C.vbu_r259n ??
          `Scalora offers flexible plans based on seats and usage, starting with a starter tier for founders and scaling to enterprise needs as you grow.`,
        vcbeqVCGX:
          t ??
          C.vcbeqVCGX ??
          `Your data stays yours. Export reports, creatives, and contacts anytime, and disconnect integrations instantly. We provide clear retention controls and deletion options too. `,
        vLuRLj95P: x ?? C.vLuRLj95P ?? `Can my team collaborate in Scalora?`,
        WfPQs98_F: p ?? C.WfPQs98_F ?? `Do we own our data and can we export it?`,
        woRcdhsrg: y ?? C.woRcdhsrg ?? `What onboarding and support do we get?`,
        xjXdrstjG:
          s ??
          C.xjXdrstjG ??
          `You’ll get guided setup, template libraries, and in-app tutorials, plus email and live chat support. Higher plans include dedicated success check-ins monthly calls.`,
        ZPhLmN0jR: h ?? C.ZPhLmN0jR ?? `Can we migrate from our current tools?`,
      })),
      (tt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = v(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = c(),
            { activeLocale: o, setLocale: s } = ne(),
            l = te(),
            {
              style: d,
              className: m,
              layoutId: g,
              variant: _,
              dGK6jQQ77: v,
              ondGK6jQQ77Change: y,
              RM3WdOVtK: x,
              onRM3WdOVtKChange: S,
              BVVYy3aAq: w,
              onBVVYy3aAqChange: ee,
              dNT9DaPzP: T,
              ondNT9DaPzPChange: E,
              ZPhLmN0jR: D,
              onZPhLmN0jRChange: O,
              dmvX0l3FO: j,
              ondmvX0l3FOChange: M,
              Fi0o56m9a: N,
              onFi0o56m9aChange: P,
              UQPQTLrRj: F,
              onUQPQTLrRjChange: I,
              kAI95DY5w: L,
              onkAI95DY5wChange: re,
              eLa74Nugg: ie,
              oneLa74NuggChange: ae,
              PKpKzBpl6: oe,
              onPKpKzBpl6Change: se,
              vbu_r259n: ce,
              onvbu_r259nChange: le,
              woRcdhsrg: ue,
              onwoRcdhsrgChange: de,
              xjXdrstjG: fe,
              onxjXdrstjGChange: pe,
              RM8vWSii7: me,
              onRM8vWSii7Change: he,
              qIXkXhGAo: ge,
              onqIXkXhGAoChange: _e,
              vLuRLj95P: ve,
              onvLuRLj95PChange: ye,
              H4jIE4pQW: be,
              onH4jIE4pQWChange: xe,
              WfPQs98_F: Se,
              onWfPQs98_FChange: Ce,
              vcbeqVCGX: we,
              onvcbeqVCGXChange: Te,
              ...Ee
            } = et(e),
            [Oe, ke] = U(v, y),
            [Ae, je] = U(x, S),
            [R, Me] = U(w, ee),
            [Ne, Pe] = U(T, E),
            [Fe, Ie] = U(D, O),
            [Le, Re] = U(j, M),
            [ze, Be] = U(N, P),
            [Ve, He] = U(F, I),
            [Ue, z] = U(L, re),
            [We, Ge] = U(ie, ae),
            [Ke, Qe] = U(oe, se),
            [W, G] = U(ce, le),
            [nt, K] = U(ue, de),
            [rt, it] = U(fe, pe),
            [at, ot] = U(me, he),
            [st, ct] = U(ge, _e),
            [lt, ut] = U(ve, ye),
            [dt, ft] = U(be, xe),
            [q, pt] = U(Se, Ce),
            [mt, ht] = U(we, Te),
            {
              baseVariant: J,
              classNames: gt,
              clearLoadingGesture: _t,
              gestureHandlers: Y,
              gestureVariant: X,
              isLoading: vt,
              setGestureState: yt,
              setVariant: bt,
              variants: xt,
            } = b({
              cycleOrder: qe,
              defaultVariant: `ftJavOiTy`,
              ref: r,
              variant: _,
              variantClassNames: Ye,
            }),
            Z = tt(e, xt),
            St = C(Je);
          return u(h, {
            id: g ?? a,
            children: u($e, {
              animate: xt,
              initial: !1,
              children: u(Ze, {
                value: Xe,
                children: f(p.div, {
                  ...Ee,
                  ...Y,
                  className: C(St, `framer-722lwp`, m, gt),
                  "data-framer-name": `Desktop`,
                  layoutDependency: Z,
                  layoutId: `ftJavOiTy`,
                  ref: r,
                  style: { ...d },
                  ...V({ jAv4VEgQ5: { "data-framer-name": `Tablet/Phone` } }, J, X),
                  children: [
                    f(p.div, {
                      className: `framer-1oljy08`,
                      layoutDependency: Z,
                      layoutId: `j2xHr0Xyo`,
                      children: [
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 0,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 0 + 12 + 0,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-1gl6uu-container`,
                            layoutDependency: Z,
                            layoutId: `GuWko2QxY-container`,
                            nodeId: `GuWko2QxY`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: Ae,
                              id: `GuWko2QxY`,
                              layoutId: `GuWko2QxY`,
                              oni0Jv4uh2QChange: je,
                              onTRFpLAqKzChange: ke,
                              style: { width: `100%` },
                              TRFpLAqKz: Oe,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 88,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 0 + 12 + 88,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-1m95kbf-container`,
                            layoutDependency: Z,
                            layoutId: `lERLIsLLw-container`,
                            nodeId: `lERLIsLLw`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: Ne,
                              id: `lERLIsLLw`,
                              layoutId: `lERLIsLLw`,
                              oni0Jv4uh2QChange: Pe,
                              onTRFpLAqKzChange: Me,
                              style: { width: `100%` },
                              TRFpLAqKz: R,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 176,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 0 + 12 + 176,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-nb5l91-container`,
                            layoutDependency: Z,
                            layoutId: `gMHPrSn1m-container`,
                            nodeId: `gMHPrSn1m`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: Le,
                              id: `gMHPrSn1m`,
                              layoutId: `gMHPrSn1m`,
                              oni0Jv4uh2QChange: Re,
                              onTRFpLAqKzChange: Ie,
                              style: { width: `100%` },
                              TRFpLAqKz: Fe,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 264,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 0 + 12 + 264,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-1mx1bbu-container`,
                            layoutDependency: Z,
                            layoutId: `OWvIwC48U-container`,
                            nodeId: `OWvIwC48U`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: Ve,
                              id: `OWvIwC48U`,
                              layoutId: `OWvIwC48U`,
                              oni0Jv4uh2QChange: He,
                              onTRFpLAqKzChange: Be,
                              style: { width: `100%` },
                              TRFpLAqKz: ze,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 352,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 0 + 12 + 352,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-pexggw-container`,
                            layoutDependency: Z,
                            layoutId: `XGS1_1wup-container`,
                            nodeId: `XGS1_1wup`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: We,
                              id: `XGS1_1wup`,
                              layoutId: `XGS1_1wup`,
                              oni0Jv4uh2QChange: Ge,
                              onTRFpLAqKzChange: z,
                              style: { width: `100%` },
                              TRFpLAqKz: Ue,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    u(p.div, {
                      className: `framer-1v464qs`,
                      "data-framer-name": `Line`,
                      layoutDependency: Z,
                      layoutId: `FB43nHHy3`,
                      style: {
                        backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                      },
                    }),
                    f(p.div, {
                      className: `framer-19669ng`,
                      layoutDependency: Z,
                      layoutId: `ztdwpJfDS`,
                      children: [
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 0,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 449 + 12 + 0,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-z1boy0-container`,
                            layoutDependency: Z,
                            layoutId: `KG3HjDKY3-container`,
                            nodeId: `KG3HjDKY3`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: W,
                              id: `KG3HjDKY3`,
                              layoutId: `KG3HjDKY3`,
                              oni0Jv4uh2QChange: G,
                              onTRFpLAqKzChange: Qe,
                              style: { width: `100%` },
                              TRFpLAqKz: Ke,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 88,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 449 + 12 + 88,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-1mxtiyv-container`,
                            layoutDependency: Z,
                            layoutId: `tIDKAOtGJ-container`,
                            nodeId: `tIDKAOtGJ`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: rt,
                              id: `tIDKAOtGJ`,
                              layoutId: `tIDKAOtGJ`,
                              oni0Jv4uh2QChange: it,
                              onTRFpLAqKzChange: K,
                              style: { width: `100%` },
                              TRFpLAqKz: nt,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 176,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 449 + 12 + 176,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-1qrybht-container`,
                            layoutDependency: Z,
                            layoutId: `Tx8S02Oae-container`,
                            nodeId: `Tx8S02Oae`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: st,
                              id: `Tx8S02Oae`,
                              layoutId: `Tx8S02Oae`,
                              oni0Jv4uh2QChange: ct,
                              onTRFpLAqKzChange: ot,
                              style: { width: `100%` },
                              TRFpLAqKz: at,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 264,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 449 + 12 + 264,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-73vtp4-container`,
                            layoutDependency: Z,
                            layoutId: `CJy2fSfai-container`,
                            nodeId: `CJy2fSfai`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: dt,
                              id: `CJy2fSfai`,
                              layoutId: `CJy2fSfai`,
                              oni0Jv4uh2QChange: ft,
                              onTRFpLAqKzChange: ut,
                              style: { width: `100%` },
                              TRFpLAqKz: lt,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(k, {
                          height: 72,
                          width: `calc(max((${l?.width || `100vw`} - 1px) / 2, 1px) - 48px)`,
                          y: (l?.y || 0) + 0 + 24 + 352,
                          ...V(
                            {
                              jAv4VEgQ5: {
                                width: `calc(${l?.width || `100vw`} - 24px)`,
                                y: (l?.y || 0) + 0 + 449 + 12 + 352,
                              },
                            },
                            J,
                            X
                          ),
                          children: u(A, {
                            className: `framer-1358kdp-container`,
                            layoutDependency: Z,
                            layoutId: `jmQPpDMKW-container`,
                            nodeId: `jmQPpDMKW`,
                            rendersWithMotion: !0,
                            scopeId: `p7wz88b3P`,
                            children: u(B, {
                              height: `100%`,
                              i0Jv4uh2Q: mt,
                              id: `jmQPpDMKW`,
                              layoutId: `jmQPpDMKW`,
                              oni0Jv4uh2QChange: ht,
                              onTRFpLAqKzChange: pt,
                              style: { width: `100%` },
                              TRFpLAqKz: q,
                              variant: H(`nbRdJdZAk`),
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                    u(k, {
                      children: u(A, {
                        className: `framer-1e20knk-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: Z,
                        layoutId: `TrR_g6JUM-container`,
                        nodeId: `TrR_g6JUM`,
                        rendersWithMotion: !0,
                        scopeId: `p7wz88b3P`,
                        children: u(De, {
                          direction: `vertical`,
                          height: `100%`,
                          id: `TrR_g6JUM`,
                          layoutId: `TrR_g6JUM`,
                          width: `100%`,
                        }),
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
          `.framer-OefQO.framer-17dq9fl, .framer-OefQO .framer-17dq9fl { display: block; }`,
          `.framer-OefQO.framer-722lwp { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1280px; }`,
          `.framer-OefQO .framer-1oljy08, .framer-OefQO .framer-19669ng { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 1px; }`,
          `.framer-OefQO .framer-1gl6uu-container, .framer-OefQO .framer-1m95kbf-container, .framer-OefQO .framer-nb5l91-container, .framer-OefQO .framer-1mx1bbu-container, .framer-OefQO .framer-pexggw-container, .framer-OefQO .framer-z1boy0-container, .framer-OefQO .framer-1mxtiyv-container, .framer-OefQO .framer-1qrybht-container, .framer-OefQO .framer-73vtp4-container, .framer-OefQO .framer-1358kdp-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-OefQO .framer-1v464qs { align-self: stretch; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
          `.framer-OefQO .framer-1e20knk-container { bottom: 0px; flex: none; height: 10px; left: calc(45.079365079365104% - 106px / 2); position: absolute; width: 106px; z-index: 1; }`,
          `.framer-OefQO.framer-v-1r3v6i7.framer-722lwp { flex-direction: column; }`,
          `.framer-OefQO.framer-v-1r3v6i7 .framer-1oljy08, .framer-OefQO.framer-v-1r3v6i7 .framer-19669ng { flex: none; padding: 12px; width: 100%; }`,
          `.framer-OefQO.framer-v-1r3v6i7 .framer-1v464qs { align-self: unset; height: 1px; width: 100%; }`,
        ],
        `framer-OefQO`
      )),
      (G = W),
      (W.displayName = `FAQ Section`),
      (W.defaultProps = { height: 472, width: 1280 }),
      T(W, {
        variant: {
          options: [`ftJavOiTy`, `jAv4VEgQ5`],
          optionTitles: [`Desktop`, `Tablet/Phone`],
          title: `Variant`,
          type: F.Enum,
        },
        dGK6jQQ77: {
          defaultValue: `What is Scalora exactly?`,
          displayTextArea: !1,
          title: `Question 1`,
          type: F.String,
        },
        ondGK6jQQ77Change: { changes: `dGK6jQQ77`, type: F.ChangeHandler },
        RM3WdOVtK: {
          defaultValue: `Scalora is an AI-powered marketing workspace that plans, creates, and optimizes campaigns from one dashboard, turning data into clear actions and faster results.`,
          displayTextArea: !0,
          title: `Answer 1`,
          type: F.String,
        },
        onRM3WdOVtKChange: { changes: `RM3WdOVtK`, type: F.ChangeHandler },
        BVVYy3aAq: {
          defaultValue: `Who is Scalora built for?`,
          displayTextArea: !1,
          title: `Question 2`,
          type: F.String,
        },
        onBVVYy3aAqChange: { changes: `BVVYy3aAq`, type: F.ChangeHandler },
        dNT9DaPzP: {
          defaultValue: `Scalora is built for startups, agencies, and in-house teams who manage multiple channels and need consistent content, analytics, and automation without complexity today.`,
          displayTextArea: !0,
          title: `Answer 2`,
          type: F.String,
        },
        ondNT9DaPzPChange: { changes: `dNT9DaPzP`, type: F.ChangeHandler },
        ZPhLmN0jR: {
          defaultValue: `Can we migrate from our current tools?`,
          displayTextArea: !1,
          title: `Question 3`,
          type: F.String,
        },
        onZPhLmN0jRChange: { changes: `ZPhLmN0jR`, type: F.ChangeHandler },
        dmvX0l3FO: {
          defaultValue: `Yes. You can import audiences, assets, and historical performance data via CSV or connected accounts, then map workflows so your team switches with minimal downtime.`,
          displayTextArea: !0,
          title: `Answer 3`,
          type: F.String,
        },
        ondmvX0l3FOChange: { changes: `dmvX0l3FO`, type: F.ChangeHandler },
        Fi0o56m9a: {
          defaultValue: `Does Scalora integrate with other software?`,
          displayTextArea: !1,
          title: `Question 4`,
          type: F.String,
        },
        onFi0o56m9aChange: { changes: `Fi0o56m9a`, type: F.ChangeHandler },
        UQPQTLrRj: {
          defaultValue: `Scalora integrates with popular ad platforms, email tools, CRMs, and analytics suites through native connectors and Zapier-style webhooks, keeping your stack in sync automatically.`,
          displayTextArea: !0,
          title: `Answer 4`,
          type: F.String,
        },
        onUQPQTLrRjChange: { changes: `UQPQTLrRj`, type: F.ChangeHandler },
        kAI95DY5w: {
          defaultValue: `Is Scalora secure?`,
          displayTextArea: !1,
          title: `Question 5`,
          type: F.String,
        },
        onkAI95DY5wChange: { changes: `kAI95DY5w`, type: F.ChangeHandler },
        eLa74Nugg: {
          defaultValue: `We use encryption in transit and at rest, role-based access, audit logs, and regular security reviews to protect your data and maintain compliance.`,
          displayTextArea: !0,
          title: `Answer 5`,
          type: F.String,
        },
        oneLa74NuggChange: { changes: `eLa74Nugg`, type: F.ChangeHandler },
        PKpKzBpl6: {
          defaultValue: `How is Scalora priced?`,
          displayTextArea: !1,
          title: `Question 6`,
          type: F.String,
        },
        onPKpKzBpl6Change: { changes: `PKpKzBpl6`, type: F.ChangeHandler },
        vbu_r259n: {
          defaultValue: `Scalora offers flexible plans based on seats and usage, starting with a starter tier for founders and scaling to enterprise needs as you grow.`,
          displayTextArea: !0,
          title: `Answer 6`,
          type: F.String,
        },
        onvbu_r259nChange: { changes: `vbu_r259n`, type: F.ChangeHandler },
        woRcdhsrg: {
          defaultValue: `What onboarding and support do we get?`,
          displayTextArea: !1,
          title: `Question 7`,
          type: F.String,
        },
        onwoRcdhsrgChange: { changes: `woRcdhsrg`, type: F.ChangeHandler },
        xjXdrstjG: {
          defaultValue: `You’ll get guided setup, template libraries, and in-app tutorials, plus email and live chat support. Higher plans include dedicated success check-ins monthly calls.`,
          displayTextArea: !0,
          title: `Answer 7`,
          type: F.String,
        },
        onxjXdrstjGChange: { changes: `xjXdrstjG`, type: F.ChangeHandler },
        RM8vWSii7: {
          defaultValue: `What can Scalora’s AI actually do?`,
          displayTextArea: !1,
          title: `Question 8`,
          type: F.String,
        },
        onRM8vWSii7Change: { changes: `RM8vWSii7`, type: F.ChangeHandler },
        qIXkXhGAo: {
          defaultValue: `It generates channel-ready copy and creatives, suggests audiences, predicts budget impact, and continuously tests variants, learning from performance to improve every campaign automatically.`,
          displayTextArea: !0,
          title: `Answer 8`,
          type: F.String,
        },
        onqIXkXhGAoChange: { changes: `qIXkXhGAo`, type: F.ChangeHandler },
        vLuRLj95P: {
          defaultValue: `Can my team collaborate in Scalora?`,
          displayTextArea: !1,
          title: `Question 9`,
          type: F.String,
        },
        onvLuRLj95PChange: { changes: `vLuRLj95P`, type: F.ChangeHandler },
        H4jIE4pQW: {
          defaultValue: `Yes. Assign roles, comment on assets, approve drafts, and track changes in real time. Shared calendars and tasks keep everyone aligned across projects.`,
          displayTextArea: !0,
          title: `Answer 9`,
          type: F.String,
        },
        onH4jIE4pQWChange: { changes: `H4jIE4pQW`, type: F.ChangeHandler },
        WfPQs98_F: {
          defaultValue: `Do we own our data and can we export it?`,
          displayTextArea: !1,
          title: `Question 10`,
          type: F.String,
        },
        onWfPQs98_FChange: { changes: `WfPQs98_F`, type: F.ChangeHandler },
        vcbeqVCGX: {
          defaultValue: `Your data stays yours. Export reports, creatives, and contacts anytime, and disconnect integrations instantly. We provide clear retention controls and deletion options too. `,
          displayTextArea: !0,
          title: `Answer 10`,
          type: F.String,
        },
        onvcbeqVCGXChange: { changes: `vcbeqVCGX`, type: F.ChangeHandler },
      }),
      w(W, [{ explicitInter: !0, fonts: [] }, ...Ge, ...Ke], { supportsExplicitInterCodegen: !0 }),
      (W.loader = { load: (e, t) => (t.locale, Promise.allSettled([L(B, {}, t)])) }));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  q,
  pt,
  mt,
  ht,
  J,
  gt,
  _t,
  Y,
  X,
  vt = e(() => {
    (d(),
      E(),
      g(),
      o(),
      ye(),
      Ce(),
      Ee(),
      nt(),
      (rt = x(we)),
      (it = M(p.div)),
      (at = x(G)),
      (ot = M(A)),
      (st = [`Nn0_sUYi2`, `eZeHfWXpY`, `eD1hZ1m9l`]),
      (ct = `framer-Nezw8`),
      (lt = {
        eD1hZ1m9l: `framer-v-147vpwt`,
        eZeHfWXpY: `framer-v-kn8u8d`,
        Nn0_sUYi2: `framer-v-10szzkd`,
      }),
      (ut = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (dt = {
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
      (ft = { damping: 35, delay: 0, mass: 2, stiffness: 120, type: `spring` }),
      (q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (pt = { damping: 35, delay: 0.2, mass: 2, stiffness: 120, type: `spring` }),
      (mt = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(m.Provider, { value: a, children: n });
      }),
      (ht = { Desktop: `Nn0_sUYi2`, Phone: `eD1hZ1m9l`, Tablet: `eZeHfWXpY` }),
      (J = p.create(a)),
      (gt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ht[r.variant] ?? r.variant ?? `Nn0_sUYi2`,
      })),
      (_t = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = v(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            o = c(),
            { activeLocale: s, setLocale: l } = ne(),
            d = te(),
            { style: m, className: g, layoutId: _, variant: v, ...y } = gt(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: w,
              gestureHandlers: ee,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: M,
            } = b({
              cycleOrder: st,
              defaultVariant: `Nn0_sUYi2`,
              ref: r,
              variant: v,
              variantClassNames: lt,
            }),
            N = _t(e, M),
            P = C(ct, Se);
          return u(h, {
            id: _ ?? o,
            children: u(J, {
              animate: M,
              initial: !1,
              children: u(mt, {
                value: ut,
                children: u(p.section, {
                  ...y,
                  ...ee,
                  className: C(P, `framer-10szzkd`, g, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: N,
                  layoutId: `Nn0_sUYi2`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22))`,
                    ...m,
                  },
                  ...K(
                    {
                      eD1hZ1m9l: { "data-framer-name": `Phone` },
                      eZeHfWXpY: { "data-framer-name": `Tablet` },
                    },
                    x,
                    T
                  ),
                  children: f(p.div, {
                    className: `framer-4yh6p8`,
                    "data-framer-name": `Container`,
                    layoutDependency: N,
                    layoutId: `kCom2aSg_`,
                    children: [
                      f(it, {
                        __framer__animate: { transition: ft },
                        __framer__animateOnce: !0,
                        __framer__enter: dt,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0.5,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-umre6g`,
                        "data-framer-name": `Section Title`,
                        layoutDependency: N,
                        layoutId: `w4qKuW_qv`,
                        children: [
                          u(k, {
                            height: 28,
                            y:
                              (d?.y || 0) +
                              (100 + ((d?.height || 848) - 200 - 648) / 2) +
                              0 +
                              0 +
                              0 +
                              0,
                            ...K(
                              {
                                eD1hZ1m9l: {
                                  y:
                                    (d?.y || 0) +
                                    (60 + ((d?.height || 1357) - 120 - 610) / 2) +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                },
                                eZeHfWXpY: {
                                  y:
                                    (d?.y || 0) +
                                    (80 + ((d?.height || 1233) - 160 - 648) / 2) +
                                    0 +
                                    0 +
                                    0 +
                                    0,
                                },
                              },
                              x,
                              T
                            ),
                            children: u(A, {
                              className: `framer-1hdfelx-container`,
                              layoutDependency: N,
                              layoutId: `MPjVUp8B5-container`,
                              nodeId: `MPjVUp8B5`,
                              rendersWithMotion: !0,
                              scopeId: `GU5EKy25D`,
                              children: u(we, {
                                btyoXJXaz: Te,
                                height: `100%`,
                                id: `MPjVUp8B5`,
                                layoutId: `MPjVUp8B5`,
                                Selq1Epo8: `Questions and Answers`,
                                variant: q(`mXdNMwppf`),
                                width: `100%`,
                              }),
                            }),
                          }),
                          u(j, {
                            __fromCanvasComponent: !0,
                            children: u(a, {
                              children: u(p.h2, {
                                className: `framer-styles-preset-3yq5jl`,
                                "data-styles-preset": `cPVM1_Pc1`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                },
                                children: `Frequently asked questions`,
                              }),
                            }),
                            className: `framer-9kk1my`,
                            "data-framer-name": `Numbers that reflect real growth`,
                            fonts: [`Inter`],
                            layoutDependency: N,
                            layoutId: `MbTyQbyYJ`,
                            style: {
                              "--extracted-1of0zx5": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      f(p.div, {
                        className: `framer-h2kz1y`,
                        "data-framer-name": `Botton Content`,
                        layoutDependency: N,
                        layoutId: `dc1IbuAGk`,
                        children: [
                          u(k, {
                            height: 472,
                            width: `min(max(${d?.width || `100vw`} - 160px, 1px), 1280px)`,
                            y:
                              (d?.y || 0) +
                              (100 + ((d?.height || 848) - 200 - 648) / 2) +
                              0 +
                              176 +
                              0 +
                              0,
                            ...K(
                              {
                                eD1hZ1m9l: {
                                  width: `min(max(${d?.width || `100vw`} - 32px, 1px), 1280px)`,
                                  y:
                                    (d?.y || 0) +
                                    (60 + ((d?.height || 1357) - 120 - 610) / 2) +
                                    0 +
                                    138 +
                                    0 +
                                    0,
                                },
                                eZeHfWXpY: {
                                  width: `min(max(${d?.width || `100vw`} - 80px, 1px), 1280px)`,
                                  y:
                                    (d?.y || 0) +
                                    (80 + ((d?.height || 1233) - 160 - 648) / 2) +
                                    0 +
                                    176 +
                                    0 +
                                    0,
                                },
                              },
                              x,
                              T
                            ),
                            children: u(ot, {
                              __framer__animate: { transition: pt },
                              __framer__animateOnce: !0,
                              __framer__enter: dt,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              className: `framer-mixfhj-container`,
                              layoutDependency: N,
                              layoutId: `pCgFwqGaY-container`,
                              nodeId: `pCgFwqGaY`,
                              rendersWithMotion: !0,
                              scopeId: `GU5EKy25D`,
                              children: u(G, {
                                BVVYy3aAq: `Who is Scalora built for?`,
                                dGK6jQQ77: `What is Scalora exactly?`,
                                dmvX0l3FO: `Yes. You can import audiences, assets, and historical performance data via CSV or connected accounts, then map workflows so your team switches with minimal downtime.`,
                                dNT9DaPzP: `Scalora is built for startups, agencies, and in-house teams who manage multiple channels and need consistent content, analytics, and automation without complexity today.`,
                                eLa74Nugg: `We use encryption in transit and at rest, role-based access, audit logs, and regular security reviews to protect your data and maintain compliance.`,
                                Fi0o56m9a: `Does Scalora integrate with other software?`,
                                H4jIE4pQW: `Yes. Assign roles, comment on assets, approve drafts, and track changes in real time. Shared calendars and tasks keep everyone aligned across projects.`,
                                height: `100%`,
                                id: `pCgFwqGaY`,
                                kAI95DY5w: `Is Scalora secure?`,
                                layoutId: `pCgFwqGaY`,
                                PKpKzBpl6: `How is Scalora priced?`,
                                qIXkXhGAo: `It generates channel-ready copy and creatives, suggests audiences, predicts budget impact, and continuously tests variants, learning from performance to improve every campaign automatically.`,
                                RM3WdOVtK: `Scalora is an AI-powered marketing workspace that plans, creates, and optimizes campaigns from one dashboard, turning data into clear actions and faster results.`,
                                RM8vWSii7: `What can Scalora’s AI actually do?`,
                                style: { width: `100%` },
                                UQPQTLrRj: `Scalora integrates with popular ad platforms, email tools, CRMs, and analytics suites through native connectors and Zapier-style webhooks, keeping your stack in sync automatically.`,
                                variant: q(`ftJavOiTy`),
                                vbu_r259n: `Scalora offers flexible plans based on seats and usage, starting with a starter tier for founders and scaling to enterprise needs as you grow.`,
                                vcbeqVCGX: `Your data stays yours. Export reports, creatives, and contacts anytime, and disconnect integrations instantly. We provide clear retention controls and deletion options too. `,
                                vLuRLj95P: `Can my team collaborate in Scalora?`,
                                WfPQs98_F: `Do we own our data and can we export it?`,
                                width: `100%`,
                                woRcdhsrg: `What onboarding and support do we get?`,
                                xjXdrstjG: `You’ll get guided setup, template libraries, and in-app tutorials, plus email and live chat support. Higher plans include dedicated success check-ins monthly calls.`,
                                ZPhLmN0jR: `Can we migrate from our current tools?`,
                                ...K(
                                  {
                                    eD1hZ1m9l: { variant: q(`jAv4VEgQ5`) },
                                    eZeHfWXpY: { variant: q(`jAv4VEgQ5`) },
                                  },
                                  x,
                                  T
                                ),
                              }),
                            }),
                          }),
                          u(p.div, {
                            className: `framer-2s51lt`,
                            "data-framer-name": `Top Line`,
                            layoutDependency: N,
                            layoutId: `KpXsgk5eA`,
                            style: {
                              background: `linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                            },
                          }),
                          u(p.div, {
                            className: `framer-1t1mi4u`,
                            "data-framer-name": `Box 1`,
                            layoutDependency: N,
                            layoutId: `sTR4oIGsK`,
                            style: {
                              backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                              borderBottomLeftRadius: 2,
                              borderBottomRightRadius: 2,
                              borderTopLeftRadius: 2,
                              borderTopRightRadius: 2,
                            },
                            variants: {
                              eD1hZ1m9l: {
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                            },
                          }),
                          u(p.div, {
                            className: `framer-cgdgej`,
                            "data-framer-name": `Bottom line`,
                            layoutDependency: N,
                            layoutId: `BSVZhdjSw`,
                            style: {
                              background: `linear-gradient(270deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 8.558558558558559%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 50.45045045045045%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 91.44144144144144%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                            },
                          }),
                          u(p.div, {
                            className: `framer-gmf50v`,
                            "data-framer-name": `Box 2`,
                            layoutDependency: N,
                            layoutId: `QnWagvLJ7`,
                            style: {
                              backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                              borderBottomLeftRadius: 2,
                              borderBottomRightRadius: 2,
                              borderTopLeftRadius: 2,
                              borderTopRightRadius: 2,
                            },
                            variants: {
                              eD1hZ1m9l: {
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                            },
                          }),
                          u(p.div, {
                            className: `framer-2ve5nw`,
                            "data-framer-name": `Box 4`,
                            layoutDependency: N,
                            layoutId: `DmLy_ey5a`,
                            style: {
                              backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                              borderBottomLeftRadius: 2,
                              borderBottomRightRadius: 2,
                              borderTopLeftRadius: 2,
                              borderTopRightRadius: 2,
                            },
                            variants: {
                              eD1hZ1m9l: {
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                            },
                          }),
                          u(p.div, {
                            className: `framer-11tpx93`,
                            "data-framer-name": `Box 3`,
                            layoutDependency: N,
                            layoutId: `D8Wmyyr3N`,
                            style: {
                              backgroundColor: `var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42))`,
                              borderBottomLeftRadius: 2,
                              borderBottomRightRadius: 2,
                              borderTopLeftRadius: 2,
                              borderTopRightRadius: 2,
                            },
                            variants: {
                              eD1hZ1m9l: {
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                            },
                          }),
                          u(p.div, {
                            className: `framer-f4eupu`,
                            "data-framer-name": `Left Line`,
                            layoutDependency: N,
                            layoutId: `TKL528nsM`,
                            style: {
                              background: `linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                            },
                          }),
                          u(p.div, {
                            className: `framer-1d0xg2j`,
                            "data-framer-name": `Right Line`,
                            layoutDependency: N,
                            layoutId: `KNNqOan6I`,
                            style: {
                              background: `linear-gradient(180deg, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 0%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 22.52252252252252%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 45.94594594594595%, var(--token-2b0d8f2d-439e-44cb-910c-59aa7fb6222c, rgb(47, 43, 42)) 81.08108108108108%, var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22)) 100%)`,
                            },
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
          `.framer-Nezw8.framer-1wkfxkp, .framer-Nezw8 .framer-1wkfxkp { display: block; }`,
          `.framer-Nezw8.framer-10szzkd { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 80px 100px 80px; position: relative; width: 1440px; }`,
          `.framer-Nezw8 .framer-4yh6p8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-Nezw8 .framer-umre6g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Nezw8 .framer-1hdfelx-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-Nezw8 .framer-9kk1my { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Nezw8 .framer-h2kz1y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Nezw8 .framer-mixfhj-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-Nezw8 .framer-2s51lt { flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 110%; z-index: 1; }`,
          `.framer-Nezw8 .framer-1t1mi4u { flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Nezw8 .framer-cgdgej { bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 110.00000000000001% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 110%; z-index: 1; }`,
          `.framer-Nezw8 .framer-gmf50v { flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; top: -5px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Nezw8 .framer-2ve5nw { bottom: -5px; flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: -4px; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Nezw8 .framer-11tpx93 { bottom: -5px; flex: none; height: 10px; left: -4px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 10px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-Nezw8 .framer-f4eupu { flex: none; height: 130%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(49.89561586638833% - 130% / 2); width: 1px; z-index: 1; }`,
          `.framer-Nezw8 .framer-1d0xg2j { flex: none; height: 130%; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: calc(50.10438413361171% - 130% / 2); width: 1px; z-index: 1; }`,
          `.framer-Nezw8.framer-v-kn8u8d.framer-10szzkd { padding: 80px 40px 80px 40px; width: 810px; }`,
          `.framer-Nezw8.framer-v-kn8u8d .framer-f4eupu { height: 110%; top: calc(49.89561586638833% - 110.00000000000001% / 2); }`,
          `.framer-Nezw8.framer-v-kn8u8d .framer-1d0xg2j { height: 110%; top: calc(50.10438413361171% - 110.00000000000001% / 2); }`,
          `.framer-Nezw8.framer-v-147vpwt.framer-10szzkd { padding: 60px 16px 60px 16px; width: 390px; }`,
          `.framer-Nezw8.framer-v-147vpwt .framer-4yh6p8 { gap: 40px; }`,
          `.framer-Nezw8.framer-v-147vpwt .framer-umre6g { gap: 12px; }`,
          `.framer-Nezw8.framer-v-147vpwt .framer-1t1mi4u { height: 7px; left: -3px; top: -3px; width: 7px; }`,
          `.framer-Nezw8.framer-v-147vpwt .framer-gmf50v { height: 7px; right: -3px; top: -3px; width: 7px; }`,
          `.framer-Nezw8.framer-v-147vpwt .framer-2ve5nw { bottom: -3px; height: 7px; right: -3px; width: 7px; }`,
          `.framer-Nezw8.framer-v-147vpwt .framer-11tpx93 { bottom: -3px; height: 7px; left: -3px; width: 7px; }`,
          `.framer-Nezw8.framer-v-147vpwt .framer-f4eupu { height: 120%; top: calc(49.89561586638833% - 120% / 2); }`,
          `.framer-Nezw8.framer-v-147vpwt .framer-1d0xg2j { height: 120%; top: calc(50.10438413361171% - 120% / 2); }`,
          ...be,
        ],
        `framer-Nezw8`
      )),
      (X = Y),
      (Y.displayName = `FAQ`),
      (Y.defaultProps = { height: 848, width: 1440 }),
      T(Y, {
        variant: {
          options: [`Nn0_sUYi2`, `eZeHfWXpY`, `eD1hZ1m9l`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: F.Enum,
        },
      }),
      w(
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
          ...rt,
          ...at,
          ...S(xe),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([L(we, {}, t), L(G, {}, t)])) }));
  });
function yt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var bt,
  xt,
  Z,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Q,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  $,
  Ft,
  It = e(() => {
    (d(),
      E(),
      g(),
      o(),
      ye(),
      ie(),
      _e(),
      (bt = M(p.div)),
      (xt = M(j)),
      (Z = x(ve)),
      (St = M(A)),
      (Ct = [`QXixqdn2a`, `HDUioys2A`, `xF5lKzz8e`]),
      (wt = `framer-SojUt`),
      (Tt = {
        HDUioys2A: `framer-v-c3e52e`,
        QXixqdn2a: `framer-v-1sb3toa`,
        xF5lKzz8e: `framer-v-17jpzl5`,
      }),
      (Et = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Q = {
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
      (Dt = { damping: 35, delay: 0, mass: 2, stiffness: 120, type: `spring` }),
      (Ot = { damping: 35, delay: 0.1, mass: 2, stiffness: 120, type: `spring` }),
      (kt = { damping: 35, delay: 0.2, mass: 2, stiffness: 120, type: `spring` }),
      (At = ({ value: e, children: n }) => {
        let r = t(m),
          i = e ?? r.transition,
          a = l(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return u(m.Provider, { value: a, children: n });
      }),
      (jt = { Desktop: `QXixqdn2a`, Phone: `xF5lKzz8e`, Tablet: `HDUioys2A` }),
      (Mt = p.create(a)),
      (Nt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: jt[r.variant] ?? r.variant ?? `QXixqdn2a`,
      })),
      (Pt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = v(
        s(function (e, t) {
          let n = i(null),
            r = t ?? n,
            o = c(),
            { activeLocale: s, setLocale: l } = ne(),
            d = te(),
            { style: m, className: g, layoutId: v, variant: y, ...x } = Nt(e),
            {
              baseVariant: S,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: O,
              isLoading: A,
              setGestureState: M,
              setVariant: N,
              variants: F,
            } = b({
              cycleOrder: Ct,
              defaultVariant: `QXixqdn2a`,
              ref: r,
              variant: y,
              variantClassNames: Tt,
            }),
            L = Pt(e, F),
            re = C(wt, Se, ae);
          return (
            D(),
            u(h, {
              id: v ?? o,
              children: u(Mt, {
                animate: F,
                initial: !1,
                children: u(At, {
                  value: Et,
                  children: u(p.section, {
                    ...x,
                    ...E,
                    className: C(re, `framer-1sb3toa`, g, w),
                    "data-framer-name": `Desktop`,
                    layoutDependency: L,
                    layoutId: `QXixqdn2a`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-44da4071-0f44-44be-9852-2ea757abb7ee, rgb(22, 22, 22))`,
                      ...m,
                    },
                    ...yt(
                      {
                        HDUioys2A: { "data-framer-name": `Tablet` },
                        xF5lKzz8e: { "data-framer-name": `Phone` },
                      },
                      S,
                      O
                    ),
                    children: f(p.div, {
                      className: `framer-c4a0ho`,
                      "data-framer-name": `Wrap`,
                      layoutDependency: L,
                      layoutId: `tTm_mMuRX`,
                      style: {
                        backgroundColor: `var(--token-ec78df0b-46ec-4ebd-88fc-a5338cc8c209, rgb(0, 0, 0))`,
                        borderBottomLeftRadius: 32,
                        borderBottomRightRadius: 32,
                        borderTopLeftRadius: 32,
                        borderTopRightRadius: 32,
                        mask: `url('../../assets/images/Jr9aJCRNWM3mxo7jbwfDOHWoXTY.png') alpha no-repeat top / cover add`,
                        WebkitMask: `url('../../assets/images/Jr9aJCRNWM3mxo7jbwfDOHWoXTY.png') alpha no-repeat top / cover add`,
                      },
                      variants: {
                        xF5lKzz8e: {
                          borderBottomLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopLeftRadius: 16,
                          borderTopRightRadius: 16,
                          mask: `url('../../assets/images/U1AGaLPDY8vKEnX9TfjvPJGnfQ.png') luminance no-repeat center / cover add`,
                          WebkitMask: `url('../../assets/images/U1AGaLPDY8vKEnX9TfjvPJGnfQ.png') luminance no-repeat center / cover add`,
                        },
                      },
                      children: [
                        u(P, {
                          background: {
                            alt: `Background`,
                            fit: `stretch`,
                            loading: I(
                              (d?.y || 0) + (100 + ((d?.height || 802) - 200 - 622) / 2) + 0
                            ),
                            pixelHeight: 1200,
                            pixelWidth: 2816,
                            positionX: `center`,
                            positionY: `center`,
                            sizes: `min(max(${d?.width || `100vw`} - 32px, 1px), 1600px)`,
                            src: `../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-7873ac.png`,
                            srcSet: `../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-c4052c.png 512w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-4ed937.png 1024w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I.png 2048w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-7873ac.png 2816w`,
                          },
                          className: `framer-14g60la`,
                          "data-framer-name": `Background`,
                          layoutDependency: L,
                          layoutId: `rC3y_rgAB`,
                          ...yt(
                            {
                              HDUioys2A: {
                                background: {
                                  alt: `Background`,
                                  fit: `stretch`,
                                  loading: I(
                                    (d?.y || 0) + (80 + ((d?.height || 762) - 160 - 622) / 2) + 0
                                  ),
                                  pixelHeight: 1200,
                                  pixelWidth: 2816,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `min(max(${d?.width || `100vw`} - 40px, 1px), 1600px)`,
                                  src: `../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-7873ac.png`,
                                  srcSet: `../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-c4052c.png 512w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-4ed937.png 1024w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I.png 2048w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-7873ac.png 2816w`,
                                },
                              },
                              xF5lKzz8e: {
                                background: {
                                  alt: `Background`,
                                  fit: `stretch`,
                                  loading: I(
                                    (d?.y || 0) + (40 + ((d?.height || 652) - 80 - 508) / 2) + 0
                                  ),
                                  pixelHeight: 1200,
                                  pixelWidth: 2816,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `min(max(${d?.width || `100vw`} - 16px, 1px), 1600px)`,
                                  src: `../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-7873ac.png`,
                                  srcSet: `../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-c4052c.png 512w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-4ed937.png 1024w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I.png 2048w,../../assets/images/HP9Sdr28dgqxGCtauQrYIAAa4I-7873ac.png 2816w`,
                                },
                              },
                            },
                            S,
                            O
                          ),
                        }),
                        u(p.div, {
                          className: `framer-1iyof6d`,
                          "data-framer-name": `Radial`,
                          layoutDependency: L,
                          layoutId: `AeAbjAXY6`,
                          style: {
                            background: `radial-gradient(87% 119.75137829727825% at 44.5% 117.10000000000001%, rgba(249, 145, 69, 0.5) 12.839646637439728%, rgba(21, 21, 21, 0) 100%)`,
                          },
                          variants: {
                            xF5lKzz8e: {
                              background: `radial-gradient(87% 85% at 42.8% 88.5%, rgba(249, 145, 69, 0.5) 12.839646637439728%, rgba(21, 21, 21, 0) 100%)`,
                            },
                          },
                        }),
                        u(p.div, {
                          className: `framer-fhzkqq`,
                          "data-framer-name": `Container`,
                          layoutDependency: L,
                          layoutId: `okmPiubSn`,
                          children: f(p.div, {
                            className: `framer-1bn0gke`,
                            layoutDependency: L,
                            layoutId: `fHCxftPYM`,
                            children: [
                              f(p.div, {
                                className: `framer-zvr12k`,
                                layoutDependency: L,
                                layoutId: `tg0lEONz9`,
                                children: [
                                  u(bt, {
                                    __framer__animate: { transition: Dt },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-i660ks`,
                                    "data-border": !0,
                                    "data-framer-name": `Icon`,
                                    layoutDependency: L,
                                    layoutId: `lUiFxLaD3`,
                                    style: {
                                      "--border-bottom-width": `1px`,
                                      "--border-color": `var(--token-ade93898-d5cf-4c68-84fc-11acd2339d3f, rgba(220, 119, 34, 0.12))`,
                                      "--border-left-width": `1px`,
                                      "--border-right-width": `1px`,
                                      "--border-style": `solid`,
                                      "--border-top-width": `1px`,
                                      backdropFilter: `blur(12px)`,
                                      background: `linear-gradient(90deg, rgba(255, 149, 78, 0.12) 0%, rgba(245, 149, 85, 0.4) 49.549549549549546%, rgba(226, 130, 66, 0.08) 100%)`,
                                      borderBottomLeftRadius: 8,
                                      borderBottomRightRadius: 8,
                                      borderTopLeftRadius: 8,
                                      borderTopRightRadius: 8,
                                      WebkitBackdropFilter: `blur(12px)`,
                                    },
                                    children: f(_, {
                                      className: `framer-flwbr1`,
                                      layoutDependency: L,
                                      layoutId: `JquIiexDv`,
                                      requiresOverflowVisible: !0,
                                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><g><path d="M 0.887 7.056 C 4.111 6.65 6.65 4.111 7.057 0.887 C 7.117 0.4 7.509 0 8 0 C 8.491 0 8.883 0.4 8.944 0.887 C 9.35 4.111 11.889 6.65 15.113 7.057 C 15.6 7.117 16 7.509 16 8 C 16 8.491 15.6 8.883 15.113 8.944 C 11.889 9.35 9.35 11.889 8.943 15.113 C 8.883 15.6 8.491 16 8 16 C 7.509 16 7.117 15.6 7.056 15.113 C 6.65 11.889 4.111 9.35 0.887 8.943 C 0.4 8.883 0 8.491 0 8 C 0 7.509 0.4 7.117 0.887 7.056 Z" fill="var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))"></path><path d="M 0.887 7.056 C 4.111 6.65 6.65 4.111 7.057 0.887 C 7.117 0.4 7.509 0 8 0 C 8.491 0 8.883 0.4 8.944 0.887 C 9.35 4.111 11.889 6.65 15.113 7.057 C 15.6 7.117 16 7.509 16 8 C 16 8.491 15.6 8.883 15.113 8.944 C 11.889 9.35 9.35 11.889 8.943 15.113 C 8.883 15.6 8.491 16 8 16 C 7.509 16 7.117 15.6 7.056 15.113 C 6.65 11.889 4.111 9.35 0.887 8.943 C 0.4 8.883 0 8.491 0 8 C 0 7.509 0.4 7.117 0.887 7.056 Z" fill="transparent" stroke-width="4.5" stroke="var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></g></svg>`,
                                      withExternalLayout: !0,
                                      children: [
                                        u(_, {
                                          className: `framer-1aswwza`,
                                          layoutDependency: L,
                                          layoutId: `sL4fZ4_k8`,
                                          requiresOverflowVisible: !1,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 0.887 7.056 C 4.111 6.65 6.65 4.111 7.057 0.887 C 7.117 0.4 7.509 0 8 0 C 8.491 0 8.883 0.4 8.944 0.887 C 9.35 4.111 11.889 6.65 15.113 7.057 C 15.6 7.117 16 7.509 16 8 C 16 8.491 15.6 8.883 15.113 8.944 C 11.889 9.35 9.35 11.889 8.943 15.113 C 8.883 15.6 8.491 16 8 16 C 7.509 16 7.117 15.6 7.056 15.113 C 6.65 11.889 4.111 9.35 0.887 8.943 C 0.4 8.883 0 8.491 0 8 C 0 7.509 0.4 7.117 0.887 7.056 Z" fill="var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))"></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                        u(_, {
                                          className: `framer-1m6usrb`,
                                          layoutDependency: L,
                                          layoutId: `LwtsTYxM9`,
                                          requiresOverflowVisible: !0,
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16" overflow="visible"><path d="M 0.887 7.056 C 4.111 6.65 6.65 4.111 7.057 0.887 C 7.117 0.4 7.509 0 8 0 C 8.491 0 8.883 0.4 8.944 0.887 C 9.35 4.111 11.889 6.65 15.113 7.057 C 15.6 7.117 16 7.509 16 8 C 16 8.491 15.6 8.883 15.113 8.944 C 11.889 9.35 9.35 11.889 8.943 15.113 C 8.883 15.6 8.491 16 8 16 C 7.509 16 7.117 15.6 7.056 15.113 C 6.65 11.889 4.111 9.35 0.887 8.943 C 0.4 8.883 0 8.491 0 8 C 0 7.509 0.4 7.117 0.887 7.056 Z" fill="transparent" stroke-width="4.5" stroke="var(--token-ec74f615-a008-4ec8-8339-9aa2c8061e14, rgb(236, 111, 16))" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  }),
                                  u(bt, {
                                    __framer__animate: { transition: Dt },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    className: `framer-c8x9hn`,
                                    "data-framer-name": `Section Titles`,
                                    layoutDependency: L,
                                    layoutId: `UTdP0bdf1`,
                                    children: u(j, {
                                      __fromCanvasComponent: !0,
                                      children: u(a, {
                                        children: f(p.h2, {
                                          className: `framer-styles-preset-3yq5jl`,
                                          "data-styles-preset": `cPVM1_Pc1`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--extracted-1of0zx5, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                          },
                                          children: [
                                            `One Platform.`,
                                            u(p.br, {}),
                                            `Unlimited Potential.`,
                                          ],
                                        }),
                                      }),
                                      className: `framer-krbeg5`,
                                      fonts: [`Inter`],
                                      layoutDependency: L,
                                      layoutId: `y52_eTOG5`,
                                      style: {
                                        "--extracted-1of0zx5": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                        "--framer-paragraph-spacing": `0px`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  u(xt, {
                                    __framer__animate: { transition: Ot },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Q,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    children: u(a, {
                                      children: u(p.p, {
                                        className: `framer-styles-preset-13ryzp6`,
                                        "data-styles-preset": `Yw0GmpI8u`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255)))`,
                                        },
                                        children: `Scalora gives you the clarity, structure, and automation your business needs to grow without chaos.`,
                                      }),
                                    }),
                                    className: `framer-pgpyr8`,
                                    fonts: [`Inter`],
                                    layoutDependency: L,
                                    layoutId: `Kq9cld5ee`,
                                    style: {
                                      "--extracted-r6o4lv": `var(--token-664c4cdc-5061-4a85-b26e-909b568f69f9, rgb(255, 255, 255))`,
                                      "--framer-paragraph-spacing": `0px`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(ee, {
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
                                  u(k, {
                                    height: 48,
                                    y:
                                      (d?.y || 0) +
                                      (100 + ((d?.height || 802) - 200 - 622) / 2) +
                                      0 +
                                      0 +
                                      160 +
                                      0 +
                                      316,
                                    ...yt(
                                      {
                                        HDUioys2A: {
                                          y:
                                            (d?.y || 0) +
                                            (80 + ((d?.height || 762) - 160 - 622) / 2) +
                                            0 +
                                            0 +
                                            160 +
                                            0 +
                                            316,
                                        },
                                        xF5lKzz8e: {
                                          y:
                                            (d?.y || 0) +
                                            (40 + ((d?.height || 652) - 80 - 508) / 2) +
                                            0 +
                                            0 +
                                            80 +
                                            0 +
                                            300,
                                        },
                                      },
                                      S,
                                      O
                                    ),
                                    children: u(St, {
                                      __framer__animate: { transition: kt },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Q,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __smartComponentFX: !0,
                                      __targetOpacity: 1,
                                      className: `framer-aibbs9-container`,
                                      layoutDependency: L,
                                      layoutId: `edXxBF7ku-container`,
                                      nodeId: `edXxBF7ku`,
                                      rendersWithMotion: !0,
                                      scopeId: `Kbsz4vDYF`,
                                      children: u(ve, {
                                        height: `100%`,
                                        id: `edXxBF7ku`,
                                        layoutId: `edXxBF7ku`,
                                        R5LxmUA6p: e[0],
                                        TPy5bxyzI: `Get started free`,
                                        width: `100%`,
                                        ...yt(
                                          {
                                            HDUioys2A: { R5LxmUA6p: e[1] },
                                            xF5lKzz8e: { R5LxmUA6p: e[2] },
                                          },
                                          S,
                                          O
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-SojUt.framer-1dy8685, .framer-SojUt .framer-1dy8685 { display: block; }`,
          `.framer-SojUt.framer-1sb3toa { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 16px 100px 16px; position: relative; width: 1440px; }`,
          `.framer-SojUt .framer-c4a0ho { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: center; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-SojUt .framer-14g60la, .framer-SojUt .framer-1iyof6d { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
          `.framer-SojUt .framer-fhzkqq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1280px; overflow: visible; padding: 160px 0px 98px 0px; position: relative; width: 100%; z-index: 6; }`,
          `.framer-SojUt .framer-1bn0gke { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-SojUt .framer-zvr12k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-SojUt .framer-i660ks { flex: none; height: 40px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 56px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-SojUt .framer-flwbr1 { height: 16px; left: 21px; position: absolute; top: 13px; width: 16px; }`,
          `.framer-SojUt .framer-1aswwza, .framer-SojUt .framer-1m6usrb { height: 16px; left: 0px; position: absolute; top: 0px; width: 16px; }`,
          `.framer-SojUt .framer-c8x9hn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-SojUt .framer-krbeg5 { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `.framer-SojUt .framer-pgpyr8 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 460px; position: relative; width: 100%; }`,
          `.framer-SojUt .framer-aibbs9-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-SojUt.framer-v-c3e52e.framer-1sb3toa { padding: 80px 20px 80px 20px; width: 810px; }`,
          `.framer-SojUt.framer-v-17jpzl5.framer-1sb3toa { padding: 40px 8px 40px 8px; width: 390px; }`,
          `.framer-SojUt.framer-v-17jpzl5 .framer-fhzkqq { padding: 80px 0px 80px 0px; }`,
          `.framer-SojUt.framer-v-17jpzl5 .framer-zvr12k { gap: 16px; }`,
          `.framer-SojUt.framer-v-17jpzl5 .framer-c8x9hn { gap: 4px; }`,
          ...be,
          ...oe,
          `.framer-SojUt[data-border="true"]::after, .framer-SojUt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-SojUt`
      )),
      (Ft = $),
      ($.displayName = `CTA`),
      ($.defaultProps = { height: 802, width: 1440 }),
      T($, {
        variant: {
          options: [`QXixqdn2a`, `HDUioys2A`, `xF5lKzz8e`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: F.Enum,
        },
      }),
      w(
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
          ...Z,
          ...S(xe),
          ...S(re),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([L(ve, {}, t)])) }));
  });
export { vt as i, It as n, X as r, Ft as t };
//# sourceMappingURL=Kbsz4vDYF.Db5CsEil.mjs.map
