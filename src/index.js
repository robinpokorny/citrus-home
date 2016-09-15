import firebase from 'firebase'
import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'

import * as config from './config'
import App from './App'
import './index.css'

const app = firebase.initializeApp(config.firebase)
const ref = app.database().ref()

ref.on('value', (snapshot) =>
  ReactDOM.render(
    <App store={snapshot.val()} />,
    document.getElementById('root')
  )
)
