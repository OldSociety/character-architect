import * as React from 'react'
import Moons from './Moons.json'

export const MoonMap = () => {
  return (
    <div>
      {Moons.map((moon) => (
        <h4>
          <li key={moon.id}>{moon.name}</li>
        </h4>
      ))}
    </div>
  )
}
