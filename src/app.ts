import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({
    message: "Hello world",
  });
});

app.get("/api", (_, res: Response) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

export default app;
