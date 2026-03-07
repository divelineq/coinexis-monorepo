import { Button } from "@ui";
import { useBalance, useConnect, useConnection, useConnectors } from "wagmi";
import { useTickers } from "./useTickers";
import { WallerPopover } from "./WalletPopover";
import { WithoutWallets } from "./WithoutWallets";

export function Wallet() {
  const { isConnected, isConnecting, chainId, address } = useConnection();
  const { mutate: connect } = useConnect();
  const connectors = useConnectors();
  const { data: balance, isSuccess } = useBalance({
    address,
    chainId,
  });

  const { data: tickers } = useTickers({
    category: "spot",
    enabled: isSuccess,
  });

  if (!connectors || connectors.length === 0) {
    return <WithoutWallets />;
  }
  if (isConnecting) {
    return <div>🔄 Подключаемся...</div>;
  }

  if (isConnected && balance) {
    return (
      <WallerPopover balance={balance} address={address} tickers={tickers} />
    );
  }

  return connectors.map((connector) => (
    <Button key={connector.uid} onClick={() => connect({ connector })}>
      {connector.name}
    </Button>
  ));
}
