# Grievance Classification System

## Overview
This project classifies citizen grievances into predefined categories using Logistic Regression, Naïve Bayes, and NLTK for text processing. The system also determines whether a grievance is **Critical** or **Non-Critical**. The frontend is built with React, and the backend uses Node.js, Express, and MongoDB (**MERN Stack**).

## Features
- **Text Classification**: Categorizes grievances based on descriptions.
- **Criticality Detection**: Identifies critical complaints.
- **Solution Recommendation**: Suggests solution using LLM.
- **MERN Stack**: React frontend, Express & Node.js backend, MongoDB database.
- **Machine Learning Models**: Implements Logistic Regression & Naïve Bayes.

## Video Demonstration Link
**Link**: https://youtu.be/oX_Za19Gp34

---

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) & npm
- [MongoDB](https://www.mongodb.com/)
- [Python](https://www.python.org/) (for training models)

### Setup
#### 1. Clone the Repository
```sh
git clone https://github.com/your-username/Samadhan-A-Grievance-Redressal-System.git
cd Samadhan-A-Grievance-Redressal-System
```

#### 2. Install Backend Dependencies (Node.js & Express)

(a) Navigate to the backend directory (inside the frontend folder):
```sh
cd frontend/server
```
(b) Install dependencies:
```sh
npm install
```
(C) Start the Server:
```sh
node app.js
```


#### 3. Setup MongoDB
For Ubuntu/Debian-based systems:
```sh
sudo apt update
sudo apt install -y mongodb
```

For macOS (using Homebrew):
```sh
brew tap mongodb/brew
brew install mongodb-community@6.0
```

#### 4. Run MongoDB
```sh
sudo systemctl start mongod  # For Linux
brew services start mongodb-community@6.0  # For macOS
```

#### 5. Frontend Setup (React.js)
```sh
cd .. # Navigate back to the frontend directory
npm install # Install dependencies
npm run dev # Start the frontend
```

#### 6. Running the Full Application
Terminal 1: Start the backend
```sh
cd frontend/server
node .\app.js
```
Terminal 2: Start the frontend
```sh
cd frontend
npm run dev
```

---

## Usage
1. File your complaint on the website.
2. The system categorizes it into different departments (Police, CM office, PWD, Development Authority, Municipal, etc)
3. The system categorizes it and labels it as **Critical** or **Non-Critical**.
4. The system generates a recommended solution for the grievance using LLM.
5. These are shown to admin for taking action of the complaint.
---

## Tech Stack
- **Frontend**: HTML, CSS, React.js
- **Backend**: Node.js, Express.js, Python
- **Database**: MongoDB
- **Machine Learning**: Scikit-learn (Logistic Regression and Naïve Bayes), NLTK, TF-IDF, Pandas, NumPy

---

## License
This project is licensed under the [MIT License](LICENSE).
