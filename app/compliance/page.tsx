export default function CompliancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold">Compliance</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Regulatory Compliance</h2>
            <p className="text-gray-600">
              Wealth Flow is committed to maintaining the highest standards of regulatory compliance. We adhere to
              all applicable financial regulations and maintain appropriate licenses in the jurisdictions where we
              operate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Security Standards</h2>
            <p className="text-gray-600">
              We maintain robust security measures to protect your data and financial information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>256-bit SSL encryption for all data transmission</li>
              <li>Regular security audits and penetration testing</li>
              <li>Multi-factor authentication</li>
              <li>24/7 fraud monitoring</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Data Protection</h2>
            <p className="text-gray-600">
              We comply with global data protection regulations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Financial Regulations</h2>
            <p className="text-gray-600">
              Our platform adheres to key financial regulations and standards:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Anti-Money Laundering (AML) compliance</li>
              <li>Know Your Customer (KYC) requirements</li>
              <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Reporting and Transparency</h2>
            <p className="text-gray-600">
              We maintain transparent reporting practices:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Regular compliance reports to regulatory authorities</li>
              <li>Annual security assessments</li>
              <li>Transparent fee structures</li>
              <li>Clear disclosure of terms and conditions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Employee Training</h2>
            <p className="text-gray-600">
              Our employees undergo regular training on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Data protection and privacy</li>
              <li>Security awareness</li>
              <li>Regulatory compliance</li>
              <li>Ethics and professional conduct</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact Information</h2>
            <p className="text-gray-600">
              For compliance-related inquiries, please contact our Compliance Department:
              <br />
              Email: compliance@wealthflow.com
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
