import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Index from './pages/index.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </div>
  )
}

export default App;
