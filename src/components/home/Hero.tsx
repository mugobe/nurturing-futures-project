
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Users } from 'lucide-react';
import Button from '@/components/shared/Button';
import AnimatedIcon from '@/components/shared/AnimatedIcon';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-hope-200 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-warmth-200 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6 animate-fade-in">
            <AnimatedIcon icon={Heart} size={16} className="mr-1.5" animation="pulse" />
            <span>Transforming children's lives with care</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 animate-fade-in-up">
            <span className="block bg-gradient-to-r from-hope-700 to-hope-500 text-transparent bg-clip-text">
              Bright Horizons Initiative
            </span>
            <span className="block mt-1">For Every Child</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            We intentionally improve and impact children's lives by providing care, education, and support to marginalized children in Uganda, helping them build a path to a brighter future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <Link to="/donate">
              <Button variant="primary" size="lg" rounded withIcon>
                <Heart size={18} className="mr-1.5" />
                Donate Now
              </Button>
            </Link>
            
            <Link to="/volunteer">
              <Button variant="warmth" size="lg" rounded withIcon>
                <Users size={18} className="mr-1.5" />
                Volunteer
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 md:mt-20">
          {[
            { 
              icon: Users, 
              title: '5,000+', 
              description: 'Children Helped', 
              delay: '0s',
              animation: 'slide-in-left' as const
            },
            { 
              icon: Shield, 
              title: '120+', 
              description: 'Communities Served', 
              delay: '0.2s',
              animation: 'fade-in-up' as const
            },
            { 
              icon: Heart, 
              title: '98%', 
              description: 'Funds to Programs', 
              delay: '0.4s',
              animation: 'slide-in-right' as const
            },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center animate-${stat.animation}`}
              style={{ animationDelay: stat.delay }}
            >
              <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                <stat.icon size={24} className="text-hope-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{stat.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
