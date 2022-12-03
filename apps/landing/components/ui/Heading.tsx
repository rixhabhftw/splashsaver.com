type Props = {
  children: React.ReactNode;
};

export const Heading = ({ children }: Props) => {
  return (
    <h1 className="font-black text-slate-900 sm:text-5xl text-4xl tracking-tighter">
      {children}
    </h1>
  );
};
