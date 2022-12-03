export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="flex bg-slate-900 items-center text-white sm:p-2 p-1 sm:h-12 h-10 rounded text-center px-4 duration-300
      hover:bg-gray-800 border-none outline-none focus:ring-4 ring-offset-2 ring-slate-300 font-semibold justify-center
      sm:text-base text-sm"
      {...props}
    >
      {props.children}
    </button>
  );
};
