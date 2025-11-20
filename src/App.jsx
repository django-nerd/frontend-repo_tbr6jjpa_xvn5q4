import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Workshops from "./components/Workshops";
import About from "./components/About";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#1F1B16]">
      <Navbar />
      <main>
        <Hero />
        <Workshops />
        <About />
        <CTA />
        <footer id="contact" className="border-t border-[#8B5E3C22] bg-[#FAF6EE]">
          <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-semibold text-[#6B4F3B]">Clay & Calm</div>
              <p className="mt-2 text-[#7A614D] text-sm max-w-xs">Mindful ceramics workshops in a warm studio setting. Slow down, make something beautiful.</p>
            </div>
            <div className="text-[#6B4F3B]">
              <div className="font-medium">Studio</div>
              <div className="mt-2 text-[#7A614D] text-sm">123 Kiln Street, Stoneware District</div>
              <div className="text-[#7A614D] text-sm">Open Thu–Sun</div>
            </div>
            <div className="text-[#6B4F3B]">
              <div className="font-medium">Contact</div>
              <a href="mailto:hello@clayandcalm.com" className="mt-2 block text-[#7A614D] text-sm hover:text-[#6B4F3B]">hello@clayandcalm.com</a>
              <a href="tel:+1234567890" className="block text-[#7A614D] text-sm hover:text-[#6B4F3B]">+1 (234) 567-890</a>
            </div>
          </div>
          <div className="py-6 text-center text-[#7A614D] text-xs">
            © {new Date().getFullYear()} Clay & Calm — All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App