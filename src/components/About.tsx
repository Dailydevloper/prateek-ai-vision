
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Card className="glass-effect">
              <CardContent className="p-6">
                <p className="text-lg text-muted-foreground mb-4">
                  I'm a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning. 
                  With a strong foundation in programming languages like C, C++, Python, and Java, I love building 
                  innovative solutions that solve real-world problems.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  My expertise spans across the MERN Stack, Data Structures & Algorithms, DevOps, and Data Science. 
                  I'm particularly interested in developing AI tools and participating in hackathons to challenge 
                  myself and learn from others.
                </p>
                <p className="text-lg text-muted-foreground">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or working on innovative AI solutions.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-gradient-to-r from-primary/20 to-purple-600/20 flex items-center justify-center text-6xl font-bold text-primary">
                    PD
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
