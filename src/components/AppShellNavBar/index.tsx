import {
  AppShell,
  Button,
  NavLink as MantineNavlink,
  Space,
} from "@mantine/core";

import { IconPlus } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";

export function AppShellNavBar() {
  return (
    <AppShell.Navbar p="md">
      <Button leftSection={<IconPlus />}>Nova fatura</Button>

      <Space h="lg" />

      {LINKS.map((link, i) => (
        <NavLink to={link.path} key={i}>
          {({ isActive }) => (
            <MantineNavlink
              label={link.label}
              rightSection={link.count}
              active={isActive}
              component="span"
            />
          )}
        </NavLink>
      ))}
    </AppShell.Navbar>
  );
}

const LINKS = [
  {
    path: ROUTES.PENDING,
    label: "Pendentes",
    count: 24,
  },
  {
    path: ROUTES.PAID,
    label: "Pagas",
    count: 24,
  },
  {
    path: ROUTES.OVER_DUE,
    label: "Vencidas",
    count: 24,
  },
  {
    path: ROUTES.ALL_INVOICES,
    label: "Todas",
    count: 24,
  },
];
