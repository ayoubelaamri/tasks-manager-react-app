import { Dialog, Tooltip } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import React, { useContext } from 'react'
import ITask from '../@types/ITask';
import AppContext from '../context/AppContext';
import IProject from '../@types/IProject';

export default function NewTask(props: {project:IProject}) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const { addNewTask, editProject } = useContext(AppContext)
    const [newTask, setNewTask] = React.useState<ITask>({
        id: Math.floor(Math.random() * 1000).toFixed(0).toString(),
        mission: '',
        status: 'unassigned'
    })
    function handleMissionChange(event: any) {
        setNewTask({
            ...newTask,
            mission: event.target.value
        })
    }
    function create() {
        addNewTask?.(newTask)
        editProject?.({
            ...props.project,
            tasks_ids: [...props.project.tasks_ids, newTask.id]
        })
        setNewTask({
            id: Math.floor(Math.random() * 1000).toFixed(0).toString(),
            mission: '',
            status: 'unassigned'
        })
        handleClose()
    }

    return (
        <>
            <Tooltip title="New Task" placement='bottom' arrow>
                <button
                    onClick={handleClickOpen}
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary1 to-primary2 text-neutral2 grid place-items-center"
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between border-b py-3 px-6 bg-primary/20">
                        <span className="font-poppins text-center text-xl font-bold">Create New Task </span>
                        <button onClick={handleClose} className="h-6 w-6 rounded-lg bg-primary/30 grid place-items-center"><i className="fa fa-close"></i></button>
                    </div>
                    <div className="flex flex-col gap-6 p-8">
                        <div className="">
                            <Textarea
                                color="neutral"
                                disabled={false}
                                minRows={2}
                                size="lg"
                                variant="soft"
                                placeholder="Type mission here .."
                                onChange={handleMissionChange}
                            />
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
