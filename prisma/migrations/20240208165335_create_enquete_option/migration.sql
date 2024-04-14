/*
  Warnings:

  - You are about to drop the `Votacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Votacao";

-- CreateTable
CREATE TABLE "Enquete" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Enquete_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnqueteOption" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "enqueteId" TEXT NOT NULL,

    CONSTRAINT "EnqueteOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EnqueteOption" ADD CONSTRAINT "EnqueteOption_enqueteId_fkey" FOREIGN KEY ("enqueteId") REFERENCES "Enquete"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
