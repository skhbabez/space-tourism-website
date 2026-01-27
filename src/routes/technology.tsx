import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      {
        title: "Technology - Space Tourism - Frontendmentor",
      },
    ],
    styles: [
      {
        media: "all and (width < 768px)",
        children: `body {
                  background-image: url("/assets/technology/background-technology-mobile.jpg");
                }`,
      },
      {
        media: "all and (768px <= width < 1280px)",
        children: `body {
                  background-image: url("/assets/technology/background-technology-tablet.jpg");
                }`,
      },
      {
        media: "all and (width >= 1280px)",
        children: `body {
                  background-image: url("/assets/technology/background-technology-desktop.jpg");
                }`,
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/technology"!</div>
      <Outlet />
    </>
  );
}
