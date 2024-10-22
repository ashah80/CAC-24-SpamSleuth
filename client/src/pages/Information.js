import React from 'react'

export default function Information() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Understanding Scams and Spam</h2>
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img src="/placeholder.svg?height=60&width=60" alt="Phishing Icon" className="mr-4" />
            <h3 className="text-2xl font-semibold">Phishing</h3>
          </div>
          <p className="mb-4">
            Phishing is a type of scam where criminals try to trick you into giving them your personal information, 
            such as passwords or credit card numbers. They often do this by pretending to be a trusted organization.
          </p>
          <a href="https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams" className="text-blue-600 hover:underline">
            Learn more about phishing (FTC)
          </a>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img src="/placeholder.svg?height=60&width=60" alt="Spoofing Icon" className="mr-4" />
            <h3 className="text-2xl font-semibold">Spoofing</h3>
          </div>
          <p className="mb-4">
            Spoofing occurs when someone disguises an email address, sender name, phone number, or website URL to 
            convince you that you're interacting with a trusted source.
          </p>
          <a href="https://www.fcc.gov/spoofing" className="text-blue-600 hover:underline">
            Learn more about spoofing (FCC)
          </a>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img src="/placeholder.svg?height=60&width=60" alt="Advertisement Icon" className="mr-4" />
            <h3 className="text-2xl font-semibold">Unwanted Advertisements</h3>
          </div>
          <p className="mb-4">
            While not always malicious, unwanted advertisements can be annoying and sometimes lead to scams. 
            It's important to be cautious about responding to or clicking on unsolicited ads.
          </p>
          <a href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" className="text-blue-600 hover:underline">
            Tips to avoid scams (FTC)
          </a>
        </section>
      </div>
    </div>
  )
}