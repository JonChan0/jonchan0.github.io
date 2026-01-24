import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Posters from './components/Posters';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-[var(--color-bg)] text-black">
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Posters Section */}
        <Posters />

        {/* CV / Contact Section */}
        <section id="contact" className="section-container bg-white flex flex-col justify-center items-center px-4">
          {/* Grid Background */}
          <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tighter uppercase leading-[0.9]">
              Ready to <br /><span className="text-[var(--color-accent)]">Translate</span>
            </h2>

            <p className="text-xl font-mono text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed border-l-2 border-[var(--color-accent)] pl-6 text-center">
              Actively seeking opportunities in pharma/biotech. <br />
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="/docs/CV_JonathanChan.pdf"
                target="_blank"
                className="btn-industrial text-lg py-4 px-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-1 hover:shadow-none transition-all"
              >
                [ Download_CV.pdf ]
              </a>
              <a
                href="mailto:jonathan.chan0@protonmail.com"
                className="px-8 py-4 bg-white border-2 border-black text-black font-mono uppercase font-bold hover:bg-black hover:text-white transition-colors shadow-[6px_6px_0px_0px_rgba(255,81,0,1)] hover:translate-y-1 hover:shadow-none"
              >
                Connect_Via_Email
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;