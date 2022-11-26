type Props = {
  title: string;
};

export const Label = ({ title }: Props) => {
  return <span className="font-semibold text-sm text-gray-500">{title}</span>;
};
