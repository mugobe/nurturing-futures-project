
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Heart, Users, FileText, ArrowRight, Target } from 'lucide-react';
import Button from '@/components/shared/Button';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import { LucideIcon } from 'lucide-react';

interface ProgramItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const Programs = () => {
  const programs: ProgramItem[] = [
    {
      id: "family-support",
      title: "Family Support & Poverty Alleviation",
      description: "Preventing child-family separation through poverty alleviation and support programs. We provide sustainable income-generating activities, financial literacy, and vocational training.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "education-access",
      title: "Education & Training",
      description: "Ensuring children have access to quality education through partnerships with schools in marginalized areas, reducing the burden on families.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1577896851305-fa7de43602c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "health-wellbeing",
      title: "Health & Wellbeing",
      description: "Providing access to essential health services and mental health support for vulnerable children and families in underserved communities.",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "community-development",
      title: "Community Development",
      description: "Strengthening communities by promoting social inclusion, nurturing local businesses, and advocating for essential services.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1627480108595-09e9c8d0c1b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "boy-child-advocacy",
      title: "Boy Child Advocacy",
      description: "Providing a dedicated platform focusing on the support and development of boy children through parenting sessions and guidance.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1597356946679-83f39168fbbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-hope-50">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6 animate-fade-in">
                <AnimatedIcon icon={Target} size={16} className="mr-1.5" animation="pulse" />
                <span>Our Programs</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                How We <span className="text-hope-600">Make a Difference</span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in">
                Bright Horizons Initiative is dedicated to improving the lives of underprivileged children in Uganda through multiple comprehensive programs addressing their needs and rights.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission Overview */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission and Approach
              </h2>
              <p className="text-gray-600">
                Bright Horizons Initiative Limited is dedicated to improving the lives of underprivileged children in Uganda. Our mission is to advocate for the rights and well-being of children and promote family-based care. We achieve this by offering preventative measures to avoid family separation, providing post-support services to pre-separated children to help them unlearn negative experiences from residential care, and creating a robust foster care support system in Uganda.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                  <Target size={20} className="text-hope-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Goal</h3>
                <p className="text-gray-600">
                  To support, hear, and provide opportunities for 500 vulnerable children to thrive through advocacy, prevention, and holistic support.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                  <Heart size={20} className="text-hope-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To break the cycle of child institutionalization and family separation by creating nurturing, risk-free environments.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                  <Users size={20} className="text-hope-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Methodology</h3>
                <p className="text-gray-600">
                  Collaborating with civil society organizations, governmental departments, education and health entities to ensure children receive the best services within their families.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Programs Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Programs
              </h2>
              <p className="text-gray-600">
                Explore our comprehensive range of programs designed to support vulnerable children and families in Uganda.
              </p>
            </div>
            
            <div className="space-y-8">
              {programs.map((program, index) => (
                <div 
                  key={program.id} 
                  className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="grid md:grid-cols-2">
                    <div 
                      className="h-64 md:h-auto bg-cover bg-center"
                      style={{ backgroundImage: `url(${program.image})` }}
                    ></div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                        <program.icon size={20} className="text-hope-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                      <p className="text-gray-600 mb-6">{program.description}</p>
                      <div>
                        <Link to={`/programs/${program.id}`}>
                          <Button variant="primary">
                            Learn More <ArrowRight size={16} className="ml-1.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="bg-hope-600 text-white rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Join Us in Making a Difference
                  </h2>
                  <p className="text-hope-50 mb-8">
                    With your support, we can provide the necessary resources and opportunities for these children to have a fulfilled future. Together, we can create brighter horizons for every child.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/donate">
                      <Button 
                        variant="warmth" 
                        size="lg" 
                        className="w-full sm:w-auto"
                      >
                        Donate Now
                      </Button>
                    </Link>
                    <Link to="/volunteer">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                      >
                        Volunteer
                      </Button>
                    </Link>
                  </div>
                </div>
                <div 
                  className="h-64 md:h-auto bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80)` 
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-2">
              <strong>Director:</strong> Bright Horizons Initiative Limited
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Email:</strong> hjbiibi@gmail.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
