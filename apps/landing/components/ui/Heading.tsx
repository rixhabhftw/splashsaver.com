type Props = {
  children: React.ReactNode;
};

export const Heading = ({ children }: Props) => {
  return <h1 className="font-black text-5xl tracking-tighter">{children}</h1>;
};
