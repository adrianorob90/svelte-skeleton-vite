import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import legacy from '@vitejs/plugin-legacy';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

const fileVersion = '.0.1.0';

const projectName = 'svelte-skeleton';
const skin = process.env.SKIN;
const chunckDir = 'js';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 5210,
        strictPort: true
    },
    preview: {
        port: 4210,
        strictPort: true
    },
    resolve: {
        alias: {
            '@/': new URL('./src/', import.meta.url).pathname
        }
    },
    plugins: [
        svelte({
            emitCss: false
        }),
        cssInjectedByJsPlugin(),

        legacy({
            polyfills: false
        })
    ],
    css: {},
    build: {
        sourcemap: false,
        outDir: `dist/${skin}/${projectName}`,
        rollupOptions: {
            input: 'src/main.js',
            preserveEntrySignatures: 'strict',
            output: {
                format: 'system',
                dir: `dist/${skin}/${projectName}`,
                entryFileNames: `${chunckDir}/${projectName}-[name]${fileVersion}.js`,
                chunkFileNames: `${chunckDir}/[name]${fileVersion}.js`
            }
        }
    }
});
