import { Activity, AverageSession, Performance, User } from "../data";

const BASE_URL = "http://localhost:3000"; // Ajustez le port selon votre configuration

/**
 * Service pour gérer les appels API
 */
export const apiService = {
  /**
   * Récupère toutes les données d'un utilisateur
   */
  async getUserById(userId: number): Promise<{ data: User }> {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données utilisateur");
    }
    return response.json();
  },

  /**
   * Récupère les données d'activité d'un utilisateur
   */
  async getUserActivity(userId: number): Promise<Activity> {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des activités");
    }
    return response.json();
  },

  /**
   * Récupère les sessions moyennes d'un utilisateur
   */
  async getUserAverageSessions(userId: number): Promise<AverageSession> {
    const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des sessions moyennes");
    }
    return response.json();
  },

  /**
   * Récupère les données de performance d'un utilisateur
   */
  async getUserPerformance(userId: number): Promise<Performance> {
    const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des performances");
    }
    return response.json();
  },
};
