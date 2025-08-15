// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@nuxt/image", "@nuxtjs/tailwindcss"],
  srcDir: "./web",
  serverDir: "./server",
  content: {
    experimental: { sqliteConnector: "native" },
  },
  // css: ["~/assets/css/tailwind.css"],
  // vite: {
  //   plugins: [tailwindcss()],
  // },
});
