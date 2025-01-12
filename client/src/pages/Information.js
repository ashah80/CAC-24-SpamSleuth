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
              <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
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
            <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
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
              <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
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
            <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
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
              <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
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
            <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
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
        
    {/* Identity Theft Section */}
    <section className="grid md:grid-cols-[2fr_1fr]">
      <div className="gap-8 p-6 rounded-lg shadow-md mr-2">
        <div className="flex items-center mb-4">
          <img src="/scam.png" alt="Identity Theft Icon" className="mr-4" />
          <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
            Identity Theft
          </h3>
        </div>
        <p className="mb-4">
          Identity theft occurs when someone steals your personal information, such as your Social Security number, to commit fraud. This can lead to serious consequences, including unauthorized purchases or loans in your name. Always protect your personal data and monitor your financial statements for suspicious activity.
        </p>
        <a href="https://www.identitytheft.gov/" className="text-blue-600 hover:underline">
          Learn more about identity theft (FTC)
        </a>
      </div>
      {/* Example Identity Theft Scenario */}
      <div className="bg-white p-6 rounded-lg shadow-md ml-2">
        <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
          Example Identity Theft
        </h3>
        <p className="mt-4 mb-2">
          "Someone used your Social Security number to open a credit card account in your name."
        </p>
        <p className="text-red-500 font-semibold">
          Warning: Report identity theft immediately to minimize damage.
        </p>
      </div>
    </section>

    {/* Malware Section */}
    <section className="grid md:grid-cols-[2fr_1fr]">
      <div className="gap-8 p-6 rounded-lg shadow-md mr-2">
        <div className="flex items-center mb-4">
          <img src="/security.png" alt="Malware Icon" className="mr-4" />
          <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
            Malware
          </h3>
        </div>
        <p className="mb-4">
          Malware refers to malicious software designed to damage your device, steal data, or disrupt services. It can spread through infected email attachments, links, or downloads. To protect yourself, always update your software, use antivirus tools, and avoid suspicious links.
        </p>
        <a href="https://www.cisa.gov/uscert/ncas/tips/ST06-001" className="text-blue-600 hover:underline">
          Learn more about malware (CISA)
        </a>
      </div>
      {/* Example Malware Attack */}
      <div className="bg-white p-6 rounded-lg shadow-md ml-2">
        <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
          Example Malware Attack
        </h3>
        <p className="mt-4 mb-2">
          "Your computer has been locked. Pay a fee to unlock it."
        </p>
        <p className="text-red-500 font-semibold">
          Warning: This is likely ransomware. Do not pay; seek professional help.
        </p>
      </div>
    </section>

    {/* Smishing Section */}
    <section className="grid md:grid-cols-[2fr_1fr]">
      <div className="gap-8 p-6 rounded-lg shadow-md mr-2">
        <div className="flex items-center mb-4">
          <img src="/screen.png" alt="Smishing Icon" className="mr-4" />
          <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
            Smishing
          </h3>
        </div>
        <p className="mb-4">
          Smishing is similar to phishing but takes place over SMS or text messages. Attackers pose as legitimate organizations to trick you into clicking malicious links or providing sensitive information. Always verify unexpected texts, especially those asking for personal details.
        </p>
        <a href="https://www.ftc.gov/sms-phishing" className="text-blue-600 hover:underline">
          Learn more about smishing (FTC)
        </a>
      </div>
      {/* Example Smishing Text */}
      <div className="bg-white p-6 rounded-lg shadow-md ml-2">
        <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
          Example Smishing Text
        </h3>
        <p className="mt-4 mb-2">
          "Your bank account has been locked. Click here to reset your password."
        </p>
        <p className="text-red-500 font-semibold">
          Warning: Always contact your bank directly to verify such claims.
        </p>
      </div>
    </section>

    {/* Ransomware Section */}
    <section className="grid md:grid-cols-[2fr_1fr]">
      <div className="gap-8 p-6 rounded-lg shadow-md mr-2">
        <div className="flex items-center mb-4">
          <img src="/credit-card.png" alt="Ransomware Icon" className="mr-4" />
          <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
            Ransomware
          </h3>
        </div>
        <p className="mb-4">
          Ransomware is a type of malware that encrypts your files, demanding payment for their release. Attackers typically use phishing or infected software downloads to spread ransomware. To avoid it, back up your data regularly and avoid suspicious emails and links.
        </p>
        <a href="https://www.cisa.gov/ransomware" className="text-blue-600 hover:underline">
          Learn more about ransomware (CISA)
        </a>
      </div>
      {/* Example Ransomware Demand */}
      <div className="bg-white p-6 rounded-lg shadow-md ml-2">
        <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
          Example Ransomware Demand
        </h3>
        <p className="mt-4 mb-2">
          "Your files have been encrypted. Pay $500 in Bitcoin to restore access."
        </p>
        <p className="text-red-500 font-semibold">
          Warning: Do not pay the ransom; seek professional assistance instead.
        </p>
      </div>
    </section>

    {/* Social Engineering Section */}
    <section className="grid md:grid-cols-[2fr_1fr]">
      <div className="gap-8 p-6 rounded-lg shadow-md mr-2">
        <div className="flex items-center mb-4">
          <img src="/fraud-alert.png" alt="Social Engineering Icon" className="mr-4" />
          <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
            Social Engineering
          </h3>
        </div>
        <p className="mb-4">
          Social engineering involves manipulating individuals into divulging confidential information. Attackers exploit human emotions, such as fear or trust, to gain access to sensitive data. These attacks are often combined with other types of scams, like phishing. Be cautious of unsolicited requests for personal information.
        </p>
        <a href="https://www.csoonline.com/article/2117170/social-engineering.html" className="text-blue-600 hover:underline">
          Learn more about social engineering (CSO)
        </a>
      </div>
      {/* Example Social Engineering Scam */}
      <div className="bg-white p-6 rounded-lg shadow-md ml-2">
        <h3 className="text-2xl bg-gradient-to-r from-purple-500 to-violet-950 text-transparent bg-clip-text font-extrabold">
          Example Social Engineering Scam
        </h3>
        <p className="mt-4 mb-2">
          "This is your IT department. Please provide your password to fix a security issue."
        </p>
        <p className="text-red-500 font-semibold">
          Warning: Legitimate companies will never ask for your password in this way.
        </p>
    </div>
    </section>
   </div>
  </div> 
  )
}