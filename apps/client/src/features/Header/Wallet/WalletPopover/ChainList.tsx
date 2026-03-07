import { Button } from "@ui";
import cx from "classix";
import { useSwitchChain } from "wagmi";
import type { GetChainsReturnType } from "wagmi/actions";

type Props = {
  chains: GetChainsReturnType;
  currentChainId: number;
};

export function ChainList({ chains, currentChainId }: Props) {
  const { mutate } = useSwitchChain();

  return (
    <ul className="grid grid-cols-3 gap-2">
      {chains.map((chain) => (
        <li key={chain.id}>
          <Button
            onClick={() => mutate({ chainId: chain.id })}
            className={cx(
              "w-full truncate text-sm",
              chain.id !== currentChainId && "bg-accent",
            )}
          >
            {chain.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
