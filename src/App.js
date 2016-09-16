import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

import Device from './Device'
import DeviceType from './DeviceType'
import NewDevice from './NewDevice'

export default ({ store, actions }) => (
  <div className="container">
    <div className="header clearfix">
      <Nav bsStyle="pills" pullRight>
        <NavItem href="#devices">Devices</NavItem>
        <NavItem href="#devices-types">Devices Types</NavItem>
      </Nav>
      <h3 className="text-muted">Citrus Home</h3>
    </div>

    <h2 id="devices">Devices</h2>
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

    <h2 id="devices-types">Devices Types</h2>
    {Object.entries(store.devicesTypes).map(([key, value]) =>
      <DeviceType
        key={key}
        id={key}
        actions={actions}
        {...value}
      />
    )}

    <footer className="footer">
        <p>© 2016 Robin Pokorny for Citrusbyte</p>
    </footer>
  </div>
)
