import express from "express";
import quoteRoutes from "./routes/quoteRoutes.js";
import { renderHomePage } from "./views/homeView.js";
import { getHealth, getVersion } from "./controllers/systemController.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.type("html").send(renderHomePage());
});

app.get("/health", getHealth);
app.get("/version", getVersion);

app.use(quoteRoutes);

export default app;