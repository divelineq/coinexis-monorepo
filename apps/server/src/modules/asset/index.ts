import { Router } from "express";
import transferRouter from "./transfer";

const router = Router();

router.use("/transfer", transferRouter);

export default router;
