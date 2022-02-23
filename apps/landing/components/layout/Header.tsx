import { Heading } from "../ui/Heading";

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return (
    <header className="flex flex-col pt-52">
      <Heading>{title}</Heading>
    </header>
  );
};
