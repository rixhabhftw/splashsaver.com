import { ButtonWrapper } from "./ButtonWrapper";
import { GoogleIcon } from "./icons/GoogleIcon";

export const GoogleOAuthButton = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <ButtonWrapper {...props}>
      <GoogleIcon className="mr-2" /> Continue with Google
    </ButtonWrapper>
  );
};
