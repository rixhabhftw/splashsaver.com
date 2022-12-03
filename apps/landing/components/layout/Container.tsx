import { Footer } from "../sections/footer/Footer";
import { Nav } from "../sections/nav/Nav";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <div className="flex flex-col mx-auto max-w-6xl overflow-hidden px-8 sm:px:3 pb-20">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
