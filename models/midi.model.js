/* eslint-disable new-cap */
import mongoose from 'mongoose';

const MidiSchema = mongoose.Schema({
  created: { type: Date },
  lastUpdate: { type: Date },
  sessionId: { type: String },
  analysis: [
    {
      midiEvent: {
        key1: String,
        key2: String,
        key3: String,
      },
      key1: String,
      key2: String,
      key3: String,
      key4: String,
      key5: String,
      _id: false,
    },
  ],
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
