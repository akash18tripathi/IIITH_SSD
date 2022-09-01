use CUSTOMER_DB;
delimiter &&
create procedure addTwoNumbers(in num1 int,in num2 int,out ans int)
begin
	set ans=num1+num2;
end&&
delimiter ;
set @ans=0;
call addTwoNumbers(2,3,@ans);
select @ans;
