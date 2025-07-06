import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <h2>Welcome to Nexovation 2K25 – Igniting Innovation</h2>
          <p>
            Nexovation 2K25 marks the inaugural edition of a visionary tech
            event hosted by{" "}
            <strong>B.B.S. College of Engineering & Technology</strong>,
            Prayagraj, affiliated with <strong>AKTU</strong>. This
            first-of-its-kind initiative is designed to spotlight emerging
            technologies, inspiring innovation among students and industry
            pioneers.
          </p>
          <p>
            Set in the heart of Uttar Pradesh, this vibrant festival features
            dynamic workshops, live coding arenas, futuristic tech expos, and
            exciting competitions that celebrate intellect, passion, and
            forward-thinking solutions. Nexovation provides a platform to
            ideate, collaborate, and elevate ideas into real-world
            breakthroughs.
          </p>
          <p>
            With expert-led sessions, immersive displays, and cross-disciplinary
            networking opportunities, Nexovation 2K25 is your launchpad into the
            next digital age. Be part of a movement that dares to define the
            future from the grassroots level.
          </p>
          <p>
            Hosted for the first time, this annual event will not just connect
            minds but ignite a culture of innovation, creativity, and
            technological transformation across AKTU and beyond. Don’t miss the
            beginning of something legendary.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw 3vw;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: rgb(29, 37, 63);
  overflow: hidden; /* Fix scrollbar */
  user-select: none;
  position: relative;

  .card {
    padding: 2.5rem;
    width: 100%;
    max-width: 1080px;
    background: #10162a;
    border-radius: 2.5rem;
    box-shadow: 0 0 30px rgba(0, 183, 255, 0.2);
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 120%; /* Reduced from 130% */
    height: 120%;
    top: -10%; /* Adjusted for better fit */
    left: -10%;
    background: linear-gradient(120deg, #00b7ff, #ff30ff, #00b7ff);
    animation: spinBg 6s linear infinite;
    z-index: 0;
    filter: blur(80px);
    opacity: 0.2;
    pointer-events: none;
  }

  @keyframes spinBg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .content {
    position: relative;
    z-index: 2;
    color: #e1eaf0;
  }

  .content h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;
    background: linear-gradient(45deg, #00b7ff, #ff30ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
  }

  .content p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    text-align: justify;
    color: #c9d6e0;
  }

  strong {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    .content h2 {
      font-size: 2rem;
    }

    .content p {
      font-size: 1rem;
    }

    .card {
      padding: 1.8rem;
      border-radius: 2rem;
    }
  }

  @media (max-width: 480px) {
    .content h2 {
      font-size: 1.6rem;
    }

    .content p {
      font-size: 0.95rem;
    }

    .card {
      padding: 1.2rem;
      border-radius: 1.5rem;
    }
  }
`;

export default About;
