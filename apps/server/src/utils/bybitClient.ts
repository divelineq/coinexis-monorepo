import axios from "axios";
import crypto from "crypto";
import { env } from "../config/env";

type Props = {
	apiKey: string;
	apiSecret: string;
	timestamp: string;
	queryString?: string;
	recvWindow: string;
};

function generateSignature({
	apiKey,
	apiSecret,
	timestamp,
	recvWindow,
	queryString = "",
}: Props): string {
	const payload = `${timestamp}${apiKey}${recvWindow}${queryString}`;
	return crypto.createHmac("sha256", apiSecret).update(payload).digest("hex");
}

const BASE_URL = "https://api-testnet.bybit.com";
const API_KEY = env.BYBIT_API_KEY;
const API_SECRET = env.BYBIT_API_SECRET;

if (!API_KEY || !API_SECRET) {
	throw new Error("Missing BYBIT_API_KEY or BYBIT_API_SECRET");
}

export class BybitClient {
	async get<T>(path: string, params: Record<string, unknown>) {
		const timestamp = Date.now().toString();
		const recvWindow = "5000";

		const filteredParams: Record<string, string> = Object.fromEntries(
			Object.entries(params)
				.filter(([, value]) => value !== undefined && value !== null)
				.map(([key, value]) => [key, String(value)]),
		);

		const queryString = new URLSearchParams(filteredParams).toString();

		const signature = generateSignature({
			apiKey: API_KEY,
			apiSecret: API_SECRET,
			timestamp,
			queryString,
			recvWindow,
		});

		const headers = {
			"X-BAPI-API-KEY": API_KEY,
			"X-BAPI-SIGN": signature,
			"X-BAPI-TIMESTAMP": timestamp,
			"X-BAPI-RECV-WINDOW": recvWindow,
		};

		const url = `${BASE_URL}${path}?${queryString}`;

		const response = await axios.get<T>(url, { headers });
		return response.data;
	}
}
