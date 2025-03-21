import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
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
  const formattedData = DataFormatter.formatPerformance(UserPerformanceData);

  return (
    <BlockChartWrapper addedClass="bg-darkgray">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={90} data={formattedData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </BlockChartWrapper>
  );
};
