import { UserApi } from "../../interface/data.interface";

interface NutritionSummaryCardProps {
  user: UserApi;
  type: "protein" | "carbohydrate" | "lipid" | "calorie";
}

export const NutritionSummaryCard = ({
  user,
  type,
}: NutritionSummaryCardProps) => {
  const t = {
    protein: "Proteines",
    carbohydrate: "Glucides",
    lipid: "Lipides",
    calorie: "Calories",
  };

  return (
    <div className="w-full row-span-1 flex items-center gap-6 p-8 bg-lightGray rounded-[5px] bg-light-gray">
      <div
        className={`size-[60px] ${
          type === "calorie"
            ? "bg-red/10"
            : type === "protein"
            ? "bg-sky-blue/10"
            : type === "carbohydrate"
            ? "bg-yellow/10"
            : "bg-pink/10"
        } rounded-[5px] flex items-center justify-center`}
      >
        <img src={`src/assets/${type}.svg`} alt={`${type} icon`} />
      </div>
      <div className="flex flex-col items-start">
        <h3 className=" text-xl text-black font-bold">
          {user?.keyData[`${type}Count` as keyof typeof user.keyData]}g
        </h3>
        <p className=" text-sm text-grayBlue">{t[type]}</p>
      </div>
    </div>
  );
};
