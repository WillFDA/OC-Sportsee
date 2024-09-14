export const SideBar = () => {
  return (
    <div className="w-24 h-screen bg-black fixed top-0 left-0 z-0 flex flex-col justify-center items-center gap-5">
      <div className=" size-16 bg-white flex items-center justify-center rounded-[5px]">
        <img src="/src/assets/yoga-icon.png" alt="yoga icon" />
      </div>
      <div className=" size-16 bg-white flex items-center justify-center rounded-[5px]">
        <img src="/src/assets/swimming-icon.png" alt="swimming icon" />
      </div>
      <div className=" size-16 bg-white flex items-center justify-center rounded-[5px]">
        <img src="/src/assets/bycicle-icon.png" alt="bycicle icon" />
      </div>
      <div className=" size-16 bg-white flex items-center justify-center rounded-[5px]">
        <img src="/src/assets/fitness-icon.png" alt="fitness icon" />
      </div>
      <p
        style={{ writingMode: "vertical-rl" }}
        className="text-white text-xs absolute bottom-16 right-1/2 translate-x-1/2"
      >
        Copiryght, SportSee 2020
      </p>
    </div>
  );
};
