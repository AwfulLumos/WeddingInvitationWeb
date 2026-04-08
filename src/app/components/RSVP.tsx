import { motion } from "motion/react";
import { useInView } from "./useInView";
import { useState } from "react";
import { Check, AlertCircle, Loader2 } from "lucide-react";
import { MAX_GUESTS_PER_RSVP } from "../../constants";

interface FormErrors {
  name?: string;
  email?: string;
  guests?: string;
}

export function RSVP() {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "yes",
    dietary: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formState.name.trim().length < 2) {
      newErrors.name = "Please enter a valid name";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formState.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const guestCount = parseInt(formState.guests);
    if (isNaN(guestCount) || guestCount < 1) {
      newErrors.guests = "At least 1 guest required";
    } else if (guestCount > MAX_GUESTS_PER_RSVP) {
      newErrors.guests = `Maximum ${MAX_GUESTS_PER_RSVP} guests allowed`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        email: "",
        guests: "1",
        attending: "yes",
        dietary: "",
        message: ""
      });
      setErrors({});
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormState({ ...formState, [field]: value });
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-[#BABF94]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
            RSVP
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-6" />
          <p className="text-white/90">
            Please let us know if you can join us for our special day
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg space-y-6"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-[#4a3f35] mb-2 font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={formState.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.name 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-[#BFA28C] focus:ring-[#A98B76]"
              }`}
              placeholder="John & Jane Doe"
              disabled={isSubmitting || submitted}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <motion.p
                id="name-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </motion.p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-[#4a3f35] mb-2 font-medium">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={formState.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                errors.email 
                  ? "border-red-500 focus:ring-red-500" 
                  : "border-[#BFA28C] focus:ring-[#A98B76]"
              }`}
              placeholder="your@email.com"
              disabled={isSubmitting || submitted}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <motion.p
                id="email-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-600 flex items-center gap-1"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </motion.p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="attending" className="block text-[#4a3f35] mb-2 font-medium">
                Will you attend? <span className="text-red-500">*</span>
              </label>
              <select
                id="attending"
                value={formState.attending}
                onChange={(e) => handleInputChange("attending", e.target.value)}
                className="w-full px-4 py-3 border border-[#BFA28C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A98B76] transition-all"
                disabled={isSubmitting || submitted}
              >
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
            </div>

            <div>
              <label htmlFor="guests" className="block text-[#4a3f35] mb-2 font-medium">
                Number of Guests <span className="text-red-500">*</span>
              </label>
              <input
                id="guests"
                type="number"
                min="1"
                max={MAX_GUESTS_PER_RSVP}
                value={formState.guests}
                onChange={(e) => handleInputChange("guests", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all ${
                  errors.guests 
                    ? "border-red-500 focus:ring-red-500" 
                    : "border-[#BFA28C] focus:ring-[#A98B76]"
                }`}
                disabled={isSubmitting || submitted}
                aria-invalid={!!errors.guests}
                aria-describedby={errors.guests ? "guests-error" : undefined}
              />
              {errors.guests && (
                <motion.p
                  id="guests-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-600 flex items-center gap-1"
                >
                  <AlertCircle className="w-4 h-4" />
                  {errors.guests}
                </motion.p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="dietary" className="block text-[#4a3f35] mb-2 font-medium">
              Dietary Restrictions
            </label>
            <input
              id="dietary"
              type="text"
              value={formState.dietary}
              onChange={(e) => handleInputChange("dietary", e.target.value)}
              className="w-full px-4 py-3 border border-[#BFA28C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A98B76] transition-all"
              placeholder="Vegetarian, vegan, gluten-free, allergies..."
              disabled={isSubmitting || submitted}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-[#4a3f35] mb-2 font-medium">
              Special Requests
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-[#BFA28C] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A98B76] transition-all resize-none"
              placeholder="Any other information we should know?"
              disabled={isSubmitting || submitted}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: isSubmitting || submitted ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting || submitted ? 1 : 0.98 }}
            disabled={isSubmitting || submitted}
            className={`w-full py-4 rounded-lg transition-all relative overflow-hidden font-medium ${
              submitted
                ? "bg-green-600 text-white"
                : isSubmitting
                ? "bg-[#A98B76]/70 text-white cursor-not-allowed"
                : "bg-[#A98B76] text-white hover:bg-[#8f765f]"
            }`}
          >
            {submitted ? (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                RSVP Submitted Successfully!
              </motion.span>
            ) : isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </span>
            ) : (
              "Submit RSVP"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
