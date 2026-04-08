import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#A98B76] text-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px bg-white/40" />
          <Heart className="w-6 h-6" fill="white" />
          <div className="w-12 h-px bg-white/40" />
        </div>

        <h3 className="text-3xl font-serif mb-4">Thank You</h3>

        <p className="text-white/90 mb-8 leading-relaxed">
          We can't wait to celebrate this special day with you. Your presence means the world to us,
          and we look forward to creating beautiful memories together.
        </p>

        <div className="space-y-2 text-white/70">
          <p>Sarah & James</p>
          <p>October 15, 2026</p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60">
            Made with love and care
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
