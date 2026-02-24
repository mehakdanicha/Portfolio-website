// src/data.js
import employeepage from './employee.png'
import addemployee from './Add-Employee.PNG'
import dashboard from './Dashboard.PNG'
import busniesslanding from './busniesslanding.png'
import graphpage from './graphpage.png'
import busniess from './busniess.PNG'
import busniess2 from './busniess2.PNG'
import ss3 from './ss3.PNG'
import ss4 from './ss4.PNG'
import ss5 from './ss5.PNG'
import ss6 from './ss6.PNG'
const projects = [
    {
      id: 1,
      title: "Employee Management Dashboard",
      description: "A complete Employee Management Dashboard built using React and Tailwind CSS, integrated with Firebase for real-time data handling.",
      longDescription: "A complete Employee Management Dashboard built using React and Tailwind CSS, integrated with Firebase for real-time data handling. This dashboard enables seamless CRUD operations—Create, Read, Update, and Delete—allowing administrators to efficiently manage employee records with a clean, modern interface.",
      image: employeepage, // Employee management image
      tools: ["React", "Tailwind CSS", "Firebase"],
      demoVideo: "ysz5S6PUM-U",
      features: [
        "Connected with Firebase Firestore to securely store, fetch, and update employee data in real time.",
        "Clean design with Tailwind utilities",
        "Handling CRUD operations and state management with React hooks for a seamless user experience."
      ],
      gallery:  [addemployee, dashboard],
      repo: "https://github.com/mehakdanicha/Employee-Dashboard.git",
      
    },
    {
      id: 2,
      title: "Business Website Landing Page",
      description: "A clean and modern Business Website Landing Page built using React and Tailwind CSS, designed to present services with a professional, high-converting UI.",
      longDescription: "A clean and modern Business Website Landing Page built using React and Tailwind CSS, designed to present services with a professional, high-converting UI. The design focuses on clarity, responsiveness, and smooth user interaction—ideal for service-based businesses and agencies.",
      image: busniesslanding, // business landing image
      tools: ["React", "Tailwind CSS", "Vite"],
      demoVideo: "ysz5S6PUM-U",
      features: [
        "Responsive layout across devices",
        "Clean design with Tailwind utilities",
        "Service-based sections with clear CTAs to drive conversions."
      ],
      gallery:  [busniess, busniess2],
      repo: "https://github.com/mehakdanicha/Business-website.git",
      
    },{
      id: 3,
      title: "Graph Page Analytics Dashboard",
      description: "A visually rich and well-structured landing page using HTML & CSS showcasing analytics insights.",
      longDescription: "The Graph Page Analytics Dashboard is a visually rich and well-structured landing page showcasing analytics insights, designed using HTML and CSS. It recreates a Figma design with attention to spacing, visual hierarchy, and dashboard styling. The page features a clean layout with a header, main content area, and footer, utilizing CSS for styling and layout to ensure a polished and professional appearance.",
      image: graphpage, // Replace with an actual image URL
      tools: ["HTML", "CSS"],
      demoVideo: "ysz5S6PUM-U",
      features: [
        "Recreated a Figma design with attention to spacing, visual hierarchy, and dashboard styling.",
        "Clean layout with header, main content area, and footer.",
        "Utilized CSS for styling and layout to ensure a polished and professional appearance."
      ],
      gallery:  [ss3, ss4,ss5,ss6],
      repo: "https://github.com/mehakdanicha/GraphPage-Landing-page.git",
      
    },
    
  ];
  
  export default projects;
  
