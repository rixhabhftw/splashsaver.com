import { iconClassNameStyles } from "./iconStyles";
import { ButtonWrapper } from "./ButtonWrapper";
import { FaGithub } from "react-icons/fa";

export const GitHubOAuthButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <ButtonWrapper {...props}>
      <FaGithub className={`text-black ${iconClassNameStyles}`} /> Continue with
      GitHub
    </ButtonWrapper>
  );
};
