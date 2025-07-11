import React from 'react'
import Lanyard from './components/Lanyard'
import Terminal from './components/Terminal'

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg flex flex-col md:flex-row md:overflow-auto">
      {/* Left Section - Lanyard (40%) */}
      <div className="w-full md:w-2/5 flex justify-center p-4 md:p-8 sm:p-2 items-start">
        <Lanyard />
      </div>
      {/* Right Section - Terminal (60%) */}
      <div className="w-full md:w-3/5 p-2 md:p-4 sm:p-1 flex justify-center items-start">
        <div className="w-full max-w-[98vw] sm:max-w-[95vw] md:max-w-full">
          <Terminal />
        </div>
      </div>
    </div>
  )
}

export default App