import { Activity, AverageSession, Performance, User } from "../data";

const BASE_URL = "http://localhost:3000"; // Ajustez le port selon votre configuration
const USER_ID = 12;
/**
 * Service pour gérer les appels API
 */
export const apiService = {
  /**
   * Récupère toutes les données d'un utilisateur
   */
  async getUserById(): Promise<{ data: User }> {
    const response = await fetch(`${BASE_URL}/user/${USER_ID}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données utilisateur");
    }
    return response.json();
  },

  /**
   * Récupère les données d'activité d'un utilisateur
   */
  async getUserActivity(): Promise<Activity> {
    const response = await fetch(`${BASE_URL}/user/${USER_ID}/activity`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des activités");
    }
    return response.json();
  },

  /**
   * Récupère les sessions moyennes d'un utilisateur
   */
  async getUserAverageSessions(): Promise<AverageSession> {
    const response = await fetch(
      `${BASE_URL}/user/${USER_ID}/average-sessions`
    );
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des sessions moyennes");
    }
    return response.json();
  },

  /**
   * Récupère les données de performance d'un utilisateur
   */
  async getUserPerformance(): Promise<Performance> {
    const response = await fetch(`${BASE_URL}/user/${USER_ID}/performance`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des performances");
    }
    return response.json();
  },
};
