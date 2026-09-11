export const personalDetails = {
  name: "CH Udaya Kumar",
  title: "AI / ML Engineer & Software Development Engineer (SDE)",
  taglines: [
    "AI / ML Engineer",
    "Software Development Engineer (SDE)",
    "Spring Boot & YOLOv8 Specialist",
    "Computer Vision & Distributed Systems"
  ],
  bio: "Computer Science & Engineering graduate specializing in AI/ML & Backend Engineering with hands-on internship experience at ParkNSecure Private Limited. Proficient in Java, Spring Boot, Python, YOLOv8, and RESTful APIs with strong foundations in DSA and System Design.",
  email: "udayreddy1400@gmail.com",
  phone: "+91 73381 77048",
  location: "Bengaluru, Karnataka, India",
  githubUsername: "UKR555",
  linkedin: "https://linkedin.com/in/uday554",
  github: "https://github.com/UKR555",
  resumeUrl: "/uday_resume.pdf",
};

export const featuredProjects = [
  {
    title: "AI Malpractice & Cheating Detection System",
    description: "Multi-modal computer vision monitoring system leveraging YOLOv8 for unauthorized object detection (mobile phones) and YOLOv8-Pose for 17-point skeletal pose estimation. Features spatial-temporal tracking in OpenCV to detect posture anomalies and seat abandonment in real time.",
    techStack: ["Python", "Django", "YOLOv8-Pose", "OpenCV", "Three.js", "Chart.js"],
    githubUrl: "https://github.com/UKR555/Malpractice-deetector",
    category: "AI/ML & Computer Vision"
  },
  {
    title: "Grocery Customer Churn Prediction Engine",
    description: "Predictive analytics Java web portal utilizing Spring Boot 2.7 and Weka 3.8 ML library to evaluate customer shopping behavior. Benchmark-tested 5 machine learning classifiers (Decision Trees, Random Forest, Naive Bayes, Logistic Regression, SVM) with runtime automated model selection.",
    techStack: ["Java 11", "Spring Boot 2.7", "Weka 3.8", "Bootstrap 5"],
    githubUrl: "https://github.com/UKR555/customer_churn_prediction",
    category: "Machine Learning & Backend"
  },
  {
    title: "AI Automatic Number Plate Recognition (ANPR)",
    description: "Fine-tuned custom YOLOv8 detection models for vehicle localization and license plate bounding-box extraction routed into Tesseract OCR engine. Integrated real-time video stream ingestion with Spring Boot backend services.",
    techStack: ["YOLOv8", "OpenCV", "Tesseract OCR", "Spring Boot", "Python"],
    githubUrl: "https://github.com/UKR555/ANPR-",
    category: "AI/ML & Computer Vision"
  },
  {
    title: "E-Commerce Backend Platform",
    description: "Production-ready monolithic backend service featuring 10+ RESTful API endpoints for user authentication, product catalog routing, and order lifecycle management. Enforced 3-tier MVC architecture with Spring Data JPA and MySQL.",
    techStack: ["Java", "Spring Boot", "MySQL", "Spring Data JPA", "REST APIs"],
    githubUrl: "https://github.com/UKR555/ecommerce_codewithswaroop",
    category: "Backend Engineering"
  }
];

export const skillsCategories = [
  {
    name: "AI & Machine Learning",
    skills: ["YOLOv8 & YOLOv8-Pose", "OpenCV", "EasyOCR & Tesseract", "GRU Neural Networks", "Weka ML API", "NumPy"]
  },
  {
    name: "Backend & Web Engineering",
    skills: ["Java", "Spring Boot 2.7", "RESTful APIs", "Spring Data JPA", "Hibernate", "Django"]
  },
  {
    name: "Languages & Web",
    skills: ["Java", "Python", "SQL", "JavaScript", "HTML5 & CSS3"]
  },
  {
    name: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "Docker", "Git & GitHub", "Postman", "Maven", "Vercel"]
  },
  {
    name: "CS Fundamentals",
    skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "System Design", "Operating Systems", "Computer Networks"]
  }
];

export const workExperience = [
  {
    company: "ParkNSecure Private Limited",
    role: "AI / ML Intern",
    location: "Bengaluru, India",
    period: "May 2025 â€“ June 2025",
    bullets: [
      "Architected an Automatic Number Plate Recognition (ANPR) and vehicle monitoring module for an AI-driven smart parking management system.",
      "Fine-tuned custom YOLOv8 detection models for vehicle localization and license plate bounding-box extraction, routing cropped OpenCV frames into a Tesseract OCR engine for text parsing.",
      "Integrated real-time video stream ingestion with Spring Boot backend services, optimizing frame processing workflows and reducing manual monitoring overhead."
    ]
  }
];

export const educationHistory = [
  {
    institution: "Gandhi Institute of Technology and Management (GITAM)",
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    period: "2022 â€“ 2026",
    score: "CGPA: 7.91 / 10.0"
  },
  {
    institution: "V.K.J PU College",
    degree: "Pre-University Education (PCMB)",
    period: "2020 â€“ 2022",
    score: "Grade: 77.83%"
  }
];

export const certificationsList = [
  {
    title: "Smart India Hackathon (SIH)",
    issuer: "Ministry of Education / Govt of India",
    description: "Selected for university hackathon team 'HARBINGERS'; engineered backend API contract rules and database integration layers."
  },
  {
    title: "MongoDB Administration Certification",
    issuer: "Infosys Springboard",
    description: "Certified in document schema design, aggregation frameworks, indexing strategies, and CRUD operations."
  }
];
