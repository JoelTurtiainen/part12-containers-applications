"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewOccupationalHealthcareEntry = exports.toNewHealthCheckEntry = exports.toNewHospitalEntry = exports.toNewDiagnosisEntry = exports.occupationalHealthcareSchema = exports.healthCheckSchema = exports.hospitalSchema = exports.newPatientSchema = exports.diagnosisSchema = void 0;
const zod_1 = require("zod");
const types_1 = require("./types");
exports.diagnosisSchema = zod_1.z.object({
    code: zod_1.z.string(),
    name: zod_1.z.string(),
    latin: zod_1.z.string().optional(),
});
exports.newPatientSchema = zod_1.z.object({
    name: zod_1.z.string().min(2),
    dateOfBirth: zod_1.z.string().date(),
    ssn: zod_1.z.string().min(2),
    gender: zod_1.z.nativeEnum(types_1.Gender),
    occupation: zod_1.z.string().min(2),
});
const newEntrySchema = zod_1.z.object({
    description: zod_1.z.string().min(2),
    date: zod_1.z.string().date(),
    specialist: zod_1.z.string().min(2),
    diagnosisCodes: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.hospitalSchema = newEntrySchema.extend({
    type: zod_1.z.literal('Hospital'),
    discharge: zod_1.z.object({ date: zod_1.z.string().date(), criteria: zod_1.z.string() }),
});
exports.healthCheckSchema = newEntrySchema.extend({
    type: zod_1.z.literal('HealthCheck'),
    healthCheckRating: zod_1.z.number().gte(0).lte(3),
});
exports.occupationalHealthcareSchema = newEntrySchema.extend({
    type: zod_1.z.literal('OccupationalHealthcare'),
    employerName: zod_1.z.string().min(2),
    sickLeave: zod_1.z.object({ startDate: zod_1.z.string().date(), endDate: zod_1.z.string().date() }).optional(),
});
const toNewPatientEntry = (object) => {
    return exports.newPatientSchema.parse(object);
};
const toNewDiagnosisEntry = (object) => {
    return exports.diagnosisSchema.parse(object);
};
exports.toNewDiagnosisEntry = toNewDiagnosisEntry;
const toNewHospitalEntry = (object) => {
    return exports.hospitalSchema.parse(object);
};
exports.toNewHospitalEntry = toNewHospitalEntry;
const toNewHealthCheckEntry = (object) => {
    return exports.healthCheckSchema.parse(object);
};
exports.toNewHealthCheckEntry = toNewHealthCheckEntry;
const toNewOccupationalHealthcareEntry = (object) => {
    return exports.occupationalHealthcareSchema.parse(object);
};
exports.toNewOccupationalHealthcareEntry = toNewOccupationalHealthcareEntry;
exports.default = toNewPatientEntry;
