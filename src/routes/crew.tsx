import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/crew")({
  head: () => ({
    meta: [
      {
        title: "Crew - Space Tourism - Frontendmentor",
      },
    ],
    styles: [
      {
        children: `body {
                  background-image: url("/assets/crew/background-crew-mobile.jpg");
                }`,
      },
      {
        media: "all and (min-width: 768px)",
        children: `body {
                  background-image: url("/assets/crew/background-crew-tablet.jpg");
                }`,
      },
      {
        media: "all and (min-width: 1280px)",
        children: `body {
                  background-image: url("/assets/crew/background-crew-desktop.jpg");
                }`,
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/crew"!</div> <Outlet />;
    </>
  );
}
