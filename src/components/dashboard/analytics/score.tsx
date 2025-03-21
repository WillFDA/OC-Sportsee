import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { UserApi } from "../../../interface/data.interface";
import { DataFormatter } from "../../../model/data-formatter.model";
import { BlockChartWrapper } from "../ui/block-chart-wrapper";

export const ScoreChart = ({ UserData }: { UserData: UserApi }) => {
  const formattedData = DataFormatter.formatScore(UserData);
  return (
    <BlockChartWrapper addedClass="bg-darkgray">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="10%"
          outerRadius="80%"
          data={formattedData}
          startAngle={180}
          endAngle={-180}
        >
          <RadialBar
            label={{ fill: "#666", position: "insideStart" }}
            background
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </BlockChartWrapper>
  );
};
