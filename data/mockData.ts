
import { Career, College, Scholarship, Exam, Counselor, Resource, AptitudeQuestion, Booking } from '../types';
import { careerImages, collegeImages, counselorAvatars, resourceImages } from './imageUrls';

export const mockCareers: Career[] = [
    {
        id: '1',
        title: 'Software Engineer',
        description: 'Designs, develops, and maintains software systems.',
        longDescription: 'Software engineers are creative problem-solvers who apply principles of computer science and engineering to design, develop, maintain, test, and evaluate computer software. This can range from operating systems and network distribution to compilers and embedded systems. They work in various industries, from technology giants to startups, contributing to web applications, mobile apps, desktop software, and more. The role often involves collaboration with cross-functional teams, continuous learning, and adapting to new technologies.',
        avgSalary: '$100,000 - $180,000/year',
        requiredEducation: 'Bachelor\'s Degree in Computer Science or related field',
        image: careerImages.softwareEngineer,
        responsibilities: [
            'Design and implement software solutions',
            'Write clean, maintainable, and efficient code',
            'Debug and troubleshoot software issues',
            'Collaborate with product and design teams',
            'Participate in code reviews'
        ],
        skills: ['Programming (Python, Java, C++)', 'Data Structures', 'Algorithms', 'Problem Solving', 'Teamwork'],
        careerPath: 'Junior Software Engineer -> Software Engineer -> Senior Software Engineer -> Lead Engineer / Architect',
        growthRate: '22% (Much faster than average)',
        workLifeBalance: 'Moderate (can vary with project deadlines)',
        jobOpenings: 150000,
        topEmployers: [
            { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
            { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=574e' },
            { name: 'Meta', logo: 'https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZgfJ_v3R_.ico' },
        ],
        skillProficiency: [
            { skill: 'Python', level: 'Advanced' },
            { skill: 'JavaScript', level: 'Intermediate' },
            { skill: 'Cloud Platforms (AWS/Azure/GCP)', level: 'Beginner' },
            { skill: 'Database Management (SQL/NoSQL)', level: 'Intermediate' },
        ],
        futureScope: 'High demand, increasing focus on AI/ML integration and cloud-native development.',
        automationImpact: 'Routine tasks may be automated, but complex problem-solving and creative design aspects remain human-centric.',
        stream: 'Technology & IT',
        tags: ['High Demand', 'Remote Work', 'Emerging']
    },
    {
        id: '2',
        title: 'Data Scientist',
        description: 'Analyzes complex data to extract insights and inform business decisions.',
        longDescription: 'Data scientists are experts in statistics, computer science, and business acumen. They use these skills to collect, analyze, and interpret large datasets. Their work involves developing predictive models, using machine learning algorithms, and communicating complex findings to stakeholders. This role is critical in industries ranging from finance and healthcare to marketing and technology, helping organizations make data-driven decisions and gain a competitive edge.',
        avgSalary: '$110,000 - $200,000/year',
        requiredEducation: 'Master\'s or PhD in Statistics, Computer Science, or related quantitative field',
        image: careerImages.dataScientist,
        responsibilities: [
            'Develop and implement machine learning models',
            'Clean, process, and verify data for analysis',
            'Interpret data and analyze results using statistical techniques',
            'Present findings to non-technical audiences',
            'Collaborate with engineers and product managers'
        ],
        skills: ['Statistics', 'Machine Learning', 'Python (Pandas, Scikit-learn)', 'SQL', 'Data Visualization'],
        careerPath: 'Junior Data Scientist -> Data Scientist -> Senior Data Scientist -> Lead Data Scientist / Machine Learning Engineer',
        growthRate: '35% (Much faster than average)',
        workLifeBalance: 'Moderate to high, project-based',
        jobOpenings: 80000,
        topEmployers: [
            { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
            { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png' },
            { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' },
        ],
        skillProficiency: [
            { skill: 'Python (Pandas, NumPy)', level: 'Advanced' },
            { skill: 'Statistical Modeling', level: 'Expert' },
            { skill: 'Cloud ML Platforms', level: 'Intermediate' },
            { skill: 'Big Data Technologies (Spark, Hadoop)', level: 'Beginner' },
        ],
        futureScope: 'Explosive growth with increasing data availability and demand for predictive analytics.',
        automationImpact: 'Tools automate routine data preparation, but strategic thinking and model interpretation remain crucial.',
        stream: 'Science & Research',
        tags: ['High Demand', 'Emerging', 'Analytical']
    },
    {
        id: '3',
        title: 'Environmental Scientist',
        description: 'Protects the environment and human health through scientific research.',
        longDescription: 'Environmental scientists use their knowledge of the natural sciences to protect the environment and human health. They may work in a variety of settings, including government agencies, private consulting firms, and non-profit organizations. Their tasks often involve collecting and analyzing environmental data, developing strategies to mitigate pollution, advising on policy, and conducting ecological impact assessments. This field is essential for addressing global challenges such as climate change, resource depletion, and biodiversity loss.',
        avgSalary: '$60,000 - $100,000/year',
        requiredEducation: 'Bachelor\'s or Master\'s Degree in Environmental Science or related field',
        image: careerImages.environmentalScientist,
        responsibilities: [
            'Conduct field research and collect samples',
            'Analyze environmental data',
            'Develop solutions for environmental problems',
            'Write reports and present findings',
            'Advise on environmental policies and regulations'
        ],
        skills: ['Ecology', 'Geology', 'Chemistry', 'Data Analysis', 'Report Writing'],
        careerPath: 'Entry-level Environmental Scientist -> Project Manager -> Senior Environmental Consultant',
        growthRate: '8% (As fast as average)',
        workLifeBalance: 'Moderate, with occasional fieldwork',
        jobOpenings: 15000,
        topEmployers: [
            { name: 'EPA', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/US_Environmental_Protection_Agency_logo.svg/1200px-US_Environmental_Protection_Agency_logo.svg.png' },
            { name: 'AECOM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/AECOM_logo.svg/2560px-AECOM_logo.svg.png' },
            { name: 'The Nature Conservancy', logo: 'https://www.nature.org/content/dam/tnc/nature/en/photos/logo.png' },
        ],
        skillProficiency: [
            { skill: 'GIS Software', level: 'Intermediate' },
            { skill: 'Environmental Regulations', level: 'Advanced' },
            { skill: 'Field Sampling Techniques', level: 'Intermediate' },
            { skill: 'Public Speaking', level: 'Beginner' },
        ],
        futureScope: 'Steady growth due to increasing environmental concerns and regulatory requirements.',
        automationImpact: 'Remote sensing and automated data collection tools enhance efficiency, but human expertise is vital for interpretation and policy development.',
        stream: 'Science & Research',
        tags: ['Sustainable', 'Research', 'Outdoor']
    },
    {
        id: '4',
        title: 'Digital Marketing Specialist',
        description: 'Creates and manages online marketing campaigns.',
        longDescription: 'Digital marketing specialists are responsible for developing, implementing, and managing marketing campaigns that promote a company and its products/services. They identify and evaluate new digital technologies and use web analytics tools to measure site traffic to better optimize marketing campaigns, email marketing, social media, and display and search advertising. This role demands creativity, analytical skills, and a strong understanding of current digital trends to reach target audiences effectively and drive conversions.',
        avgSalary: '$50,000 - $90,000/year',
        requiredEducation: 'Bachelor\'s Degree in Marketing, Communications, or Business',
        image: careerImages.digitalMarketing,
        responsibilities: [
            'Develop digital marketing strategies',
            'Manage social media presence',
            'Run SEO and SEM campaigns',
            'Analyze campaign performance',
            'Create engaging content'
        ],
        skills: ['SEO/SEM', 'Social Media Marketing', 'Content Creation', 'Analytics', 'Email Marketing'],
        careerPath: 'Digital Marketing Assistant -> Digital Marketing Specialist -> Marketing Manager',
        growthRate: '10% (Faster than average)',
        workLifeBalance: 'Moderate, often project-deadline driven',
        jobOpenings: 50000,
        topEmployers: [
            { name: 'Publicis Groupe', logo: 'https://www.publicisgroupe.com/img/logo_publicis.svg' },
            { name: 'WPP', logo: 'https://www.wpp.com/-/media/project/wpp/logos/wpp-logo.svg' },
            { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
        ],
        skillProficiency: [
            { skill: 'Google Analytics', level: 'Advanced' },
            { skill: 'SEO Tools (e.g., Ahrefs, SEMrush)', level: 'Intermediate' },
            { skill: 'Content Marketing Strategy', level: 'Advanced' },
            { skill: 'Paid Social Media Ads', level: 'Intermediate' },
        ],
        futureScope: 'Continual evolution with new platforms and AI-driven personalization.',
        automationImpact: 'Ad bidding and basic content generation can be automated, but strategic oversight and creative campaign development require human input.',
        stream: 'Business & Marketing',
        tags: ['High Demand', 'Creative', 'Remote Work']
    },
    {
        id: '5',
        title: 'Registered Nurse',
        description: 'Provides direct patient care and educates patients and their families.',
        longDescription: 'Registered Nurses (RNs) are vital healthcare professionals who provide and coordinate patient care, educate patients and the public about various health conditions, and provide advice and emotional support to patients and their family members. They work in hospitals, physicians\' offices, home healthcare services, and nursing care facilities. RNs perform physical exams, administer medications, wound care, and other treatments, and operate medical equipment, often specializing in areas like critical care, pediatrics, or geriatrics.',
        avgSalary: '$75,000 - $110,000/year',
        requiredEducation: 'Associate\'s Degree in Nursing (ADN) or Bachelor of Science in Nursing (BSN)',
        image: careerImages.registeredNurse,
        responsibilities: [
            'Assess patient health problems and needs',
            'Administer medications and treatments',
            'Educate patients on health conditions',
            'Operate medical equipment',
            'Record patient medical histories and symptoms'
        ],
        skills: ['Patient Care', 'Communication', 'Critical Thinking', 'Empathy', 'Medical Knowledge'],
        careerPath: 'Staff Nurse -> Charge Nurse -> Nurse Manager -> Nurse Practitioner (with advanced degree)',
        growthRate: '6% (As fast as average)',
        workLifeBalance: 'Challenging, shift-based work',
        jobOpenings: 200000,
        topEmployers: [
            { name: 'Mayo Clinic', logo: 'https://www.mayoclinic.org/-/media/web/logo/mayo-clinic-logo.svg' },
            { name: 'Kaiser Permanente', logo: 'https://about.kaiserpermanente.org/content/dam/global/kp-dotcom/graphics/images/logo.png' },
            { name: 'HCA Healthcare', logo: 'https://hcahealthcare.com/assets/images/hca-logo.svg' },
        ],
        skillProficiency: [
            { skill: 'Emergency Response', level: 'Advanced' },
            { skill: 'Electronic Health Records (EHR)', level: 'Intermediate' },
            { skill: 'Medication Administration', level: 'Expert' },
            { skill: 'Interpersonal Communication', level: 'Advanced' },
        ],
        futureScope: 'Consistent demand due to an aging population and increasing chronic conditions.',
        automationImpact: 'Routine administrative tasks and some monitoring may be automated, but direct patient interaction, critical assessment, and emotional support remain core human roles.',
        stream: 'Healthcare',
        tags: ['High Demand', 'Service-Oriented']
    },
    {
        id: '6',
        title: 'Graphic Designer',
        description: 'Creates visual concepts using computer software or by hand.',
        longDescription: 'Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, or captivate consumers. They develop the overall layout and production design for various applications such as advertisements, brochures, magazines, and corporate reports. The role involves meeting with clients to determine the scope of a project, advising on strategies to reach a particular audience, and determining the message the design should portray. Creativity, attention to detail, and proficiency with design software are crucial.',
        avgSalary: '$45,000 - $75,000/year',
        requiredEducation: 'Bachelor\'s Degree in Graphic Design or related field',
        image: careerImages.graphicDesigner,
        responsibilities: [
            'Create designs using illustration, photo editing, and layout software',
            'Develop concepts, graphics, and layouts for product illustrations, company logos, and websites',
            'Determine the message a design should portray',
            'Work with clients to understand their needs',
            'Present designs to clients for approval'
        ],
        skills: ['Adobe Creative Suite', 'Typography', 'Color Theory', 'Layout Design', 'Creativity'],
        careerPath: 'Junior Graphic Designer -> Graphic Designer -> Senior Graphic Designer -> Art Director',
        growthRate: '3% (Slower than average)',
        workLifeBalance: 'Moderate, can be project-based with tight deadlines',
        jobOpenings: 10000,
        topEmployers: [
            { name: 'IDEO', logo: 'https://www.ideo.com/assets/images/logo_black.svg' },
            { name: 'Pentagram', logo: 'https://www.pentagram.com/assets/logo-pentagram-black.svg' },
            { name: 'Nike', logo: 'https://www.nike.com/assets/experience/hp/logo-nike.svg' },
        ],
        skillProficiency: [
            { skill: 'Adobe Photoshop', level: 'Advanced' },
            { skill: 'Adobe Illustrator', level: 'Advanced' },
            { skill: 'UI/UX Principles', level: 'Intermediate' },
            { skill: 'Motion Graphics', level: 'Beginner' },
        ],
        futureScope: 'Increasing demand for digital design, UI/UX, and motion graphics.',
        automationImpact: 'Basic design tasks and template-based work may be automated, but conceptualization, brand strategy, and complex visual problem-solving remain human domains.',
        stream: 'Arts & Design',
        tags: ['Creative', 'Freelance']
    },
    {
        id: '7',
        title: 'Blockchain Developer',
        description: 'Designs and implements blockchain-based solutions and applications.',
        longDescription: 'Blockchain developers specialize in building and maintaining decentralized applications (dApps), smart contracts, and other blockchain-related technologies. They work with various blockchain platforms such as Ethereum, Solana, or Binance Smart Chain, often using languages like Solidity for smart contracts. This emerging field requires a strong understanding of cryptography, distributed systems, and economic principles, contributing to innovative solutions in finance, supply chain, gaming, and more.',
        avgSalary: '$120,000 - $250,000/year',
        requiredEducation: 'Bachelor\'s Degree in Computer Science, Software Engineering, or related field',
        image: careerImages.blockchainDeveloper,
        responsibilities: [
            'Design and develop blockchain protocols',
            'Implement smart contracts',
            'Build decentralized applications (dApps)',
            'Research and integrate new blockchain technologies',
            'Ensure security and efficiency of blockchain solutions'
        ],
        skills: ['Solidity', 'Cryptography', 'Distributed Systems', 'Web3.js/Ethers.js', 'Smart Contract Security'],
        careerPath: 'Junior Blockchain Dev -> Blockchain Developer -> Senior Blockchain Dev -> Blockchain Architect',
        growthRate: 'High (rapidly emerging field)',
        workLifeBalance: 'Dynamic, often in startup environments, can be demanding.',
        jobOpenings: 25000,
        topEmployers: [
            { name: 'ConsenSys', logo: 'https://consensys.net/assets/svg/consensys-logo-dark.svg' },
            { name: 'Binance', logo: 'https://public.bnbstatic.com/static/images/common/favicon/favicon.png' },
            { name: 'Chainlink Labs', logo: 'https://chain.link/assets/svg/chainlink-logo.svg' },
        ],
        skillProficiency: [
            { skill: 'Solidity', level: 'Advanced' },
            { skill: 'Web3 Frameworks', level: 'Intermediate' },
            { skill: 'Cryptography', level: 'Advanced' },
            { skill: 'Decentralized Finance (DeFi)', level: 'Beginner' },
        ],
        futureScope: 'One of the fastest-growing tech fields, with significant innovation expected.',
        automationImpact: 'Core development requires human ingenuity, but testing and deployment can leverage automated tools.',
        stream: 'Technology & IT',
        tags: ['Emerging', 'High Demand', 'Innovative']
    }
];

export const mockColleges: College[] = [
    {
        id: '1',
        name: 'Stanford University',
        location: 'Stanford, CA',
        rating: 4.9,
        courses: ['Computer Science', 'Engineering', 'Business', 'Biology'],
        description: 'Stanford University, located in the heart of Silicon Valley, is one of the world\'s leading research and teaching institutions. It is known for its academic excellence, innovative research, and entrepreneurial spirit. The university\'s strong ties to the technology industry provide unparalleled opportunities for students and faculty. Stanford offers a vast array of undergraduate and graduate programs across its seven schools, fostering an environment of interdisciplinary collaboration and intellectual discovery. Its beautiful campus and vibrant student life contribute to a holistic educational experience.',
        website: 'https://www.stanford.edu/',
        image: collegeImages.stanford,
    },
    {
        id: '2',
        name: 'Massachusetts Institute of Technology (MIT)',
        location: 'Cambridge, MA',
        rating: 4.9,
        courses: ['Engineering', 'Computer Science', 'Physics', 'Mathematics'],
        description: 'The Massachusetts Institute of Technology is a private research university in Cambridge, Massachusetts. MIT is an independent, coeducational university organized into five schools (architecture and planning; engineering; humanities, arts, and social sciences; management; and science). It is known for its rigorous academic programs, cutting-edge research, and strong emphasis on science and technology. MIT has a long history of breakthroughs in areas such as artificial intelligence, robotics, and biotechnology, attracting students and faculty from around the globe.',
        website: 'https://www.mit.edu/',
        image: collegeImages.mit,
    },
    {
        id: '3',
        name: 'Harvard University',
        location: 'Cambridge, MA',
        rating: 4.8,
        courses: ['Law', 'Medicine', 'Business', 'Arts and Sciences'],
        description: 'Harvard University is a private Ivy League research university in Cambridge, Massachusetts. Established in 1636 and named for its first benefactor, clergyman John Harvard, it is the oldest institution of higher learning in the United States and among the most prestigious in the world. Harvard is renowned for its outstanding faculty, extensive research opportunities, and commitment to shaping leaders across various fields. Its expansive libraries, museums, and historical campus provide a rich academic and cultural environment.',
        website: 'https://www.harvard.edu/',
        image: collegeImages.harvard,
    },
    {
        id: '4',
        name: 'University of California, Berkeley',
        location: 'Berkeley, CA',
        rating: 4.7,
        courses: ['Computer Science', 'Engineering', 'Public Policy', 'Natural Resources'],
        description: 'The University of California, Berkeley is a public research university in Berkeley, California. Founded in 1868, Berkeley is the flagship institution of the ten research universities affiliated with the University of California system. It is consistently ranked among the top public universities globally, known for its strong programs in engineering, computer science, and social sciences. UC Berkeley has a vibrant intellectual community, a history of activism, and a commitment to public service, attracting diverse students and faculty.',
        website: 'https://www.berkeley.edu/',
        image: collegeImages.berkeley,
    }
];

export const mockScholarships: Scholarship[] = [
    {
        id: '1',
        name: 'Academic Excellence Scholarship',
        provider: 'National Scholarship Foundation',
        amount: '$10,000',
        eligibility: 'Minimum GPA of 3.8, demonstrated leadership, essay required.',
        deadline: 'October 15, 2024',
        applicationLink: '#'
    },
    {
        id: '2',
        name: 'STEM Innovator Grant',
        provider: 'Tech Future Fund',
        amount: '$5,000',
        eligibility: 'Majoring in a STEM field, portfolio of projects, recommendation letter.',
        deadline: 'November 30, 2024',
        applicationLink: '#'
    },
    {
        id: '3',
        name: 'Community Impact Scholarship',
        provider: 'Local Community Outreach',
        amount: '$2,500',
        eligibility: 'Minimum 100 hours of community service, resident of local county, interview.',
        deadline: 'December 1, 2024',
        applicationLink: '#'
    },
    {
        id: '4',
        name: 'Arts and Creativity Award',
        provider: 'Creative Arts Foundation',
        amount: '$7,500',
        eligibility: 'Demonstrated talent in visual or performing arts, portfolio/audition required.',
        deadline: 'January 15, 2025',
        applicationLink: '#'
    }
];

export const mockExams: Exam[] = [
    {
        id: '1',
        name: 'SAT',
        date: 'Multiple dates (check official website)',
        description: 'The SAT is a standardized test widely used for college admissions in the United States. It assesses a student\'s readiness for college through sections on Reading, Writing and Language, and Math.',
        officialLink: 'https://satsuite.collegeboard.org/'
    },
    {
        id: '2',
        name: 'ACT',
        date: 'Multiple dates (check official website)',
        description: 'The ACT is a standardized test used for college admissions in the United States. It covers four academic skill areas: English, mathematics, reading, and scientific reasoning.',
        officialLink: 'https://www.act.org/'
    },
    {
        id: '3',
        name: 'GRE',
        date: 'Year-round (check official website)',
        description: 'The Graduate Record Examinations (GRE) General Test is a standardized test that is an admissions requirement for most graduate schools in the United States and Canada, and a growing number of universities worldwide.',
        officialLink: 'https://www.ets.org/gre.html'
    },
    {
        id: '4',
        name: 'GMAT',
        date: 'Year-round (check official website)',
        description: 'The Graduate Management Admission Test (GMAT) is a computer adaptive test intended to assess certain analytical, writing, quantitative, verbal, and reading skills for use in admission to a graduate management program, such as an MBA program.',
        officialLink: 'https://www.mba.com/exams/gmat-exam'
    }
];

export const mockCounselors: Counselor[] = [
    {
        id: '1',
        name: 'Dr. Emily Watson',
        specialization: 'Career Transition & Executive Coaching',
        experience: 15,
        avatar: counselorAvatars.emilyWatson,
        bio: 'Dr. Watson is an experienced career counselor specializing in helping professionals navigate career transitions and leadership development. With a background in organizational psychology, she provides strategic guidance for career advancement.'
    },
    {
        id: '2',
        name: 'Mr. David Lee',
        specialization: 'College Admissions & Academic Planning',
        experience: 10,
        avatar: counselorAvatars.davidLee,
        bio: 'Mr. Lee is an expert in college admissions and academic advising. He guides students through the application process, helps with essay writing, and assists in selecting programs that align with their career aspirations.'
    },
    {
        id: '3',
        name: 'Ms. Sarah Chen',
        specialization: 'Early Career Guidance & Skill Development',
        experience: 8,
        avatar: counselorAvatars.sarahChen,
        bio: 'Ms. Chen focuses on helping high school and college students identify their strengths and interests. She provides practical advice on skill development, internship opportunities, and building a strong foundation for future careers.'
    },
    {
        id: '4',
        name: 'Dr. Michael Green',
        specialization: 'STEM Careers & Research Opportunities',
        experience: 20,
        avatar: counselorAvatars.michaelGreen,
        bio: 'Dr. Green, with a Ph.D. in Engineering, specializes in guiding individuals towards successful careers in STEM fields. He offers insights into cutting-edge research, advanced degrees, and industry-specific challenges.'
    }
];

export const mockResources: Resource[] = [
    {
        id: '1',
        type: 'Article',
        title: 'The Future of Work: AI\'s Impact on Jobs',
        summary: 'An in-depth look at how artificial intelligence is reshaping the job market and what skills will be in demand.',
        link: '#',
        image: resourceImages.aiImpact
    },
    {
        id: '2',
        type: 'Video',
        title: 'Mastering Your Job Interview',
        summary: 'A comprehensive video guide with tips and tricks for acing your next job interview.',
        link: '#',
        image: resourceImages.jobInterview
    },
    {
        id: '3',
        type: 'Webinar',
        title: 'Navigating Career Changes at Mid-Life',
        summary: 'Expert advice for professionals looking to make a significant career change later in their professional journey.',
        link: '#',
        image: resourceImages.careerChange
    },
    {
        id: '4',
        type: 'Trend Report',
        title: 'Emerging Technologies of 2024',
        summary: 'A detailed report on the technologies expected to dominate industries in the coming year.',
        link: '#',
        image: resourceImages.techTrends
    },
    {
        id: '5',
        type: 'Article',
        title: 'Building a Strong Professional Network',
        summary: 'Learn effective strategies for networking and building valuable connections in your industry.',
        link: '#',
        image: resourceImages.networking
    },
    {
        id: '6',
        type: 'Video',
        title: 'Understanding Financial Aid for College',
        summary: 'A simple explanation of grants, loans, and scholarships to help fund your higher education.',
        link: '#',
        image: resourceImages.financialAid
    },
    {
        id: '7',
        type: 'Trend Report',
        title: 'The Rise of Green Jobs: Opportunities in Sustainability',
        summary: 'Explore the growing sector of green jobs and how to pivot your career towards environmental sustainability.',
        link: '#',
        image: resourceImages.greenJobs
    }
];

export const mockAptitudeQuestions: AptitudeQuestion[] = [
    {
        id: 'q1',
        question: 'Which of the following activities do you find most engaging?',
        options: [
            'Solving complex technical problems',
            'Creating visual content and designs',
            'Analyzing data to find patterns and insights',
            'Helping and communicating with people',
        ],
        correctAnswerIndex: -1, // No correct answer for aptitude, it's about preference
    },
    {
        id: 'q2',
        question: 'When faced with a new challenge, what is your typical approach?',
        options: [
            'Breaking it down into smaller, manageable steps',
            'Brainstorming creative and unconventional solutions',
            'Gathering all available information before acting',
            'Seeking advice and collaborating with others',
        ],
        correctAnswerIndex: -1,
    },
    {
        id: 'q3',
        question: 'Which work environment do you prefer?',
        options: [
            'Structured with clear goals and individual tasks',
            'Dynamic and fast-paced with varied projects',
            'Research-oriented with deep dives into specific topics',
            'Collaborative and team-focused with lots of interaction',
        ],
        correctAnswerIndex: -1,
    },
    {
        id: 'q4',
        question: 'What kind of tasks do you enjoy most?',
        options: [
            'Developing new systems or improving existing ones',
            'Expressing ideas through art, writing, or performance',
            'Working with numbers, statistics, and logical reasoning',
            'Providing support and guidance to others',
        ],
        correctAnswerIndex: -1,
    },
    {
        id: 'q5',
        question: 'Which subject interested you most in school?',
        options: [
            'Mathematics and Computer Science',
            'Art, Design, and Literature',
            'Biology, Chemistry, and Physics',
            'Psychology, Sociology, and History',
        ],
        correctAnswerIndex: -1,
    },
];

export const mockBookings: Booking[] = [
    {
        id: 'b1',
        counselorName: 'Dr. Emily Watson',
        date: '2024-11-01',
        time: '10:00 AM',
        status: 'Confirmed',
    },
    {
        id: 'b2',
        counselorName: 'Mr. David Lee',
        date: '2024-11-05',
        time: '02:30 PM',
        status: 'Pending',
    },
    {
        id: 'b3',
        counselorName: 'Ms. Sarah Chen',
        date: '2024-10-28',
        time: '09:00 AM',
        status: 'Cancelled',
    },
];