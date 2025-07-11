import React from 'react'
import { useTerminal } from '../hooks/useTerminal'
import TerminalHeader from './TerminalHeader'
import TerminalOutput from './TerminalOutput'
import '../styles/terminal.css'

const Terminal = () => {
  const {
    input,
    setInput,
    history,
    currentPath,
    handleSubmit,
    outputRef,
    inputRef
  } = useTerminal()

  return (
    <div className="terminal-container-long">
      <TerminalHeader currentPath={currentPath} />
      
      <div className="terminal-body">
        <TerminalOutput 
          history={history} 
          outputRef={outputRef} 
          currentPath={currentPath}
        />
        
        <div className="terminal-input-area">
          <form onSubmit={handleSubmit} className="terminal-line">
            <span className="terminal-prompt">
              amisha@macbook:{currentPath}$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="terminal-input"
              autoFocus
              spellCheck={false}
            />
            <span className="terminal-cursor"></span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Terminal