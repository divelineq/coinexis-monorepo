export type TickersParams = {
	/**
	 * Тип продукта
	 */
	category: "linear" | "inverse" | "spot" | "options";
	/**
	 * Название символа, например BTCUSDT, только в верхнем регистре
	 */
	symbol?: string;
	/**
	 * Базовая монета, только в верхнем регистре. Применяется только к опции
	 */
	baseCoin?: string;
	/**
	 * Дата истечения срока действия. например, 25 декабря 2012 года. Применяется только к опциону
	 */
	expDate?: string;
};

type List = {
	ask1Price: string;
	ask1Size: string;
	bid1Price: string;
	bid1Size: string;
	highPrice24h: string;
	lastPrice: string;
	lowPrice24h: string;
	prevPrice24h: string;
	price24hPcnt: string;
	symbol: string;
	turnover24h: string;
	usdIndexPrice: string;
	volume24h: string;
};

export type TickersResponse = {
	time: number;
	retMsg: string;
	retExtInfo: Record<string, any>;
	retCode: number;
	result: {
		category: string;
		list: List[];
	};
};
