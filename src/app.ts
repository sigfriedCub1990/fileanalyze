import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import multer from "multer";

dotenv.config();

const app = express();

const memoryStorage = multer.memoryStorage();
const upload = multer({ storage: memoryStorage }).single("upfile");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "../../src/views"));
app.set("view engine", "pug");

app.get("/", (_req: Request, res: Response) => {
  res.render("index");
});

app.post("/api/fileanalyse", upload, (req: Request, res: Response) => {
  res.json({
    name: req.file?.originalname,
    type: req.file?.mimetype,
    size: req.file?.size,
  });
});

export default app;
