Create Table USERS (
    ID int,
    UID varchar(255),
    First_Name varchar(255),
    Last_name varchar(255),
    Email varchar(255),
    Registration_Done binary default 0,
    Admin binary default 0,
)