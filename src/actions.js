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
    .child(`devicesTypes/${typeId}/controls`)
    .once('value')
    .then((snapshot) => snapshot.val())
    .then((data) => {
      const controls = {}
      Object.entries(data).forEach(([key, value]) => controls[key] = 0)

      return ({ label, typeId, controls })
    })
    .then((device) => ref.child('devices').push(device))
    .then(() => ref.child('newDevice').remove())
}

export const addNewDevice = () => {
  ref
    .child('newDevice')
    .once('value')
    .then((snapshot) => snapshot.val())
    .then(({label, typeId}) => {
      if (label && typeId) addDevice(label, typeId)
    })
}

export const removeDevice = (deviceId) =>
  ref.child(`devices/${deviceId}`).remove()
