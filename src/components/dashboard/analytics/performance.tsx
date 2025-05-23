import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { PerformanceApi } from "../../../interface/data.interface";
import { DataFormatter } from "../../../model/data-formatter.model";
import { BlockChartWrapper } from "../ui/block-chart-wrapper";

export const PerformanceChart = ({
  UserPerformanceData,
}: {
  UserPerformanceData: PerformanceApi;
}) => {
  if (!UserPerformanceData) return <div>Loading...</div>;
  const data = DataFormatter.formatPerformance(UserPerformanceData);

  return (
    <BlockChartWrapper addedClass="bg-dark-gray">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="label"
            tick={{
              fill: "white",
              fontSize: 12,
            }}
          />
          <Radar
            dataKey="value"
            stroke="transparent"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </BlockChartWrapper>
  );
};
