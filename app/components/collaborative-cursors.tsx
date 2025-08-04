"use client"

import { useEffect, useState } from "react"
import { MousePointer2 } from "lucide-react"

interface Cursor {
  id: string
  name: string
  color: string
  x: number
  y: number
  targetX: number
  targetY: number
}

export default function CollaborativeCursors() {
  const [cursors, setCursors] = useState<Cursor[]>([
    {
      id: "sarah",
      name: "Sarah",
      color: "bg-emerald-500",
      x: 20,
      y: 30,
      targetX: 20,
      targetY: 30,
    },
    {
      id: "marcus",
      name: "Marcus",
      color: "bg-purple-500",
      x: 60,
      y: 70,
      targetX: 60,
      targetY: 70,
    },
    {
      id: "alex",
      name: "Alex",
      color: "bg-blue-500",
      x: 80,
      y: 20,
      targetX: 80,
      targetY: 20,
    },
    {
      id: "emma",
      name: "Emma",
      color: "bg-pink-500",
      x: 40,
      y: 50,
      targetX: 40,
      targetY: 50,
    },
  ])

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCursors((prevCursors) =>
        prevCursors.map((cursor) => ({
          ...cursor,
          targetX: Math.random() * 85 + 5, // Keep within bounds (5% to 90%)
          targetY: Math.random() * 75 + 10, // Keep within bounds (10% to 85%)
        })),
      )
    }, 3000)

    const animationInterval = setInterval(() => {
      setCursors((prevCursors) =>
        prevCursors.map((cursor) => ({
          ...cursor,
          x: cursor.x + (cursor.targetX - cursor.x) * 0.1,
          y: cursor.y + (cursor.targetY - cursor.y) * 0.1,
        })),
      )
    }, 50)

    return () => {
      clearInterval(moveInterval)
      clearInterval(animationInterval)
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {cursors.map((cursor) => (
        <div
          key={cursor.id}
          className="absolute transition-all duration-100 ease-out z-20"
          style={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Cursor */}
          <div className="relative">
            <MousePointer2
              className={`w-5 h-5 ${cursor.color.replace("bg-", "text-")} drop-shadow-lg transform rotate-12`}
              fill="currentColor"
            />

            {/* Cursor trail effect */}
            <div className={`absolute -top-1 -left-1 w-7 h-7 ${cursor.color} opacity-20 rounded-full animate-ping`} />

            {/* Name label */}
            <div
              className={`absolute top-6 left-2 ${cursor.color} text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap font-medium`}
            >
              {cursor.name}
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced collaboration indicators */}
      <div className="absolute top-4 right-4 flex items-center space-x-3">
        <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg flex items-center space-x-2">
          <div className="flex -space-x-1">
            <div className="w-6 h-6 bg-emerald-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-xs text-slate-700 font-semibold">4 collaborating</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <div className="bg-emerald-500 text-white rounded-full px-3 py-1 shadow-lg">
          <span className="text-xs font-bold">LIVE SESSION</span>
        </div>
      </div>
    </div>
  )
}
