import { Link } from "@tanstack/react-router";

export function Wallet() {
  return (
    <>
      <li>
        <Link to="/nfts" className="font-medium [&.active]:text-primary">
          Nfts
        </Link>
      </li>
      <li>
        <Link to="/portfolio" className="font-medium [&.active]:text-primary">
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          to="/transactions"
          className="font-medium [&.active]:text-primary"
        >
          Transactions
        </Link>
      </li>
    </>
  );
}
