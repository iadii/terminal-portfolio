import { useState, useEffect, useRef } from 'react'
import { executeCommand, getAvailableCommands } from '../utils/commands'

export const useTerminal = () => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([])
  const [currentPath, setCurrentPath] = useState('~')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)
  const outputRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.trim()) {
      let result = executeCommand(input.trim(), currentPath)
      if (result instanceof Promise) {
        result = await result
      }
      const { output, newPath } = result
      setCommandHistory(prev => [...prev, input.trim()])
      setHistoryIndex(-1)
      if (result.clear) {
        setHistory([])
      } else {
        setHistory(prev => [
          ...prev,
          { type: 'input', content: input, path: currentPath },
          { type: 'output', content: result }
        ])
      }
      if (newPath) {
        setCurrentPath(newPath)
      }
      setInput('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const commands = getAvailableCommands()
      const matchingCommands = commands.filter(cmd => cmd.startsWith(input))
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0])
      }
    }
  }

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    setTimeout(() => {
      const result = executeCommand('welcome', currentPath)
      setHistory([
        { type: 'output', content: result }
      ])
    }, 500)
  }, [])

  useEffect(() => {
    const inputElement = inputRef.current
    if (inputElement) {
      inputElement.addEventListener('keydown', handleKeyDown)
      return () => inputElement.removeEventListener('keydown', handleKeyDown)
    }
  }, [historyIndex, commandHistory, input])

  return {
    input,
    setInput,
    history,
    currentPath,
    handleSubmit,
    outputRef,
    inputRef
  }
}