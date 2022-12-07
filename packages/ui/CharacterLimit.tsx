import { Text } from "./Text";

type Props = {
  limit: number;
  text: string;
};

export const CharacterLimit = ({ limit, text }: Props) => {
  return (
    <p
      className={`${
        text.length > limit ? "text-red-500" : "text-gray-400"
      } text-xs`}
    >
      {text.length}/{limit}
    </p>
  );
};
