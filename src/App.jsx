import React, { useState } from 'react';
import { Shield, AlertTriangle, Globe, Search, CheckCircle, ArrowRight, Zap, Lock, BarChart3 } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <Icon className="w-10 h-10 text-brand-500 mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const PricingCard = ({ tier, price, features, recommended, onSelect }) => (
  <div className={`p-8 rounded-2xl border ${recommended ? 'border-brand-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} bg-white flex flex-col`}>
    {recommended && (
      <span className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">MOST POPULAR</span>
    )}
    <h3 className="text-2xl font-bold mb-2">{tier}</h3>
    <div className="flex items-baseline gap-1 mb-6">
      <span className="text-4xl font-extrabold">${price}</span>
      <span className="text-slate-500">/mo</span>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-slate-600">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={onSelect}
      className={`w-full py-3 rounded-lg font-bold transition-all ${recommended ? 'bg-brand-500 text-white hover:bg-brand-900' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
    >
      Get Started
    </button>
  </div>
);

function App() {
  const [view, setView] = useState('landing'); // 'landing' | 'pricing' | 'checkout'

  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = (tier) => {
    console.log(`Redirecting to checkout for: ${tier}`);
    setView('checkout');
  };

  if (view === 'checkout') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center">
          <Shield className="w-16 h-16 text-brand-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Complete Your Subscription</h2>
          <p className="text-slate-600 mb-8">Secure payment gateway initialization...</p>
          <div className="animate-pulse bg-slate-100 h-12 w-full rounded-lg mb-4"></div>
          <button 
            onClick={() => setView('landing')}
            className="text-slate-500 text-sm hover:underline"
          >
            Cancel and return
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
            <Shield className="text-brand-500 w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight">ReguGuard AI</span>
          </div>
          <div className="hidden md:flex gap-8 text-slate-600 font-medium">
            <a href="#features" className="hover:text-brand-500 transition-colors">Features</a>
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-brand-500 transition-colors">Pricing</a>
            <a href="#" className="hover:text-brand-500 transition-colors">Docs</a>
          </div>
          <button 
            onClick={scrollToPricing}
            className="bg-brand-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-900 transition-colors shadow-lg shadow-brand-500/20"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-500 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-slate-900 blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-brand-100">
            <Zap className="w-4 h-4" />
            <span>Now supporting EU AI Act compliance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Navigate AI Compliance <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-600">
              Without the Headache.
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Real-time regulatory monitoring and readiness scoring for businesses deploying high-stakes AI technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToPricing}
              className="w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              View Demo
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Built for the Era of AI Regulation</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">Comprehensive tools to keep your deployment safe, compliant, and scalable.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Globe} 
            title="Global Monitoring" 
            description="Real-time tracking of EU AI Act, US state laws, and international mandates across 40+ jurisdictions." 
          />
          <FeatureCard 
            icon={BarChart3} 
            title="Readiness Scoring" 
            description="Automated risk assessments to determine your current compliance posture and identify gaps." 
          />
          <FeatureCard 
            icon={AlertTriangle} 
            title="Instant Alerts" 
            description="Get notified immediately when new regulations or legal precedents impact your specific industry." 
          />
        </div>
      </section>

      {/* Pricing Section (THE MONEY MAKER) */}
      <section id="pricing" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Scalable Pricing for AI Teams</h2>
            <p className="text-slate-600 text-lg">Choose the plan that matches your deployment scale.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <PricingCard 
              tier="Starter"
              price="0"
              features={["Up to 2 AI Models", "Basic Regulatory Alerts", "Monthly Risk Report", "Community Support"]}
              onSelect={() => handleCheckout('Starter')}
            />
            <PricingCard 
              tier="Professional"
              price="149"
              recommended={true}
              features={["Unlimited AI Models", "Real-time Monitoring", "Weekly Compliance Audit", "Priority Support", "API Access"]}
              onSelect={() => handleCheckout('Professional')}
            />
            <PricingCard 
              tier="Enterprise"
              price="499"
              features={["Custom Jurisdictions", "Dedicated Compliance Officer", "SLA Guarantee", "On-premise Integration", "24/7 Phone Support"]}
              onSelect={() => handleCheckout('Enterprise')}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="text-brand-500 w-6 h-6" />
          <span className="text-xl font-bold tracking-tight">ReguGuard AI</span>
        </div>
        <p className="text-slate-500 text-sm">© 2026 ReguGuard AI. Designed for Compliance-First Innovation.</p>
      </footer>
    </div>
  );
}

export default App;
