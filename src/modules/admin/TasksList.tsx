import { Menu, MenuItem, Tooltip } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext'
import ITask from '../../@types/ITask'
import AssignUser from '../../components/AssignUser'
import IProject from '../../@types/IProject'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import IUser from '../../@types/IUser'
import NewTask from '../../components/NewTask'

export default function TasksList() {
  const { selected_id } = useParams()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const statusList: string[] = ['unassigned', 'assigned', 'inprogress', 'completed']

  const { projects, getProjectTasks, getProjectUsers, getProjectProgress, tasks, getTaskProject, editTask, deleteTask, users } = useContext(AppContext)

  function markAs(task: ITask, status: string) {
    editTask?.({
      ...task,
      status: status
    })
  }

  const [selectedProject, setSelectedProject] = React.useState<IProject | null>(null)
  const [filteredTasks, setFilteredTasks] = React.useState<ITask[]>()

  useEffect(() => {
    setFilteredTasks(tasks)
    selected_id && setSelectedProject(projects?.find(project => project.id === selected_id))
  }, [tasks])

  const navigate = useNavigate()
  useEffect(() => {
    if (selectedProject) {
      setFilteredTasks(getProjectTasks?.(selectedProject) as ITask[])
      navigate('/admin/tasks-list/' + selectedProject.id)
    } else {
      setFilteredTasks(tasks)
      navigate('/admin/tasks-list')
    }
  }, [selectedProject, tasks])

  return (
    <>
      {/* Page Title */}
      <div className="flex items-center">
        <div className="absolute -top-0 left-40 flex items-center justify-center gap-3 h-[55px] border-b-4 border-primary pl-6 pr-8">
          <i className="fa fa-list-check" />
          <span className="text-xl font-bold font-poppins">Tasks Workflow</span>
        </div>
      </div>

      <div className="flex flex-col gap-0">
        {/* Filter */}
        <div className={`flex items-center justify-center gap-0`}>
          <button onClick={() => setSelectedProject(null)} className={`rounded-l-lg shadow-md px-5 py-4 flex items-center gap-2 h-full ${selectedProject === null ? "bg-gradient-to-br from-primary1 to-primary2 text-neutral2" : "bg-white/75"}`}>
            <div className="w-6 h-6 rounded-lg shadow-md bg-white p-0.5">
              <i className={`fa fa-minus ${selectedProject === null && "fa-check text-primary"}`}></i>
            </div>
            <div className="grid">
              <span className="font-semibold">ALL</span>
            </div>
          </button>
          <div className="flex items-center gap-3 w-[calc(100vw-45em)] overflow-auto pt-3 pb-4 px-4 shadow-md rounded-r-lg bg-white/75">
            {projects && projects.map((project, index) => {
              return (
                <button key={index} onClick={() => setSelectedProject(project)} className={`rounded-lg shadow-md px-3 py-2 flex items-center gap-2 ${selectedProject === project ? "bg-gradient-to-br from-primary1 to-primary2 text-neutral2" : "bg-primary/10"}`}>
                  <div className="w-6 h-6 rounded-lg shadow-md bg-white p-0.5">
                    {project?.image && (<img src={require('../../assets/images/icons/' + project?.image)} alt="" className="" />)}
                  </div>
                  <div className="grid">
                    <span className="font-semibold">{project?.name || '--'}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
        {/* Selected Project Details */}
        {selectedProject && (
          <div className="w-[calc(100vw-39em)] mx-auto grid grid-cols-11 pl-6 py-3 mt-0.5 rounded-lg shadow-md bg-primary/10 border-t-2 border-primary">
            <div className="col-span-5 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg shadow-md bg-white p-2">
                {selectedProject?.image && (<img src={require('../../assets/images/icons/' + selectedProject?.image)} alt="" className="" />)}
              </div>
              <div className="grid">
                <span className="font-semibold">Project : {selectedProject?.name}</span>
                <span className="text-sm">{selectedProject?.description}</span>
              </div>
            </div>
            <div className="col-span-2 flex justify-center -space-x-4 w-40">
              {getProjectUsers?.(selectedProject).map((user, index) => {
                if (index < 3) return (
                  user?.avatar ? (
                    <img key={index} className="w-10 h-10 border-2 border-white rounded-full" src={require("../../assets/images/avatars/" + user?.avatar)} alt="" />
                  ) : (
                    <div key={index} className="w-10 h-10 border-2 border-white shadow-md rounded-full grid place-items-center font-semibold bg-primary/30 px-3">{user?.name.charAt(0)}</div>
                  )
                )
              })}
              {getProjectUsers?.(selectedProject) && getProjectUsers?.(selectedProject).length > 3 && (
                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600" href="#">+{getProjectUsers?.(selectedProject) && getProjectUsers?.(selectedProject).length - 3}</a>
              )}
            </div>
            <div className="col-span-4 flex items-center justify-center gap-6">
              <div className="grid gap-1 -mb-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span className="">Progress</span>
                  <span className="">{getProjectProgress?.(selectedProject)}%</span>
                </div>
                <div className="w-40 bg-white rounded-full shadow-md h-2.5 mb-4">
                  <div className={`bg-blue-600 h-2.5 rounded-full dark:bg-primary`} style={{ width: getProjectProgress?.(selectedProject) + "%" }}></div>
                </div>
              </div>
              <NewTask project={selectedProject} />
            </div>

          </div>
        )}
        {/* Tasks List */}
        <div className='grid grid-cols-4 gap-3 w-full h-full pt-6'>
          {statusList.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-3">
                <div className={`flex items-center justify-between gap-3 w-full rounded-lg shadow-md ${item === "unassigned" && "bg-primary/75"} ${item === "assigned" && "bg-blue-500/75"} ${item === "inprogress" && "bg-yellow-500/75"} ${item === "completed" && "bg-green-500/75"} text-neutral2 p-3`}>
                  <span className="font-semibold text-sm">{item} - ({filteredTasks && filteredTasks.filter(task => task?.status === item).length})</span>
                  <i className={`fa ${item === "unassigned" && "fa-user-large-slash"} ${item === "assigned" && "fa-user"} ${item === "inprogress" && "fa-hourglass-half"} ${item === "completed" && "fa-check-circle"}`}></i>
                </div>
                {filteredTasks && filteredTasks.filter(task => task?.status === item).length === 0 ? (
                  <div className="grid place-items-center w-full h-full rounded-lg bg-primary/10 border border-dashed border-primary"></div>
                ) : (
                  <div className="flex flex-col gap-1 w-full h-full rounded-lg bg-primary/10 border border-dashed border-primary p-1">
                    {filteredTasks && filteredTasks.filter(task => task?.status === item).map((task, index) => {
                      return (
                        <div key={index} className="flex flex-col gap-2 rounded-lg shadow-lg bg-white/75 border border-gray-200 w-full p-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold">#{task?.id} - ({getTaskProject?.(task)?.name})</span>
                            {/* <button className=""><i className="fa-solid fa-ellipsis"></i></button> */}
                            <MenuItemComponent task={task} />
                          </div>
                          <p className="text-xs">{task?.mission}</p>
                          <div className="flex justify-between">
                            {item === 'unassigned' && (
                              <>
                                <div className=""></div>
                                <AssignUser task={task} />
                              </>
                            )}
                            {item === 'assigned' && (
                              <>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => markAs(task, "unassigned")} className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-primary1 to-primary2 text-neutral2 rounded-lg px-3 py-1.5">
                                    <i className="fa-solid fa-user-large-slash"></i>
                                  </button>
                                  <button onClick={() => markAs(task, "inprogress")} className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-blue-500 to-blue-400 text-neutral2 rounded-lg px-3 py-1">
                                    {/* <i className="fa-solid fa-user-plus"></i> */}
                                    Start
                                  </button>
                                </div>
                                <div className="relative -mt-4 pr-3">
                                  <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/'+users?.find((user:IUser) => user?.id === task.user_id)?.avatar as string)} alt="" ></img>
                                  <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                              </>
                            )}
                            {item === 'inprogress' && (
                              <>
                                {/* <button onClick={() => markAs(task, "completed")} className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-yellow-500 to-yellow-400 text-neutral2 rounded-lg px-3 py-1">
                                  Mark Complete
                                </button> */}
                                <div className="flex items-center gap-2">
                                  <button onClick={() => markAs(task, "assigned")} className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-blue-500 to-blue-400 text-neutral2 rounded-lg px-3 py-1.5">
                                    {/* <i className="fa-solid fa-user-large-slash"></i> */}
                                    <div className="w-3 h-3 bg-neutral2"></div>
                                  </button>
                                  <button onClick={() => markAs(task, "completed")} className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-yellow-500 to-yellow-400 text-neutral2 rounded-lg px-3 py-1">
                                    {/* <i className="fa-solid fa-user-plus"></i> */}
                                    Done
                                  </button>
                                </div>
                                <div className="relative -mt-4 pr-3">
                                  <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/8.jpg')} alt="" ></img>
                                  <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                              </>
                            )}
                            {item === 'completed' && (
                              <>
                                <div className="flex items-center gap-2 text-xs font-semibold border-2 border-green-500 text-green-500 rounded-lg px-3 py-1">
                                  <i className="fa-solid fa-check"></i>
                                  Completed
                                </div>
                                <div className="relative -mt-4 pr-3">
                                  <img className="w-10 h-10 border-2 border-white shadow-md rounded-full" src={require('../../assets/images/avatars/8.jpg')} alt="" ></img>
                                  <span className="bottom-0 left-7 absolute w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"></span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}

        </div>
      </div>
    </>
  )
}

function MenuItemComponent(props: { task: ITask }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { deleteTask } = useContext(AppContext)
  function handleDeleteTask(id: string) {
    deleteTask?.(id)
    handleClose()
  }
  return (
    <>
      <button
        className="w-6 h-6 rounded-lg bg-white/30 grid place-items-center"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      // TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <div className="flex items-center gap-2">
            <i className="fa fa-edit"></i>
            Edit
          </div>
        </MenuItem>
        <MenuItem onClick={() => handleDeleteTask(props.task.id)}>
          <div className="flex items-center gap-2">
            <i className="fa fa-trash"></i>
            Delete
          </div>
        </MenuItem>
      </Menu>
    </>
  )
}
