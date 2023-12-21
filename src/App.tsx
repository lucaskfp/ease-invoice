import {
  AppShell,
  Avatar,
  Box,
  Burger,
  Container,
  Group,
  Title,
} from "@mantine/core";

import { AppShellNavBar } from "./components";
import { Outlet } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

export function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Box>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Title>Ease Invoice</Title>
          </Box>

          <Box>
            <Avatar
              src="https://source.boringavatars.com/beam/50/Lucas%20Kennedy?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"
              color="blue"
              variant="light"
              radius="xl"
            ></Avatar>
          </Box>
        </Group>
      </AppShell.Header>

      <AppShellNavBar />

      <AppShell.Main className="bg-slate-50 dark:bg-zinc-900">
        <Container size="xl" px={0}>
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
