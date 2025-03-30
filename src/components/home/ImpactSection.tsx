
import React from 'react';
import { PiggyBank, BookOpen, Heart, Award, LucideIcon } from 'lucide-react';
import AnimatedIcon from '../shared/AnimatedIcon';
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '../shared/Card';
import { cn } from '@/lib/utils';

interface ImpactItem {
  icon: LucideIcon;  // Explicitly use LucideIcon type
  title: string;
  description: string;
}

const ImpactSection = () => {
  const impactItems: ImpactItem[] = [
    {
      icon: PiggyBank,
      title: 'Financial Transparency',
      description: 'We ensure every donation is used effectively, providing clear reports on our financial activities.',
    },
    {
      icon: BookOpen,
      title: 'Educational Programs',
      description: 'We run several educational programs to help children get access to better learning opportunities.',
    },
    {
      icon: Heart,
      title: 'Healthcare Initiatives',
      description: 'We provide access to essential healthcare services, ensuring children receive the medical attention they need.',
    },
    {
      icon: Award,
      title: 'Community Support',
      description: 'We engage with local communities to build sustainable support systems for children and their families.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Our Impact
          </h2>
          <p className="text-foreground/80 text-sm md:text-base mt-4">
            See the difference we're making in the lives of children every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactItems.map((item, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <AnimatedIcon 
                  icon={item.icon} 
                  size={40} 
                  color="#0da2e7" 
                  animation="float" 
                  className="mb-4" 
                />
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Empty content to satisfy the children requirement */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
