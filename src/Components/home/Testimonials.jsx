import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatima Rahman",
    role: "Working Mother",
    image: "https://i.pravatar.cc/150?u=fatima",
    feedback:
      "Care.io helped me find a reliable babysitter when I needed one most. The peace of mind they provide is priceless. Very professional service!",
    stars: 5,
  },
  {
    name: "Jahid Hasan",
    role: "Son & Caregiver",
    image: "https://i.pravatar.cc/150?u=jahid",
    feedback:
      "The elderly care services are top-notch. My parents are happy, safe, and well-cared for at home. It has changed our lives for the better.",
    stars: 5,
  },
  {
    name: "Sadia Akter",
    role: "Family Coordinator",
    image: "https://i.pravatar.cc/150?u=sadia",
    feedback:
      "Booking was incredibly easy and the caretakers are excellent. I highly recommend this to anyone looking for trusted home care.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 mb-10 p-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">
            Success Stories
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Trusted by Thousands of Families
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Do not just take our word for it. Here is what families across the country are saying about our care services.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, index) => (
                    <Star key={index} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 -z-0" />
                  <p className="text-slate-700 leading-relaxed italic relative z-10 mb-8">
                    &quot;{t.feedback}&quot;
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;