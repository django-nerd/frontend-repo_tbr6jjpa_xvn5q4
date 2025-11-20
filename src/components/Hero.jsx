import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32">
      {/* background tint */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(120deg,#F5F0E6 0%, #EFE7DA 50%, #F5F0E6 100%)" }} />

      {/* textured circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 30%, #8B5E3C22, transparent 60%)",
          filter: "blur(6px)"
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute top-52 -left-24 h-[28rem] w-[28rem] rounded-full"
        style={{
          background: "radial-gradient(circle at 60% 60%, #6B4F3B22, transparent 60%)",
          filter: "blur(8px)"
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-semibold tracking-tight text-[#6B4F3B]"
          >
            Find your calm in clay
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg leading-relaxed text-[#7A614D] max-w-prose"
          >
            Small-group ceramics workshops focused on mindfulness, material, and making. Create beautiful, functional pieces while slowing down with guided practice.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#booking" className="rounded-full bg-[#6B4F3B] text-[#F5F0E6] px-6 py-3 text-sm font-medium hover:bg-[#5d4634] transition-colors">Book your seat</a>
            <a href="#workshops" className="rounded-full bg-[#E9E2D6] text-[#6B4F3B] px-6 py-3 text-sm font-medium hover:bg-[#e1d8c8] transition-colors">Explore workshops</a>
          </motion.div>

          {/* trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex items-center gap-6 text-[#7A614D]"
          >
            <div className="text-sm">
              <div className="font-semibold">Beginner friendly</div>
              <div className="opacity-70">No experience needed</div>
            </div>
            <div className="h-8 w-px bg-[#6B4F3B1A]" />
            <div className="text-sm">
              <div className="font-semibold">All materials included</div>
              <div className="opacity-70">Tools, clay, glazing</div>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#8B5E3C22]"
            style={{ background: "#EDE5D8" }}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #F5F0E660 10%, transparent 50%)" }} />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-2xl border border-[#8B5E3C22] p-4 shadow-md"
          >
            <div className="text-[#6B4F3B] font-medium">Weekend Wheel-Throwing</div>
            <div className="text-[#7A614D] text-sm">6 seats • 3 hours</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
