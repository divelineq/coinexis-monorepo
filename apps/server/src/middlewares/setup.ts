import compression from "compression";
import cors from "cors";
import express, {
	type Application,
	type NextFunction,
	type Request,
	type Response,
} from "express";
import helmet from "helmet";
import { errorLogger } from "./logger";

export function setupMiddlewares(app: Application) {
	//? app.use(requestLogger);
	app.use(errorLogger);

	app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
		console.error("Unexpected error:", err.message);
		res.status(500).json({ error: "Internal Server Error" });
	});

	app.use(
		cors({
			origin: ["http://localhost:5173"],
			methods: ["GET", "POST", "PUT", "DELETE"],
			credentials: true,
		}),
	);
	app.use(helmet());
	app.use(compression());
	app.use(express.json());
}
