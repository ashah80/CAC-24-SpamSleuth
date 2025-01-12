import React, { useState } from 'react'
import axios from 'axios'

export default function SpamSleuth() {
  const [inputData, setInputData] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [classificationType, setClassificationType] = useState("email") // Default to email

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/api/run_function', {
        input_data: inputData,
        classification_type: classificationType
      })
      setResult(response.data.result)
    } catch (error) {
      console.error("Error running function:", error)
      setResult("An error occurred. Please try again.")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="relative w-full h-[650px] bg-cover bg-center" style={{ backgroundImage: "url('/cover_image.png')" }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-70 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2 text-center md:text-7xl">Welcome to SpamSleuth</h1>
          <p className="text-white text-xl md:text-3xl text-center">
            <span className="animate-typing whitespace-nowrap border-r-4 border-r-white pr-5">
              Your trusted companion in the fight against scams and spam.
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md mb-8 border border-purple-200 w-full">
          <div className="border-b border-purple-100 p-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="w-full">
                <img src="/old-people.png" alt="Elderly person using computer" className="rounded-lg shadow-md w-full max-w-[500px] mx-auto" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-purple-900">Protect Yourself Online</h3>
                <p className="text-lg mb-4">
                  SpamSleuth is designed to help people of <span className="text-purple-900 font-bold">ALL</span> ages, especially seniors, 
                  stay safe from <span className="text-purple-900 font-bold">online scams and fraudulent messages.</span>
                </p>
                <p className="text-lg mb-4">
                  Our easy-to-use tool analyzes suspicious texts and emails to help you determine if they're legitimate or potentially harmful.
                </p>
                <p className="text-lg font-semibold text-violet-950">
                  Stay informed, stay protected!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-purple-200 w-full">
          <div className="border-b border-purple-100 p-6">
            <h2 className="text-2xl font-semibold text-purple-900">Spam Check</h2>
            <p className="text-gray-600 mt-1">Enter the text of a suspicious message below, and we'll analyze it for you.</p>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="flex justify-center space-x-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setClassificationType("email")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      classificationType === "email"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    onClick={() => setClassificationType("text")}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      classificationType === "text"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Text Message
                  </button>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-purple-900 mb-1">
                    {classificationType === "email" ? "Email Content" : "Text Message Content"}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 text-gray-700 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={`Paste the suspicious ${classificationType === "email" ? "email" : "text message"} here...`}
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Analyzing..." : "Check for Spam"}
                </button>
              </div>
            </form>
          </div>
          {result && (
            <div className="px-6 pb-6">
              <div className="w-full p-4 bg-gray-100 rounded-lg flex items-start gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Analysis Result:</h4>
                  {result.split('\n').map((line, index) => {
                    if (line.includes("This message has a")) {
                      return (
                        <p key={index} className="mb-4">{line}</p>
                      );
                    } else if (line.includes("1.") || line.includes("2.") || line.includes("3.")) {
                      return (
                        <React.Fragment key={index}>
                          <p>{line}</p>
                          {line.includes("3.") && <br />}
                        </React.Fragment>
                      );
                    } else {
                      return <p key={index}>{line}</p>;
                    }
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}