import {
  Line,
  LineChart,
  Rectangle,
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

interface CustomCursorProps {
  points?: Array<{ x: number; y: number }>;
  width?: number;
  height?: number;
}

const CustomCursor = ({ points, width, height }: CustomCursorProps) => {
  if (!points || points.length === 0 || !width || !height) return null;

  const x = points[0].x;

  return (
    <Rectangle
      x={x}
      y={0}
      width={width - x + 10}
      height={height + 200}
      fill="rgba(160, 0, 0, 0.7)"
      fillOpacity={0.6}
    />
  );
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

  // Création de données augmentées avec des points virtuels au début et à la fin
  let formattedData = DataFormatter.formatAverageDurationSessions(
    UserAverageSessionsData
  );

  // Si on a des données, on ajoute des points virtuels avant et après
  if (formattedData.length > 0) {
    const firstDataPoint = { ...formattedData[0], day: 0 };
    const lastDataPoint = {
      ...formattedData[formattedData.length - 1],
      day: 8,
    };

    // On ajoute les points virtuels
    formattedData = [firstDataPoint, ...formattedData, lastDataPoint];
  }

  const durations = formattedData.map((item) => item.duration);
  const minDuration = Math.min(...durations);
  const maxDuration = Math.max(...durations);

  const minYValue = minDuration - 10;
  const maxYValue = maxDuration + 10;

  return (
    <BlockChartWrapper addedClass="bg-red-600 relative overflow-hidden">
      <h3 className="text-white text-sm font-medium opacity-60 ml-2 mb-6 absolute top-8 left-6 z-20">
        Durée moyenne des
        <br />
        sessions
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ left: -10, right: -10, bottom: 30, top: 100 }}
        >
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
            domain={[1, 7]}
            dy={20}
            allowDataOverflow={true}
          />
          <YAxis hide domain={[minYValue, maxYValue]} />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
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
