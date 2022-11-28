type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className="flex flex-col px-44 pt-24">
      <h2 className="font-bold text-slate-900 text-3xl tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 my-4 gap-x-5 gap-y-10"></div>
    </header>
  );
};
