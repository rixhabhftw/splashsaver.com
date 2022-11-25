import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

export const SecondaryHeading = ({ children, href }: Props) => {
  return (
    <Link href={href} scroll={false}>
      <h1 className="font-bold text-slate-900 text-3xl tracking-tight">
        {children}
      </h1>
    </Link>
  );
};
