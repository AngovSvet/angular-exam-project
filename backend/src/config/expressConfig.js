import express from "express";
import cookieParser from "cookie-parser";

export const SECRET = "jvbhge48938udaghvhehf39fiohafho";

export function configureEx(app) {
  app.use(express.json());
  app.use(cookieParser());

  return app;
}

