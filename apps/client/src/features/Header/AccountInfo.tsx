import { api } from "@api";
import { useQuery } from "@tanstack/react-query";

function AccountInfo() {
  const { data, isLoading } = useQuery({
    queryKey: ["wallet-balance", "UNIFIED"],
    queryFn: ({ signal }) => api.walletBalance.getMany(signal, "UNIFIED"),
  });

  const unifiedBalance = Number(data?.totalWalletBalance);
  const hasBalance = !Number.isNaN(unifiedBalance);

  return (
    <div>
      <p className="text-sm">
        Единый торговый:{" "}
        <span>
          {isLoading
            ? "Загрузка..."
            : hasBalance
              ? unifiedBalance.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: 2,
                })
              : "Нет данных"}
        </span>
      </p>
    </div>
  );
}

export { AccountInfo };
