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
    return activity.sessions.map((session, index) => ({
      day: index + 1, // Nous permet d'avoir 1, 2, 3 comme dans le figma au lieu de session.day
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

    const kindToFrench = {
      cardio: "Cardio",
      energy: "Énergie",
      endurance: "Endurance",
      strength: "Force",
      speed: "Vitesse",
      intensity: "Intensité",
    };

    const desiredOrder = [
      "intensity",
      "speed",
      "strength",
      "endurance",
      "energy",
      "cardio",
    ];

    // On mappe les données brutes avec le nom anglais
    const rawData = performance.data.map((data) => ({
      value: data.value,
      kind: kind[data.kind],
      fullMark: 250,
    }));

    // On ordonne et on ajoute le label français
    const orderedData = desiredOrder
      .map((k) => rawData.find((item) => item.kind === k))
      .filter(Boolean)
      .map((item) => ({
        ...item,
        label:
          kindToFrench[item!.kind as keyof typeof kindToFrench] || item!.kind,
      }));

    return orderedData;
  }

  static formatScore(userData: UserApi) {
    if (!userData) return [];
    const score = (userData.todayScore || userData.score || 0) * 100;
    return [
      {
        name: "Score",
        score: score,
        fill: "#FF0000",
      },
      {
        name: "Score",
        score: 100 - score,
        fill: "#FBFBFB",
      },
    ];
  }
}
