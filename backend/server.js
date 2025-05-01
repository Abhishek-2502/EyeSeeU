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
  origin: "https://eye-see-u.vercel.app", // your frontend URL
  credentials: true, // allow cookies and credentials
}));

// to parse req boy
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// Routes
// app.use("/api/users", examRoutes);

// app.use("/api/users", userRoutes);
app.use("/api/exams", examRoutes);  // make examRoutes distinct
app.use("/api/users", userRoutes);  // keep user routes clean

// we we are deploying this in production make frontend build then
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  // we making front build folder static to serve from this app
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  // if we get an routes that are not define by us we show then index html file
  // every enpoint that is not api/users go to this index file
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("<h1>server is running </h1>");
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
