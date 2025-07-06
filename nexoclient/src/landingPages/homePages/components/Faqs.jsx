import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

// Updated & extended FAQs
const faqsData = [
  {
    question: "What is Nexovation?",
    answer:
      "Nexovation is a tech and non-tech fest organized by BBCET Prayagraj, celebrating innovation and creativity. It features a diverse range of competitions, workshops, technical exhibitions, cultural programs, and fun-filled activities that foster talent, knowledge sharing, and networking among students.",
  },
  {
    question: "Who can participate in Nexovation?",
    answer:
      "Nexovation is open to students from all academic backgrounds — both technical and non-technical — from BBCET and other institutions. No matter your stream, there’s something for everyone!",
  },
  {
    question: "Are there any registration fees?",
    answer:
      "No, participation in Nexovation is completely free of charge. You can register without any payment through the official Nexovation website. Enjoy the fest without worrying about fees!",
  },
  {
    question: "How do I register for Nexovation events?",
    answer:
      "Registrations can be done online through the official Nexovation website. Just visit the events section, choose your desired event, and fill in the basic details. You’ll get a confirmation email after successful registration.",
  },
  {
    question: "Will there be any prizes or certification?",
    answer:
      "Absolutely! Winners will receive certificates, medals or trophies, and exciting goodies. Additionally, all participants will receive digital certificates to recognize their involvement and enthusiasm.",
  },
  {
    question: "Are there any offline events during the fest?",
    answer:
      "Yes, All events under Nexovation are conducted offline at the BBCET Prayagraj campus, ensuring hands-on interaction and live experiences.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <Overlay>
        <Title>
          <FaQuestionCircle size={28} style={{ marginRight: "10px" }} />
          Nexovation FAQs
        </Title>
        <FAQList>
          {faqsData.map((faq, index) => (
            <FAQItem key={index} onClick={() => toggleFAQ(index)}>
              <Question>
                {faq.question}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </Question>
              <Answer $isOpen={openIndex === index}>
                <div>{faq.answer}</div>
              </Answer>
            </FAQItem>
          ))}
        </FAQList>
      </Overlay>
    </Container>
  );
};

export default Faqs;

// Styled-components
const Container = styled.div`
  min-height: 100vh;
  background-image: url("https://www.transparenttextures.com/patterns/classy-fabric.png");
  background-color: rgb(29, 38, 38);
  background-blend-mode: overlay;
  padding: 50px 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  @media (max-width: 600px) {
    padding: 30px 10px;
  }
`;

const Overlay = styled.div`
  background: rgba(30, 30, 30, 0.85);
  padding: 30px;
  border-radius: 15px;
  max-width: 850px;
  width: 100%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.7);

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  color: #ff9800;
  text-align: center;
  justify-content: center;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FAQItem = styled.div`
  background: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid #333;

  &:hover {
    background: #2c2c2c;
  }
`;

const Question = styled.div`
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f5f5f5;
`;

const Answer = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0px")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  color: #ccc;
  font-size: 0.95rem;
  margin-top: ${({ $isOpen }) => ($isOpen ? "15px" : "0")};
  line-height: 1.6;
  padding-right: 10px;
`;
