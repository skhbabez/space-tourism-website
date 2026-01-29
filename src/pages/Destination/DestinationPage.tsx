import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";
import { useLoaderData } from "@tanstack/react-router";

const DestinationPage = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  const destinations = useLoaderData({ from: "/destination" });
  const destinationData = useLoaderData({
    from: "/destination/$destinationId",
  });

  return (
    <div
      className={clsx("px-6 py-6 md:py-32 md:px-10 h-full", className)}
      {...props}
    ></div>
  );
};

export default DestinationPage;
