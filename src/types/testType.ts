import { Test } from "@prisma/client";

type testDataType = Omit<Test, "id">
export default testDataType