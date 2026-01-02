import axios from "axios";
import { env } from "../config/env";

const BASE_URL = "https://api.mobula.io/api/1";
const API_KEY = env.MODULA_API;

export class ModuleClient {
	public async get<T>(path: string, params: Record<string, unknown>) {
		const headers = {
			Authorization: `Bearer ${API_KEY}`,
		};

		const filteredParams: Record<string, string> = Object.fromEntries(
			Object.entries(params)
				.filter(([, value]) => value !== undefined && value !== null)
				.map(([key, value]) => [key, String(value)]),
		);

		const queryString = new URLSearchParams(filteredParams).toString();
		const url = `${BASE_URL}${path}?${queryString}`;
		const response = await axios.get<T>(url, { headers });

		return response.data;
	}
}
