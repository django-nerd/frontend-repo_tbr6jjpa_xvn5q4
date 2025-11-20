import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="aspect-[4/5] rounded-3xl overflow-hidden border border-[#8B5E3C22] shadow-xl"
          style={{ background: "#EFE7DA" }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM2MjQzMTR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </motion.div>

        <div>
          <h3 className="text-3xl font-semibold tracking-tight text-[#6B4F3B]">A studio for slow making</h3>
          <p className="mt-4 text-[#7A614D] leading-relaxed">
            We believe craft is a way to reconnect with your senses. Our workshops are warm, welcoming spaces where you can explore clay at your own pace, guided by experienced practitioners.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { k: "8+ years", v: "teaching" },
              { k: "300+", v: "students" },
              { k: "Small groups", v: "6–10 people" },
              { k: "Mindful", v: "practice" },
            ].map((i, idx) => (
              <div key={idx} className="rounded-2xl border border-[#8B5E3C22] bg-[#FAF6EE] p-4">
                <div className="text-[#6B4F3B] font-medium">{i.k}</div>
                <div className="text-[#7A614D] text-sm">{i.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
