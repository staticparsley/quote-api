import app from "./app.js";
import { redisClient } from "./redisClient.js";

const PORT = process.env.PORT || 3000;

redisClient.connect()
  .then(() => console.log("Redis connected"))
  .catch((error) => {
    console.error("Redis connection failed:", error.message);
  });

app.listen(PORT, () => {
  console.log(`🚀 NERV Quote API listening on port ${PORT}`);
});
