
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/shared/Button';
import { Heart, Users, FileText, ArrowLeft, ChevronDown, MapPin, Calendar, Target, CheckCircle2 } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Card, { CardContent, CardHeader, CardTitle, CardDescription } from '@/components/shared/Card';

const programsData = [
  {
    id: "family-support",
    title: "Family Support & Poverty Alleviation",
    shortDescription: "Preventing child-family separation through poverty alleviation and support programs.",
    fullDescription: "In Uganda, approximately 30% of the general population lives below the poverty line, with an estimated 44% rate of multidimensional poverty. Nearly half of Ugandan children suffer from high rates of poverty, increasing to 57% for households with three or more children. This greatly impacts their access to education, nutrition, well-being, and healthcare. Through our family strengthening model, we provide families with sustainable income-generating activities, financial literacy, and vocational training, equipping them with hands-on skills to overcome poverty.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    icon: Heart,
    location: "Multiple districts in Uganda",
    startDate: "Ongoing",
    keyPoints: [
      "Sustainable income-generating activities for families",
      "Financial literacy training programs",
      "Vocational skills development workshops",
      "Community-based support systems",
      "Family strengthening initiatives"
    ],
    impact: {
      beneficiaries: "1,200+ families",
      communities: "24 communities",
      successRate: "87% family retention"
    },
    faqs: [
      {
        question: "How does poverty contribute to family separation?",
        answer: "Economic hardship often forces families to make difficult decisions, including placing children in institutional care because they cannot afford to support them. By addressing poverty, we keep families together."
      },
      {
        question: "What types of vocational training do you provide?",
        answer: "We offer training in agriculture, craftsmanship, tailoring, hairdressing, food processing, and other marketable skills that can generate sustainable income."
      },
      {
        question: "How do you measure the success of your poverty alleviation efforts?",
        answer: "We track multiple indicators including household income increases, family stability metrics, reduction in separation cases, and children's continued access to education and healthcare."
      }
    ]
  },
  {
    id: "education-access",
    title: "Education & Training",
    shortDescription: "Ensuring children have access to quality education through partnerships with schools in marginalized areas.",
    fullDescription: "In Uganda, children (0-17 years) make up 50.5% of the population, with a projected population growth rate of 2.9%. Despite government efforts with projects like Parish Development Model and Youth Livelihood Program, many youth are neither in school/training nor employment (NEET). We address this by ensuring children have access to quality education through partnerships with schools in marginalized areas, reducing the burden on families and keeping children in safe, supportive environments. Our innovative educational opportunities, vocational training, and essential resources promote individual and community empowerment.",
    image: "https://images.unsplash.com/photo-1577896851305-fa7de43602c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    icon: FileText,
    location: "Rural and underserved communities in Uganda",
    startDate: "Ongoing",
    keyPoints: [
      "School supplies distribution program",
      "Scholarship opportunities for vulnerable children",
      "Teacher training and capacity building",
      "School infrastructure improvement projects",
      "Educational advocacy initiatives"
    ],
    impact: {
      beneficiaries: "3,500+ children",
      communities: "18 schools",
      successRate: "92% school retention"
    },
    faqs: [
      {
        question: "What age groups does your education program support?",
        answer: "We support children from early childhood education through secondary school, with some limited support for vocational and higher education opportunities."
      },
      {
        question: "How do you select beneficiaries for your education program?",
        answer: "We work with community leaders and social workers to identify the most vulnerable children who face barriers to education, including poverty, distance to school, and family circumstances."
      },
      {
        question: "Do you work with existing schools or build new ones?",
        answer: "We primarily partner with existing schools to improve their capacity, resources, and teaching quality. In some cases, we support infrastructure improvements or expansions where needed."
      }
    ]
  },
  {
    id: "health-wellbeing",
    title: "Health & Wellbeing",
    shortDescription: "Providing access to essential health services and mental health support for vulnerable children and families.",
    fullDescription: "In Uganda, health and wellbeing challenges continue to have a significant impact on the population. Despite efforts from various stakeholders, healthcare access, maternal and child health, mental health, and environmental concerns remain critical issues requiring sustained attention and innovative solutions. BHI addresses these health needs of underserved communities by advocating for greater access to healthcare services, mental health support, and wellness programs, with emphasis on eradicating healthcare inequities and fostering inclusive healthcare systems that cater to the unique needs of children in disadvantaged populations.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    icon: Heart,
    location: "Underserved communities in Uganda",
    startDate: "Ongoing",
    keyPoints: [
      "Preventive healthcare services",
      "Mental health and psychosocial support",
      "Health education and awareness campaigns",
      "Nutrition support for children and families",
      "Partnerships with local health facilities"
    ],
    impact: {
      beneficiaries: "4,200+ individuals",
      communities: "15 areas",
      successRate: "78% health improvement"
    },
    faqs: [
      {
        question: "What types of health services do you provide?",
        answer: "We focus on preventive care, health education, mental health support, nutritional guidance, and connecting families to essential medical services through our healthcare partners."
      },
      {
        question: "How do you address mental health needs?",
        answer: "We offer age-appropriate counseling, support groups, and trauma-informed care for children who have experienced separation or other adverse childhood experiences."
      },
      {
        question: "Do you provide direct medical treatment?",
        answer: "While we don't operate medical facilities, we partner with local healthcare providers to ensure children and families can access quality medical care when needed, and we help cover costs for those who cannot afford it."
      }
    ]
  },
  {
    id: "community-development",
    title: "Community Development",
    shortDescription: "Strengthening communities through social inclusion and local business support.",
    fullDescription: "Bright Horizons Initiative strengthens communities by promoting social inclusion, nurturing local businesses, and advocating for essential services, creating vibrant, interconnected communities that enrich the lives of vulnerable children and families. Through our community development initiatives, we foster a sense of belonging and shared purpose, working collaboratively with Civil Society Organizations and governmental departments responsible for the wellbeing of families and children in Uganda.",
    image: "https://images.unsplash.com/photo-1627480108595-09e9c8d0c1b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    icon: Users,
    location: "Various communities across Uganda",
    startDate: "Ongoing",
    keyPoints: [
      "Community leadership development",
      "Local economic empowerment initiatives",
      "Infrastructure improvement projects",
      "Social cohesion and inclusion programs",
      "Advocacy for essential community services"
    ],
    impact: {
      beneficiaries: "15+ communities",
      projects: "24 completed",
      successRate: "85% sustainability"
    },
    faqs: [
      {
        question: "How do you ensure community ownership of development projects?",
        answer: "We implement a participatory approach where community members identify needs, help design solutions, contribute resources or labor when possible, and lead implementation with our support."
      },
      {
        question: "What types of community infrastructure do you support?",
        answer: "Depending on community needs, we support improvements to water access, community centers, playgrounds, libraries, learning spaces, and other facilities that benefit children and families."
      },
      {
        question: "How do you measure the success of community development efforts?",
        answer: "We track indicators such as community participation rates, project sustainability, improvements in children's welfare, economic growth metrics, and qualitative feedback from community members."
      }
    ]
  },
  {
    id: "boy-child-advocacy",
    title: "Boy Child Advocacy",
    shortDescription: "Providing dedicated support and development programs for boy children.",
    fullDescription: "We provide a dedicated platform focusing on the support and development of boy children. This includes organizing boy child parenting sessions, boy child camp sessions, and guiding them towards becoming responsible future adults. Our initiative aims to address the specific challenges faced by boys in vulnerable communities, helping them develop positive values, life skills, and a sense of responsibility.",
    image: "https://images.unsplash.com/photo-1597356946679-83f39168fbbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    icon: Users,
    location: "Multiple locations in Uganda",
    startDate: "Ongoing",
    keyPoints: [
      "Boy child parenting sessions",
      "Mentorship and guidance programs",
      "Life skills development",
      "Camp sessions and activities",
      "Psychological support and counseling"
    ],
    impact: {
      beneficiaries: "800+ boys",
      communities: "12 served",
      successRate: "89% positive development"
    },
    faqs: [
      {
        question: "Why focus specifically on boy children?",
        answer: "Boys in vulnerable communities face unique challenges that can lead to negative outcomes if not addressed. Our program complements existing initiatives for girls, ensuring all children receive appropriate support."
      },
      {
        question: "What age groups do your boy child programs target?",
        answer: "We work with boys from ages 6 to 18, with age-appropriate activities and mentorship designed for different developmental stages."
      },
      {
        question: "How do you measure the impact of your boy child advocacy?",
        answer: "We track behavioral improvements, school performance, relationship building skills, self-confidence, and other key indicators of positive youth development."
      }
    ]
  }
];

