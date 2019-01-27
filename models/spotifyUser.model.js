/* eslint-disable new-cap */
import mongoose from 'mongoose';

const SpotifyUserSchema = mongoose.Schema({
  created: { type: Date },
  lastUpdate: { type: Date },
  userId: { type: String },
  genres: [],
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
