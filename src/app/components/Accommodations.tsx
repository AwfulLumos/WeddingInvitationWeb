import { motion } from "motion/react";
import { useInView } from "./useInView";
import { HOTELS } from "../../constants";
import { Hotel, MapPin, Phone, ExternalLink } from "lucide-react";

export function Accommodations() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-[#A98B76] mb-6">
            Accommodations
          </h2>
          <div className="w-24 h-px bg-[#BFA28C] mx-auto mb-4" />
          <p className="text-[#6b6456] text-lg max-w-2xl mx-auto">
            We've reserved room blocks at these nearby hotels for your convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {HOTELS.map((hotel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#F3E4C9] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#BABF94] rounded-full flex items-center justify-center flex-shrink-0">
                  <Hotel className="w-6 h-6 text-[#4a3f35]" />
                </div>
                <h3 className="text-xl font-serif text-[#4a3f35]">
                  {hotel.name}
                </h3>
              </div>

              <div className="space-y-3 text-[#6b6456]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#A98B76]" />
                  <div>
                    <p className="text-sm">{hotel.address}</p>
                    <p className="text-xs text-[#A98B76] font-medium mt-1">
                      {hotel.distance}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#A98B76]" />
                  <a
                    href={`tel:${hotel.phone.replace(/\D/g, '')}`}
                    className="text-sm hover:text-[#A98B76] transition-colors"
                  >
                    {hotel.phone}
                  </a>
                </div>

                <div className="pt-3 border-t border-[#BFA28C]/30">
                  <p className="text-sm italic text-[#4a3f35] mb-3">
                    {hotel.specialRate}
                  </p>
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#A98B76] hover:text-[#4a3f35] transition-colors"
                  >
                    Book Now
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-[#BABF94]/20 rounded-lg p-8 text-center"
        >
          <h3 className="text-xl font-serif text-[#4a3f35] mb-3">
            Travel & Transportation
          </h3>
          <p className="text-[#6b6456] leading-relaxed max-w-2xl mx-auto">
            The venue is easily accessible via car. We recommend using ride-sharing 
            services like Uber or Lyft if you plan to enjoy cocktails. Complimentary 
            parking and valet service will be available at the venue.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
