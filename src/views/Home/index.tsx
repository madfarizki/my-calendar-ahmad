import { Calendar } from "@/components/index";

import { Container, Title } from "./home.styles";

function Home() {
  return (
    <Container>
      <Title>My Personal Calendar</Title>
      <Calendar />
    </Container>
  );
}

export default Home;
