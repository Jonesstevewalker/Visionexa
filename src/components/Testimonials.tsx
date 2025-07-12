import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp",
      position: "CEO",
      content: "VisionExa transformed our digital presence completely. Their SEO strategies increased our organic traffic by 300% in just 6 months. Exceptional work!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "Michael Chen",
      company: "InnovateLab",
      position: "Marketing Director",
      content: "The video content they created for our product launch was phenomenal. It generated over 2 million views and significantly boosted our brand awareness.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "Emily Rodriguez",
      company: "FutureVision",
      position: "Founder",
      content: "Their social media management services helped us grow from 5K to 100K followers. The engagement rates are through the roof. Highly recommended!",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "David Thompson",
      company: "DigitalHub",
      position: "CTO",
      content: "VisionExa's website management service is top-notch. Our site performance improved dramatically, and the user experience is now seamless across all devices.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "Lisa Wang",
      company: "CreativeSpace",
      position: "Design Lead",
      content: "The graphic design work exceeded our expectations. The brand identity they created perfectly captures our vision and resonates with our target audience.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    },
    {
      name: "Robert Brown",
      company: "MarketPro",
      position: "VP Marketing",
      content: "Working with VisionExa has been a game-changer. Their comprehensive approach to digital marketing delivered results beyond our expectations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=150&h=150"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about their experience working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 p-8 border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 group-hover:scale-105 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-bold text-black group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  <p className="text-gray-500 text-sm font-semibold">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;