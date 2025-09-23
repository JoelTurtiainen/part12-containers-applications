"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diagnosesData_1 = __importDefault(require("../../data/diagnosesData"));
const diagnoses = diagnosesData_1.default;
const getDiagnoses = () => {
    return diagnoses;
};
const getDiagnosis = (code) => {
    const diagnosis = diagnoses.find((d) => d.code === code);
    return diagnosis;
};
const addDiagnosis = () => {
    return null;
};
exports.default = {
    getDiagnoses,
    getDiagnosis,
    addDiagnosis,
};
