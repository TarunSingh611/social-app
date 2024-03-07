import express from "express";
import {
    Register,
    Login,
    Verification,
} from "../controllers/guestController/index.mjs";
const router = express.Router();

router.post("/register", Register);
router.post("/login", Login);//done
router.get("/verification", Verification);

export default router;
