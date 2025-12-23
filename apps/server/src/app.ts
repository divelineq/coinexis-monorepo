import express from "express";
import { setupMiddlewares } from "./middlewares/setup";
import { walletBalanceRouter } from "./modules/account";
import assetRouter from "./modules/asset";
import { klineRouter } from "./modules/kline/controller";
import { nftRouter } from "./modules/nft/controller";
import { portfolioRouter } from "./modules/portfolio/controller";
import { tickersRouter } from "./modules/tickers/controller";
import { transactionRouter } from "./modules/transactions/controller";

const app = express();

setupMiddlewares(app);

app.get("/healthcheck", (_, res) => {
	console.log(`[HEALTHCHECK] ${new Date().toISOString()} - OK`);
	res.status(200).json({ status: "ok", message: "Сервер работает" });
});

app.use("/api/kline", klineRouter);
app.use("/api/tickers", tickersRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/nfts", nftRouter);
app.use("/api/wallet-balance", walletBalanceRouter);
app.use("/api/asset", assetRouter);

export default app;
