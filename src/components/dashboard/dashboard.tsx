import { useUser } from "../../services/custom-hooks";
import { Analytics } from "./analytics";
import { DashboardHeader } from "./dashboard-header";
import { NutritionSummaryCard } from "./nutrition-summary-card";

export const Dashboard = () => {
  const { user, isLoading, error } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user found</div>;
  return (
    <div className="flex flex-col w-full gap-16">
      <DashboardHeader user={user} />
      <div className="grid grid-cols-12 gap-8">
        <Analytics />
        <section className="col-span-3 grid-rows-4 grid gap-8">
          <NutritionSummaryCard user={user} type="calorie" />
          <NutritionSummaryCard user={user} type="protein" />
          <NutritionSummaryCard user={user} type="carbohydrate" />
          <NutritionSummaryCard user={user} type="lipid" />
        </section>
      </div>
    </div>
  );
};
