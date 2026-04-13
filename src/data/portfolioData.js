// src/data/portfolioData.js

const portfolioData = {
  // =========================
  // Basic Information
  // =========================
  name: "Dhruv Verma",
  title: "Digital Marketing Executive",
  dob: "19 April 2004",

  // =========================
  // Contact Information
  // =========================
  contact: {
    phone: "+91 8707858634",
    email: "dhruvv389@gmail.com",
    address:
      "41/416 Seth Ram Jas Road, Narhi, Hazratganj, Lucknow, Uttar Pradesh - 226001",
    linkedin: "https://linkedin.com/in/dhruv-verma", // Update with actual link if available
    github: "", // Optional
    website: "", // Optional personal website
  },

  // =========================
  // Hero Section
  // =========================
  hero: {
    greeting: "Hello, I'm",
    tagline: "Driving Growth Through Data-Driven Digital Marketing",
    description:
      "A passionate Digital Marketing Executive specializing in SEO, SEM, social media marketing, and performance analytics to enhance brand visibility and generate high-quality leads.",
    resume: "/Dhruv_Verma_Resume.pdf", // Place the PDF in the public folder
    profileImage: "/images/dhruv.jpg", // Optional: Add profile image in public/images
  },

  // =========================
  // About Section
  // =========================
  about: {
    description: `Results-driven Digital Marketing Specialist with over 1 year of experience in creating, implementing, and optimizing data-driven marketing strategies across SEO, SEM, social media, email marketing, and content marketing. Proven ability to increase brand awareness, drive website traffic, and boost lead generation through innovative campaigns and performance analytics. Skilled in tools such as Google Ads, Google Analytics, Meta Ads Manager, and marketing automation platforms. Adept at working in fast-paced environments with a strong focus on ROI and customer engagement.`,
  },

  // =========================
  // Skills Section
  // =========================
  skills: {
    technical: [
      "Search Engine Optimization (SEO)",
      "Search Engine Marketing (SEM)",
      "Google Ads",
      "Google Analytics",
      "Social Media Marketing",
      "Content Marketing",
      "Competitor Analysis",
      "Web Designing",
      "Basic Graphic Designing",
      "Python Programming",
    ],
    tools: [
      "Google Ads",
      "Google Analytics",
      "Meta Ads Manager",
      "Canva",
      "WordPress",
      "MS Office",
    ],
    soft: [
      "Problem-Solving",
      "Time Management",
      "Self Management & Discipline",
      "Creative & Innovation",
      "Teamwork & Collaboration",
      "Adaptability & Flexibility",
    ],
  },

  // =========================
  // Languages
  // =========================
  languages: ["English", "Hindi"],

  // =========================
  // Work Experience
  // =========================
  experience: [
    {
      company: "WebVoom Pvt Ltd",
      role: "Digital Marketing Executive",
      duration: "Aug 2025 - Present",
      location: "Lucknow, India",
      description: [
        "Managing SEO and SEM campaigns to improve website rankings and online visibility.",
        "Planning and executing social media marketing strategies across multiple platforms.",
        "Running and optimizing paid advertising campaigns using Google Ads and Meta Ads Manager.",
        "Analyzing campaign performance using Google Analytics to improve ROI.",
        "Collaborating with design and content teams to enhance brand engagement.",
      ],
      website: "", // Add company website if available
      current: true,
    },
    {
      company: "JBR Infra & Developers",
      role: "Social Media Manager",
      duration: "Mar 2025 - Aug 2025",
      location: "Lucknow, India",
      description: [
        "Developed and executed social media strategies to enhance brand presence.",
        "Managed content calendars and audience engagement across platforms.",
        "Analyzed performance metrics to optimize campaigns and increase reach.",
      ],
      current: false,
    },
    {
      company: "Laura Beauty & Makeup Mantra",
      role: "Graphic Designer & Social Media Executive",
      duration: "Aug 2024 - Feb 2025",
      location: "Lucknow, India",
      description: [
        "Designed creative graphics for social media and promotional campaigns.",
        "Managed social media accounts to increase brand awareness and engagement.",
        "Collaborated with marketing teams to develop visually appealing content.",
      ],
      current: false,
    },
  ],

  // =========================
  // Education & Certifications
  // =========================
  education: [
    {
      title: "Bachelor of Commerce (B.Com)",
      institution: "Lucknow University",
      year: "Completed",
      description: "Focused on commerce, finance, and business management.",
    },
    {
      title: "12th Standard (ICSE)",
      institution: "Seventh Day Adventist School",
      year: "Completed",
    },
    {
      title: "10th Standard (ICSE)",
      institution: "Seventh Day Adventist School",
      year: "Completed",
    },
    {
      title: "O Level Course",
      institution: "NIELIT",
      year: "Completed",
    },
    {
      title: "Course on Computer Concepts (CCC)",
      institution: "NIELIT",
      year: "Completed",
    },
    {
      title: "Digital Marketing Professional Course",
      institution: "Digiperform, Hazratganj",
      year: "Completed",
    },
  ],

  // =========================
  // Projects (Optional - Can be updated later)
  // =========================
  projects: [
    {
      title: "SEO Optimization Campaign",
      description:
        "Improved organic search rankings and increased website traffic through strategic keyword research and on-page optimization.",
      technologies: ["SEO", "Google Analytics", "Keyword Research"],
      image: "/images/project1.jpg",
      liveLink: "",
      githubLink: "",
    },
    {
      title: "Social Media Growth Strategy",
      description:
        "Developed and executed a social media campaign that significantly boosted engagement and follower growth.",
      technologies: ["Social Media Marketing", "Meta Ads", "Content Strategy"],
      image: "/images/project2.jpg",
      liveLink: "",
      githubLink: "",
    },
    {
      title: "Google Ads Lead Generation",
      description:
        "Managed Google Ads campaigns to generate high-quality leads while optimizing cost-per-click and conversion rates.",
      technologies: ["Google Ads", "SEM", "Analytics"],
      image: "/images/project3.jpg",
      liveLink: "",
      githubLink: "",
    },
  ],

  // =========================
  // Testimonials (Optional)
  // =========================
  testimonials: [
    {
      name: "Client Name",
      position: "Marketing Manager",
      company: "Company Name",
      feedback:
        "Dhruv demonstrated exceptional skills in digital marketing and significantly improved our online presence.",
      image: "/images/testimonial1.jpg",
    },
  ],

  // =========================
  // SEO & Social Metadata
  // =========================
  seo: {
    metaTitle: "Dhruv Verma | Digital Marketing Executive",
    metaDescription:
      "Portfolio of Dhruv Verma, a Digital Marketing Executive specializing in SEO, SEM, social media marketing, and performance analytics.",
    keywords: [
      "Dhruv Verma",
      "Digital Marketer",
      "SEO Specialist",
      "Social Media Manager",
      "Google Ads Expert",
      "Lucknow",
    ],
    author: "Dhruv Verma",
  },

  // =========================
  // Footer Information
  // =========================
  footer: {
    tagline:
      "Empowering brands with data-driven digital marketing strategies.",
    copyright: `© ${new Date().getFullYear()} Dhruv Verma. All rights reserved.`,
  },
};

export default portfolioData;