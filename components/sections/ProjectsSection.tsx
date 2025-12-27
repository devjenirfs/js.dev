'use client';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'TDC Healthcare Platform',
      description: 'Led the redesign of a comprehensive healthcare reporting system integrated with JaneApp. Built complex dashboards for managing appointments, patients, and operational analytics.',
      image: 'https://images.unsplash.com/photo-1563198797-31e0a0dc15c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjY4NjY0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Node.js'],
      company: 'Trust Driven Care',
      liveUrl: '#',
    },
    {
      title: 'Multi-Client Websites',
      description: 'Developed and maintained modern, high-performance websites for clients across healthcare, legal, and marketing sectors. Integrated CMS solutions for content management.',
      image: 'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMHdlYnNpdGUlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2ODY2NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel'],
      company: 'The Casely Group',
      liveUrl: '#',
    },
    {
      title: 'Content Management Solutions',
      description: 'Implemented headless CMS integrations with Sanity for multiple client projects, enabling easy content updates and scalable architecture.',
      image: 'https://images.unsplash.com/photo-1646092970097-63189b03f9de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbXMlMjBjb250ZW50fGVufDF8fHx8MTc2Njg2NjQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Sanity CMS', 'REST APIs', 'Vercel'],
      company: 'The Casely Group',
      liveUrl: '#',
    },
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Real-world projects built for healthcare, legal, and marketing industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <a
                        href={project.liveUrl}
                        className="flex-1 bg-white text-gray-900 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-medium">View</span>
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                      {project.company}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}