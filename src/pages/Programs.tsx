
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, GraduationCap, HeartHandshake, Utensils, BarChart3, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card, { CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/shared/Card';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Button from '@/components/shared/Button';

// Define the program type for type safety
interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const Programs = () => {
  // Program data
  const programs: Program[] = [
    {
      id: "education",
      title: "Educational Support",
      description: "Providing access to quality education, learning materials, and scholarship opportunities for underprivileged children.",
      icon: BookOpen,
      color: "#0da2e7"
    },
    {
      id: "mentorship",
      title: "Mentorship Program",
      description: "Connecting children with positive role models who provide guidance, support, and inspiration.",
      icon: GraduationCap,
      color: "#2dc653"
    },
    {
      id: "healthcare",
      title: "Healthcare Initiatives",
      description: "Ensuring children receive the medical care they need through check-ups, vaccinations, and health education.",
      icon: HeartHandshake,
      color: "#e74c3c"
    },
    {
      id: "nutrition",
      title: "Nutrition Program",
      description: "Providing balanced meals and nutrition education to combat malnutrition and promote healthy development.",
      icon: Utensils,
      color: "#f39c12"
    },
    {
      id: "skills",
      title: "Skills Development",
      description: "Teaching practical skills to prepare teenagers for future employment and self-sustainability.",
      icon: BarChart3,
      color: "#9b59b6"
    },
    {
      id: "community",
      title: "Community Building",
      description: "Creating safe spaces and community centers where children can learn, play, and grow together.",
      icon: Users,
      color: "#3498db"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Our Programs</h1>
              <p className="text-gray-600">
                Through our diverse range of programs, we work to address the various needs of children 
                and create lasting, positive impact in their lives.
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
