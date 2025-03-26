
import React from 'react';
import { HeartHandshake, School, ShieldHeart, Waypoints } from 'lucide-react';
import AnimatedIcon from '../shared/AnimatedIcon';
import Card, { CardContent, CardHeader, CardTitle } from '../shared/Card';

const ImpactSection = () => {
  const impactAreas = [
    {
      icon: ShieldHeart,
      title: "Child Protection",
      description: "We ensure children are protected from harm, exploitation, and abuse through our comprehensive safeguarding programs.",
      stat: "1,200+",
      statDescription: "Children protected annually",
      color: "bg-hope-50 text-hope-700",
      animation: "float"
    },
    {
      icon: School,
      title: "Education",
      description: "Our educational initiatives give marginalized children access to quality learning opportunities.",
      stat: "24",
      statDescription: "Schools supported",
      color: "bg-warmth-50 text-warmth-700",
      animation: "pulse"
    },
    {
      icon: HeartHandshake,
      title: "Community Support",
      description: "We strengthen communities to better care for their children through development projects.",
      stat: "120+",
      statDescription: "Communities engaged",
      color: "bg-compassion-50 text-compassion-700",
      animation: "float"
    },
    {
      icon: Waypoints,
      title: "Future Pathways",
      description: "We create opportunities for youth transition to independence through skills training and mentorship.",
      stat: "94%",
      statDescription: "Program completion rate",
      color: "bg-emerald-50 text-emerald-700",
      animation: "pulse"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-warmth-100 text-warmth-800 text-xs font-medium mb-6">
            <AnimatedIcon icon={HeartHandshake} size={16} className="mr-1.5" animation="pulse" />
            <span>Our Impact Areas</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            How We Make a <span className="text-hope-600">Difference</span>
          </h2>
          
          <p className="text-gray-600">
            Through our focused programs, we create meaningful and lasting change in the lives of children and their communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactAreas.map((area, index) => (
            <Card key={index} hover className="h-full">
              <CardHeader>
                <div className={`w-12 h-12 rounded-full ${area.color} flex items-center justify-center mb-4`}>
                  <AnimatedIcon icon={area.icon} animation={area.animation as any} size={22} />
                </div>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{area.description}</p>
                <div className="mt-auto">
                  <p className="text-2xl font-bold text-gray-900">{area.stat}</p>
                  <p className="text-xs text-gray-500">{area.statDescription}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
