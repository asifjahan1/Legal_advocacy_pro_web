
import React from 'react';

interface EulaProps {
  onBack: () => void;
}

export const Eula: React.FC<EulaProps> = ({ onBack }) => {
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
        <h1 className="text-4xl font-extrabold text-[#1a2b56] mb-4">End User Licence Agreement (Apple)</h1>
        <p className="text-slate-500 text-sm mb-12 italic">Last updated: 8 January 2026</p>

        <p className="text-slate-600 leading-relaxed mb-6">
          This End User Licence Agreement (“EULA”) is a legal agreement between you (“you” or “User”) and Legal Ed Tech Ltd (“we”, “us”, or “our”) governing your use of Legal Advocacy Pro (the “App”).
        </p>

        <p className="text-slate-600 leading-relaxed mb-10">
          This EULA is intended to comply with Apple’s App Store requirements and is entered into between you and Legal Ed Tech Ltd, not Apple Inc. By downloading or using the App, you agree to be bound by this EULA. If you do not agree, do not download or use the App.
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">1. Acknowledgement</h2>
          <p className="text-slate-600">You acknowledge that this EULA is concluded between you and Legal Ed Tech Ltd, not Apple, and that Legal Ed Tech Ltd, not Apple, is solely responsible for the App and its content.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">2. Scope of Licence</h2>
          <p className="text-slate-600">We grant you a limited, non-exclusive, non-transferable, revocable licence to download, install, and use the App on any Apple-branded device that you own or control, as permitted by Apple’s App Store Usage Rules. This licence is for personal, educational use only.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">3. Licence Restrictions</h2>
          <p className="text-slate-600 mb-2">You must not:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>Copy, modify, or create derivative works of the App</li>
            <li>Reverse engineer, decompile, or attempt to extract source code</li>
            <li>Rent, lease, sell, sublicense, or distribute the App</li>
            <li>Use the App for unlawful purposes</li>
            <li>Use the App to provide real legal advice or rely on it as such</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">4. Educational Use Only – No Legal Advice</h2>
          <p className="text-slate-600 mb-2">The App is provided for educational and practice purposes only.</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-1">
            <li>The App does not provide legal advice</li>
            <li>Any feedback or outputs are for learning purposes only</li>
            <li>The App must not be used for real legal matters</li>
          </ul>
          <p className="text-slate-600 mt-2">Legal Ed Tech Ltd accepts no liability for reliance on the App outside its intended educational purpose.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">5. User Content</h2>
          <p className="text-slate-600">You retain ownership of any content you submit through the App. By submitting content, you grant Legal Ed Tech Ltd a limited, non-exclusive licence to use that content solely to operate the App and provide feedback. You confirm you have the right to submit such content.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">6. Intellectual Property</h2>
          <p className="text-slate-600">All intellectual property rights in the App, including software, text, designs, trademarks, and reference materials, are owned by or licensed to Legal Ed Tech Ltd. No rights are granted to you except those expressly stated in this EULA.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">7. Maintenance and Support</h2>
          <p className="text-slate-600">Legal Ed Tech Ltd is solely responsible for providing maintenance and support for the App. Apple has no obligation to provide maintenance or support services.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">8. Warranty Disclaimer</h2>
          <p className="text-slate-600">To the fullest extent permitted by law, the App is provided “as is” and “as available”, without warranties of any kind. If the App fails to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price (if any). Apple has no further warranty obligation whatsoever.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">9. Product Claims</h2>
          <p className="text-slate-600">Legal Ed Tech Ltd, not Apple, is responsible for addressing any claims relating to the App, including product liability claims, failure to conform to legal requirements, or consumer protection claims.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">10. Third-Party Intellectual Property Claims</h2>
          <p className="text-slate-600">Legal Ed Tech Ltd, not Apple, will be solely responsible for investigating, defending, settling, and discharging any third-party claim that the App infringes intellectual property rights.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">11. Legal Compliance</h2>
          <p className="text-slate-600">You represent that you are not located in a country subject to a UK or US government embargo and are not listed on any prohibited or restricted party list.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">12. Termination</h2>
          <p className="text-slate-600">This EULA is effective until terminated. We may terminate this EULA immediately if you breach its terms. Upon termination, you must stop using the App and delete it from your devices.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">13. Limitation of Liability</h2>
          <p className="text-slate-600">To the fullest extent permitted by law, Legal Ed Tech Ltd shall not be liable for indirect or consequential losses. Total liability shall not exceed any fees paid by you for the App. Nothing limits liability for death or personal injury caused by negligence, fraud, or fraudulent misrepresentation.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">14. Privacy</h2>
          <p className="text-slate-600">Your use of the App is also governed by our Privacy Policy, which explains how we collect and use personal data.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">15. Governing Law and Jurisdiction</h2>
          <p className="text-slate-600">This EULA is governed by the laws of England and Wales. The courts of England and Wales shall have exclusive jurisdiction.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">16. Third-Party Beneficiary</h2>
          <p className="text-slate-600">You acknowledge that Apple Inc. and its subsidiaries are third-party beneficiaries of this EULA and may enforce it against you.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-[#1a2b56] mb-3">17. Contact Information</h2>
          <p className="text-slate-600">Legal Ed Tech Ltd, 77 Southam Road, Birmingham, B28 0AA, United Kingdom. Email: contact@legaledtech.co.uk</p>
        </section>
      </div>
    </div>
  );
};
