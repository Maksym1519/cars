import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cars/', // Укажите имя вашего репозитория
  build: {
    outDir: 'dist', // Папка для билдов (по умолчанию dist)
  },
 })
