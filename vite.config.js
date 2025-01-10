import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      store: path.resolve(__dirname, 'src/store'),
      types: path.resolve(__dirname, 'src/types'),
      utils: path.resolve(__dirname, 'src/utils'),
      layouts: path.resolve(__dirname, 'src/layouts'),
      '@': path.resolve(__dirname, 'src/styles'),
      '@mixins': path.resolve(__dirname, 'src/styles/mixins/'),
      '@vars': path.resolve(__dirname, 'src/styles/vars/'),
      '@assets': path.resolve(__dirname, 'src/assets/fonts/'),
      '@img': path.resolve(__dirname, 'src/assets/images/'),
    }
  }
})
