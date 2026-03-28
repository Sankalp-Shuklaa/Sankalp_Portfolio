import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Project Manager',
    content: 'Sankalp is an incredibly talented developer. His ability to grasp complex concepts and implement them efficiently is commendable. The Coaching Management System he built was exactly what we needed.',
    rating: 5,
    image: 'https://picsum.photos/seed/rahul/100/100',
  },
  {
    name: 'Priya Patel',
    role: 'Software Engineer',
    content: 'Working with Sankalp on the AI Based Code Reviewer was a great experience. He has a deep understanding of Python and AI integrations. Highly recommended for any full-stack role.',
    rating: 5,
    image: 'https://picsum.photos/seed/priya/100/100',
  },
  {
    name: 'Amit Kumar',
    role: 'Client',
    content: 'The AI Problem Solver app is fantastic! Sankalp delivered the project on time and exceeded expectations. His attention to detail and problem-solving skills are top-notch.',
    rating: 5,
    image: 'https://picsum.photos/seed/amit/100/100',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Client Feedback
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-8 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
