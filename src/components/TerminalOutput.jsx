
import React, { useEffect } from 'react'

const TerminalOutput = ({ history, outputRef, currentPath }) => {
  useEffect(() => {
    // Find the most recent output with a downloadUrl
    const last = history[history.length - 1]
    if (last && last.type === 'output' && last.content && last.content.downloadUrl) {
      const { downloadUrl, downloadName } = last.content
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = downloadName || ''
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }, [history])

  return (
    <div ref={outputRef} className="terminal-output">
      {history.map((item, index) => (
        <div key={index}>
          {item.type === 'input' && (
            <div className="terminal-line">
              <span className="terminal-prompt">
                amisha@macbook:{item.path}$
              </span>
              <span className="terminal-text">{item.content}</span>
            </div>
          )}
          {item.type === 'output' && (
            <div className="terminal-response">
              {Array.isArray(item.content.output)
                ? item.content.output.map((line, lineIndex) => (
                    <div key={lineIndex} className="terminal-text">
                      {line}
                    </div>
                  ))
                : Array.isArray(item.content)
                ? item.content.map((line, lineIndex) => (
                    <div key={lineIndex} className="terminal-text">
                      {line}
                    </div>
                  ))
                : null}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TerminalOutput