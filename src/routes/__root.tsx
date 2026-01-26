import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Nav } from "../components/Nav/Nav";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Nav />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
