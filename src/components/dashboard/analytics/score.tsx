import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import { UserApi } from "../../../interface/data.interface";
import { DataFormatter } from "../../../model/data-formatter.model";
import { BlockChartWrapper } from "../ui/block-chart-wrapper";

export const ScoreChart = ({ UserData }: { UserData: UserApi }) => {
  const formattedData = DataFormatter.formatScore(UserData);
  return (
    <BlockChartWrapper addedClass="bg-light-gray relative">
      <p className="text-[#20253A] text-sm absolute left-2 top-2 font-medium">
        Score
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          width={160}
          height={160}
          outerRadius={110}
          innerRadius={85}
          barSize={10}
          data={formattedData}
          cx="50%"
          cy="50%"
          startAngle={200}
          endAngle={-200}
          style={{
            zIndex: 1,
          }}
        >
          <RadialBar
            dataKey="score"
            cornerRadius={10}
            background={{ fill: "#FBFBFB" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div
        style={{
          zIndex: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 160,
          height: 160,
          background: "#fff",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: "bold", color: "#282D30" }}>
          {formattedData[0].score}%
        </div>
        <div style={{ color: "#74798C", fontSize: 14 }}>
          de votre
          <br />
          objectif
        </div>
      </div>
    </BlockChartWrapper>
  );
};
