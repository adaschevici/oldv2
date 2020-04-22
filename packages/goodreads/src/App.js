import React from 'react'
import logo from './logo.svg'
import { typography } from '@goodreads-v2/component-library'
import './App.css'

const { Artifika } = typography

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main style={{ height: '70vh' }}>
        <Artifika tag="h1">Chuck</Artifika>
      </main>
      <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
    </div>
  )
}

export default App
