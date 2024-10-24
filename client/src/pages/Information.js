import React from 'react'

export default function Information() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 mt-6 bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text leading-normal">
        Understanding Scams and Spam
      </h2>
      <div className="space-y-8">
        
        {/* Phishing Section */}
        <section className="grid md:grid-cols-[2fr_1fr] ">
          <div className="gap-8 p-6 rounded-lg shadow-md mr-2">
            <div className="flex items-center mb-4">
              <img src="/email.png" alt="Phishing Icon" className="mr-4" />
              <h3 className="text-2xl bg-gradient-to-r to-yellow-400 from-amber-500 text-transparent bg-clip-text font-extrabold">
                Phishing
              </h3>
            </div>
            <p className="mb-4">
              Phishing is a type of online scam where attackers trick you into providing sensitive information, 
              like passwords or credit card numbers, by pretending to be a trustworthy entity, such as a bank or 
              a well-known website. They often send emails or messages that look legitimate, leading you to fake 
              websites designed to steal your data. Always double-check the source before clicking links or sharing 
              personal information.
            </p>
            <a href="https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams" className="text-blue-600 hover:underline">
              Learn more about phishing (FTC)
            </a>
          </div>
          {/* Example Phishing Email */}
          <div className="bg-white p-6 rounded-lg shadow-md ml-2">
            <h3 className="text-2xl bg-gradient-to-r to-yellow-400 from-amber-500 text-transparent bg-clip-text font-extrabold">
              Example Phishing Email
            </h3>
            <p className="mt-4 mb-2">
              "Dear Customer, your account has been compromised. Click the link below to reset your password."
            </p>
            <p className="text-red-500 font-semibold">
              Warning: This is a fake email intended to steal your login credentials.
            </p>
          </div>
        </section>

        {/* Spoofing Section */}
        <section className="grid md:grid-cols-[2fr_1fr]">
          <div className=" gap-8 p-6 rounded-lg shadow-md mr-2">
            <div className="flex items-center mb-4">
              <img src="/spoofing.png" alt="Spoofing Icon" className="mr-4" />
              <h3 className="text-2xl bg-gradient-to-r to-yellow-400 from-amber-500 text-transparent bg-clip-text font-extrabold">
                Spoofing
              </h3>
            </div>
            <p className="mb-4">
              Spoofing occurs when someone disguises their identity to appear as someone else, often by 
              manipulating phone numbers or email addresses. For example, an email might look like it's 
              coming from a trusted contact or organization when it's actually from an attacker. Spoofing 
              is often used in phishing attempts to make them more convincing. Always verify unexpected messages 
              before acting on them.
            </p>
            <a href="https://www.fcc.gov/spoofing" className="text-blue-600 hover:underline">
              Learn more about spoofing (FCC)
            </a>
          </div>
          {/* Example Spoofed Email */}
          <div className="bg-white p-6 ml-2 rounded-lg shadow-md">
            <h3 className="text-2xl bg-gradient-to-r to-yellow-400 from-amber-500 text-transparent bg-clip-text font-extrabold">
              Example Spoofed Email
            </h3>
            <p className="mt-4 mb-2">
              "From: contact@yourbank.com (This email might appear real but is actually spoofed)."
            </p>
            <p className="text-red-500 font-semibold">
              Warning: Always check the actual sender's address before clicking links.
            </p>
          </div>
        </section>

        {/* Spam Section */}
        <section className="grid md:grid-cols-[2fr_1fr] ">
          <div className=" gap-8 p-6 rounded-lg shadow-md mr-2">
            <div className="flex items-center mb-4">
              <img src="/fraud.png" alt="Advertisement Icon" className="mr-4" />
              <h3 className="text-2xl bg-gradient-to-r to-yellow-400 from-amber-500 text-transparent bg-clip-text font-extrabold">
                Unwanted Advertisements (Spam)
              </h3>
            </div>
            <p className="mb-4">
              Spam refers to unwanted, unsolicited messages, typically sent in bulk via email or text messages. 
              These messages often advertise products or services and can sometimes contain harmful links or 
              attachments. While spam is mostly annoying, it can also be dangerous, as some spam messages are 
              used to trick you into downloading malware or providing personal information. It’s best to avoid 
              clicking on links in spam messages and to use filters to reduce them.
            </p>
            <a href="https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" className="text-blue-600 hover:underline">
              Tips to avoid scams (FTC)
            </a>
          </div>
          {/* Example Spam Email */}
          <div className="bg-white p-6 rounded-lg shadow-md ml-2">
            <h3 className="text-2xl bg-gradient-to-r to-yellow-400 from-amber-500 text-transparent bg-clip-text font-extrabold">
              Example Spam Email
            </h3>
            <p className="mt-4 mb-2">
              "Congratulations! You've won a $1,000 gift card. Click here to claim your prize!"
            </p>
            <p className="text-red-500 font-semibold">
              Warning: This is likely a scam attempting to steal personal information.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}