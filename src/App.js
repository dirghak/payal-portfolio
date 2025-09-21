import './App.css';

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
        <header className="sticky top-0 bg-white shadow p-4 flex justify-between">
        <h1 className="text-xl font-bold"><a href="#intro">Payal Desai</a></h1>
        <nav className="space-x-6">
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
        
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-600 to-emerald-500 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Payal Desai</h1>
        <p className="mt-4 text-lg">Senior Scrum Master • SAFe 6 | CSM | CSPO</p>
        <div className="mt-6 flex justify-center gap-4">
        <button className="px-6 py-3 rounded-md font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
        <a href="mailto:payalukani92@gmail.com">Contact</a>
            </button>
          
          <button className="px-6 py-3 rounded-md font-semibold text-base bg-green-700 text-white hover:bg-green-800"><a href="/resume.pdf">Download Résumé</a></button>
        </div>
      </section>

      {/* About Section */}
      <section id="intro" className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="leading-relaxed text-gray-700">
          Senior Scrum Master with 10+ years leading Agile delivery across SaaS, Media, Telecom, Supply Chain, and SAP programs. I specialize in scaling Scrum/SAFe, clarifying dependencies, and turning metrics into momentum. Recent wins include +30% team velocity, +25% Agile maturity, and 95% sprint-goal success.
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { stat: "+30%", desc: "Team velocity in 3 sprints" },
            { stat: "+25%", desc: "Agile maturity increase" },
            { stat: "95%", desc: "Sprint-goal success rate" },
            { stat: "50%", desc: "Improved dependency visibility" },
            { stat: "90%", desc: "Commitment adherence" },
          ].map((item, i) => (
            <div 
              key={i} 
              className="px-4 py-3 bg-white shadow rounded-lg text-gray-800 font-medium hover:shadow-md transition"
            >
             <p className="text-3xl font-bold text-green-600">{item.stat}</p>
                <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6">
          {[
            {
              role: "Senior Scrum Master",
              company: "Lorven Technologies (Client: LERETA)",
              period: "Jul 2023 – Mar 2025",
              details: "Led 3 cross-functional teams (20+). Drove +30% velocity, +25% Agile maturity; improved dependency visibility by 50%.",
            },
            {
              role: "Senior Scrum Master",
              company: "Amdocs (Telco/OTT Integration)",
              period: "Dec 2021 – Jan 2023",
              details: "Owned delivery for 3 teams (25+). Achieved 95% sprint-goal success; boosted story readiness by 35%; cut spillover by 40%.",
            },
            {
              role: "(Sr.) Scrum Master",
              company: "Asite Solutions",
              period: "Sep 2015 – Jul 2020",
              details: "Promoted for consistent multi-team delivery. Reached ~90% sprint adherence; +20% throughput; reduced scope creep.",
            },
          ].map((job, i) => (
            <div key={i} className="border-l-4 border-green-600 pl-4">
              <h3 className="text-lg font-semibold">{job.role} — {job.company}</h3>
              <p className="text-sm text-gray-500">{job.period}</p>
              <p className="mt-2 text-gray-700">{job.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills & Certifications */}
      <section id="certifications" className="bg-gray-100 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Skills & Certifications</h2>
          <p className="text-gray-700 mb-4">Scrum, Kanban, SAFe 6.0, PI Planning, Jira (admin), Azure DevOps, Confluence, CI/CD collaboration, Coaching, Conflict resolution.</p>
          <p className="text-gray-700">Certifications: SAFe® 6.0 (active to 2026), CSM (to 2027), CSPO (to 2027)</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700">📍 Calgary, AB • ✉️ payalukani92@gmail.com • 📞 +1-647-327-3249</p>
        <div className="mt-4">
        <button className="px-6 py-3 rounded-md font-semibold text-base bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
        <a href="https://linkedin.com/in/payal-desai-safe" target="_blank">LinkedIn</a>
            </button>
        </div>
      </section>

        <footer className="border-t mt-16 bg-white">
          <div className="container py-6 text-sm text-slate-600">
            © {new Date().getFullYear()} Payal Desai. All rights reserved.
          </div>
        </footer>
        </div>
  );
}

export default App;
