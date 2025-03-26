
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FolderHeart, Heart, Filter, Calendar, ArrowRight } from 'lucide-react';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Button from '@/components/shared/Button';
import Card, { CardContent, CardHeader, CardTitle, CardFooter } from '@/components/shared/Card';

interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  goal: string;
  raised: string;
  endDate: string;
  category: string;
  status: 'Active' | 'Upcoming' | 'Completed';
}

const Campaigns = () => {
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  
  // Example campaigns data
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'School Supplies Drive',
      description: 'Providing essential school supplies to underprivileged children for the upcoming school year.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 75,
      goal: '$20,000',
      raised: '$15,000',
      endDate: 'June 30, 2023',
      category: 'Education',
      status: 'Active'
    },
    {
      id: '2',
      title: 'Safe Homes Project',
      description: 'Creating safe living environments for displaced children in urban communities.',
      image: 'https://images.unsplash.com/photo-1618675864864-906a3ce84978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 45,
      goal: '$50,000',
      raised: '$22,500',
      endDate: 'July 15, 2023',
      category: 'Housing',
      status: 'Active'
    },
    {
      id: '3',
      title: 'Health Check Programs',
      description: 'Providing regular health check-ups and essential medical care to children in underserved areas.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 60,
      goal: '$30,000',
      raised: '$18,000',
      endDate: 'August 1, 2023',
      category: 'Health',
      status: 'Active'
    },
    {
      id: '4',
      title: 'Summer Camp Scholarships',
      description: 'Enabling children from low-income families to attend summer camps and recreational programs.',
      image: 'https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 90,
      goal: '$15,000',
      raised: '$13,500',
      endDate: 'June 15, 2023',
      category: 'Recreation',
      status: 'Active'
    },
    {
      id: '5',
      title: 'Educational Workshops',
      description: 'Organizing educational workshops to teach life skills and career readiness for adolescents.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 0,
      goal: '$10,000',
      raised: '$0',
      endDate: 'September 1, 2023',
      category: 'Education',
      status: 'Upcoming'
    },
    {
      id: '6',
      title: 'Winter Clothing Drive',
      description: 'Collecting warm clothing for children in need during the winter months.',
      image: 'https://images.unsplash.com/photo-1513883049090-d0b7439799bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 0,
      goal: '$25,000',
      raised: '$0',
      endDate: 'November 30, 2023',
      category: 'Clothing',
      status: 'Upcoming'
    },
    {
      id: '7',
      title: 'Technology Access Initiative',
      description: 'Providing computers and internet access to underprivileged children for remote learning.',
      image: 'https://images.unsplash.com/photo-1509983165097-0c31a863e3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 100,
      goal: '$40,000',
      raised: '$40,000',
      endDate: 'April 30, 2023',
      category: 'Education',
      status: 'Completed'
    },
    {
      id: '8',
      title: 'Mental Health Support',
      description: 'Providing counseling and therapy services for children dealing with trauma and stress.',
      image: 'https://images.unsplash.com/photo-1576765608866-5b51f8e15750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 100,
      goal: '$35,000',
      raised: '$37,500',
      endDate: 'March 15, 2023',
      category: 'Health',
      status: 'Completed'
    }
  ];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(campaigns.map(campaign => campaign.category)))];
  
  // Filter campaigns based on selected filters
  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesStatus = filterStatus === 'all' || campaign.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || campaign.category === filterCategory;
    
    return matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-hope-50">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6 animate-fade-in">
                <AnimatedIcon icon={FolderHeart} size={16} className="mr-1.5" animation="pulse" />
                <span>Our Campaigns</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Support Our <span className="text-hope-600">Initiatives</span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in">
                Browse our active campaigns and find a cause that speaks to your heart. Your support makes a direct impact on children's lives.
              </p>
            </div>
          </div>
        </section>
        
        {/* Filters */}
        <section className="py-8 border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center">
                <Filter size={18} className="text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">Filter Campaigns:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div>
                  <label className="text-sm text-gray-600 mr-2">Status:</label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-hope-500 focus:border-hope-500"
                  >
                    <option value="all">All</option>
                    <option value="Active">Active</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm text-gray-600 mr-2">Category:</label>
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="text-sm border border-gray-300 rounded-md px-3 py-1 focus:ring-hope-500 focus:border-hope-500"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Campaigns */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {filteredCampaigns.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No campaigns found</h3>
                <p className="text-gray-600">Try adjusting your filter criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCampaigns.map((campaign) => (
                  <Card key={campaign.id} hoverLift className="overflow-hidden flex flex-col h-full">
                    <div className="relative">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={campaign.image}
                          alt={campaign.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      
                      <div className="absolute top-2 right-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          campaign.status === 'Active' 
                            ? 'bg-hope-500 text-white' 
                            : campaign.status === 'Upcoming' 
                              ? 'bg-amber-100 text-amber-800' 
                              : 'bg-gray-100 text-gray-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                    </div>
                    
                    <CardHeader className="pt-6">
                      <div className="flex items-center mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-hope-100 text-hope-800">
                          {campaign.category}
                        </span>
                      </div>
                      <CardTitle>{campaign.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 text-sm mb-6">{campaign.description}</p>
                      
                      {campaign.status !== 'Upcoming' && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="font-medium">{campaign.raised} raised</span>
                            <span className="text-gray-500">Goal: {campaign.goal}</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                campaign.status === 'Completed' ? 'bg-green-500' : 'bg-hope-500'
                              }`}
                              style={{ width: `${campaign.progress}%` }}
                            ></div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{campaign.progress}% complete</div>
                        </div>
                      )}
                      
                      <div className="flex items-center text-sm text-gray-500 mt-4">
                        <Calendar size={16} className="mr-2" />
                        {campaign.status === 'Completed' 
                          ? `Ended: ${campaign.endDate}` 
                          : campaign.status === 'Upcoming' 
                            ? `Starts: ${campaign.endDate}` 
                            : `Ends: ${campaign.endDate}`}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-2">
                      <Link 
                        to={campaign.status === 'Upcoming' ? '#' : `/donate?campaign=${campaign.id}`}
                        className="w-full"
                      >
                        <Button 
                          variant={campaign.status === 'Completed' ? 'outline' : 'primary'} 
                          className="w-full"
                          disabled={campaign.status === 'Upcoming'}
                        >
                          {campaign.status === 'Completed' 
                            ? 'View Results' 
                            : campaign.status === 'Upcoming' 
                              ? 'Coming Soon' 
                              : 'Donate to this Campaign'}
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
                  <Heart size={16} className="mr-1.5" />
                  <span>Our Impact</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                  How Your <span className="text-hope-600">Support Helps</span>
                </h2>
                
                <p className="text-gray-600 mb-8">
                  When you donate to our campaigns, you're making a direct impact on the lives of marginalized children. Here's how your contribution makes a difference:
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: 'Education Access',
                      description: 'Your support helps provide school supplies, textbooks, and educational resources to children who would otherwise go without.'
                    },
                    {
                      title: 'Safe Living Environments',
                      description: 'Contributions to housing campaigns help create safe, nurturing homes for displaced and vulnerable children.'
                    },
                    {
                      title: 'Healthcare Services',
                      description: 'Donations fund essential medical care, regular check-ups, and health education for underserved children.'
                    },
                    {
                      title: 'Community Development',
                      description: 'Your generosity helps strengthen communities through programs that address systemic challenges facing marginalized children.'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hope-100 flex items-center justify-center mr-4">
                        <Heart size={18} className="text-hope-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Link to="/donate">
                    <Button variant="primary" size="lg">
                      Make a General Donation
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -z-10 inset-0 bg-warmth-100 rounded-3xl -rotate-3 scale-95 opacity-70"></div>
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="Children smiling"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Start a Campaign */}
        <section className="py-16 md:py-24 bg-hope-600 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-6">
                <FolderHeart size={16} className="mr-1.5" />
                <span>Create Change</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Own Fundraising Campaign
              </h2>
              
              <p className="text-hope-50 mb-10 text-lg">
                Have a cause close to your heart? Start a fundraising campaign for BrightFutures and rally your friends, family, and community to support marginalized children.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white/10"
                >
                  Learn How It Works
                </Button>
                
                <Link to="/contact">
                  <Button 
                    size="lg" 
                    className="bg-white text-hope-700 hover:bg-hope-50"
                  >
                    Contact Us to Get Started
                    <ArrowRight size={16} className="ml-2" />
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

export default Campaigns;
