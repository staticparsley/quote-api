import { Router } from "express";
import { getRandomQuote } from "../controllers/quoteController.js";

const router = Router();

router.get("/", getRandomQuote);

export default router;