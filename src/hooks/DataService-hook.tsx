import axios, { AxiosResponse } from "axios";
export const BASE_URL = "https://670d4055073307b4ee42e086.mockapi.io/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllData = async <T,>(
  endpoint: string
): Promise<AxiosResponse<T, any>> => {
  return await axiosInstance.get<T>(endpoint);
};

const updateData = async <T,>(
  endpoint: string,
  data: any
): Promise<AxiosResponse<T, any>> => {
  return await axiosInstance.put<T>(endpoint, data);
};

const createData = async <T,>(
  endpoint: string,
  data: any
): Promise<AxiosResponse<T, any>> => {
  return await axiosInstance.post<T>(endpoint, data);
};

const deleteData = async (endpoint: string): Promise<AxiosResponse<any>> => {
  return await axiosInstance.delete(endpoint);
};

export { getAllData, createData, updateData, deleteData };
