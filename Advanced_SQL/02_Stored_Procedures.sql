USE Cognizant_SQL_Assignments;
GO

-- 1. Creating a procedure using CREATE OR ALTER (prevents the 'already exists' error!)
CREATE OR ALTER PROCEDURE GetEmployeeCountByDept
    @Dept VARCHAR(50),        -- Input Parameter
    @EmpCount INT OUTPUT      -- Output Parameter explicitly defined
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Assigning the count value directly to our output hook variable
    SELECT @EmpCount = COUNT(*) 
    FROM Employees 
    WHERE Department = @Dept;
END;
GO

-- 2. Declaring a runtime token block to test and hold the output data
DECLARE @TotalITEmployees INT;

-- Executing and passing the variable hook to collect the return metric
EXEC GetEmployeeCountByDept 
    @Dept = 'IT', 
    @EmpCount = @TotalITEmployees OUTPUT;

-- Displaying the cleanly returned counter from the parameter
SELECT @TotalITEmployees AS TotalEmployeesInITDepartment;