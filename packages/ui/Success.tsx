type Props = {
  message: string;
};

export const Success = ({ message }: Props) => {
  return <p className="text-[12px] text-green-500">{message}</p>;
};
