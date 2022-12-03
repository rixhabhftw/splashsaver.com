export const Text = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) => {
  return (
    <p className="text-gray-400 sm:text-base text-sm" {...props}>
      {props.children}
    </p>
  );
};
