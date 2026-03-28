import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Based Problem Solver',
    description: 'A smart application that utilizes the Gemini API to solve complex problems and provide detailed, step-by-step explanations.',
    tech: ['React', 'Node.js', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/Sankalp-Shuklaa',
    image: 'https://picsum.photos/seed/ai/600/400',
  },
  {
    title: 'Coaching Management System',
    description: 'A comprehensive management system designed to streamline operations for coaching institutes, managing students, teachers, and staff efficiently.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'React'],
    github: 'https://github.com/Sankalp-Shuklaa',
    image: 'https://picsum.photos/seed/management/600/400',
  },
  {
    title: 'AI Based Code Reviewer',
    description: 'An automated code review tool that analyzes source code, identifies potential bugs, and suggests improvements and corrections.',
    tech: ['Python', 'Flask', 'OpenAI API', 'React'],
    github: 'https://github.com/Sankalp-Shuklaa',
    image: 'https://picsum.photos/seed/code/600/400',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors ml-auto"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
