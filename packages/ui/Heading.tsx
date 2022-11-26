type Props = {
  children: React.ReactNode;
};

export const Heading = ({ children }: Props) => {
  return (
    <h1 className="font-bold text-slate-900 text-2xl tracking-tight">
      {children}
    </h1>
  );
};
