import React from 'react'
import { Minus, Square, X } from 'lucide-react'

const TerminalHeader = ({ currentPath }) => {
  return (
    <div className="terminal-header">
      <div className="terminal-controls">
        <div className="control-button close" />

        <div className="control-button minimize" />
        
        <div className="control-button maximize" />
        
      </div>
      <div className="terminal-title">
        amisha@macbook: {currentPath}
      </div>
      <div></div>
    </div>
  )
}

export default TerminalHeader