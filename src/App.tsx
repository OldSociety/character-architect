import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import AppLayout from 'Layout/AppLayout';
import './App.css';;

// export function timesThree(numberToMultiply: number) {
//   return numberToMultiply * 3
// }

function App() {
  return (
      <Routes>
        <Route path="/"  element={<AppLayout />} />
      </Routes>
  );
}

export default App;
