/* eslint-disable new-cap */
import mongoose from 'mongoose';

const SpotifyUserSchema = mongoose.Schema({
  created: { type: Date },
  lastUpdate: { type: Date },
  userId: { type: String },
  genres: [],
  topTracks: [
    {
      acousticness: { type: Number },
      danceability: { type: Number },
      duration_ms: { type: Number },
      energy: { type: Number },
      id: { type: String },
      liveness: { type: Number },
      loudness: { type: Number },
      mode: { type: Number },
      tempo: { type: Number },
      valence: { type: Number },
    },
  ],
}, { collection: 'SpotifyUsers' });

const SpotifyUserModel = mongoose.model('SpotifyUserModel', SpotifyUserSchema);

// MidiModel.getMidi = (id) => {
//     return MidiModel.findOne({ _id: id });
// };

SpotifyUserModel.addSpotifyUser = (spotifyUser) => {
  return spotifyUser.save();
};

// MidiModel.updateMidi = (id, midi) => {
//     return MidiModel.updateOne({ _id: id },
// { $set: { analysis: midi.analysis, lastUpdate: midi.lastUpdate } });
// };

export default SpotifyUserModel;
