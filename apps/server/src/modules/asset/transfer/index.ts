import { Router } from "express";
import queryAccountCoinsBalanceRouter from "./queryAccountCoinsBalance";
import queryInterTransferListRouter from "./queryInterTransferList";

const router: Router = Router();

router.use("/", queryAccountCoinsBalanceRouter);
router.use("/", queryInterTransferListRouter);

export default router;
