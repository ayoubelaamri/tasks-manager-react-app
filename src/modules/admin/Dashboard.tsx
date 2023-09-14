import React, { Component, useContext } from 'react'
import LineChart from '../../components/charts/LineChart'
import { Accordion, AccordionDetails, AccordionSummary, Fade, Menu, MenuItem } from '@mui/material'
import PieChart from '../../components/charts/PieChart'
import AppContext from '../../context/AppContext'
import NewProject from '../../components/NewProject'
import { Link } from 'react-router-dom'
import IProject from '../../@types/IProject'

export default function Dashboard() {
  const { projects, tasks, users, getProjectUsers, getProjectProgress, deleteProject } = useContext(AppContext)

  return (
    <>
      {/* Page Title */}
      <div className="flex items-center">
        <div className="absolute -top-0 left-40 flex items-center justify-center gap-3 h-[55px] border-b-4 border-primary pl-6 pr-8">
          <i className="fa fa-chart-pie" />
          <span className="text-xl font-bold font-poppins">Dashboard</span>
        </div>
      </div>
      <div className='flex flex-col gap-6 w-full h-full'>
        <div className="grid grid-cols-4 gap-6 w-full">
          {/* Start New Project Button */}
          <NewProject />
          {/* Tasks Summary */}
          <div className="col-span-3 grid grid-cols-3 rounded-xl shadow-xl bg-white/75 border border-gray-300 px-6 py-3">
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2 font-semibold text-sm"><i className="fa-solid fa-chart-column"></i>Tasks Summary</div>
              <div className="grid grid-cols-3 gap-5 h-full w-full pr-6">
                <div className="overflow-hidden grid place-items-center relative h-full rounded-lg shadow-lg bg-gradient-to-br from-primary1/50 to-primary2/50 text-neutral2">
                  <i className="absolute -top-1 -left-0 fa fa-suitcase text-7xl text-neutral2/30"></i>
                  <span className="absolute top-4 right-3 text-3xl font-bold">{tasks && tasks.length as number}</span>
                  <span className="pt-16 py-3 text-sm font-semibold text-center">All Tasks</span>
                </div>
                <div className="overflow-hidden grid place-items-center relative h-full rounded-lg shadow-lg bg-gradient-to-br from-primary1/75 to-primary2/75 text-neutral2">
                  <i className="absolute -top-1 -left-0 fa fa-hourglass-half text-7xl text-neutral2/30"></i>
                  <span className="absolute top-4 right-3 text-3xl font-bold">{tasks && tasks.filter(task => task?.status === "inprogress").length as number}</span>
                  <span className="pt-16 py-3 text-sm font-semibold text-center">In Progress</span>
                </div>
                <div className="overflow-hidden grid place-items-center relative h-full rounded-lg shadow-lg bg-gradient-to-br from-primary1 to-primary2 text-neutral2">
                  <i className="absolute -top-5 -left-3 fa fa-check-circle text-8xl text-neutral2/30"></i>
                  <span className="absolute top-4 right-3 text-3xl font-bold">{tasks && tasks.filter(task => task?.status === "completed").length as number}</span>
                  <span className="pt-16 py-3 text-sm font-semibold text-center">Completed</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 pr-10">
                <span className="text-sm font-semibold text-gray-500">On time Completion rate :</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">94 %</span>
                  <span className="font-semibold text-xs px-3 py-1 rounded-lg bg-green-400/30"><i className="fa fa-caret-up"></i> 10 %</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-l border-gray-300 pl-6">
              <div className="flex items-center gap-2 font-semibold text-sm"><i className="fa-solid fa-chart-column"></i>Distribution</div>
              {tasks && (
                <div className="-ml-6 -mt-2"><PieChart data={[tasks.filter(task => task?.status === "unassigned").length as number, tasks.filter(task => task?.status === "assigned").length as number, tasks.filter(task => task?.status === "inprogress").length as number, tasks.filter(task => task?.status === "completed").length as number]} /></div>
              )}
            </div>
          </div>
        </div>
        {/* My Projects */}

        <div className="flex flex-col gap-3 h-full">
          <div className="flex items-center justify-between px-6">
            <span className="text-sm font-bold">My Projects</span>
            <Link to='/admin/tasks-list' className="flex items-center gap-2 text-xs font-semibold hover:text-primary">
              More Details <i className="fa fa-chevron-right"></i>
            </Link>
          </div >
          <div className="grid h-full">
            {projects && projects.length === 0 ? (
              <div className="grid place-items-center w-full h-full rounded-lg bg-primary/10 border border-dashed border-primary">EMPTY !</div>
            ) : (
              <div className="flex flex-col gap-2 gap- w-full">
                {projects && projects.map((project: any, index: number) => {
                  return (
                    <div key={index} className="grid grid-cols-6 pl-6 py-3 rounded-lg shadow-md bg-primary/10 border border-gray-300">
                      <Link to={'/admin/tasks-list/' + project.id} className="col-span-3 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg shadow-md bg-white p-2">
                          {project?.image && (<img src={require('../../assets/images/icons/' + project?.image)} alt="" className="" />)}
                        </div>
                        <div className="grid">
                          <span className="font-semibold">Project : {project?.name}</span>
                          <span className="text-sm">{project?.description}</span>
                        </div>
                      </Link>
                      <div className="flex justify-center -space-x-4 w-40">
                        {getProjectUsers?.(project).map((user, index) => {
                          if (index < 3) return (
                            user?.avatar ? (
                              <img key={index} className="w-10 h-10 border-2 border-white rounded-full" src={require("../../assets/images/avatars/" + user?.avatar)} alt="" />
                            ) : (
                              <div key={index} className="w-10 h-10 border-2 border-white shadow-md rounded-full grid place-items-center font-semibold bg-primary/30 px-3">{user?.name.charAt(0)}</div>
                            )
                          )
                        })}
                        {getProjectUsers?.(project) && getProjectUsers?.(project).length > 3 && (
                          <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600" href="#">+{getProjectUsers?.(project) && getProjectUsers?.(project).length - 3}</a>
                        )}
                      </div>
                      <div className="col-span-2 flex items-center justify-center gap-6">
                        <div className="grid gap-1 -mb-3">
                          <div className="flex items-center justify-between text-sm font-medium">
                            <span className="">Progress</span>
                            <span className="">{getProjectProgress?.(project)}%</span>
                          </div>
                          <div className="w-40 bg-white rounded-full shadow-md h-2.5 mb-4">
                            <div className={`bg-primary h-2.5 rounded-full`} style={{ width: getProjectProgress?.(project) + "%" }}></div>
                          </div>
                        </div>
                        <MenuItemComponent project={project} />
                      </div>

                    </div>
                  )
                })}
              </div>
            )}
          </div>

        </div >

      </div >
    </>
  )
}

function MenuItemComponent(props: { project: IProject }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { projects, deleteProject, deleteTask } = useContext(AppContext)
  function handleDeleteProject(id: string) {
    deleteProject?.(id)
    projects?.find(p => p.id === id).tasks_ids.map((task_id:string) => {
      deleteTask?.(task_id) 
    })
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
        <MenuItem onClick={() => handleDeleteProject(props.project.id)}>
          <div className="flex items-center gap-2">
            <i className="fa fa-trash"></i>
            Delete
          </div>
        </MenuItem>
      </Menu>
    </>
  )
}

