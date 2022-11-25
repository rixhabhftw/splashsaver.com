import { Button } from "@splashsaver/ui";
import { NavLink } from "./NavLink";
import { LINKS } from "./links";
import { Logo } from "./Logo";

// Next.js
import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-full h-20 top-0">
      <div className="flex items-center justify-center">
        <Link className="outline-none" href="/">
          <Logo />
        </Link>
        <div className="ml-8">
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
      </div>
      <div className="flex items-center justify-center">
        <NavLink href="/" target="_blank">
          Sign In
        </NavLink>
        <div className="ml-6">
          <Button>Create Account</Button>
        </div>
      </div>
    </nav>
  );
};
