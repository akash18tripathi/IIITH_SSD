use CUSTOMER_DB;
delimiter &&
create procedure getNames(in city varchar(35))
begin
      select CUST_NAME from customer where WORKING_AREA = city;
end&&
delimiter ;

call getNames("Bangalore");
