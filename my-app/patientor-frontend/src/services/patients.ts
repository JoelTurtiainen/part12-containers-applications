import axios from "../util/apiClient";
import { Entry, Patient, PatientFormValues, NewEntry } from "../types";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`/patients`);

  return data;
};

const getOne = async (id: string) => {
  const { data } = await axios.get<Patient>(`/patients/${id}`);

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`/patients`, object);

  return data;
};

const createEntry = async (object: NewEntry, id: string) => {
  const { data } = await axios.post<Entry>(`/patients/${id}/entries`, object);

  return data;
};

export default {
  getAll,
  getOne,
  create,
  createEntry,
};
