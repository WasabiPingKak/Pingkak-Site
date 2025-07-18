import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Pingkak-Site/', // 👈 確保正確設定
  plugins: [react()],
});