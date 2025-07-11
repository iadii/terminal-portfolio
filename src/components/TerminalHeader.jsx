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
        root@amisha.io — ~zsh — 80×24
      </div>
      <div></div>
    </div>
  )
}

export default TerminalHeader