import React from 'react'
import { Button, ControlLabel, Form, FormGroup, FormControl, Well } from 'react-bootstrap'

export default ({
  devicesTypes = {},
  actions,
  newDevice: { label = '', typeId } = {}
}) => (
  <Well>
    <Form inline>
      <FormGroup controlId="formInlineName">
        <ControlLabel>Name</ControlLabel>
        {' '}
        <FormControl
          type="text"
          placeholder="Living room stereo"
          value={label}
          onChange={(e) => actions.setNewDeviceLabel(e.target.value)}
        />
      </FormGroup>
      {' '}
      <FormGroup controlId="formInlineEmail">
        <ControlLabel>Type</ControlLabel>
        {' '}
        <FormControl
          componentClass="select"
          value={typeId}
          onChange={(e) => actions.setNewDeviceType(e.target.value)}
        >
          <option value="">-</option>
          {Object.entries(devicesTypes).map(([key, value]) =>
            <option key={key} value={key}>{value.label}</option>
          )}
        </FormControl>
      </FormGroup>
      {' '}
      <Button
        bsStyle="primary"
        onClick={actions.addNewDevice}
        className="pull-right"
      >
        Add device
      </Button>
    </Form>
  </Well>
)
