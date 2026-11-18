import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes asset paths relative, so the build works on any GitHub Pages
// URL (user site or project site) without hard-coding the repository name.
export default defineConfig({ base: './', plugins: [react()] })
