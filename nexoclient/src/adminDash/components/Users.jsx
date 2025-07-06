import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiUser,
  FiPrinter,
  FiDownload,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import * as XLSX from "xlsx";

import UserProfile from "./UserProfile";

const sampleUsers = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  rollno: `12345${i}`,
  year: `Year ${(i % 4) + 1}`,
  branch: ["CSE", "ECE", "MECH", "CIVIL"][i % 4],
  course: ["B.Tech", "M.Tech"][i % 2],
  college: `College ${(i % 5) + 1}`,
  email: `user${i + 1}@mail.com`,
  phone: `98765432${i < 10 ? "0" + i : i}`,
  participatedEvents: ["Tech00", "Singing", "SongArt"],
}));

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    rollno: "",
    year: "",
    branch: "",
    course: "",
    college: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [showFilters, setShowFilters] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(sampleUsers);
    }, 1200 + Math.random() * 800);

    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value.toLowerCase(),
    }));
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const filteredUsers = users.filter((user) =>
    Object.entries(filters).every(([key, value]) =>
      String(user[key]).toLowerCase().includes(value)
    )
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(users);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Participants");
    XLSX.writeFile(wb, "participants.xlsx");
  };

  const handlePrint = useCallback(() => {
    const printWindow = window.open("", "_blank");
    const filterString = Object.entries(filters)
      .filter(([, value]) => value)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");

    printWindow.document.write(`
      <html>
        <head>
          <title>Participants List</title>
          <style>
            body { font-family: sans-serif; color: #f8f9fa; background-color: #212529; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #495057; padding: 10px; text-align: left; }
            th { background-color: #343a40; color: #fff; }
            tr:nth-child(even) { background-color: #343a40; }
            h1 { color: #00bcd4; }
            h2 { color: #fff; font-size: 1.2rem; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <h1>Participants List</h1>
          ${filterString ? `<h2>Filters Applied: ${filterString}</h2>` : ""}
          <table>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Year</th>
                <th>Branch</th>
                <th>Course</th>
                 <th>College</th>
              </tr>
            </thead>
            <tbody>
              ${filteredUsers
                .map(
                  (user, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td>${user.name}</td>
                  <td>${user.rollno}</td>
                  <td>${user.year}</td>
                  <td>${user.branch}</td>
                  <td>${user.course}</td>
                  <td>${user.college}</td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }, [filteredUsers, filters]);

  const handleViewProfile = (user) => {
    setSelectedUser(user);
  };

  const displayedPages = () => {
    let pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage === 1) {
      pages = [1, 2, 3];
    } else if (currentPage === totalPages) {
      pages = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }
    return pages;
  };

  return (
    <DarkGlassContainer>
      <Header>
        <Title>All Participants</Title>
        <Actions>
          <Button onClick={handlePrint}>
            <FiPrinter /> Print
          </Button>
          <Button onClick={exportToExcel}>
            <FiDownload /> Export
          </Button>
        </Actions>
      </Header>

      <InfoRow>
        <Badge>Total Participants: {filteredUsers.length}</Badge>
        <FilterButton onClick={() => setShowFilters(!showFilters)}>
          <FiFilter /> {showFilters ? "Hide Filters" : "Show Filters"}
        </FilterButton>
      </InfoRow>

      {showFilters && (
        <FilterRow>
          <FilterInput
            placeholder="Filter Name"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
          />
          <FilterInput
            placeholder="Filter Roll No"
            name="rollno"
            value={filters.rollno}
            onChange={handleFilterChange}
          />
          <FilterInput
            placeholder="Filter Year"
            name="year"
            value={filters.year}
            onChange={handleFilterChange}
          />
          <FilterInput
            placeholder="Filter Branch"
            name="branch"
            value={filters.branch}
            onChange={handleFilterChange}
          />
          <FilterInput
            placeholder="Filter Course"
            name="course"
            value={filters.course}
            onChange={handleFilterChange}
          />
          <FilterInput
            placeholder="Filter College"
            name="college"
            value={filters.college}
            onChange={handleFilterChange}
          />
        </FilterRow>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <TableWrapper>
          <DarkStyledTable>
            <thead>
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Year</th>
                <th>Branch</th>
                <th>Course</th>
                <th>College</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>{indexOfFirstUser + index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.rollno}</td>
                  <td>{user.year}</td>
                  <td>{user.branch}</td>
                  <td>{user.course}</td>
                  <td>{user.college}</td>
                  <td>
                    <ProfileButton onClick={() => handleViewProfile(user)}>
                      <FiUser /> Profile
                    </ProfileButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </DarkStyledTable>
        </TableWrapper>
      </motion.div>

      {totalPages > 1 && (
        <EnhancedPagination>
          <PaginationButton
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiChevronLeft />
          </PaginationButton>
          <PaginationWrapper>
            {displayedPages().map((page) => (
              <PageNumber
                key={page}
                onClick={() => paginate(page)}
                className={currentPage === page ? "active" : ""}
              >
                {page}
              </PageNumber>
            ))}
          </PaginationWrapper>
          <PaginationButton
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FiChevronRight />
          </PaginationButton>
          <PageInfo>
            Page {currentPage} of {totalPages}
          </PageInfo>
        </EnhancedPagination>
      )}

      {selectedUser && (
        <UserProfile
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </DarkGlassContainer>
  );
};

// Styled Components for Dark Theme

const DarkGlassContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(40, 40, 40, 0.7),
    rgba(20, 20, 20, 0.7)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f8f9fa;
  overflow-x: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(52, 58, 64, 0.8);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  flex-wrap: wrap;
  gap: 1rem;
`;

const Title = styled.h2`
  color: #00bcd4;
  font-weight: 600;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: #ff4081;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f50057;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Badge = styled.span`
  background-color: #6200ea;
  padding: 0.4rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1rem;
  background-color: #343a40;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #495057;
  }
`;

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const FilterInput = styled.input`
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #495057;
  background-color: #44475a;
  color: #f8f9fa;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00bcd4;
    box-shadow: 0 0 0 0.1rem rgba(0, 188, 212, 0.25);
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  background-color: rgba(52, 58, 64, 0.5);
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

const DarkStyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
  color: #f8f9fa;

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #495057;
  }

  th {
    background-color: #343a40;
    color: #00bcd4;
    font-weight: 500;
  }

  tr:hover {
    background-color: rgba(64, 75, 85, 0.7);
  }
`;

const EnhancedPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap; /* Added for responsiveness */
`;

const PaginationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap; /* Added for responsiveness */
  justify-content: center; /* Centers the buttons horizontally */
`;

const PaginationButton = styled.button`
  padding: 0.6rem 1rem;
  border: 1px solid #00bcd4;
  border-radius: 5px;
  background-color: transparent;
  color: #00bcd4;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin: 0.25rem; /* Added margin for spacing in wrapped layout */

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      background-color: transparent;
    }
  }

  &:hover:not(:disabled) {
    background-color: rgba(0, 188, 212, 0.1);
  }
`;

const PageNumber = styled.button`
  padding: 0.6rem 1rem;
  margin: 0 0.3rem;
  border: 1px solid #00bcd4;
  border-radius: 5px;
  background-color: transparent;
  color: #00bcd4;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin: 0.25rem; /* Added margin for spacing in wrapped layout */

  &.active {
    background-color: #00bcd4;
    color: white;
  }

  &:hover:not(.active) {
    background-color: rgba(0, 188, 212, 0.1);
  }
`;

const PageInfo = styled.span`
  color: #00bcd4;
  font-size: 0.9rem;
  margin: 0.25rem; /* Added margin for spacing in wrapped layout */
`;

const ProfileButton = styled.button`
  padding: 0.6rem 1.2rem;
  background-color: rgba(0, 187, 212, 0.22);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00869e;
  }
`;

export default Users;
