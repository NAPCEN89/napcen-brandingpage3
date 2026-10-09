"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Droplet, Wind, Grip, Fan, Table, Beaker, RefreshCcw, Share2, Leaf, Shield, Settings, BarChart3, Phone, Mail, MapPin, ChevronRight, Target, Sliders, Layers, Briefcase, Factory, LifeBuoy, Globe, Users, FileText, Send, Cloud, FlaskConical, Pill, Car, PaintRoller, Utensils, Cpu, Scissors, Gem, FileSearch, MonitorCog, Wrench, Headset, Building2, Anchor, FileBadge, ArrowUpRight, Plane, Check, Truck, Settings2, Plus, Play, MessageCircle, ShieldCheck, HardHat, CloudRain, CheckCircle2, Coins, Globe2, Database } from "lucide-react";
import { Footer } from "@/components/ui/modem-animated-footer";
import ThreeBackground from "@/components/napcen-landing/ThreeBackground";
import LogoTicker from "@/components/napcen-landing/LogoTicker";
import WorkflowSection from "@/components/napcen-landing/WorkflowSection";
import WorkingPrincipleDark from "@/components/napcen-landing/WorkingPrincipleDark";

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};
const applicationsData = [
  {
    id: "grinding",
    title: "Grinding & deburring",
    icon: Settings,
    subHeader: "METALWORKING / SURFACE PREPARATION",
    mainHeader: "Grinding downdraft tables",
    description: "Grinding and deburring produce a mix of fine airborne dust, heavier particles and, for some materials, sparks. A suitable extraction bench combines effective capture coverage with collection technology matched to the material.",
    challenge: "Particle momentum can carry dust beyond the table. Rear extraction and side panels may help contain the work zone.",
    inputs: "Base metal, abrasive, workpiece dimensions, dust loading, spark generation and daily operating hours.",
  },
  {
    id: "welding",
    title: "Welding & fabrication",
    icon: Grip,
    subHeader: "FABRICATION / FUME EXTRACTION",
    mainHeader: "Welding downdraft tables",
    description: "Welding produces fine fume that can rise with the thermal plume. A ventilated bench works best when the weld is within its effective capture zone and the extraction arrangement suits the component geometry.",
    challenge: "Review weld height, plume direction and operator position. Larger structures may require another capture method.",
    inputs: "Welding process, base metal, filler, coatings, part size, welding position and discharge requirements.",
  },
  {
    id: "polishing",
    title: "Polishing & finishing",
    icon: Gem,
    subHeader: "FINISHING / PARTICULATE COLLECTION",
    mainHeader: "Polishing downdraft tables",
    description: "Polishing and buffing can release fine material, abrasive residues and fibres from the finishing media. Review the full dust mixture when choosing filtration and the cleaning arrangement.",
    challenge: "Consider the direction of the polishing wheel and whether containment panels interfere with component access.",
    inputs: "Part material, polishing compound, wheel or abrasive type, projected dust direction and cleaning frequency.",
  },
  {
    id: "woodworking",
    title: "Woodworking & sanding",
    icon: Wrench,
    subHeader: "WOODWORKING / DUST EXTRACTION",
    mainHeader: "Sanding and woodworking tables",
    description: "An extraction workbench can capture dust from manual sanding and compatible finishing tasks. Wood dust loading, fine particles and combustible-dust risks must be considered in the overall collection design.",
    challenge: "Keep sanding close to the active surface. Large boards can obstruct extraction openings and change capture coverage.",
    inputs: "Wood or composite type, coatings, sanding tools, board dimensions, process duty and dust handling arrangements.",
  }
];

