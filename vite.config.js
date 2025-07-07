import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";

export default defineConfig({
  base: './',           // ✅ This is the critical fix
  plugins: [glsl()],
});
