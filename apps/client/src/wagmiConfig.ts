import { createConfig, http } from "wagmi";
import {
  arbitrum,
  aurora,
  avalanche,
  base,
  bsc,
  cronos,
  gnosis,
  mainnet,
  moonbeam,
  scroll,
} from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [
    mainnet,
    arbitrum,
    base,
    scroll,
    bsc,
    avalanche,
    cronos,
    gnosis,
    aurora,
    moonbeam,
  ],
  transports: {
    [mainnet.id]: http("https://1rpc.io/eth"),
    [arbitrum.id]: http("https://arb1.arbitrum.io/rpc"),
    [base.id]: http("https://mainnet.base.org"),
    [scroll.id]: http("https://rpc.scroll.io"),
    [bsc.id]: http("https://bsc-dataseed1.binance.org"),
    [avalanche.id]: http("https://api.avax.network/ext/bc/C/rpc"),
    [cronos.id]: http("https://evm.cronos.org"),
    [gnosis.id]: http("https://rpc.gnosischain.com"),
    [aurora.id]: http("https://mainnet.aurora.dev"),
    [moonbeam.id]: http("https://rpc.api.moonbeam.network"),
  },
});
