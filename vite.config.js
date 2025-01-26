// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
    root: './',
    build: {
        outDir: 'build', // Change this to 'build' or your preferred folder name
    },
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
});