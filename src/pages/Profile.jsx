import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MapPin, Calendar, Edit3, Award, Shield, Settings } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 text-center"
          >
            <div className="relative inline-block mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-teal-50 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="User Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-brand-main text-white rounded-full shadow-lg hover:bg-brand-dark transition-colors">
                <Edit3 size={16} />
              </button>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Alex Johnson</h2>
            <p className="text-brand-main font-medium mb-6">Premium Member</p>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={18} className="text-slate-400" />
                <span>alex.johnson@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin size={18} className="text-slate-400" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Calendar size={18} className="text-slate-400" />
                <span>Joined March 2023</span>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <button className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-xl transition-colors">
                Account Settings
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Right Column: Details & Achievements */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Achievements */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900">Badges & Achievements</h3>
              <a href="#" className="text-brand-main text-sm font-medium hover:underline">View All</a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: 'Early Adopter', color: 'bg-purple-100 text-purple-600' },
                { icon: Award, label: 'Course Master', color: 'bg-amber-100 text-amber-600' },
                { icon: User, label: 'Community Star', color: 'bg-blue-100 text-blue-600' },
                { icon: Award, label: '100 Day Streak', color: 'bg-green-100 text-green-600' },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${badge.color}`}>
                    <badge.icon size={28} />
                  </div>
                  <span className="text-sm font-medium text-slate-700 text-center">{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Recent Activity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Activity</h3>
            
            <div className="space-y-6">
              {[
                { title: 'Completed Module 5: The Cognitive Leap', time: '2 hours ago', type: 'course' },
                { title: 'Earned "Course Master" Badge', time: '1 day ago', type: 'badge' },
                { title: 'Commented on "Stress Resilience Forum"', time: '3 days ago', type: 'community' },
                { title: 'Started Course: Advanced Cognitive Patterns', time: '1 week ago', type: 'course' },
              ].map((activity, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-brand-main rounded-full mt-1.5"></div>
                    {i !== 3 && <div className="w-0.5 h-full bg-slate-100 mt-2"></div>}
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">{activity.title}</p>
                    <p className="text-sm text-slate-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
