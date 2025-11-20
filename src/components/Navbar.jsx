import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full bg-white/60 backdrop-blur border border-brown/10 shadow-sm px-5 py-3"
             style={{
               background: "rgba(255,255,255,0.6)",
               borderColor: "#8B5E3C22"
             }}
        >
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#8B5E3C] text-[#F5F0E6] grid place-items-center font-semibold">CW</div>
            <span className="font-semibold tracking-tight text-[#6B4F3B]">Clay & Calm</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-[#6B4F3B]">
            <a href="#workshops" className="hover:text-[#8B5E3C] transition-colors">Workshops</a>
            <a href="#gallery" className="hover:text-[#8B5E3C] transition-colors">Gallery</a>
            <a href="#about" className="hover:text-[#8B5E3C] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#8B5E3C] transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#booking" className="hidden md:inline-block rounded-full bg-[#6B4F3B] text-[#F5F0E6] px-4 py-2 text-sm hover:bg-[#5d4634] transition-colors">Book a class</a>
            <button className="md:hidden p-2 rounded-full text-[#6B4F3B] hover:bg-[#00000008]">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
