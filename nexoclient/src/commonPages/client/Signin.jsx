import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../Header";
import Footer from "../Footer";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Signed in as ${email}`);
    }, 2000);
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <FormWrapper
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Sign In</Title>
          <Form onSubmit={handleSignin}>
            <InputWrapper>
              <FaEnvelope />
              <Input
                type="email"
                placeholder="Email"
                required
                autoComplete="current-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <FaLock />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <ToggleIcon onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </ToggleIcon>
            </InputWrapper>
            <Button type="submit" disabled={loading}>
              {loading ? <Spinner /> : "Sign In"}
            </Button>
          </Form>
          <NewAccount>
            <div>
              Don't have an account?
              <Link
                to="/signup"
                style={{
                  color: "#57a6ff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Create one
              </Link>
            </div>
            <div style={{ marginTop: "0.5rem" }}>
              <Link
                to="/reset"
                style={{
                  color: "#57a6ff",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Forgot Password?
              </Link>
            </div>
          </NewAccount>
        </FormWrapper>
      </Container>
      <Footer />
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  font-family: "Georgia", serif;
  background-color: #0d0d0d;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 1rem;
  background: radial-gradient(
      circle at 1px 1px,
      rgb(48, 69, 56) 1px,
      transparent 0
    ),
    radial-gradient(circle at 4px 4px, rgb(34, 62, 87) 1px, transparent 0);
  background-size: 40px 40px;
`;

const FormWrapper = styled(motion.div)`
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.07);
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;

  svg {
    margin-right: 0.75rem;
    color: #ccc;
  }
`;

const ToggleIcon = styled.div`
  margin-left: 0.5rem;
  cursor: pointer;
  color: #ccc;

  &:hover {
    color: #fff;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
  color: #f9f9f9;
  flex: 1;
`;

const Button = styled.button`
  background: #005aab;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #004080;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Spinner = styled.div`
  border: 4px solid #333;
  border-top: 4px solid #005aab;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const NewAccount = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #ccc;

  a {
    color: #57a6ff;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default Signin;
