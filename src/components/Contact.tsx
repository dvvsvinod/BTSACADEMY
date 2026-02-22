import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Have questions about the curriculum or need help choosing the right course? 
              Our advisors are here to help you navigate your learning journey.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                  <Mail className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Email Us</p>
                  <p className="text-xl font-medium">hello@beyondtesting.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                  <Phone className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Call Us</p>
                  <p className="text-xl font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="bg-slate-800 p-4 rounded-2xl group-hover:bg-emerald-600 transition-colors">
                  <MapPin className="w-6 h-6 text-emerald-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-xl font-medium">Tech Hub, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-emerald-600 transition-all hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 p-8 md:p-12 rounded-3xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-8">Quick Inquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input type="text" placeholder="First Name" className="w-full bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <input type="text" placeholder="Last Name" className="w-full bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-slate-900 border border-slate-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none resize-none"></textarea>
              <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl hover:bg-emerald-700 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
