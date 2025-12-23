import { ModuleClient } from "../../utils/modulaClient";
import type { TransactionsParams, TransactionsResponse } from "./types";

const http = new ModuleClient();

export class TransactionService {
	async getTransactions(params: TransactionsParams) {
		const queryParams = {
			wallet: params.wallet,
			limit: params.limit,
			offset: params.offset,
		};

		return await http.get<TransactionsResponse>(
			"/wallet/transactions",
			queryParams,
		);
	}
}
