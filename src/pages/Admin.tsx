
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FolderHeart, FileText, PenLine, Upload, Plus, LogOut, LayoutDashboard, Users, Settings } from 'lucide-react';
import Button from '@/components/shared/Button';
import { toast } from 'sonner';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'password') {
      setIsLoggedIn(true);
      toast.success('Successfully logged in!');
    } else {
      toast.error('Invalid credentials');
    }
  };
  
  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success('Successfully logged out');
  };
  
  // Handle credential changes
  const handleCredentialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 bg-hope-50">
          <div className="container-custom">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hope-100 text-hope-800 text-xs font-medium mb-6 animate-fade-in">
                <LayoutDashboard size={16} className="mr-1.5" />
                <span>Admin Portal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
                Content <span className="text-hope-600">Management</span>
              </h1>
              
              <p className="text-xl text-gray-600 animate-fade-in">
                Manage blog posts, campaigns, and website content from a single dashboard.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24">
          <div className="container-custom">
            {!isLoggedIn ? (
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                  
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleCredentialChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleCredentialChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                      />
                    </div>
                    
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Log In
                    </Button>
                  </form>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                      Use username: <span className="font-mono">admin</span> and password: <span className="font-mono">password</span> for demo purposes.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Sidebar */}
                  <div className="w-full md:w-64 bg-gray-50 p-6 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold">Admin Panel</h2>
                      <button 
                        onClick={handleLogout}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <LogOut size={20} />
                      </button>
                    </div>
                    
                    <nav className="space-y-1">
                      <button
                        onClick={() => setActiveTab('dashboard')}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                          activeTab === 'dashboard' 
                            ? 'bg-hope-100 text-hope-700' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <LayoutDashboard size={18} className="mr-3" />
                        Dashboard
                      </button>
                      
                      <button
                        onClick={() => setActiveTab('blogs')}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                          activeTab === 'blogs' 
                            ? 'bg-hope-100 text-hope-700' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <FileText size={18} className="mr-3" />
                        Blog Posts
                      </button>
                      
                      <button
                        onClick={() => setActiveTab('campaigns')}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                          activeTab === 'campaigns' 
                            ? 'bg-hope-100 text-hope-700' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <FolderHeart size={18} className="mr-3" />
                        Campaigns
                      </button>
                      
                      <button
                        onClick={() => setActiveTab('users')}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                          activeTab === 'users' 
                            ? 'bg-hope-100 text-hope-700' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Users size={18} className="mr-3" />
                        Users
                      </button>
                      
                      <button
                        onClick={() => setActiveTab('settings')}
                        className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                          activeTab === 'settings' 
                            ? 'bg-hope-100 text-hope-700' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <Settings size={18} className="mr-3" />
                        Settings
                      </button>
                    </nav>
                  </div>
                  
                  {/* Main Content */}
                  <div className="flex-1 p-6">
                    {activeTab === 'dashboard' && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold mb-2">Blog Posts</h3>
                            <p className="text-3xl font-bold">24</p>
                            <p className="text-sm text-gray-500 mt-1">3 published this month</p>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold mb-2">Active Campaigns</h3>
                            <p className="text-3xl font-bold">8</p>
                            <p className="text-sm text-gray-500 mt-1">2 ending this month</p>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold mb-2">Volunteer Applications</h3>
                            <p className="text-3xl font-bold">17</p>
                            <p className="text-sm text-gray-500 mt-1">5 pending review</p>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                        <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                          <div className="divide-y divide-gray-100">
                            {[
                              { action: 'New blog post published', user: 'Sarah Johnson', time: '2 hours ago' },
                              { action: 'Campaign updated', user: 'Michael Chen', time: '4 hours ago' },
                              { action: 'New donation received', user: 'System', time: '6 hours ago' },
                              { action: 'Volunteer application approved', user: 'Emma Williams', time: '1 day ago' },
                              { action: 'New contact form submission', user: 'System', time: '1 day ago' }
                            ].map((activity, index) => (
                              <div key={index} className="p-4 flex justify-between items-center">
                                <div>
                                  <p className="font-medium">{activity.action}</p>
                                  <p className="text-sm text-gray-500">By {activity.user}</p>
                                </div>
                                <span className="text-xs text-gray-500">{activity.time}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'blogs' && (
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-2xl font-bold">Blog Posts</h2>
                          <Button variant="primary" size="sm">
                            <Plus size={16} className="mr-2" />
                            New Post
                          </Button>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                          <div className="divide-y divide-gray-100">
                            {[
                              { title: 'How Early Education Changes Lives', status: 'Published', date: 'May 15, 2023' },
                              { title: 'Stories of Hope: Meet Sophia', status: 'Published', date: 'April 28, 2023' },
                              { title: 'The Importance of Community Support', status: 'Published', date: 'April 10, 2023' },
                              { title: 'Summer Activities for Children', status: 'Draft', date: 'N/A' },
                              { title: 'Volunteer Spotlight: John\'s Story', status: 'Draft', date: 'N/A' }
                            ].map((post, index) => (
                              <div key={index} className="p-4 flex justify-between items-center">
                                <div>
                                  <p className="font-medium">{post.title}</p>
                                  <div className="flex items-center mt-1">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      post.status === 'Published' 
                                        ? 'bg-green-100 text-green-800' 
                                        : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      {post.status}
                                    </span>
                                    {post.status === 'Published' && (
                                      <span className="text-xs text-gray-500 ml-2">Published on {post.date}</span>
                                    )}
                                  </div>
                                </div>
                                <div className="flex space-x-3">
                                  <button className="text-gray-500 hover:text-hope-600" title="Edit">
                                    <PenLine size={18} />
                                  </button>
                                  <button className="text-gray-500 hover:text-red-600" title="Delete">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M3 6h18"></path>
                                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'campaigns' && (
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-2xl font-bold">Campaigns</h2>
                          <Button variant="primary" size="sm">
                            <Plus size={16} className="mr-2" />
                            New Campaign
                          </Button>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                          <div className="divide-y divide-gray-100">
                            {[
                              { title: 'School Supplies Drive', progress: '75%', status: 'Active', endDate: 'June 30, 2023' },
                              { title: 'Safe Homes Project', progress: '45%', status: 'Active', endDate: 'July 15, 2023' },
                              { title: 'Health Check Programs', progress: '60%', status: 'Active', endDate: 'August 1, 2023' },
                              { title: 'Educational Workshops', progress: '0%', status: 'Planned', endDate: 'September 1, 2023' },
                              { title: 'Holiday Giving Program', progress: '0%', status: 'Planned', endDate: 'December 24, 2023' }
                            ].map((campaign, index) => (
                              <div key={index} className="p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="font-medium">{campaign.title}</p>
                                    <div className="flex items-center mt-1">
                                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        campaign.status === 'Active' 
                                          ? 'bg-hope-100 text-hope-800' 
                                          : 'bg-gray-100 text-gray-800'
                                      }`}>
                                        {campaign.status}
                                      </span>
                                      <span className="text-xs text-gray-500 ml-2">Ends: {campaign.endDate}</span>
                                    </div>
                                  </div>
                                  <div className="flex space-x-3">
                                    <button className="text-gray-500 hover:text-hope-600" title="Edit">
                                      <PenLine size={18} />
                                    </button>
                                    <button className="text-gray-500 hover:text-red-600" title="Delete">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                
                                {campaign.status === 'Active' && (
                                  <div className="mt-2">
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-hope-500 rounded-full"
                                        style={{ width: campaign.progress }}
                                      ></div>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">{campaign.progress} complete</div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'users' && (
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-2xl font-bold">Users</h2>
                          <Button variant="primary" size="sm">
                            <Plus size={16} className="mr-2" />
                            New User
                          </Button>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg border border-gray-100 overflow-hidden">
                          <div className="divide-y divide-gray-100">
                            {[
                              { name: 'Sarah Johnson', role: 'Administrator', email: 'sarah@brightfutures.org', lastActive: '1 hour ago' },
                              { name: 'Michael Chen', role: 'Editor', email: 'michael@brightfutures.org', lastActive: '3 hours ago' },
                              { name: 'Emma Williams', role: 'Volunteer Coordinator', email: 'emma@brightfutures.org', lastActive: '6 hours ago' },
                              { name: 'David Kim', role: 'Finance Manager', email: 'david@brightfutures.org', lastActive: '2 days ago' },
                              { name: 'Carlos Rivera', role: 'Content Creator', email: 'carlos@brightfutures.org', lastActive: '5 days ago' }
                            ].map((user, index) => (
                              <div key={index} className="p-4 flex justify-between items-center">
                                <div>
                                  <p className="font-medium">{user.name}</p>
                                  <div className="flex items-center mt-1">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                      {user.role}
                                    </span>
                                    <span className="text-xs text-gray-500 ml-2">{user.email}</span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <span className="text-xs text-gray-500 mr-4">Last active: {user.lastActive}</span>
                                  <div className="flex space-x-3">
                                    <button className="text-gray-500 hover:text-hope-600" title="Edit">
                                      <PenLine size={18} />
                                    </button>
                                    <button className="text-gray-500 hover:text-red-600" title="Delete">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 6h18"></path>
                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'settings' && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6">Settings</h2>
                        
                        <div className="space-y-8">
                          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Website Information</h3>
                            <div className="space-y-4">
                              <div>
                                <label htmlFor="siteName" className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
                                <input
                                  type="text"
                                  id="siteName"
                                  name="siteName"
                                  defaultValue="BrightFutures"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 mb-1">Tagline</label>
                                <input
                                  type="text"
                                  id="tagline"
                                  name="tagline"
                                  defaultValue="Brighter Futures for Every Child"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                                <input
                                  type="email"
                                  id="contactEmail"
                                  name="contactEmail"
                                  defaultValue="info@brightfutures.org"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
                            <div className="space-y-4">
                              <div>
                                <label htmlFor="facebook" className="block text-sm font-medium text-gray-700 mb-1">Facebook URL</label>
                                <input
                                  type="url"
                                  id="facebook"
                                  name="facebook"
                                  defaultValue="https://facebook.com/brightfutures"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="twitter" className="block text-sm font-medium text-gray-700 mb-1">Twitter URL</label>
                                <input
                                  type="url"
                                  id="twitter"
                                  name="twitter"
                                  defaultValue="https://twitter.com/brightfutures"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                />
                              </div>
                              
                              <div>
                                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">Instagram URL</label>
                                <input
                                  type="url"
                                  id="instagram"
                                  name="instagram"
                                  defaultValue="https://instagram.com/brightfutures"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-hope-500 focus:border-hope-500"
                                />
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                            <h3 className="text-lg font-semibold mb-4">Media Upload</h3>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                              <Upload size={36} className="mx-auto text-gray-400 mb-4" />
                              <p className="text-gray-600 mb-2">Drag and drop files here, or click to browse</p>
                              <p className="text-xs text-gray-500">Supports JPEG, PNG, PDF up to 10MB</p>
                              
                              <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-hope-600 hover:bg-hope-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hope-500">
                                Upload Files
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 flex justify-end">
                          <Button variant="primary" size="lg">
                            Save Settings
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
