import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://redis:6379",
  disableOfflineQueue: true,
});

redisClient.on("error", (error) => {
  console.error("Redis client error:", error.message);
});


