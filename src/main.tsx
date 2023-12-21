import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./tailwind.css";
import "dayjs/locale/pt-br";

import { DatesProvider } from "@mantine/dates";
import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
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
        <RouterProvider router={router} />
      </DatesProvider>
    </MantineProvider>
  </React.StrictMode>
);
