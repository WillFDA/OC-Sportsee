import { useEffect, useState } from "react";
import { User } from "../../data";
import { apiService } from "../../services/api";

interface NutritionSummaryCardProps {
  type: "protein" | "carbohydrate" | "lipid" | "calorie";
}

export const NutritionSummaryCard = (props: NutritionSummaryCardProps) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiService.getUserById(12);
      setUser(data);
    };
    fetchUser();
  }, []);
  console.log(user);

  const t = {
    protein: "Proteines",
    carbohydrate: "Glucides",
    lipid: "Lipides",
    calorie: "Calories",
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="w-full row-span-1 flex items-center gap-6 p-8 bg-lightGray rounded-[5px] bg-light-gray">
      <div
        className={`size-[60px] ${
          props.type === "calorie"
            ? "bg-red/10"
            : props.type === "protein"
            ? "bg-sky-blue/10"
            : props.type === "carbohydrate"
            ? "bg-yellow/10"
            : "bg-pink/10"
        } rounded-[5px] flex items-center justify-center`}
      >
        <img src={`src/assets/${props.type}.svg`} alt={`${props.type} icon`} />
      </div>
      <div className="flex flex-col items-start">
        <h3 className=" text-xl text-black font-bold">
          {user?.keyData[`${props.type}Count` as keyof typeof user.keyData]}g
        </h3>
        <p className=" text-sm text-grayBlue">{t[props.type]}</p>
      </div>
    </div>
  );
};
