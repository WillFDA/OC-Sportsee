import {
  ActivityApi,
  PerformanceApi,
  UserApi,
  UserAverageSessionsApi,
} from "../interface/data.interface";

declare const data: {
  USER_MAIN_DATA: UserApi[];
  USER_ACTIVITY: ActivityApi[];
  USER_AVERAGE_SESSIONS: UserAverageSessionsApi[];
  USER_PERFORMANCE: PerformanceApi[];
};
export default data;
