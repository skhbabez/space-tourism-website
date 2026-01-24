import { createFileRoute } from "@tanstack/react-router";
import { fetchDestination } from "../../data";

export const Route = createFileRoute("/destination/$destinationId")({
  loader: async ({ params: { destinationId } }) =>
    fetchDestination(destinationId),
  component: RouteComponent,
});

function RouteComponent() {
  const destination = Route.useLoaderData();
  return <div>Hello "{destination.name}"!</div>;
}
