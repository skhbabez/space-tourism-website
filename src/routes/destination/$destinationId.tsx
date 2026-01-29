import { createFileRoute } from "@tanstack/react-router";
import DestinationPage from "../../pages/Destination/DestinationPage";
import { fetchDestination } from "../../data";

export const Route = createFileRoute("/destination/$destinationId")({
  loader: async ({ params: { destinationId } }) =>
    fetchDestination(destinationId),
  component: DestinationPage,
});
