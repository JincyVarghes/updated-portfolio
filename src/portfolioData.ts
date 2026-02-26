const BASE = import.meta.env.BASE_URL || '/';

export const PORTFOLIO_DATA = {
  hero: {
    name: "Jincy Varghese",
    tagline: "Growing until it's impossible to overlook.",
    role: "B.Tech CSE | AI, Cybersecurity & App Development",
    profileImage: `${BASE}profile.jpg`,
    backgroundImage: `${BASE}hero-background.jpg`, // Replace with your actual background
  },

  about: {
    mission: "I am a dedicated student with strong skills in social media management, tech analytics, and cross-functional collaboration. With a keen interest in Human Resources and data-driven decision-making, I actively engage in leadership roles that foster professional growth. Currently, I am self-learning the fundamentals of cybersecurity, exploring practical applications through Kali Linux. I am also investing myself in innovative app development.",
    focus: ["AI & Machine Learning", "Cybersecurity (Kali Linux)", "HR & Data Analytics"],
    philosophy: "Learning to Code, Learning to Lead",
  },

  projects: [
    { 
      title: "Events", 
      category: "AI / IoT / Healthcare", 
      image: `${BASE}Lungua.png`,
      video: "",
      desc: "An AI-integrated smart inhaler system utilizing Self-Supervised Learning (SSL) for personalized health anomaly detection and respiratory monitoring.",
      details: "LUNGUA is an innovative healthcare solution designed to revolutionize respiratory care. By integrating AI with traditional inhalers, it provides real-time feedback and anomaly detection. The system uses Self-Supervised Learning (SSL) to adapt to each user's unique breathing patterns, ensuring highly personalized health insights.",
      techStack: ["Python", "TensorFlow", "IoT Sensors", "React Native", "SSL Algorithms"]
    },
    { 
      title: "ElderEase", 
      category: "Mobile App / Healthcare", 
      image: `${BASE}Elder.png`,
      desc: "A comprehensive app supporting independent lifestyles for the elderly. Presented at the International Conference ICIMRBE 2025.",
      details: "ElderEase was developed to address the challenges faced by the aging population living independently. The app features medication reminders, emergency alerts, and a simplified interface for social connection. It was recognized for its user-centric design at the ICIMRBE 2025 conference.",
      techStack: ["Flutter", "Firebase", "Google Maps API", "Node.js"]
    },
    { 
      title: "Shadow Self", 
      category: "AI / Mental Health", 
      image: `${BASE}Shadow.png`,
      desc: "AI-powered self-reflection companion that helps users explore emotions and habits through guided journaling and mood insights.",
      details: "Shadow Self is a mental wellness tool that leverages Natural Language Processing to help users understand their emotional states. Through daily journaling prompts and sentiment analysis, it provides users with a 'mirror' to their subconscious, fostering self-awareness and emotional growth.",
      techStack: ["Python", "OpenAI API", "React", "Tailwind CSS", "MongoDB"]
    },
    { 
      title: "Disha", 
      category: "Education / Social Impact", 
      image: `${BASE}DISHA2.png`,
      desc: "Project Lead for a teaching platform associated with NSS, focusing on digital literacy for students in remote villages.",
      details: "As the Project Lead for Disha, I coordinated a team of volunteers to bring digital education to underserved rural areas. We developed a curriculum focused on basic computer skills and internet safety, impacting over 200 students across multiple villages.",
      techStack: ["Community Leadership", "Curriculum Design", "Digital Literacy", "Public Speaking"]
    }
  ],

  milestones: [
    { title: "National Oratory Champion", desc: "Awarded the National Level Title in the Oratory Competition hosted by Oratory Guild ASIET.", icon: "Award" },
    { title: "State Level Winner", desc: "TSF Annual Speaking Contest 2025. Recognized for excellence in public speaking and communication.", icon: "Award" },
    { title: "Engineering Forum Honors", desc: "Achieved top honors at the Premier Kerala Wide Engineering Forum for a visionary presentation on 'Engineering Sustainable Prosperity'.", icon: "Award" },
    { title: "Conference Presenter", desc: "Presented 'ElderEase' at the International Conference ICIMRBE 2025, addressing tech innovation for the elderly.", icon: "Mic2" }
  ],

  certifications: [
    { title: "Salesforce Innovator & Champion", desc: "Achieved both Innovator and Champion levels, demonstrating proficiency in ecosystem fundamentals and administrative practices." },
    { title: "Advanced Skill Development", desc: "ICT Academy & Reddington Foundation. Student Coordinator and Participant." },
    { title: "NPTEL: Mobile Robotics", desc: "Course certification in advanced robotics and autonomous systems." },
    { title: "CARE Stack Bridge Program", desc: "Technopark, Trivandrum. Hands-on experience through industry-focused training." }
  ],

  gallery: [
    { id: 1, category: "events", title: "Brahma MC", src: `${BASE}Brahma.jpg` },
    { id: 2, category: "projects", title: "Events", src: `${BASE}linkedin.jpg` },
    { id: 3, category: "campus", title: "NSS Activities", src: `${BASE}Disha.jpg` },
    { id: 4, category: "events", title: "Tech Talk", src: `${BASE}TSF1.png` },
    { id: 5, category: "events", title: "Presentations", src: `${BASE}Seminar.jpg` },
    { id: 6, category: "events", title: "Oratory Competition", src: `${BASE}Oratory.png` },
    { id: 7, category: "projects", title: "TSF", src: `${BASE}TSF2.png` }
  ],

  social: {
    email: "jincydvarghese@gmail.com",
    github: "https://github.com/JincyVarghes",
    linkedin: "https://linkedin.com/in/jincy-varghese",
  }
};