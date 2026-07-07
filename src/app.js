import express from "express";
import quoteRoutes from "./routes/quoteRoutes.js";
import { renderHomePage } from "./views/homeView.js";
import { getHealth, getVersion } from "./controllers/systemController.js";
import { getMetrics } from "./metrics/prometheus.js";

const app = express();

app.use(express.json());
app.use(getMetrics);

app.get("/", (req, res) => {
  res.type("html").send(renderHomePage());
});

app.get("/health", getHealth);
app.get("/version", getVersion);
app.get("/metrics", getMetrics);

app.use(quoteRoutes);

export default app;