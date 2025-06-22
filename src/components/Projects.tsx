
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chat Application',
      description: 'A real-time chat application with AI integration using MERN stack and OpenAI API.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'OpenAI'],
      github: '#',
      live: '#'
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics using Python and React.',
      image: '/placeholder.svg',
      technologies: ['Python', 'Flask', 'React', 'D3.js', 'Pandas'],
      github: '#',
      live: '#'
    },
    {
      title: 'Machine Learning Model Deployment',
      description: 'End-to-end ML pipeline with model training, evaluation, and deployment.',
      image: '/placeholder.svg',
      technologies: ['Python', 'TensorFlow', 'Docker', 'AWS', 'FastAPI'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management System',
      description: 'Full-stack task management application with real-time updates and collaboration.',
      image: '/placeholder.svg',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect hover-scale overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                <div className="text-6xl font-bold text-muted-foreground/20">
                  {project.title.charAt(0)}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
