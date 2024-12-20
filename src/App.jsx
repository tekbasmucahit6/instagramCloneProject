import React from 'react'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Index from './pages/index/Index'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App