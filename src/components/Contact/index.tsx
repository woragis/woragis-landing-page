import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
const Contact = () => {
  const contacts = [
    {
      name: "Github",
      icon: <FaGithub />,
      link: "httsp://www.github.com/woragis",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
    },
    { name: "Twitter", icon: <FaTwitter />, link: "https://www.twitter.com" },
  ];
  const socialMediaIcons = contacts.map(({ name, icon, link }) => {
    return (
      <li>
        <Link to={link}>
          {icon}
          {name}
        </Link>
      </li>
    );
  });
  return (
    <div>
      <h3>Contact</h3>
      <ul>{socialMediaIcons}</ul>
    </div>
  );
};

export default Contact;
