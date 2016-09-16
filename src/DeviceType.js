import React from 'react'
import { Panel } from 'react-bootstrap'
import { Button, ButtonGroup, Table } from 'react-bootstrap'

export default ({
  id: typeId,
  label,
  controls = {},
  actions
}) => {
  const title = [
    <ButtonGroup key="1" className="pull-right">
      <Button
        bsStyle="success"
        onClick={() => {}}
      >
        Add control
      </Button>
    </ButtonGroup>,

    <h4 key="2">{label}</h4>
  ]

  return (
    <Panel header={title}>
      <Table fill>
        <tbody>
          {Object.entries(controls).map(([controlId, value]) =>
            <tr key={controlId}>
              <td>{value.label}</td>
              <td>{value.type}</td>
              <td>
                {value.type === 'select' && value.options.join(', ')}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Panel>
  )
}
