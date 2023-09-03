import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteSingleFile } from "vite-plugin-singlefile";
import svgr from "vite-plugin-svgr";
import { terser } from "rollup-plugin-terser";
import compressDist from "rollup-plugin-compress-dist";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      react(),
      process?.env?.ODR ? viteSingleFile() : null,
      svgr({
        svgrOptions: {},
      }),
    ],

    build: {
      chunkSizeWarningLimit: 1000,
      sourcemap: false,
      outDir: "build",
      rollupOptions: {
        plugins: [
          terser({
            format: {
              comments: false,
            },
          }),
          compressDist({
            type: "zip",
            archiverName: "build.zip",
            sourceName: "build",
          }),
        ],
      },
    },
  });
};