"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const zod_1 = require("zod");
const util_1 = __importStar(require("../util"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    console.log('Fetching all patients!');
    const patients = patientService_1.default.getNonSensitivePatients();
    res.send(patients);
});
router.get('/:id', (req, res) => {
    console.log('fetching single patient!');
    const id = req.params.id;
    const patient = patientService_1.default.getPatient(id);
    res.send(patient);
});
router.post('/', (req, res) => {
    try {
        const newPatientEntry = (0, util_1.default)(req.body);
        const addedEntry = patientService_1.default.addPatient(newPatientEntry);
        res.json(addedEntry);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).send({ error: error.issues });
        }
        else {
            res.status(400).send({ error: 'unknown error' });
        }
    }
});
router.post('/:id/entries', (req, res) => {
    console.log('posting new entry for a patient!');
    const patientId = req.params.id;
    let newEntry;
    try {
        switch (req.body.type) {
            case 'Hospital':
                newEntry = (0, util_1.toNewHospitalEntry)(req.body);
                break;
            case 'OccupationalHealthcare':
                newEntry = (0, util_1.toNewOccupationalHealthcareEntry)(req.body);
                break;
            case 'HealthCheck':
                newEntry = (0, util_1.toNewHealthCheckEntry)(req.body);
                break;
            default:
                res.status(400).send();
                return;
        }
        const addedEntry = patientService_1.default.addEntry(newEntry, patientId);
        res.json(addedEntry);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).send({ error: error.issues });
        }
        else {
            res.status(400).send({ error: 'unknown error' });
        }
    }
});
exports.default = router;
