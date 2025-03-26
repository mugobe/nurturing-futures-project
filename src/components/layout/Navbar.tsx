
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Heart, Menu, X, LogIn } from 'lucide-react';
import Button from '../shared/Button';
import AnimatedIcon from '../shared/AnimatedIcon';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <AnimatedIcon icon={Heart} size={28} color="#0da2e7" animation="pulse" />
          <span className="text-xl font-display font-bold bg-gradient-to-r from-hope-600 to-hope-800 text-transparent bg-clip-text">
            BrightFutures
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-hope-600',
                    location.pathname === link.path ? 'text-hope-600 font-semibold' : 'text-foreground/80'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3">
            <Link to="/volunteer">
              <Button variant="warmth" size="md">
                Volunteer
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="primary" size="md">
                Donate
              </Button>
            </Link>
            <Link to="/admin">
              <Button variant="outline" size="md" className="flex items-center gap-2">
                <LogIn size={16} />
                Login
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[64px] bg-white z-50 animate-fade-in">
            <div className="flex flex-col h-full">
              <nav className="container-custom py-8 flex-1">
                <ul className="space-y-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className={cn(
                          'text-lg font-medium block py-2 transition-colors hover:text-hope-600',
                          location.pathname === link.path ? 'text-hope-600 font-semibold' : 'text-foreground/80'
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="container-custom py-8 grid grid-cols-2 gap-3">
                <Link to="/volunteer">
                  <Button variant="warmth" size="lg" className="w-full">
                    Volunteer
                  </Button>
                </Link>
                <Link to="/donate">
                  <Button variant="primary" size="lg" className="w-full">
                    Donate
                  </Button>
                </Link>
                <Link to="/admin" className="col-span-2 mt-3">
                  <Button variant="outline" size="lg" className="w-full flex items-center justify-center gap-2">
                    <LogIn size={18} />
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
