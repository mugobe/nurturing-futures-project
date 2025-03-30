
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, GraduationCap, HeartHandshake, Utensils, BarChart3, Users, ArrowLeft, Check } from 'lucide-react';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Button from '@/components/shared/Button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Define our program type
interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  longDescription: string;
  impact: string[];
  faqs: { question: string; answer: string }[];
}

const ProgramDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Program data with extended information
  const programs: Program[] = [
    {
      id: "education",
      title: "Educational Support",
      description: "Providing access to quality education, learning materials, and scholarship opportunities for underprivileged children.",
      icon: BookOpen,
      color: "#0da2e7",
      longDescription: "Our Educational Support program seeks to break the cycle of poverty through education. We provide school supplies, textbooks, and create learning environments that foster academic growth. Through scholarships and tutoring, we help children overcome barriers to education and achieve their full potential.",
      impact: [
        "Provided educational materials to over 5,000 children",
        "Awarded 250 scholarships to promising students",
        "Built or renovated 15 schools in underserved communities",
        "Trained 300 teachers in modern teaching methods"
      ],
      faqs: [
        {
          question: "How are scholarship recipients selected?",
          answer: "We have a rigorous selection process that considers academic performance, financial need, and the student's commitment to their community. We work with local schools to identify candidates who show potential but face significant barriers to education."
        },
        {
          question: "Can I donate specifically to the education program?",
          answer: "Yes! When making a donation, you can specify that you'd like your contribution to go toward our educational initiatives. This helps us direct resources to areas you're most passionate about."
        },
        {
          question: "Do you work with local schools?",
          answer: "Absolutely. We believe in strengthening existing educational systems rather than creating parallel ones. We partner with local schools to enhance their resources, train teachers, and improve facilities."
        }
      ]
    },
    {
      id: "mentorship",
      title: "Mentorship Program",
      description: "Connecting children with positive role models who provide guidance, support, and inspiration.",
      icon: GraduationCap,
      color: "#2dc653",
      longDescription: "Our Mentorship Program connects children with caring adults who serve as positive role models. These mentors provide guidance, encouragement, and support, helping children navigate challenges and develop confidence. Through regular one-on-one sessions and group activities, mentors build lasting relationships that inspire children to dream big and work toward their goals.",
      impact: [
        "Matched 1,200 children with dedicated mentors",
        "90% of mentored children showed improved self-confidence",
        "85% improvement in school attendance among mentored youth",
        "75% of mentored teenagers pursue higher education"
      ],
      faqs: [
        {
          question: "How can I become a mentor?",
          answer: "We're always looking for caring adults to join our mentorship program! The process begins with an application, followed by a background check and training sessions. We ask for a minimum one-year commitment to ensure stability for the children."
        },
        {
          question: "How much time do mentors need to commit?",
          answer: "We ask mentors to spend at least 4 hours per month with their mentee. This can be divided into weekly or bi-weekly sessions, depending on what works best for both schedules."
        },
        {
          question: "What kinds of activities do mentors do with children?",
          answer: "Activities vary based on the child's interests and needs. They might include homework help, sports, arts and crafts, visiting museums, or simply talking and listening. We provide resources and suggestions to help mentors plan meaningful activities."
        }
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare Initiatives",
      description: "Ensuring children receive the medical care they need through check-ups, vaccinations, and health education.",
      icon: HeartHandshake,
      color: "#e74c3c",
      longDescription: "Our Healthcare Initiatives focus on both preventive care and treatment. We organize regular health camps where children receive check-ups, vaccinations, and dental care. We also provide health education to children and families, covering topics like nutrition, hygiene, and disease prevention. For children with ongoing health needs, we coordinate with local healthcare providers to ensure they receive necessary treatments.",
      impact: [
        "Provided medical check-ups to over 8,000 children annually",
        "Administered essential vaccinations to 12,000 children",
        "Conducted 500 health education workshops",
        "Provided treatment for 3,000 children with chronic conditions"
      ],
      faqs: [
        {
          question: "Do you provide emergency medical care?",
          answer: "While we focus primarily on preventive care and managing chronic conditions, we do have funds set aside for emergency medical situations. We work with local hospitals to ensure children can access urgent care when needed."
        },
        {
          question: "How do you handle children with special medical needs?",
          answer: "We have partnerships with specialists who volunteer their time to treat children with complex medical needs. We also help families navigate healthcare systems and access specialized care when necessary."
        },
        {
          question: "Do you provide mental health support?",
          answer: "Yes, mental health is an important part of our healthcare program. We have counselors who work with children experiencing trauma, anxiety, or other mental health challenges. We also train caregivers to recognize signs of distress and provide appropriate support."
        }
      ]
    },
    {
      id: "nutrition",
      title: "Nutrition Program",
      description: "Providing balanced meals and nutrition education to combat malnutrition and promote healthy development.",
      icon: Utensils,
      color: "#f39c12",
      longDescription: "Our Nutrition Program addresses both immediate hunger and long-term nutritional needs. We provide balanced meals at schools and community centers, ensuring children receive the nutrients essential for healthy development. We also conduct workshops on nutrition and sustainable food practices, teaching families how to prepare nutritious meals on a budget and grow their own vegetables when possible.",
      impact: [
        "Served over 1 million nutritious meals",
        "Reduced malnutrition by 40% in targeted communities",
        "Established 25 community gardens",
        "Trained 2,000 families in nutrition and cooking"
      ],
      faqs: [
        {
          question: "How do you ensure meals are nutritionally balanced?",
          answer: "We work with nutritionists to design meal plans that meet children's dietary needs. Our meals include a balance of protein, carbohydrates, healthy fats, and plenty of fruits and vegetables to ensure children receive all necessary nutrients."
        },
        {
          question: "Do you accommodate dietary restrictions?",
          answer: "Yes, we're sensitive to both medical dietary restrictions and cultural food practices. We offer alternatives for children with allergies or specific dietary needs, and we respect cultural and religious food traditions."
        },
        {
          question: "Do you have programs to address food insecurity at home?",
          answer: "Absolutely. Besides providing meals at schools and centers, we also run food pantries and send weekend food packages home with children who need them. We work to ensure that families have access to nutritious food even when our programs aren't in session."
        }
      ]
    },
    {
      id: "skills",
      title: "Skills Development",
      description: "Teaching practical skills to prepare teenagers for future employment and self-sustainability.",
      icon: BarChart3,
      color: "#9b59b6",
      longDescription: "Our Skills Development program focuses on preparing older children and teenagers for independent adulthood. We offer workshops and courses in various practical skills, from computer literacy and financial management to vocational training in fields like carpentry, electronics, and culinary arts. By equipping young people with marketable skills, we help them build sustainable futures and break cycles of poverty.",
      impact: [
        "Trained 3,500 teenagers in various vocational skills",
        "80% of program graduates found employment or started businesses",
        "Partnered with 150 local businesses for apprenticeships",
        "Provided 500 microloans for youth entrepreneurship"
      ],
      faqs: [
        {
          question: "What age groups participate in skills development?",
          answer: "Our skills development programs primarily target youth aged 14-21, though we have some introductory programs for children as young as 12. We tailor the content to be age-appropriate while still providing valuable skill building."
        },
        {
          question: "Do you help with job placement after training?",
          answer: "Yes, we have a dedicated team that helps program graduates find employment opportunities. We maintain relationships with local businesses and organizations that value our training programs and often hire our graduates."
        },
        {
          question: "Can participants choose which skills to learn?",
          answer: "Absolutely! We offer a variety of tracks and allow participants to select areas that interest them. We also provide career counseling to help young people identify their strengths and interests before they choose a specialization."
        }
      ]
    },
    {
      id: "community",
      title: "Community Building",
      description: "Creating safe spaces and community centers where children can learn, play, and grow together.",
      icon: Users,
      color: "#3498db",
      longDescription: "Our Community Building program focuses on creating safe, nurturing environments where children can thrive. We establish and maintain community centers that serve as hubs for education, recreation, and support services. These centers bring children together for structured activities, fostering friendships and a sense of belonging. We also organize community events that celebrate cultural traditions and bring families together.",
      impact: [
        "Established 30 community centers in underserved areas",
        "Created safe spaces for 15,000 children annually",
        "Organized 200 community events and celebrations",
        "Trained 500 community volunteers in child development"
      ],
      faqs: [
        {
          question: "What activities do you offer at the community centers?",
          answer: "Our centers offer a wide range of activities, including homework help, arts and crafts, sports, music, dance, and cultural programs. We design activities to support children's development across physical, cognitive, social, and emotional domains."
        },
        {
          question: "Are community centers open to all children?",
          answer: "Yes, our centers welcome all children in the community. While we particularly focus on serving vulnerable children, we believe in creating inclusive spaces where children from diverse backgrounds can learn and play together."
        },
        {
          question: "How can local community members get involved?",
          answer: "There are many ways for community members to participate! You can volunteer at a center, donate supplies, share a special skill with the children, or help organize community events. We believe that community involvement is essential for creating sustainable change."
        }
      ]
    }
  ];
  
  const program = programs.find(p => p.id === id);
  
  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
            <p className="mb-6">Sorry, the program you're looking for doesn't exist.</p>
            <Link to="/programs">
              <Button variant="primary">Return to Programs</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-16">
          <Link to="/programs" className="inline-flex items-center text-hope-600 hover:text-hope-700 mb-8 transition-colors group">
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Programs</span>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16">
            <div className="md:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: `${program.color}20` }}>
                  <AnimatedIcon 
                    icon={program.icon} 
                    size={36} 
                    color={program.color} 
                    animation="float" 
                  />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{program.title}</h1>
              </div>
              
              <p className="text-lg text-gray-700 mb-8">{program.description}</p>
              
              <div className="prose prose-lg max-w-none">
                <p>{program.longDescription}</p>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Program Impact</h3>
              <ul className="space-y-3">
                {program.impact.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/donate">
                  <Button variant="primary" size="lg" className="w-full">
                    Support This Program
                  </Button>
                </Link>
              </div>
              
              <div className="mt-4">
                <Link to="/volunteer">
                  <Button variant="outline" size="lg" className="w-full">
                    Volunteer With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {program.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProgramDetail;
