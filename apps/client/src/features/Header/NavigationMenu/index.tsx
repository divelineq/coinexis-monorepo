import { Link } from "@tanstack/react-router";
import { Market } from "./Market";
import { Wallet } from "./Wallet";

export function NavigationMenu() {
  return (
    <ul className="flex gap-3">
      <li>
        <Link className="[&.active]:text-primary" to="/">
          Home
        </Link>
      </li>
      <Market />
      <Wallet />
    </ul>
  );
}
