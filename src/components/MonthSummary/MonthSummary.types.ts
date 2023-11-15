import { ThemeColors } from "@nextui-org/react";

export type MonthSummaryItemProps = {
  color: keyof Pick<ThemeColors, "primary" | "success" | "danger">;
  amount: number;
  title: string;
};
