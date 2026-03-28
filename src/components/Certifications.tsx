import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

const certifications = [
  { title: 'JavaScript', issuer: 'Mindluster' },
  { title: 'Git & GitHub', issuer: 'Mindluster' },
  { title: 'Web Development', issuer: 'Spidervella' },
  { title: 'Python with Flask', issuer: 'TekNavigator' },
  { title: 'Microsoft .NET', issuer: 'Cosmo Info' },
  { title: 'Data Analytics Simulation', issuer: 'Tata Forage' },
  { title: 'Cybersecurity Simulation', issuer: 'Commonwealth Bank' },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-xl flex items-start space-x-4 group"
            >
              <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 leading-tight">{cert.title}</h3>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle2 className="w-3 h-3 mr-1 text-green-500" />
                  {cert.issuer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
