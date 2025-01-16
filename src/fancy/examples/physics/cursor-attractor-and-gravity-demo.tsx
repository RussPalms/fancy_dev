import Gravity, {
  MatterBody,
} from "@/fancy/components/physics/cursor-attractor-and-gravity"
import { motion } from "framer-motion"

export default function Preview() {
  const words = [
    'we',
    'analyze',
    { text: 'millions', highlight: true },
    { text: 'of', highlight: true },
    { text: 'data', highlight: true },
    { text: 'points', highlight: true },
    'per',
    'second',
    'to',
    'provide',
    'you',
    'with',
    'the',
    'most',
    'accurate',
    'insights.'
  ]

  return (
    <div className="w-full h-full flex flex-col relative font-overusedGrotesk justify-center items-center">
      <Gravity
        attractorStrength={0.0}
        cursorStrength={0.0004}
        cursorFieldRadius={200}
        className="w-full h-full z-0 absolute"
      >
        {[...Array(150)].map((_, i) => {
          const size = Math.max(20, Math.random() * 50)
          return (
            <MatterBody
              key={i}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={`${Math.random() * 100}%`}
              y={`${Math.random() * 100}%`}
            >
              <div
                className="rounded-full bg-[#eee]"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                }}
              />
            </MatterBody>
          )
        })}
      </Gravity>
      <span className="text z-10 sm:text-lg md:text-xl text-black px-4 py-2 w-2/3 flex flex-wrap whitespace-pre-wrap">
        {words.map((word, index) => {
          const text = typeof word === 'string' ? word : word.text
          const highlight = typeof word === 'object' && word.highlight
          
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 + index * 0.05 }}
              className={`${highlight ? 'text-[#0015ff]' : ''} ${index < words.length - 1 ? 'mr-1' : ''}`}
            >
              {text}
            </motion.span>
          )
        })}
      </span>
    </div>
  )
}
