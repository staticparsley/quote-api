import { quotes } from "../data/quotes.js";
import { renderQuotePage } from "../views/quoteView.js";

export function getRandomQuote(req, res) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  if (req.accepts("html")) {
    return res.type("html").send(renderQuotePage(quote));
  }

  return res.json(quote);
}

export function getAllQuotes(req, res) {
  res.json(quotes);
}

export function getJsonQuote (req, res) { 
     const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return res.json(quote);
}