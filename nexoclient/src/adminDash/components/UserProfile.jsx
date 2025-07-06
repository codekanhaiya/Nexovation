// --- IMPORTS ---
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FiX, FiTrash2, FiMail, FiPhone, FiBook, FiHome } from "react-icons/fi";

// --- COMPONENT ---
const UserProfile = ({ user, onClose, onDelete, onSendEmail }) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  if (!user) return null;

  const handleDeleteConfirmation = () => setDeleteModalOpen(true);
  const handleCloseDeleteModal = () => setDeleteModalOpen(false);
  const handleConfirmDelete = () => {
    onDelete();
    setDeleteModalOpen(false);
  };

  return (
    <Overlay>
      <ProfileCard>
        <Avatar>{user.name?.charAt(0)}</Avatar>
        <TopBar>
          <Title>👤 {user.name}</Title>
          <CloseButton onClick={onClose}>
            <FiX size={22} />
          </CloseButton>
        </TopBar>
        <ProfileGrid>
          <LeftSection>
            <InfoBlock>
              <InfoRow>
                <FiBook /> Roll No: {user.rollno}
              </InfoRow>
              <InfoRow>
                <FiHome /> Year: {user.year}
              </InfoRow>
              <InfoRow>
                <FiHome /> Branch: {user.branch}
              </InfoRow>
              <InfoRow>
                <FiBook /> Course: {user.course}
              </InfoRow>
              <InfoRow>
                <FiHome /> College: {user.college}
              </InfoRow>
              <InfoRow>
                <FiMail /> {user.email}
              </InfoRow>
              <InfoRow>
                <FiPhone /> {user.phone}
              </InfoRow>
              <InfoRow>
                <FiBook /> Events: {user.participatedEvents.join(", ")}
              </InfoRow>
            </InfoBlock>

            <Actions>
              <Button $danger onClick={handleDeleteConfirmation}>
                <FiTrash2 /> Delete
              </Button>
            </Actions>
          </LeftSection>

          <RightSection>
            <EmailForm onSubmit={onSendEmail}>
              <FormHeader>📧 Send Email</FormHeader>
              <FormGroup>
                <input required type="text" name="subject" />
                <label>Subject</label>
              </FormGroup>
              <FormGroup>
                <textarea required rows={3} name="message" />
                <label>Message</label>
              </FormGroup>
              <SubmitBtn type="submit">
                <FiMail /> Send
              </SubmitBtn>
            </EmailForm>
          </RightSection>
        </ProfileGrid>
      </ProfileCard>

      {isDeleteModalOpen && (
        <DeleteModal>
          <ModalContainer>
            <ModalTitle>Are you sure?</ModalTitle>
            <ModalDescription>
              This action will permanently delete the user profile.
            </ModalDescription>
            <ModalActions>
              <Button onClick={handleCloseDeleteModal}>Cancel</Button>
              <Button $danger onClick={handleConfirmDelete}>
                Delete
              </Button>
            </ModalActions>
          </ModalContainer>
        </DeleteModal>
      )}
    </Overlay>
  );
};

// --- STYLES ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled.div`
  width: 90%;
  max-width: 1000px;
  background: #1e1e2f;
  color: #eee;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease-out;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #ff5252;
  }
`;

const ProfileGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  flex: 1 1 300px;
`;

const RightSection = styled.div`
  flex: 1 1 350px;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  background: #ffcc00;
  color: #222;
  font-size: 2.8rem;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-left: 0;
`;

const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.95rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.6rem 1rem;
  border-radius: 8px;
`;

const Actions = styled.div`
  margin-top: 1.5rem;
`;

const Button = styled.button`
  background: ${({ $danger }) => ($danger ? "#c62828" : "#1976d2")};
  color: white;
  padding: 0.6em 1.2em;
  font-size: 0.9rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: 0.3s ease;
  &:hover {
    background: ${({ $danger }) => ($danger ? "#b71c1c" : "#1565c0")};
  }
`;

const EmailForm = styled.form`
  background: #2a2a3d;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #444;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const FormHeader = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  input,
  textarea {
    width: 100%; /* Take full width of the parent container */
    padding: 1rem;
    background: #1f1f2e;
    border: 1px solid #555;
    color: #fff;
    border-radius: 6px;
    font-size: 1rem;
    box-sizing: border-box; /* Includes padding and border within the width */
  }

  label {
    position: absolute;
    top: -0.9rem;
    left: 1rem;
    background: #2a2a3d;
    padding: 0 0.3rem;
    font-size: 0.85rem;
    color: #bbb;
  }
`;

const SubmitBtn = styled.button`
  background: #00bcd4;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  transition: background 0.3s ease;
  &:hover {
    background: #0097a7;
  }
`;

const DeleteModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #2e2e40;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  color: #fff;
  max-width: 400px;
  width: 90%;
`;

const ModalTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const ModalDescription = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #ccc;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default UserProfile;
