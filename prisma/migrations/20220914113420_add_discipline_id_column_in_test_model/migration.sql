/*
  Warnings:

  - Added the required column `disciplineId` to the `tests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tests" ADD COLUMN     "disciplineId" INTEGER NOT NULL;
