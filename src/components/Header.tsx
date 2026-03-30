import { useState } from 'react';
import { Linkedin, Github, GraduationCap, Menu, X, Circle } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: '01_About', href: '#about' },
    { name: '02_Research', href: '#research' },
    { name: '03_Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/jchan0', label: 'LinkedIn' },
    { icon: <Github size={18} />, href: 'https://github.com/JonChan0', label: 'GitHub' },
    { icon: <GraduationCap size={18} />, href: 'https://scholar.google.com/citations?user=hwdg8aQAAAAJ&hl=en&authuser=1', label: 'Scholar' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo / Name */}
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-[var(--color-accent)] rounded-full animate-pulse"></div>
            <span className="text-lg font-bold font-mono tracking-tighter uppercase">
              Jonathan H Chan
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 items-center h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="h-full flex items-center px-6 text-xs font-mono font-bold uppercase hover:bg-black hover:text-white transition-colors border-l border-slate-200 last:border-r"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials / Status */}
          <div className="hidden md:flex items-center gap-4 pl-6 border-l-2 border-black h-full">
            <span className="font-mono text-[10px] uppercase text-slate-500 mr-2 flex items-center gap-1">
              <Circle size={8} fill="#22c55e" className="text-green-500" />
              Online
            </span>

            <div className="flex bg-slate-100 rounded-sm p-1 gap-1">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="p-1.5 hover:bg-white hover:shadow-sm text-slate-600 hover:text-black transition-all rounded-sm border border-transparent hover:border-slate-300" aria-label={link.label}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 border border-black hover:bg-black hover:text-white transition-colors" onClick={toggleMenu}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-black shadow-xl">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-6 py-4 text-sm font-mono font-bold uppercase border-b border-slate-100 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex justify-center gap-6 p-6 bg-slate-50">
              {socialLinks.map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[var(--color-accent)]">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
