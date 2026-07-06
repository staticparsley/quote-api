import { quotes } from "../data/quotes.js";

export function getRandomQuote(req, res) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.json(quote);
}