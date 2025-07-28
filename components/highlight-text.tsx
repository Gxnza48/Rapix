import type React from "react"

interface HighlightTextProps {
  text: string
  keywords: string[]
  className?: string
}

export function HighlightText({ text, keywords, className }: HighlightTextProps) {
  if (!text) return null

  let highlightedText: React.ReactNode[] = [text]

  keywords.forEach((keyword) => {
    highlightedText = highlightedText.flatMap((segment) => {
      if (typeof segment !== "string") return segment // Already a React node

      const parts = segment.split(new RegExp(`(${keyword})`, "gi"))
      return parts.map((part, index) => {
        if (part.toLowerCase() === keyword.toLowerCase()) {
          return (
            <span key={`${keyword}-${index}`} className={className}>
              {part}
            </span>
          )
        }
        return part
      })
    })
  })

  return <>{highlightedText}</>
}
