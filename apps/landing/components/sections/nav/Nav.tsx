import { WEB_PAGE } from "@splashsaver/lib";
import { FiMenu } from "react-icons/fi";
import { Button } from "@splashsaver/ui";
import { NavLink } from "./NavLink";
import { LINKS } from "./links";
import Link from "next/link";

export const Nav = () => {
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
      <FiMenu className="lg:hidden flex text-slate-900 text-xl" />
    </nav>
  );
};
