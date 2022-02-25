type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className="flex flex-col pt-52">
      <h2 className="font-bold text-slate-900 text-3xl tracking-tight">
        {title}
      </h2>
    </header>
  );
};
