-- Up
ALTER TABLE "Post" ADD COLUMN "link" text DEFAULT NULL;

-- Down
ALTER TABLE "Post" DROP COLUMN "link";
