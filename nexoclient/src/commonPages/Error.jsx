import React from "react";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="tv-container">
          <motion.div
            className="tv-screen"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="static" />
            <div className="error-text">ERROR 404</div>
          </motion.div>
          <div className="tv-stand" />
        </div>

        <motion.div
          className="message"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1>Oops! The page you're looking for doesn't exist.</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/")}
          >
            <FaArrowLeft /> Go Home
          </motion.button>
        </motion.div>
      </motion.div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(circle, #1f1f1f 20%, #121212 100%),
    url("https://www.transparenttextures.com/patterns/dark-mosaic.png");
  background-blend-mode: overlay;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .container {
    text-align: center;
    padding: 20px;
  }

  .tv-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  .tv-screen {
    position: relative;
    width: 300px;
    height: 200px;
    background: black;
    border: 10px solid #333;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8),
      inset 0 0 50px rgba(255, 255, 255, 0.2);
    overflow: hidden;
  }

  .static {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      0deg,
      #000,
      #000 1px,
      #111 1px,
      #fff 1px,
      #333 2px
    );
    animation: flicker 0.1s steps(20) infinite;
    z-index: 1;
  }

  .error-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 3px;
    text-shadow: 2px 2px 5px black;
    z-index: 2;
    animation: glitch 0.6s infinite;
  }

  .tv-stand {
    width: 150px;
    height: 10px;
    background: #333;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.7);
  }

  .message {
    font-size: 20px;
    color: white;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .message h1 {
    margin-bottom: 25px;
    font-size: 24px;
    font-weight: bold;
  }

  .message button {
    background-color: #ff4d4d;
    border: none;
    color: white;
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: background-color 0.3s ease;
  }

  .message button:hover {
    background-color: #ff1a1a;
  }

  @keyframes flicker {
    0% {
      opacity: 0.8;
      transform: scaleY(1);
    }
    50% {
      opacity: 1;
      transform: scaleY(1.01);
    }
    100% {
      opacity: 0.7;
      transform: scaleY(0.99);
    }
  }

  @keyframes glitch {
    0% {
      transform: translate(-50%, -50%) skewX(5deg);
      opacity: 0.9;
    }
    25% {
      transform: translate(-50%, -50%) skewX(-5deg);
      opacity: 0.8;
    }
    50% {
      transform: translate(-50%, -50%) skewX(0deg);
      opacity: 1;
    }
    75% {
      transform: translate(-50%, -50%) skewX(-5deg);
      opacity: 0.8;
    }
    100% {
      transform: translate(-50%, -50%) skewX(5deg);
      opacity: 0.9;
    }
  }
`;

export default Error;
