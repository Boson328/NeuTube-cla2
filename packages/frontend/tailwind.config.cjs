/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extends: {
            colors: {
                neutube: "#ffc144",
            }
        },
        extend: {}
    },
    plugins: []
};