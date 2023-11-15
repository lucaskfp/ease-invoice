import type { MonthSummaryItemProps } from "./MonthSummary.types";

export function MonthSummaryItem(props: MonthSummaryItemProps) {
  const { color, amount, title } = props;

  const formattedAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount / 100);

  return (
    <div className="flex flex-col items-center gap-4 snap-center">
      <div className="flex gap-2 items-center">
        <div
          className={`w-6 aspect-square rounded-full shadow-md shadow-${color}-300 bg-${color}`}
        />

        <span className="font-medium">{title}</span>
      </div>

      <div className="flex gap-2 text-2xl sm:text-3xl font-semibold">
        <span className="text-gray-500 dark:text-gray-400">$</span>
        <span>{formattedAmount}</span>
      </div>
    </div>
  );
}
