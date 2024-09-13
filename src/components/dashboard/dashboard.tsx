import { Analytics } from "./analytics";
import { DashboardHeader } from "./dashboard-header";
import { NutritionSummary } from "./nutrition-summary";

export const Dashboard = () => {
  return (
    <div className="flex flex-col w-full gap-16">
      <DashboardHeader />
      <div className="grid grid-cols-12 gap-8">
        <Analytics />
        <NutritionSummary />
      </div>
    </div>
  );
};
