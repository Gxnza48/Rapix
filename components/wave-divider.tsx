"use client"

interface WaveDividerProps {
  fillColor: string // Tailwind CSS class for fill, e.g., "fill-black"
}

export default function WaveDivider({ fillColor }: WaveDividerProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path
          d="M0,50 C 200,0 800,100 1000,50 L1000,100 L0,100 Z" // This path creates a smooth wave
          className={fillColor}
        />
      </svg>
    </div>
  )
}
