import { NutritionSummaryCard } from "./nutrition-summary/nutrition-summary-card";

export const NutritionSummary = () => {
  return (
    <div className="col-span-3 grid-rows-4 grid gap-8">
      <NutritionSummaryCard />
      <NutritionSummaryCard />
      <NutritionSummaryCard />
      <NutritionSummaryCard />
    </div>
  );
};
