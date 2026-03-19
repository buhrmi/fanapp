import { compile } from "@inlang/paraglide-js"

await compile({
  project: "./project.inlang",
  outdir: "./app/frontend/i18n",
  outputStructure: "locale-modules",
})
