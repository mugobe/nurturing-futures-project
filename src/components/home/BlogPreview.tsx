
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Calendar } from 'lucide-react';
import AnimatedIcon from '../shared/AnimatedIcon';
import Card, { CardContent, CardHeader, CardTitle } from '../shared/Card';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const BlogPreview = () => {
  // Example blog post data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How Early Education Changes Lives',
      excerpt: 'Discover the long-term impact of early childhood education on marginalized communities.',
      image: 'https://images.unsplash.com/photo-1544776193-52d3932fe5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'May 15, 2023',
      category: 'Education',
    },
    {
      id: '2',
      title: 'Stories of Hope: Meet Sophia',
      excerpt: 'Read about Sophia\'s journey from a challenging childhood to becoming a community leader.',
      image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'April 28, 2023',
      category: 'Success Stories',
    },
    {
      id: '3',
      title: 'The Importance of Community Support',
      excerpt: 'Why building strong community networks is essential for sustainable child development programs.',
      image: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      date: 'April 10, 2023',
      category: 'Community',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="md:flex md:justify-between md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6">
              <AnimatedIcon icon={BookOpen} size={16} className="mr-1.5" animation="pulse" />
              <span>Latest News & Stories</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Read Our <span className="text-hope-600">Blog</span>
            </h2>
            
            <p className="text-gray-600">
              Insights, success stories, and updates from our work with children around the world.
            </p>
          </div>
          
          <Link to="/blog" className="inline-flex items-center text-hope-600 hover:text-hope-700 font-medium transition-colors group">
            <span>View all articles</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} hover className="overflow-hidden h-full flex flex-col">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader className="pt-6">
                <div className="flex items-center mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-hope-100 text-hope-800">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs ml-3">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                  </div>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-gray-600 text-sm mb-6">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-hope-600 hover:text-hope-700 text-sm font-medium transition-colors group mt-auto"
                >
                  <span>Read more</span>
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
