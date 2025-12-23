"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 text-center">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl md:text-7xl font-bold tracking-tight">
          Building <span className="text-cyan-400">Modern</span>
          <br />
          Web Experiences
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
          Full-stack developer focused on clean architecture, performance, and great user experience.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="mt-12 flex justify-center gap-6">
          <a href="#projects" className="px-8 py-4 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
            View Work
          </a>
          <a href="/contact" className="px-8 py-4 rounded-xl border border-[#222] hover:border-cyan-400/50 transition">
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section className="max-w-4xl mx-auto px-6 mt-32 text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold">
          About Me
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-6 text-gray-400 text-lg leading-relaxed">
          I’m Vedant Tyagi, a passionate <span className="text-white font-medium">full-stack developer</span> who enjoys building real-world web applications.
          I focus on writing clean, scalable code and designing interfaces that feel smooth and intuitive.
          I love learning how things work under the hood and improving every project step by step.
        </motion.p>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-semibold text-center mb-12">
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Next.js",
            "React",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "PostgreSQL",
            "REST APIs",
            "Authentication",
            "UI/UX Design",
            "Git & GitHub",
          ].map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#0b0b0b] border border-[#1f1f1f] rounded-xl py-4 text-center text-gray-300 hover:border-cyan-400/40 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-4xl font-semibold text-center mb-20">
          Selected Projects
        </motion.h2>

        {loading ? (
          <p className="text-center text-gray-400">Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 to-transparent"
              >
                <div className="relative bg-[#0b0b0b] rounded-2xl p-8 h-full border border-[#1f1f1f] group-hover:border-cyan-400/40 transition">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>

                  <p className="mt-4 text-gray-400 leading-relaxed">
                    A real-world application focused on performance, clean architecture, and modern UX.
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Full-Stack Project</span>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-medium group-hover:translate-x-1 transition">
                      View →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#111] py-12 text-center text-gray-500">
        © {new Date().getFullYear()} • Built with precision & passion
      </footer>
    </main>
  );
}
