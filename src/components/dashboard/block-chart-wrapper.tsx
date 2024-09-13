type BlockChartWrapperProps = {
  addedClass?: string;
  children: React.ReactNode;
};
export const BlockChartWrapper = ({
  children,
  addedClass,
}: BlockChartWrapperProps) => {
  return (
    <div
      className={`w-full aspect-square row-span-1 shadow-sm rounded-[5px] ${addedClass}`}
    >
      {children}
    </div>
  );
};
