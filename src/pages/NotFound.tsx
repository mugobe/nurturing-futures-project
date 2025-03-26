
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/shared/Button";
import { Heart, Home } from "lucide-react";
import AnimatedIcon from "@/components/shared/AnimatedIcon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center pt-24">
        <div className="container-custom py-16 md:py-24 text-center">
          <AnimatedIcon icon={Heart} size={64} className="mx-auto mb-8 text-hope-500" animation="pulse" />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
          
          <p className="text-xl text-gray-600 max-w-lg mx-auto mb-10">
            We're sorry, but the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/">
              <Button variant="primary" size="lg" withIcon>
                <Home size={18} className="mr-2" />
                Return Home
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
          </div>
          
          <div className="mt-16">
            <h3 className="text-lg font-semibold mb-4">Looking for something specific?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-hope-600 hover:text-hope-700 transition-colors">About Us</Link>
              <Link to="/volunteer" className="text-hope-600 hover:text-hope-700 transition-colors">Volunteer</Link>
              <Link to="/donate" className="text-hope-600 hover:text-hope-700 transition-colors">Donate</Link>
              <Link to="/campaigns" className="text-hope-600 hover:text-hope-700 transition-colors">Campaigns</Link>
              <Link to="/blog" className="text-hope-600 hover:text-hope-700 transition-colors">Blog</Link>
              <Link to="/contact" className="text-hope-600 hover:text-hope-700 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
