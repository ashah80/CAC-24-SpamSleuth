import React from 'react'

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className=" font-extrabold mb-6 mt-6 bg-gradient-to-r text-4xl from-purple-500 to-violet-950 text-transparent bg-clip-text inline-block">About Us</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex items-center mb-4">
          <img src="/logoB.png" alt="Team Icon" className="mr-4" />
          <p className="text-lg">
            SpamSleuth was created by two passionate developers who wanted to make the internet 
            <span className="bg-gradient-to-r from-purple-500 to-violet-950 font-bold text-transparent bg-clip-text"> a safer place for everyone</span>, especially for <span className="bg-gradient-to-r to-yellow-400 from-amber-500 font-bold text-transparent bg-clip-text">those who might be more vulnerable to online scams.</span>
          </p>
        </div>
        <img src="/placeholder.svg?height=300&width=600" alt="Team working together" className="w-full rounded-lg mb-4" />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="/placeholder.svg?height=150&width=150" alt="Jane Doe" className="rounded-full mx-auto mb-4" />
          <h3 className="text-center text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-violet-950 text-transparent bg-clip-text mb-3">Aarav Shah</h3>
          <p className="mb-4">
            Aarav is a software developer who has worked on many projects with many people. He's passionate about 
            educating people about online safety and developing tools to combat cyber threats. He was inspired to create this
            project after his neighbor was scammed out of over $2,000.
          </p>
          <p className="italic">
            "I believe that <span className="text-purple-600">everyone deserves to feel safe online. </span>With SpamSleuth, we're giving 
            people the <span className="text-purple-600">tools they need to protect themselves from scams.</span>" - <span className="text-purple-600 font-bold">Aarav Shah</span>
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src="/vvijay.jpg" alt="John Smith" className="rounded-full mx-auto mb-4" />
          <h3 className="text-center text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-violet-950 text-transparent bg-clip-text mb-3">Vishnu Vijay</h3>
          <p className="mb-4">
            Vishnu is a software engineer specializing in both front-end development and AI implementation. 
            He's dedicated to using AI for social good. He wanted to join Aarav in this project after he heard after 
            having experiences with scammers himself.
          </p>
          <p className="italic ">
            "Technology should <span className="text-purple-600"> empower and protect people, not exploit them.</span> That's why I'm excited 
            about SpamSleuth and its potential to <span className="text-purple-600">shield individuals from online threats.</span>" - <span className="text-purple-600 font-bold">Vishnu Vijay</span>
          </p>
        </div>
      </div>
    </div>
  )
}