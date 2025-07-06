import React from "react";
import styled from "styled-components";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <StyledWrapper>
      <div className="grid-background">
        {[...Array(600)].map((_, i) => (
          <div className="cell" key={i} />
        ))}
      </div>
      <div className="content">
        <div className="loader-animation">
          <svg height={0} width={0} viewBox="0 0 64 64" className="absolute">
            <defs>
              <linearGradient
                id="nexovation-gradient"
                x1="0"
                y1="64"
                x2="0"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00E0ED" />
                <stop stopColor="#FF00FF" offset="1" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="rotate"
                  values="0 32 32;360 32 32"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            viewBox="0 0 600 100"
            width="100%"
            height="8rem"
            preserveAspectRatio="xMidYMid meet"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".35em"
              fontSize="4.8rem"
              stroke="url(#nexovation-gradient)"
              strokeWidth="2"
              fill="none"
              fontFamily="Orbitron, sans-serif"
            >
              Nexovation 2K25
            </text>
          </svg>
        </div>
        <p className="welcome-text">
          Get ready for a future-forward innovation summit!{" "}
          <strong>Nexovation 2K25</strong> brings visionaries, creators, and
          pioneers together to shape the tech of tomorrow. 🚀 Let’s build the
          extraordinary — together.
        </p>

        <Link to="/signup">
          {" "}
          {/* Link component to navigate to the Signup page */}
          <button>
            <FaThumbsUp /> Participate Now
          </button>
        </Link>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  box-sizing: border-box;

  .grid-background {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    grid-auto-rows: 40px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
  }

  .cell {
    border: 1px solid #282828;
    transition: border-color 0.3s ease;
    pointer-events: auto; /* Make sure cells are interactive */
  }

  .cell:hover {
    border-color: #ffaa00; /* Border color changes on hover */
  }

  .content {
    position: relative;
    z-index: 1;
    text-align: center;
    color: #f0f0f0;
    padding: 1rem;
    max-width: 100%;
    user-select: none; /* Disable text selection only in content */
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  button {
    padding: 12px 24px;
    font-size: 1.2rem;
    background-color: #ffaa00;
    color: #1a1a1a;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 2rem;
  }

  button:hover {
    background-color: #ffbb33;
  }

  .loader-animation {
    margin-bottom: 1rem;
  }

  .welcome-text {
    font-size: 1.2rem;
    color: #cccccc;
    max-width: 600px;
    margin: 0 auto 1.5rem;
    line-height: 1.6;
    text-align: center;
  }
`;

export default Hero;
