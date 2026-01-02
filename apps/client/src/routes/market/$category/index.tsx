import { Market } from "@features";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/market/$category/")({
	loader: ({ params }) => {
		return { category: params.category };
	},
	component: (param) => <Market {...param} />,
	pendingComponent: () => <Market.Skeleton />,
});
