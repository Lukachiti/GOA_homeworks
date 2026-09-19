-- CRUD არის Create, Read, Update, Delete.

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL
);

INSERT INTO users (name, age) VALUES ('Ben dover', 30);

SELECT * FROM users;

SELECT name FROM users WHERE age > 18;


UPDATE users SET name = 'mike hawk' WHERE id = 1;

DELETE FROM users WHERE id = 1;

