import React from 'react';

interface TermsOfUseProps {
  onBack: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onBack }) => {
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
        <h1 className="text-4xl font-extrabold text-[#1a2b56] mb-4">Terms of Use</h1>
        <p className="text-slate-500 text-sm mb-12 italic">Last updated: 8 January 2026</p>

        <p className="text-slate-600 leading-relaxed mb-10">
          These Terms of Use (“Terms”) govern your use of Legal Advocacy Pro (the “App”).
          By accessing or using the App, you agree to be bound by these Terms. If you do not agree, you must not use the App.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">1. About the App</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Legal Advocacy Pro is a platform designed to help students practice and improve their advocacy skills by submitting responses and receiving feedback.
          </p>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <p className="text-sm font-bold text-[#1a2b56] mb-1">The App is operated by:</p>
            <address className="text-slate-600 not-italic text-sm">
              Legal Ed Tech Ltd<br />
              77 Southam Road<br />
              Birmingham, B28 0AA<br />
              United Kingdom<br />
              Email: contact@legaledtech.co.uk
            </address>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">2. Eligibility</h2>
          <p className="text-slate-600 leading-relaxed">
            You must be at least 16 years old to use the App. By using the App, you confirm that you meet this requirement.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">3. Account Registration</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            You may be required to create an account to access certain features of the App. You agree to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Keep your login details secure</li>
            <li>Notify us immediately of any unauthorised use of your account</li>
          </ul>
          <p className="text-slate-600 mt-4 font-medium">You are responsible for all activity that occurs under your account.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">4. Use of the App</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            You agree to use the App only for lawful purposes and in accordance with these Terms. You must not:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Misuse the App or attempt to disrupt its operation</li>
            <li>Upload unlawful, offensive, or misleading content</li>
            <li>Attempt to access systems or data you are not authorised to access</li>
            <li>Use the App to provide real legal advice or rely on it as such</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">5. Educational Use Only – No Legal Advice</h2>
          <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-[#e1c28c]">
            <p className="text-[#1a2b56] font-bold mb-3 uppercase tracking-tight">IMPORTANT DISCLAIMER</p>
            <p className="text-slate-700 leading-relaxed italic mb-4">
              The App is provided for educational and practice purposes only.
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-1">
              <li>Content, feedback, and outputs do not constitute legal advice</li>
              <li>The App does not replace professional legal training or supervision</li>
              <li>You should not rely on the App for real cases or legal decisions</li>
            </ul>
          </div>
          <p className="text-slate-600 mt-4">
            Legal Ed Tech Ltd accepts no liability for reliance on the App outside its intended educational purpose.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">6. User Submissions</h2>
          <p className="text-slate-600 leading-relaxed mb-4">By submitting content to the App, you:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Confirm you have the right to submit it</li>
            <li>Grant us a limited, non-exclusive licence to use it solely to operate the App and provide feedback</li>
            <li>Acknowledge that submissions are assessed against reference materials to generate feedback</li>
          </ul>
          <p className="text-slate-600 mt-4">You retain ownership of your content.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">7. Intellectual Property</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            All content in the App, including text, software, designs, branding, and reference materials, is owned by or licensed to Legal Ed Tech Ltd. You may not:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Copy, modify, or distribute App content</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Use our branding without prior written permission</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">8. Availability and Changes</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We may:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Update or modify the App at any time</li>
            <li>Suspend or discontinue features</li>
            <li>Update these Terms from time to time</li>
          </ul>
          <p className="text-slate-600 mt-4">Continued use of the App after changes are published constitutes acceptance of the updated Terms.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">9. Termination</h2>
          <p className="text-slate-600 leading-relaxed mb-4">We may suspend or terminate your access to the App if:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>You breach these Terms</li>
            <li>We are required to do so by law</li>
            <li>We discontinue the App</li>
          </ul>
          <p className="text-slate-600 mt-4">You may stop using the App at any time.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">10. Limitation of Liability</h2>
          <p className="text-slate-600 leading-relaxed mb-4">To the fullest extent permitted by law:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>The App is provided “as is”</li>
            <li>We do not guarantee uninterrupted or error-free operation</li>
            <li>Legal Ed Tech Ltd shall not be liable for indirect, incidental, or consequential losses arising from your use of the App</li>
          </ul>
          <p className="text-slate-600 mt-4">Nothing in these Terms limits liability for death or personal injury caused by negligence, or for fraud.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">11. Privacy</h2>
          <p className="text-slate-600 leading-relaxed">
            Your use of the App is also governed by our Privacy Policy, which explains how we collect and use personal data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">12. Governing Law and Jurisdiction</h2>
          <p className="text-slate-600 leading-relaxed">
            These Terms are governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction over any disputes arising from these Terms or your use of the App.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#1a2b56] mb-4">13. Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have any questions about these Terms, please contact:<br />
            <strong>Legal Ed Tech Ltd</strong><br />
            Email: <strong>contact@legaledtech.co.uk</strong>
          </p>
        </section>
      </div>
    </div>
  );
};
