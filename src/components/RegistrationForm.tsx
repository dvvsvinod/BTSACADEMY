import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Send, User, Mail, BookOpen, MessageSquare } from 'lucide-react';
import { COURSES } from '../constants';

type FormData = {
  name: string;
  email: string;
  course: string;
  message: string;
};

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form Submitted:', data);
    alert('Thank you for your interest! We will contact you shortly with the enrollment details.');
    reset();
  };

  return (
    <section id="register" className="py-24 bg-white">
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Start Your Journey</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ready to go beyond testing standards? Fill out the form below to register your interest. 
              Our team will reach out within 24 hours to discuss your goals and provide the next steps for enrollment.
            </p>
            
            <div className="space-y-6">
              {[
                "Personalized learning path assessment",
                "Access to our private Discord community",
                "Lifetime access to course recordings",
                "Direct mentorship from industry experts"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-emerald-100 p-1 rounded-full">
                    <Send className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email Address
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Interested Course
                </label>
                <select
                  {...register('course', { required: 'Please select a course' })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white appearance-none"
                >
                  <option value="">Select a course</option>
                  {COURSES.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
                {errors.course && <span className="text-red-500 text-xs mt-1">{errors.course.message}</span>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Additional Message
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all bg-white resize-none"
                  placeholder="Tell us about your current experience..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Submitting...' : 'Register Interest'}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
