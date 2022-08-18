USE COMPANY;
SELECT D.Mgr_ssn,count(*) as 'Number of dependents',D.Dnumber 
FROM
   (SELECT Dnumber FROM DEPT_LOCATIONS GROUP BY Dnumber HAVING COUNT(Dlocation) >= 2)  dl INNER JOIN DEPARTMENT D ON dl.Dnumber = D.Dnumber INNER JOIN DEPENDENT dt ON dt.Essn = D.Mgr_ssn group by D.Mgr_ssn,D.Dnumber
