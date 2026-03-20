import { createFileRoute } from "@tanstack/react-router";
import { fetchTechnology } from "../../data";
import TechnologyPage from "../../pages/Technology/TechnologyPage";

export const Route = createFileRoute("/technology/$technologyId")({
  loader: async ({ params: { technologyId } }) => {
    const data = await fetchTechnology(technologyId);
    if (data) {
      return data;
    }
    throw Route.redirect({
      to: "/technology",
    });
  },
  component: TechnologyPage,
});
