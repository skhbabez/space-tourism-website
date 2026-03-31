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
    <>
      <div
        className={clsx(
          "flex flex-col xl:flex-row max-xl:items-center gap-8",
          className,
        )}
        {...props}
      >
        <div className="flex flex-col xl:flex-1  items-center xl:items-start justify-between max-xl:max-w-lg min-h-79.75 md:min-h-76.25 xl:h-183.5 md:max-xl:gap-6  pt-10 xl:pt-0">
          <div className="xl:flex-1 px-7 xl:px-0 pt-1.25 md:pt-4 xl:pt-7.25 xl:flex xl:items-center">
            <picture>
              <source
                media="(width >= 1280px)"
                srcSet={technology.images.portrait}
              />
              <img src={technology.images.landscape} alt={technology.name} />
            </picture>
          </div>
          <div className="flex flex-col xl:flex-1  xl:justify-center gap-6  text-center xl:text-left">
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
          <NumPagination className="xl:pb-12">
            {technologies.map((technology) => (
              <NumPaginationLink
                key={technology.id}
                selected={currentRouteId == technology.id}
                to="/technology/$technologyId"
                params={{ technologyId: technology.id }}
              />
            ))}
          </NumPagination>
        </div>
      </div>
    </>
  );
};

export default TechnologyPage;
