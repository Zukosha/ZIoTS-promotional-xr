import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = '/ziots-promotional-xr/';
export default defineConfig({
  plugins: [react()],
  base,
  assetsInclude: ["**/*.glb"],
})
