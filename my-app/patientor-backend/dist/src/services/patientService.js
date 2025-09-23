"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patientsData_1 = __importDefault(require("../../data/patientsData"));
const uuid_1 = require("uuid");
const patients = patientsData_1.default;
const getPatients = () => {
    return patients;
};
const getPatient = (id) => {
    const patient = patients.find((patient) => patient.id === id);
    return patient;
};
const getNonSensitivePatients = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const addEntry = (entry, patientId) => {
    const currPatient = patients.find((patient) => patient.id === patientId);
    if (!currPatient) {
        throw new Error("Couldn't find patient");
    }
    const newEntry = Object.assign({ id: (0, uuid_1.v1)() }, entry);
    currPatient.entries.push(newEntry);
    return newEntry;
};
const addPatient = (entry) => {
    const newPatientEntry = Object.assign({ id: (0, uuid_1.v1)(), entries: [] }, entry);
    patients.push(newPatientEntry);
    return newPatientEntry;
};
exports.default = {
    getPatients,
    getPatient,
    addPatient,
    getNonSensitivePatients,
    addEntry,
};
