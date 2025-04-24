import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { AverageSession } from "../../../interface/data.interface";
import { DataFormatter } from "../../../model/data-formatter.model";
import { BlockChartWrapper } from "../ui/block-chart-wrapper";

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black p-2 text-xs font-medium">
        {payload[0].value} min
      </div>
    );
  }
  return null;
};

const daysMap: { [key: number]: string } = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

export const AverageSessionChart = ({
  UserAverageSessionsData,
}: {
  UserAverageSessionsData: AverageSession[] | null;
}) => {
  if (!UserAverageSessionsData) return <div>Loading...</div>;
  const formattedData = DataFormatter.formatAverageDurationSessions(
    UserAverageSessionsData
  );

  const durations = formattedData.map((item) => item.duration);
  const minDuration = Math.min(...durations);
  const maxDuration = Math.max(...durations);

  const minYValue = minDuration - 10;
  const maxYValue = maxDuration + 10;

  return (
    <BlockChartWrapper addedClass="bg-red-600 relative overflow-hidden">
      <h3 className="text-white text-sm font-medium opacity-60 ml-2 mb-6 absolute top-4 left -4">
        Durée moyenne des
        <br />
        sessions
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={formattedData}>
          <defs>
            <linearGradient id="sessionGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "rgba(255, 255, 255, 0.6)", fontSize: 12 }}
            tickFormatter={(day) => daysMap[day] || ""}
          />
          <YAxis hide domain={[minYValue, maxYValue]} />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(160, 0, 0, 0.7)",
              strokeWidth: 80,
              strokeOpacity: 0.6,
            }}
          />
          <Line
            type="natural"
            dataKey="duration"
            stroke="url(#sessionGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: "white",
              stroke: "rgba(255, 255, 255, 0.3)",
              strokeWidth: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </BlockChartWrapper>
  );
};
