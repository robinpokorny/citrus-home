import React from 'react'
import { Panel } from 'react-bootstrap'
import { Button, ButtonGroup, FormControl, Table } from 'react-bootstrap'

import { controlTypes } from './config'

export default ({
  id: typeId,
  label = '',
  controls = {},
  actions,
  removable
}) => {
  const title = [
    <ButtonGroup key="1" className="pull-right">
      {removable
        ? <Button
            bsStyle="danger"
            onClick={() => actions.removeType(typeId)}
          >
            Remove type
          </Button>
        : <Button
            disabled
            title="Type used, remove devices first"
          >
            Remove type
          </Button>
      }
      <Button
        bsStyle="success"
        onClick={() => actions.addControlToType(typeId)}
      >
        Add control
      </Button>
    </ButtonGroup>,

    <FormControl key="2"
      type="text"
      placeholder="Type name"
      value={label}
      className="form-control-small"
      onChange={(e) => actions.setTypeLabel(typeId, e.target.value)}
    />
  ]

  return (
    <Panel header={title}>
      <Table fill>
        <tbody>
          {Object.entries(controls).map(([controlId, { label = '', type, options = [] } = {}]) =>
            <tr key={controlId}>
              <td>
                <FormControl
                  type="text"
                  placeholder="Control name"
                  value={label}
                  onChange={(e) => actions.setTypeControlLabel(typeId, controlId, e.target.value)}
                />
              </td>
              <td>
                <FormControl
                  componentClass="select"
                  value={type}
                  onChange={(e) => actions.setTypeControlType(typeId, controlId, e.target.value)}
                >
                  {Object.entries(controlTypes).map(([_, name]) =>
                    <option key={name} value={name}>{name}</option>
                  )}
                </FormControl>
              </td>
              <td>
                {
                  type === 'select' &&
                  <FormControl
                    type="text"
                    placeholder="Comma sepatated options"
                    value={options.join(', ')}
                    onChange={(e) => actions.setTypeControlOptions(
                      typeId,
                      controlId,
                      e.target.value
                    )}
                  />
                }
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Panel>
  )
}
