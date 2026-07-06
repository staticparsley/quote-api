const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "NERV Quote API",
    version: "1.0.0",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

app.get("/quote", (req, res) => {
  const quotes = [
    "God's in his heaven. All's right with the world.",
    "Man fears the darkness, and so he scrapes away at the edges of it with fire.",
    "The right man in the wrong place can make all the difference in the world.",
    "Wake up, Mr. Freeman. Wake up and smell the ashes.",
    "War... has changed.",
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.json({ quote });
});

module.exports = app;