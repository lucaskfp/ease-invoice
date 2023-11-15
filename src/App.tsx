import { Header, MonthSummary } from "./components";

import { InvoicesTable } from "./components/InvoicesTable";
import { Spacer } from "@nextui-org/react";

function App() {
  return (
    <div className="max-w-5xl mx-auto p-4 pb-10">
      <Header />

      <Spacer y={6} />

      <MonthSummary />

      <Spacer y={8} />

      <InvoicesTable />
    </div>
  );
}

export default App;
