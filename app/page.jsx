// app/page.jsx
// Next.js (App Router) + Tailwind CSS
// Built for Grow My Therapy - Stage 2: Dr. Maya Reynolds, PsyD Redesign

'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Laptop,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Compass,
  Sparkles,
  Feather,
  Sun,
  Shield,
  X,
  Menu
} from 'lucide-react';

const THERAPIST = {
  name: "Dr. Maya Reynolds, PsyD",
  credentials: "Licensed Clinical Psychologist #PSY31842",
  officeAddress: "123th Street 45 W, Santa Monica, CA 90401",
  city: "Santa Monica, California",
  h1Headline: "Evidence-Based Therapy for Anxiety, Trauma & High-Achiever Burnout in Santa Monica, CA",
  subheading: "A warm, grounded space for thoughtful adults who feel 'functional on the outside' while quietly exhausted by overthinking, chronic tension, or lingering trauma.",
  services: [
    {
      id: "anxiety",
      title: "Anxiety, Panic & Nervous System Regulation",
      shortDesc: "Target chronic worry, physical tension, insomnia, and racing thoughts that keep your autonomic system in hypervigilance.",
      fullDesc: "High-functioning anxiety often feels like an internal motor that never stops. We utilize CBT to disarm catastrophizing and somatic grounding to regulate physiological distress.",
      symptoms: [
        "Persistent sense of bracing for something to go wrong",
        "Physical tension in jaw, neck, chest, or stomach",
        "Racing thoughts at night and sleep disruptions",
        "Panic sensations or fear of losing control"
      ],
      approaches: ["Cognitive-Behavioral Therapy (CBT)", "Mindfulness-Based Stress Reduction", "Polyvagal & Somatic Regulation"]
    },
    {
      id: "trauma",
      title: "Trauma Recovery & EMDR Therapy",
      shortDesc: "Paced, safe reprocessing of single-incident trauma, relational wounds, or chronic developmental stress.",
      fullDesc: "Past trauma leaves neurological patterns that reactivate in present-day triggers. Using EMDR with safe stabilization protocols, we reprocess painful memories without re-traumatization.",
      symptoms: [
        "Sudden emotional overwhelm triggered by current events",
        "Lingering impact of childhood stress or emotional neglect",
        "Difficulty feeling safe or trusting in relationships",
        "Emotional numbness or unexpected hyperarousal"
      ],
      approaches: ["EMDR Reprocessing", "Attachment-Informed Therapy", "Safety & Stabilization Protocols"]
    },
    {
      id: "burnout",
      title: "Burnout, Perfectionism & High Internal Pressure",
      shortDesc: "Support for entrepreneurs, creatives, and driven professionals feeling disconnected from themselves.",
      fullDesc: "When high standards become a shield against vulnerability, chronic exhaustion follows. We unpack perfectionistic cycles and develop sustainable boundaries for living and working.",
      symptoms: [
        "Feeling hollow or drained despite external success",
        "Inability to truly rest without guilt or self-criticism",
        "Imposter syndrome and fear of falling behind",
        "Loss of vitality and joy in creative work"
      ],
      approaches: ["Acceptance & Commitment Therapy (ACT)", "Self-Compassion Integration", "Values & Boundary Realignment"]
    }
  ],
  faqs: [
    {
      q: "Where is your Santa Monica therapy office located?",
      a: "My office is located at 123th Street 45 W in Santa Monica, CA 90401. It is a quiet, private office suite designed with natural California sunlight, comfortable seating, and an uncluttered atmosphere."
    },
    {
      q: "Do you offer virtual therapy across California?",
      a: "Yes! In addition to in-person sessions at my Santa Monica office, I provide secure, HIPAA-compliant telehealth video therapy for adults anywhere in California."
    },
    {
      q: "What is your clinical approach in sessions?",
      a: "I take a warm, collaborative, and grounded approach. Sessions combine evidence-based methods including Cognitive-Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented somatic techniques."
    },
    {
      q: "What can I expect during an EMDR session?",
      a: "EMDR uses bilateral stimulation (such as eye movements or tactile taps) to help your brain reprocess stuck traumatic memories. We pace this work gently, prioritizing safety and emotional regulation before processing."
    }
  ]
};

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingFormat, setBookingFormat] = useState('in-person');
  const [submitted, setSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FDFBF7] text-[#2D312E] font-sans antialiased selection:bg-[#E4D7C5]">
      {/* 1. Top Bar Notice */}
      <div className="bg-[#1E3A34] text-stone-200 text-[10px] sm:text-xs py-2 px-3 sm:px-4 text-center border-b border-[#2C4A43]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-6">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#E4A883]" />
            Santa Monica Office: 123th Street 45 W, CA 90401
          </span>
          <span className="hidden sm:inline text-stone-500">·</span>
          <span className="flex items-center gap-1.5 font-medium">
            <Laptop className="w-3.5 h-3.5 text-[#E4A883]" />
            Secure HIPAA Telehealth across California
          </span>
          <span className="hidden sm:inline text-stone-500">·</span>
          <span className="text-[#E4A883] font-semibold">Accepting New Adult Clients</span>
        </div>
      </div>

      {/* 2. Top Navigation Bar (3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EAE5DB]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 min-h-16 md:min-h-20 py-3 md:py-0 flex items-center justify-between gap-3 md:gap-6">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex min-w-0 flex-col group">
            <span className="text-base sm:text-lg lg:text-xl font-serif font-bold tracking-tight text-[#1E3A34] group-hover:text-[#C27D56] transition-colors">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="hidden sm:block text-[10px] sm:text-xs text-stone-500 font-sans tracking-wide">
              Licensed Clinical Psychologist · Santa Monica, CA
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm font-medium text-stone-600">
            <a href="#specialties" className="hover:text-[#1E3A34] hover:underline underline-offset-8 transition-colors">Specialties</a>
            <a href="#about" className="hover:text-[#1E3A34] hover:underline underline-offset-8 transition-colors">About Maya</a>
            <a href="#office" className="hover:text-[#1E3A34] hover:underline underline-offset-8 transition-colors">Our Office</a>
            <a href="#approach" className="hover:text-[#1E3A34] hover:underline underline-offset-8 transition-colors">Approach</a>
            <a href="#resources" className="hover:text-[#1E3A34] hover:underline underline-offset-8 transition-colors">Resources</a>
            <a href="#faqs" className="hover:text-[#1E3A34] hover:underline underline-offset-8 transition-colors">FAQs</a>
          </nav>

          {/* Mobile navigation toggle */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-semibold rounded-lg bg-[#C27D56] hover:bg-[#B06D48] text-white shadow-sm transition-all whitespace-nowrap"
            >
              <span className="sm:hidden">Book Call</span>
              <span className="hidden sm:inline">Book Free Consultation</span>
            </button>
            <button
              type="button"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#EAE5DB] text-[#1E3A34] hover:bg-[#F2ECE1]"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="lg:hidden border-t border-[#EAE5DB] bg-[#FDFBF7] px-4 py-3 sm:px-6">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 text-sm font-medium text-stone-700">
              {[
                ["Specialties", "#specialties"],
                ["About Maya", "#about"],
                ["Our Office", "#office"],
                ["Approach", "#approach"],
                ["Self-Care Resources", "#resources"],
                ["FAQs", "#faqs"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 hover:bg-[#F2ECE1] hover:text-[#1E3A34]"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* 3. Hero Section (SEO H1 & Santa Monica Keywords) */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-medium text-[#C27D56] tracking-wider uppercase">
                <span>Santa Monica, California</span>
                <span aria-hidden="true">·</span>
                <span>Adult Psychotherapy & EMDR</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E3A34] tracking-tight leading-tight sm:leading-[1.18] text-balance break-words">
                {THERAPIST.h1Headline}
              </h1>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                {THERAPIST.subheading}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3.5 text-sm font-semibold rounded-lg bg-[#C27D56] hover:bg-[#B06D48] text-white shadow-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Schedule 15-Min Free Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#office"
                  className="px-6 py-3.5 text-sm font-medium rounded-lg border border-[#D5CEC2] text-stone-700 hover:bg-[#F2ECE1] transition-colors text-center"
                >
                  Tour Santa Monica Office
                </a>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-5 sm:pt-6 border-t border-[#EAE5DB] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-[11px] sm:text-xs">
                <div>
                  <span className="block text-stone-400 font-medium">Location</span>
                  <span className="block font-semibold text-[#1E3A34]">Santa Monica, CA</span>
                </div>
                <div>
                  <span className="block text-stone-400 font-medium">Formats</span>
                  <span className="block font-semibold text-[#1E3A34]">In-Person & Telehealth</span>
                </div>
                <div>
                  <span className="block text-stone-400 font-medium">Modalities</span>
                  <span className="block font-semibold text-[#1E3A34]">CBT, EMDR & Somatic</span>
                </div>
                <div>
                  <span className="block text-stone-400 font-medium">Client Focus</span>
                  <span className="block font-semibold text-[#1E3A34]">Adults & High Achievers</span>
                </div>
              </div>
            </div>

            {/* Hero Image: Dr. Maya Reynolds Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-xl border border-[#EAE5DB] bg-[#F5F2EA] aspect-[4/5]">
                <img
                  src="/images/Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD - Santa Monica Licensed Clinical Psychologist"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold text-[#E4A883] uppercase tracking-wider">Meet Dr. Maya</span>
                  <p className="text-xl font-serif font-bold text-white">Dr. Maya Reynolds, PsyD</p>
                  <p className="text-xs text-stone-200 mt-1">
                    Warm, collaborative care combining evidence-based CBT, EMDR, and nervous system regulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Three Core Specialties */}
      <section id="specialties" className="py-12 sm:py-16 lg:py-20 bg-[#F7F4EC] border-y border-[#EAE5DB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-8 sm:mb-12 lg:mb-14">
            <span className="text-xs font-semibold text-[#C27D56] uppercase tracking-wider">
              Clinical Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E3A34]">
              Three Pillars of Care Tailored to You
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Targeted therapy for thoughtful individuals who are outwardly accomplished yet inwardly exhausted.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {THERAPIST.services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 border border-[#EAE5DB] shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-w-0"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-stone-400">0{index + 1}. Specialty</span>
                    <span className="w-8 h-8 rounded-full bg-[#F5F2EA] flex items-center justify-center text-[#1E3A34]">
                      {index === 0 && <Compass className="w-4 h-4" />}
                      {index === 1 && <Sparkles className="w-4 h-4" />}
                      {index === 2 && <Feather className="w-4 h-4" />}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1E3A34] break-words">{service.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{service.shortDesc}</p>

                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Common Signs:</span>
                    <ul className="space-y-1.5">
                      {service.symptoms.slice(0, 2).map((symptom, sIdx) => (
                        <li key={sIdx} className="text-xs text-stone-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C27D56] shrink-0 mt-0.5" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-[#1E3A34] hover:text-[#C27D56] transition-colors flex items-center gap-1.5"
                  >
                    <span>View Full Approach</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-xs font-medium text-stone-500 hover:text-stone-900"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About Dr. Maya Reynolds Section */}
      <section id="about" className="py-12 sm:py-16 md:py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-[#EAE5DB] shadow-md bg-[#F5F2EA]">
                <img
                  src="/images/Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds"
                  className="block w-full h-auto object-contain"
                />
              </div>
              <div className="p-6 rounded-xl bg-[#F7F4EC] border border-[#EAE5DB] space-y-3 text-xs text-stone-600">
                <span className="font-semibold text-[#1E3A34] uppercase tracking-wider block">Credentials</span>
                <p>• Doctor of Psychology (PsyD) in Clinical Psychology</p>
                <p>• California Licensed Psychologist #PSY31842</p>
                <p>• Trained in EMDR Trauma Reprocessing & CBT</p>
                <p>• Specialized in Somatic & Polyvagal Nervous System Care</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-[#C27D56] uppercase tracking-wider">About Dr. Maya Reynolds</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E3A34] leading-tight">
                A Grounded, Collaborative Partner in Your Healing
              </h2>
              <div className="space-y-4 text-stone-600 text-base leading-relaxed">
                <p>
                  I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
                <p>
                  My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong.
                </p>
                <p>
                  Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns. My approach is paced carefully, with an emphasis on safety, stabilization, and helping you feel regulated in your daily life.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 text-sm font-semibold rounded-lg bg-[#C27D56] hover:bg-[#B06D48] text-white shadow-sm transition-all"
                >
                  Schedule Initial Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PART 3 REQUIREMENT: Custom "Our Office" Section */}
      <section id="office" className="py-12 sm:py-16 lg:py-20 bg-[#F3EFE6] border-y border-[#EAE5DB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-semibold text-[#C27D56] uppercase tracking-wider">
              Part 3 Feature · A Calm Space for Healing
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E3A34]">
              Our Office: A Grounding Space in Santa Monica
            </h2>
            <p className="text-base text-stone-600">
              Located at <strong>123th Street 45 W, Santa Monica, CA 90401</strong>. Designed with natural light and an uncluttered environment so your nervous system can begin settling upon arrival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-stretch mb-8 sm:mb-12">
            <div className="rounded-2xl overflow-hidden border border-[#EAE5DB] shadow-md bg-white">
              <img
                src="/images/office1.jpeg"
                alt="Santa Monica Therapy Room with brick wall and sunlit windows"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="p-4 bg-white border-t border-[#EAE5DB]">
                <h4 className="font-serif font-bold text-[#1E3A34] text-base">Main Consultation Space</h4>
                <p className="text-xs text-stone-600 mt-1">
                  Exposed red brick, tall arched windows with diffused sheer curtains, comfortable seating, and acoustic privacy.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#EAE5DB] shadow-md bg-white">
              <img
                src="/images/office2.jpeg"
                alt="Therapy office seating with curated psychology bookshelf and olive tree"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="p-4 bg-white border-t border-[#EAE5DB]">
                <h4 className="font-serif font-bold text-[#1E3A34] text-base">Grounding & Reading Area</h4>
                <p className="text-xs text-stone-600 mt-1">
                  Potted olive tree, curated clinical literature, soft textures, and comfortable seating for calm reflection.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#EAE5DB] space-y-2">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#C27D56]" />
                <h4 className="text-sm font-bold text-[#1E3A34]">Natural Coastal Light</h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Large windows let in soft California daylight, creating a soothing, open atmosphere.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#EAE5DB] space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C27D56]" />
                <h4 className="text-sm font-bold text-[#1E3A34]">Acoustic Privacy & Comfort</h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Sound-insulated consultation rooms equipped with deep armchairs ensuring complete confidentiality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-[#EAE5DB] space-y-2">
              <div className="flex items-center gap-2">
                <Laptop className="w-4 h-4 text-[#C27D56]" />
                <h4 className="text-sm font-bold text-[#1E3A34]">In-Person & Telehealth</h4>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Convenient visits in Santa Monica plus secure telehealth for clients anywhere in California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Integrative Methods */}
      <section id="approach" className="py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-semibold text-[#C27D56] uppercase tracking-wider">Clinical Methodology</span>
            <h2 className="text-3xl font-serif font-bold text-[#1E3A34]">Evidence-Based, Mind-Body Integration</h2>
            <p className="text-sm text-stone-600">Addressing both cognitive loops and physiological autonomic tension.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-xs">
            <div className="bg-[#FAF7F0] p-6 rounded-xl border border-[#EAE5DB] space-y-2">
              <h3 className="font-bold text-sm text-[#1E3A34]">CBT</h3>
              <p className="text-stone-600">Reframe automatic catastrophizing and perfectionism.</p>
            </div>
            <div className="bg-[#FAF7F0] p-6 rounded-xl border border-[#EAE5DB] space-y-2">
              <h3 className="font-bold text-sm text-[#1E3A34]">EMDR</h3>
              <p className="text-stone-600">Bilateral stimulation to gently reprocess traumatic memories.</p>
            </div>
            <div className="bg-[#FAF7F0] p-6 rounded-xl border border-[#EAE5DB] space-y-2">
              <h3 className="font-bold text-sm text-[#1E3A34]">Mindfulness</h3>
              <p className="text-stone-600">Cultivate present-moment awareness and diminish panic.</p>
            </div>
            <div className="bg-[#FAF7F0] p-6 rounded-xl border border-[#EAE5DB] space-y-2">
              <h3 className="font-bold text-sm text-[#1E3A34]">Somatic Regulation</h3>
              <p className="text-stone-600">Release chronic physical tension and autonomic hyperarousal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Self-Care Resources */}
      <section id="resources" className="py-12 sm:py-16 lg:py-20 bg-[#F3EFE6] border-y border-[#EAE5DB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
            <span className="text-xs font-semibold text-[#C27D56] uppercase tracking-wider">A Gentle Place to Start</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E3A34]">Small Steps for Everyday Wellbeing</h2>
            <p className="text-sm sm:text-base leading-relaxed text-stone-600">
              Simple practices that may help you make a little more room for calm, reflection, and self-compassion in your daily routine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <article className="h-full rounded-2xl border border-[#E5DDD0] bg-[#FDFBF7] p-5 sm:p-6 space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9EDE5] text-[#1E3A34]">
                <Sun className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1E3A34]">Pause & Breathe</h3>
              <p className="text-sm leading-relaxed text-stone-600">Take a brief pause, relax your shoulders, and let your breathing return to a comfortable, natural rhythm.</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#C27D56]">Try a mindful pause</p>
            </article>

            <article className="h-full rounded-2xl border border-[#E5DDD0] bg-[#FDFBF7] p-5 sm:p-6 space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9EDE5] text-[#1E3A34]">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1E3A34]">Ground in the Present</h3>
              <p className="text-sm leading-relaxed text-stone-600">Notice what you can see, hear, and feel around you. Gently bring your attention back to the moment you are in.</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#C27D56]">Notice your surroundings</p>
            </article>

            <article className="h-full rounded-2xl border border-[#E5DDD0] bg-[#FDFBF7] p-5 sm:p-6 space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9EDE5] text-[#1E3A34]">
                <Feather className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1E3A34]">Write It Down</h3>
              <p className="text-sm leading-relaxed text-stone-600">Spend a few minutes journaling about what is on your mind, what you need today, or one thing you appreciate.</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#C27D56]">Make space to reflect</p>
            </article>

            <article className="h-full rounded-2xl border border-[#E5DDD0] bg-[#FDFBF7] p-5 sm:p-6 space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9EDE5] text-[#1E3A34]">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1E3A34]">Make Room for Rest</h3>
              <p className="text-sm leading-relaxed text-stone-600">Choose one small, realistic boundary today, such as taking a screen break or allowing yourself time to recharge.</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#C27D56]">Rest without guilt</p>
            </article>
          </div>

          <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-relaxed text-stone-500">
            These general wellbeing ideas are for reflection and are not a substitute for personalized mental health care. Choose what feels comfortable for you.
          </p>
        </div>
      </section>

      {/* 9. FAQs */}
      <section id="faqs" className="py-12 sm:py-16 lg:py-20 bg-[#F7F4EC] border-t border-[#EAE5DB]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-semibold text-[#C27D56] uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl font-serif font-bold text-[#1E3A34]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {THERAPIST.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-[#EAE5DB] overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex justify-between items-start gap-4 font-serif font-bold text-[#1E3A34]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180 text-[#C27D56]' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-stone-600 border-t border-stone-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="bg-[#172622] text-stone-300 py-10 sm:py-12 border-t border-[#233B35]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
          <div className="md:col-span-5 space-y-2">
            <div className="text-base font-serif font-bold text-white">Dr. Maya Reynolds, PsyD</div>
            <p className="text-stone-400">California Licensed Psychologist #PSY31842</p>
            <p className="text-stone-400">Specializing in high-functioning anxiety, trauma reprocessing, and burnout.</p>
          </div>
          <div className="md:col-span-4 space-y-1">
            <div className="font-semibold text-white uppercase tracking-wider mb-2">Office</div>
            <p>123th Street 45 W, Santa Monica, CA 90401</p>
            <p>Telehealth across all California</p>
          </div>
          <div className="md:col-span-3 space-y-1 text-stone-500">
          <p>© 2026 Dr. Maya Reynolds. All rights reserved.</p>
            <p>In emergency, please call 988 or go to nearest ER.</p>
          </div>
        </div>
      </footer>

      {/* 11. Consultation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92dvh] overflow-y-auto p-5 sm:p-8 space-y-5 sm:space-y-6 border border-[#EAE5DB] shadow-2xl relative my-auto">
            <button
              onClick={() => { setIsModalOpen(false); setSubmitted(false); }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-stone-400 hover:text-stone-900"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1E3A34]">Consultation Requested</h3>
                <p className="text-xs text-stone-600">
                  Thank you. We will contact you within 24 hours to schedule your free 15-minute phone call.
                </p>
                <button
                  onClick={() => { setIsModalOpen(false); setSubmitted(false); }}
                  className="px-5 py-2 text-xs font-semibold rounded-lg bg-[#1E3A34] text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-4 text-xs"
              >
                <div>
                  <span className="text-xs font-semibold text-[#C27D56] uppercase tracking-wider">Dr. Maya Reynolds, PsyD</span>
                  <h3 className="text-xl font-serif font-bold text-[#1E3A34] mt-1">Book Free 15-Minute Consultation</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setBookingFormat('in-person')}
                    className={`p-3 sm:p-4 rounded-lg border text-left break-words ${bookingFormat === 'in-person' ? 'border-[#1E3A34] bg-[#F4F8F6] font-semibold text-[#1E3A34]' : 'border-stone-200'}`}
                  >
                    In-Person (Santa Monica)
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingFormat('telehealth')}
                    className={`p-3 sm:p-4 rounded-lg border text-left break-words ${bookingFormat === 'telehealth' ? 'border-[#1E3A34] bg-[#F4F8F6] font-semibold text-[#1E3A34]' : 'border-stone-200'}`}
                  >
                    California Telehealth
                  </button>
                </div>

                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="w-full min-w-0 p-3 text-sm rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C27D56]/40"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full min-w-0 p-3 text-sm rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#C27D56]/40"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#C27D56] text-white font-semibold hover:bg-[#B06D48]"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
