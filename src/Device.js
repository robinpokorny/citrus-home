import React from 'react'
import { Panel } from 'react-bootstrap'
import { Button, ButtonGroup, Label } from 'react-bootstrap'

import { controlTypes } from './config'

const renderControlTypes = {
  [controlTypes.button]: (deviceId, controlId, value) => (
    <Button
      key={controlId}
      bsStyle="primary"
      onClick={(a) => console.log(deviceId, controlId, 'clicked')}
    >
      {value.label}
    </Button>
  ),
  [controlTypes.slider]: (deviceId, controlId, value, current = 50, onChange) => (
    <div key={controlId}>
      <h4>{value.label} <Label>{current}</Label>:</h4>
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
  [controlTypes.select]: (deviceId, controlId, value, current = 0, onChange) => (
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
  const title = [
    <ButtonGroup key="1" className="pull-right">
      <Button
        bsStyle="danger"
        onClick={() => actions.removeDevice(deviceId)}
      >
        Remove device
      </Button>
    </ButtonGroup>,

    <h4 key="2">{label} <small>{type.label}</small></h4>
  ]

  return (
    <Panel header={title}>
      {Object.entries(type.controls || {}).map(([controlId, value]) =>
        renderControlTypes[value.type](
          deviceId,
          controlId,
          value,
          controls[controlId],
          actions.setControlValue
        )
      )}
    </Panel>
  )
}
