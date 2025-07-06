import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaIdBadge } from "react-icons/fa";

// Sample user data
const sampleUser = {
  _id: "654321abcdef",
  firstName: "Kanhaiya",
  lastName: "Gupta",
  email: "kanhaiyaguptaksg@gmail.com",
  phone: "9876543210",
};

const Overview = () => {
  const user = sampleUser;

  return (
    <Wrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <WelcomeSection>
        <TextBlock>
          <h1>Welcome, {user.firstName} 👋</h1>
          <p>Here’s a quick glance at your registered details.</p>
        </TextBlock>

        <ImageBlock
          as={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 10 }}
        >
          <IconCircle>
            <FaUserAlt size={40} />
          </IconCircle>
        </ImageBlock>
      </WelcomeSection>

      <DetailsCard>
        <h2>Admin Information</h2>
        <InfoRow>
          <IconWrapper>
            <FaIdBadge />
          </IconWrapper>
          <strong>ID:</strong>
          <span>{user._id}</span>
        </InfoRow>
        <InfoRow>
          <IconWrapper>
            <FaUserAlt />
          </IconWrapper>
          <strong>Name:</strong>
          <span>
            {user.firstName} {user.lastName}
          </span>
        </InfoRow>
        <InfoRow>
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <strong>Email:</strong>
          <span>{user.email}</span>
        </InfoRow>
        <InfoRow>
          <IconWrapper>
            <FaPhoneAlt />
          </IconWrapper>
          <strong>Phone:</strong>
          <span>{user.phone || "Not provided"}</span>
        </InfoRow>
      </DetailsCard>
    </Wrapper>
  );
};

// --- Styled Components ---

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1.5rem;
  color: #fff;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);

  /* ✨ Inner background pattern */
  background-image: radial-gradient(
      circle at top left,
      rgba(255, 255, 255, 0.05),
      transparent 50%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(255, 255, 255, 0.03),
      transparent 50%
    );
`;

const WelcomeSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #ffffff;
  }

  p {
    font-size: 1rem;
    color: #ccc;
  }
`;

const TextBlock = styled.div`
  flex: 1;
`;

const ImageBlock = styled.div`
  flex-shrink: 0;
`;

const IconCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981, #3b82f6);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const DetailsCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    margin-bottom: 1rem;
    color: #10b981;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  strong {
    width: 80px;
    color: #aaa;
  }

  span {
    color: #eee;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;

    strong {
      width: auto;
    }
  }
`;

const IconWrapper = styled.div`
  color: #10b981;
`;

export default Overview;
