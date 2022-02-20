export const ButtonWrapper = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="flex border shadow items-center text-gray-600 p-2 h-12 rounded text-center px-4 duration-300
      outline-none justify-center hover:shadow-md"
      {...props}
    >
      {props.children}
    </button>
  );
};
