import { BybitClient } from "../../../utils/bybitClient";
import type { WalletBalanceParams, WalletBalanceResponse } from "./types";

const http = new BybitClient();

export class WalletBalanceService {
	async getWalletBalance(
		params: WalletBalanceParams,
	): Promise<WalletBalanceResponse> {
		const queryParams = {
			accountType: params.accountType,
			coin: params.coin,
		};

		const res = await http.get<WalletBalanceResponse>(
			"/v5/account/wallet-balance",
			queryParams,
		);

		return res.result.list[0];
	}
}
