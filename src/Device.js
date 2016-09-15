import React from 'react'
import { Panel } from 'react-bootstrap'

const controlTypes = {
  'button': (key, value, current) => <div key={key}>{value.type}</div>,
  'slider': (key, value, current) => <div key={key}>{value.type}</div>,
  'select': (key, value, current) => <div key={key}>{value.type}</div>
}

export default ({ id, label, type, typeId, controls = {}}) => {
  const title = (<h3>{label} <small>{type.label}</small></h3>)

  return (
    <Panel header={title}>
      {Object.entries(type.controls).map(([key, value]) =>
        controlTypes[value.type](key, value, controls[key])
      )}
    </Panel>
  )
}
