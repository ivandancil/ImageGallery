import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const GITHUB_REPO_NAME = 'ImageGallery';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${GITHUB_REPO_NAME}/`,
})
