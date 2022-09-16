-- CreateTable
CREATE TABLE "testsDiscipline" (
    "id" SERIAL NOT NULL,
    "testId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "testsDiscipline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "testsDiscipline" ADD CONSTRAINT "testsDiscipline_testId_fkey" FOREIGN KEY ("testId") REFERENCES "tests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "testsDiscipline" ADD CONSTRAINT "testsDiscipline_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
