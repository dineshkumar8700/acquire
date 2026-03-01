import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/deno";

export const createApp = () => {
  const app = new Hono();

  app.use(logger());

  app.post("/start-game", (ctx) => {
    return ctx.redirect("/game.html", 303);
  });

  app.get("/*", serveStatic({ root: "public" }));

  return app;
};
