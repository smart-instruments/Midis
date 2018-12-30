import express from 'express';
import midiController from '../controllers/midiController';

const router = express.Router();

router.get('/midis', (req, res) => {
  midiController.getMidi(req, res);
});

router.post('/midis', (req, res) => {
  midiController.addMidi(req, res);
});

// router.put('/midi', (req, res) => {
//   midiController.deleteCar(req, res);
// });

export default router;
