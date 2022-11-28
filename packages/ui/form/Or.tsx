type Props = {
  children: React.ReactNode;
};

export const Or = () => {
  return (
    <div className="flex items-center justify-between w-full my-4">
      <hr className="border border-gray-200 w-full"></hr>
      <span className="mx-4 text-gray-500">Or</span>
      <hr className="border border-gray-200 w-full"></hr>
    </div>
  );
};
