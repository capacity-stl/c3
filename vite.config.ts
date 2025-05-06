import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    }),
    libInjectCss(),
    dts({ include: ['lib'] }),
  ],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'lib/components'),
      '@utils': resolve(__dirname, 'lib/utils'),
      '@props': resolve(__dirname, 'lib/props'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: '@aisoftware/c3',
      fileName: (format) => `c3.${format}.js`,
      formats: ['es', 'cjs'],
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        'react-dom',
        'react-dom/client',
      ],
      input: Object.fromEntries(
        glob
          .sync('lib/**/*.{ts,tsx}', { ignore: 'lib/**/*.stories.tsx' })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative('lib', file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'c3.css'
          return 'assets/[name][extname]'
        },
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'lib',
        exports: 'named',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'jsxRuntime',
          'react/jsx-dev-runtime': 'jsxDevRuntime',
          'react-dom': 'ReactDOM',
          'react-dom/client': 'ReactDOMClient',
        },
      },
    },
  },
})
