use COMPANY;
(with L as (With T as (select Essn from DEPENDENT where Sex='F' group by Essn having count(*)>=2) select * from DEPARTMENT inner join T on T.Essn=DEPARTMENT.Mgr_ssn) select * from L Inner join DEPT_LOCATIONS on DEPT_LOCATIONS.Dnumber=L.Dnumber);

