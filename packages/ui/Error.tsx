type Props = {
  message: string;
};

export const Error = ({ message }: Props) => {
  return <p className="text-[12px] text-red-500">{message}</p>;
};
