import { Router } from "express";
import { TransactionService } from "./service";

export const transactionRouter: Router = Router();
const service = new TransactionService();

transactionRouter.get("/", async (req, res) => {
	try {
		const { wallet, limit, offset } = req.query;

		if (!wallet) {
			return res.status(400).json({
				error: "Required query params: address",
			});
		}

		const data = await service.getTransactions({
			wallet: wallet as string,
			limit: limit ? Number(limit) : 50,
			offset: offset ? Number(offset) : 0,
		});

		res.json(data);
	} catch (error: any) {
		console.error(error?.response?.data || error.message);
		res
			.status(500)
			.json({ errorCode: error.code, errorMessage: error.message });
	}
});
