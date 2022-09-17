const insert = `
TRUNCATE TABLE "tests", "testsDiscipline", "teachersDisciplines", disciplines, terms  RESTART IDENTITY

INSERT INTO terms ("term") VALUES (1);
INSERT INTO terms ("term") VALUES (2);
INSERT INTO terms ("term") VALUES (3);
INSERT INTO terms ("term") VALUES (4);
INSERT INTO terms ("term") VALUES (5);
INSERT INTO terms ("term") VALUES (6);

INSERT INTO disciplines ("name", "termId") VALUES ('HTML e CSS', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('JavaScript', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('React', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('Humildade', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('Planejamento', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('Autoconfiança', 3);

INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3); 
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6);`