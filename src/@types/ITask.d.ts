import IUser from "./IUser";

export default interface ITask {
    id: string,
    mission: string,
    user_id?: string,
    status: string
}