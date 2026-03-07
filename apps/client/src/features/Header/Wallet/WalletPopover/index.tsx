import type { TickersSpotResponse } from "@api";
import {
  Button,
  CopyableText,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui";
import { useDisconnect } from "wagmi";
import type { GetBalanceData } from "wagmi/query";
import { TickersList } from "./TickersList";

type Props = {
  balance: GetBalanceData;
  address: string | undefined;
  tickers: TickersSpotResponse["list"] | undefined;
};

export function WallerPopover({ balance, address, tickers }: Props) {
  const { mutate: disconnect } = useDisconnect();

  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          <span>{balance?.symbol}</span>
          <span>
            {Number(balance?.value).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex-1 flex flex-col w-100 gap-2 h-180">
        <h1 className="flex gap-2 truncate h-full items-center">
          <span>Wallet:</span>
          <CopyableText value={address!} />
        </h1>
        <div className="flex gap-2 border p-2 border-accent rounded-md w-full text-xl justify-center">
          <span>{balance.symbol}</span>
          <span>
            {Number(balance?.value).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </span>
        </div>
        <TickersList tickers={tickers} />
        <Button
          className="bg-red-500 hover:bg-red-800"
          onClick={() => disconnect()}
        >
          Отключиться
        </Button>
      </PopoverContent>
    </Popover>
  );
}
