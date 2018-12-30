import mongoose from 'mongoose';

const MidiSchema = mongoose.Schema({
  created: { type: Date },
  midiEvent: { type: String },
  analysis: [],
}, { collection: 'Midis' });

const MidiModel = mongoose.model('Midis', MidiSchema);

MidiModel.getMidi = (id) => {
  return MidiModel.find({ _id: id });
};

MidiModel.addMidi = (midi) => {
  return MidiModel.save(midi);
};

MidiModel.updateMidi = (id, midi) => {
  return MidiModel.updateOne({ _id: id }, { $set: { midi } });
};

export default MidiModel;
