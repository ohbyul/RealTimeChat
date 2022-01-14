import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Chat from './components/Chat/Chat'
import Join from './components/Join/Join'

const App = () => {
  console.log("메인화면");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Join />} />
        {/* <Route path="/chat" element={<Chat location={location}/>} /> */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  )
}

export default App;