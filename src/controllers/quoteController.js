import { quotes } from "../data/quotes.js";
import { renderQuotePage } from "../views/quoteView.js";
import { quoteRequestsTotal, quoteCacheRequestsTotal } from "../metrics/prometheus.js";
import { redisClient } from "../redisClient.js";
import { withTimeout } from "../withTimeout.js";

const CACHE_KEY = "quote-api:random-quote";
const CACHE_TTL_SECONDS = 30;

export async function getRandomQuote(req, res, next) {
  try {
    const cached = await withTimeout(redisClient.get(CACHE_KEY));
    let quote;

    if(cached !== null) {
      quote = JSON.parse(cached);
      console.log("Quote cache HIT");
      res.set("X-Cache", "HIT");
      quoteCacheRequestsTotal.inc({ result: "hit" });
    } else{
      quote = quotes[Math.floor(Math.random() * quotes.length)];

      await withTimeout(
        redisClient.set(CACHE_KEY, JSON.stringify(quote), {
          EX: CACHE_TTL_SECONDS,
        }),
      );

      console.log("Quote cache MISS");
      res.set("X-Cache", "MISS");
      quoteCacheRequestsTotal.inc({ result: "miss" });

    }

    quoteRequestsTotal.inc();

    if(req.accepts("html")) {
      return res.type("html").send(renderQuotePage(quote));
    }
    
    return res.json(quote);
  } catch(error){
    console.error("Quote cache unavailable:", error.message);

    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quoteRequestsTotal.inc();
    res.set("X-Cache", "BYPASS");
    quoteCacheRequestsTotal.inc({ result: "bypass" });

    if(req.accepts("html")) {
      return res.type("html").send(renderQuotePage(quote));
    }
    return res.json(quote);
  }
  
}

export function getAllQuotes(req, res) {
  res.json(quotes);
}
