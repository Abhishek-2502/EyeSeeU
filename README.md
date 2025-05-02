# EyeSeeU

EyeSeeU is an Automated Exam Proctoring System (AEPS) developed with cutting-edge AI-based algorithms for online exams. This comprehensive system is designed to ensure the integrity and security of online examinations. The project leverages technologies such as React.js, Redux, Node.js, and TensorFlow.js to offer a feature-rich exam proctoring solution.

## Table of Contents

- [Tech Stack](#tech-stack)
  - [Backend](#backend)
  - [Frontend](#frontend)

- [How to Run](#how-to-run)
- [License](#license)
- [Contributors](#contributors)

## Tech Stack

EyeSeeU utilizes a range of technologies to provide its comprehensive functionality. The key technologies and dependencies used in this project include:

### **Frontend**
- **React.js** – A powerful JavaScript library for building dynamic and interactive UIs.  
- **Redux Toolkit** – Simplifies state management in React applications.  
- **Material-UI** – A modern React UI framework for building visually appealing and responsive interfaces.  
- **React-Router** – A declarative routing solution for seamless navigation in React applications.  
- **React-Toastify** – Provides elegant and customizable toast notifications.  
- **React-Webcam** – Enables webcam video capture within React applications.  
- **Yup** – A schema validation library for form data validation.  
- **Formik** – Simplifies form handling and validation in React applications.  
- **SweetAlert** – A library for creating aesthetically pleasing and responsive alert messages.  

### **Backend**
- **Node.js** – A JavaScript runtime for scalable server-side development.  
- **Express.js** – A minimal yet powerful web framework for building RESTful APIs.  
- **JSON Web Tokens (JWT)** – Provides secure authentication and authorization.  
- **bcrypt.js** – A password-hashing library for enhanced security.  
- **Express-Async-Handler** – Middleware for handling exceptions in asynchronous route handlers.  

### **Database**
- **MongoDB** – A NoSQL database designed for flexibility and scalability.  
- **Mongoose** – An elegant ODM (Object Data Modeling) library for MongoDB, enabling schema-based data modeling.  

### **Artificial Intelligence**
- **TensorFlow.js** – A JavaScript library for running machine learning models directly in the browser.  

### **DevOps & Deployment**
- **Git** – Version control system for tracking code changes.  
- **GitHub** – Cloud-based platform for source code management and collaboration.  
- **Jenkins** – Automates CI/CD pipelines for continuous integration and deployment.  
- **Docker** – Enables containerization for efficient application packaging and deployment.  
- **AWS** – Cloud computing services for scalable application hosting and deployment.  


## How to Run

To run this project locally, follow these steps:

1. Clone this repository.
2. Change `"proxy": "https://eyeseeu.onrender.com"` with `"proxy": "http://localhost:5000"` in package.json in frontend folder.
3. Remove .example from .env and replace the credentials with your credentials.
4. Install the required dependencies in both the frontend and backend folders usign `npm i` command in both folders 
   (`cd backend` and `cd frontend`).
5. Start the server using `node server.js` in the backend folder (`cd backend`).
6. Start the React app using `npm start` in the frontend folder (`cd frontend`).

## Run on HTTP:
chrome://flags/#unsafely-treat-insecure-origin-as-secure

## DocumentDB (AWS):

#### INSTALL MONGOOSE ON EC2:

1. Import MongoDB public GPG key  
```bash
wget -qO - https://pgp.mongodb.com/server-6.0.asc | sudo apt-key add -
```

2. Add the MongoDB repository  
```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

3. Update package lists  
```bash
sudo apt update
```

4. Install mongosh (standalone shell package)  
```bash
sudo apt install -y mongodb-mongosh
```

5. Download the global CA bundle  
```bash
wget https://truststore.pki.rds.amazonaws.com/global/global-bundle.pem
```

6. Connect to DocumentDB using mongosh  
```bash
mongosh docdb-2025-05-02-07-17-43.cluster-cqziismi6ulk.us-east-1.docdb.amazonaws.com:27017 --tls --tlsCAFile global-bundle.pem --retryWrites=false --username Abhishek --password 12345678
```

7. Connection URI  
```bash
mongodb://Abhishek:12345678@docdb-2025-05-02-07-17-43.cluster-cqziismi6ulk.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributors

- **Abhishek Rajput** - [GitHub](https://github.com/Abhishek-2502)
- **Aaryan Dhawan** - [GitHub](https://github.com/dhawanaaaryan)
- **Arnav Jain** - [GitHub](https://github.com/Arnavjain2503)
- **Himani Arora** - [GitHub](https://github.com/capricode-ui)

