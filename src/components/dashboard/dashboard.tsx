import { useEffect, useState } from "react";
import { User } from "../../data";
import { apiService } from "../../services/api";
import { Analytics } from "./analytics";
import { DashboardHeader } from "./dashboard-header";
import { NutritionSummaryCard } from "./nutrition-summary-card";

export const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiService.getUserById(12);
      setUser(data);
    };
    fetchUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="flex flex-col w-full gap-16">
      <DashboardHeader user={user} />
      <div className="grid grid-cols-12 gap-8">
        <Analytics />
        <section className="col-span-3 grid-rows-4 grid gap-8">
          <NutritionSummaryCard type="calorie" />
          <NutritionSummaryCard type="protein" />
          <NutritionSummaryCard type="carbohydrate" />
          <NutritionSummaryCard type="lipid" />
        </section>
      </div>
    </div>
  );
};
