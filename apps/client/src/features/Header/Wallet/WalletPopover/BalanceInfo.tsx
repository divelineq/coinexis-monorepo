import type { GetBalanceData } from "wagmi/query";

type Props = {
  balance: GetBalanceData | undefined;
  isLoading: boolean;
};

export function BalanceInfo({ balance, isLoading }: Props) {
  if (!isLoading && !balance) {
    return <span>Нет данных</span>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <span>{balance?.symbol || ""}</span>
      <span>
        {Number(balance?.value || "").toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </>
  );
}
