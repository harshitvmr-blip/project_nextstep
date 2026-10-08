-- SQLite schema for Next Step Guide application

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Careers table
CREATE TABLE IF NOT EXISTS careers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    avg_salary VARCHAR(50),
    required_education VARCHAR(200),
    image VARCHAR(255),
    responsibilities TEXT,
    skills TEXT,
    career_path TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Colleges table
CREATE TABLE IF NOT EXISTS colleges (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    location VARCHAR(200),
    rating DECIMAL(2,1),
    courses TEXT,
    description TEXT,
    website VARCHAR(255),
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Scholarships table
CREATE TABLE IF NOT EXISTS scholarships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    provider VARCHAR(200),
    amount VARCHAR(100),
    eligibility TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exams table
CREATE TABLE IF NOT EXISTS exams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(200) NOT NULL,
    exam_date DATE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Counselors table
CREATE TABLE IF NOT EXISTS counselors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(200),
    experience INTEGER,
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    counselor_id INTEGER,
    booking_date DATE,
    booking_time TIME,
    status VARCHAR(20) DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (counselor_id) REFERENCES counselors(id)
);

-- Insert sample data
INSERT OR IGNORE INTO careers (name, description, avg_salary, required_education, image, responsibilities, skills, career_path) VALUES
('Software Engineer', 'Design and develop software applications using various programming languages and frameworks', '₹8-15 LPA', 'Bachelor''s in Computer Science', '/images/software-engineer.jpg', 'Write clean code, Debug applications, Collaborate with teams', 'Programming, Problem-solving, Communication', 'Junior → Senior → Lead → Architect'),
('Data Scientist', 'Analyze complex data to help companies make informed business decisions', '₹10-20 LPA', 'Bachelor''s in Statistics/Math/CS', '/images/data-scientist.jpg', 'Data analysis, Machine learning, Statistical modeling', 'Python, SQL, Statistics, Machine Learning', 'Analyst → Senior Analyst → Lead Data Scientist'),
('Product Manager', 'Guide the success of a product and lead cross-functional teams', '₹12-25 LPA', 'Bachelor''s in Business/Engineering', '/images/product-manager.jpg', 'Product strategy, Team coordination, Market research', 'Leadership, Analytics, Communication, Strategy', 'Associate PM → PM → Senior PM → Director'),
('UX Designer', 'Create user-friendly interfaces and improve user experience', '₹6-12 LPA', 'Bachelor''s in Design/HCI', '/images/ux-designer.jpg', 'User research, Wireframing, Prototyping, Testing', 'Design thinking, Figma, User research, Prototyping', 'Junior Designer → UX Designer → Senior UX → Design Lead'),
('Digital Marketing Specialist', 'Develop and execute digital marketing campaigns across various channels', '₹4-10 LPA', 'Bachelor''s in Marketing/Communications', '/images/digital-marketing.jpg', 'Campaign management, Content creation, Analytics', 'SEO, Social Media, Analytics, Content Marketing', 'Specialist → Senior Specialist → Marketing Manager'),
('Cybersecurity Analyst', 'Protect organizations from cyber threats and security breaches', '₹7-18 LPA', 'Bachelor''s in Cybersecurity/IT', '/images/cybersecurity.jpg', 'Threat analysis, Security monitoring, Incident response', 'Network security, Ethical hacking, Risk assessment', 'Analyst → Senior Analyst → Security Architect');

INSERT OR IGNORE INTO counselors (name, specialization, experience, avatar) VALUES
('Dr. Priya Sharma', 'Career Counseling', 8, '/images/counselor1.jpg'),
('Mr. Rajesh Kumar', 'Educational Planning', 12, '/images/counselor2.jpg'),
('Ms. Anita Singh', 'Psychology & Guidance', 6, '/images/counselor3.jpg');