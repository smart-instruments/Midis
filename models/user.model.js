/* eslint-disable new-cap */
import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  musicalBackground: {
    descripion: String,
    firstInstrument: String,
    firstInstrumentExp: Number,
    mainInstrument: String,
    mainInstrumentExp: Number,
    additionalInstrument: String,
    additionalInstrumentExp: Number,
    expertise: String,
    notationReading: Boolean,
    position: [],
  },
  color: String,
  creative: Number,
  musical: Number,
  handed: {
    type: String,
    enum: ['left', 'right'],
    default: 'right',
  },
  username: String,
  course: String,
  learner: Number,
  linked_in: String,
  google: String,
  last_fm: String,
  spotify: String,
  facebook: String,
  gender: {
    type: String,
    enum: ['male', 'female'],
    default: 'male',
  },
  age: Number,
  email: String,
  last_name: String,
  first_name: String,
  genres: [],
  instruments: [],
  query: String,
  languages: [],
  equipment: [],
  influences: [],
  main_field: [],
  sport: [],
  disabilities: [],
  occupation: [],
  academic_bg: [],
}, { collection: 'Users' });

const UserModel = mongoose.model('UserModel', UserSchema);

UserModel.getUser = (id) => {
  return UserModel.findOne({ _id: id });
};


export default UserModel;
