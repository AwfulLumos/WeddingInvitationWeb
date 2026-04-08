import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Heart } from "lucide-react";

export function OurStory() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <Heart className="w-12 h-12 text-[#A98B76]" fill="#A98B76" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif text-[#A98B76] mb-6">
            Our Story
          </h2>
          <div className="w-24 h-px bg-[#BFA28C] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6 text-[#4a3f35]">
            <p className="leading-relaxed">
              Our love story began on a warm summer evening in 2020, when we both reached for the last coffee at a local café.
              What started as a friendly conversation over shared coffee turned into hours of laughter and connection.
            </p>
            <p className="leading-relaxed">
              From that day forward, we've shared countless adventures, supported each other through challenges,
              and built a love that grows stronger with each passing day. Now, we're ready to start the greatest adventure of all.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1765292784481-3f791575ce9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Couple holding hands"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
