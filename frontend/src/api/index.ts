import axios from "axios";
import { Params, Place, PlaceData } from "../types";

export const api = axios.create({ baseURL: "http://localhost:4001" });

export const getPlaces = (params?: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);

export const createPlace = (body: PlaceData) => api.post("/api/places", body);

export const getPlace = async (id: string): Promise<Place> => {
  const response = await api.get(`/api/place/${id}`);
  return response.data.place;
};

export const deletePlace = (id: string) => api.delete(`/api/place/${id}`);
