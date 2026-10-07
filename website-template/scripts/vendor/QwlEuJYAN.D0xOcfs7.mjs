import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import { J as t, Q as n, T as r } from "./framer.CFqKih1k.mjs";
import { n as i, t as a } from "./shared-lib.P4JA4aUc.mjs";
import { i as o, r as s } from "./jtK6M3rat.BS8yqcCt.mjs";
function c(e, t) {
  let n = e?.KP1VtjTDq,
    r = e?.K4nO7V0zW;
  return {
    breakpoints: [
      { hash: `ay4xe3`, mediaQuery: `(min-width: 1440px)` },
      { hash: `1ur8w0s`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
      { hash: `15wnafd`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-TtHjU`,
    socialImage: f(r),
    title: `${n === void 0 ? `{{KP1VtjTDq}}` : d(n)} - My Framer Site`,
    viewport: `width=device-width`,
  };
}
async function l(e, n) {
  let i = new r(),
    a = {
      from: { alias: `QwlEuJYAN`, data: o, type: `Collection` },
      select: [
        { collection: `QwlEuJYAN`, name: `KP1VtjTDq`, type: `Identifier` },
        { collection: `QwlEuJYAN`, name: `K4nO7V0zW`, type: `Identifier` },
      ],
      where: t(e, `QwlEuJYAN`),
    },
    s = await i.query(a, n);
  if (s.length === 0) throw Error(`No data matches pathVariables`);
  let l = s[0];
  return c(l, n);
}
async function u(e, t) {
  let n = new r(),
    i = {
      from: { alias: `QwlEuJYAN`, data: o, type: `Collection` },
      select: [
        { collection: `QwlEuJYAN`, name: `KP1VtjTDq`, type: `Identifier` },
        { collection: `QwlEuJYAN`, name: `K4nO7V0zW`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `QwlEuJYAN`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d,
  f,
  p,
  m,
  h = e(() => {
    (n(),
      s(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (p = 1),
      (m = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { c as a, h as i, u as n, p as o, l as r, m as t };
//# sourceMappingURL=QwlEuJYAN.D0xOcfs7.mjs.map
