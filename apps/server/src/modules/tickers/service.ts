import { BybitClient } from "../../utils/bybitClient";
import type { TickersParams, TickersResponse } from "./types";

const http = new BybitClient();

export class TickersService {
	async getTickers(params: TickersParams) {
		const queryParams = {
			category: params.category,
			symbol: params.symbol,
			baseCoin: params.baseCoin,
			expDate: params.expDate,
		};

		return await http.get<TickersResponse>("/v5/market/tickers", queryParams);
	}
}
