
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'

import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import AppLayout from 'Layout/AppLayout';
import './App.css'

//Test Code used for JEST !!! DO NOT DELETE !!!
export function timesThree(numberToMultiply) {
  return numberToMultiply * 3
}

function App() {
  return (
      <Routes>
        <Route path="*"  element={<AppLayout />} />
      </Routes>
  );
}

export default App;
