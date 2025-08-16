import React from "react";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-600 via-purple-600 to-blue-600 text-white font-body">
      
      {/* Animated background blobs */}
      <div className="absolute -top-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-pink-400 blur-3xl opacity-40 animate-float-slower"></div>
      <div className="absolute -bottom-48 -right-24 h-[36rem] w-[36rem] rounded-full bg-yellow-400 blur-3xl opacity-40 animate-float"></div>
      <div className="absolute top-1/3 left-1/2 h-[20rem] w-[20rem] rounded-full bg-green-400 blur-3xl opacity-30 animate-float-slower"></div>
      <div className="absolute bottom-20 left-1/4 h-[18rem] w-[18rem] rounded-full bg-cyan-400 blur-3xl opacity-30 animate-float"></div>

      {/* Main content */}
      <header className="relative z-10 flex flex-col items-center justify-center text-center pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-display font-bold">M R Khan</h1>
        <p className="mt-4 text-xl md:text-2xl font-body">
          Electronics & Telecommunication Engineer
        </p>
        <p className="mt-2 text-lg opacity-90 font-body">
          Machine Learning | MLOps | VLSI / Physical Design
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="mailto:yourmail@example.com"
            className="px-6 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition"
          >
            Email me
          </a>
          <a
            href="/cv.pdf"
            download
            className="px-6 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition"
          >
            Download CV
          </a>
          <span className="px-6 py-2 text-lg">Dhaka, Bangladesh</span>
        </div>
      </header>

      {/* Example body section */}
      <section className="relative z-10 px-8 md:px-16 lg:px-32 pb-32">
        <h2 className="text-3xl font-display font-semibold mb-6">Summary</h2>
        <p className="text-lg font-body leading-relaxed opacity-90">
          Electronics and Telecommunication Engineering undergraduate with strong
          hands-on experience in ML (PyTorch/TensorFlow), MLOps, and
          VLSI/physical design (Cadence Virtuoso). Comfortable building end-to-end
          AI pipelines, training models, and working with EDA flows. Eager to
          contribute to fast-paced AI or semiconductor-focused teams.
        </p>
      </section>
    </div>
  );
}

export default App;
