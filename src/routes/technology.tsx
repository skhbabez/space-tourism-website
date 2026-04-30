import { createFileRoute, Outlet } from "@tanstack/react-router";
import { fetchTechnologies } from "../data";
import TitleLayout from "../pages/TitleLayout/TitleLayout";

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
                  background-image: url("assets/technology/background-technology-mobile.jpg");
                }`,
      },
      {
        media: "all and (768px <= width < 1280px)",
        children: `body {
                  background-image: url("assets/technology/background-technology-tablet.jpg");
                }`,
      },
      {
        media: "all and (width >= 1280px)",
        children: `body {
                  background-image: url("assets/technology/background-technology-desktop.jpg");
                }`,
      },
    ],
  }),
  loader: async () => fetchTechnologies(),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <TitleLayout count="03" title="space launch 101">
      <Outlet />
    </TitleLayout>
  );
}
