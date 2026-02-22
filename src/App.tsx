import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import RegistrationForm from './components/RegistrationForm';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Curriculum />
        <Testimonials />
        <RegistrationForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
