import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaPhone,
} from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";

// Dropdown values
const branches = ["CSE", "ECE", "MECH", "CIVIL"];
const courses = ["B.Tech", "M.Tech"];
const events = ["Tech00", "Singing", "SongArt"];
const colleges = [
  "College 1",
  "College 2",
  "College 3",
  "College 4",
  "College 5",
];

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollno: "",
    year: "Year 1",
    branch: "CSE",
    course: "B.Tech",
    college: "College 1",
    email: "",
    phone: "",
    password: "",
    participatedEvents: [],
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "participatedEvents") {
      const updated = checked
        ? [...formData.participatedEvents, value]
        : formData.participatedEvents.filter((event) => event !== value);
      setFormData((prev) => ({ ...prev, participatedEvents: updated }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms & conditions.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      alert(`Registered as ${formData.name}`);
      setLoading(false);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      rollno: "",
      year: "Year 1",
      branch: "CSE",
      course: "B.Tech",
      college: "College 1",
      email: "",
      phone: "",
      password: "",
      participatedEvents: [],
      termsAccepted: false,
    });
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <FormWrapper>
          <Title>Create Account</Title>
          <Form onSubmit={handleSubmit}>
            <Row>
              <InputWrapper>
                <FaUser />
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Input
                  name="rollno"
                  placeholder="Roll No"
                  value={formData.rollno}
                  onChange={handleChange}
                  required
                />
              </InputWrapper>
            </Row>

            <Row>
              <Select name="year" value={formData.year} onChange={handleChange}>
                {[1, 2, 3, 4].map((y) => (
                  <option key={y}>Year {y}</option>
                ))}
              </Select>
              <Select
                name="branch"
                value={formData.branch}
                onChange={handleChange}
              >
                {branches.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </Select>
              <Select
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                {courses.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </Select>
            </Row>

            <Row>
              <Select
                name="college"
                value={formData.college}
                onChange={handleChange}
              >
                {colleges.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </Select>
            </Row>

            <InputWrapper>
              <FaEnvelope />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <FaPhone />
              <Input
                type="text"
                name="phone"
                placeholder="Phone"
                autoComplete="current-phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <FaLock />
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password (8+ chars, 1 digit, 1 special)"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <ToggleIcon onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </ToggleIcon>
            </InputWrapper>

            <CheckboxSection>
              <span>Participated Events:</span>
              {events.map((event) => (
                <label key={event}>
                  <input
                    type="checkbox"
                    name="participatedEvents"
                    value={event}
                    checked={formData.participatedEvents.includes(event)}
                    onChange={handleChange}
                  />{" "}
                  {event}
                </label>
              ))}
            </CheckboxSection>

            <Terms>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <span>
                I accept the{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </a>
              </span>
            </Terms>

            <Button type="submit" disabled={loading}>
              {loading ? <Spinner /> : "Sign Up"}
            </Button>
            <Button
              type="button"
              onClick={resetForm}
              style={{ marginTop: "0.5rem", background: "#888" }}
            >
              Reset Form
            </Button>
          </Form>
        </FormWrapper>
      </Container>
      <Footer />
    </Wrapper>
  );
};

// ======= Styled Components =======

const backgroundScroll = keyframes`
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to right, #141e30, #243b55);
  color: #fff;
  user-select: none;

  &::before {
    content: "0101010101010110101010010100100101010010101011010010101001010101";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300%;
    color: rgba(255, 255, 255, 0.05);
    font-family: monospace;
    font-size: 1rem;
    line-height: 1.2rem;
    white-space: pre;
    background: repeating-linear-gradient(
      transparent,
      transparent 1rem,
      rgba(255, 255, 255, 0.03) 1.2rem
    );
    animation: ${backgroundScroll} 30s linear infinite;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 2rem;
`;

const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #57a6ff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  flex: 1 1 calc(50% - 0.5rem);
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.07);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  box-sizing: border-box;
  margin: 1rem 0;

  svg {
    margin-right: 0.5rem;
    color: #57a6ff;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 1rem;
  }

  @media (max-width: 720px) {
    flex: 1 1 100%;
  }
`;

const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  color: #f9f9f9;
  font-size: 1rem;
  outline: none;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #57a6ff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  height: 18px;
  width: 18px;
  border: 3px solid #fff;
  border-top: 3px solid #57a6ff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ToggleIcon = styled.div`
  cursor: pointer;
  margin-left: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  margin: 1rem 0;
`;

const Select = styled.select`
  flex: 1;
  padding: 0.75rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.07);
  color: #f9f9f9;
  border: none;
  font-size: 1rem;
  appearance: none;
  outline: none;
  option {
    color: black;
  }
`;

const CheckboxSection = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #ccc;
  font-size: 0.9rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  label {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }

  input {
    accent-color: #57a6ff;
  }
`;

const Terms = styled.div`
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: #57a6ff;
    font-weight: bold;
    text-decoration: none;
  }

  input {
    accent-color: #57a6ff;
  }
`;

export default Signup;
