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
    open user_data;
    getData: LOOP
		fetch user_data into cname, ccity, ccountry, cgrade ;
        -- INSERT INTO @Temp VALUES (cname, ccity, ccountry, cgrade);
        select cname, ccity, ccountry, cgrade;
        if finish = 1 then
			leave getData;
		end if;
    END LOOP getData;
    close user_data;
    -- select * from @Temp;
    -- drop table Temp;
end&&
delimiter ;
call getDetails();
