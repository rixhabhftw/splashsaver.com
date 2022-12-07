import { FiCheck } from "react-icons/fi";

type Props = {
  message: string;
};

export const Success = ({ message }: Props) => {
  return (
    <div className="flex items-center text-[12px] bg-green-300 w-fit px-4 text-white p-2 rounded">
      <FiCheck className="text-base mr-2" /> {message}
    </div>
  );
};
