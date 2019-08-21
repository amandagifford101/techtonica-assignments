BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "User" (
	"ID"	TEXT,
	"Email"	TEXT
);
CREATE TABLE IF NOT EXISTS "Post" (
	"ID"	TEXT,
	"Content"	TEXT
);
INSERT INTO "User" VALUES ('moonlit101','moonlit101@gmail.com');
INSERT INTO "User" VALUES ('fiveStars66','fiveStars66@aol.com');
INSERT INTO "User" VALUES ('fiftyshades90','fiftyshades90@yahoo.com');
INSERT INTO "User" VALUES ('sobored34','sobored34@gmail.com');
INSERT INTO "User" VALUES ('sadgirl','sadgirl@gmail.com');
INSERT INTO "User" VALUES ('notsadgirl','notsadgirl@gmail.com');
INSERT INTO "User" VALUES ('tiredhun','tiredhun@gmail.com');
INSERT INTO "User" VALUES ('lowlymonk','lowlymonk@gmail.com');
INSERT INTO "User" VALUES ('datamonger','data@gmail.com');
INSERT INTO "User" VALUES ('hippodragon','hippodragon@yahoo.com');
INSERT INTO "User" VALUES ('fifu','fifu@aol.com');
INSERT INTO "Post" VALUES ('moonlit101','"This is a blog post about moons."');
INSERT INTO "Post" VALUES ('fiveStars66','"Post"');
INSERT INTO "Post" VALUES ('fiftyshades90','"this is post"');
INSERT INTO "Post" VALUES ('sobored34','"This is bleh"');
INSERT INTO "Post" VALUES ('sadgirl','so sad');
INSERT INTO "Post" VALUES ('notsadgirl','not so sad');
INSERT INTO "Post" VALUES ('tiredhun','very');
INSERT INTO "Post" VALUES ('lowlymonk','stupid');
INSERT INTO "Post" VALUES ('datamonger','data monger');
INSERT INTO "Post" VALUES ('hippodragon','scary stuff');
INSERT INTO "Post" VALUES ('fifu','sdfa');
INSERT INTO "Post" VALUES ('moonlit101','sdgag');
INSERT INTO "Post" VALUES ('fiveStars66','sadf');
INSERT INTO "Post" VALUES ('fiftyshades90','sadg');
INSERT INTO "Post" VALUES ('sobored34','hgfg');
INSERT INTO "Post" VALUES ('sadgirl','sfg');
INSERT INTO "Post" VALUES ('notsadgirl','jhgf');
INSERT INTO "Post" VALUES ('tiredhun','fghj');
INSERT INTO "Post" VALUES ('lowlymonk','fghjsdfg');
INSERT INTO "Post" VALUES ('datamonger','hfds');
INSERT INTO "Post" VALUES ('hippodragon','dfg');
INSERT INTO "Post" VALUES ('fifu','select * 
from post
');
COMMIT;
