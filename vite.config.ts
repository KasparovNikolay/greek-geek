import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
      react(),
      !process.env.VITEST ? checker({ typescript: true }) : undefined
  ],
    server:{
      open: true,
    }
})
