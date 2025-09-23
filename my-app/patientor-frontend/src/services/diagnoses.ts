import axios from "./../util/apiClient";
import { Diagnosis } from "../types";

const getAll = async () => {
  const { data } = await axios.get<Diagnosis[]>(`$/diagnoses`);

  return data;
};

const getOne = async (id: string) => {
  const { data } = await axios.get<Diagnosis>(`$/diagnoses/${id}`);

  return data;
};

export default {
  getAll,
  getOne,
};
