import { Dialog, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useContext } from 'react'
import ITask from '../@types/ITask';
import AppContext from '../context/AppContext';
import IProject from '../@types/IProject';

export default function NewProject() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [tasksArray, setTasksArray] = React.useState<ITask[]>([])
    const [showTaskInput, setShowTaskInput] = React.useState<boolean>(false)
    const [newTask, setNewTask] = React.useState<ITask>({
        id: Math.floor(Math.random() * 1000).toFixed(0).toString(),
        mission: '',
        status: 'unassigned'
    })
    function handleTaskMission(event: any) {
        setNewTask({
            ...newTask,
            mission: event.target.value
        })
    }
    function handleAddNewTask() {
        setTasksArray([...tasksArray, newTask])
        setNewProject({
            ...newProject,
            tasks_ids: [...newProject.tasks_ids, newTask.id]
        })
        setShowTaskInput(false);
        setNewTask({
            id: Math.floor(Math.random() * 1000).toFixed(0).toString(),
            mission: '',
            status: 'unassigned'
        })
    }

    const { tasks, addNewProject, addNewTask_multiple } = useContext(AppContext)
    const [newProject, setNewProject] = React.useState<IProject>({
        id: Math.floor(Math.random() * 1000).toFixed(0).toString(),
        name: '',
        description: '',
        tasks_ids: [],
        image: ''
    })
    function handleInput(e: any) {
        setNewProject({
            ...newProject,
            [e.target.name]: e.target.value
        })
        console.log(newProject)
    }
    function create() {
        addNewProject?.(newProject)
        addNewTask_multiple?.(tasksArray)
        setNewProject({
            id: Math.floor(Math.random() * 1000).toFixed(0).toString(),
            name: '',
            description: '',
            tasks_ids: [],
            image: ''
        })
        handleClose()
    }

    return (
        <>
            <div className="flex flex-col items-center gap-3 justify-between rounded-xl shadow-xl bg-gradient-to-br from-primary1 to-primary2 text-neutral2 p-6">
                <i className="fa fa-rocket text-5xl"></i>
                <span className="text-center font-semibold">Get ahead with a Fresh start</span>
                <button onClick={handleClickOpen} className="flex items-center gap-2 bg-white/40 hover:bg-white/50 rounded-lg px-4 py-2">
                    <i className="fa fa-plus"></i>
                    <span className="text-sm font-semibold">New Project</span>
                </button>
            </div>
            <Dialog open={open} onClose={handleClose}>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between border-b py-3 px-6 bg-primary/20">
                        <span className="font-poppins text-center text-xl font-bold">Create New Project </span>
                        <button onClick={handleClose} className="h-6 w-6 rounded-lg bg-primary/30 grid place-items-center"><i className="fa fa-close"></i></button>
                    </div>
                    <div className="flex flex-col gap-6 p-8">
                        <div className="grid grid-cols-2 items-center gap-6">
                            <div className="-mt-2">
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    name="name"
                                    label="Project Name"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInput}
                                />
                                <TextField
                                    margin="dense"
                                    name="description"
                                    label="Description"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleInput}
                                />
                                <div className="pt-8"></div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Technology</InputLabel>
                                    <Select
                                        name="image"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={newProject.image}
                                        label="Technology"
                                        onChange={handleInput}
                                    >
                                        <MenuItem value={'react.png'}>React</MenuItem>
                                        <MenuItem value={'angular.png'}>Angular</MenuItem>
                                        <MenuItem value={'node.png'}>Nodejs</MenuItem>
                                        <MenuItem value={'python.png'}>Python</MenuItem>
                                        <MenuItem value={'csharp.png'}>C#/.NET</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="relative border border-gray-300 rounded-xl w-full h-60">
                                <span className="absolute -top-4 left-3 bg-white rounded-full border-gray-300 px-4 py-1 font-semibold">Tasks :</span>
                                <div className="grid w-full h-full place-items-center pt-6 pb-3 px-6">
                                    <div className="flex flex-col items-center gap-3 w-full h-full overflow-y-auto">
                                        {tasksArray.length === 0 ? (
                                            <span className="text-sm font-bold">EMPTY !</span>
                                        ) : (
                                            tasksArray.map((task, index) => {
                                                return (
                                                    <div key={index} className="rounded-md shadow-md w-full bg-primary/10 text-sm p-3">{task?.mission}</div>
                                                )
                                            })
                                        )}

                                        {showTaskInput ? (
                                            <div className="flex items-center gap-2">
                                                <input type="text" name="task_mission" value={newTask?.mission} onChange={handleTaskMission} className="rounded-lg border shadow-md text-xs px-2 py-1" />
                                                <button onClick={handleAddNewTask} className="w-6 h-6 shadow-md rounded-lg bg-primary text-neutral2 grid place-items-center"><i className="fa fa-check"></i></button>
                                            </div>
                                        ) : (
                                            <button onClick={() => setShowTaskInput(true)} className="flex items-center gap-2 shadow-md bg-primary text-neutral2 px-5 py-1.5 rounded-lg">
                                                <i className="fa fa-circle-plus"></i>
                                                <span className="text-xs font-bold">Add New Task</span>
                                            </button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-3 w-full">
                            {/* <button className="rounded-xl shadow-lg border-2 border-primary px-4 py-0.5">Cancel</button> */}
                            <button onClick={create} className="flex items-center gap-2 rounded-xl shadow-lg bg-gradient-to-br from-primary1 to-primary2 text-neutral2 px-4 py-2">
                                <i className="fa fa-plus"></i>
                                <span className="font-semibold">Create</span>
                            </button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
