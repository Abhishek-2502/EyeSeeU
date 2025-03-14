import React from "react";
import { Box, Container, Typography, Card } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const statsData = [
  { name: "Exams", count: 203 },
  { name: "Students", count: 305 }
];

export default function ProctorDashboard() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        p: 4,
        background: "linear-gradient(to right, #d4edda, #b8e994)",
      }}
    >
      {/* Project Description */}
      <Card
        sx={{
          p: 5,
          textAlign: "center",
          maxWidth: 800,
          borderRadius: 4,
          boxShadow: 5,
          bgcolor: "white",
        }}
      >
        <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
          Welcome to Our Proctoring System
        </Typography>
        <Typography variant="body1" color="textSecondary" mt={2}>
          Our platform offers a secure and seamless online examination experience with real-time monitoring and in-depth analytics.
          Institutions can conduct fair and transparent exams effortlessly.
        </Typography>
        <Typography variant="body1" color="textSecondary" mt={1}>
          With AI-driven proctoring, suspicious activity detection, and an intuitive interface, we ensure integrity in online assessments.
        </Typography>
      </Card>

      {/* Stats Cards */}
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          maxWidth: 900,
        }}
      >
        {statsData.map((stat, index) => (
          <Card
            key={index}
            sx={{
              p: 4,
              textAlign: "center",
              flex: 1,
              minWidth: 250,
              boxShadow: 4,
              borderRadius: 3,
              bgcolor: "#f4f4f4",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
            }}
          >
            <Typography variant="h5" color="secondary" fontWeight="bold">
              {stat.name}
            </Typography>
            <Typography variant="h3" color="success.main" fontWeight="bold">
              {stat.count}
            </Typography>
          </Card>
        ))}
      </Container>

      {/* Graph Card */}
      <Card
        sx={{
          p: 5,
          textAlign: "center",
          maxWidth: 900,
          width: "100%",
          borderRadius: 4,
          boxShadow: 5,
          bgcolor: "white",
        }}
      >
        <Typography variant="h4" color="primary" fontWeight="bold" mb={3}>
          Exam & Student Statistics
        </Typography>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={statsData}>
            <XAxis dataKey="name" stroke="#555" />
            <YAxis stroke="#555" />
            <Tooltip />
            <Bar dataKey="count" fill="#1ba94c" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </Box>
  );
}
