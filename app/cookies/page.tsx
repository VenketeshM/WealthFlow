export default function CookiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. What Are Cookies?</h2>
            <p className="text-gray-600">
              Cookies are small text files that are placed on your device when you visit our website. They help us
              provide you with a better experience and allow certain features to work.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-medium">2.1 Essential Cookies</h3>
            <p className="text-gray-600">
              These cookies are necessary for the website to function properly. They enable basic functions like page
              navigation and access to secure areas of the website.
            </p>

            <h3 className="text-xl font-medium">2.2 Performance Cookies</h3>
            <p className="text-gray-600">
              These cookies help us understand how visitors interact with our website by collecting and reporting
              information anonymously.
            </p>

            <h3 className="text-xl font-medium">2.3 Functionality Cookies</h3>
            <p className="text-gray-600">
              These cookies enable the website to remember choices you make (such as your language preference) and
              provide enhanced features.
            </p>

            <h3 className="text-xl font-medium">2.4 Targeting Cookies</h3>
            <p className="text-gray-600">
              These cookies may be set through our site by our advertising partners to build a profile of your
              interests and show you relevant ads on other sites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">3. How to Control Cookies</h2>
            <p className="text-gray-600">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
              computer and you can set most browsers to prevent them from being placed.
            </p>
            <p className="text-gray-600">
              To modify your cookie settings, please visit your browser's preferences or settings menu:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Chrome: Settings → Privacy and Security → Cookies</li>
              <li>Firefox: Options → Privacy & Security → Cookies</li>
              <li>Safari: Preferences → Privacy → Cookies</li>
              <li>Edge: Settings → Privacy & Security → Cookies</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Third-Party Cookies</h2>
            <p className="text-gray-600">
              We use services from third-party partners who may set cookies on your device when you visit our
              website. These partners include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>Advertising networks</li>
              <li>Social media platforms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">5. Updates to This Policy</h2>
            <p className="text-gray-600">
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an
              updated revision date.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about our Cookie Policy, please contact us at:
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
