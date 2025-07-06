import React, { useState } from "react";
import styled from "styled-components";

const Forget = () => {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const { newPassword, confirmPassword } = formData;
    const validPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!validPassword.test(newPassword)) {
      alert(
        "Password must be at least 8 characters long with a letter, a number, and a special character."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password successfully reset! (Simulated)");
    // Add API logic here
  };

  return (
    <StyledWrapper>
      <div className="card">
        <h4 className="title">Reset Password</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="field" htmlFor="resetemail">
            <span className="input-icon">@</span>
            <input
              autoComplete="off"
              id="resetemail"
              placeholder="Email"
              className="input-field"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="field" htmlFor="newPassword">
            <span className="input-icon">🔒</span>
            <input
              id="newPassword"
              placeholder="New Password"
              className="input-field"
              name="newPassword"
              autoComplete="current-password"
              type={showNewPassword ? "text" : "password"}
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
            <span
              className="input-icon"
              onClick={() => setShowNewPassword(!showNewPassword)}
              style={{ cursor: "pointer" }}
              title={showNewPassword ? "Hide Password" : "Show Password"}
            >
              {showNewPassword ? "🙈" : "👁"}
            </span>
          </label>

          <label className="field" htmlFor="confirmPassword">
            <span className="input-icon">🔒</span>
            <input
              id="confirmPassword"
              placeholder="Confirm Password"
              className="input-field"
              name="confirmPassword"
              type="password"
              autoComplete="current-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>

          <button className="btn" type="submit" onClick={handleSubmit}>
            Reset
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  .card {
    --main-col: #ffeba7;
    --bg-col: #2a2b38;
    --bg-field: #1f2029;

    width: 90%;
    max-width: 400px;
    padding: 1rem 1.5rem;
    text-align: center;
    background: var(--bg-col);
    border-radius: 10px;
    border: 1px solid var(--main-col);
    user-select: none;
  }

  .title {
    margin-bottom: 1rem;
    font-size: 1.5em;
    font-weight: 500;
    color: var(--main-col);
    text-shadow: 1px 1px 20px var(--main-col);
    text-transform: uppercase;
  }

  .field {
    margin-top: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--bg-field);
    border-radius: 4px;
    padding: 0.4rem 0.5rem;
  }

  .input-icon {
    color: var(--main-col);
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  .input-field {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--main-col);
    padding: 0.5rem;
    caret-color: var(--main-col);
  }

  .btn {
    margin-top: 1.5rem;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 0.9em;
    text-transform: uppercase;
    padding: 0.6em 1.4em;
    background-color: var(--main-col);
    color: var(--bg-col);
    box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .btn:hover {
    background-color: var(--bg-field);
    color: var(--main-col);
    box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
  }

  @media (max-width: 480px) {
    .card {
      padding: 1.5rem 1rem;
    }

    .title {
      font-size: 1.3em;
    }
  }
`;

export default Forget;
