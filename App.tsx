import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  ArrowRight, 
  Hexagon, 
  Envelope, 
  MapPin, 
  List, 
  X, 
  CheckCircle, 
  CaretRight,
  Cpu,
  Globe,
  Car,
  House
} from 'phosphor-react';

// --- Components ---

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-lux-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Hexagon weight="fill" className="text-lux-accent w-8 h-8 transition-transform group-hover:rotate-90" />
          <span className="font-oswald font-bold text-xl tracking-wide text-white">LUX OPS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="font-oswald text-sm tracking-wide text-gray-300 hover:text-white uppercase flex items-center gap-1 transition-colors">
              Industries <CaretRight className="w-3 h-3 rotate-90" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-lux-card border border-white/10 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-left">
              <Link to="/industries/motorsports" className="block px-4 py-3 text-sm text-gray-400 hover:text-lux-accent hover:bg-white/5 uppercase font-oswald border-b border-white/5">Motorsports</Link>
              <Link to="/industries/aerial" className="block px-4 py-3 text-sm text-gray-400 hover:text-lux-accent hover:bg-white/5 uppercase font-oswald border-b border-white/5">Aerial Systems</Link>
              <Link to="/industries/fleet" className="block px-4 py-3 text-sm text-gray-400 hover:text-lux-accent hover:bg-white/5 uppercase font-oswald border-b border-white/5">Fleet Ops</Link>
              <Link to="/industries/custom" className="block px-4 py-3 text-sm text-gray-400 hover:text-lux-accent hover:bg-white/5 uppercase font-oswald">Custom</Link>
            </div>
          </div>
          <Link to="/residential" className="font-oswald text-sm tracking-wide text-gray-300 hover:text-white uppercase transition-colors">Residential</Link>
          <Link to="/pricing" className="font-oswald text-sm tracking-wide text-gray-300 hover:text-white uppercase transition-colors">Pricing</Link>
          <Link to="/blog" className="font-oswald text-sm tracking-wide text-gray-300 hover:text-white uppercase transition-colors">Blog</Link>
          <Link to="/about" className="font-oswald text-sm tracking-wide text-gray-300 hover:text-white uppercase transition-colors">About</Link>
          <Link to="/contact" className="bg-lux-accent text-black font-oswald font-bold text-sm px-5 py-2 uppercase tracking-wide hover:bg-white transition-colors">
            Schedule Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-lux-black border-b border-white/10 absolute w-full px-6 py-8 flex flex-col gap-6">
          <Link to="/industries/motorsports" className="font-oswald text-lg text-gray-300">Motorsports</Link>
          <Link to="/industries/aerial" className="font-oswald text-lg text-gray-300">Aerial Systems</Link>
          <Link to="/industries/fleet" className="font-oswald text-lg text-gray-300">Fleet Ops</Link>
          <Link to="/residential" className="font-oswald text-lg text-gray-300">Residential</Link>
          <Link to="/pricing" className="font-oswald text-lg text-gray-300">Pricing</Link>
          <Link to="/blog" className="font-oswald text-lg text-gray-300">Blog</Link>
          <Link to="/about" className="font-oswald text-lg text-gray-300">About</Link>
          <Link to="/contact" className="text-center bg-lux-accent text-black font-oswald font-bold py-3 uppercase tracking-wide">
            Schedule Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black py-16 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <div className="flex items-center gap-2 mb-6">
          <Hexagon weight="bold" className="text-gray-500 w-6 h-6" />
          <span className="font-oswald font-bold text-lg tracking-wide text-gray-400 uppercase">Lux Ops Systems // Est. 2025</span>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed">
          Real-time intelligence for mission-critical operations. London, UK.
        </p>
      </div>
      
      <div>
        <h4 className="font-oswald text-white uppercase mb-6 tracking-wide">Platform</h4>
        <ul className="space-y-3 text-sm text-gray-500">
          <li><Link to="/industries/motorsports" className="hover:text-lux-accent transition-colors">Motorsports</Link></li>
          <li><Link to="/industries/aerial" className="hover:text-lux-accent transition-colors">Aerial Systems</Link></li>
          <li><Link to="/residential" className="hover:text-lux-accent transition-colors">Residential</Link></li>
          <li><Link to="/pricing" className="hover:text-lux-accent transition-colors">Pricing</Link></li>
          <li><Link to="/blog" className="hover:text-lux-accent transition-colors">Engineering Blog</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-oswald text-white uppercase mb-6 tracking-wide">Company</h4>
        <ul className="space-y-3 text-sm text-gray-500">
          <li><Link to="/about" className="hover:text-lux-accent transition-colors">About</Link></li>
          <li><Link to="/contact" className="hover:text-lux-accent transition-colors">Contact</Link></li>
          <li><span className="cursor-not-allowed opacity-50">LinkedIn</span></li>
        </ul>
      </div>

      <div className="flex flex-col justify-end text-right md:text-right text-sm text-gray-600 font-oswald">
        © 2026 LUX OPS.
      </div>
    </div>
  </footer>
);

