import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { useId, type ComponentPropsWithRef } from "react";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import logo from "../../assets/logo.svg";

const links = [
  { to: "/", name: "home" },
  { to: "/destination", name: "destination" },
  { to: "/crew", name: "crew" },
  { to: "/technology", name: "technology" },
];

const selected = true;
const Nav = ({
  className,
  ...props
}: Omit<ComponentPropsWithRef<"nav">, "children">) => {
  const id = useId();
  return (
    <nav
      className={clsx("p-6 flex justify-between w-full", className)}
      {...props}
    >
      <img
        width={40}
        height={40}
        src={logo}
        alt=""
        className="aspect-square w-10 md:w-12"
      />
      <button popoverTarget={id} popoverTargetAction="show">
        <FaBars size={28} className="text-blue-300" />
      </button>
      <div
        popover="auto"
        id={id}
        className={clsx(
          "bg-blue-900 left-auto fixed right-0 mx-0 backdrop-blur-xs ps-8 h-screen min-w-63.5 font-barlow-condensed space-y-12",
          "starting:[&:popover-open]:translate-x-full [&:popover-open]:translate-x-0 translate-x-full",
          "motion-reduce:transition-none transition-discrete transition-[display,translate] duration-300 ease-in-out",
        )}
      >
        <div>
          <div className="py-8 px-6 text-white text-end">
            <button type="button" popoverTarget={id} popoverTargetAction="hide">
              <FaX size={25} className="text-blue-300" />
            </button>
          </div>
          <ol start={0} className="nav-list-style space-y-8">
            {links.map(({ to, name }) => (
              <li className="relative" key={name}>
                <Link
                  className="ps-3 uppercase text-8 text-white tracking-[2px] peer"
                  to={to}
                >
                  {name}
                </Link>
                <span
                  className={clsx(
                    "hidden absolute right-0 h-full w-0.75 bg-white",
                    selected
                      ? "inline"
                      : "peer-hover:inline peer-hover:opacity-50",
                  )}
                ></span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
