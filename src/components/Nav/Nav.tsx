import { createLink, useMatchRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { useId, useRef, type ComponentPropsWithRef } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import logo from "../../assets/logo.svg";

const links = [
  { to: "/", name: "home" },
  { to: "/destination", name: "destination" },
  { to: "/crew", name: "crew" },
  { to: "/technology", name: "technology" },
];

const NavLink = createLink(
  ({ className, children, ...props }: ComponentPropsWithRef<"a">) => {
    return (
      <a
        className={clsx(
          "outline-none uppercase text-8-desktop text-white tracking-[0.125rem]",
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

interface NavListItemProps extends ComponentPropsWithRef<"li"> {
  selected?: boolean;
}

const NavListItem = ({
  selected = false,
  className,
  children,
  ...props
}: NavListItemProps) => {
  return (
    <li
      className={clsx(
        "relative has-focus-visible:bg-white/10 transition-colors duration-300 ease-in-out motion-reduce:transition-none",
        className,
      )}
      {...props}
    >
      {children}
      <span
        className={clsx(
          "absolute right-0 h-full w-0.75 md:right-auto md:left-0 md:bottom-0 md:w-full md:h-0.75 bg-white opacity-0 transition-opacity transition-discrete duration-300 ease-in-out motion-reduce:transition-none",
          selected
            ? "opacity-100"
            : "peer-focus-visible:opacity-50 peer-hover:opacity-50",
        )}
      ></span>
    </li>
  );
};

const NavList = ({
  className,
  children,
  ...props
}: ComponentPropsWithRef<"ol">) => {
  return (
    <ol start={0} className={clsx("nav-list-style", className)} {...props}>
      {children}
    </ol>
  );
};

const Nav = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"nav">, "children">) => {
  const matchRoute = useMatchRoute();
  const popoverId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const handlePopoverFocus = (event: React.ToggleEvent<HTMLDivElement>) => {
    const oldState = event.oldState;
    if (oldState === "closed") {
      closeButtonRef.current?.focus();
    } else {
      openButtonRef.current?.focus();
    }
  };
  return (
    <nav
      className={clsx(
        "p-6 md:p-0 flex justify-between items-center w-full font-barlow-condensed",
        className,
      )}
      {...props}
    >
      <img
        width={40}
        height={40}
        src={logo}
        alt=""
        className="aspect-square w-10 md:w-12 md:mx-10 xl:mx-16"
      />
      <NavList
        start={0}
        className="hidden md:flex justify-end gap-12 pe-10 xl:pe-16 backdrop-blur-lg bg-white/5 max-w-184 w-full"
      >
        {links.map(({ to, name }) => (
          <NavListItem
            className="py-[2.40625rem]"
            key={name}
            selected={!!matchRoute({ to: to, fuzzy: true })}
          >
            <NavLink className="ps-3 peer" to={to}>
              {name}
            </NavLink>
          </NavListItem>
        ))}
      </NavList>
      <button
        ref={openButtonRef}
        className="md:hidden [&:has(+div:popover-open)]:hidden"
        popoverTarget={popoverId}
        popoverTargetAction="show"
      >
        <FaBars size={28} className="text-blue-300" />
      </button>
      <div
        onToggle={handlePopoverFocus}
        popover="auto"
        id={popoverId}
        className={clsx(
          "md:hidden bg-blue-900/15 left-auto fixed right-0 mx-0 backdrop-blur-lg ps-8 h-screen min-w-63.5 space-y-12 peer",
          "starting:[&:popover-open]:translate-x-full [&:popover-open]:translate-x-0 translate-x-full",
          "motion-reduce:transition-none transition-discrete transition-[display,translate] duration-300 ease-in-out",
        )}
      >
        <div>
          <div className="py-8 px-6 text-white text-end">
            <button
              ref={closeButtonRef}
              type="button"
              popoverTarget={popoverId}
              popoverTargetAction="hide"
            >
              <FaX size={25} className="text-blue-300" />
            </button>
          </div>
          <NavList start={0} className="space-y-8">
            {links.map(({ to, name }) => (
              <NavListItem
                key={name}
                selected={!!matchRoute({ to: to, fuzzy: true })}
              >
                <NavLink className="ps-3 peer" to={to}>
                  {name}
                </NavLink>
              </NavListItem>
            ))}
          </NavList>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
