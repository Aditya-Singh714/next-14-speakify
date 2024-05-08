import { auth } from "@clerk/nextjs"

const adminIds = [
    "user_2eXPZYVMUGCt5ExsV5urFzAWkH0",
]

export const isAdmin = () => {
    const { userId } = auth();

    if(!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};