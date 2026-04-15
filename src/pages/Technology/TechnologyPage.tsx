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
    <div
      className={clsx(
        "flex flex-col xl:flex-row max-xl:items-center gap-8 xl:w-full",
        className,
      )}
      {...props}
    >
      <div className=" xl:order-1 xl:flex xl:items-center -mx-6 md:-mx-10 xl:mx-0 xl:-me-41.25 xl:w-full max-xl:pt-16 ">
        <picture>
          <source
            media="(width >= 1280px)"
            srcSet={technology.images.portrait}
          />
          <source
            media="(width >= 768px)"
            srcSet={technology.images.landscape}
          />
          <img
            className="object-cover w-screen max-h-64.5 md:max-h-89 xl:max-h-150 "
            src={technology.images.portrait}
            alt={technology.name}
          />
        </picture>
      </div>
      <div className="flex flex-col gap-10 xl:flex-row xl:gap-16 xl:w-full xl:min-w-158.75 items-center justify-between max-xl:max-w-lg min-h-80.75 md:min-h-87 xl:h-183.5 md:max-xl:gap-6  pt-10 xl:pt-0">
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
        <div className="flex flex-col xl:flex-1 xl:justify-center gap-4 xl:gap-6 text-center xl:text-left">
          <hgroup>
            <p className="uppercase text-4-mobile md:text-4-tablet xl:text-4-desktop text-white opacity-50 font-bellefair">
              the terminology...
            </p>
            <h1 className="uppercase text-3-mobile md:text-3-tablet xl:text-3-desktop text-white font-bellefair mt-4">
              {technology.name}
            </h1>
          </hgroup>
          <p className="text-9-mobile md:text-9-tablet xl:text-9-desktop text-blue-300 font-barlow">
            {technology.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyPage;
