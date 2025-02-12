"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

const images = [
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
]

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (images.length - 2)) % (images.length - 2))
  }

  return (
    <div className="relative w-full overflow-hidden">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        How We Address Your Concerns
      </motion.h2>
      <div className="flex justify-between items-center">
        <button onClick={prevSlide} className="p-2 bg-gray-800 text-white rounded-full">
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
        <div className="flex justify-center items-center space-x-4">
          {images.slice(currentIndex, currentIndex + 3).map((src, index) => (
            <motion.div key={index} className="w-1/3" whileHover={{ scale: 1.05 }}>
              <Image
                src={src || "/placeholder.svg"}
                alt={`Carousel Image ${index + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-64 rounded-lg"
              />
            </motion.div>
          ))}
        </div>
        <button onClick={nextSlide} className="p-2 bg-gray-800 text-white rounded-full">
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

export default Carousel

