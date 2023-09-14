import ITask from "./ITask";

export default interface IProject {
    id: string,
    name: string,
    description: string,
    tasks_ids: string[],
    image?: string
}