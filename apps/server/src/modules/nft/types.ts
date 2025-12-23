export type NftParams = {
	limit: number;
	offset: number;
	wallet: string | null;
	pagination: boolean;
};

export type NftResponse = {
	data: {
		amount: string;
		blockchain: string;
		chain_id: string;
		name: string;
		owner_of: string;
		symbol: string;
		token_address: string;
		token_id: string;
		token_uri: string;
	}[];
	pagination: {
		limit: number;
		offset: number;
		page: number;
		total: number;
	};
};

export type NftMetadata = {
	name: string;
	description: string;
	image: string;
	attributes: {
		trait_type: string;
		value: string;
	}[];
};