export default function NapcenLandingPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", countryCity: "", application: "", preferredTable: "", requirements: "", equipment: ""
  });
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [productFilter, setProductFilter] = useState("All equipment");
  const [activeAppTab, setActiveAppTab] = useState(0);
  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Thank you! Your inquiry has been successfully submitted.");
        setFormData({
          name: "", company: "", email: "", phone: "", countryCity: "", application: "", preferredTable: "", requirements: "", equipment: ""
        });
      } else {
        alert("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Sorry, something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-napcean-blue selection:text-white">
      {/* TOPBAR */}
      <div className="hidden lg:block bg-[#051124] text-slate-300 text-[11.5px] py-2 border-b border-white/5">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">

          <div className="flex items-center gap-4 divide-x divide-white/10">
            <div className="flex items-center gap-1.5 text-emerald-500 font-bold tracking-wide">
              <Globe size={13} /> Global Engineering & Export Hub
            </div>

            <div className="flex items-center gap-1.5 pl-4 font-medium text-slate-300 tracking-wide">
              <Plane size={13} className="text-slate-400" /> Exporting to 30+ Countries
            </div>

            <div className="flex items-center gap-2 pl-4">
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">ISO 9001:2015</span>
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">CE MARKED</span>
              <span className="bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold px-2 py-0.5 rounded text-[9px] tracking-widest uppercase">ATEX / ASME</span>
            </div>
          </div>

          <div className="flex items-center gap-4 divide-x divide-white/10">
            <a href="mailto:info@napcen.com" className="flex items-center gap-1.5 font-medium hover:text-white transition-colors tracking-wide">
              <Mail size={13} className="text-blue-500" />
              info@napcen.com
            </a>

            <a href="tel:+917904469219" className="flex items-center gap-1.5 pl-4 text-white font-bold hover:text-emerald-400 transition-colors tracking-wide">
              <Phone size={13} className="text-emerald-500" /> +91 79044 69219
            </a>
          </div>

        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <a href="#" className="flex items-center gap-3">
            <Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={140} height={50} className="object-contain" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold text-[#0f1b3a]">
            <a href="#products" className="hover:text-primary-blue transition-colors">Systems</a>
            <a href="#applications" className="hover:text-primary-blue transition-colors">Applications</a>
            <a href="#engineering" className="hover:text-primary-blue transition-colors">Engineering</a>
            <a href="#faq" className="hover:text-primary-blue transition-colors">FAQs</a>
            <a href="#contact" className="bg-[#154db0] hover:bg-[#103a87] text-white px-6 py-2.5 rounded shadow-sm transition-colors">Request a quote</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative bg-white overflow-hidden pt-16 pb-12">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
            <div className="absolute top-20 right-40 w-64 h-64 border border-blue-100 rounded-full opacity-50" />
            <div className="absolute top-40 right-20 w-[500px] h-[500px] border border-blue-50 rounded-full opacity-50" />
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-8 xl:px-12 2xl:px-16 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 xl:gap-12 items-center md:items-stretch min-h-[480px]">

              {/* LEFT: TEXT & STATS */}
              <div className="w-full md:w-[45%] xl:w-[43%] flex flex-col justify-start pt-5 sm:pt-6 lg:pt-8">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    Downdraft dust & fume extraction
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-black text-[#0f1b3a] leading-[1.1] tracking-tight mb-6">
                  Industrial downdraft <br />
                  tables. <br />
                  <span className="text-primary-blue">Cleaner air starts at <br /> the workbench.</span>
                </h1>

                <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  Capture grinding dust, sanding particles and welding fumes close to the source. NAPCEN downdraft extraction benches bring the work surface and air collection system together for demanding manufacturing processes.
                </p>

                <div className="flex flex-wrap items-center gap-4 pb-8 mb-8 border-b border-slate-200 w-fit">
                  <a href="#contact" className="bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold py-4 px-8 rounded-full transition-all shadow-sm text-sm flex items-center gap-2 group">
                    Discuss your application <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a href="#configurations" className="bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold py-4 px-8 rounded-full transition-all shadow-sm text-sm flex items-center gap-2">
                    Explore the systems
                  </a>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold">Application-led selection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold">Dry & wet collection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-primary-blue flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-slate-700 font-bold">Custom work surfaces</span>
                  </div>
                </div>
              </div>



              {/* RIGHT: FORM */}
              <div className="w-full md:w-[52%] xl:w-[54%] relative z-20 flex flex-col justify-start mt-12 md:mt-0 md:-ml-4 lg:-ml-8 xl:-ml-12" id="contact">
                <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-slate-100">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-slate-500 font-bold text-xs tracking-[0.2em] uppercase">
                      CONTACT DETAILS
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-black text-[#0f1b3a] mb-3">Request an engineered quotation</h3>
                  <p className="text-[14px] text-slate-500 mb-6 font-medium leading-relaxed">Tell us what your process generates. Approximate values are welcome.</p>

                  <form onSubmit={handleDemoSubmit} className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 xl:gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Your name *</label>
                        <input required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Company *</label>
                        <input required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 xl:gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Work email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Phone / WhatsApp *</label>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 xl:gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">Country / city *</label>
                        <input required value={formData.countryCity} onChange={(e) => setFormData({ ...formData, countryCity: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[13px] font-bold text-[#0f1b3a]">What will you use the table for ? *</label>
                        <select required value={formData.application} onChange={(e) => setFormData({ ...formData, application: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                          <option value="" disabled hidden>Select application</option>
                          <option>Grinding & deburring</option>
                          <option>Welding & fabrication</option>
                          <option>Polishing & finishing</option>
                          <option>Woodworking & sanding</option>
                          <option>Other / multiple processes</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f1b3a]">Preferred downdraft table <span className="text-slate-400 font-normal">(optional)</span></label>
                      <select value={formData.preferredTable} onChange={(e) => setFormData({ ...formData, preferredTable: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-slate-700 transition-all font-medium shadow-sm">
                        <option value="" disabled hidden>Select preferred downdraft table</option>
                        <option value="Grinding Downdraft Table">Grinding Downdraft Table</option>
                        <option value="Polishing Downdraft Table">Polishing Downdraft Table</option>
                        <option value="Welding Downdraft Table">Welding Downdraft Table</option>
                        <option value="Downdraft Dust Collector Table">Downdraft Dust Collector Table</option>
                        <option value="Portable Downdraft Table">Portable Downdraft Table</option>
                        <option value="Woodworking Downdraft Table">Woodworking Downdraft Table</option>
                        <option value="Wet Downdraft Table">Wet Downdraft Table</option>
                        <option value="centralized downdraft table">Centralized Downdraft Table</option>
                        <option value="Custom Downdraft Table">Custom Downdraft Table</option>
                        <option value="Not sure — help me choose">Not sure — help me choose</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] font-bold text-[#0f1b3a]">Process and equipment requirements</label>
                      <textarea placeholder="Material, workpiece dimensions, working load, operating hours, process constraints, or site constraints" value={formData.requirements} onChange={(e) => setFormData({ ...formData, requirements: e.target.value })} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue transition-all min-h-[80px] resize-y font-medium text-slate-700 shadow-sm" />
                    </div>

                    <div className="flex justify-start pt-4">
                      <button type="submit" className="w-full sm:w-auto px-8 sm:px-12 bg-[#0a5cbb] text-white font-black py-4 rounded-xl transition-all shadow-md text-sm lg:text-[15px] flex items-center justify-center gap-2 tracking-wide shrink-0">
                        Prepare email enquiry
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 mt-2 font-medium leading-relaxed">
                      Required fields are marked *.
                    </p>
                  </form>

                  <div className="flex justify-center items-center gap-2 sm:gap-6 md:gap-10 mt-6 pt-4 border-t border-slate-100 text-[9px] sm:text-[10px] text-slate-500 font-medium whitespace-nowrap">
                    <div className="flex items-center gap-1.5"><Shield size={12} className="text-[#0f1b3a] shrink-0" /> Quick Response</div>
                    <div className="flex items-center gap-1.5"><Users size={12} className="text-[#0f1b3a] shrink-0" /> Expert Support</div>
                    <div className="flex items-center gap-1.5"><Settings size={12} className="text-[#0f1b3a] shrink-0" /> Custom Solutions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURES BAR */}
            <div className="mt-20 border-t border-b border-slate-200 py-8 hidden md:block">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { title: "GRINDING", sub: "Dust Extraction", icon: <Settings size={24} className="text-primary-blue" /> },
                  { title: "DEBURRING", sub: "Particulate Control", icon: <Wrench size={24} className="text-primary-blue" /> },
                  { title: "POLISHING", sub: "Fine Dust Collection", icon: <Gem size={24} className="text-primary-blue" /> },
                  { title: "WELDING", sub: "Fume Extraction", icon: <Factory size={24} className="text-primary-blue" /> },
                  { title: "SANDING", sub: "Particle Capture", icon: <Layers size={24} className="text-primary-blue" /> }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1">{feature.icon}</div>
                    <div>
                      <div className="text-xs font-black text-[#0f1b3a]">{feature.title}</div>
                      <div className="text-[10px] text-slate-500 font-medium">{feature.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </section>

        <LogoTicker />

        <section id="products" className="py-10 md:py-24 bg-white relative overflow-hidden">
          <div className="w-full px-4 md:px-8 xl:px-12 2xl:px-16">
            {/* Header Area */}
            {/* Header Area */}
            <div className="relative min-h-[380px] lg:min-h-[400px] mb-8 lg:mb-1 flex items-center">

              {/* Background Image Container */}
              <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] z-0 pointer-events-none">
                <Image
                  src="/Stainless Downdraft Bench with Airflow Visualization.png"
                  alt="Industrial Scrubber Tower Blueprint"
                  fill
                  className="object-contain object-right -translate-y-16 md:translate-y-0 transition-transform"
                  priority
                />
                {/* Gradient masks to blend the image perfectly into the white background */}
                <div className="absolute inset-y-0 left-0 w-1/2 lg:w-[40%] bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>

              {/* Foreground Content */}
              <div className="relative z-10 w-full py-4 lg:py-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full max-w-full lg:max-w-5xl">
                  {/* Title block */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#0f1b3a] font-bold text-[11px] tracking-[0.2em] uppercase"> THE WORKBENCH, RECONSIDERED</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-[72px] font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-8">
                    Control airborne particles<br />
                    <span className="text-primary-blue">emission challenges</span>
                  </h2>

                  {/* Paragraph block */}
                  <div className="max-w-md bg-white/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none p-4 lg:p-0 rounded-2xl shadow-sm lg:shadow-none border border-white/50 lg:border-none">
                    <p className="text-slate-600 text-[15px] leading-relaxed font-medium">
                      A downdraft table is a ventilated industrial workbench that draws air through an open or perforated surface. The airflow carries compatible dust or fume toward a collection system before it disperses through the workshop.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 relative z-20">

              {/* Card 1 */}
              <div className="bg-white rounded-3xl p-6 lg:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-shadow border border-slate-100 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch gap-6 sm:gap-2 lg:gap-6 xl:gap-2 group">
                <div className="w-full sm:w-[55%] lg:w-full xl:w-[55%] flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-4xl font-black text-primary-blue leading-none">01</span>
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase text-[#0f1b3a] mt-1">/ CAPTURE</span>
                    </div>
                    <h3 className="text-[19px] font-black text-[#0f1b3a] mb-3 leading-tight group-hover:text-primary-blue transition-colors">Bring extraction <br className="hidden xl:block" />closer</h3>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                    Position the emission source over the active extraction area. Rear and side extraction panels can help contain particles generated above the tabletop.
                  </p>
                </div>
                <div className="w-full sm:w-[45%] lg:w-full xl:w-[45%] relative flex items-center justify-center sm:justify-start lg:justify-center xl:justify-start min-h-[120px] z-0">
                  <div className="relative w-full h-full min-h-[160px] lg:min-h-[200px] sm:-ml-4 xl:-ml-6">
                    <Image src="/Industrial Downdraft Extraction Bench.png" alt="Capture" fill className="object-contain object-center sm:object-left lg:object-center xl:object-left rounded-xl scale-[1.25] sm:scale-[1.4] lg:scale-[1.3] origin-center sm:origin-left lg:origin-center xl:origin-left transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl p-6 lg:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-shadow border border-slate-100 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch gap-6 sm:gap-2 lg:gap-6 xl:gap-2 relative group">
                {/* Connector Arrow (Desktop) */}
                <div className="hidden lg:flex absolute -left-[24px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-blue-100 items-center justify-center z-10 shadow-sm text-primary-blue">
                  <ArrowUpRight size={14} strokeWidth={3} />
                </div>

                <div className="w-full sm:w-[55%] lg:w-full xl:w-[55%] flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-4xl font-black text-primary-blue leading-none">02</span>
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase text-[#0f1b3a] mt-1">/ COLLECT</span>
                    </div>
                    <h3 className="text-[19px] font-black text-[#0f1b3a] mb-3 leading-tight group-hover:text-primary-blue transition-colors">Match the dust <br className="hidden xl:block" />to the system</h3>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                    Choose dry filtration or wet collection around the material, particle characteristics, sparks and process duty. Different contaminants require different engineering decisions.
                  </p>
                </div>
                <div className="w-full sm:w-[45%] lg:w-full xl:w-[45%] relative flex items-center justify-center sm:justify-start lg:justify-center xl:justify-start min-h-[120px] z-0">
                  <div className="relative w-full h-full min-h-[160px] lg:min-h-[200px] sm:-ml-4 xl:-ml-6">
                    <Image src="/Exploded Air Filtration Sequence.png" alt="Collect" fill className="object-contain object-center sm:object-left lg:object-center xl:object-left rounded-xl scale-[1.25] sm:scale-[1.4] lg:scale-[1.3] origin-center sm:origin-left lg:origin-center xl:origin-left transition-transform" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl p-6 lg:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.08)] transition-shadow border border-slate-100 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch gap-6 sm:gap-2 lg:gap-6 xl:gap-2 relative group">
                {/* Connector Arrow (Desktop) */}
                <div className="hidden lg:flex absolute -left-[24px] top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-blue-100 items-center justify-center z-10 shadow-sm text-primary-blue">
                  <ArrowUpRight size={14} strokeWidth={3} />
                </div>

                <div className="w-full sm:w-[55%] lg:w-full xl:w-[55%] flex flex-col justify-between z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-4xl font-black text-primary-blue leading-none">03</span>
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase text-[#0f1b3a] mt-1">/ MAINTAIN</span>
                    </div>
                    <h3 className="text-[19px] font-black text-[#0f1b3a] mb-3 leading-tight group-hover:text-primary-blue transition-colors">Keep performance <br className="hidden xl:block" />visible</h3>
                  </div>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
                    Plan access for filter servicing, dust or sludge removal, airflow checks and inspections. A maintainable bench is easier to keep operating as intended.
                  </p>
                </div>
                <div className="w-full sm:w-[45%] lg:w-full xl:w-[45%] relative flex items-center justify-center sm:justify-start lg:justify-center xl:justify-start min-h-[120px] z-0">
                  <div className="relative w-full h-full min-h-[160px] lg:min-h-[200px] sm:-ml-4 xl:-ml-6">
                    <Image src="/3D Clipboard Maintenance Checklist.png" alt="Maintain" fill className="object-contain object-center sm:object-left lg:object-center xl:object-left rounded-xl scale-[1.25] sm:scale-[1.4] lg:scale-[1.3] origin-center sm:origin-left lg:origin-center xl:origin-left transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SYSTEM CONFIGURATIONS SECTION */}
        <section id="configurations" className="py-10 lg:py-32 bg-white relative overflow-hidden">
          {/* Precise Technical Grid Pattern */}
          <div
            className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#0f1b3a 1px, transparent 1px), linear-gradient(90deg, #0f1b3a 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">

            {/* Top Banner Area */}
            <div className="mb-8 lg:mb-10 pb-8 border-b border-slate-100 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-16">
              <div className="lg:w-[55%]">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    SYSTEM CONFIGURATIONS
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-black text-[#0f1b3a] leading-[1.08] tracking-tight">
                  The right collection<br />
                  method. <span className="text-primary-blue">The right<br />
                    working environment.</span>
                </h2>
              </div>
              <div className="lg:w-[40%]">
                <p className="text-slate-500 text-[15px] sm:text-base leading-relaxed font-medium max-w-xl">
                  Start with the process and workpiece. The bench footprint, extraction arrangement, collection technology, and accessories can then be reviewed as one cohesive system.
                </p>
              </div>
            </div>

            {/* Main Product Configuration Cards */}
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-14 lg:mb-20">

              {/* Card 1: DRY COLLECTION */}
              <div className="group bg-white rounded-[2rem] p-6 sm:p-8 xl:p-10 border border-slate-200/90 hover:border-primary-blue/40 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">

                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 relative z-20">
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-xl bg-[#eef5fd] text-primary-blue font-black text-sm flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      01
                    </span>
                    <span className="text-[13px] font-black tracking-[0.15em] uppercase text-slate-500 group-hover:text-[#0f1b3a] transition-colors">
                      DRY COLLECTION
                    </span>
                  </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-6 relative z-10">
                  {/* Left Content Area */}
                  <div className="w-full xl:w-[55%] flex flex-col justify-between relative z-20">
                    <div>
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-black text-[#0f1b3a] mb-4 leading-[1.1]">
                        Dry downdraft table
                      </h3>

                      <p className="text-[13.5px] xl:text-[14px] text-slate-500 leading-relaxed font-normal mb-6 max-w-xl">
                        For compatible dry particulate from grinding, sanding, and deburring. Filter selection and cleaning arrangements depend on dust loading, particle size, and operating duty.
                      </p>

                      {/* Feature List */}
                      <ul className="space-y-2.5 mb-8">
                        {[
                          "Cartridge or bag filtration matching",
                          "Collection drawers & quick access",
                          "Spark arrestor for hot-work safety"
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#eef5fd] text-primary-blue flex items-center justify-center shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-[13px] text-slate-600 font-medium leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Link (Untouched structure) */}
                    <div className="pt-2">
                      <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-[#0f1b3a] font-bold text-xs uppercase tracking-wider hover:border-primary-blue hover:text-primary-blue hover:bg-blue-50/20 transition-all group/btn">
                        <span>Enquire about dry extraction</span>
                        <ArrowUpRight size={15} className="group-hover/btn:translate-x-1 transition-transform text-primary-blue" />
                      </a>
                    </div>
                  </div>

                  {/* Right Image Showcase */}
                  <div className="w-full xl:w-[45%] h-48 sm:h-56 xl:h-auto relative min-h-[220px] flex items-center justify-center xl:justify-end mt-4 xl:mt-0 xl:absolute xl:right-0 xl:top-0 xl:bottom-0 z-10 pointer-events-none">
                    <div className="relative w-full h-full xl:scale-[1.3] xl:origin-right xl:translate-x-6 group-hover:scale-[1.05] xl:group-hover:scale-[1.4] transition-transform duration-500">
                      <Image
                        src="/Industrial Blue Dust-Collection Workbench.png"
                        alt="Dry Downdraft Table"
                        fill
                        className="object-contain object-center xl:object-right"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: WET COLLECTION */}
              <div className="group bg-white rounded-[2rem] p-6 sm:p-8 xl:p-10 border border-slate-200/90 hover:border-primary-blue/40 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">

                {/* Header Strip */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 relative z-20">
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 rounded-xl bg-[#eef5fd] text-primary-blue font-black text-sm flex items-center justify-center group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      02
                    </span>
                    <span className="text-[13px] font-black tracking-[0.15em] uppercase text-slate-500 group-hover:text-[#0f1b3a] transition-colors">
                      WET COLLECTION
                    </span>
                  </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-6 relative z-10">
                  {/* Left Content Area */}
                  <div className="w-full xl:w-[55%] flex flex-col justify-between relative z-20">
                    <div>
                      <h3 className="text-2xl sm:text-3xl xl:text-4xl font-black text-[#0f1b3a] mb-4 leading-[1.1]">
                        Wet downdraft table
                      </h3>

                      <p className="text-[13.5px] xl:text-[14px] text-slate-500 leading-relaxed font-normal mb-6 max-w-xl">
                        Uses water contact to neutralize hazardous particulate. Selection requires a rigorous material check for reactivity, moisture control, water maintenance, and safe sludge disposal.
                      </p>

                      {/* Feature List */}
                      <ul className="space-y-2.5 mb-8">
                        {[
                          "Water compatibility verification",
                          "Automated water-level control",
                          "Reactive metals & hydrogen monitoring"
                        ].map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-[#eef5fd] text-primary-blue flex items-center justify-center shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </div>
                            <span className="text-[13px] text-slate-600 font-medium leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Link (Untouched structure) */}
                    <div className="pt-2">
                      <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-3.5 rounded-xl border border-slate-200 bg-white text-[#0f1b3a] font-bold text-xs uppercase tracking-wider hover:border-primary-blue hover:text-primary-blue hover:bg-blue-50/20 transition-all group/btn">
                        <span>Discuss a wet collection duty</span>
                        <ArrowUpRight size={15} className="group-hover/btn:translate-x-1 transition-transform text-primary-blue" />
                      </a>
                    </div>
                  </div>

                  {/* Right Image Showcase */}
                  <div className="w-full xl:w-[45%] h-48 sm:h-56 xl:h-auto relative min-h-[220px] flex items-center justify-center xl:justify-end mt-4 xl:mt-0 xl:absolute xl:right-0 xl:top-0 xl:bottom-0 z-10 pointer-events-none">
                    <div className="relative w-full h-full xl:scale-[1.3] xl:origin-right xl:translate-x-6 group-hover:scale-[1.05] xl:group-hover:scale-[1.4] transition-transform duration-500">
                      <Image
                        src="/Blue Industrial Extraction Workstation.png"
                        alt="Wet Downdraft Table"
                        fill
                        className="object-contain object-center xl:object-right"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Three Secondary Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

              {/* Feature 1 */}
              <div className="group bg-white p-7 lg:p-8 rounded-2xl border border-slate-200/80 hover:border-primary-blue/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden">
                {/* Background Icon */}
                <div className="absolute right-[-20px] bottom-[-20px] text-slate-100/60 group-hover:text-blue-50/80 transition-all duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2 z-0">
                  <Truck size={140} strokeWidth={0.75} />
                </div>

                <div className="relative z-10">
                  <h4 className="text-base font-bold text-[#0f1b3a] group-hover:text-primary-blue transition-colors mb-2">
                    Portable extraction
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                    Flexible workshop mobility with heavy-duty castors, locking stability, and simple power integration.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group bg-white p-7 lg:p-8 rounded-2xl border border-slate-200/80 hover:border-primary-blue/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden">
                {/* Background Icon */}
                <div className="absolute right-[-20px] bottom-[-20px] text-slate-100/60 group-hover:text-blue-50/80 transition-all duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2 z-0">
                  <Wind size={140} strokeWidth={0.75} />
                </div>

                <div className="relative z-10">
                  <h4 className="text-base font-bold text-[#0f1b3a] group-hover:text-primary-blue transition-colors mb-2">
                    Backdraft + downdraft
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                    Dual capture planes to control upward plume projection and maximize operator boundary breathing zone capture.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group bg-white p-7 lg:p-8 rounded-2xl border border-slate-200/80 hover:border-primary-blue/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden">
                {/* Background Icon */}
                <div className="absolute right-[-20px] bottom-[-20px] text-slate-100/60 group-hover:text-blue-50/80 transition-all duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:-translate-x-2 z-0">
                  <Settings2 size={140} strokeWidth={0.75} />
                </div>

                <div className="relative z-10">
                  <h4 className="text-base font-bold text-[#0f1b3a] group-hover:text-primary-blue transition-colors mb-2">
                    Custom workbench
                  </h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed font-normal">
                    Engineered deck sizing, heavy load ratings, tailored height adjustments, and multi-zone dampers.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* APPLICATIONS SECTION */}
        <section id="applications" className="py-24 bg-white relative overflow-hidden">
          <div className="w-full px-4 md:px-8 xl:px-12 2xl:px-16 max-w-[1600px] mx-auto">
            {/* Header Area */}
            <div className="mb-8 relative">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl">
                <div className="mb-4">
                  <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block">Equipment</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                  Industrial Downdraft Table<br className="hidden md:block" />
                  <span className="text-primary-blue">Manufacturer</span>
                </h2>
                <p className="text-slate-500 text-lg mb-2 max-w-lg leading-relaxed font-medium">
                  NAPCEN downdraft tables capture dust and fumes from grinding, welding, polishing and woodworking. Explore portable and custom extraction benches with dry or wet collection options. Request a quote for your industrial application.
                </p>
              </motion.div>
            </div>

            {/* Application Cards Grid */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5">
              {[
                {
                  category: "METALWORKING",
                  title: "Grinding Downdraft Table",
                  desc: "NAPCEN Grinding Downdraft Tables provide dust extraction at the work surface for metal grinding, deburring and abrasive finishing.",
                  extraLabel: "Applications",
                  extraText: "Metal grinding, edge finishing, deburring and surface preparation.",
                  btnText: "Explore grinding tables",
                  linkUrl: "#contact",
                  icon: Settings2,
                  image: "/Portable_Downdraft_Table.png"
                },
                {
                  category: "FINISHING",
                  title: "Polishing Downdraft Table",
                  desc: "Capture airborne particles generated during buffing, polishing and surface finishing. An integrated extraction work surface draws fine metal dust and abrasive residue.",
                  extraLabel: "Applications",
                  extraText: "Metal polishing, buffing, abrasive finishing and component surface preparation.",
                  btnText: "Explore polishing tables",
                  linkUrl: "#contact",
                  icon: Gem,
                  image: "/Downdraft Dust Collector Table.png"
                },
                {
                  category: "FABRICATION",
                  title: "Welding Downdraft Table",
                  desc: "Combine an industrial workbench with local extraction for welding smoke and fine particulate. Downward suction draws fumes toward the filtration system.",
                  extraLabel: "Applications",
                  extraText: "Bench welding, small-component fabrication and compatible welding preparation tasks.",
                  btnText: "Explore welding tables",
                  linkUrl: "#contact",
                  icon: Wind,
                  image: "/Grinding Downdraft Table.png"
                },
                {
                  category: "GENERAL DUST",
                  title: "Downdraft Dust Collector Table",
                  desc: "Integrate a working surface and particulate collection system into one industrial workstation. Air passes through the perforated tabletop carrying compatible dust.",
                  extraLabel: "Applications",
                  extraText: "Grinding, sanding, deburring, polishing and general component finishing.",
                  btnText: "Explore dust collectors",
                  linkUrl: "#contact",
                  icon: Cloud,
                  image: "/Welding Downdraft Table.png"
                },
                {
                  category: "FLEXIBLE",
                  title: "Portable Downdraft Table",
                  desc: "Bring dust and fume extraction to workshops with changing production layouts. A compact work surface and integrated filtration system support compatible tasks.",
                  extraLabel: "Applications",
                  extraText: "Maintenance work, small-batch finishing, workshop sanding and light fabrication.",
                  btnText: "Explore portable tables",
                  linkUrl: "#contact",
                  icon: Truck,
                  image: "/Wood Working Downdraft Table.png"
                },
                {
                  category: "WOOD & JOINERY",
                  title: "Woodworking Downdraft Table",
                  desc: "Provide local dust extraction for manual sanding and compatible wood finishing operations. Downward airflow through the work surface draws fine wood dust.",
                  extraLabel: "Applications",
                  extraText: "Furniture sanding, joinery finishing, wooden component preparation and carving tasks.",
                  btnText: "Explore woodworking tables",
                  linkUrl: "#contact",
                  icon: Layers,
                  image: "/Polishing Downdraft Table.png"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} variants={fadeInUp} className="relative p-6 lg:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all group overflow-hidden min-h-[420px] flex flex-col">
                    {/* Top row: Icon */}
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-primary-blue group-hover:text-white transition-colors">
                        <Icon size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 flex-1 flex flex-col">
                      <div className="text-[10px] font-bold text-primary-blue tracking-widest uppercase mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-2xl font-black mb-3 text-slate-800">{item.title}</h3>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed mb-4 pr-12 sm:pr-16 lg:pr-24">{item.desc}</p>

                      <div className="mb-8 pr-[140px] sm:pr-[150px] lg:pr-[170px]">
                        <span className="font-bold text-xs text-slate-700 uppercase">{item.extraLabel}:</span>
                        <span className="text-sm text-slate-500 ml-2">{item.extraText}</span>
                      </div>

                      <div className="mt-auto flex justify-start relative z-30">
                        <a
                          href={item.linkUrl}
                          onClick={() => setFormData({ ...formData, preferredTable: item.title })}
                          className="border border-slate-200 text-slate-700 hover:border-primary-blue hover:text-primary-blue bg-white/80 backdrop-blur-sm inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider transition-all"
                        >
                          {item.btnText} <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>

                    {/* Background Equipment Image - Absolute at bottom right */}
                    <div className="absolute -bottom-2 -right-0 lg:-right-2 w-[180px] h-[180px] lg:w-[200px] lg:h-[200px] z-10 group-hover:scale-110 transition-transform duration-500 origin-bottom-right">
                      <Image src={item.image} alt={item.title} fill className="object-contain drop-shadow-2xl" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* APPLICATION EXPLORER SECTION */}
        <section className="pt-20 pb-10 lg:py-28 relative overflow-hidden bg-white">
          {/* Ambient Backgrounds */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Geometric faint lines */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(45deg, #0f1b3a 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            {/* Soft glowing orbs */}
            <div className="absolute top-0 left-[-10%] w-[50%] h-[600px] bg-blue-100/40 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-[-10%] w-[50%] h-[600px] bg-indigo-100/40 rounded-full blur-[120px]" />
          </div>

          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto relative z-10">

            {/* Header Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-8 lg:mb-10">

              {/* Title & Description */}
              <div className="lg:col-span-7 flex flex-col justify-center">

                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    APPLICATION EXPLORER
                  </span>
                </div>


                <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#0f1b3a] leading-[1.08] tracking-tight mb-5">
                  Designed around <br /> <span className="text-primary-blue">what you make.</span>
                </h2>

                <p className="text-slate-600 text-[15px] sm:text-[17px] leading-relaxed font-normal max-w-xl">
                  Explore the capture challenges behind common downdraft table applications. Select a process to see what matters before specifying a bench.
                </p>
              </div>

              {/* 4 Feature Metrics Card Strip */}
              <div className="lg:col-span-5 flex items-center">
                <div className="w-full grid grid-cols-2 gap-3.5 p-4   backdrop-blur-sm ">
                  <div className="flex items-center gap-3 p-3 ">
                    <Check size={20} strokeWidth={2.5} className="text-[#0000000] shrink-0" />
                    <span className="text-[11px] font-bold text-[#0f1b3a] uppercase tracking-wide leading-tight">
                      Cleaner<br />Work Environment
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3">
                    <Check size={20} strokeWidth={2.5} className="text-[#0000000] shrink-0" />
                    <span className="text-[11px] font-bold text-[#0f1b3a] uppercase tracking-wide leading-tight">
                      Better<br />Dust Capture
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3">
                    <Check size={20} strokeWidth={2.5} className="text-[#0000000] shrink-0" />
                    <span className="text-[11px] font-bold text-[#0f1b3a] uppercase tracking-wide leading-tight">
                      Safer<br />Operations
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3">
                    <Check size={20} strokeWidth={2.5} className="text-[#0000000] shrink-0" />
                    <span className="text-[11px] font-bold text-[#0f1b3a] uppercase tracking-wide leading-tight">
                      Higher<br />Productivity
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Explorer Main Frame */}
            <div className="flex flex-col lg:flex-row lg:items-start rounded-[2rem] overflow-hidden bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(15,27,58,0.07)] border border-slate-200/80 p-3.5 sm:p-5 gap-5 relative">

              {/* Left Sidebar */}
              <div className="w-full lg:w-[350px] shrink-0 flex flex-col gap-4">

                {/* Navigation Tabs */}
                <div className="bg-[#f8fafc] rounded-2xl p-2.5 flex flex-col gap-1.5 border border-slate-200/70">
                  {applicationsData.map((app, index) => {
                    const isActive = activeAppTab === index;
                    return (
                      <button
                        key={app.id}
                        onClick={() => setActiveAppTab(index)}
                        className={`flex items-center justify-between text-left px-4.5 py-3.5 rounded-xl transition-all duration-200 cursor-pointer group ${isActive
                          ? "bg-[#003bb3] text-white shadow-md shadow-[#003bb3]/25 font-bold"
                          : "hover:bg-white text-[#0f1b3a] font-semibold"
                          }`}
                      >
                        <div className="flex items-center gap-3.5 min-w-0">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isActive
                              ? "bg-white/20 text-white"
                              : "bg-white border border-slate-200 text-slate-500 group-hover:text-[#003bb3] group-hover:border-[#003bb3]/30"
                              }`}
                          >
                            <app.icon size={18} strokeWidth={isActive ? 2.25 : 1.75} />
                          </div>
                          <span className="text-[14px] truncate">
                            {app.title}
                          </span>
                        </div>

                        <div
                          className={`hidden lg:flex transition-all duration-300 ${isActive ? "text-white/80 translate-x-0" : "text-transparent group-hover:text-[#003bb3] group-hover:translate-x-0 -translate-x-2"
                            }`}
                        >
                          ↗
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Promo Card */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50/50 rounded-2xl p-6 flex items-center gap-5 border border-blue-100 shadow-sm mt-4 group hover:border-blue-200 hover:shadow-md transition-all duration-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none transition-transform group-hover:scale-110" />

                  <div className="w-20 h-20 shrink-0 relative transition-transform duration-300">
                    <Image
                      src="/Industrial Downdraft Extraction Bench.png"
                      alt="Downdraft Bench"
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 relative z-10">
                    <h5 className="text-[15px] lg:text-[16px] font-black text-[#0f1b3a] leading-snug mb-3">
                      Need help choosing the right solution?
                    </h5>
                    <a href="#contact" className="inline-flex items-center gap-2 text-primary-blue hover:text-[#003bb3] font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                      Contact our experts <ArrowUpRight size={14} className="opacity-80" />
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Content Canvas */}
              <div className="w-full lg:flex-1 p-5 sm:p-6 lg:px-10 lg:pt-2 lg:pb-8 bg-white rounded-2xl border border-slate-100 relative">

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAppTab}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="max-w-3xl"
                  >
                    {/* Sub-Header Pill */}
                    <div className="inline-flex items-center gap-2 mb-1 mt-1">
                      <span className="text-slate-500 font-bold text-[10px] tracking-[0.18em] uppercase">
                        {applicationsData[activeAppTab].subHeader}
                      </span>
                    </div>

                    {/* Main Header */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f1b3a] mb-5 tracking-tight leading-tight">
                      {applicationsData[activeAppTab].mainHeader}
                    </h3>

                    {/* Description */}
                    <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl">
                      {applicationsData[activeAppTab].description}
                    </p>

                    {/* Challenge & Inputs Spec Cards */}
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mb-4">

                      {/* Capture Challenge */}
                      <div className="p-5 sm:p-6 rounded-2xl bg-[#fffaf0] border border-orange-200/70 grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-0.5 items-center sm:items-start transition-all hover:border-orange-300">
                        <div className="w-11 h-11 text-orange-600 shrink-0 flex items-center justify-center sm:row-span-2 self-start -ml-1 sm:ml-0">
                          <CloudRain size={22} strokeWidth={1.75} />
                        </div>
                        <h4 className="text-[11px] font-black uppercase tracking-wider text-[#0f1b3a] pt-1 sm:pt-0">
                          CAPTURE CHALLENGE
                        </h4>
                        <p className="text-[13px] text-slate-600 leading-relaxed font-normal w-full col-span-2 sm:col-span-1 sm:col-start-2">
                          {applicationsData[activeAppTab].challenge}
                        </p>
                      </div>

                      {/* Selection Inputs */}
                      <div className="p-5 sm:p-6 rounded-2xl bg-[#f0f5ff] border border-blue-200/70 grid grid-cols-[auto_1fr] gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-0.5 items-center sm:items-start transition-all hover:border-blue-300">
                        <div className="w-11 h-11 text-[#0052ff] shrink-0 flex items-center justify-center sm:row-span-2 self-start -ml-1 sm:ml-0">
                          <Settings size={22} strokeWidth={1.75} />
                        </div>
                        <h4 className="text-[11px] font-black uppercase tracking-wider text-[#0f1b3a] pt-1 sm:pt-0">
                          SELECTION INPUTS
                        </h4>
                        <p className="text-[13px] text-slate-600 leading-relaxed font-normal w-full col-span-2 sm:col-span-1 sm:col-start-2">
                          {applicationsData[activeAppTab].inputs}
                        </p>
                      </div>

                    </div>

                    {/* CTA Row */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <button
                        onClick={() => {
                          setFormData(prev => ({ ...prev, application: applicationsData[activeAppTab].title }));
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold text-[12px] uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all shadow-sm group cursor-pointer"
                      >
                        <span>REQUEST AN APPLICATION REVIEW</span>
                        <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                      </button>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>

            </div>

            {/* Bottom Industrial Categories Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <span className="text-[#0f1b3a] font-black uppercase tracking-wider text-[11px] mr-1">
                FOR INDUSTRIAL PRODUCTION TEAMS:
              </span>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[12px] font-semibold text-slate-600">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs hover:text-[#0052ff] hover:border-[#0052ff]/30 cursor-pointer transition-all">
                  <Settings2 size={14} className="text-slate-400" /> Metal fabrication
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs hover:text-[#0052ff] hover:border-[#0052ff]/30 cursor-pointer transition-all">
                  <Car size={14} className="text-slate-400" /> Automotive components
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs hover:text-[#0052ff] hover:border-[#0052ff]/30 cursor-pointer transition-all">
                  <Plane size={14} className="text-slate-400" /> Aerospace finishing
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs hover:text-[#0052ff] hover:border-[#0052ff]/30 cursor-pointer transition-all">
                  <Briefcase size={14} className="text-slate-400" /> Furniture manufacturing
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-2xs hover:text-[#0052ff] hover:border-[#0052ff]/30 cursor-pointer transition-all">
                  <Wrench size={14} className="text-slate-400" /> Engineering workshops
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* <section className="relative w-full py-24 md:py-0 md:aspect-[21/9] overflow-hidden bg-[#051124] flex items-center">
        
          <Image
            src="https://res.cloudinary.com/defqgygsf/image/upload/v1790682032/ChatGPT_Image_Sep_29_2026_05_03_18_PM_indw2c.png"
            alt="Global Projects Background"
            fill
            quality={100}
            priority
            unoptimized
            className="object-cover object-right lg:object-center hidden md:block"
          />
        
          <Image
            src="/INDUSTRIAL/India-Centered%20Industrial%20Network%20at%20Night.png"
            alt="Global Projects Mobile Background"
            fill
            quality={100}
            priority
            unoptimized
            className="object-cover object-center md:hidden"
          />

        
          <div className="absolute inset-0 bg-gradient-to-r from-[#051124] via-[#051124]/80 lg:via-[#051124]/60 to-transparent z-0 w-full lg:w-2/3 pointer-events-none" />

          <div className="w-full px-4 md:px-8 lg:px-12 relative z-10">
            <div className="max-w-3xl mt-12 md:mt-0">
              <span className="text-gray-400 font-bold text-[11px] sm:text-[13px] tracking-[0.2em] uppercase mb-6 block">
                INDIA-BASED • INTERNATIONAL ENQUIRIES
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
                Air pollution control equipment manufacturer and exporter for global projects
              </h2>
              <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-medium drop-shadow-md">
                From Puducherry, NAPCEN accepts technical enquiries for projects in India, the Middle East, Southeast Asia, Europe and North America. Export documentation, standards, logistics and installation scope should be agreed for each destination.
              </p>

              <div className="flex flex-wrap gap-3 items-center mb-10">
                {['India', 'Middle East', 'Southeast Asia', 'Europe', 'North America'].map(region => (
                  <span key={region} className="px-6 py-2.5 rounded-full border border-white/30 text-white text-sm font-bold hover:bg-white/10 transition-colors backdrop-blur-md shadow-lg">
                    {region}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#0f1b3a] font-black py-3.5 px-8 rounded-xl transition-all shadow-xl text-sm lg:text-[15px]">
                Share your project specification &rarr;
              </a>
            </div>
          </div>

          
          <div className="hidden md:flex absolute bottom-8 right-8 lg:bottom-10 lg:right-12 z-20 max-w-sm lg:max-w-[440px] bg-[#0c1e36]/80 backdrop-blur-xl border border-white/10 p-6 lg:p-7 rounded-3xl items-start gap-5 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c1e36] to-cyan-900/40 flex items-center justify-center shrink-0 border border-white/10 shadow-inner">
              <FileBadge className="w-7 h-7 text-white opacity-90" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm lg:text-[15px] mb-2.5 leading-snug tracking-wide">Design to the applicable requirement</h4>
              <p className="text-slate-300 text-[11px] lg:text-[12px] leading-[1.6]">
                For an Indian project, provide the relevant CPCB or State Pollution Control Board consent condition and stack limit. For other markets, supply the authority having jurisdiction, emission specification and any equipment standards in the tender. A product is not automatically "EPA approved", "OSHA compliant" or CE marked by virtue of its category.
              </p>
            </div>
          </div>
        </section> */}
        {/* WORKING PRINCIPLE SECTION */}
        <section id="working-principle" className="py-10 lg:py-24 bg-white relative overflow-clip">
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto relative z-10">
            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-20">
              <span className="text-slate-500 font-bold text-[11px] tracking-[0.2em] uppercase block mb-4">HOW IT WORKS</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                Downdraft Table <span className="text-primary-blue">Working Principle</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                A downdraft table works by drawing dust-laden air downward through a perforated work surface into a collection system. An extraction fan creates suction across the active working area, helping capture particles generated during grinding, sanding, deburring, polishing and suitable bench welding operations.
              </p>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
              {/* Left Side: Image */}
              <div className="relative lg:sticky lg:top-32">
                <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center group">
                  <Image src="/Downdraft table working principle.png" alt="Downdraft table working principle" fill className="object-contain scale-110 lg:scale-125 " />
                </div>

                {/* Conclusion Block under Image */}
                <div className="mt-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:border-blue-200 transition-colors">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary-blue"></div>
                  <h4 className="text-[17px] font-black text-[#0f1b3a] mb-3 group-hover:text-primary-blue transition-colors">What Determines Downdraft Table Performance?</h4>
                  <p className="text-[13px] sm:text-sm text-slate-500 font-medium leading-relaxed">
                    Effective industrial dust extraction depends on airflow distribution, workpiece position, filter condition and containment around the operation. Selecting a NAPCEN downdraft table starts with the material, production task and component dimensions so the extraction arrangement suits the actual working conditions.
                  </p>
                </div>
              </div>

              {/* Right Side: Numbered Steps */}
              <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
                {[
                  { title: "Dust and Fume Capture", text: "The workpiece sits above the extraction surface, placing collection close to the emission source. Downward airflow carries airborne particles into the bench. Depending on the configuration, rear and side extraction panels can extend capture around the working zone." },
                  { title: "Airflow Through the Collection Chamber", text: "Contaminated air enters an internal chamber beneath the tabletop. The chamber directs airflow toward the filtration or separation system. Workpiece size, blocked openings and workshop cross-drafts affect how effectively the downdraft extraction table captures emissions." },
                  { title: "Particle Separation", text: "In a dry downdraft table, cartridge or bag filters retain compatible dust and fine particulate while air passes through the filter media. A wet downdraft table uses water contact to separate suitable particles. The collection method must match the material and process." },
                  { title: "Dust Collection and Filter Cleaning", text: "Captured material accumulates in a collection drawer, hopper or wet-system sludge compartment. Dry systems equipped with pulse cleaning use compressed-air bursts to release dust from filter surfaces. Routine removal of collected material and filter servicing help maintain extraction performance." },
                  { title: "Filtered-Air Discharge", text: "The fan maintains airflow through the bench and directs treated air toward the specified outlet. Indoor return or outdoor discharge depends on the contaminants, filtration arrangement and site requirements. Particulate filters do not automatically remove gases or vapours." }
                ].map((step, idx) => (
                  <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="bg-white rounded-3xl p-5 sm:p-6 lg:p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-xl hover:border-blue-100 transition-all group">
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 sm:gap-x-5 lg:gap-x-6 gap-y-3 sm:gap-y-1.5 items-center sm:items-start">
                      <div className="w-12 h-12 rounded-[14px] bg-slate-50 text-slate-300 font-black text-xl flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors shadow-sm border border-slate-100 group-hover:border-primary-blue sm:row-span-2 self-start">
                        {idx + 1}
                      </div>
                      <h3 className="text-lg sm:text-[19px] font-black text-[#0f1b3a] group-hover:text-primary-blue transition-colors pt-1 sm:pt-0">
                        {step.title}
                      </h3>
                      <p className="text-slate-500 text-[13px] sm:text-[14px] leading-relaxed font-medium w-full col-span-2 sm:col-span-1 sm:col-start-2">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <WorkingPrincipleDark />

        {/* WORKFLOW SECTION */}
        {/* COMPARISON SECTION */}
        <section className="py-10 lg:py-24 bg-white relative overflow-hidden">
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto">
            {/* Top Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-8">
              <div className="lg:w-[55%]">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    DRY VS WET DOWNDRAFT TABLE
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[46px] font-black text-[#0f1b3a] leading-[1.1] tracking-tight">
                  Choose by material. <br />
                  <span className="text-primary-blue">Then refine the configuration.</span>
                </h2>
              </div>
              <div className="lg:w-[40%]">
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                  There is no universal table for every dust. Use this comparison as a starting point for an engineering conversation.
                </p>
              </div>
            </div>

            <p className="text-[13px] text-slate-500 mb-6 font-medium">Dry and wet downdraft collection: selection considerations</p>

            {/* Comparison Table */}
            <div className="w-full overflow-x-auto rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 mb-10">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#0f1b3a] text-white">
                    <th className="p-5 lg:p-6 text-[15px] font-bold w-[25%]">Decision factor</th>
                    <th className="p-5 lg:p-6 text-[15px] font-bold w-[37.5%] border-l border-white/10">Dry collection bench</th>
                    <th className="p-5 lg:p-6 text-[15px] font-bold w-[37.5%] border-l border-white/10">Wet collection bench</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  <tr className="bg-white border-b border-slate-100">
                    <td className="p-5 lg:p-6 font-bold text-[#0f1b3a]">Collection mechanism</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Dust retained on suitable filter media</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Compatible particles collected through water contact</td>
                  </tr>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <td className="p-5 lg:p-6 font-bold text-[#0f1b3a]">Material suitability</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Review combustible dust, temperature and filter compatibility</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Review water reactivity, gas generation and mixed-metal hazards</td>
                  </tr>
                  <tr className="bg-white border-b border-slate-100">
                    <td className="p-5 lg:p-6 font-bold text-[#0f1b3a]">Routine maintenance</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Filter cleaning, replacement and dust removal</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Water-level checks, sludge removal and internal cleaning</td>
                  </tr>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <td className="p-5 lg:p-6 font-bold text-[#0f1b3a]">Utilities and waste</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Electrical supply; compressed air if the cleaning system needs it</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Electrical supply, make-up water and a defined sludge route</td>
                  </tr>
                  <tr className="bg-white border-b border-slate-100">
                    <td className="p-5 lg:p-6 font-bold text-[#0f1b3a]">Hot-work duty</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Evaluate sparks and ignition controls as part of the design</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100">Do not assume water collection makes every hot-work process suitable</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-5 lg:p-6 font-bold text-[#0f1b3a]">Final selection</td>
                    <td className="p-5 lg:p-6 text-slate-500 font-medium border-l border-slate-100" colSpan={2}>Confirm the material, process risks and discharge requirements before choosing equipment.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECIFICATION SECTION */}
        <section id="engineering" className="pt-12 pb-10 lg:pt-16 lg:pb-12 bg-white relative overflow-hidden">

          {/* Background Watermark */}
          <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-10">
            <div className="relative w-[650px] h-[650px] translate-x-4 translate-y-4">
              <Image
                src="/Glossy Blue Clipboard Gear Icon.png"
                alt="Background Decoration"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>

          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

              {/* Left Side */}
              <div className="w-full lg:w-[45%]">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    TECHNICAL SPECIFICATION
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[46px] font-black text-[#0f1b3a] leading-[1.1] tracking-tight mb-6">
                  A bench that fits the job.<br />
                  <span className="text-primary-blue">A specification that fits the site.</span>
                </h2>
                <p className="text-slate-500 text-[15px] leading-relaxed font-medium mb-10 max-w-md">
                  Airflow, table size and motor power should follow the application. Share the required work envelope and material details so the proposal can define the operating basis rather than rely on a generic catalogue rating.
                </p>
                <a href="#contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold text-[13px] transition-all shadow-sm group">
                  Request a technical proposal
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Right Side (Specs List) */}
              <div className="w-full lg:w-[55%]">
                <div className="flex flex-col">

                  {/* Row */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-5 border-b border-slate-200/80 first:pt-0">
                    <h4 className="w-full md:w-[35%] text-[15px] font-bold text-[#0f1b3a] shrink-0">Work surface & capacity</h4>
                    <p className="w-full md:w-[65%] text-[14px] text-slate-500 leading-relaxed font-medium">Part dimensions, supported load, grating or perforated top, working height and tool access</p>
                  </div>

                  {/* Row */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-5 border-b border-slate-200/80">
                    <h4 className="w-full md:w-[35%] text-[15px] font-bold text-[#0f1b3a] shrink-0">Extraction performance</h4>
                    <p className="w-full md:w-[65%] text-[14px] text-slate-500 leading-relaxed font-medium">Active capture area, airflow distribution, resistance, fan duty and discharge arrangement</p>
                  </div>

                  {/* Row */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-5 border-b border-slate-200/80">
                    <h4 className="w-full md:w-[35%] text-[15px] font-bold text-[#0f1b3a] shrink-0">Collection technology</h4>
                    <p className="w-full md:w-[65%] text-[14px] text-slate-500 leading-relaxed font-medium">Filter media or wet collection selected for the dust characteristics and process risks</p>
                  </div>

                  {/* Row */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-5 border-b border-slate-200/80">
                    <h4 className="w-full md:w-[35%] text-[15px] font-bold text-[#0f1b3a] shrink-0">Electrical & utilities</h4>
                    <p className="w-full md:w-[65%] text-[14px] text-slate-500 leading-relaxed font-medium">Local voltage, frequency, controls, compressed-air needs and water requirements as applicable</p>
                  </div>

                  {/* Row */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-5 border-b border-slate-200/80">
                    <h4 className="w-full md:w-[35%] text-[15px] font-bold text-[#0f1b3a] shrink-0">Serviceability</h4>
                    <p className="w-full md:w-[65%] text-[14px] text-slate-500 leading-relaxed font-medium">Access clearance, collection removal, filter or water servicing and monitoring provisions</p>
                  </div>

                  {/* Row */}
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-5">
                    <h4 className="w-full md:w-[35%] text-[15px] font-bold text-[#0f1b3a] shrink-0">Project documentation</h4>
                    <p className="w-full md:w-[65%] text-[14px] text-slate-500 leading-relaxed font-medium">Agree drawings, design inputs, inspection scope and operating instructions in the quotation</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRICE & PROCUREMENT SECTION */}
        <section className="pt-10 pb-20 lg:py-28 bg-white relative overflow-hidden">
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="card-clip" clipPathUnits="objectBoundingBox">
                <path d="M 0 0 L 0.92 0 L 0.693 0.42 Q 0.65 0.5 0.65 0.58 L 0.65 1 L 0 1 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(45deg, #0f1b3a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[1800px] mx-auto relative z-10">
            {/* Header Area */}
            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-14">
              <div className="max-w-3xl">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    DOWNDRAFT TABLE PRICE & PROCUREMENT
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#0f1b3a] leading-[1.08] tracking-tight">
                  Compare complete solutions.<br />
                  <span className="text-primary-blue">Understand the installed cost.</span>
                </h2>
              </div>

              <div className="xl:max-w-md">
                <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-medium xl:pr-10">
                  A downdraft table quotation should make the scope clear. Two benches with similar dimensions can differ significantly in capture arrangement, filtration, controls and site requirements.
                </p>
              </div>
            </div>

            {/* 3 Cards Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-8">

              {/* Card 1 */}
              <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 flex relative overflow-hidden group h-[320px] xl:h-[340px]">

                {/* Base layer: Image on the right */}
                <div className="absolute inset-0 z-0">
                  <Image src="/Industrial Blue Dust Filtration System.png" alt="Cost Factors" fill className="object-cover object-right group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Overlapping White Shape with Drop Shadow */}
                <div className="absolute inset-0 z-10 pointer-events-none drop-shadow-[5px_0_15px_rgba(0,0,0,0.12)]">
                  <div
                    className="absolute inset-0 bg-white pointer-events-auto"
                    style={{ clipPath: 'url(#card-clip)' }}
                  >
                    {/* Content */}
                    <div className="p-6 xl:p-8 h-full flex flex-col justify-center w-[65%]">
                      <div className="flex items-center gap-3 w-full mb-4 xl:mb-5">
                        <span className="text-[#0f1b3a] font-bold text-xl xl:text-2xl">01</span>
                        <div className="h-[2px] flex-1 bg-slate-200"></div>
                        <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase whitespace-nowrap ml-2">COST FACTORS</span>
                      </div>

                      <div className="w-12 h-12 xl:w-14 xl:h-14 text-[#0f1b3a] flex items-center justify-center mb-4">
                        <Database size={24} className="xl:w-7 xl:h-7" strokeWidth={1.5} />
                      </div>

                      <h3 className="text-xl xl:text-[22px] font-black text-[#0f1b3a] leading-tight w-[95%]">What drives the price?</h3>

                      <p className="text-slate-600 text-[12px] xl:text-[13px] leading-relaxed font-medium w-[95%]">
                        Working area, load capacity, collection technology, fan duty, materials, controls and optional containment panels all influence equipment cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 flex relative overflow-hidden group h-[320px] xl:h-[340px]">

                {/* Base layer: Image on the right */}
                <div className="absolute inset-0 z-0">
                  <Image src="/Industrial Blue Air Filtration Unit.png" alt="Scope & Services" fill className="object-cover object-right group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Overlapping White Shape with Drop Shadow */}
                <div className="absolute inset-0 z-10 pointer-events-none drop-shadow-[5px_0_15px_rgba(0,0,0,0.12)]">
                  <div
                    className="absolute inset-0 bg-white pointer-events-auto"
                    style={{ clipPath: 'url(#card-clip)' }}
                  >
                    {/* Content */}
                    <div className="p-6 xl:p-8 h-full flex flex-col justify-center w-[65%]">
                      <div className="flex items-center gap-3 w-full mb-4 xl:mb-5">
                        <span className="text-[#0f1b3a] font-bold text-xl xl:text-2xl">02</span>
                        <div className="h-[2px] flex-1 bg-slate-200"></div>
                        <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase whitespace-nowrap ml-2">SCOPE & SERVICES</span>
                      </div>

                      <div className="w-12 h-12 xl:w-14 xl:h-14 text-[#0f1b3a] flex items-center justify-center mb-4">
                        <FileText size={24} className="xl:w-7 xl:h-7" strokeWidth={1.5} />
                      </div>

                      <h3 className="text-xl xl:text-[22px] font-black text-[#0f1b3a] leading-tight w-[95%]">What belongs in the scope?</h3>

                      <div className="w-10 xl:w-12 h-[3px] xl:h-1 bg-orange-400 rounded-full mt-3 mb-3 xl:mb-4"></div>

                      <p className="text-slate-600 text-[12px] xl:text-[13px] leading-relaxed font-medium w-[95%]">
                        Confirm utilities, ductwork, discharge, unloading, installation, commissioning, operator training and spare parts. Include only the services agreed for your project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 flex relative overflow-hidden group h-[320px] xl:h-[340px]">

                {/* Base layer: Image on the right */}
                <div className="absolute inset-0 z-0">
                  <Image src="/Blue Industrial Extraction Workstation.png" alt="Operating Cost" fill className="object-cover object-right group-hover:scale-105 transition-transform duration-700" />
                </div>

                {/* Overlapping White Shape with Drop Shadow */}
                <div className="absolute inset-0 z-10 pointer-events-none drop-shadow-[5px_0_15px_rgba(0,0,0,0.12)]">
                  <div
                    className="absolute inset-0 bg-white pointer-events-auto"
                    style={{ clipPath: 'url(#card-clip)' }}
                  >
                    {/* Content */}
                    <div className="p-6 xl:p-8 h-full flex flex-col justify-center w-[65%]">
                      <div className="flex items-center gap-3 w-full mb-4 xl:mb-5">
                        <span className="text-[#0f1b3a] font-bold text-xl xl:text-2xl">03</span>
                        <div className="h-[2px] flex-1 bg-slate-200"></div>
                        <span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase whitespace-nowrap ml-2">OPERATING COST</span>
                      </div>

                      <div className="w-12 h-12 xl:w-14 xl:h-14 text-[#0f1b3a] flex items-center justify-center mb-4">
                        <BarChart3 size={24} className="xl:w-7 xl:h-7" strokeWidth={1.5} />
                      </div>

                      <h3 className="text-xl xl:text-[22px] font-black text-[#0f1b3a] leading-tight w-[95%]">What affects operating cost?</h3>

                      <div className="w-10 xl:w-12 h-[3px] xl:h-1 bg-orange-400 rounded-full mt-3 mb-3 xl:mb-4"></div>

                      <p className="text-slate-600 text-[12px] xl:text-[13px] leading-relaxed font-medium w-[95%]">
                        Consider power use, filter consumption, cleaning utilities, water and sludge handling, routine servicing and the time needed to access collection components.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PRICE & PROCUREMENT SECTION */}
        <section className="py-1 lg:py-1 bg-white relative overflow-hidden">
          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1600px] mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

              {/* Left Side Content */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    DOWNDRAFT TABLE PRICE & PROCUREMENT
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-[46px] font-black text-[#0f1b3a] leading-[1.08] tracking-tight mb-6">
                  Compare complete solutions.<br />
                  <span className="text-primary-blue">Understand the installed cost.</span>
                </h2>

                <p className="text-slate-600 text-[15px] sm:text-[16px] leading-relaxed font-medium mb-8 max-w-lg">
                  A downdraft table quotation should make the scope clear. Two benches with similar dimensions can differ significantly in capture arrangement, filtration, controls and site requirements.
                </p>

                <div className="flex items-center">
                  <a href="#contact" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white border border-slate-200 hover:border-primary-blue text-slate-700 hover:text-primary-blue font-bold text-[13px] uppercase tracking-wider transition-all shadow-sm group cursor-pointer">
                    <span>Discuss pricing</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="w-[calc(100%+3rem)] -mx-6 sm:mx-0 sm:w-full lg:w-[55%] relative flex justify-center lg:justify-end mt-4 lg:mt-0 -mb-12 lg:mb-0">
                <div className="relative w-full max-w-[700px] h-[380px] sm:h-[450px] lg:h-[550px]">
                  <Image
                    src="/Smartphone-UI-Cost-Guide-Cards.png"
                    alt="Price and Procurement Cost Guide"
                    fill
                    className="object-contain object-center lg:object-right scale-110 sm:scale-100"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WORKING PRINCIPLE SECTION */}
        {/* INTERNATIONAL PROJECTS SECTION */}
        <section className="py-16 xl:py-20 bg-[#050b14] relative overflow-hidden">
          {/* Earth Image - Pinned to absolute right edge of the screen */}
          <div className="absolute right-0 top-0 bottom-0 w-[50%] lg:w-[40%] max-w-[800px] pointer-events-none opacity-90 mix-blend-screen z-0 flex items-center justify-end">
            <div className="relative w-full h-[110%]">
              <Image src="/Neon Earth Network on Transparent Background.png" fill className="object-contain object-right" alt="Earth Network" />
            </div>
          </div>

          <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20 max-w-[1800px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left Content - Headline & Icons */}
              <div className="lg:col-span-6 xl:col-span-5 flex flex-col z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-white/60 font-bold text-[10px] tracking-[0.2em] uppercase">
                    INDIA TO INTERNATIONAL PROJECTS
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-[40px] xl:text-[46px] font-black text-white leading-[1.15] tracking-tight mb-10">
                  Industrial downdraft table<br />
                  manufacturer in India.<br />
                  Built around your<br />destination.
                </h2>

                {/* 3 Icons */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full xl:w-[95%] gap-5 sm:gap-2 lg:gap-4">
                  <div className="flex items-center gap-2 xl:gap-3 shrink-0">
                    <Factory className="text-white" size={22} strokeWidth={1.2} />
                    <span className="text-[8px] xl:text-[9px] font-bold text-white/80 uppercase tracking-widest leading-[1.4]">PAN INDIA<br />PROJECT SUPPORT</span>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-800 shrink-0 hidden sm:block"></div>
                  <div className="flex items-center gap-2 xl:gap-3 shrink-0">
                    <Globe2 className="text-white" size={22} strokeWidth={1.2} />
                    <span className="text-[8px] xl:text-[9px] font-bold text-white/80 uppercase tracking-widest leading-[1.4]">INTERNATIONAL<br />ENQUIRIES WELCOME</span>
                  </div>
                  <div className="w-[1px] h-8 bg-slate-800 shrink-0 hidden sm:block"></div>
                  <div className="flex items-center gap-2 xl:gap-3 shrink-0">
                    <Settings className="text-white" size={22} strokeWidth={1.2} />
                    <span className="text-[8px] xl:text-[9px] font-bold text-white/80 uppercase tracking-widest leading-[1.4]">CUSTOM<br />ENGINEERING SOLUTIONS</span>
                  </div>
                </div>
              </div>

              {/* Middle Content - Description */}
              <div className="lg:col-span-5 xl:col-span-4 lg:col-start-7 flex flex-col relative z-10 lg:pl-12 xl:pl-20 lg:pr-6">
                <p className="text-slate-300 text-[13px] xl:text-[15px] leading-[1.8] font-medium mb-6 lg:mb-8 pr-4 lg:pr-0">
                  Discuss NAPCEN extraction benches for manufacturing facilities in India and international project locations. For overseas enquiries, include destination, electrical standards, required documentation and preferred delivery terms.
                </p>
                <p className="text-slate-300 text-[13px] xl:text-[15px] leading-[1.8] font-medium mb-10 lg:mb-12 pr-4 lg:pr-0">
                  Indian project enquiries: Chennai, Bengaluru, Pune, Mumbai, Coimbatore, Hosur, Ahmedabad and Puducherry. International enquiries are welcome from the Middle East, Southeast Asia and other manufacturing regions; availability and delivery scope are confirmed per project.
                </p>
                <a href="#contact" className="w-fit inline-flex items-center gap-4 px-8 py-3.5 rounded-full border border-slate-600 hover:border-white hover:bg-white/5 text-white font-bold text-[13px] transition-all group">
                  Discuss an export enquiry
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        </section>

        <WorkflowSection />

        {/* FAQ SECTION */}
        <section id="faq" className="pt-0 pb-10 lg:pt-10 lg:pb-24 bg-white relative overflow-hidden -mt-12 md:mt-0">
          <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24 items-start">

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative lg:sticky lg:top-32">
                <div className="mb-6">
                  <span className="text-slate-500 font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                    BUYER & ENGINEERING FAQ
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-6">
                  Your downdraft table<br /><span className="text-primary-blue">questions, answered.</span>
                </h2>
                <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
                  Practical answers for maintenance teams, production engineers and industrial equipment buyers.
                </p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col">
                {[
                  {
                    q: "What is an industrial downdraft table used for?",
                    a: "A downdraft table combines a work surface with local dust or fume extraction. It is used for compatible grinding, deburring, sanding, polishing and certain welding tasks. The configuration must suit the material and the way contaminants are generated."
                  },
                  {
                    q: "How do I choose the right downdraft table size?",
                    a: "Start with the largest workpiece, operator access, tool movement and load. Oversized parts can block suction openings, so the active extraction area and containment geometry need review alongside the tabletop dimensions."
                  },
                  {
                    q: "Is a downdraft table suitable for welding fumes?",
                    a: "It can suit welding tasks performed close to the extraction surface. Tall components, moving weld positions and strong thermal plumes may require rear capture, a hood or another extraction method. Filtration and discharge must suit the specific welding process."
                  },
                  {
                    q: "Can a wet downdraft table collect aluminium or magnesium dust?",
                    a: "Reactive-metal dust needs a material-specific hazard review. Some metals can react with water and produce hydrogen, and mixed dusts introduce additional risks. Do not select a wet table without reviewing the material, water chemistry, ventilation and cleaning arrangements."
                  },
                  {
                    q: "Does the table remove gases and odours?",
                    a: "Particulate collection does not automatically control gases or vapours. Processes generating gaseous contaminants may require dedicated treatment and a reviewed exhaust arrangement. Identify every contaminant before selecting the collection technology."
                  },
                  {
                    q: "What airflow is required for a grinding downdraft table?",
                    a: "Required airflow depends on the active work area, particle generation, workpiece obstruction and capture arrangement. A single airflow figure cannot be applied to all benches. The fan must also overcome resistance through the collection system and any connected ductwork."
                  },
                  {
                    q: "How often should filters or collection water be serviced?",
                    a: "Use the equipment instructions and actual loading to set the maintenance schedule. Check airflow or pressure indicators where provided, inspect filters and remove collected material. Wet systems also need water-level checks and scheduled sludge removal."
                  },
                  {
                    q: "Can NAPCEN supply a custom downdraft extraction bench?",
                    a: "Share the part dimensions, material, process, required load, working height and site constraints with NAPCEN. The enquiry review can establish a suitable configuration and confirm the options included in the proposal."
                  },
                  {
                    q: "What should an international buyer include in an enquiry?",
                    a: "Include destination country, voltage and frequency, process material, daily duty, workpiece dimensions, required documentation and delivery terms. Destination-specific requirements and supply scope should be agreed before ordering."
                  },
                  {
                    q: "Does a downdraft table guarantee workplace compliance?",
                    a: "Equipment selection is one part of exposure control. Installed capture performance, discharge, maintenance, work practices and site-specific assessment all matter. Required acceptance checks should be agreed for the actual workplace."
                  }
                ].map((faq, i) => {
                  const isOpen = openFaqIndex === i;
                  return (
                    <motion.div key={i} variants={fadeInUp} className="border-b border-slate-200 last:border-0 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                      >
                        <h3 className={`text-lg font-bold pr-8 transition-colors duration-300 ${isOpen ? 'text-primary-blue' : 'text-[#0f1b3a] group-hover:text-primary-blue'}`}>
                          {faq.q}
                        </h3>
                        <div className={`relative shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-primary-blue bg-primary-blue shadow-md' : 'border-slate-200 bg-slate-50 group-hover:border-primary-blue group-hover:bg-blue-50'}`}>
                          <div className={`absolute w-3.5 h-[2px] transition-all duration-300 rounded-full ${isOpen ? 'bg-white' : 'bg-slate-600 group-hover:bg-primary-blue'}`}></div>
                          <div className={`absolute w-[2px] h-3.5 transition-all duration-300 rounded-full ${isOpen ? 'bg-white rotate-90 scale-0' : 'bg-slate-600 group-hover:bg-primary-blue scale-100'}`}></div>
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="pb-8 pr-12 text-slate-500 text-[15px] font-medium leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* COMBINED CTA & FOOTER SECTION */}
        <Footer
          className="bg-black pt-24"
          brandName="NAPCEN"
          brandDescription="Industrial Air Pollution Control Equipment & Engineering Solutions. Built around the application, not just the equipment."
          creatorName="NAPCEN Team"
          creatorUrl="#"
          navLinks={[
            { label: "Applications", href: "#applications" },
            { label: "Products", href: "#products" },
            { label: "Engineering", href: "#engineering" },
            { label: "Industries", href: "#industries" },
            { label: "FAQ", href: "#faq" },
            { label: "Enquire", href: "#contact" },
          ]}
          socialLinks={[
            { icon: <Globe className="w-5 h-5" />, href: "#", label: "Website" },
            { icon: <Users className="w-5 h-5" />, href: "#", label: "LinkedIn" },
            { icon: <Mail className="w-5 h-5" />, href: "#contact", label: "Email" },
          ]}
          brandIcon={<Image src="/Napcen-logo.webp" alt="NAPCEN Logo" width={80} height={80} className="object-contain p-2" />}
        >
          <div className="container mx-auto px-6 max-w-7xl relative z-10 mb-20 border-b border-white/10 pb-20">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

              {/* Left Column */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-xl">
                <span className="text-white font-mono text-[11px] tracking-[0.3em] uppercase mb-6 block">
                  Let's Build Together
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-[54px] font-black text-white mb-6 leading-[1.1] tracking-tight">
                  Need industrial air <br className="hidden md:block" />
                  pollution control equipment?
                </h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                  Start a technical discussion with NAPCEN engineers. We analyze your process to provide the most effective pollution control solution.
                </p>

                {/* Contact Minimal Blocks */}
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0">
                        <Phone className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">SALES INQUIRY</div>
                        <a href="tel:+917904469219" className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block">
                          +91 79044 69219
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0">
                        <Mail className="text-cyan-400 w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 font-bold">GENERAL SUPPORT</div>
                        <a href="mailto:info@napcen.com" className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block"> info@napcen.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#12161b] flex items-center justify-center transition-all border border-white/5 shrink-0 mt-1">
                      <MapPin className="text-cyan-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white text-[15px] font-bold tracking-wide hover:text-cyan-400 transition-colors block leading-relaxed">
                        No. 42, Main Road, Villianur,<br />
                        Puducherry, India - 605110
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column (Dark Sleek Card) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="bg-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative z-10 overflow-hidden group">
                {/* Glow effect */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-emerald-500/10 transition-colors duration-700"></div>

                <h3 className="text-3xl font-bold text-white mb-4 relative z-10 tracking-tight">Request a quotation</h3>
                <p className="text-slate-400 mb-10 font-medium leading-relaxed relative z-10">
                  Provide your process specifications, and our engineers will evaluate the requirements for a customized solution.
                </p>
                <a href="mailto:info@napcen.com" className="relative z-10 flex w-full justify-between items-center bg-white hover:bg-slate-200 text-black font-black py-4 px-8 rounded-full transition-all text-sm tracking-widest uppercase group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span>Get my quotation</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </a>
              </motion.div>
            </div>

            {/* Privacy Disclaimer */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <h4 className="text-slate-300 font-bold text-sm mb-2">Enquiry data & privacy</h4>
              <p className="text-slate-500 text-xs leading-relaxed max-w-4xl">
                This preview processes form values in your browser to prepare a message. It does not upload or store your form entries on this website. If you choose WhatsApp or email, the information you review is passed to that service when you open it and sent to NAPCEN only when you confirm Send. Contact <a href="mailto:info@napcen.com" className="text-slate-300 hover:text-white underline underline-offset-2 transition-colors">info@napcen.com</a> about handling of enquiries. No advertising conversion tag is installed in this preview.
              </p>
            </div>
          </div>
        </Footer>
      </main>
    </div>
  );
}
