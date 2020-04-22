import React from 'react'
import { typography } from '@goodreads-v2/component-library'
import './App.css'

const { Artifika } = typography

function App() {
  return (
    <div className="App">
      <main style={{ height: '70vh' }}>
        <Artifika tag="h1">Chuck</Artifika>
      </main>
    </div>
  )
}

export default App
