import React from 'react';
import { Brain, MessageCircle, Share2, Globe, Link as LinkIcon, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-brand-main rounded-lg text-white">
                <Brain size={24} />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-white leading-tight">
                  SCSA
                </h2>
                <p className="text-xs text-brand-main font-medium">Sindh Civil Services Academy</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed pr-4">
              Led by Prof. Dr. Hassan Bux Noonari, SCSA offers CSS, PCS, and PMS prep with expert guidance, 24/7 library, daily mocks, and mentorship — empowering talented, deserving students to achieve their civil service dreams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-main transition-all"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-main transition-all"><MessageCircle size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-main transition-all"><Share2 size={18} /></a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="/" className="text-slate-400 hover:text-brand-main transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-main"></span> Home</a></li>
              <li><a href="/progress" className="text-slate-400 hover:text-brand-main transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-main"></span> My Progress</a></li>
              <li><a href="/profile" className="text-slate-400 hover:text-brand-main transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-main"></span> Student Profile</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-main transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-main"></span> Admissions</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="text-brand-main shrink-0 mt-0.5" />
                <span>Razia Terrace Plaza Flat : no : 13 3rd floor near City Gate Hotel & Midway Hill Restaurant., Hyderabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-brand-main shrink-0" />
                <div className="flex flex-col">
                  <span>0333 2801298</span>
                  <span>+92 333 2801298</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-brand-main shrink-0" />
                <span>sindhcivilservicesacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Sindh Civil Services Academy (SCSA). All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">Empowering Civil Servants of Tomorrow</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
