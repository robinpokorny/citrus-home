import React from 'react'
import { Panel } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const controlTypes = {
  'button': (deviceID, controlID, value) => (
    <Button
      key={controlID}
      bsStyle="primary"
      onClick={(a) => console.log(deviceID, controlID, 'clicked')}
    >
      {value.label}
    </Button>
  ),
  'slider': (deviceID, controlID, value, current, onChange) => (
    <div key={controlID}>
      <h4>{value.label}:</h4>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={current}
        onChange={(e) => onChange(deviceID, controlID, e.target.value)}
      />
    </div>
  ),
  'select': (deviceID, controlID, value, current, onChange) => (
    <div key={controlID}>
      <h4>{value.label}:</h4>
      <select
        value={current}
        onChange={(e) => onChange(deviceID, controlID, e.target.value)}
      >
        {value.options.map((label, i) => (
          <option key={i} value={i}>{label}</option>
        ))}
      </select>
    </div>
  )
}

export default ({
  id: deviceID,
  label,
  type,
  typeId,
  controls = {},
  actions
}) => {
  const title = (<h3>{label} <small>{type.label}</small></h3>)

  return (
    <Panel header={title}>
      {Object.entries(type.controls).map(([controlID, value]) =>
        controlTypes[value.type](deviceID, controlID, value, controls[controlID], actions.setControlValue)
      )}
    </Panel>
  )
}
