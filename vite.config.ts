import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
  },
  resolve: {

    alias: {

      "@": path.resolve("./src/"),

      // routes: `${path.resolve(__dirname, "./src/routes/")}`,

      // services: `${path.resolve(__dirname, "./src/services/")}`,

    }

  }
})
