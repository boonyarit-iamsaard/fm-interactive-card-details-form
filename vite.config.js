import glob from 'glob';
import { join, resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/fm-interactive-card-details-form/',
  build: {
    outDir: join(__dirname, 'dist'),
    rollupOptions: {
      input: glob.sync(resolve(__dirname, '*.html')),
      output: {
        assetFileNames: asset => {
          let extension = asset.name.split('.').at(1);

          if (/webp|png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extension)) {
            extension = 'images';
          }

          if (/woff2?|eot|ttf|otf/i.test(extension)) {
            extension = 'fonts';
          }

          return `assets/${extension}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});
