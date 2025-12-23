import { BybitClient } from "../../../../utils/bybitClient";
import type { AccountBalanceParams, AccountBalanceResponse } from "./types";

const http = new BybitClient();

export class QueryAccountCoinsBalanceService {
	async getWalletBalance(
		params: AccountBalanceParams,
	): Promise<AccountBalanceResponse> {
		return await http.get<AccountBalanceResponse>(
			"/v5/asset/transfer/query-account-coins-balance",
			params,
		);
	}
}
