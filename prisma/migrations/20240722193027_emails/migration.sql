-- CreateTable
CREATE TABLE "AdminMessages" (
    "id" TEXT NOT NULL,
    "fromEmail" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "AdminMessages_pkey" PRIMARY KEY ("id")
);
