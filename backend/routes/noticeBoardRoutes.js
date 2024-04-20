import express from "express";
import { getNotice, getNoticeDetails, postNotice } from "../controllers/noticeBoardController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/notice",getNotice);
router.post("/addNotice",requireSignIn,postNotice);
router.get("/notice/:id",getNoticeDetails);

export default router;