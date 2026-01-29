import { createFileRoute } from "@tanstack/react-router";
import DestinationPage from "../../pages/Destination/DestinationPage";
import { fetchDestination } from "../../data";

export const Route = createFileRoute("/destination/$destinationId")({
  loader: async ({ params: { destinationId } }) => {
    const data = await fetchDestination(destinationId);
    if (data) {
      return data;
    }
    throw Route.redirect({
      to: "/destination",
    });
  },
  component: DestinationPage,
});
