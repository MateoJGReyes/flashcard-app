-- SQLite
CREATE TABLE card (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    cardQuestion TEXT,
    cardAnswer TEXT
);

INSERT INTO card (cardQuestion, cardAnswer)
VALUES ("君の＿です。", "ファン");

SELECT * FROM deck

INSERT INTO deck (deckName)
VALUES ("Japanese N1"),
("Computer Science"),
("Review"),
("Placeholder #1"),
("Placeholder #2");

DROP TABLE card