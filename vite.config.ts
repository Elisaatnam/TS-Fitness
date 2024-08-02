import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // I can now use @ instead of always typing the cpmlete path to my import
  // so @ witll be replaced with the path throuh this setting
  //-> we will have an absolute path then
  // also one more setting in tsconfig.app.json!!!
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
