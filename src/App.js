import React from 'react'

import Device from './Device'
import NewDevice from './NewDevice'

export default ({ store, actions }) => (
  <div className="container">
    <div className="header clearfix">
      <h3 className="text-muted">Citrus Home</h3>
    </div>

    <h2>Devices</h2>
    {Object.entries(store.devices).map(([key, value]) =>
      <Device
        key={key}
        id={key}
        type={store.devicesTypes[value.typeId]}
        actions={actions}
        {...value}
      />
    )}

    <NewDevice
      actions={actions}
      devicesTypes={store.devicesTypes}
      newDevice={store.newDevice}
    />

    <h2>Devices Types</h2>
    <ul>
      {Object.entries(store.devicesTypes).map(([key, value]) =>
        <li key={key}>{value.label}</li>
      )}
    </ul>

    <footer className="footer">
        <p>© 2016 Robin Pokorny for Citrusbyte</p>
    </footer>
  </div>
)
