import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { StyledContact, SocialMedia } from "./style";
import { ContactType } from "../../types/componentsType";

const Contact: React.FC<ContactType> = () => {
  const contactsArrObj = [
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
    {
      name: "Twitter",
      icon: <FaTwitter />,
      link: "https://www.twitter.com",
    },
  ];
  const test = contactsArrObj.map((contact) => {
    return (
      <li>
        <a href={contact.link}>
          {contact.icon}
          {contact.name}
        </a>
      </li>
    );
  });
  return (
    <StyledContact id="contact">
      <h3>Contact</h3>
      <SocialMedia>{test}</SocialMedia>
    </StyledContact>
  );
};

export default Contact;
