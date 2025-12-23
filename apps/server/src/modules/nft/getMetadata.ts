import axios from "axios";
import type { NftMetadata } from "./types";

export async function getMetadata(
	tokenUri: string,
): Promise<NftMetadata | null> {
	try {
		let url = tokenUri;
		if (tokenUri.startsWith("ipfs://")) {
			url = tokenUri.replace("ipfs://", "https://ipfs.io/ipfs/");
		}

		const response = await axios.get(url, { timeout: 2000 });
		const metadata = response.data;

		if (metadata.image?.startsWith("ipfs://")) {
			metadata.image = metadata.image.replace(
				"ipfs://",
				"https://ipfs.io/ipfs/",
			);
		}

		return metadata;
	} catch {
		return null;
	}
}
