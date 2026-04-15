import clsx from "clsx";
import { type ComponentPropsWithRef } from "react";
import { useLoaderData } from "@tanstack/react-router";
import {
  NumPagination,
  NumPaginationLink,
} from "../../components/NumPagination/NumPagination";

const TechnologyPage = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"div">, "children">) => {
  const technologies = useLoaderData({ from: "/technology" });
  const technology = useLoaderData({ from: "/technology/$technologyId" });
  const currentRouteId = technology.id;
  return (
    <div className={clsx("p-6 md:p-10 xl:p-12 h-full", className)} {...props}>
      <div className="max-w-318.75 mx-auto space-y-6 md:max-w-172 xl:max-w-318.75 h-full flex flex-col">
        <h1 className="text-6-mobile md:text-5-tablet xl:text-5-desktop font-barlow-condensed uppercase text-white text-center md:text-start">
          <span className="font-bold text-white/25 pe-6">03</span>
          space launch 101
        </h1>

        <div
          className={
            "flex flex-col xl:flex-row max-xl:items-center gap-8 xl:w-full"
          }
          {...props}
        >
          <div className="xl:flex-1 xl:order-1 xl:flex xl:items-center -ml-10 w-[calc(100%+80px)] xl:w-full ">
            <picture className="">
              <source
                media="(width >= 1280px)"
                srcSet={technology.images.portrait}
              />
              <img
                className="w-full"
                src={technology.images.landscape}
                alt={technology.name}
              />
            </picture>
          </div>
          <div className="flex flex-col xl:flex-1 xl:flex-row xl:gap-16 xl:w-full items-center justify-between max-xl:max-w-lg min-h-80.75 md:min-h-87 xl:h-183.5 md:max-xl:gap-6  pt-10 xl:pt-0">
            <NumPagination>
              {technologies.map((technology) => (
                <NumPaginationLink
                  key={technology.id}
                  selected={currentRouteId == technology.id}
                  to="/technology/$technologyId"
                  params={{ technologyId: technology.id }}
                />
              ))}
            </NumPagination>
            <div className="flex flex-col xl:flex-1 xl:justify-center gap-6  text-center xl:text-left">
              <hgroup>
                <p className="uppercase text-4-mobile md:text-4-tablet xl:text-4-desktop text-white opacity-50 font-bellefair">
                  the terminology...
                </p>
                <h1 className="uppercase text-3-mobile md:text-3-tablet xl:text-3-desktop text-white font-bellefair mt-2 md:mt-4">
                  {technology.name}
                </h1>
              </hgroup>
              <p className="text-9-mobile md:text-9-tablet xl:text-9-desktop text-blue-300 font-barlow">
                {technology.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
