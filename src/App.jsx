import React from 'react';
import { Shield, AlertTriangle, Globe, Search, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <Icon className="w-10 h-10 text-brand-500 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="text-brand-500 w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">ReguGuard AI</span>
          </div>
          <div className="hidden md:flex gap-8 text-slate-600 font-medium">
            <a href="#" className="hover:text-brand-500">Monitor</a>
            <a href="#" className="hover:text-brand-500">Directory</a>
            <a href="#" className="hover:text-brand-500">Pricing</a>
          </div>
          <button className="bg-brand-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-900 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-slate-50 pt-20 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Navigate AI Compliance <span className="text-brand-500">Without the Headache.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Real-time regulatory monitoring and readiness scoring for businesses deploying AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search regulations by region or industry..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none"
              />
            </div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
              Scan My Business
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Built for the Era of AI Regulation</h2>
          <p className="text-slate-600">Comprehensive tools to keep your deployment safe and legal.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Globe} 
            title="Global Monitoring" 
            description="Real-time tracking of EU AI Act, US state laws, and international mandates." 
          />
          <FeatureCard 
            icon={CheckCircle} 
            title="Readiness Scoring" 
            description="Automated assessments to determine your current compliance posture." 
          />
          <FeatureCard 
            icon={AlertTriangle} 
            title="Instant Alerts" 
            description="Get notified immediately when new regulations impact your industry." 
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6 text-center">
        <p className="text-slate-500">© 2026 ReguGuard AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
