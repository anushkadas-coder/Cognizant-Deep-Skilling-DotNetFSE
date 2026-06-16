-- 1. Creating Database
CREATE DATABASE Cognizant_SQL_Assignments;
GO
USE Cognizant_SQL_Assignments;
GO

-- 2. Creating target employee structure
CREATE TABLE Employees (
    EmpId INT PRIMARY KEY,
    EmpName VARCHAR(50),
    Department VARCHAR(50),
    Salary DECIMAL(10,2)
);
GO

-- 3. Inserting test vectors with identical salaries
INSERT INTO Employees (EmpId, EmpName, Department, Salary) VALUES
(1, 'Anushka Das', 'IT', 95000.00),
(2, 'Rohit Sharma', 'IT', 95000.00), 
(3, 'Amit Verma', 'IT', 85000.00),
(4, 'Sania Mirza', 'HR', 75000.00),
(5, 'Rahul Dravid', 'HR', 75000.00), 
(6, 'Shikhar Dhawan', 'IT', 60000.00);
GO

-- 4. Executing Window and Ranking Functions (MANDATORY PART)
SELECT 
    EmpName, 
    Department, 
    Salary,
    ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RowNum,
    RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS RankVal,
    DENSE_RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS DenseRankVal
FROM 
    Employees;