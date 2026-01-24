import { Linkedin, Github, GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-slate-600 py-6 border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold tracking-tight font-mono text-black uppercase">Jonathan H Chan // Portfolio</h3>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jchan0" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[var(--color-accent)] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/JonChan0" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[var(--color-accent)] transition-colors">
                <Github size={18} />
              </a>
              <a href="https://scholar.google.com/citations?user=hwdg8aQAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[var(--color-accent)] transition-colors">
                <GraduationCap size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;