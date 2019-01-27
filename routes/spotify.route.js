import express from 'express';
import spotifyController from '../controllers/spotifyUserController';

const router = express.Router();

router.post('/spotify/user', (req, res) => {
  spotifyController.addSpotifyUser(req, res);
});

// router.post('/midis', (req, res) => {
//     midiController.addMidi(req, res);
// });
//
// router.put('/midis/addAnalysisEvent/:id([0-9a-f]{24})', (req, res) => {
//     midiController.addAnalysisEvent(req, res);
// });

// router.put('/midi', (req, res) => {
//   midiController.deleteCar(req, res);
// });

export default router;
