
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, Heart, Calendar, MapPin, Clock, CheckCheck, BookOpen, Activity } from 'lucide-react';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Button from '@/components/shared/Button';
import Card, { CardContent, CardHeader } from '@/components/shared/Card';
import { toast } from 'sonner';

const Volunteer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    interests: [],
    availability: [],
    experience: '',
    motivation: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({
        ...prev,
        [name]: [...prev[name as keyof typeof prev] as string[], value]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
    toast.success('Thank you for your interest in volunteering! We\'ll be in touch soon.');
    setSubmitted(true);
  };

  const volunteerOpportunities = [
    {
      title: "Mentor Program",
      description: "Provide guidance and support to children and youth through regular mentoring sessions.",
      icon: BookOpen,
      commitment: "4-6 hours per month",
      location: "In-person / Virtual",
      color: "bg-hope-50 text-hope-600"
    },
    {
      title: "Classroom Assistant",
      description: "Support teachers in educational activities and help children with their studies.",
      icon: Users,
      commitment: "Flexible schedules",
      location: "In-person only",
      color: "bg-warmth-50 text-warmth-600"
    },
    {
      title: "Event Volunteer",
      description: "Help organize and run fundraising events, awareness campaigns, and children's activities.",
      icon: Calendar,
      commitment: "Event-based",
      location: "In-person",
      color: "bg-compassion-50 text-compassion-600"
    },
    {
      title: "Administrative Support",
      description: "Assist our team with office tasks, data management, and communications.",
      icon: Activity,
      commitment: "Flexible schedules",
      location: "In-person / Virtual",
      color: "bg-emerald-50 text-emerald-600"
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
                <AnimatedIcon icon={Users} size={16} className="mr-1.5" animation="pulse" />
                <span>Volunteer With Us</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Make a <span className="text-hope-600">Difference</span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in">
                Join our team of dedicated volunteers who help create brighter futures for children in need.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why Volunteer */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-warmth-100 text-warmth-800 text-xs font-medium mb-6">
                  <Heart size={16} className="mr-1.5" />
                  <span>Why Volunteer</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  The Impact of Your <span className="text-hope-600">Time & Skills</span>
                </h2>
                
                <div className="space-y-4 text-gray-600">
                  <p>
                    Volunteering with BrightFutures gives you the opportunity to make a direct impact on the lives of marginalized children. Whether you have a few hours a week or want to help with specific events, your contribution matters.
                  </p>
                  <p>
                    Our volunteers come from all walks of life, bringing diverse skills and perspectives that enrich our programs and help us better serve children in need.
                  </p>
                </div>
                
                <div className="mt-8 space-y-4">
                  {[
                    { icon: Heart, text: "Create meaningful connections with children" },
                    { icon: CheckCheck, text: "Apply your skills where they're needed most" },
                    { icon: Users, text: "Join a community of passionate volunteers" },
                    { icon: Activity, text: "Develop new skills and experiences" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-hope-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <item.icon size={16} className="text-hope-600" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-warmth-100 rounded-3xl -rotate-3 scale-95 opacity-70"></div>
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Volunteers working with children"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Volunteer Opportunities */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-compassion-100 text-compassion-800 text-xs font-medium mb-6">
                <Calendar size={16} className="mr-1.5" />
                <span>Volunteer Opportunities</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Ways to <span className="text-hope-600">Get Involved</span>
              </h2>
              
              <p className="text-gray-600">
                We offer various volunteer opportunities to match your interests, skills, and availability.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <Card key={index} hover className="h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${opportunity.color} flex items-center justify-center mb-4`}>
                      <opportunity.icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-6">{opportunity.description}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock size={14} className="mr-2" />
                        <span>{opportunity.commitment}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={14} className="mr-2" />
                        <span>{opportunity.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Volunteer Application */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
                  <Users size={16} className="mr-1.5" />
                  <span>Join Our Team</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Volunteer <span className="text-hope-600">Application</span>
                </h2>
                
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Fill out the form below to express your interest in volunteering. Our team will reach out to discuss opportunities that match your skills and availability.
                </p>
              </div>
              
              {submitted ? (
                <div className="bg-hope-50 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-hope-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCheck size={32} className="text-hope-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    We've received your volunteer application and appreciate your interest in helping our cause. A member of our team will be in touch with you soon to discuss next steps.
                  </p>
                  <Button 
                    variant="primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Application
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Areas of Interest */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Areas of Interest</h3>
                      <div className="space-y-3">
                        {['Mentor Program', 'Classroom Assistant', 'Event Volunteer', 'Administrative Support', 'Fundraising', 'Other'].map((interest) => (
                          <div key={interest} className="flex items-center">
                            <input
                              type="checkbox"
                              id={interest.replace(/\s+/g, '')}
                              name="interests"
                              value={interest}
                              onChange={handleCheckboxChange}
                              className="h-4 w-4 text-hope-600 focus:ring-hope-500 border-gray-300 rounded"
                            />
                            <label htmlFor={interest.replace(/\s+/g, '')} className="ml-2 block text-sm text-gray-700">
                              {interest}
                            </label>
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-semibold mt-6 mb-4">Availability</h3>
                      <div className="space-y-3">
                        {['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekends', 'Flexible'].map((time) => (
                          <div key={time} className="flex items-center">
                            <input
                              type="checkbox"
                              id={time.replace(/\s+/g, '')}
                              name="availability"
                              value={time}
                              onChange={handleCheckboxChange}
                              className="h-4 w-4 text-hope-600 focus:ring-hope-500 border-gray-300 rounded"
                            />
                            <label htmlFor={time.replace(/\s+/g, '')} className="ml-2 block text-sm text-gray-700">
                              {time}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Relevant Experience</label>
                    <textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                      placeholder="Please share any relevant experience or skills you have."
                    ></textarea>
                  </div>
                  
                  <div className="mt-6">
                    <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer with us?</label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                      placeholder="Please share your motivation for volunteering with BrightFutures."
                    ></textarea>
                  </div>
                  
                  <div className="mt-8">
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Submit Application
                    </Button>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                      By submitting this form, you agree to be contacted about volunteer opportunities.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Volunteer;
