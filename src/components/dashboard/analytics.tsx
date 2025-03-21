import { useEffect, useState } from "react";
import {
  ActivityApi,
  AverageSession,
  PerformanceApi,
  UserApi,
} from "../../interface/data.interface";
import { apiService } from "../../services/api.service";
import { AverageSessionChart } from "./analytics/average-session";
import { DailyActivityChart } from "./analytics/daily-activity";
import { PerformanceChart } from "./analytics/performance";
import { ScoreChart } from "./analytics/score";

export const Analytics = () => {
  const [UserActivityData, setUserActivityData] = useState<ActivityApi | null>(
    null
  );
  const [UserAverageSessionsData, setUserAverageSessionsData] = useState<
    AverageSession[] | null
  >(null);
  const [UserPerformanceData, setUserPerformanceData] =
    useState<PerformanceApi | null>(null);
  const [UserData, setUserData] = useState<UserApi | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const UserActivityData = await apiService.getUserActivity();
      const UserAverageSessionsData = await apiService.getUserAverageSessions();
      const UserPerformanceData = await apiService.getUserPerformance();
      const UserData = await apiService.getUserById();
      setUserActivityData(UserActivityData);
      setUserAverageSessionsData(UserAverageSessionsData);
      setUserPerformanceData(UserPerformanceData);
      setUserData(UserData);
    };
    fetchData();
  }, []);
  return (
    <section className=" col-span-9 grid grid-rows-2 w-full gap-8">
      {UserActivityData && (
        <DailyActivityChart UserActivityData={UserActivityData} />
      )}
      <div className="w-full row-span-1 grid grid-cols-3 gap-8">
        {UserAverageSessionsData && (
          <AverageSessionChart
            UserAverageSessionsData={UserAverageSessionsData}
          />
        )}
        {UserPerformanceData && (
          <PerformanceChart UserPerformanceData={UserPerformanceData} />
        )}
        {/* Définir avec Ezechiel ce que c'est que le score ?  */}
        {UserData && <ScoreChart UserData={UserData} />}
      </div>
    </section>
  );
};
