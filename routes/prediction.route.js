import express from 'express';
import predictionController from '../controllers/predictionController';

const router = express.Router();

router.post('/prediction/controller', (req, res) => {
  predictionController.getController(req, res);
});

router.post('/prediction/setup/:controllerId([0-9a-f]{24})', (req, res) => {
  predictionController.getSetup(req, res);
});


export default router;
