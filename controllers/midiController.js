import midiModel from '../models/midi.model';
import logger from '../core/logger/app-logger';

const controller = {};

controller.getMidi = async (req, res) => {
  const id = req.param('id');
  if (!id) {
    logger.warn('[midiController.getMidi] - No id was sent (id)', id);
    return res.status(500).send(`Error Getting document (id) => ${id}`);
  }

  try {
    const midi = await midiModel.getMidi(id);
    logger.debug('[midiController.getMidi] - Getting midi (id)', id);

    return res.status(200).send(JSON.stringify(midi));
  } catch (err) {
    logger.error('[midiController.getMidi] - Error while getting midi (id,err)', id, err);
    return res.status(500).send('Error while getting midi (id) => ', id);
  }
};

controller.addAnalysisEvent = async (req, res) => {
  const id = req.param('id');
  const event = req.body;

  if (!id) {
    logger.warn('[midiController.addAnalysisEvent] - No id was sent (id)', id);

    return res.status(500).send(`Error Updating document (id) => ${id}`);
  }

  try {
    logger.info('[midiController.addAnalysisEvent] - Getting midi (id) =>', id);
    const midiDocument = await midiModel.getMidi(id);
    const newMidiDocument = createMidiDocument(midiDocument);
    newMidiDocument.analysis.push(event);

    logger.info('[midiController.addAnalysisEvent] - Updating midi (id, document) =>', id, JSON.stringify(newMidiDocument));

    const updatedDoc = await midiModel.updateMidi(id, newMidiDocument);
    logger.debug('[midiController.addAnalysisEvent] - midi updated (document) =>', id, JSON.stringify(updatedDoc));

    return res.status(200).send(JSON.stringify(midiDocument));
  } catch (err) {
    logger.error('[midiController.getMidi] - Error while Updating midi (id,err)', id, err);

    return res.status(500).send('Error while Updating midi (id) => ', id);
  }
};

const createMidiDocument = (midi) => {
  return {
    created: midi.created,
    lastUpdate: Date.now(),
    analysis: midi.analysis,
    midiEvent: midi.midiEvent,
  };
};

controller.addMidi = async (req, res) => {
  const doc = req.body;
  const midi = midiModel(doc);
  try {
    midi.created = Date.now();
    midi.lastUpdate = Date.now();

    const savedMidi = await midiModel.addMidi(midi);
    logger.info('[midiController.getMidi] - Adding midi', doc);

    return res.status(200).send(JSON.stringify(savedMidi));
  } catch (err) {
    logger.error('[midiController.addMidi] - Error while Adding midi (midi,err)', JSON.stringify(doc), err);

    return res.status(500).send(`Error Saving document (document) => ${JSON.stringify(doc)}`);
  }
};

export default controller;
