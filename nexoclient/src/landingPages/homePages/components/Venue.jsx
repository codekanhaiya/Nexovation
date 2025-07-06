import React from "react";
import styled, { keyframes } from "styled-components";
import { FaMapMarkerAlt, FaLink } from "react-icons/fa";

const Venue = () => {
  return (
    <Container>
      <LeftSide>
        <ImageCard>
          <img src="/BBSCET.jpg" alt="BBSCET Venue" />
        </ImageCard>
      </LeftSide>
      <RightSide>
        <VenueTitle>
          <FaMapMarkerAlt /> BBS College of Engineering and Technology,
          Prayagraj
        </VenueTitle>
        <InfoText>
          <FaLink style={{ marginRight: "8px", color: "#4fc3f7" }} />
          <a
            href="https://bbs.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4fc3f7", textDecoration: "underline" }}
          >
            https://bbs.ac.in
          </a>
        </InfoText>

        <InfoText>
          Welcome to <Highlight>BBSCET</Highlight>, a premier hub of innovation
          and learning. Our event features an incredible array of{" "}
          <Highlight>Technical</Highlight> events such as coding challenges,
          robotics, app development, and AI showcases. Additionally, dive into
          the excitement of <Highlight>Non-Technical</Highlight> events
          including quizzes, debates, cultural shows, gaming, and treasure
          hunts. Whether you're here to compete, learn, or just enjoy, there's
          something for everyone. Be a part of this unforgettable experience
          that celebrates knowledge, creativity, and collaboration!
        </InfoText>
      </RightSide>
    </Container>
  );
};

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const zoomAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  overflow-x: hidden;
  background: repeating-linear-gradient(
    45deg,
    #1a1a1a,
    #1a1a1a 10px,
    #222 10px,
    #222 20px
  );
  color: #f5f5f5;
  animation: ${fadeIn} 1s ease-in-out;
  user-select: none;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-right: 2px solid #444;

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 2px solid #444;
  }
`;

const ImageCard = styled.div`
  background: #333;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  animation: ${zoomAnimation} 3s ease-in-out infinite;

  img {
    width: 400px;
    height: 400px;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    img {
      width: 90vw;
      height: 90vw;
    }
  }
`;

const RightSide = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const VenueTitle = styled.h1`
  font-size: 2.5rem;
  color: #00bcd4;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ccc;

  a {
    word-break: break-word;
  }
`;

const Highlight = styled.span`
  color: #ffc107;
  font-weight: bold;
`;

export default Venue;
