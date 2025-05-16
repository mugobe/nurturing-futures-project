
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Heart } from 'lucide-react';
import Button from '@/components/shared/Button';
import { toast } from 'sonner';

const Donate = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    amount: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your interest in donating!');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-hope-50">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6 animate-fade-in">
                <Heart size={16} className="mr-1.5" />
                <span>Support BHI</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Support <span className="text-hope-600">Bright Horizons Initiative</span>
              </h1>

              <p className="text-xl text-gray-600 animate-fade-in">
                At Bright Horizons Initiative, our mission is to intentionally improve and impact children's lives. Your donation can make a world of difference.
              </p>
            </div>
          </div>
        </section>

        {/* Simple Donation Form Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-lg mx-auto bg-white rounded-xl shadow-sm p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
                  <Heart size={16} className="mr-1.5" />
                  <span>Donate Now</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                  Make Your <span className="text-hope-600">Contribution</span>
                </h2>

                <p className="text-gray-600">
                  Your support will help us continue our mission to uplift marginalized children.
                </p>
              </div>
              {submitted ? (
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-hope-700">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your generosity makes a difference. We appreciate your interest in supporting BHI.
                  </p>
                  <Button variant="primary" onClick={() => setSubmitted(false)}>
                    Make Another Donation
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="amount">
                        Donation Amount (USD)
                      </label>
                      <input
                        id="amount"
                        name="amount"
                        type="number"
                        min="1"
                        placeholder="e.g. 50"
                        value={form.amount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                        required
                      />
                    </div>
                    <Button type="submit" variant="primary" className="w-full mt-2">
                      Submit
                    </Button>
                  </div>
                </form>
              )}
              <div className="text-center mt-8">
                <a
                  href="https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="compassion" className="w-full">
                    Donate via PayPal
                  </Button>
                </a>
                <p className="mt-2 text-xs text-gray-500">
                  You will be redirected to PayPal. (Edit this link with your actual PayPal details.)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Donate;

