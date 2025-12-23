import { BybitClient } from "../../utils/bybitClient";
import type { KlineResponse, KlinesParams, OhlcData } from "./types";

const http = new BybitClient();

export class KlineService {
	async getKlines(params: KlinesParams): Promise<OhlcData[]> {
		const queryParams = {
			category: params.category ?? "linear",
			symbol: params.symbol,
			interval: params.interval,
			start: params.start,
			end: params.end,
			limit: params.limit,
		};

		const res = await http.get<KlineResponse>("/v5/market/kline", queryParams);

		return res.result.list
			.sort((a: any, b: any) => a[0] - b[0])
			.map((item: any) => ({
				time: Math.floor(item[0] / 1000),
				open: Number(item[1]),
				high: Number(item[2]),
				low: Number(item[3]),
				close: Number(item[4]),
			}));
	}
}
