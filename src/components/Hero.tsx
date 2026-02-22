import { motion } from 'motion/react';
import { ArrowRight, Code2, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-emerald-100 text-emerald-700 rounded-full">
            Elevate Your QA Career
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Beyond Testing <br />
            <span className="text-emerald-600 italic">Standards</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Master the art of test automation with our industry-leading curriculum. 
            We don't just teach tools; we build engineers who architect solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#courses"
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all group"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#curriculum"
              className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all"
            >
              View Curriculum
            </a>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {[
            {
              icon: <Code2 className="w-6 h-6 text-emerald-600" />,
              title: "Code-First Approach",
              desc: "Learn real programming patterns, not just record-and-playback shortcuts."
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
              title: "Industry Standards",
              desc: "Curriculum designed by SDETs from top-tier tech companies."
            },
            {
              icon: <Zap className="w-6 h-6 text-emerald-600" />,
              title: "Modern Tech Stack",
              desc: "Master Selenium, Playwright, Cypress, and API automation."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="bg-emerald-50 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
