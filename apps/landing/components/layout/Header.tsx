type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className="flex flex-col pt-24">
      <h2 className="font-extrabold text-slate-900 text-3xl tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 my-2 gap-x-5 gap-y-10"></div>
    </header>
  );
};
