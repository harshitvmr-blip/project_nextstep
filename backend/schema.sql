-- Database schema for Next Step Guide application

CREATE DATABASE IF NOT EXISTS nextstep_db;
USE nextstep_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Careers table
CREATE TABLE IF NOT EXISTS careers (
    id INT AUTO_INCREMENT PRIMARY KEY,
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
    id INT AUTO_INCREMENT PRIMARY KEY,
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
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    provider VARCHAR(200),
    amount VARCHAR(100),
    eligibility TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exams table
CREATE TABLE IF NOT EXISTS exams (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    exam_date DATE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Counselors table
CREATE TABLE IF NOT EXISTS counselors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialization VARCHAR(200),
    experience INT,
    avatar VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    counselor_id INT,
    booking_date DATE,
    booking_time TIME,
    status ENUM('Confirmed', 'Pending', 'Cancelled') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (counselor_id) REFERENCES counselors(id)
);

-- Insert sample data
INSERT INTO careers (name, description, avg_salary, required_education) VALUES
('Software Engineer', 'Design and develop software applications', '₹8-15 LPA', 'Bachelor\'s in Computer Science'),
('Data Scientist', 'Analyze complex data to help companies make decisions', '₹10-20 LPA', 'Bachelor\'s in Statistics/Math/CS'),
('Product Manager', 'Guide the success of a product and lead cross-functional teams', '₹12-25 LPA', 'Bachelor\'s in Business/Engineering');

INSERT INTO counselors (name, specialization, experience, avatar) VALUES
('Dr. Priya Sharma', 'Career Counseling', 8, '/images/counselor1.jpg'),
('Mr. Rajesh Kumar', 'Educational Planning', 12, '/images/counselor2.jpg'),
('Ms. Anita Singh', 'Psychology & Guidance', 6, '/images/counselor3.jpg');