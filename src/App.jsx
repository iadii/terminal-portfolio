import React from 'react'
import Lanyard from './components/Lanyard'
import Terminal from './components/Terminal'

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg flex flex-col md:flex-row overflow-auto">
      {/* Left Section - Lanyard (40%) */}
      <div className="w-full md:w-2/5 flex items-center justify-center p-4 md:p-8">
        <Lanyard />
      </div>
      {/* Right Section - Terminal (60%) */}
      <div className="w-full md:w-3/5 p-2 md:p-4 flex items-center justify-center">
        <div className="w-full">
          <Terminal />
        </div>
      </div>
    </div>
  )
}

export default App