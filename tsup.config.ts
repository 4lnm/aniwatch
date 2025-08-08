import { defineConfig } from "tsup";

export default defineConfig({
    format: ["esm"],
    entry: ["./src/server.ts"],
    dts: true,
    shims: true,
    clean: true,
    splitting: false,
    // minify: true,
    // minifySyntax: true,
    // minifyIdentifiers: true,
    // minifyWhitespace: true,
    globalName: "aniwatch",
    skipNodeModulesBundle: true,
});
