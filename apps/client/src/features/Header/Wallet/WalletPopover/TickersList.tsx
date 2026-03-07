import type { TickersSpotResponse } from "@api";

type Props = {
  tickers: TickersSpotResponse["list"] | undefined;
};

export function TickersList({ tickers }: Props) {
  if (!tickers) {
    return <div>Нет данных о валютах</div>;
  }

  return (
    <ul className="overflow-y-auto p-2 border border-accent rounded-md size-full">
      <h2>Токены</h2>
      {tickers?.map((ticker) => {
        return (
          <li key={ticker.symbol} className="flex justify-between items-center">
            <span>{ticker.symbol}</span>
            <span>
              {Number(ticker.lastPrice).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
