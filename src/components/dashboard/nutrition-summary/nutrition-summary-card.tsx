export const NutritionSummaryCard = () => {
  return (
    <div className="w-full row-span-1 flex items-center gap-6 p-8 bg-lightGray rounded-[5px]">
      <div className=" size-[60px] bg-skyBlue/10 rounded-[5px] flex items-center justify-center">
        <img src="src/assets/proteines.svg" alt={`protein icon`} />
      </div>
      <div className="flex flex-col items-start">
        <h3 className=" text-xl text-black font-bold">240g</h3>
        <p className=" text-sm text-grayBlue">Proteines</p>
      </div>
    </div>
  );
};
