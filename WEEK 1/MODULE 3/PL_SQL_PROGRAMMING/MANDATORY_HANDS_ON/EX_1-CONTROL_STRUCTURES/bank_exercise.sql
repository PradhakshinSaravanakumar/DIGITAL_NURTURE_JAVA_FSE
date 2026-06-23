--Create a table to store customer information
CREATE TABLE CustomerTable (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

--Insert sample data into the CustomerTable
INSERT INTO CustomerTable VALUES (1, 'John', 65, 15000, 'FALSE');
INSERT INTO CustomerTable VALUES (2, 'Mary', 45, 8000, 'FALSE');
INSERT INTO CustomerTable VALUES (3, 'David', 70, 20000, 'FALSE');

COMMIT;

--Create a table to store loan information
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES CustomerTable(CustomerID)
);

--Insert sample data into the Loans table
INSERT INTO Loans VALUES (101, 1, 8.5, SYSDATE + 20);
INSERT INTO Loans VALUES (102, 2, 9.0, SYSDATE + 40);
INSERT INTO Loans VALUES (103, 3, 7.5, SYSDATE + 15);

COMMIT;

--Sceanrio 1
BEGIN
    FOR rec IN (
        SELECT c.CustomerID
        FROM CustomerTable c
        WHERE c.Age > 60
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE CustomerID = rec.CustomerID;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Interest rates updated.');
END;
/

--Sceanrio 2
BEGIN
    FOR rec IN (
        SELECT CustomerID
        FROM CustomerTable
        WHERE Balance > 10000
    )
    LOOP
        UPDATE CustomerTable
        SET IsVIP = 'TRUE'
        WHERE CustomerID = rec.CustomerID;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP status updated.');
END;
/

--Sceanrio 3
SET SERVEROUTPUT ON;

BEGIN
    FOR rec IN (
        SELECT c.CustomerName, l.DueDate
        FROM CustomerTable c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan for '
            || rec.CustomerName
            || ' is due on '
            || TO_CHAR(rec.DueDate, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/