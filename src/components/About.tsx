import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dr. Shakuntala Misra National Rehabilitation University',
    period: '2024 – 2026',
    description: 'Focusing on advanced computing, software engineering, and full-stack development.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Era University',
    period: '2020 – 2023',
    description: 'Built a strong foundation in programming, databases, and web technologies.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              I am a dedicated MCA student and an aspiring Full Stack Java Developer. My journey in tech started with a fascination for how things work behind the scenes on the web.
            </p>
            <p>
              Over the years, I have honed my skills in object-oriented programming, database management, and modern web frameworks. I enjoy tackling complex problems and turning them into simple, elegant solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, participating in hackathons, or contributing to open-source projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                    <GraduationCap className="w-4 h-4 text-primary" />
                  </div>
                  
                  <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{item.degree}</h3>
                    <p className="text-primary font-medium mb-2">{item.institution}</p>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.period}
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
