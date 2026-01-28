import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Nav } from "../components/Nav/Nav";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "UTF-8",
      },
      {
        name: "description",
        content:
          "Challenge by https://www.frontendmentor.io. Coded by Sascha Khbabez ",
      },
      {
        title: "Space Tourism - Frontendmentor",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/assets/favicon.png",
      },
    ],
    styles: [
      {
        children: `body {
                  background-size:cover;
                  background-position:center;
                  background-repeat:no-repeat;
                  background-color:var(--color-blue-900);
                }`,
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <div className="min-h-screen grid grid-rows-[auto_1fr]">
        <Nav />
        <Outlet />
      </div>

      <TanStackRouterDevtools />
    </>
  );
}
