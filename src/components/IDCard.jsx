import React, { useState } from 'react'
import { Github, Linkedin, Code, Trophy, Braces } from 'lucide-react'
import { SiX } from 'react-icons/si'

const PROFILE_IMG = '/Ammy1.jpeg'

const LINKS = [
  { name: 'Github', url: 'https://github.com/ammycodex', icon: Github },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/ammycodex/', icon: Linkedin },
  { name: 'Leetode', url: 'https://leetcode.com/u/ammycodes/', icon: Code },
  { name: 'Hackerrank', url: 'https://www.naukri.com/code360/profile/ammycodex', icon: Trophy },
  { name: 'X', url: 'https://x.com/Ammycodex', icon: SiX },
  { name: 'Codeforce', url: 'https://codeforces.com/profile/iammy', icon: Braces },
]

const IDCard = () => {
  const [hovered, setHovered] = useState(null)

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md max-h-[90vh] overflow-auto rounded-2xl bg-[#181818] shadow-xl border border-[#222] mx-auto">
      <div className="relative w-full h-1/2">
        <img src={PROFILE_IMG} alt="Profile" className="object-contain w-full h-full bg-black" style={{ objectPosition: 'center' }} />
        <span className="absolute top-2 right-2 bg-[#222] text-xs text-gray-200 px-3 py-1 rounded-full shadow-md z-20">ID: DEV-2025</span>
      </div>
      <div className="flex flex-col justify-between h-1/2 p-3 sm:p-4 md:p-5 text-white">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide">Amisha Sharma</h2>
          <p className="text-sm sm:text-base text-gray-300 mb-2">AI Developer</p>
          <div className="text-xs text-gray-400 mb-1">Location: Ghaziabad, UP</div>
          <div className="text-xs text-gray-400 mb-1">Email: amishasharma0912@gmail.com</div>
          <div className="text-xs text-gray-400 mb-3">Phone: +91 7814700512</div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-2 relative">
            {LINKS.map(({ name, url, icon: Icon }, idx) => (
              <div key={name} className="relative flex flex-col items-center">
                {hovered === idx && (
                  <div className="mb-2 px-2 py-1 rounded bg-[#333] text-xs text-white absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap z-10 shadow-lg">
                    {name}
                  </div>
                )}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-link={name.toLowerCase()}
                  className="bg-[#222] p-2 rounded-full hover:bg-[#333]"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={e => e.stopPropagation()}
                >
                  <Icon size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IDCard