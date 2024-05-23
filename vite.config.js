import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 resolve: {
   alias: {
     "@": path.resolve(__dirname, "./src"),
   },
 },
 server: {
  host:"0.0.0.0",
  proxy: {
    '/api': {
      target: 'http://ser-docease-env.eba-4mzxiqrh.ap-south-1.elasticbeanstalk.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },
},
})
