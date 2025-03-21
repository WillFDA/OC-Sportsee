import { User } from "../../interface/data.interface";

interface DashboardHeaderProps {
  user: User;
}

export const DashboardHeader = ({ user }: DashboardHeaderProps) => {
  return (
    <header>
      <h1 className="text-black text-5xl font-medium">
        Bonjour <span className="text-red">{user?.userInfos?.firstName}</span>
      </h1>
      <p className="text-lg text-black mt-10">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </header>
  );
};
