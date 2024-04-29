import express from "express";
import { addUserDetails } from "../controllers/detailsController.js";
import { createOutpass, getOutpassDetails } from "../controllers/outpassController.js";
import { createUser, getUserProfile, loginUser } from "../controllers/userController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/roleMiddleware.js";

const router = express.Router();

// router.post("/signup",requireSignIn,isAdmin,createUser);
router.post("/signup",createUser);
router.post("/login",loginUser);
router.get("/Profile",requireSignIn,getUserProfile);
router.post("/addUserDetails",requireSignIn,addUserDetails);
router.post("/createOutpass",createOutpass);
router.get("/outpassDetails",getOutpassDetails);

export default router;