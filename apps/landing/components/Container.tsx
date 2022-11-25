type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="flex flex-col mx-auto max-w-7xl px-8 sm:px:3 pb-20">
      {children}
    </div>
  );
};
