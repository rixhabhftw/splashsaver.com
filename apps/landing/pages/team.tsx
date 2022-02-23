import { Container } from "../components/layout/Container";
import { Header } from "../components/layout/Header";
import { Animate } from "../components/Animate";
import { Seo } from "../components/Seo";

const Team = () => {
  return (
    <Container>
      <Animate>
        <Seo title="Splashsaver - Team" description="" />
        <Header title="Team" />
      </Animate>
    </Container>
  );
};

export default Team;
