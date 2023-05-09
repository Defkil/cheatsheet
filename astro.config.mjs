import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import compress from 'astro-compress'
import lazyLoadPlugin from 'rehype-plugin-image-native-lazy-loading'

export default defineConfig({
  integrations: [preact(), react(), compress()],
  site: `https://astro.build`,
  markdown: {
    rehypePlugins: [lazyLoadPlugin]
  }
})
