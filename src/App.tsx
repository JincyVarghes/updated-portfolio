/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Globe,
  ChevronDown,
  Smartphone,
  BrainCircuit,
  HeartPulse,
  Award,
  Mic2,
  ShieldCheck,
  Database,
  Rocket,
  Image as ImageIcon,
  Filter,
  X
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PORTFOLIO_DATA } from "./portfolioData";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SECTION_PADDING = "py-24 px-6 md:px-12 lg:px-24";

const GALLERY_ALBUMS = [
  { id: "all", label: "All Moments" },
  { id: "events", label: "Events & Hosting" },
  { id: "projects", label: "Project Highlights" },
  { id: "campus", label: "Campus Life" },
];

const LazyImage = ({ src, alt, className, ...props }: { src: string; alt: string; className?: string; [key: string]: any }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/5", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-1000",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-2xl"
        )}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white/10 border-t-white/30 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const [activeAlbum, setActiveAlbum] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredImages = activeAlbum === "all" 
    ? PORTFOLIO_DATA.gallery 
    : PORTFOLIO_DATA.gallery.filter(img => img.category === activeAlbum);

  return (
    <div className="min-h-screen font-sans bg-[#020617] text-white selection:bg-blue-500 selection:text-white">
      <div className="noise-overlay" />
      
      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/[0.05] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/[0.05] blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 flex justify-between items-center px-8 py-4 rounded-full border border-white/5 bg-blue-950/20 backdrop-blur-xl text-white">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-serif italic tracking-tight"
        >
          {PORTFOLIO_DATA.hero.name}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold"
        >
          <a href="#about" className="hover:text-white/50 transition-colors">About</a>
          <a href="#projects" className="hover:text-white/50 transition-colors">Projects</a>
          <a href="#gallery" className="hover:text-white/50 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-white/50 transition-colors">Contact</a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 z-0"
        >
           <img
            src={PORTFOLIO_DATA.hero.backgroundImage}
            alt="Background"
            className="w-full h-full object-cover opacity-[0.07]"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="z-10 max-w-5xl px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden mb-10 border-2 border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.2)] relative group"
          >
            <LazyImage 
              src={PORTFOLIO_DATA.hero.profileImage} 
              alt={PORTFOLIO_DATA.hero.name} 
              className="w-full h-full transition-transform duration-700 group-hover:scale-110"
              onError={(e: any) => {
                e.target.src = "https://picsum.photos/seed/jincy-portrait/400/400?grayscale";
              }}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-[0.4em] mb-6 font-semibold opacity-40"
          >
            {PORTFOLIO_DATA.hero.role}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 text-white"
          >
            {PORTFOLIO_DATA.hero.name.split(' ')[0]} <span className="italic">{PORTFOLIO_DATA.hero.name.split(' ')[1]}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl font-serif italic opacity-40 mb-12"
          >
            "{PORTFOLIO_DATA.hero.tagline}"
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-30">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 opacity-30 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={cn(SECTION_PADDING, "bg-[#020617] relative z-10")}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">The <span className="italic">Vision</span></h2>
            <div className="w-24 h-px bg-white/10 mb-8" />
          </div>
          <div className="lg:col-span-8">
            <p className="text-xl md:text-2xl font-serif leading-relaxed text-white/80 mb-8">
              {PORTFOLIO_DATA.about.mission}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Focus</h4>
                <ul className="text-sm space-y-1 font-medium opacity-60">
                  {PORTFOLIO_DATA.about.focus.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-2">Core Values</h4>
                <p className="text-sm font-medium italic opacity-60">{PORTFOLIO_DATA.about.philosophy}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={cn(SECTION_PADDING, "bg-[#0f172a] text-[#f5f2ed] relative z-10")}>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-serif">Featured <span className="italic">Projects</span></h2>
          <p className="text-xs uppercase tracking-[0.2em] opacity-30 max-w-xs text-right">
            Innovating at the intersection of AI, healthcare, and social impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {PORTFOLIO_DATA.projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white/5 rounded-sm">
                <LazyImage 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 opacity-30">
                  {project.title === "LUNGUA" && <HeartPulse className="w-5 h-5" />}
                  {project.title === "ElderEase" && <Smartphone className="w-5 h-5" />}
                  {project.title === "Shadow Self" && <BrainCircuit className="w-5 h-5" />}
                  {project.title === "Disha" && <Globe className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                  <p className="text-sm opacity-50 leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">{project.category}</p>
                    <button 
                      onClick={() => setSelectedProject(project)}
                      className="text-[10px] uppercase tracking-widest font-bold border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certifications" className={cn(SECTION_PADDING, "bg-[#020617] relative z-10")}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Milestones & <span className="italic">Growth</span></h2>
            <div className="w-24 h-px bg-white/10 mb-8" />
          </div>
          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-6 border-b border-white/5 pb-2">Certifications</h4>
                <ul className="space-y-6">
                  {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                    <li key={idx} className="flex gap-4">
                      <Award className="w-5 h-5 mt-1 shrink-0 opacity-30" />
                      <div>
                        <h5 className="font-medium">{cert.title}</h5>
                        <p className="text-xs opacity-50">{cert.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-6 border-b border-white/5 pb-2">Achievements & Impact</h4>
                <ul className="space-y-6">
                  {PORTFOLIO_DATA.milestones.map((milestone, idx) => {
                    const IconComponent = milestone.icon === "Mic2" ? Mic2 : (milestone.icon === "Rocket" ? Rocket : Award);
                    return (
                      <li key={idx} className="flex gap-4">
                        <IconComponent className="w-5 h-5 mt-1 shrink-0 opacity-30" />
                        <div>
                          <h5 className="font-medium">{milestone.title}</h5>
                          <p className="text-xs opacity-50">{milestone.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className={cn(SECTION_PADDING, "bg-[#0f172a] relative z-10")}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="flex items-center gap-4">
            <ImageIcon className="w-8 h-8 opacity-10" />
            <h2 className="text-4xl md:text-6xl font-serif">The <span className="italic">Gallery</span></h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-end">
            {GALLERY_ALBUMS.map((album) => (
              <button
                key={album.id}
                onClick={() => setActiveAlbum(album.id)}
                className={cn(
                  "text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full border transition-all",
                  activeAlbum === album.id 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-white/30 border-white/10 hover:border-white/30"
                )}
              >
                {album.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] overflow-hidden group bg-white/5 rounded-lg"
              >
                <LazyImage
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-1">{image.category}</p>
                  <h4 className="text-white font-serif text-xl">{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>

      {/* Skills Section */}
      <section id="skills" className={cn(SECTION_PADDING, "bg-[#020617] relative z-10")}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Technical <span className="italic">Toolkit</span></h2>
            <p className="text-sm opacity-30 max-w-xs">
              A blend of core programming, modern frameworks, and essential soft skills.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-6 border-b border-white/5 pb-2">Languages & Databases</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "C++", "Python", "Java", "HTML"].map(skill => (
                  <span key={skill} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium border border-white/5">{skill}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm opacity-40">
                <Database className="w-4 h-4" />
                <span>MySQL</span>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-6 border-b border-white/5 pb-2">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["AI Tools", "Kali Linux", "Bootstrap", "Google Maps API", "Canva", "MS Excel"].map(tool => (
                  <span key={tool} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium border border-white/5">{tool}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-6 border-b border-white/5 pb-2">Soft Skills</h4>
              <div className="flex flex-wrap gap-6">
                {["Strong Communication", "Teamwork", "Optimistic", "Leadership"].map(skill => (
                  <div key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <span className="text-sm font-medium opacity-60">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className={cn(SECTION_PADDING, "bg-[#020617] border-t border-white/5 relative z-10")}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">Open to <span className="italic underline decoration-1 underline-offset-8">ideas</span> & opportunities.</h2>
              <div className="space-y-4">
                <p className="text-lg font-serif opacity-30">Based in India | Available for Collaboration</p>
                <a href={`mailto:${PORTFOLIO_DATA.social.email}`} className="text-2xl font-serif hover:opacity-50 transition-opacity flex items-center gap-4 text-white">
                  {PORTFOLIO_DATA.social.email} <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-end items-start md:items-end gap-8">
              <div className="flex gap-6">
                <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`mailto:${PORTFOLIO_DATA.social.email}`} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-20">© 2025 {PORTFOLIO_DATA.hero.name}. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-950/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#0f172a] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-[4/5] md:aspect-auto">
                  {selectedProject.video ? (
                    <video 
                      src={selectedProject.video} 
                      controls 
                      autoPlay 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <LazyImage 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full"
                    />
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40 mb-4">{selectedProject.category}</p>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8">{selectedProject.title}</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4 border-b border-white/5 pb-2">Overview</h4>
                      <p className="text-sm opacity-70 leading-relaxed">
                        {selectedProject.details || selectedProject.desc}
                      </p>
                    </div>

                    {selectedProject.techStack && (
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-4 border-b border-white/5 pb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech: string) => (
                            <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-medium border border-white/5">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-8">
                      <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-full hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                        Case Study Coming Soon <Rocket className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
