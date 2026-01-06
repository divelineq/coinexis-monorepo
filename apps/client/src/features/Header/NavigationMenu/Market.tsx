import { Link } from "@tanstack/react-router";

function Market() {
  return (
    <>
      <li>
        <Link
          to="/market/$category"
          className="[&.active]:text-primary font-medium"
          params={{ category: "spot" }}
        >
          Spot
        </Link>
      </li>
      <li>
        <Link
          to="/market/$category"
          className="[&.active]:text-primary font-medium"
          params={{ category: "linear" }}
        >
          USDT Perpetual
        </Link>
      </li>
      <li>
        <Link
          to="/market/$category"
          className="[&.active]:text-primary font-medium"
          params={{ category: "inverse" }}
        >
          Coin Perpetual
        </Link>
      </li>
    </>
  );
}

export { Market };
