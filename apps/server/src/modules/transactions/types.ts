export type TransactionsParams = {
	wallet: string | null;
	limit: number;
	offset: number;
};

type Asset = {
	circulatingSupply: number;
	contract: string;
	decimals: number;
	id: number;
	liquidity: number;
	logo: string;
	marketCapUSD: number;
	name: string;
	nativeChainId: number | null;
	price: number;
	priceChange24hPercent: number;
	symbol: string;
	totalSupply: number;
};

type Transaction = {
	chainId: string;
	date: string;
	fees: string;
	feesUSD: number;
	hash: string;
};

export type TransactionsResponse = {
	data: {
		wallets: string[];
		transactions: {
			amount: number;
			amount_usd: number;
			block_number: number;
			blockchain: string;
			contract: string;
			from: string;
			hash: string;
			id: string;
			timestamp: number;
			to: string;
			tx_cost: number;
			type: "native" | "erc20";
			asset: Asset;
			transaction: Transaction;
		}[];
	};
	details: any;
	pagination: {
		limit: number;
		offset: number;
		page: number;
		total: number;
	};
};
