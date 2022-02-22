import Link from "next/link";

type Props = {
  target: React.HTMLAttributeAnchorTarget | undefined;
  children: React.ReactNode;
  href: string;
};

export const NavLink = ({ target, children, href }: Props) => {
  return (
    <Link
      className="text-gray-800 font-semibold duration-300 hover:text-gray-900 focus:ring-4 ring-slate-300
      rounded px-4 py-2 outline-none"
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};
