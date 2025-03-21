import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ActivityApi } from "../../../interface/data.interface";
import { DataFormatter } from "../../../model/data-formatter.model";

export const DailyActivityChart = ({
  UserActivityData,
}: {
  UserActivityData: ActivityApi;
}) => {
  if (!UserActivityData) return <div>Loading...</div>;
  const formattedData = DataFormatter.formatDailyActivity(UserActivityData);
  return (
    <div className="w-full row-span-1">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="calories" fill="#E60000" />
          <Bar dataKey="kilogram" fill="#282D30" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
