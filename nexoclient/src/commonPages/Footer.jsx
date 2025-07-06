import React, { useState } from "react";
import styled from "styled-components";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";

// Modal Component
const TeamModal = ({ isOpen, closeModal, teamMembers }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>Team Memebers</h2>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </ModalHeader>
        <TeamList>
          {teamMembers.map((member, index) => (
            <MemberItem key={index}>
              <MemberImage src={member.image} alt={member.name} />
              <MemberName
                onClick={() => window.open(member.portfolio, "_blank")}
              >
                {member.name}
              </MemberName>
            </MemberItem>
          ))}
        </TeamList>
      </ModalContent>
    </ModalOverlay>
  );
};

// Main Footer Component
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openTeamModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const teamMembers = [
    {
      name: "Kanhaiya Gupta",
      image: "/TeamImg/Kanhaiya.png",
      portfolio: "http://officialkanha.epizy.com/",
    },
    {
      name: "Rachit Yadav",
      image: "/path/to/rachit.jpg",
      portfolio: "https://rachit-portfolio.com",
    },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          <Logo>
            <img
              src="/favicon.png"
              alt="Nexovation Logo"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
            Nexovation
          </Logo>
          <Text>
            Igniting minds through code and creativity. Join us to explore
            innovation, build projects, and grow together.
          </Text>
        </Section>

        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <List>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </List>
        </Section>

        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactItem>
            <FaMapMarkerAlt /> BBSCET, Prayagraj, India
          </ContactItem>
          <ContactItem>
            <FaPhoneAlt /> +91 1800-1200-407
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> info@nexovation.in
          </ContactItem>
        </Section>

        <Section>
          <SectionTitle>Follow Us</SectionTitle>
          <SocialIcons>
            <a
              href="https://www.facebook.com/bbsprayagraj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/BbsCollege"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTimes />
            </a>
            <a
              href="https://www.instagram.com/bbs_group_of_institutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/bbscet-prayagraj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/channel/UCPEWCEhKGjZCR4q2pQhwIeA?app=desktop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </SocialIcons>
        </Section>
      </FooterContent>

      <WebsiteCredit>
        &copy; {new Date().getFullYear()} Nexovation. Website developed by{" "}
        <strong
          onClick={openTeamModal}
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          BBS Coding Club Team
        </strong>{" "}
        ✨
      </WebsiteCredit>

      <TeamModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        teamMembers={teamMembers}
      />
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background: #121212;
  color: #ddd;
  padding: 3rem 2rem 1rem;
  font-family: "Segoe UI", sans-serif;
  user-select: none;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  color: #58a6ff;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #ffc107;
`;

const Text = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 8px;

    a {
      color: #ccc;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #58a6ff;
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  color: #ccc;

  svg {
    color: #4fc3f7;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;

  a {
    background: #1f1f1f;
    padding: 10px;
    border-radius: 50%;
    color: #fff;
    font-size: 1rem;
    transition: background 0.3s;

    &:hover {
      background: #58a6ff;
    }
  }
`;

const WebsiteCredit = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  font-size: 0.85rem;
  color: #888;
  border-top: 1px solid #333;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #222;
  padding: 2rem;
  border-radius: 8px;
  width: 80%;
  max-width: 400px;
  color: #fff;
  overflow-y: auto;
  max-height: 80vh;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  background: #444;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #58a6ff;
  }
`;

const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MemberItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const MemberName = styled.span`
  font-size: 1.2rem;
  color: #58a6ff;
  font-weight: bold;
`;

export default Footer;
