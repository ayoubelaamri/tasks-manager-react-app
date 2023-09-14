import { Dialog } from '@mui/material';
import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import IUser from '../@types/IUser';
import ITask from '../@types/ITask';

export default function AssignUser(props: { task: ITask }) {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setSelectedUser(null)
        setOpen(false);
    };

    const { users,editTask } = useContext(AppContext)

    const [selectedUser, setSelectedUser] = React.useState<IUser | null>(null)
    
    function assignUser() {
        selectedUser && editTask?.({
            ...props.task,
            user_id: selectedUser.id,
            status: "assigned"
        })
        handleClose();
    }

    return (
        <div>
            <button onClick={handleClickOpen} className="flex items-center gap-2 text-xs font-semibold bg-gradient-to-br from-primary1 to-primary2 text-neutral2 rounded-lg px-3 py-1">
                <i className="fa-solid fa-user-plus"></i>
                Assigne user
            </button>
            <Dialog open={open} onClose={handleClose}>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between border-b py-3 px-6 bg-primary/20">
                        {!selectedUser ? (
                            <span className="font-poppins text-center text-xl font-bold">Assign a user to task  #{props.task.id} </span>
                        ) : (
                            <button onClick={assignUser} className="bg-gradient-to-br from-primary1 to-primary2 text-neutral2 rounded-xl px-4 py-1 flex items-center gap-2">
                                <i className="fa fa-check"></i>
                                <span className="text-sm font-semibold">Confirm</span>
                            </button>
                        )}
                        <button onClick={handleClose} className="h-6 w-6 rounded-lg bg-primary/30 grid place-items-center"><i className="fa fa-close"></i></button>
                    </div>
                    <div className="flex flex-col gap-0 px-6 py-3 w-[400px] h-[calc(100vh-10em)] overflow-y-auto">
                        {users && users.map((user, index) => {
                            return (
                                <button key={index} onClick={() => setSelectedUser(user)} className={`flex items-center rounded-lg hover:bg-primary/10 p-3 hover:shadow-lg ${selectedUser === user && "bg-primary/10 shadow-lg border"}`}>
                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                        {user?.avatar ? (
                                            <img className="rounded-xl shadow-md" src={require('../assets/images/avatars/' + user?.avatar)} width="40" height="40" alt="Alex Shatov" />
                                        ) : (
                                            <div className="border-2 border-white shadow-md rounded-xl grid place-items-center font-semibold bg-primary/30 px-3 py-2">{user?.name.charAt(0)}</div>
                                        )}
                                    </div>
                                    <div className="grid text-left">
                                        <span className="font-medium text-gray-800">{user?.name}</span>
                                        <span className="text-xs font-light text-gray-800">{user?.role}</span>
                                    </div>
                                </button>
                            )
                        })}

                    </div>
                </div>
            </Dialog>
        </div>
    )
}
