
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, GraduationCap, HeartHandshake, Utensils, BarChart3, Users, PiggyBank } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/shared/Card';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Button from '@/components/shared/Button';
import type { LucideIcon } from 'lucide-react';

// Define the program type for type safety
interface Program {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

const Programs = () => {
  // Program data
  const programs: Program[] = [
    {
      id: "family-separation",
      title: "Supporting Separated Children",
      description: "We advocate for family-based care through African-based research, supporting kinship and the traditional concept of a child being raised by the village.",
      icon: HeartHandshake,
      color: "#e74c3c"
    },
    {
      id: "poverty-alleviation",
      title: "Poverty Alleviation",
      description: "Through our family strengthening model, we provide families with sustainable income generating activities, financial literacy and vocational training.",
      icon: PiggyBank,
      color: "#f39c12"
    },
    {
      id: "education",
      title: "Education Access",
      description: "Ensuring children have access to quality education through partnerships with schools, especially in marginalized areas.",
      icon: BookOpen,
      color: "#0da2e7"
    },
    {
      id: "healthcare",
      title: "Healthcare Initiatives",
      description: "Partnering with health centers to provide quality healthcare, reducing the burden on families and keeping children in safe environments.",
      icon: HeartHandshake,
      color: "#e74c3c"
    },
    {
      id: "community-support",
      title: "Community Support Programs",
      description: "Establishing community-based support systems, including parenting classes, counseling, and childcare services.",
      icon: Users,
      color: "#3498db"
    },
    {
      id: "boy-child",
      title: "Boy Child Advocacy",
      description: "Providing a dedicated platform for boy children through parenting sessions, camp sessions, and guidance towards becoming responsible adults.",
      icon: GraduationCap,
      color: "#2dc653"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">How We Care</h1>
              <p className="text-gray-600">
                At BHI, we deliver direct support to children and families, while also engaging in research, 
                knowledge exchange, humanitarian responses, and advocacy for vulnerable children.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card key={program.id} className="hover-lift">
                  <CardHeader>
                    <AnimatedIcon 
                      icon={program.icon} 
                      size={40} 
                      color={program.color} 
                      animation="float" 
                      className="mb-4" 
                    />
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/programs/${program.id}`} className="w-full">
                      <Button variant="outline" size="md" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
