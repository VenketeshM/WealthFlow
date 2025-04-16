export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-gray-600">
              At Wealth Flow, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <h3 className="text-xl font-medium mt-4">2.1 Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Name and contact information</li>
              <li>Financial information</li>
              <li>Account credentials</li>
              <li>Transaction history</li>
            </ul>

            <h3 className="text-xl font-medium mt-4">2.2 Usage Data</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage patterns and preferences</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. How We Use Your Information</h2>
            <p className="text-gray-600">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Provide and maintain our service</li>
              <li>Improve and personalize user experience</li>
              <li>Process transactions</li>
              <li>Send service updates and marketing communications</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information, including encryption,
              secure servers, and regular security assessments.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Data Sharing</h2>
            <p className="text-gray-600">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Service providers and partners</li>
              <li>Legal authorities when required by law</li>
              <li>Third parties with your consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Your Rights</h2>
            <p className="text-gray-600">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@wealthflow.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </section>

          <div className="text-sm text-gray-500">
            Last updated: April 16, 2025
          </div>
        </div>
      </div>
    </div>
  )
}
