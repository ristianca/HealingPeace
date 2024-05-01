Create Table USERS (
    ##Primary ID
    ID int,
    ##Permissions based ID associated with user
    UID varchar(255),
    First_Name varchar(255),
    Last_name varchar(255),
    Email varchar(255),
    ##For redirect purposes 
    Registration_Done binary default 0,
    ## To check if this an admin user
    Admin binary default 0,
)