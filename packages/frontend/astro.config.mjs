import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        {
            name: "Dev server",
            hooks: {
                "astro:server:start": () => {
                    console.log("start");
                },
                "astro:server:done": () => {
                    console.log("done");
                }
            }
        }
    ],
});
