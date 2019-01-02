/* eslint-disable new-cap */
import mongoose from 'mongoose';

const MidiSchema = mongoose.Schema({
  created: { type: Date },
  midiEvent: { type: String },
  lastUpdate: { type: Date },
  analysis: [],
}, { collection: 'Midis' });

const MidiModel = mongoose.model('Midis', MidiSchema);

MidiModel.getMidi = (id) => {
  return MidiModel.findOne({ _id: id });
};

MidiModel.addMidi = (midi) => {
  return midi.save();
};

MidiModel.updateMidi = (id, midi) => {
  return MidiModel.updateOne({ _id: id }, { $set: { analysis: midi.analysis, lastUpdate: midi.lastUpdate } });
};

export default MidiModel;
