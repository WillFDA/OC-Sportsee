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

const CustomLegend = () => {
  return (
    <div className="flex items-center w-full">
      <div className="w-2 h-2 bg-[#282D30] rounded-full mr-2"></div>
      <p className="text-sm mr-4">Poids (kg)</p>
      <div className="w-2 h-2 bg-[#E60000] rounded-full mr-2"></div>
      <p className="text-sm">Calories brûlées (Kcal)</p>
    </div>
  );
};
export const DailyActivityChart = ({
  UserActivityData,
}: {
  UserActivityData: ActivityApi;
}) => {
  if (!UserActivityData) return <div>Loading...</div>;
  const formattedData = DataFormatter.formatDailyActivity(UserActivityData);

  // Calcul des valeurs pour l'axe Y
  const kilogramValues = formattedData.map((item) => item.kilogram);
  const minKg = Math.min(...kilogramValues) - 1;
  const maxKg = Math.max(...kilogramValues) + 1;
  const medianKg = Math.round((minKg + maxKg) / 2);

  return (
    <div className="w-full row-span-1">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart height={141} barSize={7} barGap={8} data={formattedData}>
          <CartesianGrid vertical={false} strokeDasharray="3" />
          <XAxis
            dataKey="day"
            scale="point"
            padding={{ left: 12, right: 10 }}
          />
          <YAxis
            yAxisId="left"
            orientation="right"
            domain={[minKg, maxKg]}
            ticks={[minKg, medianKg, maxKg]}
            axisLine={false}
            tickLine={false}
            tickMargin={20}
          />
          <YAxis yAxisId="right" orientation="left" hide={true} />
          <Tooltip
            itemStyle={{
              backgroundColor: "#E60000",
              color: "#FFFFFF",
              padding: "8px",
              fontSize: "7px",
              fontWeight: "medium",
            }}
            contentStyle={{
              backgroundColor: "transparent",
              border: "none",
              padding: "0",
            }}
            formatter={(value: number, name: string) => {
              if (name === "kilogram") {
                return [`${value}kg`, null];
              }
              if (name === "calories") {
                return [`${value}Kcal`, null];
              }
              return [value, null];
            }}
            labelFormatter={() => ""}
          />
          <Legend verticalAlign="top" height={36} content={<CustomLegend />} />
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#282D30"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#E60000"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
