import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaUserCircle, FaSignOutAlt, FaUpload, FaHome } from "react-icons/fa";
import { MdEmail, MdPhone, MdSchool } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MainClient = () => {
  const navigate = useNavigate();

  const student = {
    name: "Kanhaiya Gupta",
    email: "kanhaiyaguptaksg@gmail.com",
    phone: "9876543210",
    college: "BBS College of Engineering",
    events: ["Hackathon 2025", "AI Bootcamp", "Hackathon 2025", "AI Bootcamp"],
  };

  return (
    <DashboardContainer>
      <Card
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ProfileSection>
          <IconWrapper>
            <FaUserCircle />
          </IconWrapper>
          <UploadButton>
            <FaUpload /> Upload Photo
          </UploadButton>
        </ProfileSection>

        <Welcome>Welcome, {student.name}!</Welcome>

        <Info>
          <InfoItem>
            <MdEmail /> {student.email}
          </InfoItem>
          <InfoItem>
            <MdPhone /> {student.phone}
          </InfoItem>
          <InfoItem>
            <MdSchool /> {student.college}
          </InfoItem>
        </Info>

        <EventBox>
          <EventTitle>Participated Events</EventTitle>
          <EventList>
            {student.events.map((event, index) => (
              <EventItem key={index}>
                {`${index + 1}. ${event}`}
                <MoreLink href="#">Know More</MoreLink>
              </EventItem>
            ))}
          </EventList>
        </EventBox>

        <ButtonGroup>
          <ActionButton onClick={() => navigate("/")}>
            <FaHome /> Go to Home
          </ActionButton>
          <ActionButton danger>
            <FaSignOutAlt /> Logout
          </ActionButton>
        </ButtonGroup>
      </Card>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  background: linear-gradient(rgba(18, 18, 18, 0.9), rgba(18, 18, 18, 0.9)),
    url("https://www.transparenttextures.com/patterns/classy-fabric.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Card = styled(motion.div)`
  background: #1f1f1f;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
  max-width: 800px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #f0f0f0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media (max-width: 600px) {
    margin: 1rem;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  font-size: 6rem;
  color: #bbb;
  position: relative;
`;

const UploadButton = styled.button`
  margin-top: 0.5rem;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  &:hover {
    background: #3730a3;
  }
`;

const Info = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding-left: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: #e0e0e0;
`;

const Welcome = styled.h2`
  margin: 1rem auto 1.5rem auto;
  font-size: 2.4rem;
  font-weight: bold;
  color: #7c3aed;
  text-align: center;
`;

const EventBox = styled.div`
  background: #2a2a2a;
  border-radius: 1rem;
  padding: 1rem;
  width: 95%;
  margin-top: 1.5rem;
  padding-left: 1rem;
`;

const EventTitle = styled.h3`
  color: #facc15;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

const EventList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const EventItem = styled.li`
  padding: 0.5rem;
  background: #3b3b3b;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  background: ${(props) => (props.danger ? "#ef4444" : "#2563eb")};
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.6rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.danger ? "#b91c1c" : "#1d4ed8")};
  }
`;

const MoreLink = styled.a`
  font-size: 0.9rem;
  color: rgb(70, 179, 229);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default MainClient;
