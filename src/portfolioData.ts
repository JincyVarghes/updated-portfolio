/**
 * PORTFOLIO CONFIGURATION
 * 
 * HOW TO USE YOUR OWN PHOTOS/VIDEOS:
 * 1. Create a folder named 'public' in your project root (if it doesn't exist).
 * 2. Drop your images (e.g., 'my-photo.jpg') or videos into that 'public' folder.
 * 3. In this file, reference them with a leading slash: "/my-photo.jpg"
 * 4. When you upload to GitHub, these files will be included in your site.
 * 
 * Alternatively, you can use direct links from GitHub (Raw links) or any image hosting site.
 */

export const PORTFOLIO_DATA = {
  // 1. HERO & PROFILE
  hero: {
    name: "Jincy Varghese",
    tagline: "Growing until it's impossible to overlook.",
    role: "B.Tech CSE | AI, Cybersecurity & App Development",
    // Change this link to your profile picture (e.g., "https://raw.githubusercontent.com/user/repo/main/image.jpg")
    profileImage:"C:\\Users\\Dell\\OneDrive\\Desktop\\Jincy\\jincy-profile.jpg.jpg", 
    // Change this for the background image
    backgroundImage: "PASTE_HERO_BACKGROUND_IMAGE_URL_HERE",
  },

  // 2. ABOUT SECTION
  about: {
    mission: "I am a dedicated student with strong skills in social media management, tech analytics, and cross-functional collaboration. With a keen interest in Human Resources and data-driven decision-making, I actively engage in leadership roles that foster professional growth. Currently, I am self-learning the fundamentals of cybersecurity, exploring practical applications through Kali Linux. I am also investing myself in innovative app development.",
    focus: ["AI & Machine Learning", "Cybersecurity (Kali Linux)", "HR & Data Analytics"],
    philosophy: "Learning to Code, Learning to Lead",
  },

  // 3. PROJECTS
  projects: [
    { 
      title: "LUNGUA", 
      category: "AI / IoT / Healthcare", 
      image: "C:\Users\Dell\OneDrive\Pictures\Screenshots\Screenshot 2025-11-06 115439.png",
      video: "", // Add a link to your project video here (e.g., "/lungua-demo.mp4")
      desc: "An AI-integrated smart inhaler system utilizing Self-Supervised Learning (SSL) for personalized health anomaly detection and respiratory monitoring.",
      details: "LUNGUA is an innovative healthcare solution designed to revolutionize respiratory care. By integrating AI with traditional inhalers, it provides real-time feedback and anomaly detection. The system uses Self-Supervised Learning (SSL) to adapt to each user's unique breathing patterns, ensuring highly personalized health insights.",
      techStack: ["Python", "TensorFlow", "IoT Sensors", "React Native", "SSL Algorithms"]
    },
    { 
      title: "ElderEase", 
      category: "Mobile App / Healthcare", 
      image: "C:\Users\Dell\OneDrive\Pictures\Screenshots\Screenshot 2025-11-06 115411.png",
      desc: "A comprehensive app supporting independent lifestyles for the elderly. Presented at the International Conference ICIMRBE 2025.",
      details: "ElderEase was developed to address the challenges faced by the aging population living independently. The app features medication reminders, emergency alerts, and a simplified interface for social connection. It was recognized for its user-centric design at the ICIMRBE 2025 conference.",
      techStack: ["Flutter", "Firebase", "Google Maps API", "Node.js"]
    },
    { 
      title: "Shadow Self", 
      category: "AI / Mental Health", 
      image: "C:\Users\Dell\OneDrive\Pictures\Screenshots\Screenshot 2025-11-06 221528.png",
      desc: "AI-powered self-reflection companion that helps users explore emotions and habits through guided journaling and mood insights.",
      details: "Shadow Self is a mental wellness tool that leverages Natural Language Processing to help users understand their emotional states. Through daily journaling prompts and sentiment analysis, it provides users with a 'mirror' to their subconscious, fostering self-awareness and emotional growth.",
      techStack: ["Python", "OpenAI API", "React", "Tailwind CSS", "MongoDB"]
    },
    { 
      title: "Disha", 
      category: "Education / Social Impact", 
      image: "C:\Users\Dell\OneDrive\Pictures\Screenshots\Screenshot 2025-11-06 221629.png",
      desc: "Project Lead for a teaching platform associated with NSS, focusing on digital literacy for students in remote villages.",
      details: "As the Project Lead for Disha, I coordinated a team of volunteers to bring digital education to underserved rural areas. We developed a curriculum focused on basic computer skills and internet safety, impacting over 200 students across multiple villages.",
      techStack: ["Community Leadership", "Curriculum Design", "Digital Literacy", "Public Speaking"]
    },
  ],

  // 5. MILESTONES & CERTIFICATIONS
  milestones: [
    {
      title: "National Oratory Champion",
      desc: "Awarded the National Level Title in the Oratory Competition hosted by Oratory Guild ASIET.",
      icon: "Award"
    },
    {
      title: "State Level Winner",
      desc: "TSF Annual Speaking Contest 2025. Recognized for excellence in public speaking and communication.",
      icon: "Award"
    },
    {
      title: "Engineering Forum Honors",
      desc: "Achieved top honors at the Premier Kerala Wide Engineering Forum for a visionary presentation on 'Engineering Sustainable Prosperity'.",
      icon: "Award"
    },
    {
      title: "Conference Presenter",
      desc: "Presented 'ElderEase' at the International Conference ICIMRBE 2025, addressing tech innovation for the elderly.",
      icon: "Mic2"
    }
  ],
  certifications: [
    {
      title: "Salesforce Innovator & Champion",
      desc: "Achieved both Innovator and Champion levels, demonstrating proficiency in ecosystem fundamentals and administrative practices.",
    },
    {
      title: "Advanced Skill Development",
      desc: "ICT Academy & Reddington Foundation. Student Coordinator and Participant.",
    },
    {
      title: "NPTEL: Mobile Robotics",
      desc: "Course certification in advanced robotics and autonomous systems.",
    },
    {
      title: "CARE Stack Bridge Program",
      desc: "Technopark, Trivandrum. Hands-on experience through industry-focused training.",
    }
  ],

  // 6. PHOTO GALLERY
  gallery: [
    { id: 1, category: "events", title: "Brahma MC", src: "C:\Users\Dell\Downloads\1000101223.jpg" },
    { id: 2, category: "projects", title: "LUNGUA ", src: "C:\Users\Dell\Downloads\1000101206.jpg" },
    { id: 3, category: "campus", title: "NSS Activities", src: "C:\Users\Dell\OneDrive\Desktop\Jincy\PROJECT_DISHA .jpg" },
    { id: 4, category: "events", title: "Tech Talk", src: "C:\Users\Dell\Downloads\1000101195.png" },
    { id: 5, category: "projects", title: " Presentation", src: "C:\Users\Dell\Downloads\1000101197.png" },
    { id: 6, category: "campus", title: "ICT", src: "C:\Users\Dell\Downloads\1000101199.png" },
    { id: 7, category: "events", title: "Oratory Competition", src: "C:\Users\Dell\Downloads\1000101193.png" },
  ],

  // 5. SOCIAL LINKS
  social: {
    email: "jincydvarghese@gmail.com",
    github: "https://github.com/JincyVarghes",
    linkedin: "https://linkedin.com/in/jincy-varghese",
  }
};
