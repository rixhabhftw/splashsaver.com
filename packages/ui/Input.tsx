export const Input = (
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) => {
  return (
    <input
      className="border border-gray-300 px-4 p-2 text-gray-600 outline-none
      flex items-center justify-center focus:border-1 focus:border-slate-900 duration-300 rounded"
      {...props}
    />
  );
};
