import type { ErrorRequestHandler } from "express";
import {
	errorLogger as winstonErrorLogger,
	logger as winstonLogger,
} from "express-winston";
import { logger } from "../utils/logger";

export const requestLogger = winstonLogger({
	winstonInstance: logger,
	meta: true,
	expressFormat: true,
	colorize: false,
	ignoreRoute: () => false,
});

export const errorLogger: ErrorRequestHandler = winstonErrorLogger({
	winstonInstance: logger,
});
