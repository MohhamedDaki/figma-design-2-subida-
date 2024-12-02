import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: "./src", // no olvidemos cambiar la raíz del proyecto a "src"
  build: {
    outDir: "../docs", // Cambiar la carpeta de salida a 'docs'
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        contact: resolve(__dirname, "./src/form.html"), // Otra página
        // Añade más entradas si es necesario
      },
    },
  },
  base: "./", // Opcional: rutas relativas para mayor compatibilidad
});



