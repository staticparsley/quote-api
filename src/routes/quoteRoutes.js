import { Router } from "express";
import {
  getRandomQuote,
  getAllQuotes,
  getJsonQuote,
} from "../controllers/quoteController.js";

const router = Router();

router.get("/quote", getRandomQuote);
router.get("/quotes", getAllQuotes);
router.get("/api/quote", getJsonQuote);

export default router;