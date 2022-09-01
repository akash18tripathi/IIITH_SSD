use CUSTOMER_DB;
delimiter &&
create procedure getGrades()
begin
      select CUST_NAME, GRADE from (select CUST_NAME, GRADE, (OPENING_AMT + RECEIVE_AMT) AS TOTAL  from customer) as TEMP where TEMP.TOTAL>10000;
end&&
delimiter ;

call getGrades;
