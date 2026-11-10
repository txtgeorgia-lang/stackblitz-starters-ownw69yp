'use client';

import React, { useState } from 'react';

interface Video {
  id: string;
  title: string;
  youtubeId: string;
  category: 'TO DO' | 'Live' | 'Vlog' | 'Episode';
  date: string;
}

interface ScheduleEvent {
  id: string;
  title: string;
  type: 'Comeback' | 'Concert' | 'Birthday' | 'Show';
  date: string;
  description: string;
}

interface Post {
  id: string;
  author: string;
  bias: string;
  content: string;
  likes: number;
  time: string;
}

const INITIAL_VIDEOS: Video[] = [
  {
    id: '1',
    title: 'TO DO X TXT - Ep.130 (ქართული სუბტიტრებით)',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'TO DO',
    date: '2026-03-20',
  },
  {
    id: '2',
    title: 'TXT (투모로우바이투게더) Comeback Show',
    youtubeId: 'dQw4w9WgXcQ',
    category: 'Live',
    date: '2026-03-18',
  },
];

const INITIAL_EVENTS: ScheduleEvent[] = [
  {
    id: '1',
    title: 'Perfec Storm გამოშვება',
    type: 'Comeback',
    date: '2026-11-16 13:00',
    description: 'მზად ხართ ახალი ქამბექისთვის, მოა!',
  },
  {
    id: '2',
    title: 'Angel Bite მუსიკალური ვიდეოს თიზერი',
    type: 'Comeback',
    date: '2026-11-12 19:00',
    description: 'მზად ხართ თიზერის სანახავად?',
  },
];

const MEMBERS = ['Soobin', 'Yeonjun', 'Beomgyu', 'Taehyun', 'Hueningkai'];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'feed' | 'videos' | 'schedule'>('feed');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'მოა_საქართველო',
      bias: 'Yeonjun',
      content: 'მოიცა, ბოლო ეპიზოდზე რა იცინეთ? ეგეთი სახალისო რა იყო 😂 #TXT #TODO',
      likes: 14,
      time: '2 საათის წინ',
    },
  ]);
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedBias, setSelectedBias] = useState('Soobin');

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: Date.now().toString(),
      author: 'ქართველი მოა',
      bias: selectedBias,
      content: newPostContent,
      likes: 0,
      time: 'ახლახანს',
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const filteredVideos = selectedCategory === 'All' 
    ? INITIAL_VIDEOS 
    : INITIAL_VIDEOS.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-black bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
              TXT GEORGIA
            </span>
            <span className="text-xs bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded-full border border-sky-500/20">
              Fan Lounge
            </span>
          </div>

          <nav className="flex space-x-1 sm:space-x-4">
            <button
              onClick={() => setActiveTab('feed')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'feed' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              💬 საზოგადოება
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'videos' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              📺 ვიდეოები
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === 'schedule' ? 'bg-sky-500 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              📅 განრიგი
            </button>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        
        {/* --- FEED TAB --- */}
        {activeTab === 'feed' && (
          <div className="space-y-6">
            <form onSubmit={handleCreatePost} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="გაუზიარე აზრები სხვა მოას ქართულად..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 resize-none h-24"
              />
              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 gap-3">
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <span className="text-xs text-slate-400">ჩემი ბიასი:</span>
                  <select
                    value={selectedBias}
                    onChange={(e) => setSelectedBias(e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-xs rounded-lg px-2 py-1.5 text-sky-400 focus:outline-none"
                  >
                    {MEMBERS.map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium px-5 py-2 rounded-xl transition-colors"
                >
                  გამოქვეყნება
                </button>
              </div>
            </form>

            <div className="space-y-4">
              {posts.map(post => (
                <div key={post.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-sm">
                        {post.author[0]}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-200">{post.author}</h4>
                        <span className="text-xs text-slate-500">{post.time}</span>
                      </div>
                    </div>
                    <span className="text-xs bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-full border border-indigo-500/20">
                      Bias: {post.bias}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{post.content}</p>
                  <div className="flex items-center space-x-4 text-xs text-slate-400 border-t border-slate-800/60 pt-3">
                    <button className="flex items-center space-x-1 hover:text-sky-400 transition-colors">
                      <span>❤️</span>
                      <span>{post.likes} მოწონება</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIDEOS TAB --- */}
        {activeTab === 'videos' && (
          <div className="space-y-6">
            
            {/* პირველი შოუ / ფლეილისტი */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg p-4">
              <h3 className="text-lg font-bold text-slate-200 mb-3">📺 Talk X Today</h3>
              <div className="aspect-video w-full bg-slate-950 rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://youtube.com/playlist?list=PLpXCpOCJp-r-AmM2NGhxzDRwLuKSCZet-&si=FuZ2UI1c_oYFY-A8"
                  title="Show 1"
                  allowFullScreen
                />
              </div>
            </div>

            {/* მეორე შოუ / ფლეილისტი */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg p-4">
              <h3 className="text-lg font-bold text-slate-200 mb-3">📺 პულბათუ</h3>
              <div className="aspect-video w-full bg-slate-950 rounded-xl overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://youtube.com/playlist?list=PLpXCpOCJp-r9b5w4jmUB16_mZPRALD9Y8&si=JaIdEF33UbzRVtu6"
                  title="Show 2"
                  allowFullScreen
                />
              </div>
            </div>

          </div>
        )}

        {/* --- SCHEDULE TAB --- */}
        {activeTab === 'schedule' && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-200 mb-4">🗓️ ჯგუფის მნიშვნელოვანი თარიღები</h3>
            {INITIAL_EVENTS.map(ev => (
              <div key={ev.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                    {ev.type}
                  </span>
                  <h4 className="font-semibold text-slate-200 mt-2">{ev.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{ev.description}</p>
                </div>
                <div className="text-right bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 w-full sm:w-auto">
                  <span className="text-xs text-sky-400 font-mono">{ev.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
}
