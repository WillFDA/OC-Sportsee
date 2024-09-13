import { AverageSessionChart } from "./analytics/average-session";
import { DailyActivityChart } from "./analytics/daily-activity";
import { PerformanceChart } from "./analytics/performance";
import { ScoreChart } from "./analytics/score";

export const Analytics = () => {
  return (
    <section className=" col-span-9 grid grid-rows-2 w-full gap-8">
      <DailyActivityChart />
      <div className="w-full row-span-1 grid grid-cols-3 gap-8">
        <AverageSessionChart />
        <PerformanceChart />
        <ScoreChart />
      </div>
    </section>
  );
};
