export const Textarea = (
  props: React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
) => {
  return (
    <textarea
      className="border border-gray-300 px-4 p-2 text-gray-600 outline-none
        flex items-center justify-center focus:border-1 focus:border-slate-900 duration-300 rounded resize-none"
      {...props}
    />
  );
};
