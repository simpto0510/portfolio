"use client"
import { motion } from "framer-motion"

const DATA = {
  name: "M R Khan",
  title: "Electronics & Telecommunication Engineer",
  subtitle: "Machine Learning | MLOps | VLSI / Physical Design",
  location: "Dhaka, Bangladesh",
  email: "shikta0510@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/m-r-khan-a78a6b299/",
    github: "https://github.com/simpto0510",
    resume: "/M_R_Khan_CV.pdf",
  },
  summary:
    "Electronics and Telecommunication Engineering undergraduate with strong hands-on experience in ML (PyTorch/TensorFlow), MLOps, and VLSI/physical design (Cadence Virtuoso). Comfortable building end-to-end AI pipelines, training models, and working with EDA flows. Eager to contribute to fast-paced AI or semiconductor-focused teams.",
  education: {
    degree: "B.Sc. in Electronics & Telecommunication Engineering",
    school: "Chittagong University of Engineering and Technology (CUET)",
    year: "2025",
    gpa: "CGPA 3.56",
    city: "Chittagong, Bangladesh",
  },
  projects: [
    {
      title: "AI-Driven Question Answering – SemEval 2024 (Top 50/300+)",
      bullets: [
        "Led a 4-member team to design a tabular QA pipeline; boosted answer accuracy to 87% using SLM.",
        "Managed iterative model refinement with daily syncs using Python/PyTorch; tuned hyperparameters from evaluation feedback.",
      ],
      tags: ["Python", "PyTorch", "SLM", "DataBench", "SemEval"],
      link: "#",
    },
    {
      title: "3×8 CMOS Decoder (Cadence Virtuoso)",
      bullets: ["Designed schematic & layout and performed transient analysis in Virtuoso."],
      tags: ["Cadence Virtuoso", "CMOS", "DRC/LVS"],
      link: "#",
    },
    {
      title: "BhashaJog: Chatgaiya → Standard Bangla Translation",
      bullets: ["Built preprocessing + translation workflow using m2m-100 and NLP toolkits."],
      tags: ["NLP", "m2m-100", "HuggingFace"],
      link: "#",
    },
    {
      title: "Paraphraser-GAN (Re-implemented DivGAN)",
      bullets: ["Extended DivGAN for diverse Bangla paraphrase generation; code on GitHub."],
      tags: ["GAN", "NLP", "PyTorch"],
      link: "#",
    },
    {
      title: "Bearing Fault Prognostics",
      bullets: [
        "Built CNNs on vibration/sensor data to predict faults for maintenance scheduling; published in a peer-reviewed venue.",
      ],
      tags: ["CNN", "Signal Processing", "Predictive Maintenance"],
      link: "#",
    },
    {
      title: "Patch-Based Image Denoising with GAN",
      bullets: ["Explored fractal-inspired generators for multiscale detail recovery."],
      tags: ["GAN", "Image Denoising", "Fractals"],
      link: "#",
    },
    {
      title: "Hybrid Fractal-Inspired GAN for Real-Life Image Denoising (Thesis)",
      bullets: ["Integrated fractal expansion rules within a GAN generator to enhance multiscale detail recovery."],
      tags: ["GAN", "PyTorch", "Thesis"],
      link: "#",
    },
  ],
  involvement: [
    {
      role: "National Finalist, NASA Space Apps Challenge 2024",
      org: "CUET",
      desc: "Collaborated in a multidisciplinary team on data analysis, digital design, and prototyping to reach national finals.",
    },
    {
      role: "Organizing Secretary",
      org: "CUET Photographic Society",
      desc: "Managed budget/logistics for 6+ campus events; grew membership by 40%.",
    },
    {
      role: "Joint General Secretary",
      org: "Supply Chain & Business Alliance CUET",
      desc: "Liaised with firms (e.g., Shanta Asset Management) to secure internships & workshops.",
    },
  ],
  skills: {
    pillars: [
      {
        title: "Digital Design & Architecture",
        items: ["Verilog", "SystemVerilog", "Quartus Prime", "ModelSim-Altera"],
      },
      {
        title: "VLSI",
        items: ["Cadence Virtuoso (Schematic/Layout/ADE XL)", "Assura DRC/LVS/RCX", "Transient Analysis"],
      },
      { title: "Programming", items: ["Python (PyTorch, OpenCV, NLTK, scikit-learn)", "C/C++", "MATLAB"] },
      { title: "Machine Learning", items: ["Supervised Learning", "LLMs", "Deep Neural Networks", "OpenCV", "GenAI"] },
      { title: "EDA & Simulation", items: ["EDA Playground", "Logisim", "Proteus"] },
    ],
    tags: ["PyTorch", "TensorFlow", "MLOps", "Docker", "GitHub Actions", "Linux", "OpenCV", "Pandas", "NumPy"],
  },
}

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-12 md:py-16">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 font-display">{title}</h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  </section>
)

