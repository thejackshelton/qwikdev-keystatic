import { defineConfig } from "astro/config";
import keystatic from "@keystatic/astro";
import markdoc from "@astrojs/markdoc";

// frameworks
import react from "@astrojs/react";
import qwikdev from "@qwikdev/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    keystatic(),
    markdoc(),
    qwikdev({
      exclude: ["**/keystatic/*"],
    }),
    react({
      include: ["**/keystatic/*"],
    }),
  ],
  output: "hybrid",
  adapter: cloudflare({
    imageService: "compile",
  }),
});
