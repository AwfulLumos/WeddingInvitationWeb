import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1765292783377-e2b769632228?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Happy couple holding a beautiful wedding bouquet in natural outdoor setting"
  },
  {
    src: "https://images.unsplash.com/photo-1769038946383-3d63eca45c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Romantic tree-lined path perfect for wedding photography"
  },
  {
    src: "https://images.unsplash.com/photo-1684243920725-956d93ff391a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Elegant wildflower wedding arrangements"
  },
  {
    src: "https://images.unsplash.com/photo-1629664868604-62efe151dfca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Classic rose bouquet for wedding ceremony"
  },
  {
    src: "https://images.unsplash.com/photo-1763623300947-06fca4753664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Couple embracing in enchanting forest setting"
  },
  {
    src: "https://images.unsplash.com/photo-1772404245994-200ca40c47fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    alt: "Beautiful outdoor wedding ceremony setup with chairs and decorations"
  }
];

export function Gallery() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage !== null) {
        setSelectedImage(null);
      }
    };

    if (selectedImage !== null) {
      document.addEventListener("keydown", handleEscape);
      // Focus close button when modal opens
      closeButtonRef.current?.focus();
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  // Handle arrow keys for navigation
  useEffect(() => {
    const handleArrowKeys = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : photos.length - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! < photos.length - 1 ? prev! + 1 : 0));
      }
    };

    document.addEventListener("keydown", handleArrowKeys);
    return () => document.removeEventListener("keydown", handleArrowKeys);
  }, [selectedImage]);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "prev") {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : photos.length - 1);
    } else {
      setSelectedImage(selectedImage < photos.length - 1 ? selectedImage + 1 : 0);
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-[#A98B76] mb-6">
            Gallery
          </h2>
          <div className="w-24 h-px bg-[#BFA28C] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#A98B76] transition-all"
              onClick={() => setSelectedImage(index)}
              aria-label={`View larger image: ${photo.alt}`}
              type="button"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300"
                loading="lazy"
                width="800"
                height="800"
              />
              <div className="absolute inset-0 bg-[#A98B76]/0 hover:bg-[#A98B76]/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery modal"
        >
          <button
            ref={closeButtonRef}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-white"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
            type="button"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-white"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            aria-label="Next image"
            type="button"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <motion.img
            key={selectedImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={photos[selectedImage].src}
            alt={photos[selectedImage].alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {photos.length}
          </div>
        </motion.div>
      )}
    </section>
  );
}
