import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

export default function TeamMembers() {
  const { users, getUserTasks } = useContext(AppContext)

  return (
    <>
      {/* Page Title */}
      <div className="flex items-center">
        <div className="absolute -top-0 left-40 flex items-center justify-center gap-3 h-[55px] border-b-4 border-primary pl-6 pr-8">
          <i className="fa fa-people-group" />
          <span className="text-xl font-bold font-poppins">Team Members</span>
        </div>
      </div>
      <div className="w-full mx-auto shadow-lg rounded-lg border border-gray-200 bg-white/75">
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xs font-semibold uppercase text-neutral2 bg-gradient-to-br from-primary1/75 to-primary2/75 ">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Email</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Tasks</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Completed</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center"></div>
                  </th>
                </tr>
              </thead>
              {users && users.length === 0 ? (
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr className="">
                    <td colSpan={5} className="p-2 whitespace-nowrap">
                      <div className="grid place-items-center w-full h-full rounded-lg bg-primary/10 border border-dashed border-primary p-6">EMPTY !</div>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody className="text-sm divide-y divide-gray-100">
                  {users && users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              {user?.avatar ? (
                                <img className="rounded-xl" src={require('../../assets/images/avatars/' + user?.avatar)} width="40" height="40" alt="Alex Shatov" />
                              ) : (
                                <div className="border-2 border-white shadow-md rounded-xl grid place-items-center font-semibold bg-primary/30 px-3 py-2">{user?.name.charAt(0)}</div>
                              )}
                            </div>
                            <div className="grid">
                              <span className="font-medium text-gray-800">{user?.name}</span>
                              <span className="text-xs font-light text-gray-800">{user?.role}</span>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{user?.email}</div>
                          <div className="text-left text-xs">Last active : 2 hours ago</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="grid place-items-center text-left font-medium text-primary-500">{getUserTasks?.(user).length}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="grid place-items-center text-left font-medium text-green-500">{getUserTasks?.(user, "completed").length}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <button className="w-6 h-6 grid place-items-center bg-primary/10 rounded-lg">
                              <i className="fa fa-file-circle-plus text-primary"></i>
                            </button>
                            <button className="w-6 h-6 grid place-items-center bg-primary/10 rounded-lg">
                              <i className="fa fa-edit text-blue-500"></i>
                            </button>
                            <button className="w-6 h-6 grid place-items-center bg-primary/10 rounded-lg">
                              <i className="fa fa-trash text-red-500"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}

                </tbody>
              )}

            </table>
          </div>
        </div>
      </div >
    </>
  )
}
