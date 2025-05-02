# EyeSeeU

EyeSeeU is an Automated Exam Proctoring System (AEPS) developed with cutting-edge AI-based algorithms for online exams. This comprehensive system is designed to ensure the integrity and security of online examinations. The project leverages technologies such as React.js, Redux, Node.js, TensorFlow.js, etc to offer a feature-rich exam proctoring solution.

## Table of Contents

- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)
  - [Artificial Intelligence](#artificial-intelligence)
  - [DevOps and Deployment](#devops-and-deployment)

- [How to Run the Project Locally](#how-to-run-the-project-locally)
- [Run on HTTP When Deployed](#run-on-http-when-deployed)
- [AWS DocumentDB](#aws-documentdb)
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

### **DevOps and Deployment**

- **Git** – Version control system for tracking code changes.
- **GitHub** – Cloud-based platform for source code management and collaboration.
- **Jenkins** – Automates CI/CD pipelines for continuous integration and deployment.
- **Docker** – Enables containerization for efficient application packaging and deployment.
- **Nginx** – High-performance web server and reverse proxy used for load balancing, serving static content, and improving application performance.
- **AWS** – Used various AWS services for scalable and secure cloud deployment, including EC2 (virtual servers), Security Groups (firewall configuration), Auto Scaling Groups (automatic instance scaling), Load Balancers (traffic distribution), Elastic IPs (static IP allocation), and DocumentDB (managed NoSQL database service).


## How to Run the Project Locally

Follow the steps below to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Abhishek-2502/EyeSeeU
cd EyeSeeU
```

### 2. Configure Environment Variables

Create a `.env` file inside the `backend` directory with the following content:

```env
# Node.js environment (development, production, etc.)
# NODE_ENV=development
NODE_ENV=production

# Port for the backend server
PORT=5000

# MongoDB connection URL (replace with your actual MongoDB URL)
MONGO_URL=mongodb+srv://himaniarorabtech2022:GZzfIUwiGnn45sog@cluster1.fgmsk.mongodb.net/exam?retryWrites=true&w=majority&appName=Cluster1

# JWT secret key for authentication (replace with a secure secret key)
JWT_SECRET="asjkfhaksjfbhalkfhlakfhkaslfhklashfk"
```

### 3. Install Dependencies

Install dependencies in both the `backend` and `frontend` folders:

```bash
cd backend
npm install

cd ../frontend
npm install
```

### 4. Update URLs for API Communication

Ensure that:

* In `frontend/api/apiSlice.js`, update the base URL to point to your backend.
* In `backend/server.js`, configure CORS or relevant settings to allow frontend requests (include the frontend URL).

### 5. Start the Servers

* **Backend**:

  ```bash
  cd backend
  node server.js
  ```

* **Frontend**:

  ```bash
  cd frontend
  npm start
  ```

## Run on HTTP When Deployed

If you have deployed your app on **HTTP** (not HTTPS) and features like **camera access**, **microphone**, or **geolocation** are blocked, you can override Chrome's security settings:

### Steps to Allow Insecure HTTP Origin

1. Open **Google Chrome**.
2. Visit this URL:

   ```bash
   chrome://flags/#unsafely-treat-insecure-origin-as-secure
   ```
3. Locate the setting **“Insecure origins treated as secure”**.
4. Set it to **Enabled**.
5. In the input box, add your ec2 URL, e.g.:

   ```bash
   http://<ec2_IP>:3000,  http://<ec2_IP>
   ```
6. Click **Relaunch** to restart Chrome.

### Screenshot for Reference

![chrome-flag-setting](Images/HTTP_Camera_Issue.png)

## AWS DocumentDB

#### Install Mongoose on EC2:

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

- **Aaryan Dhawan** - [GitHub](https://github.com/dhawanaaaryan)
- **Abhishek Rajput** - [GitHub](https://github.com/Abhishek-2502)
- **Arnav Jain** - [GitHub](https://github.com/Arnavjain2503)
- **Himani Arora** - [GitHub](https://github.com/capricode-ui)

