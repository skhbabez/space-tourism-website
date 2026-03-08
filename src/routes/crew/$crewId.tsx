import { createFileRoute } from "@tanstack/react-router";
import { fetchCrew } from "../../data";
import CrewPage from "../../pages/Crew/CrewPage";

export const Route = createFileRoute("/crew/$crewId")({
  loader: async ({ params: { crewId } }) => {
    const data = await fetchCrew(crewId);
    if (data) {
      return data;
    }
    throw Route.redirect({
      to: "/crew",
    });
  },
  component: CrewPage,
});
