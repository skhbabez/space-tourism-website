import { createFileRoute } from "@tanstack/react-router";
import { fetchTechnology } from "../../data";

export const Route = createFileRoute("/technology/$technologyId")({
  loader: async ({ params: { technologyId } }) => fetchTechnology(technologyId),
  component: RouteComponent,
});

function RouteComponent() {
  const technology = Route.useLoaderData();
  return <div>Hello "{technology.name}"!</div>;
}
