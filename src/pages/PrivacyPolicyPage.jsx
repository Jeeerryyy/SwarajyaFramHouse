import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="legal-kicker">Legal</p>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-updated">Last updated: July 2026</p>

            <div className="legal-content">
              <section className="legal-section">
                <h2>1. Introduction</h2>
                <p>
                  Swarajya Farm House ("we", "our", or "us") is committed to
                  protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you
                  visit our website and use our services. Please read this policy
                  carefully. If you do not agree with the terms of this privacy
                  policy, please do not access the website.
                </p>
              </section>

              <section className="legal-section">
                <h2>2. Information We Collect</h2>
                <h3>Personal Information</h3>
                <p>We may collect the following personal information when you make an enquiry or booking:</p>
                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Number of guests and preferred dates</li>
                  <li>Any additional message or special requirements you provide</li>
                </ul>
                <h3>Automatically Collected Information</h3>
                <p>
                  When you visit our website, we may automatically collect
                  certain information about your device, including your IP
                  address, browser type, operating system, access times, and the
                  pages you have viewed on our site.
                </p>
              </section>

              <section className="legal-section">
                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                  <li>To process and manage your booking enquiries</li>
                  <li>To communicate with you regarding your stay or enquiry</li>
                  <li>To improve our website and services</li>
                  <li>To send you relevant updates or promotional offers (only with your consent)</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>4. Disclosure of Your Information</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal
                  information to outside parties. We may share your information
                  only in the following circumstances:
                </p>
                <ul>
                  <li>With service providers who assist us in operating our website and services</li>
                  <li>When required by law or to respond to legal process</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                </ul>
              </section>

              <section className="legal-section">
                <h2>5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures
                  to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no
                  method of transmission over the Internet or electronic storage
                  is 100% secure.
                </p>
              </section>

              <section className="legal-section">
                <h2>6. Cookies</h2>
                <p>
                  Our website may use cookies and similar tracking technologies
                  to enhance your browsing experience. You can set your browser
                  to refuse all cookies or to indicate when a cookie is being
                  sent. If you do not accept cookies, some portions of our
                  website may not function properly.
                </p>
              </section>

              <section className="legal-section">
                <h2>7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites (such as
                  Google Maps, WhatsApp). We are not responsible for the privacy
                  practices of these external sites. We encourage you to read
                  the privacy policies of any linked websites.
                </p>
              </section>

              <section className="legal-section">
                <h2>8. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Withdraw consent for marketing communications at any time</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at{" "}
                  <strong>+91 96041 58701</strong>.
                </p>
              </section>

              <section className="legal-section">
                <h2>9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated revision
                  date. Your continued use of our website after any changes
                  constitutes acceptance of those changes.
                </p>
              </section>

              <section className="legal-section">
                <h2>10. Governing Law</h2>
                <p>
                  This Privacy Policy shall be governed by and construed in
                  accordance with the laws of India. The Courts in Pune shall
                  have exclusive jurisdiction over any disputes arising in
                  connection with this policy.
                </p>
              </section>

              <section className="legal-section">
                <h2>11. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                  <li>
                    <strong>Swarajya Farm House</strong>
                  </li>
                  <li>
                    9QP9+P7V, Donje Gaon-Sinhagad Rd, Donaje, Ghera Sinhagad,
                    Maharashtra 411025
                  </li>
                  <li>Phone: +91 96041 58701</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
