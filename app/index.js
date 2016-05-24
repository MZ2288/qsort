import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store'
import AppContainer from './containers/AppContainer'

const app = document.getElementById('app')

const store = createStore()

store.observe(() => {
  ReactDOM.render(<AppContainer store={store} />, app)
})
