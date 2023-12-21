import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "dayjs/locale/pt-br";
import "./tailwind.css";

import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { supabase } from "./constants";
import { user } from "./globalState.ts";

supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_OUT") return (user.value = undefined);
  if (!session) return;
  user.value = session.user;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto">
      <DatesProvider settings={{ locale: "pt-br" }}>
        <App />
      </DatesProvider>
    </MantineProvider>
  </React.StrictMode>
);
