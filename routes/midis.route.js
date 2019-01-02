import express from 'express';
import midiController from '../controllers/midiController';

const router = express.Router();

router.get('/midis/:id([0-9a-f]{24})', (req, res) => {
  midiController.getMidi(req, res);
});

router.post('/midis', (req, res) => {
  midiController.addMidi(req, res);
});

router.put('/midis/addAnalysisEvent/:id([0-9a-f]{24})', (req, res) => {
  midiController.addAnalysisEvent(req, res);
});

// router.put('/midi', (req, res) => {
//   midiController.deleteCar(req, res);
// });

export default router;
