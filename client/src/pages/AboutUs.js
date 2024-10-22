import React from 'react'

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Us</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <img src="/placeholder.svg?height=80&width=80" alt="Team Icon" className="mr-4" />
          <p className="text-lg">
            SpamSleuth was created by two passionate developers who wanted to make the internet 
            a safer place for everyone, especially for those who might be more vulnerable to online scams.
          </p>
        </div>
        <img src="/placeholder.svg?height=300&width=600" alt="Team working together" className="w-full rounded-lg mb-4" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="/placeholder.svg?height=150&width=150" alt="Jane Doe" className="rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Jane Doe</h3>
          <p className="mb-4">
            Jane is a cybersecurity expert with over 10 years of experience. She's passionate about 
            educating people on online safety and developing tools to combat cyber threats.
          </p>
          <p className="italic">
            "I believe that everyone deserves to feel safe online. With SpamSleuth, we're giving 
            people the tools they need to protect themselves from scams and fraud."
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="/placeholder.svg?height=150&width=150" alt="John Smith" className="rounded-full mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">John Smith</h3>
          <p className="mb-4">
            John is a software engineer specializing in machine learning and natural language processing. 
            He's dedicated to using AI for social good.
          </p>
          <p className="italic">
            "Technology should empower and protect people, not exploit them. That's why I'm excited 
            about SpamSleuth and its potential to shield vulnerable individuals from online threats."
          </p>
        </div>
      </div>
    </div>
  )
}