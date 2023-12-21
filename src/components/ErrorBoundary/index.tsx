import { Button, Center, Stack, Text, Title } from "@mantine/core";

import { IconRefresh } from "@tabler/icons-react";

export function ErrorBoundary() {
  return (
    <Center h="100vh">
      <Stack align="center">
        <Title>Ops, parece que deu ruim</Title>

        <Text>Não temos certeza do que aconteceu, mas algo deu errado.</Text>
        <Button
          variant="default"
          leftSection={<IconRefresh />}
          onClick={() => location.reload()}
        >
          Tentar novamente
        </Button>
      </Stack>
    </Center>
  );
}
