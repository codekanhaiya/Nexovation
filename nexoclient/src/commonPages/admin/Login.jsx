import React, { useState } from "react";
import styled from "styled-components";
import Forget from "./Forget";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Importing show/hide password icon

const Login = () => {
  const [showForgetForm, setShowForgetForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // For show/hide password

  return (
    <StyledWrapper>
      <div className="card">
        <h4 className="title">Admin Login</h4>
        <form>
          <label className="field" htmlFor="adminId">
            <span className="input-icon">#</span>
            <input
              autoComplete="off"
              id="adminId"
              placeholder="Admin ID"
              className="input-field"
              name="adminId"
              type="text"
              required
            />
          </label>
          <label className="field" htmlFor="logemail">
            <span className="input-icon">@</span>
            <input
              autoComplete="off"
              id="logemail"
              placeholder="Email"
              className="input-field"
              name="logemail"
              type="email"
              required
            />
          </label>
          <label className="field" htmlFor="logpass">
            <svg
              className="input-icon"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" />
            </svg>
            <input
              id="logpass"
              placeholder="Password"
              className="input-field"
              name="logpass"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              required
            />
            <span
              className="password-icon"
              onClick={() => setShowPassword(!showPassword)} // Toggle the password visibility
            >
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </span>
          </label>
          <button className="btn" type="submit">
            Login
          </button>
        </form>
        <div className="reset-link">
          <button
            className="reset-password-btn"
            onClick={() => setShowForgetForm(true)}
          >
            Reset Password?
          </button>
        </div>
      </div>

      {showForgetForm && (
        <PopupOverlay>
          <PopupCard>
            <Forget />
            <CloseBtn onClick={() => setShowForgetForm(false)}>X</CloseBtn>
          </PopupCard>
        </PopupOverlay>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #0d1117;
  // padding: 1rem;

  .card {
    --main-col: #ffeba7;
    --bg-col: #2a2b38;
    --bg-field: #1f2029;

    width: 100%;
    max-width: 500px;
    padding: 2rem 1.5rem;
    text-align: center;
    background: var(--bg-col);
    border-radius: 10px;
    border: 1px solid var(--main-col);
    user-select: none;
    position: relative;
    box-sizing: border-box;
  }

  .field {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    gap: 0.5rem;
    background-color: var(--bg-field);
    border-radius: 4px;
  }

  .input-icon {
    width: 1em;
    color: var(--main-col);
    fill: var(--main-col);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .input-field {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 2rem;
    font-size: 1em;
    color: var(--main-col);
    padding: 0.5em 1em 0.5em 0;
    caret-color: var(--main-col);
  }

  .title {
    margin-bottom: 1rem;
    font-size: 1.7em;
    font-weight: 600;
    color: var(--main-col);
    text-shadow: 1px 1px 20px var(--main-col);
    text-transform: uppercase;
  }

  .btn {
    margin-top: 1rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.85em;
    text-transform: uppercase;
    padding: 0.6em 1.2em;
    background-color: var(--main-col);
    color: var(--bg-col);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .btn-link {
    margin-top: 0.5rem;
    color: #f5f5f5;
    font-size: 0.75em;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
  }

  .reset-link {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
  }

  .reset-password-btn {
    font-size: 0.75em;
    color: #ffeba7;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
  }

  .password-icon {
    cursor: pointer;
    color: var(--main-col);
    margin-right: 0.5rem;
  }

  .btn:hover {
    background-color: var(--bg-field);
    color: var(--main-col);
    box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
  }

  .btn-link:hover {
    color: var(--main-col);
  }

  .reset-password-btn:hover {
    color: var(--main-col);
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 17, 23, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupCard = styled.div`
  background-color: #2a2b38;
  padding: 2rem;
  border-radius: 10px;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  font-size: 1rem;
  background: none;
  border: none;
  color: #ffeba7;
  cursor: pointer;
`;

export default Login;
