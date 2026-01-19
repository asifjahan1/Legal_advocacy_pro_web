import React from 'react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-[#1a2b56] font-bold hover:text-[#e1c28c] transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Support
      </button>

      <div className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
        <h1 className="text-4xl font-extrabold text-[#1a2b56] mb-4">Privacy Policy</h1>
        <p className="text-slate-500 text-sm mb-12 italic">Last updated: 8 January 2026</p>

        <p className="text-slate-600 leading-relaxed mb-10">
          This Privacy Policy explains how your information is collected, used, and protected when you use Legal Advocacy Pro (the “App”), a platform designed to help students practise and improve their advocacy skills. By using the App, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">1. Who We Are</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Legal Advocacy Pro is operated by:
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 mb-4">
            <address className="text-slate-600 not-italic text-sm">
              <strong>Legal Ed Tech Ltd</strong><br />
              77 Southam Road<br />
              Birmingham, B28 0AA<br />
              United Kingdom<br /><br />
              Email: <strong>contact@legaledtech.co.uk</strong>
            </address>
          </div>
          <p className="text-slate-600">
            Legal Ed Tech Ltd is the data controller for the purposes of the UK General Data Protection Regulation (UK GDPR).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">2. Information We Collect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#1a2b56] mb-2">2.1 Information You Provide</h3>
              <p className="text-slate-600 mb-2">We may collect the following information when you use the App:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Name, email address, or account login details</li>
                <li>Advocacy practice submissions (including written or recorded responses)</li>
                <li>Feedback, support requests, or other communications you send to us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#1a2b56] mb-2">2.2 Information Collected Automatically</h3>
              <p className="text-slate-600 mb-2">We may automatically collect:</p>
              <ul className="list-disc pl-6 text-slate-600 space-y-1">
                <li>Device and browser information</li>
                <li>IP address and approximate location (city/country level)</li>
                <li>Usage data such as session duration, interactions, and features used</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">3. How We Use Your Information</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We use your information to:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Provide and operate the App</li>
            <li>Assess submissions against pre-prepared reference materials in order to generate feedback</li>
            <li>Improve functionality, accuracy, and user experience</li>
            <li>Respond to enquiries and provide customer support</li>
            <li>Comply with legal and regulatory obligations</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">4. Lawful Basis for Processing (UK GDPR)</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We process personal data on the following legal bases:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Performance of a contract</strong> – to provide the App’s services</li>
            <li><strong>Legitimate interests</strong> – to improve and secure the App</li>
            <li><strong>Consent</strong> – where required, such as for optional communications</li>
            <li><strong>Legal obligation</strong> – where processing is required by law</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">5. Sharing of Information</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We do not sell your personal data. We may share information with:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Cloud hosting and infrastructure providers</li>
            <li>Technology and service providers required to operate the App</li>
            <li>Analytics providers using anonymised or pseudonymised data</li>
            <li>Legal or regulatory authorities where required by law</li>
          </ul>
          <p className="text-slate-600 mt-4 text-sm bg-slate-50 p-4 rounded-lg">
            All service providers process data only on our instructions and are subject to appropriate confidentiality and data protection obligations.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">6. Data Retention</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We retain personal data only for as long as necessary:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>While your account remains active</li>
            <li>To meet legal or regulatory requirements</li>
            <li>To resolve disputes or enforce our agreements</li>
          </ul>
          <p className="text-slate-600 mt-4">You may request deletion of your data at any time by contacting us.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">7. Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We implement appropriate technical and organisational measures to protect your personal data, including encryption, access controls, and secure hosting environments.
          </p>
          <p className="text-slate-600 italic text-sm">
            While we take reasonable steps to protect your information, no system is completely secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">8. Your Rights</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Under UK GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2 grid md:grid-cols-2 gap-x-8">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Restrict or object to processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-slate-600 mt-6">
            Requests can be made by contacting <strong>contact@legaledtech.co.uk</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">9. Children’s Privacy</h2>
          <p className="text-slate-600 leading-relaxed">
            Legal Advocacy Pro is intended for students aged 16 and over. We do not knowingly collect personal data from children under 16 without appropriate consent.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">10. International Data Transfers</h2>
          <p className="text-slate-600 leading-relaxed">
            Your data may be processed outside the United Kingdom where necessary. Where this occurs, appropriate safeguards are in place in accordance with UK GDPR.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">11. Changes to This Policy</h2>
          <p className="text-slate-600 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be published within the App or on the website, and the “Last updated” date will be revised accordingly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">12. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have any questions about this Privacy Policy or your personal data, please contact:<br /><br />
            <strong>Legal Ed Tech Ltd</strong><br />
            77 Southam Road, Birmingham, B28 0AA, United Kingdom<br />
            Email: <strong>contact@legaledtech.co.uk</strong>
          </p>
        </section>
      </div>
    </div>
  );
};
