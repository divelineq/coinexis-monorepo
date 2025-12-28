import { Router } from "express";
import { WalletBalanceService } from "./service";

export const walletBalanceRouter: Router = Router();
const service = new WalletBalanceService();

//* выдает баланс активов в аккаунте финансирования
walletBalanceRouter.get("/", async (req, res) => {
	try {
		const { accountType, coin } = req.query;

		if (!accountType) {
			return res.status(400).json({
				error: "Required query params: accountType",
			});
		}

		const data = await service.getWalletBalance({
			accountType: accountType as AccountType,
			coin: coin as string,
		});

		res.json(data);
	} catch (error: any) {
		console.error(error?.response?.data || error.message);
		res
			.status(500)
			.json({ errorCode: error.code, errorMessage: error.message });
	}
});
