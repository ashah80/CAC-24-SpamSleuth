import React, { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [inputData, setInputData] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('/api/check_spam', {
        input_data: inputData
      })
      setResult(response.data.result)
    } catch (error) {
      console.error("Error running function:", error)
      setResult("An error occurred. Please try again.")
    }
    setIsLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-8">
        <img src="/placeholder.svg?height=100&width=100" alt="Shield Icon" className="mr-4" />
        <div>
          <h2 className="text-3xl font-bold mb-2">Welcome to SpamSleuth</h2>
          <p className="text-lg">
            Your trusted companion in the fight against scams and spam.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <img src="/placeholder.svg?height=300&width=400" alt="Elderly person using computer" className="rounded-lg shadow-md" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Protect Yourself Online</h3>
          <p className="mb-4">
            SpamSleuth is designed to help people of all ages, especially seniors, 
            stay safe from online scams and fraudulent messages.
          </p>
          <p>
            Our easy-to-use tool analyzes suspicious texts and emails to help you 
            determine if they're legitimate or potentially harmful.
          </p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Spam Check</h3>
        <p className="mb-4">
          Enter the text of a suspicious message below, and we'll analyze it for you.
        </p>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows={4}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Paste the suspicious text here..."
        />
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          {isLoading ? "Checking..." : "Check for Spam"}
        </button>
        {result && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h4 className="font-semibold">Result:</h4>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  )
}