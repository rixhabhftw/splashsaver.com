import { Button, TooltipWrapped } from "@splashsaver/ui";
import { WEB_PAGE } from "@splashsaver/lib";
import { NavLink } from "./NavLink";
import { LINKS } from "./links";

// Next.js
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="relative flex mx-auto items-center justify-between w-full h-20">
      <div className="flex items-center justify-center">
        <Link className="outline-none pr-5" href="/">
          <h1 className="text-2xl font-bold text-slate-900">splashsaver.com</h1>
        </Link>
      </div>
      <div className="mx-auto">
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
      <div className="flex items-center justify-center">
        <NavLink href={`${WEB_PAGE}/auth/login`} target="_blank">
          Sign In
        </NavLink>
        <Link href={`${WEB_PAGE}/auth/signup`} className="ml-6" target="_blank">
          <Button>Create Account</Button>
        </Link>
      </div>
    </nav>
  );
};
