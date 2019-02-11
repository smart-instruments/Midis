/* eslint-disable new-cap,max-len */
import mongoose from 'mongoose';

const MidiSchema = mongoose.Schema({
  created: { type: Date },
  sessionId: { type: String },
  lastUpdate: { type: Date },
  analysis: [
    {
      _id: false,
      midiCommand: {
        command: { type: Number },
        param1: { type: Number },
        param2: { type: Number },
      },
      chanel: { type: Number },
      userId: { type: mongoose.Schema.Types.ObjectId },
      controllerId: { type: mongoose.Schema.Types.ObjectId },
      last_x_notes: { type: Number },
      time: {
        time: { type: Number },
        playing_time_fot_entire_piece: { type: Number },
        playing_time_for_last_x_notes: { type: Number },
        idle_time_for_entire_piece: { type: Number },
        idle_time_for_last_x_notes: { type: Number },
        midi_length_seconds: { type: Number },
      },
      intensity: {
        intensity: { type: Number },
        lowest_intensity_entire_piece: { type: Number },
        lowest_intensity_last_x_notes: { type: Number },
        highest_intensity_entire_piece: { type: Number },
        highest_intensity_last_x_notes: { type: Number },
        average_intensity_entire_piece: { type: Number },
        average_intensity_last_X_notes: { type: Number },
        most_frequent_intensity_entire_piece: { type: Number },
        most_frequent_intensity_last_X_notes: { type: Number },
      },
      octaves: {
        average_octave_entire_piece: { type: Number },
        average_octave_last_X_notes: { type: Number },
        lowest_octave_entire_piece: { type: Number },
        lowest_octave_lastX_notes: { type: Number },
        highest_octave_entire_piece: { type: Number },
        highest_octave_last_X_notes: { type: Number },
        most_frequent_octave_entire_piece: { type: Number },
        most_frequent_octave_last_X_notes: { type: Number },
      },
      transitions: {
        amount_white_followed_by_white: { type: Number },
        amount_white_followed_by_white_last_x: { type: Number },
        amount_white_followed_by_black: { type: Number },
        amount_white_followed_by_black_last_x: { type: Number },
        amount_black_followed_by_white: { type: Number },
        amount_black_followed_by_white_last_x: { type: Number },
        amount_black_followed_by_black: { type: Number },
        amount_black_followed_by_black_last_x: { type: Number },
      },
      repetitions: {
        longest_sequence_appeared_more_than_once: [],
        longest_sequence_appeared_more_than_once_last_x: { type: Number },
        amount_of_times_that_the_longest_sequence_of_notes_that_appeared_for_the_last_X_notes: { type: Number },
        amount_of_times_that_the_longest_sequence_of_notes_that_appeared_for_entire_piece: { type: Number },
        longest_sequence_appeared_counter: [],
        longest_sequence_appeared_counter_last_x: { type: Number },
        amount_of_times_longest_sequence_of_notes_duration_differences_appeared_for_the_entire_piece: { type: Number },
        amount_of_times_longest_sequence_of_notes_duration_differences_appeared_last_X_notes: { type: Number },
      },
      clusters: {
        most_frequent_three_successive_notes: [],
        most_frequent_three_successive_notes_last_x: [],
        average_time_differences_between_notes: { type: Number },
        average_time_differences_between_notes_x: { type: Number },
        most_frequent_Y_successive_notes: [],
        most_frequent_Y_successive_notes_last_x: [],
        average_duration_between_Y_successive_notes_for_the_entire_piece: { type: Number },
        average_duration_between_Y_successive_notes_for_the_last_X_notes: { type: Number },
      },
      rhythm: {
        average_time_differences_between_notes_where_differences_over_T_for_the_entire_piece: { type: Number },
        average_time_differences_between_notes_where_differences_over_T_for_last_x_notes: { type: Number },
      },
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
