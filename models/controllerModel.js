/* eslint-disable new-cap,max-len */
import mongoose from 'mongoose';

const ControllerSchema = mongoose.Schema({
  created: { type: Date },
  lastUpdate: { type: Date },
  controllerId: { type: mongoose.Schema.ObjectId },
}, { collection: 'Controllers' });

const ControllerModel = mongoose.model('Controller', ControllerSchema);

ControllerModel.getController = () => ControllerModel.findOne();

export default ControllerModel;

