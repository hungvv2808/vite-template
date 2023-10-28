import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

const { compilerOptions } = require('./tsconfig.json')
function readAliasPaths() {
  const paths = compilerOptions.paths

  return Object.entries(paths).reduce((alias, [key, value]) => {
    const aliasKey = key.replace('/*', '')
    const pathItem = value[0]
    alias[aliasKey] = path.resolve(__dirname, pathItem.replace('*', ''))

    return alias
  }, {})
}

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [vue()],
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
    resolve: {
      alias: readAliasPaths(),
    },
  })
}
