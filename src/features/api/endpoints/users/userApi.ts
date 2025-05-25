import { axiosClient } from "@/features/api/client";
import { User } from "@/features/api/endpoints/users/types";

export const getUsers = async (): Promise<User[]> => {
  const res = await axiosClient.get<User[]>('/users');
  return res.data;
};

export const getUserById = async (id: number): Promise<User> => {
  const res = await axiosClient.get<User>(`/users/${id}`);
  return res.data;
};