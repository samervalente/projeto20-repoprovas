import {User} from "@prisma/client"

type userDataType = Omit<User,"id">
export default userDataType

