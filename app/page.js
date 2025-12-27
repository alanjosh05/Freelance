"use client";

import { useState, useEffect } from 'react';
import { 
  Zap, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Star,
  ExternalLink,
  BarChart,
  Clock,
  Shield,
  Cloud,
  Sparkles,
  Cpu,
  Workflow,
  Smartphone,
  Globe,
  Code,
  Users,
  FolderKanban,
  Target,
  Bot,
  Settings,
  PlayCircle,
  PauseCircle,
  Cogs,
  CircuitBoard,
  Terminal,
  Database,
  Server,
  Cctv,
  FileText,
  Calendar,
  Brain,
  Rocket,
  TargetIcon,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export default function UpdatedPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [omnitrixActive, setOmnitrixActive] = useState(false);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'testimonials'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
      
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Services data with green theme
  const services = [
    {
      icon: <Workflow className="h-10 w-10" />,
      title: "Smart Automation",
      description: "Streamline operations with intelligent workflows that save time and reduce errors.",
      features: ["Process automation", "Workflow optimization", "Task scheduling", "System integration"],
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Website Design",
      description: "Build fast, responsive, and beautiful websites that engage visitors and drive results.",
      features: ["Responsive design", "SEO optimization", "Fast loading", "User-friendly"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Apps",
      description: "Create engaging experiences for mobile users with intuitive and powerful apps.",
      features: ["iOS & Android", "User-focused design", "Fast performance", "Secure"],
      color: "from-emerald-500 to-green-600"
    }
  ];
  
  // Team expertise
  const expertise = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Automation",
      description: "Building intelligent systems that work for you 24/7"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Creating modern, responsive websites"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Development",
      description: "Developing powerful mobile applications"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Solutions",
      description: "Turning data into actionable insights"
    }
  ];
  
  // Testimonials
  const testimonials = [
    {
      name: "Alex Chen",
      role: "Cafe Owner",
      content: "The automated ordering system saves me 15 hours every week. Now I can focus on making great coffee instead of paperwork.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "Maria Garcia",
      role: "Salon Manager",
      content: "Our booking system now runs itself. The AI handles everything from scheduling to reminders - it's like having another employee.",
      avatarUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Online Store Owner",
      content: "The automated email system has transformed our customer service. We reply instantly, day or night.",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ];
  
  // Automation examples
  const automationExamples = [
    { icon: <Mail className="h-5 w-5" />, text: "Email automation" },
    { icon: <Calendar className="h-5 w-5" />, text: "Appointment scheduling" },
    { icon: <FileText className="h-5 w-5" />, text: "Document processing" },
    { icon: <Database className="h-5 w-5" />, text: "Data management" },
    { icon: <Cctv className="h-5 w-5" />, text: "Social media automation" },
    { icon: <BarChart className="h-5 w-5" />, text: "Report generation" }
  ];
  
  // Why choose us
  const benefits = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Proven Results",
      description: "We deliver measurable improvements in efficiency and productivity"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Delivery",
      description: "Quick setup and implementation to start saving time immediately"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Solutions",
      description: "Systems that grow with your business needs"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Skilled professionals with years of experience"
    }
  ];
  
  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Pulsing dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-lg border-b border-green-900/30' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with Omnitrix style */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-md ${omnitrixActive ? 'animate-pulse' : ''}`}></div>
                <button 
                  onClick={() => setOmnitrixActive(!omnitrixActive)}
                  className={`relative p-2 bg-black rounded-full border-2 ${omnitrixActive ? 'border-green-400' : 'border-green-700'} transition-all duration-300 group-hover:scale-110`}
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className={`w-6 h-6 rounded-full border ${omnitrixActive ? 'border-green-400 animate-spin' : 'border-green-600'} flex items-center justify-center`}>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </button>
              </div>
              <span className="text-xl font-bold text-white">
                <span className="text-green-400">TECH</span>NEXUS
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'services', 'testimonials'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize font-medium transition-all duration-200 relative group ${
                    activeSection === item 
                    ? 'text-green-400' 
                    : 'text-gray-400 hover:text-green-300'
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 transition-all duration-300 group-hover:w-full ${
                    activeSection === item ? 'w-full' : ''
                  }`}></span>
                </button>
              ))}
            </div>
            
            {/* CTA Button */}
            
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-lg bg-green-900/20 text-green-400 hover:text-green-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-green-900/30 py-4">
              <div className="flex flex-col space-y-3 px-2">
                {['home', 'about', 'services', 'testimonials'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize py-3 px-4 rounded-lg text-left transition-all ${
                      activeSection === item 
                      ? 'bg-green-900/30 text-green-400 border-l-4 border-green-500' 
                      : 'text-gray-400 hover:bg-green-900/20 hover:text-green-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="pt-28 pb-20 md:pt-45 md:pb-28 px-4 relative">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-12 lg:mb-0">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/30 border border-green-700/50 text-green-300 font-medium mb-8">
                  <Rocket className="h-4 w-4 mr-2" />
                  Future-Ready Business Solutions
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="text-white">Empowering Businesses</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                    with Future Tech
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
                  We are a dedicated team of experts specializing in automation, website design, and mobile apps. 
                  Our mission is to transform your ideas into powerful digital products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">

                  <button 
                    onClick={() => scrollToSection('about')}
                    className="px-8 py-4 border-2 border-green-800 text-green-300 font-medium rounded-lg hover:border-green-500 hover:text-green-200 hover:shadow-lg hover:shadow-green-500/10 transition-all"
                  >
                    Learn About Us
                  </button>
                </div>
                
                {/* What We Do */}
                
              </div>
              
              <div className="lg:w-1/2 lg:pl-12">
                <div className="relative">
                  {/* Omnitrix-style card */}
                  <div className="bg-gradient-to-br from-green-900/20 to-black rounded-2xl p-1 border border-green-700/30 shadow-2xl shadow-green-900/20">
                    <div className="bg-black rounded-xl p-4">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Team Collaboration" 
                        className="rounded-lg w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-green-700/50 shadow-xl hidden lg:block">
                    <div className="flex items-center">
                      <div className="p-2 bg-green-900/30 rounded-lg mr-3">
                        <Users className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Expert Team</div>
                        <div className="text-sm text-green-300">Dedicated Professionals</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-green-700/50 shadow-xl hidden lg:block">
                    <div className="flex items-center">
                      <div className="p-2 bg-emerald-900/30 rounded-lg mr-3">
                        <TargetIcon className="h-6 w-6 text-emerald-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white">Proven Results</div>
                        <div className="text-sm text-emerald-300">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section id="about" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/30 border border-green-700/50 text-green-300 font-medium mb-6">
                <Users className="h-4 w-4 mr-2" />
                About Our Team
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Who <span className="text-green-400">We Are</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A passionate team of tech enthusiasts dedicated to building solutions that help businesses thrive in the digital age.
              </p>
            </div>
            
            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 md:p-12 mb-16 border border-green-800/30">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-8 md:mb-0">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-xl opacity-20"></div>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-green-900/30 to-black rounded-full border border-green-700/50 flex items-center justify-center">
                        <Brain className="h-20 w-20 text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 md:pl-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. 
                    We believe in creating digital products that not only meet today's needs but also prepare you for tomorrow's challenges.
                  </p>
                  <p className="text-gray-300">
                    Our team combines technical expertise with business understanding to deliver solutions that truly make a difference.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Our Expertise */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Expertise</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertise.map((item, index) => (
                  <div key={index} className="bg-black/50 rounded-xl p-6 border border-green-800/30 hover:border-green-500/50 transition-all group">
                    <div className="p-3 bg-green-900/30 rounded-lg w-fit mb-4">
                      <div className="text-green-400">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Why Choose Us</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center group">
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className="absolute inset-0 bg-green-900/20 rounded-full group-hover:scale-110 transition-transform"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="text-green-400">
                          {benefit.icon}
                        </div>
                      </div>
                    </div>
                    <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/30 border border-green-700/50 text-green-300 font-medium mb-6">
                <Settings className="h-4 w-4 mr-2" />
                What We Offer
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Core <span className="text-green-400">Services</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions designed to meet your business needs and drive growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 rounded-2xl border border-green-800/30 group-hover:border-green-500/50 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 to-emerald-900/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-6">
                    <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl w-fit mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <div className="p-1 bg-green-900/30 rounded mr-3">
                            <CheckCircle className="h-3 w-3 text-green-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    
                  </div>
                </div>
              ))}
            </div>
            
            {/* Our Process */}
            <div className="mt-20">
              <div className="bg-black/50 rounded-2xl p-8 border border-green-800/30">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">How We Work</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center group">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 bg-green-900/30 rounded-full group-hover:scale-110 transition-transform"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <FolderKanban className="h-10 w-10 text-green-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black font-bold">
                        1
                      </div>
                    </div>
                    <h4 className="font-bold text-white mb-2">Discover</h4>
                    <p className="text-gray-300 text-sm">We learn about your business and goals</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 bg-emerald-900/30 rounded-full group-hover:scale-110 transition-transform"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <CircuitBoard className="h-10 w-10 text-emerald-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold">
                        2
                      </div>
                    </div>
                    <h4 className="font-bold text-white mb-2">Design</h4>
                    <p className="text-gray-300 text-sm">We plan the perfect solution for you</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 bg-teal-900/30 rounded-full group-hover:scale-110 transition-transform"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Code className="h-10 w-10 text-teal-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-black font-bold">
                        3
                      </div>
                    </div>
                    <h4 className="font-bold text-white mb-2">Develop</h4>
                    <p className="text-gray-300 text-sm">We build your custom solution</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <div className="absolute inset-0 bg-cyan-900/30 rounded-full group-hover:scale-110 transition-transform"></div>
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Rocket className="h-10 w-10 text-cyan-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold">
                        4
                      </div>
                    </div>
                    <h4 className="font-bold text-white mb-2">Deliver</h4>
                    <p className="text-gray-300 text-sm">We launch and support your solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-900/30 border border-green-700/50 text-green-300 font-medium mb-6">
                <Star className="h-4 w-4 mr-2" />
                Client Success Stories
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                What Our <span className="text-green-400">Clients</span> Say
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="group bg-black/50 rounded-2xl p-6 border border-green-800/30 hover:border-green-500/30 transition-all">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover border-2 border-green-800"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-black" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-green-300 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-800'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic mb-6">"{testimonial.content}"</p>
                  
                  
                </div>
              ))}
            </div>
            
            {/* Results Summary */}
            <div className="mt-16">
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-800/30">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">The Impact We Create</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-green-400 mb-2">10-30</div>
                    <div className="text-gray-300">Hours saved weekly</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                    <div className="text-gray-300">System operation</div>
                  </div>
                  <div className="text-center group">
                    <div className="text-3xl font-bold text-teal-400 mb-2">95%</div>
                    <div className="text-gray-300">Client satisfaction</div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        
      </main>
      
      {/* Footer */}
      <footer className="bg-black border-t border-green-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">
                    <span className="text-green-400">TECH</span>NEXUS
                  </span>
                  <div className="text-sm text-gray-400">Empowering Businesses with Future Tech</div>
                </div>
              </div>
              <p className="text-gray-400 max-w-md text-sm">
                We transform ideas into powerful digital products through automation, web design, and mobile development.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Smart Automation</li>
                  <li>Website Design</li>
                  <li>Mobile Apps</li>
                  <li>Consultation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>About Us</li>
                  <li>Our Process</li>
                  
                  <li>Careers</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-900/30 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} TechNexus. Empowering businesses through technology.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <span className="hover:text-green-400 cursor-pointer transition-colors">Privacy</span>
                <span className="hover:text-green-400 cursor-pointer transition-colors">Terms</span>
                <span className="hover:text-green-400 cursor-pointer transition-colors">Cookies</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}