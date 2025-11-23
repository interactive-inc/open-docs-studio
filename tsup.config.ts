import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    docs: "cli.ts",
  },
  outDir: "bin",
  format: ["esm"],
  clean: true,
  dts: false,
  splitting: false,
  external: ["next"],
  noExternal: [],
  bundle: true,
  platform: "node",
  target: "node20",
})
