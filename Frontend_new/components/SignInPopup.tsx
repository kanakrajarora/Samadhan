"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane, faGoogle } from "@fortawesome/free-brands-svg-icons"

interface SignInPopupProps {
  onClose: () => void
}

const SignInPopup: React.FC<SignInPopupProps> = ({ onClose }) => {
  const router = useRouter()
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [timer, setTimer] = useState(300) // 5 minutes in seconds

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [otpSent, timer])

  const handleSendOtp = () => {
    setOtpSent(true)
    setShowOtpInput(true)
    setTimer(300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the sign-in logic
    router.push("/")
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gradient-to-br from-blue-100 to-indigo-200 p-8 rounded-lg shadow-xl max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={handleSendOtp}
              className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send OTP
            </button>
            {showOtpInput && (
              <div className="flex-1 ml-4">
                <input
                  type="text"
                  placeholder="Enter OTP sent on mail"
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
                  {timer % 60}
                </p>
              </div>
            )}
          </div>
          {otpSent && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-green-600 mb-4"
            >
              OTP sent successfully!
            </motion.div>
          )}
          <div className="flex justify-between items-center mb-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Submit
            </button>
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-800">
              Close
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">or</p>
          <p className="text-sm text-gray-600 mt-2">Sign in with</p>
          <button className="mt-2 bg-white text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-100">
            <FontAwesomeIcon icon={faGoogle} className="mr-2" />
            Google
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default SignInPopup

