import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http("https://1rpc.io/eth"),
    [sepolia.id]: http("https://rpc.sepolia.org"),
  },
});
