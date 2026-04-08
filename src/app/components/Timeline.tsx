import { motion } from "motion/react";
import { useInView } from "./useInView";
import { TIMELINE } from "../../constants";
import { Clock } from "lucide-react";

export function Timeline() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-[#A98B76] mb-6">
            Event Timeline
          </h2>
          <div className="w-24 h-px bg-[#BFA28C] mx-auto mb-4" />
          <p className="text-[#6b6456] text-lg max-w-2xl mx-auto">
            Here's what to expect on our special day
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#BFA28C] transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#BABF94] rounded-full border-4 border-white transform md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="bg-[#F3E4C9] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-2 text-[#A98B76] justify-start md:justify-start">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium text-lg">{item.time}</span>
                    </div>
                    <h3 className="text-2xl font-serif text-[#4a3f35] mb-2">
                      {item.event}
                    </h3>
                    <p className="text-[#6b6456]">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
