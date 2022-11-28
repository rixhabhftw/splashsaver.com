type Props = {
  loading: boolean;
};

export const Loading = ({ loading }: Props) => {
  return (
    <p className="text-[12px] text-gray-400">{loading ? "Loading..." : null}</p>
  );
};
