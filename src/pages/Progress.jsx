import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, PlayCircle, Award, TrendingUp } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Foundations of Mind Edge',
    progress: 100,
    totalModules: 5,
    completedModules: 5,
    lastAccessed: '2 days ago',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1550592704-6c76defa9985?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Advanced Cognitive Patterns',
    progress: 60,
    totalModules: 10,
    completedModules: 6,
    lastAccessed: 'Today',
    status: 'in-progress',
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Stress & Resilience Mastery',
    progress: 0,
    totalModules: 8,
    completedModules: 0,
    lastAccessed: 'Not started',
    status: 'not-started',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const Progress = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-2">My Learning Progress</h1>
        <p className="text-slate-600">Track your journey through The Edge of Mind Academy</p>
      </div>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-teal-100 text-brand-main rounded-full flex items-center justify-center">
            <BookOpen size={24} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Enrolled Courses</p>
            <p className="text-2xl font-bold text-slate-900">3</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Overall Progress</p>
            <p className="text-2xl font-bold text-slate-900">45%</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
            <Award size={24} />
          </div>
          <div>
            <p className="text-slate-500 text-sm font-medium">Certificates Earned</p>
            <p className="text-2xl font-bold text-slate-900">1</p>
          </div>
        </motion.div>
      </div>

      <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Active Courses</h2>
      
      <div className="space-y-6">
        {courses.map((course, index) => (
          <motion.div 
            key={course.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row hover:shadow-md transition-shadow"
          >
            <div className="md:w-64 h-48 md:h-auto relative">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              {course.status === 'completed' && (
                <div className="absolute inset-0 bg-brand-main/80 flex items-center justify-center flex-col text-white">
                  <Award size={48} className="mb-2" />
                  <span className="font-bold">Completed</span>
                </div>
              )}
            </div>
            
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
                  {course.status === 'in-progress' && (
                    <span className="bg-teal-100 text-brand-main text-xs px-3 py-1 rounded-full font-medium">
                      In Progress
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1"><BookOpen size={16} /> {course.completedModules}/{course.totalModules} Modules</span>
                  <span className="flex items-center gap-1"><Clock size={16} /> Accessed: {course.lastAccessed}</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-slate-700">Progress</span>
                  <span className="font-bold text-brand-main">{course.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 mb-4">
                  <div 
                    className="bg-brand-main h-2.5 rounded-full transition-all duration-1000" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-end">
                  <button className={`px-6 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-colors ${
                    course.status === 'completed' 
                      ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                      : 'bg-brand-main text-white hover:bg-brand-dark'
                  }`}>
                    {course.status === 'completed' ? (
                      <><CheckCircle size={18} /> Review Course</>
                    ) : course.status === 'not-started' ? (
                      <><PlayCircle size={18} /> Start Course</>
                    ) : (
                      <><PlayCircle size={18} /> Continue Learning</>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
