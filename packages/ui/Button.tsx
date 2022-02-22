export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="flex bg-slate-900 items-center text-white p-2 h-12 rounded text-center px-4 duration-300
      hover:bg-gray-800 border-none outline-none focus:ring-4 ring-offset-2 ring-slate-300 font-semibold justify-center"
      {...props}
    >
      {props.children}
    </button>
  );
};
