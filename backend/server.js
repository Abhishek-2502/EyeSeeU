import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import examRoutes from "./routes/examRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import path from "path";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
  // origin: "http://50.19.10.187", // frontend URL (Nginx server)
  // origin: "http://50.19.10.187:3000", // frontend URL (For Normal EC2)
  origin: "http://localhost:3000", // frontend URL (For Localhost)
  credentials: true, // allow cookies and credentials
}));

// to parse req boy
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// Routes

app.use("/api/exams", examRoutes);  
app.use("/api/users", userRoutes);  

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
  const __dirname = path.resolve();
  
  // Serve static files from frontend build directory
  app.use(express.static(path.join(__dirname, "../frontend", "build")));

  // Handle client-side routing - return index.html for all non-API routes
  app.get(/^\/(?!api).*/, (req, res) => {  // Regex to exclude /api routes
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Server is running</h1>");
  });
}

// Custom Middlewares
app.use(notFound);
app.use(errorHandler);
app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    console.log(`Route: ${Object.keys(middleware.route.methods)[0].toUpperCase()} ${middleware.route.path}`);
  } else if (middleware.name === 'router') {
    middleware.handle.stack.forEach((handler) => {
      if (handler.route) {
        console.log(`Route: ${Object.keys(handler.route.methods)[0].toUpperCase()} ${handler.route.path}`);
      }
    });
  }
});



// Server
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

// Todos:
// -**POST /api/users**- Register a users
// -**POST /api/users/auth**- Authenticate a user and get token
// -**POST /api/users/logout**- logou user and clear cookie
// -**GET /api/users/profile**- Get user Profile
// -**PUT /api/users/profile**- Update user Profile
