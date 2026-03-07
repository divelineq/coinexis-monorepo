import { api } from "@api";
import { useQuery } from "@tanstack/react-query";

type Props = {
  category: string;
  symbol?: string;
  baseCoin?: string;
  expDate?: string;
  enabled: boolean;
};

export function useTickers(params: Props) {
  return useQuery({
    queryKey: ["tickers", params.category],
    queryFn: ({ signal }) => api.tickers.getTickers(params, signal),
    select: (data) =>
      data.result.list
        .slice(0, 100)
        .sort((a, b) => Number(b.volume24h) - Number(a.volume24h)),
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    enabled: params.enabled,
  });
}
