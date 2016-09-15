import React from 'react'
import { Button, ControlLabel, Form, FormGroup, FormControl } from 'react-bootstrap'

export default ({ devicesTypes, actions, newDevice = {} }) => (
  <Form inline>
    <FormGroup controlId="formInlineName">
      <ControlLabel>Name</ControlLabel>
      {' '}
      <FormControl
        type="text"
        placeholder="Living room stereo"
        value={newDevice.label}
        onChange={(e) => actions.setNewDeviceLabel(e.target.value)}
      />
    </FormGroup>
    {' '}
    <FormGroup controlId="formInlineEmail">
      <ControlLabel>Type</ControlLabel>
      {' '}
      <select
        value={newDevice.typeId}
        onChange={(e) => actions.setNewDeviceType(e.target.value)}
      >
        <option></option>
        {Object.entries(devicesTypes).map(([key, value]) =>
          <option key={key} value={key}>{value.label}</option>
        )}
      </select>
    </FormGroup>
    {' '}
    <Button onClick={actions.addNewDevice}>
      Add device
    </Button>
  </Form>
)
