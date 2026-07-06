import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = 3000;

const products = [
  {
    id: 1,
    name: "Duck",
    artist: "Y",
    price: 1200,
    image: "lateli/client/public/duck.png",
    desc: ":D",
    medium: "idk"
  }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
