import { Link } from "@tanstack/react-router";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@ui";

export function Market() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Market</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-100 gap-4">
          <li>
            <NavigationMenuLink asChild>
              <Link
                className="[&.active]:text-primary"
                to="/market/$category"
                params={{ category: "spot" }}
              >
                <div className="font-medium">Spot</div>
                <div className="text-muted-foreground">
                  Direct token-to-token trading at current market prices.
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <Link
                className="[&.active]:text-primary"
                to="/market/$category"
                params={{ category: "linear" }}
              >
                <div className="font-medium">USDT Perpetual</div>
                <div className="text-muted-foreground">
                  USDT-margined perpetual contracts settled in stablecoins.
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink asChild>
              <Link
                className="[&.active]:text-primary"
                to="/market/$category"
                params={{ category: "inverse" }}
              >
                <div className="font-medium">Coin Perpetual</div>
                <div className="text-muted-foreground">
                  Coin-margined contracts settled in the base cryptocurrency.
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
