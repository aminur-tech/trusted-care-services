"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      // Entrance Animation
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      
      // Hover Interaction
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
    >
      {/* Image with Scale Effect */}
      <div className="relative h-52 w-full overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />
        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-primary">
          {service.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500">
          {service.description}
        </p>

        <div className="mt-auto pt-6">
          <Link
            href={`/services/${service._id}`}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary-dark"
          >
            <span>View Details</span>
            <motion.span
              variants={{
                initial: { x: 0 },
                hover: { x: 5 }
              }}
              initial="initial"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.span>
          </Link>
        </div>
      </div>

      {/* Bottom Accent Border - Modern touch */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-blue-600"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ServiceCard;