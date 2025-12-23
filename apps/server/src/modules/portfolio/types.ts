export type PortfolioParams = {
	wallet: string;
};

export type PortfolioResponse = {
	data: {
		total_wallet_balance: number;
		wallets: string[];
		assets: {
			allocation: number;
			estimated_balance: number;
			price: number;
			price_change_24h: number;
			token_balance: number;
			wallets: string[];
			asset: {
				blockchains: string[];
				contracts: string[];
				decimals: string[];
				id: number;
				logo: string;
				name: string;
				symbol: string;
			};
			contracts_balances: {
				address: string;
				balance: number;
				balanceRaw: string;
				chainId: string;
				decimals: number;
			}[];
			cross_chain_balances: Record<
				string,
				{
					address: string;
					balance: number;
					balanceRaw: string;
					chainId: string;
				}
			>;
		}[];
		balances_length: number;
	};
};
