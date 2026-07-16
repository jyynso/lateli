import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);

const PORT = 3000;

const products = [
  {
    id: 1,
    name: "Duck",
    artist: "Y",
    price: 1200,
    image: "/duck.png",
    desc: "Duck study",
    medium: "Digital, Clip Studio"
  },
  {
    id: 2,
    name: "You at the cafe",
    artist: "Y",
    price: 2100,
    image: "/cafe.png",
    desc: "Painting study",
    medium: "Digital, Clip Studio Paint"
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
