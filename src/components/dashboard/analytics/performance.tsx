import { useEffect, useState } from "react";
import { PerformanceData } from "../../../data";
import { apiService } from "../../../services/api";
import { BlockChartWrapper } from "../ui/block-chart-wrapper";
export const PerformanceChart = () => {
  const [performance, setPerformance] = useState<PerformanceData[] | null>(
    null
  );
  useEffect(() => {
    const fetchPerformance = async () => {
      const { data } = await apiService.getUserPerformance();
      setPerformance(data);
    };
    fetchPerformance();
  }, []);

  if (!performance) return <div>Loading...</div>;

  console.log(performance);
  // performance = getUserPerformance
  return (
    <BlockChartWrapper addedClass="bg-darkgray">performance</BlockChartWrapper>
  );
};
