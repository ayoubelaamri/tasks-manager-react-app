import IUser from "./IUser";

export default interface ITask {
    id: string,
    description: string,
    assignedUser?: IUser,
}