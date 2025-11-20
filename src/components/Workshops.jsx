import { motion } from "framer-motion";
import { Calendar, Clock, Users } from "lucide-react";

const workshops = [
  {
    title: "Hand-building Basics",
    desc: "A gentle introduction to pinch, coil, and slab techniques.",
    date: "Every Sat",
    time: "10:00 AM",
    seats: 8,
  },
  {
    title: "Wheel-Throwing Starter",
    desc: "Learn centering, pulling walls, and shaping simple forms.",
    date: "Every Sun",
    time: "2:00 PM",
    seats: 6,
  },
  {
    title: "Glazing & Finishing",
    desc: "Explore surface, glazing, and firing basics for a refined look.",
    date: "Twice monthly",
    time: "5:30 PM",
    seats: 10,
  },
];

export default function Workshops() {
  return (
    <section id="workshops" className="relative py-24" style={{ background: "#FAF6EE" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#6B4F3B]">Workshops</h2>
          <p className="mt-3 text-[#7A614D] max-w-prose">Calm, small-group sessions designed to help you unwind while learning foundational clay skills.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-[#8B5E3C22] bg-white/70 backdrop-blur p-5 shadow-sm"
            >
              <div className="text-lg font-medium text-[#6B4F3B]">{w.title}</div>
              <div className="mt-2 text-[#7A614D]">{w.desc}</div>
              <div className="mt-4 flex items-center gap-4 text-sm text-[#6B4F3B]">
                <div className="inline-flex items-center gap-2"><Calendar size={16}/> {w.date}</div>
                <div className="inline-flex items-center gap-2"><Clock size={16}/> {w.time}</div>
                <div className="inline-flex items-center gap-2"><Users size={16}/> {w.seats} seats</div>
              </div>
              <div className="mt-5">
                <a href="#booking" className="inline-block rounded-full bg-[#6B4F3B] text-[#F5F0E6] px-4 py-2 text-sm hover:bg-[#5d4634] transition-colors">Reserve</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
