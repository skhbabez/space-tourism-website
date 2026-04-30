import { createFileRoute, Outlet } from "@tanstack/react-router";
import { fetchDestinations } from "../data";
import TitleLayout from "../pages/TitleLayout/TitleLayout";

export const Route = createFileRoute("/destination")({
  head: () => ({
    meta: [
      {
        title: "Destination - Space Tourism - Frontendmentor",
      },
    ],
    styles: [
      {
        media: "all and (width < 768px)",
        children: `body {
                  background-image: url("assets/destination/background-destination-mobile.jpg");
                }`,
      },
      {
        media: "all and (768px <= width < 1280px)",
        children: `body {
                  background-image: url("assets/destination/background-destination-tablet.jpg");
                }`,
      },
      {
        media: "all and (width >= 1280px)",
        children: `body {
                  background-image: url("assets/destination/background-destination-desktop.jpg");
                }`,
      },
    ],
  }),
  loader: async () => fetchDestinations(),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <TitleLayout count="01" title="pick your destination">
      <Outlet />
    </TitleLayout>
  );
}
