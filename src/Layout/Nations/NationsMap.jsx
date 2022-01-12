import * as React from 'react'
import Nations from './Nations.json'

export const NationsMap = () => {
  return (
    <div>
      {Nations.map((nation) => (
        <h4>
          <li key={nation.id}>{nation.name}</li>
        </h4>
      ))}
    </div>
  )
}
