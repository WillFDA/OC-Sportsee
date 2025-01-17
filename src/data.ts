export interface User {
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

export interface Activity {
  userId: number;
  sessions: Session[];
}

export interface Session {
  day: number;
  kilogram: number;
  calories: number;
}

export interface AverageSession {
  userId: number;
  sessions: Sessions[];
}

export interface Sessions {
  day: number;
  sessionLength: number;
}

export interface Performance {
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
