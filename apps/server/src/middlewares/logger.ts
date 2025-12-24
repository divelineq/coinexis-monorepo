import expressWinston from "express-winston";
import { logger } from "../utils/logger";

export const requestLogger = expressWinston.logger({
	winstonInstance: logger,
	meta: true,
	expressFormat: true,
	colorize: false,
	ignoreRoute: () => false,
});

export const errorLogger = expressWinston.errorLogger({
	winstonInstance: logger,
});
