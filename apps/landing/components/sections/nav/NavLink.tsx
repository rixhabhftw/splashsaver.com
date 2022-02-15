import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  target: React.HTMLAttributeAnchorTarget | undefined;
  children: React.ReactNode;
  href: string;
};

export const NavLink = ({ target, children, href }: Props) => {
  const router = useRouter();

  const pathname = router.pathname.substring(1, router.pathname.length);

  const baseStyles =
    "text-gray-800 duration-300 font-semibold hover:text-gray-900 focus:ring-4 ring-slate-300 rounded px-5 py-3 outline-none";

  return (
    <Link
      className={`${
        pathname === children?.toString().toLowerCase()
          ? `${baseStyles} text-gray-900 font-semibold bg-gray-100`
          : baseStyles
      }`}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
};
