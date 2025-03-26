
import React from 'react';
import { Book, Heart, Home, School } from 'lucide-react';
import AnimatedIcon from '@/components/shared/AnimatedIcon';

const MissionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute -z-10 inset-0 bg-warmth-100 rounded-3xl -rotate-3 scale-95 opacity-70"></div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md transform hover:translate-y-[-5px] transition-transform duration-300 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                  alt="Smiling children"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md transform translate-y-8 transition-transform duration-300 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1597356946679-83f39168fbbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                  alt="Child learning"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md transform hover:translate-y-[-5px] transition-transform duration-300 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1627480108595-09e9c8d0c1b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                  alt="Community support"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-md transform translate-y-4 hover:translate-y-[-2px] transition-transform duration-300 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1577896851305-fa7de43602c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                  alt="Education program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
              <AnimatedIcon icon={Heart} size={16} className="mr-1.5" animation="pulse" />
              <span>Our Mission</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance leading-tight">
              Creating a world where <span className="text-hope-600">every child</span> thrives
            </h2>
            
            <p className="text-gray-600 mb-8">
              We believe every child deserves love, care, education, and the opportunity to reach their full potential. Our mission is to provide marginalized children with the support they need to build brighter futures.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Home,
                  title: 'Safe Homes',
                  description: 'Providing safe living environments for displaced children.'
                },
                {
                  icon: School,
                  title: 'Education',
                  description: 'Supporting educational opportunities for marginalized children.'
                },
                {
                  icon: Heart,
                  title: 'Healthcare',
                  description: 'Ensuring access to essential health services and nutrition.'
                },
                {
                  icon: Book,
                  title: 'Life Skills',
                  description: 'Teaching essential skills for independence and growth.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-4 w-10 h-10 rounded-full bg-hope-100 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-hope-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
