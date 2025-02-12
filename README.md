# Grievance Classification System

## Overview
This project classifies citizen grievances into predefined categories using Logistic Regression, Naïve Bayes, and NLTK for text processing. The system also determines whether a grievance is **Critical** or **Non-Critical**. The frontend is built with React, and the backend uses Node.js, Express, and MongoDB (**MERN Stack**).

## Features
- **Text Classification**: Categorizes grievances based on descriptions.
- **Criticality Detection**: Identifies critical complaints.
- **MERN Stack**: React frontend, Express & Node.js backend, MongoDB database.
- **Machine Learning Models**: Implements Logistic Regression & Naïve Bayes.

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
git clone https://github.com/your-username/grievance-classification.git
cd grievance-classification
```

#### 2. Install Backend Dependencies
```sh
npm install
```

#### 3. Install Frontend Dependencies
```sh
cd client
npm install
cd ..
```

#### 4. Run MongoDB
```sh
sudo systemctl start mongod
```

#### 5. Start the Application
```sh
npm start  # Runs backend  
cd client && npm start  # Runs frontend
```

---

## Usage
1. File yur complaint on the website.
2. The system categorizes it into different departments(Police, CM office, PWD, Development Authority, Municipal, etc)
3. The system categorizes it and labels it as **Critical** or **Non-Critical**.
4. The system generates a recommended solution for the grievance using LLM.
5. These are shown to admin for taking action of the complaint.
---

## Tech Stack
- **Frontend**: HTML, CSS, React.js
- **Backend**: Node.js, Express.js, Python
- **Database**: MongoDB
- **Machine Learning**: Scikit-learn, NLTK, TF-IDF, Logistic Regression, Pandas, NumPy

---

## License
This project is licensed under the [MIT License](LICENSE).
