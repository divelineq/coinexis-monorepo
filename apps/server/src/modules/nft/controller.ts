import { Router } from "express";
import { NftService } from "./service";

export const nftRouter = Router();
const service = new NftService();

nftRouter.get("/", async (req, res) => {
	try {
		const { limit, offset, wallet, pagination } = req.query;

		console.log(req.query);

		if (!wallet) {
			return res.status(400).json({
				error: "Required query params: address",
			});
		}

		const data = await service.getNft({
			limit: limit ? Number(limit) : 50,
			offset: offset ? Number(offset) : 0,
			wallet: wallet as string,
			pagination: pagination ? Boolean(pagination) : true,
		});

		res.json(data);
	} catch (error: any) {
		console.error(error?.response?.data || error.message);
		res
			.status(500)
			.json({ errorCode: error.code, errorMessage: error.message });
	}
});
