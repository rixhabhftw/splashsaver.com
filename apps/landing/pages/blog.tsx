import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Seo } from "../components/Seo";
import { NextPage } from "next";

const Blog: NextPage = () => {
  return (
    <Container>
      <Seo title="Splashsaver - Blog" description="" />
      <Header title="Blog" />
    </Container>
  );
};

export default Blog;
