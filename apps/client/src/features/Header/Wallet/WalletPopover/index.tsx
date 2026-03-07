import type { TickersSpotResponse } from "@api";
import {
  Button,
  CopyableText,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui";
import { useChainId, useChains, useDisconnect } from "wagmi";
import type { GetBalanceData } from "wagmi/query";
import { BalanceInfo } from "./BalanceInfo";
import { ChainList } from "./ChainList";
import { TickersList } from "./TickersList";

type Props = {
  balance: GetBalanceData | undefined;
  address: string | undefined;
  tickers: TickersSpotResponse["list"] | undefined;
  isLoading: boolean;
};

export function WallerPopover({ balance, address, tickers, isLoading }: Props) {
  const { mutate: disconnect } = useDisconnect();
  const currentChainId = useChainId();
  const chains = useChains();

  return (
    <Popover>
      <PopoverTrigger>
        <Button>
          <BalanceInfo balance={balance} isLoading={isLoading} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex-1 flex flex-col w-100 gap-2 h-200 justify-between">
        <h1 className="flex gap-2 text-primary ">
          {chains.find((chain) => chain.id === currentChainId)?.name}
        </h1>
        <h2 className="flex gap-2 truncate shrink-0 items-center">
          <span>Wallet:</span>
          <CopyableText value={address!} />
        </h2>
        <div className="flex gap-2 border p-2 border-accent rounded-md w-full text-xl justify-center">
          <BalanceInfo balance={balance} isLoading={isLoading} />
        </div>
        <ChainList chains={chains} currentChainId={currentChainId} />
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
