import React, { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [inputData, setInputData] = useState("")
  const [result, setResult] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      const response = await axios.post('http://localhost:5000/api/run_function', {
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
    <div className=" mx-auto">
      <div className="relative w-full h-96 h-screen bg-cover" style={{ backgroundImage: "url('/cover_image.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center">
          <h1 className="text-white  text-5xl md:text-7xl font-bold text-center">
            Welcome to SpamSleuth!
          </h1>
          <br>
          </br>
          <p className="text-white text-5l md:text-5l font-bold text-center">
            Your trusted companion in the fight against scams and spam.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8 ">
        <div>
          <img src="/old.png" alt="Elderly person using computer" className=" shadow-md max-w-[500px]" />
        </div>
        <div className="flex flex-col justify-center -ml-40 pr-10">
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text md:text-6xl ">Protect Yourself Online</h3>
          <p className="text-2xl">
            SpamSleuth is designed to help people of <span className="bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">ALL</span> ages, especially seniors, 
            stay safe from  <span className="bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">online scams and fradulent messages.</span>
          </p>
          <p className="text-2xl">
            Our easy-to-use tool analyzes suspicious texts and emails to help you 
            <span className="bg-gradient-to-r to-yellow-400 from-amber-500 text-transparent bg-clip-text font-extrabold"> determine if they're legitimate or potentially harmful. </span>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-violet-950  p-6">
        <h3 className="text-xl mb-6 text-white md:text-8xl font-extrabold text-center">Spam Check</h3>
        <p className="mb-4 text-white text-lg text-center">
          Enter the text of a suspicious message below, and we'll analyze it for you.
        </p>
        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows={4}
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Paste the suspicious text here..."
        />
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className=" bg-white px-4 py-2 rounded hover:bg-yellow-300 transition-colors"
          >
            <span className='bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text hover: text-white font-extrabold text-2xl'> {isLoading ? "Checking..." : "Check for Spam"} </span>
          </button>
        </div>
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