-- CreateTable
CREATE TABLE "Reaction" (
    "id" TEXT NOT NULL,
    "emojis" JSONB NOT NULL,

    CONSTRAINT "Reaction_pkey" PRIMARY KEY ("id")
);
