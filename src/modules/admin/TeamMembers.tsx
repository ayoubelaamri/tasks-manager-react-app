import React from 'react'

export default function TeamMembers() {
  return (
    <div>
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
              <tbody className="text-sm divide-y divide-gray-100">
                {[1, 2, 3, 5, 6, 7, 8].map((item: any) => {
                  return (
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img className="rounded-xl" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov" />
                          </div>
                          <div className="grid">
                            <span className="font-medium text-gray-800">Alex Shatov</span>
                            <span className="text-xs font-light text-gray-800">Project Manager</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">alexshatov@gmail.com</div>
                        <div className="text-left text-xs">Last active : 2 hours ago</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-primary-500">23</div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">17</div>
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
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
