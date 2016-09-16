import ref from './firebase'
import { controlTypes } from './config'

/* --- Controls --- */

export const setControlValue = (deviceId, controlId, value) =>
  ref
    .child(`devices/${deviceId}/controls/${controlId}/`)
    .set(value)

/* --- Devices --- */

export const setNewDeviceLabel = (label) =>
  ref.child('newDevice/label').set(label)

export const setNewDeviceType = (typeId) =>
  ref.child('newDevice/typeId').set(typeId)

const addDevice = (label, typeId) => {
  ref
    .child('devices')
    .push({ label, typeId })
    .then(() => ref.child('newDevice').remove())
}

export const addNewDevice = () => {
  ref
    .child('newDevice')
    .once('value')
    .then((snapshot) => snapshot.val())
    .then((device) => {
      if (device && device.label && device.typeId) {
        addDevice(device.label, device.typeId)
      }
    })
}

export const removeDevice = (deviceId) =>
  ref.child(`devices/${deviceId}`).remove()

/* --- Device types --- */

export const addNewType = () =>
  ref
    .child(`devicesTypes/`)
    .push({ label: '' })

export const addControlToType = (typeId) =>
  ref
    .child(`devicesTypes/${typeId}/controls/`)
    .push({ type: controlTypes.slider })

export const setTypeLabel = (typeId, value) =>
  ref
    .child(`devicesTypes/${typeId}/label`)
    .set(value)

export const setTypeControlLabel = (typeId, controlId, value) =>
  ref
    .child(`devicesTypes/${typeId}/controls/${controlId}/label`)
    .set(value)

export const setTypeControlType = (typeId, controlId, value) =>
  ref
    .child(`devicesTypes/${typeId}/controls/${controlId}/type`)
    .set(value)

export const setTypeControlOptions = (typeId, controlId, value) => {
  const options = value.split(',').map((s) => s.trim())

  ref
    .child(`devicesTypes/${typeId}/controls/${controlId}/options`)
    .set(options)
}
