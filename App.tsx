
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { FAQItem } from './components/FAQItem';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfUse } from './components/TermsOfUse';
import { Eula } from './components/Eula';

type View = 'support' | 'privacy' | 'terms' | 'eula';

const App: React.FC = () => {
  const [view, setView] = useState<View>('support');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    if (view === 'privacy') {
      return <PrivacyPolicy onBack={() => setView('support')} />;
    }
    if (view === 'terms') {
      return <TermsOfUse onBack={() => setView('support')} />;
    }
    if (view === 'eula') {
      return <Eula onBack={() => setView('support')} />;
    }

    return (
      <>
        {/* Hero Section */}
        <div className="bg-white border-b border-slate-100 py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-10 flex justify-center">
              <Logo className="h-40 md:h-56" />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1a2b56] mb-6">
              LEGAL ADVOCACY <span className="text-[#e1c28c]">PRO</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
              The premier AI-powered educational platform for mastering the art of advocacy.
            </p>
            <div className="bg-amber-50 border-l-4 border-[#e1c28c] p-5 rounded-r-lg text-left max-w-3xl mx-auto shadow-sm">
              <p className="text-sm text-amber-900 font-semibold mb-1">
                EDUCATIONAL USE ONLY
              </p>
              <p className="text-sm text-amber-800 leading-snug">
                Legal Advocacy Pro is a simulated training environment. It does not provide professional legal advice, nor does it create a solicitor-client or barrister-client relationship. All scenarios and feedback are generated for pedagogical purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Core Content */}
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
          
          <Section title="What Legal Advocacy Pro Does">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-[#1a2b56] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2b56] mb-3">Simulated Assignments</h3>
                <p className="text-slate-600 leading-relaxed">
                  Engage with AI-generated legal scenarios designed to challenge your reasoning. Formulate arguments, cite simulated precedents, and structure professional submissions in a safe, controlled environment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-[#e1c28c] rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#1a2b56]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a2b56] mb-3">AI Scoring & Analytics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every submission is analysed by our proprietary AI engine. Receive instant scoring across key advocacy competencies, identifying your strengths and clear paths for improvement.
                </p>
              </div>
            </div>
          </Section>

          <Section title="AI Transparency Notice">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <p className="text-slate-700 font-medium mb-4">
                Legal Advocacy Pro leverages Large Language Model (LLM) technology to facilitate a modern learning experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e1c28c] shrink-0" />
                  <p className="text-slate-600"><span className="font-bold text-[#1a2b56]">Educational Accuracy:</span> AI outputs are optimized for learning flow and may occasionally simplify complex legal doctrines for clarity.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e1c28c] shrink-0" />
                  <p className="text-slate-600"><span className="font-bold text-[#1a2b56]">Non-Professional:</span> Our AI does not possess a law license and its feedback should never be used as a basis for real-world legal strategy.</p>
                </li>
              </ul>
            </div>
          </Section>

          <Section title="Frequently Asked Questions">
            <div className="divide-y divide-slate-100">
              <FAQItem 
                question="What is Legal Advocacy Pro?" 
                answer="Legal Advocacy Pro is an iOS application developed by Legal Ed Tech Ltd. It serves as a specialized training environment for students to practice oral and written advocacy skills using advanced AI feedback loops."
              />
              <FAQItem 
                question="Is this app giving legal advice?" 
                answer="No. The application is strictly for educational simulation. It generates hypothetical scenarios for student practice. Users must not rely on app outputs for actual legal proceedings."
              />
              <FAQItem 
                question="Who is the target audience?" 
                answer="The app is designed for students aged 16 and above who are interested in law, debating, or public speaking. Users must be at least 16 to create an account."
              />
              <FAQItem 
                question="How does AI scoring work?" 
                answer="The AI evaluates responses based on structure, tone, relevance, and clarity. It provides a numerical baseline and qualitative feedback to guide the student's learning journey."
              />
              <FAQItem 
                question="Is my data private?" 
                answer="Yes. We comply with UK GDPR. Your practice data is used to provide you with feedback and improve the educational model, but is never sold to third parties."
              />
              <FAQItem 
                question="Can I delete my account?" 
                answer="Yes. We offer a simple, transparent process for full account and data deletion as detailed in the 'Account & Data Deletion' section below."
              />
            </div>
          </Section>

          <Section title="Data Protection & Privacy">
            <div className="bg-[#1a2b56] text-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#e1c28c]">Privacy Commitment</h3>
              <p className="mb-6 opacity-90 leading-relaxed">
                In compliance with <strong>UK GDPR</strong>, Legal Ed Tech Ltd ensures your data remains under your control. We implement industry-standard encryption and strict access controls.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button 
                  onClick={() => setView('privacy')}
                  className="flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors border border-white/10 font-medium"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setView('terms')}
                  className="flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors border border-white/10 font-medium"
                >
                  Terms of Use
                </button>
                <button 
                  onClick={() => setView('eula')}
                  className="flex items-center justify-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors border border-white/10 font-medium text-center"
                >
                  Apple Standard EULA
                </button>
              </div>
            </div>
          </Section>

          <Section title="Account & Data Deletion">
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 mb-6">
                Users may exercise their "Right to Erasure" at any time. To request a permanent deletion of your account and all associated data:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-center p-4 bg-white border border-slate-200 rounded-xl">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 font-bold text-[#1a2b56]">1</div>
                  <p className="text-slate-700 italic">Email <span className="font-bold text-[#1a2b56]">contact@legaledtech.co.uk</span> from your registered email address.</p>
                </div>
                <div className="flex gap-4 items-center p-4 bg-white border border-slate-200 rounded-xl">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center shrink-0 font-bold text-[#1a2b56]">2</div>
                  <p className="text-slate-700 italic">Include "Account Deletion Request" in the subject line.</p>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-6 bg-slate-50 p-4 rounded-lg border border-slate-100">
                Requests are processed within 30 days. You will receive a final confirmation email once all data has been purged from our production servers and backups.
              </p>
            </div>
          </Section>

          <Section title="Contact & Support">
            <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-2xl border border-slate-100 shadow-sm">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Direct Support</h3>
                <a href="mailto:contact@legaledtech.co.uk" className="text-2xl font-bold text-[#1a2b56] hover:text-[#e1c28c] transition-colors">
                  contact@legaledtech.co.uk
                </a>
                <p className="text-slate-500 mt-4 leading-relaxed">
                  Our UK-based support team is available Monday through Friday for technical help, billing inquiries, or privacy requests.
                </p>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Headquarters</h3>
                <address className="text-slate-700 not-italic text-lg leading-relaxed font-medium">
                  Legal Ed Tech Ltd<br />
                  77 Southam Road<br />
                  Birmingham, B28 0AA<br />
                  United Kingdom
                </address>
              </div>
            </div>
          </Section>

          <div className="pt-12 border-t border-slate-100">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">Legal Disclaimers</h2>
            <div className="text-xs text-slate-400 leading-relaxed space-y-4">
              <p>
                Legal Advocacy Pro is provided by Legal Ed Tech Ltd on an "as is" and "as available" basis. While we strive for educational excellence, we make no representations or warranties of any kind, express or implied, as to the completeness, accuracy, reliability, suitability or availability with respect to the app or the information, products, services, or related graphics contained within.
              </p>
              <p>
                Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this app.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfd]">
      <Header onHome={() => setView('support')} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer onShowPrivacy={() => setView('privacy')} onShowTerms={() => setView('terms')} onShowEula={() => setView('eula')} />
    </div>
  );
};

export default App;
