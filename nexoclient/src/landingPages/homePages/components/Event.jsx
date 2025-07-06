import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa";

// Event component
const Event = () => {
  return (
    <EventSection>
      <PageTitle>Explore Our Exciting Events</PageTitle>
      <CurveLine />
      {events.map((event, index) => (
        <EventCard key={event.id} $align={index % 2 === 0 ? "left" : "right"}>
          <Connector color={index % 2 === 0 ? "#8e44ad" : "#2980b9"} />
          <CardContent>
            <EventImage src={event.image} alt={event.title} />
            <CardDetails>
              <EventTitle>{event.title}</EventTitle>
              <EventDescription>{event.description}</EventDescription>
              <ReadMore href={`/events/${event.id}`}>
                Read More <FaArrowRight />
              </ReadMore>
            </CardDetails>
          </CardContent>
        </EventCard>
      ))}
    </EventSection>
  );
};

// Keyframe animation for sliding from left or right with fade-in
const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Styled components

const EventSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem 4rem;
  position: relative;
  overflow: hidden;
  color: #f1f1f1;
  background-color: #0f0f1a;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.03) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
  user-select: none;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #bb86fc;
  margin-bottom: 4rem;
  text-decoration: underline;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const CurveLine = styled.div`
  position: absolute;
  left: 50%;
  top: 195px;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #8e44ad, #2980b9);
  transform: translateX(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    top: 265px;
  }
`;

const Connector = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ color }) => color};
  border-radius: 50%;
  position: absolute;
  top: 40px;
  left: -12px;
  z-index: 3;

  &:after {
    content: "";
    width: 20px;
    height: 4px;
    background: ${({ color }) => color};
    position: absolute;
    top: 8px;
    left: 20px;
  }
`;

const EventCard = styled.div`
  background: #1f1f2f;
  color: #ffffff;
  padding: 2rem;
  margin: 3rem 0;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  width: 60%;
  margin-left: ${({ align }) => (align === "left" ? "0" : "auto")};
  position: relative;
  z-index: 2;
  border-left: 6px solid
    ${({ align }) => (align === "left" ? "#8e44ad" : "#2980b9")};
  animation: ${({ align }) => (align === "left" ? slideInLeft : slideInRight)} 1s ease-out forwards;
  opacity: 0;
  animation-delay: ${({ index }) => (index % 2 === 0 ? "0s" : "0.2s")};

  @media (max-width: 768px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EventImage = styled.img`
  width: 50%;
  border-radius: 8px;
  aspect-ratio: 16 / 9;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardDetails = styled.div`
  flex: 1;
`;

const EventTitle = styled.h3`
  color: #bb86fc;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const EventDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

const ReadMore = styled.a`
  display: inline-flex;
  align-items: center;
  color: #03dac5;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const events = [
  {
    id: 1,
    title: "Tech Quiz",
    description:
      "A quiz battle covering technology, innovations, and current trends in the tech world.",
    image: "https://i.ytimg.com/vi/1i-7PcytfiU/hq720.jpg",
  },
  {
    id: 2,
    title: "Code Clash",
    description:
      "Competitive programming contest to test speed, logic, and problem-solving skills.",
    image:
      "https://cdn.hackerearth.com/static/hackerearth/images/marketing/algorithm_blog/algo-og.jpg",
  },
  {
    id: 3,
    title: "AI Model Showcase",
    description:
      "Present and explain unique machine learning/AI models solving real-world problems.",
    image:
      "https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6440f9477c2a321f0dd6ab61_How%20Artificial%20Intelligence%20(AI)%20Is%20Used%20In%20Biometrics.jpg",
  },
  {
    id: 4,
    title: "Web Dev Challenge",
    description:
      "Create dynamic and responsive websites based on a given challenge.",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQHLuFiOzCN6cQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1720113358524?e=2147483647&v=beta&t=oipTsTYfll7q1LHFk1LLJNUG_roR2P4Zx0ozVkJgGcs",
  },
  {
    id: 5,
    title: "Video Gaming (BGMI, PUBG)",
    description:
      "Competitive gaming featuring popular titles like BGMI and PUBG.",
    image:
      "https://wstatic-prod-boc.krafton.com/PUBG_OFFICIAL/20250307/Wn5mxWqY.png",
  },
  {
    id: 6,
    title: "Sketching",
    description: "Showcase your artistic talent through live sketching.",
    image:
      "https://finearttutorials.com/wp-content/uploads/2021/06/Drawing-techniques-1024x768.jpg",
  },
  {
    id: 7,
    title: "Innovating the Greener Future",
    description: "Promote sustainability and green tech with your ideas.",
    image:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/4e600a82-8aac-4abb-95cd-f87cc9125a0f/4109a030-24fe-4481-80ce-9e3ca566c441.png",
  },
  {
    id: 8,
    title: "Rangoli",
    description:
      "Design beautiful and colorful Rangoli artwork using traditional techniques.",
    image:
      "https://assets.telegraphindia.com/telegraph/2021/Nov/1635865965_imgonline-com-ua-compresstosize-4asddirrdp.jpg",
  },
  {
    id: 9,
    title: "Video Editing",
    description: "Demonstrate your editing skills with creative storytelling.",
    image:
      "https://wstatic-prod-boc.krafton.com/PUBG_OFFICIAL/20250307/Wn5mxWqY.png",
  },
  {
    id: 10,
    title: "TEDx Style Speaker",
    description:
      "Deliver inspiring talks with engaging stories like a TEDx speaker.",
    image:
      "https://www.whiteclouds.com/wp-content/uploads/2024/12/TEDx-Talks-1024x585.jpg",
  },
];

export default Event;
