import { motion } from "motion/react";
import { useInView } from "./useInView";
import { Calendar, MapPin, Clock } from "lucide-react";
import { WEDDING_DATE_STRING, WEDDING_DAY, CEREMONY_TIME, VENUE_NAME, VENUE_ADDRESS, VENUE_IMAGE } from "../../constants";

export function EventDetails() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const details = [
    {
      icon: Calendar,
      title: "Date",
      value: WEDDING_DATE_STRING,
      description: WEDDING_DAY
    },
    {
      icon: Clock,
      title: "Time",
      value: CEREMONY_TIME,
      description: "Ceremony begins promptly"
    },
    {
      icon: MapPin,
      title: "Venue",
      value: VENUE_NAME,
      description: VENUE_ADDRESS
    }
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-[#F3E4C9]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-[#A98B76] mb-6">
            Event Details
          </h2>
          <div className="w-24 h-px bg-[#BFA28C] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg text-center group hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block mb-6"
              >
                <div className="w-16 h-16 bg-[#BABF94] rounded-full flex items-center justify-center mx-auto">
                  <detail.icon className="w-8 h-8 text-[#4a3f35]" />
                </div>
              </motion.div>
              <h3 className="text-xl font-medium text-[#A98B76] mb-2">
                {detail.title}
              </h3>
              <p className="text-2xl text-[#4a3f35] font-serif mb-2">
                {detail.value}
              </p>
              <p className="text-[#6b6456]">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
        >
          <img
            src={VENUE_IMAGE}
            alt="Wedding venue garden"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
