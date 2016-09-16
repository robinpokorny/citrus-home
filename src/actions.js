import ref from './firebase'

export const setControlValue = (deviceId, controlId, value) =>
  ref
    .child(`devices/${deviceId}/controls/${controlId}/`)
    .set(value)

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
