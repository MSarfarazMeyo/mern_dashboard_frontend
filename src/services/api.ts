import axios from "axios";

// Define the base URL for your API
const baseURL = "http://localhost:5000";

// Create an instance of Axios with a base URL
const axiosInstance = axios.create({
  baseURL,
});

// API functions using axiosInstance with base URL
export const createProfile = (profile: FormData) =>
  axiosInstance.post("/api/profiles", profile);
export const updateProfileApi = (id: string, profile: any) =>
  axiosInstance.patch(`/api/profiles/${id}`, profile);
export const deleteProfileApi = (id: string) =>
  axiosInstance.delete(`/api/profiles/${id}`);
