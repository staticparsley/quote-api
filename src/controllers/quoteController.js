import { quotes } from "../data/quotes.js";
import { renderQuotePage } from "../views/quoteView.js";
import { quoteRequestsTotal } from "../metrics/prometheus.js";

export function getRandomQuote(req, res) {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  quoteRequestsTotal.inc();

  if (req.accepts("html")) {
    return res.type("html").send(renderQuotePage(quote));
  }

  return res.json(quote);
}

export function getAllQuotes(req, res) {
  res.json(quotes);
}
