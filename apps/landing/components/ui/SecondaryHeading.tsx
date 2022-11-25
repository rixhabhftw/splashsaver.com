type Props = {
  children: React.ReactNode;
};

export const SecondaryHeading = ({ children }: Props) => {
  return (
    <h1 className="font-bold text-slate-900 text-3xl tracking-tight">
      {children}
    </h1>
  );
};
