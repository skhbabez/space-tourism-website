import { createLink } from "@tanstack/react-router";
import clsx from "clsx";
import type { ComponentPropsWithRef } from "react";

const NumPagination = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"ol">) => {
  return (
    <ol
      className={clsx(
        "num-pagination-counter flex xl:flex-col gap-4 xl:gap-8",
        className,
      )}
      {...props}
    >
      {children}
    </ol>
  );
};

interface NumPaginationLinkProps extends Omit<
  ComponentPropsWithRef<"a">,
  "children"
> {
  selected?: boolean;
}

const NumPaginationLink = createLink(
  ({ className, selected = false, ...props }: NumPaginationLinkProps) => {
    return (
      <li>
        <a
          className={clsx(
            "font-bellefair text-4-mobile md:text-4-tablet xl:text-4-desktop border rounded-full aspect-square h-10 md:h-14 xl:h-20 outline-2 outline-white/0  transition-all duration-300 motion-reduce:transition-none",
            selected
              ? "text-blue-900 bg-white border-white focus-visible:outline-white/80"
              : "text-white border-white/25 hover:outline-white/25 focus-visible:outline-white/25",
            className,
          )}
          {...props}
        ></a>
      </li>
    );
  },
);

export { NumPagination, NumPaginationLink };
