"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    image: "/placeholder.svg?height=100&width=100",
    text: "Great service! My complaint was resolved quickly.",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/placeholder.svg?height=100&width=100",
    text: "Very user-friendly platform. Easy to file and track complaints.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    image: "/placeholder.svg?height=100&width=100",
    text: "Impressed with the quick response time. Highly recommended!",
  },
  {
    id: 4,
    name: "Alice Brown",
    image: "/placeholder.svg?height=100&width=100",
    text: "The AI-driven system really makes a difference in addressing concerns.",
  },
  {
    id: 5,
    name: "Charlie Davis",
    image: "/placeholder.svg?height=100&width=100",
    text: "Transparent process and regular updates. Very satisfied!",
  },
]

const UserFeedback: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 text-gray-800"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          User Feedback
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbackData.slice(0, 3).map((feedback) => (
            <motion.div key={feedback.id} className="bg-white rounded-lg shadow-lg p-6" whileHover={{ scale: 1.05 }}>
              <div className="flex items-center mb-4">
                <Image
                  src={feedback.image || "/placeholder.svg"}
                  alt={feedback.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">{feedback.name}</h3>
              </div>
              <p className="text-gray-600">{feedback.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {feedbackData.slice(3).map((feedback) => (
            <motion.div key={feedback.id} className="bg-white rounded-lg shadow-lg p-6" whileHover={{ scale: 1.05 }}>
              <div className="flex items-center mb-4">
                <Image
                  src={feedback.image || "/placeholder.svg"}
                  alt={feedback.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <h3 className="font-semibold">{feedback.name}</h3>
              </div>
              <p className="text-gray-600">{feedback.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserFeedback

