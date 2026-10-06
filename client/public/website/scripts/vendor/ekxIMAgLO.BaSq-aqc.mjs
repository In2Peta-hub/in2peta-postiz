import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
import { J as t, Q as n, T as r } from "./framer.CFqKih1k.mjs";
import { n as i, t as a } from "./shared-lib.P4JA4aUc.mjs";
import { i as o, r as s } from "./kMLIh8Wrw.D1c-0SWh.mjs";
function c(e, t) {
  let n = e?.da3SPTjC9;
  return {
    breakpoints: [
      { hash: `7gucu7`, mediaQuery: `(min-width: 1440px)` },
      { hash: `kffhti`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
      { hash: `etdtlj`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-oJJP4`,
    title: `${n === void 0 ? `{{da3SPTjC9}}` : d(n)} - My Framer Site`,
    viewport: `width=device-width`,
  };
}
async function l(e, n) {
  let i = new r(),
    a = {
      from: { alias: `ekxIMAgLO`, data: o, type: `Collection` },
      select: [{ collection: `ekxIMAgLO`, name: `da3SPTjC9`, type: `Identifier` }],
      where: t(e, `ekxIMAgLO`),
    },
    s = await i.query(a, n);
  if (s.length === 0) throw Error(`No data matches pathVariables`);
  let l = s[0];
  return c(l, n);
}
async function u(e, t) {
  let n = new r(),
    i = {
      from: { alias: `ekxIMAgLO`, data: o, type: `Collection` },
      select: [{ collection: `ekxIMAgLO`, name: `da3SPTjC9`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `ekxIMAgLO`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d,
  f,
  p,
  m = e(() => {
    (n(),
      s(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { c as a, m as i, u as n, f as o, l as r, p as t };
//# sourceMappingURL=ekxIMAgLO.BaSq-aqc.mjs.map
