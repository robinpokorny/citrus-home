export const numberOfUse = (devices = {}, typeId) =>
  Object.entries(devices)
    .filter(([_, device]) => device.typeId === typeId)
    .length
