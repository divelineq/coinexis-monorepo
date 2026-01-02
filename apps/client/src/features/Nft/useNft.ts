import { api } from "@api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { MergedNftMetadata } from "features/Nft/ValidationSchema";


export function useNft(wallet: string | null, offset: number, limit: number) {
	return useQuery<MergedNftMetadata>({
		queryKey: ["nft", wallet, offset, limit],
		queryFn: ({ signal }) => api.nft.getMany(wallet, signal, limit, offset),
		enabled: !!wallet,
		placeholderData: keepPreviousData,
		staleTime: Number.POSITIVE_INFINITY,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchOnReconnect: false,
		refetchInterval: false,
	});
}
