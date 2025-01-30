CREATE DATABASE IF NOT EXISTS ministryDB;
USE ministryDB;


CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);


-- Departments Table

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100)
);

-- Projects Table

CREATE TABLE Projects (
    ProjectID INT PRIMARY KEY,
    ProjectName VARCHAR(100),
    StartDate DATE,
    EndDate DATE,
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);


-- EmployeeProjects Table

CREATE TABLE EmployeeProjects (
    EmployeeProjectID INT PRIMARY KEY,
    EmployeeID INT,
    ProjectID INT,
    FOREIGN KEY (EmployeeID) REFERENCES Employees(EmployeeID),
    FOREIGN KEY (ProjectID) REFERENCES Projects(ProjectID)
);


-- Input Data into Departments

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES 
(1, 'Human Resources'),
(2, 'Finance'),
(3, 'IT'),
(4, 'Legal');


-- Data into Employees

INSERT INTO Employees (EmployeeID, FirstName, LastName, Position, DepartmentID) VALUES 
(1, 'Alice', 'Johnson', 'HR Manager', 1),
(2, 'Bob', 'Smith', 'Finance Officer', 2),
(3, 'Charlie', 'Brown', 'IT Specialist', 3);


-- Data into Projects

INSERT INTO Projects (ProjectID, ProjectName, StartDate, EndDate, DepartmentID) VALUES 
(1, 'Employee Training Program', '2025-02-01', '2025-06-01', 1),
(2, 'Budget Review', '2025-03-01', '2025-05-01', 2);




-- Read Employees
SELECT * FROM Employees;


-- Read Departments
SELECT * FROM Departments;


-- Read Projects
SELECT * FROM Projects;

-- Read EmployeeProjects
SELECT * FROM EmployeeProjects;