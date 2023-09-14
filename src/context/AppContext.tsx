import React, { useState, useEffect, createContext, FC } from "react";
import data from "./data.json";
import { IAppContext } from "../@types/IAppContext";
import IProject from "../@types/IProject";
import IUser from "../@types/IUser";
import ITask from "../@types/ITask";

const AppContext = createContext<Partial<IAppContext>>({});
export default AppContext;

export const AppProvider = ({ children }: any) => {
  const [isSidebarOpen, setIsSidbarOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const [projects, setProjects] = useState<IProject[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getProjects();
    getTasks();
    getUsers();
  }, []);

  const toggleSidebar = () => setIsSidbarOpen(!isSidebarOpen);

  const getProjects = () => {
    setProjects(data?.projects);
  };
  const getProjectTasks = (project:IProject) => {
    return tasks.filter(task => project?.tasks_ids.includes(task?.id))
  }
  const getProjectUsers = (project:IProject) => {
    return users.filter(user => tasks?.filter(task => project?.tasks_ids.includes(task?.id)).map(task => task?.user_id).includes(user?.id))
  }
  const getProjectProgress = (project:IProject) => {
    return (tasks.filter(task => project?.tasks_ids.includes(task?.id)).length as number === 0 ? 0 : ((tasks.filter(task => project?.tasks_ids.includes(task?.id) && task?.status === "completed").length as number / tasks.filter(task => project?.tasks_ids.includes(task?.id)).length as number) * 100).toFixed(0)) as number
  }
  const addNewProject = (project:IProject) => {
    setProjects([project, ...projects]);
  };
  const editProject = (project:IProject) => {
    setProjects(projects.map((p) => p.id === project.id ? project : p));
  };
  const deleteProject = (id:string) => {
    setProjects([...projects.filter(project => project?.id !== id)]);
  };

  const getTasks = () => {
    setTasks(data?.tasks);
  };
  const getTaskUser = (task:ITask) => {
    return users.filter(user => task?.user_id && task?.user_id.includes(user?.id))[0]
  }
  const getTaskProject = (task:ITask) => {
    return projects.filter(project => project?.tasks_ids.includes(task?.id))[0]
  }
  const addNewTask = (task:ITask) => {
    setTasks([...tasks, task]);
  };
  const addNewTask_multiple = (arr:ITask[]) => {
    setTasks([...tasks, ...arr]);
  };
  const editTask = (task:ITask) => {
    setTasks(tasks.map((t) => t.id === task.id ? task : t));
  };
  const deleteTask = (id:string) => {
    setTasks([...tasks.filter(task => task?.id != id)]);
  };

  const getUsers = () => {
    setUsers(data?.users);
  };
  const getUserTasks = (user:IUser, status?:string) => {
    if (status) return tasks.filter(task => task?.user_id === user?.id && task?.status === status)
    else return tasks.filter(task => task?.user_id === user?.id)
  };
  const editUser = (user:IUser) => {
    setUsers(users.map((u) => u.id === user.id ? user : u));
  };
  const deleteUser= (id:string) => {
    setUsers([...users.filter(user => user?.id != id)]);
  };

  

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        isLoading,
        setIsLoading,
        error,
        setError,

        projects,
        getProjects,
        getProjectTasks,
        getProjectUsers,
        getProjectProgress,
        addNewProject,
        editProject,
        deleteProject,

        tasks,
        getTasks,
        getTaskUser,
        getTaskProject,
        addNewTask,
        addNewTask_multiple,
        editTask,
        deleteTask,
        
        users,
        getUsers,
        getUserTasks,
        editUser,
        deleteUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
