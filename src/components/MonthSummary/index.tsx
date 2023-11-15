import { Card, CardBody, Divider, ScrollShadow } from "@nextui-org/react";

import { MonthSummaryItem } from "./MonthSummaryItem";
import type { MonthSummaryItemProps } from "./MonthSummary.types";

const MONTH_SUMMARY: MonthSummaryItemProps[] = [
  {
    title: "Todas As Faturas",
    color: "primary",
    amount: 7835,
  },
  {
    title: "Faturas Pagas",
    color: "success",
    amount: 7835,
  },
  {
    title: "Faturas Vencidas",
    color: "danger",
    amount: 7835,
  },
];

export function MonthSummary() {
  return (
    <Card as="section" className="shadow-none sm:py-4">
      <CardBody>
        <ScrollShadow
          orientation="horizontal"
          hideScrollBar
          className="snap-mandatory snap-x grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 place-items-center whitespace-nowrap"
        >
          {MONTH_SUMMARY.map((summaryItem, i) => (
            <MonthSummaryItem
              key={i}
              color={summaryItem.color}
              amount={summaryItem.amount}
              title={summaryItem.title}
            />
          ))}

          <Divider orientation="vertical" className="col-start-2 row-start-1" />
          <Divider orientation="vertical" className="col-start-4 row-start-1" />
        </ScrollShadow>
      </CardBody>
    </Card>
  );
}
