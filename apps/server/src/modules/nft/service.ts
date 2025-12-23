import { ModuleClient } from "../../utils/modulaClient";
import { getMetadata } from "./getMetadata";
import type { NftParams, NftResponse } from "./types";

const http = new ModuleClient();

export class NftService {
	async getNft(params: NftParams) {
		const queryParams = {
			limit: params.limit,
			offset: params.offset,
			wallet: params.wallet,
			pagination: params.pagination,
		};

		const res = await http.get<NftResponse>("/wallet/nfts", queryParams);

		const meta = await Promise.all(
			res.data.map(async (data) => {
				const metadata = await getMetadata(data.token_uri);

				return {
					...data,
					...metadata,
				};
			}),
		);

		return {
			data: meta,
			pagination: res.pagination,
		};
	}
}
