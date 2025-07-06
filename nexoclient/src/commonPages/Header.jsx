import React, { useState } from "react";
import styled from "styled-components";
import { FaSignInAlt, FaHome, FaUserShield } from "react-icons/fa";
import AdminLoginForm from "./admin/Login";
import { Link } from "react-router-dom";

const Header = () => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <>
      <NavBar>
        <NavSection className="left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo>
              <FaHome />
            </Logo>
          </Link>
        </NavSection>
        <NavSection className="right">
          <LoginButton onClick={() => setShowAdminLogin(true)}>
            <IconHighlight>
              <FaUserShield />
            </IconHighlight>
          </LoginButton>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <LoginButton>
              <FaSignInAlt />
              Login
            </LoginButton>
          </Link>
        </NavSection>
      </NavBar>

      {showAdminLogin && (
        <PopupOverlay onClick={() => setShowAdminLogin(false)}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <AdminLoginForm />
          </PopupContent>
        </PopupOverlay>
      )}
    </>
  );
};

const NavBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  color: #c9d1d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 5px rgba(76, 75, 75, 0.4);
  background-color: #0d1117;

  svg {
    background: none;
    border: none;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #58a6ff;
  cursor: pointer;
  user-select: none;
`;

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #c9d1d9;
  border: 1px solid #30363d;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;
  user-select: none;
  background-color: #21262d;

  &:hover {
    background-color: #30363d;
  }

  svg {
    font-size: 1.5rem;
    background: none;
    border: none;
  }
`;

// For Admin Form
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 17, 23, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1500;
`;

const IconHighlight = styled.span`
  color: #ffeba7;
  text-shadow: 0 0 5px #ffeba7, 0 0 10px #ffeba7;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.5rem;
  }
`;

const PopupContent = styled.div`
  background: #161b22;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
`;

export default Header;
