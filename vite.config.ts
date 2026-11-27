import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        sveltekit({
            preprocess: vitePreprocess(),
            adapter: adapter({
                pages: 'docs',
                assets: 'docs',
                fallback: '404.html'
            }),
            prerender: {
                handleHttpError: 'warn'
            },
            paths: {
                base: ''
            }
        })
    ]
});
