"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperclip } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

const FileComplaint: React.FC = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    aadharNumber: "",
    city: "",
    date: "",
    description: "",
    file: null, // Keeping track of the file but not sending it
  })

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null
    setFormData((prevData) => ({
      ...prevData,
      file,
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = {
        name: formData.name,
        email: formData.email,
        phoneNo: formData.phoneNo,
        aadharNumber: formData.aadharNumber,
        city: formData.city,
        date: formData.date,
        description: formData.description,
      }

      console.log("Submitting complaint:", data)
      
      const response = await axios.post("http://localhost:8000/api/complaints/create", data)

      if (response.status === 201) {
        setShowSuccessPopup(true)
        setTimeout(() => {
          setShowSuccessPopup(false)
        }, 3000)
      }
    } catch (error) {
      console.error("Error submitting complaint:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
      >
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              className="h-48 w-full object-cover md:w-48"
              src="/placeholder.svg?height=300&width=300"
              alt="Complaint Image"
              width={300}
              height={300}
            />
          </div>
          <div className="p-8 w-full">
            <motion.h2 className="text-3xl font-bold text-gray-900 mb-6" whileHover={{ scale: 1.05 }}>
              File a Complaint
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                "name",
                "email",
                "phoneNo",
                "aadharNumber",
                "city",
                "date",
              ].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === "date" ? "date" : "text"}
                    id={field}
                    name={field}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={formData[field as keyof typeof formData] as string}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description of the grievance faced
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
                  Attach files
                </label>
                <input
                  type="file"
                  className="mt-1 block w-full"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                />
                <p className="mt-1 text-xs text-gray-500">Image size: 5MB max</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-4 w-full p-3 text-white bg-green-600 rounded-md"
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-bold">Complaint Submitted Successfully!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="mt-4 text-sm font-semibold text-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FileComplaint
