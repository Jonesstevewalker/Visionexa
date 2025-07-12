import React from 'react';
import { ExternalLink } from 'lucide-react';

const Works = () => {
  const works = [
    {
      title: "E-commerce Website Redesign",
      category: "Website Management",
      description: "Complete redesign and optimization of an online store resulting in 150% increase in conversions.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Web Design", "UX/UI", "E-commerce"]
    },
    {
      title: "Local Business SEO Campaign",
      category: "SEO",
      description: "Boosted local search rankings for a restaurant chain, achieving #1 position for key terms.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Local SEO", "Google My Business", "Content Strategy"]
    },
    {
      title: "Product Launch Video Series",
      category: "Video Editing",
      description: "Created engaging video content for tech startup product launch, generating 2M+ views.",
      image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Video Production", "Motion Graphics", "Storytelling"]
    },
    {
      title: "Brand Identity Design",
      category: "Graphic Designing",
      description: "Developed complete brand identity for fintech startup including logo, guidelines, and collateral.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Brand Design", "Logo Design", "Brand Guidelines"]
    },
    {
      title: "Social Media Growth Strategy",
      category: "Social Media Management",
      description: "Grew Instagram following from 5K to 100K+ in 6 months with strategic content and engagement.",
      image: "https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Instagram Growth", "Content Strategy", "Community Management"]
    },
    {
      title: "Corporate Website Overhaul",
      category: "Website Management",
      description: "Modernized corporate website with improved user experience and mobile responsiveness.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Corporate Web", "Responsive Design", "Performance Optimization"]
    }
  ];

  return (
    <section id="works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">Our Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful projects that have driven real results for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {work.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {work.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;