import { Test } from "@prisma/client";

type testDataType = Omit<Test, "Id">
export default testDataType