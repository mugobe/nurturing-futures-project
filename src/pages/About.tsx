
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Heart, Users, Target, Calendar, Award, Clock } from 'lucide-react';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Button from '@/components/shared/Button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-hope-50">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6 animate-fade-in">
                <AnimatedIcon icon={Heart} size={16} className="mr-1.5" animation="pulse" />
                <span>About BrightFutures</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Our Story & <span className="text-hope-600">Mission</span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in">
                Learn about our journey, values, and the impact we're making for marginalized children around the world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
                  <Calendar size={16} className="mr-1.5" />
                  <span>Est. 2010</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Our <span className="text-hope-600">Story</span>
                </h2>
                
                <div className="space-y-4 text-gray-600">
                  <p>
                    BrightFutures began with a simple observation: too many children were left behind, without the care, education, and opportunities they deserve. Our founder, Sarah Johnson, witnessed this firsthand while volunteering in underserved communities.
                  </p>
                  <p>
                    What started as a small community initiative in 2010 has grown into an organization that reaches thousands of children across multiple regions. We've evolved, but our core mission remains unchanged: to create opportunities and support for every child to thrive.
                  </p>
                  <p>
                    Today, we work alongside communities, governments, and other organizations to develop comprehensive programs that address the complex challenges facing marginalized children.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-warmth-100 rounded-3xl rotate-3 scale-95 opacity-70"></div>
                <img
                  src="https://images.unsplash.com/photo-1594708767771-a5f97143906a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Founder with children"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-warmth-100 text-warmth-800 text-xs font-medium mb-6">
                <Award size={16} className="mr-1.5" />
                <span>Our Core Values</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Values That <span className="text-hope-600">Guide Us</span>
              </h2>
              
              <p className="text-gray-600">
                These principles guide every decision we make and every program we implement.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Compassion",
                  description: "We approach every child and situation with genuine care and understanding.",
                  icon: Heart,
                  color: "bg-compassion-50 text-compassion-600"
                },
                {
                  title: "Dignity",
                  description: "We respect the inherent worth and dignity of every child, family, and community we serve.",
                  icon: Award,
                  color: "bg-warmth-50 text-warmth-600"
                },
                {
                  title: "Collaboration",
                  description: "We work alongside communities and partners to create sustainable solutions.",
                  icon: Users,
                  color: "bg-hope-50 text-hope-600"
                },
                {
                  title: "Excellence",
                  description: "We commit to the highest standards in our programs, operations, and accountability.",
                  icon: Award,
                  color: "bg-hope-50 text-hope-600"
                },
                {
                  title: "Innovation",
                  description: "We continuously seek better ways to serve children and address complex challenges.",
                  icon: Target,
                  color: "bg-warmth-50 text-warmth-600"
                },
                {
                  title: "Long-term Impact",
                  description: "We design programs focused on creating lasting change, not just short-term relief.",
                  icon: Clock,
                  color: "bg-compassion-50 text-compassion-600"
                }
              ].map((value, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover-lift border border-gray-100">
                  <div className={`w-12 h-12 rounded-full ${value.color} flex items-center justify-center mb-4`}>
                    <value.icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
                <Users size={16} className="mr-1.5" />
                <span>Meet Our Team</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                The People <span className="text-hope-600">Behind Our Mission</span>
              </h2>
              
              <p className="text-gray-600">
                Our dedicated team combines expertise in child welfare, education, and community development.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Founder & Executive Director",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                },
                {
                  name: "Michael Chen",
                  role: "Programs Director",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                },
                {
                  name: "Aisha Okafor",
                  role: "Education Specialist",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                },
                {
                  name: "Carlos Rivera",
                  role: "Community Partnerships Manager",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                },
                {
                  name: "Emma Williams",
                  role: "Child Welfare Specialist",
                  image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                },
                {
                  name: "David Kim",
                  role: "Finance Director",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="text-center hover-lift">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 border-4 border-white shadow-md">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-hope-50">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="text-hope-600">Mission</span>
              </h2>
              
              <p className="text-gray-600 mb-8 text-lg">
                There are many ways to contribute to our work and help create brighter futures for children in need.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/volunteer">
                  <Button variant="warmth" size="lg" rounded className="w-full sm:w-auto">
                    Become a Volunteer
                  </Button>
                </Link>
                
                <Link to="/donate">
                  <Button variant="primary" size="lg" rounded className="w-full sm:w-auto">
                    Make a Donation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
