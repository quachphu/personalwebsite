import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Youtube, Download, ExternalLink, Code, Award, Briefcase, GraduationCap, ChevronRight, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' }
  ];

  const skills = {
    languages: ['Python (3 years)', 'C++ (2 years)', 'SQL (2 years)', 'JavaScript (1 year)', 'TypeScript', 'Swift', 'Go', 'R', 'C#'],
    databases: ['MySQL', 'PostgreSQL', 'NoSQL', 'Neo4j', 'Pinecone', 'Weaviate', 'FAISS'],
    cloud: ['AWS (ECS, EC2, S3, RDS)', 'Azure', 'Google Cloud'],
    libraries: ['PyTorch', 'TensorFlow', 'React', 'Node.js', 'Flask', 'Docker', 'Kubernetes', 'LangChain', 'Hugging Face']
  };

  const experience = [
    {
      title: 'AI Engineer Resident',
      company: 'Fellowship AI',
      period: '06/2025 – Present',
      location: 'United States',
      highlights: [
        'Designed transformer-based NLP model increasing accuracy by 15%',
        'Developed real-time API supporting 1,000+ concurrent requests/second'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'CodeDay',
      period: '06/2025 – Present',
      location: 'Remote',
      highlights: [
        'Built Next.js website increasing user engagement by 20%',
        'Developed scalable Node.js app for 100+ concurrent users'
      ]
    },
    {
      title: 'Research Intern',
      company: 'ThinkNeuro',
      period: '05/2025 – 08/2025',
      location: 'Remote',
      highlights: [
        'Developed Brain-Computer Interface technologies',
        'Increased data processing efficiency by 90%'
      ]
    },
    {
      title: 'AI Research Assistant',
      company: 'College of Engineering',
      period: '07/2024 – Present',
      location: 'Long Beach, US',
      highlights: [
        'Reduced manual review time by 50% with AI radiology tools',
        'Improved diagnostic accuracy by 80% with CNN model'
      ]
    }
  ];

  const projects = [
    {
      name: 'VoiceBridges',
      description: 'Voice-controlled navigation for users with disabilities',
      tech: ['Python', 'PyAutoGUI', 'Flask', 'OpenAI'],
      highlights: [
        'Reduced reliance on traditional input by 90%',
        'Improved command interpretation accuracy by 35%'
      ]
    },
    {
      name: 'Gaucho Grub',
      description: 'Real-time wait prediction for UCSB dining halls',
      tech: ['Python', 'OpenCV', 'React Native', 'PostgreSQL', 'LangChain'],
      highlights: [
        '92% queue detection accuracy with YOLOv3',
        'Processes 1,000+ daily requests with 98% uptime'
      ]
    },
    {
      name: 'Multi-AI Agent System',
      description: 'Sophisticated multi-agent system with LangGraph',
      tech: ['Python', 'LangChain', 'Astra DB', 'LangGraph', 'Grok LLM'],
      highlights: [
        'Improved query resolution accuracy by 87%',
        'Reduced irrelevant responses by 92%'
      ]
    }
  ];

  const achievements = [
    '🏆 1st Place - USC Hackathon AI Challenge (300 participants)',
    '🥈 2nd Place - LMU Datathon (150 participants)',
    '👥 ACM Vice President - Leadership Award Winner',
    '🎯 Beach Hacks Lead - CSULB Best Event 2025'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 400 + 200}px`,
                height: `${Math.random() * 400 + 200}px`,
                background: `radial-gradient(circle, ${['#8B5CF6', '#EC4899', '#6366F1'][i % 3]} 0%, transparent 70%)`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + i * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              TPQ
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map(nav => (
                <button
                  key={nav.id}
                  onClick={() => {
                    setActiveSection(nav.id);
                    document.getElementById(nav.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center space-x-2 transition-colors hover:text-purple-400 ${
                    activeSection === nav.id ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  <span>{nav.icon}</span>
                  <span>{nav.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            {navigation.map(nav => (
              <button
                key={nav.id}
                onClick={() => {
                  setActiveSection(nav.id);
                  setIsMenuOpen(false);
                  document.getElementById(nav.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-800 flex items-center space-x-2"
              >
                <span>{nav.icon}</span>
                <span>{nav.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-4xl w-full text-center space-y-8 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              Thien Phu Quach
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300">
            Tech Lover + Gym (+3 years) 💪
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Welcome to my hub! I'm an AI Engineer and Software Developer passionate about creating 
            innovative solutions that make a real impact.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="https://www.linkedin.com/in/quachthienphu/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all hover:scale-105"
            >
              <Linkedin className="w-5 h-5 group-hover:text-purple-400" />
              <span>LinkedIn</span>
            </a>
            
            <a
              href="https://github.com/quachphu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all hover:scale-105"
            >
              <Github className="w-5 h-5 group-hover:text-purple-400" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://flowcv.com/resume/scs0tnuhgcap"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all hover:scale-105"
            >
              <FileText className="w-5 h-5 group-hover:text-purple-400" />
              <span>Resume</span>
            </a>
            
            <a
              href="https://www.youtube.com/@phuquach6671"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 hover:border-purple-500 transition-all hover:scale-105"
            >
              <Youtube className="w-5 h-5 group-hover:text-purple-400" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all">
            <div className="flex items-start space-x-4">
              <GraduationCap className="w-12 h-12 text-purple-400 flex-shrink-0" />
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                  <p className="text-purple-400">California State University Long Beach</p>
                  <p className="text-gray-400">Expected Graduation: August 2026</p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-lg">
                    <span className="text-purple-400 font-semibold">GPA:</span> 3.7/4.0
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['President Honor List', 'Dean List', 'CS Honor Student'].map((honor, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-900/50 rounded-full text-sm">
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="font-semibold text-purple-400 mb-2">Relevant Coursework:</p>
                  <p className="text-gray-300">
                    Data Structures & Algorithms • Object Oriented Programming • Software Engineering • 
                    Machine Learning • Deep Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all">
                <h3 className="text-xl font-bold mb-4 capitalize text-purple-400">
                  {category === 'cloud' ? 'Cloud Technologies' : category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm hover:bg-purple-900/50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          
          <div className="space-y-6">
            {experience.map((job, i) => (
              <div
                key={i}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-purple-400">{job.title}</h3>
                    <p className="text-lg">{job.company}</p>
                    <p className="text-gray-400">{job.location}</p>
                  </div>
                  <span className="px-4 py-2 bg-purple-900/50 rounded-full text-sm">
                    {job.period}
                  </span>
                </div>
                
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start space-x-2">
                      <ChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <h3 className="text-xl font-bold mb-2 text-purple-400">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-2 py-1 bg-purple-900/50 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {project.highlights.map((highlight, j) => (
                    <li key={j} className="text-sm text-gray-300 flex items-start space-x-2">
                      <span className="text-purple-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Placeholder for additional projects */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 border-dashed flex items-center justify-center">
              <div className="text-center space-y-2">
                <Code className="w-12 h-12 mx-auto text-gray-600" />
                <p className="text-gray-500">More projects coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, i) => (
              <div
                key={i}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all flex items-center space-x-3"
              >
                <Award className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span>{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Thien Phu Quach. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;