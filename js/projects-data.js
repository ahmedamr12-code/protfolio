/**
 * Sara Amr - Portfolio Projects Dataset
 * Rich project details for interactive modals and filtering.
 */

const projectsData = [
  {
    id: "skill-up-app",
    title: "Skill Up App",
    subtitle: "Non-Monetary Skill Sharing Platform Concept",
    category: "platforms",
    categoryLabel: "Platforms & UX",
    tagline: "Empowering collaborative learning where skills replace currency.",
    image: "assets/images/project-skillup.svg",
    role: "Concept Designer & Business Strategist",
    teamSize: "Collaborative Academic Project",
    duration: "Academic Semester Project",
    overview: "Skill Up App reimagines traditional education and freelance exchange through a direct barter mechanism. Instead of transactional financial hurdles, students and young professionals teach what they know (e.g., Python coding, languages, graphic design) to receive reciprocal mentorship in areas they wish to master.",
    problemStatement: "Young Egyptian learners often face financial constraints when seeking quality coaching, private tutoring, or soft-skill workshops, while simultaneously possessing valuable skills that remain underutilized.",
    solution: "A modern peer-to-peer barter platform powered by credit-based time banking and algorithmic skill matching. Users earn 'Knowledge Credits' by delivering verified learning sessions and spend them on tutoring from peers.",
    keyContributions: [
      "Engineered the non-monetary unit-of-exchange model ensuring fair peer-to-peer value balance.",
      "Mapped full user journey flows from onboarding and skill verification to session scheduling.",
      "Designed wireframes emphasizing mutual accountability, reviews, and community safety guidelines.",
      "Conducted target market survey among university students to validate willingness to trade knowledge."
    ],
    techStack: ["Figma UI/UX", "User Journey Mapping", "Business Model Canvas", "Time-Banking Algorithm Concept", "Survey Analytics"],
    outcomes: "Presented concept to academic jury with unanimous commendation for business viability, social impact, and zero-capital accessibility for Egyptian students."
  },
  {
    id: "fawry-digital-finance",
    title: "Fawry Digital Finance Study",
    subtitle: "Driving Financial Inclusion via Payment Infrastructure",
    category: "fintech",
    categoryLabel: "Fintech & Research",
    tagline: "Analyzing the catalyst behind Egypt's cashless transition.",
    image: "assets/images/project-fawry.svg",
    role: "Lead Financial Analyst & Business Researcher",
    teamSize: "Academic Research Study",
    duration: "In-Depth Research Sprint",
    overview: "A comprehensive business and strategic research paper examining Fawry, Egypt's premier digital transformation and fintech pioneer. The study analyzes how Fawry scaled from simple utility bill aggregation into a full-fledged financial ecosystem powering banked and unbanked populations.",
    problemStatement: "With a significant portion of Egypt's adult population historically outside the formal banking system, achieving digital financial inclusion required bridging cash-reliant micro-merchants with modern financial rails.",
    solution: "The research deconstructs Fawry's multi-sided network effect: empowering over 300,000 POS merchant kiosks as micro-branch banks, launching FawryPay for e-commerce, and expanding microfinance loans.",
    keyContributions: [
      "Quantified the market penetration metrics across unbanked Egyptian demographics.",
      "Analyzed Fawry's revenue streams, merchant unit economics, and transaction volume trends.",
      "Evaluated regulatory synergies with the Central Bank of Egypt (CBE) financial inclusion roadmap.",
      "Authored strategic recommendations on micro-insurance integration and SME credit scoring."
    ],
    techStack: ["Financial Ratio Analysis", "Market Penetration Modeling", "SWOT & PESTEL", "Data Visualization", "Fintech Ecosystem Mapping"],
    outcomes: "Delivered a rigorous, data-driven report awarded high marks for strategic depth and realistic fintech growth forecasting."
  },
  {
    id: "suez-canal-cities",
    title: "Suez Canal Cities Research",
    subtitle: "Economic, Demographic & Cultural Investigation",
    category: "research",
    categoryLabel: "Fintech & Research",
    tagline: "Unveiling the strategic lifeline of global maritime commerce.",
    image: "assets/images/project-suez.svg",
    role: "Research Lead, Geography & Demographics Presenter",
    teamSize: "Interdisciplinary Research Team",
    duration: "Research Project",
    overview: "An exhaustive academic study delving into the Suez Canal corridor, with focused deep-dives into the City of Suez. The project encompassed five comprehensive dimensions: historical introduction, geographical topography, demographic shifts, economic drivers, and meteorological climate influences.",
    problemStatement: "The Suez Canal region is central to Egypt's economy and world trade, yet cross-sectional analyses connecting local demographic sustainability with global maritime throughput are frequently fragmented.",
    solution: "Our team synthesized demographic censuses, canal toll revenues, trade volumes, and urban climate data into a unified socio-economic assessment of Suez's past, present, and sustainable future.",
    keyContributions: [
      "Led the research module covering geographical strategic importance, demographics, and climate impacts.",
      "Spearheaded team coordination, synthesizing disparate datasets into cohesive analytical chapters.",
      "Coordinated final oral presentation and created comprehensive visual data infographics.",
      "Evaluated the impact of climate variations and green maritime logistics on canal transit."
    ],
    techStack: ["Demographic Data Analysis", "GIS & Geographic Mapping", "Economic Impact Modeling", "Public Speaking & Presentation", "Academic Literature Review"],
    outcomes: "Achieved top academic ranking; applauded by faculty for exceptional leadership, coherent delivery, and synthesis of historical heritage with future economic growth."
  },
  {
    id: "ankh-pass",
    title: "Ankh Pass — Tourism Mobile App",
    subtitle: "All-in-One Digital Tourism & Safety Solution",
    category: "platforms",
    categoryLabel: "Platforms & UX",
    tagline: "Bridging Pharaonic splendor with cutting-edge visitor safety and convenience.",
    image: "assets/images/project-ankhpass.svg",
    role: "Co-Lead Product Architect & UX Researcher",
    teamSize: "2-Person Collaborative Project",
    duration: "Design & Product Sprint",
    overview: "Named after the iconic Egyptian Key of Life, Ankh Pass was conceived as an official, unified digital passport for tourists exploring Egypt's historic wonders. Designed in partnership with modern tourism best practices, it combines smart ticketing, interactive schedule optimization, augmented site guides, and real-time emergency safety features.",
    problemStatement: "International and domestic tourists often encounter fragmented booking platforms, long queues at cultural sites (Giza, Luxor, Karnak), pricing opacity, and language-barrier safety concerns.",
    solution: "A mobile super-app featuring unified digital QR ticketing, automated crowd-distribution scheduling, bilingual emergency SOS assistance, and verified local tour guide directories.",
    keyContributions: [
      "Architected the app information architecture and intuitive multi-language user journey.",
      "Integrated emergency SOS and real-time geolocation safety tracking mechanisms for visitor peace of mind.",
      "Designed dynamic scheduling UI to mitigate overcrowding at high-density heritage monuments.",
      "Created the Pharaonic-modern brand identity blending ancient aesthetics with contemporary UX."
    ],
    techStack: ["Figma UI/UX", "Tourism Journey Mapping", "Safety Architecture", "Crowd Analytics Concept", "Product Prototyping"],
    outcomes: "Presented as a hallmark project demonstrating how Egyptian heritage can inspire modern digital public-utility solutions."
  },
  {
    id: "org-behavior-study",
    title: "Organizational Behavior & Brand Study",
    subtitle: "Departmental Restructuring for an Egyptian Brand",
    category: "strategy",
    categoryLabel: "Data & Strategy",
    tagline: "Aligning human talent, marketing, and operational synergy.",
    image: "assets/images/project-orgbehavior.svg",
    role: "Head of Marketing & Strategy Facilitator",
    teamSize: "5-Person Collaborative Study",
    duration: "Semester Business Practicum",
    overview: "An organizational behavior field study analyzing the internal workflows, leadership styles, and operational hierarchy of a burgeoning local Egyptian business. The objective was to design a robust departmental blueprint capable of scaling without losing brand identity.",
    problemStatement: "Fast-growing Egyptian local brands often suffer from siloed departments, lack of standardized marketing communication, and unclear internal escalation paths.",
    solution: "Formulated a synchronized organizational structure establishing clear handoffs between Operations, Finance, Human Resources, and Marketing.",
    keyContributions: [
      "Assumed the role of Head of Marketing, establishing marketing KPIs, brand voice, and customer lifecycle funnels.",
      "Facilitated team alignment sessions to resolve cross-departmental friction points in the simulated study.",
      "Conducted behavioral interviews and workload audits to map communication bottlenecks.",
      "Drafted the comprehensive Marketing & Public Relations operational manual for company scaling."
    ],
    techStack: ["Organizational Design", "Marketing Funnel Architecture", "Cross-Functional Leadership", "KPI Frameworks", "Team Dynamics Coaching"],
    outcomes: "Praised by course professors for exceptional cross-functional leadership, authentic marketing realism, and actionable organizational frameworks."
  },
  {
    id: "career-launch",
    title: "CareerLaunch Web Platform",
    subtitle: "Career Transition Portal for Egyptian Youth",
    category: "platforms",
    categoryLabel: "Platforms & UX",
    tagline: "Empowering 18-25 year-olds to navigate the bridge from university to industry.",
    image: "assets/images/project-careerlaunch.svg",
    role: "Strategy & Product Specialist",
    teamSize: "3-Person Multidisciplinary Team",
    duration: "Web Development & Strategy Project",
    overview: "CareerLaunch is a specialized web platform designed specifically for Egyptian university students and fresh graduates (ages 18-25). It tackles the chronic gap between theoretical academic curricula and the tangible skills demanded by modern multinational and local employers.",
    problemStatement: "Over 70% of Egyptian university graduates report anxiety and difficulty understanding how their academic majors translate into competitive job roles in tech, data, and business.",
    solution: "A curated web experience offering interactive career roadmaps, skill diagnostics, resume benchmarking against Egyptian market standards, and peer networking circles.",
    keyContributions: [
      "Defined product requirements and youth persona profiles based on student interviews.",
      "Created structured career navigation paths for Business Informatics, Data Analytics, and Marketing.",
      "Spearheaded user testing sessions to optimize web responsiveness, typography, and accessibility.",
      "Curated initial resource repositories linking certified online programs to local employer requirements."
    ],
    techStack: ["Web Platform Architecture", "Product Strategy", "User Persona Research", "Curriculum Mapping", "Responsive UI Standards"],
    outcomes: "Recognized as a high-potential university social entrepreneurship initiative, receiving strong interest from student council bodies and faculty mentors."
  }
];

// Helper to find project by id
function getProjectById(id) {
  return projectsData.find(project => project.id === id);
}

