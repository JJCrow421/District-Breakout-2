
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import Careers from './pages/Careers';
import Appeals from './pages/Appeals';
import Guidelines from './pages/Guidelines';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home />;
      case Page.OurTeam:
        return <OurTeam />;
      case Page.Careers:
        return <Careers />;
      case Page.Appeals:
        return <Appeals />;
      case Page.Guidelines:
        return <Guidelines />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500 selection:text-white flex flex-col">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/5 rounded-full blur-[150px] opacity-30" />
      </div>

      <Navbar 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
      
      <main key={currentPage} className="relative z-10 page-transition flex-grow">
        {renderPage()}
      </main>

      <footer className="py-12 sm:py-20 border-t border-white/5 relative z-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
              <div className="col-span-1 sm:col-span-2">
                 <div className="flex items-center gap-3 mb-4 sm:mb-6">
                   <span className="text-xl sm:text-2xl font-bold tracking-tight">District Breakout <span className="text-cyan-500">2</span></span>
                 </div>
                 <p className="text-gray-500 max-w-sm leading-relaxed text-sm sm:text-base">
                   Casual horror game where 5 survivors have to survive against a killer. This is the game you have been waiting for; the chance to kill or be killed.
                 </p>
              </div>
              <div>
                 <h4 className="font-bold mb-4 sm:mb-6 text-white uppercase text-[10px] sm:text-xs tracking-widest">Resources</h4>
                 <ul className="space-y-3 sm:space-y-4 text-gray-500 text-xs sm:text-sm">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Home); }} className="hover:text-cyan-400 transition-colors cursor-pointer">Documentation</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Appeals); }} className="hover:text-cyan-400 transition-colors cursor-pointer">Appeals</a></li>
                 </ul>
              </div>
              <div>
                 <h4 className="font-bold mb-4 sm:mb-6 text-white uppercase text-[10px] sm:text-xs tracking-widest">Company</h4>
                 <ul className="space-y-3 sm:space-y-4 text-gray-500 text-xs sm:text-sm">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.OurTeam); }} className="hover:text-cyan-400 transition-colors cursor-pointer">Our Team</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Careers); }} className="hover:text-cyan-400 transition-colors cursor-pointer">Careers</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Guidelines); }} className="hover:text-cyan-400 transition-colors cursor-pointer">Guidelines</a></li>
                 </ul>
              </div>
           </div>
           
           <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-gray-500 text-[10px] sm:text-xs text-center sm:text-left">
              <div>
                © 2024 District Breakout 2. All rights reserved.
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
