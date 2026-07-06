import { Router } from "express";
import {
  getRandomQuote,
  getAllQuotes,
} from "../controllers/quoteController.js";

const router = Router();

router.get("/quote", getRandomQuote);
router.get("/quotes", getAllQuotes);

export default router;