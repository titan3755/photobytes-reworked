import { Fragment } from "react";
import Navbar from "../navbars/Navbar";
import Footer from "../footers/Footer";

export default function Privacy() {
  return (
    <Fragment>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8 sm:p-12 text-gray-800 leading-relaxed">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-8">
          Privacy Policy
        </h1>
        <p className="text-center text-sm text-gray-500 mb-12">
          Effective Date: September 2025 <br />
          Last Updated: September 2025
        </p>

        <section className="mb-12">
          <p>
            At <strong>PhotoBytes Studios</strong>, accessible from{" "}
            <a
              href="https://photobytes-reworked.vercel.app"
              className="text-blue-600 hover:underline"
            >
              https://photobytes-reworked.vercel.app
            </a>
            , protecting the privacy of our visitors is one of our top
            priorities. This Privacy Policy explains the types of information
            collected and how it is used.
          </p>
          <p className="mt-4">
            If you have any questions or need more details about our Privacy
            Policy, please feel free to contact us.
          </p>
        </section>

        <hr className="my-8 border-gray-300" />

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Consent</h2>
          <p>
            By using our website, you consent to our Privacy Policy and agree to
            its terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p>
            The personal information you are asked to provide, and the reasons
            why you are asked to provide it, will always be made clear at the
            point we request it.
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>
              If you contact us directly, we may collect your name, email,
              phone, and the contents of your message (including attachments).
            </li>
            <li>
              If you register for an account, we may ask for your name, company,
              address, email, and phone number.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p>We may use the information we collect to:</p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Provide, operate, and improve our website</li>
            <li>Personalize your experience</li>
            <li>Develop new features and services</li>
            <li>Communicate with you (support, updates, promotions)</li>
            <li>Send emails and newsletters</li>
            <li>Detect and prevent fraudulent activity</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Log Files</h2>
          <p>
            Like most websites, PhotoBytes Studios uses log files. These may
            include IP addresses, browser type, Internet Service Provider (ISP),
            date/time stamps, referring/exit pages, and click data. This
            information is not linked to personally identifiable data and is
            used for analyzing trends, administering the site, and tracking user
            behavior.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p>
            We use cookies to store information about visitor preferences and
            the pages visited. This helps us optimize content and improve user
            experience. You can disable cookies in your browser settings if you
            prefer.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
          <p>
            PhotoBytes Studios may work with third-party services (such as
            analytics or advertisers). These parties may use cookies or other
            technologies to measure effectiveness and personalize content. We do
            not control their tracking technologies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Your Data Protection Rights
          </h2>
          <p>Depending on your location, you may have rights including:</p>
          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>The right to access your personal data</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to request deletion of your data</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
          <p className="mt-4">
            If you make a request, we will respond within one month. To exercise
            any of these rights, please contact us.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
          <p>
            We do not knowingly collect any personally identifiable information
            from children under the age of 13. If you believe your child
            provided such information, please contact us and we will promptly
            remove it.
          </p>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:info@photobytesstudios.com"
              className="text-blue-600 hover:underline"
            >
              info@photobytesstudios.com
            </a>
          </p>
        </section>
      </div>
      <Footer />
    </Fragment>
  );
}
