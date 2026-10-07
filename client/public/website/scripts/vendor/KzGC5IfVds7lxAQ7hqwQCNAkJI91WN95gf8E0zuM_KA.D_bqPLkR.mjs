import { t as e } from "./rolldown-runtime.C5V3rOZD.mjs";
async function t(e, t, i) {
  let a = r[e],
    o = a ? await a(t, i) : void 0,
    s = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of n) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(o);
    n && s[t.placement].push({ ...t, code: n });
  }
  return s;
}
var n, r, i, a;
e(() => {
  ((n = []),
    (r = {}),
    (i = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] }),
    (a = {
      exports: {
        snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
        getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { a as __FramerMetadata__, t as getSnippets, i as snippetsSorting };
//# sourceMappingURL=KzGC5IfVds7lxAQ7hqwQCNAkJI91WN95gf8E0zuM_KA.D_bqPLkR.mjs.map
