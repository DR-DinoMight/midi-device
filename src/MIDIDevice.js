import EventEmitter from "./EventEmitter";

export default class MIDIDevice extends EventEmitter {
  constructor(deviceName) {
    super();

    this._input = null;
    this._deviceName = deviceName;
  }

  get deviceName() {
    return this._deviceName;
  }

  open() {
    return Promise.reject(new Error("subclass responsibility"));
  }

  close() {
    return Promise.reject(new Error("subclass responsibility"));
  }

  _onmidimessage() {}
}