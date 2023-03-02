import Container from "@mui/material/Container";

import { Banner } from "./components/Banner";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <Container maxWidth="lg">
      <Banner />
      <Counter />
    </Container>
  );
};
