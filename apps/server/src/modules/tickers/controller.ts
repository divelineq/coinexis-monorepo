import { Router } from "express";
import { TickersService } from "./service";

export const tickersRouter: Router = Router();
const service = new TickersService();

tickersRouter.get("/", async (req, res) => {
	try {
		const { category, symbol, baseCoin, expDate } = req.query;

		if (!category) {
			return res.status(400).json({
				error: "Required query params: category",
			});
		}

		const data = await service.getTickers({
			category: category as "linear" | "inverse" | "spot" | "options",
			symbol: symbol as string,
			baseCoin: baseCoin as string,
			expDate: expDate as string,
		});

		res.json(data);
	} catch (error: any) {
		console.error(error?.response?.data || error.message);
		res
			.status(500)
			.json({ errorCode: error.code, errorMessage: error.message });
	}
});
