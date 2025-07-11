import React from 'react'
import Lanyard from './components/Lanyard'
import Terminal from './components/Terminal'

function App() {
  return (
    <div className="h-screen bg-terminal-bg flex">
      {/* Left Section - Lanyard (40%) */}
      <div className="w-2/5 flex items-center justify-center p-8">
        <Lanyard />
      </div>
      {/* Right Section - Terminal (60%) */}
      <div className="w-3/5 p-4 flex items-center justify-center">
        <div className="w-full">
          <Terminal />
        </div>
      </div>
    </div>
  )
}

export default App