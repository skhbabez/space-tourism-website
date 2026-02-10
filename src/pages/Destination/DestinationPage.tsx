import clsx from "clsx";
import { useId, type ComponentPropsWithRef } from "react";
import { Link, useLoaderData } from "@tanstack/react-router";

const DestinationPage = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  const destinations = useLoaderData({ from: "/destination" });
  const destination = useLoaderData({ from: "/destination/$destinationId" });
  const currentRouteId = destination.id;
  const tabId = useId();

  return (
    <div className={clsx("p-6 md:p-10 xl:p-12 h-full", className)} {...props}>
      <section className="max-w-277.5 mx-auto space-y-6 md:max-w-172 xl:max-w-277.5 h-full flex flex-col">
        <h1 className="text-6-mobile md:text-5-tablet xl:text-5-desktop font-barlow-condensed uppercase text-white text-center md:text-start">
          <span className="font-bold text-white/25 pe-6">01</span>pick your
          destination
        </h1>
        <div className="flex flex-col gap-8 xl:flex-row xl:justify-between xl:max-h-183.5 xl:h-full">
          <div className="px-[28.2%] py-[1.65625rem] md:py-10.5 md:px-[27.06%] xl:px-[1.84375rem] xl:flex-1 xl:flex xl:items-center">
            <img className="mx-auto" src={destination.images.webp} />
          </div>
          {/* make ths a true tablist with arrow navigation?*/}
          <div className="flex flex-col self-center xl:flex-1 gap-6 xl:gap-10 max-w-81.75 md:max-w-lg xl:max-w-111.25">
            <ul
              role="tablist"
              className="self-center xl:self-start flex gap-8 h-fit"
            >
              {destinations.map((destination) => (
                <div className="min-h-8 rounded-t-xs flex flex-col justify-between outline-none has-focus-visible:bg-white/10 transition-colors duration-300 ease-in-out motion-reduce:transition-none">
                  <Link
                    id={`tab-${tabId}`}
                    role="tab"
                    aria-selected={destination.id === currentRouteId}
                    aria-controls={`tabpanel-${tabId}`}
                    to="/destination/$destinationId"
                    params={{ destinationId: destination.id }}
                    className={clsx(
                      "outline-none text-8-mobile md:text-8-desktop text-blue-300 uppercase peer font-barlow-condensed",
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
            <div
              id={`tabpanel-${tabId}`}
              role="tabpanel"
              tabIndex={0}
              aria-labelledby={`tab-${tabId}`}
              className="contents"
            >
              <div className="space-y-4 min-h-54 md:min-h-48.75 xl:min-h-63.5 ">
                <h2 className="text-center xl:text-start text-2-mobile md:text-2-tablet xl:text-2-desktop font-bellefair text-white uppercase">
                  {destination.name}
                </h2>
                <p className="text-center xl:text-start text-9-mobile md:text-9-tablet xl:text-9-desktop font-barlow text-blue-300">
                  {destination.description}
                </p>
              </div>
              <hr className="border-t-2 border-[#979797]/25" />
              <dl className="uppercase text-center xl:text-start flex flex-col gap-6 md:flex-row">
                <div className="space-y-3 md:flex-1">
                  <dt className="font-barlow-condensed text-7-desktop text-blue-300">
                    avg. distance
                  </dt>
                  <dd className="font-bellefair text-6-desktop text-white">
                    {destination.distance}
                  </dd>
                </div>

                <div className="space-y-3 md:flex-1">
                  <dt className="font-barlow-condensed text-7-desktop text-blue-300">
                    est. travel time
                  </dt>
                  <dd className="font-bellefair text-6-desktop text-white">
                    {destination.travel}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
