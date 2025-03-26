
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calendar, Tag, Clock, ArrowLeft, Share2, Heart, BookOpen } from 'lucide-react';
import Button from '@/components/shared/Button';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/shared/Card';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real application, this would fetch the blog post from an API
  // For demo purposes, we're using static data
  const post = {
    id: id || '1',
    title: 'How Early Education Changes Lives',
    excerpt: 'Discover the long-term impact of early childhood education on marginalized communities.',
    image: 'https://images.unsplash.com/photo-1544776193-52d3932fe5a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    date: 'May 15, 2023',
    readTime: '5 min read',
    category: 'Education',
    author: {
      name: 'Sarah Johnson',
      role: 'Education Specialist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80',
      bio: 'Sarah has over 10 years of experience in developing educational programs for marginalized children.'
    },
    tags: ['education', 'children', 'community', 'development'],
    content: `
      <p>Early childhood education is one of the most powerful tools we have to change the trajectory of a child's life, especially for those from marginalized communities. Research consistently shows that quality early education can have profound and lasting effects that extend far beyond the classroom.</p>
      
      <h2>The Critical Early Years</h2>
      
      <p>The first five years of a child's life are a period of incredible growth and development. During this time, the brain forms more than one million new neural connections every second, building the foundation for all future learning, behavior, and health.</p>
      
      <p>For children from marginalized communities who may face additional challenges such as poverty, limited resources, or lack of educational support at home, quality early education can be particularly transformative. It provides a structured environment where children can develop cognitive, social, and emotional skills that prepare them for future success.</p>
      
      <h2>Breaking the Cycle of Disadvantage</h2>
      
      <p>One of the most powerful aspects of early education is its ability to help break cycles of disadvantage. Children who receive quality early education are more likely to:</p>
      
      <ul>
        <li>Graduate from high school and pursue higher education</li>
        <li>Secure stable employment with higher earnings</li>
        <li>Avoid involvement in the criminal justice system</li>
        <li>Lead healthier lives with lower rates of chronic disease</li>
      </ul>
      
      <p>These outcomes not only benefit the individuals themselves but also contribute to stronger, more resilient communities and societies as a whole.</p>
      
      <h2>Our Approach to Early Education</h2>
      
      <p>At BrightFutures, we believe that every child deserves access to quality early education, regardless of their background or circumstances. Our programs focus on creating supportive, stimulating environments where children can thrive. We emphasize:</p>
      
      <ol>
        <li><strong>Holistic Development:</strong> We address cognitive, social, emotional, and physical development through integrated approaches.</li>
        <li><strong>Play-Based Learning:</strong> We recognize that children learn best through play and hands-on experiences.</li>
        <li><strong>Family Involvement:</strong> We engage parents and caregivers as partners in their children's education.</li>
        <li><strong>Cultural Relevance:</strong> We ensure that our programs respect and reflect the diverse cultures and experiences of the children we serve.</li>
      </ol>
      
      <p>Through these approaches, we've seen remarkable transformations in the children who participate in our programs. They develop confidence, curiosity, and a love of learning that serves them well throughout their educational journey.</p>
      
      <h2>Looking Forward</h2>
      
      <p>As we continue our work, we remain committed to expanding access to quality early education for marginalized children. We believe that by investing in these crucial early years, we can help create a more equitable future where every child has the opportunity to reach their full potential.</p>
      
      <p>The evidence is clear: early education changes lives. It's one of the most powerful tools we have for creating lasting positive change, and we're proud to be part of this important work.</p>
    `
  };
  
  // Related posts (in a real app, these would be fetched based on tags or category)
  const relatedPosts = [
    {
      id: '2',
      title: 'The Role of Play in Child Development',
      excerpt: 'Understanding how play contributes to cognitive, social, and emotional growth.',
      image: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      date: 'April 12, 2023',
      category: 'Education'
    },
    {
      id: '3',
      title: 'Supporting First-Generation Students',
      excerpt: 'Strategies for helping children who are the first in their families to access education.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      date: 'March 28, 2023',
      category: 'Education'
    },
    {
      id: '4',
      title: 'The Impact of School Nutrition Programs',
      excerpt: 'How providing meals at school improves educational outcomes for vulnerable children.',
      image: 'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      date: 'March 10, 2023',
      category: 'Health'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <article>
          {/* Hero Image */}
          <div className="w-full h-96 overflow-hidden relative">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          {/* Article Header */}
          <div className="container-custom -mt-32 relative z-10">
            <div className="bg-white rounded-t-2xl shadow-sm px-8 py-10 max-w-3xl mx-auto">
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-hope-100 text-hope-800">
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <p className="text-xl text-gray-600">{post.excerpt}</p>
                
                <div className="flex items-center mt-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    <p className="text-sm text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="container-custom mb-20">
            <div className="grid md:grid-cols-12 gap-8">
              {/* Sidebar (Desktop) */}
              <aside className="hidden md:block md:col-span-3 lg:col-span-2">
                <div className="sticky top-24">
                  <Link to="/blog" className="flex items-center text-gray-600 hover:text-hope-600 mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" />
                    <span>Back to Blog</span>
                  </Link>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Share</h3>
                      <div className="flex flex-col space-y-2">
                        {[
                          { name: 'Twitter', color: 'bg-blue-100 text-blue-600' },
                          { name: 'Facebook', color: 'bg-indigo-100 text-indigo-600' },
                          { name: 'LinkedIn', color: 'bg-sky-100 text-sky-600' },
                          { name: 'Email', color: 'bg-amber-100 text-amber-600' }
                        ].map((platform) => (
                          <button
                            key={platform.name}
                            className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium ${platform.color}`}
                          >
                            <Share2 size={14} className="mr-2" />
                            {platform.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
              
              {/* Main Content */}
              <div className="md:col-span-9 lg:col-span-8">
                <div className="bg-white rounded-b-2xl shadow-sm px-8 py-10 prose prose-stone mx-auto prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-a:text-hope-600 hover:prose-a:text-hope-700 prose-a:transition-colors" 
                     dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
                
                {/* Tags (Mobile) */}
                <div className="mt-8 md:hidden">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Share Buttons (Mobile) */}
                <div className="mt-8 md:hidden">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Share</h3>
                  <div className="flex space-x-2">
                    {[
                      { name: 'Twitter', color: 'bg-blue-100 text-blue-600' },
                      { name: 'Facebook', color: 'bg-indigo-100 text-indigo-600' },
                      { name: 'LinkedIn', color: 'bg-sky-100 text-sky-600' },
                      { name: 'Email', color: 'bg-amber-100 text-amber-600' }
                    ].map((platform) => (
                      <button
                        key={platform.name}
                        className={`flex items-center px-3 py-1.5 rounded-md text-xs font-medium ${platform.color}`}
                      >
                        <Share2 size={14} className="mr-2" />
                        {platform.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Author Bio */}
                <div className="mt-12 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">About {post.author.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{post.author.bio}</p>
                      <Button variant="outline" size="sm">
                        View All Posts
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Articles */}
          <section className="py-16 bg-gray-50">
            <div className="container-custom">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-bold">Related Articles</h2>
                <Link 
                  to="/blog"
                  className="text-hope-600 hover:text-hope-700 font-medium text-sm inline-flex items-center"
                >
                  <span>View All Articles</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
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
                      
                      <Link 
                        to={`/blog/${post.id}`}
                        className="mt-auto inline-flex items-center text-hope-600 hover:text-hope-700 font-medium transition-colors"
                      >
                        Read Article
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* Newsletter CTA */}
          <section className="py-16 md:py-24 bg-hope-600 text-white">
            <div className="container-custom">
              <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-6">
                  <BookOpen size={16} className="mr-1.5" />
                  <span>Stay Informed</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
                <p className="text-hope-50 mb-10">
                  Get the latest updates on our programs, success stories, and ways you can help make a difference in the lives of marginalized children.
                </p>
                
                <form className="max-w-md mx-auto">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-hope-300"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-warmth-500 hover:bg-warmth-600 px-6 py-3 rounded-r-lg font-medium transition-colors"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-xs text-hope-50 mt-3">
                    We respect your privacy. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </section>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
