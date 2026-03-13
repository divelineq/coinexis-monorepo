import { FormEvent, useState } from "react";
import { parseEther } from "viem";
import { useConnection, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";

export function SendTransaction() {
  const { isConnected } = useConnection();

  const [to, setTo] = useState<`0x${string}` | "">("");
  const [amount, setAmount] = useState("0.01");

  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction(); 

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash }); 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!to || !amount) return;

    sendTransaction({
      to,
      value: parseEther(amount), 
    });
  };

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">
        Отправить ETH
      </h2>

      {!isConnected && (
        <p className="text-sm text-red-500">
          Сначала подключи кошелёк.
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-2 max-w-sm">
        <input
          type="text"
          placeholder="0xA0Cf…251e"
          value={to}
          onChange={(e) => setTo(e.target.value as `0x${string}`)}
          className="w-full rounded border px-2 py-1 text-sm"
          disabled={!isConnected || isPending}
        />
        <input
          type="text"
          placeholder="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full rounded border px-2 py-1 text-sm"
          disabled={!isConnected || isPending}
        />

        <button
          type="submit"
          disabled={!isConnected || isPending || !to || !amount}
          className="rounded bg-blue-500 px-3 py-1 text-sm text-white disabled:opacity-50"
        >
          {isPending ? "Отправка..." : "Отправить ETH"}
        </button>
      </form>

      {hash && (
        <p className="text-xs break-all">
          Tx hash: {hash}
        </p>
      )}

      {isConfirming && (
        <p className="text-xs text-gray-500">
          Ожидание подтверждения...
        </p>
      )}

      {isConfirmed && (
        <p className="text-xs text-green-600">
          Транзакция подтверждена.
        </p>
      )}

      {error && (
        <p className="text-xs text-red-500">
          {(error as any).shortMessage || error.message}
        </p>
      )}
    </section>
  );
}
