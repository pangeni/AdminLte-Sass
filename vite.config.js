import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    refresh: [
        'routes/**',
        'resources/views/**',
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            '~adminLte': path.resolve(__dirname, 'node_modules/adminlte'),
            // '~fontawesome': path.resolve(__dirname, 'node_modules/font-awesome'),
        }
    }
});
