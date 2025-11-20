import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="booking" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#8B5E3C22] bg-[#6B4F3B] text-[#F5F0E6] p-10 shadow-xl"
        >
          <h3 className="text-3xl font-semibold tracking-tight">Ready to get your hands in clay?</h3>
          <p className="mt-3 opacity-90">Choose a date that works for you. We’ll provide everything else.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#contact" className="rounded-full bg-white text-[#6B4F3B] px-6 py-3 text-sm font-medium hover:bg-[#F5F0E6] transition-colors">Ask a question</a>
            <a href="#workshops" className="rounded-full bg-[#8B5E3C] text-[#F5F0E6] px-6 py-3 text-sm font-medium hover:bg-[#7a5334] transition-colors">See upcoming dates</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
