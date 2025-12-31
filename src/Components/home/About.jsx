import React from "react";
import { ShieldCheck, Users, Clock, Heart } from "lucide-react"; // Using lucide-react for modern icons

const About = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Trusted Professionals",
      desc: "Every caregiver undergoes a rigorous 5-step background verification process."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Driven",
      desc: "Built by families, for families, ensuring empathy in every service we provide."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Availability",
      desc: "Last-minute care or long-term planning, we are here whenever you need us."
    }
  ];

  return (
    <section className="bg-white">
      <div className="bg-gray-100 p-6 rounded-2xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">
              About CARE.IO
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Making caregiving simple, safe, and <span className="text-primary">accessible.</span>
            </h3>
          </div>
          <div className="md:w-1/3">
            <p className="text-gray-600 text-lg leading-relaxed">
              We bridge the gap between professional caregivers and families in need of trusted support for children, elderly, and home health.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm  group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action (Optional) */}
        <div className="mt-20 p-10 bg-primary rounded-[3rem] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFFFFF" d="M45.7,-57.1C58.9,-49.2,69.1,-34.5,73.8,-18.4C78.4,-2.4,77.5,15.1,70,30.2C62.5,45.3,48.4,58.1,32.4,65.3C16.4,72.5,-1.5,74.2,-18.6,69.5C-35.6,64.8,-51.9,53.8,-62.4,38.9C-72.9,24,-77.6,5.3,-73.9,-11.4C-70.3,-28.1,-58.3,-42.7,-44.1,-50.3C-30,-57.9,-15,-58.5,0.7,-59.4C16.4,-60.3,32.6,-64.9,45.7,-57.1Z" transform="translate(100 100)" />
                </svg>
            </div>
            <h4 className="text-2xl font-bold mb-4 relative z-10">Ready to find the perfect carer?</h4>
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-xl hover:bg-slate-100 transition-all relative z-10">
                Get Started Today
            </button>
        </div>

      </div>
    </section>
  );
};

export default About;