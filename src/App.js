import React from 'react'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App