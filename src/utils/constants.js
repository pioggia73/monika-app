import React from "react";
import { FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";

export const navLinks = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "projects",
    url: "/projects",
  },
  {
    id: 3,
    text: "about",
    url: "/about",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/monika-wasilewska-8098921a9/",
  },
  {
    id: 2,
    icon: <FaGithubSquare />,
    url: "https://github.com/pioggia73",
  },
  {
    id: 3,
    icon: <FaTwitterSquare />,
    url: "https://github.com/pioggia73",
  },
];
