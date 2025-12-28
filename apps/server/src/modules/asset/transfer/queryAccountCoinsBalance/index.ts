import { Router } from "express";
import { QueryAccountCoinsBalanceService } from "./service";
import type { WithBonus } from "./types";

const router: Router = Router();
const service = new QueryAccountCoinsBalanceService();

//* выдает список активов

router.get("/query-account-coins-balance", async (req, res) => {
	try {
		const { accountType, coin, memberId, withBonus } = req.query;

		if (!accountType) {
			return res.status(400).json({
				error: "Required query params: accountType",
			});
		}

		const data = await service.getWalletBalance({
			accountType: accountType as AccountType,
			coin: coin as string,
			memberId: memberId as string,
			withBonus: withBonus as unknown as WithBonus,
		});

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
