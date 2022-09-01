use CUSTOMER_DB;

delimiter &&
create procedure getDetails()

begin
	declare finish int default 0;
    declare cname varchar(40);
    declare ccity varchar(35);
    declare ccountry varchar(20);
    declare cgrade decimal(12,2);
    
    declare user_data cursor for select CUST_NAME, CUST_CITY, CUST_COUNTRY, GRADE from customer where AGENT_CODE like "A00%";
    declare continue handler for not found set finish=1;
    CREATE TABLE abcd (
		c_name varchar(40),
		c_city varchar(35),
		c_country varchar(20),
		c_grade decimal(12,2)
	);
    open user_data;
    getData: LOOP
		fetch user_data into cname, ccity, ccountry, cgrade ;
        
        -- select cname, ccity, ccountry, cgrade;
        if finish = 1 then
			leave getData;
		end if;
        INSERT INTO abcd VALUES (cname, ccity, ccountry, cgrade);
    END LOOP getData;
    close user_data;
    select * from abcd;
    drop table abcd;
end&&
delimiter ;
call getDetails();
