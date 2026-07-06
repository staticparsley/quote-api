import express from "express";
import quoteRoutes from "./routes/quote.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "NERV Quote API",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/quote", quoteRoutes);

export default app;