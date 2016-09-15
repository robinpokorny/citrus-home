import React from 'react'
import { Panel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const controlTypes = {
  'button': (deviceId, controlId, value) => (
    <Button
      key={controlId}
      bsStyle="primary"
      onClick={(a) => console.log(deviceId, controlId, 'clicked')}
    >
      {value.label}
    </Button>
  ),
  'slider': (deviceId, controlId, value, current, onChange) => (
    <div key={controlId}>
      <h4>{value.label}:</h4>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={current}
        onChange={(e) => onChange(deviceId, controlId, e.target.value)}
      />
    </div>
  ),
  'select': (deviceId, controlId, value, current, onChange) => (
    <div key={controlId}>
      <h4>{value.label}:</h4>
      <select
        value={current}
        onChange={(e) => onChange(deviceId, controlId, e.target.value)}
      >
        {value.options.map((label, i) => (
          <option key={i} value={i}>{label}</option>
        ))}
      </select>
    </div>
  )
}

export default ({
  id: deviceId,
  label,
  type,
  typeId,
  controls = {},
  actions
}) => {
  const title = (<h3>{label} <small>{type.label}</small></h3>)

  return (
    <Panel header={title}>
      {Object.entries(type.controls).map(([controlId, value]) =>
        controlTypes[value.type](deviceId, controlId, value, controls[controlId], actions.setControlValue)
      )}
      <hr />
      <Button
        bsStyle="danger"
        onClick={() => actions.removeDevice(deviceId)}
      >
        Remove device
      </Button>
    </Panel>
  )
}
