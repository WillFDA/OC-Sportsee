export interface UserApi {
  id: number;
  userInfos: UserInfos;
  todayScore?: number;
  score?: number;
  keyData: KeyData;
}

export interface UserInfos {
  firstName: string;
  lastName: string;
  age: number;
}

export interface KeyData {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
}

export interface ActivityApi {
  userId: number;
  sessions: Session[];
}

export interface Session {
  day: string;
  kilogram: number;
  calories: number;
}

export interface UserAverageSessionsApi {
  userId: number;
  sessions: AverageSession[];
}

export interface AverageSession {
  day: number;
  sessionLength: number;
}

export interface PerformanceApi {
  userId: number;
  kind: Kind;
  data: PerformanceData[];
}

export interface PerformanceData {
  value: number;
  kind: number;
}

export interface Kind {
  [key: number]: string;
}
