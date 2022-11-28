import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  show: boolean;
};

export const EyeToggle = ({ show }: Props) => {
  const iconClassNameStyles = "text-xl text-gray-500 cursor-pointer";

  return (
    <>
      {show ? (
        <FiEye className={iconClassNameStyles} />
      ) : (
        <FiEyeOff className={iconClassNameStyles} />
      )}
    </>
  );
};
