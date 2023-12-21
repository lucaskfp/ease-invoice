import { Button, Text, Title } from "@mantine/core";

import { Link } from "react-router-dom";
import notFoundImg from "../../assets/404.png";

export function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <img src={notFoundImg} alt="Not found" />

      <Title mb="xs">Página não encontrada</Title>

      <Text mb="lg">
        Desculpe, mas a página que você estava procurando não foi encontrada
      </Text>

      <Button component={Link} to="/" variant="light">
        Voltar à página inicial
      </Button>
    </div>
  );
}
