import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { BybitWallet } from "./BybitWallet";
import { ModeToggle } from "./ModeToggle";
import { NavigationMenu as NavigationMenuComponent } from "./NavigationMenu";

export function Header() {
  return (
    <>
      <div className="p-2 flex text-center justify-between items-center">
        <NavigationMenuComponent />
        <div className="flex gap-8 items-center">
          <BybitWallet/>
          <ModeToggle />
        </div>
      </div>
      <hr className="border-custom" />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
