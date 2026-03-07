import { useAccount, useConfig, useConnect, useDisconnect } from "wagmi";

export function BybitWallet(){
  const config = useConfig()
  const { address, isConnected, isConnecting } = useAccount()
  const { mutate: connect } = useConnect()
  const  {mutate: disconnect}  = useDisconnect()

  const bybitConnector = config.connectors.find(c => c.id === 'com.bybit')

  if (isConnecting) return <div>🔄 Подключаемся...</div>
  if (isConnected) {
    return (
      <div className="p-3 bg-primary rounded flex items-center gap-2">
        <span>{address?.slice(0,6)}...{address?.slice(-4)}</span>
        <button 
          onClick={() => disconnect()}
          className="px-3 py-1 bg-red-500 hover:bg-red-800 text-white rounded text-sm cursor-pointer"
        >
          Отключить
        </button>
      </div>
    )
  }

  return (
    <button
      onClick={() => bybitConnector && connect({ connector: bybitConnector })}
      className="w-full p-3 border rounded bg-primary hover:bg-primary/50 flex cursor-pointer items-center gap-2"
      disabled={!bybitConnector}
    >
      Connect Bybit Wallet 3.0
    </button>
  )
}
