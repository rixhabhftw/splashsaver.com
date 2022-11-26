export const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="flex bg-slate-900 items-center text-white p-2 h-12 rounded text-center px-4 duration-300
      hover:bg-gray-800 outline-none focus:ring-4 ring-slate-400 font-semibold justify-center m-0"
      {...props}
    >
      {props.children}
    </button>
  );
};
