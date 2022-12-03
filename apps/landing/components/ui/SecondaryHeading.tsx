import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

export const SecondaryHeading = ({ children, href }: Props) => {
  return (
    <Link href={href} scroll={false}>
      <h1 className="font-extrabold text-slate-900 sm:text-3xl text-2xl tracking-tight">
        {children}
      </h1>
    </Link>
  );
};
