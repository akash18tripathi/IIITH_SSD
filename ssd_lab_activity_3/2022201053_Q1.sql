USE COMPANY;
SELECT CONCAT(emp.fname," ",emp.minit," ", emp.lname) AS 'Full name Of Employee',ssn,dno,dep.dname
FROM EMPLOYEE emp JOIN DEPARTMENT dep ON emp.dno = dep.dnumber
WHERE ssn IN (SELECT mgr_ssn FROM
 DEPARTMENT WHERE dnumber IN (SELECT dno FROM(SELECT emp.dno, SUM(wo.hours) AS hrs
FROM
                        EMPLOYEE emp
                    JOIN WORKS_ON wo ON emp.ssn = wo.essn
                    GROUP BY emp.ssn) temp
                GROUP BY temp.dno
                HAVING MIN(hrs) < 40));
