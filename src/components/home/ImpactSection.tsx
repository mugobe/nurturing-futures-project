
import React from 'react';
import { Users, HeartHandshake, School, Home, LucideIcon } from 'lucide-react';
import AnimatedIcon from '../shared/AnimatedIcon';
import Card, { CardContent, CardDescription, CardHeader, CardTitle } from '../shared/Card';
import { cn } from '@/lib/utils';

interface ImpactItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ImpactSection = () => {
  const impactItems: ImpactItem[] = [
    {
      icon: HeartHandshake,
      title: 'Supporting Separated Children',
      description: 'We advocate for family-based care through African-based research, supporting the traditional concept of a child being raised by the village.',
    },
    {
      icon: School,
      title: 'Education Access',
      description: 'We ensure children have access to quality education through partnerships with schools in marginalized areas.',
    },
    {
      icon: Home,
      title: 'Preventing Separation',
      description: 'Through poverty alleviation, community support, and family strengthening, we work to prevent child-family separation.',
    },
    {
      icon: Users,
      title: 'Boy Child Advocacy',
      description: 'We provide a dedicated platform for boy children through parenting sessions and guidance towards becoming responsible adults.',
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            How We Care
          </h2>
          <p className="text-foreground/80 text-sm md:text-base mt-4">
            Child-family separation in Africa affects millions of children. We work to address this critical issue through multiple approaches.
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
                <div></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
