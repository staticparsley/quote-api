import express from "express";
import quoteRoutes from "./routes/quote.js";
import { renderHomePage } from "./views/homeView.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.type("html").send(renderHomePage());
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/quote", quoteRoutes);

export default app;