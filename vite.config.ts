import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Découpage manuel pour isoler les grosses dépendances dans des chunks
    // stables, cacheables long terme et chargés en parallèle.
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-vendor": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-slot",
            "@radix-ui/react-toast",
            "lucide-react",
          ],
          "query-vendor": ["@tanstack/react-query"],
        },
      },
    },
    // Coupe l'avertissement Rollup sur les chunks lourds (les vendors sont
    // volontairement regroupés et cacheables).
    chunkSizeWarningLimit: 900,
  },
}));
