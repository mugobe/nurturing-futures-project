
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import MissionSection from '@/components/home/MissionSection';
import ImpactSection from '@/components/home/ImpactSection';
import CampaignSection from '@/components/home/CampaignSection';
import BlogPreview from '@/components/home/BlogPreview';
import { Heart, Mail, Users } from 'lucide-react';
import Button from '@/components/shared/Button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <MissionSection />
        <ImpactSection />
        
        {/* Call to Action Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-hope-600 to-hope-800 text-white">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Us in Making a Difference
              </h2>
              
              <p className="text-hope-50 mb-10 text-lg">
                Whether through volunteering, donating, or spreading awareness, there are many ways you can help us create brighter futures for children in need.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/donate">
                  <Button 
                    variant="warmth" 
                    size="lg" 
                    rounded 
                    withIcon 
                    className="w-full sm:w-auto bg-white text-hope-700 hover:bg-hope-50"
                  >
                    <Heart size={18} className="mr-1.5" />
                    Donate Now
                  </Button>
                </Link>
                
                <Link to="/volunteer">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    rounded 
                    withIcon 
                    className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                  >
                    <Users size={18} className="mr-1.5" />
                    Volunteer
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    rounded 
                    withIcon 
                    className="w-full sm:w-auto text-white hover:bg-white/10"
                  >
                    <Mail size={18} className="mr-1.5" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <CampaignSection />
        <BlogPreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
