import { motion } from 'framer-motion';
import { Target, Zap, BarChart3, Users, ChevronRight } from 'lucide-react';

const About = () => {
  const valueProps = [
    {
      id: "01",
      icon: <Target className="text-[var(--color-accent)]" size={20} />,
      title: "Biomarker Discovery",
      description: "Leveraging statistical genetic approaches to identify novel biomarkers of risk and disease progression."
    },
    {
      id: "02",
      icon: <Users className="text-black" size={20} />,
      title: "Patient Risk Stratification",
      description: "Developing polygenic risk scores and integrated multifactorial models to identify patient sub-populations with distinct risk profiles."
    },
    {
      id: "03",
      icon: <BarChart3 className="text-[var(--color-accent)]" size={20} />,
      title: "Machine Learning",
      description: "Implementing machine learning approaches to predict disease risk and severity and infer disease insights."
    },
    {
      id: "04",
      icon: <Zap className="text-black" size={20} />,
      title: "Clinical Genomics",
      description: "Engaging with clinicians to enable translation of polygenic risk scores and multifactorial models into clinical practice."
    }
  ];

  return (
    <section id="about" className="section-container bg-white">
      <div className="absolute left-0 top-0 w-8 h-full border-r border-black hidden md:block"></div>

      <div className="max-w-7xl mx-auto w-full px-4 md:pl-16 min-h-screen flex flex-col justify-center py-20">

        <div className="mb-12 border-b border-black pb-4 flex justify-between items-end">
          <h2 className="text-4xl font-bold uppercase tracking-tighter">About</h2>
        </div>

        <div className="flex flex-col gap-12 w-full">

          {/* Top Section: Mission Statement */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-[var(--color-bg)] p-8 border border-black relative"
            >
              <div className="absolute top-0 right-0 p-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
              </div>

              <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">Mission Statement</h3>
              <p className="text-xl md:text-2xl font-bold leading-tight mb-6">
                Translating Human Genetic Insights into <span className="underline decoration-4 decoration-[var(--color-accent)]">Industry Impact</span>.
              </p>

              <p className="text-sm font-mono text-slate-700 mb-6 leading-relaxed">
                As a final-year PhD student at the University of Oxford, I develop integrative models of patient risk and progression for one of the most common inherited heart diseases, hypertrophic cardiomyopathy.
              </p>

            </motion.div>
          </div>

          {/* Bottom Section: Spec Sheet / Value Props */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {valueProps.map((prop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-slate-300 hover:border-black p-5 bg-white transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="font-mono text-xs text-slate-400 group-hover:text-[var(--color-accent)] transition-colors">{prop.id}</span>
                    {prop.icon}
                  </div>
                  <h4 className="font-bold text-base mb-2 uppercase flex items-center gap-2">
                    {prop.title}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-2 group-hover:ml-0" />
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-mono">
                    {prop.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;