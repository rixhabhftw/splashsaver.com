import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Animate } from "../components/Animate";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <Container>
      <Animate>
        <Seo title="Splashsaver - Blog" description="" />
        <Header title="Blog" />
      </Animate>
    </Container>
  );
};

export default Blog;
