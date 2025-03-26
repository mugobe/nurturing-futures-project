
import React from 'react';
import { Link } from 'react-router-dom';
import { FolderHeart, ArrowRight } from 'lucide-react';
import AnimatedIcon from '../shared/AnimatedIcon';
import Button from '../shared/Button';
import Card, { CardContent, CardFooter, CardHeader, CardTitle } from '../shared/Card';

interface Campaign {
  id: string;
  title: string;
  description: string;
  image: string;
  progress: number;
  goal: string;
  raised: string;
}

const CampaignSection = () => {
  // Example campaign data
  const campaigns: Campaign[] = [
    {
      id: '1',
      title: 'School Supplies Drive',
      description: 'Providing essential school supplies to underprivileged children for the upcoming school year.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 75,
      goal: '$20,000',
      raised: '$15,000',
    },
    {
      id: '2',
      title: 'Safe Homes Project',
      description: 'Creating safe living environments for displaced children in urban communities.',
      image: 'https://images.unsplash.com/photo-1618675864864-906a3ce84978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 45,
      goal: '$50,000',
      raised: '$22,500',
    },
    {
      id: '3',
      title: 'Health Check Programs',
      description: 'Providing regular health check-ups and essential medical care to children in underserved areas.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      progress: 60,
      goal: '$30,000',
      raised: '$18,000',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="md:flex md:justify-between md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-compassion-100 text-compassion-800 text-xs font-medium mb-6">
              <AnimatedIcon icon={FolderHeart} size={16} className="mr-1.5" animation="pulse" />
              <span>Featured Campaigns</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Join Our <span className="text-hope-600">Active Campaigns</span>
            </h2>
            
            <p className="text-gray-600">
              Support our ongoing initiatives to make a direct impact in the lives of children who need it most.
            </p>
          </div>
          
          <Link to="/campaigns" className="inline-flex items-center text-hope-600 hover:text-hope-700 font-medium transition-colors group">
            <span>View all campaigns</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <Card key={campaign.id} hoverLift className="overflow-hidden flex flex-col h-full">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader className="pt-6">
                <CardTitle>{campaign.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-gray-600 text-sm mb-6">{campaign.description}</p>
                
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{campaign.raised} raised</span>
                    <span className="text-gray-500">Goal: {campaign.goal}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-hope-500 rounded-full"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{campaign.progress}% complete</div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-2">
                <Link to={`/campaigns/${campaign.id}`} className="w-full">
                  <Button variant="primary" className="w-full">
                    Donate to this Campaign
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
