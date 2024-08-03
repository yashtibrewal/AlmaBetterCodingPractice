use sampledb;

select * from employees join departments;

show tables;

show create table customer;

alter table customer
drop constraint minimum_age_check;

select * from customer;

alter table customer
add constraint minimum__age_check check(age>=18);

select * from customer order by location;

alter table customer
add column phone_number  int unique;

update customer set phone_number = 887 where name = "Yash";