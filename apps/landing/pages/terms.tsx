import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Animate } from "../components/Animate";
import { Seo } from "../components/Seo";

const TOS = () => {
  return (
    <Container>
      <Animate>
        <Seo title="Splashsaver - Terms of Service" description="" />
        <Header title="Terms of Service" />
      </Animate>
    </Container>
  );
};

export default TOS;