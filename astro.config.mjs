import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Udixio UI',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Getting started',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Installation',
        link: '/getting-started/installation/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), react(), tailwind()],
  vite: {
    ssr: {
      noExternal: ["@udixio/ui",]
    }
  }
});