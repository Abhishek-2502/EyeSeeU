import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@mui/material";

const statsData = [
  { name: "Exams", count: 203 },
  { name: "Students", count: 305 }
];

export default function ProctorDashboard() {
  return (
    <div className="p-8 grid gap-8 grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-green-100 to-green-300 min-h-screen flex flex-col items-center">
      {/* Project Description */}
      <Card className="p-8 col-span-1 md:col-span-2 text-center shadow-2xl rounded-3xl bg-white max-w-4xl">
        <h2 className="text-3xl font-extrabold text-green-800">Welcome to Our Proctoring System</h2>
        <p className="text-lg mt-4 text-gray-700 leading-relaxed">
          Our platform offers a secure and seamless online examination experience with real-time monitoring and in-depth analytics.
          Institutions can conduct fair and transparent exams effortlessly.
        </p>
        <p className="text-lg mt-2 text-gray-700 leading-relaxed">
          With AI-driven proctoring, suspicious activity detection, and an intuitive interface, we ensure integrity in online assessments.
        </p>
      </Card>

      {/* Total Exams and Students Cards (Side by Side) */}
      <div className="flex justify-center w-full space-x-6 max-w-4xl">
        <Card className="p-8 text-center shadow-lg rounded-2xl bg-white transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-green-700">Total Exams</h2>
          <p className="text-5xl font-extrabold text-green-900">203</p>
        </Card>

        <Card className="p-8 text-center shadow-lg rounded-2xl bg-white transform hover:scale-105 transition duration-300 ease-in-out">
          <h2 className="text-2xl font-bold text-green-700">Total Students</h2>
          <p className="text-5xl font-extrabold text-green-900">305</p>
        </Card>
      </div>

      {/* Graph Card */}
      <Card className="p-8 col-span-1 md:col-span-2 shadow-2xl rounded-3xl bg-white max-w-4xl">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Statistics</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={statsData}>
            <XAxis dataKey="name" className="text-gray-700 font-medium" />
            <YAxis className="text-gray-700 font-medium" />
            <Tooltip />
            <Bar dataKey="count" fill="#1ba94c" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
