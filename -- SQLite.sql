-- SQLite
CREATE TABLE card (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cardQuestion TEXT,
    cardAnswer TEXT
);

INSERT INTO card (cardQuestion, cardAnswer)
VALUES ("君の＿です。", "ファン");

SELECT * FROM deck

INSERT INTO user (email, username, passwordHash)
VALUES ("water@gmail.com, Teo1221, hey");
UPDATE table_name
SET column1 = new_value1
DROP TABLE card