import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-slate-800 p-1.5 rounded-lg">
              <Terminal className="text-slate-400 w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              Beyond<span className="text-emerald-500">Testing</span>
            </span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Beyond Testing Standards. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
