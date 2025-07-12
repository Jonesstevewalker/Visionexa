import React from 'react';
import { Globe, Search, Video, Palette, Share2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Management",
      description: "Professional website development and ongoing maintenance to keep your digital presence optimized.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO",
      description: "Boost your search engine rankings and drive organic traffic with our comprehensive SEO strategies.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Editing",
      description: "Creative video production and editing services to engage your audience with compelling visual content.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Designing",
      description: "Eye-catching visual designs that communicate your brand message effectively across all platforms.",
      image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Social Media Management",
      description: "Strategic social media management to build your brand presence and engage with your target audience.",
      image: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to elevate your business to new heights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>
              
              <div className="p-8">
                <div className="text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;