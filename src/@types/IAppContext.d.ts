import IProject from "./IProject";
import ITask from "./ITask";
import IUser from "./IUser";

export interface IAppContext {
  isSidebarOpen: boolean;
  toggleSidebar?: () => void;
  isLoading: boolean;
  setIsLoading?: (value) => void;
  error: any;
  setError?: (e:any) => void;

  projects: IProjects[];
  getProjects: () => void;
  getProjectTasks: (project:IProject) => ITask[];
  getProjectUsers: (project:IProject) => IUser[];
  getProjectProgress: (project:IProject) => number;
  addNewProject: (project:IProject) => void;
  editProject: (project:IProject) => void;
  deleteProject: (id:string) => void;

  tasks: ITask[];
  getTasks: () => void;
  getTaskUser: (task:ITask) => IUSer;
  getTaskProject: (task:ITask) => IProject;
  addNewTask: (task:ITask) => void;
  addNewTask_multiple: (arr:ITask[]) => void;
  editTask: (task:ITask) => void;
  deleteTask: (id:string) => void;

  users: IUser[];
  getUsers: () => void;
  getUserTasks: (user:IUser, status?:string) => ITask[];
  editUser: (user:IUser) => void;
  deleteUser: (id:string) => void
}
