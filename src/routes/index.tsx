import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Home - Space Tourism - Frontendmentor",
      },
    ],
    styles: [
      {
        children: `body {
                  background-image: url("/assets/home/background-home-mobile.jpg");
                }`,
      },
      {
        media: "all and (min-width: 768px)",
        children: `body {
                  background-image: url("/assets/home/background-home-tablet.jpg");
                }`,
      },
      {
        media: "all and (min-width: 1280px)",
        children: `body {
                  background-image: url("/assets/home/background-home-desktop.jpg");
                }`,
      },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/"!</div>;
}