const EmbedFrame = ({ src, title }: { src: string; title: string }) => {
  return (
    <div className="w-full bg-lux-black pb-12 px-6">
      <div className="max-w-7xl mx-auto h-[80vh] bg-lux-card border border-white/10 relative overflow-hidden rounded-sm">
        <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur px-3 py-1 rounded border border-white/10 text-xs font-mono text-lux-accent flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-lux-accent animate-pulse"></div>
           LIVE INTERACTIVE DEMO
        </div>
        <iframe 
          src={src} 
          title={title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

const CTASection = () => (
  <section className="py-24 px-6 bg-lux-black text-center">
    <h2 className="font-oswald text-4xl md:text-6xl text-white uppercase mb-8">
      Ready To Build Yours?
    </h2>
    <Link to="/contact" className="inline-block bg-lux-accent hover:bg-white text-black font-oswald font-bold text-lg px-8 py-4 uppercase tracking-wider transition-colors">
      Start Project
    </Link>
  </section>
);

// --- Pages ---

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center px-6 text-center bg-lux-black relative overflow-hidden">
        <div className="max-w-5xl z-10">
          <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl text-white font-medium uppercase leading-none mb-8">
            Turn Complex Data Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Clear Decisions</span>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light">
            Real-time operations intelligence trusted by racing teams, fleet operators, and residential estates.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-lux-accent text-black font-oswald font-bold text-lg px-8 py-4 uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2">
              View Live Demos <ArrowRight weight="bold" />
            </Link>
          </div>
          
          <div className="mt-16 border border-lux-accent/20 bg-lux-accent/5 px-6 py-4 rounded-lg inline-flex items-center gap-4">
            <Trophy className="text-lux-accent w-8 h-8" />
            <span className="font-oswald text-lux-accent uppercase tracking-widest text-sm md:text-base">Award-Winner: Toyota GR Racing Analytics</span>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-lux-card border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Trophy className="text-lux-accent w-12 h-12 mx-auto mb-8" />
          <blockquote className="font-oswald text-2xl md:text-4xl text-white uppercase leading-tight mb-8">
            "We needed a way to make faster pit strategy decisions. Lux Ops delivered a dashboard that showed us exactly what to do, exactly when to do it."
          </blockquote>
          <cite className="font-mono text-lux-accent not-italic tracking-widest text-sm">— TOYOTA GAZOO RACING TEAM</cite>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-6 bg-lux-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-oswald text-4xl md:text-5xl text-white uppercase mb-2">Intelligence Made Visible</h2>
              <p className="font-mono text-gray-500">Select industry sector to deploy</p>
            </div>
            <Link to="/pricing" className="hidden md:flex items-center gap-2 text-lux-accent font-mono text-sm hover:text-white transition-colors uppercase">
              All Sectors <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Motorsports Card */}
            <Link to="/industries/motorsports" className="group relative h-[500px] border border-white/10 bg-lux-card overflow-hidden block">
              <div className="absolute inset-0 z-0">
                <img src="https://i.ibb.co/r20kTnvW/motorsports-lux-ops.jpg" alt="Motorsports" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <Hexagon className="text-lux-accent w-12 h-12 mb-6" />
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-oswald text-3xl text-white uppercase mb-2">Motorsports</h3>
                    <div className="border-l-2 border-lux-accent pl-4">
                      <p className="font-mono text-gray-400 text-sm">Track-side Intelligence</p>
                    </div>
                  </div>
                  <ArrowRight className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>

            {/* Aerial Card */}
            <Link to="/industries/aerial" className="group relative h-[500px] border border-white/10 bg-lux-card overflow-hidden block">
              <div className="absolute inset-0 z-0">
                <img src="https://i.ibb.co/8gk7zPbw/drones-lux-ops.jpg" alt="Drones" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <Hexagon className="text-lux-accent w-12 h-12 mb-6" />
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-oswald text-3xl text-white uppercase mb-2">Aerial Systems</h3>
                    <div className="border-l-2 border-lux-accent pl-4">
                      <p className="font-mono text-gray-400 text-sm">Drone & UAV Command</p>
                    </div>
                  </div>
                   <ArrowRight className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>

            {/* Fleet Card */}
            <Link to="/industries/fleet" className="group relative h-[500px] border border-white/10 bg-lux-card overflow-hidden block">
               <div className="absolute inset-0 z-0">
                <img src="https://i.ibb.co/7dx1fyD4/fleets-vans-lux-ops.jpg" alt="Fleets" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                <Hexagon className="text-lux-accent w-12 h-12 mb-6" />
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-oswald text-3xl text-white uppercase mb-2">Fleet Ops</h3>
                    <div className="border-l-2 border-lux-accent pl-4">
                      <p className="font-mono text-gray-400 text-sm">Global Logistics Visibility</p>
                    </div>
                  </div>
                   <ArrowRight className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
};

const IndustryPage = ({ type }: { type: 'motorsports' | 'aerial' | 'fleet' | 'custom' }) => {
  let config = {
    url: '',
    title: '',
    headline: '',
    subhead: '',
    features: [] as string[]
  };

  switch (type) {
    case 'motorsports':
      config = {
        url: 'https://gr86strategy.netlify.app/',
        title: 'Motorsports Intelligence',
        headline: 'Win On Strategy',
        subhead: 'Real-time tire degradation analysis, gap prediction, and pit window optimization.',
        features: ['Lap-by-lap analytics', 'Predictive Tire Wear AI', 'Fuel Load Strategy', 'Competitor Gap Analysis']
      };
      break;
    case 'aerial':
      config = {
        url: 'https://luxopsaerial.netlify.app/',
        title: 'Aerial Command',
        headline: 'Drone Swarm Control',
        subhead: 'Coordinate drone swarms, monitor battery levels, and execute mission plans with precision.',
        features: ['Swarm Coordination', 'Battery Management', 'Flight Path Visualization', 'Payload Monitoring']
      };
      break;
    case 'fleet':
      config = {
        url: 'https://luxopsfleet.netlify.app/',
        title: 'Fleet Operations',
        headline: 'Global Visibility',
        subhead: 'Track thousands of assets in real-time with predictive maintenance alerts.',
        features: ['Route Optimization', 'Driver Safety Score', 'Fuel Efficiency Analysis', 'Maintenance Forecasting']
      };
      break;
    case 'custom':
        // Custom is a static image case based on prompt
      config = {
        url: '', // Handled separately
        title: 'Custom Solutions',
        headline: 'Your Data, Your Rules',
        subhead: 'Bespoke dashboards for energy grids, manufacturing lines, and security ops.',
        features: ['Unlimited API Integrations', 'White-label UI', 'On-premise Deployment', 'Dedicated Support']
      };
      break;
  }

  return (
    <div className="bg-lux-black min-h-screen">
      
      {/* Header Block - Pushed down to clear nav */}
      <div className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
         <div className="flex items-center gap-2 mb-4">
            <span className="text-lux-accent font-mono text-sm uppercase"> // {config.title}</span>
         </div>
         <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase mb-6 leading-none">
            {config.headline}
         </h1>
         <p className="font-sans text-xl text-gray-400 max-w-2xl leading-relaxed">
            {config.subhead}
         </p>
      </div>

      {/* Dashboard / Visual Block */}
      {type === 'custom' ? (
         <div className="w-full bg-lux-black pb-12 px-6">
            <div className="max-w-7xl mx-auto h-[80vh] bg-lux-card border border-white/10 relative overflow-hidden flex items-center justify-center rounded-sm">
                <img src="https://i.ibb.co/HDfhZnPr/Untitled-4.jpg" alt="Custom Dashboard" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute z-10 text-center">
                    <h1 className="font-oswald text-5xl text-white uppercase mb-4">Custom Solutions</h1>
                    <p className="text-gray-300">Tailored Intelligence for Unique Operations</p>
                </div>
            </div>
         </div>
      ) : (
        <EmbedFrame src={config.url} title={config.title} />
      )}

      {/* Features Block */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {config.features.map((feature, i) => (
              <div key={i} className="bg-lux-card border border-white/10 p-6">
                <CheckCircle className="text-lux-accent w-6 h-6 mb-4" />
                <span className="font-oswald text-white text-lg uppercase">{feature}</span>
              </div>
            ))}
        </div>
        
         <div className="mt-12">
            <Link to="/contact" className="bg-white text-black font-oswald font-bold text-sm px-6 py-3 uppercase tracking-wide hover:bg-lux-accent transition-colors inline-block">
              Deploy For Your Team
            </Link>
         </div>
      </div>
      
      <CTASection />
    </div>
  );
};

const ResidentialPage = () => {
  return (
    <div className="bg-lux-black min-h-screen">
       
       {/* Header Block */}
       <div className="pt-32 pb-12 px-6 max-w-4xl mx-auto text-center">
          <span className="border border-lux-accent text-lux-accent px-3 py-1 text-xs font-mono uppercase tracking-widest mb-6 inline-block">Private Client Services</span>
          <h1 className="font-oswald text-5xl md:text-7xl text-white uppercase mb-8">Residential Estate Management</h1>
          <p className="text-xl text-gray-400 font-light">Protecting what matters most, from climate-controlled wine cellars to family security.</p>
       </div>

       {/* Dashboard Block */}
       <EmbedFrame src="https://majordomoresidential.netlify.app/" title="Residential Dashboard" />

       {/* Pricing / Configs */}
       <div className="py-24 px-6 bg-lux-card">
         <div className="max-w-7xl mx-auto">
            <h2 className="font-oswald text-3xl text-white uppercase text-center mb-16">Typical Configurations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Tier 1 */}
                <div className="bg-black border border-white/10 p-8">
                    <House className="text-lux-accent w-8 h-8 mb-6" />
                    <h3 className="font-oswald text-2xl text-white uppercase mb-4">Single Estate Monitoring</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed h-24">Real-time environmental data, security integration, staff tracking, and mobile access across your primary residence.</p>
                    <div className="border-t border-white/10 pt-6">
                        <p className="font-oswald text-white text-xl">From £35K</p>
                        <p className="font-mono text-xs text-gray-500">+ £500/month</p>
                    </div>
                </div>

                 {/* Tier 2 */}
                <div className="bg-black border border-lux-accent p-8 relative">
                    <div className="absolute top-0 right-0 bg-lux-accent text-black font-oswald text-xs uppercase px-2 py-1">Popular</div>
                    <Globe className="text-lux-accent w-8 h-8 mb-6" />
                    <h3 className="font-oswald text-2xl text-white uppercase mb-4">Multi-Property Command</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed h-24">Centralized control across your property portfolio with advanced automation, wine cellar management, and priority support.</p>
                    <div className="border-t border-white/10 pt-6">
                        <p className="font-oswald text-white text-xl">From £75K</p>
                        <p className="font-mono text-xs text-gray-500">+ £1,500/month</p>
                    </div>
                </div>

                 {/* Tier 3 */}
                <div className="bg-black border border-white/10 p-8">
                    <Trophy className="text-lux-accent w-8 h-8 mb-6" />
                    <h3 className="font-oswald text-2xl text-white uppercase mb-4">Full Concierge Estate</h3>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed h-24">Unlimited properties, predictive AI, custom RFID installations for high-value assets, dedicated account manager, and 24/7 emergency response.</p>
                    <div className="border-t border-white/10 pt-6">
                        <p className="font-oswald text-white text-xl">From £150K</p>
                        <p className="font-mono text-xs text-gray-500">+ £3,500/month</p>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <Link to="/contact" className="bg-lux-accent text-black font-oswald font-bold px-8 py-4 uppercase tracking-wider hover:bg-white transition-colors">
                    Schedule A Confidential Consultation
                </Link>
                <p className="mt-6 text-gray-600 text-xs flex items-center justify-center gap-2">
                    <MapPin /> All systems include professional installation and secure data retention.
                </p>
            </div>
         </div>
       </div>

       <CTASection />
    </div>
  );
};

const PricingPage = () => {
  return (
    <div className="pt-32 pb-24 bg-lux-black min-h-screen px-6">
      <div className="max-w-7xl mx-auto">
         <div className="text-center mb-20">
             <h1 className="font-oswald text-6xl text-white uppercase mb-4">Industry Pricing</h1>
             <p className="text-gray-400 font-sans">Standard packages for commercial operations and fleets.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
             {/* Professional */}
             <div className="border border-white/10 bg-lux-card p-10">
                 <h3 className="font-oswald text-4xl text-white uppercase mb-2">Professional</h3>
                 <div className="flex items-baseline gap-2 mb-6">
                     <span className="font-oswald text-6xl text-white font-bold">$25,000</span>
                     <span className="font-mono text-gray-500 uppercase text-xs">/ One-time build</span>
                 </div>
                 <p className="text-gray-400 mb-8 h-12">Real-time intelligence for operational teams.</p>
                 
                 <ul className="space-y-4 mb-10">
                     {['Up to 3 API sources', 'Up to 4 dashboard views', '15-20 AI rules', '10 user seats', 'Custom styling', '2-week deployment', '60 days support', 'Browser based', 'Optional Monthly Retainer'].map(i => (
                         <li key={i} className="flex items-center gap-3 text-sm text-gray-300 font-mono">
                             <CheckCircle className="text-lux-accent text-lg" weight="fill" /> {i}
                         </li>
                     ))}
                 </ul>
                 <Link to="/contact" className="block w-full bg-white text-black text-center font-oswald font-bold py-4 uppercase hover:bg-lux-accent transition-colors">
                     Book Demo
                 </Link>
             </div>

             {/* Enterprise */}
             <div className="border border-lux-accent bg-black p-10 relative">
                 <div className="absolute top-0 right-0 bg-lux-accent text-black font-oswald font-bold text-sm px-4 py-1 uppercase">Popular</div>
                 <h3 className="font-oswald text-4xl text-lux-accent uppercase mb-2">Enterprise</h3>
                 <div className="flex flex-col mb-6">
                     <span className="font-mono text-gray-500 uppercase text-xs mb-1">Starting At</span>
                     <span className="font-oswald text-6xl text-white font-bold">$60,000</span>
                 </div>
                 <p className="text-gray-400 mb-8 h-12">Mission-critical command centers.</p>
                 
                 <ul className="space-y-4 mb-10">
                     {['Unlimited APIs', 'Unlimited views', '30+ AI rules or ML', 'Unlimited users', 'Fully bespoke design', '1-2 week priority', '6 months support', 'White-label option', 'Dedicated account mgr', 'Optional Monthly Retainer'].map(i => (
                         <li key={i} className="flex items-center gap-3 text-sm text-white font-mono">
                             <CheckCircle className="text-lux-accent text-lg" weight="fill" /> {i}
                         </li>
                     ))}
                 </ul>
                 <Link to="/contact" className="block w-full bg-lux-accent text-black text-center font-oswald font-bold py-4 uppercase hover:bg-white transition-colors">
                     Book Demo
                 </Link>
             </div>
         </div>

         {/* Retainers */}
         <div className="text-center mb-12">
            <h2 className="font-oswald text-4xl text-white uppercase mb-4">Optional Monthly Retainers</h2>
            <p className="text-gray-400">Post-launch support packages to keep your operations running at peak efficiency.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <div className="bg-lux-card border border-white/10 p-8 rounded flex justify-between items-start">
                 <div>
                     <h4 className="font-oswald text-2xl text-white uppercase mb-2">Maintenance</h4>
                     <p className="text-gray-500 text-sm mb-4 max-w-xs">Ensure your command center stays operational 24/7.</p>
                     <ul className="space-y-2 text-xs text-gray-300 font-mono">
                         <li>+ Server Health Monitoring</li>
                         <li>+ Security Patches & Updates</li>
                         <li>+ 48-hour Support SLA</li>
                         <li>+ Monthly Performance Report</li>
                     </ul>
                 </div>
                 <div className="text-right">
                     <span className="block font-oswald text-2xl text-lux-accent">$2,500</span>
                     <span className="text-xs text-gray-600 uppercase">/ Month</span>
                 </div>
             </div>

             <div className="bg-lux-card border border-white/10 p-8 rounded flex justify-between items-start">
                 <div>
                     <h4 className="font-oswald text-2xl text-white uppercase mb-2">Growth</h4>
                     <p className="text-gray-500 text-sm mb-4 max-w-xs">Continuous evolution of your operational intelligence.</p>
                     <ul className="space-y-2 text-xs text-gray-300 font-mono">
                         <li>+ Everything in Maintenance</li>
                         <li>+ 10 Hours Dedicated Dev Time</li>
                         <li>+ Priority 4-hour Support SLA</li>
                         <li>+ Quarterly Strategy Review</li>
                     </ul>
                 </div>
                 <div className="text-right">
                     <span className="block font-oswald text-2xl text-lux-accent">$5,000</span>
                     <span className="text-xs text-gray-600 uppercase">/ Month</span>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="pt-32 pb-24 bg-lux-black min-h-screen">
       <div className="max-w-3xl mx-auto px-6">
           <Link to="/" className="text-gray-500 hover:text-white flex items-center gap-2 mb-8 font-mono text-sm"><ArrowRight className="rotate-180"/> Back to Logs</Link>
           
           <div className="border border-lux-accent/30 text-lux-accent inline-block px-4 py-2 font-mono text-sm mb-6 bg-lux-accent/5">
               LOG DATE: Wednesday 7th January 2025
           </div>

           <h1 className="font-oswald text-5xl md:text-6xl text-white uppercase mb-12 leading-tight">
               How I designed the Toyota GR Racing Best In Realtime Analytics Dashboard
           </h1>

           <img src="https://i.ibb.co/SD0nVCv6/blog-toyota-lux-ops.jpg" alt="Toyota Dashboard" className="w-full mb-12 border border-white/10 rounded-sm" />

           <article className="prose prose-invert prose-lg font-sans text-gray-300">
               <h3 className="font-oswald text-lux-accent uppercase text-2xl mb-4">Inspiration</h3>
               <p className="mb-8">
                   The project was primarily inspired by the critical need for race engineers to make instant, data-driven decisions in the high-pressure environment of a live race. I recognised that winning often depends on the speed and accuracy of strategic calls. My goal was to create a tool that transforms massive amounts of raw telemetry data into actionable intelligence, directly enhancing driver insights and team performance during race-day decision-making for the GR Cup Series.
               </p>

               <h3 className="font-oswald text-lux-accent uppercase text-2xl mb-4">What it does</h3>
               <p className="mb-8">
                   The GR Cup Real-Time Dashboard Simulator is a browser-based analytics and strategy tool designed for use by a race engineer on a tablet. It provides a real-time, visual experience of the race. It shows live standings and telemetry, while dynamically tracking all cars on the Barber Motorsports Park circuit, highlighting the selected car in red. The tool features a Strategy Impact panel displaying critical metrics like Tire Status and degradation, and competitor Gap Ahead/Behind. Most importantly, it uses AI to provide an immediate, data-driven recommendation (e.g., PUSH) and calculates the optimal Pit Stop window.
               </p>

               <h3 className="font-oswald text-lux-accent uppercase text-2xl mb-4">How I built it</h3>
               <p className="mb-8">
                   The dashboard was built using JavaScript and the three.js library for the visualisation and car movement. For data, I used the anonymised CSV files provided for the competition, including the Analysis Endurance and Weather data for Race 1, to simulate a live data feed. Creating the track layout involved tracing the Barber circuit on Google Maps, converting the file from KML to TXT, and then rendering it as an SVG to plot the animated car positions.
               </p>

               <h3 className="font-oswald text-lux-accent uppercase text-2xl mb-4">What we can do for you</h3>
               <p className="mb-8">
                   While this project was built for racing, our underlying decision engine works for any industry. We build custom, high-performance dashboards that integrate with your existing APIs—whether you're tracking logistics fleets, monitoring drone swarms, or managing energy grids. We specialize in taking complex data streams and turning them into simple, clear instructions for your team. No bloat, no confusion, just the intelligence you need, displayed exactly when you need it. From small teams to enterprise operations, we can deploy a custom solution in as little as two weeks.
               </p>
           </article>

           <div className="mt-16 pt-8 border-t border-white/10">
               <Link to="/contact" className="font-oswald text-3xl text-white hover:text-lux-accent transition-colors uppercase">
                   Ready To Build Yours? →
               </Link>
           </div>
       </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-32 pb-24 bg-lux-black min-h-screen">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="font-oswald text-6xl text-white uppercase mb-12">About Lux Ops</h1>
      
      <p className="text-lux-accent text-2xl font-light mb-12 leading-relaxed">
        Founded in 2025, Lux Ops was born from a simple observation: decision-makers are drowning in data but starving for clarity.
      </p>
      
      <p className="text-gray-400 text-lg mb-16 leading-relaxed">
        Traditional dashboards like Grafana and Tableau show you the data. But they don't tell you what to do with it. We built Lux Ops to bridge that gap combining beautiful, movie-grade UI design with intelligent decision engines.
      </p>
      
      <h3 className="font-oswald text-white uppercase text-2xl mb-6">Our Mission</h3>
      <div className="bg-lux-card border-l-4 border-lux-accent p-8 mb-16">
        <p className="text-white italic text-xl">"Build dashboards that don't just show data they show decisions."</p>
      </div>
      
      <h3 className="font-oswald text-white uppercase text-2xl mb-6">We Believe</h3>
      <ul className="space-y-6">
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-lux-accent mt-2"></div>
          <span className="text-gray-300 text-lg">Beautiful design isn't optional it's essential for fast decision-making.</span>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-lux-accent mt-2"></div>
          <span className="text-gray-300 text-lg">AI should recommend actions, not just analyze past data.</span>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 rounded-full bg-lux-accent mt-2"></div>
          <span className="text-gray-300 text-lg">Two weeks is enough time to transform operations.</span>
        </li>
      </ul>
      
      <div className="mt-20 text-center">
         <h2 className="font-oswald text-4xl text-white uppercase mb-8">Ready To Build Yours?</h2>
         <Link to="/contact" className="inline-block bg-lux-accent hover:bg-white text-black font-oswald font-bold text-lg px-8 py-4 uppercase tracking-wider transition-colors">
            Start Project
         </Link>
      </div>
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <div className="pt-32 pb-24 bg-lux-black min-h-screen px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="font-oswald text-6xl md:text-7xl text-white uppercase mb-8 leading-none">
            Initiate <br/> Contact
          </h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-md">
            Ready to transform your operations data into a competitive advantage? Our engineering team reviews all inquiries to ensure we are the right fit for your mission-critical objectives.
          </p>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-lux-accent/30 bg-lux-accent/5 flex items-center justify-center text-lux-accent">
                <Envelope size={24} />
              </div>
              <div>
                <h4 className="font-oswald text-white uppercase text-lg mb-1">Email</h4>
                <p className="font-mono text-gray-400 text-sm">hello@lux-ops.com</p>
                <p className="text-gray-500 text-xs mt-1">Response time: ~4 hours (Enterprise)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 border border-lux-accent/30 bg-lux-accent/5 flex items-center justify-center text-lux-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-oswald text-white uppercase text-lg mb-1">HQ</h4>
                <p className="font-mono text-gray-400 text-sm">London, United Kingdom</p>
                <p className="text-gray-500 text-xs mt-1">Global Remote Operations</p>
              </div>
            </div>
          </div>

          <div className="bg-lux-card border border-white/10 p-6 rounded-sm">
            <h4 className="font-oswald text-lux-accent uppercase text-sm mb-4">Before You Request:</h4>
            <ul className="space-y-2 text-sm font-mono text-gray-400">
              <li>• We do not offer free trials for custom builds.</li>
              <li>• Minimum engagement starts at $25,000.</li>
              <li>• Please have your data sources identified (API, CSV, SQL).</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-lux-card border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs uppercase text-gray-500 mb-2">First Name *</label>
                <input required type="text" name="firstName" placeholder="Jane" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Last Name *</label>
                <input required type="text" name="lastName" placeholder="Doe" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Work Email *</label>
                <input required type="email" name="email" placeholder="jane@company.com" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Phone Number</label>
                <input type="text" name="phone" placeholder="+1 (555) 000-0000" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Company Name *</label>
                <input required type="text" name="company" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Job Title</label>
                <input type="text" name="jobTitle" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                  <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Industry Sector *</label>
                  <select name="industry" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors appearance-none">
                    <option>Motorsports</option>
                    <option>Aerial Systems</option>
                    <option>Fleet Operations</option>
                    <option>Residential</option>
                    <option>Other</option>
                  </select>
               </div>
               <div>
                  <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Estimated Budget *</label>
                  <select name="budget" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors appearance-none">
                    <option>Select Range...</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
               </div>
            </div>
            
            <div>
               <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Target Timeline</label>
               <input type="text" name="timeline" placeholder="ASAP (Rush)" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors" />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase text-gray-500 mb-2">Project Requirements & Data Sources *</label>
              <textarea required name="message" rows={4} placeholder="Describe your operational challenge. What data do you have available?" className="w-full bg-black border border-white/10 text-white p-3 focus:border-lux-accent focus:outline-none transition-colors"></textarea>
            </div>

            <button type="submit" className="w-full bg-lux-accent hover:bg-white text-black font-oswald font-bold text-lg py-4 uppercase tracking-wider transition-colors mt-4">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-lux-black text-white selection:bg-lux-accent selection:text-black font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industries/motorsports" element={<IndustryPage type="motorsports" />} />
            <Route path="/industries/aerial" element={<IndustryPage type="aerial" />} />
            <Route path="/industries/fleet" element={<IndustryPage type="fleet" />} />
            <Route path="/industries/custom" element={<IndustryPage type="custom" />} />
            <Route path="/residential" element={<ResidentialPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;