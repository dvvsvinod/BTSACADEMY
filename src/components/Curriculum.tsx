import { motion } from 'motion/react';
import { COURSES } from '../constants';
import { CheckCircle2, Clock, BarChart } from 'lucide-react';

export default function Curriculum() {
  return (
    <section id="curriculum" className="bg-slate-900 py-24 text-white">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Deep Dive Curriculum</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our modules are designed to take you from the basics to advanced architectural patterns.
            Explore what you'll master in each program.
          </p>
        </div>

        <div className="space-y-12">
          {COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700/50"
            >
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-500/20">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{course.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map(tag => (
                      <span key={tag} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-lg text-sm font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.modules.map((module, mIdx) => (
                    <div key={mIdx} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                      <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
                        <span className="text-slate-500 text-xs font-mono">0{mIdx + 1}</span>
                        {module.title}
                      </h4>
                      <ul className="space-y-3">
                        {module.lessons.map((lesson, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="bg-emerald-600/10 p-6 rounded-2xl border border-emerald-500/20 flex flex-col justify-center items-center text-center">
                    <BarChart className="w-8 h-8 text-emerald-500 mb-4" />
                    <h4 className="font-bold mb-2">Capstone Project</h4>
                    <p className="text-sm text-slate-400">Build a production-ready framework from scratch.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
