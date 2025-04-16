export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to Wealth Flow. By accessing or using our services, you agree to be bound by these Terms of Service.
              Please read these terms carefully before using our platform.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Definitions</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>"Service" refers to the Wealth Flow platform and all related services</li>
              <li>"User" refers to any individual or entity using our Service</li>
              <li>"Account" refers to the user's registered profile on our platform</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. Account Registration</h2>
            <p className="text-gray-600">
              To use our services, you must create an account. You agree to provide accurate and complete information
              during registration and to keep this information updated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
            <p className="text-gray-600">
              Users are responsible for maintaining the confidentiality of their account credentials and for all
              activities that occur under their account.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Service Usage</h2>
            <p className="text-gray-600">
              Our services must be used in accordance with applicable laws and regulations. Users agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Use the service for any illegal purposes</li>
              <li>Attempt to gain unauthorized access to any part of the service</li>
              <li>Interfere with or disrupt the service or servers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Privacy</h2>
            <p className="text-gray-600">
              Our Privacy Policy explains how we collect, use, and protect your personal information. By using our
              service, you agree to our Privacy Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Users will be notified of significant changes.
              Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">8. Contact Information</h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, please contact us at legal@wealthflow.com
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
