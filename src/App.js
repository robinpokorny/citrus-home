import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

import Device from './Device'

export default ({ store }) => (
  <div className="container">
    <div className="header clearfix">
      <Nav bsStyle="pills" pullRight>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
      </Nav>
      <h3 className="text-muted">Citrus Home</h3>
    </div>

    <h2>Devices</h2>
    {Object.entries(store.devices).map(([key, value]) =>
      <Device
        key={key}
        id={key}
        type={store.devicesTypes[value.typeId]}
        {...value}
      />
    )}

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
