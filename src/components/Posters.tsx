import { useRef, useState } from 'react';
import { ExternalLink, FileImage, ChevronLeft, ChevronRight } from 'lucide-react';

const posters = [
  {
    id: "ASHG_2025",
    title: "American Society for Human Genetics",
    description: "Leveraged statistical genetics to prioritise risk factors and biomarkers for hypertrophic cardiomyopathy.",
    image: "/docs/ASHG_Poster_D5_thumb.png",
    link: "/docs/ASHG_Poster_D5.png",
    orientation: 'landscape',
    size: "4.2MB"
  },
  {
    id: "BSCR_2025",
    title: "British Society for Cardiovascular Research",
    description: "Identified known and novel plasma protein biomarkers with utility for risk and severity prediction in hypertrophic cardiomyopathy.",
    image: "/docs/BSCR_Poster_D2_thumb.png",
    link: "/docs/BSCR_Poster_D2.png",
    orientation: 'landscape',
    size: "20.2MB"
  },
  {
    id: "ISHR_2025",
    title: "International Society for Heart Research",
    description: "Identified associations between rare sarcomeric mutations and endophenotypes of worse disease severity in hypertrophic cardiomyopathy. ",
    image: "/docs/ISHR_Poster_D3_thumb.png",
    link: "/docs/ISHR_Poster_D3.png",
    orientation: 'portrait',
    size: "27.9MB"
  },
  {
    id: "GeL_2024",
    title: "Genomics England",
    description: "Integrated common and rare genetics for risk prediction in hypertrophic cardiomyopathy in the UK Biobank and Hypertrophic Cardiomyopathy Registry.",
    image: "/docs/GeL_Poster_D5_thumb.png",
    link: "/docs/GeL_Poster_D5.png",
    orientation: 'portrait',
    size: "15.9MB"
  }
];

const Posters = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setCurrentIndex(index);
    }
  };

  return (
    <section id="research" className="section-container bg-[var(--color-bg)] text-black">
      {/* Background Grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-[1600px] mx-auto w-full px-4 flex flex-col justify-center h-full relative z-10 py-12 md:py-0">

        <div className="mb-4 md:mb-8 flex items-baseline justify-between border-b-2 border-black pb-2">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Research</h2>
          <span className="font-mono text-xs hidden sm:inline-block text-slate-600">DIR: /DOCS/POSTERS</span>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all hidden md:flex items-center justify-center -ml-4 lg:-ml-12"
            aria-label="Previous poster"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all hidden md:flex items-center justify-center -mr-4 lg:-mr-12"
            aria-label="Next poster"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scroll Area */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar w-full"
          >
            {posters.map((poster, index) => (
              <div
                key={index}
                className="min-w-full w-full flex justify-center items-center snap-center px-4"
              >
                <div className={`panel-industrial relative flex flex-col md:flex-row gap-8 max-w-5xl w-full
                  ${poster.orientation === 'landscape' ? '' : ''}`}
                >

                  {/* Image Section */}
                  <div className="w-full md:w-2/3 bg-slate-100 border border-slate-200 p-4 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-black text-white text-[10px] uppercase font-mono px-2 py-1">
                        Fig. {index + 1}
                      </span>
                    </div>
                    <img
                      src={poster.image}
                      alt={poster.title}
                      className="max-h-[300px] md:max-h-[500px] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info Section */}
                  <div className="w-full md:w-1/3 flex flex-col justify-between">
                    <div>
                      <div className="mb-4 border-b border-black pb-2">
                        <span className="font-mono text-xs uppercase text-slate-500 block mb-1">Filename</span>
                        <span className="font-mono text-sm font-bold flex items-center gap-2">
                          <FileImage size={14} /> {poster.id}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold uppercase leading-tight mb-4">{poster.title}</h3>
                      <p className="text-sm font-mono text-slate-600 mb-6 leading-relaxed">
                        {poster.description}
                      </p>

                      <div className="space-y-2 font-mono text-xs text-slate-500 mb-6">
                        <div className="flex justify-between">
                          <span>Size:</span>
                          <span className="text-black">{poster.size}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Orientation:</span>
                          <span className="text-black capitalize">{poster.orientation}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={poster.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-3 bg-black text-white text-xs font-mono font-bold uppercase hover:bg-[var(--color-accent)] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-y-1"
                    >
                      <span>Download File</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {posters.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    left: i * scrollRef.current.clientWidth,
                    behavior: 'smooth'
                  });
                }
              }}
              className={`w-3 h-3 border border-black transition-colors ${i === currentIndex ? 'bg-black' : 'bg-transparent hover:bg-black/50'}`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === currentIndex}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Posters;
