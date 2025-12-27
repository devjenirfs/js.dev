"use client";
import { motion } from 'motion/react';
import { Code, Briefcase, GraduationCap } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '2+' },
    { icon: Briefcase, label: 'Projects Delivered', value: '20+' },
    { icon: GraduationCap, label: 'Certifications', value: '2' },
  ];

  return (
    <section className="py-20 bg-white" id="about">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                I'm a <span className="font-semibold text-purple-600">Full Stack Software Engineer</span> with strong frontend expertise and hands-on backend experience. Currently working at <span className="font-semibold">Trust Driven Care</span>, I focus on building scalable, user-centered web applications for healthcare platforms integrated with JaneApp.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                My experience includes leading the redesign of complex reporting systems, developing with <span className="font-semibold">Next.js, React, and Tailwind CSS</span>, and implementing backend solutions with <span className="font-semibold">Node.js and MySQL</span>. I've worked with US-based teams across healthcare, legal, and marketing industries.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm passionate about creating exceptional digital experiences that translate business needs into reliable technical solutions. When I'm not coding, I enjoy mentoring students and exploring new technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <stat.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}