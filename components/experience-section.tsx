'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Student Trainee',
    company: 'Datacom Training Center',
    location: 'Lahore',
    period: '2021',
    description: 'Joined a three-month foundational IT workshop where I learned the basics of MS Excel, improved typing speed, and studied core components of computer systems. This experience sparked my interest in tech.',
    technologies: ['MS Excel', 'Typing', 'Computer Fundamentals']
  },
  {
    id: 2,
    title: 'External Scholar',
    company: 'Security Bank Scholars Program',
    location: 'Remote',
    period: '2022',
    description: 'Selected as an external scholar in a remote global learning initiative. Attended virtual seminars and maintained strong academic performance, helping me grow my network and knowledge beyond borders.',
    technologies: ['Remote Collaboration', 'Academic Excellence', 'Networking']
  },
  {
    id: 3,
    title: 'Academe Committee Head',
    company: 'University Tech Society',
    location: 'Lahore',
    period: '2023',
    description: 'Led academic planning and student engagement efforts in a university tech society. I collaborated with committee members to host events, handle student feedback, and improve the academic experience across campus.',
    technologies: ['Leadership', 'Event Management', 'Student Engagement', 'Collaboration']
  },
  {
    id: 4,
    title: 'Web Development Lead',
    company: 'GDSC – University of Lahore',
    location: 'University of Lahore',
    period: '2024',
    description: 'Appointed as the Web Dev Lead at Google Developer Student Clubs – UOL chapter. I led hands-on workshops and web projects to help students build real-world development skills, both online and on-campus.',
    technologies: ['Web Development', 'Workshop Facilitation', 'Project Management', 'Mentorship']
  },
  {
    id: 5,
    title: 'Notion Campus Leader',
    company: 'Notion',
    location: '',
    period: '2024',
    description: 'Representing Notion as a Campus Leader in Pakistan, I conducted sessions, built custom Notion templates, and ran campaigns to promote smarter digital workflows among university students.',
    technologies: ['Notion', 'Content Creation', 'Community Management', 'Digital Workflow']
  },
  {
    id: 6,
    title: 'DataCamp Scholar',
    company: 'DataCamp (Global Program)',
    location: '',
    period: '2025',
    description: 'Selected as a DataCamp Scholar, recognized for excellence in data science learning. Through this opportunity, I’ve gained hands-on skills in Python, SQL, and data analysis with mentorship from global experts.',
    technologies: ['Python', 'SQL', 'Data Analysis', 'Machine Learning']
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-center mb-12 sm:mb-16 scroll-animate">
          Experience
        </h2>
        
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.id} 
              className="group hover:shadow-lg hover-glow transition-all duration-300 scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl font-playfair mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground font-inconsolata">
                      <span className="font-medium">{exp.company}</span>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays className="h-3 w-3" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed font-inconsolata">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs font-inconsolata hover:scale-110 transition-transform duration-300 interactive-element"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}