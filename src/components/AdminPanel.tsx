import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  published: boolean;
}

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  published: boolean;
}

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'blogs' | 'videos'>('blogs');
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [videos, setVideos] = useState<Video[]>([]);
  const [newBlog, setNewBlog] = useState<Partial<BlogPost>>({});
  const [newVideo, setNewVideo] = useState<Partial<Video>>({});

  const handleAddBlog = () => {
    if (newBlog.title && newBlog.content) {
      const blog: BlogPost = {
        id: Date.now().toString(),
        title: newBlog.title,
        content: newBlog.content,
        category: newBlog.category || 'Data Engineering',
        tags: newBlog.tags || [],
        published: false
      };
      setBlogs([...blogs, blog]);
      setNewBlog({});
    }
  };

  const handleAddVideo = () => {
    if (newVideo.title && newVideo.url) {
      const video: Video = {
        id: Date.now().toString(),
        title: newVideo.title,
        description: newVideo.description || '',
        url: newVideo.url,
        category: newVideo.category || 'Data Engineering',
        published: false
      };
      setVideos([...videos, video]);
      setNewVideo({});
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold gradient-text mb-4">Admin Panel</h1>
          <p className="text-gray-300">Manage your portfolio content</p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 mb-8">
          <button
            className={`px-6 py-3 rounded-lg font-mono transition-colors duration-200 ${
              activeTab === 'blogs'
                ? 'bg-terminal-green text-terminal-dark'
                : 'bg-card-bg border border-border-gray text-gray-300 hover:border-terminal-green'
            }`}
            onClick={() => setActiveTab('blogs')}
          >
            Blog Management
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-mono transition-colors duration-200 ${
              activeTab === 'videos'
                ? 'bg-terminal-green text-terminal-dark'
                : 'bg-card-bg border border-border-gray text-gray-300 hover:border-terminal-green'
            }`}
            onClick={() => setActiveTab('videos')}
          >
            Video Management
          </button>
        </div>

        {/* Blog Management */}
        {activeTab === 'blogs' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add New Blog */}
            <div className="bg-card-bg border border-border-gray rounded-lg p-6">
              <h3 className="text-xl font-bold text-terminal-green mb-4">Add New Blog</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Blog Title"
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
                  value={newBlog.title || ''}
                  onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
                />
                <textarea
                  placeholder="Blog Content"
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none resize-none"
                  value={newBlog.content || ''}
                  onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
                  value={newBlog.category || ''}
                  onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
                  value={newBlog.tags?.join(', ') || ''}
                  onChange={(e) => setNewBlog({ ...newBlog, tags: e.target.value.split(', ').filter(tag => tag.trim()) })}
                />
                <motion.button
                  className="w-full bg-terminal-green text-terminal-dark py-3 rounded-lg font-bold font-mono hover:bg-terminal-green/80 transition-colors duration-200"
                  onClick={handleAddBlog}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add Blog
                </motion.button>
              </div>
            </div>

            {/* Blog List */}
            <div className="bg-card-bg border border-border-gray rounded-lg p-6">
              <h3 className="text-xl font-bold text-terminal-green mb-4">Blog Posts ({blogs.length})</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {blogs.map((blog) => (
                  <div key={blog.id} className="border border-border-gray rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">{blog.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{blog.category}</p>
                    <div className="flex space-x-2">
                      <span className={`text-xs px-2 py-1 rounded ${blog.published ? 'bg-success-green text-white' : 'bg-warning-yellow text-black'}`}>
                        {blog.published ? 'Published' : 'Draft'}
                      </span>
                      <button className="text-xs text-terminal-green hover:text-white">Edit</button>
                      <button className="text-xs text-error-red hover:text-white">Delete</button>
                    </div>
                  </div>
                ))}
                {blogs.length === 0 && (
                  <p className="text-gray-400 text-center">No blogs added yet</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Video Management */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Add New Video */}
            <div className="bg-card-bg border border-border-gray rounded-lg p-6">
              <h3 className="text-xl font-bold text-terminal-green mb-4">Add New Video</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Video Title"
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
                  value={newVideo.title || ''}
                  onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
                />
                <textarea
                  placeholder="Video Description"
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none resize-none"
                  value={newVideo.description || ''}
                  onChange={(e) => setNewVideo({ ...newVideo, description: e.target.value })}
                />
                <input
                  type="url"
                  placeholder="YouTube URL"
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
                  value={newVideo.url || ''}
                  onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full px-4 py-3 bg-dark-bg border border-border-gray rounded-lg text-white placeholder-gray-400 focus:border-terminal-green focus:outline-none"
                  value={newVideo.category || ''}
                  onChange={(e) => setNewVideo({ ...newVideo, category: e.target.value })}
                />
                <motion.button
                  className="w-full bg-terminal-green text-terminal-dark py-3 rounded-lg font-bold font-mono hover:bg-terminal-green/80 transition-colors duration-200"
                  onClick={handleAddVideo}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add Video
                </motion.button>
              </div>
            </div>

            {/* Video List */}
            <div className="bg-card-bg border border-border-gray rounded-lg p-6">
              <h3 className="text-xl font-bold text-terminal-green mb-4">Videos ({videos.length})</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {videos.map((video) => (
                  <div key={video.id} className="border border-border-gray rounded-lg p-4">
                    <h4 className="font-bold text-white mb-2">{video.title}</h4>
                    <p className="text-sm text-gray-400 mb-2">{video.category}</p>
                    <div className="flex space-x-2">
                      <span className={`text-xs px-2 py-1 rounded ${video.published ? 'bg-success-green text-white' : 'bg-warning-yellow text-black'}`}>
                        {video.published ? 'Published' : 'Draft'}
                      </span>
                      <button className="text-xs text-terminal-green hover:text-white">Edit</button>
                      <button className="text-xs text-error-red hover:text-white">Delete</button>
                    </div>
                  </div>
                ))}
                {videos.length === 0 && (
                  <p className="text-gray-400 text-center">No videos added yet</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Analytics Dashboard */}
        <motion.div
          className="mt-8 bg-card-bg border border-border-gray rounded-lg p-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-terminal-green mb-4">Analytics Dashboard</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-terminal-green mb-1">{blogs.length}</div>
              <div className="text-sm text-gray-400">Total Blogs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-data-blue mb-1">{videos.length}</div>
              <div className="text-sm text-gray-400">Total Videos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pipeline-orange mb-1">{blogs.filter(b => b.published).length}</div>
              <div className="text-sm text-gray-400">Published Blogs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-api-purple mb-1">{videos.filter(v => v.published).length}</div>
              <div className="text-sm text-gray-400">Published Videos</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminPanel; 