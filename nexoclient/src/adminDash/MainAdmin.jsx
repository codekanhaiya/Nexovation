import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import {
  FaSignOutAlt,
  FaUsers,
  FaChartPie,
  FaCogs,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";
import Header from "../commonPages/Header";
import Footer from "../commonPages/Footer";
import Overview from "./components/Overview";
import Users from "./components/Users";

const sections = [
  { id: "overview", icon: <FaChartPie />, label: "Overview" },
  { id: "users", icon: <FaUsers />, label: "Users" },
  { id: "settings", icon: <FaCogs />, label: "Settings" },
  { id: "messages", icon: <FaEnvelope />, label: "Messages" },
  { id: "tools", icon: <FaTools />, label: "Tools" },
];

const MainAdmin = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "users":
        return <Users />;
      case "settings":
        return <h2>Application Settings</h2>;
      case "messages":
        return <h2>Admin Messages Panel</h2>;
      case "tools":
        return <h2>Developer Tools</h2>;
      default:
        return <h2>Select a section</h2>;
    }
  };

  const handleLogout = () => {
    // Add logout logic here
    alert("Logged out!");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <PatternOverlay />
        <DashboardContent>
          <Sidebar>
            {sections.map((section) => (
              <MenuItem
                key={section.id}
                $active={activeSection === section.id}
                onClick={() => setActiveSection(section.id)}
              >
                {section.icon} <span>{section.label}</span>
              </MenuItem>
            ))}
            <LogoutButton onClick={handleLogout}>
              <FaSignOutAlt /> <span>Logout</span>
            </LogoutButton>
          </Sidebar>
          <ContentArea
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderSection()}
          </ContentArea>
        </DashboardContent>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

const darkTheme = {
  background: "#1e1e2f",
  surface: "#2e2e3e",
  text: "#ffffff",
  primary: "#4f46e5",
  accent: "#10b981",
  danger: "#ef4444",
};

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;
  user-select: none;
`;

const PatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
    circle at 1px 1px,
    rgba(144, 131, 10, 0.56) 1px,
    transparent 0
  );
  background-size: 20px 20px;
  z-index: 0;
`;

const DashboardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.surface};
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 0.5rem;
    padding: 1rem;
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.active ? props.theme.primary : "transparent"};
  color: ${(props) => (props.$active ? "#fff" : props.theme.text)};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.accent};
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.85rem;
    white-space: nowrap;
  }
`;

const ContentArea = styled(motion.div)`
  flex: 1;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const LogoutButton = styled.button`
  margin-top: auto;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.danger};
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.accent};
  }

  @media (max-width: 768px) {
    margin-top: 0;
    flex: 0 0 auto;
    padding: 0.5rem;
    font-size: 0.85rem;
  }
`;

export default MainAdmin;
