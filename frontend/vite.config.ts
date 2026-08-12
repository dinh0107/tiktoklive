import { defineConfig, type Plugin } from "vite";
import { resolve } from "node:path";

/** Pretty routes for OBS overlay + setup controller. */
function appRoutes(): Plugin {
  const rewrites: Array<{ match: RegExp; target: string }> = [
    { match: /^\/overlay\/?(\?.*)?$/, target: "/index.html" },
    { match: /^\/control\/?(\?.*)?$/, target: "/control.html" },
    { match: /^\/dashboard\/?(\?.*)?$/, target: "/control.html" },
  ];

  const middleware = (
    req: { url?: string },
    _res: unknown,
    next: () => void,
  ): void => {
    const url = req.url ?? "";
    for (const rule of rewrites) {
      const m = url.match(rule.match);
      if (m) {
        req.url = rule.target + (m[1] ?? "");
        break;
      }
    }
    next();
  };

  return {
    name: "meme-bar-app-routes",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  appType: "mpa",
  plugins: [appRoutes()],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        control: resolve(__dirname, "control.html"),
      },
    },
  },
});
