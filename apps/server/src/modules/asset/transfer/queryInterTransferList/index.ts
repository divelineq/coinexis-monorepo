import { Router } from "express";
import { QueryInterTransferListService } from "./service";

const router = Router();
const service = new QueryInterTransferListService();

//* внутренние записи о переводах между разными типами счетов под одним и тем же UID

router.get("/query-inter-transfer-list", async (req, res) => {
	try {
		const data = await service.getWalletBalance(req.query);

		res.json(data);
	} catch (error: any) {
		console.error(error?.response?.data || error.message);
		res
			.status(500)
			.json({ errorCode: error.code, errorMessage: error.message });
	}
});

export * from "./types";
export default router;
