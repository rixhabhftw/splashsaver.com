import { FiAlertCircle } from "react-icons/fi";

type Props = {
  message: string;
};

export const Error = ({ message }: Props) => {
  return (
    <div className="flex items-center text-[12px] bg-red-300 w-fit px-4 text-white p-2 rounded">
      <FiAlertCircle className="text-base mr-2" /> {message}
    </div>
  );
};
