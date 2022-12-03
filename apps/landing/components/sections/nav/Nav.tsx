import { DOCS_PAGE, WEB_PAGE } from "@splashsaver/lib";
import { FiMenu } from "react-icons/fi";
import { Button, Dropdown } from "@splashsaver/ui";
import { NavLink } from "./NavLink";
import { LINKS } from "./links";
import Link from "next/link";

export const Nav = () => {
  const DROPDOWN_MENU_SECTIONS = {
    parts: [
      {
        label: undefined,
        id: 1,
        items: [
          {
            id: 1,
            text: "Pricing",
            link: "#pricing",
            external: false,
            dangerousAction: false,
            type: "text",
            click: undefined,
          },
          {
            id: 2,
            text: "Blog",
            link: "/blog",
            external: false,
            dangerousAction: false,
            type: "text",
            click: undefined,
          },
          {
            id: 3,
            text: "Team",
            link: "/team",
            external: false,
            dangerousAction: false,
            type: "text",
            click: undefined,
          },
          {
            id: 4,
            text: "Docs",
            link: DOCS_PAGE,
            external: true,
            dangerousAction: false,
            type: "link",
            click: undefined,
          },
        ],
      },
    ],
  };
  return (
    <nav className="relative flex mx-auto items-center justify-between w-full h-20">
      <div className="flex items-center justify-center">
        <Link className="outline-none pr-5" href="/">
          <h1 className="sm:text-xl text-lg font-bold text-slate-900">
            splashsaver.com
          </h1>
        </Link>
      </div>
      <div className="mx-auto hidden lg:flex">
        {LINKS.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            target={link.external ? "_blank" : "_self"}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      <div className="items-center justify-center hidden lg:flex">
        <NavLink href={`${WEB_PAGE}/auth/login`} target="_blank">
          Sign In
        </NavLink>
        <Link href={`${WEB_PAGE}/auth/signup`} className="ml-5" target="_blank">
          <Button>Create Account</Button>
        </Link>
      </div>
      <div className="lg:hidden flex">
        <Dropdown
          sections={DROPDOWN_MENU_SECTIONS}
          sideOffset={10}
          style={{ marginRight: "2rem" }}
        >
          <button>
            <FiMenu className=" text-slate-900 text-xl" />
          </button>
        </Dropdown>
      </div>
    </nav>
  );
};
