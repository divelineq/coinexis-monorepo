import { Router } from "express";
import { PortfolioService } from "./service";

export const portfolioRouter = Router();
const service = new PortfolioService();

portfolioRouter.get("/", async (req, res) => {
	try {
		const { wallet } = req.query;

		if (!wallet) {
			return res.status(400).json({
				error: "Required query params: address",
			});
		}

		const data = await service.getPortfolio({
			wallet: wallet as string,
		});

		res.json(data);
	} catch (error: any) {
		console.error(error?.response?.data || error.message);
		res
			.status(500)
			.json({ errorCode: error.code, errorMessage: error.message });
	}
});
