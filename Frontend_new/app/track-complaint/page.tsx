"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const TrackComplaint: React.FC = () => {
  const [showOtpInput, setShowOtpInput] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [timer, setTimer] = useState(300) // 5 minutes in seconds
  const [showComplaintStatus, setShowComplaintStatus] = useState(false)

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
    // Here you would typically handle the form submission and fetch complaint status
    setShowComplaintStatus(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
      >
        <div className="p-8">
          <motion.h2 className="text-3xl font-bold text-gray-900 mb-6 text-center" whileHover={{ scale: 1.05 }}>
            Track Your Complaint
          </motion.h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="complaintId" className="block text-sm font-medium text-gray-700">
                Complaint ID
              </label>
              <input
                type="text"
                id="complaintId"
                name="complaintId"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={handleSendOtp}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Send OTP
              </button>
              {showOtpInput && (
                <div className="flex-1 ml-4">
                  <input
                    type="text"
                    placeholder="Enter OTP sent on mail"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Time remaining: {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
                    {timer % 60}
                  </p>
                </div>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Track Complaint
              </button>
            </div>
          </form>
          {showComplaintStatus && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Complaint Status</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Complaint Status</td>
                    <td className="px-6 py-4 whitespace-nowrap">Verified</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Department Allocation</td>
                    <td className="px-6 py-4 whitespace-nowrap">Asssigned</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Handling Authority</td>
                    <td className="px-6 py-4 whitespace-nowrap">Assigned</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Final Status</td>
                    <td className="px-6 py-4 whitespace-nowrap">Closed/td>
                  </tr>
                </tbody>
              </table>
              <motion.div
                className="mt-6 p-4 bg-green-100 rounded-lg text-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              >
                <p className="text-lg font-semibold text-green-800">Grievance Resolved</p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default TrackComplaint

