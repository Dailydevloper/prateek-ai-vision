
import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 animate-bounce-in">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-4xl md:text-5xl font-bold text-gradient">
                  PD
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse" />
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-right">
              Hi, I'm <span className="text-gradient">Prateek Dwivedi</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              AI/ML Engineer & Full Stack Developer
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
              B.Tech student passionate about building intelligent solutions and solving real-world problems through technology. 
              Specialized in AI/ML, full-stack development, and DevOps.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 hover:bg-accent">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Projects
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">5★</div>
                <div className="text-sm text-muted-foreground">HackerRank Badges</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">1+</div>
                <div className="text-sm text-muted-foreground">Years Coding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToNext}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
