
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skills = [
    { category: 'Programming Languages', items: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'] },
    { category: 'Web Development', items: ['React', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3'] },
    { category: 'AI/ML & Data Science', items: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'] },
    { category: 'DevOps & Tools', items: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Kubernetes'] },
    { category: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'] },
    { category: 'Other', items: ['Data Structures', 'Algorithms', 'System Design', 'RESTful APIs'] }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="glass-effect hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
