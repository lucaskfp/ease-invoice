import "@mantine/core/styles.css";

import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { supabase } from "./constants";
import { user } from "./globalState.ts";

supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_OUT") return (user.value = undefined);
  if (!session) return;
  user.value = session.user;
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
