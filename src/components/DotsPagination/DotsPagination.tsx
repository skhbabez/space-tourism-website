import { createLink } from "@tanstack/react-router";
import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

const DotsPagination = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"ul">) => {
  return (
    <ul className={clsx("flex gap-4 md:gap-10", className)} {...props}>
      {children}
    </ul>
  );
};

interface DotsPaginatonLinkProps extends Omit<
  ComponentPropsWithRef<"a">,
  "children"
> {
  selected?: boolean;
}

const DotsPaginatonLink = createLink(
  ({ className, selected = false, ...props }: DotsPaginatonLinkProps) => {
    return (
      <li
        className={clsx(
          "rounded-full aspect-square h-2.5 md:h-3.75 bg-white",
          selected || "opacity-[17.44%]",
          className,
        )}
      >
        <a {...props} />
      </li>
    );
  },
);

export { DotsPagination, DotsPaginatonLink };
