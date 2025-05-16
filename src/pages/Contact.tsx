import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, MessageSquare, Users, Heart, Send } from 'lucide-react';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Button from '@/components/shared/Button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast.success('Your message has been sent! We\'ll get back to you soon.');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-hope-50">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6 animate-fade-in">
                <AnimatedIcon icon={MessageSquare} size={16} className="mr-1.5" animation="pulse" />
                <span>Get in Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Contact <span className="text-hope-600">Us</span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in">
                Have questions, want to volunteer, or need information about our programs? We're here to help.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-warmth-100 text-warmth-800 text-xs font-medium mb-6">
                  <AnimatedIcon icon={Mail} size={16} className="mr-1.5" animation="pulse" />
                  <span>Send a Message</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  We'd Love to <span className="text-hope-600">Hear from You</span>
                </h2>
                
                <p className="text-gray-600 mb-8">
                  Have a question about our programs, interested in volunteering, or want to learn more about how you can support our mission? Fill out the form below, and we'll get back to you as soon as possible.
                </p>
                
                {submitted ? (
                  <div className="bg-hope-50 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-hope-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={32} className="text-hope-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out to us. We've received your message and will respond as soon as possible, typically within 1-2 business days.
                    </p>
                    <Button 
                      variant="primary"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="volunteer">Volunteer Information</option>
                        <option value="donation">Donation Questions</option>
                        <option value="program">Program Information</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
              
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
                  <AnimatedIcon icon={Phone} size={16} className="mr-1.5" animation="pulse" />
                  <span>Contact Information</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Get in <span className="text-hope-600">Touch</span>
                </h2>
                
                <p className="text-gray-600 mb-8">
                  Whether you prefer to call, email, or visit us in person, we're available to answer your questions and discuss how we can work together to help marginalized children.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 bg-hope-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-hope-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Visit Our Office</h3>
                      <p className="text-gray-600">
                        Seguku, Kampala, Uganda<br />
                        PO BOX 5684
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Monday to Friday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 bg-hope-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-hope-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                      <p className="text-gray-600">
                        Main Office: 078250897<br />
                        {/* You may remove these other phone numbers or update them if you want just one listed */}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Monday to Friday: 9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 bg-hope-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-hope-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        General Inquiries: <a href="mailto:info@bhinitiative.org" className="text-hope-600 hover:underline">info@bhinitiative.org</a><br />
                        Volunteer Opportunities: <a href="mailto:volunteer@bhinitiative.org" className="text-hope-600 hover:underline">volunteer@bhinitiative.org</a><br />
                        Donations & Support: <a href="mailto:donations@bhinitiative.org" className="text-hope-600 hover:underline">donations@bhinitiative.org</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 w-12 h-12 bg-hope-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users size={20} className="text-hope-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                      <div className="flex space-x-4 mt-2">
                        <a 
                          href="#" 
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-hope-100 transition-colors"
                          aria-label="Facebook"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                          </svg>
                        </a>
                        
                        <a 
                          href="#" 
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-hope-100 transition-colors"
                          aria-label="Twitter"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        
                        <a 
                          href="#" 
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-hope-100 transition-colors"
                          aria-label="Instagram"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.049 1.055-.058 1.37-.058 4.04 0 2.668.01 2.985.058 4.04.045.975.207 1.504.344 1.856.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.986-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.88.344-1.856.048-1.055.058-1.372.058-4.04.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                          </svg>
                        </a>
                        
                        <a 
                          href="#" 
                          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-hope-100 transition-colors"
                          aria-label="YouTube"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-hope-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="mr-4 w-10 h-10 bg-hope-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart size={18} className="text-hope-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Donation Inquiries</h3>
                      <p className="text-gray-600 mb-4">
                        For questions about making a donation or to learn more about how your contribution makes an impact, please contact our donor relations team.
                      </p>
                      <Button variant="primary" size="sm">
                        <Mail size={16} className="mr-2" />
                        Email Donor Relations
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
                <MapPin size={16} className="mr-1.5" />
                <span>Find Us</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Our <span className="text-hope-600">Location</span>
              </h2>
              
              <p className="text-gray-600">
                Visit our main office to learn more about our programs and how you can get involved.
              </p>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              {/* This would be an embedded map in a real application */}
              <div className="aspect-[16/9] bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Map would be embedded here in a real application</p>
                </div>
              </div>
              
              <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">BrightFutures Headquarters</h3>
                  <p className="text-gray-600">123 Hope Street, Suite 456, Kindness City, KC 12345</p>
                </div>
                
                <Button variant="primary" className="mt-4 md:mt-0">
                  <MapPin size={16} className="mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
