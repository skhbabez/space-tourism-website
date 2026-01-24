import { createFileRoute } from "@tanstack/react-router";
import { fetchCrew } from "../../data";

export const Route = createFileRoute("/crew/$crewId")({
  loader: async ({ params: { crewId } }) => fetchCrew(crewId),
  component: RouteComponent,
});

function RouteComponent() {
  const crew = Route.useLoaderData();
  return <div>Hello "{crew.name}"!</div>;
}
