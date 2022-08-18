use COMPANY;
select Essn As Mgr_SSN, count(*) AS Number_of_projects from WORKS_ON where Essn IN (SELECT distinct Mgr_ssn FROM DEPARTMENT where Dnumber in (SELECT distinct Dnum from PROJECT where Pname='ProductY') ) group by Essn ;
