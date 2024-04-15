import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import * as path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // 구성 요소를 두 번 렌더링하지 않게 수정
  react: {
    strictMode: true,
  },
  server: {
    port: 3000,
    cors: {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'PATCH', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    },
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, '');
        },
      },
      { find: '@src', replacement: path.resolve(__dirname, 'src') },
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@views', replacement: path.resolve(__dirname, 'src/views') },
      { find: '@pc', replacement: path.resolve(__dirname, 'src/views/pc') },
      {
        find: '@mobile',
        replacement: path.resolve(__dirname, 'src/views/mobile'),
      },
      { find: '@img', replacement: path.resolve(__dirname, 'src/assets/img') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      // { find: '@store', replacement: path.resolve(__dirname, 'src/redux') },
      // {
      //   find: '@utils',
      //   replacement: path.resolve(__dirname, 'src/utils/Utils.js'),
      // },
      // {
      //   find: '@yup',
      //   replacement: path.resolve(__dirname, 'src/utils/customYup.js'),
      // },
      {
        find: '@svg',
        replacement: path.resolve(__dirname, 'src/assets/svg/index.js'),
      },
      // {
      //   find: '@core',
      //   replacement: path.resolve(__dirname, 'src/components/core'),
      // },
      // {
      //   find: '@modules',
      //   replacement: path.resolve(__dirname, 'src/components/modules'),
      // },
    ],
  },
  esbuild: {
    loader: 'jsx',
    include: /.\/src\/.*\.js?$/,
    exclude: [],
    jsx: 'automatic',
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\\.*\.js$/ }, async (args) => ({
              loader: 'jsx',
              contents: await fs.readFileSync(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@import "./src/@core/scss/helper.scss";` },
    },
  },
});
