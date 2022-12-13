import { Dialog } from "@splashsaver/ui";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

export const ViewProfileModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen} title="View profile"></Dialog>
  );
};
