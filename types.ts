

export interface User {
  id: string;
  name: string;
  email: string;
  educationLevel?: string; // New field
}

export interface Career {
  id: string;
  title: string;
  description: string; // This will now be a 'short description' on cards
  longDescription: string; // New field for detailed page
  avgSalary: string;
  requiredEducation: string;
  image: string;
  responsibilities: string[];
  skills: string[]; // These are general skills, proficiency levels will be added to CareerDetail
  careerPath: string;
  growthRate: string; // New field
  workLifeBalance: string; // New field
  jobOpenings: number; // New field
  topEmployers: { name: string; logo: string; }[]; // New field
  skillProficiency: { skill: string; level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'; }[]; // New field for detailed view
  futureScope: string; // New field
  automationImpact: string; // New field
  stream: string; // New field for categorization
  tags: string[]; // New field for "High Demand", "Emerging", "Remote Work"
}

export interface College {
    id: string;
    name: string;
    location: string;
    rating: number;
    courses: string[];
    description: string;
    website: string;
    image: string;
}

export interface Scholarship {
    id: string;
    name: string;
    provider: string;
    amount: string;
    eligibility: string;
    deadline: string; // New field
    applicationLink: string; // New field
}

export interface Exam {
    id: string;
    name: string;
    date: string;
    description: string;
    officialLink: string; // New field
}

export interface Counselor {
    id: string;
    name: string;
    specialization: string;
    experience: number;
    avatar: string;
    bio: string; // New field
}

export interface Resource {
  id: string;
  type: 'Article' | 'Video' | 'Webinar' | 'Trend Report';
  title: string;
  summary: string;
  link: string;
  image?: string;
}

export interface AptitudeQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number; // For basic scoring, though recommendations will be more complex
}

export interface AptitudeAnswer {
  questionId: string;
  selectedOptionIndex: number;
}

// Fix: Define and export the Booking interface
export interface Booking {
  id: string;
  counselorName: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}


export enum NotificationType {
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'info',
}

export enum MessageSender {
  User = 'user',
  AI = 'ai',
}

export interface ChatMessage {
  text: string;
  sender: MessageSender;
  timestamp: Date;
}