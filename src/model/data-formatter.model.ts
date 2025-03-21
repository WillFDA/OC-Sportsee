import {
  ActivityApi,
  AverageSession,
  PerformanceApi,
  UserApi,
} from "../interface/data.interface";

export class DataFormatter {
  // Plus besoin de constructeur car on utilise des méthodes statiques

  public static formatDailyActivity(activity: ActivityApi) {
    if (!activity) return [];
    return activity.sessions.map((session) => ({
      day: session.day,
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }

  static formatAverageDurationSessions(averageSessions: AverageSession[]) {
    if (!averageSessions) return [];
    return averageSessions.map((session) => ({
      day: session.day,
      duration: session.sessionLength,
    }));
  }

  static formatPerformance(performance: PerformanceApi) {
    if (!performance) return [];
    const kind = performance.kind;
    return performance.data.map((data) => ({
      value: data.value,
      kind: kind[data.kind],
      fullMark: 250,
    }));
  }

  static formatScore(userData: UserApi) {
    if (!userData) return [];
    const score = (userData.todayScore || userData.score || 0) * 100;
    return {
      name: "Score",
      score: score,
      fill: "#FF0000",
    };
  }
}
