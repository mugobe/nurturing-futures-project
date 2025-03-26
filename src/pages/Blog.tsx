
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Search, Tag } from 'lucide-react';
import AnimatedIcon from '@/components/shared/AnimatedIcon';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/shared/Card';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Example blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How Early Education Changes Lives',
      excerpt: 'Discover the long-term impact of early childhood education on marginalized communities.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1544776193-52d3932fe5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'May 15, 2023',
      category: 'Education',
      author: {
        name: 'Sarah Johnson',
        role: 'Education Specialist',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
      },
      tags: ['education', 'children', 'community']
    },
    {
      id: '2',
      title: 'Stories of Hope: Meet Sophia',
      excerpt: 'Read about Sophia\'s journey from a challenging childhood to becoming a community leader.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'April 28, 2023',
      category: 'Success Stories',
      author: {
        name: 'Michael Chen',
        role: 'Community Coordinator',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
      },
      tags: ['success', 'inspiration', 'youth']
    },
    {
      id: '3',
      title: 'The Importance of Community Support',
      excerpt: 'Why building strong community networks is essential for sustainable child development programs.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'April 10, 2023',
      category: 'Community',
      author: {
        name: 'Emma Williams',
        role: 'Program Director',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
      },
      tags: ['community', 'development', 'support']
    },
    {
      id: '4',
      title: 'Nutrition Programs: A Critical Foundation',
      excerpt: 'How proper nutrition programs lay the groundwork for children\'s health and academic success.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'March 22, 2023',
      category: 'Health',
      author: {
        name: 'David Kim',
        role: 'Health Program Manager',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
      },
      tags: ['health', 'nutrition', 'education']
    },
    {
      id: '5',
      title: 'Art Therapy for Trauma Recovery',
      excerpt: 'Exploring how creative expression helps children process and heal from traumatic experiences.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'March 15, 2023',
      category: 'Therapy',
      author: {
        name: 'Aisha Okafor',
        role: 'Child Psychologist',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
      },
      tags: ['therapy', 'art', 'healing', 'trauma']
    },
    {
      id: '6',
      title: 'Volunteer Spotlight: Teams Making a Difference',
      excerpt: 'Highlighting the impact of corporate volunteer teams in our summer programs.',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'February 28, 2023',
      category: 'Volunteers',
      author: {
        name: 'Carlos Rivera',
        role: 'Volunteer Coordinator',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80'
      },
      tags: ['volunteers', 'corporate', 'teamwork']
    }
  ];
  
  // Get unique categories
  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];
  
  // Filter blog posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-hope-50">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6 animate-fade-in">
                <AnimatedIcon icon={BookOpen} size={16} className="mr-1.5" animation="pulse" />
                <span>Our Blog</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                News & <span className="text-hope-600">Stories</span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in">
                Stay updated with insights, success stories, and news about our work with marginalized children.
              </p>
            </div>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-8 border-b border-gray-200">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Filter by:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedCategory === category
                          ? 'bg-hope-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category === 'all' ? 'All' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {filteredPosts.map((post) => (
                  <Card key={post.id} hover className="h-full flex flex-col">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <CardHeader className="pt-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-hope-100 text-hope-800">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar size={12} className="mr-1" />
                          {post.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                          <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.author.role}</p>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-hope-600 hover:bg-hope-700 transition-colors"
                      >
                        Read Article
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Popular Tags */}
        <section className="py-12 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <div className="inline-flex items-center mb-2">
                <Tag size={16} className="text-hope-600 mr-2" />
                <span className="text-lg font-semibold">Popular Tags</span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm hover:bg-hope-50 hover:border-hope-200 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
