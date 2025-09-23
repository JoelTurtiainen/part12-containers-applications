'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const diagnosisService_1 = __importDefault(require('../services/diagnosisService'));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
  console.log('Fetching all diagnoses!');
  const diagnoses = diagnosisService_1.default.getDiagnoses();
  res.send(diagnoses);
});
router.get('/:id', (req, res) => {
  console.log('fetching single diagnosis!');
  const code = req.params.id;
  const diagnosis = diagnosisService_1.default.getDiagnosis(code);
  res.send(diagnosis);
});
router.post('/', (_req, res) => {
  res.send('Saving a diagnosis!');
});
exports.default = router;
