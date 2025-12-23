import { BybitClient } from "../../../../utils/bybitClient";
import type { TransferListParams, TransferListResponse } from "./types";

const http = new BybitClient();

export class QueryInterTransferListService {
	async getWalletBalance(
		params: TransferListParams,
	): Promise<TransferListResponse> {
		return await http.get<TransferListResponse>(
			"/v5/asset/transfer/query-inter-transfer-list",
			params,
		);
	}
}
