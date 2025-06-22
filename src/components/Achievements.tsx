
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Star, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: '5-Star Python Badge',
      platform: 'HackerRank',
      description: 'Achieved 5-star rating in Python programming challenges',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      date: '2024'
    },
    {
      title: '5-Star C Badge',
      platform: 'HackerRank',
      description: 'Achieved 5-star rating in C programming challenges',
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      date: '2024'
    },
    {
      title: 'Hackathon Winner',
      platform: 'Tech Fest 2024',
      description: 'First place in AI/ML category for innovative solution',
      icon: <Trophy className="w-8 h-8 text-gold" />,
      date: '2024'
    },
    {
      title: 'Open Source Contributor',
      platform: 'GitHub',
      description: 'Active contributor with 100+ contributions',
      icon: <Award className="w-8 h-8 text-green-500" />,
      date: '2023-2024'
    },
    {
      title: 'Data Science Certification',
      platform: 'Coursera',
      description: 'Completed comprehensive data science specialization',
      icon: <Award className="w-8 h-8 text-blue-500" />,
      date: '2023'
    },
    {
      title: 'Machine Learning Certification',
      platform: 'edX',
      description: 'Advanced machine learning algorithms and applications',
      icon: <Award className="w-8 h-8 text-purple-500" />,
      date: '2023'
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Achievements & Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-effect hover-scale">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-background/50">
                  {achievement.icon}
                </div>
                <CardTitle className="text-lg">{achievement.title}</CardTitle>
                <Badge variant="secondary">{achievement.platform}</Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {achievement.description}
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  {achievement.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
