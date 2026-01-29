import clsx from "clsx";
import { type ComponentPropsWithRef } from "react";
import { Link, useLoaderData } from "@tanstack/react-router";

const DestinationPage = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  const destinations = useLoaderData({ from: "/destination" });
  const destination = useLoaderData({ from: "/destination/$destinationId" });
  const currentRouteId = destination.id;

  return (
    <div className={clsx("p-6 md:p-10 xl:p-12", className)} {...props}>
      <section className="max-w-277.5 mx-auto space-y-6 md:max-w-172">
        <h1 className="text-6-mobile md:text-5-tablet xl:text-5-desktop font-barlow-condensed uppercase text-white text-center md:text-start">
          <span className="font-bold text-white/25 pe-6">01</span>pick your
          destination
        </h1>
        <div className="flex flex-col gap-8 xl:flex-row xl:justify-between">
          <div className="px-[28.2%] md:px-[27.06%] xl:px-[1.84375rem]">
            <img className="mx-auto" src={destination.images.webp} />
          </div>
          {/* make ths a true tablist with arrow navigation?*/}
          <div className="flex flex-col items-center xl:items-start">
            <ul className="flex gap-8 h-fit">
              {destinations.map((destination) => (
                <div className="min-h-8 flex flex-col justify-between">
                  <Link
                    to="/destination/$destinationId"
                    aria-current={destination.id === currentRouteId}
                    params={{ destinationId: destination.id }}
                    className={clsx(
                      "text-8-mobile md:text-8-desktop text-blue-300 uppercase peer",
                      destination.id === currentRouteId && "text-white",
                    )}
                  >
                    {destination.name}
                  </Link>
                  <div
                    className={clsx(
                      "bg-white h-0.75 w-full transition-opacity transition-discrete duration-300 ease-in-out motion-reduce:transition-none",
                      destination.id === currentRouteId
                        ? "opacity-100"
                        : "opacity-0 peer-hover:opacity-50 peer-focus-visible:opacity-50",
                    )}
                  ></div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
