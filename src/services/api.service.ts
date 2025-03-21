import {
  ActivityApi,
  AverageSession,
  PerformanceApi,
  UserApi,
} from "../interface/data.interface";

const BASE_URL = "http://localhost:3000"; // Ajustez le port selon votre configuration
const USER_ID = 12;
/**
 * Service pour gérer les appels API
 */
export const apiService = {
  /**
   * Récupère toutes les données d'un utilisateur
   */
  async getUserById(): Promise<UserApi> {
    const response = await fetch(`${BASE_URL}/user/${USER_ID}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données utilisateur");
    }
    const { data } = await response.json();
    return data;
  },

  /**
   * Récupère les données d'activité d'un utilisateur
   */
  async getUserActivity(): Promise<ActivityApi> {
    const response = await fetch(`${BASE_URL}/user/${USER_ID}/activity`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des activités");
    }
    const { data } = await response.json();
    return data;
  },

  /**
   * Récupère les sessions moyennes d'un utilisateur
   */
  async getUserAverageSessions(): Promise<AverageSession[]> {
    const response = await fetch(
      `${BASE_URL}/user/${USER_ID}/average-sessions`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des sessions moyennes");
    }
    const { data } = await response.json();
    return data.sessions;
  },

  /**
   * Récupère les données de performance d'un utilisateur
   */
  async getUserPerformance(): Promise<PerformanceApi> {
    const response = await fetch(`${BASE_URL}/user/${USER_ID}/performance`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des performances");
    }
    const { data } = await response.json();
    return data;
  },
};
