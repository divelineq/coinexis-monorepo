import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
	PORT: z.string().default("4200"),
	BYBIT_API_KEY: z.string(),
	BYBIT_API_SECRET: z.string(),
	MODULA_API: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
	console.error("❌ Invalid environment variables:", _env.error.message);
	process.exit(1);
}

export const env = _env.data;
