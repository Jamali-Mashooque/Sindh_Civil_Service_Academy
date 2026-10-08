import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Award, CheckCircle2, MapPin, Phone, Mail, Star, Quote, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      
      {/* 1. Premium Hero Slider */}
      <section className="relative h-[90vh] min-h-[600px] bg-slate-900 w-full">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="h-full w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                  >
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-main/20 text-brand-main border border-brand-main/30 font-medium tracking-wider uppercase mb-6 text-sm">
                      Sindh Civil Services Academy
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white">
                      Achieve Your <br/> <span className="text-brand-main">Civil Service</span> Dreams
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
                      Expert CSS, PCS, and PMS preparation with dedicated mentorship and daily mocks.
                    </p>
                    <div className="flex gap-4">
                      <Link to="/progress" className="bg-brand-main text-white hover:bg-brand-dark px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-brand-main/30 flex items-center gap-2">
                        Start Preparation <ChevronRight size={20} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                  >
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-white">
                      Led By <br/> <span className="text-brand-main">Excellence</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light leading-relaxed">
                      Guided by Prof. Dr. Hassan Bux Noonari. Empowering talented and deserving students.
                    </p>
                    <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center gap-2">
                      Meet Our Faculty
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        
        {/* Curved bottom separator */}
        <div className="absolute bottom-0 w-full z-10">
           <svg viewBox="0 0 1440 120" className="w-full h-auto text-slate-50 fill-current" preserveAspectRatio="none">
             <path d="M0,120 C320,0 1120,0 1440,120 L1440,120 L0,120 Z"></path>
           </svg>
        </div>
      </section>

      {/* 2. About the Academy & Leader */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-main/10 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Academy Mentorship" 
                className="relative z-10 rounded-3xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-10 right-10 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-main text-white rounded-full flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-slate-900">Prof. Dr. Hassan Bux Noonari</p>
                    <p className="text-sm text-slate-500 font-medium">Academy Director</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-brand-main font-bold uppercase tracking-wider mb-2">About SCSA</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Empowering Talented & Deserving Students</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Sindh Civil Services Academy (SCSA) is a premier institute dedicated to nurturing the next generation of civil servants. Under the visionary leadership of <strong>Prof. Dr. Hassan Bux Noonari</strong>, we provide unparalleled guidance for competitive exams.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Expert guidance from experienced professionals',
                  'Structured curriculum for CSS, PCS, and PMS',
                  'Focus on conceptual clarity and analytical skills',
                  'Dedicated mentorship for every aspirant'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-main shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold transition-all shadow-md">
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Our Programs */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-main font-bold uppercase tracking-wider mb-2"
            >
              Our Programs
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4"
            >
              Comprehensive Preparation
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'CSS Prep', desc: 'Central Superior Services preparation with comprehensive subject coverage and analytical writing focus.', icon: BookOpen, color: 'bg-blue-50 text-blue-600' },
              { title: 'PCS Prep', desc: 'Provincial Civil Services tailored coaching focusing on provincial syllabus and examination patterns.', icon: Award, color: 'bg-teal-50 text-brand-main' },
              { title: 'PMS Prep', desc: 'Provincial Management Service extensive prep including compulsory and optional subjects mastery.', icon: Users, color: 'bg-purple-50 text-purple-600' }
            ].map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${prog.color}`}>
                  <prog.icon size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{prog.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">{prog.desc}</p>
                <Link to="/progress" className="text-brand-main font-bold flex items-center gap-1 group-hover:gap-3 transition-all">
                  View Course Details <ChevronRight size={18} />
                </Link>
                {/* Decorative background shape */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full z-[-1] group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Features / Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-main font-bold uppercase tracking-wider mb-2">Why Choose SCSA</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-4">The Academy Advantage</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '24/7 Library', desc: 'Round-the-clock access to our extensive resource library for uninterrupted study sessions.', icon: BookOpen },
              { title: 'Daily Mocks', desc: 'Rigorous daily mock exams to build stamina, time management, and exam temperament.', icon: Clock },
              { title: 'Mentorship', desc: 'One-on-one personalized mentorship from civil servants and subject specialists.', icon: Users },
              { title: 'In-person Classes', desc: 'Interactive, engaging physical classes at our well-equipped Hyderabad campus.', icon: MapPin }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-slate-800 p-8 rounded-3xl text-center border border-slate-700 hover:border-brand-main transition-colors group"
              >
                <div className="w-16 h-16 mx-auto bg-slate-700 group-hover:bg-brand-main rounded-2xl flex items-center justify-center text-white mb-6 transition-colors duration-300">
                  <feature.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials / Trust */}
      <section className="py-24 bg-teal-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Quote size={120} className="absolute -top-10 -left-10 text-brand-main/10 -rotate-12" />
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/3"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Student Success Stories</h2>
              <p className="text-lg text-slate-600 mb-6">
                Our results speak for themselves. We are proud to have a perfect track record of student satisfaction.
              </p>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 inline-block">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-slate-900">100% Recommend</p>
                <p className="text-slate-500 font-medium">Based on 5 reviews on our page</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-2/3"
            >
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 }
                }}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                className="pb-12"
              >
                {[1, 2, 3].map((_, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-white p-8 rounded-3xl shadow-sm h-full flex flex-col justify-between">
                      <div>
                        <div className="flex text-amber-400 mb-4">
                          {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-current" />)}
                        </div>
                        <p className="text-slate-600 italic mb-6 leading-relaxed">
                          "The daily mocks and 24/7 library access at SCSA completely transformed my CSS preparation. Dr. Hassan Bux Noonari's mentorship is invaluable."
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                          <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">Successful Aspirant</p>
                          <p className="text-sm text-slate-500">CSS Batch 2025</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Photo Gallery / Facilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Campus & Facilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Take a glimpse into our state-of-the-art campus designed for intensive study.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="col-span-2 md:col-span-2 row-span-2 rounded-3xl overflow-hidden group relative aspect-square md:aspect-auto h-full"
            >
              <img src="https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Library" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white text-2xl font-bold">24/7 Reading Library</h4>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-3xl overflow-hidden group relative aspect-square"
            >
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Classroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-3xl overflow-hidden group relative aspect-square"
            >
              <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Mocks" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
              className="col-span-2 rounded-3xl overflow-hidden group relative aspect-[2/1]"
            >
              <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Mentorship" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h4 className="text-white text-xl font-bold">One-on-One Mentorship Sessions</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Contact / Location */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-xl overflow-hidden border border-slate-100">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-10 lg:p-16">
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">Visit Our Campus</h2>
                <p className="text-slate-600 mb-10">We are open for in-person classes and inquiries.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-50 text-brand-main flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Address</h4>
                      <p className="text-slate-600 leading-relaxed">
                        Razia Terrace Plaza Flat : no : 13 3rd floor near City Gate Hotel & Midway Hill Restaurant.<br/>
                        Hyderabad, Pakistan
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-50 text-brand-main flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Contact</h4>
                      <p className="text-slate-600">0333 2801298</p>
                      <p className="text-slate-600">+92 333 2801298</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-50 text-brand-main flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600">sindhcivilservicesacademy@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full font-medium text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open Now
                  </span>
                  <span className="ml-4 text-slate-500 font-medium text-sm">Price range · £</span>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-slate-200 relative min-h-[400px]">
                {/* Embedded Google Map Placeholder - using an image or iframe. Let's use iframe */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115409.84305018991!2d68.291771!3d25.3942363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444f3c3%3A0xc00bbc183d41e285!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689100000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{border:0, position: 'absolute', top: 0, left: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SCSA Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