const ProgramDetail = () => {
  const { id } = useParams<{id: string}>();
  const program = programsData.find(p => p.id === id);
  
  if (!program) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-16">
          <div className="container-custom text-center">
            <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
            <p className="mb-6">Sorry, the program you're looking for doesn't exist.</p>
            <Link to="/programs">
              <Button variant="primary">
                <ArrowLeft size={16} className="mr-2" /> 
                Back to Programs
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const ProgramIcon = program.icon;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section 
          className="py-12 md:py-20 bg-cover bg-center relative"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${program.image})` 
          }}
        >
          <div className="container-custom relative z-10 text-white">
            <Link to="/programs" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              <span>Back to All Programs</span>
            </Link>
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-600/20 text-hope-100 text-xs font-medium mb-4">
              <ProgramIcon size={16} className="mr-1.5" />
              <span>BHI Program</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {program.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
              {program.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="inline-flex items-center bg-black/30 px-4 py-2 rounded-lg">
                <MapPin size={18} className="mr-2 text-hope-300" />
                <span>{program.location}</span>
              </div>
              
              <div className="inline-flex items-center bg-black/30 px-4 py-2 rounded-lg">
                <Calendar size={18} className="mr-2 text-hope-300" />
                <span>{program.startDate}</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                  <h2 className="text-2xl font-bold mb-6">About This Program</h2>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {program.fullDescription}
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">Key Focus Areas</h3>
                  <ul className="space-y-3 mb-8">
                    {program.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 size={20} className="mr-2 text-hope-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
                  <h2 className="text-2xl font-bold mb-6">Program Impact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                          <Users size={20} className="text-hope-600" />
                        </div>
                        <CardTitle>{program.impact.beneficiaries}</CardTitle>
                        <CardDescription>Beneficiaries</CardDescription>
                      </CardHeader>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                          <MapPin size={20} className="text-hope-600" />
                        </div>
                        <CardTitle>{program.impact.communities}</CardTitle>
                        <CardDescription>Communities</CardDescription>
                      </CardHeader>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-hope-100 flex items-center justify-center mb-4">
                          <Target size={20} className="text-hope-600" />
                        </div>
                        <CardTitle>{program.impact.successRate}</CardTitle>
                        <CardDescription>Success Rate</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {program.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-medium text-base">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm mb-8 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Support This Program</h3>
                  <p className="text-gray-600 mb-6">
                    Your contribution can make a significant difference in the lives of vulnerable children and families through this program.
                  </p>
                  
                  <div className="space-y-4">
                    <Link to="/donate">
                      <Button variant="primary" className="w-full" withIcon>
                        <Heart size={18} className="mr-1.5" />
                        Donate Now
                      </Button>
                    </Link>
                    
                    <Link to="/volunteer">
                      <Button variant="outline" className="w-full" withIcon>
                        <Users size={18} className="mr-1.5" />
                        Volunteer
                      </Button>
                    </Link>
                    
                    <Link to="/contact">
                      <Button variant="ghost" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="font-medium mb-3">Contact Information</h4>
                    <p className="text-sm text-gray-600">
                      For more information about this program:<br />
                      <strong>Email:</strong> hjbiibi@gmail.com<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProgramDetail;
