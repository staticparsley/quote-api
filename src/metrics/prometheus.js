import client from "prom-client";

export const register = new client.Registry();

client.collectDefaultMetrics({ register });

// export const httpRequestDurationSeconds = new client.Histogram({
//   name: "http_request_duration_seconds",
//   help: "Duration of HTTP requests in seconds",
//   labelNames: ["method", "route", "status_code"],
//   buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2.5],
// });

// register.registerMetric(httpRequestDurationSeconds);

// export function metricsMiddleware(req, res, next) {
//   const end = httpRequestDurationSeconds.startTimer();

//   res.on("finish", () => {
//     end({
//       method: req.method,
//       route: req.route?.path || req.path,
//       status_code: res.statusCode,
//     });
//   });

//   next();
// }

export const quoteRequestsTotal = new client.Counter({
  name: "quote_requests_total",
  help: "Total number of random quote requests served",
});

register.registerMetric(quoteRequestsTotal);

export async function getMetrics(req, res) {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
}