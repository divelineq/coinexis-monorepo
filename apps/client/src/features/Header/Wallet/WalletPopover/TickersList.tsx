import type { TickersSpotResponse } from "@api";
import cx from "classix";
import { TrendingUp } from "lucide-react";
import { ClipLoader } from "react-spinners";

type Props = {
  tickers: TickersSpotResponse["list"] | undefined;
};

export function TickersList({ tickers }: Props) {
  if (!tickers) {
    return (
      <div className="flex items-center justify-center p-8 text-muted-foreground">
        <ClipLoader size={24} color="var(--buy-color)" />
        <span className="ml-2">Загружаем цены...</span>
      </div>
    );
  }

  return (
    <div className="space-y-3 p-4 bg-card border border-border rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-buy" />
          Bybit Live
        </h2>
        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
          {tickers.length} пар
        </span>
      </div>

      <ul className="max-h-60 flex flex-col gap-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
        {tickers.map((ticker, index) => {
          const price = Number(ticker.lastPrice);
          const change24h = Number(ticker.price24hPcnt);
          const isUp = change24h >= 0;

          return (
            <li
              key={ticker.symbol}
              className={cx(
                "flex items-center justify-between py-1 px-3 rounded-md transition-all hover:bg-accent hover:shadow-md cursor-pointer group",
                index % 2 === 0 ? "bg-muted/30" : "bg-card/80",
              )}
            >
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <div className="min-w-0">
                  <div className="font-semibold text-foreground truncate">
                    {ticker.symbol.replace("USDT", "")}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {ticker.symbol}
                  </div>
                </div>
              </div>

              <div className="text-right min-w-27.5">
                <div className="text-lg font-bold text-foreground">
                  ${price.toLocaleString()}
                </div>
                <div
                  className={cx(
                    "text-sm font-mono px-2 py-0.5 rounded-full",
                    isUp ? "text-buy" : "text-sell",
                  )}
                >
                  {isUp ? "+" : ""}
                  {change24h.toFixed(2)}%
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
