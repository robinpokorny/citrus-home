import React from 'react'
import { Button, Nav, NavItem } from 'react-bootstrap'

import { numberOfUse } from './utils'
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

    <NewDevice
      actions={actions}
      devicesTypes={store.devicesTypes}
      newDevice={store.newDevice}
    />

    {Object.entries(store.devices || {}).reverse().map(([key, value]) =>
      <Device
        key={key}
        id={key}
        type={store.devicesTypes[value.typeId]}
        actions={actions}
        {...value}
      />
    )}

    <h2 id="devices-types" className="title-spaced">
      Devices Types
      <Button
        bsStyle="primary"
        onClick={actions.addNewType}
        className="pull-right"
      >
        Add device type
      </Button>
    </h2>
    {Object.entries(store.devicesTypes || {}).reverse().map(([typeId, value]) =>
      <DeviceType
        key={typeId}
        id={typeId}
        actions={actions}
        removable={numberOfUse(store.devices, typeId) === 0}
        {...value}
      />
    )}

    <footer className="footer">
        <a
          href="#"
          onClick={actions.resetToInit}
          className="pull-right"
        >
          Load init config
        </a>
        <p>© 2016 Robin Pokorny for Citrusbyte</p>
    </footer>
  </div>
)
