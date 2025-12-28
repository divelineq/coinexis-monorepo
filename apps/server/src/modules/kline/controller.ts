import { Router } from "express";
import { KlineService } from "./service";
import type { KlineCategories, KlineIntervals } from "./types";

export const klineRouter: Router = Router();
const service = new KlineService();

klineRouter.get("/", async (req, res) => {
	try {
		const { category, symbol, interval, start, end, limit } = req.query;

		if (!symbol || !interval) {
			return res.status(400).json({
				error: "Required query params: symbol, interval",
			});
		}

		const data = await service.getKlines({
			category: category as KlineCategories,
			interval: interval as KlineIntervals,
			symbol: symbol as string,

			start: start ? Number(start) : undefined,
			end: end ? Number(end) : undefined,
			limit: limit ? Number(limit) : undefined,
		});

		res.json(data);
	} catch (error: any) {
		console.error(error?.response?.data || error.message);
		res
			.status(500)
			.json({ errorCode: error.code, errorMessage: error.message });
	}
});
