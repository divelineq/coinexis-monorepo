export type KlineCategories = "linear" | "inverse" | "spot";
export type KlineIntervals =
	| "1"
	| "3"
	| "5"
	| "15"
	| "30"
	| "60"
	| "120"
	| "240"
	| "360"
	| "720"
	| "D"
	| "W"
	| "M";

export type KlinesParams = {
	/**
	 * Тип продукта. linear,inverse,spot
	 * @default linear
	 */
	category?: KlineCategories;
	/**
	 * Название символа, например BTCUSDT, только в верхнем регистре
	 */
	symbol: string;
	/**
	 * Интервал клайна. 1,3,5,15,30,60,120,240,360,720,D,W,M
	 */
	interval: string;
	/**
	 * Начальная временная метка (мс)
	 */
	start?: number;
	/**
	 * Конечная временная метка (мс)
	 */
	end?: number;
	/**
	 * Ограничение на размер данных на странице. [1, 1000]
	 * @default 200
	 */
	limit?: number;
};

export interface OhlcData {
	time: number;
	open: number;
	high: number;
	low: number;
	close: number;
}

type RawKlineItem = [
	string, // timestamp в мс
	string, // open
	string, // high
	string, // low
	string, // close
	string, // volume
	string, // turnover
];

export type KlineResponse = {
	time: number;
	retMsg: string;
	retExtInfo: Record<string, any>;
	retCode: number;
	result: {
		symbol: string;
		category: string;
		list: RawKlineItem[];
	};
};
