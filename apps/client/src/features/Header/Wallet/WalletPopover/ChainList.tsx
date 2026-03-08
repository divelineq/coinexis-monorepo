import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@ui";
import { useSwitchChain } from "wagmi";
import type { GetChainsReturnType } from "wagmi/actions";

type Props = {
  chains: GetChainsReturnType;
  currentChainId: number;
};

export function ChainList({ chains, currentChainId }: Props) {
  const { mutate } = useSwitchChain();
  const defaultValue = chains.find(
    (chain) => chain.id === currentChainId,
  )?.name;

  return (
    <Combobox items={chains} defaultValue={defaultValue}>
      <ComboboxInput placeholder="Select a chain" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item: GetChainsReturnType[number]) => (
            <ComboboxItem
              key={item.id}
              value={item.name}
              onClick={() => mutate({ chainId: item.id })}
            >
              {item.name}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