const Chip = ({ children }) => (
  <span className="inline-block rounded-full border px-3 py-1 text-sm leading-6 mr-2 mb-2">{children}</span>
)

const Card = ({ title, children, footer }) => (
  <motion.div
    className="rounded-2xl border p-5 md:p-6 shadow-sm hover:shadow-2xl transition-all bg-white/50 dark:bg-zinc-900/50 hover:border-white/70"
    whileHover={{ y: -4, rotateX: 1 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-xl md:text-2xl font-semibold font-display">{title}</h3>
    </div>
    <div className="mt-3 text-base text-zinc-700 dark:text-zinc-200 font-body">{children}</div>
    {footer && <div className="mt-4">{footer}</div>}
  </motion.div>
)

const Nav = () => (
  <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-zinc-800">
    <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between font-display">
      <a href="#top" className="font-extrabold text-lg">
        M R Khan
      </a>
      <div className="hidden md:flex items-center gap-6 text-base">
        {[
          ["Projects", "projects"],
          ["Education", "education"],
          ["Involvement", "involvement"],
          ["Skills", "skills"],
          ["Contact", "contact"],
        ].map(([label, id]) => (
          <a key={id} href={`#${id}`} className="hover:text-yellow-400 transition-colors">
            {label}
          </a>
        ))}
        <a href={DATA.links.resume} download className="hover:text-yellow-400 transition-colors">
          CV
        </a>
      </div>
      <div className="flex items-center gap-4 text-base">
        <a href={DATA.links.github} target="_blank" rel="noreferrer" className="hover:text-yellow-400">
          GitHub
        </a>
        <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-yellow-400">
          LinkedIn
        </a>
      </div>
    </div>
  </nav>
)

const Hero = () => (
  <header className="relative overflow-hidden" id="top">
    <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
          {DATA.name}
        </h1>
        <p className="mt-2 text-xl md:text-2xl font-semibold text-blue-100">{DATA.title}</p>
        <p className="text-blue-200">{DATA.subtitle}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm md:text-base">
          <a
            href={`mailto:${DATA.email}`}
            className="rounded-xl border px-4 py-2 hover:shadow-xl transition shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_25px_2px_rgba(255,255,255,.25)]"
          >
            Email me
          </a>
          <a
            href={DATA.links.resume}
            download
            className="rounded-xl border px-4 py-2 hover:shadow-xl transition shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_25px_2px_rgba(255,255,255,.25)]"
          >
            Download CV
          </a>
          <span className="text-blue-200">{DATA.location}</span>
        </div>
      </motion.div>
    </div>
  </header>
)

const Summary = () => (
  <Section id="summary" title="Summary">
    <p className="text-lg leading-relaxed font-body text-zinc-200">{DATA.summary}</p>
  </Section>
)

const Projects = () => (
  <Section id="projects" title="Projects">
    <div className="grid md:grid-cols-2 gap-6">
      {DATA.projects.map((p) => (
        <Card
          key={p.title}
          title={p.title}
          footer={
            <div className="flex flex-wrap mt-2">
              {p.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          }
        >
          <ul className="list-disc ml-5 space-y-2">
            {p.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
)

const Education = () => (
  <Section id="education" title="Education">
    <Card title={`${DATA.education.degree} — ${DATA.education.school}`}>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg mt-2">
        <span>{DATA.education.city}</span>
        <span>{DATA.education.year}</span>
        <span>{DATA.education.gpa}</span>
      </div>
    </Card>
  </Section>
)

const Involvement = () => (
  <Section id="involvement" title="Involvement">
    <div className="grid md:grid-cols-2 gap-6">
      {DATA.involvement.map((x, idx) => (
        <Card key={idx} title={`${x.role} — ${x.org}`}>
          <p>{x.desc}</p>
        </Card>
      ))}
    </div>
  </Section>
)

const Skills = () => (
  <Section id="skills" title="Skills">
    <div className="grid md:grid-cols-2 gap-6">
      {DATA.skills.pillars.map((cat) => (
        <Card key={cat.title} title={cat.title}>
          <div className="flex flex-wrap mt-2">
            {cat.items.map((it) => (
              <Chip key={it}>{it}</Chip>
            ))}
          </div>
        </Card>
      ))}
    </div>
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Also worked with</h3>
      <div className="flex flex-wrap">
        {DATA.skills.tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>
  </Section>
)

const Contact = () => (
  <Section id="contact" title="Contact">
    <Card title="Get in touch">
      <p className="text-lg text-zinc-800 dark:text-zinc-200">
        Open to internships and full-time roles in AI/ML, MLOps, and VLSI. The fastest way to reach me is via email.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${DATA.email}`}
          className="rounded-xl border px-4 py-2 hover:shadow-xl transition shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_25px_2px_rgba(255,255,255,.25)]"
        >
          Email
        </a>
        <a
          href={DATA.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border px-4 py-2 hover:shadow-xl transition shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_25px_2px_rgba(255,255,255,.25)]"
        >
          LinkedIn
        </a>
        <a
          href={DATA.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border px-4 py-2 hover:shadow-xl transition shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_25px_2px_rgba(255,255,255,.25)]"
        >
          GitHub
        </a>
      </div>
    </Card>
  </Section>
)

const Background = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#6d3cf5] via-[#4c58f7] to-[#2a73ff] animate-hue-slow" />
    <div
      className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-45 animate-float-slow"
      style={{ background: "radial-gradient(closest-side, rgba(167,139,250,0.9), transparent)" }}
    />
    <div
      className="absolute -bottom-48 -right-24 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-45 animate-float-slower"
      style={{ background: "radial-gradient(closest-side, rgba(56,189,248,0.9), transparent)" }}
    />
    <div
      className="absolute top-1/3 -right-32 h-[22rem] w-[22rem] rounded-full blur-3xl opacity-35 animate-float-slower"
      style={{ background: "radial-gradient(closest-side, rgba(244,114,182,0.9), transparent)" }}
    />
    <div
      className="absolute bottom-1/3 -left-32 h-[20rem] w-[20rem] rounded-full blur-3xl opacity-35 animate-float-slow"
      style={{ background: "radial-gradient(closest-side, rgba(34,197,94,0.9), transparent)" }}
    />
    <div
      className="absolute top-1/4 left-1/4 h-[12rem] w-[12rem] rounded-full blur-2xl opacity-25 animate-pulse"
      style={{ background: "radial-gradient(closest-side, rgba(255,215,0,0.8), transparent)", animationDuration: "4s" }}
    />
    <div
      className="absolute bottom-1/4 right-1/4 h-[14rem] w-[14rem] rounded-full blur-2xl opacity-25 animate-pulse"
      style={{
        background: "radial-gradient(closest-side, rgba(147,51,234,0.8), transparent)",
        animationDuration: "6s",
      }}
    />
    <div
      className="absolute top-1/6 left-1/6 h-4 w-4 rounded-full bg-white/30 animate-bounce"
      style={{ animationDuration: "3s", animationDelay: "0s" }}
    />
    <div
      className="absolute top-2/3 left-1/3 h-3 w-3 rounded-full bg-cyan-300/40 animate-bounce"
      style={{ animationDuration: "4s", animationDelay: "1s" }}
    />
    <div
      className="absolute top-1/2 right-1/6 h-5 w-5 rounded-full bg-purple-300/30 animate-bounce"
      style={{ animationDuration: "5s", animationDelay: "2s" }}
    />
    <div
      className="absolute bottom-1/6 left-2/3 h-2 w-2 rounded-full bg-yellow-300/50 animate-bounce"
      style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
    />
    <div
      className="absolute top-1/5 right-1/5 w-16 h-16 border border-white/20 rotate-45 animate-spin"
      style={{ animationDuration: "20s" }}
    />
    <div
      className="absolute bottom-1/5 left-1/5 w-12 h-12 border-2 border-cyan-300/30 animate-spin"
      style={{ animationDuration: "15s", animationDirection: "reverse" }}
    />
    <div
      className="absolute top-2/5 left-1/2 w-8 h-8 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rotate-12 animate-pulse"
      style={{ animationDuration: "7s" }}
    />
    <div
      className="absolute inset-0 opacity-[0.07] animate-move-lines"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.8), rgba(255,255,255,0.8) 2px, transparent 2px, transparent 12px)",
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.05] animate-move-lines"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.6), rgba(255,255,255,0.6) 1px, transparent 1px, transparent 20px)",
        animationDuration: "30s",
        animationDirection: "reverse",
      }}
    />
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.5) 2px, transparent 2px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.5) 2px, transparent 2px)",
        backgroundSize: "60px 60px",
      }}
    />
    <div
      className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 rotate-[-2deg] origin-top-left animate-pulse"
      style={{ animationDuration: "8s" }}
    />
    <div
      className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-bl-full animate-pulse"
      style={{ animationDuration: "10s" }}
    />
    <div
      className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-tr-full animate-pulse"
      style={{ animationDuration: "12s" }}
    />
    <div
      className="absolute top-0 left-0 w-full h-full opacity-10"
      style={{
        background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
        animation: "wave 8s ease-in-out infinite",
      }}
    />
  </div>
)

export default function App() {
  return (
    <div className="min-h-screen text-white font-body">
      <Background />
      <Nav />
      <Hero />
      <main>
        <Summary />
        <Projects />
        <Education />
        <Involvement />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t mt-10 border-zinc-700">
        <div className="max-w-5xl mx-auto px-4 py-8 text-sm text-zinc-300">
          © {new Date().getFullYear()} {DATA.name}. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
