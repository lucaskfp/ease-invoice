import { ErrorBoundary, InvoiceList, NotFound } from "./components";
import { createBrowserRouter, defer } from "react-router-dom";

import { App } from "./App";
import { ROUTES } from "./constants";

export const router = createBrowserRouter(
  [
    {
      path: ROUTES.ROOT,
      element: <App />,
      children: [
        {
          path: "",
          element: <InvoiceList />,
          loader: () => {
            const response: Promise<{ test: string }> = new Promise(
              (resolve) => {
                setTimeout(() => resolve({ test: "pendentes" }), 2000);
              }
            );

            return defer({ response });
          },
        },
        {
          path: ROUTES.PAID,
          element: <InvoiceList />,
          loader: async () => {
            const response: Promise<{ teste: string }> = new Promise(
              (resolve) => {
                setTimeout(() => resolve({ teste: "pagas" }), 2000);
              }
            );

            return defer({ response });
          },
        },
        {
          path: ROUTES.OVER_DUE,
          element: <InvoiceList />,
          loader: async () => {
            const response: Promise<{ teste: string }> = new Promise(
              (resolve) => {
                setTimeout(() => resolve({ teste: "vencidas" }), 2000);
              }
            );

            return defer({ response });
          },
        },
        {
          path: ROUTES.ALL_INVOICES,
          element: <InvoiceList />,
          loader: async () => {
            const response: Promise<{ teste: string }> = new Promise(
              (resolve) => {
                setTimeout(() => resolve({ teste: "todas" }), 2000);
              }
            );

            return defer({ response });
          },
        },
      ],
      ErrorBoundary: import.meta.env.PROD ? () => <ErrorBoundary /> : null,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/ease-invoice/",
  }
);
