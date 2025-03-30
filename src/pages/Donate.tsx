import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Heart, Target, CheckCircle2, ShieldCheck, DollarSign, Book, Home, Users } from 'lucide-react';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Button from '@/components/shared/Button';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/shared/Card';
import { toast } from 'sonner';

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleDonationTypeChange = (type: string) => {
    setDonationType(type);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would process the payment
    const amount = donationAmount === 'custom' ? customAmount : donationAmount;
    console.log('Donation submitted:', { amount, type: donationType, ...formData });
    toast.success('Thank you for your generous donation!');
    setSubmitted(true);
  };

  const impactItems = [
    {
      amount: "Basic Needs",
      description: "Provide essentials like food and clean water, giving children a chance to live healthier and happier lives.",
      icon: Home
    },
    {
      amount: "Education",
      description: "Open doors to education, empowering children to break the cycle of poverty and build a brighter future.",
      icon: Book
    },
    {
      amount: "Health",
      description: "Ensure vulnerable children and families receive the medical care and mental health support they need to thrive.",
      icon: Heart
    },
    {
      amount: "Community",
      description: "Support community development that fosters economic growth and social stability for vulnerable families.",
      icon: Users
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
                <AnimatedIcon icon={Heart} size={16} className="mr-1.5" animation="pulse" />
                <span>Support BHI</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Support <span className="text-hope-600">Bright Horizons Initiative</span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in">
                At Bright Horizons Initiative, our mission is to intentionally improve and impact children's lives. Your donation can make a world of difference.
              </p>
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-warmth-100 text-warmth-800 text-xs font-medium mb-6">
                <Target size={16} className="mr-1.5" />
                <span>Why Donate to BHI?</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                How Your Donation <span className="text-hope-600">Makes a Difference</span>
              </h2>
              
              <p className="text-gray-600">
                Your contribution helps ensure that vulnerable children have access to the resources they need to thrive.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {impactItems.map((item, index) => (
                <Card key={index} hover>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                      <item.icon size={20} className="text-hope-600" />
                    </div>
                    <CardTitle className="text-2xl">{item.amount}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 max-w-2xl mx-auto mb-4">
                "Live by Example: Share with vulnerable children to set a positive example. Compassion is a powerful way to support society and make a meaningful difference."
              </p>
              
              <div className="inline-flex items-center px-4 py-2 rounded-lg bg-hope-50 text-hope-700 text-sm font-medium">
                <ShieldCheck size={18} className="mr-2" />
                <span>Leave a gift for the world - include charity funding in your will to save countless lives.</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Overview Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Project Overview</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-gray-700 mb-6">
                  We are seeking funding for our initiative which aims to support, hear, and provide opportunities for 500 vulnerable children to thrive through advocacy, prevention, and holistic support. Our goal is to break the cycle of child institutionalization and family separation by creating nurturing, risk-free environments.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Statement of Need</h3>
                <p className="text-gray-700 mb-6">
                  In Uganda, particularly in underserved and remote areas, many children lack access to quality education and essential resources, putting them at risk of child labor and family separation. This gap significantly affects their future opportunities and overall well-being. Bright Horizons Initiative Limited addresses this critical need by offering targeted support to the most vulnerable children.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Budget Breakdown</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full bg-white">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Frame</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="py-3 px-4">Administrative costs</td>
                        <td className="py-3 px-4">Lump sum</td>
                        <td className="py-3 px-4">$50,000</td>
                        <td className="py-3 px-4">5 years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Workshops</td>
                        <td className="py-3 px-4">10</td>
                        <td className="py-3 px-4">$20,000</td>
                        <td className="py-3 px-4">5 years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Basic supplies</td>
                        <td className="py-3 px-4">Lump sum</td>
                        <td className="py-3 px-4">$100,000</td>
                        <td className="py-3 px-4">5 years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Mapping Residential care facilities</td>
                        <td className="py-3 px-4">5</td>
                        <td className="py-3 px-4">$1,900</td>
                        <td className="py-3 px-4">3 years</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Salaries</td>
                        <td className="py-3 px-4">7</td>
                        <td className="py-3 px-4">$17,900</td>
                        <td className="py-3 px-4">5 years</td>
                      </tr>
                      <tr className="bg-gray-50 font-semibold">
                        <td className="py-3 px-4">Total</td>
                        <td className="py-3 px-4"></td>
                        <td className="py-3 px-4">$189,800</td>
                        <td className="py-3 px-4"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-gray-700">
                  Other Funding Sources: We are also approaching the Ashworth Charitable Trust and Dubai Cares to secure additional support for this project.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Donation Form */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
                  <Heart size={16} className="mr-1.5" />
                  <span>Donate Now</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  Make Your <span className="text-hope-600">Contribution</span>
                </h2>
                
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Your generous donation will help us continue our mission to support marginalized children.
                </p>
              </div>
              
              {submitted ? (
                <div className="bg-white rounded-xl p-8 shadow-sm text-center">
                  <div className="w-16 h-16 bg-hope-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-hope-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You for Your Donation!</h3>
                  <p className="text-gray-600 mb-6">
                    Your generosity will help us make a meaningful difference in the lives of children who need it most. We've sent a confirmation email with the details of your donation.
                  </p>
                  <Button 
                    variant="primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Make Another Donation
                  </Button>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 bg-hope-600 text-white">
                      <h3 className="text-xl font-semibold mb-6">Choose Donation Amount</h3>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          {['25', '50', '100', '250'].map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              className={`px-4 py-3 rounded-lg text-center font-medium transition-colors ${
                                donationAmount === amount 
                                  ? 'bg-white text-hope-600' 
                                  : 'bg-hope-500 hover:bg-hope-400 text-white'
                              }`}
                              onClick={() => handleAmountSelect(amount)}
                            >
                              ${amount}
                            </button>
                          ))}
                        </div>
                        
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <DollarSign size={16} className="text-hope-300" />
                          </div>
                          <input
                            type="number"
                            placeholder="Custom Amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                            className={`w-full pl-9 pr-4 py-3 bg-hope-500 placeholder-hope-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 ${
                              donationAmount === 'custom' ? 'ring-2 ring-white' : ''
                            }`}
                          />
                        </div>
                        
                        <div className="pt-4">
                          <h4 className="text-lg font-medium mb-3">Donation Type</h4>
                          <div className="flex space-x-4">
                            <button
                              type="button"
                              className={`flex-1 px-4 py-3 rounded-lg text-center font-medium transition-colors ${
                                donationType === 'one-time' 
                                  ? 'bg-white text-hope-600' 
                                  : 'bg-hope-500 hover:bg-hope-400 text-white'
                              }`}
                              onClick={() => handleDonationTypeChange('one-time')}
                            >
                              One-time
                            </button>
                            <button
                              type="button"
                              className={`flex-1 px-4 py-3 rounded-lg text-center font-medium transition-colors ${
                                donationType === 'monthly' 
                                  ? 'bg-white text-hope-600' 
                                  : 'bg-hope-500 hover:bg-hope-400 text-white'
                              }`}
                              onClick={() => handleDonationTypeChange('monthly')}
                            >
                              Monthly
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-8 border-t border-hope-500">
                        <h4 className="text-lg font-medium mb-3">Your donation will help:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle2 size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                            <span>Provide education and school supplies</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                            <span>Ensure proper nutrition and healthcare</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                            <span>Create safe and nurturing environments</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                            <span>Support community development initiatives</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-xl font-semibold mb-6">Your Information</h3>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
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
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                              <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                            <select
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                            >
                              <option value="">Select Country</option>
                              <option value="UG">Uganda</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="UK">United Kingdom</option>
                              <option value="AU">Australia</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          
                          <div className="pt-4 border-t border-gray-200">
                            <h4 className="text-lg font-medium mb-3">Payment Information</h4>
                            <div className="space-y-4">
                              <div>
                                <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">Name on Card*</label>
                                <input
                                  type="text"
                                  id="nameOnCard"
                                  name="nameOnCard"
                                  value={formData.nameOnCard}
                                  onChange={handleChange}
                                  required
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number*</label>
                                <input
                                  type="text"
                                  id="cardNumber"
                                  name="cardNumber"
                                  value={formData.cardNumber}
                                  onChange={handleChange}
                                  required
                                  placeholder="•••• •••• •••• ••••"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                />
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date*</label>
                                  <input
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    required
                                    placeholder="MM / YY"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                  />
                                </div>
                                
                                <div>
                                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV*</label>
                                  <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    required
                                    placeholder="123"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="pt-4">
                            <Button 
                              type="submit" 
                              variant="primary" 
                              size="lg" 
                              className="w-full"
                              disabled={!donationAmount}
                            >
                              {donationType === 'monthly' ? 'Donate Monthly' : 'Complete Donation'}
                            </Button>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                              Your payment information is secured with industry-standard encryption.
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Donate;
