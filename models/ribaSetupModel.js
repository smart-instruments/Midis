/* eslint-disable new-cap,max-len */
import mongoose from 'mongoose';

const RibaSetupSchema = mongoose.Schema({
  created: { type: Date },
  lastUpdate: { type: Date },
  x: { type: Number },
  y: { type: Number },
  color: { type: mongoose.Schema.ObjectId },
}, { collection: 'RibaSetups' });

const RibaSetupModel = mongoose.model('RibaSetupModel', RibaSetupSchema);

RibaSetupModel.getSetup = () => RibaSetupModel.findOne();

export default RibaSetupModel;

