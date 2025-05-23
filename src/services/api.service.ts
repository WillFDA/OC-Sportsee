import mockData from "../data/data.js";
import {
  ActivityApi,
  AverageSession,
  PerformanceApi,
  UserApi,
} from "../interface/data.interface";

const BASE_URL = "http://localhost:3000";
const USER_ID = 18;
/**
 * Service pour gérer les appels API
 */
export const apiService = {
  /**
   * Récupère toutes les données d'un utilisateur
   */
  async getUserById(): Promise<UserApi> {
    try {
      const response = await fetch(`${BASE_URL}/user/${USER_ID}`);
      if (!response.ok) throw new Error();
      const { data } = await response.json();
      return data;
    } catch {
      const user = (mockData.USER_MAIN_DATA as UserApi[]).find(
        (u) => u.id === USER_ID
      );
      if (!user) throw new Error("Utilisateur mock non trouvé");
      return user;
    }
  },

  /**
   * Récupère les données d'activité d'un utilisateur
   */
  async getUserActivity(): Promise<ActivityApi> {
    try {
      const response = await fetch(`${BASE_URL}/user/${USER_ID}/activity`);
      if (!response.ok) throw new Error();
      const { data } = await response.json();
      return data;
    } catch {
      const activity = (mockData.USER_ACTIVITY as ActivityApi[]).find(
        (a) => a.userId === USER_ID
      );
      if (!activity) throw new Error("Activité mock non trouvée");
      return activity;
    }
  },

  /**
   * Récupère les sessions moyennes d'un utilisateur
   */
  async getUserAverageSessions(): Promise<AverageSession[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/user/${USER_ID}/average-sessions`
      );
      if (!response.ok) throw new Error();
      const { data } = await response.json();
      return data.sessions;
    } catch {
      const avg = (
        mockData.USER_AVERAGE_SESSIONS as {
          userId: number;
          sessions: AverageSession[];
        }[]
      ).find((a) => a.userId === USER_ID);
      if (!avg) throw new Error("Sessions moyennes mock non trouvées");
      return avg.sessions;
    }
  },

  /**
   * Récupère les données de performance d'un utilisateur
   */
  async getUserPerformance(): Promise<PerformanceApi> {
    try {
      const response = await fetch(`${BASE_URL}/user/${USER_ID}/performance`);
      if (!response.ok) throw new Error();
      const { data } = await response.json();
      return data;
    } catch {
      const perf = (mockData.USER_PERFORMANCE as PerformanceApi[]).find(
        (p) => p.userId === USER_ID
      );
      if (!perf) throw new Error("Performance mock non trouvée");
      return perf;
    }
  },
};
