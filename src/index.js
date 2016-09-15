import firebase from 'firebase'
import React from 'react'
import ReactDOM from 'react-dom'
import entries from 'object.entries'
entries.shim()

import 'bootstrap/dist/css/bootstrap.css'

import * as config from './config'
import App from './App'
import './index.css'

const app = firebase.initializeApp(config.firebase)
const ref = app.database().ref()

// For debugging, to be removed
window.ref = ref

const actions = {}
actions.setControlValue = (deviceID, controlID, value) =>
  ref.child(`devices/${deviceID}/controls/${controlID}/`).set(value)

ref.on('value', (snapshot) =>
  ReactDOM.render(
    <App store={snapshot.val()} actions={actions}/>,
    document.getElementById('root')
  )
)
