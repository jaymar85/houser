  --CREATING TABLE houses
CREATE TABLE houses (
house_id SERIAL PRIMARY KEY,
property_name VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
state VARCHAR(2) NOT NULL,
zip INTEGER NOT NULL
);


--INSERTING DUMMY DATA
INSERT INTO houses
(property_name, address, city, state, zip)
VALUES
('Monica Geller Apartment', '495 Grove Street', 'New York', 'NY', 10014),
('Ross Geller Apartment', '17 Grove Street', New York, 'NY' 10014),
('Jerry Seinfeld Apartment', '129 W 81st St, New York', 'NY' 10024),
('Single Family Residential', '3913 Iron Horse Rd', 'Raleigh', 'NC', 27616),
('Single Family Residential', '6141 SW 48th St', 'Miami', 'FL', 33155);