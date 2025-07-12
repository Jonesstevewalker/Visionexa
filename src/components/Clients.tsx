import React from 'react';

const Clients = () => {
  const clients = [
    { name: "TechCorp", logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
    { name: "InnovateLab", logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
    { name: "FutureVision", logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
    { name: "DigitalHub", logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
    { name: "CreativeSpace", logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
    { name: "NextGen Solutions", logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
    { name: "BrandForce", logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" },
    { name: "MarketPro", logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=200&h=100" }
  ];

  return (
    <section id="clients" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Clients</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by leading brands and innovative companies worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-none mx-8 w-48 h-24 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto mb-2 group-hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-gray-600 font-bold text-lg">
                      {client.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;