import { ModuleClient } from "../../utils/modulaClient";
import type { PortfolioParams, PortfolioResponse } from "./types";

const http = new ModuleClient();

export class PortfolioService {
	async getPortfolio(
		params: PortfolioParams,
	): Promise<PortfolioResponse["data"]> {
		const queryParams = {
			wallet: params.wallet,
		};

		const res = await http.get<PortfolioResponse>(
			"/wallet/portfolio",
			queryParams,
		);

		return res.data;
	}
}
