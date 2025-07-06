import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaEdit,
  FaCheckCircle,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

const steps = [
  {
    title: "Registration",
    description: "Students register via the online form.",
    icon: <FaUserPlus />,
  },
  {
    title: "Participation",
    description: "Students actively take part in the challenge.",
    icon: <FaEdit />,
  },
  {
    title: "Evaluation",
    description: "Judges assess performance & creativity.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Results",
    description: "Scores are published on the dashboard.",
    icon: <FaChartLine />,
  },
  {
    title: "Winners",
    description: "Top students are awarded and recognized.",
    icon: <FaTrophy />,
  },
];

const Roadmap = () => {
  return (
    <Container>
      <Title>Nexovation Journey Roadmap</Title>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepWrapper key={index} $odd={index % 2 !== 0}>
            <CurveConnector
              $odd={index % 2 !== 0}
              $isLast={index === steps.length - 1}
            />
            <StepLabel $odd={index % 2 !== 0}>Step {index + 1}</StepLabel>
            <Step
              as={motion.div}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              $odd={index % 2 !== 0}
            >
              <IconBox>{step.icon}</IconBox>
              <Content>
                <StepTitle>{step.title}</StepTitle>
                <Description>{step.description}</Description>
              </Content>
            </Step>
          </StepWrapper>
        ))}
      </StepsContainer>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  background-color: #0d0d0d;
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  padding: 4rem 2rem;
  color: white;
  font-family: "Segoe UI", sans-serif;
  user-select: none;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #00bcd4;
`;

const StepsContainer = styled.div`
  position: relative;
  max-width: 1100px;
  margin: auto;
`;

const StepWrapper = styled.div`
  display: flex;
  justify-content: ${({ $odd }) => ($odd ? "flex-end" : "flex-start")};
  position: relative;
  margin: 4rem 0;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 2rem 0;
  }
`;

const Step = styled.div`
  background: #1f1f1f;
  border: 2px solid #00bcd4;
  border-radius: 1rem;
  padding: 2rem;
  max-width: 400px;
  width: 90%;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-direction: ${({ $odd }) => ($odd ? "row-reverse" : "row")};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconBox = styled.div`
  background-color: #0a0a0a;
  border: 3px solid #00bcd4;
  color: #00bcd4;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 50%;
`;

const Content = styled.div`
  flex: 1;
`;

const StepTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #cccccc;
`;

const CurveConnector = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ $odd }) => ($odd ? "auto" : "calc(50% - 2px)")};
  right: ${({ $odd }) => ($odd ? "calc(50% - 2px)" : "auto")};
  width: 50%;
  height: 60px;
  z-index: 1;
  transform: translateY(-50%);

  ${({ $isLast }) =>
    $isLast &&
    `
    display: none;
  `}

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border: 2px dashed #00bcd4;
    border-top: none;
    border-left: ${({ $odd }) => ($odd ? "none" : "2px dashed #00bcd4")};
    border-right: ${({ $odd }) => ($odd ? "2px dashed #00bcd4" : "none")};
    border-bottom-left-radius: ${({ $odd }) => ($odd ? "0" : "30px")};
    border-bottom-right-radius: ${({ $odd }) => ($odd ? "30px" : "0")};
  }

  @media (max-width: 768px) {
    left: 50%;
    right: auto;
    width: 2px;
    height: 80px;
    &::before {
      border: none;
      border-left: 2px dashed #00bcd4;
      border-radius: 0;
    }
  }
`;

const StepLabel = styled.div`
  position: absolute;
  top: -1.5rem;
  ${({ $odd }) => ($odd ? "right: 0;" : "left: 0;")}
  color: #00bcd4;
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
`;

export default Roadmap;
