import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { AverageSession } from "../../../interface/data.interface";
import { DataFormatter } from "../../../model/data-formatter.model";
import { BlockChartWrapper } from "../ui/block-chart-wrapper";

export const AverageSessionChart = ({
  UserAverageSessionsData,
}: {
  UserAverageSessionsData: AverageSession[] | null;
}) => {
  if (!UserAverageSessionsData) return <div>Loading...</div>;
  const formattedData = DataFormatter.formatAverageDurationSessions(
    UserAverageSessionsData
  );
  return (
    <BlockChartWrapper addedClass="bg-red">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis dataKey="duration" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="duration" stroke="#FFFFFF" />
        </LineChart>
      </ResponsiveContainer>
    </BlockChartWrapper>
  );
};
