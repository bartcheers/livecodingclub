/*
  Warnings:

  - Added the required column `link` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- Up
ALTER TABLE "Post" ADD COLUMN "link" text DEFAULT '';

-- Down
ALTER TABLE "Post" DROP COLUMN "link";
